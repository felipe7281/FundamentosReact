import { Post }from "./components/Post"
import { Header } from './components/Header'
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'



export function App() {
  

  return (
    <div>
      
      <Header />
      <div className={styles.wrapper}>
       <Sidebar />
        <main>
        <Post author="Felipe Ferreira" content="No samba ela me diz que rala" />
       

        <Post author="Marcos Maçaneta" content="No samba ela me diz que não rala" />
        </main>
    </div>
  </div>
)}