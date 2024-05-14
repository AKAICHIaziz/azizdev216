import styles from "./page.module.css";
import NavBar from "./components/navbar/Navbar";
import HomeComponent from "./components/home/Home";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";


export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.navbar}>
        <NavBar />
      </div>
      <div className={styles.pages}>
        <HomeComponent />
        <About />
        <Portfolio />
      </div>
    </div>
  );
}
