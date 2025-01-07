document.addEventListener('DOMContentLoaded', () => {
    // Handling image click navigation
    const images = document.querySelectorAll('#carousel-images img');
    images.forEach(image => {
        image.addEventListener('click', (event) => {
            const targetId = image.getAttribute('data-target');
            if (targetId) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Form submission handler
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        // Simple form validation
        if (name && email && message) {
            alert('Message envoyé avec succès !');
            form.reset();
        } else {
            alert('Veuillez remplir tous les champs avant de soumettre.');
        }
    });

    // Enhanced skill showcase with alert
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            alert(`Vous avez cliqué sur ${skill.textContent}.`);
        })
    });


});


document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('#carousel-images img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    document.getElementById('next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    document.getElementById('prev').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    // Automatically change the image every 3 seconds
    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 3000); // 3 seconds interval

    // Initialize the carousel by showing the first image
    showImage(currentIndex);
});
