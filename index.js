import{i as m,S as p}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="46731834-56edab6cfae067b8e4143ec91",g="https://pixabay.com/api/",y=s=>{const r=`${g}?key=${h}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(o=>{if(!o.ok)throw new Error("Error fetching images");return o.json()}).then(o=>o.hits)},b=s=>{const r=document.querySelector(".gallery");if(r.innerHTML="",s.length===0){m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const i=s.slice(0,9).map(({webformatURL:t,largeImageURL:n,tags:a,likes:l,views:u,comments:d,downloads:f})=>`
            <div class="photo-card">
                <a href="${n}">
                    <img src="${t}" alt="${a}" />
                </a>
                <div class="info">
                    <p class="info-item">
                        <b>Likes:</b> ${l}
                    </p>
                    <p class="info-item">
                        <b>Views:</b> ${u}
                    </p>
                    <p class="info-item">
                        <b>Comments:</b> ${d}
                    </p>
                    <p class="info-item">
                        <b>Downloads:</b> ${f}
                    </p>
                </div>
            </div>
        `).join("");r.insertAdjacentHTML("beforeend",i),new p(".gallery a").refresh()},c=document.querySelector("#search-form"),L=document.querySelector(".loader");c.addEventListener("submit",async s=>{s.preventDefault();const r=c.elements.query,o=r.value.trim();r.value="",y(o).then(i=>{b(i)}).catch(i=>{console.error(i),iziToast.error({title:"Error",message:"Failed to fetch images.",position:"topRight"})}).finally(()=>{L.classList.add("hidden")})});
//# sourceMappingURL=index.js.map
