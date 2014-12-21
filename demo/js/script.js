$(document).ready(function(){
  
  //astral
  (function(){function u(i){var o=function(){e=i.innerWidth();t=i.innerHeight();n=i.find("#astral");n.attr("width",e).attr("height",t);n.css("margin-top",-t)};o();$(window).resize(function(){o()});r=n[0].getContext("2d");for(var u=0;u<200;u++){s[u]=new f;s[u].reset()}requestAnimationFrame(a)}function a(){r.clearRect(0,0,e,t);r.globalCompositeOperation="lighter";for(var n=0;n<s.length;n++){s[n].fade();s[n].move();s[n].draw()}requestAnimationFrame(a)}function f(){this.s={ttl:15e3,xmax:5,ymax:2,rmax:7,rt:1,xdef:960,ydef:540,xdrift:4,ydrift:4,random:true,blink:true};this.reset=function(){this.x=this.s.random?e*Math.random():this.s.xdef;this.y=this.s.random?t*Math.random():this.s.ydef;this.r=(this.s.rmax-1)*Math.random()+1;this.dx=Math.random()*this.s.xmax*(Math.random()<.5?-1:1);this.dy=Math.random()*this.s.ymax*(Math.random()<.5?-1:1);this.hl=this.s.ttl/o*(this.r/this.s.rmax);this.rt=Math.random()*this.hl;this.stop=Math.random()*.2+.4;this.s.rt=Math.random()+1;this.s.xdrift*=Math.random()*(Math.random()<.5?-1:1);this.s.ydrift*=Math.random()*(Math.random()<.5?-1:1)};this.fade=function(){this.rt+=this.s.rt};this.draw=function(){var e,t;if(this.s.blink&&(this.rt<=0||this.rt>=this.hl)){this.s.rt=this.s.rt*-1}else if(this.rt>=this.hl){this.reset()}e=1-this.rt/this.hl;r.beginPath();r.arc(this.x,this.y,this.r,0,Math.PI*2,true);r.closePath();t=this.r*e;i=r.createRadialGradient(this.x,this.y,0,this.x,this.y,t<=0?1:t);i.addColorStop(0,"rgba(193,254,254,"+e+")");i.addColorStop(this.stop,"rgba(193,254,254,"+e*.2+")");i.addColorStop(1,"rgba(193,254,254,0)");r.fillStyle=i;r.fill()};this.move=function(){this.x+=this.rt/this.hl*this.dx;this.y+=this.rt/this.hl*this.dy;if(this.x>e||this.x<0)this.dx*=-1;if(this.y>t||this.y<0)this.dy*=-1};this.getX=function(){return this.x};this.getY=function(){return this.y}}var e,t,n,r,i;var s=[];var o=50;$.fn.astral=function(){this.append($('<canvas id="astral">Your browser does not support the canvas element.</canvas>'));u(this)};})()
  //init astral
  $('.astral').astral();

  //scrollTo
  /**
   * Copyright (c) 2007-2014 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
   * Licensed under MIT
   * @author Ariel Flesler
   * @version 1.4.14
   */
  ;(function(k){'use strict';k(['jquery'],function($){var j=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};j.defaults={axis:'xy',duration:0,limit:!0};j.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(f,g,h){if(typeof g=='object'){h=g;g=0}if(typeof h=='function')h={onAfter:h};if(f=='max')f=9e9;h=$.extend({},j.defaults,h);g=g||h.duration;h.queue=h.queue&&h.axis.length>1;if(h.queue)g/=2;h.offset=both(h.offset);h.over=both(h.over);return this._scrollable().each(function(){if(f==null)return;var d=this,$elem=$(d),targ=f,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=win?$(targ):$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}var e=$.isFunction(h.offset)&&h.offset(d,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=j.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=e[pos]||0;if(h.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*h.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&h.queue){if(old!=attr[key])animate(h.onAfterFirst);delete attr[key]}});animate(h.onAfter);function animate(a){$elem.animate(attr,g,h.easing,a&&function(){a.call(this,targ,h)})}}).end()};j.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}return j})}(typeof define==='function'&&define.amd?define:function(a,b){if(typeof module!=='undefined'&&module.exports){module.exports=b(require('jquery'))}else{b(jQuery)}}));
  //init scrollto
  $("#navbarMenu ul > li a").click(function(e){
    e.preventDefault();
    var element = $(this).attr('id');
    $.scrollTo( element, 1000, {offset:-60} );
  });

  //logo
  var traX, traY;
  var random = Math.floor((Math.random() * 120) + 10);
  $(document).mousemove(function(e){
    traX = ((4 * e.pageX) / 570) + random-10;
    traY = ((4 * e.pageY) / 570) + random;
    $(".title").css({"background-position": traX + "%" + traY + "%"});
  });

  //init accordion
  $("#accordion1").accordion({"type": "colapsible"});
  $("#accordion2").accordion({"type": "expansible"});

  //init dropdown
  $("#navbarMenu").dropdown();

  //navbar sticky control
  $(window).bind('scroll', function () {
      if($( window ).width() > 768){ //768 is navbar breakpoint
          if ($(window).scrollTop() <= ($( window ).height())) {
              $('#navbarMenu').removeClass('sticky');
          }else{
              $('#navbarMenu').addClass('sticky');
          }
      }
  });
});
