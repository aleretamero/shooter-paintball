import styles from './styles.module.scss';
import Link from 'next/link';

import local from '../../../public/images/local.svg';
import Image from 'next/image';

export const Local = () => {
  return (
    <section>
      <h2>Onde fica a nossa base?</h2>
      <div>
        <div className={styles.carousel}></div>
        <div>
          <h3>Nós estamos</h3>
          <strong>Localizados em</strong>
          <div>
            <Image src={local} alt="Icone Local" width={38} height={42.22} />
            <span>Centro De Paintball em Morro do Engenho</span>
            <span>Rua Ovídio Silva, 1250 - Morro do Engenho, Itaúna - MG</span>
          </div>
          <div>
            <span>Ponto de referência:</span> próximo ao Condomínio Recanto dos
            Pássaros.
          </div>
          <div>
            <Link className={`button ${styles.button}`} href="">
              VER NO MAPA
            </Link>
            <Link className={`button ${styles.button}`} href="">
              VER MAIS FOTOS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
