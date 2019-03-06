<?php
/**
 * Created by PhpStorm.
 * User: alexa
 * Date: 28/01/2019
 * Time: 20:32
 */

$success = 0;
$msg = "Une erreur est survenue (script.php)";




        if(!empty($_POST['nom']) AND !empty($_POST['prenom']) AND !empty($_POST['email']) AND !empty($_POST['objet']) AND !empty($_POST['message'])){



        $entete  = 'MIME-Version: 1.0' . "\r\n";
        $entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        $entete .= 'From: ' . $_POST['email'] . "\r\n";
        $success = 1;
        $msg = "";
        $message = '<h1>Ce Message envoyé depuis la page Contact de alexandre-smagghe.com</h1>
        <p><b>Nom : </b>' . $_POST['nom'] . '<br>
        <p><b>Prénom : </b>' . $_POST['prenom'] . '<br>
        <b>Email : </b>' . $_POST['email'] . '<br>
        <b>Message : </b>' . $_POST['message'] . '</p>';

        $retour = mail('alexandre-smagghe@outlook.com', $_POST['email'], $message, $entete);


        if($retour) {
            echo '<p>Votre message a bien été envoyé.</p>';

        }
        }else{
            echo '<p>Veuillez remplir l\'ensemble des champs</p>';
        }



$res = ["success" => $success, "msg" => $msg];
echo json_encode($res);
