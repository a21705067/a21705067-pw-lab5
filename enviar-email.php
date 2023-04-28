<?php
if(isset($_POST['email'])) {

    // Informações do destinatário
    $para = 'a21705067@alunos.ulusofona.pt';
    $assunto = 'Mensagem do site de portfolio';

    // Informações do remetente
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    // Monta o corpo do e-mail
    $corpo = "Nome: $nome\n\n";
    $corpo .= "E-mail: $email\n\n";
    $corpo .= "Mensagem:\n$mensagem";

    // Cabeçalhos do e-mail
    $headers = "From: $nome <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Envia o e-mail
    if(mail($para, $assunto, $corpo, $headers)) {
        http_response_code(200);
    } else {
        http_response_code(500);
    }
} else {
    http_response_code(400);
}
?>