interface PostProps {
  author: string;
  content: string
}

export function Post(props: PostProps) {
  return(
    <div>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </div>
  )
}