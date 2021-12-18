import styles from './ClientComponent.module.css';

import {useEffect, useState} from 'react';

export default function ClientComponent() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter((counter) => counter + 1);
  useEffect(() => {
    performance.mark('ClientComponent Mounted');
  });
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        I'm a component, stop all the downloadin'
      </div>
      <div className={styles.buttonStuff}>
        <button onClick={incrementCounter}>Click to Increment Counter</button>
        <span>{counter}</span>
      </div>
    </div>
  );
}
