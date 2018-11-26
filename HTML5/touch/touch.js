document.getElementById("id_bussiness_version").innerHTML = "Bussiness version: 2018.11.26.7";

var canvas = document.getElementById("id_canvas");
canvas.addEventListener("touchstart", on_touch_start);//lista degetelor care ating ecranul
canvas.addEventListener("touchmove", on_touch_move);
canvas.addEventListener("touchend", on_touch_end); //lista degetelor care s-au ridicat de pe ecran
var canvas_bounding_rect = canvas.getBoundingClientRect();


var last_pos_array = [];

function on_touch_start(e){
	for(var i = 0; i < e.changedTouches.length; i++){
		var context = canvas.getContext("2d");
		context.beginPath();
		context.arc(e.changedTouches[i].pageX-canvas_bounding_rect.left,
					e.changedTouches[i].pageY-canvas_bounding_rect.top,
					10,
					0,2*Math.PI);
		context.stroke();
		var last_pos = {x: e.changedTouches[i].pageX, 
						y: e.changedTouches[i].pageY, 
						id: e.changedTouches[i].identifier};
		last_pos.x = e.changedTouches[i].pageX;
		last_pos.y = e.changedTouches[i].pageY;
		last_pos_array.push(last_pos);
	}
}

function on_touch_move(e){
		for(var i = 0; i < e.changedTouches.length; i++){
			var j = 0;
			for(; j < last_pos_array.length; j++)
				if(last_pos_array[j].id == e.changedTouches[i].identifier)
					break;
				
		var context = canvas.getContext("2d");
		context.beginPath();
		context.lineWidth = 20;
		//calculam mijlocul cercului anterior
		context.moveTo(last_pos_array[j].x - canvas_bounding_rect.left, 
						last_pos_array[j].y - canvas_bounding_rect.top);
		context.lineTo(e.changedTouches[i].pageX-canvas_bounding_rect.left,
					e.changedTouches[i].pageY-canvas_bounding_rect.top);
		context.stroke();
		context.lineWidth = 1;
		context.arc(e.changedTouches[i].pageX-canvas_bounding_rect.left,
					e.changedTouches[i].pageY-canvas_bounding_rect.top,
					10,
					0,2*Math.PI);
		context.stroke();
		//actializam ultima pozitie
		last_pos_array[j].x = e.changedTouches[i].pageX;
		last_pos_array[j].y = e.changedTouches[i].pageY;
	}
}
function on_touch_end(e){
	for(var i = 0; i < e.changedTouches.length; i++){
		var j = 0;
		for(; j < last_pos_array.length; j++)
			if(last_pos_array[j].id == e.changedTouches[i].identifier)
				break;
			
		last_pos_array.splice(j, 1); //de pe pozitia j stergem 1

}