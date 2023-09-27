const levelElement=document.getElementById("level");
let levelcount=1;
while(true){
	if(levelElement.tagName==="HTML"){
		break;
	}
	levelElement = levelElement.parentNode();
	levelcount++;
	
}
alert('The level of the element is: ${levelcount}');