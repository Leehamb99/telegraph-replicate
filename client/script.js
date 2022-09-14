const journalPost = document.querySelector("#journal-btn")


journalPost.addEventListener('click', e => {
    e.preventDefault()
    PostServer()
    fetchContent(e)
})

async function fetchContent(e) {
    e.preventDefault()
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }

        const response = await fetch('http://localhost:3000/post', options);
        const { id, err } = await response.json();
        if(err) { 
            throw Error(err) 
        } else {
            window.location.hash = `#books/${id}`
        }
    } catch (err) {
        console.warn(err);
    }
}
