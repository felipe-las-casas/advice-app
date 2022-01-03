let btn = document.querySelector('button')
btn.onclick = searchMessage  => {
    showData = (response) => {
        value = response.slip.advice
        return value
    }
    let p = document.querySelector('p')
    fetch('https://api.adviceslip.com/advice')
        .then(response => {response.json()
        .then(data => p.textContent = `"${showData(data)}"`)
    })
}