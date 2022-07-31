import React, { useState, useEffect, useCallback, useRef } from "react";
import { measureDomNode } from "utils/measureDomNode";

interface Proptypes {
  fold: boolean;
  children: React.ReactNode;
}

const CollapseCard = ({ children, fold }: Proptypes) => {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>();

  // Called when component renders, provides ref as parameter
  const refCallback = useCallback((element: HTMLDivElement) => {
    ref.current = element;
    getElementHeight();
  }, []);

  // Handle resize events
  useEffect(() => {
    window.addEventListener("resize", getElementHeight);
    return () => window.removeEventListener("resize", getElementHeight);
  }, []);

  function getElementHeight() {
    if (!ref || !ref.current) return;
    const setElementStyle = (e: HTMLElement) => {
      e.style.height = "auto";
      e.style.width = (ref.current?.clientWidth || 0) + "px";
      return e;
    };
    const { height } = measureDomNode(ref.current!, setElementStyle);
    setHeight(height);
  }

  return (
    <div
      ref={refCallback}
      style={{
        height: fold ? 0 : height,
        overflow: "hidden",
        transition: "all 400ms",
      }}
    >
      {children}
    </div>
  );
};

export default CollapseCard;
