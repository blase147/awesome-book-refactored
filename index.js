import Nav from './modules/nav.js';
import BookClass from './modules/bookClass.js';
import { DateTime } from './modules/luxon.js';

const books = new BookClass();
books.addBook();
const nav = new Nav();
nav.navigation();
document.getElementById('date').innerHTML = DateTime.now();
