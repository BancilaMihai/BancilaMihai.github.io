document.getElementById("id_bussiness_version").innerHTML="Bussiness version: 2019.01.19.3";


function roundit(which){
return Math.round(which*100)/100
}

function kgconvertor(){
with (document.kggr){
gr.value = roundit(kg.value*1000);
}
}

function grconvertor(){
with (document.kggr){
kg.value = roundit(gr.value/1000);
}
}



function cmconvertor(){
with (document.cminch){
inch.value = roundit(cm.value/2.54);
}
}

function inchconvertor(){
with (document.cminch){
cm.value = roundit(inch.value*2.54);
}
}