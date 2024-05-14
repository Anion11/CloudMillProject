import '../styles/style.scss';
import 'virtual:svg-icons-register';
import 'lazysizes';
import { select } from '../blocks/_ui/select/select';
import { input } from '../blocks/_ui/input/input';
import { header } from '../blocks/header/header';
import { contactCard } from '../blocks/cards/contact-card/contact-card';

document.addEventListener('DOMContentLoaded', function () {
  select();
  input();
  header();
  contactCard();
});
