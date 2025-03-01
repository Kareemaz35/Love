function showMessage() {
  var message = document.getElementById('message');
  var envelope = document.getElementById('envelope');
  if (message.classList.contains('hidden')) {
    message.classList.remove('hidden');
    envelope.onclick = null;
  }
}
