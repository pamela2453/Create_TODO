import React, { useContext } from 'react';
import { Input, Modal } from 'antd';
import { contentContext } from '../assets/Context';

const EditModal = () => {
    // Extraer valores del contexto
    const {
        editedTask,
        setEditedTask,
        editedTaskIndex,
        confirmEditTask,
        isModalVisible,
        handleCancel
    } = useContext(contentContext);

    return (
        <>
            {/* Modal para editar tareas */}
            <Modal
                title="Editar Tarea"
                open={isModalVisible}
                onOk={() => {
                    confirmEditTask(editedTaskIndex);
                    handleCancel();
                }}
                onCancel={handleCancel}
            >
                <Input
                    value={editedTask.text}
                    onChange={(e) => setEditedTask({ ...editedTask, text: e.target.value })}
                />
            </Modal>
        </>
    );
}

export { EditModal };