/// Ürünleri Apı dan alan fonksiyon
export const fetchProducts = async () => {
  try {
    const response = await fetch("db.json");

    // Eğer hata yoksa veriyi dönüştür
    if (!response.ok) {
      throw new Error("Yanlış URL");
    }

    return await response.json();
  } catch (error) {
    console.log(`Hataa: ${error}`);
    return [];
  }
};

// Ürünleri Render eden fonksiyon
export const renderProducts = (products, addToCartCallBack) => {
  // Ürünlerin render edileceği kapsamı Htmlden çekme
  const productList = document.querySelector("#product-list");
  // Product List'in içeriğini belirle

  productList.innerHTML = products
    .map(
      (product) =>
        // Bu fonksiyona parametre olarak verilen datayı dön ve her data için bir Html oluştur.
        `
       <div class="product">
            <img
              src="${product.image}"
              alt="product-img"
              class="product-img"
            />
            <div class="product-info">
              <h2 class="product-title">${product.title}</h2>
              <p class="product-price">$${product.price}</p>
              <a class="add-to-cart"data-id='${product.id}' >Add to cart</a>
            </div>
          </div>
  `
    )
    .join("");

  // Add to cart butonlarını seç
  const addToCartButtons = document.getElementsByClassName("add-to-cart");
  // Her butonu seç
  for (let i = 0; i < addToCartButtons.length; i++) {
    // Buton Collection ı içerisinden  butona eriş
    const addToCartButton = addToCartButtons[i];
    //Erişilen her butona olay izleyicisi ekle.
    addToCartButton.addEventListener("click", addToCartCallBack);
  }
};
