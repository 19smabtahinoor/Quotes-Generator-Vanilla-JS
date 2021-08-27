const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => showQuotes(data))
}

// show quotes 
const showQuotes = (quotes) => {
    const quotesContainer = document.getElementById('quote');
    quotesContainer.innerHTML = `${quotes.quote}`
}
