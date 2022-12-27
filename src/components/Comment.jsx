import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({content,onDeleteComment}){

    const[likeCount,setLikeCount] = useState(0)

    function handleDeleteComment(){
        
        onDeleteComment(content)

    }
    function handleLikeComment(){
        setLikeCount((prevState) => {
            return prevState + 1
        })
    }
    return(
        
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/maykbrito.png' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Felipe Ferreira</strong>
                            <time title="24 de dezembro às 10:15"dateTime='2022-12-24 10:15:21'>Há cerca de 1h</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
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
    )
}