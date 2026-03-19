import PlaneImage from "../assets/aeronave (1).png";
import { motion } from "motion/react";

export default function Plane() {
  return (
    <motion.div
      className="absolute -right-20 top-30 pointer-events-none z-20"
      animate={{
        x: ["0vw", "-120vw", "-120vw", "120vw", "120vw"], // vai, pausa, volta, pausa
        scaleX: [-1, -1, 1, 1, -1], // invertido no início; vira na volta
        // na volta ele sobe do top-30 pra top-40 (translateY +10px)
        y: [0, 0, 10, 10, 0],
      }}
      transition={{
        duration: 32, // total da animação
        ease: "easeInOut",
        times: [0, 0.25, 0.35, 0.75, 1], // define quando cada ponto acontece
        repeat: Infinity,
      }}
    >
      <img
        src={PlaneImage}
        alt="Plane"
        draggable={false}
        className="w-8 h-8"
      />
    </motion.div>
  );
}