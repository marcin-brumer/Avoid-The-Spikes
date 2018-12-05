export const canvas = document.querySelector("canvas");
export const ctx = canvas.getContext("2d");
export const groundHeight = 100;
export const backgroundGradient = ctx.createLinearGradient(
  0,
  0,
  0,
  canvas.height
);
