import { useEffect, useRef } from "react";
import anime from "animejs";

/**
 * Hook for creating scroll-triggered animations with animejs
 */
export function useAnimeInView<T extends HTMLElement>(options?: {
  threshold?: number;
  once?: boolean;
}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial state
    anime.set(el, {
      opacity: 0,
      y: 40,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: el,
              opacity: [0, 1],
              y: [40, 0],
              easing: "easeOutCubic",
              duration: 800,
            });
            if (options?.once !== false) {
              observer.unobserve(el);
            }
          } else if (options?.once === false) {
            // Reset for repeated animations
            anime.set(el, { opacity: 0, y: 40 });
          }
        });
      },
      { threshold: options?.threshold ?? 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.once, options?.threshold]);

  return ref;
}

/**
 * Hook for staggered animations on child elements
 */
export function useAnimeStagger<T extends HTMLElement>(options?: {
  threshold?: number;
  once?: boolean;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial state for children
    anime.set(el.children, {
      opacity: 0,
      y: 30,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: el.children,
              opacity: [0, 1],
              y: [30, 0],
              easing: "easeOutCubic",
              duration: 600,
              delay: anime.stagger(options?.stagger ?? 100, {
                start: options?.delay ?? 0,
              }),
            });
            if (options?.once !== false) {
              observer.unobserve(el);
            }
          } else if (options?.once === false) {
            anime.set(el.children, { opacity: 0, y: 30 });
          }
        });
      },
      { threshold: options?.threshold ?? 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.delay, options?.once, options?.stagger, options?.threshold]);

  return ref;
}

/**
 * Hook for fade-in from specific direction
 */
export function useAnimeFadeIn<T extends HTMLElement>(
  direction: "up" | "down" | "left" | "right" = "up",
  options?: {
    threshold?: number;
    once?: boolean;
    distance?: number;
  },
) {
  const ref = useRef<T>(null);

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: options?.distance ?? 50 };
      case "down":
        return { opacity: 0, y: -(options?.distance ?? 50) };
      case "left":
        return { opacity: 0, x: options?.distance ?? 50 };
      case "right":
        return { opacity: 0, x: -(options?.distance ?? 50) };
    }
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    anime.set(el, getInitialTransform());

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: el,
              opacity: 1,
              x: 0,
              y: 0,
              easing: "easeOutCubic",
              duration: 700,
            });
            if (options?.once !== false) {
              observer.unobserve(el);
            }
          } else if (options?.once === false) {
            anime.set(el, getInitialTransform());
          }
        });
      },
      { threshold: options?.threshold ?? 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction, options?.distance, options?.once, options?.threshold]);

  return ref;
}

/**
 * Hook for scale-in animation
 */
export function useAnimeScaleIn<T extends HTMLElement>(options?: {
  threshold?: number;
  once?: boolean;
}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    anime.set(el, {
      opacity: 0,
      scale: 0.9,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: el,
              opacity: [0, 1],
              scale: [0.9, 1],
              easing: "easeOutBack",
              duration: 600,
            });
            if (options?.once !== false) {
              observer.unobserve(el);
            }
          } else if (options?.once === false) {
            anime.set(el, { opacity: 0, scale: 0.9 });
          }
        });
      },
      { threshold: options?.threshold ?? 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.once, options?.threshold]);

  return ref;
}
