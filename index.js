import{S as c,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d=document.querySelector(".search-input"),f=document.querySelector(".search-btn"),a=document.getElementById("gallery"),p=new c(".gallery li > a",{captionsData:"alt",captionDelay:250});async function u(){const o=document.getElementById("loader"),n=`https://pixabay.com/api/?key=45978686-70839b27c443bdf6e9ef42e3a&q=${d.value}&image_type=photo&orientation=horizontal&safesearch=true`;try{a.innerHTML="",o.classList.remove("hidden");const t=await(await fetch(n)).json();t.hits.length===0?l.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):m(t.hits)}catch(e){console.error("Hata:",e)}finally{o.classList.add("hidden")}}function m(o){const s=o.map(r=>`
    <li class="card">
  <a href="${r.largeImageURL}">
    <img src="${r.webformatURL}" alt="${r.tags}" />
  </a>
  <div class="info">
    <p class="info-text"><b>Likes</b> ${r.likes}</p>
    <p class="info-text"><b>Views</b> ${r.views}</p>
    <p class="info-text"><b>Comments</b> ${r.comments}</p>
    <p class="info-text"><b>Downloads</b> ${r.downloads}</p>
  </div>
</li>
    
    `);a.innerHTML=s.join(""),p.refresh()}f.addEventListener("click",o=>{o.preventDefault(),u()});
//# sourceMappingURL=index.js.map
