function defaultCamera()
{
	document.getElementById('bronze__ViewFreeCamera').setAttribute('bind', 'true');
	document.getElementById('flower__ViewFreeCamera').setAttribute('bind', 'true');
	document.getElementById('wineJar__ViewFreeCamera').setAttribute('bind', 'true');
	document.getElementById('candleholder__ViewFreeCamera').setAttribute('bind', 'true');
}

function frontCamera()
{
	document.getElementById('bronze__ViewFrontCamera').setAttribute('bind', 'true');
	document.getElementById('flower__ViewFrontCamera').setAttribute('bind', 'true');
	document.getElementById('wineJar__ViewFrontCamera').setAttribute('bind', 'true');
	document.getElementById('candleholder__ViewFrontCamera').setAttribute('bind', 'true');
}

function sideCamera()
{
	document.getElementById('bronze__ViewSideCamera').setAttribute('bind', 'true');
	document.getElementById('flower__ViewSideCamera').setAttribute('bind', 'true');
	document.getElementById('wineJar__ViewSideCamera').setAttribute('bind', 'true');
	document.getElementById('candleholder__ViewSideCamera').setAttribute('bind', 'true');
}

var headlightOn = true;

function headlight()
{
	headlightOn = !headlightOn;
	document.getElementById('bronze__headlight').setAttribute('headlight', headlightOn.toString());
	document.getElementById('flower__headlight').setAttribute('headlight', headlightOn.toString());
	document.getElementById('wineJar__headlight').setAttribute('headlight', headlightOn.toString());
	document.getElementById('candleholder__headlight').setAttribute('headlight', headlightOn.toString());
}

var topLightOn = true;

function topLight()
{
	topLightOn = !topLightOn;
	document.getElementById('bronze__topLight').setAttribute('on', topLightOn.toString());
	document.getElementById('flower__topLight').setAttribute('on', topLightOn.toString());
	document.getElementById('wineJar__topLight').setAttribute('on', topLightOn.toString());
	document.getElementById('candleholder__topLight').setAttribute('on', topLightOn.toString());
}

var bottomLightOn = true;

function bottomLight()
{
	bottomLightOn = !bottomLightOn;
	document.getElementById('bronze__bottomLight').setAttribute('on', bottomLightOn.toString());
	document.getElementById('flower__bottomLight').setAttribute('on', bottomLightOn.toString());
	document.getElementById('wineJar__bottomLight').setAttribute('on', bottomLightOn.toString());
	document.getElementById('candleholder__bottomLight').setAttribute('on', bottomLightOn.toString());
}

var i = 0;

function poly()
{
	document.getElementById("renderDefault").disabled = true;
	document.getElementById("renderWire").disabled = false;
	document.getElementById("renderVertex").disabled = false;
	var a = document.getElementById('bronzeInteract');
	var b = document.getElementById('flowerInteract');
	var c = document.getElementById('wineInteract');
	var d = document.getElementById('candleInteract');
	if (i == 1) {
		a.runtime.togglePoints(true);
		a.runtime.togglePoints(true);
		b.runtime.togglePoints(true);
		b.runtime.togglePoints(true);
		c.runtime.togglePoints(true);
		c.runtime.togglePoints(true);
		d.runtime.togglePoints(true);
		d.runtime.togglePoints(true);
		i = 0;
	} else {
		a.runtime.togglePoints(true);
		b.runtime.togglePoints(true);
		c.runtime.togglePoints(true);
		d.runtime.togglePoints(true);
		i = 0;
	}
}

function wireframe()
{
	document.getElementById("renderDefault").disabled = false;
	document.getElementById("renderWire").disabled = true;
	document.getElementById("renderVertex").disabled = false;
	var a = document.getElementById('bronzeInteract');
	var b = document.getElementById('flowerInteract');
	var c = document.getElementById('wineInteract');
	var d = document.getElementById('candleInteract');
	if (i == 0) {
		a.runtime.togglePoints(true);
		a.runtime.togglePoints(true);
		b.runtime.togglePoints(true);
		b.runtime.togglePoints(true);
		c.runtime.togglePoints(true);
		c.runtime.togglePoints(true);
		d.runtime.togglePoints(true);
		d.runtime.togglePoints(true);
		i = 2;
	} else {
		a.runtime.togglePoints(true);
		b.runtime.togglePoints(true);
		c.runtime.togglePoints(true);
		d.runtime.togglePoints(true);
		i = 2;
	}
}

function vertex()
{
	document.getElementById("renderDefault").disabled = false;
	document.getElementById("renderWire").disabled = false;
	document.getElementById("renderVertex").disabled = true;	
	var a = document.getElementById('bronzeInteract');
	var b = document.getElementById('flowerInteract');
	var c = document.getElementById('wineInteract');
	var d = document.getElementById('candleInteract');
	if (i == 0) {
		a.runtime.togglePoints(true);
		b.runtime.togglePoints(true);
		c.runtime.togglePoints(true);
		d.runtime.togglePoints(true);
		i++;
	} else {
		a.runtime.togglePoints(true);
		a.runtime.togglePoints(true);
		b.runtime.togglePoints(true);
		b.runtime.togglePoints(true);
		c.runtime.togglePoints(true);
		c.runtime.togglePoints(true);
		d.runtime.togglePoints(true);
		d.runtime.togglePoints(true);
		i--;
	}
}





