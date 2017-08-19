/**
 * 左右划动的容器
 * props:
 * onRowPress => function, 点击本行触发的函数
 * activeOpacity => number, 点击的透明度, 默认0.8,
 * underlayColor => string, 点击显示的底色, 默认'#999999',
 * disableSwipe => bool, 能否滑动
 * disableLeftSwipe => bool, 能否左划
 * disableRightSwipe => bool, 能否右划
 * stopLeftSwipe => number, 左侧停止距离
 * stopRightSwipe => number, 右侧停止距离
 * leftOpenValue => number, 左侧菜单打开距离 默认0 正数
 * RightOpenValue => number, 右侧菜单打开距离 默认0 负数
 * onRowOpen => function, row打开调用的函数
 * onRowClose => function, row关闭调用的函数
 * onRowDidOpen => function, 当row打开完成调用的函数
 * onRowDidClose => function, 当row关闭完成调用的函数
 * onRowMove => function, 当row移动
 * onRowEnd => function, 手指移动结束，离开屏幕
 * friction => number, 动画的摩擦力值
 * tension => number, 弹跳的速度值
 * this.props.children[0] => 位于内容之下,左右滑动显示
 * this.props.children[1] => 内容,左右滑动显示
 *  <SwipeRow>
 *  <View style={hiddenRowStyle} />
 *  <View style={visibleRowStyle} />
 *  </SwipeRow>
 */
import React, {
    Component,
    PropTypes,
} from 'react';
import {
    Animated,
    PanResponder,
    Platform,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    View
} from 'react-native';

class SwipeRow extends Component {

