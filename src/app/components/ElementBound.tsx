import React, { useEffect, useRef, useState } from "react";

interface ElementBoundProps {
  children: React.ReactElement<any>;
  onOutsideClick: (clickedOutside: boolean) => void;
}

const ElementBound: React.FC<ElementBoundProps> = ({
  children,
  onOutsideClick,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [clickedOutside, setClickedOutside] = useState<boolean>(false);

  useEffect(() => {
    // Function to check if the click is outside the wrapped element
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setClickedOutside(true);
        onOutsideClick(true);
      } else {
        setClickedOutside(false);
        onOutsideClick(false);
      }
    };

    // Adding event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Cleaning up the event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOutsideClick]);

  return <div ref={wrapperRef}>{children}</div>;
};

export default ElementBound;
