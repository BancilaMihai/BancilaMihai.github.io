document.getElementById("id_nivela").innerHTML="Logic version nivela: 2019.01.20.4";
window.addEventListener("deviceorientation", on_device_orientation)

function rotunjire(numar){
return Math.round(numar*100)/100
}

function on_device_orientation(e){
	document.getElementById("id_beta").innerHTML = rotunjire(e.beta);
	setTimeout(on_device_orientation, 5000);
}