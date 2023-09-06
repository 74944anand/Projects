const apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const inputBox = document.getElementById("inputBox");
const qrCodeBox = document.getElementById("qrCodeBox");
const qrImg = document.getElementById("qrImg");


function qrGenrator() {
 if(inputBox.value.length >0){
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ inputBox.value;
    qrCodeBox.classList.add("show-Img")
 }else{
    inputBox.classList.add('error');
    setTimeout(() => {
        inputBox.classList.remove('error')
    }, 1000);
 }
}
