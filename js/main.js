(function (){
	"use strict";
	console.log("works!");

var initialBox = document.querySelector("#initial"),
	ypos = window.pageYOffset;
console.log(initialBox);

function fadeIn(){
	console.log(ypos);
	
		initialBox.classList.add("hidden");

	};
	

}



window.addEventListener("scroll", fadeIn, false);



})();