    constructor(props) {
        super(props);
        this.horizontalSwipeGestureBegan = false;
        this.swipeInitialX = null;
        this.parentScrollEnabled = true;
        this._translateX = new Animated.Value(0);
        this.clickCapture = false;
        // ref指定改组件后直接修改这些值 不建议直接修改 会造成状态混乱
        this.disableSwipe = this.props.disableSwipe;
        this.disableLeftSwipe = this.props.disableLeftSwipe;
        this.disableRightSwipe = this.props.disableRightSwipe;
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.disableSwipe != undefined){
            this.disableSwipe = nextProps.disableSwipe;
        }
        if(nextProps.disableLeftSwipe != undefined){
            this.disableLeftSwipe = nextProps.disableLeftSwipe;
        }
        if(nextProps.disableRightSwipe != undefined){
            this.disableRightSwipe = nextProps.disableRightSwipe;
        }
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponderCapture: (e) => this.handleOnStartShouldSetPanResponder(e), // 当前视图劫持触摸事件
            onStartShouldSetPanResponder: (e) => this.handleOnStartShouldSetPanResponder(e), // 触摸是否成为响应者
            onPanResponderStart: (e) => this.onRowStart(),
            onMoveShouldSetPanResponder: (e, gs) => this.handleOnMoveShouldSetPanResponder(e, gs), // 当触摸移动是否成为响应者
            onPanResponderMove: (e, gs) => this.handlePanResponderMove(e, gs), // 开始移动
            onPanResponderRelease: (e, gs) => this.handlePanResponderEnd(e, gs), // 移动结束，松开触摸点
            onPanResponderTerminate: (e, gs) => this.handlePanResponderEnd(e, gs), // 另一个组件成为新的响应者，当前手势取消
            // onShouldBlockNativeResponder: _ => false, // 当前组件是否应该阻止原生组件成为JS响应者
        });
        if(this.props.clickCapture){
            this.clickCapture = this.props.clickCapture;
        }
    }

    onRowStart() {
        if (this.props.onRowStart) {
            this.props.onRowStart();
        } else {
            if (this.props.closeOnRowPress){
                this.closeRow();
            }
        }
    }

    onRowPress() {
        this.props.onRowPress && this.props.onRowPress();
    }

    handleOnStartShouldSetPanResponder(e){
        if(typeof this.clickCapture === 'function'){
            return this.clickCapture();
        }else{
            return this.clickCapture;
        }
    }

    handleOnMoveShouldSetPanResponder(e, gs) {
        // alert(this.handleOnStartShouldSetPanResponder());
        if(this.handleOnStartShouldSetPanResponder()){
            return false;
        }
        if(!this.disableSwipe){
            const { dx } = gs;
            return Math.abs(dx) > this.props.directionalDistanceChangeThreshold;
        }else{
            return false;
        }
    }

    handlePanResponderMove(e, gestureState) {
        if(this.handleOnStartShouldSetPanResponder()){
            return false;
        }

        const { dx, dy } = gestureState;
        const absDx = Math.abs(dx);
        const absDy = Math.abs(dy);

        // this check may not be necessary because we don't capture the move until we pass the threshold
        // just being extra safe here
        if (absDx > this.props.directionalDistanceChangeThreshold || absDy > this.props.directionalDistanceChangeThreshold) {
            // we have enough to determine direction
            if (absDy > absDx && !this.horizontalSwipeGestureBegan) {
                // user is moving vertically, do nothing, listView will handle
                return;
            }

            // user is moving horizontally
            if (this.parentScrollEnabled) {
                // disable scrolling on the listView parent
                this.parentScrollEnabled = false;
                // 开始移动
                this.props.onRowMove && this.props.onRowMove();
                this.props.setScrollEnabled && this.props.setScrollEnabled(false);
            }

            if (this.swipeInitialX === null) {
                // set tranlateX value when user started swiping
                this.swipeInitialX = this._translateX._value
            }
            if (!this.horizontalSwipeGestureBegan) {
                this.horizontalSwipeGestureBegan = true;
                this.props.swipeGestureBegan && this.props.swipeGestureBegan();
            }

            let newDX = this.swipeInitialX + dx;
            if (this.disableLeftSwipe  && newDX < 0) { newDX = 0; }
            if (this.disableRightSwipe && newDX > 0) { newDX = 0; }


            if (this.props.stopLeftSwipe && newDX > this.props.stopLeftSwipe) { newDX = this.props.stopLeftSwipe; }
            if (this.props.stopRightSwipe && newDX < this.props.stopRightSwipe) { newDX = this.props.stopRightSwipe; }

            this._translateX.setValue(newDX);

        }
    }

    handlePanResponderEnd(e, gestureState) {
        // 手指移动结束离开屏幕
        this.props.onRowEnd && this.props.onRowEnd();
        // re-enable scrolling on listView parent
        const { dx, dy } = gestureState;
        const absDx = Math.abs(dx);
        if (absDx < this.props.directionalDistanceChangeThreshold){
            this.manuallySwipeRow(0);
            return;
        }

        // finish up the animation
        let toValue = 0;
        if (this._translateX._value >= 0) {
            // trying to open right
            if (this._translateX._value > this.props.leftOpenValue * (this.props.swipeToOpenPercent/100)) {
                // we're more than halfway
                toValue = this.props.leftOpenValue;
            }
        } else {
            // trying to open left
            if (this._translateX._value < this.props.rightOpenValue * (this.props.swipeToOpenPercent/100)) {
                // we're more than halfway
                toValue = this.props.rightOpenValue
            }
        }

        this.manuallySwipeRow(toValue);
    }

    /*
     * This method is called by SwipeListView
     */
    closeRow() {
        this.manuallySwipeRow(0);
    }

    manuallySwipeRow(toValue) {
        Animated.spring(
            this._translateX,
            {
                toValue,
                friction: this.props.friction,
                tension: this.props.tension
            }
        ).start( _ => {
            if (toValue === 0) {
                this.props.onRowDidClose && this.props.onRowDidClose();
            } else {
                this.props.onRowDidOpen && this.props.onRowDidOpen();
            }
        });

        if (toValue === 0) {
            this.props.onRowClose && this.props.onRowClose();
            if(typeof this.clickCapture !== 'function'){
                this.clickCapture = false;
            }
            if (!this.parentScrollEnabled) {
                this.parentScrollEnabled = true;
                this.props.setScrollEnabled && this.props.setScrollEnabled(true);
            }
        } else {
            this.props.onRowOpen && this.props.onRowOpen(toValue);
            if(typeof this.clickCapture !== 'function'){
                this.clickCapture = true;
            }
        }

        // reset everything
        this.swipeInitialX = null;
        this.horizontalSwipeGestureBegan = false;
    }

    renderRowContent() {
        let activeOpacity = this.props.onRowPress ? this.props.activeOpacity : 1;
            return (
                <Animated.View
                    {...this._panResponder.panHandlers}
                    style={{
						transform: [
							{translateX: this._translateX}
						]
					}}
                >
                    <TouchableHighlight
                        activeOpacity={activeOpacity}
                        underlayColor={this.props.underlayColor}
                        onPress={ _ => this.onRowPress()}
                    >
                        {this.props.children[1]}
                    </TouchableHighlight>
                </Animated.View>
            );
    }

    render() {
        return (
            <View style={this.props.style}>
                <View style={styles.hidden}>
                    {this.props.children[0]}
                </View>
                {this.renderRowContent()}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    hidden: {
        bottom: 0,
        left: 0,
        overflow: 'hidden',
        position: 'absolute',
        right: 0,
        top: 0,
    },
});

