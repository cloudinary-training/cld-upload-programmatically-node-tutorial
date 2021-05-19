// reads in the cloudinary env variable - put this before
require("dotenv").config();
// we're aliasing version 2 and referencing with a variable
const cloudinary = require("cloudinary").v2;
// cloudinary picks up env and is now configured
console.log(cloudinary.config().cloud_name);

// Node.js SDK Uploader function returns a Promise
cloudinary.uploader
  .upload("https://cloudinary-training.github.io/cld-advanced-concepts/assets/images/image-from-tv.jpg", {
    quality_analysis: true
  })
  .then((result) => {
    // JSON.stringify will provide a formatted string
    // 1st param is the value to be output
    // 2nd param null is a function that can be applied to the output
    // 3rd param is the number of space characters to use for whitespace in formatting the output
    console.log("success", JSON.stringify(result, null, 2));
    // focus value 1.0 is in focus and 0 is out of focus
    //choose a threshold of .75 and add a tag if out of focus
    // add_tag function can be used to add a tag to multiple assets specified in array
    if (result.quality_analysis.focus < .75 ){
      cloudinary.uploader.add_tag('blurry',[result.public_id]);
    }
  })
  .catch((error) => {
    console.log("error", JSON.stringify(error, null, 2));
  });
  