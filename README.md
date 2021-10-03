# Tailvite - Work in progress

## Description
Tailvite want to be a Drupal 9 base theme with Atomic Design structure, inspired by Emulsify, but using Vite instead of Webpack, TailwindCSS components instead of BEM and AlpineJS instead of jQuery.

## Aim
To be fast and fun and simple

## Stack
- Drupal 9
- Vite
- TailwindCSS 3 (alpha)
- AlpineJS 3

## Inspiration
- https://tailwindcss.com/docs/guides/vue-3-vite
- https://github.com/emulsify-ds/emulsify-drupal
- https://github.com/chkilel/vitewind-theme
- https://github.com/segovia94/drupal-vite-poc

## To evaluate/integrate
- https://github.com/arnoson/vite-plugin-live-reload
- https://github.com/tanc/vite-plugin-sfc-reload
- https://github.com/cereschen/vite-plugin-svg-sprite-component

## To do
- Check ESLint & Prettier setup + config
- Make it works: Tailwind + Alpine integration not yet successful!

## Requiered Drupal modules
- Components: https://drupal.org/projects/components
- Single File Components: https://drupal.org/projects/sfc
- Bamboo Twig: https://drupal.org/projects/bamboo_twig
- Simplify Menu: https://drupal.org/projects/simplify_menu
- External-use Icons: https://drupal.org/projects/ex_icons

## Patch
- https://www.drupal.org/project/sfc/issues/3205989

## Future options
- Possibility to add Storybook via Vite: https://storybook.js.org/blog/storybook-for-vite
- PWA
- Dev tool
- Headless
- Light/Dark theme
