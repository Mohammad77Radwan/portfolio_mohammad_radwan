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

    // Enhanced skill showcase with alert
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            alert(`Vous avez cliqué sur ${skill.textContent}.`);
        });
    });

    // Image Carousel
    const carouselImages = document.querySelectorAll('#carousel-images img');
    let currentIndex = 0;

    function showImage(index) {
        carouselImages.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    document.getElementById('next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % carouselImages.length;
        showImage(currentIndex);
    });

    document.getElementById('prev').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
        showImage(currentIndex);
    });

    // Automatically change the image every 3 seconds
    setInterval(function() {
        currentIndex = (currentIndex + 1) % carouselImages.length;
        showImage(currentIndex);
    }, 3000);

    // Initialize the carousel by showing the first image
    showImage(currentIndex);
});

// Contact Form Submission
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(form);
        
        try {
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
            console.error('Fetch error:', error);
            alert('Erreur réseau. Veuillez réessayer plus tard.');
        }
    });
});
