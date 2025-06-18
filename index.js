import{a as y,s as w,i as h}from"./assets/vendor-DdCA2eIH.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const A="38212376-ffcb529addc704f756c0c7d48",B="https://pixabay.com/api/";y.defaults.baseURL=B;const F=async(e,r)=>{try{return(await y.get("",{params:{key:A,q:e,image_type:"photo",orientation:"horizontal",page:r,per_page:15}})).data}catch(a){throw console.error("Error fetching images:",a),a}},m=document.querySelector(".gallery");function L(e,r=!1){const a=e.map(t=>v(t)).join("");r?m.insertAdjacentHTML("beforeend",a):m.innerHTML=a;const s=new w(".gallery a",{captionsData:"alt",captionDelay:250,scrollZoom:!1});return s.refresh(),s}function q(){m.innerHTML=""}function b(){const e=document.querySelector(".loader");e&&e.classList.remove("hidden")}function p(){const e=document.querySelector(".loader");e&&e.classList.add("hidden")}function M(){const e=document.querySelector(".load-more");e&&e.classList.remove("hidden")}function f(){const e=document.querySelector(".load-more");e&&e.classList.add("hidden")}function v({webformatURL:e,largeImageURL:r,tags:a,likes:s,views:t,comments:o,downloads:i}){return`<li class="gallery__item">
    <a class="gallery__link" href="${r}">
      <img class="gallery__image" src="${e}" alt="${a}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item">
          <b>Likes</b> <span>${s}</span>
          </p>
          <p class="info-item">
          <b>Views</b> <span>${t}</span>
          </p>
          <p class="info-item">
          <b>Comments</b> <span>${o}</span>
          </p>
          <p class="info-item">
          <b>Downloads</b> <span>${i}</span>
          </p>
          </div>
          </li>`}const g=document.querySelector(".form"),C=document.querySelector(".load-more");let c=1,d="",u=0,n=[];g.addEventListener("submit",async e=>{if(e.preventDefault(),d=g.elements["search-text"].value,!d){l("Please enter a search query.");return}c=1,u=0,f(),b(),q();try{const r=await F(d);if(u=r.totalHits,n=r.hits,n.length===0){l("Sorry, there are no images matching your search query. Please try again!"),p(),e.target.reset();return}L(n),u>15?M():f()}catch{l("An error occurred while fetching images. Please try again later.")}finally{p()}e.target.reset()});C.addEventListener("click",async()=>{c+=1,b();try{const e=await F(d,c);if(e.hits.length===0){l("No more images found."),f();return}n=[...n,...e.hits],L(n);let a=document.querySelector(".gallery__item").getBoundingClientRect();window.scrollBy({top:a.height*2,behavior:"smooth"}),c*15>=u&&(f(),O("We're sorry, but you've reached the end of search results."))}catch{l("An error occurred while loading more images. Please try again later.")}finally{p()}});function l(e){h.error({title:"Error",message:e,position:"topRight",timeout:3e3,transitionIn:"fadeInDown",transitionOut:"fadeOutUp",close:!0,color:"#EF4040",titleColor:"#FAFAFB",messageColor:"#FAFAFB",iconColor:"#FAFAFB"})}function O(e){h.info({title:"Info",message:e,position:"topRight",timeout:3e3,transitionIn:"fadeInDown",transitionOut:"fadeOutUp",close:!0,color:"#4CAF50",titleColor:"#FAFAFB",messageColor:"#FAFAFB",iconColor:"#FAFAFB"})}
//# sourceMappingURL=index.js.map
