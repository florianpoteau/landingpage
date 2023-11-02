<?php

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

require 'vendor/autoload.php'; // Charger PHPMailer

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $firstname = $_POST["firstname"];
    $email = $_POST["email"];
    $phone = $_POST["tel"];
    $company = $_POST["société"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Configurer PHPMailer
    $mail = new PHPMailer(true);

    $mail->CharSet = 'UTF-8';

    try {
        // Paramètres SMTP
        $mail->isSMTP();
        $mail->Host = $_ENV['SMTP_HOST'];; // Remplacez par votre serveur SMTP
        $mail->SMTPAuth = true;
        $mail->Username = $_ENV['SMTP_USERNAME']; // Remplacez par votre nom d'utilisateur SMTP
        $mail->Password = $_ENV['SMTP_PASSWORD']; // Remplacez par votre mot de passe SMTP
        $mail->SMTPSecure = 'tls'; // Utilisez 'tls' ou 'ssl' selon la configuration du serveur SMTP
        $mail->Port = $_ENV['SMTP_PORT'];

        // Destinataire
        $mail->setFrom($email, $name);
        $mail->addAddress($_ENV['SMTP_DESTINATAIRE'], 'Destinataire');

        // Contenu de l'e-mail
        $mail->isHTML(false);
        $mail->Subject = $subject;
        $mail->Body = "Nom: $name\nPrenom: $firstname\nEmail: $email\nTelephone: $phone\nSociete: $company\nSujet: $subject\nMessage:\n$message";

        // Envoyer l'e-mail
        $mail->send();
?>
        <script>
            alert("Le formulaire a été envoyé avec succès");
            window.location.href = "index.php";
        </script>
<?php

        exit();
    } catch (Exception $e) {
        echo "Une erreur s'est produite lors de l'envoi du message : " . $mail->ErrorInfo;
    }
} else {
    echo "Une erreur s'est produite. Veuillez utiliser le formulaire.";
}
