import { isNotVoid } from "../service/is-void";

export function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  const x = isNotVoid(event.offsetX) ? event.offsetX : event.touches[0].clientX;
  const y = isNotVoid(event.offsetY) ? event.offsetY : event.touches[0].clientY;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${x - radius}px`;
  circle.style.top = `${y - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.querySelector("ripple");
  if (ripple) ripple.remove();

  button.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 600);
}

export function addRippleEffects(elements) {
  for (const element of elements) {
    element.removeEventListener("click", createRipple);
    element.addEventListener("click", createRipple);
  }
}
