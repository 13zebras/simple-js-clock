let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=500,height=80,top=300,left=400`;

const button12 = document.querySelector('#button12');
button12.onclick = () => {
  window.open('digital_clock_12.html', 'clock', params);
};

const button24 = document.querySelector('#button24');
button24.onclick = () => {
  window.open('digital_clock_24.html', 'clock', params);
};
