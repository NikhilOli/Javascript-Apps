const checkIcon = document.getElementById('checkIcon');
const xIcon = document.getElementById('xIcon');
let container3= document.getElementById('container3')[0];
const container2 = document.getElementByClassName('container2');[0];
let text = document.getElementById('text').value;
function createNote(){
    if(container3.style.display == "block"){
        container3.style.display = "none";
    }  else {
        container3.style.display =   "block";
    }
}
function addNote(){
    h1 = document.createElement('h1');
    h1.innerHtml = text.value;
    container2.appendChild(h1);
}
checkIcon.addEventListener('click', function(){
    addNote();
})