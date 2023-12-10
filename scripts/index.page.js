function createAndAppendElement(parent, elementInfo) {
    let element = newElement(elementInfo);
    parent.appendChild(element);
    return element
}

function newElement(elementInfo) {
    let element = document.createElement(elementInfo.tag);
    elementInfo.classes.forEach((classItem) => (element.classList.add(classItem)))
    element.textContent = elementInfo.content;
    return element
}

function displayComment(commentInfo) {
    const commentsContainer = document.querySelector(".comments__container")

    const comment = createAndAppendElement(commentsContainer, {tag:'article', classlist:
['comment'], content: ''})

    createAndAppendElement(comment, {tag: 'div', classes: ['comment__img'], content: ''})
    createAndAppendElement(comment, {tag: 'p', classes: ['comment__name'], content:
    commentInfo.name})
    createAndAppendElement(comment, {tag: 'p', classes: ['comment__date'], content:
    commentInfo.date})
    createAndAppendElement(comment, {tag: 'p', classes: ['comment__text'], content:
    commentInfo.comment})
}

function createComment(name, date, commentText, commentArray) {
    commentArray.push
}

const commentInfo = [
    {name: "Connor Walton", date: "02/17/2021", comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."}, 
    {name: "Emilie Beach", date: "01/09/2021", comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
    {name: "Miles Acosta", date: "12/20/2020", comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."}
]

commentInfo.forEach((comment) => displayComment(comment))

const form = document.querySelector(".form");
function formSubmitHandler(event) {
    event.preventDefault()

    const date = new Date(Date,now())
    const currentDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()

    createComment(event.target.name.value, Date.now(), event.target.comment.value,
    commentInfo)

    const commentsContainer = document.querySelector(".comments__container");
    commentsContainer.innerHTML = '';

    commentInfo.forEach((comment) => displayComment(comment))

    event.target.reset();
}

form.addEventListener('submit', formSubmitHandler);
