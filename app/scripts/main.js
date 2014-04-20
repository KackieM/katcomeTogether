$(document).ready(function() {
	var home = new 
};

function Patient(name,health, disease){
	this.name = name;
	this.health = 100;  
	this.disease = disease; 
	this.changeHealth = function(newHealth){
		this.health = newHealth;
	};


// Page.prototype.generateMarkup = function(data) {
// 	var markup = "";
// 	var i;

// 	for(i = 0; i < data.length; i++"") {

// 		markup += "<li>" + data[i] + "</li>";
// 	}

// 		return markup;
// 	}


// Page.prototype.addToDom = function($el, data) {

// 	var generatedMarkupString = this.generateMarkup(data);

// 	$el.append(generatedMarkupString);
// }

// Band.prototype.addImage = function($el, photo) {

// 	ar imagePath = $("input").val();
	
// 	var markupImage = "<img src=\""	+ imagePath + "\" + "image.name + "\">;		
	
// 	$el.append(generatedMarkupString);
// }

// 	}


// };

