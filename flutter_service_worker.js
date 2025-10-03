'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8acff9e4d2585b72712e1035addc9ca8",
"assets/AssetManifest.bin.json": "bd32f75c3381db0a152968deee62df7f",
"assets/AssetManifest.json": "543a052cd51fe69fff61b215177a1f3c",
"assets/Assets/BannerStore.png": "6d2b5981966f8729a38f84e9ce5d6421",
"assets/Assets/Banner_teste.png": "de79a03cc5ebb1afa83f3750e6ce1d11",
"assets/Assets/BoxShare.png": "56a89ba6bbd98dc997b0288e0d410178",
"assets/Assets/Coin/CoinBG.png": "2dd5fb5384cee8bb872cc7799ff49550",
"assets/Assets/Coin/CoinImage.png": "865eaf1133422906045726f6a71401a9",
"assets/Assets/Coin/Coins.png": "45b90166bb7a30eb02b64e92696412c1",
"assets/Assets/default.png": "9a57cfbfd3dc5e72bef19641d47aaedb",
"assets/Assets/Icons/addamigo.png": "a0ad23a010f92f666fe461cf06e819d3",
"assets/Assets/Icons/Aleatorio.png": "8386dc54f47c7bdef43b6028b13410a2",
"assets/Assets/Icons/bolacha.png": "2cb4f4721947cef6667a140bda080f32",
"assets/Assets/Icons/camisa.png": "eda54772abd26dde9b72bd3eab1e2076",
"assets/Assets/Icons/check.png": "4e91c6c2016816aa0081198e917fd4e6",
"assets/Assets/Icons/Clear.png": "0571438b616481cc671c6999c3037a5c",
"assets/Assets/Icons/como_funciona.png": "0e44f188199b4495b6e16aae9daf79d8",
"assets/Assets/Icons/compartilhar.png": "e49e1776ac58e1111507e129833cc18c",
"assets/Assets/Icons/Editar.png": "0c2880955910cf9ce816a81354369ae6",
"assets/Assets/Icons/Enviar.png": "62bf8c108d94f9d494221f93584e3d71",
"assets/Assets/Icons/Fechar.png": "f8237804f74fc7014e143ccd9253ab7b",
"assets/Assets/Icons/Fogo.png": "2ff7261fb9fb6e895430c400b653828d",
"assets/Assets/Icons/link.png": "95cf95e38edb7291c74e7f2f9751ae67",
"assets/Assets/Icons/Lock.png": "78e7df479b551722d0511ffcbb963501",
"assets/Assets/Icons/loja.png": "9fe6c5ce0f7a5febac8bbb0a3981a161",
"assets/Assets/Icons/membros.png": "7e91bac9b92f29456637995648a699df",
"assets/Assets/Icons/meus_desafios.png": "b24c884dedea07f61ca4e45cbcebc041",
"assets/Assets/Icons/mic.png": "3710cee673752d7f6596cdcb91b6d7da",
"assets/Assets/Icons/notificacoes.png": "22b3ebb34362abbc3bfb6c750e86670c",
"assets/Assets/Icons/Parar.png": "c23b367b90566f27684b2529134813bb",
"assets/Assets/Icons/perfil.png": "4308693bdf673f21cc8ac9f713193209",
"assets/Assets/Icons/Ranking.png": "238c3f76ec3e063c84bbb2a951afa35e",
"assets/Assets/Icons/regras.png": "03ed14394334604a2c13cb913f027128",
"assets/Assets/Icons/resenha.png": "420b19de0ad7be332f9340c5c976268d",
"assets/Assets/Icons/Resp.png": "422c9cf17d546a214ac134565027ffcb",
"assets/Assets/Icons/Resp2.png": "dc64972b013afc9ccdcbe8e927ff05eb",
"assets/Assets/Icons/sobre_nos.png": "b8e701102ab4f116958ce24316ed1e9e",
"assets/Assets/Icons/termos_condicoes.png": "3586eff23bca84284aa55f85b532e171",
"assets/Assets/Icons/Tocar.png": "e00ec69f37cbb261f7380f89732859d3",
"assets/Assets/Icons/Trocar.png": "e5ced046254bad71a732ad3617329e43",
"assets/Assets/Icons/vuvuzelas.png": "91f5101d29c4afe9c072ad90ee103fd0",
"assets/Assets/Icons/whatsapp.png": "518d3f841dd1c598536d4c3b55ed2a85",
"assets/Assets/linha_toldo.png": "a9d8d3872a761ee1f5f5117d2ac7c236",
"assets/Assets/LiveIcon.png": "733af13a4110418999fa6d3626c38459",
"assets/Assets/Login/Facebook.png": "dcf7efe844467243492696cace248a85",
"assets/Assets/Login/Google.png": "88f42a3855d61a2e3521d67e40af3d3f",
"assets/Assets/Logo/BGLogo.png": "ab9d6af2bef9aca7799c66e19ce9abff",
"assets/Assets/Logo/Logo.png": "64f2f49338616995270b1bfa380f9e29",
"assets/Assets/Logo/Logo86.png": "8bfa5b13bc961eed97250dcabe0e05a8",
"assets/Assets/Logo/LogoIzo.png": "6f0d6170a6922858bdb64037e53e01d2",
"assets/Assets/Na_Faixa.png": "57625b6ae471af7aa39e64b7a2fc2b5d",
"assets/Assets/offer_test.png": "75bf2c7828a31f729abefae5becf3654",
"assets/Assets/Onboarding/1.png": "9969ecb6ad5cbf1868d5fad2d0415e01",
"assets/Assets/Onboarding/2.png": "88452a00add2c6897c04c2b73d51cf99",
"assets/Assets/Onboarding/3.png": "d815843ded2e4d3e3929e69e4cfc62ce",
"assets/Assets/Onboarding/4.png": "4e13cbdd7d6f44935f97ccc1eaba7849",
"assets/Assets/PopUpLigth.png": "99772f6b8dd631bf5eaae1b6b6f1727a",
"assets/Assets/SummaryX.png": "a35e8d31f5684c32c7e4faf7228c9bae",
"assets/Assets/team_test.png": "27832f2f7e189de68daa148218e64d51",
"assets/Assets/team_test2.png": "49101d5bd928be97dd307a4a0d8e7562",
"assets/Assets/tenda.png": "33a33321f69c9d94f40c1961a2d27e06",
"assets/Assets/Ticket.png": "36610a659be522834de4f2bf2fd45470",
"assets/Assets/Trofeus_Vazio.png": "1fcd33ec84991a61202f58a2c28ccd86",
"assets/Assets/user_teste.png": "3cb862ac3e570125bbe934c03d460023",
"assets/Assets/user_testeB.png": "39562181c359779fa98e5de128e99d0c",
"assets/Assets/X.png": "7ae43934283117674fa6ca4c9cc46e1f",
"assets/FontManifest.json": "de5d56b3599db9b8409974ade86e762a",
"assets/Fonts/Hogfish.otf": "6176196af409f8400a8901ac77114cc4",
"assets/Fonts/Lato-Black.ttf": "d83ab24f5cf2be8b7a9873dd64f6060a",
"assets/Fonts/Lato-BlackItalic.ttf": "047217f671c9e0849c97d43e26543046",
"assets/Fonts/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/Fonts/Lato-BoldItalic.ttf": "acc03ac1e9162f0388c005177d55d762",
"assets/Fonts/Lato-Italic.ttf": "5d22f337a040ae2857e36e7c5800369b",
"assets/Fonts/Lato-Light.ttf": "2bcc211c05fc425a57b2767a4cdcf174",
"assets/Fonts/Lato-LightItalic.ttf": "2404a6da847c878edbc8280745365cba",
"assets/Fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/Fonts/Lato-Thin.ttf": "7ab0bc06eecc1b75f8708aba3d3b044a",
"assets/Fonts/Lato-ThinItalic.ttf": "2b26bc77c3f9432c9d4ca4911520294d",
"assets/Fonts/MaterialIcons-Regular.otf": "28dfd3a73dfc20b0c24fb0500873fefc",
"assets/NOTICES": "1eb31a6b25a918b1504094f152fd09e5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_sound/assets/js/async_processor.js": "1665e1cb34d59d2769956d2f14290274",
"assets/packages/flutter_sound/assets/js/tau_web.js": "32cc693445f561133647b10d1b97ca07",
"assets/packages/flutter_sound_web/howler/howler.js": "3030c6101d2f8078546711db0d1a24e9",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "3c26fcc60917c4cbaa6a30a231f7d4d8",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "b14f8d190230d77c02ffc51ce962ce80",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "0ec45f8c46d7ddb18691714c0c7348c8",
"assets/packages/flutter_sound_web/src/flutter_sound_stream_processor.js": "48d52b8f36a769ea0e90cf9e58eddfa7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "23b54f63ba1cceb495d7786401670778",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "284d12d9a5ec02b22724d3dbaff377ab",
"/": "284d12d9a5ec02b22724d3dbaff377ab",
"main.dart.js": "e6349fb916024cb96231a1c78645aa49",
"manifest.json": "0308c741689c73c2daeb14a357e53d93",
"version.json": "6c6046a1975d6b30cb9005732263f3e6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
