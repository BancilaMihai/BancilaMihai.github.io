
function is_prim(n){
	for(var i=2;i*i<=n;i++)//(var i=2;i<=sqrt(n);i++) -slow
		if(n%i==0)
			return false;

	return true;
}

for(var i=1e9; i<1e10;i++)//1e9=un miliard 1e10=10 miliarde
	if(is_prim(i))
		postMessage(i);

postMessage("gata");