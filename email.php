<?php

if(isset($_POST['email']) && !empty($_POST['email'])){

$nome = addslashes($_POST['name']);
$email = addslashes($_POST['email']);
$numero = addslashes($_POST['fone']);
$assunto = addslashes($_POST['assunto']);
$mensagem = addslashes($_POST['message']);


$to = "kazukidedetizadora@hotmail.com";
$subjet = "Contato - site";
$body = "Nome: ".$nome. "\r\n".
        "Email: ".$email. "\r\n".
        "Telefone: ".$numero. "\r\n".
        "Assunto: ".$assunto. "\r\n".
        "Menssagem: ".$mensagem;

$header = "From:contato@kazukidedetizadora.com"."\r\n".
          "Reply-To:".$email."\r\n".
          "X=Mailer:PHP/".phpversion();


if(mail($to,$subjet,$body,$header)){
    header('Location: contato.html');
    

}else{
    echo("O email não pode ser enviado!");
}

}

?>