"use client";

import { useEffect } from "react";

interface EscapeKeyListenerProps {
  setOpenModal: (isOpen: boolean) => void;
}

export const EscapeKeyListener = (props: EscapeKeyListenerProps) => {
  const { setOpenModal } = props;

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenModal(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [setOpenModal]);

  return null;
};
