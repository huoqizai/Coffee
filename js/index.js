/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-04-18 10:35:46
 * @version $Id$
 */
window.onload = function(){
  //获取按钮
     var wrap_ol = document.getElementById('main-btn');
     var aLi = wrap_ol.getElementsByTagName('li');

     var num = 0;
     var oldLi = aLi[num];
     //获取图片
    var wrap_banner = document.getElementById('main-banner');
    var list_img = wrap_banner.getElementsByTagName('li');
     var oldImg = list_img[0]
    var time;

    for(var i=0;i<aLi.length;i++){
          aLi[i].index = i;

          aLi[i].onmouseover = function(){
            clearInterval(time);//暂停
             num = this.index; //this赋值给num
              run();//执行
          }
          aLi[i].onmouseout = function(){
             autoPlay()
          }
    }
   function run(){
        oldLi.className = '';
        aLi[num].className = 'active';
        oldLi = aLi[num]; //更新 oldLi
        //图片
        oldImg.className = '';
        list_img[num].className = 'active';
        oldImg = list_img[num]; //更新 oldImg
   }
   autoPlay()
   function autoPlay(){
     time = setInterval(function(){
         run();
         num++;
         if(num == 3){
            num = 0;
         }
      },1000)
   }



 var b_banner = document.getElementById('product');
     var b_wrap = document.getElementById('p-banner');//像CSS中ID选择器
     var b_content = document.getElementById('b-content');
    //在文档中去获取元素,通过标签名方法('标签名');
     var b_btn = b_wrap.getElementsByTagName('a');//像CSS中标签选择器
     //alert(b_btn.length);
     //onclick 点击
     var b_timer;
     var number = 0;
     b_btn[0].onclick = function(){
                b_run();
            // -100px
     }

     function b_run(){
        number++;           //a:i++   b:number = number + 1  c:number += 1;
        if(number > 0){//if(){代码1}else{代码二}；
            //如果（）条件成立，走代码1，如果（）条件不成立，就走代码二
            number = -5;
            b_content.style.transition = 'none';
            b_content.style.left = number*228+'px';
            setTimeout(function(){
                    number = -4;
                    b_content.style.transition = '0.5s';
                    b_content.style.left = number*228+'px';
            },200)//setTimeout只执行一次

        }else{
            setTimeout(function(){
                    b_content.style.transition = '0.5s';
                    b_content.style.left = number*228+'px';

            },200)//只执行一次
        }
     }
     b_btn[1].onclick = function(){
            number--;           //a:i++   b:number = number + 1  c:number += 1;
            b_content.style.left = number*228+'px';
            if(number<-5){
                number = 0;
                b_content.style.transition = 'none';
                b_content.style.left = number*228+'px';
                setTimeout(function(){
                        number = -1;
                        b_content.style.transition = '0.5s';
                        b_content.style.left = number*228+'px';
                },200)//setTimeout只执行一次

            }else{
                setTimeout(function(){
                        b_content.style.transition = '0.5s';
                        b_content.style.left = number*228+'px';
                },200)//setTimeout只执行一次

            }

     }
     b_autoplay();//启动定时器
     function b_autoplay(){ b_timer = setInterval(b_run,1000); }
     //清除定时器
     b_banner.onmouseover = function(){clearInterval(b_timer);}
     //重启定时器
     b_banner.onmouseout = function(){b_autoplay();}





















}























