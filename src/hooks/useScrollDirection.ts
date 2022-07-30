import { useState, useEffect, useRef, useCallback } from "react";

const useScrollDirection = () => {
  const [down, setDown] = useState(false);
  const scrollRef = useRef(0);

  const onscroll: EventListenerOrEventListenerObject = useCallback(
    (e: Event) => {
      const target = e.target as Document;
      const scrollTop = target.scrollingElement?.scrollTop || 0;
      const scrollHeight = target.scrollingElement?.scrollHeight || 0;
      const clientHeight = target.scrollingElement?.clientHeight || 0;

      if (!scrollTop || scrollTop < 0) return;
      if (scrollHeight < scrollTop + clientHeight) return;

      const scrolledDown = scrollTop > scrollRef.current;
      const scrolledUp = scrollTop < scrollRef.current;
      if (scrolledDown && !down) {
        setDown(true);
      }
      if (scrolledUp && down) {
        setDown(false);
      }
      scrollRef.current = scrollTop;
    },
    [down]
  );

  useEffect(() => {
    document.addEventListener("scroll", onscroll);
    return () => document.removeEventListener("scroll", onscroll);
  }, [onscroll]);

  return { down, up: !down };
};

export default useScrollDirection;
