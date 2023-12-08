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

// to do: change dates to datetime format
const commentInfo = {

}

for(let i = 0; i < 3; i++) {
    // add logic to sort by time first
    // commentInfo.sort()
}