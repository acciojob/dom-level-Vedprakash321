const levetElement=document.getElementById("level");
let levelcount=1;
while(true){
	if(levetElement.tagName==="HTML"){
		break;
	}
	levelElement=levelElement.parentNode();
	levelcount++;
	
}
aleart('The level of the element is: ${levelcount}');