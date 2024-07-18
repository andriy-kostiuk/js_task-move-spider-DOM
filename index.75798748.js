var t=document.querySelector(".spider"),e=document.querySelector(".wall");document.addEventListener("click",function(i){if(i.target===e){var a=t.offsetWidth,f=t.offsetHeight,n=e.clientWidth,o=e.clientHeight,c=i.offsetX,l=i.offsetY;t.style.top=Math.max(0,Math.min(l-f/2,o-f))+"px",t.style.left=Math.max(0,Math.min(c-a/2,n-a))+"px"}});
//# sourceMappingURL=index.75798748.js.map
