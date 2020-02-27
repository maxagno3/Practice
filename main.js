let ul = document.querySelector("ul");
let input = document.querySelector(".input");
var arr = [];

function mainFunction(event) {
    if (input.value === '') {
        // alert('Input cannot be empty!')
    } else if (event.keyCode === 13) {
        let todo = {
            text: event.target.value,
            isDone: false,
            id : Date.now()
        }
        arr.push(todo);
        loopArray(arr);
    }
}

//Function where loop over array is being run.
function loopArray(event) {
    ul.innerHTML = "";
    arr.forEach(looping => {
        let li = document.createElement("li");
        li.setAttribute("data-id", looping.id);
        
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.setAttribute("data-id", looping.id);
        
        let p = document.createElement("p");
        p.innerHTML = looping.text;
        
        let span = document.createElement("span");
        span.innerHTML = "X";
        span.setAttribute("data-id", looping.id)
        
        li.append(checkbox, p, span);
        
        ul.append(li);
        
        console.log(ul);

        checkbox.addEventListener("click", () => strkeItem(looping.id));
        
    })
    input.value = "";
}

// Deleting Items.
function removeItems(event) {
    if(event.target.tagName === "SPAN"){
        console.log(event.target.dataset.id);
        arr = arr.filter(element => !(element.id == event.target.dataset.id));
        console.log(arr);
        loopArray(arr);
    }
}

// True/False.
function strkeItem (id) {
    arr = arr.filter(ticked => {
        if (ticked.id == id) {
            ticked.isDone = !ticked.isDone;
            return ticked;
        } else {
            return ticked;
        }
        loopArray(arr);
        console.log(arr);
    })
}

document.addEventListener("keyup", mainFunction);
ul.addEventListener("click", removeItems);