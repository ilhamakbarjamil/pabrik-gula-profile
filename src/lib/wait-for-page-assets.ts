function waitForWindowLoad(): Promise<void> {
  return new Promise((resolve) => {
    if (document.readyState === "complete") {
      resolve();
      return;
    }

    window.addEventListener("load", () => resolve(), { once: true });
  });
}

function waitForFonts(): Promise<void> {
  if (document.fonts?.ready) {
    return document.fonts.ready.then(() => undefined);
  }

  return Promise.resolve();
}

function waitForImage(img: HTMLImageElement): Promise<void> {
  if (img.complete) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    img.addEventListener("load", () => resolve(), { once: true });
    img.addEventListener("error", () => resolve(), { once: true });
  });
}

function collectBackgroundImageUrls(): string[] {
  const urls = new Set<string>();

  for (const element of document.querySelectorAll("*")) {
    const backgroundImage = getComputedStyle(element).backgroundImage;

    if (!backgroundImage || backgroundImage === "none") {
      continue;
    }

    for (const part of backgroundImage.split(",")) {
      const match = part.match(/url\(["']?(.+?)["']?\)/);

      if (match?.[1]) {
        urls.add(match[1]);
      }
    }
  }

  return Array.from(urls);
}

function preloadImageUrl(url: string): Promise<void> {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve();
    image.onerror = () => resolve();
    image.src = url;
  });
}

async function waitForDomImages(): Promise<void> {
  const maxRetries = 30;
  const retryDelayMs = 100;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    const images = Array.from(document.querySelectorAll("img"));
    await Promise.all(images.map(waitForImage));
    await new Promise((resolve) => setTimeout(resolve, retryDelayMs));

    const pendingImages = Array.from(document.querySelectorAll("img")).filter(
      (img) => !img.complete,
    );

    if (pendingImages.length === 0 && images.length > 0) {
      return;
    }

    if (pendingImages.length === 0 && attempt >= 2) {
      return;
    }
  }
}

async function waitForBackgroundImages(): Promise<void> {
  const urls = collectBackgroundImageUrls();
  await Promise.all(urls.map(preloadImageUrl));
}

function waitForDomPaint(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve());
    });
  });
}

export async function waitForPageAssets(): Promise<void> {
  await waitForDomPaint();
  await waitForWindowLoad();
  await waitForFonts();
  await waitForDomImages();
  await waitForBackgroundImages();
}
