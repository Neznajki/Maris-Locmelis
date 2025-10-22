import { useState, useRef, useEffect } from "react";

function PopupSpoiler({ title, children }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="popup-spoiler" ref={ref}>
      <button className="popup-trigger" onClick={() => setOpen(!open)}>
        {title}
      </button>

      {open && (
        <div className="popup-content">
          {children}
        </div>
      )}
    </div>
  );
}

export default PopupSpoiler;