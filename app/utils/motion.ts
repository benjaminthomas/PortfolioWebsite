export const menuVariants = {
  open: {
    opacity: 1,
    clipPath: "circle(1000px at 224px 65px)",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    opacity: 0,
    clipPath: "circle(30px at 224px 65px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      duration: 1,
      delay: 1.4,
    },
  },
};

export const menuLiAnimation = (index: number) => ({
  initial: {
    type: "spring",
    x: 100,
    opacity: 0,
    scale: 0.5,
    transition: {
      delay: index * 0.2,
    },
  },
  animate: {
    type: "spring",
    x: 0,
    opacity: 1,
    scale: 1,
    stiffness: 300,
    transition: {
      delay: 1 + index * 0.2,
    },
  },
});
