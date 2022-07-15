const shareBtn = document.querySelector('.share-btn');
const shareIcon = document.querySelector('.fa-share');
const shareOptions = document.querySelector('.share-options');

shareBtn.addEventListener('click', active)

function active() {
  shareOptions.classList.toggle('options-active');
  shareBtn.classList.toggle('btn-active');
  shareIcon.classList.toggle('btn-active');
}