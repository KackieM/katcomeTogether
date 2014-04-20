$(document).ready(function(){


var about = new Page("about", discography);
var discography;
home.addToDom($(".discography"), discography);

$("discography").append(about.generateMarkup(tweets));
 discography.addImage($("container"))

$(".btn").click(function(e){
	e.preventDefault();
	alert("Hey Music!")
}
about.addToDom($".discography"), discography);

console.log(home.generateMarkup(discography);
});