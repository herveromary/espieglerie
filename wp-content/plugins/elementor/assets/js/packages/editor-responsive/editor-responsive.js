/*! For license information please see editor-responsive.js.LICENSE.txt */!function(){"use strict";var e={react:function(e){e.exports=window.React},"@elementor/editor-v1-adapters":function(e){e.exports=window.elementorV2.editorV1Adapters},"@wordpress/i18n":function(e){e.exports=window.wp.i18n}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};!function(){n.r(r),n.d(r,{getBreakpoints:function(){return i},getBreakpointsMap:function(){return a},useActivateBreakpoint:function(){return c},useActiveBreakpoint:function(){return d},useBreakpoints:function(){return u}});var e=n("@elementor/editor-v1-adapters"),t=n("@wordpress/i18n"),o=n("react");function i(){const{breakpoints:e}=window.elementor?.config?.responsive||{};if(!e||0===Object.entries(e).length)return[];const n=[],r=[],o=[{id:"desktop",label:(0,t.__)("Desktop","elementor")}];Object.entries(e).forEach((([e,t])=>{if(!t.is_enabled)return;const i={id:e,label:t.label,width:t.value,type:"min"===t.direction?"min-width":"max-width"};i.width?"min-width"===i.type?n.push(i):"max-width"===i.type&&r.push(i):o.push(i)}));const i=(e,t)=>e.width&&t.width?t.width-e.width:0;return[...n.sort(i),...o,...r.sort(i)]}function u(){return(0,e.__privateUseListenTo)((0,e.v1ReadyEvent)(),i)}function d(){return(0,e.__privateUseListenTo)((0,e.windowEvent)("elementor/device-mode/change"),s)}function s(){const e=window;return e.elementor?.channels?.deviceMode?.request?.("currentMode")||null}function c(){return(0,o.useCallback)((t=>(0,e.__privateRunCommand)("panel/change-device-mode",{device:t})),[])}function a(){const e=i().map((e=>[e.id,e]));return Object.fromEntries(e)}}(),(window.elementorV2=window.elementorV2||{}).editorResponsive=r}();