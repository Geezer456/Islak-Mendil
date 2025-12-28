const gallery = document.getElementById("gallery");

// Mendil verilerini buraya ekle
const images = [
  {src: "images/yaygin/mendil1.jpg", qty: 1, folder: "yaygin"},
  {src: "images/nadide/mendil2.jpg", qty: 3, folder: "nadide"},
  {src: "images/efsanevi/mendil3.jpg", qty: 2, folder: "efsanevi"},
  {src: "images/nadide/mendil4.jpg", qty: 1, folder: "nadide"},
  // buraya daha fazla foto ekleyebilirsin
];

// Galeriyi çiz
function drawGallery(filter="all") {
  gallery.innerHTML = "";
  images.forEach(img => {
    if(filter !== "all" && img.folder !== filter) return;

    const card = document.createElement("div");
    card.className = "image-card";

    const imageEl = document.createElement("img");
    imageEl.src = img.src;
    imageEl.alt = img.src.split("/").pop();
    card.appendChild(imageEl);

    // Baloncuk göster
    if(img.qty > 1) {
      const badge = document.createElement("span");
      badge.className = "qty-badge";
      badge.innerText = img.qty;
      card.appendChild(badge);
    }

    gallery.appendChild(card);
  });
}

// Başta tümünü göster
drawGallery();

// Buton filtreleme
document.querySelectorAll(".folder-buttons button").forEach(btn => {
  btn.addEventListener("click", () => {
    const folder = btn.dataset.folder;
    drawGallery(folder);
  });
});
