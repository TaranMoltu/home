
function addClass( element, name ) {
	element.className = element.className.replace( /\s+$/gi, '' ) + ' ' + name;
}

function removeClass( element, name ) {
	element.className = element.className.replace( name, '' );
}

function expand(element){
	
	siblings= element.parentNode.childNodes;
	for(i=1; i<siblings.length; i++) {
		try{
			removeClass( siblings[i], "active" );
		}catch(e){}
	}
	
	addClass( element, "active" );
	
}