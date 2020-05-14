$(document).ready(function() {

	selectPage();
	selectModel();
	
	function selectPage() {
		$('#home').show();
		$('#statement').hide();
		$('#models').hide();
		
		$('#navHome').click(function() {
			$('#home').show();
			$('#statement').hide();
			$('#models').hide();
		});
		
		$('#navStatement').click(function() {
			$('#home').hide();
			$('#statement').show();
			$('#models').hide();
			$(this).addClass('active');
			$('#navHome').removeClass('active');
			$('#navbardrop').removeClass('active');
		});
	}
	
	function selectModel() {
		$('.navBronze').click(function() {
			$('#models').show();
			$('#home').hide();
			$('#statement').hide();
			$('#Bronze').show();
			$('#FlowerPot').hide();
			$('#WineJar').hide();
			$('#Candleholder').hide();
			$('#bronzeDescription').show();
			$('#flowerPotDescription').hide();
			$('#wineJarDescription').hide();
			$('#candleholderDescription').hide();
			$('#navHome').removeClass('active');
			$('#navStatement').removeClass('active');
			$('#navbardrop').addClass('active');
		});
		
		$('.navFlower').click(function() {
			$('#models').show();
			$('#home').hide();
			$('#statement').hide();
			$('#Bronze').hide();
			$('#FlowerPot').show();
			$('#WineJar').hide();
			$('#Candleholder').hide();
			$('#bronzeDescription').hide();
			$('#flowerPotDescription').show();
			$('#wineJarDescription').hide();
			$('#candleholderDescription').hide();
			$('#navHome').removeClass('active');
			$('#navStatement').removeClass('active');
			$('#navbardrop').addClass('active');
		});
		
		$('.navWine').click(function() {
			$('#models').show();
			$('#home').hide();
			$('#statement').hide();
			$('#Bronze').hide();
			$('#FlowerPot').hide();
			$('#WineJar').show();
			$('#Candleholder').hide();
			$('#bronzeDescription').hide();
			$('#flowerPotDescription').hide();
			$('#wineJarDescription').show();
			$('#candleholderDescription').hide();
			$('#navHome').removeClass('active');
			$('#navStatement').removeClass('active');
			$('#navbardrop').addClass('active');
		});
		
		$('.navCandle').click(function() {
			$('#models').show();
			$('#home').hide();
			$('#statement').hide();
			$('#Bronze').hide();
			$('#FlowerPot').hide();
			$('#WineJar').hide();
			$('#Candleholder').show();
			$('#bronzeDescription').hide();
			$('#flowerPotDescription').hide();
			$('#wineJarDescription').hide();
			$('#candleholderDescription').show();
			$('#navHome').removeClass('active');
			$('#navStatement').removeClass('active');
			$('#navbardrop').addClass('active');
		});	
	}
	
});
	
function darkMode() {
	document.getElementById('headerColor').style.backgroundColor = '#1B1817';
	document.getElementById('bodyColor').style.backgroundColor = '#000000';
	document.getElementById('footerColor').style.backgroundColor = '#1B1817';
	document.documentElement.style.setProperty('--primary-color', '#E9EAF1');
	document.documentElement.style.setProperty('--secondary-color', '#1B1817');
}

function lightMode() {
	document.getElementById('headerColor').style.backgroundColor = '#E9EAF1';
	document.getElementById('bodyColor').style.backgroundColor = '#FFFFFF';
	document.getElementById('footerColor').style.backgroundColor = '#E9EAF1';
	document.documentElement.style.setProperty('--primary-color', '#1B1817');
	document.documentElement.style.setProperty('--secondary-color', '#E9EAF1');
}