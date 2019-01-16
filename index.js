$(function() {

  var msg = [
  "font-family:Roboto;font-weight:500;font-size:100%;line-height:95%; margin-left:9px;width:60px;' class='gradient1'>happy<br>birthday",
  "font-family:Roboto;font-weight:normal;font-size:80%;padding-top:10px;line-height:95%;mix-blend-mode: overlay;'>17.01.1997",
  "font-family:Abel;font-size:9pt;line-height:95%;padding-top:10px'>như hảo",
    "font-family:Abel;mix-blend-mode: color-burn;font-size:40pt;line-height:95%;margin-top:25px;opacity: .68;'>22"
];

  bal = ['happy birthday', 'như hảo'];
  for (var i=0; i < 100; i++) {
    var rand = Math.floor(Math.random() * ((msg.length -1) - 0 + 1)) + 0;

    $('.balloons').append("<div class='balloon balloon" + i + "'><div style='vertical-align: middle;text-align: center; height: 50px;margin-top: 30px; " + msg[rand] + "</div>");
  }
}
);
