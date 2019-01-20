document.getElementById("id_nivela").innerHTML="Logic version nivela: 2019.01.20.7";
window.addEventListener("deviceorientation", on_device_orientation)

function rotunjire(numar){
return Math.round(numar*100)/100
}

var i = 2;

while ( i < 1) {
  setTimeout(on_device_orientation() {
    document.getElementById("id_beta").innerHTML = rotunjire(e.beta);
  }, 2000);
}