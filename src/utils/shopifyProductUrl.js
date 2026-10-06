const productHandles = {
  "Classic Sunbed": "classic-sunbed",
  "Classic Right-hand Module": "classic-right-hand-module",
  "Classic 4-seater Square Table": "classic-4-seater-square-table",
  "Classic 6-seater Round Table": "classic-6-seater-round-table",
  "Classic Stacking Armchair": "classic-chair-7003cw",
  "Classic Wide Rim Armchair": "classic-chair-7002cw",
  "Malayan Lounge Chair": "malayan-chair",
  "Malayan 2 Seater Sofa": "malayan-sofa",
  "Cordial LUXE Light Grey 2 Seater Curved Sofa":
    "cordial-luxe-light-grey-2-seater-curved-sofa",
  "Cordial LUXE Light Grey Mid Chair":
    "cordial-luxe-light-grey-mid-chair",
  "Cordial LUXE Dark Grey Lucy Chair":
    "cordial-luxe-dark-grey-lucy-chair",
  "Cordial 4-Seater Table": "cordial-4-seater-table",
  "Cordial Beige Dining Chair": "cordial-beige-dining-chair",
  "Cordial Gray Dining Chair": "cordial-gray-dining-chair",
  "Vintage Sidechair": "vintage-sidechair",
  "Vintage Round Table": "vintage-round-table",
  "Vintage Swivel Chair": "vintage-swivel-chair",
  "Vintage Rectangle 6 Seater Dining Table":
    "vintage-rectangle-6-seater-dining-table",
  "Forte Ottoman": "forte-ottoman",
  "Forte Loveseat": "forte-loveseat",
  "Forte Arm Chair": "forte-arm-chair",
};

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const shopifyProductUrl = (productName) => {
  const handle = productHandles[productName] || slugify(productName);
  return `https://wovenfurnituredesigns-store.myshopify.com/products/${handle}`;
};
