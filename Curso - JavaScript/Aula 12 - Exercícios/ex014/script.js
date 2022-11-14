function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var saud = document.getElementById('saud')
    var dia = new Array ("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado")
    var mes = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    //var hora = 21
    saud.innerHTML = `Hoje é ${dia[data.getDay()]}, ${data.getDate()} de ${mes[data.getMonth()]} de ${data.getFullYear()}.`
    //msg.innerHTML = `Agora são <strong>${hora}:${min}:${seg}</strong> horas.`
    setTimeout('carregar()', 500)
    if (hora >= 0 && hora < 12) {
        // BOM DIA 
        img.src = 'manha.png'
        msg.innerHTML = `Agora são <strong>${hora}:${min}:${seg}</strong> horas. <strong><br>BOM DIA</br></strong>`
        document.body.style.background = '#c66535'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'tarde.png'
        msg.innerHTML = `Agora são <strong>${hora}:${min}:${seg}</strong> horas. <strong><br>BOA TARDE!</br></strong>`
        document.body.style.background = '#8a555b'
    } else {
        //BOA NOITE
        img.src = 'noite.png'
        msg.innerHTML = `Agora são <strong>${hora}:${min}:${seg}</strong> horas. <strong><br>BOA NOITE!</br></strong>`
        document.body.style.background = '#283445'
    }

}