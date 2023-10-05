"use strict";(self.webpackChunkvijayarajsuyambu=self.webpackChunkvijayarajsuyambu||[]).push([[691],{8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return N},P:function(){return E},S:function(){return F},_:function(){return l},a:function(){return i},b:function(){return d},g:function(){return u},h:function(){return o}});var r=a(7294),n=(a(2369),a(5697)),s=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,s,l,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=l(e,m);return r.createElement(r.Fragment,null,r.createElement(p,i({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:o}=e,c=l(e,f);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=l(e,y);const o=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(h,i({},s,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:`${t}-${s}-${a}`,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var v;h.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,a=l(e,w);return t?r.createElement(b,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const N=function(e){return r.createElement(r.Fragment,null,r.createElement(b,i({},e)),r.createElement("noscript",null,r.createElement(b,i({},e,{shouldLoad:!0}))))};N.displayName="MainImage",N.propTypes=b.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],L=["style","className"],x=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},C={image:s().object.isRequired,alt:S},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],P=["style","className"],$=new Set;let j,I;const O=function(e){let{as:t="div",image:n,style:s,backgroundColor:d,className:u,class:m,onStartLoad:p,onLoad:g,onError:f}=e,y=l(e,T);const{width:h,height:b,layout:v}=n,w=c(h,b,v),{style:E,className:N}=w,k=l(w,P),L=(0,r.useRef)(),x=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(u=m);const S=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(v,h,b);return(0,r.useEffect)((()=>{j||(j=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return I=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void $.add(x);if(I&&$.has(x))return;let t,r;return j.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;L.current&&(L.current.innerHTML=a(i({isLoading:!0,isLoaded:$.has(x),image:n},y)),$.has(x)||(t=requestAnimationFrame((()=>{L.current&&(r=l(L.current,x,$,s,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{$.has(x)&&I&&(L.current.innerHTML=I(i({isLoading:$.has(x),isLoaded:$.has(x),image:n},y)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},k,{style:i({},E,s,{backgroundColor:d}),className:`${N}${u?` ${u}`:""}`,ref:L,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},A=(0,r.memo)((function(e){return e.image?(0,r.createElement)(O,e):null}));A.propTypes=C,A.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function R(e){return function(t){let{src:a,__imageData:n,__error:s}=t,o=l(t,q);return s&&console.warn(s),n?r.createElement(e,i({image:n},o)):(console.warn("Image not loaded",a),null)}}const _=R((function(e){let{as:t="div",className:a,class:n,style:s,image:o,loading:m="lazy",imgClassName:p,imgStyle:f,backgroundColor:y,objectFit:h,objectPosition:b}=e,v=l(e,k);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=i({objectFit:h,objectPosition:b,backgroundColor:y},f);const{width:w,height:S,layout:C,images:T,placeholder:P,backgroundColor:$}=o,j=c(w,S,C),{style:I,className:O}=j,A=l(j,L),q={fallback:void 0,sources:[]};return T.fallback&&(q.fallback=i({},T.fallback,{srcSet:T.fallback.srcSet?x(T.fallback.srcSet):void 0})),T.sources&&(q.sources=T.sources.map((e=>i({},e,{srcSet:x(e.srcSet)})))),r.createElement(t,i({},A,{style:i({},I,s,{backgroundColor:y}),className:`${O}${a?` ${a}`:""}`}),r.createElement(g,{layout:C,width:w,height:S},r.createElement(E,i({},u(P,!1,C,w,S,$,h,b))),r.createElement(N,i({"data-gatsby-image-ssr":"",className:p},v,d("eager"===m,!1,q,m,f)))))})),z=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},W=new Set(["fixed","fullWidth","constrained"]),M={src:s().string.isRequired,alt:S,width:z,height:z,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};_.displayName="StaticImage",_.propTypes=M;const F=R(A);F.displayName="StaticImage",F.propTypes=M},2369:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,i=new RegExp("^"+s.source),l=new RegExp(s.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,i=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];s&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),s=!1,l=i,i=!0,o++):i&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=i,i=!1,s=!0):(s=r(c)===c&&n(c)!==c,l=i,i=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},3598:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7294),n=a(1883);const s=e=>{let{isCurrent:t}=e;return t?{className:"nav-link active"}:{className:"nav-link"}},i=e=>r.createElement(n.Link,Object.assign({getProps:s},e)),l=e=>{let{siteTitle:t}=e;return r.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-primary"},r.createElement("div",{className:"container-fluid"},r.createElement(n.Link,{to:"/",className:"navbar-brand",href:"#"},t),r.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#main-navbar","aria-controls":"main-navbar","aria-expanded":"false","aria-label":"Toggle navigation"},r.createElement("span",{className:"navbar-toggler-icon"})),r.createElement("div",{className:"collapse navbar-collapse",id:"main-navbar"},r.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-md-0"},r.createElement("li",{className:"nav-item"},r.createElement(i,{to:"/"},"Home")),r.createElement("li",{className:"nav-item"},r.createElement(i,{to:"/about"},"About"))))))};l.defaultProps={siteTitle:""};var o=l;var c=e=>{var t;let{children:a}=e;const s=(0,n.useStaticQuery)("3649515864");return r.createElement("div",{className:"container-fluid p-0"},r.createElement(o,{siteTitle:(null===(t=s.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),r.createElement("main",null,a))}},9454:function(e,t,a){a.d(t,{p:function(){return s}});var r=a(7294),n=a(1883);const s=e=>{let{title:t,description:a,pathname:s,children:i}=e;const{title:l,description:o,siteUrl:c}=(0,n.useStaticQuery)("63159454").site.siteMetadata,d={title:t||l,description:a||o,url:`${c}${s||""}`};return r.createElement(r.Fragment,null,r.createElement("title",null,d.title),r.createElement("meta",{name:"description",content:d.description}),r.createElement("meta",{name:"twitter:title",content:d.title}),r.createElement("meta",{name:"twitter:url",content:d.url}),r.createElement("meta",{name:"twitter:description",content:d.description}),i)}},7200:function(e,t,a){a.r(t),a.d(t,{Head:function(){return o}});var r=a(7294),n=a(1883),s=a(8032),i=a(3598),l=a(9454);t.default=()=>r.createElement(i.Z,null,r.createElement("section",{className:"py-5 text-center container"},r.createElement("div",{className:"row py-lg-5"},r.createElement("div",{className:"col-lg-6 col-md-8 mx-auto"},r.createElement("h1",{className:"fw-light"},"Hello world ! "),r.createElement("p",{className:"lead text-muted"}," Welcome to this Boostrap 5 Gatsby Starter"),r.createElement(s.S,{src:"../images/gatsby-astronaut.png",width:300,quality:95,formats:["AUTO","WEBP"],alt:"A Gatsby astronaut",className:"img-fluid",__imageData:a(2713)}))),r.createElement("div",{className:"row"},r.createElement(n.Link,{to:"/about/",className:"btn btn-primary my-2"},"About"),r.createElement(n.Link,{to:"/page-2/",className:"btn btn-secondary my-2"},"Go to page 2"))));const o=()=>r.createElement(l.p,null)},2713:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/Portfolio2/static/6d91c86c0fde632ba4cd01062fd9ccfa/c0d5f/gatsby-astronaut.png","srcSet":"/Portfolio2/static/6d91c86c0fde632ba4cd01062fd9ccfa/1096c/gatsby-astronaut.png 75w,\\n/Portfolio2/static/6d91c86c0fde632ba4cd01062fd9ccfa/01986/gatsby-astronaut.png 150w,\\n/Portfolio2/static/6d91c86c0fde632ba4cd01062fd9ccfa/c0d5f/gatsby-astronaut.png 300w,\\n/Portfolio2/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5463/gatsby-astronaut.png 600w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/Portfolio2/static/6d91c86c0fde632ba4cd01062fd9ccfa/a18cc/gatsby-astronaut.webp 75w,\\n/Portfolio2/static/6d91c86c0fde632ba4cd01062fd9ccfa/7ddcc/gatsby-astronaut.webp 150w,\\n/Portfolio2/static/6d91c86c0fde632ba4cd01062fd9ccfa/dd79f/gatsby-astronaut.webp 300w,\\n/Portfolio2/static/6d91c86c0fde632ba4cd01062fd9ccfa/11f71/gatsby-astronaut.webp 600w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":300,"height":300}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-4cb2fe819c6ac18a7224.js.map