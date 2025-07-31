export function createContentFigure(container, images, content,  width, height) {
    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    wrapper.style.width = `${width}px`;
    wrapper.style.height = `${height}px`;
    wrapper.style.borderRadius = '6px';
    wrapper.style.background = '#fff';

    const flexContainer = document.createElement('div');
    flexContainer.style.display = 'flex';
    flexContainer.style.flexWrap = 'wrap';
    flexContainer.style.justifyContent = 'center';
    flexContainer.style.alignContent = 'center';
    flexContainer.style.gap = '16px';
    flexContainer.style.width = '100%';
    flexContainer.style.height = '100%';
    flexContainer.style.padding = '16px 4px';
    flexContainer.style.boxSizing = 'border-box';

    const title = document.createElement('button');
    title.textContent = content;
    title.style.position = 'absolute';
    title.style.top = '-5.5px';
    title.style.left = '50%';
    title.style.transform = 'translateX(-50%)';
    title.style.backgroundColor = '#000';
    title.style.color = '#FFF';
    title.style.fontFamily = '"Poppins", sans-serif';
    title.style.fontSize = '5px';
    title.style.fontWeight = '500';
    title.style.lineHeight = '142%';
    title.style.borderRadius = '59px';
    title.style.padding = '2px 6px';
    title.style.width = '78%';
    title.style.height = '11px';
    title.style.border = 'none';
    title.style.cursor = 'pointer';

    wrapper.appendChild(title);

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.style.display = 'block';
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        img.style.borderRadius = '4px';
        img.style.maxHeight = '25px';

        flexContainer.appendChild(img);
    });

    wrapper.appendChild(flexContainer);
    container.appendChild(wrapper);
}
