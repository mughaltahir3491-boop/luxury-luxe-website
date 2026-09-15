/* =========================================================
   LUXURY LUXE - MAIN JAVASCRIPT
   Furniture E-Commerce Website
   ========================================================= */

"use strict";

/* =========================================================
   1. STORE CONFIGURATION
   ========================================================= */

const STORE = {
    name: "Luxury Luxe",
    currency: "AED",
    whatsapp: "971554316631",
    email: "info@luxuryluxe.ae",
    cartKey: "luxuryLuxeCart",
    couponKey: "luxuryLuxeCoupon",
    newsletterKey: "luxuryLuxeNewsletter"
};


/* =========================================================
   2. PRODUCT DATABASE
   ========================================================= */

const PRODUCTS = [

    {
        id: "cloudscape-sectional",
        name: "CloudScape Modular Sectional",
        category: "sectionals",
        categories: ["sectionals", "sofas"],
        price: 5899,
        oldPrice: 6499,
        badge: "Bestseller",
        rating: 4.9,
        reviews: 38,
        description:
            "A luxurious modular sectional designed for deep comfort and contemporary UAE interiors.",
        shortDescription:
            "Deep, soft and beautifully oversized modular seating.",
        image:
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85",
        images: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=1200&q=85"
        ],
        colors: ["Cream", "Beige", "Grey", "Taupe"],
        sizes: ["3 Seater", "4 Seater", "L Shape"],
        material: "Premium fabric",
        featured: true,
        newArrival: false
    },

    {
        id: "bubble-sofa",
        name: "Bubble Sofa",
        category: "sofas",
        categories: ["sofas"],
        price: 2999,
        oldPrice: 3499,
        badge: "Popular",
        rating: 4.8,
        reviews: 27,
        description:
            "Soft sculptural curves and generous cushioning make the Bubble Sofa a statement piece.",
        shortDescription:
            "Sculptural curves with cloud-like comfort.",
        image:
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1100&q=85",
        images: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1100&q=85",
            "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1100&q=85"
        ],
        colors: ["Off White", "Beige", "Grey"],
        sizes: ["2 Seater", "3 Seater"],
        material: "Bouclé fabric",
        featured: true,
        newArrival: true
    },

    {
        id: "fleece-arc-sofa",
        name: "Overstuffed Fleece Arc Sofa",
        category: "sofas",
        categories: ["sofas"],
        price: 3299,
        oldPrice: 3799,
        badge: "New",
        rating: 4.8,
        reviews: 19,
        description:
            "An oversized arc sofa with plush fleece upholstery and a relaxed contemporary silhouette.",
        shortDescription:
            "Oversized comfort for modern living rooms.",
        image:
            "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1100&q=85",
        images: [
            "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1100&q=85",
            "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=1100&q=85"
        ],
        colors: ["Cream", "White", "Taupe"],
        sizes: ["3 Seater", "4 Seater"],
        material: "Fleece fabric",
        featured: false,
        newArrival: true
    },

    {
        id: "corner-princess",
        name: "Corner Princess Sofa Bed",
        category: "sofa-beds",
        categories: ["sofa-beds", "sofas"],
        price: 3999,
        oldPrice: 4499,
        badge: "Best Value",
        rating: 4.7,
        reviews: 31,
        description:
            "A practical L-shaped sofa bed combining generous seating with comfortable sleeping space.",
        shortDescription:
            "Elegant L-shape seating that converts into a bed.",
        image:
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1100&q=85",
        images: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1100&q=85",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1100&q=85"
        ],
        colors: ["Beige", "Grey", "Dark Grey"],
        sizes: ["Left Corner", "Right Corner"],
        material: "Premium upholstery",
        featured: true,
        newArrival: false
    },

    {
        id: "cloud-bed",
        name: "Cloud Upholstered Bed",
        category: "beds",
        categories: ["beds"],
        price: 2499,
        oldPrice: 2899,
        badge: "New",
        rating: 4.9,
        reviews: 24,
        description:
            "A soft upholstered bed designed to create a sophisticated and relaxing bedroom.",
        shortDescription:
            "Soft luxury for a beautiful modern bedroom.",
        image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1100&q=85",
        images: [
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1100&q=85",
            "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1100&q=85"
        ],
        colors: ["Cream", "Beige", "Grey"],
        sizes: ["Queen", "King", "Super King"],
        material: "Premium upholstery",
        featured: false,
        newArrival: true
    },

    {
        id: "boucle-chair",
        name: "Bouclé Lounge Chair",
        category: "chairs",
        categories: ["chairs"],
        price: 1299,
        oldPrice: 1499,
        badge: "New",
        rating: 4.8,
        reviews: 16,
        description:
            "A statement lounge chair featuring rounded curves and soft bouclé upholstery.",
        shortDescription:
            "A sculptural accent chair for refined spaces.",
        image:
            "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1100&q=85",
        images: [
            "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1100&q=85"
        ],
        colors: ["Cream", "Beige"],
        sizes: ["Standard"],
        material: "Bouclé",
        featured: false,
        newArrival: true
    },

    {
        id: "luxe-coffee-table",
        name: "Luxe Coffee Table",
        category: "tables",
        categories: ["tables"],
        price: 899,
        oldPrice: 1099,
        badge: "Bestseller",
        rating: 4.7,
        reviews: 22,
        description:
            "A contemporary coffee table with a clean silhouette designed for modern living rooms.",
        shortDescription:
            "Minimal, elegant and easy to style.",
        image:
            "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1100&q=85",
        images: [
            "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1100&q=85"
        ],
        colors: ["Natural", "Walnut", "Black"],
        sizes: ["Standard"],
        material: "Wood",
        featured: true,
        newArrival: false
    },

    {
        id: "lamb-beanbag",
        name: "Big Lamb Velvet Bean Bag Sofa Bed",
        category: "sofa-beds",
        categories: ["sofa-beds", "sofas"],
        price: 1799,
        oldPrice: 2099,
        badge: "Popular",
        rating: 4.8,
        reviews: 41,
        description:
            "A generously sized bean bag sofa that can be used for lounging and sleeping.",
        shortDescription:
            "Relaxed seating with versatile sofa-bed functionality.",
        image:
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1100&q=85",
        images: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1100&q=85"
        ],
        colors: ["Cream", "Brown", "Grey"],
        sizes: ["Large", "Extra Large"],
        material: "Velvet",
        featured: true,
        newArrival: false
    },

    {
        id: "luxe-ottoman",
        name: "Luxe Ottoman Pouf",
        category: "chairs",
        categories: ["chairs"],
        price: 599,
        oldPrice: 699,
        badge: "New",
        rating: 4.6,
        reviews: 12,
        description:
            "A versatile upholstered ottoman that works as extra seating or a stylish footrest.",
        shortDescription:
            "The perfect finishing touch for your lounge.",
        image:
            "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1100&q=85",
        images: [
            "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1100&q=85"
        ],
        colors: ["Cream", "Beige", "Grey"],
        sizes: ["Standard"],
        material: "Fabric",
        featured: false,
        newArrival: true
    }

];