SwipeRow.propTypes = {
    /**
     * Used by the SwipeListView to close rows on scroll events.
     * You shouldn't need to use this prop explicitly.
     */
    setScrollEnabled: PropTypes.func,
    /**
     * Called when it has been detected that a row should be swiped open.
     */
    swipeGestureBegan: PropTypes.func,
    /**
     * Called when a swipe row is animating open. Used by the SwipeListView
     * to keep references to open rows.
     */
    onRowOpen: PropTypes.func,
    /**
     * Called when a swipe row has animated open.
     */
    onRowDidOpen: PropTypes.func,
    /**
     * TranslateX value for opening the row to the left (positive number)
     */
    leftOpenValue: PropTypes.number,
    /**
     * TranslateX value for opening the row to the right (negative number)
     */
    rightOpenValue: PropTypes.number,
    /**
     * TranslateX value for stop the row to the left (positive number)
     */
    stopLeftSwipe: PropTypes.number,
    /**
     * TranslateX value for stop the row to the right (negative number)
     */
    stopRightSwipe: PropTypes.number,
    /**
     * Friction for the open / close animation
     */
    friction: PropTypes.number,
    /**
     * Tension for the open / close animation
     */
    tension: PropTypes.number,
    /**
     * Should the row be closed when it is tapped
     */
    closeOnRowPress: PropTypes.bool,
    /**
     * Disable ability to swipe the row left
     */
    disableLeftSwipe: PropTypes.bool,
    /**
     * Disable ability to swipe the row right
     */
    disableRightSwipe: PropTypes.bool,
    /**
     * Enable hidden row onLayout calculations to run always
     */
    recalculateHiddenLayout: PropTypes.bool,
    /**
     * Called when a swipe row is animating closed
     */
    onRowClose: PropTypes.func,
    /**
     * Called when a swipe row has animated closed
     */
    onRowDidClose: PropTypes.func,
    /**
     * Styles for the parent wrapper View of the SwipeRow
     */
    style: View.propTypes.style,
    /**
     * The dx value used to detect when a user has begun a swipe gesture
     */
    directionalDistanceChangeThreshold: PropTypes.number,
    /**
     * What % of the left/right openValue does the user need to swipe
     * past to trigger the row opening.
     */
    swipeToOpenPercent: PropTypes.number,
};

SwipeRow.defaultProps = {
    disableSwipe:false,
    leftOpenValue: 0,
    rightOpenValue: 0,
    closeOnRowPress: true,
    disableLeftSwipe: false,
    disableRightSwipe: false,
    recalculateHiddenLayout: false,
    directionalDistanceChangeThreshold: 2,
    swipeToOpenPercent: 50,
    activeOpacity: 0.8,
    underlayColor: '#999999',

};

export default SwipeRow;
