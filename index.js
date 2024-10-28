import{i as l,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const u="46731834-56edab6cfae067b8e4143ec91",f="https://pixabay.com/api/",m=s=>{const r=`${f}?key=${u}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(t=>{if(!t.ok)throw new Error("Error fetching images");return t.json()}).then(t=>t.hits)},p=s=>{const r=document.querySelector(".gallery");if(r.innerHTML="",s.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const t=s.map(e=>`
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
        `).join("");r.insertAdjacentHTML("beforeend",t),new d(".gallery a").refresh()},a=document.querySelector("#search-form"),c=document.querySelector(".loader");a.addEventListener("submit",async s=>{s.preventDefault();const r=a.elements.query,t=r.value.trim();if(t===""){iziToast.error({title:"Error",message:"Please enter a search term.",position:"topRight"});return}r.value="",c.classList.remove("hidden"),m(t).then(i=>{p(i)}).catch(i=>{console.error(i),iziToast.error({title:"Error",message:"Failed to fetch images.",position:"topRight"})}).finally(()=>{c.classList.add("hidden")})});
//# sourceMappingURL=index.js.map
