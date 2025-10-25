import { useState, useRef, useEffect, type ReactNode, type MouseEvent as ReactMouseEvent } from "react";

interface PopupSpoilerProps {
  title: ReactNode;
  children: ReactNode;
}

const PopupSpoiler: React.FC<PopupSpoilerProps> = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Close popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOpen = (e: ReactMouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  };

  return (
    <div className="popup-spoiler" ref={ref}>
      <button className="popup-trigger" onClick={toggleOpen}>
        {title}
      </button>

      {open && (
        <div className="popup-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default PopupSpoiler;