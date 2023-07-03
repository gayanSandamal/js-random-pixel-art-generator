# js-random-pixel-art-generator

[![npm version](https://img.shields.io/npm/v/js-random-pixel-art-generator.svg)](https://www.npmjs.com/package/js-random-pixel-art-generator)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A JavaScript library for generating random pixel art.

## Installation

Install the library using npm:

```bash
npm install js-random-pixel-art-generator

Usage

Add the following HTML code to your project:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Random Pixel Art Generator Sample</title>
  <style>
    #app {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .container {
      width: 100%;
      max-width: 400px;
    }
    button {
      display: block;
      width: 100%;
      padding: 2rem;
      margin-bottom: 1rem;
    }
  </style>
</head>
<body>
  <script type="module">
    import { generatePixelArt } from "js-random-pixel-art-generator";

    const artSettings = { 
      width: 16,
      height: 16,
      pixelSize: 16,
      baseColor: "#911a13",
      secondaryColor: "#f69cd7",
      imageId: "imageOutput",
    }

    const btnElement = document.getElementById("generateBtn");
    btnElement.addEventListener("click", () => {
      generatePixelArt(artSettings)
    });

    (function() {
      generatePixelArt(artSettings)
    })()
  </script>

  <div id="app">
    <div class="container">
      <button id="generateBtn">Generate</button>
      <img id="imageOutput"/>
    </div>
  </div>
</body>
</html>
```

Demo

Here’s a live demo of the Random Pixel Art Generator: [Demo Link](https://codepen.io/gayan_sandamal/pen/LYXLVXm)

API

generatePixelArt(settings)

Generates a random pixel art image with the specified settings.

	•	settings (Object): An object that contains the following properties:
	•	width (number): The width of the pixel art canvas.
	•	height (number): The height of the pixel art canvas.
	•	pixelSize (number): The size of each pixel in pixels.
	•	baseColor (string): The base color of the pixel art in hexadecimal format.
	•	secondaryColor (string): The secondary color of the pixel art in hexadecimal format.
	•	imageId (string): The ID of the HTML img element where the generated pixel art will be displayed.

Returns: None.

License

This project is licensed under the MIT License - see the LICENSE file for details.

Please note that this is a template, and you may need to modify and customize it based on your specific project details and requirements.
