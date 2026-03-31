"use client"
import { motion } from "framer-motion"
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-green-100 flex flex-col gap-8 items-center justify-start">
      <h1 className="mt-20 text-emerald-950 font-medium text-3xl font-[silkscreen] typewriter">
        ShortLy
      </h1>
      <div
        className="flex flex-col items-center gap-6"
      >
        <motion.p initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }} className="text-emerald-700 font-extralight text-xl font-[silkscreen] text-center max-w-2xl">
          ShortLy makes long, messy links easy to handle by turning them into short, clean URLs you can share instantly. It is built for speed, so you can generate a link in seconds without dealing with unnecessary steps.
        </motion.p>

        <Link href="/shorten">
          <motion.button initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }} className="bg-emerald-800 text-white rounded-lg px-8 py-3 font-[silkscreen] cursor-pointer hover:bg-emerald-700 mt-2">
            Try Now
          </motion.button>
        </Link>
      </div>
    </div>
  );
}