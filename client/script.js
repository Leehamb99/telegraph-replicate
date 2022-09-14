const journalPost = document.querySelector("#journal-btn")


journalPost.addEventListener('click', (e) => {
    e.preventDefault()
    postJournal()
})

async function postJournal(e) {
    e.preventDefault()
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }

        const response = await fetch('http://localhost:3000/blogs', options);
        const { id, err } = await response.json();
        if(err) { 
            throw Error(err) 
        } else {
            window.location.hash = `#blogs/${id}`
        }
    } catch (err) {
        console.warn(err);
    }
}
