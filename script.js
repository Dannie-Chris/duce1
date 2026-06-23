<script>
  function toggleMenu(){
    document.getElementById("navLinks").classList.toggle("active");
  }
  const circles = document.querySelectorAll(".progress-circle");

function animateSkills() {
  circles.forEach(circle => {
    const progress = circle.querySelector(".progress");
    const number = circle.querySelector(".number");
    const target = parseInt(circle.dataset.percent);

    const radius = 70;
    const circumference = 2 * Math.PI * radius;

    progress.style.strokeDasharray = circumference;

    let count = 0;

    const timer = setInterval(() => {
      if (count >= target) {
        clearInterval(timer);
      } else {
        count++;
      }

      number.textContent = count + "%";

      const offset =
        circumference - (count / 100) * circumference;

      progress.style.strokeDashoffset = offset;
    }, 20);
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkills();
      observer.disconnect();
    }
  });
});

observer.observe(document.querySelector(".skills-section"));
  </script>
