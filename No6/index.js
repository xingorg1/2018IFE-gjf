window.onload = function(){
  var big = document.getElementById('big'),
      little = document.getElementById('little'),
      bigImg = big.getElementsByTagName('div'),
      littleImg = little.getElementsByTagName('div'),
      indexs = null;
  console.log(littleImg.length);
  // for (let i = 0; i < littleImg.length; i++) {
  //   littleImg[i].onclick = function(e){
  //     indexs = i;
  //     for (let j = 0; j < littleImg.length; j++) {
  //       littleImg[j].className = 'little';
  //       bigImg[j].style.display = 'none';
  //     }
  //     littleImg[i].className = 'little active';
  //     bigImg[i].style.display = 'block';
  //   }
  // }
  for (let i = 0; i < littleImg.length; i++) {
    littleImg[i].onclick = function(e){
      littleImg[i].indexs = i;
      for (let j = 0; j < littleImg.length; j++) {
        littleImg[j].className = 'little';
        bigImg[j].style.display = 'none';
        bigImg[j].className = 'big';
      }
      this.className = 'little active';
      bigImg[this.indexs].style.display = 'block';
      bigImg[this.indexs].className = 'big ani';
    }
  }
}