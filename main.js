$(document).ready(function(){
    $('#cpf').mask('000.000.000-00', {
        placeholder: 'xxx.xxx.xxx-xx'
    })
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(xx) xxxxx-xxxx'
    })
    $('#cep').mask('00000-000', {
        placeholder: 'xxxxx-xxx'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            cpf: {
                required: true  
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            enderecoCompleto: {
                required: true
            },
            cep: {
                required: true
            },
        },

        messages: {
            nome:'<span class="message-error">Por favor, insira seu nome</span>',
            cpf:'<span class="message-error">Este campo é obrigatório</span>',
            email:'<span class="message-error">Este campo é obrigatório</span>',
            telefone:'<span class="message-error">Este campo é obrigatório</span>',
            enderecoCompleto: '<span class="message-error">Este campo é obrigatório</span>',
            cep: '<span class="message-error">Este campo é obrigatório</span>',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existe ${camposIncorretos} campo(s) incorreto(s)`)
            }
        }
    })
})
