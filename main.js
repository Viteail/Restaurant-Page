(()=>{"use strict";const e=e=>{const t=document.createElement("div");t.classList.add("homepage"),e.appendChild(t);const n=document.createElement("p");n.classList.add("bigtext"),n.textContent="ABOUT",t.appendChild(n);const s=document.createElement("p");s.classList.add("description"),s.textContent="Best food in the world, recommended by many popular people. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",t.appendChild(s)},t=document.querySelector("#content"),n=document.createElement("div");n.classList.add("header"),n.textContent="Obama Hungry",t.appendChild(n);const s=document.createElement("div");s.classList.add("btnwrapper"),t.appendChild(s);const d=document.createElement("button");d.classList.add("btn"),d.classList.add("hover"),d.textContent="Home",s.appendChild(d);const a=document.createElement("button");a.classList.add("btn"),a.textContent="Menu",s.appendChild(a);const c=document.createElement("button");c.classList.add("btn"),c.textContent="Contact",s.appendChild(c);const i=document.createElement("div");i.classList.add("wrapper"),t.appendChild(i),e(i);const o=document.createElement("div");function l(e){for(;e.firstChild;)e.removeChild(e.firstChild)}o.classList.add("footer"),o.textContent="Made by Obama",t.appendChild(o),d.addEventListener("click",(()=>{d.classList.contains("hover")||(a.classList.remove("hover"),c.classList.remove("hover"),l(i),d.classList.add("hover"),e(i))})),a.addEventListener("click",(()=>{a.classList.contains("hover")||(c.classList.remove("hover"),d.classList.remove("hover"),l(i),a.classList.add("hover"),(e=>{const t=[],n=[],s=document.createElement("div");s.classList.add("cardwrapper"),e.appendChild(s);(()=>{for(let e=0;e<8;e++){const n=document.createElement("div");n.classList.add("card"),n.classList.add(`${e}`),t.push(n),s.appendChild(n)}t[0].style.backgroundImage="url('../dist/style/images/BigMac.png')",t[1].style.backgroundImage="url('../dist/style/images/McChicken.png')",t[2].style.backgroundImage="url('../dist/style/images/CheeseBurger.png')",t[3].style.backgroundImage="url('../dist/style/images/ChickenMcWrap.jpg')",t[4].style.backgroundImage="url('../dist/style/images/FrenchFries.png')",t[5].style.backgroundImage="url('../dist/style/images/CherryPie.png')",t[6].style.backgroundImage="url('../dist/style/images/LemonadeStrawberry.png')",t[7].style.backgroundImage="url('../dist/style/images/AppleJuice.jpg')",t.forEach((e=>{const t=document.createElement("div");t.classList.add("paraname"),n.push(t),e.appendChild(t)})),n[0].textContent="Big Mac",n[1].textContent="Chicken Wings",n[2].textContent="Cheeseburger",n[3].textContent="Chicken McWrap",n[4].textContent="French Fries",n[5].textContent="Cherry Pie",n[6].textContent="Lemonade Strawberry",n[7].textContent="Apple Juice"})()})(i))})),c.addEventListener("click",(()=>{c.classList.contains("hover")||(d.classList.remove("hover"),a.classList.remove("hover"),l(i),c.classList.add("hover"),(e=>{const t=document.createElement("p");t.textContent="TELEPHONE",t.classList.add("bigtext"),t.style.textAlign="center",e.appendChild(t);const n=document.createElement("div");n.classList.add("phonewrapper"),e.appendChild(n);const s=document.createElement("img");s.src="../dist/style/images/phone.svg",s.style.width="25px";const d=document.createElement("p");d.classList.add("description"),d.textContent="123 345 678",d.style.fontSize="1.5rem",n.appendChild(s),n.appendChild(d);const a=document.createElement("p");a.textContent="ADRESS",a.classList.add("bigtext"),a.style.textAlign="center";const c=document.createElement("p");c.classList.add("description"),c.textContent="Unknown...",c.style.textAlign="center",e.appendChild(a),e.appendChild(c)})(i))}))})();