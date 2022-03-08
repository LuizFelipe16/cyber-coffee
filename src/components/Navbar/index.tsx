import Link from "next/link";
import { FaCoffee, FaExclamationCircle, FaHeart, FaHome, FaShoppingCart } from "react-icons/fa";

import styles from './styles.module.scss';

interface NavbarProps {
  isBlogActive?: boolean;
  isCoffeesActive?: boolean;
  isContactActive?: boolean;
  isHomeActive?: boolean;
  isCartActive?: boolean;
}

function Navbar({
  isBlogActive = false,
  isCoffeesActive = false,
  isContactActive = false,
  isHomeActive = false,
  isCartActive = false
}: NavbarProps) {
  return (
    <div className={`${styles.header} ${isCartActive ? styles.background_blue : ''}`}>
      <img src="/logo.png" alt="Logo" />

      <div className={styles.links}>
        <Link href="/">
          <a className={isHomeActive ? styles.active : ''}><FaHome size={21} /> | Home</a>
        </Link>
        <Link href="/Contact">
          <a className={isContactActive ? styles.active : ''}><FaExclamationCircle size={21} /> | Contato</a>
        </Link>
        <Link href="/Coffees">
          <a className={isCoffeesActive ? styles.active : ''}><FaCoffee size={21} /> | Produtos</a>
        </Link>
        <Link href="/Blog">
          <a className={isBlogActive ? styles.active : ''}><FaHeart size={21} /> | Blog</a>
        </Link>
      </div>

      <Link href="/Cart" passHref>
        <button className={styles.cart}>
          <FaShoppingCart />
        </button>
      </Link>
    </div>
  );
}

export { Navbar };