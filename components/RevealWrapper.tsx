"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealWrapperProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "li";
}

export default function RevealWrapper({
  children,
  className = "",
  as = "div"
}: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as any;

  return (
    <Tag ref={ref} className={`reveal ${visible ? "in" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
