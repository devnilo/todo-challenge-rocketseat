import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import styles from './Header.module.css'
import plus from '../../assets/plus.png'

import toDoLogo from '../../assets/todo-logo.svg'

interface Props {
    onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
    const [title, setTitle] = useState("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        onAddTask(title);
        setTitle("");
    }

    function handleNewChangeTask(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        setTitle(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Este campo é obrigatório!')
    }

    return (
        <header className={styles.headerContainer} onSubmit={handleSubmit}>
            <img src={toDoLogo} alt="Logotipo ToDo" />

            <form className={styles.newTaskForm}>
                <input
                    placeholder="Adicione uma nova tarefa"
                    value={title}
                    onChange={handleNewChangeTask}
                    onInvalid={handleNewTaskInvalid}
                    required
                />
                <button><img src={plus} /></button>

            </form>
        </header>
    );
}