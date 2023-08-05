function submitForm(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const email = document.getElementById('email').value;
    const location = document.getElementById('location').value;
    const service = document.getElementById('service').value;

    // Create the email content
    const emailContent = `Name: ${name}\nDate: ${date}\nEmail: ${email}\nLocation: ${location}\nService: ${service}`;

    // Send email using "mailto:"
    const emailLink = `mailto:m.rizwanhaider11@gmail.com?subject=Booking Details&body=${encodeURIComponent(emailContent)}`;
    window.location.href = emailLink;
    alert('Email sent! Please check your inbox for booking details.');
    // Send WhatsApp message using a third-party API (you need to set this up on your server)
    // For example:
    // const phoneNumber = 'your-whatsapp-phone-number';
    // const apiEndpoint = 'https://api.example.com/send-whatsapp';
    // const whatsappContent = `Booking Details:\n${emailContent}`;
    // fetch(`${apiEndpoint}?phone=${phoneNumber}&message=${encodeURIComponent(whatsappContent)}`)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error('Error sending WhatsApp message:', error));

    // Clear form fields after submission
    document.getElementById('bookingForm').reset();
}
