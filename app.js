const container = document.querySelector('.container');



let num = 16;
let size = 600/num;
let len = 100/num;

function changeSize() {
    newNum = parseInt(prompt('Enter the number of divs:'))
    while(!(newNum > 0 && newNum <=100)) {
        newNum = parseInt(prompt('Enter a number between[0,100]:'))
    }
    container.replaceChildren()



    let newSize = 600/newNum;
    let sum = 0;
    len = 100/newNum;
    for (let i = 0; i < newNum; i++) {
    
        rowDiv = document.createElement('div')
        rowDiv.classList.add('row-div')
        rowDiv.style.width = `${len}%`
        for (let j =0; j<newNum; j++) {
            gridDiv = document.createElement('div')
            gridDiv.classList.add('grid-div');
            gridDiv.style.height = `${len}%`;
            gridDiv.style.width = `100%`;
            gridDiv.setAttribute('onmouseover', 'this.classList.add("hover")');
    
            rowDiv.appendChild(gridDiv)
        }
        
        container.appendChild(rowDiv)
    }
}

for (let i = 0; i < num; i++) {
    rowDiv = document.createElement('div')
    rowDiv.classList.add('row-div')
    rowDiv.style.width = `${len}%`
    for (let j =0; j<num; j++) {
        gridDiv = document.createElement('div')
        
        gridDiv.classList.add('grid-div');
        gridDiv.style.height = `${len}%`;
        gridDiv.style.width = `100%`;
        gridDiv.setAttribute('onmouseover', 'this.classList.add("hover")');

        rowDiv.appendChild(gridDiv)
    }
    
    container.appendChild(rowDiv)
}


