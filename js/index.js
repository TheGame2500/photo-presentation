  function getScrollBarWidth () {
  var inner = document.createElement('p');
  inner.style.width = "100%";
  inner.style.height = "200px";

  var outer = document.createElement('div');
  outer.style.position = "absolute";
  outer.style.top = "0px";
  outer.style.left = "0px";
  outer.style.visibility = "hidden";
  outer.style.width = "200px";
  outer.style.height = "150px";
  outer.style.overflow = "hidden";
  outer.appendChild (inner);

  document.body.appendChild (outer);
  var w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var w2 = inner.offsetWidth;
  if (w1 == w2) w2 = outer.clientWidth;

  document.body.removeChild (outer);

  return (w1 - w2);
}
var marginR=getScrollBarWidth()+'px';


$('.body.modal-open .modal-open .navbar-fixed-top .modal-open .navbar-fixed-bottom').css('margin-right',marginR);





$(document).ready( function() {

    var textwidth=$('justsize').attr('width');
    textwidth*=0.85;
    $('#textdiv').attr('width',textwidth);
  /* generate thumbnails */
    var gallery = [];
  for(var i=1; i<=83;i++){
    if(i<10) gallery.push('photos/00'+i+'.jpg');
    else gallery.push('photos/0'+i+'.jpg');
  }

  for (var i=0; i<gallery.length; i++){
    $("<img>").attr("src", gallery[i]).attr("width",300).attr("height",'auto').attr("class","item").appendTo("#images")
  }
  
  // arrange gallery
  jQuery(window).on('load',function(){
    $('#gallery').masonry({
      isFitWidth: true,
      columnWidth: 300,
      itemSelector: '.item'
    });
  });
  var maxHeight=$(window).height();
    maxHeight *= 0.8;
    Math.round(maxHeight);
    $('#myModal .modal-dialog').css('max-height',maxHeight);

  // modals for the thumbnails
 $('img[class="item"]').click(function(){
       var src= $(this).attr('src');
    $("#inmodal").attr("src", src);
 });



    $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target
                || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                    .animate({scrollTop: targetOffset}, 2000);
                return false;
            }
        }
    });

    console.log('viewport height='+maxHeight);
    var minHeight=$(document).height();
    console.log('window height='+minHeight);

});