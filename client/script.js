

const main = document.querySelector(".journal-area")
const textInput = document.querySelector(".text-input-box")
const journalPost = document.querySelector("#journal-btn")
const form = document.querySelector(".user-input")
const searchPost = document.querySelector("#search-btn")

searchPost.addEventListener('click', e => {

    getJournal(document.querySelector('#search').value)
    e.preventDefault()
})

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
            getJournal(id)
        }
    } catch (err) {
        console.warn(err);
    }
}

async function getJournal(id) {
    try {
        const response = await fetch(`http://localhost:3000/blogs/${id}`);
        const data = await response.json()
        viewJournal(data);
    } catch (err) {
        console.warn(err);
    }
}

function viewJournal(data){
    textInput.textContent = "";
    let cardTitle = document.createElement('div');
    let cardText = document.createElement('div');
    let cardName = document.createElement('div');
    cardTitle.textContent = data.title; 
    cardText.textContent = data.text; 
    cardName.textContent = data.name; 
    main.prepend(cardTitle)
    main.prepend(cardText)
    main.prepend(cardName)

}

