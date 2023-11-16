const allLists = []
let rowNumber = 0
const newList = () => {
    
}

const newListItem = () => {
    rowNumber ++
    const listContent = document.querySelector('#listContentTítulo')
    listContent.innerHTML += `
    <div class="row" id="row${rowNumber}">
        <input type="checkbox">
        <input type="text" onkeyup="writeName()">
    </div>`

}

const writeName = () => {
    window.addEventListener("keyup", (event) => {
        const key = event.key
        if(key === 'Enter'){
            let listItem = document.querySelector('#listContentTítulo input[type="text"]')
            const listItemName = listItem.value
            document.querySelector(`#listContentTítulo #row${rowNumber}`).innerHTML = `
            <input type="checkbox">
            <h3>${listItemName}</h3>`
        }
    })
}