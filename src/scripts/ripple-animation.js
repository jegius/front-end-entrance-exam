export default function turnOnRippleAnimation() {
  document
    .querySelectorAll('.ripple-element')
    .forEach((element) => handleClick(element));
}

function handleClick(element) {
  element.addEventListener('click', (e) => {
    const element = e.currentTarget;
    const ripple = document.createElement('span');

    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');

    element.appendChild(ripple);
    ripple.addEventListener('animationend', function () {
      ripple.remove();
    });
  });
}
