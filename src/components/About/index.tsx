import styles from './styles.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import whatsapp from '../../../public/images/whatsapp.svg';
import facebook from '../../../public/images/facebook.svg';
import instagram from '../../../public/images/instagram.svg';

import clock from '../../../public/images/clock.svg';
import space from '../../../public/images/nosso-espaco.svg';
import security from '../../../public/images/seguranca.svg';
import hand from '../../../public/images/hand.svg';
import equips from '../../../public/images/equipamentos.svg';
import objects from '../../../public/images/objetivos.svg';

export const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className="subtitle">SOBRE</h2>
        <strong className="title">
          O QUE VOCÊ PODE <br /> ESPERAR DE NÓS?
        </strong>
        <p>
          Somos considerados o melhor campo de paintball de Minas Gerais. Nosso
          campo é inspirado no game CS:GO, então já sabe que aqui é outro nível!
          Temos jogos de missões para te elevar a uma maior imerssão no cenário.
          Nosso diferencial.
        </p>
        <p>
          Você pode fazer a sua reserva sem custo algum via telefone ou reservar
          online mediante pagamento de sua escolha.
        </p>
        <nav>
          <Link href="">
            <Image src={whatsapp} alt="whatsapp" width={48} height={48} />
          </Link>
          <Link href="">
            <Image src={facebook} alt="facebook" width={52} height={52} />
          </Link>
          <Link href="">
            <Image src={instagram} alt="instagram" width={48} height={50} />
          </Link>
        </nav>
      </div>
      <ul className={styles.cards}>
        <li>
          <Image
            src={clock}
            alt="Amplo horário de funcionamento"
            width={104}
            height={104}
          />
          <span>Amplo horário de <br /> funcionamento</span>
        </li>
        <li>
          <Image src={space} alt="Nosso espaço" width={110} height={96} />
          <span>Nosso espaço</span>
        </li>
        <li>
          <Image
            src={security}
            alt="Segurança em primeiro lugar"
            width={98}
            height={96}
          />
          <span>Segurança em <br /> primeiro lugar</span>
        </li>
        <li>
          <Image
            src={hand}
            alt="Preços mais acessíveis"
            width={110}
            height={96}
          />
          <span>Preços mais <br /> acessíveis</span>
        </li>
        <li>
          <Image
            src={equips}
            alt="Os melhores equipamentos"
            width={111}
            height={97}
          />
          <span>Os melhores <br /> equipamentos</span>
        </li>
        <li>
          <Image
            src={objects}
            alt="Jogos com objetivos"
            width={96}
            height={96}
          />
          <span>Jogos com <br /> objetivos</span>
        </li>
      </ul>
    </section>
  );
};
