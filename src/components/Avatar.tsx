import styles from './Avatar.module.scss';
import { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  img: string,
  hasBorder?: boolean
}

export function Avatar({hasBorder=true , img, ...props}: AvatarProps) {
  return(
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={img}
      {...props}
    />
  )
}
