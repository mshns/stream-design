import { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './MainPage.module.scss';

import SCENES from 'scenes';

export const MainPage = () => {
  const [name, setName] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Submitted name: ' + name);
  };

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          {/* Используем управляемый компонент */}
          <input type='text' value={name} onChange={handleChange} />
        </label>
        <button type='submit'>Submit</button>
      </form>

      <ul>
        {SCENES.map((scene) => (
          <li>
            <Link to={scene.link}>{scene.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