/* =========================================================
   3. BASIC HELPERS
   ========================================================= */

const $ = (selector, parent = document) =>
    parent.querySelector(selector);

const $$ = (selector, parent = document) =>
    Array.from(parent.querySelectorAll(selector));


function escapeHTML(value) {

    if (value === undefined || value === null) {
        return "";
    }

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function formatPrice(price) {

    return new Intl.NumberFormat("en-AE", {
        style: "currency",
        currency: "AED",
        maximumFractionDigits: 0
    }).format(price);
}


function getProduct(id) {

    return PRODUCTS.find(product => product.id === id);
}


/* =========================================================
   4. CART STORAGE
   ========================================================= */

function getCart() {

    try {

        const cart =
            JSON.parse(localStorage.getItem(STORE.cartKey));

        return Array.isArray(cart) ? cart : [];

    } catch (error) {

        return [];
    }
}


function saveCart(cart) {

    localStorage.setItem(
        STORE.cartKey,
        JSON.stringify(cart)
    );

    updateCartCount();
}


function getCartQuantity() {

    return getCart().reduce(
        (total, item) => total + item.quantity,
        0
    );
}


/* =========================================================
   5. CART COUNT
   ========================================================= */

function updateCartCount() {

    const count = getCartQuantity();

    $$(".cart-count").forEach(element => {
        element.textContent = count;
    });
}


/* =========================================================
   6. TOAST MESSAGE
   ========================================================= */

function showToast(message) {

    let toast = $("#luxuryToast");

    if (!toast) {

        toast = document.createElement("div");

        toast.id = "luxuryToast";

        toast.innerHTML = `
            <span class="toast-message"></span>
        `;

        document.body.appendChild(toast);
    }

    $(".toast-message", toast).textContent = message;

    toast.classList.add("show");

    clearTimeout(window.luxuryToastTimer);

    window.luxuryToastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);
}


/* =========================================================
   7. ADD TO CART
   ========================================================= */

function addToCart(productId, quantity = 1, options = {}) {

    const product = getProduct(productId);

    if (!product) {
        return;
    }

    const cart = getCart();

    const selectedColor =
        options.color ||
        product.colors?.[0] ||
        "";

    const selectedSize =
        options.size ||
        product.sizes?.[0] ||
        "";

    const existingItem = cart.find(item =>
        item.productId === productId &&
        item.color === selectedColor &&
        item.size === selectedSize
    );

    if (existingItem) {

        existingItem.quantity += quantity;

    } else {

        cart.push({
            productId,
            quantity,
            color: selectedColor,
            size: selectedSize
        });
    }

    saveCart(cart);

    showToast(
        `${product.name} added to your bag`
    );
}


/* =========================================================
   8. REMOVE FROM CART
   ========================================================= */

