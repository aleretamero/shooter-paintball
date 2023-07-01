import styles from './styles.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import check from '../../../public/images/check.svg';

export const Packages = () => {
  return (
    <section id="packges" className={styles.container}>
      <h2 className="subtitle">PACOTES</h2>
      <strong className="title">
        PREÇOS E PACOTES <br /> PAINTBALL
      </strong>
      <div className={styles.containerCard}>
        <div className={styles.card}>
          <h3>PACOTE OURO</h3>
          <div className={styles.price}>
            <span>R$</span>
            <span>50</span>
            <span>,00</span>
          </div>
          <span>VALOR POR PESSOA</span>
          <ul className={styles.listBenefits}>
            <li>
              <Image src={check} alt="check" width={28} height={29} />
              <span>01:30h de jogo;</span>
            </li>
            <li>
              <Image src={check} alt="check" width={28} height={29} />
              <span>Colete, máscara e marcador;</span>
            </li>
            <li>
              <Image src={check} alt="check" width={28} height={29} />
              <span>100 Bolinhas;</span>
            </li>
            <li>
              <Image src={check} alt="check" width={28} height={29} />
              <span>Juízes experientes;</span>
            </li>
          </ul>
          <Link href="">Agendar agora</Link>
        </div>
        <div className={styles.card}>
          <h3>PACOTE ELITE</h3>
          <div className={styles.price}>
            <span>R$</span>
            <span>60</span>
            <span>,00</span>
          </div>
          <span>VALOR POR PESSOA</span>
          <ul className={styles.listBenefits}>
            <li>
              <Image src={check} alt="check" width={28} height={29} />
              <span>01:30h de jogo;</span>
            </li>
            <li>
              <Image src={check} alt="check" width={28} height={29} />
              <span>Colete, máscara e marcador;</span>
            </li>
            <li>
              <Image src={check} alt="check" width={28} height={29} />
              <span>200 Bolinhas;</span>
            </li>
            <li>
              <Image src={check} alt="check" width={28} height={29} />
              <span>Juízes experientes;</span>
            </li>
          </ul>
          <Link href="">Agendar agora</Link>
        </div>
      </div>
      <div className={styles.containerExtrasOptions}>
        <h3>Opcionais extras</h3>
        <div className={styles.contentExtrasOptions}>
          <h4>Bolinhas extras</h4>
          <div>
            100 Bolinhas <span>R$ 15,00</span>
          </div>
          <div>
            100 Bolinhas <span>R$ 25,00</span>
          </div>
          <h4>Equipamento Próprio</h4>
          <div>
            Pessoas com equipamento <span>R$ 30,00</span>
          </div>
          <h4>Recarga de Co2 equip. próprio</h4>
          <div>
            9 ou 12 oz <span>R$ 15,00</span>
          </div>
          <div>
            20 ou 24 oz <span>R$ 20,00</span>
          </div>
        </div>
      </div>
    </section>
  );
};
