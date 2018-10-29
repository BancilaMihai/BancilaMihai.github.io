document.getElementById("id_bussiness_version").innerHTML="Bussiness version: 2018.10.22.2";
document.getElementById("id_start_button").addEventListener("click",start); //eveniment
document.getElementById("id_stop_button").addEventListener("click",stop);

document.getElementById("id_start_button").disabled=false;
document.getElementById("id_stop_button").disabled=true;

var unghi_start={unghi:0}; //in grade {unghi primeste val 0}-creare obiect //global

function deseneaza_cerc(unghi,context,w,h){
	context.clearRect(0,0,w,h);
	context.beginPath();
	context.arc(w/2+100*Math.cos(unghi.unghi*Math.PI/180),
				h/2+100*Math.sin(unghi.unghi*Math.PI/180),
				50,0,2*Math.PI);
	context.stroke();

	unghi.unghi++;
}
function start(){
	var canvas=document.getElementById("id_canvas");
	var context=canvas.getContext("2d");
	//bancila
	
	document.getElementById("id_start_button").disabled=true;
	document.getElementById("id_stop_button").disabled=false;

	//buton desible ... pt a nu se crea mai multe timere
	document.getElementById("id_start_button").disabled=true;
	
	//var intervalID = scope.setInterval(func, delay[, param1, param2, ...]);
	id_timer=setInterval(deseneaza_cerc,10,unghi_start,context,canvas.width,canvas.height);
	//daca era _ era local :_id_timer (asa e global)
	
}
function stop(){
	document.getElementById("id_start_button").disabled=false;
	document.getElementById("id_stop_button").disabled=true;
	clearInterval(id_timer);
}