function removeFromCart(productId, color = "", size = "") {

    let cart = getCart();

    cart = cart.filter(item => !(
        item.productId === productId &&
        item.color === color &&
        item.size === size
    ));

    saveCart(cart);

    renderCart();

    showToast("Item removed from your bag");
}


/* =========================================================
   9. UPDATE CART QUANTITY
   ========================================================= */

function updateCartItem(productId, color, size, quantity) {

    const cart = getCart();

    const item = cart.find(item =>
        item.productId === productId &&
        item.color === color &&
        item.size === size
    );

    if (!item) {
        return;
    }

    item.quantity = Math.max(
        1,
        parseInt(quantity, 10) || 1
    );

    saveCart(cart);

    renderCart();
}


/* =========================================================
   10. PRODUCT CARD
   ========================================================= */

function productCard(product) {

    return `
        <article class="product-card"
                 data-product-id="${escapeHTML(product.id)}">

            <div class="product-image-wrap">

                <a href="product.html?id=${encodeURIComponent(product.id)}">

                    <img
                        class="product-image"
                        src="${escapeHTML(product.image)}"
                        alt="${escapeHTML(product.name)}"
                        loading="lazy"
                    >

                </a>

                ${
                    product.badge
                        ? `
                        <span class="product-badge">
                            ${escapeHTML(product.badge)}
                        </span>
                        `
                        : ""
                }

                <button
                    class="quick-add"
                    type="button"
                    data-add-product="${escapeHTML(product.id)}"
                    aria-label="Add ${escapeHTML(product.name)} to cart"
                >
                    +
                </button>

            </div>

            <div class="product-card-content">

                <p class="product-category">
                    ${escapeHTML(product.category)}
                </p>

                <h3 class="product-title">
                    <a href="product.html?id=${encodeURIComponent(product.id)}">
                        ${escapeHTML(product.name)}
                    </a>
                </h3>

                <div class="product-rating">

                    <span>★★★★★</span>

                    <small>
                        ${product.rating}
                        (${product.reviews})
                    </small>

                </div>

                <div class="product-price">

                    <strong>
                        ${formatPrice(product.price)}
                    </strong>

                    ${
                        product.oldPrice
                            ? `
                            <del>
                                ${formatPrice(product.oldPrice)}
                            </del>
                            `
                            : ""
                    }

                </div>

                <button
                    class="btn btn-dark product-add-button"
                    type="button"
                    data-add-product="${escapeHTML(product.id)}"
                >
                    Add to Bag
                </button>

            </div>

        </article>
    `;
}


/* =========================================================
   11. RENDER PRODUCT GRID
   ========================================================= */

function renderProducts(products, container) {

    if (!container) {
        return;
    }

    if (!products.length) {

        container.innerHTML = "";

        const noProducts = $("#noProducts");

        if (noProducts) {
            noProducts.style.display = "block";
        }

        return;
    }

    const noProducts = $("#noProducts");

    if (noProducts) {
        noProducts.style.display = "none";
    }

    container.innerHTML =
        products.map(productCard).join("");
}


/* =========================================================
   12. HOME BEST SELLERS
   ========================================================= */

function renderBestSellers() {

    const container =
        $("#bestSellers") ||
        $("#bestSellerProducts") ||
        $(".best-sellers-grid");

    if (!container) {
        return;
    }

    const products =
        PRODUCTS
            .filter(product => product.featured)
            .slice(0, 4);

    renderProducts(products, container);
}


/* =========================================================
   13. HOME NEW ARRIVALS
   ========================================================= */

function renderNewArrivals() {

    const container =
        $("#newArrivals") ||
        $("#newArrivalProducts") ||
        $(".new-arrivals-grid");

    if (!container) {
        return;
    }

    const products =
        PRODUCTS
            .filter(product => product.newArrival)
            .slice(0, 4);

    renderProducts(products, container);
}


/* =========================================================
   14. SHOP FILTERING
   ========================================================= */

function initShopPage() {

    const container = $("#shopProducts");

    if (!container) {
        return;
    }

    let currentCategory = "all";

    const params =
        new URLSearchParams(window.location.search);

    const urlCategory =
        params.get("category");

    const urlSearch =
        params.get("search");

    if (urlCategory) {
        currentCategory = urlCategory;
    }

    const filterButtons =
        $$(".filter-button");

    filterButtons.forEach(button => {

        if (
            button.dataset.category ===
            currentCategory
        ) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }

        button.addEventListener("click", () => {

            currentCategory =
                button.dataset.category;

            filterButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            applyShopFilters();
        });
    });


    const sortSelect =
        $("#sortProducts");


    if (sortSelect) {

        sortSelect.addEventListener("change", () => {

            applyShopFilters();

        });
    }


    function applyShopFilters() {

        let products = [...PRODUCTS];

        if (currentCategory !== "all") {

            products =
                products.filter(product =>
                    product.categories.includes(
                        currentCategory
                    )
                );
        }


        if (urlSearch) {

            const searchTerm =
                urlSearch.toLowerCase();

            products =
                products.filter(product =>
                    (
                        product.name +
                        " " +
                        product.category +
                        " " +
                        product.description
                    )
                    .toLowerCase()
                    .includes(searchTerm)
                );
        }


        const sort =
            sortSelect?.value ||
            "featured";


        switch (sort) {

            case "new":

                products.sort(
                    (a, b) =>
                        Number(b.newArrival) -
                        Number(a.newArrival)
                );

                break;


            case "low":

                products.sort(
                    (a, b) =>
                        a.price - b.price
                );

                break;


            case "high":

                products.sort(
                    (a, b) =>
                        b.price - a.price
                );

                break;


            default:

                products.sort(
                    (a, b) =>
                        Number(b.featured) -
                        Number(a.featured)
                );
        }


        renderProducts(
            products,
            container
        );
    }


    applyShopFilters();
}


