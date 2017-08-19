//catch monster
/*游戏简介
 *  catch monster是一款玩家扮演英雄对抗怪兽的小游戏
 *游戏规则
 *  玩家通过移动英雄触碰到怪物即得分
 *      玩家控制英雄的移动 改变英雄的位置 当英雄的位置在怪物的防守范围内时 即获得分数
 *游戏操作
 *  通过电脑键盘上下左右键移动英雄
 *
 *游戏设计
 * 空间
     *  场景
     *      平台
     *          属性：宽高
         *  元素
         *      背景
         *          属性：宽高
         *
         *      物体
         *          英雄
         *              属性：宽高 位置 速度
         *          怪物
         *              属性：宽高 位置
         *
         *      辅助
         *          计分
         *              属性：
         *
        场外
   时间
   。。。。。。。。。。。。。。。。。。。。。。。。
 *
 *游戏交互
 *  玩家按住电脑键盘上下左右键 使 游戏中【画面中的英雄移动
     //*空间
     *  人机
     *      pc:鼠标 键盘
     *      pad:压力:触摸 重力感应 ...
     *      phone:
     *      .....
     *  机机
     *      网络
     *      。。。。。。。。。。
     *  。。。。。。。。。。。。。。。。。
     //*时间
     //*  机机
     //*      网络
     //*      。。。。。。。。。
     //*  。。。。。。。。。。。。
     //*。。。。。。。。。。。。。。。。。
 *
 *
 *
 *
 *
 *
 *
 */
/*
    *游戏设计
    *  场景
    *      平台
    *          属性：宽高
    *游戏技术
    *page
    *   场景
        *   静态:显现
        *       html
        *           canvas
        *       css
        *   动态:操作
        *      js
        *          es6:
        *          dom:getContext('2d')
    *
*/

/*DESIGN
 */
    /*SPACE
     */
        /*scene:
            *a part of a play or film in which the action stays in one place for a continuous period of time
            *the game scene
         */
            //html
                //tag
                var sceneHtml = document.createElement('canvas');//html:create
            //dom
                //object
                var sceneDomObj = sceneHtml.getContext('2d');

                sceneHtml.width = 500;
                sceneHtml.height = 500;
                document.body.appendChild(sceneHtml);//html:render
            /*elements
             */
                /*设计
                 *elements
                 *      背景
                 *          形式：图片
                 *          属性：宽 高 图片
                 *
                 *      物体
                 *          英雄
                 *              形式：图片
                 *              属性：宽 高 图片 位置 速度
                 *          怪物
                 *              形式：图片
                 *              属性：宽 高 图片 位置
                 *      辅助
                 *          计分
                 *              形式：字体
                 *              属性：大小 颜色
                 *技术
                 *object
                 *  属性
                 *  方法
                 */
                        //属性
                            //->image
                            var backImageReady = false;
                            var  backImage = new Image();
                                backImage.src = 'images/maze.png';
                                backImage.onload = function(){
                                    backImageReady = true;
                                    back.image = {
                                        'obj': backImage,
                                        'width':backImage.width,
                                        'height':backImage.height
                                    };
                                    //alert(back.image.src);
                                }

                            var heroImageReady= false;
                            var heroImage = new Image();
                                heroImage.src = 'images/pac-man.png';
                                heroImage.onload = function(){
                                    heroImageReady = true;
                                    hero.image = {
                                        'obj': heroImage,
                                        'width':heroImage.width,
                                        'height':heroImage.height
                                    };
                                }

                            var monsterImageReady= false;
                            var monsterImage = new Image();
                                monsterImage.src = 'images/shadow.png';
                                monsterImage.onload = function(){
                                    monsterImageReady = true;
                                    monster.image = {
                                        'obj': monsterImage,
                                        'width':monster.width,
                                        'height':monster.height
                                    };
                                }
                    //object
                    var back = {
                     //width:500,
                     //height:500
                        image:{},//属性->image
                    }
                    var hero = {
                     //width:25,
                     //height:25,
                        image:{},
                        x:sceneHtml.width/2,
                        y:sceneHtml.height/2,
                        /*
                             *   速度:
                             *       speed：固定
                         */
                        speed:250//hero 的速度【每秒[时间移动的像素[空间
                            /*
                            *游戏交互：数据更新
                            *   玩家按住电脑键盘上键 使 游戏中【画面中的英雄移动
                                *   果
                                    *   移动
                                    *       空间：
                                    *           s(x,y): x>0 || y>0
                                *   因
                                    *       时间：
                                    *           t:t>0
                                    *       速度:
                                    *           v:v=x || y / t >0
                                *通过结果导出原因
                                *
                                *通过原因生成结果
                                *   因
                                    *   时间
                                    *       玩家当前按住上键的时间对应英雄当前存在的时间:
                                    *           now
                                    *       玩家上次按住上键的时间对应英雄上次存在的时间:
                                    *           past
                                    *       英雄上次到当前存在的时间差:
                                    *           time:now - past
                                    *   速度:
                                    *       speed：固定 / 不固定
                                    果
                                    *   空间
                                    *       英雄上次存在的空间：
                                    *           x:sceneDomObj.width/2
                                    *           y:sceneDomObj.height/2
                                    *       英雄当前存在的空间：时间数据的更新使空间数据更新
                                    *           x1:sceneDomObj.width/2
                                    *           y1:y - (time * speed)
                             */
                    }
                    var monster = {
                        //width:25,
                        //height:25,
                        image:{},
                        x:0,
                        /*
                            * monster随机出现在场景的任意位置但不能超出场景
                                * 随机：Math.random() 0-1.0
                                * 不能超出场景：sceneDomObj.width
                                * 不能让英雄出现在怪物的防守范围内
                                *
                                * 0 <= x && x <= sceneDomObj.width - monster.image.width
                                * Math.random() * (sceneDomObj.width - monster.image.width)
                                * Math.random() * (sceneDomObj.height - monster.image.height)
                         */
                        y:0,
                    }
                    var score = {
                        catchMonster:0,
                    }
    /*TIME
     */
        /*时间
         *空间可不同 但时间必相同
         *。。。。。。。。。。。。
         *
         *
         */
        var past = Date.now();

