let levelElement=document.getElementById("level");
let levelcount = 1;
while(true){
	
	if(levelElement.tagName === "HTML"){
		break;
	}
	if(levelcount>1000){
		break;
	}
	levelElement = levelElement.parentNode;
	levelcount++;
	
}
// alert("ojihugyvhb");
// console.log(levelcount)
alert(`The level of the element is: ${levelcount}`);