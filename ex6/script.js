  function  change()
  {
    if (document.getElementById('color').innerHTML == 'couleur de fond')
    {
      document.getElementById('color').innerHTML = 'couleur changée';
      document.bgColor= "#fffggf"
    }
    else
    {
      document.getElementById('color').innerHTML = 'couleur de fond'
      document.bgColor= "#ffffff"
    }
  }