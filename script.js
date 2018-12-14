/*var button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function(){
	console.log("Click!!!");
});

button.addEventListener("mouseleave", function(){
	console.log("mouse left!!");
});*/

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;

}

function createElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
}

function addAfterClick(){
	if(inputLength() > 0){
    createElement();
	} 
}
function addAfterPress(event){
	if(inputLength() > 0 && event.keyCode === 13 ){
	createElement();
}	
}


button.addEventListener("click",addAfterClick)

input.addEventListener("keypress",addAfterPress)

/*
In the previous video you saw something interesting:

Event listener syntax : 

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
You didn't see the function being called like this as you may have expected: 

button.addEventListener("click", addListAfterClick());
input.addEventListener("keypress", addListAfterKeypress(event));


This is something called a callback function.
 When that line of javascript runs, we don't want the addLisAfterClick function to run because 
 we are just adding the event listener now to wait for click or keypress. 
 We want to let it know though that we want this action to happen when a click happens. 
 So the function now automatically gets run (gets added the ()) every time the click happens. 
 So we are passing a reference to the function without running it.

 To react to an event you listen for it and supply a function which will be called by the browser when the event occurs.
  This function is known as a callback. 
*/