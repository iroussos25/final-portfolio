"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import ContactModal from "../components/ContactModal";

type ContactModalContextType = {
  openModal: () => void;
};

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastLocation, setLastLocation] = useState("/");

  const openModal = () => {
    const currentLocation = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    setLastLocation(currentLocation || "/");
    setIsModalOpen(true);
  };

  return (
    <ContactModalContext.Provider value={{ openModal }}>
      {children}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} returnTo={lastLocation} />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (context === undefined) {
    throw new Error("useContactModal must be used within a ContactModalProvider");
  }
  return context;
}
