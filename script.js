function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8-ball a question:')
    if (question === null) {
        document.getElementById('response-text').innerText = 'Bro, you are not sneaky.. Ask a question'
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById('response-image').src = 'SP000073-500x500.webp'
        return
    }

    if (!question.trim()) {
        alert('Please enter a valid question!')
        return
    }
    const randomNumber = Math.floor(Math.random() * 8)
    let answer, image, color

    switch (randomNumber) {
        case 0:
            answer = "Yes"
            image = "yes.png" 
            color = "text-success"
            break
        case 1:
            answer = "It is decidedly so"
            image = "i-guess-so-philip-j-fry.gif" 
            color = "text-primary"
            break
        case 2:
            answer = "Reply hazy, please try again"
            image = "cog.jpg" //change please
            color = "text-muted"
            break
        case 3:
            answer = "Cannot predict now"
            image = "idk.jpg" //change please
            color = "text-primary"
            break
        case 4:
            answer = "Don't count on it mah boi"
            image = "count.png" //change please
            color = "text-danger"
            break
        case 5:
            answer = "Yikes, the outlook ain't looking so hot"
            image = "yikes.png" //change please
            color = "text-success"
            break
        case 6:
            answer = "I'm checking my sources now and they all say no"
            image = "source.jpg" //change please
            color = "text-muted"
            break
        case 7:
            answer = "You're in luck, the sign point to yes"
            image = "point.jpg" //change please
            color = "text-success"
            break
        default:
            break

    }

    const responseText = document.getElementById('response-text')
    responseText.innerText = answer
    responseText.classList = `display-4 ${color}`
    document.getElementById('response-image').src = `${image}`

}