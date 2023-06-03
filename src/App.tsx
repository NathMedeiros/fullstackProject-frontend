import { AuthProvider } from "./providers/AuthProvider";
import { ContactProvider } from "./providers/ContactsProvider";
import { RoutesMain } from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <ContactProvider>
          <RoutesMain />
        </ContactProvider>
      </AuthProvider>
    </>
  );
};
