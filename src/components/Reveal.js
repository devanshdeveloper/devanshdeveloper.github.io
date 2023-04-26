import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const Reveal = ({
  children,
  width = "fit-content",
  axis = "y",
  value = "100",
  ...props
}) => {
  const mainControls = useAnimation();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  useEffect(() => {
    mainControls.start(isInView ? "visible" : "hidden");
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={containerRef}
      {...props}
      variants={{
        hidden: { opacity: 0, [axis]: +value },
        visible: { opacity: 1, [axis]: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
};
