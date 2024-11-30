document.addEventListener('DOMContentLoaded', function() {
    const signInBtn = document.getElementById('signInBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeBtn = document.querySelector('.close-btn');
    const form = document.querySelector('form');

    signInBtn.addEventListener('click', function() {
        modalOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', function() {
        modalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    modalOverlay.addEventListener('click', function(e) {
        if (e.target === this) {
            modalOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
    });
});