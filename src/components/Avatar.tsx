import styles from './Avatar.module.scss';

interface AvatarProps {
  img: string,
  hasBorder: boolean
}

export function Avatar({hasBorder=true , img}: AvatarProps) {
  return(
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={img}
    />
  )
}
