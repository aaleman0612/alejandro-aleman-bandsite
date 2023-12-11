function createCommentElement(obj) {
    const newTimestamp = document.createElement('p')
    newTimestamp.classList.add('comment-timestamp')
    newTimestamp.textContent = obj.timestamp
    ? obj.timestamp
    : new Date().toLocaleString()

    const newHeader = document.createElement('h3')
    newTimestamp.classList.add('comment-name')
    newHeader.textContent = obj.name

    const newParagraph = document.createElement('p')
    newTimestamp.classList.add('comment-value')
    newParagraph.textContent = obj.value

    const newComment = document.createElement('li')
    newComment.classList.add('comment')
    newComment.appendChild(newHeader)
    newComment.appendChild(newTimestamp)
    newComment.appendChild(newParagraph)

    document.getElementById('comments').appendChild(newComment)
}

document
    .getElementsId('comment-form')
    .addEventListener('submit', function (event) {
    event.preventDefault()

    const inputs = [
        {
        label: 'name',
        elementId: 'comment-name'
        },
        {
        label: 'value',
        elementId: 'comment-text'
        }
    ]

    const value = {}

    inputs.forEach(function (input) {
        const inputElement = document.getElementById(input.elementId)
        const inputValue = inputElement.value
        inputElement.value = ''

        value[input.label] = inputValue
    })

    createCommentElement(value)
    })

const commentValues = [
    {
    name: 'Connor Walton',
    value: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
    timestamp: new Date('2021-02-17').toLocaleString()
    },
    {
    name: 'Emilie Beach',
    value: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
    timestamp: new Date('2021-01-09').toLocaleString()
    },
    {
    name: 'Miles Acosta',
    value: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    timestamp: new Date('2020-12-20').toLocaleString()
    }
]

const commentsList = document.getElementById('comments')

commentValues.forEach(function (obj) {
    createCommentElement(obj)
})



// commentInfo.forEach((comment) => displayComment(comment))

// const form = document.querySelector("form");

// function formSubmitHandler(event) {
//     event.preventDefault()

//     const date = new Date(Date,now())
//     const currentDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()

//     createComment(event.target.name.value, Date.now(), event.target.comment.value,
//     commentInfo)

//     const commentsContainer = document.querySelector(".comments__container");
//     commentsContainer.innerHTML = '';

//     commentInfo.forEach((comment) => displayComment(comment))

//     event.target.reset();
// }

// form.addEventListener('submit', formSubmitHandler);

