import { useState, useRef, useEffect } from "react";
import "../styles/Popover.css";

export function Popover({ trigger, children }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

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
    <div className="popover-container" ref={ref}>
      <div onClick={() => setOpen(!open)}>{trigger}</div>
      {open && <div className="popover-box">{children}</div>}
    </div>
  );
}
