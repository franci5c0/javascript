function carregar() {
 var msg = document.getElementById('msg')
 var img = document.getElementById('imagem')
 var data = new Date()
 var hora = data.getHours()
 msg.innerHTML = `Agora são ${hora} horas`

if (hora >=0 && hora < 12) {
    //Bom dia!
img.src = 'fotomanha.png'
document.body.style.background = '#fcaf61'
document.getElementsByClassName('texto')[0].style.color = 'black'
document.getElementsByClassName('texto')[1].style.color = 'black'
}

else if (hora >=12 && hora < 18) {
    //Boa tarde!
    
    img.src = 'fototarde.png'
    document.body.style.background = "#cd5310"
}

else {
    //Boa noite!

    img.src = 'fotonoite.png'
    document.body.style.background = "#062b55"
}
}
