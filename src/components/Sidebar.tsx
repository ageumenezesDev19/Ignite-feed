import styles from './Sidebar.module.scss';
import { PencilLine } from 'phosphor-react';
import profileImg from '../assets/IMG_0013.jpeg';
import backgroundImg from '../assets/photo-1701979397766-bbd6fdd29743.avif';
import { Avatar } from './Avatar';

export function Sidebar() {
  return(
    <>
      <aside className={styles.sidebar}>
        <img
          className={styles.cover}
          src={backgroundImg}
        />
        <div className={styles.profile}>
          <Avatar img={profileImg} />
          <strong>Ageu Menezes</strong>
          <span>Web Developer</span>

          <footer>
            <a href="#">
              <PencilLine size={20} />
              Editar seu perfil
            </a>
          </footer>
        </div>
      </aside>
    </>
  )
}
