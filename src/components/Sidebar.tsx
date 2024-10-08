import { PencilLine } from "@phosphor-icons/react";

import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";
export function Sidebar() {
  const url =
    "https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const avatarGitHub = "https://avatars.githubusercontent.com/u/42045058?v=4";

  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={url} alt="" />
      <div className={styles.profile}>
      <Avatar src={avatarGitHub}/>
        <strong>Jonathan Xavier</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
