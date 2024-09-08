<!-- Dentro de tu sección de contacto -->
<form id="contactForm" action="https://formspree.io/f/xkgweevv" method="POST">
    <label for="name">Nombre:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="message">Mensaje:</label>
    <textarea id="message" name="message" required></textarea>
    
    <button type="submit">Enviar</button>
</form>

<script>
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var form = event.target;
    var formData = new FormData(form);

    fetch('https://formspree.io/f/xkgweevv', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            alert('Formulario enviado con éxito!');
            form.reset(); // Limpia el formulario después del envío
        } else {
            alert('Hubo un problema al enviar el formulario.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema al enviar el formulario.');
    });
});
</script>
