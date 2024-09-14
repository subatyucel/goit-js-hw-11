import{i as c,S as l}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const d=document.querySelector(".search-input"),u=document.querySelector(".search-btn"),a=document.getElementById("gallery");async function f(){const r=document.getElementById("loader"),s=`https://pixabay.com/api/?key=45978686-70839b27c443bdf6e9ef42e3a&q=${d.value}&image_type=photo&orientation=horizontal&safeSearch=true`;try{a.innerHTML="",r.classList.remove("hidden");const e=await(await fetch(s)).json();e.hits.length===0?c.error({title:"",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"}):p(e.hits)}catch(t){console.error("Hata:",t)}finally{r.classList.add("hidden")}}function p(r){const o=r.reduce((t,e)=>t+`<li class="card">
                <a href="${e.largeImageURL}">
                    <img src="${e.webformatURL}" alt="${e.tags}" />
                </a>
                <div class="info">
                    <p class="info-text"> <b>Likes</b> ${e.likes} </p>
                    <p class="info-text"> <b>Views</b> ${e.views} </p>
                    <p class="info-text"> <b>Comments</b> ${e.comments} </p>
                    <p class="info-text"> <b>Downloads</b> ${e.downloads} </p>
                </div>
            </li>`,"");a.innerHTML=o,document.querySelectorAll(".gallery li > a").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),s.open()})});const s=new l(".gallery li > a",{captionsData:"alt",captionDelay:250})}u.addEventListener("click",r=>{r.preventDefault(),f()});
//# sourceMappingURL=index.js.map
