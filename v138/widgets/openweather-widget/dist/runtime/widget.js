System.register(["jimu-core","jimu-arcgis","esri/geometry/support/webMercatorUtils"],(function(e,i){var o={},n={},t={};return{setters:[function(e){o.React=e.React,o.css=e.css,o.jsx=e.jsx},function(e){n.JimuMapViewComponent=e.JimuMapViewComponent},function(e){t.webMercatorToGeographic=e.webMercatorToGeographic}],execute:function(){e((()=>{var e={2686:e=>{"use strict";e.exports=n},4272:e=>{"use strict";e.exports=t},9244:e=>{"use strict";e.exports=o}},i={};function a(o){var n=i[o];if(void 0!==n)return n.exports;var t=i[o]={exports:{}};return e[o](t,t.exports,a),t.exports}a.d=(e,i)=>{for(var o in i)a.o(i,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:i[o]})},a.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="";var l={};return a.p=window.jimuConfig.baseUrl,(()=>{"use strict";a.r(l),a.d(l,{__set_webpack_public_path__:()=>g,default:()=>v});var e=a(9244),i=a(2686),o=a(4272),n=function(e,i,o,n){return new(o||(o=Promise))((function(t,a){function l(e){try{s(n.next(e))}catch(e){a(e)}}function r(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var i;e.done?t(e.value):(i=e.value,i instanceof o?i:new o((function(e){e(i)}))).then(l,r)}s((n=n.apply(e,i||[])).next())}))};const{useCallback:t,useEffect:r,useMemo:s,useRef:d,useState:u}=e.React,c={apiKey:"",defaultLatitude:41.0351,defaultLongitude:28.9833,defaultPlaceLabel:"Istanbul",refreshMinutes:10,language:"tr",units:"metric"},p=e.css`
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
`,f=(e,i=0)=>{const o=Number(e);return Number.isFinite(o)?o.toFixed(i):"-"},m=(e,i="Harita merkezi")=>{if(!e)return null;const n=e.spatialReference;if(null==n?void 0:n.isWGS84)return{lat:e.y,lon:e.x,label:i};if(null==n?void 0:n.isWebMercator){const n=(0,o.webMercatorToGeographic)(e);return{lat:n.y,lon:n.x,label:i}}return null},v=o=>{var a,l,v,g,x,w,b,h,y,j,k,N,S;const M=s((()=>{var e,i,n;return Object.assign(Object.assign({},c),o.config?null!==(n=null===(i=(e=o.config).asMutable)||void 0===i?void 0:i.call(e,{deep:!0}))&&void 0!==n?n:o.config:{})}),[o.config]),[z,P]=u(null),[W,L]=u(!1),[C,H]=u(""),[O,_]=u("Hazir."),[G,I]=u(null),[R,$]=u(null),[E,V]=u(null),[F,T]=u(!1),A=d(null),K=d(null),U=d(null),B=String(M.apiKey||"").trim(),J=M.units||"metric",D=M.language||"tr",X=(e=>"imperial"===e?"F":"standard"===e?"K":"C")(J),Y=(e=>"imperial"===e?"mph":"m/s")(J),q=null===(a=o.useMapWidgetIds)||void 0===a?void 0:a[0],Q=t((e=>n(void 0,void 0,void 0,(function*(){var i;if(!B)return H("OpenWeather API key ayarlardan girilmeli."),void _("API key bekleniyor.");null===(i=K.current)||void 0===i||i.abort();const o=new AbortController;K.current=o,L(!0),H(""),_(`${e.label} icin hava durumu aliniyor...`);try{const i=new URLSearchParams({lat:String(e.lat),lon:String(e.lon),appid:B,units:J,lang:D}),n=yield fetch(`https://api.openweathermap.org/data/2.5/weather?${i.toString()}`,{signal:o.signal}),t=yield n.json();if(!n.ok||t.cod&&200!==Number(t.cod))throw new Error(t.message||`OpenWeather istegi basarisiz (${n.status})`);P(t),I(new Date),$(e),A.current=e,_(`${e.label} guncellendi.`)}catch(e){"AbortError"!==e.name&&(H(e instanceof Error?e.message:String(e)),_("Hava durumu alinamadi."))}finally{L(!1)}}))),[B,D,J]),Z=t((()=>{Q({lat:Number(M.defaultLatitude),lon:Number(M.defaultLongitude),label:M.defaultPlaceLabel||"Varsayilan konum"})}),[M.defaultLatitude,M.defaultLongitude,M.defaultPlaceLabel,Q]),ee=t((()=>{var e;null===(e=U.current)||void 0===e||e.remove(),U.current=null,T(!1)}),[]),ie=t((()=>{const e=null==E?void 0:E.view;e?(ee(),H(""),T(!0),_("Haritada hava durumu alinacak noktaya tiklayin."),U.current=e.on("click",(e=>{var i;null===(i=e.stopPropagation)||void 0===i||i.call(e);const o=e.mapPoint,n=m(o,"Secilen nokta");if(ee(),!n)return H("Secilen nokta WGS84 veya Web Mercator koordinatina cevrilemedi."),void _("Nokta okunamadi.");Q(n)}))):H("Once widget ayarlarindan bir Map widget secilmeli.")}),[ee,Q,E]),oe=t((()=>{var e;const i=null===(e=null==E?void 0:E.view)||void 0===e?void 0:e.center,o=m(i,"Harita merkezi");o?Q(o):H("Harita merkezi WGS84 veya Web Mercator koordinatinda okunamadi.")}),[Q,E]);r((()=>(Z(),()=>{var e;return null===(e=K.current)||void 0===e?void 0:e.abort()})),[Z]),r((()=>()=>{ee()}),[ee]),r((()=>{const e=Number(M.refreshMinutes);if(!Number.isFinite(e)||e<=0)return;const i=window.setInterval((()=>{A.current&&Q(A.current)}),60*e*1e3);return()=>window.clearInterval(i)}),[M.refreshMinutes,Q]);const ne=(null===(v=null===(l=null==z?void 0:z.weather)||void 0===l?void 0:l[0])||void 0===v?void 0:v.description)||"Veri yok",te=null===(x=null===(g=null==z?void 0:z.weather)||void 0===g?void 0:g[0])||void 0===x?void 0:x.icon,ae=te?`https://openweathermap.org/img/wn/${te}@2x.png`:"",le=(null==z?void 0:z.name)||(null==R?void 0:R.label)||M.defaultPlaceLabel||"Konum",re=G?G.toLocaleString("tr-TR"):"-",se=R?`${f(R.lat,4)}, ${f(R.lon,4)}`:"-";return(0,e.jsx)("div",{css:p,className:"ow-widget jimu-widget"},q&&(0,e.jsx)(i.JimuMapViewComponent,{useMapWidgetId:q,onActiveViewChange:V}),(0,e.jsx)("div",{className:"ow-panel"},(0,e.jsx)("div",{className:"ow-header"},(0,e.jsx)("div",{className:"ow-icon"},ae?(0,e.jsx)("img",{src:ae,alt:"",width:"54",height:"54"}):"WX"),(0,e.jsx)("div",{className:"ow-title"},(0,e.jsx)("h3",{className:"ow-city"},le),(0,e.jsx)("div",{className:"ow-desc"},ne))),(0,e.jsx)("div",{className:"ow-temp-row"},(0,e.jsx)("div",{className:"ow-temp"},f(null===(w=null==z?void 0:z.main)||void 0===w?void 0:w.temp,1)," ",X),(0,e.jsx)("div",{className:"ow-feels"},"Hissedilen ",f(null===(b=null==z?void 0:z.main)||void 0===b?void 0:b.feels_like,1)," ",X)),(0,e.jsx)("div",{className:"ow-grid"},(0,e.jsx)("div",{className:"ow-metric"},(0,e.jsx)("span",null,"Ruzgar"),(0,e.jsx)("strong",null,f(null===(h=null==z?void 0:z.wind)||void 0===h?void 0:h.speed,1)," ",Y)),(0,e.jsx)("div",{className:"ow-metric"},(0,e.jsx)("span",null,"Yon"),(0,e.jsx)("strong",null,(e=>{if(!Number.isFinite(Number(e)))return"-";const i=["N","NE","E","SE","S","SW","W","NW"];return i[Math.round(Number(e)/45)%i.length]})(null===(y=null==z?void 0:z.wind)||void 0===y?void 0:y.deg)," ",f(null===(j=null==z?void 0:z.wind)||void 0===j?void 0:j.deg)," deg")),(0,e.jsx)("div",{className:"ow-metric"},(0,e.jsx)("span",null,"Nem"),(0,e.jsx)("strong",null,f(null===(k=null==z?void 0:z.main)||void 0===k?void 0:k.humidity),"%")),(0,e.jsx)("div",{className:"ow-metric"},(0,e.jsx)("span",null,"Basinc"),(0,e.jsx)("strong",null,f(null===(N=null==z?void 0:z.main)||void 0===N?void 0:N.pressure)," hPa")),(0,e.jsx)("div",{className:"ow-metric"},(0,e.jsx)("span",null,"Bulut"),(0,e.jsx)("strong",null,f(null===(S=null==z?void 0:z.clouds)||void 0===S?void 0:S.all),"%")),(0,e.jsx)("div",{className:"ow-metric"},(0,e.jsx)("span",null,"Gorus"),(0,e.jsx)("strong",null,(null==z?void 0:z.visibility)?`${f(z.visibility/1e3,1)} km`:"-"))),(0,e.jsx)("div",{className:"ow-actions"},(0,e.jsx)("button",{className:"ow-button",disabled:W||!E||F,onClick:ie},F?"Haritada nokta bekleniyor":"Haritadan nokta sec"),(0,e.jsx)("button",{className:"ow-button secondary",disabled:W||!E,onClick:oe},"Harita merkezinden al"),(0,e.jsx)("button",{className:"ow-button secondary",disabled:W,onClick:Z},"Varsayilan konum")),(0,e.jsx)("div",{className:"ow-status "+(C?"error":"info")},C||O),(0,e.jsx)("div",{className:"ow-footer"},(0,e.jsx)("div",null,"Koordinat: ",se),(0,e.jsx)("div",null,"Guncelleme: ",re))))};function g(e){a.p=e}})(),l})())}}}));