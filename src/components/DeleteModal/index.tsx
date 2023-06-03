import { useContact } from "../../hooks/useContact";
import ReactModal from "react-modal";
import { Button, DivHeader, ModalContent, ModalOverlay } from "./style";
import { useAuth } from "../../hooks/useAuth";

ReactModal.setAppElement("#root");

interface deleteModalProps {
  contact: string;
  name: string;
}

export const DeleteModal = ({ contact, name }: deleteModalProps) => {
  const { fetchClientData } = useAuth();
  const { modalIsOpen, closeModal, handleDeleteContact } = useContact();

  const handleDelete = () => {
    handleDeleteContact(contact);
    closeModal();
    fetchClientData();
  };

  return (
    <ModalOverlay
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <ModalContent>
        <DivHeader>
          <h2>Tem Certeza que deseja excluir {name} ?</h2>
          <div>
            <Button onClick={handleDelete}>Deletar</Button>
            <Button onClick={closeModal}>Cancelar</Button>
          </div>
        </DivHeader>
      </ModalContent>
    </ModalOverlay>
  );
};
