import { useState, useEffect } from "react";

// ----------------------------------------------------------------------

export default function useOffSetTop(top) {
  const [offsetTop, setOffSetTop] = useState(false);
  const isTop = top || 100;
  useEffect(() => {
    const handle = () => {
      if (window.pageYOffset > isTop) {
        setOffSetTop(true);
      } else {
        setOffSetTop(false);
      }
      console.log("handle......")
    };
    window.addEventListener("scroll", handle);
    return () => {
      console.log("remove")
      window.removeEventListener("scroll", handle);
    };
  }, [isTop]);
  
  return offsetTop;
}

// Usage
// const offset = useOffSetTop(100);
