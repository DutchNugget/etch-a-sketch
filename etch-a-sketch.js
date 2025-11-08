
const body = document.getElementById("square");
const squareContainer = document.createElement("div");
squareContainer.classList.add("squareContainer")
body.appendChild(squareContainer);

const numberOfSquares  = document.getElementById("numbers");
const submit = document.getElementById("submit");
submit.addEventListener("click", createSquareDiv)


function createSquareDiv (event) {
    event.preventDefault();

    // clear old square divs
    while (squareContainer.firstChild) {
        squareContainer.removeChild(squareContainer.firstChild);
    }
    // get number input
    let num = numberOfSquares.value
    if (num > 100) {
        num = 100
    }

    console.log(num)
    //total squares variable declared for function
    // size declared for deciding width 
    const totalSquares = num * num
    const size = 100 / num
    //for loop to create num correct amount of squares
    for (let i = 0; i < totalSquares; i++){
        const square = document.createElement("div")
        square.classList.add("grid");
        
       
        square.style.width = size + "%";
        square.style.height = size + "%";

        square.addEventListener("mouseover", changeColor)

        squareContainer.appendChild(square);

    }
    
}


function changeColor (event) {
    let r = Math.floor(Math.random() * 256); 
    let g = Math.floor(Math.random() * 256); 
    let b = Math.floor(Math.random() * 256);
     
    event.target.style.backgroundColor = `rgb(${r},${g},${b})`;
}