System.register(["jimu-core","jimu-arcgis","esri/Graphic","esri/layers/GraphicsLayer","esri/geometry/support/webMercatorUtils"],(function(e,i){var t={},o={},n={},r={},a={};return{setters:[function(e){t.React=e.React,t.css=e.css,t.jsx=e.jsx},function(e){o.JimuMapViewComponent=e.JimuMapViewComponent},function(e){n.default=e.default},function(e){r.default=e.default},function(e){a.webMercatorToGeographic=e.webMercatorToGeographic}],execute:function(){e((()=>{var e={2089:e=>{"use strict";e.exports=n},2686:e=>{"use strict";e.exports=o},4272:e=>{"use strict";e.exports=a},9244:e=>{"use strict";e.exports=t},9620:e=>{"use strict";e.exports=r}},i={};function l(t){var o=i[t];if(void 0!==o)return o.exports;var n=i[t]={exports:{}};return e[t](n,n.exports,l),n.exports}l.d=(e,i)=>{for(var t in i)l.o(i,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:i[t]})},l.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="";var s={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(s),l.d(s,{__set_webpack_public_path__:()=>x,default:()=>w});var e=l(9244),i=l(2686),t=l(2089),o=l(9620),n=l(4272),r=function(e,i,t,o){return new(t||(t=Promise))((function(n,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function l(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var i;e.done?n(e.value):(i=e.value,i instanceof t?i:new t((function(e){e(i)}))).then(a,l)}s((o=o.apply(e,i||[])).next())}))};const{useCallback:a,useEffect:u,useMemo:d,useRef:c,useState:p}=e.React,f={apiKey:"",defaultLatitude:41.0351,defaultLongitude:28.9833,defaultPlaceLabel:"Istanbul",refreshMinutes:10,language:"tr",units:"metric"},m=e.css`
  .ow-widget {
    background: #f8fafc;
    color: #172033;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    height: 100%;
    overflow: auto;
    padding: 12px;
  }

  .ow-panel {
    background: #ffffff;
    border: 1px solid #d7e1e8;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-height: 100%;
    padding: 12px;
  }

  .ow-header {
    align-items: flex-start;
    display: flex;
    gap: 10px;
  }

  .ow-icon {
    align-items: center;
    background: #fef3c7;
    border-radius: 8px;
    color: #92400e;
    display: flex;
    flex: 0 0 44px;
    height: 44px;
    justify-content: center;
    overflow: hidden;
  }

  .ow-title {
    flex: 1 1 auto;
    min-width: 0;
  }

  .ow-city {
    color: #111827;
    font-size: 15px;
    font-weight: 800;
    line-height: 1.2;
    margin: 0;
  }

  .ow-desc {
    color: #536173;
    font-size: 12px;
    margin-top: 3px;
    text-transform: capitalize;
  }

  .ow-temp-row {
    align-items: baseline;
    display: flex;
    gap: 8px;
  }

  .ow-temp {
    color: #0f766e;
    font-size: 34px;
    font-weight: 800;
    line-height: 1;
  }

  .ow-feels {
    color: #526071;
    font-size: 12px;
  }

  .ow-grid {
    display: grid;
    gap: 8px;
    grid-template-columns: 1fr 1fr;
  }

  .ow-metric {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 7px;
    padding: 8px;
  }

  .ow-metric span {
    color: #64748b;
    display: block;
    font-size: 11px;
    font-weight: 700;
    line-height: 1.2;
  }

  .ow-metric strong {
    color: #172033;
    display: block;
    font-size: 14px;
    font-weight: 800;
    margin-top: 4px;
    min-height: 18px;
  }

  .ow-actions {
    display: grid;
    gap: 8px;
  }

  .ow-button {
    align-items: center;
    background: #0f766e;
    border: 1px solid #0f766e;
    border-radius: 7px;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    font-size: 12px;
    font-weight: 800;
    justify-content: center;
    min-height: 34px;
    padding: 7px 10px;
  }

  .ow-button.secondary {
    background: #ffffff;
    color: #0f766e;
  }

  .ow-button:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }

  .ow-status {
    border-radius: 7px;
    font-size: 12px;
    line-height: 1.4;
    padding: 8px;
  }

  .ow-status.info {
    background: #eff6ff;
    color: #1d4ed8;
  }

  .ow-status.error {
    background: #fff1f2;
    color: #be123c;
  }

  .ow-footer {
    color: #64748b;
    font-size: 11px;
    line-height: 1.35;
  }
`,v=(e,i=0)=>{const t=Number(e);return Number.isFinite(t)?t.toFixed(i):"-"},g=(e,i="Harita merkezi")=>{if(!e)return null;const t=e.spatialReference;if(null==t?void 0:t.isWGS84)return{lat:e.y,lon:e.x,label:i};if(null==t?void 0:t.isWebMercator){const t=(0,n.webMercatorToGeographic)(e);return{lat:t.y,lon:t.x,label:i}}return null},w=n=>{var l,s,w,x,b,h,y,j,k,N,S,M,z;const P=d((()=>{var e,i,t;return Object.assign(Object.assign({},f),n.config?null!==(t=null===(i=(e=n.config).asMutable)||void 0===i?void 0:i.call(e,{deep:!0}))&&void 0!==t?t:n.config:{})}),[n.config]),[W,L]=p(null),[C,O]=p(!1),[G,H]=p(""),[_,I]=p("Hazir."),[R,$]=p(null),[E,V]=p(null),[A,F]=p(null),[T,K]=p(!1),U=c(null),B=c(null),J=c(null),D=c(null),X=String(P.apiKey||"").trim(),Y=P.units||"metric",q=P.language||"tr",Q=(e=>"imperial"===e?"F":"standard"===e?"K":"C")(Y),Z=(e=>"imperial"===e?"mph":"m/s")(Y),ee=null===(l=n.useMapWidgetIds)||void 0===l?void 0:l[0],ie=a((e=>r(void 0,void 0,void 0,(function*(){var i;if(!X)return H("OpenWeather API key ayarlardan girilmeli."),void I("API key bekleniyor.");null===(i=B.current)||void 0===i||i.abort();const t=new AbortController;B.current=t,O(!0),H(""),I(`${e.label} icin hava durumu aliniyor...`);try{const i=new URLSearchParams({lat:String(e.lat),lon:String(e.lon),appid:X,units:Y,lang:q}),o=yield fetch(`https://api.openweathermap.org/data/2.5/weather?${i.toString()}`,{signal:t.signal}),n=yield o.json();if(!o.ok||n.cod&&200!==Number(n.cod))throw new Error(n.message||`OpenWeather istegi basarisiz (${o.status})`);L(n),$(new Date),V(e),U.current=e,I(`${e.label} guncellendi.`)}catch(e){"AbortError"!==e.name&&(H(e instanceof Error?e.message:String(e)),I("Hava durumu alinamadi."))}finally{O(!1)}}))),[X,q,Y]),te=a((()=>{ie({lat:Number(P.defaultLatitude),lon:Number(P.defaultLongitude),label:P.defaultPlaceLabel||"Varsayilan konum"})}),[P.defaultLatitude,P.defaultLongitude,P.defaultPlaceLabel,ie]),oe=a((()=>{var e;null===(e=J.current)||void 0===e||e.remove(),J.current=null,K(!1)}),[]),ne=a((()=>{const e=null==A?void 0:A.view;if(!e)return null;if(D.current)return D.current;const i=new o.default({id:"openweather-widget-selected-point",title:"OpenWeather Selected Point"});return e.map.add(i),D.current=i,i}),[A]),re=a((e=>{const i=ne();i&&(i.removeAll(),i.add(new t.default({geometry:e,symbol:{type:"simple-marker",style:"circle",size:14,color:[15,118,110,.92],outline:{color:[255,255,255,1],width:2}}})))}),[ne]),ae=a((()=>{const e=null==A?void 0:A.view;e?(oe(),H(""),K(!0),I("Haritada hava durumu alinacak noktaya tiklayin."),J.current=e.on("click",(e=>{var i;null===(i=e.stopPropagation)||void 0===i||i.call(e);const t=e.mapPoint,o=g(t,"Secilen nokta");if(oe(),!o)return H("Secilen nokta WGS84 veya Web Mercator koordinatina cevrilemedi."),void I("Nokta okunamadi.");re(t),ie(o)}))):H("Once widget ayarlarindan bir Map widget secilmeli.")}),[oe,re,ie,A]),le=a((()=>{var e;const i=null===(e=null==A?void 0:A.view)||void 0===e?void 0:e.center,t=g(i,"Harita merkezi");t?(i&&re(i),ie(t)):H("Harita merkezi WGS84 veya Web Mercator koordinatinda okunamadi.")}),[re,ie,A]);u((()=>(te(),()=>{var e;return null===(e=B.current)||void 0===e?void 0:e.abort()})),[te]),u((()=>()=>{var e;oe();const i=D.current,t=null===(e=null==A?void 0:A.view)||void 0===e?void 0:e.map;i&&t&&t.remove(i),D.current=null}),[oe,A]),u((()=>{const e=Number(P.refreshMinutes);if(!Number.isFinite(e)||e<=0)return;const i=window.setInterval((()=>{U.current&&ie(U.current)}),60*e*1e3);return()=>window.clearInterval(i)}),[P.refreshMinutes,ie]);const se=(null===(w=null===(s=null==W?void 0:W.weather)||void 0===s?void 0:s[0])||void 0===w?void 0:w.description)||"Veri yok",ue=null===(b=null===(x=null==W?void 0:W.weather)||void 0===x?void 0:x[0])||void 0===b?void 0:b.icon,de=ue?`https://openweathermap.org/img/wn/${ue}@2x.png`:"",ce=(null==W?void 0:W.name)||(null==E?void 0:E.label)||P.defaultPlaceLabel||"Konum",pe=R?R.toLocaleString("tr-TR"):"-",fe=E?`${v(E.lat,4)}, ${v(E.lon,4)}`:"-";return(0,e.jsx)("div",{css:m,className:"ow-widget jimu-widget"},ee&&(0,e.jsx)(i.JimuMapViewComponent,{useMapWidgetId:ee,onActiveViewChange:F}),(0,e.jsx)("div",{className:"ow-panel"},(0,e.jsx)("div",{className:"ow-header"},(0,e.jsx)("div",{className:"ow-icon"},de?(0,e.jsx)("img",{src:de,alt:"",width:"54",height:"54"}):"WX"),(0,e.jsx)("div",{className:"ow-title"},(0,e.jsx)("h3",{className:"ow-city"},ce),(0,e.jsx)("div",{className:"ow-desc"},se))),(0,e.jsx)("div",{className:"ow-temp-row"},(0,e.jsx)("div",{className:"ow-temp"},v(null===(h=null==W?void 0:W.main)||void 0===h?void 0:h.temp,1)," ",Q),(0,e.jsx)("div",{className:"ow-feels"},"Hissedilen ",v(null===(y=null==W?void 0:W.main)||void 0===y?void 0:y.feels_like,1)," ",Q)),(0,e.jsx)("div",{className:"ow-grid"},(0,e.jsx)("div",{className:"ow-metric"},(0,e.jsx)("span",null,"Ruzgar"),(0,e.jsx)("strong",null,v(null===(j=null==W?void 0:W.wind)||void 0===j?void 0:j.speed,1)," ",Z)),(0,e.jsx)("div",{className:"ow-metric"},(0,e.jsx)("span",null,"Yon"),(0,e.jsx)("strong",null,(e=>{if(!Number.isFinite(Number(e)))return"-";const i=["N","NE","E","SE","S","SW","W","NW"];return i[Math.round(Number(e)/45)%i.length]})(null===(k=null==W?void 0:W.wind)||void 0===k?void 0:k.deg)," ",v(null===(N=null==W?void 0:W.wind)||void 0===N?void 0:N.deg)," deg")),(0,e.jsx)("div",{className:"ow-metric"},(0,e.jsx)("span",null,"Nem"),(0,e.jsx)("strong",null,v(null===(S=null==W?void 0:W.main)||void 0===S?void 0:S.humidity),"%")),(0,e.jsx)("div",{className:"ow-metric"},(0,e.jsx)("span",null,"Basinc"),(0,e.jsx)("strong",null,v(null===(M=null==W?void 0:W.main)||void 0===M?void 0:M.pressure)," hPa")),(0,e.jsx)("div",{className:"ow-metric"},(0,e.jsx)("span",null,"Bulut"),(0,e.jsx)("strong",null,v(null===(z=null==W?void 0:W.clouds)||void 0===z?void 0:z.all),"%")),(0,e.jsx)("div",{className:"ow-metric"},(0,e.jsx)("span",null,"Gorus"),(0,e.jsx)("strong",null,(null==W?void 0:W.visibility)?`${v(W.visibility/1e3,1)} km`:"-"))),(0,e.jsx)("div",{className:"ow-actions"},(0,e.jsx)("button",{className:"ow-button",disabled:C||!A||T,onClick:ae},T?"Haritada nokta bekleniyor":"Haritadan nokta sec"),(0,e.jsx)("button",{className:"ow-button secondary",disabled:C||!A,onClick:le},"Harita merkezinden al"),(0,e.jsx)("button",{className:"ow-button secondary",disabled:C,onClick:te},"Varsayilan konum")),(0,e.jsx)("div",{className:"ow-status "+(G?"error":"info")},G||_),(0,e.jsx)("div",{className:"ow-footer"},(0,e.jsx)("div",null,"Koordinat: ",fe),(0,e.jsx)("div",null,"Guncelleme: ",pe))))};function x(e){l.p=e}})(),s})())}}}));