import { createOptimizedPicture } from"../../scripts/aem.js";

export default function decorate(e){
    const t=document.createElement("ul");[...e.children].forEach((e=>{const c=document.createElement("li");
    for (;e.firstElementChild;)c.append(e.firstElementChild);
    [...c.children].forEach((e=>{1===e.children.length&&e.querySelector("picture")?e.className="cards-card-image":e.className="cards-card-body"})),t.append(c)})),t.querySelectorAll("img").forEach((e=>e.closest("picture").replaceWith(createOptimizedPicture(e.src,e.alt,!1,[{width:"750"}])))),e.textContent="",e.append(t)
}