import styles from './Task.module.css'
import clipboard from '../assets/clipboard.png'

export function Task() {
    return (
        <article className={styles.tasks}>
            <div className={styles.infoTasks}>
                <p className={styles.createdTasks}>Tarefas criadas</p>
                <p className={styles.doneTasks}>Concluídas</p>
            </div>

            <div className={styles.emptyTasks}>
                <img className={styles.clipboardImg} src={clipboard} alt="Clipboard Empty" />

                <strong className={styles.emptyText}>Você ainda não tem tarefas cadastradas</strong>
                <p className={styles.emptyText}>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </article>
    )
}