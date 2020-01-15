const loadTexture = (src) => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(img);
    };
    img.src = src;
  });
};

const loadTextures = urls => {
  return Promise.all(
    urls.map(url => loadTexture(url))
  );
};

export default loadTextures;