var body = document.getElementById("body");

function end() {
	document.getElementById("slide14").style.display = "none";
	document.getElementById("slideEnd").style.display = "block";
	body.onclick = next1;
}

function next14() {
	document.getElementById("slide13").style.display = "none";
	document.getElementById("slide14").style.display = "block";
	body.onclick = end;
}

function next13() {
	document.getElementById("common").style.display = "none";
	document.getElementById("slide13").style.display = "block";
	body.onclick = next14;
}

function next13Common() {
	document.getElementById("slide12").style.display = "none";
	document.getElementById("common").style.display = "block";
	document.getElementById("karambolage-circle").style.backgroundImage = "url('Cavalier Marin.jpg')";
	document.getElementById("desc").innerHTML = "<p>Quelques auteurs et leurs œuvres baroques</p>";
	body.onclick = next13;
}

function next12() {
	document.getElementById("common").style.display = "none";
	document.getElementById("slide12").style.display = "block";
	body.onclick = next13Common;
}

function next12Common() {
	document.getElementById("slide11").style.display = "none";
	document.getElementById("common").style.display = "block";
	document.getElementById("karambolage-circle").style.backgroundImage = "url('Bergerac.jpg')";
	document.getElementById("desc").innerHTML = "<p>Les styles d'écriture de la littérature Baroque</p>";
	body.onclick = next12;
}

function next11() {
	document.getElementById("common").style.display = "none";
	document.getElementById("slide11").style.display = "block";
	body.onclick = next12Common;
}

function next11Common() {
	document.getElementById("slide10").style.display = "none";
	document.getElementById("common").style.display = "block";
	document.getElementById("karambolage-circle").style.backgroundImage = "url('Shakespeare.jpg')";
	document.getElementById("desc").innerHTML = "<p>Les thèmes de la littérature Baroque</p>";
	body.onclick = next11;
}

function next10() {
	document.getElementById("slide9").style.display = "none";
	document.getElementById("slide10").style.display = "block";
	body.onclick = next11Common;
}

function next9() {
	document.getElementById("slide8").style.display = "none";
	document.getElementById("slide9").style.display = "block";
	body.onclick = next10;
}

function next8() {
	document.getElementById("slide7").style.display = "none";
	document.getElementById("slide8").style.display = "block";
	body.onclick = next9;
}

function next7() {
	document.getElementById("slide6").style.display = "none";
	document.getElementById("slide7").style.display = "block";
	body.onclick = next8;
}

function next6() {
	document.getElementById("common").style.display = "none";
	document.getElementById("slide6").style.display = "block";
	body.onclick = next7;
}

function next6Common() {
	document.getElementById("slide5").style.display = "none";
	document.getElementById("common").style.display = "block";
	document.getElementById("karambolage-circle").style.backgroundImage = "url('Aubigné.jpg')";
	document.getElementById("desc").innerHTML = "<p>Les sources du mouvement littéraire Baroque</p>";
	body.onclick = next6;
}

function next5() {
	document.getElementById("slide4").style.display = "none";
	document.getElementById("slide5").style.display = "block";
	body.onclick = next6Common;
}

function next4() {
	document.getElementById("slide3").style.display = "none";
	document.getElementById("slide4").style.display = "block";
	body.onclick = next5;
}

function next3() {
	document.getElementById("slide2").style.display = "none";
	document.getElementById("slide3").style.display = "block";
	body.onclick = next4;
}

function next2() {
	document.getElementById("slide1").style.display = "none";
	document.getElementById("slide2").style.display = "block";
	body.onclick = next3;
}

function next1() {
	document.getElementById("common").style.display = "none";
	document.getElementById("slide1").style.display = "block";
	body.onclick = next2;
}
