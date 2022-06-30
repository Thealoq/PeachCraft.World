import styles from '../components/Moduler/app.module.css';
import Home from '../components/Home/home';
import Navbar from '../components/Moduler/Navbar';
import Middle from '../components/Home/MiddleHome';
import HomeTwo from '../components/Home/HomeTwo';
export default function HomePage() {
  return (
    <div class={styles.App}>
      <div class={styles.bg}>
        <Navbar />
      </div>
      <div>
        <Home />
      </div>
      <HomeTwo />
      <Middle />
    </div>
  );
}
