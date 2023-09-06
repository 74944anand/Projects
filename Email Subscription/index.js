const msg = document.getElementById('msg');

function msgOut(){
    msg.innerHTML= "Thanks for Subscribing!";
    setTimeout(function(){
        msg.innerHTML= "";
    },5000)
}