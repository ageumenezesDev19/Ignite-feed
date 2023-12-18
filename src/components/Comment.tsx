import { ThumbsUp, Trash } from "phosphor-react";
import profileImg from "../assets/IMG_0013.jpeg";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.scss";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (arg0: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
  const [likeCount, setLinkCount] = useState(0);

  function handleDeleteComment() {

    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLinkCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar img={profileImg} hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div>
              <strong>Ageu Menezes</strong>
              <time
                title="11 de maio as 08:13"
                dateTime="2022-05-11 08:13:30"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
