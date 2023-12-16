import './global.scss'
import styles from './App.module.scss';
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/89534178?v=4',
      name: 'Ageu Menezes',
      role: 'Front-end Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Reactjs, evento da Rocketseat.'},
      {type: 'paragraph', content: 'O nome do projeto é Move.it 🚀'},
      {type: 'link', content: '👉 ageu.dev/move.it'},
    ],
    publishedAt: new Date('2023-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1700908609277-6b60a6c8b903?q=80&w=3261&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Mayk',
      role: 'Educator'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Reactjs, evento da Rocketseat.'},
      {type: 'paragraph', content: 'O nome do projeto é Move.it 🚀'},
      {type: 'link', content: '👉 ageu.dev/move.it'},
    ],
    publishedAt: new Date('2023-05-10 20:00:00')
  }
];

export  function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                key={post.id}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
