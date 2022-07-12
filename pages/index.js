import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.homepage}>

        <div className={styles.linkContainer}>

          <div className={styles.links}>
            <Link href='/armor'><a>Armors</a></Link>
            <Link href='/weapons'><a>Weapons</a></Link>
          </div>

          <div className={styles.links}>
            <Link href='/decorations'><a>Decorations</a></Link>
            <Link href='/skills'><a>Skills</a></Link>
          </div>

          <div className={styles.links}>
            <Link href='/materials'><a>Materials</a></Link>        
          </div>

          <div className={styles.links}>
            <Link href='/characterBuilder'>Charater Builder</Link>
            <Link href='/grindManager'>Grind Manager</Link>
          </div>

        </div>        

      </div>
    </Layout>
  );
}
