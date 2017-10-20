//响应式设计JS
var sceneHtml = document.createElement('canvas');//html:create
var sceneDomObj = sceneHtml.getContext('2d');
//布局
    //1获取屏幕宽高设置元素宽高等于屏幕宽高
    var ScreenW=screen.width;//利用document.documentElement.clientWidth;可查看整体效果
var ScreenH=screen.height;
sceneHtml.width = ScreenW;
    sceneHtml.height = ScreenH;
document.getElementById('main').appendChild(sceneHtml);//html:render

//IMAGE[动态
    //1根据不同的屏幕设置不同尺寸的图片
    var AutoImageheroSrc;

    var text;
    if(ScreenW <= 479){
        //image
            AutoImageheroSrc = 'images/440/1pac-man.png';
    }
    if(480 <= ScreenW <= 767){
        //image
            AutoImageheroSrc = 'images/720/2pac-man.png';
    }
    if(768 <= ScreenW <= 959){
        //image
            AutoImageheroSrc = 'images/880/3pac-man.png';
    }
    if(960 <= ScreenW <= 1199){
        //image
            AutoImageheroSrc = 'images/1100/4pac-man.png';
    }
    if(1200 <= ScreenW){
        //image
            AutoImageheroSrc = 'images/1280/5pac-man.png';
    }

    var heroImageReady= false;
    var heroImage = new Image();
        heroImage.src = AutoImageheroSrc;
        heroImage.onload = function(){
            heroImageReady = true;
            hero.image = {
                'obj': heroImage,
                'width':heroImage.width,
                'height':heroImage.height
            };
        }

    var hero = {
        image:{},
        x:sceneHtml.width/2,
        y:sceneHtml.height/2,
    }

    var score = {
        catchMonster:0,
    }

    var render = function(){
        sceneDomObj.fillStyle="#ff5a00";
        sceneDomObj.fillRect(0,0,sceneHtml.width,sceneHtml.height);

        if(heroImageReady){
            sceneDomObj.drawImage(hero.image.obj,hero.x,hero.y,hero.image.width,hero.image.height);
        }
        //TEXT【动态
            //1 设置font-size是1rem的倍数：0.5rem 1.5rem
        sceneDomObj.fillStyle = 'rgba(255,255,255,1)';
        sceneDomObj.font = '0.5rem Helvetica';
        sceneDomObj.textAlign = 'left';
        sceneDomObj.textBaseline="top";
        sceneDomObj.fillText('catch monster:' + score.catchMonster,0,0);
    }
    window.onload = function(){
         render();
    }