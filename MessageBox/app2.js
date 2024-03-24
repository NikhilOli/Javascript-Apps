const MessageInput = document.getElementById('message-input')
const empty = document.getElementById('empty')
const submit = document.getElementById('submit')
const MessageOutput = document.getElementById('message-output')

MessageInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        getMessage();
    }
})
function getMessage() {
    if(MessageInput.value === '') {
            empty.style.display =  'block';} else
    {MessageOutput.innerHTML = MessageInput.value;
    MessageInput.value = '';}
}