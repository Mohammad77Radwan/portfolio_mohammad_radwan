document.addEventListener('DOMContentLoaded', () => {
    // Handling image click navigation
    const images = document.querySelectorAll('#carousel-images img');
    images.forEach(image => {
        image.addEventListener('click', () => {
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
    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const message = form.message.value.trim();

            // Simple form validation
            if (name && email && message) {
                try {
                    const formData = new FormData(form);
                    const response = await fetch(form.action, {
                        method: form.method,
                        body: formData,
                        headers: { 'Accept': 'application/json' }
                    });

                    if (response.ok) {
                        alert('Message envoyé avec succès !');
                        form.reset();
                    } else {
                        alert('Erreur lors de l’envoi du message.');
                    }
                } catch (error) {
                    console.error('Form submission error:', error);
                    alert('Erreur lors de l’envoi du message.');
                }
            } else {
                alert('Veuillez remplir tous les champs avant de soumettre.');
            }
        });
    }

    // Enhanced skill showcase with alert
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            alert(`Vous avez cliqué sur ${skill.textContent}.`);
        });
    });

    // Carousel functionality
    const carouselImages = document.querySelectorAll('#carousel-images img');
    let currentIndex = 0;

    function showImage(index) {
        carouselImages.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    document.getElementById('next')?.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carouselImages.length;
        showImage(currentIndex);
    });

    document.getElementById('prev')?.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
        showImage(currentIndex);
    });

    // Automatically change the image every 3 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % carouselImages.length;
        showImage(currentIndex);
    }, 3000); // 3 seconds interval

    // Initialize the carousel by showing the first image
    showImage(currentIndex);
});
