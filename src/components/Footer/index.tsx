import styles from './styles.module.scss';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>©Alvo Paintball - 2023 - Todos os direitos reservados</p>
      <div>
        Criação de Sites:
        <Link href="https://dev.aleretamero.com.br" target="_blank">
          https://dev.aleretamero.com.br
        </Link>
      </div>
    </footer>
  );
};
