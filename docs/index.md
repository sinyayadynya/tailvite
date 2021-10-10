## Installation

### Requirements
- PHP 7.1
- Node (we recommend NVM)
- Composer

### Composer

1. Require tailvite in your project `composer require sinyayadynya/tailvite`
2. Move into the contrib Tailvite theme directory `cd web/themes/contrib/tailvite`
3. Create your new custom theme by cloning tailvite `php tailvite.php "THEME NAME"` (Run php tailvite.php -h for other available options)
4. Move into your new custom theme directory `cd ../../custom/THEME_NAME/`
5. Install the theme dependencies `npm install`
6. Build theme `npm run build`
7. Enable your theme and its dependencies* `drush then THEME_NAME -y && drush en components bamboo_twig simplify_menu -y`
8. Set your custom theme to be the default `drush config-set system.theme default THEME_NAME -y`
9. [Disable Drupal caching during development](https://www.drupal.org/node/2598914)
10. To enable the Vite development server, first add the following into your settings.php (preferably settings.local.php) file: `$settings['hot_module_replacement'] = TRUE;`
11. Finally, start up the Vite development server: `npm run dev`

Assets such as JS and CSS will now be served from Vite's `http://localhost:12321`.


## Help & Support
Tailvite is a free, open source project built and maintained by BlueMelon. We welcome community contributions and support requests (via issues) on [Github](https://github.com/sinyayadynya/tailvite/issues).
