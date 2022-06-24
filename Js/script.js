function alterarCss() {
    // declaração de variaveis
    var estilo = document.getElementById('body');
    var corTexto = document.getElementById('cor-texto').value;
    var corFundo = document.getElementById('cor-fundo').value;
    var tamanhoTexto = document.getElementById('tamanho-texto').value;
    
    // mudar a estilização da página
    estilo.style = 'color: ' +corTexto + '; background-color: ' + corFundo + ';font-size: ' + tamanhoTexto + 'px;';
}
