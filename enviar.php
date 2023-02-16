<?php
// Get data from form 
$name = $_POST['name'];
$email= $_POST['email'];
$tel= $_POST['tel'];
$message= $_POST['message'];
 
$to = "email@gmail.com";
$subject = "Contato - The Optics Place";
 
// The following text will be sent
// Name = user entered name
// Email = user entered email
// Message = user entered message
$txt = "Nome: ". $name . "\r\n  Email: " . $email . "\r\n Tel: " . $tel . "\r\n Message: " . $message;
 
$headers = "From: contato@dominio.com.br" . "\r\n" .
            "CC: ";
if(mail($to, $subject, $txt, $headers)) {
    
        echo'<script>
                alert("Mensagem enviada com sucesso!");
                window.location.href = "contato.html";
         </script>';
} else {
      echo'<script>
        alert("Mensagem n���o enviada!");
        window.location.href = "contato.html";
    </script>';
}


?>