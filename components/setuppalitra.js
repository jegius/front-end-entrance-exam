export function setupPaletteSwitcher(buttonId) {
  const button = document.getElementById(buttonId);
  if (!button) return;

  button.addEventListener("click", () => {
    const fromColorInput = prompt("Введите цвет, который хотите заменить (например, green, #28d979, #008000):");
    if (!fromColorInput) return alert("Цвет для замены не введён.");

    const toColorInput = prompt("Введите цвет, на который хотите заменить (например, red, #ff0000):");
    if (!toColorInput) return alert("Цвет замены не введён.");

    function normalizeColor(colorStr) {
      const ctx = document.createElement("canvas").getContext("2d");
      ctx.fillStyle = colorStr;
      return ctx.fillStyle.toLowerCase();
    }

    const fromColorNorm = normalizeColor(fromColorInput);
    const toColorNorm = normalizeColor(toColorInput);

    const extraGreens = [normalizeColor('#28d979'), normalizeColor('#008000')];
    const isFromGreenAlias = fromColorInput.toLowerCase() === 'green';

    let changedCount = 0;

    document.querySelectorAll("*").forEach((el) => {
      const style = window.getComputedStyle(el);
      const colorNorm = normalizeColor(style.color);
      const bgColorNorm = normalizeColor(style.backgroundColor);

      const colorMatches = isFromGreenAlias
        ? extraGreens.includes(colorNorm)
        : colorNorm === fromColorNorm;

      const bgMatches = isFromGreenAlias
        ? extraGreens.includes(bgColorNorm)
        : bgColorNorm === fromColorNorm;

      if (colorMatches) {
        el.style.color = toColorNorm;
        changedCount++;
      }
      if (bgMatches) {
        el.style.backgroundColor = toColorNorm;
        changedCount++;
      }
    });

    if (changedCount === 0) {
      alert(`Не найдено элементов с цветом "${fromColorInput}". Ничего не изменено.`);
    } else {
      alert(`Изменено ${changedCount} стилей с цветом "${fromColorInput}" на "${toColorInput}".`);
    }
  });
}
