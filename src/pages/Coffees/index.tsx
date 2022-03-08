import Head from 'next/head';
import type { NextPage } from 'next';

import styles from './styles.module.scss';
import { Footer } from '../../components/Footer';
import Link from 'next/link';
import { useCart } from '../../hooks/useCart';
import { coffees } from '../../data/coffees';
import { Navbar } from '../../components/Navbar';

const Coffees: NextPage = () => {
  const { addCoffeeInCart, removeCoffeeCart } = useCart();

  return (
    <div className={styles.container}>
      <Head>
        <title>Cafés | CyberCoffee</title>
      </Head>

      <Navbar isCoffeesActive />

      <div className={styles.welcome}>
        <div className={styles.texts}>
          <h1>Opções deliciosas para sua Manhã</h1>
          <p>
            Um belo café, saboroso, onde o cheiro atrai qualquer <br /> adorador.
            Esse é sim o perfeito para
            começar todas <br /> as suas manhãs, com energia e foco!
          </p>
          <Link href="/Cart" passHref>
            <button type="button">
              Ver Carrinho
            </button>
          </Link>
        </div>

        <img src='/products2-img.png' alt="Cafés" />
      </div>

      <div className={styles.coffees}>
        <h1>Cafés</h1>

        <div>
          {coffees.map(coffee => (
            <div key={coffee.id} className={styles.coffee}>
              <img src={`/${coffee.img}`} alt={coffee.title} />

              <h1>
                {coffee.title}
              </h1>
              <p>R$ {coffee.price}</p>
              <button type="button" onClick={() => addCoffeeInCart(coffee)}>
                adicionar
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Coffees;