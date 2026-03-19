import CarImage from "../assets/car.svg";
import { motion } from "motion/react";

export default function Car() {
  return (
    <motion.div
      className="absolute -right-20 -bottom-2 pointer-events-none z-20"
      animate={{
        x: ["0vw", "-120vw", "-120vw", "120vw", "120vw"],
        scaleX: [-1, -1, 1, 1, -1],
      }}
      transition={{
        duration: 32,
        ease: "easeInOut",
        times: [0, 0.25, 0.35, 0.75, 1],
        repeat: Infinity,
      }}
    >
      <img src={CarImage} alt="Car" draggable={false} className="w-8 h-8" />
    </motion.div>
  );
}