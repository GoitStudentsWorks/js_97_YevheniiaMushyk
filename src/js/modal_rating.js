const modal_rating_button = document.document.getElementById('modal_rating');
const modal_rating_close = document.querySelector('.modal__button_close');
const modal_rating = document.querySelector('.modal_rating');

modal_rating_button.addEventListener('click', () => {
  modal_rating.showModal();
});

modal_rating_close.addEventListener('click', () => {
  modal_rating.close();
});
