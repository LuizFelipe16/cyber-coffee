import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'

import { ToastContainer } from "react-toastify";

import type { AppProps } from 'next/app'
import { CartProvider } from '../contexts/CartContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
      <ToastContainer theme="dark" />
    </CartProvider>
  );
}

export default MyApp;