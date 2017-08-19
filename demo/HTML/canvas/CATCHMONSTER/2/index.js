//catch monster
/*游戏简介
 *  catch monster是一款玩家扮演英雄对抗怪兽的小游戏
 *游戏规则
 *  玩家通过键盘上下键移动英雄触碰到怪物即得分
 *      玩家通过键盘上下键控制英雄的移动 改变英雄的位置
 *      当英雄的位置 与 在怪物的攻击范围内时
 *      即获得分数
 */

//level level level level level
    //canvas
        //创建 canvas html 元素
        var can = document.createElement('canvas');

        //创建 canvas元素 的2d绘图对象
        /*
         *canTwoD对象具有各种绘图属性及方法
         *通过操作canTwoD对象渲染canvas元素
         *
         *
         *
         */
        var canTwoD = can.getContext('2d');

        //初始化 canvas元素 【定义其 宽 高 等
        can.width = 500;
        can.height = 500;

        //打印 canvas元素
        document.body.appendChild(can);
//level level level level level

//object object object object object[并初始化其内部数据
    //to create att
        //hero
        var hero = {
            speed:255,//hero 的速度【每秒移动的像素
            x:can.width/2,//hero 的 x 位置
            y:can.height/2,//hero 的 y 位置
        }
        //monster
        var monster = {
            x:25 + ( Math.random() * (can.width - 50) ),
            y:25 + ( Math.random() * (can.height - 50) ),
        }
    //text
        //score
        var score = {
            catchMonster:0,
        }

    //event
        //keyboard
            var keyboard = {};

    //to create image
        /*

         */
        //background
        var bgReady= false;
        var bgImage = new Image();
        bgImage.onload = function(){
            bgReady = true;
        }
        bgImage.src = 'images/maze.png';

        //hero
        var heroReady= false;
        var heroImage = new Image();
        heroImage.onload = function(){
            heroReady = true;
        }
        heroImage.src = 'images/pac-man.png';

        //monster
        var monsterReady= false;
        var monsterImage = new Image();
        monsterImage.onload = function(){
            monsterReady = true;
        }
        monsterImage.src = 'images/shadow.png';
//object object object object object

//交互
    //人机
        //人
            //键盘
                //按下
                addEventListener('keydown',function(e){
                    keyboard[e.keyCode] = true;
                },false);
                //起身
                addEventListener('keyup',function(e){
                    delete keyboard[e.keyCode];
                },false);
//交互

//................................
    //函数
            //交互
                //机器
                    //更新
                        //内部
                        var update = function(time){
                            //移动
                            if(37 in keyboard){//left
                                hero.x -= hero.speed * time;
                            }
                            if(38 in keyboard){//up
                                hero.y -= hero.speed * time;
                            }
                            if(39 in keyboard){//right
                                hero.x += hero.speed * time;
                            }
                            if(40 in keyboard){//down
                                hero.y += hero.speed * time;
                            }

                            //触碰
                            if(
                                hero.x <= (monster.x + 25) &&
                                monster.x <= (hero.x + 25) &&
                                hero.y <= (monster.y + 25) &&
                                monster.y <= (hero.y + 25)
                            ){
                                ++score.catchMonster;

                                //hero
                                hero.x = can.width/2,
                                hero.y = can.height/2,
                                //monster
                                monster.x = 25 + ( Math.random() * (can.width - 50) );
                                monster.y = 25 + ( Math.random() * (can.height - 50) );
                            }
                        }

                    //外部
                    var render = function(){
                        //导入
                            //image
                                //
                                if(bgReady){
                                    canTwoD.drawImage(bgImage,0,0);
                                }
                                if(heroReady){
                                    canTwoD.drawImage(heroImage,hero.x,hero.y);
                                }
                                if(monsterReady){
                                    canTwoD.drawImage(monsterImage,monster.x,monster.y);
                                }
                        //内建
                            //text
                                //score
                                    //创建
                                        //定义样式
                                            //属性
                                                //填充颜色
                                                canTwoD.fillStyle = 'rgba(255,255,255,1)';
                                        //定义形状
                                            canTwoD.font = '25px Arial';
                                                //属性
                                                    //文字居左
                                                    canTwoD.textAlign = 'left';
                                                //方法
                                                    //实体
                                    //打印
                                                    canTwoD.fillText('catch monster : ' + score.catchMonster,25,50);
                    }

            //game game game game game
            var finish = function(){
                //游戏
                    //单次
                        //交互
                            //机器
                                //更新
                                    //内部数据：逻辑层
                                    var now = Date.now();
                                    var time = (now - past) / 1000;
                                    update(time);
                                    //外部数据：视图层
                                    render();

                    //持续
                        //交互
                            //人
                                past = now;
                                requestAnimationFrame(finish);
            }
            //game game game game game
//................................

//................................
    //兼容
        //浏览器
requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.webkitRequestAnimationFrame;
//................................

//game game game game game
var past = Date.now();
finish();
//game game game game game
//window.onload = function(){
//
//}
