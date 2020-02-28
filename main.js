let ul = document.querySelector("ul");
let input = document.querySelector(".input");
let arr = [];
let footer = document.querySelector(".footer");
let listItems = document.querySelector("span");
let activeBtn = document.querySelector(".active");
let completeBtn = document.querySelector(".completed")
let allbtn = document.querySelector(".all");

// Main function where the object is being pushed into array.
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
function loopArray(arr) {
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
        
        itemsLeft();
        
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

// Items left.
function itemsLeft(loopArray, event) {
    let items = arr.filter(value => (value.isDone === false)).length;
    listItems.innerText = `${items} items left`;
}

// Active.
function activeItems(arr, event){
    ul.innerText = '';
    arr = arr.filter(selected => selected.isDone === false);
    console.log(arr);
    loopArray(arr);
}

// Completed.
function completeItems(arr, event){
    ul.innerHTML = "";
    let completeArray = [];
    completeArray = arr.filter(comp => comp.isDone === true);
    loopArray(completeArray);
    console.log(completeArray);
}

//All.
function allItems (arr, event){
    ul.innerHTML = '';
    loopArray(arr);
    console.log(arr);
}

document.addEventListener("keyup", mainFunction);
ul.addEventListener("click", removeItems);
activeBtn.addEventListener("click", () => activeItems(arr, event));
completeBtn.addEventListener("click", () => completeItems(arr, event));
allbtn.addEventListener("click", () => allItems(arr, event));