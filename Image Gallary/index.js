let scrollContsiner = document.querySelector(".gallary");
let backBtn= document.getElementById('backBtn');
let nextBtn= document.getElementById('nextBtn');

scrollContsiner.addEventListener("wheel",(evt) =>{
    evt.preventDefault();
    scrollContsiner.scrollLeft += evt.deltaY;
    scrollContsiner.scrollLeft += auto;
} )

backBtn.addEventListener("click",() =>{
    scrollContsiner.style.scrollBehavior= "smooth";
    scrollContsiner.scrollLeft += 900;
} )

nextBtn.addEventListener("click",() =>{
    scrollContsiner.style.scrollBehavior= "smooth";
    scrollContsiner.scrollLeft += 900;
} )