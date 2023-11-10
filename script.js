var filterbuttons = document.querySelectorAll(".filter_buttons button");
var flexableimg = document.querySelectorAll(".flexableimg .cards");

// console.log(filterbuttons, flexableimg);

var filtercards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    // console.log(e.target);
    
    flexableimg.forEach(cards => {
        cards.classList.add("hide");
        if(cards.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            cards.classList.remove("hide");
        }
    });
};

filterbuttons.forEach(button => button.addEventListener("click", filtercards));
