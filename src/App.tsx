import './global.scss'
import styles from './App.module.scss';
import { Header } from './components/Header'
import { Post } from './Post';
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
            content='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
          />
          <Post
            author='Lucas Ferreira'
            content='Lorem ipsum, adipisicing elit.'
          />
        </main>
      </div>
    </>
  )
}
