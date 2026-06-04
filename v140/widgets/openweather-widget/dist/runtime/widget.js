System.register(["jimu-core","jimu-arcgis"],(function(e,t){var i={},n={};return{setters:[function(e){i.React=e.React,i.css=e.css,i.jsx=e.jsx},function(e){n.JimuMapViewComponent=e.JimuMapViewComponent}],execute:function(){e((()=>{var e={2686:e=>{"use strict";e.exports=n},9244:e=>{"use strict";e.exports=i}},t={};function o(i){var n=t[i];if(void 0!==n)return n.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,o),a.exports}o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var a={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(a),o.d(a,{__set_webpack_public_path__:()=>x,default:()=>v});var e=o(9244),t=o(2686),i=function(e,t,i,n){return new(i||(i=Promise))((function(o,a){function r(e){try{s(n.next(e))}catch(e){a(e)}}function l(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,l)}s((n=n.apply(e,t||[])).next())}))};const{useCallback:n,useEffect:r,useMemo:l,useRef:s,useState:u}=e.React,d={apiKey:"",defaultLatitude:41.0351,defaultLongitude:28.9833,defaultPlaceLabel:"Istanbul",refreshMinutes:10,language:"tr",units:"metric"},c=e.css`
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
`,p=(e,t=0)=>{const i=Number(e);return Number.isFinite(i)?i.toFixed(t):"-"},f=(e,t="Harita merkezi")=>{if(!e)return null;if(Number.isFinite(e.longitude)&&Number.isFinite(e.latitude))return{lat:e.latitude,lon:e.longitude,label:t};const i=e.spatialReference;if(null==i?void 0:i.isWGS84)return{lat:e.y,lon:e.x,label:t};if(null==i?void 0:i.isWebMercator){const i=((e,t)=>{const i=20037508.34,n=e/i*180;let o=t/i*180;return o=180/Math.PI*(2*Math.atan(Math.exp(o*Math.PI/180))-Math.PI/2),{lon:n,lat:o}})(Number(e.x),Number(e.y));return{lat:i.lat,lon:i.lon,label:t}}return null};class m extends e.React.PureComponent{constructor(e){super(e),this.state={error:""}}static getDerivedStateFromError(e){return{error:(null==e?void 0:e.message)||String(e)}}render(){return this.state.error?(0,e.jsx)("div",{css:c,className:"ow-widget jimu-widget"},(0,e.jsx)("div",{className:"ow-panel"},(0,e.jsx)("div",{className:"ow-status error"},"Widget yuklenemedi: ",this.state.error))):this.props.children}}const g=o=>{var a,m,g,v,x,w,b,h,j,y,N,k,S;const M=l((()=>Object.assign(Object.assign({},d),(e=>{if(!e)return{};if("function"==typeof e.asMutable)try{return e.asMutable({deep:!0})}catch(t){return e}return e})(o.config))),[o.config]),[P,z]=u(null),[W,C]=u(!1),[L,I]=u(""),[O,H]=u("Hazir."),[_,F]=u(null),[R,E]=u(null),[$,V]=u(null),[A,G]=u(!1),K=s(null),B=s(null),J=s(null),T=String(M.apiKey||"").trim(),U=M.units||"metric",D=M.language||"tr",X=(e=>"imperial"===e?"F":"standard"===e?"K":"C")(U),Y=(e=>"imperial"===e?"mph":"m/s")(U),q=null===(a=o.useMapWidgetIds)||void 0===a?void 0:a[0],Q=n((e=>i(void 0,void 0,void 0,(function*(){var t;if(!T)return I("OpenWeather API key ayarlardan girilmeli."),void H("API key bekleniyor.");null===(t=B.current)||void 0===t||t.abort();const i=new AbortController;B.current=i,C(!0),I(""),H(`${e.label} icin hava durumu aliniyor...`);try{const t=new URLSearchParams({lat:String(e.lat),lon:String(e.lon),appid:T,units:U,lang:D}),n=yield fetch(`https://api.openweathermap.org/data/2.5/weather?${t.toString()}`,{signal:i.signal}),o=yield n.json();if(!n.ok||o.cod&&200!==Number(o.cod))throw new Error(o.message||`OpenWeather istegi basarisiz (${n.status})`);z(o),F(new Date),E(e),K.current=e,H(`${e.label} guncellendi.`)}catch(e){"AbortError"!==e.name&&(I(e instanceof Error?e.message:String(e)),H("Hava durumu alinamadi."))}finally{C(!1)}}))),[T,D,U]),Z=n((()=>{Q({lat:Number(M.defaultLatitude),lon:Number(M.defaultLongitude),label:M.defaultPlaceLabel||"Varsayilan konum"})}),[M.defaultLatitude,M.defaultLongitude,M.defaultPlaceLabel,Q]),ee=n((()=>{var e;null===(e=J.current)||void 0===e||e.remove(),J.current=null,G(!1)}),[]),te=n((()=>{const e=null==$?void 0:$.view;e?(ee(),I(""),G(!0),H("Haritada hava durumu alinacak noktaya tiklayin."),J.current=e.on("click",(e=>{var t;null===(t=e.stopPropagation)||void 0===t||t.call(e);const i=e.mapPoint,n=f(i,"Secilen nokta");if(ee(),!n)return I("Secilen nokta WGS84 veya Web Mercator koordinatina cevrilemedi."),void H("Nokta okunamadi.");Q(n)}))):I("Once widget ayarlarindan bir Map widget secilmeli.")}),[ee,Q,$]),ie=n((()=>{var e;const t=null===(e=null==$?void 0:$.view)||void 0===e?void 0:e.center,i=f(t,"Harita merkezi");i?Q(i):I("Harita merkezi WGS84 veya Web Mercator koordinatinda okunamadi.")}),[Q,$]);r((()=>(Z(),()=>{var e;return null===(e=B.current)||void 0===e?void 0:e.abort()})),[Z]),r((()=>()=>{ee()}),[ee]),r((()=>{const e=Number(M.refreshMinutes);if(!Number.isFinite(e)||e<=0)return;const t=window.setInterval((()=>{K.current&&Q(K.current)}),60*e*1e3);return()=>window.clearInterval(t)}),[M.refreshMinutes,Q]);const ne=(null===(g=null===(m=null==P?void 0:P.weather)||void 0===m?void 0:m[0])||void 0===g?void 0:g.description)||"Veri yok",oe=null===(x=null===(v=null==P?void 0:P.weather)||void 0===v?void 0:v[0])||void 0===x?void 0:x.icon,ae=oe?`https://openweathermap.org/img/wn/${oe}@2x.png`:"",re=(null==P?void 0:P.name)||(null==R?void 0:R.label)||M.defaultPlaceLabel||"Konum",le=_?_.toLocaleString("tr-TR"):"-",se=R?`${p(R.lat,4)}, ${p(R.lon,4)}`:"-";return(0,e.jsx)("div",{css:c,className:"ow-widget jimu-widget"},q&&(0,e.jsx)(t.JimuMapViewComponent,{useMapWidgetId:q,onActiveViewChange:V}),(0,e.jsx)("div",{className:"ow-panel"},(0,e.jsx)("div",{className:"ow-header"},(0,e.jsx)("div",{className:"ow-icon"},ae?(0,e.jsx)("img",{src:ae,alt:"",width:"54",height:"54"}):"WX"),(0,e.jsx)("div",{className:"ow-title"},(0,e.jsx)("h3",{className:"ow-city"},re),(0,e.jsx)("div",{className:"ow-desc"},ne))),(0,e.jsx)("div",{className:"ow-temp-row"},(0,e.jsx)("div",{className:"ow-temp"},p(null===(w=null==P?void 0:P.main)||void 0===w?void 0:w.temp,1)," ",X),(0,e.jsx)("div",{className:"ow-feels"},"Hissedilen ",p(null===(b=null==P?void 0:P.main)||void 0===b?void 0:b.feels_like,1)," ",X)),(0,e.jsx)("div",{className:"ow-grid"},(0,e.jsx)("div",{className:"ow-metric"},(0,e.jsx)("span",null,"Ruzgar"),(0,e.jsx)("strong",null,p(null===(h=null==P?void 0:P.wind)||void 0===h?void 0:h.speed,1)," ",Y)),(0,e.jsx)("div",{className:"ow-metric"},(0,e.jsx)("span",null,"Yon"),(0,e.jsx)("strong",null,(e=>{if(!Number.isFinite(Number(e)))return"-";const t=["N","NE","E","SE","S","SW","W","NW"];return t[Math.round(Number(e)/45)%t.length]})(null===(j=null==P?void 0:P.wind)||void 0===j?void 0:j.deg)," ",p(null===(y=null==P?void 0:P.wind)||void 0===y?void 0:y.deg)," deg")),(0,e.jsx)("div",{className:"ow-metric"},(0,e.jsx)("span",null,"Nem"),(0,e.jsx)("strong",null,p(null===(N=null==P?void 0:P.main)||void 0===N?void 0:N.humidity),"%")),(0,e.jsx)("div",{className:"ow-metric"},(0,e.jsx)("span",null,"Basinc"),(0,e.jsx)("strong",null,p(null===(k=null==P?void 0:P.main)||void 0===k?void 0:k.pressure)," hPa")),(0,e.jsx)("div",{className:"ow-metric"},(0,e.jsx)("span",null,"Bulut"),(0,e.jsx)("strong",null,p(null===(S=null==P?void 0:P.clouds)||void 0===S?void 0:S.all),"%")),(0,e.jsx)("div",{className:"ow-metric"},(0,e.jsx)("span",null,"Gorus"),(0,e.jsx)("strong",null,(null==P?void 0:P.visibility)?`${p(P.visibility/1e3,1)} km`:"-"))),(0,e.jsx)("div",{className:"ow-actions"},(0,e.jsx)("button",{className:"ow-button",disabled:W||!$||A,onClick:te},A?"Haritada nokta bekleniyor":"Haritadan nokta sec"),(0,e.jsx)("button",{className:"ow-button secondary",disabled:W||!$,onClick:ie},"Harita merkezinden al"),(0,e.jsx)("button",{className:"ow-button secondary",disabled:W,onClick:Z},"Varsayilan konum")),(0,e.jsx)("div",{className:"ow-status "+(L?"error":"info")},L||O),(0,e.jsx)("div",{className:"ow-footer"},(0,e.jsx)("div",null,"Koordinat: ",se),(0,e.jsx)("div",null,"Guncelleme: ",le))))},v=t=>(0,e.jsx)(m,null,(0,e.jsx)(g,Object.assign({},t)));function x(e){o.p=e}})(),a})())}}}));