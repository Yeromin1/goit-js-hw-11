import{i as l,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const u="46731834-56edab6cfae067b8e4143ec91",f="https://pixabay.com/api/",m=i=>{const r=`${f}?key=${u}&q=${encodeURIComponent(i)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(o=>{if(!o.ok)throw new Error("Error fetching images");return o.json()}).then(o=>o.hits)},p=i=>{const r=document.querySelector(".gallery");if(r.innerHTML="",i.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const s=i.slice(0,12).map(e=>`
            <div class="photo-card">
                <a href="${e.largeImageURL}">
                    <img src="${e.webformatURL}" alt="${e.tags}" />
                </a>
                <div class="info">
                    <p class="info-item">
                        <b>Likes:</b> ${e.likes}
                    </p>
                    <p class="info-item">
                        <b>Views:</b> ${e.views}
                    </p>
                    <p class="info-item">
                        <b>Comments:</b> ${e.comments}
                    </p>
                    <p class="info-item">
                        <b>Downloads:</b> ${e.downloads}
                    </p>
                </div>
            </div>
        `).join("");r.insertAdjacentHTML("beforeend",s),new d(".gallery a").refresh()},a=document.querySelector("#search-form"),c=document.querySelector(".loader");a.addEventListener("submit",async i=>{i.preventDefault();const r=a.elements.query,o=r.value.trim();r.value="",c.classList.remove("hidden"),m(o).then(s=>{p(s)}).catch(s=>{console.error(s),iziToast.error({title:"Error",message:"Failed to fetch images.",position:"topRight"})}).finally(()=>{c.classList.add("hidden")})});
//# sourceMappingURL=index.js.map
