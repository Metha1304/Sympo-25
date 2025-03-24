document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission (you can integrate actual backend API here)
    setTimeout(() => {
        document.getElementById('responseMessage').innerText = `Thank you, ${name}! We have received your message.`;
        document.getElementById('contactForm').reset();
    }, 1000);
});
