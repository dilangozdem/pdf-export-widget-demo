System.register(["jimu-core","jimu-arcgis","jimu-ui","esri/Graphic","esri/layers/GraphicsLayer","esri/layers/support/FeatureFilter","esri/geometry/Point","esri/geometry/Polyline","esri/geometry/geometryEngine","esri/geometry/support/webMercatorUtils"],(function(e,t){var n={},r={},i={},o={},l={},a={},s={},u={},c={},d={};return{setters:[function(e){n.React=e.React,n.css=e.css,n.jsx=e.jsx},function(e){r.JimuMapViewComponent=e.JimuMapViewComponent},function(e){i.Alert=e.Alert,i.Button=e.Button,i.Label=e.Label,i.Option=e.Option,i.Select=e.Select},function(e){o.default=e.default},function(e){l.default=e.default},function(e){a.default=e.default},function(e){s.default=e.default},function(e){u.default=e.default},function(e){c.geodesicLength=e.geodesicLength},function(e){d.webMercatorToGeographic=e.webMercatorToGeographic}],execute:function(){e((()=>{var e={196:e=>{"use strict";e.exports=u},422:e=>{"use strict";e.exports=s},2089:e=>{"use strict";e.exports=o},2686:e=>{"use strict";e.exports=r},4272:e=>{"use strict";e.exports=d},4321:e=>{"use strict";e.exports=i},7690:e=>{"use strict";e.exports=a},7958:e=>{"use strict";e.exports=c},9244:e=>{"use strict";e.exports=n},9620:e=>{"use strict";e.exports=l}},t={};function m(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,m),i.exports}m.d=(e,t)=>{for(var n in t)m.o(t,n)&&!m.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},m.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),m.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},m.p="";var v={};return m.p=window.jimuConfig.baseUrl,(()=>{"use strict";m.r(v),m.d(v,{__set_webpack_public_path__:()=>S,default:()=>I});var e=m(9244),t=m(2686),n=m(4321),r=m(2089),i=m(9620),o=m(7690),l=m(422),a=m(196),s=m(7958),u=m(4272),c=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function l(e){try{s(r.next(e))}catch(e){o(e)}}function a(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,a)}s((r=r.apply(e,t||[])).next())}))};const{useCallback:d,useEffect:p,useMemo:f,useRef:y,useState:g}=e.React,x=e.css`
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
`,b=e=>e&&"point"===e.type?e:null,w=e=>new l.default({x:e.x,y:e.y,z:e.z,m:e.m,spatialReference:e.spatialReference}),h=e=>{var t;const n="number"==typeof e.z?e.z:0;return`${e.x.toFixed(4)}:${e.y.toFixed(4)}:${n.toFixed(4)}:${(null===(t=e.spatialReference)||void 0===t?void 0:t.wkid)||"sr"}`},j=(e,t)=>new a.default({spatialReference:e.spatialReference,paths:[[[e.x,e.y,e.z||0],[t.x,t.y,t.z||0]]]}),k=(e,t)=>{const n=j(e,t),r=s.geodesicLength(n,"meters");return Array.isArray(r)?r[0]:r},M=e=>{var t,n;return(null===(t=e.spatialReference)||void 0===t?void 0:t.isWGS84)?e:(null===(n=e.spatialReference)||void 0===n?void 0:n.isWebMercator)?u.webMercatorToGeographic(e):e},z=(e,t)=>{const n=M(e),r=M(t),i=n.y*Math.PI/180,o=r.y*Math.PI/180,l=(r.x-n.x)*Math.PI/180,a=Math.sin(l)*Math.cos(o),s=Math.cos(i)*Math.sin(o)-Math.sin(i)*Math.cos(o)*Math.cos(l);return(180*Math.atan2(a,s)/Math.PI+360)%360},N=(e,t)=>{const n=e.attributes||{},r=n.name||n.Name||n.NAME||n.label||n.Label||n.LABEL;return r?String(r):t},I=a=>{var s,u,m;const v=null===(s=a.useMapWidgetIds)||void 0===s?void 0:s[0],M=(null===(u=a.config)||void 0===u?void 0:u.pollInterval)||750,I=(null===(m=a.config)||void 0===m?void 0:m.animationDuration)||3e3,[S,F]=g(null),[A,O]=g([]),[P,$]=g(""),[L,R]=g(!1),[C,D]=g(null),[T,_]=g(null),[B,G]=g("Map baglantisi bekleniyor."),V=y(null),E=y(null),J=y(null),W=y(null),q=y(null),H=y(null),U=y(null),Q=f((()=>{var e;return(null===(e=A.find((e=>e.id===P)))||void 0===e?void 0:e.layer)||null}),[A,P]),K=d((e=>{if(V.current)return V.current;const t=new i.default({id:"infantry-movement-simulator-graphics",title:"Infantry Movement Simulator"});return e.map.add(t),V.current=t,t}),[]),X=d((()=>{const e=U.current;e&&(e.layerView.filter=e.previousFilter,U.current=null)}),[]),Y=d((()=>{var e;null!==q.current&&(window.cancelAnimationFrame(q.current),q.current=null),X(),null===(e=V.current)||void 0===e||e.removeAll()}),[X]),Z=d(((e,t)=>c(void 0,void 0,void 0,(function*(){var n;const r=null==S?void 0:S.view,i=e.objectIdField;if(!r||!i)return;X();const l=yield r.whenLayerView(e),a=l.filter||null,s=`${i} <> ${(e=>{const t=Number(e);return Number.isFinite(t)?String(t):`'${String(e).replace(/'/g,"''")}'`})(t)}`,u=(null===(n=null==a?void 0:a.toJSON)||void 0===n?void 0:n.call(a))||{},c="string"==typeof u.where&&u.where.trim()?u.where.trim():"";U.current={layerView:l,previousFilter:a},l.filter=new o.default(Object.assign(Object.assign({},u),{where:c?`(${c}) AND (${s})`:s}))}))),[S,X]),ee=d((e=>{const t=[];e.map.allLayers.forEach((e=>{const n=e;"feature"===n.type&&"point"===n.geometryType&&t.push({id:n.id,title:n.title||n.id,layer:n})})),O(t),$((e=>{var n;return e||(null===(n=t[0])||void 0===n?void 0:n.id)||""})),G(t.length>0?"Bir point layer secin ve izlenecek noktaya tiklayin.":"Map icinde point feature layer bulunamadi.")}),[]),te=d((e=>{const t=V.current;t&&(t.removeAll(),t.add(new r.default({geometry:e,symbol:{type:"simple-marker",style:"circle",size:16,color:[32,59,44,.85],outline:{color:[246,247,232,1],width:2}}})))}),[]),ne=d(((e,t,n,i)=>c(void 0,void 0,void 0,(function*(){const o=null==S?void 0:S.view;if(!o)return;n&&void 0!==i&&(yield Z(n,i));const a=K(o);a.removeAll();const s=new r.default({geometry:j(e,t),symbol:{type:"simple-line",color:[32,59,44,.45],width:3,style:"dash"}}),u=new r.default({geometry:j(e,e),symbol:{type:"simple-line",color:[232,93,63,.95],width:5}}),c=new r.default({geometry:e,symbol:{type:"simple-marker",style:"circle",size:10,color:[246,247,232,1],outline:{color:[32,59,44,1],width:1.5}}}),d=new r.default({geometry:t,symbol:{type:"simple-marker",style:"circle",size:12,color:[32,59,44,.25],outline:{color:[32,59,44,.9],width:2}}}),m=new r.default({geometry:e,symbol:{type:"simple-marker",style:"circle",size:18,color:[232,93,63,.95],outline:{color:[255,255,255,1],width:2}}});a.addMany([s,u,c,d,m]);const v=performance.now(),p=n=>{const r=Math.min((n-v)/I,1),i=(o=r,1-Math.pow(1-o,3));var o;const s=((e,t,n)=>new l.default({x:e.x+(t.x-e.x)*n,y:e.y+(t.y-e.y)*n,z:"number"==typeof e.z&&"number"==typeof t.z?e.z+(t.z-e.z)*n:void 0,spatialReference:e.spatialReference}))(e,t,i);m.geometry=s,u.geometry=j(e,s),r<1?q.current=window.requestAnimationFrame(p):(q.current=null,a.remove(m),X())};null!==q.current&&window.cancelAnimationFrame(q.current),q.current=window.requestAnimationFrame(p)}))),[I,K,Z,S,X]),re=d((()=>c(void 0,void 0,void 0,(function*(){const e=H.current,t=Q;var n,r;if(e&&t&&e.layerId===t.id)try{const i=t.createQuery();i.objectIds=[Number(e.objectId)],i.returnGeometry=!0,i.outFields=["*"];const o=(yield t.queryFeatures(i)).features[0],l=b(null==o?void 0:o.geometry);if(!l)return void G("Izlenen nokta sorgulanamadi.");if(n=e.lastPoint,r=l,h(n)!==h(r)){const n=w(e.lastPoint),r=w(l),i={from:n,to:r,distanceMeters:k(n,r),bearingDegrees:z(n,r),startedAt:new Date},o=Object.assign(Object.assign({},e),{lastPoint:r});H.current=o,D(o),_(i),G("Hareket algilandi. Gercek nokta gizlenip animasyonlu hareket oynatiliyor."),ne(n,r,t,e.objectId)}}catch(e){G(`Nokta sorgusu basarisiz: ${e instanceof Error?e.message:String(e)}`)}}))),[ne,Q]),ie=d(((e,t)=>{var n;const r=b(e.geometry),i=t.objectIdField,o=i?null===(n=e.attributes)||void 0===n?void 0:n[i]:null;if(!r||null==o)return void G("Secilen feature point geometri veya ObjectID icermiyor.");const l={objectId:o,label:N(e,`ObjectID ${o}`),layerId:t.id,lastPoint:w(r)};H.current=l,D(l),_(null),R(!1),G("Nokta izleniyor. Tasima yapildiginda animasyon otomatik baslar."),te(r)}),[te]),oe=d((()=>{var e;const t=null==S?void 0:S.view,n=Q;t&&n?(null===(e=E.current)||void 0===e||e.remove(),K(t),R(!0),G("Izlenecek noktaya haritada tiklayin."),E.current=t.on("click",(e=>c(void 0,void 0,void 0,(function*(){var r;const i=(yield t.hitTest(e)).results.find((e=>{var t;const r=e.graphic;return(null===(t=null==r?void 0:r.layer)||void 0===t?void 0:t.id)===n.id}));(null==i?void 0:i.graphic)?(null===(r=E.current)||void 0===r||r.remove(),E.current=null,ie(i.graphic,n)):G("Tiklanan yerde secili layer icin nokta bulunamadi.")}))))):G("Once map ve point layer secimi gerekli.")}),[K,S,Q,ie]),le=d((()=>{var e;H.current=null,D(null),_(null),R(!1),G("Izleme durduruldu."),null===(e=E.current)||void 0===e||e.remove(),E.current=null,Y()}),[Y]),ae=d((e=>{F(e),(null==e?void 0:e.view)&&(K(e.view),ee(e.view))}),[K,ee]);return p((()=>{H.current=C}),[C]),p((()=>(null!==W.current&&(window.clearInterval(W.current),W.current=null),C&&Q&&(W.current=window.setInterval((()=>{re()}),M)),()=>{null!==W.current&&(window.clearInterval(W.current),W.current=null)})),[M,re,Q,C]),p((()=>{var e,t,n;return null===(e=J.current)||void 0===e||e.remove(),J.current=null,Q&&C&&(J.current=(null===(n=(t=Q).on)||void 0===n?void 0:n.call(t,"edits",(()=>{re()})))||null),()=>{var e;null===(e=J.current)||void 0===e||e.remove(),J.current=null}}),[re,Q,C]),p((()=>()=>{var e,t,n;null===(e=E.current)||void 0===e||e.remove(),null===(t=J.current)||void 0===t||t.remove(),null!==W.current&&window.clearInterval(W.current),Y(),V.current&&(null===(n=null==S?void 0:S.view)||void 0===n?void 0:n.map)&&S.view.map.remove(V.current)}),[Y,S]),(0,e.jsx)("div",{css:x,className:"movement-widget jimu-widget"},v&&(0,e.jsx)(t.JimuMapViewComponent,{useMapWidgetId:v,onActiveViewChange:ae}),(0,e.jsx)("div",{className:"movement-header"},(0,e.jsx)("h3",{className:"movement-title"},(0,e.jsx)("span",{className:"movement-title-mark"}),"Nokta Hareket Simulasyonu")),(0,e.jsx)("div",{className:"movement-panel"},!v&&(0,e.jsx)(n.Alert,{type:"warning",text:"Builder ayarlarindan bir Map widget secin."}),(0,e.jsx)("div",{className:"movement-field"},(0,e.jsx)(n.Label,null,"Point Layer"),(0,e.jsx)(n.Select,{value:P,disabled:0===A.length,onChange:e=>{$(e.target.value),le()}},A.map((t=>(0,e.jsx)(n.Option,{key:t.id,value:t.id},t.title))))),(0,e.jsx)("div",{className:"movement-actions"},(0,e.jsx)(n.Button,{type:"primary",disabled:!Q||L,onClick:oe},"Nokta Sec"),(0,e.jsx)(n.Button,{disabled:!C&&!L,onClick:le},"Durdur")),(0,e.jsx)("div",{className:"movement-card"},(0,e.jsx)("div",{className:"movement-card-title"},"Izlenen Nokta"),(0,e.jsx)("div",{className:"movement-feature-name"},C?C.label:"Henuz nokta secilmedi")),(0,e.jsx)("div",{className:"movement-grid"},(0,e.jsx)("div",{className:"movement-metric"},(0,e.jsx)("span",null,"Son Mesafe"),(0,e.jsx)("strong",null,T?(se=T.distanceMeters,Number.isFinite(se)?se>=1e3?`${(se/1e3).toFixed(2)} km`:`${se.toFixed(1)} m`:"-"):"-")),(0,e.jsx)("div",{className:"movement-metric"},(0,e.jsx)("span",null,"Son Aci"),(0,e.jsx)("strong",null,T?(e=>Number.isFinite(e)?`${e.toFixed(1)} deg`:"-")(T.bearingDegrees):"-"))),(0,e.jsx)("div",{className:"movement-card"},(0,e.jsx)("div",{className:"movement-card-title"},"Durum"),(0,e.jsx)("div",{className:"movement-status"},B))));var se};function S(e){m.p=e}})(),v})())}}}));