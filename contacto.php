<?php
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];
$para = 'alejorgomez@gmail.com';
$asunto = 'Consulta de página';
$header = 'De: ' . $email;
$msjCorreo = "Nombre: $nombre\n Apellido: $apellido\n Teléfono: $telefono\n E-Mail: $email\n Mensaje:\n $mensaje";
  
if ($_POST['submit']) {
if (mail($para, $asunto, $msjCorreo, $header)) {
echo "<script language='javascript'>
alert('Mensaje enviado, muchas gracias.');
window.location.href = '/contacto.html';
</script>";

} 
else {
echo 'Falló el envio';
}
}
?>