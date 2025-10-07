const products = [
  {
    name: "Duo Nochebuena vino",
    price: 600,
    image: "imgs/Duos/001-duo-noche-buena-vino.png",
    category: "Duos",
  },
  {
    name: "Duo Nochebuena",
    price: 600,
    image: "imgs/Duos/002-duo-noche-buena-dark.png",
    category: "Duos",
  },
  {
    name: "Duo Nochebuena",
    price: 600,
    image: "imgs/Duos/003-duo-noche-buena-white-black.png",
    category: "Duos",
  },
  {
    name: "Duo Figuras",
    price: 600,
    image: "imgs/Duos/004-duo-figuras-red-white.png",
    category: "Duos",
  },
  {
    name: "Duo Figuras",
    price: 600,
    image: "imgs/Duos/005-duo-figuras-white-coffee.png",
    category: "Duos",
  },
  {
    name: "Duo Renos",
    price: 600,
    image: "imgs/Duos/006-duo-reindeer-black.png",
    category: "Duos",
  },
  {
    name: "Duo Renos",
    price: 600,
    image: "imgs/Duos/007-duo-reindeer-vino.png",
    category: "Duos",
  },
  {
    name: "Duo Renos",
    price: 600,
    image: "imgs/Duos/008-duo-reindeer-red.png",
    category: "Duos",
  },
  {
    name: "Duo Renos - Sueter Vestido",
    price: 600,
    image: "imgs/Duos/009-duo-reindeer-dress-gray-pink.png",
    category: "Duos",
  },
  {
    name: "Duo Renos - Sueter Vestido",
    price: 600,
    image: "imgs/Duos/010-duo-reindeer-dress-black-red.png",
    category: "Duos",
  },
  {
    name: "Duo Renos - Sueter Vestido",
    price: 600,
    image: "imgs/Duos/011-duo-reindeer-dress-red.png",
    category: "Duos",
  },
  {
    name: "Duo Renos - Sueter Vestido",
    price: 600,
    image: "imgs/Duos/012-duo-reindeer-dress-black.png",
    category: "Duos",
  },
  {
    name: "Duo Renos - Sueter Vestido",
    price: 600,
    image: "imgs/Duos/013-duo-reindeer-dress-vino.png",
    category: "Duos",
  },
  {
    name: "Duo Galleta",
    price: 600,
    image: "imgs/Duos/014-duo.png",
    category: "Duos",
  },
  {
    name: "Duo Grinch",
    price: 600,
    image: "imgs/Duos/015-duo.png",
    category: "Duos",
  },
  {
    name: "Duo Reno Feliz",
    price: 600,
    image: "imgs/Duos/016-duo.png",
    category: "Duos",
  },
  {
    name: "Duo Muñeco de Nieve",
    price: 600,
    image: "imgs/Duos/017-duo.png",
    category: "Duos",
  },
  {
    name: "Duo Renos",
    price: 600,
    image: "imgs/Duos/018-duo.png",
    category: "Duos",
  },
  {
    name: "Duo Muñecos de Nieve",
    price: 600,
    image: "imgs/Duos/019-duo.png",
    category: "Duos",
  },
  {
    name: "Duo Renos",
    price: 600,
    image: "imgs/Duos/020-duo.png",
    category: "Duos",
  },
  {
    name: "Duo Grinch",
    price: 600,
    image: "imgs/Duos/021-duo.png",
    category: "Duos",
  },
  {
    name: "Duo Figuras",
    price: 600,
    image: "imgs/Duos/022-duo.png",
    category: "Duos",
  },
  {
    name: "Duo Figuras",
    price: 600,
    image: "imgs/Duos/023-duo.png",
    category: "Duos",
  },
  {
    name: "Duo Figuras",
    price: 600,
    image: "imgs/Duos/024-duo.png",
    category: "Duos",
  },
  {
    name: "Duo Figuras",
    price: 600,
    image: "imgs/Duos/025-duo.png",
    category: "Duos",
  },
  {
    name: "Duo Figuras",
    price: 600,
    image: "imgs/Duos/026-duo.png",
    category: "Duos",
  },
  {
    name: "Sueter de mujer - Grinch",
    price: 360,
    image: "imgs/Woman/001-woman.png",
    category: "Mujer",
  },
  {
    name: "Sueter de mujer - Grinch",
    price: 360,
    image: "imgs/Woman/002-woman.png",
    category: "Mujer",
  },
  {
    name: "Sueter de mujer - Galleta",
    price: 360,
    image: "imgs/Woman/003-woman.png",
    category: "Mujer",
  },
  {
    name: "Sueter de mujer - Muñeco",
    price: 360,
    image: "imgs/Woman/004-woman.png",
    category: "Mujer",
  },
  {
    name: "Sueter de mujer - Reno",
    price: 360,
    image: "imgs/Woman/005-woman.png",
    category: "Mujer",
  },
  {
    name: "Sueter de mujer - Muñeco",
    price: 360,
    image: "imgs/Woman/006-woman.png",
    category: "Mujer",
  },
  {
    name: "Sueter de mujer - Reno",
    price: 360,
    image: "imgs/Woman/007-woman.png",
    category: "Mujer",
  },
  {
    name: "Sueter de hombre - Reno",
    price: 360,
    image: "imgs/Men/001-men.png",
    category: "Hombre",
  },
  {
    name: "Sueter de hombre - Galleta",
    price: 360,
    image: "imgs/Men/002-men.png",
    category: "Hombre",
  },
  {
    name: "Sueter de hombre - Reno",
    price: 360,
    image: "imgs/Men/003-men.png",
    category: "Hombre",
  },
  {
    name: "Sueter de hombre - Grinch",
    price: 360,
    image: "imgs/Men/004-men.png",
    category: "Hombre",
  },
  {
    name: "Sueter de hombre - Muñeco",
    price: 360,
    image: "imgs/Men/005-men.png",
    category: "Hombre",
  },
  {
    name: "Sueter de hombre - Grinch",
    price: 360,
    image: "imgs/Men/006-men.png",
    category: "Hombre",
  },
  {
    name: "Sueter de hombre - Reno",
    price: 360,
    image: "imgs/Men/007-men.png",
    category: "Hombre",
  },
  {
    name: "Sueter de hombre - Muñeco",
    price: 360,
    image: "imgs/Men/008-men.png",
    category: "Hombre",
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
