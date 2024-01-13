import React, { createContext, useEffect, useState } from 'react';
import { Button, Input, List, Popconfirm } from 'antd';
import '../style/TodoSearch.css';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { EditModal } from '../EditModal';

const TodoContext = createContext();

const TodoSearch = ({ children }) => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editedTask, setEditedTask] = useState('');
    const [editedTaskIndex, setEditedTaskIndex] = useState(null);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    const addTask = () => {
        if (task.trim() !== '') {
            const newTasks = [...tasks, task]
            setTasks(newTasks);
            setTask('');
            localStorage.setItem('tasks', JSON.stringify(newTasks));
        }
    };

    const removeTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    const showModal = (index) => {
        setEditedTask(tasks[index]);
        setEditedTaskIndex(index);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setEditedTask('');
        setEditedTaskIndex(null);
        setIsModalVisible(false);
    };

    const confirmEditTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index] = editedTask;
        setTasks(newTasks);
        setEditedTask('');
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };



    return (
        <TodoContext.Provider value={
            {
                addTask,
                editedTask,
                setEditedTask,
                editedTaskIndex,
                confirmEditTask,
                isModalVisible,
                handleCancel
            }
        }
        >
            <div className="todo-container">
                <h1>Lista de Tareas</h1>
                <Input
                    placeholder="Nueva tarea"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />

                <List
                    dataSource={tasks}
                    renderItem={(item, index) => (
                        <List.Item
                            actions={[
                                <Button
                                    type='primary'
                                    icon={<EditOutlined />}
                                    onClick={() => showModal(index)}
                                />,
                                <Popconfirm title="Deseas eliminar esta lista?" onConfirm={() => removeTask(index)}>
                                    <Button
                                        type='primary'
                                        danger
                                        icon={<DeleteOutlined />}
                                    />
                                </Popconfirm>,
                            ]}
                        >
                            {item}
                        </List.Item>
                    )}
                />
                <EditModal />
            </div >
            {children}
        </TodoContext.Provider>
    );
};

export { TodoSearch, TodoContext };