var stopped=false;

onmessage=function(e){
	if(e.data=="stop"){
		stopped=true;
	}
}
function is_prim(n){
	for(var i=2;i*i<=n;i++)//(var i=2;i<=sqrt(n);i++) -slow
		if(n%i==0)
			return false;

	return true;
}
function calculeaza_prime(start_value){
//for(var i=1e9; i<1e10;i++)//1e9=un miliard 1e10=10 miliarde
//	if(is_prim(i))
//		postMessage(i);
//
//postMessage("gata");

if(stopped)
	;
else{
	for(var i=start_value; i<start_value+1000;i++)//1e9=un miliard 1e10=10 miliarde
		if(is_prim(i))
			postMessage(i);
	start_value+=1000;
}
if(start_value<1e10)
setTimeout(calculeaza_prime,1,start_value); //funct calculeaza_prime, o milisecunda, primeste start_value
else
	postMessage("gata")
//setInterval apeleaza la infinit dupa timer
//setTimeout apeleaza o data --- ii da pauza de 1 milisecunda
}
calculeaza_prime(1e9); //1e9=un miliard