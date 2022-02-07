
					       !function(){"use strict";function t(t,e){return Array.prototype.slice.call((e||document).querySelectorAll(t))}function e(t){if(t.closest)return t.closest("[data-a11y-toggle]");for(;t;){if(1===t.nodeType&&t.hasAttribute("data-a11y-toggle"))return t;t=t.parentNode}return null}function a(t){var e=t&&n[t.getAttribute("aria-controls")];if(!e)return!1;var a=i["#"+e.id],r="false"===e.getAttribute("aria-hidden");e.setAttribute("aria-hidden",r),a.forEach(function(t){t.setAttribute("aria-expanded",!r)})}var r=0,i={},n={},o=function(e){i=t("[data-a11y-toggle]",e).reduce(function(t,e){var a="#"+e.getAttribute("data-a11y-toggle");return t[a]=t[a]||[],t[a].push(e),t},i);var a=Object.keys(i);a.length&&t(a).forEach(function(t){var e=i["#"+t.id],a=t.hasAttribute("data-a11y-toggle-open"),o=[];e.forEach(function(e){e.id||e.setAttribute("id","a11y-toggle-"+r++),e.setAttribute("aria-controls",t.id),e.setAttribute("aria-expanded",a),o.push(e.id)}),t.setAttribute("aria-hidden",!a),t.hasAttribute("aria-labelledby")||t.setAttribute("aria-labelledby",o.join(" ")),n[t.id]=t})};document.addEventListener("DOMContentLoaded",function(){o()}),document.addEventListener("click",function(t){var r=e(t.target);a(r)}),document.addEventListener("keyup",function(t){if(13===t.which||32===t.which){var r=e(t.target);r&&"button"===r.getAttribute("role")&&a(r)}}),window&&(window.a11yToggle=o)}();

						var toggleComments = document.querySelectorAll(['.item .post-comment', '.item .backdrop', '.item .post-comments']),
						closeComment = document.querySelector('.item .close-comment'),
						backdrop = document.querySelector('.backdrop'),
						commentSelect = document.querySelector('#comments'),
						menuToggle = document.querySelector('.header-wrapper .header-section .LinkList .button-icon.menu'),
						menuWidget = document.querySelector('.header-wrapper .header-section .LinkList .menu-widget'),
						searchToggle = document.querySelector('.header-wrapper .header-section .LinkList .button-icon.search-menu'),
						headerScroll = document.querySelector('.header-wrapper'),
						innerScroll = document.querySelector('.clearfix');

						const headerScrolls = window.getComputedStyle(headerScroll, null).getPropertyValue("background-color"),
						headerScrollBg = window.getComputedStyle(document.querySelector('.header-height'), null).getPropertyValue("background-color");

						menuToggle.addEventListener('click', function() {
						menuWidget.classList.toggle('active');
						});

						searchToggle.addEventListener('click', function() {
						document.body.classList.toggle('search-active');
						document.querySelector('.main-top-wrapper .search-page-form input').focus();
						});


						toggleComments.forEach((toggle) => {
						toggle.addEventListener('click', function() {
						backdrop.classList.toggle('active');
						commentSelect.classList.toggle('active');
						});
						});

						function checkOffsetHeader() {
						function getRectTop(el) {
						var rect = el.getBoundingClientRect();
						return rect.top;
						}

						if ((getRectTop(headerScroll) + document.body.scrollTop) + headerScroll.offsetHeight >= (getRectTop(innerScroll) + document.body.scrollTop) - 10 + (getRectTop(innerScroll) + document.body.scrollTop) * 4)
						headerScroll.style.backgroundColor = headerScrollBg;
						if ((getRectTop(headerScroll) + document.body.scrollTop) + headerScroll.offsetHeight <= (getRectTop(innerScroll) + document.body.scrollTop) * 4)
						headerScroll.style.backgroundColor = headerScrolls;
						}

						document.addEventListener("scroll", function() {
						checkOffsetHeader();
						});
						//]]>
						//<![CDATA[
							!function(t,e){t.InfiniteScroll=function(n){function r(t,n){return n=n||e,n.querySelectorAll(t)}function o(t){return void 0!==t}function a(t){return"function"==typeof t}function i(t,e){t=t||{};for(var n in e)t[n]="object"==typeof e[n]?i(t[n],e[n]):e[n];return t}function s(t,e,n){return o(t)?o(e)?void(o(n)?g[t][n]=e:g[t].push(e)):g[t]:g}function d(t,e){o(e)?delete g[t][e]:g[t]=[]}function l(t,e){if(o(g[t]))for(var n in g[t])g[t][n](e)}function f(){return L.innerHTML=p.text.loading,T=!0,y?(M.classList.add(p.state.loading),l("loading",[p]),void u(y,function(t,n){M.className=x+" "+p.state.load,h=e.createElement("div"),h.innerHTML=t;var o=r("title",h),a=r(p.target.post,h),i=r(p.target.anchors+" "+p.target.anchor,h),s=r(p.target.post,H);if(o=o&&o[0]?o[0].innerHTML:"",a.length&&s.length){var d=s[s.length-1];e.title=o,d.insertAdjacentHTML("afterend",'<span class="fi" id="#fi:'+j+'"></span>'),h=e.createElement("div");for(var f=0,u=a.length;u>f;++f)h.appendChild(a[f]);d.insertAdjacentHTML("afterend",h.innerHTML),c(),y=i.length?i[0].href:!1,T=!1,j++,l("load",[p,t,n])}},function(t,e){M.classList.add(p.state.error),T=!1,c(1),l("error",[p,t,e])})):(M.classList.add(p.state.loaded),L.innerHTML=p.text.loaded,l("loaded",[p]))}function c(t){if(L.innerHTML="",v){h.innerHTML=p.text[t?"error":"load"];var e=h.firstChild;e.onclick=function(){return 2===p.type&&(v=!1),f(),!1},L.appendChild(e)}}var u="infinite-scroll-state-",p={target:{posts:".posts",post:".post",anchors:".anchors",anchor:".anchor"},text:{load:"%s",loading:"%s",loaded:"%s",error:"%s"},state:{load:u+"load",loading:u+"loading",loaded:u+"loaded",error:u+"error"}},g={load:[],loading:[],loaded:[],error:[]};p=i(p,n||{}),p.on=s,p.off=d;var h=null,u=function(e,n,r){if(t.XMLHttpRequest){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(4===o.readyState){if(200!==o.status)return void(r&&a(r)&&r(o.responseText,o));n&&a(n)&&n(o.responseText,o)}},o.open("GET",e),o.send()}},v=1!==p.type,T=!1,H=r(p.target.posts)[0],L=r(p.target.anchors)[0],y=r(p.target.anchor,L),m=e.body,M=e.documentElement,x=M.className||"",E=H.offsetTop+H.offsetHeight,b=t.innerHeight,w=0,S=null,j=1;if(y.length){y=y[0].href,H.insertAdjacentHTML("afterbegin",'<span class="fi" id="#fi:0"></span>'),h=e.createElement("div"),c();var A=function(){E=H.offsetTop+H.offsetHeight,b=t.innerHeight,w=m.scrollTop||M.scrollTop,T||E>w+b||f()};A(),0!==p.type&&t.addEventListener("scroll",function(){lazyLoadInstance.update()||v||(S&&t.clearTimeout(S),S=t.setTimeout(A,500))},!1)}return p}}(window,document);
							//]]>
							var infinite_scroll = new InfiniteScroll({
							type: 0,
							target: {
							posts: '.blog-posts',
							post: '.blog-post',
							anchors: '.blog-pager',
							anchor: '.blog-pager-older-link'
							},
							text: {
							load: `<span class='load'>
					
						
					Load More
						
				
						
				</span>`,
							loading: `<span class='loading'>
					
						
					Loading
						
				
						
				</span>`,
							loaded: `<span class='loaded'>
					
						
					There are no other posts
						
				
						
				</span>`,
							error: `<span class='error'>
					
						
					Error loading post
						
				
						
				</span>`
							}
							});
						
						
					</script>
