import styles from './styles.module.scss';

export const Contact = () => {
  return (
    <section>
      <h2>Fale com a gente</h2>
      <span>Responderemos o seu contato o mais breve possível.</span>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Nome" />
        <textarea placeholder="Mensagem" />
        <button className='button'>ENVIAR MENSAGEM</button>
      </form>
    </section>
  );
};
