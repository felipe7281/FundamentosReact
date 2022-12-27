import { Post }from "./components/Post"
import { Header } from './components/Header'
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

const posts = [
  {
      id: 1,
      author: {
          avatarUrl: 'https://github.com/felipe7281.png',
          name: 'Felipe Ferreira',
          role: 'Web Developer'
      },
      content: [
          {type: 'paragraph', content: 'Politica de uso de aparelhos eletrônicos no CTMSP:'},
          {type: 'paragraph', content: 'O uso de notebooks é proibido nas instalações do CTMSP. Mas se quiser usar está liberado.'},
          {type: 'link', content: 'Hendrick Werneck - Comandante geral.'}
      ],
      pusblishedAt: new Date('2022-12-24 15:32'),
  },
  {
      id: 2,
      author: {
          avatarUrl: 'https://github.com/maykbrito.png',
          name: 'Mayk Brito',
          role: 'Educator'
      },
      content: [
          {type: 'paragraph', content: 'Politica de uso de aparelhos eletrônicos no CTMSP:'},
          {type: 'paragraph', content: 'O uso de notebooks é proibido nas instalações do CTMSP. Mas se quiser usar está liberado.'},
          {type: 'link', content: 'Hendrick Werneck - Comandante geral.'}
      ],
      pusblishedAt: new Date('2022-12-20 16:32'),
  },

]


export function App() {
  

  return (
    <div>
      
      <Header />
      <div className={styles.wrapper}>
       <Sidebar />
        <main>
        {posts.map(post => { 
          return (
          <Post
            key={post.id}
            author={post.author}
            content={post.content}
            pusblishedAt={post.pusblishedAt}
          />
          )
        })}
        </main>
    </div>
  </div>
)}