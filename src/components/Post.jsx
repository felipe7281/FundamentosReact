import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/maykbrito.png" />

                    <div className={styles.authorInfo}>
                        <strong>Felipe Ferreira</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="24 de dezembro às 08:38"dateTime='2022-12-24 08:38'>Publicado há 1h</time>
            </header>
            <div className={styles.content}>
               <p>Politica de uso de aparelhos eletrônicos no CTMSP:</p>

                <p>O uso de notebooks é proibido nas instalações do CTMSP. Mas se quiser usar está liberado.</p>

                <p><a href='#'>Hendrick Werneck - Comandante geral.</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe um comentário</strong>
                <textarea placeholder='Deixe seu comentário'></textarea>
                
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>


        </article>
    )
}