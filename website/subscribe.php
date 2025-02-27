<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = sanitize_email($_POST["email"]);

    if (!is_email($email)) {
        echo "Invalid email!";
        exit;
    }

    global $wpdb;
    $table_name = $wpdb->prefix . "subscribers";

    $wpdb->insert($table_name, array("email" => $email));

    echo "Subscription successful!";
    exit;
}
?>
