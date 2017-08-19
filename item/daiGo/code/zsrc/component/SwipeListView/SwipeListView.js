/**
 * 能左划右滑的列表 和SwipeRow配合使用
 * props:
 * onScroll => function, 列表开始滚动调用的函数
 * onRowOpen => function, row打开调用的函数
 * onRowClose => function, row关闭调用的函数
 * onRowDidOpen => function, 当row打开完成调用的函数
 * onRowDidClose => function, 当row关闭完成调用的函数
 * renderRow => 返回回来的组件用SwipeRow包装
 * ...props => listView所有props
 */
import React, {
	Component,
	PropTypes,
} from 'react';
import {
	ListView,
	Text,
	View,
    PanResponder,
} from 'react-native';

import SwipeRow from './SwipeRow';

/**
 * ListView that renders SwipeRows.
 */
class SwipeListView extends Component {

	constructor(props){
		super(props);
		this._rows = {};
		this.openCellId = null;  // swipeRow打开id
        /***/
		this.openTogglePanelId = null; // 面板打开id
        /***/
        this.clickCapture = false;
	}

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponderCapture: (e) => this.clickCapture, // 当前视图劫持触摸事件
            onStartShouldSetPanResponder: (e) => this.clickCapture, // 触摸是否成为响应者
            onPanResponderStart: (e) => this.onRowStart(),
        });
    }

    // listView 能否滚动
	setScrollEnabled(enable) {
		if(this.props.scrollEnabled == false) return;
		this.props.listScrollEnabled && this.props.listScrollEnabled(enable);
		this._listView.setNativeProps({scrollEnabled: enable});
	}

	// 关闭打开的swipeRow
	safeCloseOpenRow() {
		// if the openCellId is stale due to deleting a row this could be undefined
		if (this._rows[this.openCellId]) {
			this._rows[this.openCellId].closeRow();
		}
	}

	rowSwipeGestureBegan(id) {
		if (this.props.closeOnRowBeginSwipe && this.openCellId && this.openCellId !== id) {
			this.safeCloseOpenRow();
		}
	}

	/***/
	// 面板打开
	onOpen(rowData, secId, rowId, rowMap) {
        const togglePanelId = `${secId}${rowId}`;
        if(this.openTogglePanelId && this.openTogglePanelId != togglePanelId) { // 上一次有打开的面板
            if(this._rows[this.openTogglePanelId]) {
                this._rows[this.openTogglePanelId].close(); // 关闭上一次打开的面板
            }
        }
        this.openTogglePanelId = togglePanelId;
    }
    // 关闭面板表格内打开的行
    closeTableRow() {
        if (this.openTogglePanelId) {
            if(this._rows[this.openTogglePanelId]) {
                // listView滚动 关闭swipeRow内的swipeRow
                this._rows[this.openTogglePanelId].closeTableRow && this._rows[this.openTogglePanelId].closeTableRow();
            }
        }
    }
    // 关闭面板左划和面板表格内打开的行
    closeRowAndTableRow() {
	    this.closeTableRow();
	    this.safeCloseOpenRow();
    }
    /***/

    // swipeRow打开
	onRowOpen(rowData, secId, rowId, rowMap) {
		const cellIdentifier = `${secId}${rowId}`;
		if (this.openCellId && this.openCellId !== cellIdentifier) {
			this.safeCloseOpenRow();
		}
		/***/
		this.closeTableRow();
        /***/
		this.openCellId = cellIdentifier;
        this.clickCapture = true;
		this.props.onRowOpen && this.props.onRowOpen(rowData, secId, rowId, rowMap);
	}

	// swipeRow关闭
	onRowClose(rowData, secId, rowId, rowMap){
        this.clickCapture = false;
        this.props.onRowClose && this.props.onRowClose(rowData, secId, rowId, rowMap);
    }

    // swipeRow打开，下一次触摸关闭当前打开的swipeRow
    onRowStart(id) {
	    if (this.openCellId) {
	        if (this.props.closeOnRowPress) {
	            this.safeCloseOpenRow();
	            this.openCellId = null;
            }
        }
        this.props.onRowStart && this.props.onRowStart();
    }

	onScroll(e) {
		if (this.openCellId) { // listView滚动 关闭打开的swipeRow
			if (this.props.closeOnScroll) {
				this.safeCloseOpenRow();
				this.openCellId = null;
			}
		}
		/***/
		this.closeTableRow();
        /***/
		this.props.onScroll && this.props.onScroll(e);
	}

	setRefs(ref) {
		this._listView = ref;
		this.props.listViewRef && this.props.listViewRef(ref);
	}

    setClickCapture() {
        return this.clickCapture;
    }

	renderRow(rowData, secId, rowId, rowMap) {
		const Component = this.props.renderRow(rowData, secId, rowId, rowMap);
        return React.cloneElement(
            Component,
            {
                ...Component.props,
                ref: row => { this._rows[`${secId}${rowId}`] = row; },
                onRowOpen: _ => this.onRowOpen(rowData, secId, rowId, this._rows),
                onRowDidOpen: _ => this.props.onRowDidOpen && this.props.onRowDidOpen(rowData, secId, rowId, this._rows),
                onRowClose: _ => this.onRowClose(rowData, secId, rowId, this._rows),
                onRowDidClose: _ => this.props.onRowDidClose && this.props.onRowDidClose(rowData, secId, rowId, this._rows),
                onRowStart: _ => this.onRowStart(`${secId}${rowId}`),
                onRowPress: _ => this.props.onRowPress && this.props.onRowPress(rowData, secId, rowId, this._rows),
				onRowMove: this.props.onRowMove,
				onRowEnd: this.props.onRowEnd,
                setScrollEnabled: enable => this.setScrollEnabled(enable),
                swipeGestureBegan: _ => this.rowSwipeGestureBegan(`${secId}${rowId}`),
                clickCapture: _ => this.setClickCapture(),
                onOpen: _ => this.onOpen(rowData, secId, rowId, this._rows), // 面板打开方法
                activeOpacity: this.props.onRowPress ? this.props.activeOpacity : 1,
                underlayColor: this.props.underlayColor,
            }
        );
	}

    renderSectionHeader(sectionData, sectionID) {
        if(this.props.renderSectionHeader){
            return (
                <View {...this._panResponder.panHandlers}>
                    {this.props.renderSectionHeader(sectionData, sectionID)}
                </View>
            )
        }else{
            return false;
        }
    }

    renderHeader(){
        if(this.props.renderHeader){
            return (
                <View {...this._panResponder.panHandlers}>
                    {this.props.renderHeader()}
                </View>
            )
        }else{
            return false;
        }
    }

    scrollTo(obj) {
        this._listView.scrollTo(obj);
    }

	render() {
		return (
			<ListView
				{...this.props}
				ref={ c => this.setRefs(c) }
				onScroll={ e => this.onScroll(e) }
				renderRow={(rowData, secId, rowId) => this.renderRow(rowData, secId, rowId, this._rows)}
                renderSectionHeader={(sectionData, sectionID) => this.renderSectionHeader(sectionData, sectionID)}
                renderHeader={() => this.renderHeader()}
			/>
		)
	}

}

