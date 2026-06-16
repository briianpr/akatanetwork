function calculateROI() {
  let ad = parseFloat(document.getElementById('adspend').value);
  let cpl = parseFloat(document.getElementById('cpl').value);
  let cr = parseFloat(document.getElementById('cr').value) / 100;
  let aov = parseFloat(document.getElementById('aov').value);

  let leads = ad / cpl;
  let sales = leads * cr;
  let revenue = sales * aov;
  let yearly = revenue * 12;
  let roi = ((yearly - (ad * 12)) / (ad * 12)) * 100;

  document.getElementById('leads').innerText = Math.round(leads);
  document.getElementById('sales').innerText = Math.round(sales);
  document.getElementById('revenue').innerText = Math.round(revenue);
  document.getElementById('yearly').innerText = Math.round(yearly);
  document.getElementById('roi').innerText = roi.toFixed(2);
}
