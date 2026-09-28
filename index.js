document.addEventListener("DOMContentLoaded", function () {

    const words = [
        "Web Developer",
        "Programmer",
        "Graphic Designer",
        "Video Editor",
        "AI/ML Enthusiast"
    ];

    const typingElement = document.getElementById("typing");

    let wordIndex = 0;
    let letterIndex = 0;
    let deleting = false;

    function type() {

        const currentWord = words[wordIndex];

        if (!deleting) {
            typingElement.textContent =
                currentWord.substring(0, letterIndex + 1);

            letterIndex++;

            if (letterIndex === currentWord.length) {
                deleting = true;

                setTimeout(type, 1500);
                return;
            }

        } else {

            typingElement.textContent =
                currentWord.substring(0, letterIndex - 1);

            letterIndex--;

            if (letterIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }

        setTimeout(type, deleting ? 50 : 100);
    }

    type();

});

