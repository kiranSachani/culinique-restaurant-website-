'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(
  selector: string,
  options?: {
    y?: number;
    opacity?: number;
    duration?: number;
    stagger?: number;
    delay?: number;
  }
) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const defaults = {
      y: options?.y ?? 40,
      opacity: options?.opacity ?? 0,
      duration: options?.duration ?? 0.9,
      stagger: options?.stagger ?? 0.15,
      delay: options?.delay ?? 0,
    };

    gsap.set(elements, { y: defaults.y, opacity: 0 });

    elements.forEach((el) => {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: defaults.duration,
        delay: defaults.delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [selector, options?.y, options?.opacity, options?.duration, options?.stagger, options?.delay]);
}

export function useParallax(ref: React.RefObject<HTMLElement | null>, speed: number = 0.3) {
  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      y: () => -speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [ref, speed]);
}

export function useStaggerReveal(containerSelector: string, childSelector: string) {
  useEffect(() => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const children = container.querySelectorAll(childSelector);
    if (!children.length) return;

    gsap.set(children, { y: 50, opacity: 0 });

    gsap.to(children, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [containerSelector, childSelector]);
}
