import{q as t,t as d}from"./chunk-ERM6FBRR.mjs";import{o as u,x as a,y as s}from"./chunk-RESULPD2.mjs";import{c as l}from"./chunk-Y5FTINFI.mjs";function c(e){return u(()=>{if(setTimeout(function(){l.scrollTo(0,0)},1),typeof document<"u"&&typeof l<"u"&&(document.querySelector("head title")||(document.querySelector("#smoothy").style.display="inline-block"),document.querySelector("head title"))){let m=function(i,n=!0){if(typeof Lenis>"u"){let o=document.createElement("script");o.setAttribute("src",i),o.id="lenis",o.setAttribute("type","text/javascript"),o.setAttribute("async",n),document.body.appendChild(o),o.addEventListener("load",()=>{r()}),o.addEventListener("error",h=>{console.log("Error on loading file",h)})}else r()},r=function(){l.addEventListener("popstate",function(i){i.preventDefault()});try{l.lenis.destroy()}catch{}setTimeout(function(){l.lenis=new Lenis({lerp:e.lerp,duration:e.duration,easing:n=>Math.min(1,1.001-Math.pow(2,-10*n)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:e.smoothWheel,smoothTouch:e.smoothTouch,syncTouch:e.syncTouch,syncTouchLerp:e.syncTouchLerp,touchInertiaMultiplier:e.touchInertiaMultiplier,wheelMultiplier:e.wheelMultiplier,touchMultiplier:e.touchMultiplier,normalizeWheel:e.normalizeWheel,infinite:e.infinite,autoResize:e.autoResize});function i(n){l.lenis.raf(n),requestAnimationFrame(i)}requestAnimationFrame(i)},0)};m("https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js",!0)}}),s("div",{id:"smoothy",children:[a("style",{children:`
html.lenis {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}

                #smoothy {
                    display: none;
                    background-color: black;
                    color: white;
                    font-weight: bold;
                    text-align: center;
                    margin: 10px;
                    padding: 5px;
                }
             `}),"Smooth Scroll",a("br",{}),a("small",{children:"This will hide itself!"})]})}d(c,{lerp:{type:t.Number,min:.1,max:2,step:.1,defaultValue:.1},duration:{type:t.Number,min:.1,max:5,step:.1,defaultValue:1.2},smoothWheel:{type:t.Boolean,defaultValue:!0},smoothTouch:{type:t.Boolean,defaultValue:!1},syncTouchLerp:{type:t.Number,min:.1,max:2,step:.1,defaultValue:.1},touchInertiaMultiplier:{type:t.Number,min:1,max:100,step:1,defaultValue:35},wheelMultiplier:{type:t.Number,min:1,max:5,step:1,defaultValue:1},touchMultiplier:{type:t.Number,min:1,max:5,step:1,defaultValue:2},normalizeWheel:{type:t.Boolean,defaultValue:!0},infinite:{type:t.Boolean,defaultValue:!1},autoResize:{type:t.Boolean,defaultValue:!1}});export{c as a};
//# sourceMappingURL=chunk-75PPQVDQ.mjs.map
