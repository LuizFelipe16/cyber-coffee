import { useState, createContext, ReactNode } from 'react';
import { notifyInfo } from '../configs/toasts';
import { coffees } from '../data/coffees';

interface Coffee {
  id: number;
  title: string;
  price: number;
  img: string;
  amount: number;
  stock: number;
}

interface CartContextProps {
  cart: Coffee[];
  addCoffeeInCart: (coffee: Coffee) => void;
  removeCoffeeCart: (coffee: Coffee) => void;
  incrementAndDecrementCoffeeInCart: (indexCoffeeInCart: number, action: 'inc' | 'dec') => void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextProps>({} as CartContextProps);

function CartProvider(props: CartProviderProps) {
  const [cart, setCart] = useState<Coffee[]>([]);

  const addCoffeeInCart = (coffee: Coffee) => {
    const index = cart.findIndex(item => item.id === coffee.id);

    if (index >= 0) {
      notifyInfo('Esse produto já está no seu carrinho.');
      return;
    } else {
      cart.push(coffee);
      setCart([...cart]);

      notifyInfo('Produto adicionado ao seu carrinho.');
      return;
    }
  }

  const removeCoffeeCart = (coffee: Coffee) => {
    const index = cart.findIndex(item => item.id === coffee.id);
    const indexCoffee = coffees.findIndex(item => item.id === coffee.id);

    if (index < 0) {
      notifyInfo('Ocorreu um erro ao tentar remover o produto.');
      return;
    } else {
      coffees[indexCoffee].amount = 1;
      cart.splice(index, 1);
      setCart([...cart]);

      notifyInfo('Produto removido do carrinho.');
      return;
    }
  }

  function incrementAndDecrementCoffeeInCart(indexCoffeeInCart: number, action: 'inc' | 'dec') {
    const coffee = cart[indexCoffeeInCart];

    const indexCoffeeInStock = coffees.findIndex(item => item.id === coffee.id);
    const coffeeInStock = coffees[indexCoffeeInStock];

    if (action === 'inc') {
      if (coffee.amount >= coffeeInStock.stock) {
        notifyInfo('Quantidade máxima atingida.');
        return;
      }

      coffee.amount = coffee.amount + 1;
      setCart([...cart]);

      return;
    } else if (action === 'dec') {
      if (coffee.amount <= 1) {
        notifyInfo('Quantidade mínima atingida. Remova o Item do seu carrinho.');
        return;
      }

      coffee.amount = coffee.amount - 1;

      setCart([...cart]);

      return;
    }
  }

  return (
    <CartContext.Provider value={{
      cart,
      addCoffeeInCart,
      removeCoffeeCart,
      incrementAndDecrementCoffeeInCart,
    }}>
      {props.children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };