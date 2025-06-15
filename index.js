import{a as u,s as d,i as p}from"./assets/vendor-DdCA2eIH.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();const m="38212376-ffcb529addc704f756c0c7d48",y="https://pixabay.com/api/";u.defaults.baseURL=y;const g=async e=>{try{return(await u.get("",{params:{key:m,q:e,image_type:"photo",orientation:"horizontal"}})).data}catch(t){throw console.error("Error fetching images:",t),t}},f=document.querySelector(".gallery");function h(e){const t=e.map(s=>F(s)).join("");f.innerHTML=t;const a=new d(".gallery a",{captionsData:"alt",captionDelay:250,scrollZoom:!1});return a.refresh(),a}function b(){f.innerHTML=""}function L(){const e=document.querySelector(".loader");e&&e.classList.remove("hidden")}function c(){const e=document.querySelector(".loader");e&&e.classList.add("hidden")}function F({webformatURL:e,largeImageURL:t,tags:a,likes:s,views:r,comments:o,downloads:n}){return`<li class="gallery__item">
    <a class="gallery__link" href="${t}">
      <img class="gallery__image" src="${e}" alt="${a}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item">
          <b>Likes</b> <span>${s}</span>
          </p>
          <p class="info-item">
          <b>Views</b> <span>${r}</span>
          </p>
          <p class="info-item">
          <b>Comments</b> <span>${o}</span>
          </p>
          <p class="info-item">
          <b>Downloads</b> <span>${n}</span>
          </p>
          </div>
          </li>`}const l=document.querySelector(".form");l.addEventListener("submit",async e=>{e.preventDefault();const t=l.elements["search-text"].value;if(!t){i("Please enter a search query.");return}L(),b();try{const a=await g(t);if(a.hits.length===0){i("Sorry, there are no images matching your search query. Please try again!"),c(),e.target.reset();return}h(a.hits)}catch{i("An error occurred while fetching images. Please try again later.")}finally{c()}e.target.reset()});function i(e){p.error({title:"Error",message:e,position:"topRight",timeout:3e3,transitionIn:"fadeInDown",transitionOut:"fadeOutUp",close:!0,color:"#EF4040",titleColor:"#FAFAFB",messageColor:"#FAFAFB",iconColor:"#FAFAFB"})}
//# sourceMappingURL=index.js.map
