console.log("connected")
let numbers = document.querySelectorAll(".number");
let equals = document.getElementById("evaluation");
let display = document.querySelector("#display")
let clear = document.querySelector(".clear")
let exponent = document.getElementById("exponent")

// numbers.addEventListener("mouseover", () => {
//     numbers.style.backgroundImage = `url("cyan")`
// })
// numbers.addEventListener("mouseleave", () => {
//     numbers.style.backgroundImage = `url("outer-space.jpeg")`
// }) 


// function to allow the = to work properly:
for (let number of numbers) {
    number.addEventListener("click",
    function(event) {
    console.log(number.innerText)
    
    if (number === equals) {
        display.innerText = math.eval(display.innerText);

    } else if (number === decimal) {
        display.innerText = "0."
    } else {
        display.innerText += event.target.textContent;
    }
    })
    // number.addEventListener("click", function onClick(event) {
    //     display.style.backgroundColor = "#72D2D8F";
    // });
}



// display.addEventListener("mouseover", )
// document.getElementById("number").addEventListener("click", function() {
//     document.getElementById("numbers").style.backgroundColor = "cyan";
// });


document.addEventListener("keydown", (event) => {
    if (event.key == "0") {
        display.innerText += "0";
    } else if (event.key == "1") {
        display.innerText += "1";
    } else if (event.key == "2") {
        display.innerText += "2"; 
    } else if (event.key == "3") {
        display.innerText += "3";
    } else if (event.key == "4") {
        display.innerText += "4";
    } else if (event.key == "5") {
        display.innerText += "5";
    } else if (event.key == "6") {
        display.innerText += "6";
    } else if (event.key == "7") {
        display.innerText += "7";
    } else if (event.key == "8") {
        display.innerText += "8";
    } else if (event.key == "9") {
        display.innerText += "9";
    } else if (event.key == "0") {
        display.innerText += "0";
    } else if (event.key == "/") {
        display.innerText += "/";
    } else if (event.key == "+") {
        display.innerText += "+";
    }  else if (event.key == "*") {
        display.innerText += "*";
    } else if (event.key == "-") {
        display.innerText += "-";
    } else if (event.key == "(") {
        display.innerText += "(";
    } else if (event.key == ")") {
        display.innerText += ")"; 
    } else if (event.key == "=") {
        display.innerText = math.eval(display.innerText);
    } else if (event.key == "%") {
        display.innerText += "%"; 
    } else if (event.key == "c") {
        display.innerText = "";
    } else if (event.key == "^") {
        display.innerText += "^";
    } 
})


        clear.addEventListener("click", 
        function(event) {
            display.innerText = "";
        })


    // console.log("event object: ", "event")
    //     console.log(event.target.textContent);
    //     let newElement = 
    // document.createElement("p");
    // // create a new element, in this case a p
    //     newElement.innerText = `${event.target.textContent}`
    //     // updated the inner text of that new element to be the contents of the clicked box
    //     display.appendChild(newElement);
        // append the new element containing the p tag
        // to the currently empty display