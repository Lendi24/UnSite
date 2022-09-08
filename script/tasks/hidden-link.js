$(document).ready(function(){
  animateDiv(".box");

});

function makeNewPosition(){
  
  let h = $(window).height() - 50;
  let w = $(window).width() - 50;
  
  let nh = Math.floor(Math.random() * h);
  let nw = Math.floor(Math.random() * w);
  
  return [nh,nw];    
  
}

function animateDiv(myclass){
  let newq = makeNewPosition();
  $(myclass).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
    animateDiv(myclass);        
  });
  
};