var data_locala = new Date();
  var zi = new Array(7);
  
  zi[1] = "Luni";
  zi[2] = "Marti";
  zi[3] = "Miercuri";
  zi[4] = "Joi";
  zi[5] = "Vineri";
  zi[6] = "Sambata";
  zi[0] = "Duminica";

  var data_c = zi[data_locala.getDay()];
document.getElementById("id_data_curenta").innerHTML = data_c;

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("id_ora_curenta").innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}