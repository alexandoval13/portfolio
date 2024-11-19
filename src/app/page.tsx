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
        <br />
        {`And I think Sebastián is sweet, and kind, and smart, and so fucking incredible. But he can and will beat you up... for real.`}
      </h1>
    </div>
  );
}