/* =========================================================
   15. PRODUCT DETAIL PAGE
   ========================================================= */

function initProductPage() {

    const container =
        $("#productDetail");

    if (!container) {
        return;
    }

    const params =
        new URLSearchParams(window.location.search);

    const productId =
        params.get("id");

    const product =
        getProduct(productId) ||
        PRODUCTS[0];

    if (!product) {
        container.innerHTML =
            "<p>Product not found.</p>";

        return;
    }


    const images =
        product.images?.length
            ? product.images
            : [product.image];


    container.innerHTML = `

        <div class="product-gallery">

            <div class="product-main-image">

                <img
                    id="mainProductImage"
                    src="${escapeHTML(images[0])}"
                    alt="${escapeHTML(product.name)}"
                >

            </div>

            <div class="product-thumbnails">

                ${images.map((image, index) => `

                    <button
                        type="button"
                        class="product-thumbnail ${
                            index === 0 ? "active" : ""
                        }"
                        data-image="${escapeHTML(image)}"
                    >

                        <img
                            src="${escapeHTML(image)}"
                            alt="${escapeHTML(product.name)}"
                        >

                    </button>

                `).join("")}

            </div>

        </div>


        <div class="product-detail-content">

            ${
                product.badge
                    ? `
                    <span class="product-detail-badge">
                        ${escapeHTML(product.badge)}
                    </span>
                    `
                    : ""
            }

            <p class="section-eyebrow">
                ${escapeHTML(product.category)}
            </p>

            <h1>
                ${escapeHTML(product.name)}
            </h1>

            <div class="product-rating">

                <span>★★★★★</span>

                <span>
                    ${product.rating}
                    (${product.reviews} reviews)
                </span>

            </div>

            <div class="product-detail-price">

                <strong>
                    ${formatPrice(product.price)}
                </strong>

                ${
                    product.oldPrice
                        ? `
                        <del>
                            ${formatPrice(product.oldPrice)}
                        </del>
                        `
                        : ""
                }

            </div>

            <p class="product-description">
                ${escapeHTML(product.description)}
            </p>


            <div class="product-option">

                <label for="productColor">
                    Colour
                </label>

                <select id="productColor">

                    ${
                        product.colors.map(color => `
                            <option value="${escapeHTML(color)}">
                                ${escapeHTML(color)}
                            </option>
                        `).join("")
                    }

                </select>

            </div>


            <div class="product-option">

                <label for="productSize">
                    Size
                </label>

                <select id="productSize">

                    ${
                        product.sizes.map(size => `
                            <option value="${escapeHTML(size)}">
                                ${escapeHTML(size)}
                            </option>
                        `).join("")
                    }

                </select>

            </div>


            <div class="product-buy-row">

                <div class="quantity-selector">

                    <button
                        type="button"
                        id="minusQuantity"
                    >
                        −
                    </button>

                    <input
                        type="number"
                        id="productQuantity"
                        value="1"
                        min="1"
                        max="99"
                    >

                    <button
                        type="button"
                        id="plusQuantity"
                    >
                        +
                    </button>

                </div>


                <button
                    type="button"
                    class="btn btn-dark"
                    id="productAddToCart"
                >
                    Add to Bag
                </button>

            </div>


            <button
                type="button"
                class="whatsapp-order-button"
                id="whatsappProductOrder"
            >
                Order on WhatsApp
            </button>


            <div class="product-meta">

                <p>
                    <strong>Material:</strong>
                    ${escapeHTML(product.material)}
                </p>

                <p>
                    <strong>Delivery:</strong>
                    UAE delivery available
                </p>

                <p>
                    <strong>Production:</strong>
                    Made to order
                </p>

            </div>

        </div>
    `;


    /* Product image gallery */

    $$(".product-thumbnail").forEach(thumbnail => {

        thumbnail.addEventListener("click", () => {

            const image =
                thumbnail.dataset.image;

            const mainImage =
                $("#mainProductImage");

            if (mainImage) {
                mainImage.src = image;
            }

            $$(".product-thumbnail")
                .forEach(item =>
                    item.classList.remove("active")
                );

            thumbnail.classList.add("active");
        });

    });


    /* Quantity */

    const quantityInput =
        $("#productQuantity");

    $("#minusQuantity")?.addEventListener(
        "click",
        () => {

            let quantity =
                parseInt(quantityInput.value, 10) || 1;

            quantity =
                Math.max(1, quantity - 1);

            quantityInput.value =
                quantity;
        }
    );


    $("#plusQuantity")?.addEventListener(
        "click",
        () => {

            let quantity =
                parseInt(quantityInput.value, 10) || 1;

            quantity =
                Math.min(99, quantity + 1);

            quantityInput.value =
                quantity;
        }
    );


    /* Add product */

    $("#productAddToCart")?.addEventListener(
        "click",
        () => {

            const quantity =
                parseInt(
                    quantityInput.value,
                    10
                ) || 1;

            const color =
                $("#productColor")?.value || "";

            const size =
                $("#productSize")?.value || "";

            addToCart(
                product.id,
                quantity,
                {
                    color,
                    size
                }
            );
        }
    );


    /* WhatsApp */

    $("#whatsappProductOrder")
        ?.addEventListener(
            "click",
            () => {

                const color =
                    $("#productColor")?.value || "";

                const size =
                    $("#productSize")?.value || "";

                const quantity =
                    parseInt(
                        quantityInput.value,
                        10
                    ) || 1;


                const message =

`Hello Luxury Luxe,

I would like to order:

Product: ${product.name}
Quantity: ${quantity}
Colour: ${color}
Size: ${size}
Price: ${formatPrice(product.price)}

Please confirm availability, delivery and payment details.

Thank you.`;


                openWhatsApp(message);
            }
        );


    /* Breadcrumb */

    const breadcrumb =
        $("#productBreadcrumb");

    if (breadcrumb) {
        breadcrumb.textContent =
            product.name;
    }


    document.title =
        `${product.name} | Luxury Luxe`;


    renderRelatedProducts(product);
}


