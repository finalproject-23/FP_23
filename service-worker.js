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

var precacheConfig = [["about.html","2943fecb572286634ebe9c3911053d5a"],["assets/css/bootstrap.min.css","e59aa29ac4a3d18d092f6ba813ae1997"],["assets/css/fa-brands.css","d3942899ca89fabf32eb732e69c24ce0"],["assets/css/fa-brands.min.css","a52c0a6b27c784cf6024ba4c127a52f7"],["assets/css/fa-regular.css","350952f612cbd1671d3d360346a58a2f"],["assets/css/fa-regular.min.css","910612c54fe0d9da29cd9ef7bfeceaca"],["assets/css/fa-solid.css","f55363663db5c83687384e2366445d37"],["assets/css/fa-solid.min.css","3d5f4e52757af6a2bc2b91fad4007d46"],["assets/css/fontawesome-all.css","be72be62d9962a76d84cdbfbb04160e5"],["assets/css/fontawesome-all.min.css","526fe1e1a6f12b2ac2556ac6c0ee3af3"],["assets/css/fontawesome.css","94dd8dc4666d24448ad5ada48f7e6e6c"],["assets/css/fontawesome.min.css","be0bc83d01dea4d453a9e3986c480182"],["assets/css/main.css","ee7f017ad43d01a23ef84cd3adcea15f"],["assets/css/pagination.css","d4d1ea4a395f3343827678c5835d7d2e"],["assets/css/portofolio.css","3503b2d955b88edccd8db47a28cc1453"],["assets/css/post-1-page.css","a347de165ea75793f2537a8ad5b4e894"],["assets/css/post-list.css","451c495f43b66fa3831b6602bf96ade9"],["assets/css/testimoni.css","74e1a6d00da91f2247fe23249098d715"],["assets/fonts/Quicksand/Quicksand-Bold.ttf","0c04462696ac0fd3e85e75415b483fdb"],["assets/fonts/Quicksand/Quicksand-Light.ttf","c5f954788f341b22e1974433bb972ac1"],["assets/fonts/Quicksand/Quicksand-Medium.ttf","0c64233241ead44bffbec54eb9d1d164"],["assets/fonts/Quicksand/Quicksand-Regular.ttf","f87b9b4f34bdbf75b5c0cf3a5a137508"],["assets/img/16_11_0058-thumb.jpg","bbe4e248593214d7dde26d8d76c68923"],["assets/img/16_11_0058.jpg","685c8fc8ea8a151793cd0ecdc7ad8ddf"],["assets/img/AR23_logo.svg","7b1435cf34d3197386ad58dd03829b57"],["assets/img/Inori Minase (rem).jpg","60b963162eae4afc96f565bb63455a65"],["assets/img/Inori Minase-alt.jpg","96d43a22334d2c4f9ebdd56ee3aa9028"],["assets/img/b-001-300x300.jpg","b19fcc5f2f0fd057293944a673f67f72"],["assets/img/b-005-300x300.jpg","c1b59faf9da2281fb77111b92689504a"],["assets/img/b-008-300x300.jpg","0a3c42501896000b9cf947500ed486db"],["assets/img/b-009-300x300.jpg","9b124ddc6d59f651ed4fc039fb65a86f"],["assets/img/discussion.jpg","89283b73d64ee5f06895577b3607ad2c"],["assets/img/h6-p4-min.jpg","f00a8703d3b22e27e04874709530565a"],["assets/img/head-a.png","bf384e84d3b925bcdf8d0de2b91bee77"],["assets/img/head-b.png","c43cf0c053492183af08cfa769c5fe4a"],["assets/img/head-c.png","a8c3946980e6bfd32715421f125708e2"],["assets/img/header1-min.png","c67a09cc9c9ccb02623f2b2289f65679"],["assets/img/icons/fav128.png","90bde952eadf9edd6a1b1c473e4ec297"],["assets/img/icons/fav144.png","f36c3555eedcae82faa7589dc265f972"],["assets/img/icons/fav152.png","f4212c10f4286081dfc81409b90f7aac"],["assets/img/icons/fav192.png","45078c789904c0218570e2d815632cc4"],["assets/img/icons/fav384.png","b5d134f2b421aef3d2a3d24aa53de55c"],["assets/img/icons/fav512.png","b15ad85c4fd3aef4c26cc478bd4caf9f"],["assets/img/icons/fav72.png","b7ea2b182be7f8a562e454cf7d2e06ad"],["assets/img/icons/fav96.png","3dd90a270240886699f2c52f8a92c495"],["assets/img/icons/favicon-outline72.png","e5cddd4f1e418f85c5b3689f74561b0e"],["assets/img/icons/favicon128.png","dfe6737d7b4db02209d51aea42b933fd"],["assets/img/icons/favicon144.png","ad95644f918743a523b04bdf73960a7c"],["assets/img/icons/favicon152.png","e6c5ca39fbb2dd444859c1f7a7201fac"],["assets/img/icons/favicon192.png","5e089a44a802514aafc88d8a0783a570"],["assets/img/icons/favicon384.png","60ce6b002a4905d4deadc0da3907f456"],["assets/img/icons/favicon512.png","172cd1dae3bb58449a0799cbbeecbc61"],["assets/img/icons/favicon72.png","5150f634a3ddf0d3979380dcabe4fc00"],["assets/img/icons/favicon96.png","777e18c114b63199d1cd512b9612a8fb"],["assets/img/icons/faviconsvg.svg","d0915105e5d96357b1d2d92586802be0"],["assets/img/icons/fplogodark128.png","168c5cfe6a7fc8e47d7b48b1ba31545f"],["assets/img/icons/fplogodark144.png","0ce4bba7e2153f10f5b49e01d0a8be9e"],["assets/img/icons/fplogodark152.png","f7990b1af7639a74b7f7444c0a1c47fe"],["assets/img/icons/fplogodark192.png","ae1b55e772992e0306722de1a6312fec"],["assets/img/icons/fplogodark384.png","3e6df9a80d6e4a5a5ef95c0f9a7b4705"],["assets/img/icons/fplogodark512.png","f42608d0eedb7b022d6bd2539aa9db1e"],["assets/img/icons/fplogodark72.png","c49782ef658b597b6a4998732fdcefdc"],["assets/img/icons/fplogodark96.png","2cdbf5f499b49741eb0d23affc25b8c4"],["assets/img/icons/list.png","01f7f668fa3d4a0f5d51d0f0d53925f5"],["assets/img/icons/logofp128.png","41f2b478c3a5dbca7344fb527e765ac3"],["assets/img/icons/logofp144.png","a7007ab97e281743f73c4a7bca4e0a55"],["assets/img/icons/logofp152.png","361cd37abab008785212d6a38594576c"],["assets/img/icons/logofp192.png","6c4c090940f08fd5b4194e8a69a2358d"],["assets/img/icons/logofp384.png","80d9ec6d47d0f289053dfcd224149cc1"],["assets/img/icons/logofp512.png","4faaae477e722f92844dd54c5e0f438e"],["assets/img/icons/logofp72.png","1bafb4d4ea028c5aee7b91caf843d59c"],["assets/img/icons/logofp96.png","5d6749fec3c09e7b955f801b29a61cdf"],["assets/img/icons/logofpsvg.svg","cc4f57bbe14cca9f110a3a8009710da4"],["assets/img/icontest1.jpg","d87f552daa5102aa50986f49f455f56c"],["assets/img/icontest2-thumb.jpg","3d0b01ac8875adeb76ec149085818271"],["assets/img/icontest2.jpg","e206af86defb9ad4a0dd089bf5d19d31"],["assets/img/office.jpg","838be82c8a1f7135394655bc56c9ea6a"],["assets/img/topik_1_.png","299981883879f55f5ec89640b30398b6"],["assets/pictures/0_pemH-XsqF5BFiiVm.jpg","e0d29773ec4b11bd115e6378a21e34ff"],["assets/pictures/0a0ceda4bda18e664ffac1a8fa86a7d1.jpg","b0b954ba6a75c8571e3f48442c1d7cd6"],["assets/pictures/1383951646498.png","fd77c11c8ae9ad753b4b9b24212889e7"],["assets/pictures/58c91e077fce8_thumb900.jpg","3b0bf53812e10c5954411db28ef1d43e"],["assets/pictures/adiputro.png","7f32a07443dc32aa27ad78250b19573d"],["assets/pictures/b-001-300x300.jpg","b19fcc5f2f0fd057293944a673f67f72"],["assets/pictures/b-005-300x300.jpg","c1b59faf9da2281fb77111b92689504a"],["assets/pictures/b-008-300x300.jpg","0a3c42501896000b9cf947500ed486db"],["assets/pictures/b-009-300x300.jpg","9b124ddc6d59f651ed4fc039fb65a86f"],["assets/pictures/freee-ui-mockup-psd-1000x681.jpg","e74f67fbdd3c0ecf409f3d4e608b4777"],["assets/pictures/logo indomart.png","129adcd9e7241ff14bed977990ac0d7e"],["assets/pictures/logo-bus-pariwisata-blue-star.png","ee3a9d6b8eb929610f44cbcaeb7b5c68"],["assets/pictures/people-office-group-team.jpg","5f20a084727fc71777ce603a29f7bf88"],["assets/pictures/portofolio/Perspective-Product-App-Screen.jpg","2cd8eba3f390d98594f818517d5946e0"],["assets/pictures/portofolio/Yardsale-Shirt-angled-min.jpg","4e6e83bc1007949f732cc3397447b7f2"],["assets/pictures/portofolio/day-night3.png","838415965cb503b65b5ccf2c180d884f"],["assets/pictures/portofolio/doublenaut_newshirts-min.jpg","a047b8053f4a98a98c90b586d709e5ce"],["assets/pictures/portofolio/doublenaut_tshirts-min.jpg","282df74b206d981abd0dcf6d6a21c389"],["assets/pictures/portofolio/hello-spaceman-sticerk.png","0303d46528e5b6284b72c4aaeb742cf6"],["assets/pictures/portofolio/img_0006-min.jpg","1f4b111725f21128354d3aa981536642"],["assets/pictures/portofolio/shirt_large.png","81cb694166c0974da455ccade0a4cce2"],["assets/pictures/portofolio/star-wars-stickers.png","6738dfffe6c34f4c9f0af7104c638bba"],["assets/pictures/portofolio/tomatte_dribbble.png","cf0fdd9c8460cc3498af9a6e5b671153"],["assets/pictures/suasana-di-kantor-google_20150616_111950.jpg","edb1735e0c473e7e5261789019d2e1ba"],["assets/pictures/traditional-home-gym.jpg","6abf1967f61825e3c9a98cd4d08241d4"],["assets/pictures/unilerver_blog.png","7f94cc38f9962863c2c8bda950efb520"],["assets/pictures/viewImage.jpg","235760750680de65024ec1e4d2c21971"],["assets/webfonts/fa-brands-400.eot","748ab466bee11e0b2132916def799916"],["assets/webfonts/fa-brands-400.svg","5c2d83d411cb3a620642748047b0a78f"],["assets/webfonts/fa-brands-400.ttf","7febe26eeb4dd8e3a3c614a144d399fb"],["assets/webfonts/fa-brands-400.woff","2248542e1bbbd548a157e3e6ced054fc"],["assets/webfonts/fa-brands-400.woff2","3654744dc6d6c37c9b3582b57622df5e"],["assets/webfonts/fa-regular-400.eot","b58f468f84168d61e0ebc1e1f423587c"],["assets/webfonts/fa-regular-400.svg","20af3d0e89d84cfca261212bfea3cb28"],["assets/webfonts/fa-regular-400.ttf","54f142e03adc6da499c2af4f54ab76fd"],["assets/webfonts/fa-regular-400.woff","f3dd4f397fbc5aaf831b6b0ba112d75c"],["assets/webfonts/fa-regular-400.woff2","33f727ccde4b05c0ed143c5cd78cda0c"],["assets/webfonts/fa-solid-900.eot","035a137af03db6f1af76a589da5bb865"],["assets/webfonts/fa-solid-900.svg","84de948308071ac57e45479e1508e022"],["assets/webfonts/fa-solid-900.ttf","b6a14bb88dbc580e45034af297c8f605"],["assets/webfonts/fa-solid-900.woff","6661d6b3521b4c480ba759e4b9e480c1"],["assets/webfonts/fa-solid-900.woff2","8a8c0474283e0d9ef41743e5e486bf05"],["blog/portofolio/portofolio1.html","8239252d78c74eceb48721b7ede478d9"],["blog/portofolio/portofolio2.html","0604336f12277a28f6390d0c0da987a6"],["blog/portofolio/portofolio3.html","2c45748e82217f76cee0ead4c9608396"],["blog/portofolio/portofolio4.html","1125e0948fdeca828673761d34f8f0d5"],["blog/portofolio/portofolio5.html","106c6f28fda675d52a63fe70ad5f3c93"],["blog/portofolio/portofolio6.html","8d82d47646c30176249eb03aa0a32156"],["blog/service/adv.html","1510ff79c67d6436a540c94b08d526ce"],["blog/service/ecommerce.html","7c4c014d2190740447c3af93db1682d3"],["blog/service/ui.html","80912382f9b07f00df17edbb8824ffed"],["blog/service/video.html","9229d50928c9d993f85afe6e9dfbda71"],["contact-us.html","c2fb2a1214c4982494aedfc65e0f4244"],["faq.html","3308fd98afbca05c45f4a053b3c28957"],["index.html","5b10dbcbf85cae7092b520e80ca91318"],["portofolio-post.html","97c3f4554c062c8f2aaee33b3264da76"],["portofolio.html","6e7c0d574edab3d433269d6292116685"],["post-1-page.html","24784e8f9cb88e220c34f9cc54ff3686"],["post-list.html","e3d77e4a334e8d76dfe690964086ee90"],["service.html","02567a7069501f3c5acb7effdbcdfcbf"],["testimoni.html","4c2e32d9b6e3f62157f85b99dfabc5f8"]];
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


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get(/^https: \/\/artterror\.cf\//, toolbox.networkFirst, {});
