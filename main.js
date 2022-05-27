console.log("connected")
let numbers =
document.querySelectorAll(".number");
console.log(numbers);

let display = document.querySelector("#blank")

for (let number of numbers) {
    number.addEventListener("click",
    function(event) {

        console.log("event object: ", "event")
        console.log(event.target.textContent);
        let newElement = 
    document.createElement("p");
    // create a new element, in this case a p
        newElement.innerText = `${event.target.textContent}`
        // updated the inner text of that new element to be the contents of the clicked box
        display.appendChild(newElement);
        // append the new element containing the p tag
        // to the currently empty display
    });
}
let clear = document.querySelector(".clear")
// for (let clear of clear) {
    clear.addEventListener("click", 
    function(event) {
        display.innerText = "";
        // console.log("")
        // console.log(event.target.textContent);
    })

