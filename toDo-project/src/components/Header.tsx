import styles from "./Header.module.css"

import toDoLogo from '../assets/todo-logo.svg'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <img src={toDoLogo} alt="Logotipo ToDo" />
        </header>
    );
}