SwipeListView.propTypes = {
	/**
	 * How to render a row. Should return a valid React Element.
	 */
	renderRow: PropTypes.func.isRequired,
	/**
	 * How to render a hidden row (renders behind the row). Should return a valid React Element.
	 * This is required unless renderRow is passing a SwipeRow.
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
	 * Should open rows be closed when the listView begins scrolling
	 */
	closeOnScroll: PropTypes.bool,
	/**
	 * Should open rows be closed when a row is pressed
	 */
	closeOnRowPress: PropTypes.bool,
	/**
	 * Should open rows be closed when a row begins to swipe open
	 */
	closeOnRowBeginSwipe: PropTypes.bool,
	/**
	 * Disable ability to swipe rows left
	 */
	disableLeftSwipe: PropTypes.bool,
	/**
	 * Disable ability to swipe rows right
	 */
	disableRightSwipe: PropTypes.bool,
	/**
	 * Enable hidden row onLayout calculations to run always.
	 *
	 * By default, hidden row size calculations are only done on the first onLayout event
	 * for performance reasons.
	 * Passing ```true``` here will cause calculations to run on every onLayout event.
	 * You may want to do this if your rows' sizes can change.
	 * One case is a SwipeListView with rows of different heights and an options to delete rows.
	 */
	recalculateHiddenLayout: PropTypes.bool,
	/**
	 * Called when a swipe row is animating open
	 */
	onRowOpen: PropTypes.func,
	/**
	 * Called when a swipe row has animated open
	 */
	onRowDidOpen: PropTypes.func,
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
	swipeRowStyle: View.propTypes.style,
	/**
	 * Called when the ListView ref is set and passes a ref to the ListView
	 * e.g. listViewRef={ ref => this._swipeListViewRef = ref }
	 */
	listViewRef: PropTypes.func,
	/**
	 * Friction for the open / close animation
	 */
	friction: PropTypes.number,
	/**
	 * Tension for the open / close animation
	 */
	tension: PropTypes.number,
	/**
	 * The dx value used to detect when a user has begun a swipe gesture
	 */
	directionalDistanceChangeThreshold: PropTypes.number,
	/**
	 * What % of the left/right openValue does the user need to swipe
	 * past to trigger the row opening.
	 */
	swipeToOpenPercent: PropTypes.number,
}

SwipeListView.defaultProps = {
	leftOpenValue: 0,
	rightOpenValue: 0,
	closeOnRowBeginSwipe: false,
	closeOnScroll: true,
	closeOnRowPress: true,
	disableLeftSwipe: false,
	disableRightSwipe: false,
	recalculateHiddenLayout: false,
	directionalDistanceChangeThreshold: 2,
	swipeToOpenPercent: 50,
    activeOpacity: 0.8,
    underlayColor: '#999999',
}

export default SwipeListView;
