//code for off button
function off()
{
	document.getElementById('output').disabled=true;

	document.getElementById('1').disabled=true;
	document.getElementById('2').disabled=true;
	document.getElementById('3').disabled=true;

	document.getElementById('4').disabled=true;
	document.getElementById('5').disabled=true;
	document.getElementById('6').disabled=true;

	document.getElementById('7').disabled=true;
	document.getElementById('8').disabled=true;
	document.getElementById('9').disabled=true;

	document.getElementById('0').disabled=true;
	document.getElementById('+').disabled=true;
	document.getElementById('-').disabled=true;

	document.getElementById('*').disabled=true;
	document.getElementById('/').disabled=true;
	document.getElementById('%').disabled=true;
	
	document.getElementById('=').disabled=true;
}

//code for on button
function on()
{
	document.getElementById('output').disabled=false;

	document.getElementById('1').disabled=false;
	document.getElementById('2').disabled=false;
	document.getElementById('3').disabled=false;

	document.getElementById('4').disabled=false;
	document.getElementById('5').disabled=false;
	document.getElementById('6').disabled=false;

	document.getElementById('7').disabled=false;
	document.getElementById('8').disabled=false;
	document.getElementById('9').disabled=false;


	document.getElementById('0').disabled=false;
	document.getElementById('+').disabled=false;
	document.getElementById('-').disabled=false;

	document.getElementById('*').disabled=false;
	document.getElementById('/').disabled=false;
	document.getElementById('%').disabled=false;
	
	document.getElementById('=').disabled=false;
}