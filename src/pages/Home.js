import React from 'react';
import css from './Home.module.css';

export default function Home() {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>
          Phonebook welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
      <p className={css.text}>
        To use the application, you should be authorized
      </p>
      <p className={css.info}>
        Here you can place any useful information, such as promotions and
        special offers, social links, demo videos, or instructions
      </p>
    </>
  );
}
