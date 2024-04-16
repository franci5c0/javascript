function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')

if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
}

else {
    alert('tudo ok')
    var fsex = document.getElementsByTagName('radsex')[0]//não vou usar no momento
    var idade = ano - Number(fano.value) //calcular idade
    res.innerHTML = `idade calculada ${idade}`//para testar se a função está correta

}
}