import React, { useEffect, useRef, useState } from "react";

interface ElementBoundProps {
  children: React.ReactElement<any>;
  // outsideClick: boolean;
  onOutsideClick: (clickedOutside: boolean) => void;
  className?: string;
  extraRef?: React.RefObject<HTMLDivElement>;
}

const ElementBound: React.FC<ElementBoundProps> = ({
  children,
  // outsideClick,
  onOutsideClick,
  className = "",
  extraRef = null,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  // const [clickedOutside, setClickedOutside] = useState<boolean>(false);

  useEffect(() => {
    // Function to check if the click is outside the wrapped element
    const handleClickOutside = (event: MouseEvent) => {
      if (!extraRef) {
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(event.target as Node)
        ) {
          // setClickedOutside(true);
          onOutsideClick(false);
        }
        // else {
        // setClickedOutside(false);
        // onOutsideClick(true);
        // }
      } else {
        if (
          extraRef.current &&
          !extraRef.current.contains(event.target as Node)
        ) {
          // setClickedOutside(true);
          onOutsideClick(false);
        }
      }
    };

    // Adding event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Cleaning up the event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOutsideClick, extraRef]);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
};

export default ElementBound;