/*INTERACTION
 *  to communicate with or react to
 *  We are studying how these two chemicals interact
 */
/*
*游戏交互
//*空间
*  人机
*      pc:鼠标 键盘
*      pad:压力:触摸 重力感应 ...
*      phone:
*      .....
*  机机
*      网络
*      。。。。。。。。。。
*  。。。。。。。。。。。。。。。。。
//*时间
//*  机机
//*      网络
//*      。。。。。。。。。
//*  。。。。。。。。。。。。
//*。。。。。。。。。。。。。。。。。
*/
    /*
     *游戏交互
     *玩家按住电脑键盘上下键 使 游戏中【画面中的英雄移动
     *
     *空间
     *  人机
     *      pc:键盘
     */
            //交互 转化成 数据
                var keyboard = {};

        //因：动作
            //按下
            addEventListener('keydown',function(e){
                keyboard[e.keyCode] = true;//交互 转化成 数据
            });
            //松开
            addEventListener('keyup',function(e){
                delete keyboard[e.keyCode];
            });
        //果：效果
                var update = function(time){
                    //移动
                    if(37 in keyboard){//left
                        if(hero.x <= 0){
                            hero.x = 0;
                        }
                        hero.x -= time * hero.speed;
                    }
                    if(38 in keyboard){//up
                        if(hero.y <= 0){
                            hero.y = 0;
                        }
                        hero.y -= hero.speed * time;
                    }
                    if(39 in keyboard){//right
                        if(hero.x >= sceneHtml.width - hero.image.width){
                            hero.x = sceneHtml.width - hero.image.width;
                        }
                        hero.x += hero.speed * time;
                    }
                    if(40 in keyboard){//down
                        if(hero.y >= sceneHtml.height - hero.image.height){
                            hero.y = sceneHtml.height - hero.image.height;
                        }
                        hero.y += hero.speed * time;
                    }
                        //触碰
                            /*
                                *..............当 hero 距离 monster 12 的时候 即monster的防守圆半径为12
                                *
                                *monster.x,monster.y,r=12;hero.x,hero.y
                                *
                                *Math.abs(hero.x - monster.x)<=12 && Math.abs(hero.y - monster.y)<=12
                                *
                                *
                                *
                             */
                        if(Math.abs(hero.x - monster.x)<=25 &&
                            Math.abs(hero.y - monster.y)<=25
                        ){
                            ++score.catchMonster;
                            hero.x = sceneHtml.width/2;
                            hero.y = sceneHtml.height/2;
                            monster.x = Math.random() * (sceneHtml.width - monsterImage.width);
                            monster.y = Math.random() * (sceneHtml.height - monsterImage.height);
                        }
                }
                var render = function(){
                    if(backImageReady){
                        sceneDomObj.drawImage(back.image.obj,0,0)
                    }
                    if(heroImageReady){
                        sceneDomObj.drawImage(hero.image.obj,hero.x,hero.y);
                    }
                    if(monsterImageReady){
                        sceneDomObj.drawImage(monster.image.obj,monster.x,monster.y);
                    }

                        sceneDomObj.fillStyle = 'rgba(255,255,255,1)';
                        sceneDomObj.font = '25px Arial';
                        sceneDomObj.textAlign = 'left';
                    sceneDomObj.fillText('catch monster:' + score.catchMonster,25,25);
                }
            var game = function(){
                //效果的实现实际上是数据的更新
                    //内部：scene elements 数据的更新
                        //时间
                            var now = Date.now();
                            var time = (now - past)/1000;
                        //空间
                            update(time);
                    //内部：scene elements 数据的更新 => 外部：我们看到的 听到的...变化
                        render();
                    //外部：我们看到的 听到的...变化

                        past = now;
                        requestAnimationFrame(game);
            }
            game();
/*
    *兼容
    *   硬件
    *       PC PAD PHONE...
    *           响应式
    *             PHONE:压力:触摸 重力感应 ...
    *               ANDROID
    *                   cocos2d-js
    *   软件
    *       浏览器
 */
//................................
    //兼容
        //浏览器
        requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.webkitRequestAnimationFrame;
    //................................