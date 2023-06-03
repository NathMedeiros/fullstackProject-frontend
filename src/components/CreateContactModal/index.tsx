import ReactModal from "react-modal";

import {
  Button,
  Container,
  DivHeader,
  ModalContent,
  ModalOverlay,
} from "./styled";
import { useContact } from "../../hooks/useContact";
import { useForm } from "react-hook-form";
import { iRegisterFormNewContactValues } from "../../providers/ContactsProvider";
import { useAuth } from "../../hooks/useAuth";

ReactModal.setAppElement("#root");

export const ModalCreateContact = () => {
  const { fetchClientData } = useAuth();
  const { modalCreateIsOpen, closeCreateModal, handleCreateContact } =
    useContact();
  const { handleSubmit, register } = useForm<iRegisterFormNewContactValues>();

  const createContact = (data: iRegisterFormNewContactValues) => {
    handleCreateContact(data);
    closeCreateModal();
    fetchClientData();
  };

  return (
    <Container>
      <ModalOverlay
        isOpen={modalCreateIsOpen}
        onRequestClose={closeCreateModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <ModalContent>
          <DivHeader>
            <h2>Criar novo contato</h2>
          </DivHeader>
          <form className="add-contact" onSubmit={handleSubmit(createContact)}>
            <input
              type="text"
              id="name"
              placeholder="Nome"
              {...register("name")}
              required
            />

            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email")}
              required
            />

            <input
              type="text"
              id="phone"
              placeholder="Telefone"
              {...register("phone")}
              required
            />
            <Button type="submit">Salvar</Button>
            <Button type="button" onClick={() => closeCreateModal()}>
              Cancelar
            </Button>
          </form>
        </ModalContent>
      </ModalOverlay>
    </Container>
  );
};
