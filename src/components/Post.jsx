import { useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

import moment from 'moment'


export function Post({author, publishedAt, content}){

    const [comments, setComments] = useState([])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }).format(publishedAt)
    const publishedDateFormattedToNow = moment().startOf(publishedDateFormatted).fromNow()

    function handleCreateNewComment() {

        event.preventDefault();
     
       setComments([...comments, newCommentText]);
       setNewCommentText('');
      
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('')
            setNewCommentText(event.target.value);
            
        }
        
    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Campo obrigatório.')
    }

    function deleteComment(commentToDelete){

        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(commentsWithoutDeletedOne)
        
    }

    const isNewCommentEmpty = newCommentText.length === 0
 

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime="2022-12-20 08:56:22" >
                    {publishedDateFormattedToNow}
                </time>
            </header>
            <div className={styles.content}>
               {content.map(line => {
                if (line.type === 'paragraph') {
                    return <p key={line.content}>{line.content}</p>
               }
               else if(line.type === 'link'){
                return <p key={line.content}><a href='#'>{line.content}</a></p>
               }})}

            </div>

            <form 
                onSubmit={handleCreateNewComment} 
                className={styles.commentForm}>
                <strong>Deixe um comentário</strong>
                <textarea 
                    name='comment' 
                    value={newCommentText} 
                    onChange={handleNewCommentChange}
                    placeholder='Deixe seu comentário' 
                    onInvalid={handleNewCommentInvalid} 
                    required
                    >

                </textarea>
                
                <footer>
                    <button 
                        type='submit' 
                        disabled={isNewCommentEmpty}
                        >
                            Publicar
                    </button>
                </footer>
            </form>
            <div className={styles.commentList}>
             {comments.map(comment => {
                return (
                    <Comment 
                        key={comment}  
                        content={comment} 
                        onDeleteComment={deleteComment} 
                    />
                )
             })}
            </div>


        </article>
    )
}