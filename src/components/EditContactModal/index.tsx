import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useContact } from "../../hooks/useContact";
import ReactModal from "react-modal";

import {
  Button,
  Container,
  DivHeader,
  ModalContent,
  ModalOverlay,
} from "./styled";

ReactModal.setAppElement("#root");

export const ModalEdit = () => {
  const { client, fetchClientData } = useAuth();
  const {
    modalEditIsOpen,
    closeEditModal,
    editingContact,
    setEditingContact,
    handleEditContact,
  } = useContact();
  const { handleSubmit } = useForm();

  const editContact = () => {
    handleEditContact();
    closeEditModal();
    fetchClientData();
  };
  return (
    <Container>
      <ModalOverlay
        isOpen={modalEditIsOpen}
        onRequestClose={closeEditModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <ModalContent>
          <DivHeader>
            <h2>Editar Contato</h2>
          </DivHeader>
          {client.map((el) =>
            el.contacts.map(
              (elem) =>
                editingContact &&
                editingContact.id === elem.id && (
                  <form key={elem.id} onSubmit={handleSubmit(editContact)}>
                    <input
                      type="text"
                      value={editingContact.name}
                      onChange={(e) =>
                        setEditingContact({
                          ...editingContact,
                          name: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      value={editingContact.email}
                      onChange={(e) =>
                        setEditingContact({
                          ...editingContact,
                          email: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      value={editingContact.phone}
                      onChange={(e) =>
                        setEditingContact({
                          ...editingContact,
                          phone: e.target.value,
                        })
                      }
                    />
                    <Button type="submit">Salvar</Button>
                    <Button onClick={closeEditModal}>Cancelar</Button>
                  </form>
                )
            )
          )}
        </ModalContent>
      </ModalOverlay>
    </Container>
  );
};
