export function enableMaterialWave() {
  document.body.addEventListener('click', (e) => {
    const target = e.target.closest('button.wave-button');
    if (!target) return;

    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const rect = target.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    target.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });


  if (!document.getElementById('material-wave-styles')) {
    const style = document.createElement('style');
    style.id = 'material-wave-styles';
    style.textContent = `
      .wave-button {
        position: relative;
        overflow: hidden;
        z-index: 0;
        cursor: pointer;
        outline: none;
        border: none;
        padding: 8px 16px;
        background-color: #6200ea;
        color: white;
        border-radius: 8px;
        font-size: 14px;
        transition: background-color 0.3s;
        user-select: none;
      }
      .wave-button:hover {
        background-color: #3700b3;
      }
      .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-effect 0.6s linear;
        pointer-events: none;
        z-index: 1;
        width: 100px;
        height: 100px;
      }
      @keyframes ripple-effect {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
}