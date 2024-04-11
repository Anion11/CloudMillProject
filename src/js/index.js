import '../styles/style.scss';
import 'virtual:svg-icons-register';
import 'lazysizes';
import { select } from '../blocks/select/select';
import { input } from '../blocks/input/input'
import { header } from '../blocks/header/header'
import { footer } from '../blocks/footer/footer';

document.addEventListener('DOMContentLoaded', function () {
  select();
  input();
  header();
  footer();
});
