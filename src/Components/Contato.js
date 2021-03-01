import React from 'react';
import styles from './Contato.module.css';
import Head from './Head';

const Contato = () => {
  return (
    <section className={styles.contato + ' animeLeft'}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src="/images/contato.jpg" alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>dev@matheusbronca.com</li>
          <li>9999-9999</li>
          <li> Benedito Ramos Primo, Park Achieta, N.252</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
