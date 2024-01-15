import { Button } from 'antd';
import React, { useContext } from 'react';
import { contentContext } from '../assets/Context';

const TodoButton = () => {
    // Extraer función para agregar tareas del contexto
    const { addTask } = useContext(contentContext);

    return (
        <>
            {/* Botón para agregar nuevas tareas */}
            <Button type="primary" onClick={addTask}>
                Agregar Tarea
            </Button>
        </>
    );
}

export default TodoButton;