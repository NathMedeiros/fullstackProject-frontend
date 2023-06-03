import { useContext } from "react";
import { ContactContext } from "../providers/ContactsProvider";

export const useContact = () => {
  const contactContext = useContext(ContactContext);

  return contactContext;
};
