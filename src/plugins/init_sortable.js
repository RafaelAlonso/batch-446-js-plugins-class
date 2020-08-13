import Sortable from 'sortablejs';

const initSortable = () => {
  const el = document.getElementById('results');
  const sortable = Sortable.create(el, {
    ghostClass: "ghost",
    animation: 150,
    onEnd: (event) => {
      // fazer um POST para salvar a nova ordem que o usuario escolheu
      alert(`${event.oldIndex + 1} moved to ${event.newIndex + 1}`);
    }
  });
}

export { initSortable };
