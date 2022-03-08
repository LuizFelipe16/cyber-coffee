import Head from 'next/head';
import type { NextPage } from 'next';
import Link from 'next/link';
import { ImQuotesLeft } from 'react-icons/im';

import styles from '../styles/Home.module.scss';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

const reviews = [
  {
    id: 1,
    name: 'Jorge Clin',
    text: 'Eu não esperava muito de vocês, mas nossa, o café que comprei estava maravilhoso, realmente é especial e perfeito pra começar minha manhã.'
  },
  {
    id: 2,
    name: 'Mitchel Cams',
    text: 'Uma delícia, de verdade, é saboroso e o cheiro me agradou demais, vou voltar aqui.'
  },
  {
    id: 3,
    name: 'Luis',
    text: 'Uma delícia, de verdade, é saboroso e o cheiro me agradou demais, vou voltar aqui.'
  },
]

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Cyber Coffee</title>
      </Head>

      <Navbar isHomeActive />

      <div className={styles.welcome}>
        <div className={styles.texts}>
          <h1>Café Fresco da Manhã</h1>
          <p>
            Um belo café, saboroso, onde o cheiro atrai qualquer adorador. Esse é sim o perfeito para
            começar todas as suas manhãs, com energia e foco!
          </p>
          <Link href="/Coffees" passHref>
            <button type="button">
              Ver todos
            </button>
          </Link>
        </div>

        <img src='/home-img.jpeg' alt="H" />
      </div>

      <div className={styles.about}>
        <h1>Sobre</h1>

        <div>
          <img src="/about-img.jpeg" alt="Coffee" />

          <div className={styles.content}>
            <h1>
              Como fazemos esse café especial?
            </h1>

            <p>
              O café especial é o resultado de uma rede que deve seguir padrões de
              qualidade, rastreabilidade e sociais. É classificado como a maior qualidade
              do café em uma escala de pontos que pode ir até 100, mas precisa
              ter 80 ou mais pontos na análise para ser aceito como especial.

              <br />
              <br />

              Somos especializados nesses tipos de cafés, onde você pode facilmente sentir a
              fragrância de longe, tornando essa mistura de delicadeza e qualidade, algo
              espetacular.
            </p>

            <Link href="/Coffees" passHref>
              <button>
                Ver todos
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.reviews}>
        {reviews.map(coffee => (
          <div key={coffee.id} className={styles.review}>
            <ImQuotesLeft size={70} />

            <p>{coffee.text}</p>
            <h1>
              {coffee.name}
            </h1>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Home