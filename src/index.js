// Importacao
import { searchMovies, submitForm } from './movie';
import { initSortable } from './plugins/init_sortable';
import { initMarkdown } from './plugins/init_markdown';
import { initSelect } from './plugins/init_select';

// AJAX inicial
searchMovies("Harry Potter");

// Event Listener
const form = document.getElementById('search-movies');
form.addEventListener('submit', submitForm);

// Plugins
initSortable();
initMarkdown();
initSelect();
