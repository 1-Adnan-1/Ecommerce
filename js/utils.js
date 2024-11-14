// Localstorage  ekleme yapacak fonksiyon
export const saveToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  
  // Localstorage verileri alan fonksiyon
  export const getFromLocalStorage = () => {
    const data = localStorage.getItem("cart");
    
    return data ? JSON.parse(data) : [];
  };
  
  // Sepet toplamını bulan fonksiyon
  export const calculateCartTotal = (cart) => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };
  // Sepet ıconunu güncelleyen fonksiyon
  export const updateCartIcon = (cart) => {
    //  Sepet iconuna ve Quantit değerine eriş
    const cartIcon = document.querySelector("#cart-icon");
    const i = document.querySelector(".bxs-shopping-bag");
    // toplam ürün sayısına eriş
    let totalQuantity = cart.reduce((sum, item) => {
      return sum + item.quantity;
    }, 0);
    // Sepet iconunun sayısını GÜNCELLER
    i.setAttribute("data-quantity", totalQuantity);
  };