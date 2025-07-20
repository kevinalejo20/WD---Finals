document.addEventListener("DOMContentLoaded", () => {
  const dots = document.querySelectorAll(".dot");
  const cardsWrapper = document.getElementById("cardsWrapper");

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.getAttribute("data-slide"));
      cardsWrapper.scrollTo({
        left: index * cardsWrapper.clientWidth,
        behavior: "smooth"
      });

      dots.forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
    });
  });
});
