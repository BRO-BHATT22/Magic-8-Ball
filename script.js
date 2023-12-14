function shakeMagic8Ball(){
    const question = prompt('Ask the Magic 8-ball a question:')
    if(question === null) {
        document.getElementById('response-text').innerText = 'Bro, you are not sneaky.. Ask a question'
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById('response-image').src = '#BAD/IMAGE'
    }

if(!question.trim()) {
    alert('Please enter a valid question!')
    return
}

}