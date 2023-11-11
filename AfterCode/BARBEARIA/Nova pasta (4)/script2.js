function validarFormulario() {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    //verifica se os campos foram preenchidos

    if (usuario.trim() === '' || senha.trim() === '') {
        alert('Por favor, preencha todos os campos');
        return false;

    }
    return true;

}

function mascara(input, tipo) {
    var valor = input.value.replace(/\D/g, '');

    if (tipo === 'cpf' && valor.length <= 11) {
        valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    } else if (tipo === 'cnpj' && valor.length <= 14) {
        valor = valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')

    } else if (tipo === 'cep' && valor.length <= 8) {
        valor = valor.replace(/(\d{5})(\d{3})/, '$1-$2')
    } else if (tipo === 'rg' && valor.length <= 9) {
        valor = valor.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4')
    }

}
