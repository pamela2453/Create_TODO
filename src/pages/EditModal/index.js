import React, { useContext } from 'react';
import { Input, Modal, Popconfirm } from 'antd';
import { TodoContext } from '../TodoSearch';

const EditModal = () => {
    const {
        editedTask,
        setEditedTask,
        editedTaskIndex,
        confirmEditTask,
        isModalVisible,
        handleCancel
    } = useContext(TodoContext);

    return (
        <>
            <Modal
                title="Editar Tarea"
                visible={isModalVisible}
                onOk={() => {
                    confirmEditTask(editedTaskIndex);
                    handleCancel();
                }}
                onCancel={handleCancel}
            >
                <Input
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                />
            </Modal>
        </>
    );
}

export { EditModal };