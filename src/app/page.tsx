// import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <title>Alexandra Sandoval | Full-Stack Software Engineer</title>
      <h1>
        {`Hi, my name is Alexandra Sandoval.`}
        <br />
        {`I'm a Full-Stack Software Engineer.`}
      </h1>
    </div>
  );
}
