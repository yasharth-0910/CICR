function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        var offsetTop = section.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}


window.addEventListener("scroll", function () {
    var header = document.getElementById("header");
    var navbar = document.querySelector(".navbar");
    var aboutUsSection = document.querySelector("#about"); 
    var scrolled = window.scrollY > 0;

    header.classList.toggle("scrolled", scrolled);
    navbar.classList.toggle("scrolled", scrolled);

    var aboutUsSectionTop = aboutUsSection.offsetTop;
    var aboutUsSectionHeight = aboutUsSection.offsetHeight;
    var isPastAboutUs =
      window.scrollY > aboutUsSectionTop + aboutUsSectionHeight;

    navbar.classList.toggle("past-about-us", isPastAboutUs);
    
    var isPastAboutUsText =
      window.scrollY > aboutUsSectionTop;

    navbar.classList.toggle("past-about-us-text", isPastAboutUsText);
});