import { ThumbsUp, Trash } from "phosphor-react";
import profileImg from "../assets/IMG_0013.jpeg";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.scss";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar img={profileImg} />

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

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
