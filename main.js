var reasons = [
    "Dad",
    "Son",
    "Mom",
    
  ];
  
  var images = [
    
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_CuXMC-TRnSoC2aIsU26F9x-EewCqWCEVLQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmmn4nTdqpR1d0N1eoI_j0FOJotFuW2hQtNg&usqp=CAU",
    "download.jpg",
  ];
  
  var i = 0;
   
  function nextslide()
   
    {  document.getElementById("name").innerHTML = reasons[i];
    document.getElementById("pic").src = images[i];
    i++;

    if(i == 3)
    { i=0; }
}
  