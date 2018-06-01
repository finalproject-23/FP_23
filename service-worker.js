/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["assets/css/bootstrap.min.css","e59aa29ac4a3d18d092f6ba813ae1997"],["assets/css/fa-brands.css","ef4b96231c1c8e5bc6d2018ff59ee62e"],["assets/css/fa-brands.min.css","e7771f7bdea7a420973e20cd173a1b19"],["assets/css/fa-regular.css","4dc9fb8af478dad580da0763c3bb2c4d"],["assets/css/fa-regular.min.css","b7a248c091ece954a64f4fde5dae801d"],["assets/css/fa-solid.css","f59b676f5ab1dca6ba71e7eba50cd004"],["assets/css/fa-solid.min.css","286b42d8d5ab6254c10c8cfbc00ce955"],["assets/css/fontawesome-all.css","0a2ed388e9c6ab831acb42c006aa91a3"],["assets/css/fontawesome-all.min.css","d61bfe9b56c13ecff5313ee3abb45e8b"],["assets/css/fontawesome.css","695883f214d9afb980d1fdc2fca6ee1a"],["assets/css/fontawesome.min.css","497c6efa3acaba85fb0a1b4f76b61bde"],["assets/css/main.css","cd49043084b548a50d7bbcbb37376b30"],["assets/css/pagination.css","d4d1ea4a395f3343827678c5835d7d2e"],["assets/css/post-1-page.css","2b482711d0cf3365f0a0a33641783c32"],["assets/css/post-list.css","6a2531fdcf075dc501c39667048ebf82"],["assets/css/testimoni.css","7875195cd55b718a7d306888212c0cde"],["assets/fonts/Quicksand/Quicksand-Bold.ttf","0c04462696ac0fd3e85e75415b483fdb"],["assets/fonts/Quicksand/Quicksand-Light.ttf","c5f954788f341b22e1974433bb972ac1"],["assets/fonts/Quicksand/Quicksand-Medium.ttf","0c64233241ead44bffbec54eb9d1d164"],["assets/fonts/Quicksand/Quicksand-Regular.ttf","f87b9b4f34bdbf75b5c0cf3a5a137508"],["assets/img/16_11_0058.jpg","685c8fc8ea8a151793cd0ecdc7ad8ddf"],["assets/img/AR23_logo.svg","7b1435cf34d3197386ad58dd03829b57"],["assets/img/Inori Minase (rem).jpg","60b963162eae4afc96f565bb63455a65"],["assets/img/b-001-300x300.jpg","b19fcc5f2f0fd057293944a673f67f72"],["assets/img/b-005-300x300.jpg","c1b59faf9da2281fb77111b92689504a"],["assets/img/b-008-300x300.jpg","0a3c42501896000b9cf947500ed486db"],["assets/img/b-009-300x300.jpg","9b124ddc6d59f651ed4fc039fb65a86f"],["assets/img/discussion.jpg","89283b73d64ee5f06895577b3607ad2c"],["assets/img/head-a.png","bf384e84d3b925bcdf8d0de2b91bee77"],["assets/img/head-b.png","c43cf0c053492183af08cfa769c5fe4a"],["assets/img/head-c.png","a8c3946980e6bfd32715421f125708e2"],["assets/img/header1-min.jpg","4839bf671baba9b542bff7f0474efa3f"],["assets/img/icons/favicon-outline72.png","e5cddd4f1e418f85c5b3689f74561b0e"],["assets/img/icons/favicon128.png","dfe6737d7b4db02209d51aea42b933fd"],["assets/img/icons/favicon144.png","ad95644f918743a523b04bdf73960a7c"],["assets/img/icons/favicon152.png","e6c5ca39fbb2dd444859c1f7a7201fac"],["assets/img/icons/favicon192.png","5e089a44a802514aafc88d8a0783a570"],["assets/img/icons/favicon384.png","60ce6b002a4905d4deadc0da3907f456"],["assets/img/icons/favicon512.png","172cd1dae3bb58449a0799cbbeecbc61"],["assets/img/icons/favicon72.png","5150f634a3ddf0d3979380dcabe4fc00"],["assets/img/icons/favicon96.png","777e18c114b63199d1cd512b9612a8fb"],["assets/img/icons/fplogodark128.png","168c5cfe6a7fc8e47d7b48b1ba31545f"],["assets/img/icons/fplogodark144.png","0ce4bba7e2153f10f5b49e01d0a8be9e"],["assets/img/icons/fplogodark152.png","f7990b1af7639a74b7f7444c0a1c47fe"],["assets/img/icons/fplogodark192.png","ae1b55e772992e0306722de1a6312fec"],["assets/img/icons/fplogodark384.png","3e6df9a80d6e4a5a5ef95c0f9a7b4705"],["assets/img/icons/fplogodark512.png","f42608d0eedb7b022d6bd2539aa9db1e"],["assets/img/icons/fplogodark72.png","c49782ef658b597b6a4998732fdcefdc"],["assets/img/icons/fplogodark96.png","2cdbf5f499b49741eb0d23affc25b8c4"],["assets/img/icons/logofp128.png","41f2b478c3a5dbca7344fb527e765ac3"],["assets/img/icons/logofp144.png","a7007ab97e281743f73c4a7bca4e0a55"],["assets/img/icons/logofp152.png","361cd37abab008785212d6a38594576c"],["assets/img/icons/logofp192.png","6c4c090940f08fd5b4194e8a69a2358d"],["assets/img/icons/logofp384.png","80d9ec6d47d0f289053dfcd224149cc1"],["assets/img/icons/logofp512.png","4faaae477e722f92844dd54c5e0f438e"],["assets/img/icons/logofp72.png","1bafb4d4ea028c5aee7b91caf843d59c"],["assets/img/icons/logofp96.png","5d6749fec3c09e7b955f801b29a61cdf"],["assets/img/icons/logofpsvg.svg","cc4f57bbe14cca9f110a3a8009710da4"],["assets/img/icontest1.jpg","d87f552daa5102aa50986f49f455f56c"],["assets/img/icontest2.jpg","e206af86defb9ad4a0dd089bf5d19d31"],["assets/img/office.jpg","838be82c8a1f7135394655bc56c9ea6a"],["assets/img/topik_1_.png","299981883879f55f5ec89640b30398b6"],["assets/pictures/0_pemH-XsqF5BFiiVm.jpg","e0d29773ec4b11bd115e6378a21e34ff"],["assets/pictures/0a0ceda4bda18e664ffac1a8fa86a7d1.jpg","b0b954ba6a75c8571e3f48442c1d7cd6"],["assets/pictures/1383951646498.png","fd77c11c8ae9ad753b4b9b24212889e7"],["assets/pictures/58c91e077fce8_thumb900.jpg","3b0bf53812e10c5954411db28ef1d43e"],["assets/pictures/adiputro.png","7f32a07443dc32aa27ad78250b19573d"],["assets/pictures/b-001-300x300.jpg","b19fcc5f2f0fd057293944a673f67f72"],["assets/pictures/b-005-300x300.jpg","c1b59faf9da2281fb77111b92689504a"],["assets/pictures/b-008-300x300.jpg","0a3c42501896000b9cf947500ed486db"],["assets/pictures/b-009-300x300.jpg","9b124ddc6d59f651ed4fc039fb65a86f"],["assets/pictures/freee-ui-mockup-psd-1000x681.jpg","e74f67fbdd3c0ecf409f3d4e608b4777"],["assets/pictures/logo indomart.png","129adcd9e7241ff14bed977990ac0d7e"],["assets/pictures/logo-bus-pariwisata-blue-star.png","ee3a9d6b8eb929610f44cbcaeb7b5c68"],["assets/pictures/people-office-group-team.jpg","5f20a084727fc71777ce603a29f7bf88"],["assets/pictures/suasana-di-kantor-google_20150616_111950.jpg","edb1735e0c473e7e5261789019d2e1ba"],["assets/pictures/traditional-home-gym.jpg","6abf1967f61825e3c9a98cd4d08241d4"],["assets/pictures/unilerver_blog.png","7f94cc38f9962863c2c8bda950efb520"],["assets/pictures/viewImage.jpg","235760750680de65024ec1e4d2c21971"],["assets/webfonts/fa-brands-400.eot","748ab466bee11e0b2132916def799916"],["assets/webfonts/fa-brands-400.svg","b032e14eac87e3001396ff597e4ec15f"],["assets/webfonts/fa-brands-400.ttf","7febe26eeb4dd8e3a3c614a144d399fb"],["assets/webfonts/fa-brands-400.woff","2248542e1bbbd548a157e3e6ced054fc"],["assets/webfonts/fa-brands-400.woff2","3654744dc6d6c37c9b3582b57622df5e"],["assets/webfonts/fa-regular-400.eot","b58f468f84168d61e0ebc1e1f423587c"],["assets/webfonts/fa-regular-400.svg","3929b3ef871fa90bbb4e77e005851e74"],["assets/webfonts/fa-regular-400.ttf","54f142e03adc6da499c2af4f54ab76fd"],["assets/webfonts/fa-regular-400.woff","f3dd4f397fbc5aaf831b6b0ba112d75c"],["assets/webfonts/fa-regular-400.woff2","33f727ccde4b05c0ed143c5cd78cda0c"],["assets/webfonts/fa-solid-900.eot","035a137af03db6f1af76a589da5bb865"],["assets/webfonts/fa-solid-900.svg","9bbbee00f65769a64927764ef51af6d0"],["assets/webfonts/fa-solid-900.ttf","b6a14bb88dbc580e45034af297c8f605"],["assets/webfonts/fa-solid-900.woff","6661d6b3521b4c480ba759e4b9e480c1"],["assets/webfonts/fa-solid-900.woff2","8a8c0474283e0d9ef41743e5e486bf05"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
		var url = new URL(originalUrl);
		if (url.pathname.slice(-1) === '/') {
			url.pathname += index;
		}
		return url.toString();
	};

