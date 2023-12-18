import * as dateFns from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import styles from './Post.module.scss';
import { Comment } from './Comment';

interface PostProps {
  author: {
    name: string;
    avatarUrl: string;
    role: string;
  }
  content: { type: string; content: string }[];
  key: number;
  publishedAt: Date;
}

export function Post({author, content, publishedAt, key}: PostProps) {
  const publishedDateFormatted = dateFns.format((publishedAt), "d 'de' LLLL 'às' HH:mm'h'", {
    // @ts-expect-error: Suppress TypeScript error
    locale: ptBR,
  });

  const publishedDateRelativeToNow = dateFns.formatDistanceToNow(publishedAt, {
    // @ts-expect-error: Suppress TypeScript error
    locale: ptBR,
    addSuffix: true
  })

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
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={key}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={key}><a href="#">{line.content}</a></p>
          }
        })}
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