/* =========================================================
   16. RELATED PRODUCTS
   ========================================================= */

function renderRelatedProducts(currentProduct) {

    const container =
        $("#relatedProducts");

    if (!container) {
        return;
    }

    const related =
        PRODUCTS
            .filter(product =>
                product.id !== currentProduct.id &&
                product.categories.some(category =>
                    currentProduct.categories.includes(category)
                )
            )
            .slice(0, 4);

    renderProducts(
        related,
        container
    );
}


/* =========================================================
   17. SEARCH OVERLAY
   ========================================================= */

function initSearch() {

    const searchButtons =
        $$(".search-button");

    if (!searchButtons.length) {
        return;
    }


    let overlay =
        $("#searchOverlay");


    if (!overlay) {

        overlay =
            document.createElement("div");

        overlay.id =
            "searchOverlay";

        overlay.className =
            "search-overlay";

        overlay.innerHTML = `

            <div class="search-overlay-inner">

                <button
                    type="button"
                    class="search-close"
                    id="closeSearch"
                >
                    ×
                </button>

                <p class="section-eyebrow">
                    SEARCH LUXURY LUXE
                </p>

                <h2>
                    What are you looking for?
                </h2>

                <form id="searchForm">

                    <input
                        id="searchInput"
                        type="search"
                        placeholder="Search sofas, beds, chairs..."
                        autocomplete="off"
                    >

                    <button
                        type="submit"
                        class="btn btn-dark"
                    >
                        Search
                    </button>

                </form>

                <div
                    class="search-results"
                    id="searchResults"
                ></div>

            </div>
        `;

        document.body.appendChild(overlay);
    }


    function openSearch() {

        overlay.classList.add("open");

        setTimeout(() => {

            $("#searchInput")?.focus();

        }, 100);

    }


    function closeSearch() {

        overlay.classList.remove("open");

    }


    searchButtons.forEach(button => {

        button.addEventListener(
            "click",
            openSearch
        );

    });


    $("#closeSearch")
        ?.addEventListener(
            "click",
            closeSearch
        );


    overlay.addEventListener(
        "click",
        event => {

            if (
                event.target === overlay
            ) {
                closeSearch();
            }

        }
    );


    $("#searchForm")
        ?.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const query =
                    $("#searchInput")
                        ?.value
                        .trim();

                if (!query) {
                    return;
                }

                window.location.href =
                    `shop.html?search=${encodeURIComponent(query)}`;
            }
        );


    $("#searchInput")
        ?.addEventListener(
            "input",
            event => {

                const query =
                    event.target.value
                        .trim()
                        .toLowerCase();

                const results =
                    $("#searchResults");

                if (!results) {
                    return;
                }

                if (query.length < 2) {

                    results.innerHTML = "";

                    return;
                }


                const matches =
                    PRODUCTS
                        .filter(product =>
                            (
                                product.name +
                                " " +
                                product.category
                            )
                            .toLowerCase()
                            .includes(query)
                        )
                        .slice(0, 5);


                results.innerHTML =
                    matches.length
                        ? matches.map(product => `
                            <a
                                href="product.html?id=${encodeURIComponent(product.id)}"
                                class="search-result-item"
                            >

                                <img
                                    src="${escapeHTML(product.image)}"
                                    alt="${escapeHTML(product.name)}"
                                >

                                <span>
                                    <strong>
                                        ${escapeHTML(product.name)}
                                    </strong>

                                    <small>
                                        ${formatPrice(product.price)}
                                    </small>
                                </span>

                            </a>
                        `).join("")
                        : `
                            <p>
                                No products found.
                            </p>
                        `;
            }
        );
}


