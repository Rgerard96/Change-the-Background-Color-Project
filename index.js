const btn = document.getElementById('btn');


btn.addEventListener('click', function () {
  const rgb1 = Math.round(Math.random() * 255 + 1);
  const rgb2 = Math.round(Math.random() * 255 + 1);
  const rgb3 = Math.round(Math.random() * 255 + 1);

  console.log('RGB 1 = ' + rgb1, 'RGB 2 = ' + rgb2, 'RGB 3 = ' + rgb3); 

  document.body.style.backgroundColor = 'rgb(' + rgb1 + ', ' + rgb2 + ', ' + rgb3 + ')';
})