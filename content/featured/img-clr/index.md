---
date: '3'
title: 'Image Colorization'
cover: './img-clr-demo.png'
github: 'https://github.com/pvbhanuteja/Image-colorization-UNET'
# external: 'https://github.com/pvbhanuteja/Image-colorization-UNET'
tech:
  - Unet
  - VGG Feature loss
  - Lab space image
  - CNN regression
  - Unet
---

Image is converted to lab space(2 channel) to reduce the regression by a channel. Model is trained on UNET architecture. Tried with various loss functions (MSE, SSIM, TVLOSS, Pretrained VGG feature loss). Weighted loss gave better performance.
