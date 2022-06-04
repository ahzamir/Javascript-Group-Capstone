"use strict";(self.webpackChunkleaderboard=self.webpackChunkleaderboard||[]).push([[179],{426:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(81),a=n.n(o),r=n(645),i=n.n(r),s=n(667),d=n.n(s),l=new URL(n(251),n.b),c=i()(a()),p=d()(l);c.push([e.id,"* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: 'Fira sans', sans-serif;\n}\n\n@font-face {\n  font-family: cocogoose;\n  src: url("+p+");\n}\n\n.dark-background {\n  background-color: #374151;\n}\n\n.dark-color {\n  color: #374151;\n}\n\n.light-background {\n  background-color: #eee;\n}\n\n.darker-background {\n  background-color: #1f2937;\n}\n\n.darker-color {\n  color: #1f2937;\n}\n\n.light-color {\n  color: #eee;\n}\n\nh1 {\n  font-family: 'cocogoose', sans-serif;\n}\n\np {\n  font-family: sans-serif;\n}\n\nheader p {\n  font-family: Georgia, 'Times New Roman', Times, serif;\n  font-weight: 900;\n}\n\n.top-rated-movie {\n  border: 1px solid #1f2937;\n  border-radius: 5%;\n}\n\n.top-rated-movie:hover {\n  background-color: #111827;\n  cursor: pointer;\n}\n\n.top-rated-movie-poster {\n  width: 90%;\n}\n\n.top-rated-movie-poster:hover {\n  border: darkred 3px solid;\n}\n\n.like-comment {\n  width: 50%;\n  bottom: 0;\n}\n\ni:hover {\n  color: cornflowerblue;\n  font-size: 1.4rem;\n}\n\n.show-likes-part:hover {\n  color: rgb(121, 178, 228);\n}\n\nfooter {\n  background-color: #111827;\n}\n\n.footer-div {\n  width: 100%;\n  color: #eee;\n}\n\n.comments-div {\n  border: #111827 2px solid;\n  border-radius: 5%;\n}\n\n#userDetailDiv {\n  width: 100%;\n}\n\n.user-detail {\n  background-color: #1f2937;\n  border: #eee 3px solid;\n  border-radius: 10%;\n  color: #eee;\n}\n",""]);const m=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);o&&i[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),t.push(c))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},i=[],s=0;s<e.length;s++){var d=e[s],l=o.base?d[0]+o.base:d[0],c=r[l]||0,p="".concat(l," ").concat(c);r[l]=c+1;var m=n(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var v=a(u,o);o.byIndex=s,t.splice(s,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var s=n(r[i]);t[s].references--}for(var d=o(e,a),l=0;l<r.length;l++){var c=n(r[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}r=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},77:(e,t,n)=>{const o="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X3LACiofRMQXf8LGL8qW/likes/",a="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X3LACiofRMQXf8LGL8qW/comments/",r="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X3LACiofRMQXf8LGL8qW/reservations/";var i=n(379),s=n.n(i),d=n(795),l=n.n(d),c=n(569),p=n.n(c),m=n(565),u=n.n(m),v=n(216),f=n.n(v),h=n(589),g=n.n(h),b=n(426),y={};y.styleTagTransform=g(),y.setAttributes=u(),y.insert=p().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=f(),s()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals;const M=new class{constructor(e){this.arrMovies=e||[]}filterMovies=(e,t)=>{const n=[];for(let o=0;o<e.results.length;o+=1){const{title:a}=e.results[o],r=e.results[o].overview,{id:i}=e.results[o],s=`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${e.results[o].poster_path}`,d=e.results[o].release_date,l=t[i]||0;n.push({title:a,description:r,id:i,poster:s,releaseDate:d,like:l})}return n};getData=async()=>{const e=await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=c7aa7fee798829f3624f83b8919fe2b9&language=en-US&page=1",{method:"GET"}),t=await e.json(),n=await this.getMoviesLike();return this.arrMovies=this.filterMovies(t,n),this.arrMovies};addLikeToMovie=async e=>{const t={item_id:e},n=await fetch(o,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});if(201!==n.status)throw n};getMoviesLike=async()=>{const e=await fetch(o,{method:"GET"}),t=await e.json(),n={};return t.forEach((e=>{n[e.item_id]=e.likes})),n};addCommentToMovie=async e=>{const t=await fetch(a,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});if(201!==t.status)throw t};getMoviesComments=async e=>{const t=await fetch(`${a}?item_id=${e}`,{method:"GET"});return await t.json()};addReservationToMovie=async e=>{const t=await fetch(r,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});if(201!==t.status)throw t};getMovieReservation=async e=>{const t=await fetch(`${r}?item_id=${e}`,{method:"GET"});return await t.json()};getMovie=async e=>(await this.arrMovies.filter((t=>t.id===parseInt(e,10))))[0]},w=async()=>M.getData(),L=document.getElementById("topRatedMovies");window.addEventListener("DOMContentLoaded",(async()=>{await(async()=>{(await w()).forEach((e=>{const t=`\n      <a id="div${e.id}" class="top-rated-movie darker-background d-flex flex-column align-items-center p-4 m-3 col-sm-8 col-md-3 col-lg-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-comments>\n        <img class="top-rated-movie-poster" alt="Movie Poster" id="poster${e.id}" src="${e.poster}"/>\n        <h2 class="top-rated-movie-title light-color h5 text-center p-3 w-100" id="title${e.id}">${e.title}</h2>\n        <p class="top-rated-movie-release-date light-color h6" id="releaseDate${e.id}">${e.releaseDate}</p>\n        <div class="like-comment d-flex justify-content-between align-items-center">\n          <p class="text-danger h6 show-likes-part p-1 m-0" id="showLikes${e.id}">${e.like}</p>\n          <i class="fa-regular fa-heart light-color" id="like${e.id}"></i>\n          <i class="fa-regular fa-comment light-color" id="comment${e.id}"></i>\n          <i class="fa-regular fa-calendar light-color" id="reservation${e.id}"></i>\n        </div>\n      </a>`;L.insertAdjacentHTML("beforeend",t)}))})(),await(async()=>{const e=(await w()).length;document.getElementById("counterForMovies").innerHTML=`${e} Movies`})(),document.getElementById("popUp").innerHTML='\n  <div class="modal fade modal-dialog-scrollable" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">\n    <div class="modal-dialog modal-lg">\n      <div class="modal-content">\n        <div class="modal-header">\n          <h5 class="text-center" id="staticBackdropLabel">Movie Information</h5>\n          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n        </div>\n        <div class="modal-body p-4 d-flex flex-column align-items-center">\n          <p id="popUpMovieId" class="align-self-start"></p>\n          <div class="row">\n            <div class="col-6" id="popUpPoster"></div>\n            <div class="col-6 pt-5">\n              <h2 class="text-center h2 mt-5" id="popUpMovieTitle"></h2>\n              <p class="d-none" id="popUpMovieDescription"></p>\n            </div>\n          </div>\n          <div id="userDetailDiv">\n            <a class="btn mt-3 mb-3" data-toggle="collapse" href="#popUpMovieComments" role="button" aria-expanded="false"\n              aria-controls="popUpMovieComments" id="movieDetailCounter">\n            </a>\n            <div class="collapse d-flex flex-column align-self-start w-100 p-3 comments-div" id="popUpMovieDetail">\n            </div>\n          </div>\n        </div>\n        <form id="popUpForm" class="p-4">\n          <div class="form-group">\n            <label for="user-name" class="col-form-label">Enter your name:</label>\n            <input type="text" class="form-control" id="user-name">\n          </div>\n          <div class="form-group d-none" id="userCommentDiv">\n            <label for="user-comment" class="col-form-label">Your comments:</label>\n            <textarea class="form-control" id="user-comment"></textarea>\n          </div>\n          <div class="form-group d-none" id="reservationStartDateDiv">\n            <label for="reservationStartDate" class="col-form-label">Date start:</label>\n            <textarea class="form-control" id="reservationStartDate"></textarea>\n          </div>\n          <div class="form-group d-none" id="reservationEndDateDiv">\n            <label for="reservationEndDate" class="col-form-label">Date end:</label>\n            <textarea class="form-control" id="reservationEndDate"></textarea>\n          </div>\n          <div class="modal-footer">\n            <button type="submit" class="btn btn-dark">Make Reservation</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>',L.addEventListener("click",(async e=>{const t=e.target.id;let n=!1,o="";const a=document.getElementById("popUpPoster"),r=document.getElementById("popUpMovieId"),i=document.getElementById("popUpMovieTitle"),s=document.getElementById("popUpMovieDescription"),d=document.getElementById("popUpMovieDetail"),l=document.getElementById("movieDetailCounter"),c=document.getElementById("userCommentDiv"),p=document.getElementById("popUpMovieDescription"),m=document.getElementById("reservationEndDateDiv"),u=document.getElementById("reservationStartDateDiv");if(t.includes("like")){o=t.replace("like","");const e=document.getElementById(`showLikes${o}`);M.addLikeToMovie(o).then((()=>{e.innerHTML=parseInt(e.innerHTML,10)+1}))}if(t.includes("div")?(o=t.replace("div",""),n=!0):t.includes("poster")?(o=t.replace("poster",""),n=!0):t.includes("title")?(o=t.replace("title",""),n=!0):t.includes("releaseDate")?(o=t.replace("releaseDate",""),n=!0):t.includes("poster")?(o=t.replace("poster",""),n=!0):t.includes("comment")&&(o=t.replace("comment",""),n=!0),n){const e=await M.getMovie(o),t=await M.getMoviesComments(o),n=(e=>e.length)(t);p.classList.remove("d-none"),c.classList.remove("d-none"),u.classList.add("d-none"),m.classList.add("d-none"),l.innerHTML="",r.innerHTML="",i.innerHTML="",a.innerHTML="",d.innerHTML="",l.innerHTML=`${n} Comments`,r.innerHTML=e.id,a.innerHTML=`<img class="w-100" src="${e.poster}" alt="pop-up-poster">`,i.innerHTML=e.title,s.innerHTML=e.description,t.forEach((e=>{const t=`<div class="user-detail p-4">\n            <h3 class="m-0 h5">User Name: ${e.username}</h3>\n            <p class="m-0">User review: ${e.comment}</p>\n            <p class="m-0">Creation date: ${e.creation_date}\n          </div>`;d.insertAdjacentHTML("beforeend",t)}))}if(t.includes("reservation")){o=t.replace("reservation",""),r.innerHTML="",i.innerHTML="",a.innerHTML="",d.innerHTML="",l.innerHTML="";const e=await M.getMovie(o);r.innerHTML=e.id,i.innerHTML=e.title,a.innerHTML=`<img class="w-100" src="${e.poster}" alt="pop-up-poster">`,p.classList.add("d-none"),c.classList.add("d-none"),u.classList.remove("d-none"),m.classList.remove("d-none");const n=await M.getMovieReservation(o),s=(e=>e.length)(n);l.innerHTML=`${s} Reservations`,n.forEach((e=>{const t=`<div class="user-detail p-3">\n            <h3 class="m-0 h5">User Name: ${e.username}</h3>\n            <p class="m-0">Date start: ${e.date_start}</p>\n            <p class="m-0">Date end: ${e.date_end}</p>\n          </div>`;d.insertAdjacentHTML("beforeend",t)}))}})),document.getElementById("popUpForm").addEventListener("submit",(async e=>{e.preventDefault();const t=document.getElementById("user-name"),n=document.getElementById("user-comment"),o=document.getElementById("popUpMovieId"),a=document.getElementById("reservationEndDate"),r=document.getElementById("reservationStartDate"),i=o.innerText,s=parseInt(i,10),d={item_id:s,username:t.value,comment:n.value},l={item_id:s,username:t.value,date_start:r.value,date_end:a.value};await M.addCommentToMovie(d),await M.addReservationToMovie(l),t.value="",n.value="",r.value="",a.value=""}))}))},251:(e,t,n)=>{e.exports=n.p+"ae33feee62c2abd62f00.ttf"}},e=>{e(e.s=77)}]);