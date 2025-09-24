document.addEventListener("DOMContentLoaded", () => {
  const balloons = document.querySelector(".balloons");
  balloons.style.transition = "transform 0.5s ease";
  balloons.addEventListener("mouseover", () => {
    balloons.style.transform = "scale(1.1)";
  });
  balloons.addEventListener("mouseout", () => {
    balloons.style.transform = "scale(1)";
  });
});
