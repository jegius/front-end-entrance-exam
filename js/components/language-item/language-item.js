export function languageItem(item, path = "") {
  const { name, mark = 0 } = item;

  return `
          <tr class="language__item">
            <td class="language__name" contenteditable data-text-item="${"languages." + path + ".name"}">${name}</td> <td class="language__progress"><div class="progress ${mark ? "progress-" + mark * 10 : "progress-0"}"></d></td>
          </tr>`;
}
