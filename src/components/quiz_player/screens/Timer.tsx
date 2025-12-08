//Vytvořeno pomocí AI

import { motion } from "framer-motion";

interface Props {
  timeLeft: number;
  timePercentage: number;
  timeColor: "green" | "orange" | "red";
}

export default function Timer({ timeLeft, timePercentage, timeColor }: Props) {
  return (
    <motion.div
      className="mt-6 flex justify-center"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3, ease: "backOut" }}
    >
      <div className="relative">
        {/* Animated circular progress ring */}
        <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="8"
          />
          {/* Animated progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke={
              timeColor === "green"
                ? "#4ade80"
                : timeColor === "orange"
                ? "#fb923c"
                : "#f87171"
            }
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={251.2}
            strokeDashoffset={251.2 * (1 - timePercentage / 100)}
            className="transition-all duration-1000"
            initial={{ strokeDashoffset: 0 }}
            animate={{
              strokeDashoffset: 251.2 * (1 - timePercentage / 100),
            }}
          />
        </svg>
        {/* Timer number in center */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={timeLeft <= 5 && timeLeft > 0 ? { scale: [1, 1.2, 1] } : {}}
          transition={{
            duration: 0.5,
            repeat: timeLeft <= 5 ? Infinity : 0,
          }}
        >
          <span
            className={`text-3xl font-bold ${
              timeColor === "green"
                ? "text-green-400"
                : timeColor === "orange"
                ? "text-orange-400"
                : "text-red-400"
            }`}
          >
            {timeLeft}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
