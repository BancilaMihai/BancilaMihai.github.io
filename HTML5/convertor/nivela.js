document.getElementById("id_nivela").innerHTML="Logic version nivela: 2019.01.20.8";
document.getElementById("id_beta").innerHTML = rotunjire(e.beta);

function rotunjire(numar){
return Math.round(numar*100)/100
}

function on_device_orientation(e) {
    window.addEventListener("deviceorientation", on_device_orientation)
    setTimeout(on_device_orientation, 2000);
}