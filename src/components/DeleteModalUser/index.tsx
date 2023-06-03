import ReactModal from "react-modal";
import { Button, DivHeader, ModalContent, ModalOverlay } from "./style";
import { useAuth } from "../../hooks/useAuth";

ReactModal.setAppElement("#root");

interface deleteModalProps {
  userId: string;
}

export const DeleteUser = ({ userId }: deleteModalProps) => {
  const { modalIsDeleteUser, closeDeleteUserModal, handleDeleteClient } =
    useAuth();

  const handleDelete = () => {
    handleDeleteClient(userId);

    closeDeleteUserModal();
  };

  return (
    <ModalOverlay
      isOpen={modalIsDeleteUser}
      onRequestClose={closeDeleteUserModal}
      contentLabel="Example Modal"
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <ModalContent>
        <DivHeader>
          <h2>Tem Certeza que deseja excluir sua conta ?</h2>
          <div>
            <Button onClick={handleDelete}>Deletar</Button>
            <Button onClick={closeDeleteUserModal}>Cancelar</Button>
          </div>
        </DivHeader>
      </ModalContent>
    </ModalOverlay>
  );
};
