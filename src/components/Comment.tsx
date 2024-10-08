import React, { useState } from "react";
import styles from "./Comment.module.css";
import { Trash } from "@phosphor-icons/react";
import { ThumbsUp } from "@phosphor-icons/react/dist/ssr";
import { Avatar } from "./Avatar";


interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content  )
    }

    // function handleLikeComment(){
    //     // setLikeCount(likeCount + 1)
    //     setLikeCount((state) => {
    //         state + 1
    //     })
    // }
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>  
                            <time title="25 de setembro as 23:03" dateTime="2024-09-25">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={()=>{
                        setLikeCount(likeCount + 1)
                    }}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                    
                </footer>

            </div>
        </div>
    );
}