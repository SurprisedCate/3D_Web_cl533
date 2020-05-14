$(document).ready(function(){

	 //AJAX service request to get the main text data from the json data store
	 $.getJSON('./model/data.json', function(jsonObj) {
		console.log(jsonObj);
		//Get the home page main text data
		$('#brand_home').html('<h1>' + jsonObj.pageTextData[0].brand + '</h1>');
		$('#title_home').html('<h2>' + jsonObj.pageTextData[0].title + '</h2>');
		$('#description_home').html('<p>' + jsonObj.pageTextData[0].description + '</p>');
		
         //Get the text data for each vase
		$('#title_bronze').html('<h4>' + jsonObj.pageTextData[1].title + '</h4>');
		$('#subTitle_bronze').html('<h5>' + jsonObj.pageTextData[1].subTitle + '</h5>');
		$('#description_bronze').html('<p>' + jsonObj.pageTextData[1].description + '</p>');
		$('#dimensions_bronze').html('<p>' + jsonObj.pageTextData[1].dimensions + '</p>');	
		 
		$('#title_flowerPot').html('<h4>' + jsonObj.pageTextData[2].title + '</h4>');
		$('#subTitle_flowerPot').html('<h5>' + jsonObj.pageTextData[2].subTitle + '</h5>');
		$('#description_flowerPot').html('<p>' + jsonObj.pageTextData[2].description + '</p>');	
		$('#dimensions_flowerPot').html('<p>' + jsonObj.pageTextData[2].dimensions + '</p>');	
		 
		$('#title_wineJar').html('<h4>' + jsonObj.pageTextData[3].title + '</h4>');
		$('#subTitle_wineJar').html('<h5>' + jsonObj.pageTextData[3].subTitle + '</h5>');
		$('#description_wineJar').html('<p>' + jsonObj.pageTextData[3].description + '</p>');	
		$('#dimensions_wineJar').html('<p>' + jsonObj.pageTextData[3].dimensions + '</p>');	
		 
		$('#title_candleholder').html('<h4>' + jsonObj.pageTextData[4].title + '</h4>');
		$('#subTitle_candleholder').html('<h5>' + jsonObj.pageTextData[4].subTitle + '</h5>');
		$('#description_candleholder').html('<p>' + jsonObj.pageTextData[4].description + '</p>');	
		$('#dimensions_candleholder').html('<p>' + jsonObj.pageTextData[4].dimensions + '</p>');	

		//Get the 3d model text data
		$('#x3dModelTitle_bronze').html('<h3>' + jsonObj.pageTextData[5].x3dModelTitle + '</h3>');
		$('#x3dCreationMethod_bronze').html('<p>' + jsonObj.pageTextData[5].x3dCreationMethod + '</p>');

		$('#x3dModelTitle_flowerPot').html('<h3>' + jsonObj.pageTextData[6].x3dModelTitle + '</h3>');
		$('#x3dCreationMethod_flowerPot').html('<p>' + jsonObj.pageTextData[6].x3dCreationMethod + '</p>');	

		$('#x3dModelTitle_wineJar').html('<h3>' + jsonObj.pageTextData[7].x3dModelTitle + '</h3>');
		$('#x3dCreationMethod_wineJar').html('<p>' + jsonObj.pageTextData[7].x3dCreationMethod + '</p>');
		 
		$('#x3dModelTitle_candleholder').html('<h3>' + jsonObj.pageTextData[8].x3dModelTitle + '</h3>');
		$('#x3dCreationMethod_candleholder').html('<p>' + jsonObj.pageTextData[8].x3dCreationMethod + '</p>');
		
		//Get the gallery contents data
		$('.title_gallery').html('<h5>' + jsonObj.pageTextData[9].galleryTitle + '</h5>');
		$('.subtitle_gallery').html('<h5>' + jsonObj.pageTextData[9].gallerySubTitle + '</h5>');
		$('.description_gallery').html('<p>' + jsonObj.pageTextData[9].galleryDescription + '</p>');

		//Get camera contents data
		$('.x3dInteractiveTitle').html('<h5>' + jsonObj.pageTextData[10].title + '</h5>');
		$('.x3dCameraSubtitle').html('<h5>' + jsonObj.pageTextData[10].cameraSubtitle + '</h5>');
		$('.x3dRenderSubtitle').html('<h5>' + jsonObj.pageTextData[10].renderSubtitle + '</h5>');
		$('.x3dLightSubtitle').html('<h5>' + jsonObj.pageTextData[10].lightSubtitle + '</h5>');

		//Modal
		$('#modalTitle').html('<h5>' + jsonObj.pageTextData[11].modalTitle + '</h5>');
		$('#modalDescription').html('<p>' + jsonObj.pageTextData[11].modalDescription + '</p>'); 
	 });
});
