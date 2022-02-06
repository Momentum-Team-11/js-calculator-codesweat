console.log("Hello World!");

const numButtons = document.querySelectorAll(".button");
console.log("array of buttons", numButtons);

const display = document.getElementById("display");
console.log('display div', display)

for (let button of numButtons) {
    button.addEventListener("click", (event) => {

        if (event.target.id !== "eval") {
            display.innerText += event.target.id;
            console.log("event object", event.target.id);
        }

        if (event.target.id === "clear") {
            display.innerText = "";
        }

        if (event.target.id === "eval") {
            let result = eval(display.innerText)
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