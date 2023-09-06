let toastBox = document.getElementById("toastBox");
let successMsg = "Sucessfully Submitted";
let errorMsg = "Please fix the Error";
let invalidMsg = "Invalid input";

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if(msg.includes('Error')){
    toast.classList.add('error')
  }
  if(msg.includes('Invalid')){
    toast.classList.add('invalid')
  }

  setTimeout(() => {
    toast.remove();
  }, 6000);
}
