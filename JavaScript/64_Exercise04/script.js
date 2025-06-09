function updateClock() {
  const now = new Date();

  // Time
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById("digitalClock").innerHTML = `${hours}:${minutes}:${seconds}`;

  // Day
  const day = now.toLocaleDateString('en-IN', { weekday: 'long' });
  document.getElementById("dayDisplay").innerHTML = day;

  // Date
  const dateNum = String(now.getDate()).padStart(2, '0');
  document.getElementById("dateNumber").innerHTML = dateNum;

  // Month & Year
  const month = now.toLocaleDateString('en-IN', { month: 'long' });
  const year = now.getFullYear();
  document.getElementById("monthYear").innerHTML = `${month} ${year}`;
}

setInterval(updateClock, 1000);
updateClock();
