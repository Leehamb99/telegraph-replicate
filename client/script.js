const journalPost = document.querySelector("#journal-btn")
const form = document.querySelector(".user-input")

journalPost.addEventListener('click', e => {
    postJournal(e);
    e.preventDefault();
})

async function postJournal(e) {
    e.preventDefault()

    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: document.querySelector('#username').value,
                title: document.querySelector('#journal-name').value,
                text: document.querySelector('#post-content').value
            })
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
