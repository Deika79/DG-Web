"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/34628247900"
      target="_blank"
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 2.5,
      }}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110 hover:bg-green-600"
    >
      <MessageCircle size={32} />
    </motion.a>
  );
}