import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { RegisterData } from "../pages/Register/validator";
import { LoginData } from "../pages/Login/validator";
import { toast } from "react-toastify";

interface iAuthProviderProps {
  children: ReactNode;
}

interface iAuthContextType {
  id: string;
  clientId: string | null;
  setClientId: (clientId: string | null) => void;
}

interface iAuthContextValues {
  singIn: (data: LoginData) => void;
  loading: boolean;
  formRegister: (signUp: RegisterData) => void;
  clientId: iAuthContextType | null;
  client: iClient[];
  handleLogout: () => void;
  handleEditUser: () => Promise<void>;
  handleDeleteClient: (clientId: string) => Promise<void>;
  openEditUserModal: () => void;
  closeEditUserModal: () => void;
  modalIsOpenUser: boolean;
  editingClient: iClient | null;
  setEditingClient: React.Dispatch<React.SetStateAction<iClient | null>>;
  openDeleteUserModal: (userId: string) => void;
  closeDeleteUserModal: () => void;
  modalIsDeleteUser: boolean;
  fetchClientData: () => Promise<void>;
}

export interface iClient {
  id: string;
  name: string;
  email: string;
  phone: string;
  contacts: iContacts[];
}
export interface iContacts {
  user: string;
  id: string;
  name: string;
  email: string;
  phone: string;
}

export const AuthContext = createContext<iAuthContextValues>(
  {} as iAuthContextValues
);

export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const navigate = useNavigate();
  const [clientId, setClientId] = useState<iAuthContextType | null>(null);
  const [loading, setLoading] = useState(true);
  const [client, setClient] = useState<iClient[]>([]);
  const [editingClient, setEditingClient] = useState<iClient | null>(null);

  const [modalIsOpenUser, setIsOpenUser] = useState(false);

  const [modalIsDeleteUser, setIsDeleteUser] = useState(false);

  function openDeleteUserModal() {
    setIsDeleteUser(true);
  }

  function closeDeleteUserModal() {
    setIsDeleteUser(false);
  }

  function openEditUserModal() {
    setIsOpenUser(true);
  }

  function closeEditUserModal() {
    setIsOpenUser(false);
  }

  useEffect(() => {
    const token = localStorage.getItem("your-personal-schedule:token");

    if (!token) {
      setLoading(false);
      return;
    }

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  const fetchClientData = async () => {
    const id = localStorage.getItem("IDClient:ID");

    if (id) {
      try {
        const res = await api.get<iClient>(`/users/${id}`);
        setClient([res.data]);

        console.log(res.data);
      } catch (error) {
        console.log("Error getting customer data:", error);
      }
    }
  };

  useEffect(() => {
    fetchClientData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("your-personal-schedule:token");
    localStorage.removeItem("IDClient:ID");
  };

  const singIn = async (data: LoginData) => {
    try {
      const res = await api.post("/login", data);
      const { token } = res.data;

      const tokenParts = token.split(".");
      const tokenBody = JSON.parse(atob(tokenParts[1]));

      const id = tokenBody.id;

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("your-personal-schedule:token", token);
      localStorage.setItem("IDClient:ID", id);

      setClientId({ id } as unknown as iAuthContextType);

      toast.success("Login realizado com sucesso!");

      navigate("/dashboard");
      fetchClientData();
    } catch (error) {
      toast.error("Erro! Tente novamente!");
    }
  };

  const formRegister = async (formData: RegisterData) => {
    try {
      setLoading(true);
      const res = await api.post("/users", formData);
      console.log(res);

      toast.success("Usuario Cadastrado");

      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Erro! Tente novamente!");
    }
  };

  const handleEditUser = async () => {
    try {
      if (!editingClient) {
        return;
      }

      const res = await api.patch(`/users/${editingClient.id}`, editingClient);
      const updatedClient = res.data;

      setEditingClient(null);

      setClient((prevClient) =>
        prevClient.map((client) =>
          client.id === updatedClient.id ? updatedClient : client
        )
      );

      toast.success("Informações atualizadas com sucesso!");
    } catch (error) {
      toast.success("Erro! Tente novamente!");
    }
  };

  const deleteToken = () => {
    localStorage.removeItem("your-personal-schedule:token");
  };

  const redirectToLogin = () => {
    navigate("/");
  };

  const handleDeleteClient = async (clientId: string) => {
    try {
      await api.delete(`/users/${clientId}`);
      setClient((prevClient) => prevClient.filter((c) => c.id !== clientId));
      toast.success("Conta deletada com sucesso!");
      deleteToken();
      redirectToLogin();
    } catch (error) {
      toast.error("Erro! Tente novamente!");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        singIn,
        loading,
        formRegister,
        clientId,
        client,
        handleLogout,
        handleEditUser,
        handleDeleteClient,
        openEditUserModal,
        closeEditUserModal,
        modalIsOpenUser,
        editingClient,
        setEditingClient,
        openDeleteUserModal,
        closeDeleteUserModal,
        modalIsDeleteUser,
        fetchClientData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
