var form = document.getElementById("form-contato");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;
    var xhr = new XMLHttpRequest(); // Cria um objeto XMLHttpRequest
    xhr.open("GET", "enviar-email.php?nome=" + encodeURIComponent(nome) + "&email=" + encodeURIComponent(email) + "&mensagem=" + encodeURIComponent(mensagem), true); // Define o método e o arquivo PHP para enviar o e-mail
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // Define o cabeçalho HTTP para enviar dados de formulário
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) { // Verifica se a solicitação foi concluída com sucesso
            var resposta = xhr.responseText; // Obtém a resposta do servidor
            if (resposta === "enviado") { // Verifica se o e-mail foi enviado com sucesso
                document.querySelector(".mensagem-enviada").style.display = "block"; // Exibe a mensagem de envio bem-sucedido
                form.reset(); // Limpa o formulário
            } else {
                document.querySelector(".erro-envio").style.display = "block"; // Exibe a mensagem de erro de envio
            }
        }
    };
    xhr.send("nome=" + nome + "&email=" + email + "&mensagem=" + mensagem); // Envia os dados do formulário para o arquivo PHP
});