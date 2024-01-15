import React, { useContext } from 'react';
import { Button, Input, List, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import TodoButton from '../TodoButton';
import { EditModal } from '../EditModal';
import { contentContext } from '../assets/Context';
import '../assets/style/TodoSearch.css';

const TodoSearch = () => {
    // Extraer valores del contexto
    const {
        task,
        setTask,
        tasks,
        removeTask,
        showModal,
    } = useContext(contentContext);

    return (
        <div className="todo-container">
            <h1>Lista de Tareas</h1>
            {/* Input para agregar nuevas tareas */}
            <Input
                placeholder="Nueva tarea"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            {/* Lista de tareas con botones de editar y eliminar */}
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
            {/* Componente para editar tareas */}
            <EditModal />
            {/* Botón para agregar nuevas tareas */}
            <TodoButton />
        </div>
    );
};

export { TodoSearch };