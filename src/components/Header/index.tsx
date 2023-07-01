import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import { FaWhatsapp } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          className={styles.logo}
          src={logo}
          alt="Logo Shooter Paintball"
          width={95}
          height={95}
        />
      </Link>
      <nav className={styles.navbar}>
        <Link href="#home">Início</Link>
        <Link href="#about">Sobre</Link>
        <Link href="#local">Local</Link>
        <Link href="#packges">Pacotes</Link>
        <Link href="" className={styles.whatsAppButton}>
          <span>Fale com a gente</span>
          <FaWhatsapp />
        </Link>
      </nav>
    </header>
  );
};
