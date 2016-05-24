(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Google Analytics
 */

'use strict';

/* jshint ignore:start */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');


// Init analytics
var initialize = function(trackingID) {
	ga('create', trackingID, 'auto');
	ga('send', 'pageview');
};


module.exports.initialize = initialize;
/* jshint ignore:end */

},{}],2:[function(require,module,exports){
/**
 * requestionAnimationFrame shim
 * http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
 */

'use strict';

window.requestAnimationFrame = (function() {
	return window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	function(callback) {
		window.setTimeout(callback, 1000 / 60);
	};
})();

},{}],3:[function(require,module,exports){
'use strict';

// raf shim
require('./requestAnimationFrame.js');


/**
 * scrollToElement
 *
 * @description smooth scroll to an element
 * @param {Element} element - anchor link scroll to trigger
 * @param {Number} scrollSpeed - speed of scroll in milliseconds
 */
function scrollToElement(element, scrollSpeed) {

	var scrollTargetY = element.offsetTop || 0;
	var scrollY = window.scrollY;
	var speed = scrollSpeed || 2000;
	var currentTime = 0;

	// min time 0.1, max time 0.8 seconds
	var time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));

	// easing equations from https://github.com/danro/easing-js/blob/master/easing.js
	function easeOutSine(pos) {
		return Math.sin(pos * (Math.PI / 2));
	}

	// add animation loop
	function tick() {
		currentTime += 1 / 60;

		var p = currentTime / time;
		var t = easeOutSine(p);

		if (p < 1) {
			requestAnimationFrame(tick);
			window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
		} else {
			window.scrollTo(0, scrollTargetY);
		}
	}

	// call it once to get started
	tick();
}


