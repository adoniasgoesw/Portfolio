import HeroPlaneImage from "../../assets/hero-plane.png";
import { motion } from "motion/react";

export default function HeroPlane() {
  return (
    <motion.div
      className="absolute -right-20 top-30 pointer-events-none z-20"
      animate={{
        x: ["0vw", "-120vw", "-120vw", "120vw", "120vw"],
        scaleX: [-1, -1, 1, 1, -1],
        y: [0, 0, 10, 10, 0],
      }}
      transition={{
        duration: 32,
        ease: "easeInOut",
        times: [0, 0.25, 0.35, 0.75, 1],
        repeat: Infinity,
      }}
    >
      <img
        src={HeroPlaneImage}
        alt=""
        draggable={false}
        className="w-8 h-8"
      />
    </motion.div>
  );
}
