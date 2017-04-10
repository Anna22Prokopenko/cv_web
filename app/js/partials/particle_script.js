// â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” \\
// â”‚ ParticleSlider | Version 0.9 â”‚ \\
;
// â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤ \\
// â”‚ Copyright Â© 2013 Tamino Martinius (http://zaku.eu) â”‚ \\
// â”‚ Copyright Â© 2013 Particleslider.com (http://particleslider.com) â”‚ \\
// â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤ \\
// â”‚ Terms of usage: (http://particleslider.com/legal/license) â”‚ \\
// â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ \\
;
function ParticleSlider(a){var b=this;b.sliderId="particle-slider",b.color="#fff",b.hoverColor="#88f",b.width=0,b.height=0,b.ptlGap=0,b.ptlSize=1,b.slideDelay=10,b.arrowPadding=10,b.showArrowControls=!0,b.onNextSlide=null,b.onWidthChange=null,b.onHeightChange=null,b.onSizeChange=null,b.monochrome=!1,b.mouseForce=1e4,b.restless=!0,b.imgs=[];if(a){var c=["color","hoverColor","width","height","ptlGap","ptlSize","slideDelay","arrowPadding","sliderId","showArrowControls","onNextSlide","monochrome","mouseForce","restless","imgs","onSizeChange","onWidthChange","onHeightChange"];for(var d=0,e=c.length;d<e;d++)a[c[d]]&&(b[c[d]]=a[c[d]])}b.$container=b.$("#"+b.sliderId),b.$$children=b.$container.childNodes,b.$controlsContainer=b.$(".controls"),b.$$slides=b.$(".slide",b.$(".slides").childNodes,!0),b.$controlLeft=null,b.$controlRight=null,b.$canv=b.$(".draw"),b.$srcCanv=document.createElement("canvas"),b.$srcCanv.style.display="none",b.$container.appendChild(b.$srcCanv),b.$prevCanv=document.createElement("canvas"),b.$prevCanv.style.display="none",b.$container.appendChild(b.$prevCanv),b.$nextCanv=document.createElement("canvas"),b.$nextCanv.style.display="none",b.$container.appendChild(b.$nextCanv),b.$overlay=document.createElement("p"),b.$container.appendChild(b.$overlay),b.imgControlPrev=null,b.imgControlNext=null,b.$$slides.length<=1&&(b.showArrowControls=!1),b.$controlsContainer&&b.$controlsContainer.childNodes&&b.showArrowControls==!0?(b.$controlLeft=b.$(".left",b.$controlsContainer.childNodes),b.$controlRight=b.$(".right",b.$controlsContainer.childNodes),b.imgControlPrev=new Image,b.imgControlNext=new Image,b.imgControlPrev.onload=function(){b.$prevCanv.height=this.height,b.$prevCanv.width=this.width,b.loadingStep()},b.imgControlNext.onload=function(){b.$nextCanv.height=this.height,b.$nextCanv.width=this.width,b.loadingStep()},b.imgControlPrev.src=b.$controlLeft.getAttribute("data-src"),b.imgControlNext.src=b.$controlRight.getAttribute("data-src")):b.showArrowControls=!1,b.width<=0&&(b.width=b.$container.clientWidth),b.height<=0&&(b.height=b.$container.clientHeight),b.mouseDownRegion=0,b.colorArr=b.parseColor(b.color),b.hoverColorArr=b.parseColor(b.hoverColor),b.mx=-1,b.my=-1,b.swipeOffset=0,b.cw=b.getCw(),b.ch=b.getCh(),b.frame=0,b.nextSlideTimer=!1,b.currImg=0,b.lastImg=0,b.imagesLoaded=0,b.pxlBuffer={first:null},b.recycleBuffer={first:null},b.ctx=b.$canv.getContext("2d"),b.srcCtx=b.$srcCanv.getContext("2d"),b.prevCtx=b.$prevCanv.getContext("2d"),b.nextCtx=b.$nextCanv.getContext("2d"),b.$canv.width=b.cw,b.$canv.height=b.ch,b.shuffle=function(){var a,b;for(var c=0,d=this.length;c<d;c++)b=Math.floor(Math.random()*d),a=this[c],this[c]=this[b],this[b]=a},Array.prototype.shuffle=b.shuffle,b.$canv.onmouseout=function(){b.mx=-1,b.my=-1,b.mouseDownRegion=0},b.$canv.onmousemove=function(a){function c(a){var c=0,d=0,e=typeof a=="string"?b.$(a):a;if(e){c=e.off
// â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” \\
// â”‚ ParticleSlider | Version 0.9 â”‚ \\
;
// â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤ \\
// â”‚ Copyright Â© 2013 Tamino Martinius (http://zaku.eu) â”‚ \\
// â”‚ Copyright Â© 2013 Particleslider.com (http://particleslider.com) â”‚ \\
// â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤ \\
// â”‚ Terms of usage: (http://particleslider.com/legal/license) â”‚ \\
// â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ \\
;
function ParticleSlider(a){var b=this;b.sliderId="particle-slider",b.color="#fff",b.hoverColor="#88f",b.width=0,b.height=0,b.ptlGap=0,b.ptlSize=1,b.slideDelay=10,b.arrowPadding=10,b.showArrowControls=!0,b.onNextSlide=null,b.onWidthChange=null,b.onHeightChange=null,b.onSizeChange=null,b.monochrome=!1,b.mouseForce=1e4,b.restless=!0,b.imgs=[];if(a){var c=["color","hoverColor","width","height","ptlGap","ptlSize","slideDelay","arrowPadding","sliderId","showArrowControls","onNextSlide","monochrome","mouseForce","restless","imgs","onSizeChange","onWidthChange","onHeightChange"];for(var d=0,e=c.length;d<e;d++)a[c[d]]&&(b[c[d]]=a[c[d]])}b.$container=b.$("#"+b.sliderId),b.$$children=b.$container.childNodes,b.$controlsContainer=b.$(".controls"),b.$$slides=b.$(".slide",b.$(".slides").childNodes,!0),b.$controlLeft=null,b.$controlRight=null,b.$canv=b.$(".draw"),b.$srcCanv=document.createElement("canvas"),b.$srcCanv.style.display="none",b.$container.appendChild(b.$srcCanv),b.$prevCanv=document.createElement("canvas"),b.$prevCanv.style.display="none",b.$container.appendChild(b.$prevCanv),b.$nextCanv=document.createElement("canvas"),b.$nextCanv.style.display="none",b.$container.appendChild(b.$nextCanv),b.$overlay=document.createElement("p"),b.$container.appendChild(b.$overlay),b.imgControlPrev=null,b.imgControlNext=null,b.$$slides.length<=1&&(b.showArrowControls=!1),b.$controlsContainer&&b.$controlsContainer.childNodes&&b.showArrowControls==!0?(b.$controlLeft=b.$(".left",b.$controlsContainer.childNodes),b.$controlRight=b.$(".right",b.$controlsContainer.childNodes),b.imgControlPrev=new Image,b.imgControlNext=new Image,b.imgControlPrev.onload=function(){b.$prevCanv.height=this.height,b.$prevCanv.width=this.width,b.loadingStep()},b.imgControlNext.onload=function(){b.$nextCanv.height=this.height,b.$nextCanv.width=this.width,b.loadingStep()},b.imgControlPrev.src=b.$controlLeft.getAttribute("data-src"),b.imgControlNext.src=b.$controlRight.getAttribute("data-src")):b.showArrowControls=!1,b.width<=0&&(b.width=b.$container.clientWidth),b.height<=0&&(b.height=b.$container.clientHeight),b.mouseDownRegion=0,b.colorArr=b.parseColor(b.color),b.hoverColorArr=b.parseColor(b.hoverColor),b.mx=-1,b.my=-1,b.swipeOffset=0,b.cw=b.getCw(),b.ch=b.getCh(),b.frame=0,b.nextSlideTimer=!1,b.currImg=0,b.lastImg=0,b.imagesLoaded=0,b.pxlBuffer={first:null},b.recycleBuffer={first:null},b.ctx=b.$canv.getContext("2d"),b.srcCtx=b.$srcCanv.getContext("2d"),b.prevCtx=b.$prevCanv.getContext("2d"),b.nextCtx=b.$nextCanv.getContext("2d"),b.$canv.width=b.cw,b.$canv.height=b.ch,b.shuffle=function(){var a,b;for(var c=0,d=this.length;c<d;c++)b=Math.floor(Math.random()*d),a=this[c],this[c]=this[b],this[b]=a},Array.prototype.shuffle=b.shuffle,b.$canv.onmouseout=function(){b.mx=-1,b.my=-1,b.mouseDownRegion=0},b.$canv.onmousemove=function(a){function c(a){var c=0,d=0,e=typeof a=="string"?b.$(a):a;if(e){c=e.off