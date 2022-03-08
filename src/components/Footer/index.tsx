import Link from 'next/link';
import { FaLongArrowAltUp } from 'react-icons/fa';

import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h2>Seções</h2>

        <Link href="/" passHref>
          <p>Home</p>
        </Link>
        <Link href="/Contact" passHref>
          <p>Contato</p>
        </Link>
        <Link href="/Cart" passHref>
          <p>Carrinho</p>
        </Link>
        <Link href="/Coffees" passHref>
          <p>Produtos</p>
        </Link>
        <Link href="/Blog" passHref>
          <p>Blog</p>
        </Link>
      </div>

      <div>
        <h2>Entre em contato</h2>

        <p>Email: cn@cybernegocio.com.br</p>
        <p>Whatsapp: 19 99533-5562</p>
        <p>Instagram: @cybernegocioscn</p>
      </div>

      <div>
        <h2>Vamos ao Futuro!</h2>

        <p>venha fazer parte <br /> e se torne um cyber negócio.</p>

        <a
          href="https://api.whatsapp.com/send?phone=5519995335562&text=Olá%20CyberNegócios,%20tenho%20interesse%20em%20seus%20serviços"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.contact}
        >
          Conversar no Whatsapp
        </a>
      </div>

      <div className={styles.divTop}>
      </div>
    </footer>
  );
}