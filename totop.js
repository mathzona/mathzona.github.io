/* Бутон „Към началото“ – кръгла стрелка нагоре в долния десен ъгъл.
   Появява се, след като страницата е превъртяна надолу. Добавя се във всяка страница с
   <script src="…/totop.js" defer></script>. Цветът се задава с --totop (по подразбиране лилав). */
(function(){
  if(document.getElementById("toTop"))return;
  const st=document.createElement("style");
  st.textContent=`#toTop{position:fixed;right:max(16px,env(safe-area-inset-right));bottom:max(18px,env(safe-area-inset-bottom));z-index:60;width:52px;height:52px;border-radius:50%;border:0;padding:0;background:var(--totop,#6366f1);color:#fff;cursor:pointer;box-shadow:0 8px 22px -8px rgba(0,0,0,.45);display:grid;place-items:center;opacity:0;transform:translateY(12px);pointer-events:none;transition:opacity .2s,transform .2s}
#toTop.show{opacity:1;transform:none;pointer-events:auto}#toTop:hover{filter:brightness(1.1)}#toTop:focus-visible{outline:3px solid #9db3d3;outline-offset:3px}
@media print{#toTop{display:none}}@media(prefers-reduced-motion:reduce){#toTop{transition:none}}`;
  document.head.appendChild(st);
  const b=document.createElement("button");b.id="toTop";b.type="button";b.title="Към началото";b.setAttribute("aria-label","Към началото на страницата");
  b.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  b.onclick=()=>{const rm=matchMedia("(prefers-reduced-motion: reduce)").matches;window.scrollTo({top:0,behavior:rm?"auto":"smooth"});const h=document.querySelector("h1");if(h){if(!h.hasAttribute("tabindex"))h.setAttribute("tabindex","-1");h.focus({preventScroll:true})}};
  document.body.appendChild(b);
  const upd=()=>b.classList.toggle("show",window.scrollY>600);
  addEventListener("scroll",upd,{passive:true});upd();
})();
