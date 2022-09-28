/* 防止出现Cannot set properties of null (setting  innerHTML )这种错误
   html未渲染，js就开始获取元素了，大量报错 */
$(function(){
    /* 加个判断，哪个页面需要就给个条件，否则大量报错，因为这是全局引入了 */
    var url = window.location.pathname; // 获取文件路径部分
     /*
     var lastIndex = url.lastIndexOf("/");
     var lastEnd=url.lastIndexOf(".html");// 可能有局限性，但够用了
     if(lastEnd==-1) return;
     while(lastIndex > lastEnd) {
        url = url.slice(0,lastIndex);
        lastIndex = url.lastIndexOf("/",);
     }
     url = url.substr(lastIndex+1, lastEnd+5);
     console.log(url);*/
     if(url.indexOf("about.html") != -1){ // 判断，是否是所需页面
        <!-- 获取.text标签 -->
        const text = document.querySelector('.text');
        const aboutMeBox=document.querySelector('.aboutMeBox');
        <!-- 定义数组，里面放上文本 -->
        const txt  =["19岁，主后端辅前端；","博客用于记录日常学习；","后续更新javaEE、ssm框架、springboot等技术相关文章。","暂时就这些了"]; 
        <!-- 定义当前要显示的字符串的第几个字符 -->
        var index=0;
        <!-- 定义文本数组的下标 -->
        var xiaBiao= 0;
        <!-- 定义huan，拿来判断是要实现打字还是删除字效果，初始为真 -->
        var huan = true;
        // 打字机速度
        let time=100;
        // 入口函数，生成好这么多便签，这样jquery不能动态获取的问题就算解决了
        $(function(){
            for(let i=0;i<txt.length;i++){
               aboutMeBox.innerHTML+="<div class='introduce'></div>";
            }
        }); 

        let typewriterMethod = function(){
           <!-- huan为真 -->
            if(huan){          
                <!-- 给.text标签添加字符，用.slice方法 --> 
                text.innerHTML = txt[xiaBiao].slice(0,++index);
                /* 标点符号停顿 */
                let str=text.innerHTML;
                let bool= /[，、。？！；：]/.test(str[str.length-1]);
                if(bool) {
                    clearInterval(interval);
                    setTimeout(function(){
                        interval= setInterval(typewriterMethod,time); 
                    },699)
                }
            }
            else{
             if(xiaBiao!=txt.length-1){
               <!-- 给.text标签删除字符，用.slice方法 --> 
               if(text.innerHTML.length===txt[xiaBiao].length){
                 $(text).animate({"opacity": 0}, txt[xiaBiao].length*100,"linear", function(){});
                 $(".introduce").eq(xiaBiao).html(txt[xiaBiao]);
                 $(".introduce").eq(xiaBiao).animate({"opacity": 1}, txt[xiaBiao].length*50,"linear", function(){});
               }
               if(index===0) {
                 $(text).stop(true,true);
                 $(text).css({"opacity": 1});
                 text.innerHTML=txt[xiaBiao].slice(0,index--);
               }
               // 删除去掉
               // text.innerHTML = txt[xiaBiao].slice(0,index--);
               index--;
              }else{
                clearInterval(interval);
                return;
              }
            }
            
            <!-- 判断当前index是否为当前字符串长度了+3 了 ，+3 是为了打完后多等会，多走3个啥也不做的轮回-->
            if(index==txt[xiaBiao].length+1)
            {
            <!-- huan变为假，开始执行删除文字效果 -->
                huan = false;
            }
            <!-- 如果删完了 -->
            else if(index<0)
            {   
            <!-- index=0，huan为真，从头开始打字 -->
                index = 0;
                huan = true;
                <!-- 数组下标加1 -->
                xiaBiao++;
                if(xiaBiao>=txt.length)
                {   
                <!-- 如果数组下标超过了，又回到0 -->
                    xiaBiao=0;                     
                }
            }
        }
        <!-- 定义一个定时器，200 毫秒执行一次 -->
        let interval= setInterval(typewriterMethod,time);
    }
});