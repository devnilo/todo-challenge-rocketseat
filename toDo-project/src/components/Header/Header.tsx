import styles from './Header.module.css'
import plus from '../../assets/plus.png'

import toDoLogo from '../../assets/todo-logo.svg'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <img src={toDoLogo} alt="Logotipo ToDo" />

            <form className={styles.newTaskForm}>
                <input placeholder="Adicione uma nova tarefa" />
                <button>Criar <img src={plus} /></button>

            </form>
        </header>
    );
}