/* =========================================================
   18. MOBILE MENU
   ========================================================= */

function initMobileMenu() {

    const button =
        $("#mobileMenuButton");

    const menu =
        $("#mobileNavigation");

    if (!button || !menu) {
        return;
    }


    button.addEventListener(
        "click",
        () => {

            menu.classList.toggle("open");

            button.classList.toggle("active");

            const isOpen =
                menu.classList.contains("open");

            button.setAttribute(
                "aria-expanded",
                isOpen
            );
        }
    );


    $$("a", menu).forEach(link => {

        link.addEventListener(
            "click",
            () => {

                menu.classList.remove("open");

                button.classList.remove("active");

                button.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
        );

    });
}


/* =========================================================
   19. CART PAGE
   ========================================================= */

function renderCart() {

    const container =
        $("#cartItems");

    if (!container) {
        return;
    }

    const cart =
        getCart();

    const emptyCart =
        $("#emptyCart");

    const cartSummary =
        $("#cartSummary");


    if (!cart.length) {

        container.innerHTML = "";

        if (emptyCart) {
            emptyCart.style.display = "block";
        }

        if (cartSummary) {
            cartSummary.style.display = "none";
        }

        updateCartTotals();

        return;
    }


    if (emptyCart) {
        emptyCart.style.display = "none";
    }

    if (cartSummary) {
        cartSummary.style.display = "";
    }


    container.innerHTML =
        cart.map(item => {

            const product =
                getProduct(item.productId);

            if (!product) {
                return "";
            }

            return `

                <div
                    class="cart-item"
                    data-product-id="${escapeHTML(product.id)}"
                >

                    <div class="cart-item-image">

                        <img
                            src="${escapeHTML(product.image)}"
                            alt="${escapeHTML(product.name)}"
                        >

                    </div>


                    <div class="cart-item-info">

                        <p class="product-category">
                            ${escapeHTML(product.category)}
                        </p>

                        <h3>
                            ${escapeHTML(product.name)}
                        </h3>

                        <p>
                            Colour:
                            ${escapeHTML(item.color)}
                        </p>

                        <p>
                            Size:
                            ${escapeHTML(item.size)}
                        </p>

                        <strong>
                            ${formatPrice(product.price)}
                        </strong>

                    </div>


                    <div class="cart-item-actions">

                        <div class="quantity-selector">

                            <button
                                type="button"
                                data-cart-minus
                                data-product-id="${escapeHTML(product.id)}"
                                data-color="${escapeHTML(item.color)}"
                                data-size="${escapeHTML(item.size)}"
                            >
                                −
                            </button>

                            <input
                                type="number"
                                value="${item.quantity}"
                                min="1"
                                max="99"
                                data-cart-quantity
                                data-product-id="${escapeHTML(product.id)}"
                                data-color="${escapeHTML(item.color)}"
                                data-size="${escapeHTML(item.size)}"
                            >

                            <button
                                type="button"
                                data-cart-plus
                                data-product-id="${escapeHTML(product.id)}"
                                data-color="${escapeHTML(item.color)}"
                                data-size="${escapeHTML(item.size)}"
                            >
                                +
                            </button>

                        </div>


                        <strong class="cart-item-total">

                            ${formatPrice(
                                product.price *
                                item.quantity
                            )}

                        </strong>


                        <button
                            type="button"
                            class="remove-cart-item"
                            data-remove-cart
                            data-product-id="${escapeHTML(product.id)}"
                            data-color="${escapeHTML(item.color)}"
                            data-size="${escapeHTML(item.size)}"
                        >
                            Remove
                        </button>

                    </div>

                </div>
            `;

        }).join("");


    updateCartTotals();
}


/* =========================================================
   20. CART TOTALS
   ========================================================= */

function calculateSubtotal() {

    return getCart().reduce(
        (total, item) => {

            const product =
                getProduct(item.productId);

            if (!product) {
                return total;
            }

            return total +
                product.price *
                item.quantity;

        },
        0
    );
}


function getDiscount(subtotal) {

    const coupon =
        localStorage.getItem(
            STORE.couponKey
        );

    if (coupon === "LUXURY10") {
        return subtotal * 0.10;
    }

    if (coupon === "WELCOME5") {
        return subtotal * 0.05;
    }

    return 0;
}


function updateCartTotals() {

    const subtotal =
        calculateSubtotal();

    const discount =
        getDiscount(subtotal);

    const total =
        subtotal - discount;


    const subtotalElement =
        $("#cartSubtotal");

    const totalElement =
        $("#cartTotal");


    if (subtotalElement) {

        subtotalElement.textContent =
            formatPrice(subtotal);
    }


    if (totalElement) {

        totalElement.textContent =
            formatPrice(total);
    }


    const discountElement =
        $("#cartDiscount");


    if (discountElement) {

        discountElement.textContent =
            formatPrice(discount);
    }
}


/* =========================================================
   21. CART EVENTS
   ========================================================= */

function initCartEvents() {

    document.addEventListener(
        "click",
        event => {

            const removeButton =
                event.target.closest(
                    "[data-remove-cart]"
                );


            if (removeButton) {

                removeFromCart(
                    removeButton.dataset.productId,
                    removeButton.dataset.color,
                    removeButton.dataset.size
                );

                return;
            }


            const plusButton =
                event.target.closest(
                    "[data-cart-plus]"
                );


            if (plusButton) {

                changeCartQuantity(
                    plusButton.dataset.productId,
                    plusButton.dataset.color,
                    plusButton.dataset.size,
                    1
                );

                return;
            }


            const minusButton =
                event.target.closest(
                    "[data-cart-minus]"
                );


            if (minusButton) {

                changeCartQuantity(
                    minusButton.dataset.productId,
                    minusButton.dataset.color,
                    minusButton.dataset.size,
                    -1
                );

                return;
            }

        }
    );


    document.addEventListener(
        "change",
        event => {

            const input =
                event.target.closest(
                    "[data-cart-quantity]"
                );

            if (!input) {
                return;
            }

            updateCartItem(
                input.dataset.productId,
                input.dataset.color,
                input.dataset.size,
                input.value
            );

        }
    );
}


function changeCartQuantity(
    productId,
    color,
    size,
    amount
) {

    const cart =
        getCart();

    const item =
        cart.find(item =>
            item.productId === productId &&
            item.color === color &&
            item.size === size
        );

    if (!item) {
        return;
    }

    item.quantity =
        Math.max(
            1,
            item.quantity + amount
        );

    saveCart(cart);

    renderCart();
}


/* =========================================================
   22. COUPON
   ========================================================= */

function initCoupon() {

    const button =
        $("#applyCoupon");

    const input =
        $("#coupon");

    if (!button || !input) {
        return;
    }


    button.addEventListener(
        "click",
        () => {

            const code =
                input.value
                    .trim()
                    .toUpperCase();


            if (
                code !== "LUXURY10" &&
                code !== "WELCOME5"
            ) {

                showToast(
                    "Invalid coupon code"
                );

                return;
            }


            localStorage.setItem(
                STORE.couponKey,
                code
            );


            updateCartTotals();


            showToast(
                `${code} applied successfully`
            );
        }
    );
}


/* =========================================================
   23. WHATSAPP
   ========================================================= */

function openWhatsApp(message) {

    const url =
        `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(message)}`;

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );
}


