<script>
  function toggleMenu(){
    document.getElementById("navLinks").classList.toggle("active");
  }
  </script>
  <script>
document.addEventListener("DOMContentLoaded", () => {

  const circles = document.querySelectorAll(".progress-circle");

  circles.forEach(circle => {
    const percent = parseInt(
      circle.getAttribute("data-percent")
    );

    const progress =
      circle.querySelector(".progress");

    const number =
      circle.querySelector(".number");

    const radius = 70;
    const circumference =
      2 * Math.PI * radius;

    progress.style.strokeDasharray =
      circumference;

    let count = 0;

    const interval = setInterval(() => {

      count++;

      number.innerText = count + "%";

      const offset =
        circumference -
        (count / 100) * circumference;

      progress.style.strokeDashoffset =
        offset;

      if (count >= percent) {
        clearInterval(interval);
      }

    }, 20);

  });

});
</script>
<script>
const cards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

cards.forEach(card => {
  card.classList.add("hidden");
  observer.observe(card);
});
</script>
