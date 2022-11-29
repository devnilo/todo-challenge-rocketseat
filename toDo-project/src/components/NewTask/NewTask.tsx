import { Trash } from 'phosphor-react';
import { TaskProps } from '../../App';

import styles from './NewTask.module.css';

interface Props {
    task: TaskProps;
}

export function NewTask({ task }: Props) {
    return (
        <div className={styles.task}>
            <button className={styles.checkTask}>
                <div />
            </button>

            <p>{task.title}</p>

            <button className={styles.deleteTask}>
                <Trash size={24} />
            </button>
        </div >
    )
}