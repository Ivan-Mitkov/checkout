import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
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
  const theme = useTypedSelector((state) => state.ui.theme);

  const [isClosing, setIsClosing] = useState(false);

  const modalRef = useRef<HTMLInputElement>(null);
  const modalContentRef = useRef<HTMLInputElement>(null);

  const onEscapePress = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      handleModalClose();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", onEscapePress, false);
    const body = document.querySelector("body");
    body?.classList.add(styles.hideScroll);

    return () => {
      document.removeEventListener("keydown", onEscapePress, false);
      body?.classList.remove(styles.hideScroll);
    };
  }, []);

  const handleModalClose = () => {
    setTimeout(() => handleClose(), 300);
    setIsClosing(true);
  };

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
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [modalRef]);

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