var cleanResponse = function (originalResponse) {
		// If this is not a redirected response, then we don't have to do anything.
		if (!originalResponse.redirected) {
			return Promise.resolve(originalResponse);
		}

		// Firefox 50 and below doesn't support the Response.body stream, so we may
		// need to read the entire body to memory as a Blob.
		var bodyPromise = 'body' in originalResponse ?
			Promise.resolve(originalResponse.body) :
			originalResponse.blob();

		return bodyPromise.then(function(body) {
			// new Response() is happy when passed either a stream or a Blob.
			return new Response(body, {
				headers: originalResponse.headers,
				status: originalResponse.status,
				statusText: originalResponse.statusText
			});
		});
	};

var createCacheKey = function (originalUrl, paramName, paramValue, dontCacheBustUrlsMatching) {
		// Create a new URL object to avoid modifying originalUrl.
		var url = new URL(originalUrl);

		// If dontCacheBustUrlsMatching is not set, or if we don't have a match,
		// then add in the extra cache-busting URL parameter.
		if (!dontCacheBustUrlsMatching ||
				!(url.pathname.match(dontCacheBustUrlsMatching))) {
			url.search += (url.search ? '&' : '') +
				encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
		}

		return url.toString();
	};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
		// If the whitelist is empty, then consider all URLs to be whitelisted.
		if (whitelist.length === 0) {
			return true;
		}

		// Otherwise compare each path regex to the path of the URL passed in.
		var path = (new URL(absoluteUrlString)).pathname;
		return whitelist.some(function(whitelistedPathRegex) {
			return path.match(whitelistedPathRegex);
		});
	};

