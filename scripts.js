var previous = document.getElementById("previous");
var next = document.getElementById("next");

function end() {
	document.getElementById("slide14").style.display = "none";
	document.getElementById("slideEnd").style.display = "block";
	previous.setAttribute("onclick", "next14()");
}

function next14() {
	document.getElementById("slide13").style.display = "none";
	document.getElementById("end").style.display = "none";
	document.getElementById("slide14").style.display = "block";
	next.onclick = end;
	previous.setAttribute("onclick", "next13()");
}

function next13() {
	document.getElementById("common").style.display = "none";
	document.getElementById("slide14").style.display = "none";
	document.getElementById("slide13").style.display = "block";
	next.onclick = next14;
	previous.setAttribute("onclick", "next13Common()");
}

function next13Common() {
	document.getElementById("slide12").style.display = "none";
	document.getElementById("slide13").style.display = "none";
	document.getElementById("common").style.display = "block";
	document.getElementById("karambolage-circle").style.backgroundImage = "url('Cavalier Marin.jpg')";
	document.getElementById("desc").innerHTML = "<p>Quelques auteurs et leurs œuvres baroques</p>";
	next.onclick = next13;
	previous.setAttribute("onclick", "next12()");
}

function next12() {
	document.getElementById("common").style.display = "none";
	document.getElementById("slide12").style.display = "block";
	next.onclick = next13Common;
	previous.setAttribute("onclick", "next12Common()");
}

function next12Common() {
	document.getElementById("slide11").style.display = "none";
	document.getElementById("slide13").style.display = "none";
	document.getElementById("common").style.display = "block";
	document.getElementById("karambolage-circle").style.backgroundImage = "url('Bergerac.jpg')";
	document.getElementById("desc").innerHTML = "<p>Les styles d'écriture de la littérature Baroque</p>";
	next.onclick = next12;
	previous.setAttribute("onclick", "next11()");
}

function next11() {
	document.getElementById("common").style.display = "none";
	document.getElementById("slide11").style.display = "block";
	next.onclick = next12Common;
	previous.setAttribute("onclick", "next11Common()");
}

function next11Common() {
	document.getElementById("slide11").style.display = "none";
	document.getElementById("slide10").style.display = "none";
	document.getElementById("common").style.display = "block";
	document.getElementById("karambolage-circle").style.backgroundImage = "url('Shakespeare.jpg')";
	document.getElementById("desc").innerHTML = "<p>Les thèmes de la littérature Baroque</p>";
	next.onclick = next11;
	previous.setAttribute("onclick", "next10()");
}

function next10() {
	document.getElementById("slide9").style.display = "none";
	document.getElementById("common").style.display = "none";
	document.getElementById("slide10").style.display = "block";
	next.onclick = next11Common;
	previous.setAttribute("onclick", "next9()");
}

function next9() {
	document.getElementById("slide8").style.display = "none";
	document.getElementById("slide10").style.display = "none";
	document.getElementById("slide9").style.display = "block";
	next.onclick = next10;
	previous.setAttribute("onclick", "next8()");
}

function next8() {
	document.getElementById("slide7").style.display = "none";
	document.getElementById("slide9").style.display = "none";
	document.getElementById("slide8").style.display = "block";
	next.onclick = next9;
	previous.setAttribute("onclick", "next7()");
}

function next7() {
	document.getElementById("slide6").style.display = "none";
	document.getElementById("slide8").style.display = "none";
	document.getElementById("slide7").style.display = "block";
	next.onclick = next8;
	previous.setAttribute("onclick", "next6()");
}

function next6() {
	document.getElementById("slide7").style.display = "none";
	document.getElementById("common").style.display = "none";
	document.getElementById("slide6").style.display = "block";
	next.onclick = next7;
	previous.setAttribute("onclick", "next6Common()");
}

function next6Common() {
	document.getElementById("slide6").style.display = "none";
	document.getElementById("slide5").style.display = "none";
	document.getElementById("common").style.display = "block";
	document.getElementById("karambolage-circle").style.backgroundImage = "url('Aubigné.jpg')";
	document.getElementById("desc").innerHTML = "<p>Les sources du mouvement littéraire Baroque</p>";
	next.onclick = next6;
	previous.setAttribute("onclick", "next5()");
}

function next5() {
	document.getElementById("slide4").style.display = "none";
	document.getElementById("slide6").style.display = "none";
	document.getElementsByClassName("slide").style.display = "none";
	document.getElementById("slide5").style.display = "block";
	next.onclick = next6Common;
	previous.setAttribute("onclick", "next4()");
}

function next4() {
	document.getElementById("slide3").style.display = "none";
	document.getElementById("slide5").style.display = "none";
	document.getElementById("slide4").style.display = "block";
	next.onclick = next5;
	previous.setAttribute("onclick", "next3()");
}

function next3() {
	document.getElementById("slide2").style.display = "none";
	document.getElementById("slide4").style.display = "none";
	document.getElementsByClassName("slide").style.display = "none";
	document.getElementById("slide3").style.display = "block";
	next.onclick = next4;
	previous.setAttribute("onclick", "next2()");
}

function next2() {
	document.getElementById("slide1").style.display = "none";
	document.getElementById("slide3").style.display = "none";
	document.getElementById("slide2").style.display = "block";
	next.onclick = next3;
	previous.setAttribute("onclick", "next1()");
}

function next1() {
	document.getElementById("common").style.display = "none";
	document.getElementById("slide2").style.display = "none";
	document.getElementById("slide1").style.display = "block";
	next.onclick = next2;
	previous.setAttribute("onclick", "");
}
