import { photos } from "../data/photos.js";
import { renderGallery } from "../components/gallery.js";

const grid = document.querySelector("#photo-grid");
const dialog = document.querySelector(".lightbox");
const preview = dialog.querySelector("img");
const closeButton = dialog.querySelector(".close-button");
const gridToggle = document.querySelector(".grid-toggle");
const hero = document.querySelector(".hero");
const galleryStatus = document.querySelector(".gallery-status");
const galleryStatusNumber = document.querySelector(".gallery-status-number");
const galleryStatusTitle = document.querySelector(".gallery-status-title");
let previewRequestId = 0;

renderGallery(grid, photos);

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const setHeroProgress = () => {
  if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.style.setProperty("--hero-progress", "1");
    return;
  }

  const rect = hero.getBoundingClientRect();
  const scrollable = Math.max(hero.offsetHeight - window.innerHeight, 1);
  const progress = clamp(-rect.top / scrollable, 0, 1);
  document.documentElement.style.setProperty("--hero-progress", progress.toFixed(4));
};

setHeroProgress();
window.addEventListener("scroll", setHeroProgress, { passive: true });
window.addEventListener("resize", setHeroProgress);

const setGridState = (enabled) => {
  document.body.classList.toggle("grid-on", enabled);
  gridToggle.setAttribute("aria-pressed", String(enabled));
};

gridToggle.addEventListener("click", () => {
  setGridState(!document.body.classList.contains("grid-on"));
});

document.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "g" && !event.metaKey && !event.ctrlKey && !event.altKey) {
    setGridState(!document.body.classList.contains("grid-on"));
  }
});

const loadImage = (src) =>
  new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });

const openPreview = async (button) => {
  const requestId = previewRequestId + 1;
  previewRequestId = requestId;

  const image = button.querySelector("img");
  const nextSrc = button.dataset.full;
  const nextAlt = image.alt;

  preview.hidden = true;
  preview.removeAttribute("src");
  preview.alt = "";
  dialog.classList.add("is-loading");

  if (!dialog.open) {
    dialog.showModal();
  }

  try {
    const loadedImage = await loadImage(nextSrc);

    if (requestId !== previewRequestId || !dialog.open) {
      return;
    }

    preview.src = loadedImage.src;
    preview.alt = nextAlt;
    preview.hidden = false;
    dialog.classList.remove("is-loading");
  } catch {
    if (requestId !== previewRequestId || !dialog.open) {
      return;
    }

    preview.src = nextSrc;
    preview.alt = nextAlt;
    preview.hidden = false;
    dialog.classList.remove("is-loading");
  }
};

grid.addEventListener("click", (event) => {
  const button = event.target.closest(".photo-button");

  if (!button) {
    return;
  }

  openPreview(button);
});

const updateGalleryStatus = (figure) => {
  if (!figure || !galleryStatusNumber || !galleryStatusTitle) {
    return;
  }

  const index = Number(figure.dataset.index) + 2;
  galleryStatusNumber.textContent = String(index).padStart(2, "0");
  galleryStatusTitle.textContent = figure.dataset.title || "";
};

const galleryObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) {
      updateGalleryStatus(visible.target);
    }
  },
  {
    rootMargin: "-20% 0px -45% 0px",
    threshold: [0.2, 0.45, 0.7]
  }
);

document.querySelectorAll(".photo-grid figure").forEach((figure) => {
  galleryObserver.observe(figure);
});

closeButton.addEventListener("click", () => {
  previewRequestId += 1;
  dialog.close();
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    previewRequestId += 1;
    dialog.close();
  }
});

dialog.addEventListener("close", () => {
  preview.hidden = true;
  preview.removeAttribute("src");
  preview.alt = "";
  dialog.classList.remove("is-loading");
});
