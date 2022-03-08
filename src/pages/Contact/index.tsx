import Head from 'next/head';
import type { NextPage } from 'next';

import styles from './styles.module.scss';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';

const Contact: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contato | CyberCoffee</title>
      </Head>

      <Navbar isContactActive />

      <div className={styles.welcome}>
        <div className={styles.texts}>
          <h1>Precisa entrar em contato?</h1>
          <p>
            É simples e fácil, você apenas precisa <br /> clicar
            no botão abaixo e então conversar
            conosco <br /> diretamente pelo Whatsapp.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5519995335562&text=Olá%20CyberNegócios,%20tenho%20interesse%20em%20seus%20serviços"
            target="_blank"
            rel="noreferrer noopener"
          >
            Conversar
          </a>
        </div>

        <img src='/contact-img.png' alt="Cafés" />
      </div>

      <div className={styles.coffees}>
        <h1>Onde estamos?</h1>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.4926624792406!2d-47.386374685444025!3d-22.183375985384473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xff84a18cb7266ffa!2zMjLCsDExJzAwLjIiUyA0N8KwMjMnMDMuMSJX!5e0!3m2!1spt-BR!2sbr!4v1637472723133!5m2!1spt-BR!2sbr"
            style={{ border: 0 }}
            loading="lazy">

          </iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;