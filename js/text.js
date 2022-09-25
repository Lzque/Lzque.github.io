var a_idx = 0;
jQuery(document).ready(function($) {
  $("body").click(function(e) {
    var a = new Array("欢迎", "浮云一别后，流水十年间",
      "树深时见鹿，溪午不闻钟","欲买桂花同载酒，终不似，少年游",
      "欲买桂花同载酒，终不似，少年游","一个能够升起月亮的身体，必然驮住了无数次的日落"
      ,"山河拱手，为君一笑","光而不耀，与光同尘"
      ,"盛夏白瓷梅子汤，碎冰碰壁当啷响","心之所向，素履以往，生如逆旅，一苇以航"
     );
    var $i = $("<span/>").text(a[a_idx]);
    var x = e.pageX,
    y = e.pageY;
    $i.css({
      "z-index": 99999,
      "top": y - 28,
      "left": x - a[a_idx].length * 8,
      "position": "absolute",
      "color": "#2fccc5",
      "font-family":"华文新魏"
    });
    $("body").append($i);
    $i.animate({
      "top": y - 180,
      "opacity": 0
    }, 1500, function() {
      $i.remove();
    });
    a_idx = (a_idx + Math.floor(Math.random()*99)+1) % a.length;
  });
});
