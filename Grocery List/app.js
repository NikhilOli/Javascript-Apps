pencil = document.getElementById('pencil')
userInput = document.getElementById('userInput')
allItems = document.getElementById('allItems')
cross = document.getElementById('cross')
cross.addEventListener('click', function(){
    allItems.innerText = "";
})
pencil.addEventListener('click', function(){
addItem();
})
userInput.addEventListener('keydown', function(event){
if(event.key == 'Enter') {
    addItem();
}
})
function addItem() {
    let h2 = document.createElement('h2');
    h2.innerHTML = '-' + userInput.value;          
    h2.addEventListener('click', function (){
h2.style.textDecoration = 'line-through';
    })
    allItems.insertAdjacentElement('beforeend', h2)
    userInput.value = '';
}
