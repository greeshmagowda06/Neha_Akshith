import * as React from "react";

type MotionProps = React.HTMLAttributes<HTMLElement> & {
  initial?: unknown;
  animate?: unknown;
  exit?: unknown;
  transition?: unknown;
  whileHover?: unknown;
  whileInView?: unknown;
  viewport?: unknown;
};

type MotionComponent = React.ForwardRefExoticComponent<
  MotionProps & React.RefAttributes<HTMLElement>
>;

const createMotionComponent = (tag: keyof React.JSX.IntrinsicElements): MotionComponent => {
  return React.forwardRef<HTMLElement, MotionProps>(function MotionComponent(
    {
      initial,
      animate,
      exit,
      transition,
      whileHover,
      whileInView,
      viewport,
      ...props
    },
    ref,
  ) {
    return React.createElement(tag, { ...props, ref });
  }) as MotionComponent;
};

const motionTag = new Proxy(
  {},
  {
    get: (_target, tag: string) => createMotionComponent(tag as keyof React.JSX.IntrinsicElements),
  },
) as Record<string, MotionComponent>;

export const motion = motionTag;

export const AnimatePresence = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export const useScroll = () => ({ scrollYProgress: 0 });

export const useSpring = <T,>(value: T) => value;

export const useTransform = <T, R>(value: T, transformer: (value: T) => R) => transformer(value);