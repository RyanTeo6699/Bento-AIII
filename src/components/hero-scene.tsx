"use client";

import { motion } from "framer-motion";

const nodes = [
  { label: "Operators", top: "18%", left: "12%" },
  { label: "Knowledge", top: "26%", left: "68%" },
  { label: "Prompts", top: "57%", left: "18%" },
  { label: "Workflows", top: "62%", left: "70%" }
];

export function HeroScene() {
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-[2rem] lg:h-[560px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,232,255,0.18),transparent_24%),radial-gradient(circle_at_center,rgba(139,96,255,0.14),transparent_46%)]" />
      <div className="absolute inset-0 outline-grid opacity-30" />
      <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/[0.02]" />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet/30"
        animate={{ rotate: -360, scale: [1, 1.04, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_top,rgba(46,232,255,0.24),rgba(3,8,17,0.92)_62%)] shadow-[0_0_80px_rgba(46,232,255,0.16)]" />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center">
        <span className="section-kicker text-[0.56rem] text-accent/90">
          Product + system
        </span>
        <span className="max-w-[12rem] text-2xl font-semibold text-white">
          Bento AIII
        </span>
        <span className="max-w-[12rem] text-sm leading-6 text-slate-400">
          Practical AI applications shaped for real teams
        </span>
      </div>

      <div className="absolute left-[7%] top-[12%] h-px w-[26%] bg-gradient-to-r from-accent/0 via-accent/70 to-accent/0" />
      <div className="absolute right-[7%] top-[19%] h-px w-[22%] bg-gradient-to-r from-violet/0 via-violet/70 to-violet/0" />
      <div className="absolute bottom-[17%] left-[12%] h-px w-[22%] bg-gradient-to-r from-accent/0 via-accent/70 to-accent/0" />
      <div className="absolute bottom-[20%] right-[10%] h-px w-[24%] bg-gradient-to-r from-violet/0 via-violet/70 to-violet/0" />

      {nodes.map((node, index) => (
        <motion.div
          key={node.label}
          className="absolute"
          style={{ top: node.top, left: node.left }}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            delay: index * 0.35,
            ease: "easeInOut"
          }}
        >
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/72 px-4 py-2 backdrop-blur-md">
            <span className="h-2.5 w-2.5 bg-accent shadow-[0_0_20px_rgba(46,232,255,0.7)]" />
            <span className="font-pixel text-[0.62rem] uppercase tracking-[0.22em] text-slate-300">
              {node.label}
            </span>
          </div>
        </motion.div>
      ))}

      <motion.div
        className="absolute bottom-8 left-8 max-w-[18rem] rounded-[1.35rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur"
        initial={{ opacity: 0.72 }}
        animate={{ opacity: [0.68, 1, 0.68] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="section-kicker text-[0.56rem] text-accent/80">
          Delivery model
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          Design the product surface, connect the system layer, and ship workflows
          people can actually operate.
        </p>
      </motion.div>
    </div>
  );
}
