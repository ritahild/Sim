function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }
//   const hamburger = document.getElementById('hamburger');
// const menu = document.querySelector('.menu');

// hamburger.addEventListener('click', function () {
//     const hamIcon = this.querySelector('.hamburger-icon');
//     const crossIcon = this.querySelector('.cross-icon');
//     if (hamIcon.style.display === "none") {
//         hamIcon.style.display = "inline-block"
//         menu.style.display = "none"
//         crossIcon.style.display = "none"
//     }
//     else {
//         crossIcon.style.display = "inline-block"
//         hamIcon.style.display = "none"
//         menu.style.display = "block"
//     }
// });