/* =========================================================
   24. CART CHECKOUT
   ========================================================= */

function initCheckout() {

    const button =
        $("#checkoutButton");

    if (!button) {
        return;
    }


    button.addEventListener(
        "click",
        () => {

            const cart =
                getCart();


            if (!cart.length) {

                showToast(
                    "Your bag is empty"
                );

                return;
            }


            let message =
`Hello Luxury Luxe,

I would like to place an order.

Order Details:
`;


            cart.forEach((item, index) => {

                const product =
                    getProduct(item.productId);

                if (!product) {
                    return;
                }


                message += `

${index + 1}. ${product.name}
Quantity: ${item.quantity}
Colour: ${item.color}
Size: ${item.size}
Price: ${formatPrice(product.price * item.quantity)}
`;
            });


            const subtotal =
                calculateSubtotal();

            const discount =
                getDiscount(subtotal);

            const total =
                subtotal - discount;


            message += `

Subtotal: ${formatPrice(subtotal)}
Discount: ${formatPrice(discount)}
Total: ${formatPrice(total)}

Please confirm delivery availability and payment details.

Thank you,
Luxury Luxe`;


            openWhatsApp(message);
        }
    );
}


/* =========================================================
   25. QUICK ADD
   ========================================================= */

function initQuickAdd() {

    document.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "[data-add-product]"
                );

            if (!button) {
                return;
            }

            event.preventDefault();

            addToCart(
                button.dataset.addProduct
            );
        }
    );
}


/* =========================================================
   26. ACCORDIONS
   ========================================================= */

function initAccordions() {

    const details =
        $$("details");


    details.forEach(detail => {

        detail.addEventListener(
            "toggle",
            () => {

                if (!detail.open) {
                    return;
                }

                details.forEach(other => {

                    if (
                        other !== detail &&
                        other.parentElement ===
                        detail.parentElement
                    ) {
                        other.open = false;
                    }

                });
            }
        );

    });
}


/* =========================================================
   27. CONTACT FORM
   ========================================================= */

