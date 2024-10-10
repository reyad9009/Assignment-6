const adoptModal = document.getElementById('adoptModal');
const countdownElement = document.getElementById('countdownTime');

//show the modal with countdown
function showAdoptModal() {
  let countdownValue = 3;
  countdownElement.textContent = countdownValue;

  adoptModal.classList.add('modal-open');

  const countdownInterval = setInterval(() => {
    countdownValue --;
    countdownElement.textContent = countdownValue;

    if (countdownValue === 0) {
      clearInterval(countdownInterval);
      closeAdoptModal();
    }
  }, 1000); 
}
//close the modal
function closeAdoptModal() {
  adoptModal.classList.remove('modal-open');
}

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('adopt-button')) {
    showAdoptModal();
  }
});
