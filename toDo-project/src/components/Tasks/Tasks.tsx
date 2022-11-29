import styles from './Tasks.module.css';

export function Tasks() {
    return (
        <section className={styles.tasks}>
            <header className={styles.tasksCheck}>
                <div>
                    <p className={styles.createdTasks}>Tarefas criadas</p>
                    <span>7</span>
                </div>

                <div>
                    <p className={styles.doneTasks}>Concluídas</p>
                    <span>4 de 7</span>
                </div>
            </header>

        </section>
    )
}