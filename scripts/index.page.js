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

const commentInfo = {
    (name: "Connor Walton", date: "02/17/2021", comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.")
    
}

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
