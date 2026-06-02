System.register(["jimu-core","jimu-arcgis","jimu-ui","esri/Graphic","esri/layers/GraphicsLayer","esri/geometry/Point","esri/geometry/Polyline","esri/geometry/geometryEngine","esri/geometry/support/webMercatorUtils"],(function(e,t){var n={},r={},i={},o={},l={},a={},s={},c={},u={};return{setters:[function(e){n.React=e.React,n.css=e.css,n.jsx=e.jsx},function(e){r.JimuMapViewComponent=e.JimuMapViewComponent},function(e){i.Alert=e.Alert,i.Button=e.Button,i.Label=e.Label,i.Option=e.Option,i.Select=e.Select},function(e){o.default=e.default},function(e){l.default=e.default},function(e){a.default=e.default},function(e){s.default=e.default},function(e){c.geodesicLength=e.geodesicLength},function(e){u.webMercatorToGeographic=e.webMercatorToGeographic}],execute:function(){e((()=>{var e={196:e=>{"use strict";e.exports=s},422:e=>{"use strict";e.exports=a},2089:e=>{"use strict";e.exports=o},2686:e=>{"use strict";e.exports=r},4272:e=>{"use strict";e.exports=u},4321:e=>{"use strict";e.exports=i},7958:e=>{"use strict";e.exports=c},9244:e=>{"use strict";e.exports=n},9620:e=>{"use strict";e.exports=l}},t={};function d(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,d),i.exports}d.d=(e,t)=>{for(var n in t)d.o(t,n)&&!d.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="";var m={};return d.p=window.jimuConfig.baseUrl,(()=>{"use strict";d.r(m),d.d(m,{__set_webpack_public_path__:()=>I,default:()=>N});var e=d(9244),t=d(2686),n=d(4321),r=d(2089),i=d(9620),o=d(422),l=d(196),a=d(7958),s=d(4272),c=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function l(e){try{s(r.next(e))}catch(e){o(e)}}function a(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,a)}s((r=r.apply(e,t||[])).next())}))};const{useCallback:u,useEffect:p,useMemo:v,useRef:f,useState:y}=e.React,g=e.css`
  .movement-widget {
    height: 100%;
    overflow: auto;
    padding: 14px;
    background: #f8faf7;
    color: #1d2a22;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .movement-header {
    border-bottom: 1px solid #d5ded1;
    margin-bottom: 12px;
    padding-bottom: 10px;
  }

  .movement-title {
    align-items: center;
    display: flex;
    font-size: 15px;
    font-weight: 700;
    gap: 8px;
    line-height: 1.2;
    margin: 0;
  }

  .movement-title-mark {
    background: #203b2c;
    border-radius: 6px;
    box-shadow: 0 0 0 2px rgba(32, 59, 44, 0.12);
    display: inline-block;
    height: 18px;
    width: 18px;
  }

  .movement-panel {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .movement-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .movement-field label {
    color: #506159;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0;
  }

  .movement-actions {
    display: grid;
    gap: 8px;
    grid-template-columns: 1fr 1fr;
  }

  .movement-card {
    background: #ffffff;
    border: 1px solid #dce4d9;
    border-radius: 8px;
    padding: 10px;
  }

  .movement-card-title {
    color: #506159;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0;
    margin-bottom: 6px;
    text-transform: uppercase;
  }

  .movement-feature-name {
    color: #172219;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.35;
    overflow-wrap: anywhere;
  }

  .movement-grid {
    display: grid;
    gap: 8px;
    grid-template-columns: 1fr 1fr;
  }

  .movement-metric {
    background: #eef4ec;
    border: 1px solid #d7e3d3;
    border-radius: 8px;
    min-height: 58px;
    padding: 8px;
  }

  .movement-metric span {
    color: #5c6c63;
    display: block;
    font-size: 11px;
    font-weight: 700;
    margin-bottom: 4px;
  }

  .movement-metric strong {
    color: #1b3326;
    display: block;
    font-size: 17px;
    line-height: 1.1;
  }

  .movement-status {
    color: #425047;
    font-size: 12px;
    line-height: 1.45;
  }
`,x=e=>e&&"point"===e.type?e:null,b=e=>new o.default({x:e.x,y:e.y,z:e.z,m:e.m,spatialReference:e.spatialReference}),h=e=>{var t;const n="number"==typeof e.z?e.z:0;return`${e.x.toFixed(4)}:${e.y.toFixed(4)}:${n.toFixed(4)}:${(null===(t=e.spatialReference)||void 0===t?void 0:t.wkid)||"sr"}`},w=(e,t)=>new l.default({spatialReference:e.spatialReference,paths:[[[e.x,e.y,e.z||0],[t.x,t.y,t.z||0]]]}),j=(e,t)=>{const n=w(e,t),r=a.geodesicLength(n,"meters");return Array.isArray(r)?r[0]:r},k=e=>{var t,n;return(null===(t=e.spatialReference)||void 0===t?void 0:t.isWGS84)?e:(null===(n=e.spatialReference)||void 0===n?void 0:n.isWebMercator)?s.webMercatorToGeographic(e):e},M=(e,t)=>{const n=k(e),r=k(t),i=n.y*Math.PI/180,o=r.y*Math.PI/180,l=(r.x-n.x)*Math.PI/180,a=Math.sin(l)*Math.cos(o),s=Math.cos(i)*Math.sin(o)-Math.sin(i)*Math.cos(o)*Math.cos(l);return(180*Math.atan2(a,s)/Math.PI+360)%360},z=(e,t)=>{const n=e.attributes||{},r=n.name||n.Name||n.NAME||n.label||n.Label||n.LABEL;return r?String(r):t},N=l=>{var a,s,d;const m=null===(a=l.useMapWidgetIds)||void 0===a?void 0:a[0],k=(null===(s=l.config)||void 0===s?void 0:s.pollInterval)||750,N=(null===(d=l.config)||void 0===d?void 0:d.animationDuration)||1200,[I,S]=y(null),[A,F]=y([]),[P,O]=y(""),[R,L]=y(!1),[C,T]=y(null),[$,_]=y(null),[B,D]=y("Map baglantisi bekleniyor."),G=f(null),E=f(null),V=f(null),W=f(null),q=f(null),H=f(null),J=v((()=>{var e;return(null===(e=A.find((e=>e.id===P)))||void 0===e?void 0:e.layer)||null}),[A,P]),U=u((e=>{if(G.current)return G.current;const t=new i.default({id:"infantry-movement-simulator-graphics",title:"Infantry Movement Simulator"});return e.map.add(t),G.current=t,t}),[]),Q=u((()=>{var e;null!==q.current&&(window.cancelAnimationFrame(q.current),q.current=null),null===(e=G.current)||void 0===e||e.removeAll()}),[]),K=u((e=>{const t=[];e.map.allLayers.forEach((e=>{const n=e;"feature"===n.type&&"point"===n.geometryType&&t.push({id:n.id,title:n.title||n.id,layer:n})})),F(t),O((e=>{var n;return e||(null===(n=t[0])||void 0===n?void 0:n.id)||""})),D(t.length>0?"Bir point layer secin ve izlenecek noktaya tiklayin.":"Map icinde point feature layer bulunamadi.")}),[]),X=u((e=>{const t=G.current;t&&(t.removeAll(),t.add(new r.default({geometry:e,symbol:{type:"simple-marker",style:"circle",size:16,color:[32,59,44,.85],outline:{color:[246,247,232,1],width:2}}})))}),[]),Y=u(((e,t)=>{const n=null==I?void 0:I.view;if(!n)return;const i=U(n);i.removeAll();const l=new r.default({geometry:w(e,t),symbol:{type:"simple-line",color:[32,59,44,.45],width:3,style:"dash"}}),a=new r.default({geometry:w(e,e),symbol:{type:"simple-line",color:[232,93,63,.95],width:5}}),s=new r.default({geometry:e,symbol:{type:"simple-marker",style:"circle",size:10,color:[246,247,232,1],outline:{color:[32,59,44,1],width:1.5}}}),c=new r.default({geometry:t,symbol:{type:"simple-marker",style:"circle",size:12,color:[32,59,44,.25],outline:{color:[32,59,44,.9],width:2}}}),u=new r.default({geometry:e,symbol:{type:"simple-marker",style:"circle",size:18,color:[232,93,63,.95],outline:{color:[255,255,255,1],width:2}}});i.addMany([l,a,s,c,u]);const d=performance.now(),m=n=>{const r=Math.min((n-d)/N,1),i=(l=r,1-Math.pow(1-l,3));var l;const s=((e,t,n)=>new o.default({x:e.x+(t.x-e.x)*n,y:e.y+(t.y-e.y)*n,z:"number"==typeof e.z&&"number"==typeof t.z?e.z+(t.z-e.z)*n:void 0,spatialReference:e.spatialReference}))(e,t,i);u.geometry=s,a.geometry=w(e,s),q.current=r<1?window.requestAnimationFrame(m):null};null!==q.current&&window.cancelAnimationFrame(q.current),q.current=window.requestAnimationFrame(m)}),[N,U,I]),Z=u((()=>c(void 0,void 0,void 0,(function*(){const e=H.current,t=J;var n,r;if(e&&t&&e.layerId===t.id)try{const i=t.createQuery();i.objectIds=[Number(e.objectId)],i.returnGeometry=!0,i.outFields=["*"];const o=(yield t.queryFeatures(i)).features[0],l=x(null==o?void 0:o.geometry);if(!l)return void D("Izlenen nokta sorgulanamadi.");if(n=e.lastPoint,r=l,h(n)!==h(r)){const t=b(e.lastPoint),n=b(l),r={from:t,to:n,distanceMeters:j(t,n),bearingDegrees:M(t,n),startedAt:new Date},i=Object.assign(Object.assign({},e),{lastPoint:n});H.current=i,T(i),_(r),D("Hareket algilandi ve animasyon oynatiliyor."),Y(t,n)}}catch(e){D(`Nokta sorgusu basarisiz: ${e instanceof Error?e.message:String(e)}`)}}))),[Y,J]),ee=u(((e,t)=>{var n;const r=x(e.geometry),i=t.objectIdField,o=i?null===(n=e.attributes)||void 0===n?void 0:n[i]:null;if(!r||null==o)return void D("Secilen feature point geometri veya ObjectID icermiyor.");const l={objectId:o,label:z(e,`ObjectID ${o}`),layerId:t.id,lastPoint:b(r)};H.current=l,T(l),_(null),L(!1),D("Nokta izleniyor. Tasima yapildiginda animasyon otomatik baslar."),X(r)}),[X]),te=u((()=>{var e;const t=null==I?void 0:I.view,n=J;t&&n?(null===(e=E.current)||void 0===e||e.remove(),U(t),L(!0),D("Izlenecek noktaya haritada tiklayin."),E.current=t.on("click",(e=>c(void 0,void 0,void 0,(function*(){var r;const i=(yield t.hitTest(e)).results.find((e=>{var t;const r=e.graphic;return(null===(t=null==r?void 0:r.layer)||void 0===t?void 0:t.id)===n.id}));(null==i?void 0:i.graphic)?(null===(r=E.current)||void 0===r||r.remove(),E.current=null,ee(i.graphic,n)):D("Tiklanan yerde secili layer icin nokta bulunamadi.")}))))):D("Once map ve point layer secimi gerekli.")}),[U,I,J,ee]),ne=u((()=>{var e;H.current=null,T(null),_(null),L(!1),D("Izleme durduruldu."),null===(e=E.current)||void 0===e||e.remove(),E.current=null,Q()}),[Q]),re=u((e=>{S(e),(null==e?void 0:e.view)&&(U(e.view),K(e.view))}),[U,K]);return p((()=>{H.current=C}),[C]),p((()=>(null!==W.current&&(window.clearInterval(W.current),W.current=null),C&&J&&(W.current=window.setInterval((()=>{Z()}),k)),()=>{null!==W.current&&(window.clearInterval(W.current),W.current=null)})),[k,Z,J,C]),p((()=>{var e,t,n;return null===(e=V.current)||void 0===e||e.remove(),V.current=null,J&&C&&(V.current=(null===(n=(t=J).on)||void 0===n?void 0:n.call(t,"edits",(()=>{Z()})))||null),()=>{var e;null===(e=V.current)||void 0===e||e.remove(),V.current=null}}),[Z,J,C]),p((()=>()=>{var e,t,n;null===(e=E.current)||void 0===e||e.remove(),null===(t=V.current)||void 0===t||t.remove(),null!==W.current&&window.clearInterval(W.current),Q(),G.current&&(null===(n=null==I?void 0:I.view)||void 0===n?void 0:n.map)&&I.view.map.remove(G.current)}),[Q,I]),(0,e.jsx)("div",{css:g,className:"movement-widget jimu-widget"},m&&(0,e.jsx)(t.JimuMapViewComponent,{useMapWidgetId:m,onActiveViewChange:re}),(0,e.jsx)("div",{className:"movement-header"},(0,e.jsx)("h3",{className:"movement-title"},(0,e.jsx)("span",{className:"movement-title-mark"}),"Nokta Hareket Simulasyonu")),(0,e.jsx)("div",{className:"movement-panel"},!m&&(0,e.jsx)(n.Alert,{type:"warning",text:"Builder ayarlarindan bir Map widget secin."}),(0,e.jsx)("div",{className:"movement-field"},(0,e.jsx)(n.Label,null,"Point Layer"),(0,e.jsx)(n.Select,{value:P,disabled:0===A.length,onChange:e=>{O(e.target.value),ne()}},A.map((t=>(0,e.jsx)(n.Option,{key:t.id,value:t.id},t.title))))),(0,e.jsx)("div",{className:"movement-actions"},(0,e.jsx)(n.Button,{type:"primary",disabled:!J||R,onClick:te},"Nokta Sec"),(0,e.jsx)(n.Button,{disabled:!C&&!R,onClick:ne},"Durdur")),(0,e.jsx)("div",{className:"movement-card"},(0,e.jsx)("div",{className:"movement-card-title"},"Izlenen Nokta"),(0,e.jsx)("div",{className:"movement-feature-name"},C?C.label:"Henuz nokta secilmedi")),(0,e.jsx)("div",{className:"movement-grid"},(0,e.jsx)("div",{className:"movement-metric"},(0,e.jsx)("span",null,"Son Mesafe"),(0,e.jsx)("strong",null,$?(ie=$.distanceMeters,Number.isFinite(ie)?ie>=1e3?`${(ie/1e3).toFixed(2)} km`:`${ie.toFixed(1)} m`:"-"):"-")),(0,e.jsx)("div",{className:"movement-metric"},(0,e.jsx)("span",null,"Son Aci"),(0,e.jsx)("strong",null,$?(e=>Number.isFinite(e)?`${e.toFixed(1)} deg`:"-")($.bearingDegrees):"-"))),(0,e.jsx)("div",{className:"movement-card"},(0,e.jsx)("div",{className:"movement-card-title"},"Durum"),(0,e.jsx)("div",{className:"movement-status"},B))));var ie};function I(e){d.p=e}})(),m})())}}}));