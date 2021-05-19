# Cloudinary Document Video Supplemental Code

## Usage

### Environment Variable

The file `.env.sample` shows you what your environment variables file, `.env`, should look like to run the code.  You can click on a link in your [Cloudinary account console](https://cloudinary.com/console/) to get your Cloudinary URL copied into your clipboard.  Then you can paste into a .env file.

### Install Node Packages

Run `npm install` to install packages in the `package.json` dependency list.

### Assets

You'll find all assets stored in the `./assets/` folder.  Image assets can be found in `./assets/images/`.

## Execute scripts

Script are intended to be run from the root unless otherwise specified.

Local assets references in code are relative to the root, so execute from the root.  For example to execute an upload of a local asset run the following command from the root of the project.

```JavaScript
node upload/local-asset.js
```

## Open asset in DAM

If you're logged in
```bash
https://cloudinary.com/console//media_library/folders/home/asset/<asset id from upload response>/manage
```

## Credits

[breakfast.jpg photo by ready made from Pexels](https://www.pexels.com/photo/food-on-plates-3851068/)