var stripIgnoredUrlParameters = function (originalUrl,
		ignoreUrlParametersMatching) {
		var url = new URL(originalUrl);
		// Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
		url.hash = '';

		url.search = url.search.slice(1) // Exclude initial '?'
			.split('&') // Split into an array of 'key=value' strings
			.map(function(kv) {
				return kv.split('='); // Split each 'key=value' string into a [key, value] array
			})
			.filter(function(kv) {
				return ignoreUrlParametersMatching.every(function(ignoredRegex) {
					return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
				});
			})
			.map(function(kv) {
				return kv.join('='); // Join each [key, value] array into a 'key=value' string
			})
			.join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

		return url.toString();
	};


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
	precacheConfig.map(function(item) {
		var relativeUrl = item[0];
		var hash = item[1];
		var absoluteUrl = new URL(relativeUrl, self.location);
		var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
		return [absoluteUrl.toString(), cacheKey];
	})
);

function setOfCachedUrls(cache) {
	return cache.keys().then(function(requests) {
		return requests.map(function(request) {
			return request.url;
		});
	}).then(function(urls) {
		return new Set(urls);
	});
}

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(cacheName).then(function(cache) {
			return setOfCachedUrls(cache).then(function(cachedUrls) {
				return Promise.all(
					Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
						// If we don't have a key matching url in the cache already, add it.
						if (!cachedUrls.has(cacheKey)) {
							var request = new Request(cacheKey, {credentials: 'same-origin'});
							return fetch(request).then(function(response) {
								// Bail out of installation unless we get back a 200 OK for
								// every request.
								if (!response.ok) {
									throw new Error('Request for ' + cacheKey + ' returned a ' +
										'response with status ' + response.status);
								}

								return cleanResponse(response).then(function(responseToCache) {
									return cache.put(cacheKey, responseToCache);
								});
							});
						}
					})
				);
			});
		}).then(function() {
			
			// Force the SW to transition from installing -> active state
			return self.skipWaiting();
			
		})
	);
});

