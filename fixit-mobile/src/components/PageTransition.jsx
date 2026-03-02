import { useEffect, useRef } from "react";
import gsap from "gsap";

const PageTransition = ({ children }) => {
  const container = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      container.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  return <div ref={container}>{children}</div>;
};

export default PageTransition;