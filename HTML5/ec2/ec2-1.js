document.getElementById("id_bussiness_version").innerHTML="Bussiness version: 2018.10.15.2";
function citire(){
	var _a=document.getElementById("id_a").value;
	var _b=document.getElementById("id_b").value;
	var _c=document.getElementById("id_c").value;
	var coeficineti={a:_a, b:_b, c:_c};
	return coeficineti;
}
function rezolvare(coeficineti){
	var delta=coeficineti.b*coeficineti.b-4*coeficineti.a*coeficineti.c;
	var x1_re,x1_im,x2_re,x2_im;
	if(delta>=0){
		x1_re=(-coeficineti.b+Math.sqrt(delta))/(2*coeficineti.a);
		x2_re=(-coeficineti.b-Math.sqrt(delta))/(2*coeficineti.a);
		x1_im=x2_im=0;
		//bancila
	}else{
		x1_re=-coeficineti.b/(2*coeficineti.a);
		x1_im=Math.sqrt(-delta)/(2*coeficineti.a);
		x2_re=-coeficineti.b/(2*coeficineti.a);
		x2_im=-Math.sqrt(-delta)/(2*coeficineti.a);
	}

	var x1={re:x1_re, im:x1_im};
	var x2={re:x2_re, im:x2_im};
	var solutii={x1:x1, x2:x2};
	return solutii;
}
function afisare(solutii){
	document.getElementById("id_x1").innerHTML=solutii.x1.re+" + "+solutii.x1.im+"i";
	document.getElementById("id_x2").innerHTML=solutii.x2.re+" + "+solutii.x2.im+"i";
}
function rezolva(){
	var coeficineti=citire();
	var solutii=rezolvare(coeficineti);
	afisare(solutii);
	
}