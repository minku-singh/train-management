// references
// search button references
let searchButton = document.querySelector("#search-button");
let from = document.querySelector("#from");
let to = document.querySelector("#to");

// book button references
let bookButton1 = document.querySelector("#bookbutton1");

let bookButton2 = document.querySelector("#bookbutton2");


// functions
function displayTrain()
{
    // toggle the display of train based on to and from chosen
    if(from.value == "Patna" && to.value == "Pune")
    {
        train1.style.display = "block";
    }

    else if(from.value == "Pune" && to.value == "Patna")
    {
        train2.style.display = "block";
    }

    else
    {
        alert("Invalid Choice mann!")
    }
}

function toggleColor1()
{
    if(bookButton1.innerHTML == "BOOK")
    {
        bookbutton1.style.backgroundColor = "red";
        bookButton1.innerHTML = "UNBOOK";
    }

    else
    {
        bookButton1.innerHTML = "BOOK";
        bookbutton1.style.backgroundColor = "chartreuse";
    }
    
}

function toggleColor2()
{
    if(bookButton2.innerHTML == "BOOK")
    {
        bookbutton2.style.backgroundColor = "red";
        bookButton2.innerHTML = "UNBOOK";
    }

    else
    {
        bookButton2.innerHTML = "BOOK";
        bookbutton2.style.backgroundColor = "chartreuse";
    }
    
}


//events
searchButton.addEventListener("click", displayTrain);

bookButton1.addEventListener("click", toggleColor1);

bookButton2.addEventListener("click", toggleColor2);
