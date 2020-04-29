////////////// Part 1 /////////////////////
/* 1.1) Link the CSS file by setting the href attribute of <link> */

document.querySelector('link').href = '../CSS/styles.css';

/* 1.2) Set the class of the image to "list-img" */
document.querySelector('.hearder img').className = 'list-img';
// .class won't work, must be .className
/* 1.3) Set the classes of the inputs (buttons) to "btn" by using a loop */
let nodeList = document.querySelectorAll('input');

for(i=0; nodeList.length; i++) {
        nodeList[i].className = 'btn';
}; 

////////////// Part 2 /////////////////////

/* 2.1) grab the <ul> that we are going to append <li> nodes to and store it in a variable */

let ul_element = document.querySelector("#grocery-list");



/* 2.2) When the user clicks the ADD button, ask them what item they need to add and then:
        1. Create a new li Element
        2. Create the text node with the user's input
        3. Append the text node to the li Element
        4. Add the li Element to the unordered list by appending it to the variable created in step 2.1 */

function addItem() {
        let user_answer = prompt("What do you want to add?")
        let new_element = document.createElement("li");
        new_element.innerText = user_answer;
        console.log(new_element);
        ul_element.appendChild(new_element);
}



/* 2.3) When the user clicks the TOTAL button:
        1. Display the total area by setting the total-area class to just "total-area"
        2. Total the number of groceries by getting the length of the li NodeList
        3. Add the count to the page by setting the textContent of #item-count */

function getTotal() {
        // document.querySelector(".total-area").getElementsByClassName.display = "block";
        document.querySelector(".total-area").style.display = "block";
        const num_items = all_list_items;
        const num_items = all_list_items.length;
        console.log(num_items);
        decodeURIComponent.querySelector("#item-count").innerText = num_items;
}


////////////// BONUS /////////////////////
/*  When the user clicks the REMOVE button, ask them what item they want to remove and then:
    1. Remove the item from the list with removeChild by comparing the user's response to the textContent of each <li> */

    function removeItem() {
            let user_input = prompt("Which item do you want to remove?");
            all_list_items = document.querySelectorAll("li");
            for (let i=0; i<all_list_items; i++) {
                if (all_list_items[i].innerText ===user_input) {
                        all_list_items[i].remove();
                }
    }    

    }