import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatar_url: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type: 'link', content: '👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-09-01 21:00:00')
  },

  {
    id: 2,
    author: {
      avatar_url: 'https://github.com/maykbrito.png',
      name: 'mayk brito',
      role: 'CTO @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type: 'link', content: '👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-09-29 14:00:00')
  },
];




export function App() {
  return (
    <div>

      <Header />


      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}


