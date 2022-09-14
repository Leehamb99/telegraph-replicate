const journalPost = document.querySelector("#journal-btn")


journalPost.addEventListener('click', e => {
    e.preventDefault()
    PostServer()
    fetchContent()
})
