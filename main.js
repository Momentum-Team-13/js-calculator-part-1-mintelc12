console.log("connected")
let numbers = document.querySelectorAll(".number");
let equals = document.getElementById("evaluation");
let display = document.querySelector("#display")
let clear = document.querySelector(".clear")
// console.log(number);


for (let number of numbers) {
    number.addEventListener("click",
    function(event) {
    console.log(number.innerText)
    
    if (number === equals) {
        display.innerText = math.eval(display.innerText);

    } else {
        display.innerText += event.target.textContent;
    }
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
    });
}


// for (let clear of clear) {
    clear.addEventListener("click", 
    function(event) {
        display.innerText = "";
    })


    