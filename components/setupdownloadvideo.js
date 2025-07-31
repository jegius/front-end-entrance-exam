export function setupPreviewVideo(buttonId, videoUrl) {
  const button = document.getElementById(buttonId);
  if (!button) return;

  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
  overlay.style.display = 'none';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.zIndex = 9999;

  const video = document.createElement('video');
  video.src = videoUrl;
  video.controls = true;
  video.autoplay = true;
  video.style.maxWidth = '90%';
  video.style.maxHeight = '90%';
  video.style.borderRadius = '8px';
  video.style.boxShadow = '0 0 15px rgba(255,255,255,0.7)';

  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'Закрыть';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '20px';
  closeBtn.style.right = '20px';
  closeBtn.style.padding = '10px 15px';
  closeBtn.style.fontSize = '16px';
  closeBtn.style.cursor = 'pointer';
  closeBtn.style.border = 'none';
  closeBtn.style.borderRadius = '5px';
  closeBtn.style.backgroundColor = '#ff4444';
  closeBtn.style.color = 'white';
  closeBtn.style.zIndex = 10000;

  overlay.appendChild(video);
  overlay.appendChild(closeBtn);
  document.body.appendChild(overlay);

  button.addEventListener('click', () => {
    overlay.style.display = 'flex';
    video.play();
  });

  closeBtn.addEventListener('click', () => {
    video.pause();
    overlay.style.display = 'none';
    video.currentTime = 0;
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      video.pause();
      overlay.style.display = 'none';
      video.currentTime = 0;
    }
  });
}
