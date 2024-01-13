import { Button } from 'antd';
import React, { useContext } from 'react';
import { TodoContext } from '../TodoSearch';

const TodoButton = () => {
    const { addTask } = useContext(TodoContext);

    return (
        <>
            <Button type="primary" onClick={addTask}>
                Agregar Tarea
            </Button>
        </>
    );
}

export default TodoButton;