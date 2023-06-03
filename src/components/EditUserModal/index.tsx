import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import ReactModal from "react-modal";

import {
  Button,
  Container,
  DivHeader,
  ModalContent,
  ModalOverlay,
} from "./style";

ReactModal.setAppElement("#root");

export const ModalEditUser = () => {
  const {
    client,
    handleEditUser,
    editingClient,
    modalIsOpenUser,
    closeEditUserModal,
    setEditingClient,
  } = useAuth();

  const { handleSubmit, reset } = useForm();

  const editClient = () => {
    handleEditUser();
    closeEditUserModal();
    reset();
  };
  return (
    <Container>
      <ModalOverlay
        isOpen={modalIsOpenUser}
        onRequestClose={closeEditUserModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <ModalContent>
          <DivHeader>
            <h2>Editar Perfil</h2>
          </DivHeader>
          {client?.map(
            (el) =>
              editingClient &&
              editingClient.id === el.id && (
                <form key={el.id} onSubmit={handleSubmit(editClient)}>
                  <input
                    type="text"
                    value={editingClient.name}
                    onChange={(e) =>
                      setEditingClient({
                        ...editingClient,
                        name: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    value={editingClient.email}
                    onChange={(e) =>
                      setEditingClient({
                        ...editingClient,
                        email: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    value={editingClient.phone}
                    onChange={(e) =>
                      setEditingClient({
                        ...editingClient,
                        phone: e.target.value,
                      })
                    }
                  />
                  <Button type="submit">Salvar</Button>
                  <Button onClick={closeEditUserModal}>Cancelar</Button>
                </form>
              )
          )}
        </ModalContent>
      </ModalOverlay>
    </Container>
  );
};
