const blackBtn = document.querySelector('.nigga');
function makeItDark(){
    document.body.style.background="linear-gradient(135deg,#000000 50%,#3b3b3b 50%)";
   document.body.style.color="#ffffff"; 
   document.body.style.backgroundAttachment="fixed";
}
blackBtn.addEventListener('click',makeItDark);
const resetBtn = document. querySelector('.clickOn');
function resetColors(){
document.body.style.background="linear-gradient(130deg,#b0e0e6 50%,#fffff0 50%)"
    document.body.style.color="#000000";
    document.body.style.backgroundAttachment="fixed"; 
}
resetBtn.addEventListener('click',resetColors);