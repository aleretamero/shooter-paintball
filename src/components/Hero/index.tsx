import Link from 'next/link';
import styles from './styles.module.scss';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <h1>
        O tiro certo PARA UM JOGO <br /><span>com MAIS adrenalina!</span>
      </h1>
      <Link href="/" className='button'>
        AGENDAR JOGO
      </Link>
    </section>
  );
};
