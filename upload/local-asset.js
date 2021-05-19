// reads in the cloudinary env variable - put this before
require("dotenv").config();
// we're aliasing version 2 and referencing with a variable
const cloudinary = require("cloudinary").v2;
// cloudinary picks up env and is now configured
console.log(cloudinary.config().cloud_name);

// Node.js SDK Uploader function returns a Promise
cloudinary.uploader
  .upload("./assets/images/breakfast.jpg", {
    // image is the default resource type if you don't specify
    resource_type: "image",
  })
  .then((result) => {
    // JSON.stringify will provide a formatted string
    // 1st param is the value to be output
    // 2nd param null is a function that can be applied to the output
    // 3rd param is the number of space characters to use for whitespace in formatting the output
    console.log("success", JSON.stringify(result, null, 2));
  })
  .catch((error) => {
    console.log("error", JSON.stringify(error, null, 2));
  });