self.addEventListener('activate', function(event) {
	var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

	event.waitUntil(
		caches.open(cacheName).then(function(cache) {
			return cache.keys().then(function(existingRequests) {
				return Promise.all(
					existingRequests.map(function(existingRequest) {
						if (!setOfExpectedUrls.has(existingRequest.url)) {
							return cache.delete(existingRequest);
						}
					})
				);
			});
		}).then(function() {
			
			return self.clients.claim();
			
		})
	);
});


self.addEventListener('fetch', function(event) {
	if (event.request.method === 'GET') {
		// Should we call event.respondWith() inside this fetch event handler?
		// This needs to be determined synchronously, which will give other fetch
		// handlers a chance to handle the request if need be.
		var shouldRespond;

		// First, remove all the ignored parameters and hash fragment, and see if we
		// have that URL in our cache. If so, great! shouldRespond will be true.
		var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
		shouldRespond = urlsToCacheKeys.has(url);

		// If shouldRespond is false, check again, this time with 'index.html'
		// (or whatever the directoryIndex option is set to) at the end.
		var directoryIndex = 'index.html';
		if (!shouldRespond && directoryIndex) {
			url = addDirectoryIndex(url, directoryIndex);
			shouldRespond = urlsToCacheKeys.has(url);
		}

		// If shouldRespond is still false, check to see if this is a navigation
		// request, and if so, whether the URL matches navigateFallbackWhitelist.
		var navigateFallback = '';
		if (!shouldRespond &&
				navigateFallback &&
				(event.request.mode === 'navigate') &&
				isPathWhitelisted([], event.request.url)) {
			url = new URL(navigateFallback, self.location).toString();
			shouldRespond = urlsToCacheKeys.has(url);
		}

		// If shouldRespond was set to true at any point, then call
		// event.respondWith(), using the appropriate cache key.
		if (shouldRespond) {
			event.respondWith(
				caches.open(cacheName).then(function(cache) {
					return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
						if (response) {
							return response;
						}
						throw Error('The cached response that was expected is missing.');
					});
				}).catch(function(e) {
					// Fall back to just fetch()ing the request if some unexpected error
					// prevented the cached response from being valid.
					console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
					return fetch(event.request);
				})
			);
		}
	}
});







