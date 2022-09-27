var a_idx = 0;
jQuery(document).ready(function($) {
  $("body").click(function(e) {
    var a = new Array("欢迎", "浮云一别后，流水十年间",
      "树深时见鹿，溪午不闻钟","欲买桂花同载酒，终不似，少年游",
      "道阻且长，行则将至","吹灭读书灯，一身都是月",
      "山河拱手，为君一笑","光而不耀，与光同尘",
      "盛夏白瓷梅子汤，碎冰碰壁当啷响","心之所向，素履以往",
      "生如逆旅，一苇以航","明朝即长路，惜取此时心"
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
      "font-family":"华文新魏",
      "font-size":"9px"
    });
    $("body").append($i);
    $i.animate({
      "top": y - 120,
      "opacity": 0,
      "font-size":"21px"
    }, 1000, function() {
      $i.remove();
    });
    a_idx = (a_idx + Math.floor(Math.random()*99)+1) % a.length;
  });
});
