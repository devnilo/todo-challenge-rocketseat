import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import React from 'react'

import styles from './NewTask.module.css'


export function NewTask() {

    return (
        <form className={styles.TaskForm}>
            <strong>Liste uma tarefa</strong>

            <textarea
                name="task"
                placeholder="Liste uma tarefa"
                required
            />

            <button type="submit" >Adicionar</button>
        </form>
    )
}