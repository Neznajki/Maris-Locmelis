import { useState } from "react";

function Spoiler({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="spoiler">
      <div className="spoiler-title" onClick={() => setOpen(!open)}>
        <strong>{title}</strong> {open ? "▲" : "▼"}
      </div>
      {open && <div className="spoiler-content">{children}</div>}
    </div>
  );
}

export default Spoiler;