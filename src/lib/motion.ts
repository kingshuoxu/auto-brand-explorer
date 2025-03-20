
interface TransitionProps {
  duration?: number;
  delay?: number;
  ease?: string;
}

export const fadeIn = (direction: string, { duration = 0.5, delay = 0, ease = "easeOut" }: TransitionProps = {}) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: ease,
        duration,
        delay,
      },
    },
  };
};

export const staggerContainer = (staggerChildren?: number, delayChildren?: number) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const slideIn = (direction: string, { duration = 0.5, delay = 0, ease = "easeOut" }: TransitionProps = {}) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: ease,
        duration,
        delay,
      },
    },
  };
};

export const scale = ({ duration = 0.5, delay = 0, ease = "easeOut" }: TransitionProps = {}) => {
  return {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: ease,
        duration,
        delay,
      },
    },
  };
};
