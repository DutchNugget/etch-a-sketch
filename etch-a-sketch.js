
const body = document.getElementById("square");
const squareContainer = document.createElement("div");
squareContainer.classList.add("squareContainer")
body.appendChild(squareContainer);


function createSquareDiv (num) {
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

        squareContainer.appendChild(square);
    }
   
    
    
}

createSquareDiv(20);