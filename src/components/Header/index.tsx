import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import { FaWhatsapp } from 'react-icons/fa';
import { useMedia } from '@/hooks/useMedia';
import { useState } from 'react';

export const Header = () => {
  const mobile = useMedia('(max-width: 48rem)');
  console.log(mobile);

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          className={styles.logo}
          src={logo}
          alt="Logo Shooter Paintball"
          width={95}
          height={95}
          quality={100}
        />
      </Link>
      {!mobile ? (
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
      ) : (
        <MenuMobile />
      )}
    </header>
  );
};

export function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <label htmlFor="menu-icon" className={styles['menu-icon']}>
        <input
          id="menu-icon"
          type="checkbox"
          onChange={() => setIsOpen(!isOpen)}
          checked={isOpen}
        />
        <span></span>
        <span></span>
        <span></span>
      </label>
      {isOpen && (
        <div>
          <nav className={styles['menu-mobile']}>
            <div onClick={() => setIsOpen(false)}>
              <Link href="#home">Início</Link>
            </div>
            <div onClick={() => setIsOpen(false)}>
              <Link href="#about">Sobre</Link>
            </div>
            <div onClick={() => setIsOpen(false)}>
              <Link href="#local">Local</Link>
            </div>
            <div onClick={() => setIsOpen(false)}>
              <Link href="#packges">Pacotes</Link>
            </div>
            <div onClick={() => setIsOpen(false)}>
              <Link href="" className={styles.whatsAppButton}>
                <span>Fale com a gente</span>
                <FaWhatsapp />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
