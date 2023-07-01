import styles from './styles.module.scss';

export const Contact = () => {
  return (
    <section className={styles.container}>
      <h2>Fale com a gente</h2>
      <span>Responderemos o seu contato o mais breve possível.</span>
      <form className={styles.form}>
        <input type="text" placeholder="Nome" autoComplete='name'/>
        <input type="text" placeholder="Email" autoComplete='email'/>
        <input type="text" placeholder="Telefone com DDD" autoCapitalize='tel-local'/>
        <input type="text" placeholder="Qual Assunto" />
        <textarea placeholder="Mensagem" />
        <button className='button'>ENVIAR MENSAGEM</button>
      </form>
    </section>
  );
};
