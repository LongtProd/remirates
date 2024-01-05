grudMend();
function grudMend(){
	var getcoolloc = window.location.href
    var currento = getcoolloc.substr(getcoolloc.lastIndexOf('/') + 1);
    if(currento == "about.html" || currento.includes("about")){
    	document.getElementById("avatabout").classList.add("current");
    }else if(currento == "service.html" || currento.includes("service")){
		document.getElementById("avatservice").classList.add("current");
    }else if(currento == "contact.html" || currento.includes("contact")){
    	document.getElementById("avatcontact").classList.add("current");
    }
}