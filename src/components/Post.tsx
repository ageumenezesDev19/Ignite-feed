import * as dateFns from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import styles from './Post.module.scss';
import { Comment } from './Comment';
import { useState } from 'react';

interface PostProps {
  author: {
    name: string;
    avatarUrl: string;
    role: string;
  }
  content: { type: string; content: string }[];
  publishedAt: Date;
}

export function Post({author, content, publishedAt}: PostProps) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ])

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = dateFns.format((publishedAt), "d 'de' LLLL 'às' HH:mm'h'", {
    // @ts-expect-error: Suppress TypeScript error
    locale: ptBR,
  });

  const publishedDateRelativeToNow = dateFns.formatDistanceToNow(publishedAt, {
    // @ts-expect-error: Suppress TypeScript error
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (newCommentText.trim() !== '') {
      setComments([...comments, newCommentText]);
      setNewCommentText('');
    }
  }

  function handleNewCommentChange({target}: React.ChangeEvent<HTMLTextAreaElement>) {
    target.setCustomValidity('');
    setNewCommentText(target.value);
  }

  function handleNewCommentInvalid(event: React.ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Este campo é obrigatório!');
  }  

  function deleteComment(findComment: string) {
    const deleteTheComment = comments.filter(
      comment => comment !== findComment
      );

    setComments(deleteTheComment);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

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
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form
        onSubmit={handleCreateNewComment}
        className={styles.commentForm}
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          name='comment'
          value={newCommentText}
          placeholder='Deixe um comentário'
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Comentar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return(
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}
