export function renderGallery(target, photos) {
  target.innerHTML = photos
    .map((photo, index) => {
      const className = photo.layout ? ` class="${photo.layout}"` : "";
      const loading = index < 4 ? "eager" : "lazy";

      return `
        <figure${className} data-index="${index}" data-title="${photo.title}">
          <button class="photo-button" type="button" data-full="${photo.full}">
            <img loading="${loading}" src="${photo.src}" alt="${photo.alt}" />
          </button>
          <figcaption><span>${String(index + 2).padStart(2, "0")}</span>${photo.title}</figcaption>
        </figure>
      `;
    })
    .join("");
}
