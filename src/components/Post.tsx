import { Avatar } from './Avatar';
import profileImg from '../assets/IMG_0013.jpeg';
import styles from './Post.module.scss';

interface PostProps {
  author: string;
  content: string
}

export function Post(props: PostProps) {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar img={profileImg} />
          <div>
            <strong>Ageu Menezes</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time
          title='11 de maio as 08:13'
          dateTime="2022-05-11 08:13:30"
        >
          Publicado à 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.
          O nome do projeto é DoctorCare 🚀</p>
        <p>👉 jane.design/doctorcare</p>
        <p><a href="">#novoprojeto</a> <a href="">#nlw</a> <a href="">#rocketseat</a></p>
      </div>
    </article>
  )
}
