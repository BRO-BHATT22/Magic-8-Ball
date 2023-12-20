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
            image = "s-l1200.jpg" 
            color = "text-success"
            break
        case 1:
            answer = "It is decidedly so"
            image = "41tEphlx2hL._AC_.jpg" 
            color = "text-primary"
            break
        case 2:
            answer = "Reply hazy, please try again"
            image = "FaIyt53WQAEQYe-.png" //change please
            color = "text-muted"
            break
        case 3:
            answer = "Cannot predict now"
            image = "500_F_115106667_PIfPY9i1x5kZsljc2zKotT0WL1pJOJoe.jpg" //change please
            color = "text-primary"
            break
        case 4:
            answer = "Don't count on it mah boi"
            image = "1f95eb8f18e173d16b1ff3e633f68903.png" //change please
            color = "text-danger"
            break
        case 5:
            answer = "Yikes, the outlook ain't looking so hot"
            image = "41dEe8CqAHL._AC_.jpg" //change please
            color = "text-success"
            break
        case 6:
            answer = "I'm checking my sources now and they all say no"
            image = "082f12985721a25fef0cbf36bcb746ec (1).jpg" //change please
            color = "text-muted"
            break
        case 7:
            answer = "You're in luck, the sign point to yes"
            image = "0193674-0000000-0474762-primary.webp" //change please
            color = "text-success"
            break
        default:
            break

    }

    const responseText = document.getElementById('response-text')
    responseText.innerText = answer
    responseText.classList = `display-4 ${color}`
    document.getElementById('response-image').src = `images/${image}`

}