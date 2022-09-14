const journalPost = document.querySelector("#journal-btn")


journalPost.addEventListener('click', e => {
    postJournal(e)
})

async function postJournal(e) {

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
