 /*
	Author: Ibor Esteban - https://github.com/IEstebanM
	This website has been made as a result of an exercise of the odin project ( https://www.theodinproject.com ).
	License: CC BY-ND This license lets others reuse the work for any purpose, including commercially;
	however, it cannot be shared with others in adapted form, and credit must be provided to the author. 
    */	


//Get size
let gridSelection = document.getElementById("sizeSlider").value;
//Grid creation
gridCreation(gridSelection);


//Slider grid restart
let slider = document.getElementById("sizeSlider");
slider.addEventListener("mouseup", gridRestart);



//Change color onmouseOver
function gridCreation (gridSelection) {
 
	for (let step = 0; step < ( gridSelection * gridSelection) ; step++) {
		var gridUnit = document.createElement("div");
		let gridWidth = 100 / gridSelection + "%";
		gridUnit.style.width = gridWidth;		
		gridUnit.className = "classUnit";
		gridUnit.addEventListener("mouseover", function ( changeColor ) { changeColor.target.className = "classUnit:active"; } );
		document.getElementById("screen").appendChild(gridUnit);
	}

	   
}

// Remove grid
function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}


//Restart grid with selected size
function gridRestart() {		
	removeElementsByClass("classUnit");	
	removeElementsByClass("classUnit:active");	
	gridSelection = document.getElementById("sizeSlider").value;	
	gridCreation(gridSelection);
	
}

