let input =document.getElementById("input");
let image =document.getElementById("image");



function showPassword(){
    if(input.type.includes("password")){
        input.setAttribute("type", "input");
    image.src= "/Img/visible.png";
    }
    else{
        input.setAttribute("type", "password");
    image.src= "/Img/invisible.png";
    }
}