function initContactForm() {

    const form =
        $("#contactForm");

    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const formData =
                new FormData(form);


            const name =
                formData.get("name") ||
                $("#name")?.value ||
                "";


            const email =
                formData.get("email") ||
                $("#email")?.value ||
                "";


            const phone =
                formData.get("phone") ||
                $("#phone")?.value ||
                "";


            const message =
                formData.get("message") ||
                $("#message")?.value ||
                "";


            const subject =
                `Luxury Luxe Website Inquiry - ${name}`;


            const body =
`Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}`;


            window.location.href =
                `mailto:${STORE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;


            showToast(
                "Opening your email application..."
            );
        }
    );
}


/* =========================================================
   28. NEWSLETTER
   ========================================================= */

function initNewsletter() {

    const forms =
        $$("form");


    forms.forEach(form => {

        const emailInput =
            form.querySelector(
                'input[type="email"]'
            );


        if (
            !emailInput ||
            form.id === "contactForm"
        ) {
            return;
        }


        const submitButton =
            form.querySelector(
                'button[type="submit"]'
            );


        if (!submitButton) {
            return;
        }


        form.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const email =
                    emailInput.value.trim();


                if (!email) {
                    return;
                }


                const subscribers =
                    JSON.parse(
                        localStorage.getItem(
                            STORE.newsletterKey
                        ) || "[]"
                    );


                if (
                    !subscribers.includes(email)
                ) {

                    subscribers.push(email);

                    localStorage.setItem(
                        STORE.newsletterKey,
                        JSON.stringify(subscribers)
                    );
                }


                showToast(
                    "Thank you for subscribing!"
                );


                form.reset();
            }
        );
    });
}


/* =========================================================
   29. DYNAMIC FOOTER
   ========================================================= */

function initFooter() {

    const footer =
        $("footer");


    if (!footer) {
        return;
    }


    const year =
        new Date().getFullYear();


    $$(".current-year", footer)
        .forEach(element => {

            element.textContent =
                year;

        });


    const whatsappLinks =
        $$(
            ".footer-whatsapp, [data-whatsapp]",
            footer
        );


    whatsappLinks.forEach(link => {

        link.href =
            `https://wa.me/${STORE.whatsapp}`;

        link.target = "_blank";

        link.rel =
            "noopener noreferrer";
    });
}


/* =========================================================
   30. IMAGE FALLBACK
   ========================================================= */

function initImageFallback() {

    document.addEventListener(
        "error",
        event => {

            const image =
                event.target;


            if (
                image.tagName !== "IMG"
            ) {
                return;
            }


            if (
                image.dataset.fallbackApplied
            ) {
                return;
            }


            image.dataset.fallbackApplied =
                "true";


            image.src =
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=70";
        },
        true
    );
}


/* =========================================================
   31. ACTIVE NAVIGATION
   ========================================================= */

function initActiveNavigation() {

    const currentPage =
        window.location.pathname
            .split("/")
            .pop() ||
        "index.html";


    $$(".main-navigation a, .mobile-navigation a")
        .forEach(link => {

            const href =
                link.getAttribute("href");

            if (!href) {
                return;
            }


            const page =
                href.split("?")[0];


            if (
                page === currentPage ||
                (
                    currentPage === "" &&
                    page === "index.html"
                )
            ) {

                link.classList.add("active");

            } else {

                link.classList.remove("active");
            }
        });
}


/* =========================================================
   32. SMOOTH SCROLL
   ========================================================= */

function initSmoothScroll() {

    $$('a[href^="#"]').forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    $(targetId);


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        );
    });
}


/* =========================================================
   33. HEADER SCROLL EFFECT
   ========================================================= */

function initHeaderScroll() {

    const header =
        $(".site-header");

    if (!header) {
        return;
    }


    function updateHeader() {

        if (window.scrollY > 30) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );
        }
    }


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );


    updateHeader();
}


/* =========================================================
   34. URL SEARCH
   ========================================================= */

function initSearchLinks() {

    $$("[data-search-link]")
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const search =
                        link.dataset.searchLink;

                    if (!search) {
                        return;
                    }

                    event.preventDefault();

                    window.location.href =
                        `shop.html?search=${encodeURIComponent(search)}`;
                }
            );

        });
}


/* =========================================================
   35. GLOBAL LUXURY LUXE API
   ========================================================= */

window.LuxuryLuxe = {

    products: PRODUCTS,

    getProduct,

    getCart,

    addToCart,

    removeFromCart,

    updateCartItem,

    calculateSubtotal,

    formatPrice,

    openWhatsApp
};


/* =========================================================
   36. INITIALIZE WEBSITE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateCartCount();

        initMobileMenu();

        initSearch();

        initShopPage();

        initProductPage();

        initQuickAdd();

        initCartEvents();

        renderCart();

        initCoupon();

        initCheckout();

        initAccordions();

        initContactForm();

        initNewsletter();

        initFooter();

        initImageFallback();

        initActiveNavigation();

        initSmoothScroll();

        initHeaderScroll();

        initSearchLinks();

        renderBestSellers();

        renderNewArrivals();

    }
);