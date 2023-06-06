//? add 16x16 square div

canvas = document.querySelector('.canvas');

function addSquare(canvas,id){
    block = document.createElement('div');
    block.className='block';
    block.id = id;
    block.setAttribute("onmouseover", "addColor(event)");
    canvas.appendChild(block);
    
}



function addColor(e){
    e.target.style.backgroundColor = "blue";
}

function gridDimensions(){
    let numberOfColumns = parseInt(prompt('Number of columns in each side'));
    canvas.style.gridTemplateColumns=`repeat(${numberOfColumns}, 1fr)`;
    canvas.style.gridTemplateRows=`repeat(${numberOfColumns}, 1fr)`;
     return numberOfColumns*numberOfColumns
}

onload=function makeCanvas(){
    let numberOfColumns = gridDimensions()
    for (var i = 0 ; i < numberOfColumns ; i++) {
        addSquare(canvas,i)
    }
}