// Set the countdown date
const countdownDate = new Date('2024-10-03T10:00:00').getTime();

// Update the countdown every second
setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Calculate the time components
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);