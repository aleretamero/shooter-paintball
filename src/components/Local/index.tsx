import styles from './styles.module.scss';
import Link from 'next/link';

import local from '../../../public/images/local.svg';
import Image from 'next/image';
import { Carousel } from '../Carousel';

export const Local = () => {
  return (
    <section id="local" className={styles.section}>
      <h2 className="title">Onde fica a nossa base?</h2>
      <div className={styles.container}>
        <div className={styles.carousel}>
          <Carousel
            images={[
              {
                src: '/images/img-1.webp',
                alt: 'Imagem 1',
              },
              {
                src: '/images/img-2.webp',
                alt: 'Imagem 2',
              },
              {
                src: '/images/img-3.webp',
                alt: 'Imagem 3',
              },
              {
                src: '/images/img-4.webp',
                alt: 'Imagem 4',
              },
            ]}
          />
        </div>
        <div className={styles.content}>
          <h3 className="subtitle">Nós estamos</h3>
          <strong className="title">Localizados em</strong>
          <div className={styles.address}>
            <Image src={local} alt="Icone Local" width={38} height={42.22} />
            <p>
              Centro De Paintball em Morro do Engenho <br /> Rua Ovídio Silva,
              1250 - Morro do Engenho, Itaúna - MG
            </p>
          </div>
          <div className={styles.reference}>
            <span>Ponto de referência:</span> próximo ao Condomínio Recanto dos
            Pássaros.
          </div>
          <div className={styles.containerButtons}>
            <Link className={styles.button} href="">
              VER NO MAPA
            </Link>
            <Link className={styles.button} href="">
              VER MAIS FOTOS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
