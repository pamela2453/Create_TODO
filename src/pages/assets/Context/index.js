import React, { createContext, useEffect, useState } from 'react';

const contentContext = createContext("");
const ContextProvider = ({ children }) => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editedTask, setEditedTask] = useState('');
    const [editedTaskIndex, setEditedTaskIndex] = useState(null);

    // Cargar tareas desde el almacenamiento local al iniciar la aplicación
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    // Función para agregar una nueva tarea
    const addTask = () => {
        if (task.trim() !== '') {
            const newTasks = [...tasks, { text: task }]; // Asegúrate de que estás agregando un objeto con la propiedad text
            setTasks(newTasks);
            setTask('');
            localStorage.setItem('tasks', JSON.stringify(newTasks));
        }
    };

    // Función para eliminar una tarea
    const removeTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    // Mostrar el modal para editar una tarea
    const showModal = (index) => {
        setEditedTask(tasks[index]);
        setEditedTaskIndex(index);
        setIsModalVisible(true);
    };

    // Cerrar el modal de edición
    const handleCancel = () => {
        setEditedTask('');
        setEditedTaskIndex(null);
        setIsModalVisible(false);
    };

    // Confirmar la edición de una tarea
    const confirmEditTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index] = editedTask;
        setTasks(newTasks);
        setEditedTask('');
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    // Valores del contexto
    const values = {
        task,
        setTask,
        tasks,
        removeTask,
        showModal,
        editedTask,
        setEditedTask,
        editedTaskIndex,
        confirmEditTask,
        isModalVisible,
        handleCancel,
        addTask
    }

    return (
        <contentContext.Provider value={values}>
            {children}
        </contentContext.Provider>
    );
}

export { ContextProvider, contentContext };