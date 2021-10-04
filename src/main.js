// check why the line below have issue and if needed
// import 'vite/dynamic-import-polyfill';

// All CSS have to be imported in JS
import '/components/style.scss';
import './style.css';

import $ from 'jquery';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();
