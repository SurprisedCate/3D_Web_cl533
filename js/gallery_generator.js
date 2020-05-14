// JavaScript Document
$(document).ready(function() {

	var xmlHttp = new XMLHttpRequest ();

	var htmlCode = "";

	var response;

	var send = "php/hook.php";

	xmlHttp.open("GET", send, true);

	xmlHttp.send(null);

	xmlHttp.onreadystatechange = function() {
		if(xmlHttp.readyState == 4) {

			response = xmlHttp.responseText.split("~");

			for (var i=0;i<response.length;i++) {
				htmlCode += '<a href="' + response[i] +' "data-lightbox="' + response[i] +'">';
				htmlCode += '<img class="card-img-top img-thumbnail" src="' + response[i] + '"/>';
				htmlCode += '</a>';
				}
			document.getElementById('gallery_vase').innerHTML = htmlCode;
		}
	}
});