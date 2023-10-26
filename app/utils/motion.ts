export const menuVariants = {
  open: {
    clipPath: "circle(1000px at 267px 45px)",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(30px at 267px 45px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      duration: 1,
      delay: 1.4,
    },
  },
};

export const menuLiAnimation = (index: number, totalItems: number) => ({
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    stiffness: 300,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 40,
      delay: 0.5 + index * 0.2,
    },
  },
  exit: {
    x: 100,
    opacity: 0,
    scale: 0.5,
    transition: {
      type: "spring",
      delay: (totalItems - index - 1) * 0.2,
      duration: 0.2,
    },
  },
});
