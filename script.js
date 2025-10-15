function myFunction() {
    var x = document.getElementById('main-nav');
    if (x.className === "main-nav") {
      x.classList.add("responsive");
    } else {
      x.classList.remove("responsive");
    } 
  }

function closeMenu() {
    var x = document.getElementById('main-nav');
    x.classList.remove("responsive");
}


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((e1) => observer.observe(e1));

