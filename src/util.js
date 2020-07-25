export const drawImage = (context, img, x, y, width, height, deg, flip, flop, center) => {

  context.save();

  if (typeof width === "undefined") width = img.width;
  if (typeof height === "undefined") height = img.height;
  if (typeof center === "undefined") center = false;

  // Set rotation point to center of image, instead of top/left
  if (center) {
    x -= width / 2;
    y -= height / 2;
  }

  let flipScale;
  let flopScale;
  // Set the origin to the center of the image
  context.translate(x + width / 2, y + height / 2);
  // Rotate the canvas around the origin
  var rad = 2 * Math.PI - deg * Math.PI / 180;
  context.rotate(rad);
  // Flip/flop the canvas
  if (flip) flipScale = -1; else flipScale = 1;
  if (flop) flopScale = -1; else flopScale = 1;
  context.scale(flipScale, flopScale);
  // Draw the image    
  context.drawImage(img, -width / 2, -height / 2, width, height);
  context.restore();
}

export const between = (num, a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return num > min && num < max;
}

export const distance = (pos0, pos1) => {
  var x1 = pos0[0],
      y1 = pos0[1],
      x2 = pos1[0],
      y2 = pos1[1];

  var a = x1 - x2;
  var b = y1 - y2;

  return Math.sqrt(a * a + b * b);
}

// export const debounce = (func, delay) => {
//   let debounceTimer
//   return function () {
//     const context = this
//     const args = arguments
//     clearTimeout(debounceTimer)
//     debounceTimer
//       = setTimeout(() => func.apply(context, args), delay)
//   }
// }  

// export const throttle = (func, limit) => {
//   let inThrottle
//   return function () {
//     const args = arguments
//     const context = this
//     if (!inThrottle) {
//       func.apply(context, args)
//       inThrottle = true
//       setTimeout(() => inThrottle = false, limit)
//     }
//   }
// }