import { TaskProps } from '../../App';
import { NewTask } from '../NewTask/NewTask';

import styles from './Tasks.module.css';

interface Props {
    tasks: TaskProps[];
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
    const tasksQuantity = tasks.length;

    const completedTasks = tasks.filter(task => task.isCompleted).length;

    return (
        <section className={styles.tasks}>
            <header className={styles.tasksCheck}>
                <div>
                    <p className={styles.createdTasks}>Tarefas criadas</p>
                    <span>{tasksQuantity}</span>
                </div>

                <div>
                    <p className={styles.doneTasks}>Concluídas</p>
                    <span>{completedTasks} de {tasksQuantity}</span>
                </div>
            </header>

            <div className={styles.taskList}>
                {tasks.map((task) => (
                    <NewTask
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onComplete={onComplete} />
                ))}
            </div>

        </section>
    )
}