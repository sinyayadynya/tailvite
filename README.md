# Tailvite - Work in progress

## Description
Tailvite is a Drupal 9 starterkit theme with Atomic Design structure, inspired by Emulsify, but using Vite instead of Webpack, TailwindCSS components instead of BEM and AlpineJS instead of jQuery.

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

## Requiered Drupal modules
- Components: https://drupal.org/project/components
- Bamboo Twig: https://drupal.org/project/bamboo_twig
- Simplify Menu: https://drupal.org/project/simplify_menu
- External-use Icons: https://drupal.org/project/ex_icons (move to recommended after deleting icons in footer)

## Recommended Drupal modules
- Single File Components: https://drupal.org/project/sfc

## Patch (if using https://github.com/tanc/vite-plugin-sfc-reload)
- https://www.drupal.org/project/sfc/issues/3205989

## Future options
- Storybook integration: https://storybook.js.org/blog/storybook-for-vite
- PWA: https://github.com/antfu/vite-plugin-pwa
- Dark Mode
