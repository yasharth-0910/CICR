document.addEventListener("DOMContentLoaded", function() {
    
    rotateImages();

    
    setInterval(rotateImages, 4000);

    function rotateImages() {
        
        const currentSlide = document.querySelector('.slider img.active');
        
        
        const currentIndex = currentSlide ? Array.from(document.querySelectorAll('.slider img')).indexOf(currentSlide) : -1;

       
        const nextIndex = (currentIndex + 1) % 5;

        
        if (currentSlide) {
            currentSlide.classList.remove('active');
        }

        
        const nextSlide = document.getElementById(`slide-${nextIndex + 1}`);
        if (nextSlide) {
            nextSlide.classList.add('active');
        }
    }
});
