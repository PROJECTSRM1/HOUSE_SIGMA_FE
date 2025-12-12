import { createContext, useContext, useState } from "react";
import AuthModals from "../components/AuthModals";

const AuthModalContext = createContext({
  openAuthModal: () => {},
  closeAuthModal: () => {},
});

export const AuthModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openAuthModal = () => setIsOpen(true);
  const closeAuthModal = () => setIsOpen(false);

  return (
    <AuthModalContext.Provider value={{ openAuthModal, closeAuthModal }}>
      {children}

      {/* GLOBAL AUTH MODAL (available on all pages) */}
      <AuthModals isOpen={isOpen} onClose={closeAuthModal} />
    </AuthModalContext.Provider>
  );
};

export const useAuthModal = () => useContext(AuthModalContext);
