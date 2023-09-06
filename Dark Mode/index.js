let contentM = document.getElementById("contentM");
let logoM = document.getElementById("logoM");

function darkMode(){
    if(contentM.className.includes("start")){
        contentM.classList.add("content");
        contentM.classList.remove("start");
        logoM.src= "/Img/day.png";
    }
    else{
        contentM.classList.remove("content");
        contentM.classList.add("start");
        logoM.src= "/Img/dark.png";
    }
    
}