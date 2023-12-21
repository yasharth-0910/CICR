<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate form data
    $name = test_input($_POST["name"]);
    $email = test_input($_POST["email"]);
    $phone = test_input($_POST["phone"]);
    $query = test_input($_POST["query"]);

    if (empty($name) || empty($email) || empty($phone) || empty($query)) {
        // Handle empty fields
        die("Error: Please fill in all required fields.");
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Error: Invalid email format.");
    }

    // Prepare email content
    $to = "_____"; // Your email
    $subject = " FNeworm Submission from CICR Website";

    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Phone: $phone\n";
    $message .= "Query: $query\n";

    // Attempt to send email
    if (mail($to, $subject, $message)) {
        echo "Thank you! Your form has been submitted.";
    } else {
        // Handle email sending failure
        echo "Error: Unable to submit the form. Please try again later.";
    }
} else {
    // Handle invalid request method
    echo "Error: Invalid request.";
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>
