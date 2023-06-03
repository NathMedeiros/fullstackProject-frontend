import { ReactNode, createContext, useState } from "react";
import { api } from "../services/api";
import { iContacts } from "./AuthProvider";
import { toast } from "react-toastify";

interface iContactProviderProps {
  children: ReactNode;
}

interface iContactContextType {
  contactId: string | null;
  setContactId: (clientId: string | null) => void;
}

export interface iRegisterFormNewContactValues {
  name: string;
  email: string;
  phone: string;
}

interface iContactContextValues {
  deleteContact: (contactId: string) => Promise<void>;
  handleDeleteContact: (contactId: string | null) => void;
  contactId: iContactContextType | null;
  handleEditContact: () => Promise<void>;
  editingContact: iContacts | null;
  setEditingContact: React.Dispatch<React.SetStateAction<iContacts | null>>;
  contacts: iContacts[];
  modalIsOpen: boolean;
  modalEditIsOpen: boolean;
  openEditModal(): void;
  closeEditModal(): void;
  openModal(id: string): void;
  closeModal(): void;
  closeCreateModal: () => void;
  openCreateModal: () => void;
  modalCreateIsOpen: boolean;
  handleCreateContact: (data: iRegisterFormNewContactValues) => void;
}

export const ContactContext = createContext<iContactContextValues>(
  {} as iContactContextValues
);

export const ContactProvider = ({ children }: iContactProviderProps) => {
  const [contacts, setContacts] = useState<iContacts[]>([]);
  const [contactId, setContactId] = useState<iContactContextType | null>(null);
  const [editingContact, setEditingContact] = useState<iContacts | null>(null);

  const [modalIsOpen, setIsOpen] = useState(false);

  const [modalEditIsOpen, setModalIsOpen] = useState(false);

  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);

  function openEditModal() {
    setModalIsOpen(true);
  }

  function closeEditModal() {
    setModalIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openCreateModal() {
    setModalCreateIsOpen(true);
  }

  function closeCreateModal() {
    setModalCreateIsOpen(false);
  }

  const handleEditContact = async () => {
    try {
      if (!editingContact) {
        return;
      }

      const res = await api.patch(
        `/contact/${editingContact.id}`,
        editingContact
      );
      const updatedContact = res.data;

      setEditingContact(null);

      setContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact.id === updatedContact.id ? updatedContact : contact
        )
      );
      toast.success("Informações atualizadas com sucesso!");
    } catch (error) {
      toast.error("Erro! Tente novamente!");
    }
  };

  const deleteContact = async (contactId: string) => {
    try {
      await api.delete(`/contact/${contactId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "your-personal-schedule:token"
          )}`,
        },
      });

      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== contactId)
      );
      toast.info("Contato removido com sucesso!");
    } catch (error) {
      toast.error("Erro! Tente novamente!");
    }
  };

  const handleDeleteContact = async (contactId: string | null) => {
    if (contactId) {
      await deleteContact(contactId);
      setContactId(null);
    }
  };

  const handleCreateContact = async (data: iRegisterFormNewContactValues) => {
    try {
      const res = await api.post<iContacts>("/contact", data);
      const newContact = res.data;
      setContacts([...contacts, newContact]);
      toast.success("Contato cadastrado com sucesso!");
    } catch (error) {
      toast.error("Erro! Tente novamente!");
    }
  };

  return (
    <ContactContext.Provider
      value={{
        deleteContact,
        handleDeleteContact,
        contactId,
        handleEditContact,
        editingContact,
        setEditingContact,
        contacts,
        modalIsOpen,
        modalEditIsOpen,
        openEditModal,
        closeEditModal,
        openModal,
        closeModal,
        closeCreateModal,
        openCreateModal,
        modalCreateIsOpen,
        handleCreateContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
