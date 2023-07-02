import styles from './styles.module.scss';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>©Alvo Paintball - 2023 - Todos os direitos reservados</p>
      <div>
        Criação de Sites:
        <Link href="https://lucascrp.vercel.app/" target="_blank">
          https://lucascrp.vercel.app/
        </Link>
        <Link href="https://alexandreretamero.vercel.app/" target="_blank">
          https://alexandreretamero.vercel.app/
        </Link>
      </div>
    </footer>
  );
};
