"use client";

import { useEffect, useRef } from "react";

import { useFocusTrap, EscapeKeyListener } from "@/shared/hooks";
import { CloseIcon } from "../icons/close-Icon";

interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  children: React.ReactNode;
}

export const Modal = (props: ModalProps) => {
  const { isModalOpen, setIsModalOpen, children } = props;

  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const { setRef } = useFocusTrap();

  useEffect(() => {
    if (isModalOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;

      document.body.style.overflow = "hidden";

      setRef(modalRef as React.RefObject<HTMLElement>);
    } else {
      document.body.style.overflow = "unset";

      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen, setRef]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <>
      <EscapeKeyListener setOpenModal={setIsModalOpen} />
      <div
        className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black/50 px-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        onClick={handleBackdropClick}
      >
        <div
          ref={modalRef}
          className="z-20 flex w-full max-w-2xl flex-col rounded-lg bg-background border border-border/80 p-6 shadow-xl"
          tabIndex={-1}
        >
          <button
            onClick={handleClose}
            aria-label="Fechar modal"
            className="cursor-pointer self-end"
          >
            <CloseIcon className="text-foreground w-5 h-5" />
          </button>

          <div className="flex-1 flex flex-col gap-6">{children}</div>
        </div>
      </div>
    </>
  );
};