module.exports = scrollToElement;

},{"./requestAnimationFrame.js":2}],4:[function(require,module,exports){
'use strict';

var googleAnalytics = require('./helpers/googleAnalytics.js');
var scrollToElement = require('./helpers/scrollToElement.js');


/**
 * Main JS
 */
var Main = (function() {


	/**
	 * Setup scroll to section sidebar links
	 */
	function initSectionScrollLinks() {

		var scrollLinks = document.querySelectorAll('.sidebar-link');

		for (var i = 0; i < scrollLinks.length; i++) {
			scrollLinks[i].addEventListener('click', function(evt) {
				// get a reference to the element associated with the scroll to link that was clicked
				var id = evt.target.getAttribute('href').replace('#', '');
				var element = document.getElementById(id);
				// if no matching element was found, exit now
				if (!element) {
					return;
				}
				// prevent the default anchor link jump
				evt.preventDefault();
				// scroll to the section related to the sidebar link clicked
				scrollToElement(element, 1500);
			});
		}
	}


	/**
	 * Initialize Main
	 */
	return {
		initialize : function() {
			// setup google analytics
			var googleAnalyticsTrackingID = 'UA-43275048-4';
			googleAnalytics.initialize(googleAnalyticsTrackingID);
			// setup sidebar links
			initSectionScrollLinks();
		},
	};


})();

module.exports.Main = Main.initialize();

},{"./helpers/googleAnalytics.js":1,"./helpers/scrollToElement.js":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaGVscGVycy9nb29nbGVBbmFseXRpY3MuanMiLCJzcmMvanMvaGVscGVycy9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanMiLCJzcmMvanMvaGVscGVycy9zY3JvbGxUb0VsZW1lbnQuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogR29vZ2xlIEFuYWx5dGljc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoganNoaW50IGlnbm9yZTpzdGFydCAqL1xuKGZ1bmN0aW9uKGkscyxvLGcscixhLG0pe2lbJ0dvb2dsZUFuYWx5dGljc09iamVjdCddPXI7aVtyXT1pW3JdfHxmdW5jdGlvbigpe1xuKGlbcl0ucT1pW3JdLnF8fFtdKS5wdXNoKGFyZ3VtZW50cyl9LGlbcl0ubD0xKm5ldyBEYXRlKCk7YT1zLmNyZWF0ZUVsZW1lbnQobyksXG5tPXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUobylbMF07YS5hc3luYz0xO2Euc3JjPWc7bS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLG0pXG59KSh3aW5kb3csZG9jdW1lbnQsJ3NjcmlwdCcsJy8vd3d3Lmdvb2dsZS1hbmFseXRpY3MuY29tL2FuYWx5dGljcy5qcycsJ2dhJyk7XG5cblxuLy8gSW5pdCBhbmFseXRpY3NcbnZhciBpbml0aWFsaXplID0gZnVuY3Rpb24odHJhY2tpbmdJRCkge1xuXHRnYSgnY3JlYXRlJywgdHJhY2tpbmdJRCwgJ2F1dG8nKTtcblx0Z2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMuaW5pdGlhbGl6ZSA9IGluaXRpYWxpemU7XG4vKiBqc2hpbnQgaWdub3JlOmVuZCAqL1xuIiwiLyoqXG4gKiByZXF1ZXN0aW9uQW5pbWF0aW9uRnJhbWUgc2hpbVxuICogaHR0cDovL3d3dy5wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG53aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0ZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcblx0fTtcbn0pKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIHJhZiBzaGltXG5yZXF1aXJlKCcuL3JlcXVlc3RBbmltYXRpb25GcmFtZS5qcycpO1xuXG5cbi8qKlxuICogc2Nyb2xsVG9FbGVtZW50XG4gKlxuICogQGRlc2NyaXB0aW9uIHNtb290aCBzY3JvbGwgdG8gYW4gZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gYW5jaG9yIGxpbmsgc2Nyb2xsIHRvIHRyaWdnZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY3JvbGxTcGVlZCAtIHNwZWVkIG9mIHNjcm9sbCBpbiBtaWxsaXNlY29uZHNcbiAqL1xuZnVuY3Rpb24gc2Nyb2xsVG9FbGVtZW50KGVsZW1lbnQsIHNjcm9sbFNwZWVkKSB7XG5cblx0dmFyIHNjcm9sbFRhcmdldFkgPSBlbGVtZW50Lm9mZnNldFRvcCB8fCAwO1xuXHR2YXIgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xuXHR2YXIgc3BlZWQgPSBzY3JvbGxTcGVlZCB8fCAyMDAwO1xuXHR2YXIgY3VycmVudFRpbWUgPSAwO1xuXG5cdC8vIG1pbiB0aW1lIDAuMSwgbWF4IHRpbWUgMC44IHNlY29uZHNcblx0dmFyIHRpbWUgPSBNYXRoLm1heCgwLjEsIE1hdGgubWluKE1hdGguYWJzKHNjcm9sbFkgLSBzY3JvbGxUYXJnZXRZKSAvIHNwZWVkLCAwLjgpKTtcblxuXHQvLyBlYXNpbmcgZXF1YXRpb25zIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2RhbnJvL2Vhc2luZy1qcy9ibG9iL21hc3Rlci9lYXNpbmcuanNcblx0ZnVuY3Rpb24gZWFzZU91dFNpbmUocG9zKSB7XG5cdFx0cmV0dXJuIE1hdGguc2luKHBvcyAqIChNYXRoLlBJIC8gMikpO1xuXHR9XG5cblx0Ly8gYWRkIGFuaW1hdGlvbiBsb29wXG5cdGZ1bmN0aW9uIHRpY2soKSB7XG5cdFx0Y3VycmVudFRpbWUgKz0gMSAvIDYwO1xuXG5cdFx0dmFyIHAgPSBjdXJyZW50VGltZSAvIHRpbWU7XG5cdFx0dmFyIHQgPSBlYXNlT3V0U2luZShwKTtcblxuXHRcdGlmIChwIDwgMSkge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIHNjcm9sbFkgKyAoKHNjcm9sbFRhcmdldFkgLSBzY3JvbGxZKSAqIHQpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIHNjcm9sbFRhcmdldFkpO1xuXHRcdH1cblx0fVxuXG5cdC8vIGNhbGwgaXQgb25jZSB0byBnZXQgc3RhcnRlZFxuXHR0aWNrKCk7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBzY3JvbGxUb0VsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBnb29nbGVBbmFseXRpY3MgPSByZXF1aXJlKCcuL2hlbHBlcnMvZ29vZ2xlQW5hbHl0aWNzLmpzJyk7XG52YXIgc2Nyb2xsVG9FbGVtZW50ID0gcmVxdWlyZSgnLi9oZWxwZXJzL3Njcm9sbFRvRWxlbWVudC5qcycpO1xuXG5cbi8qKlxuICogTWFpbiBKU1xuICovXG52YXIgTWFpbiA9IChmdW5jdGlvbigpIHtcblxuXG5cdC8qKlxuXHQgKiBTZXR1cCBzY3JvbGwgdG8gc2VjdGlvbiBzaWRlYmFyIGxpbmtzXG5cdCAqL1xuXHRmdW5jdGlvbiBpbml0U2VjdGlvblNjcm9sbExpbmtzKCkge1xuXG5cdFx0dmFyIHNjcm9sbExpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXItbGluaycpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzY3JvbGxMaW5rcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0c2Nyb2xsTGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldnQpIHtcblx0XHRcdFx0Ly8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCB0aGUgc2Nyb2xsIHRvIGxpbmsgdGhhdCB3YXMgY2xpY2tlZFxuXHRcdFx0XHR2YXIgaWQgPSBldnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpLnJlcGxhY2UoJyMnLCAnJyk7XG5cdFx0XHRcdHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXHRcdFx0XHQvLyBpZiBubyBtYXRjaGluZyBlbGVtZW50IHdhcyBmb3VuZCwgZXhpdCBub3dcblx0XHRcdFx0aWYgKCFlbGVtZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHByZXZlbnQgdGhlIGRlZmF1bHQgYW5jaG9yIGxpbmsganVtcFxuXHRcdFx0XHRldnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0Ly8gc2Nyb2xsIHRvIHRoZSBzZWN0aW9uIHJlbGF0ZWQgdG8gdGhlIHNpZGViYXIgbGluayBjbGlja2VkXG5cdFx0XHRcdHNjcm9sbFRvRWxlbWVudChlbGVtZW50LCAxNTAwKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemUgTWFpblxuXHQgKi9cblx0cmV0dXJuIHtcblx0XHRpbml0aWFsaXplIDogZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBzZXR1cCBnb29nbGUgYW5hbHl0aWNzXG5cdFx0XHR2YXIgZ29vZ2xlQW5hbHl0aWNzVHJhY2tpbmdJRCA9ICdVQS00MzI3NTA0OC00Jztcblx0XHRcdGdvb2dsZUFuYWx5dGljcy5pbml0aWFsaXplKGdvb2dsZUFuYWx5dGljc1RyYWNraW5nSUQpO1xuXHRcdFx0Ly8gc2V0dXAgc2lkZWJhciBsaW5rc1xuXHRcdFx0aW5pdFNlY3Rpb25TY3JvbGxMaW5rcygpO1xuXHRcdH0sXG5cdH07XG5cblxufSkoKTtcblxubW9kdWxlLmV4cG9ydHMuTWFpbiA9IE1haW4uaW5pdGlhbGl6ZSgpO1xuIl19
