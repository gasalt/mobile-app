export const animatedBottomTabLine = (
  tab: number,
  position: number,
  width: number
) => {
  let multiplier = 1 + 4 * position;

  if (tab === 0 && position <= 0.1) {
    multiplier = 1;
  }

  if (tab === 1 && (position >= 0.9 || position === 0)) {
    multiplier = 5;
  }

  return (width / 8) * multiplier;
};
