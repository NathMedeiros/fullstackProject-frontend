import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useContact } from "../../hooks/useContact";
import { ModalEdit } from "../../components/EditContactModal";
import { DeleteModal } from "../../components/DeleteModal";
import { ModalCreateContact } from "../../components/CreateContactModal";
import { ModalEditUser } from "../../components/EditUserModal";
import { useState } from "react";
import { DownloadButton } from "../../components/PdfReport";
import { DeleteUser } from "../../components/DeleteModalUser";
import {
  Bt,
  BtDelete,
  BtExit,
  DivButtons,
  DivContainer,
  DivContato,
  DivHeaderContact,
  DivImg,
  ImgAdd,
  Main,
  UlContact,
  UlUser,
} from "./style";
import avatar1 from "../../assets/avatar 1.png";
import add from "../../assets/add.png";
import excluir from "../../assets/excluir.png";
import editar from "../../assets/editar.png";
import excluir1 from "../../assets/excluir1.png";
import exit from "../../assets/sair.png";
import { motion } from "framer-motion";

export const Dashboard = () => {
  const {
    client,
    handleLogout,
    setEditingClient,
    modalIsOpenUser,
    openEditUserModal,
    openDeleteUserModal,
    modalIsDeleteUser,
  } = useAuth();
  const {
    openEditModal,
    modalEditIsOpen,
    modalIsOpen,
    modalCreateIsOpen,
    setEditingContact,
    openModal,
    openCreateModal,
  } = useContact();
  const navigate = useNavigate();

  const Exit = () => {
    handleLogout();
    navigate("/");
  };

  const [contactId, setContactId] = useState("");
  const [contactName, setContactName] = useState("");
  const [userId, setUserId] = useState("");
  console.log(client);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <DivContainer>
        <Main>
          <BtExit onClick={Exit}>
            <img src={exit} alt="sair" />
          </BtExit>
          <DivImg>
            <img src={avatar1}></img>
          </DivImg>
          {client !== null &&
            client.map((elem) => (
              <UlUser key={elem.id}>
                <li>
                  <p>Nome: {elem.name}</p>
                  <p>Te.: {elem.phone}</p>
                  <p>E-mail: {elem.email}</p>
                  <DivButtons>
                    <BtDelete
                      onClick={() => {
                        openDeleteUserModal(elem.id);
                        setUserId(elem.id);
                      }}
                    >
                      <img src={excluir1} alt="excluir" />
                    </BtDelete>
                    {modalIsDeleteUser && <DeleteUser userId={userId} />}
                    <Bt
                      onClick={() => {
                        setEditingClient(elem);
                        openEditUserModal();
                      }}
                    >
                      <img src={editar} alt="excluir" />
                    </Bt>
                  </DivButtons>
                </li>
              </UlUser>
            ))}
        </Main>

        <DivContato>
          <DivHeaderContact>
            <button onClick={() => openCreateModal()}>
              <ImgAdd src={add} alt="Novo Contato"></ImgAdd>
            </button>
            <DownloadButton />
          </DivHeaderContact>
          <h2>Contatos :</h2>
          {client !== null &&
            client.map((elem) => (
              <UlContact key={elem.id}>
                {elem.contacts.map((el) => (
                  <li key={el.id}>
                    <div>
                      <p>Name: {el.name}</p>
                      <p>Phone: {el.phone}</p>
                      <p>E-mail: {el.email}</p>
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          openModal(el.id),
                            setContactId(el.id),
                            setContactName(el.name);
                        }}
                      >
                        <img src={excluir} alt="excluir" />
                      </button>
                      {modalIsOpen && (
                        <DeleteModal name={contactName} contact={contactId} />
                      )}

                      <button
                        onClick={() => {
                          setEditingContact(el);
                          openEditModal();
                        }}
                      >
                        <img src={editar} alt="editar" />
                      </button>
                    </div>
                  </li>
                ))}
              </UlContact>
            ))}
        </DivContato>

        {modalEditIsOpen && <ModalEdit />}
        {modalCreateIsOpen && <ModalCreateContact />}
        {modalIsOpenUser && <ModalEditUser />}
      </DivContainer>
    </motion.div>
  );
};
