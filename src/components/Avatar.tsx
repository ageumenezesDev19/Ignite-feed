import styles from './Avatar.module.scss';

interface AvatarProps {
  img: string
}

export function Avatar(props: AvatarProps) {
  return <img className={styles.avatar} src={props.img} />
}
