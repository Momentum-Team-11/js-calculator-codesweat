//checking to ensure script is working with the console
console.log("Hello World!");

//declaring a variable called numButtons
//setting the value to an array of buttons (asking for an element whose class name is buttons)
const numButtons = document.querySelectorAll(".button");
//testing to see if what we're getting is actually an array of buttons
console.log("array of buttons", numButtons);

//declaring variable called display
//setting the value to an element whose id name is display
const display = document.getElementById("display");
//testing to see if we're actually grabbing the element called display
console.log('display div', display)

//for every button in my array of numButtons
for (let button of numButtons) {
    //listen for a click event
    //in my arrow function: pass an event as a parameter
    button.addEventListener("click", (event) => {
//check that the button's id is not equal to eval
        if (event.target.id !== "eval") {
            //setting the innerText of display element equal to 
            //the id of the button that was just clicked
            display.innerText += event.target.id;
            //testing to see if we're actually grabbing the element's id
            console.log("event object", event.target.id);
        }

        //if the button's id equals "clear"...
        if (event.target.id === "clear") {
            //setting the element with the id of display's innerText to an empty string
            display.innerText = "";
        }
//if the button's id is equal to eval...
        if (event.target.id === "eval") {
            //declaring a variable and calling it result
            //using the javascript eval method to evaluate the innerText of the display div
            let result = eval(display.innerText)
            //setting the value of the display div to result
            //which is an evaluation the display divs previous innerText 
            display.innerText = result
            console.log(result);
            console.log('eval clicked!')
        }


    });
}


// // number1.addEventListener('click', () => {
//     display.innerText += '1'
//     console.log('button clicked!');
// });

//arrow function : () => {}
// 'traditional' function: function functionName() {}