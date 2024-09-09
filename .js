// Enviar el formulario de contacto
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

// Animación de la barra de habilidades
function efectoHabilidades() {
    var skillsSection = document.querySelector('.skills');
    var skillsSectionTop = skillsSection.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (skillsSectionTop < windowHeight * 0.8) {
        var bars = document.querySelectorAll('.skills .col ul');

        bars.forEach(function(bar) {
            var listItems = bar.querySelectorAll('li');
            listItems.forEach(function(item, index) {
                setTimeout(function() {
                    item.classList.add('visible');
                }, index * 200); // Añadir un retraso para cada ítem
            });
        });
    }
}

// Detectar el scrolling para aplicar la animación de la barra de habilidades
window.addEventListener('scroll', function() {
    efectoHabilidades();
});

// Ejecutar al cargar la página para asegurarse de que las habilidades se muestran si ya están en vista
window.addEventListener('load', function() {
    efectoHabilidades();
});
