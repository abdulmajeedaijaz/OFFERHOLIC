<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = sanitize_text_field($_POST["name"]);
    $email = sanitize_email($_POST["email"]);
    $phone = sanitize_text_field($_POST["phone"]);
    $message = sanitize_textarea_field($_POST["message"]);

    $to = "abdulmajeedaijaz@gmail.com"; // Replace with your email
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";

    if (wp_mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
    exit;
}
?>
