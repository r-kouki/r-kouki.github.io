// Native disclosures work without JavaScript; this only enhances their labels.
document.querySelectorAll('details').forEach(detail => {
  detail.addEventListener('toggle', () => {
    const symbol = detail.querySelector('summary span');
    if (symbol) symbol.textContent = detail.open ? '−' : '+';
  });
});
