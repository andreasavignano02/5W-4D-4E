let item = document.getElementsByClassName("cosedafare-item");

function comparsa() {
    for (let i = 0; i < item.length; i++) {
        item[i].classList.toggle('changevisibility')
}
}

function getInputAndAddItem(e){
    if (e.key !== 'Enter'){
        return;
    }
    let input = document.getElementById('testo')
    let cosedafare = document.getElementById('cosedafare')
    if (input.value !== '') {
        
        cosedafare.innerHTML += `<li class="cosedafare-item"><input type="checkbox">${input.value}</li>`

        input.value = ''
    }

    
}