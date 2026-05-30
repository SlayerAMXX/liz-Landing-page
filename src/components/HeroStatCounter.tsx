"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

function parseStatValue(valor: string) {
  const match = valor.match(/^([^0-9]*)(\d+)(.*)$/);
  if (!match) {
    return { prefix: "", number: 0, suffix: valor };
  }
  return { prefix: match[1], number: Number.parseInt(match[2], 10), suffix: match[3] };
}

type HeroStatCounterProps = {
  valor: string;
  className?: string;
};

export default function HeroStatCounter({ valor, className = "" }: HeroStatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const parsed = parseStatValue(valor);
  const [display, setDisplay] = useState(valor);

  useEffect(() => {
    if (!inView) return;

    if (reduceMotion || parsed.number === 0) {
      setDisplay(valor);
      return;
    }

    setDisplay(`${parsed.prefix}0${parsed.suffix}`);

    const controls = animate(0, parsed.number, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        setDisplay(`${parsed.prefix}${Math.round(v)}${parsed.suffix}`);
      },
    });

    return () => controls.stop();
  }, [inView, reduceMotion, valor, parsed.prefix, parsed.number, parsed.suffix]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
