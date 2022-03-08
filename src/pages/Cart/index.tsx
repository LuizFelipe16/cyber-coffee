import Head from 'next/head';
import type { NextPage } from 'next';

import { FaOpencart } from 'react-icons/fa';
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io';

import styles from './styles.module.scss';
import { Footer } from '../../components/Footer';
import { useCart } from '../../hooks/useCart';
import { Navbar } from '../../components/Navbar';

const Coffees: NextPage = () => {
  const { cart, removeCoffeeCart, incrementAndDecrementCoffeeInCart } = useCart();

  const total = cart.reduce((acc, coffee) => {
    const value = coffee.price * coffee.amount;
    return acc + value;
  }, 0);

  function sendRequest() {
    var number_phone = "5519989522121";

    var message = `
    Pedido \n
    Itens do Carrinho: \n
    ${cart.map(item => `| Código ${item.id} - ${item.title} - Quantidade: ${item.amount} \n`)}
    Total no valor de R$ ${total.toFixed(2)}`

    message = window.encodeURIComponent(message);

    window.open("https://api.whatsapp.com/send?phone=" + number_phone + "&text=" + message, "_blank");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Carrinho | CyberCoffee</title>
      </Head>

      <Navbar isCartActive />

      <div className={styles.coffees}>
        <h1>
          <FaOpencart />
          <span>R$ {total.toFixed(2)}</span>
        </h1>

        <hr />

        <div>
          {cart.map((coffee, index) => (
            <div key={coffee.id} className={styles.coffee}>
              <img src={`/${coffee.img}`} alt={coffee.title} />

              <h1>
                {coffee.title}
              </h1>
              <p>R$ {coffee.price}</p>
              <span>
                <button
                  onClick={() => incrementAndDecrementCoffeeInCart(index, 'dec')}
                  type="button"
                >
                  <IoMdArrowDropleft />
                </button>
                {coffee.amount}
                <button
                  onClick={() => incrementAndDecrementCoffeeInCart(index, 'inc')}
                  type="button"
                >
                  <IoMdArrowDropright />
                </button>
              </span>
              <button type="button" onClick={() => removeCoffeeCart(coffee)}>
                remover
              </button>
            </div>
          ))}
        </div>

        {
          cart.length === 0 ? null : (
            <button onClick={sendRequest} className={styles.request}>Fazer Pedido</button>
          )
        }
      </div>

      <Footer />
    </div>
  );
}

export default Coffees;