"use client";

import React, { useEffect, useRef } from "react";
import styles from "./ArchitecturalRuler.module.css";

interface TickItem {
  percent: number;
  type: "major" | "medium" | "minor";
}

// Generate technical graduations from 0 to 100% along the full height
const TICKS: TickItem[] = Array.from({ length: 41 }, (_, i) => {
  const percent = i * 2.5;
  const isMajor = percent % 10 === 0;
  const isMedium = !isMajor && percent % 5 === 0;

  return {
    percent,
    type: isMajor ? "major" : isMedium ? "medium" : "minor",
  };
});

export default function ArchitecturalRuler() {
  const trackRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);
  const ticksRef = useRef<(HTMLDivElement | null)[]>([]);
  const isDraggingRef = useRef<boolean>(false);

  // Directly update DOM elements without waiting for React re-render cycles
  const updatePosition = () => {
    if (typeof window === "undefined") return;

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const current = window.scrollY;
    const progress = docHeight > 0 ? Math.min(100, Math.max(0, (current / docHeight) * 100)) : 0;

    // 1. Update active needle & value
    if (indicatorRef.current) {
      indicatorRef.current.style.top = `${progress}%`;
    }
    if (valueRef.current) {
      valueRef.current.textContent = `${Math.round(progress)}`;
    }
    if (trackRef.current) {
      trackRef.current.setAttribute("aria-valuenow", `${Math.round(progress)}`);
    }

    // 2. Adaptive contrast detection for each tick
    const darkElements = document.querySelectorAll(
      '[data-theme="dark"], [class*="hero"], [class*="metricsRibbon"], [class*="dark"]'
    );
    const darkRanges = Array.from(darkElements).map((el) => {
      const rect = el.getBoundingClientRect();
      return { top: rect.top, bottom: rect.bottom };
    });

    const windowH = window.innerHeight;
    TICKS.forEach((tick, idx) => {
      const tickEl = ticksRef.current[idx];
      if (!tickEl) return;

      const tickY = (tick.percent / 100) * windowH;
      const isDark = darkRanges.some(
        (range) => tickY >= range.top && tickY <= range.bottom
      );

      if (isDark) {
        tickEl.classList.add(styles.tickLight);
      } else {
        tickEl.classList.remove(styles.tickLight);
      }
    });
  };

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updatePosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updatePosition();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Scrub/jump to position immediately
  const scrubToPosition = (clientY: number) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const offsetY = clientY - rect.top;
    const ratio = Math.min(1, Math.max(0, offsetY / rect.height));

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: ratio * docHeight,
      behavior: "auto",
    });
    updatePosition();
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    isDraggingRef.current = true;
    scrubToPosition(e.clientY);

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (!isDraggingRef.current) return;
      scrubToPosition(moveEvent.clientY);
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  return (
    <aside
      className={styles.rulerWrapper}
      aria-label="Régua de scroll"
      role="complementary"
    >
      <div
        ref={trackRef}
        className={styles.rulerTrack}
        onMouseDown={handleMouseDown}
        role="slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={0}
        aria-label="Régua de scroll"
        tabIndex={0}
      >
        {/* Graduation ticks flush to the right edge */}
        <div className={styles.ticksList}>
          {TICKS.map((tick, idx) => {
            const tickClass =
              tick.type === "major"
                ? styles.tickMajor
                : tick.type === "medium"
                ? styles.tickMedium
                : styles.tickMinor;

            return (
              <div
                key={tick.percent}
                ref={(el) => {
                  ticksRef.current[idx] = el;
                }}
                className={`${styles.tick} ${tickClass}`}
                style={{ top: `${tick.percent}%` }}
              >
                <div className={styles.tickLine} />
              </div>
            );
          })}
        </div>

        {/* Active position indicator: value (0-100) + dash flush to the edge */}
        <div
          ref={indicatorRef}
          className={styles.activeIndicator}
          style={{ top: "0%" }}
        >
          <span ref={valueRef} className={styles.activeValue}>
            0
          </span>
          <div className={styles.activeDash} />
        </div>
      </div>
    </aside>
  );
}
