import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  duration?: number;
  direction?: "left" | "right";
}

export default function Slide({
  children,
  duration = 0.4,
  direction = "right",
}: Props) {
  return (
    <motion.div
      initial={{ x: direction === "right" ? "100%" : "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: direction === "right" ? "-100%" : "100%", opacity: 0 }}
      transition={{ duration: duration ? duration : 0.4, ease: "easeOut" }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
