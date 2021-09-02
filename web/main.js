document.addEventListener('contextmenu', event => event.preventDefault());

function GenerateQr() {
	var data = document.getElementById("data").value;
	if (data.length >= 1){
		eel.GenerateQr(data)(SetQr);
	} else{
		return false;
	}
}

function SetQr(image) {
	document.getElementById("qr").src = image;
}

function SaveQr() {
	imagesrc = document.getElementById("qr").src;
	console.log(imagesrc.length)
	if (imagesrc.length >= 33){
		eel.SaveQr();
	  	$(".notify").toggleClass("active");
	  	$("#notifyType").toggleClass("success");
	  	setTimeout(function(){
	    	$(".notify").removeClass("active");
	    	$("#notifyType").removeClass("success");
	  	},2500);
	} else{
		return false;
	}
}
