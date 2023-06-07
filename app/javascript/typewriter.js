document.addEventListener("DOMContentLoaded", function() {
    const words = [
      "Full Stack Developer",
      "React Developer",
      "Ruby on Rails Developer"
    ];
  
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
  
    function type() {
      const currentWord = words[wordIndex];
      const text = currentWord.slice(0, letterIndex);
  
      document.getElementById("typewriter").textContent = text;
  
      if (isDeleting) {
        letterIndex--;
      } else {
        letterIndex++;
      }
  
      if (letterIndex === currentWord.length + 1) {
        isDeleting = true;
      }
  
      if (letterIndex === 0) {
        isDeleting = false;
        wordIndex++;
  
        if (wordIndex === words.length) {
          wordIndex = 0;
        }
      }
  
      setTimeout(type, 100);
    }
  
    type();
  });
  