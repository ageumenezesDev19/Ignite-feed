import { Avatar } from './Avatar';
import styles from './Post.module.scss';
import { Comment } from './Comment';

interface PostProps {
  author: {
    name: string;
    avatarUrl: string;
    role: string;
  }
  content: object;
  key: number;
  publishedAt: object;
}

export function Post({author, content, publishedAt}: PostProps) {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar img={author.avatarUrl} hasBorder={true} />
          <div>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title='11 de maio as 08:13'
          dateTime={`${publishedAt}`}
        >
          Publicado à 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Reactjs, evento da Rocketseat.
          O nome do projeto é Move.it 🚀</p>
        <p>👉 <a href="#">ageu.dev/move.it</a></p>
        <p><a href="">#novoprojeto</a> <a href="">#nlw</a> <a href="">#rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
