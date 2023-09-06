var password = document.getElementById("password");
var msg = document.getElementById("msg");
var text = document.getElementById("text");
var container = document.getElementById("container");

password.addEventListener('input', ()=>{
    if(password.value.length>0 ){
        msg.style.display = "block";

        if(password.value.length<4){
           text.innerHTML= "Weak";
           container.style.borderColor = "#ff5925";
           msg.style.color="#ff5925";
        }
        else if(password.value.length<8){
            text.innerHTML= "Medium";
            container.style.borderColor = "yellow";
            msg.style.color="yellow";
         }
         else if(password.value.length >=8){
            text.innerHTML= "Strong"
            container.style.borderColor = "#26d730";
            msg.style.color="#26d730";
         }}
       
        else{
            msg.style.display = "none";
            container.style.borderColor = "black"
        }
})
