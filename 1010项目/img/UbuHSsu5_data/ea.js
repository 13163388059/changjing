__cjsload("ea",'\'use strict\';function a(b){b=f(b);return new h(b[0],b[1])}var b=d,c=$g,e=Nd,f=Mg,h=Q,k=qd,t=null,w=0,G=!1,K=!1;(function(){b.addDomListener(window,"mousedown",function(){G=!0});b.addDomListener(window,"mouseup",function(){G=!1})})();O.$setExports(function(d,f){function h(a,c,d,f){d.listener&&y(a,c,d);d.listener="mousewheel"===c?e(a,d):b.addDomListener(a,c,d,f)}function y(a,c,d){d.listener&&(b.removeListener(d.listener),delete d.listener)}function s(){Y&&(y(window,"mouseup",B,!0),y(window,"mousemove",Q,!0),Y=!1)}function x(c){var e=a(c);if(2==c.button)Z=e;else{pa=!0;E=b.exist(d,"dragstart")||b.exist(d,"dragging")||b.exist(d,"dragend");ga=M=e;k();J("mousedown",c);if(E&&(!t||t===F))t=F,va=0,Y||(h(window,"mouseup",B,!0),h(window,"mousemove",Q,!0),Y=!0);K=!1}}function U(a){2!==a.button&&(2!==va&&(va=-1),pa=!1,J("mouseup",a))}function B(a){1==va&&(va=2,J("dragend",a));t=null;s()}function O(c){var e=a(c);M&&2>e.distanceTo(M)||(M=e,b.exist(d,"mousemove")&&J("mousemove",c))}function Q(b){var c=a(b),d=!1;0===va&&0<c.distanceTo(ga)&&(va=1,d=K=!0,J("dragstart",b));1===va&&(d=c.minus(d?ga:M),b.delta=d,J("dragging",b,d));M=c}function D(a){J("mouseover",a,pa,G);var b=a.target,d=a.relatedTarget;if(!L&&(F===b||c(F,b))&&!(F===d||c(F,d)))L=!0,J("mouseenter",a,pa,G)}function C(a){J("mouseout",a,pa,G);var b=a.target,d=a.relatedTarget;if(L&&(F===b||c(F,b))&&!(F===d||c(F,d)))L=!1,J("mouseleave",a,pa,G)}function Fa(b){if(!K){var c=k();300<c-$&&(La=0,$=c,P=a(b));La++;pa=!1;1<La&&2>P.distanceTo(a(b))?(J("dblclick",b),La=0):J("click",b)}}function sa(a){J("mousewheel",a)}function T(c){var e=a(c);b.exist(d,"rightclick")&&Z&&2>=e.distanceTo(Z)&&(c.preventDefault(),J("rightclick",c))}function J(c,e){for(var f=[d,c,e,a(e)],h=2,k=null;k=arguments[h++];)f.push(k);b.trigger.apply(b,f)}function ka(){d.get("tracking")?R||(h(F,"mouseover",D),h(F,"mouseout",C),h(F,"mousedown",x),h(F,"mouseup",U),h(F,"mousemove",O),h(F,"click",Fa),h(F,"mousewheel",sa),h(F,"contextmenu",T),R=!0):R&&(y(F,"mouseover",D),y(F,"mouseout",C),y(F,"mousedown",x),y(F,"mouseup",U),y(F,"mousemove",O),y(F,"click",Fa),y(F,"mousewheel",sa),y(F,"contextmenu",T),s(),R=!1)}w++;var F=f,R=!1,Y=!1,pa=!1,L=!1,E=!1,va=-1,M=null,Z=null,ga=null,$=0,La=0,P=null;b.addListener(d,"tracking_changed",ka);ka()})');
