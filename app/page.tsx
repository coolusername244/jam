import Image from 'next/image';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>Womens</li>
            <li>Mens</li>
            <li>Support</li>
          </ul>
        </nav>
      </header>
      <main>
        <Link href={`/products`}>Product Page</Link>
      </main>
    </>
  );
};

export default Home;
