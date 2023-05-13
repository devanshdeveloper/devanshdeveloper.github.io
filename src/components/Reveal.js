import { useEffect, useRef, useState } from "react";

function Reveal({
  children,
  visible = "translate-x-0",
  hidden = "-translate-x-24",
  className,
  ...props
}) {
  const containerRef = useRef();
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        setIsOnScreen(entries[0].isIntersecting);
      },
      { threshold: 1 }
    );
    observer.observe(containerRef.current);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${className} ${
        isOnScreen ? "opacity-100 " + visible : "opacity-0 " + hidden
      }`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Reveal;
