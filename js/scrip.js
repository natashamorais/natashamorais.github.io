let form = $('.form-contato');

console.log(form)

form.validate({
    errorElement:"span",
    rules:{
        nome: "required",
        email:{
            required: true,
            email: true
        },
    
        mensagem: "required"
    }, 
    messages:{
        nome: "me diz quem você é por favor",
        email: {
        required: "Ei, eu preciso do seu email pra entrar em contato com você",
        email: "seu email precisa ter esse formato pra dar certo name@email.com"
        },

        mensagem: "por favor digite uma mensagem me dizendo o que você procura pra eu poder te responder direitinho"

    }
});