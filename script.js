function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8-ball a question:')
    if (question === null) {
        document.getElementById('response-text').innerText = 'Bro, you are not sneaky.. Ask a question'
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById('response-image').src = '#BAD/IMAGE'
        return
    }

    if (!question.trim()) {
        alert('Please enter a valid question!')
        return
    }
    const randomNumber = Math.floor(Math.random() * 18)
    let answer, image, color

    switch (randomNumber) {
        case 0:
            answer = "Yes"
            image = "Yes-image.jpg" //change please
            color = "text-success"
            break
        case 1:
            answer = "It is decidedly so"
            image = "Yes-image.jpg" //change please
            color = "text-primary"
            break
        case 2:
            answer = "Reply hazy, please try again"
            image = "Yes-image.jpg" //change please
            color = "text-muted"
            break
        case 3:
            answer = "Cannot predict now"
            image = "Yes-image.jpg" //change please
            color = "text-primary"
            break
        case 4:
            answer = "Don't count on it mah boi"
            image = "Yes-image.jpg" //change please
            color = "text-danger"
            break
        case 5:
            answer = "Yikes, the outlook ain't looking so hot"
            image = "Yes-image.jpg" //change please
            color = "text-success"
            break
        case 6:
            answer = "I'm checking my sources now and they all say no"
            image = "Yes-image.jpg" //change please
            color = "text-muted"
            break
        case 7:
            answer = "You're in luck, the sign point to yes"
            image = "Yes-image.jpg" //change please
            color = "text-success"
            break
            case 8:
            answer = "Without a doubt"
            image = "Yes-image.jpg" //change please
            color = "text-warning"
            break
            case 9:
            answer = "As I see it, yeah"
            image = "Yes-image.jpg" //change please
            color = "text-success"
            break
            case 10:
            answer = "oof, I can't tell you now"
            image = "Yes-image.jpg" //change please
            color = "text-warning"
            break
            case 11:
            answer = "Try asking again"
            image = "Yes-image.jpg" //change please
            color = "text-dark"
            break
            case 12:
            answer = "I'm pretty doubtful, thats just me though"
            image = "Yes-image.jpg" //change please
            color = "text-info"
            break
            case 13:
            answer = "Long rest, and try again"
            image = "Yes-image.jpg" //change please
            color = "text-warning"
            break
            case 14:
            answer = "Trust me, you don't want to know"
            image = "Yes-image.jpg" //change please
            color = "text-primary"
            break
            case 15:
            answer = "Meh"
            image = "Yes-image.jpg" //change please
            color = "text-secondary"
            break
            case 16:
            answer = "Yessir"
            image = "Yes-image.jpg" //change please
            color = "text-success"
            break
            case 17:
            answer = "nah bro"
            image = "Yes-image.jpg" //change please
            color = "text-danger"
            break
        default:
            break

    }

    const responseText = document.getElementById('response-text')
    responseText.innerText = answer
    responseText.classList = `display-4 ${color}`
    document.getElementById('response-image').src = `images/${image}`

}