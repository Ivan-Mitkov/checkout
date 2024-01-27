import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import useBackendCall from "../../hooks/useBackendCall";
import { doGetCitiesRequest } from "../../state/locations";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { isLightTheme } from "../../utils/uiUtils";
import { KeyboardEvent } from "../../types/";
import styles from "./SideModal.module.scss";

interface SideModalProps {
  handleClose: () => void;
  children: ReactNode;
}

const SideModal: React.ElementType<SideModalProps> = ({
  handleClose,
  children,
}) => {
  useBackendCall([doGetCitiesRequest]);

  const theme = useTypedSelector((state) => state.ui.theme);

  const [isClosing, setIsClosing] = useState(false);

  const modalRef = useRef<HTMLInputElement>(null);
  const modalContentRef = useRef<HTMLInputElement>(null);

  const handleModalClose = useCallback(() => {
    setTimeout(() => handleClose(), 300);
    setIsClosing(true);
  }, [handleClose]);

  const onEscapePress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleModalClose();
      }
    },
    [handleModalClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", onEscapePress, { passive: true });
    const body = document.querySelector("body");
    body?.classList.add(styles.hideScroll);

    return () => {
      document.removeEventListener("keydown", onEscapePress);
      body?.classList.remove(styles.hideScroll);
    };
  }, [onEscapePress]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current?.contains(event.target as Node)
      ) {
        return;
      }
      if (
        modalContentRef.current &&
        modalRef.current &&
        !modalContentRef.current?.contains(event.target as Node)
      ) {
        handleModalClose();
      }
    }
    document.addEventListener("click", handleClickOutside, { passive: true });

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [modalRef, handleModalClose]);

  const themeClassName: string = isLightTheme(theme)
    ? styles.lightTheme
    : styles.darkTheme;

  return (
    <div ref={modalRef} className={styles.container} onClick={(e) => {}}>
      <div
        className={[styles.overlay, isClosing ? styles.hide : ""].join(" ")}
      />
      <div
        ref={modalContentRef}
        className={[
          styles.contentContainer,
          themeClassName,
          isClosing ? styles.close : "",
        ].join(" ")}
      >
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default SideModal;
