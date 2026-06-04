System.register(["jimu-core","jimu-arcgis"],(function(e,t){var o={},n={};return{setters:[function(e){o.React=e.React,o.css=e.css,o.jsx=e.jsx},function(e){n.JimuMapViewComponent=e.JimuMapViewComponent}],execute:function(){e((()=>{var e={2686:e=>{"use strict";e.exports=n},9244:e=>{"use strict";e.exports=o}},t={};function i(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,i),r.exports}i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="";var r={};return i.p=window.jimuConfig.baseUrl,(()=>{"use strict";i.r(r),i.d(r,{__set_webpack_public_path__:()=>v,default:()=>x});var e=i(9244),t=i(2686),o=function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function a(e){try{s(n.next(e))}catch(e){r(e)}}function l(e){try{s(n.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,l)}s((n=n.apply(e,t||[])).next())}))};const{useCallback:n,useEffect:a,useMemo:l,useRef:s,useState:d}=e.React,u={apiKey:"",defaultLatitude:41.0351,defaultLongitude:28.9833,defaultPlaceLabel:"Istanbul",refreshMinutes:10,language:"en",units:"metric"},c=e.css`
  .ow-widget {
    background: transparent;
    color: #172033;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    height: 100%;
    overflow: auto;
    padding: 12px;
  }

  .ow-panel {
    background: transparent;
    border: 0;
    box-shadow: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-height: 100%;
    padding: 0;
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
    color: #ffffff;
    font-size: 15px;
    font-weight: 800;
    line-height: 1.2;
    margin: 0;
    text-shadow: 0 1px 3px rgba(15, 23, 42, 0.75);
  }

  .ow-desc {
    color: #e8f1f8;
    font-size: 12px;
    margin-top: 3px;
    text-transform: capitalize;
    text-shadow: 0 1px 3px rgba(15, 23, 42, 0.75);
  }

  .ow-temp-row {
    align-items: baseline;
    display: flex;
    gap: 8px;
  }

  .ow-temp {
    color: #ffffff;
    font-size: 34px;
    font-weight: 800;
    line-height: 1;
    text-shadow: 0 2px 4px rgba(15, 23, 42, 0.8);
  }

  .ow-feels {
    color: #edf7fb;
    font-size: 12px;
    text-shadow: 0 1px 3px rgba(15, 23, 42, 0.75);
  }

  .ow-grid {
    display: grid;
    gap: 8px;
    grid-template-columns: 1fr 1fr;
  }

  .ow-metric {
    background: rgba(255, 255, 255, 0.94);
    border: 1px solid rgba(215, 225, 232, 0.95);
    border-radius: 7px;
    box-shadow: 0 1px 4px rgba(15, 23, 42, 0.14);
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
    background: rgba(255, 255, 255, 0.94);
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
    background: rgba(239, 246, 255, 0.94);
    color: #1d4ed8;
  }

  .ow-status.error {
    background: rgba(255, 241, 242, 0.94);
    color: #be123c;
  }

  .ow-footer {
    color: #edf7fb;
    font-size: 11px;
    line-height: 1.35;
    text-shadow: 0 1px 3px rgba(15, 23, 42, 0.75);
  }
`,p=(e,t=0)=>{const o=Number(e);return Number.isFinite(o)?o.toFixed(t):"-"},f=(e,t="Map center")=>{if(!e)return null;if(Number.isFinite(e.longitude)&&Number.isFinite(e.latitude))return{lat:e.latitude,lon:e.longitude,label:t};const o=e.spatialReference;if(null==o?void 0:o.isWGS84)return{lat:e.y,lon:e.x,label:t};if(null==o?void 0:o.isWebMercator){const o=((e,t)=>{const o=20037508.34,n=e/o*180;let i=t/o*180;return i=180/Math.PI*(2*Math.atan(Math.exp(i*Math.PI/180))-Math.PI/2),{lon:n,lat:i}})(Number(e.x),Number(e.y));return{lat:o.lat,lon:o.lon,label:t}}return null};class g extends e.React.PureComponent{constructor(e){super(e),this.state={error:""}}static getDerivedStateFromError(e){return{error:(null==e?void 0:e.message)||String(e)}}render(){return this.state.error?(0,e.jsx)("div",{css:c,className:"ow-widget jimu-widget"},(0,e.jsx)("div",{className:"ow-panel"},(0,e.jsx)("div",{className:"ow-status error"},"Widget could not be loaded: ",this.state.error))):this.props.children}}const m=i=>{var r,g,m,x,v,w,b,h,j,y,N,S,M;const k=l((()=>Object.assign(Object.assign({},u),(e=>{if(!e)return{};if("function"==typeof e.asMutable)try{return e.asMutable({deep:!0})}catch(t){return e}return e})(i.config))),[i.config]),[P,W]=d(null),[C,L]=d(!1),[I,z]=d(""),[F,O]=d("Ready."),[_,E]=d(null),[R,$]=d(null),[A,D]=d(null),[U,V]=d(!1),G=s(null),J=s(null),K=s(null),B=String(k.apiKey||"").trim(),T=k.units||"metric",q=k.language||"en",H=(e=>"imperial"===e?"F":"standard"===e?"K":"C")(T),X=(e=>"imperial"===e?"mph":"m/s")(T),Q=null===(r=i.useMapWidgetIds)||void 0===r?void 0:r[0],Y=n((e=>o(void 0,void 0,void 0,(function*(){var t;if(!B)return z("OpenWeather API key must be entered in the widget settings."),void O("Waiting for API key.");null===(t=J.current)||void 0===t||t.abort();const o=new AbortController;J.current=o,L(!0),z(""),O(`Loading weather for ${e.label}...`);try{const t=new URLSearchParams({lat:String(e.lat),lon:String(e.lon),appid:B,units:T,lang:q}),n=yield fetch(`https://api.openweathermap.org/data/2.5/weather?${t.toString()}`,{signal:o.signal}),i=yield n.json();if(!n.ok||i.cod&&200!==Number(i.cod))throw new Error(i.message||`OpenWeather request failed (${n.status})`);W(i),E(new Date),$(e),G.current=e,O(`${e.label} updated.`)}catch(e){"AbortError"!==e.name&&(z(e instanceof Error?e.message:String(e)),O("Weather could not be loaded."))}finally{L(!1)}}))),[B,q,T]),Z=n((()=>{Y({lat:Number(k.defaultLatitude),lon:Number(k.defaultLongitude),label:k.defaultPlaceLabel||"Default location"})}),[k.defaultLatitude,k.defaultLongitude,k.defaultPlaceLabel,Y]),ee=n((()=>{var e;null===(e=K.current)||void 0===e||e.remove(),K.current=null,V(!1)}),[]),te=n((()=>{const e=null==A?void 0:A.view;e?(ee(),z(""),V(!0),O("Click the map point to load weather."),K.current=e.on("click",(e=>{var t;null===(t=e.stopPropagation)||void 0===t||t.call(e);const o=e.mapPoint,n=f(o,"Selected point");if(ee(),!n)return z("Selected point could not be converted to WGS84 or Web Mercator coordinates."),void O("Point could not be read.");Y(n)}))):z("Select a Map widget in the widget settings first.")}),[ee,Y,A]),oe=n((()=>{var e;const t=null===(e=null==A?void 0:A.view)||void 0===e?void 0:e.center,o=f(t,"Map center");o?Y(o):z("Map center could not be read as WGS84 or Web Mercator coordinates.")}),[Y,A]);a((()=>(Z(),()=>{var e;return null===(e=J.current)||void 0===e?void 0:e.abort()})),[Z]),a((()=>()=>{ee()}),[ee]),a((()=>{const e=Number(k.refreshMinutes);if(!Number.isFinite(e)||e<=0)return;const t=window.setInterval((()=>{G.current&&Y(G.current)}),60*e*1e3);return()=>window.clearInterval(t)}),[k.refreshMinutes,Y]);const ne=(null===(m=null===(g=null==P?void 0:P.weather)||void 0===g?void 0:g[0])||void 0===m?void 0:m.description)||"No data",ie=null===(v=null===(x=null==P?void 0:P.weather)||void 0===x?void 0:x[0])||void 0===v?void 0:v.icon,re=ie?`https://openweathermap.org/img/wn/${ie}@2x.png`:"",ae=(null==P?void 0:P.name)||(null==R?void 0:R.label)||k.defaultPlaceLabel||"Location",le=_?_.toLocaleString("en-GB"):"-",se=R?`${p(R.lat,4)}, ${p(R.lon,4)}`:"-";return(0,e.jsx)("div",{css:c,className:"ow-widget jimu-widget"},Q&&(0,e.jsx)(t.JimuMapViewComponent,{useMapWidgetId:Q,onActiveViewChange:D}),(0,e.jsx)("div",{className:"ow-panel"},(0,e.jsx)("div",{className:"ow-header"},(0,e.jsx)("div",{className:"ow-icon"},re?(0,e.jsx)("img",{src:re,alt:"",width:"54",height:"54"}):"WX"),(0,e.jsx)("div",{className:"ow-title"},(0,e.jsx)("h3",{className:"ow-city"},ae),(0,e.jsx)("div",{className:"ow-desc"},ne))),(0,e.jsx)("div",{className:"ow-temp-row"},(0,e.jsx)("div",{className:"ow-temp"},p(null===(w=null==P?void 0:P.main)||void 0===w?void 0:w.temp,1)," ",H),(0,e.jsx)("div",{className:"ow-feels"},"Feels like ",p(null===(b=null==P?void 0:P.main)||void 0===b?void 0:b.feels_like,1)," ",H)),(0,e.jsx)("div",{className:"ow-grid"},(0,e.jsx)("div",{className:"ow-metric"},(0,e.jsx)("span",null,"Wind"),(0,e.jsx)("strong",null,p(null===(h=null==P?void 0:P.wind)||void 0===h?void 0:h.speed,1)," ",X)),(0,e.jsx)("div",{className:"ow-metric"},(0,e.jsx)("span",null,"Direction"),(0,e.jsx)("strong",null,(e=>{if(!Number.isFinite(Number(e)))return"-";const t=["N","NE","E","SE","S","SW","W","NW"];return t[Math.round(Number(e)/45)%t.length]})(null===(j=null==P?void 0:P.wind)||void 0===j?void 0:j.deg)," ",p(null===(y=null==P?void 0:P.wind)||void 0===y?void 0:y.deg)," deg")),(0,e.jsx)("div",{className:"ow-metric"},(0,e.jsx)("span",null,"Humidity"),(0,e.jsx)("strong",null,p(null===(N=null==P?void 0:P.main)||void 0===N?void 0:N.humidity),"%")),(0,e.jsx)("div",{className:"ow-metric"},(0,e.jsx)("span",null,"Pressure"),(0,e.jsx)("strong",null,p(null===(S=null==P?void 0:P.main)||void 0===S?void 0:S.pressure)," hPa")),(0,e.jsx)("div",{className:"ow-metric"},(0,e.jsx)("span",null,"Clouds"),(0,e.jsx)("strong",null,p(null===(M=null==P?void 0:P.clouds)||void 0===M?void 0:M.all),"%")),(0,e.jsx)("div",{className:"ow-metric"},(0,e.jsx)("span",null,"Visibility"),(0,e.jsx)("strong",null,(null==P?void 0:P.visibility)?`${p(P.visibility/1e3,1)} km`:"-"))),(0,e.jsx)("div",{className:"ow-actions"},(0,e.jsx)("button",{className:"ow-button",disabled:C||!A||U,onClick:te},U?"Waiting for map point":"Select point on map"),(0,e.jsx)("button",{className:"ow-button secondary",disabled:C||!A,onClick:oe},"Use map center"),(0,e.jsx)("button",{className:"ow-button secondary",disabled:C,onClick:Z},"Default location")),(0,e.jsx)("div",{className:"ow-status "+(I?"error":"info")},I||F),(0,e.jsx)("div",{className:"ow-footer"},(0,e.jsx)("div",null,"Coordinates: ",se),(0,e.jsx)("div",null,"Updated: ",le))))},x=t=>(0,e.jsx)(g,null,(0,e.jsx)(m,Object.assign({},t)));function v(e){i.p=e}})(),r})())}}}));