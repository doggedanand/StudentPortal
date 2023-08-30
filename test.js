var img = new Image();
img.src = "https://ibb.co/0D6JXBB"; // Replace with the actual image path

img.onload = function() {
  var width = img.width;
  var height = img.height;
  console.log("Image width:", width);
  console.log("Image height:", height);
};
