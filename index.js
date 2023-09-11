$(function() {

  var msg = [
  "font-family:Roboto;font-weight:500;font-size:100%;line-height:95%; margin-left:9px;width:60px;' class='gradient1'>happy<br>birthday",
  `font-family:Roboto;font-weight:normal;font-size:80%;padding-top:10px;line-height:95%;'>
    <img src="https://scontent-hkt1-1.cdninstagram.com/v/t39.30808-6/375455497_18271073593153871_1374949915418440490_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08&_nc_ht=scontent-hkt1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=tUeNkMSPxa8AX_uBEW1&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzE4NDk5NDY5MTA4NTkyMjQ1Ng%3D%3D.2-ccb7-5&oh=00_AfCPpAP4WfwBwreL3kc-4G5YmsDiljMsPYn3X0Egen4FVw&oe=65050FF7&_nc_sid=ee9879" alt="Girl in a jacket" width="50" height="50">
  `,
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
