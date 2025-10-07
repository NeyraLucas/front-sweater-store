const products = [
  {
    name: "Duo Nochebuena vino",
    price: 600,
    image: "imgs/001-duo-noche-buena-vino.png",
    category: "Duos",
  },
  {
    name: "Duo Nochebuena",
    price: 600,
    image: "imgs/002-duo-noche-buena-dark.png",
    category: "Duos",
  },
  {
    name: "Duo Nochebuena",
    price: 600,
    image: "imgs/003-duo-noche-buena-white-black.png",
    category: "Duos",
  },
  {
    name: "Duo Figuras",
    price: 600,
    image: "imgs/004-duo-figuras-red-white.png",
    category: "Duos",
  },
];

const productsGrid = document.getElementById("productsGrid");
const categoryButtons = document.querySelectorAll(".category-btn");

// cards dynamics
const renderProducts = (list) => {
  productsGrid.innerHTML = list
    .map(
      (p) => `
           <div class="flex flex-col group bg-background-light dark:bg-background-dark p-4 rounded-xl shadow-md">
          <div
            class="product-img relative w-full aspect-[3/4] bg-cover bg-center rounded-lg overflow-hidden transition-all duration-300 group-hover:scale-105 cursor-pointer"
            data-image="${p.image}"
            style="background-image: url('${p.image}')"
          ></div>
          <div class="pt-4">
            <h3 class="text-base font-bold text-background-dark dark:text-background-light">${p.name}</h3>
            <p class="text-sm text-primary font-semibold mt-1">$${p.price}</p>
          </div>
        </div>
        `
    )
    .join("");
};

productsGrid.addEventListener("click", (e) => {
  const imgDiv = e.target.closest(".product-img");

  if (!imgDiv) return;
  const imgUrl = imgDiv.dataset.image;

  Swal.fire({
    imageUrl: imgUrl,
    imageAlt: "Vista ampliada",
    showConfirmButton: false,
    background: "transparent",
    backdrop: "rgba(0,0,0,0.8)",
  });
});

// Render products
renderProducts(products);

// filter
categoryButtons.forEach((btn) => {

  btn.addEventListener("click", () => {

    const category = btn.dataset.category;

    categoryButtons.forEach((b) =>
      b.classList.remove("bg-primary", "text-white")
    );
    btn.classList.add("bg-primary", "text-white");

    // filter logic
    const filtered =
      category === "All"
        ? products
        : products.filter((p) => p.category === category);

    renderProducts(filtered);
  });
});
