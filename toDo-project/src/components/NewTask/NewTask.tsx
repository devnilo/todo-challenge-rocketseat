import { Trash } from 'phosphor-react';
import { TaskProps } from '../../App';

import checkBox from '../../assets/check.png'

import styles from './NewTask.module.css';

interface Props {
    task: TaskProps;
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function NewTask({ task, onDelete, onComplete }: Props) {

    return (
        <div className={styles.task}>
            <button
                className={styles.checkTask}
                onClick={() => onComplete(task.id)}> {task.isCompleted ? <img src={checkBox} /> : <div />}
            </button>

            <p>{task.title}</p>

            <button className={styles.deleteTask} onClick={() => onDelete(task.id)}>
                <Trash size={24} />
            </button>
        </div >
    )
}