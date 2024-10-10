import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { useState, ChangeEvent, InvalidEvent } from "react";
import type { Post } from '../components/Post'
interface Author {
  name: string;
  role: string;
  avatar_url: string;
}
interface Content {
  type: 'paragraph' | 'linke';
  content: string;
}

interface PostType {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export interface PostProps {
  post: PostType
}

export function Post({ post }: PostProps) {

  const [comments, setComment] = useState([
    'Post muito bacana, hein?'
  ])

  const [newCommentText, setNewCommentText] = useState("")

  const publicshedDateFormatted = format(
    post.publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  
  }

  function handleNewCommentInvalid (event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  //funcao de deletar
  //imutabilidade -> as variáveis não sofrem mutação, nós criamos um novo valor  (
  // Um novo espaço na memória)
  function deleteComment(commentsToDelete: string){

    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentsToDelete;
    })

    setComment(commentsWithoutDeletedOne);

  }

  function handelCreateNewComment() {
    event.preventDefault()
    //imutabilidade

    setComment([...comments, newCommentText]);
    setNewCommentText("")

    console.log(comments)
  }

  const isNewCommentEmpty = newCommentText.length === 0;
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatar_url} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time
          title={publicshedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {`Publicado ${publishedDateRelativeToNow}`}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === "link") {
            return <p key={line.content}><a href="">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handelCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea name="comment"
         placeholder="Deixe um comentario" 
         value={newCommentText}
         onChange={handleNewCommentChange} 
         onInvalid={handleNewCommentInvalid}
         required

        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (<Comment
                  key={comment}
                  content={comment} 
                  onDeleteComment={deleteComment} 
                  />)
        })}
      </div>
    </article>
  );
}
