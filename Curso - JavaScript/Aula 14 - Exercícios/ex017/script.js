function gerar() {
    let num = document.getElementById('tab')
    let tabg = document.getElementById('tabg')
        
    if (num.value.length == 0) {
        alert('Por favor digite um número')
    } else {
        let n = Number(num.value)
        let c = 1 
        tabg.innerHTML = ''
        do {
            let item = document.createElement('option')
            item.innerText = ` ${n} X ${c} = ${n*c}`
            tabg.appendChild(item)
            c++
        } while (c <= 10)
    }
}

/*function gerar() {
    var num = Number(document.getElementById('tab').value)
    let tabg = document.getElementById('tabg')
    if (num == '') {
        alert('Por favor insira um número')
    } else {
        tabg.innerText = ''
        for (c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.innerText = `${c} X ${num} = ${num*c}`
            tabg.appendChild(item)            
        }
    }
}*/