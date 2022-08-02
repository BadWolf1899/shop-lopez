import React, { useContext, useState } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

  console.log("en el carrito hay:", cart);

const addProduct = (item, quantity) => {
  if (isInCart(item.Id)) {
    setCart(
      cart.map((product) => {
        return product.Id === item.Id
          ? { ...product, quantity: product.quantity + quantity }
          : product;
      }),
    );
  } else {
    setCart([...cart, { ...item, quantity }]);
  }
};

const totalPrice = () => {
  return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
};

const totalProducts = () =>
  cart.reduce(
    (acumulador, productoActual) => acumulador + productoActual.quantity,
    0,
  );

const clearCart = () => setCart([]);

const isInCart = (Id) =>
  cart.find((product) => product.Id === Id) ? true : false;

const removeProduct = (Id) =>
  setCart(cart.filter((product) => product.Id !== Id));

return (
  <CartContext.Provider
    value={{
      clearCart,
      isInCart,
      removeProduct,
      addProduct,
      totalPrice,
      totalProducts,
      cart,
    }}
  >
    {children}
  </CartContext.Provider>
);
};

export default CartProvider;