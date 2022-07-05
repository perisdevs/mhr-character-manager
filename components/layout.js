import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {

    return (
        <div className={styles.container}>
            <Head>
                <link rel='icon' href='favicon.ico' />
                <title>MHR Wiki</title>
            </Head>
            <header className={styles.header}>
                <Link href='/'>
                    <a><h2>MHRise Wiki</h2></a>
                </Link>                
            </header>
            <main>
                {children}
            </main>
            <footer className={styles.footer}>
                Footer..
            </footer>
        </div>
    );
}