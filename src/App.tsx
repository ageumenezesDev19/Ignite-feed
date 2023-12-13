import './global.scss'
import styles from './App.module.scss';
import { Header } from './components/Header'
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

export  function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Ageu Menezes'
            job='Web Developer'
          />
          <Post
            author='Lucas Ferreira'
            job='Mobile Developer'
          />
        </main>
      </div>
    </>
  )
}
