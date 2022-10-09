var blueprint3d = null;
var aGlobal = null;
var anItem = null;
var aWall = null;
var aFloor = null;
var aCameraRange = null;
var gui = null;
var globalPropFolder = null;
var itemPropFolder = null;
var wallPropFolder = null;
var floorPropFolder = null;
var cameraPropFolder = null;
var selectionsFolder = null;

var myhome = '{"floorplan":{"version":"0.0.2a","corners":{"951f11c2-b7a5-5af5-3a77-22e18f5018c6":{"x":0.083,"y":4.173,"elevation":2.5},"56a127f3-69d0-c65d-365a-6b74675994fc":{"x":-1.717,"y":4.173,"elevation":2.5},"afa4674a-b0d9-66ef-f2bb-60b70b5150ee":{"x":-1.717,"y":7.173,"elevation":2.5},"2e8795cd-a125-e13e-2cbd-0b4a7dc7ffa6":{"x":-1.717,"y":9.573,"elevation":2.5},"3264f1c9-0038-8770-7e82-133f73fe9aeb":{"x":-1.717,"y":13.773,"elevation":2.5},"58dc4704-4f49-2e58-0092-ec3d417f6c2b":{"x":-1.717,"y":15.073,"elevation":2.5},"350d93b4-6837-2e6d-d37b-2cdba0fa1750":{"x":3.083,"y":15.073,"elevation":2.5},"00b99ce7-69b2-1537-f363-ff77e1932c72":{"x":3.083,"y":15.373,"elevation":2.5},"557182ef-ef8b-4b32-9ef7-f491a2e92476":{"x":8.183,"y":15.373,"elevation":2.5},"2f297524-6dcb-1860-a99c-b0a182f525c9":{"x":8.183,"y":15.073,"elevation":2.5},"1a2272dd-1654-7e6b-af79-542bc66a631b":{"x":11.483,"y":15.073,"elevation":2.5},"5beb1e3e-f4f9-ad80-4da0-79616109e17c":{"x":11.483,"y":13.773,"elevation":2.5},"55bf158f-6bec-94c1-9c1b-62f1c6a3d2dc":{"x":11.483,"y":9.573,"elevation":2.5},"21da0999-d108-c93a-b69c-83a0315b6796":{"x":11.483,"y":7.773,"elevation":2.5},"ff537dda-abdd-bf5a-659a-4435063c708a":{"x":11.483,"y":7.073,"elevation":2.5},"821db2fc-cd4e-a8ce-34fb-37dd53f903ad":{"x":11.483,"y":3.473,"elevation":2.5},"6eae655e-e7ff-d277-08a4-ce2e4c519d89":{"x":11.483,"y":2.373,"elevation":2.5},"cf3f26fc-7409-d362-3a5c-01efa6c40c8a":{"x":8.183,"y":13.773,"elevation":2.5},"cc825b54-7db0-ba23-48b4-b53f8e9e4b23":{"x":3.083,"y":13.773,"elevation":2.5},"0fd15a4b-e536-ab43-6d53-bdfb828cbd1d":{"x":8.183,"y":9.573,"elevation":2.5},"32aea052-a14f-37a1-393b-a64c2f5fbc5d":{"x":9.983,"y":9.573,"elevation":2.5},"53d805f8-aa19-9c92-3f8c-21bc03a8cc66":{"x":3.083,"y":9.573,"elevation":2.5},"b0396fd9-2128-a332-855c-2638462413bf":{"x":1.464,"y":9.573,"elevation":2.5},"56cc8851-8f9a-538e-cd8b-316e2e03eb4a":{"x":3.083,"y":2.373,"elevation":2.5},"1314fd82-148a-6a4d-c25d-09630e03181f":{"x":4.883,"y":2.373,"elevation":2.5},"c5448805-ed02-70f3-c1fd-45af32c7ea98":{"x":8.183,"y":2.373,"elevation":2.5},"995befab-2846-41e4-83b0-a0a23e2a80cb":{"x":1.424,"y":2.373,"elevation":2.5},"3b06b8fb-7aa6-4cd1-f316-132c883296df":{"x":1.424,"y":2.897,"elevation":2.5},"561006a6-61ad-894d-0c4e-0c641f120bae":{"x":0.083,"y":2.897,"elevation":2.5},"42bccf0b-55bd-4742-5e6d-31c8c8c79121":{"x":4.883,"y":4.173,"elevation":2.5},"1009ae74-b095-f9ab-454c-207c857987ea":{"x":3.083,"y":4.173,"elevation":2.5},"e25bfb6c-aba8-d83a-3881-657fcd77a09a":{"x":3.083,"y":7.773,"elevation":2.5},"369ffe6f-943c-9ff8-aa0c-c06c9d75eca1":{"x":1.464,"y":7.773,"elevation":2.5},"a063fecd-9838-98b4-94e4-9979a747e019":{"x":0.083,"y":7.173,"elevation":2.5},"b499cd61-ebaf-9906-21a4-aecc1b7172fb":{"x":0.083,"y":7.773,"elevation":2.5},"cbc5809c-2c00-85a7-069b-113fbfc6de91":{"x":10.324,"y":7.073,"elevation":2.5},"6de4e9e2-9fcb-1cbe-a70e-0701b37792ac":{"x":8.183,"y":3.473,"elevation":2.5},"4ffd4f3c-e899-c0b1-cb81-bffed4da921d":{"x":8.183,"y":5.373,"elevation":2.5},"e2ba3ebd-3b05-5785-b241-4ef0224024f8":{"x":10.324,"y":7.773,"elevation":2.5},"9cccda4f-1ad2-bd56-b4f0-c6ea4f2a25d5":{"x":8.183,"y":7.073,"elevation":2.5},"8a6b2705-ea55-0008-b76e-71c0529f816c":{"x":8.183,"y":8.173,"elevation":2.5},"ddc8b265-ea45-1af6-b896-14d080022c44":{"x":5.983,"y":8.173,"elevation":2.5},"13f9661a-208b-0bc2-bbaf-c1ae291d4ff7":{"x":5.983,"y":5.373,"elevation":2.5},"b74c508d-4544-d2f1-66d9-b46dcb476118":{"x":14.683,"y":15.073,"elevation":2.5},"9a798dc8-52e4-8050-b0ac-1141c470988f":{"x":14.683,"y":2.373,"elevation":2.5},"56f588b7-fd80-089a-6e71-4debf140bb2b":{"x":14.683,"y":12.346,"elevation":2.5},"21d0c27a-25d0-cbd4-d41c-57dc0e21b7a5":{"x":9.983,"y":7.773,"elevation":2.5}},"walls":[{"corner1":"951f11c2-b7a5-5af5-3a77-22e18f5018c6","corner2":"56a127f3-69d0-c65d-365a-6b74675994fc","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/12.회벽_베이지.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":-54.95484309232692,"y":354.0640769076732},"b":{"x":-107.3288369076732,"y":354.06407690767315}},{"corner1":"56a127f3-69d0-c65d-365a-6b74675994fc","corner2":"afa4674a-b0d9-66ef-f2bb-60b70b5150ee","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/12.회벽_베이지.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":-292.5783889047811,"y":538.129628904781},"b":{"x":-292.5783889047811,"y":638.2405310952191}},{"corner1":"afa4674a-b0d9-66ef-f2bb-60b70b5150ee","corner2":"2e8795cd-a125-e13e-2cbd-0b4a7dc7ffa6","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":-238.9570674738428,"y":784.5083074738427},"b":{"x":-238.9570674738428,"y":840.1978525261574}},{"corner1":"2e8795cd-a125-e13e-2cbd-0b4a7dc7ffa6","corner2":"3264f1c9-0038-8770-7e82-133f73fe9aeb","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":-290.6041467717082,"y":1076.1553867717082},"b":{"x":-290.60414677170826,"y":1174.630773228292}},{"corner1":"3264f1c9-0038-8770-7e82-133f73fe9aeb","corner2":"58dc4704-4f49-2e58-0092-ec3d417f6c2b","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/11.회벽_미들그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":-229.75902246416823,"y":1435.310262464168},"b":{"x":-229.75902246416823,"y":1483.3798975358318}},{"corner1":"58dc4704-4f49-2e58-0092-ec3d417f6c2b","corner2":"350d93b4-6837-2e6d-d37b-2cdba0fa1750","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/11.회벽_미들그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":-8.233781626921797,"y":1670.785138373078},"b":{"x":127.21410162692172,"y":1670.785138373078}},{"corner1":"350d93b4-6837-2e6d-d37b-2cdba0fa1750","corner2":"00b99ce7-69b2-1537-f363-ff77e1932c72","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/11.회벽_미들그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":259.5634733389952,"y":1555.9877666610046},"b":{"x":259.5634733389952,"y":1596.3343933389954}},{"corner1":"00b99ce7-69b2-1537-f363-ff77e1932c72","corner2":"557182ef-ef8b-4b32-9ef7-f491a2e92476","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/11.회벽_미들그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":430.65785854201704,"y":1659.676778542017},"b":{"x":532.0504614579828,"y":1659.676778542017}},{"corner1":"557182ef-ef8b-4b32-9ef7-f491a2e92476","corner2":"2f297524-6dcb-1860-a99c-b0a182f525c9","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/11.회벽_미들그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":840.5173961903781,"y":1515.0338438096217},"b":{"x":840.5173961903781,"y":1496.6003161903782}},{"corner1":"2f297524-6dcb-1860-a99c-b0a182f525c9","corner2":"1a2272dd-1654-7e6b-af79-542bc66a631b","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/11.회벽_미들그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":929.8928649052332,"y":1618.9117849052332},"b":{"x":1022.3674550947669,"y":1618.9117849052332}},{"corner1":"1a2272dd-1654-7e6b-af79-542bc66a631b","corner2":"5beb1e3e-f4f9-ad80-4da0-79616109e17c","frontTexture":{"url":"rooms/textures/wall_floor/09.회벽_라이트그레이.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/11.회벽_미들그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":1196.550239446542,"y":1459.0010005534577},"b":{"x":1196.550239446542,"y":1419.0011594465423}},{"corner1":"5beb1e3e-f4f9-ad80-4da0-79616109e17c","corner2":"55bf158f-6bec-94c1-9c1b-62f1c6a3d2dc","frontTexture":{"url":"rooms/textures/wall_floor/09.회벽_라이트그레이.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":1258.3513721222462,"y":1267.1998678777536},"b":{"x":1258.3513721222462,"y":1176.0022921222464}},{"corner1":"55bf158f-6bec-94c1-9c1b-62f1c6a3d2dc","corner2":"21da0999-d108-c93a-b69c-83a0315b6796","frontTexture":{"url":"rooms/textures/wall_floor/09.회벽_라이트그레이.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/05.자이언트스톤_베이지.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":1215.4667600568446,"y":890.0844799431552},"b":{"x":1215.4667600568446,"y":834.4136800568448}},{"corner1":"21da0999-d108-c93a-b69c-83a0315b6796","corner2":"ff537dda-abdd-bf5a-659a-4435063c708a","frontTexture":{"url":"rooms/textures/wall_floor/09.회벽_라이트그레이.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":1226.5428806773507,"y":699.0083593226492},"b":{"x":1226.5428806773507,"y":634.1618006773508}},{"corner1":"ff537dda-abdd-bf5a-659a-4435063c708a","corner2":"821db2fc-cd4e-a8ce-34fb-37dd53f903ad","frontTexture":{"url":"rooms/textures/wall_floor/09.회벽_라이트그레이.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":1262.8598849590917,"y":592.6913550409081},"b":{"x":1262.8598849590917,"y":497.7588049590919}},{"corner1":"821db2fc-cd4e-a8ce-34fb-37dd53f903ad","corner2":"6eae655e-e7ff-d277-08a4-ce2e4c519d89","frontTexture":{"url":"rooms/textures/wall_floor/09.회벽_라이트그레이.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/11.회벽_미들그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":1208.8595542934374,"y":286.69168570656234},"b":{"x":1208.8595542934374,"y":236.49447429343763}},{"corner1":"5beb1e3e-f4f9-ad80-4da0-79616109e17c","corner2":"cf3f26fc-7409-d362-3a5c-01efa6c40c8a","frontTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"backTexture":{"url":"rooms/textures/wall_floor/11.회벽_미들그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":681.5756844168785,"y":910.5946044168786},"b":{"x":294.9566355831212,"y":910.5946044168785}},{"corner1":"cf3f26fc-7409-d362-3a5c-01efa6c40c8a","corner2":"cc825b54-7db0-ba23-48b4-b53f8e9e4b23","frontTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"backTexture":{"url":"rooms/textures/wall_floor/11.회벽_미들그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":468.24830331265883,"y":1027.2672233126589},"b":{"x":178.2840166873409,"y":1027.2672233126589}},{"corner1":"cf3f26fc-7409-d362-3a5c-01efa6c40c8a","corner2":"0fd15a4b-e536-ab43-6d53-bdfb828cbd1d","frontTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":979.3592268899191,"y":1216.1920131100806},"b":{"x":979.3592268899191,"y":1082.738146889919}},{"corner1":"55bf158f-6bec-94c1-9c1b-62f1c6a3d2dc","corner2":"32aea052-a14f-37a1-393b-a64c2f5fbc5d","frontTexture":{"url":"rooms/textures/wall_floor/05.자이언트스톤_베이지.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":1031.8650701081951,"y":840.8839901081952},"b":{"x":935.4352498918047,"y":840.8839901081952}},{"corner1":"cc825b54-7db0-ba23-48b4-b53f8e9e4b23","corner2":"3264f1c9-0038-8770-7e82-133f73fe9aeb","frontTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"backTexture":{"url":"rooms/textures/wall_floor/11.회벽_미들그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":138.5605325152285,"y":1207.5794525152285},"b":{"x":-2.0282125152287165,"y":1207.5794525152285}},{"corner1":"cc825b54-7db0-ba23-48b4-b53f8e9e4b23","corner2":"53d805f8-aa19-9c92-3f8c-21bc03a8cc66","frontTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":477.2618522764599,"y":1208.28938772354},"b":{"x":477.26185227645993,"y":1068.2887722764601}},{"corner1":"2e8795cd-a125-e13e-2cbd-0b4a7dc7ffa6","corner2":"b0396fd9-2128-a332-855c-2638462413bf","frontTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":-3.9232586888086303,"y":1125.0956613111914},"b":{"x":135.09557868880844,"y":1125.0956613111914}},{"corner1":"56cc8851-8f9a-538e-cd8b-316e2e03eb4a","corner2":"1314fd82-148a-6a4d-c25d-09630e03181f","frontTexture":{"url":"rooms/textures/wall_floor/11.회벽_미들그레이.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":430.65785854201704,"y":359.67677854201725},"b":{"x":532.0504614579828,"y":359.67677854201725}},{"corner1":"1314fd82-148a-6a4d-c25d-09630e03181f","corner2":"c5448805-ed02-70f3-c1fd-45af32c7ea98","frontTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":608.8024103481837,"y":357.8213303481838},"b":{"x":708.6579096518165,"y":357.8213303481838}},{"corner1":"c5448805-ed02-70f3-c1fd-45af32c7ea98","corner2":"6eae655e-e7ff-d277-08a4-ce2e4c519d89","frontTexture":{"url":"rooms/textures/wall_floor/11.회벽_미들그레이.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":934.9387788957803,"y":353.95769889578037},"b":{"x":1031.5935411042196,"y":353.9576988957803}},{"corner1":"995befab-2846-41e4-83b0-a0a23e2a80cb","corner2":"56cc8851-8f9a-538e-cd8b-316e2e03eb4a","frontTexture":{"url":"rooms/textures/wall_floor/11.회벽_미들그레이.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":202.31535920049654,"y":298.2884105169775},"b":{"x":250.9028294830225,"y":297.22227920049653}},{"corner1":"995befab-2846-41e4-83b0-a0a23e2a80cb","corner2":"3b06b8fb-7aa6-4cd1-f316-132c883296df","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/11.회벽_미들그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":123.8491339057878,"y":255.81410609421238},"b":{"x":123.84913390578778,"y":271.1640539057878}},{"corner1":"3b06b8fb-7aa6-4cd1-f316-132c883296df","corner2":"561006a6-61ad-894d-0c4e-0c641f120bae","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/11.회벽_미들그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":97.11766914981152,"y":244.43258914981158},"b":{"x":59.62265085018858,"y":244.43258914981155}},{"corner1":"561006a6-61ad-894d-0c4e-0c641f120bae","corner2":"951f11c2-b7a5-5af5-3a77-22e18f5018c6","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/11.회벽_미들그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":-32.90368568163356,"y":332.6484027435204},"b":{"x":-34.689162743520406,"y":370.01923431836644}},{"corner1":"1314fd82-148a-6a4d-c25d-09630e03181f","corner2":"42bccf0b-55bd-4742-5e6d-31c8c8c79121","frontTexture":{"url":"rooms/textures/wall_floor/11.회벽_미들그레이.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":405.0792898340897,"y":320.47195016591024},"b":{"x":405.0792898340897,"y":389.38620983408987}},{"corner1":"951f11c2-b7a5-5af5-3a77-22e18f5018c6","corner2":"1009ae74-b095-f9ab-454c-207c857987ea","frontTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"backTexture":{"url":"rooms/textures/wall_floor/11.회벽_미들그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":177.09497507609998,"y":586.1138950761001},"b":{"x":316.9573449238998,"y":586.1138950761001}},{"corner1":"1009ae74-b095-f9ab-454c-207c857987ea","corner2":"42bccf0b-55bd-4742-5e6d-31c8c8c79121","frontTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"backTexture":{"url":"rooms/textures/wall_floor/11.회벽_미들그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":371.9057703067892,"y":480.9246903067893},"b":{"x":424.6265496932106,"y":480.9246903067893}},{"corner1":"1009ae74-b095-f9ab-454c-207c857987ea","corner2":"e25bfb6c-aba8-d83a-3881-657fcd77a09a","frontTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":165.1505759149674,"y":560.4006640850325},"b":{"x":165.15057591496736,"y":678.9614959149676}},{"corner1":"e25bfb6c-aba8-d83a-3881-657fcd77a09a","corner2":"369ffe6f-943c-9ff8-aa0c-c06c9d75eca1","frontTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":179.21068715208077,"y":648.2296071520808},"b":{"x":72.29763284791912,"y":648.2296071520807}},{"corner1":"951f11c2-b7a5-5af5-3a77-22e18f5018c6","corner2":"a063fecd-9838-98b4-94e4-9979a747e019","frontTexture":{"url":"rooms/textures/wall_floor/12.회벽_베이지.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":-118.32575282226537,"y":543.8769928222653},"b":{"x":-118.3257528222654,"y":648.7491671777349}},{"corner1":"afa4674a-b0d9-66ef-f2bb-60b70b5150ee","corner2":"a063fecd-9838-98b4-94e4-9979a747e019","frontTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"backTexture":{"url":"rooms/textures/wall_floor/12.회벽_베이지.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":-107.37580920352528,"y":781.6431107964748},"b":{"x":-54.05987079647488,"y":781.6431107964748}},{"corner1":"a063fecd-9838-98b4-94e4-9979a747e019","corner2":"b499cd61-ebaf-9906-21a4-aecc1b7172fb","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":-11.63346392528199,"y":737.7798629459108},"b":{"x":-12.228622945910942,"y":755.353456074718}},{"corner1":"369ffe6f-943c-9ff8-aa0c-c06c9d75eca1","corner2":"b499cd61-ebaf-9906-21a4-aecc1b7172fb","frontTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":97.62067939975609,"y":728.4893740030116},"b":{"x":57.149865996988424,"y":728.4635993997559}},{"corner1":"369ffe6f-943c-9ff8-aa0c-c06c9d75eca1","corner2":"b0396fd9-2128-a332-855c-2638462413bf","frontTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":84.62688518867199,"y":839.1003548113279},"b":{"x":84.62688518867199,"y":890.309805188672}},{"corner1":"b0396fd9-2128-a332-855c-2638462413bf","corner2":"53d805f8-aa19-9c92-3f8c-21bc03a8cc66","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":201.83124838390466,"y":1011.1628393748272},"b":{"x":249.22840062517278,"y":1012.6741683839045}},{"corner1":"ff537dda-abdd-bf5a-659a-4435063c708a","corner2":"cbc5809c-2c00-85a7-069b-113fbfc6de91","frontTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":980.1387948508369,"y":539.1577148508369},"b":{"x":840.8575251491629,"y":539.1577148508369}},{"corner1":"c5448805-ed02-70f3-c1fd-45af32c7ea98","corner2":"6de4e9e2-9fcb-1cbe-a70e-0701b37792ac","frontTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"backTexture":{"url":"rooms/textures/wall_floor/11.회벽_미들그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":652.4609335202535,"y":403.09030647974646},"b":{"x":652.4609335202535,"y":540.4478535202537}},{"corner1":"821db2fc-cd4e-a8ce-34fb-37dd53f903ad","corner2":"6de4e9e2-9fcb-1cbe-a70e-0701b37792ac","frontTexture":{"url":"rooms/textures/wall_floor/11.회벽_미들그레이.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":1031.8650701081951,"y":230.88399010819523},"b":{"x":935.4352498918047,"y":230.88399010819523}},{"corner1":"6de4e9e2-9fcb-1cbe-a70e-0701b37792ac","corner2":"4ffd4f3c-e899-c0b1-cb81-bffed4da921d","frontTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":691.4834103824458,"y":474.29277160960277},"b":{"x":691.2584683903971,"y":579.7343303824457}},{"corner1":"21da0999-d108-c93a-b69c-83a0315b6796","corner2":"e2ba3ebd-3b05-5785-b241-4ef0224024f8","frontTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"backTexture":{"url":"rooms/textures/wall_floor/05.자이언트스톤_베이지.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":1072.8150380202705,"y":701.8339580202705},"b":{"x":1010.3092819797293,"y":701.8339580202705}},{"corner1":"9cccda4f-1ad2-bd56-b4f0-c6ea4f2a25d5","corner2":"8a6b2705-ea55-0008-b76e-71c0529f816c","frontTexture":{"url":"rooms/textures/wall_floor/12.회벽_베이지.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":776.9626386973313,"y":748.5886013026686},"b":{"x":776.9626386973312,"y":782.8055586973314}},{"corner1":"8a6b2705-ea55-0008-b76e-71c0529f816c","corner2":"ddc8b265-ea45-1af6-b896-14d080022c44","frontTexture":{"url":"rooms/textures/wall_floor/12.회벽_베이지.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":736.6377531798248,"y":735.6566731798248},"b":{"x":669.014566820175,"y":735.6566731798248}},{"corner1":"ddc8b265-ea45-1af6-b896-14d080022c44","corner2":"13f9661a-208b-0bc2-bbaf-c1ae291d4ff7","frontTexture":{"url":"rooms/textures/wall_floor/12.회벽_베이지.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":699.306062177308,"y":716.2451778226917},"b":{"x":699.306062177308,"y":632.5409821773081}},{"corner1":"13f9661a-208b-0bc2-bbaf-c1ae291d4ff7","corner2":"4ffd4f3c-e899-c0b1-cb81-bffed4da921d","frontTexture":{"url":"rooms/textures/wall_floor/12.회벽_베이지.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":676.3194349344958,"y":615.3383549344958},"b":{"x":740.9808850655041,"y":615.3383549344958}},{"corner1":"4ffd4f3c-e899-c0b1-cb81-bffed4da921d","corner2":"9cccda4f-1ad2-bd56-b4f0-c6ea4f2a25d5","frontTexture":{"url":"rooms/textures/wall_floor/12.회벽_베이지.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":758.6585545951679,"y":597.1176273968807},"b":{"x":758.4336126031191,"y":646.9094745951677}},{"corner1":"1a2272dd-1654-7e6b-af79-542bc66a631b","corner2":"b74c508d-4544-d2f1-66d9-b46dcb476118","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":1264.6333087663077,"y":1623.6522287663076},"b":{"x":1361.035011233692,"y":1623.6522287663076}},{"corner1":"6eae655e-e7ff-d277-08a4-ce2e4c519d89","corner2":"9a798dc8-52e4-8050-b0ac-1141c470988f","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":1250.2648989725972,"y":339.28381897259703},"b":{"x":1334.763421027403,"y":339.28381897259703}},{"corner1":"9a798dc8-52e4-8050-b0ac-1141c470988f","corner2":"56f588b7-fd80-089a-6e71-4debf140bb2b","frontTexture":{"url":"rooms/textures/wall_floor/09.회벽_라이트그레이.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":1115.671606202015,"y":589.8796337979848},"b":{"x":1115.671606202015,"y":881.9785262020152}},{"corner1":"56f588b7-fd80-089a-6e71-4debf140bb2b","corner2":"b74c508d-4544-d2f1-66d9-b46dcb476118","frontTexture":{"url":"rooms/textures/wall_floor/09.회벽_라이트그레이.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":1371.8479077445272,"y":1330.991332255473},"b":{"x":1371.8479077445272,"y":1410.8668277445272}},{"corner1":"21d0c27a-25d0-cbd4-d41c-57dc0e21b7a5","corner2":"32aea052-a14f-37a1-393b-a64c2f5fbc5d","frontTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"backTexture":{"url":"rooms/textures/wall_floor/05.자이언트스톤_베이지.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":938.2139265377925,"y":837.3860734622075},"b":{"x":938.2139265377924,"y":887.1630065377924}},{"corner1":"32aea052-a14f-37a1-393b-a64c2f5fbc5d","corner2":"0fd15a4b-e536-ab43-6d53-bdfb828cbd1d","frontTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":931.1068528486289,"y":887.1630065377924},"b":{"x":878.3860734622074,"y":890.1068528486289}},{"corner1":"e2ba3ebd-3b05-5785-b241-4ef0224024f8","corner2":"21d0c27a-25d0-cbd4-d41c-57dc0e21b7a5","frontTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"backTexture":{"url":"rooms/textures/wall_floor/05.자이언트스톤_베이지.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":1019.3371138935692,"y":763.4673702156944},"b":{"x":1009.3617097843055,"y":764.2789538935689}},{"corner1":"e2ba3ebd-3b05-5785-b241-4ef0224024f8","corner2":"cbc5809c-2c00-85a7-069b-113fbfc6de91","frontTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":1056.327283831,"y":753.3308761690001},"b":{"x":1056.327283831,"y":733.4742038309996}},{"corner1":"cbc5809c-2c00-85a7-069b-113fbfc6de91","corner2":"9cccda4f-1ad2-bd56-b4f0-c6ea4f2a25d5","frontTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":957.4567852583721,"y":633.0444782373129},"b":{"x":894.760601762687,"y":632.3986252583718}}],"rooms":{"f90da5e3-9e0e-eba7-173d-eb0b071e838e,71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,da026c08-d76a-a944-8e7b-096b752da9ed":{"name":"A New Room"},"965b4122-cb97-6676-6c8e-d2dd685f889f,56cc8851-8f9a-538e-cd8b-316e2e03eb4a,6eae655e-e7ff-d277-08a4-ce2e4c519d89,821db2fc-cd4e-a8ce-34fb-37dd53f903ad,ff537dda-abdd-bf5a-659a-4435063c708a,21da0999-d108-c93a-b69c-83a0315b6796,55bf158f-6bec-94c1-9c1b-62f1c6a3d2dc,5beb1e3e-f4f9-ad80-4da0-79616109e17c,1a2272dd-1654-7e6b-af79-542bc66a631b,2f297524-6dcb-1860-a99c-b0a182f525c9,557182ef-ef8b-4b32-9ef7-f491a2e92476,00b99ce7-69b2-1537-f363-ff77e1932c72,350d93b4-6837-2e6d-d37b-2cdba0fa1750,58dc4704-4f49-2e58-0092-ec3d417f6c2b,3264f1c9-0038-8770-7e82-133f73fe9aeb,2e8795cd-a125-e13e-2cbd-0b4a7dc7ffa6,afa4674a-b0d9-66ef-f2bb-60b70b5150ee,56a127f3-69d0-c65d-365a-6b74675994fc,951f11c2-b7a5-5af5-3a77-22e18f5018c6":{"name":"A New Room"},"965b4122-cb97-6676-6c8e-d2dd685f889f,56cc8851-8f9a-538e-cd8b-316e2e03eb4a,6eae655e-e7ff-d277-08a4-ce2e4c519d89,821db2fc-cd4e-a8ce-34fb-37dd53f903ad,ff537dda-abdd-bf5a-659a-4435063c708a,21da0999-d108-c93a-b69c-83a0315b6796,55bf158f-6bec-94c1-9c1b-62f1c6a3d2dc,0fd15a4b-e536-ab43-6d53-bdfb828cbd1d,cf3f26fc-7409-d362-3a5c-01efa6c40c8a,3264f1c9-0038-8770-7e82-133f73fe9aeb,2e8795cd-a125-e13e-2cbd-0b4a7dc7ffa6,afa4674a-b0d9-66ef-f2bb-60b70b5150ee,56a127f3-69d0-c65d-365a-6b74675994fc,951f11c2-b7a5-5af5-3a77-22e18f5018c6":{"name":"A New Room"},"5beb1e3e-f4f9-ad80-4da0-79616109e17c,cf3f26fc-7409-d362-3a5c-01efa6c40c8a,0fd15a4b-e536-ab43-6d53-bdfb828cbd1d,55bf158f-6bec-94c1-9c1b-62f1c6a3d2dc":{"name":"A New Room"},"3264f1c9-0038-8770-7e82-133f73fe9aeb,cf3f26fc-7409-d362-3a5c-01efa6c40c8a,2f297524-6dcb-1860-a99c-b0a182f525c9,557182ef-ef8b-4b32-9ef7-f491a2e92476,00b99ce7-69b2-1537-f363-ff77e1932c72,350d93b4-6837-2e6d-d37b-2cdba0fa1750,58dc4704-4f49-2e58-0092-ec3d417f6c2b":{"name":"A New Room"},"2f297524-6dcb-1860-a99c-b0a182f525c9,cf3f26fc-7409-d362-3a5c-01efa6c40c8a,5beb1e3e-f4f9-ad80-4da0-79616109e17c,1a2272dd-1654-7e6b-af79-542bc66a631b":{"name":"A New Room"},"3264f1c9-0038-8770-7e82-133f73fe9aeb,cf3f26fc-7409-d362-3a5c-01efa6c40c8a,5beb1e3e-f4f9-ad80-4da0-79616109e17c,1a2272dd-1654-7e6b-af79-542bc66a631b,2f297524-6dcb-1860-a99c-b0a182f525c9,557182ef-ef8b-4b32-9ef7-f491a2e92476,00b99ce7-69b2-1537-f363-ff77e1932c72,350d93b4-6837-2e6d-d37b-2cdba0fa1750,58dc4704-4f49-2e58-0092-ec3d417f6c2b":{"name":"A New Room"},"965b4122-cb97-6676-6c8e-d2dd685f889f,56cc8851-8f9a-538e-cd8b-316e2e03eb4a,6eae655e-e7ff-d277-08a4-ce2e4c519d89,821db2fc-cd4e-a8ce-34fb-37dd53f903ad,ff537dda-abdd-bf5a-659a-4435063c708a,21da0999-d108-c93a-b69c-83a0315b6796,55bf158f-6bec-94c1-9c1b-62f1c6a3d2dc,0fd15a4b-e536-ab43-6d53-bdfb828cbd1d,cf3f26fc-7409-d362-3a5c-01efa6c40c8a,cc825b54-7db0-ba23-48b4-b53f8e9e4b23,53d805f8-aa19-9c92-3f8c-21bc03a8cc66,2e8795cd-a125-e13e-2cbd-0b4a7dc7ffa6,afa4674a-b0d9-66ef-f2bb-60b70b5150ee,56a127f3-69d0-c65d-365a-6b74675994fc,951f11c2-b7a5-5af5-3a77-22e18f5018c6":{"name":"A New Room"},"2e8795cd-a125-e13e-2cbd-0b4a7dc7ffa6,53d805f8-aa19-9c92-3f8c-21bc03a8cc66,cc825b54-7db0-ba23-48b4-b53f8e9e4b23,3264f1c9-0038-8770-7e82-133f73fe9aeb":{"name":"A New Room"},"965b4122-cb97-6676-6c8e-d2dd685f889f,56cc8851-8f9a-538e-cd8b-316e2e03eb4a,442fe6d5-0a92-7996-3983-608752122cb5,951f11c2-b7a5-5af5-3a77-22e18f5018c6":{"name":"A New Room"},"951f11c2-b7a5-5af5-3a77-22e18f5018c6,442fe6d5-0a92-7996-3983-608752122cb5,56cc8851-8f9a-538e-cd8b-316e2e03eb4a,1314fd82-148a-6a4d-c25d-09630e03181f,c5448805-ed02-70f3-c1fd-45af32c7ea98,6eae655e-e7ff-d277-08a4-ce2e4c519d89,821db2fc-cd4e-a8ce-34fb-37dd53f903ad,ff537dda-abdd-bf5a-659a-4435063c708a,21da0999-d108-c93a-b69c-83a0315b6796,55bf158f-6bec-94c1-9c1b-62f1c6a3d2dc,0fd15a4b-e536-ab43-6d53-bdfb828cbd1d,cf3f26fc-7409-d362-3a5c-01efa6c40c8a,cc825b54-7db0-ba23-48b4-b53f8e9e4b23,53d805f8-aa19-9c92-3f8c-21bc03a8cc66,2e8795cd-a125-e13e-2cbd-0b4a7dc7ffa6,afa4674a-b0d9-66ef-f2bb-60b70b5150ee,56a127f3-69d0-c65d-365a-6b74675994fc":{"name":"A New Room"},"951f11c2-b7a5-5af5-3a77-22e18f5018c6,561006a6-61ad-894d-0c4e-0c641f120bae,3b06b8fb-7aa6-4cd1-f316-132c883296df,995befab-2846-41e4-83b0-a0a23e2a80cb,56cc8851-8f9a-538e-cd8b-316e2e03eb4a,442fe6d5-0a92-7996-3983-608752122cb5":{"name":"A New Room"},"951f11c2-b7a5-5af5-3a77-22e18f5018c6,561006a6-61ad-894d-0c4e-0c641f120bae,3b06b8fb-7aa6-4cd1-f316-132c883296df,995befab-2846-41e4-83b0-a0a23e2a80cb,56cc8851-8f9a-538e-cd8b-316e2e03eb4a,1314fd82-148a-6a4d-c25d-09630e03181f,c5448805-ed02-70f3-c1fd-45af32c7ea98,6eae655e-e7ff-d277-08a4-ce2e4c519d89,821db2fc-cd4e-a8ce-34fb-37dd53f903ad,ff537dda-abdd-bf5a-659a-4435063c708a,21da0999-d108-c93a-b69c-83a0315b6796,55bf158f-6bec-94c1-9c1b-62f1c6a3d2dc,0fd15a4b-e536-ab43-6d53-bdfb828cbd1d,cf3f26fc-7409-d362-3a5c-01efa6c40c8a,cc825b54-7db0-ba23-48b4-b53f8e9e4b23,53d805f8-aa19-9c92-3f8c-21bc03a8cc66,2e8795cd-a125-e13e-2cbd-0b4a7dc7ffa6,afa4674a-b0d9-66ef-f2bb-60b70b5150ee,56a127f3-69d0-c65d-365a-6b74675994fc":{"name":"A New Room"},"951f11c2-b7a5-5af5-3a77-22e18f5018c6,42bccf0b-55bd-4742-5e6d-31c8c8c79121,1314fd82-148a-6a4d-c25d-09630e03181f,c5448805-ed02-70f3-c1fd-45af32c7ea98,6eae655e-e7ff-d277-08a4-ce2e4c519d89,821db2fc-cd4e-a8ce-34fb-37dd53f903ad,ff537dda-abdd-bf5a-659a-4435063c708a,21da0999-d108-c93a-b69c-83a0315b6796,55bf158f-6bec-94c1-9c1b-62f1c6a3d2dc,0fd15a4b-e536-ab43-6d53-bdfb828cbd1d,cf3f26fc-7409-d362-3a5c-01efa6c40c8a,cc825b54-7db0-ba23-48b4-b53f8e9e4b23,53d805f8-aa19-9c92-3f8c-21bc03a8cc66,2e8795cd-a125-e13e-2cbd-0b4a7dc7ffa6,afa4674a-b0d9-66ef-f2bb-60b70b5150ee,56a127f3-69d0-c65d-365a-6b74675994fc":{"name":"A New Room"},"951f11c2-b7a5-5af5-3a77-22e18f5018c6,561006a6-61ad-894d-0c4e-0c641f120bae,3b06b8fb-7aa6-4cd1-f316-132c883296df,995befab-2846-41e4-83b0-a0a23e2a80cb,56cc8851-8f9a-538e-cd8b-316e2e03eb4a,1314fd82-148a-6a4d-c25d-09630e03181f,42bccf0b-55bd-4742-5e6d-31c8c8c79121":{"name":"A New Room"},"951f11c2-b7a5-5af5-3a77-22e18f5018c6,561006a6-61ad-894d-0c4e-0c641f120bae,3b06b8fb-7aa6-4cd1-f316-132c883296df,995befab-2846-41e4-83b0-a0a23e2a80cb,56cc8851-8f9a-538e-cd8b-316e2e03eb4a,1314fd82-148a-6a4d-c25d-09630e03181f,42bccf0b-55bd-4742-5e6d-31c8c8c79121,1009ae74-b095-f9ab-454c-207c857987ea":{"name":"A New Room"},"951f11c2-b7a5-5af5-3a77-22e18f5018c6,1009ae74-b095-f9ab-454c-207c857987ea,42bccf0b-55bd-4742-5e6d-31c8c8c79121,1314fd82-148a-6a4d-c25d-09630e03181f,c5448805-ed02-70f3-c1fd-45af32c7ea98,6eae655e-e7ff-d277-08a4-ce2e4c519d89,821db2fc-cd4e-a8ce-34fb-37dd53f903ad,ff537dda-abdd-bf5a-659a-4435063c708a,21da0999-d108-c93a-b69c-83a0315b6796,55bf158f-6bec-94c1-9c1b-62f1c6a3d2dc,0fd15a4b-e536-ab43-6d53-bdfb828cbd1d,cf3f26fc-7409-d362-3a5c-01efa6c40c8a,cc825b54-7db0-ba23-48b4-b53f8e9e4b23,53d805f8-aa19-9c92-3f8c-21bc03a8cc66,2e8795cd-a125-e13e-2cbd-0b4a7dc7ffa6,afa4674a-b0d9-66ef-f2bb-60b70b5150ee,56a127f3-69d0-c65d-365a-6b74675994fc":{"name":"A New Room"},"951f11c2-b7a5-5af5-3a77-22e18f5018c6,1009ae74-b095-f9ab-454c-207c857987ea,e25bfb6c-aba8-d83a-3881-657fcd77a09a,21da0999-d108-c93a-b69c-83a0315b6796,55bf158f-6bec-94c1-9c1b-62f1c6a3d2dc,0fd15a4b-e536-ab43-6d53-bdfb828cbd1d,cf3f26fc-7409-d362-3a5c-01efa6c40c8a,cc825b54-7db0-ba23-48b4-b53f8e9e4b23,53d805f8-aa19-9c92-3f8c-21bc03a8cc66,2e8795cd-a125-e13e-2cbd-0b4a7dc7ffa6,afa4674a-b0d9-66ef-f2bb-60b70b5150ee,56a127f3-69d0-c65d-365a-6b74675994fc":{"name":"A New Room"},"21da0999-d108-c93a-b69c-83a0315b6796,e25bfb6c-aba8-d83a-3881-657fcd77a09a,1009ae74-b095-f9ab-454c-207c857987ea,42bccf0b-55bd-4742-5e6d-31c8c8c79121,1314fd82-148a-6a4d-c25d-09630e03181f,c5448805-ed02-70f3-c1fd-45af32c7ea98,6eae655e-e7ff-d277-08a4-ce2e4c519d89,821db2fc-cd4e-a8ce-34fb-37dd53f903ad,ff537dda-abdd-bf5a-659a-4435063c708a":{"name":"A New Room"},"55bf158f-6bec-94c1-9c1b-62f1c6a3d2dc,0fd15a4b-e536-ab43-6d53-bdfb828cbd1d,cf3f26fc-7409-d362-3a5c-01efa6c40c8a,cc825b54-7db0-ba23-48b4-b53f8e9e4b23,53d805f8-aa19-9c92-3f8c-21bc03a8cc66,b0396fd9-2128-a332-855c-2638462413bf,369ffe6f-943c-9ff8-aa0c-c06c9d75eca1,e25bfb6c-aba8-d83a-3881-657fcd77a09a,1009ae74-b095-f9ab-454c-207c857987ea,42bccf0b-55bd-4742-5e6d-31c8c8c79121,1314fd82-148a-6a4d-c25d-09630e03181f,c5448805-ed02-70f3-c1fd-45af32c7ea98,6eae655e-e7ff-d277-08a4-ce2e4c519d89,821db2fc-cd4e-a8ce-34fb-37dd53f903ad,ff537dda-abdd-bf5a-659a-4435063c708a,21da0999-d108-c93a-b69c-83a0315b6796":{"name":"A New Room"},"55bf158f-6bec-94c1-9c1b-62f1c6a3d2dc,0fd15a4b-e536-ab43-6d53-bdfb828cbd1d,cf3f26fc-7409-d362-3a5c-01efa6c40c8a,cc825b54-7db0-ba23-48b4-b53f8e9e4b23,53d805f8-aa19-9c92-3f8c-21bc03a8cc66,b0396fd9-2128-a332-855c-2638462413bf,369ffe6f-943c-9ff8-aa0c-c06c9d75eca1,e25bfb6c-aba8-d83a-3881-657fcd77a09a,1009ae74-b095-f9ab-454c-207c857987ea,42bccf0b-55bd-4742-5e6d-31c8c8c79121,1314fd82-148a-6a4d-c25d-09630e03181f,c5448805-ed02-70f3-c1fd-45af32c7ea98,9cccda4f-1ad2-bd56-b4f0-c6ea4f2a25d5,ff537dda-abdd-bf5a-659a-4435063c708a,21da0999-d108-c93a-b69c-83a0315b6796":{"name":"A New Room"},"ff537dda-abdd-bf5a-659a-4435063c708a,9cccda4f-1ad2-bd56-b4f0-c6ea4f2a25d5,c5448805-ed02-70f3-c1fd-45af32c7ea98,6eae655e-e7ff-d277-08a4-ce2e4c519d89,821db2fc-cd4e-a8ce-34fb-37dd53f903ad":{"name":"A New Room"},"55bf158f-6bec-94c1-9c1b-62f1c6a3d2dc,0fd15a4b-e536-ab43-6d53-bdfb828cbd1d,cf3f26fc-7409-d362-3a5c-01efa6c40c8a,cc825b54-7db0-ba23-48b4-b53f8e9e4b23,53d805f8-aa19-9c92-3f8c-21bc03a8cc66,b0396fd9-2128-a332-855c-2638462413bf,369ffe6f-943c-9ff8-aa0c-c06c9d75eca1,e25bfb6c-aba8-d83a-3881-657fcd77a09a,1009ae74-b095-f9ab-454c-207c857987ea,42bccf0b-55bd-4742-5e6d-31c8c8c79121,1314fd82-148a-6a4d-c25d-09630e03181f,c5448805-ed02-70f3-c1fd-45af32c7ea98,6de4e9e2-9fcb-1cbe-a70e-0701b37792ac,9cccda4f-1ad2-bd56-b4f0-c6ea4f2a25d5,ff537dda-abdd-bf5a-659a-4435063c708a,21da0999-d108-c93a-b69c-83a0315b6796":{"name":"A New Room"},"ff537dda-abdd-bf5a-659a-4435063c708a,9cccda4f-1ad2-bd56-b4f0-c6ea4f2a25d5,6de4e9e2-9fcb-1cbe-a70e-0701b37792ac,821db2fc-cd4e-a8ce-34fb-37dd53f903ad":{"name":"A New Room"},"3264f1c9-0038-8770-7e82-133f73fe9aeb,cc825b54-7db0-ba23-48b4-b53f8e9e4b23,cf3f26fc-7409-d362-3a5c-01efa6c40c8a,5beb1e3e-f4f9-ad80-4da0-79616109e17c,1a2272dd-1654-7e6b-af79-542bc66a631b,2f297524-6dcb-1860-a99c-b0a182f525c9,557182ef-ef8b-4b32-9ef7-f491a2e92476,00b99ce7-69b2-1537-f363-ff77e1932c72,350d93b4-6837-2e6d-d37b-2cdba0fa1750,58dc4704-4f49-2e58-0092-ec3d417f6c2b":{"name":"A New Room"},"821db2fc-cd4e-a8ce-34fb-37dd53f903ad,6de4e9e2-9fcb-1cbe-a70e-0701b37792ac,c5448805-ed02-70f3-c1fd-45af32c7ea98,6eae655e-e7ff-d277-08a4-ce2e4c519d89":{"name":"A New Room"},"1a2272dd-1654-7e6b-af79-542bc66a631b,5beb1e3e-f4f9-ad80-4da0-79616109e17c,55bf158f-6bec-94c1-9c1b-62f1c6a3d2dc,21da0999-d108-c93a-b69c-83a0315b6796,ff537dda-abdd-bf5a-659a-4435063c708a,821db2fc-cd4e-a8ce-34fb-37dd53f903ad,6eae655e-e7ff-d277-08a4-ce2e4c519d89,9a798dc8-52e4-8050-b0ac-1141c470988f,56f588b7-fd80-089a-6e71-4debf140bb2b,b74c508d-4544-d2f1-66d9-b46dcb476118":{"name":"A New Room"},"21da0999-d108-c93a-b69c-83a0315b6796,e2ba3ebd-3b05-5785-b241-4ef0224024f8,21d0c27a-25d0-cbd4-d41c-57dc0e21b7a5,32aea052-a14f-37a1-393b-a64c2f5fbc5d,0fd15a4b-e536-ab43-6d53-bdfb828cbd1d,cf3f26fc-7409-d362-3a5c-01efa6c40c8a,cc825b54-7db0-ba23-48b4-b53f8e9e4b23,53d805f8-aa19-9c92-3f8c-21bc03a8cc66,b0396fd9-2128-a332-855c-2638462413bf,369ffe6f-943c-9ff8-aa0c-c06c9d75eca1,e25bfb6c-aba8-d83a-3881-657fcd77a09a,1009ae74-b095-f9ab-454c-207c857987ea,42bccf0b-55bd-4742-5e6d-31c8c8c79121,1314fd82-148a-6a4d-c25d-09630e03181f,c5448805-ed02-70f3-c1fd-45af32c7ea98,6de4e9e2-9fcb-1cbe-a70e-0701b37792ac,4ffd4f3c-e899-c0b1-cb81-bffed4da921d,13f9661a-208b-0bc2-bbaf-c1ae291d4ff7,ddc8b265-ea45-1af6-b896-14d080022c44,8a6b2705-ea55-0008-b76e-71c0529f816c,9cccda4f-1ad2-bd56-b4f0-c6ea4f2a25d5,ff537dda-abdd-bf5a-659a-4435063c708a":{"name":"A New Room"},"ff537dda-abdd-bf5a-659a-4435063c708a,9cccda4f-1ad2-bd56-b4f0-c6ea4f2a25d5,4ffd4f3c-e899-c0b1-cb81-bffed4da921d,6de4e9e2-9fcb-1cbe-a70e-0701b37792ac,821db2fc-cd4e-a8ce-34fb-37dd53f903ad":{"name":"A New Room"},"9cccda4f-1ad2-bd56-b4f0-c6ea4f2a25d5,8a6b2705-ea55-0008-b76e-71c0529f816c,ddc8b265-ea45-1af6-b896-14d080022c44,13f9661a-208b-0bc2-bbaf-c1ae291d4ff7,4ffd4f3c-e899-c0b1-cb81-bffed4da921d":{"name":"A New Room"}},"wallTextures":[],"floorTextures":{},"newFloorTextures":{"1a2272dd-1654-7e6b-af79-542bc66a631b,21da0999-d108-c93a-b69c-83a0315b6796,55bf158f-6bec-94c1-9c1b-62f1c6a3d2dc,56f588b7-fd80-089a-6e71-4debf140bb2b,5beb1e3e-f4f9-ad80-4da0-79616109e17c,6eae655e-e7ff-d277-08a4-ce2e4c519d89,821db2fc-cd4e-a8ce-34fb-37dd53f903ad,9a798dc8-52e4-8050-b0ac-1141c470988f,b74c508d-4544-d2f1-66d9-b46dcb476118,ff537dda-abdd-bf5a-659a-4435063c708a":{"url":"rooms/textures/wall_floor/26.콘크리트그레이.png","scale":300},"0fd15a4b-e536-ab43-6d53-bdfb828cbd1d,1009ae74-b095-f9ab-454c-207c857987ea,1314fd82-148a-6a4d-c25d-09630e03181f,13f9661a-208b-0bc2-bbaf-c1ae291d4ff7,21d0c27a-25d0-cbd4-d41c-57dc0e21b7a5,32aea052-a14f-37a1-393b-a64c2f5fbc5d,369ffe6f-943c-9ff8-aa0c-c06c9d75eca1,42bccf0b-55bd-4742-5e6d-31c8c8c79121,4ffd4f3c-e899-c0b1-cb81-bffed4da921d,53d805f8-aa19-9c92-3f8c-21bc03a8cc66,6de4e9e2-9fcb-1cbe-a70e-0701b37792ac,8a6b2705-ea55-0008-b76e-71c0529f816c,9cccda4f-1ad2-bd56-b4f0-c6ea4f2a25d5,b0396fd9-2128-a332-855c-2638462413bf,c5448805-ed02-70f3-c1fd-45af32c7ea98,cbc5809c-2c00-85a7-069b-113fbfc6de91,cc825b54-7db0-ba23-48b4-b53f8e9e4b23,cf3f26fc-7409-d362-3a5c-01efa6c40c8a,ddc8b265-ea45-1af6-b896-14d080022c44,e25bfb6c-aba8-d83a-3881-657fcd77a09a,e2ba3ebd-3b05-5785-b241-4ef0224024f8":{"url":"rooms/textures/wall_floor/22.원목마루_밀키화이트.png","scale":300},"0fd15a4b-e536-ab43-6d53-bdfb828cbd1d,32aea052-a14f-37a1-393b-a64c2f5fbc5d,55bf158f-6bec-94c1-9c1b-62f1c6a3d2dc,5beb1e3e-f4f9-ad80-4da0-79616109e17c,cf3f26fc-7409-d362-3a5c-01efa6c40c8a":{"url":"rooms/textures/wall_floor/22.원목마루_밀키화이트.png","scale":300},"4ffd4f3c-e899-c0b1-cb81-bffed4da921d,6de4e9e2-9fcb-1cbe-a70e-0701b37792ac,821db2fc-cd4e-a8ce-34fb-37dd53f903ad,9cccda4f-1ad2-bd56-b4f0-c6ea4f2a25d5,cbc5809c-2c00-85a7-069b-113fbfc6de91,ff537dda-abdd-bf5a-659a-4435063c708a":{"url":"rooms/textures/wall_floor/22.원목마루_밀키화이트.png","scale":300},"1009ae74-b095-f9ab-454c-207c857987ea,369ffe6f-943c-9ff8-aa0c-c06c9d75eca1,951f11c2-b7a5-5af5-3a77-22e18f5018c6,a063fecd-9838-98b4-94e4-9979a747e019,b499cd61-ebaf-9906-21a4-aecc1b7172fb,e25bfb6c-aba8-d83a-3881-657fcd77a09a":{"url":"rooms/textures/wall_floor/22.원목마루_밀키화이트.png","scale":300},"2e8795cd-a125-e13e-2cbd-0b4a7dc7ffa6,369ffe6f-943c-9ff8-aa0c-c06c9d75eca1,a063fecd-9838-98b4-94e4-9979a747e019,afa4674a-b0d9-66ef-f2bb-60b70b5150ee,b0396fd9-2128-a332-855c-2638462413bf,b499cd61-ebaf-9906-21a4-aecc1b7172fb":{"url":"rooms/textures/wall_floor/22.원목마루_밀키화이트.png","scale":300},"2e8795cd-a125-e13e-2cbd-0b4a7dc7ffa6,3264f1c9-0038-8770-7e82-133f73fe9aeb,53d805f8-aa19-9c92-3f8c-21bc03a8cc66,b0396fd9-2128-a332-855c-2638462413bf,cc825b54-7db0-ba23-48b4-b53f8e9e4b23":{"url":"rooms/textures/wall_floor/22.원목마루_밀키화이트.png","scale":300},"00b99ce7-69b2-1537-f363-ff77e1932c72,1a2272dd-1654-7e6b-af79-542bc66a631b,2f297524-6dcb-1860-a99c-b0a182f525c9,3264f1c9-0038-8770-7e82-133f73fe9aeb,350d93b4-6837-2e6d-d37b-2cdba0fa1750,557182ef-ef8b-4b32-9ef7-f491a2e92476,58dc4704-4f49-2e58-0092-ec3d417f6c2b,5beb1e3e-f4f9-ad80-4da0-79616109e17c,cc825b54-7db0-ba23-48b4-b53f8e9e4b23,cf3f26fc-7409-d362-3a5c-01efa6c40c8a":{"url":"rooms/textures/wall_floor/25.콘크리트라이트.png","scale":300},"1009ae74-b095-f9ab-454c-207c857987ea,1314fd82-148a-6a4d-c25d-09630e03181f,3b06b8fb-7aa6-4cd1-f316-132c883296df,42bccf0b-55bd-4742-5e6d-31c8c8c79121,561006a6-61ad-894d-0c4e-0c641f120bae,56cc8851-8f9a-538e-cd8b-316e2e03eb4a,951f11c2-b7a5-5af5-3a77-22e18f5018c6,995befab-2846-41e4-83b0-a0a23e2a80cb":{"url":"rooms/textures/wall_floor/25.콘크리트라이트.png","scale":300},"6de4e9e2-9fcb-1cbe-a70e-0701b37792ac,6eae655e-e7ff-d277-08a4-ce2e4c519d89,821db2fc-cd4e-a8ce-34fb-37dd53f903ad,c5448805-ed02-70f3-c1fd-45af32c7ea98":{"url":"rooms/textures/wall_floor/25.콘크리트라이트.png","scale":300},"56a127f3-69d0-c65d-365a-6b74675994fc,951f11c2-b7a5-5af5-3a77-22e18f5018c6,a063fecd-9838-98b4-94e4-9979a747e019,afa4674a-b0d9-66ef-f2bb-60b70b5150ee":{"url":"rooms/textures/wall_floor/21.타일_실버임페리얼.png","scale":300},"13f9661a-208b-0bc2-bbaf-c1ae291d4ff7,4ffd4f3c-e899-c0b1-cb81-bffed4da921d,8a6b2705-ea55-0008-b76e-71c0529f816c,9cccda4f-1ad2-bd56-b4f0-c6ea4f2a25d5,ddc8b265-ea45-1af6-b896-14d080022c44":{"url":"rooms/textures/wall_floor/21.타일_실버임페리얼.png","scale":300},"21da0999-d108-c93a-b69c-83a0315b6796,cbc5809c-2c00-85a7-069b-113fbfc6de91,e2ba3ebd-3b05-5785-b241-4ef0224024f8,ff537dda-abdd-bf5a-659a-4435063c708a":{"url":"rooms/textures/wall_floor/22.원목마루_밀키화이트.png","scale":300},"21d0c27a-25d0-cbd4-d41c-57dc0e21b7a5,21da0999-d108-c93a-b69c-83a0315b6796,32aea052-a14f-37a1-393b-a64c2f5fbc5d,55bf158f-6bec-94c1-9c1b-62f1c6a3d2dc,e2ba3ebd-3b05-5785-b241-4ef0224024f8":{"url":"rooms/textures/wall_floor/26.콘크리트그레이.png","scale":300}},"carbonSheet":{"url":"","transparency":1,"x":0,"y":0,"anchorX":0,"anchorY":0,"width":0.01,"height":0.01}},"items":[{"item_name":"문틀","item_type":7,"format":"gltf","model_url":"models/gltf/doorwayOpen.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EB%AC%B8%ED%8B%80&frm=NVSHATC&prevQuery=%EB%AC%B8%EC%A7%80%EB%B0%A9","xpos":186.8988630492994,"ypos":105.01,"zpos":417.8,"rotation":0,"scale_x":370.3703919919315,"scale_y":208.01723455895603,"scale_z":207.63188410475,"fixed":true,"material_colors":["#e49964"]},{"item_name":"문틀","item_type":7,"format":"gltf","model_url":"models/gltf/doorwayOpen.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EB%AC%B8%ED%8B%80&frm=NVSHATC&prevQuery=%EB%AC%B8%EC%A7%80%EB%B0%A9","xpos":393.6006392745019,"ypos":105.01,"zpos":417.8,"rotation":0,"scale_x":267.48972754972834,"scale_y":208.01723455895603,"scale_z":207.63188410475001,"fixed":true,"material_colors":["#e49964"]},{"item_name":"문틀","item_type":7,"format":"gltf","model_url":"models/gltf/doorwayOpen.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EB%AC%B8%ED%8B%80&frm=NVSHATC&prevQuery=%EB%AC%B8%EC%A7%80%EB%B0%A9","xpos":51.806419881549175,"ypos":105.00999999999999,"zpos":1377.8,"rotation":0,"scale_x":761.3169168723043,"scale_y":208.017234558956,"scale_z":207.63188410475,"fixed":true,"material_colors":["#e49964"]},{"item_name":"문틀","item_type":7,"format":"gltf","model_url":"models/gltf/doorwayOpen.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EB%AC%B8%ED%8B%80&frm=NVSHATC&prevQuery=%EB%AC%B8%EC%A7%80%EB%B0%A9","xpos":563.0882603610793,"ypos":103.86,"zpos":1377.8,"rotation":0,"scale_x":843.6214484260664,"scale_y":205.73895056140555,"scale_z":205.38721508740133,"fixed":true,"material_colors":["#e49964"]},{"item_name":"문틀","item_type":7,"format":"gltf","model_url":"models/gltf/doorwayOpen.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EB%AC%B8%ED%8B%80&frm=NVSHATC&prevQuery=%EB%AC%B8%EC%A7%80%EB%B0%A9","xpos":984.3152533544428,"ypos":105.01,"zpos":1377.8,"rotation":0,"scale_x":473.25105643413474,"scale_y":208.01723455895603,"scale_z":207.63188410475,"fixed":true,"material_colors":["#e49964"]},{"item_name":"문틀","item_type":7,"format":"gltf","model_url":"models/gltf/doorwayOpen.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EB%AC%B8%ED%8B%80&frm=NVSHATC&prevQuery=%EB%AC%B8%EC%A7%80%EB%B0%A9","xpos":1091.904460471063,"ypos":105.01,"zpos":707.8,"rotation":0,"scale_x":185.18519599596576,"scale_y":208.01723455895603,"scale_z":207.63188410474996,"fixed":true,"material_colors":["#e49964"]},{"item_name":"문틀","item_type":7,"format":"gltf","model_url":"models/gltf/doorwayOpen.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EB%AC%B8%ED%8B%80&frm=NVSHATC&prevQuery=%EB%AC%B8%EC%A7%80%EB%B0%A9","xpos":984.60710400757,"ypos":105.01,"zpos":347.8,"rotation":0,"scale_x":555.5555879878974,"scale_y":208.01723455895603,"scale_z":299.6633138160446,"fixed":true,"material_colors":["#e49964"]},{"item_name":"닫힌 문","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EB%B0%A9%EB%AC%B8&frm=NVSHATC&prevQuery=%EB%AC%B8","xpos":225.4878846912149,"ypos":105.01,"zpos":777.8,"rotation":0,"scale_x":0.9477389637277374,"scale_y":0.9477389637277374,"scale_z":0.9477389637277374,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"닫힌 문","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EB%B0%A9%EB%AC%B8&frm=NVSHATC&prevQuery=%EB%AC%B8","xpos":-48.50465287808589,"ypos":105.01,"zpos":717.8,"rotation":0,"scale_x":0.9477389637277374,"scale_y":0.9477389637277374,"scale_z":0.9477389637277374,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"닫힌 문","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EB%B0%A9%EB%AC%B8&frm=NVSHATC&prevQuery=%EB%AC%B8","xpos":-17.98997651778012,"ypos":105.01,"zpos":957.8,"rotation":0,"scale_x":0.9477389637277374,"scale_y":0.9477389637277374,"scale_z":0.9477389637277374,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"닫힌 문","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EB%B0%A9%EB%AC%B8&frm=NVSHATC&prevQuery=%EB%AC%B8","xpos":238.20303102352364,"ypos":105.01,"zpos":957.8,"rotation":0,"scale_x":0.9477389637277374,"scale_y":0.9477389637277374,"scale_z":0.9477389637277374,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"닫힌 문","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EB%B0%A9%EB%AC%B8&frm=NVSHATC&prevQuery=%EB%AC%B8","xpos":885.2593582974284,"ypos":105.01,"zpos":957.8,"rotation":0,"scale_x":0.9477389637277374,"scale_y":0.9477389637277374,"scale_z":0.9477389637277374,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"닫힌 문","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EB%B0%A9%EB%AC%B8&frm=NVSHATC&prevQuery=%EB%AC%B8","xpos":818.8,"ypos":105.01,"zpos":761.8499999999999,"rotation":1.5707963267948966,"scale_x":0.9477389637277374,"scale_y":0.9477389637277374,"scale_z":0.9477389637277374,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"닫힌 문","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EB%B0%A9%EB%AC%B8&frm=NVSHATC&prevQuery=%EB%AC%B8","xpos":880.9103346461859,"ypos":105.01,"zpos":707.8,"rotation":0,"scale_x":0.9477389637277372,"scale_y":0.9477389637277372,"scale_z":0.9477389637277372,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"닫힌 문","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EB%B0%A9%EB%AC%B8&frm=NVSHATC&prevQuery=%EB%AC%B8","xpos":1148.8,"ypos":105.01,"zpos":868.8528604951063,"rotation":1.5707963267948966,"scale_x":0.9477389637277374,"scale_y":0.9477389637277374,"scale_z":0.9477389637277374,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"닫힌 문","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EB%B0%A9%EB%AC%B8&frm=NVSHATC&prevQuery=%EB%AC%B8","xpos":1467.8,"ypos":105.01,"zpos":847.0856261124084,"rotation":-1.5707963267948966,"scale_x":0.9477389637277374,"scale_y":0.9477389637277374,"scale_z":0.9477389637277374,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"열린 문","item_type":7,"model_url":"models/js/open_door.js","item_link":"https://search.shopping.naver.com/search/all?query=%EC%97%B4%EB%A6%B0%20%EB%AC%B8&frm=NVSHATC&prevQuery=%EB%B0%A9%EB%AC%B8","xpos":1309.950643326309,"ypos":120.01,"zpos":237.8,"rotation":0,"scale_x":3.0895983522142116,"scale_y":1.0831302435009948,"scale_z":1.0886016845783177,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"열린 문","item_type":7,"model_url":"models/js/open_door.js","item_link":"https://search.shopping.naver.com/search/all?query=%EC%97%B4%EB%A6%B0%20%EB%AC%B8&frm=NVSHATC&prevQuery=%EB%B0%A9%EB%AC%B8","xpos":1308.559583955221,"ypos":120.01,"zpos":1506.8,"rotation":3.141592653589793,"scale_x":3.089598352214212,"scale_y":1.0831302435009948,"scale_z":0.9967919039512306,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"라운드형 샤워부스","item_type":2,"format":"gltf","model_url":"models/gltf/showerRound.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EB%9D%BC%EC%9A%B4%EB%93%9C%20%EC%83%A4%EC%9B%8C%20%EB%B6%80%EC%8A%A4&frm=NVSHATC&prevQuery=%EB%9D%BC%EC%9A%B4%EB%93%9C%EC%83%A4%EC%9B%8C%20%EB%B6%80%EC%8A%A4","xpos":758.3819351458039,"ypos":105.99999999999999,"zpos":596.2180648541959,"rotation":0,"scale_x":191.9502709749377,"scale_y":191.9502709749377,"scale_z":191.9502709749377,"fixed":true,"material_colors":["#ffffff","#4e6363","#b2d3c4","#f7ffff"]},{"item_name":"욕조2","item_type":2,"format":"gltf","model_url":"models/gltf/tub.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EC%9A%95%EC%A1%B0&frm=NVSHATC&prevQuery=%ED%99%94%EC%9E%A5%EC%8B%A4%20%EC%9C%A0%EB%A6%AC","xpos":-80.70000000000002,"ypos":27.626695751945302,"zpos":460.0705538565161,"rotation":0,"scale_x":0.629906070035969,"scale_y":0.629906070035969,"scale_z":0.629906070035969,"fixed":true,"material_colors":["#fafafa"]},{"item_name":"철제 의자","item_type":1,"model_url":"models/js/gus-churchchair-whiteoak.js","item_link":"https://search.shopping.naver.com/search/all?query=%EC%B2%A0%EC%A0%9C%20%EC%9D%98%EC%9E%90&frm=NVSHATC&prevQuery=%EC%98%A4%EB%A5%B4%EB%82%B4%EB%A6%AC%20%EC%B0%BD","xpos":108.25104421839964,"ypos":43.01830417612625,"zpos":613.9438071862112,"rotation":-1.5707963267948966,"scale_x":1.0896936155162409,"scale_y":1.0896936155162409,"scale_z":1.0896936155162409,"fixed":true,"material_colors":["#ffffff","#cccccc","#ffffff","#ffffff","#cccccc","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"]},{"item_name":"나무 5칸 서랍형 옷장","item_type":1,"model_url":"models/js/DWR_MATERA_DRESSER2.js","item_link":"https://search.shopping.naver.com/search/all?query=%EB%82%98%EB%AC%B4%20%EC%84%9C%EB%9E%8D%ED%98%95%20%EC%98%B7%EC%9E%A5&frm=NVSHATC&prevQuery=%EB%82%98%EB%AC%B4%20%EC%98%B7%EC%9E%A5","xpos":276.57997719650257,"ypos":85,"zpos":467.6926354262084,"rotation":3.141592653589793,"scale_x":0.9912649730574193,"scale_y":1.4709699275397656,"scale_z":0.9913282271316213,"fixed":true,"material_colors":["#ffffff","#a3a3a3"]},{"item_name":"흰색 6칸 서랍형 옷장","item_type":1,"model_url":"models/js/we-narrow6white_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%ED%9D%B0%EC%83%89%20%EC%84%9C%EB%9E%8D%ED%98%95%20%EC%98%B7%EC%9E%A5&frm=NVSHATC&prevQuery=%EB%82%98%EB%AC%B4%20%EC%84%9C%EB%9E%8D%ED%98%95%20%EC%98%B7%EC%9E%A5","xpos":271.6202752345215,"ypos":35.611997646165,"zpos":596.5645717173517,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"거실용 스텐드","item_type":1,"model_url":"models/js/ore-3legged-white_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EA%B1%B0%EC%8B%A4%EC%9A%A9%20%EC%8A%A4%ED%85%90%EB%93%9C&frm=NVSHATC&prevQuery=%EC%9B%90%EB%AA%A9%20%EC%88%98%EB%82%A9%EC%9E%A5","xpos":47.28122079000951,"ypos":65,"zpos":732.3993213828812,"rotation":0,"scale_x":0.900726149498266,"scale_y":0.900726149498266,"scale_z":0.900726149498266,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"거실용 스텐드","item_type":1,"model_url":"models/js/ore-3legged-white_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EA%B1%B0%EC%8B%A4%EC%9A%A9%20%EC%8A%A4%ED%85%90%EB%93%9C&frm=NVSHATC&prevQuery=%EC%9B%90%EB%AA%A9%20%EC%88%98%EB%82%A9%EC%9E%A5","xpos":236.38621476982837,"ypos":65.01583226506268,"zpos":1249.4727873114725,"rotation":0,"scale_x":0.9009455423466929,"scale_y":0.9009455423466929,"scale_z":0.9009455423466929,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"거실용 스텐드","item_type":1,"model_url":"models/js/ore-3legged-white_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EA%B1%B0%EC%8B%A4%EC%9A%A9%20%EC%8A%A4%ED%85%90%EB%93%9C&frm=NVSHATC&prevQuery=%EC%9B%90%EB%AA%A9%20%EC%88%98%EB%82%A9%EC%9E%A5","xpos":1105.256678119092,"ypos":65.01583226506268,"zpos":617.4641131485731,"rotation":0,"scale_x":0.9009455423466929,"scale_y":0.9009455423466929,"scale_z":0.9009455423466929,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"나무 침대 옆 협탁","item_type":1,"model_url":"models/js/bd-shalebedside-smoke_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EC%B9%A8%EB%8C%80%EC%98%86%20%ED%98%91%ED%83%81&frm=NVSHATC&prevQuery=%EC%84%9C%EB%9E%8D%ED%98%95%20%EC%98%B7%EC%9E%A5","xpos":-129.7341129164372,"ypos":30.006022652426385,"zpos":1025.6012062215682,"rotation":1.5707963267948966,"scale_x":1.147227533460803,"scale_y":1.147227533460803,"scale_z":1.147227533460803,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"나무 침대 옆 협탁","item_type":1,"model_url":"models/js/bd-shalebedside-smoke_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EC%B9%A8%EB%8C%80%EC%98%86%20%ED%98%91%ED%83%81&frm=NVSHATC&prevQuery=%EC%84%9C%EB%9E%8D%ED%98%95%20%EC%98%B7%EC%9E%A5","xpos":1117.1581750019845,"ypos":30.006022652426385,"zpos":528.3091956203809,"rotation":-1.5707963267948966,"scale_x":1.147227533460803,"scale_y":1.147227533460803,"scale_z":1.147227533460803,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"1인용 빨간 소파","item_type":1,"model_url":"models/js/ik-ekero-orange_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=1%EC%9D%B8%EC%9A%A9+%EB%B9%A8%EA%B0%84+%EC%87%BC%ED%8C%8C&bt=-1&frm=NVSCPRO","xpos":211.6961464777146,"ypos":37.50235073007,"zpos":1114.7522232868384,"rotation":-0.5966944503889777,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"1인용 빨간 소파","item_type":1,"model_url":"models/js/ik-ekero-orange_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=1%EC%9D%B8%EC%9A%A9+%EB%B9%A8%EA%B0%84+%EC%87%BC%ED%8C%8C&bt=-1&frm=NVSCPRO","xpos":980.5392666965163,"ypos":37.50235073007,"zpos":1090.9032176432606,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"사이드 테이블","item_type":1,"model_url":"models/js/GUSossingtonendtable.js","item_link":"https://search.shopping.naver.com/search/all?query=%EC%82%AC%EC%9D%B4%EB%93%9C%20%ED%85%8C%EC%9D%B4%EB%B8%94&frm=NVSHATC&prevQuery=%EC%9B%90%EB%AA%A9%20%EC%BB%A4%ED%94%BC%20%ED%85%8C%EC%9D%B4%EB%B8%94","xpos":174.82065080349997,"ypos":23.208047256097558,"zpos":1211.7385977103731,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff","#ffffff","#020202","#ffffff","#ffffff","#ffffff"]},{"item_name":"사이드 테이블","item_type":1,"model_url":"models/js/GUSossingtonendtable.js","item_link":"https://search.shopping.naver.com/search/all?query=%EC%82%AC%EC%9D%B4%EB%93%9C%20%ED%85%8C%EC%9D%B4%EB%B8%94&frm=NVSHATC&prevQuery=%EC%9B%90%EB%AA%A9%20%EC%BB%A4%ED%94%BC%20%ED%85%8C%EC%9D%B4%EB%B8%94","xpos":996.0209937651229,"ypos":23.208047256097558,"zpos":565.0527909478575,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff","#ffffff","#020202","#ffffff","#ffffff","#ffffff"]},{"item_name":"화장실 유리","item_type":2,"format":"gltf","model_url":"models/gltf/bathroomMirror.glb","item_link":"https://search.shopping.naver.com/search/all?query=%ED%99%94%EC%9E%A5%EC%8B%A4%20%EC%9C%A0%EB%A6%AC&frm=NVSHATC&prevQuery=%ED%99%94%EC%9E%A5%EC%8B%A4%EC%9C%A0%EB%A6%AC","xpos":-154.72017585883188,"ypos":124.03811164098369,"zpos":557.8467991236082,"rotation":1.5707963267948966,"scale_x":165.92554146393954,"scale_y":165.92554146393954,"scale_z":165.92554146393954,"fixed":true,"material_colors":["#e49964","#bcd1d6","#b2d3c4"]},{"item_name":"뉴욕 포스터 액자","item_type":9,"model_url":"models/js/nyc-poster2.js","item_link":"https://search.shopping.naver.com/search/all?query=%EB%89%B4%EC%9A%95%20%ED%8F%AC%EC%8A%A4%ED%84%B0%20%EC%95%A1%EC%9E%90&frm=NVSHATC&prevQuery=%EA%B1%B0%EC%8B%A4%20%EB%9F%AC%EA%B7%B8","xpos":302.04624968249937,"ypos":48.27016002032004,"zpos":1154.80262775105,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#cccccc"]},{"item_name":"원목 커피테이블","item_type":1,"model_url":"models/js/ik-stockholmcoffee-brown.js","item_link":"https://search.shopping.naver.com/search/all?query=%EC%9B%90%EB%AA%A9%20%EC%BB%A4%ED%94%BC%20%ED%85%8C%EC%9D%B4%EB%B8%94&frm=NVSHATC&prevQuery=%EA%B1%B0%EC%8B%A4%EC%9A%A9%20%EC%8A%A4%ED%83%A0%EB%93%9C","xpos":530.4768588462122,"ypos":24.01483158034958,"zpos":1169.7373081183007,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff","#7f7f7f","#000000","#a59292","#ffffff","#a59292","#ffffff","#a59292","#a59292","#a59292","#000000","#000000","#a59292","#ffffff","#a59292","#a59292","#ffffff","#ffffff","#ffffff"]},{"item_name":"원목 커피테이블","item_type":1,"model_url":"models/js/ik-stockholmcoffee-brown.js","item_link":"https://search.shopping.naver.com/search/all?query=%EC%9B%90%EB%AA%A9%20%EC%BB%A4%ED%94%BC%20%ED%85%8C%EC%9D%B4%EB%B8%94&frm=NVSHATC&prevQuery=%EA%B1%B0%EC%8B%A4%EC%9A%A9%20%EC%8A%A4%ED%83%A0%EB%93%9C","xpos":978.6548827605627,"ypos":24.01483158034958,"zpos":1182.8984518730347,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff","#7f7f7f","#000000","#a59292","#ffffff","#a59292","#ffffff","#a59292","#a59292","#a59292","#000000","#000000","#a59292","#ffffff","#a59292","#a59292","#ffffff","#ffffff","#ffffff"]},{"item_name":"거실 러그","item_type":8,"model_url":"models/js/cb-blue-block-60x96.js","item_link":"https://search.shopping.naver.com/search/all?color=8192&frm=NVSHPRC&origQuery=%EA%B1%B0%EC%8B%A4%20%EB%9F%AC%EA%B7%B8&pagingIndex=1&pagingSize=40&productSet=total&query=%EA%B1%B0%EC%8B%A4%20%EB%9F%AC%EA%B7%B8&sort=rel&timestamp=&viewType=list","xpos":550.3227730068359,"ypos":0.250005,"zpos":1170.183566008085,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"텔레비전","item_type":8,"model_url":"models/js/cb-clapboard_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%ED%85%94%EB%A0%88%EB%B9%84%EC%A0%84&frm=NVSHATC&prevQuery=%EC%B9%A8%EB%8C%80","xpos":779.8050503207849,"ypos":67.9,"zpos":1179.1937978650265,"rotation":-1.5707963267948966,"scale_x":1.1811023622047243,"scale_y":1.000147333280334,"scale_z":1,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"얇은 원목 책장","item_type":1,"model_url":"models/js/cb-kendallbookcasewalnut_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EC%96%87%EC%9D%80%20%EC%9B%90%EB%AA%A9%20%EC%B1%85%EC%9E%A5&frm=NVSHATC&prevQuery=%EC%96%87%EC%9D%80%20%EC%B1%85%EC%9E%A5","xpos":796.1783355498839,"ypos":74.99999999999999,"zpos":1020.7798274259765,"rotation":-1.5707963267948966,"scale_x":0.9686704306431972,"scale_y":0.813656406159784,"scale_z":1.0003456691841162,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"얇은 원목 책장","item_type":1,"model_url":"models/js/cb-kendallbookcasewalnut_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EC%96%87%EC%9D%80%20%EC%9B%90%EB%AA%A9%20%EC%B1%85%EC%9E%A5&frm=NVSHATC&prevQuery=%EC%96%87%EC%9D%80%20%EC%B1%85%EC%9E%A5","xpos":1125.037529797019,"ypos":92.17650034119151,"zpos":999.3972105760961,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"얇은 원목 책장","item_type":1,"model_url":"models/js/cb-kendallbookcasewalnut_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EC%96%87%EC%9D%80%20%EC%9B%90%EB%AA%A9%20%EC%B1%85%EC%9E%A5&frm=NVSHATC&prevQuery=%EC%96%87%EC%9D%80%20%EC%B1%85%EC%9E%A5","xpos":1125.3683248042248,"ypos":92.17650034119151,"zpos":1073.1772451871454,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"1인용 파란 소파","item_type":1,"model_url":"models/js/ik-ekero-blue_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=1%EC%9D%B8%EC%9A%A9%20%ED%8C%8C%EB%9E%80%20%EC%87%BC%ED%8C%8C&frm=NVSHATC&prevQuery=%EC%B2%A0%EC%A0%9C%20%EC%9D%98%EC%9E%90","xpos":978.9560226571504,"ypos":37.500000370129,"zpos":1282.2966560141479,"rotation":-3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"1인용 파란 소파","item_type":1,"model_url":"models/js/ik-ekero-blue_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=1%EC%9D%B8%EC%9A%A9%20%ED%8C%8C%EB%9E%80%20%EC%87%BC%ED%8C%8C&frm=NVSHATC&prevQuery=%EC%B2%A0%EC%A0%9C%20%EC%9D%98%EC%9E%90","xpos":899.3001252931083,"ypos":37.500000370129,"zpos":577.9923974112133,"rotation":2.3538607017831774,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"원목 수납장","item_type":1,"model_url":"models/js/cb-tecs_baked.js","item_link":"https://search.shopping.naver.com/search/all?where=all&frm=NVSCTAB&query=%EC%9B%90%EB%AA%A9+%EC%88%98%EB%82%A9%EC%9E%A5","xpos":1118.7115342458499,"ypos":25,"zpos":1170.6381197183073,"rotation":0,"scale_x":1.0905196197068092,"scale_y":1.0905196197068092,"scale_z":1.0905196197068092,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"러버덕 인형","item_type":1,"format":"gltf","model_url":"models/js/Duck.gltf","item_link":"https://search.shopping.naver.com/search/all?query=%EB%9F%AC%EB%B2%84%EB%8D%95%20%EC%9D%B8%ED%98%95&cat_id=&frm=NVSHATC","xpos":1106.7394955045181,"ypos":46.544029369395496,"zpos":1310.5347436194663,"rotation":1.5707963267948966,"scale_x":0.6043084733986381,"scale_y":0.6043084733986381,"scale_z":0.6043084733986381,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"화장실 세면대","item_type":2,"format":"gltf","model_url":"models/gltf/sink2.glb","item_link":"https://search.shopping.naver.com/search/all?query=%ED%99%94%EC%9E%A5%EC%8B%A4%20%EC%84%B8%EB%A9%B4%EB%8C%80&frm=NVSHATC&prevQuery=%EC%96%91%EB%B3%80%EA%B8%B0","xpos":-125.97401763416926,"ypos":55.12328792653295,"zpos":557.6386357139569,"rotation":1.5707963267948966,"scale_x":0.5528492098821665,"scale_y":0.5528492098821665,"scale_z":0.5528492098821665,"fixed":true,"material_colors":["#fff2f5","#9d9d9d"]},{"item_name":"화장실 세면대","item_type":2,"format":"gltf","model_url":"models/gltf/sink2.glb","item_link":"https://search.shopping.naver.com/search/all?query=%ED%99%94%EC%9E%A5%EC%8B%A4%20%EC%84%B8%EB%A9%B4%EB%8C%80&frm=NVSHATC&prevQuery=%EC%96%91%EB%B3%80%EA%B8%B0","xpos":644.0259823658307,"ypos":46.00000000000001,"zpos":681.6583817773119,"rotation":1.5707963267948966,"scale_x":0.5528492098821666,"scale_y":0.5528492098821666,"scale_z":0.5528492098821666,"fixed":true,"material_colors":["#fff2f5","#9d9d9d"]},{"item_name":"침대","item_type":1,"model_url":"models/js/ik_nordli_full.js","item_link":"https://search.shopping.naver.com/search/all?query=%EC%B9%A8%EB%8C%80&frm=NVSHATC&prevQuery=%ED%9D%B0%EC%83%89%20%EC%B9%A8%EB%8C%80%20%EC%98%86%20%ED%98%91%ED%83%81","xpos":1042.9207056971266,"ypos":50,"zpos":429.27265502538944,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff","#b6b2a4","#cccccc"]},{"item_name":"양변기","item_type":2,"format":"gltf","model_url":"models/gltf/toilet1.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EC%96%91%EB%B3%80%EA%B8%B0&frm=NVSHATC&prevQuery=%ED%99%94%EC%B4%88","xpos":-125.99263714361412,"ypos":52.524943686836906,"zpos":633.4876800654088,"rotation":1.5707963267948966,"scale_x":300,"scale_y":300,"scale_z":300,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"양변기","item_type":2,"format":"gltf","model_url":"models/gltf/toilet1.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EC%96%91%EB%B3%80%EA%B8%B0&frm=NVSHATC&prevQuery=%ED%99%94%EC%B4%88","xpos":644.0073628563858,"ypos":98.48605005682754,"zpos":765.4033234077456,"rotation":1.5707963267948966,"scale_x":300,"scale_y":300,"scale_z":300,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"컴퓨터책상","item_type":1,"format":"gltf","model_url":"models/gltf/office_desk1.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EC%BB%B4%ED%93%A8%ED%84%B0%EC%B1%85%EC%83%81&frm=NVSHATC&prevQuery=%EC%86%8C%ED%8C%8C","xpos":75.03661407624689,"ypos":38.37342496891839,"zpos":600.6538120566763,"rotation":1.5707963267948966,"scale_x":1.6678873417414775,"scale_y":1.6678873417414775,"scale_z":1.6678873417414775,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"화초","item_type":8,"format":"gltf","model_url":"models/gltf/plant.glb","item_link":"https://search.shopping.naver.com/search/all?query=%ED%99%94%EC%B4%88&frm=NVSHATC&prevQuery=%EB%B2%BD%EA%B1%B8%EC%9D%B4%ED%98%95%20%EC%97%90%EC%96%B4%EC%BB%A8","xpos":-76.83246861532814,"ypos":80.3433837890625,"zpos":1447.9733577771979,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff","#ffffff","#d0d0d0"]},{"item_name":"화초","item_type":8,"format":"gltf","model_url":"models/gltf/plant.glb","item_link":"https://search.shopping.naver.com/search/all?query=%ED%99%94%EC%B4%88&frm=NVSHATC&prevQuery=%EB%B2%BD%EA%B1%B8%EC%9D%B4%ED%98%95%20%EC%97%90%EC%96%B4%EC%BB%A8","xpos":740.069306565363,"ypos":80.3433837890625,"zpos":1318.493392372734,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff","#ffffff","#d0d0d0"]},{"item_name":"소파","item_type":1,"format":"gltf","model_url":"models/gltf/sofa1.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EC%86%8C%ED%8C%8C&frm=NVSHATC&prevQuery=%EC%9A%95%EC%A1%B0","xpos":362.0274844962469,"ypos":43.12153499390991,"zpos":1182.171737080704,"rotation":1.5707963267948966,"scale_x":300,"scale_y":300,"scale_z":300,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"킹사이즈 침대","item_type":1,"format":"gltf","model_url":"models/gltf/bed1.glb","item_link":"https://search.shopping.naver.com/search/all?query=%ED%82%B9%EC%82%AC%EC%9D%B4%EC%A6%88%20%EC%B9%A8%EB%8C%80&frm=NVSHATC&prevQuery=%ED%82%B9%20%EC%B9%A8%EB%8C%80","xpos":-43.948583407924524,"ypos":52.51725046063938,"zpos":1208.015168885052,"rotation":1.5707963267948966,"scale_x":1.0311408855932214,"scale_y":1.0311408855932214,"scale_z":1.0311408855932214,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"화장실 유리","item_type":2,"format":"gltf","model_url":"models/gltf/bathroomMirror.glb","item_link":"https://search.shopping.naver.com/search/all?query=%ED%99%94%EC%9E%A5%EC%8B%A4%20%EC%9C%A0%EB%A6%AC&frm=NVSHATC&prevQuery=%ED%99%94%EC%9E%A5%EC%8B%A4%EC%9C%A0%EB%A6%AC","xpos":615.2798241411681,"ypos":114.1529969598534,"zpos":681.702959247604,"rotation":1.5707963267948966,"scale_x":165.92554146393954,"scale_y":165.92554146393954,"scale_z":165.92554146393954,"fixed":true,"material_colors":["#e49964","#bcd1d6","#b2d3c4"]},{"item_name":"책장","item_type":9,"format":"gltf","model_url":"models/gltf/bookcaseClosedWide.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EB%82%98%EB%AC%B4%20%EC%B1%85%EC%9E%A5&frm=NVSHATC&prevQuery=%EC%B1%85%EC%9E%A5","xpos":-129.2,"ypos":88.88499438412495,"zpos":831.2999982118606,"rotation":1.5707963267948966,"scale_x":224.99999664723876,"scale_y":224.99999664723876,"scale_z":224.99999664723876,"fixed":true,"material_colors":["#e49964"]},{"item_name":"열린 문","item_type":7,"model_url":"models/js/open_door.js","item_link":"https://search.shopping.naver.com/search/all?query=%EC%97%B4%EB%A6%B0%20%EB%AC%B8&frm=NVSHATC&prevQuery=%EB%B0%A9%EB%AC%B8","xpos":997.8,"ypos":105.01,"zpos":865.4579166784819,"rotation":-1.5707963267948966,"scale_x":1.6477857878475795,"scale_y":0.9477389630633705,"scale_z":0.9967919039512306,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"벽걸이 선반","item_type":2,"format":"gltf","model_url":"models/gltf/wall_stand.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EB%B2%BD%EA%B1%B8%EC%9D%B4%20%EC%84%A0%EB%B0%98&frm=NVSHATC&prevQuery=%EC%84%A0%EB%B0%98","xpos":587.2453727843362,"ypos":163.980951782793,"zpos":252.51885277547024,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false,"material_colors":["#ffffff"]},{"item_name":"에어컨","item_type":2,"format":"gltf","model_url":"models/gltf/air_conditioner.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EB%B2%BD%EA%B1%B8%EC%9D%B4%ED%98%95%20%EC%97%90%EC%96%B4%EC%BB%A8&frm=NVSHATC&prevQuery=%EC%9E%A5%EB%86%8D","xpos":-144.4682918682194,"ypos":200.9551257350667,"zpos":1038.8107187972857,"rotation":1.5707963267948966,"scale_x":0.7771766844078394,"scale_y":0.7771766844078394,"scale_z":0.7771766844078394,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"디자인 냉장고1","item_type":2,"format":"gltf","model_url":"models/gltf/refrigerator.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EB%94%94%EC%9E%90%EC%9D%B8%20%EB%83%89%EC%9E%A5%EA%B3%A0&frm=NVSHATC&prevQuery=%EC%9D%BC%EB%B0%98%ED%98%95%20%EB%83%89%EC%9E%A5%EA%B3%A0","xpos":771.7040621598005,"ypos":91.00000357627869,"zpos":286.07925591992074,"rotation":-1.5707963267948966,"scale_x":300,"scale_y":300,"scale_z":300,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"오르내리 창문1","item_type":3,"model_url":"models/js/whitewindow.js","item_link":"https://search.shopping.naver.com/search/all?query=%EC%98%A4%EB%A5%B4%EB%82%B4%EB%A6%AC%20%EC%B0%BD&frm=NVSHATC&prevQuery=%EC%97%B4%EB%A6%B0%20%EB%AC%B8","xpos":1147.8,"ypos":158.5787663416475,"zpos":1202.52144967703,"rotation":-1.5707963267948966,"scale_x":1.0562499999994257,"scale_y":0.5279429763827641,"scale_z":0.9966274946109451,"fixed":true,"material_colors":["#ffffff","#a09050","#a09050","#ffffff","#ffffff","#6c6c6c","#000000","#000000","#ffffff","#ffffff","#6c6c6c","#ffffff"]},{"item_name":"오르내리 창문1","item_type":3,"model_url":"models/js/whitewindow.js","item_link":"https://search.shopping.naver.com/search/all?query=%EC%98%A4%EB%A5%B4%EB%82%B4%EB%A6%AC%20%EC%B0%BD&frm=NVSHATC&prevQuery=%EC%97%B4%EB%A6%B0%20%EB%AC%B8","xpos":1147.8,"ypos":178.3512086268163,"zpos":540.5015606359264,"rotation":-1.5707963267948966,"scale_x":1.0562499999994255,"scale_y":0.5279429763827643,"scale_z":0.9966274946109451,"fixed":true,"material_colors":["#ffffff","#a09050","#a09050","#ffffff","#ffffff","#6c6c6c","#000000","#000000","#ffffff","#ffffff","#6c6c6c","#ffffff"]},{"item_name":"여닫이 창문2","item_type":3,"format":"gltf","model_url":"models/gltf/window.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EC%97%AC%EB%8B%AB%EC%9D%B4%EC%B0%BD&frm=NVSHATC&prevQuery=%EC%97%AC%EB%8B%AB%EC%9D%B4%20%EC%B0%BD","xpos":-131.4788078748843,"ypos":160.25700281102922,"zpos":417.8,"rotation":0,"scale_x":191.37343164707443,"scale_y":191.37343164707443,"scale_z":191.37343164707443,"fixed":false,"material_colors":["#ffffff"]},{"item_name":"오르내리 창문1","item_type":3,"model_url":"models/js/whitewindow.js","item_link":"https://search.shopping.naver.com/search/all?query=%EC%98%A4%EB%A5%B4%EB%82%B4%EB%A6%AC%20%EC%B0%BD&frm=NVSHATC&prevQuery=%EC%97%B4%EB%A6%B0%20%EB%AC%B8","xpos":-171.2,"ypos":169.4250023537591,"zpos":1222.5090856628708,"rotation":1.5707963267948966,"scale_x":1.0562499999994255,"scale_y":0.5279429763827642,"scale_z":0.9966274946109451,"fixed":true,"material_colors":["#ffffff","#a09050","#a09050","#ffffff","#ffffff","#6c6c6c","#000000","#000000","#ffffff","#ffffff","#6c6c6c","#ffffff"]}]}'
/*
 * Floorplanner controls
 */

var ViewerFloorplanner = function(blueprint3d)
{
  var canvasWrapper = '#floorplanner';
  // buttons
  var move = '#move';
  var remove = '#delete';
  var draw = '#draw';

  var activeStlye = 'btn-primary disabled';
  this.floorplanner = blueprint3d.floorplanner;
  var scope = this;
  function init()
  {
    $( window ).resize( scope.handleWindowResize );
    scope.handleWindowResize();

    scope.floorplanner.addEventListener(BP3DJS.EVENT_MODE_RESET, function(mode)
    {
      $(draw).removeClass(activeStlye);
      $(remove).removeClass(activeStlye);
      $(move).removeClass(activeStlye);
      if (mode == BP3DJS.floorplannerModes.MOVE)
      {
          $(move).addClass(activeStlye);
      }
      else if (mode == BP3DJS.floorplannerModes.DRAW)
      {
          $(draw).addClass(activeStlye);
      }
      else if (mode == BP3DJS.floorplannerModes.DELETE)
      {
          $(remove).addClass(activeStlye);
      }

      if (mode == BP3DJS.floorplannerModes.DRAW)
      {
        $("#draw-walls-hint").show();
        scope.handleWindowResize();
      }
      else
      {
        $("#draw-walls-hint").hide();
      }
    });

    $(move).click(function()
    {
      scope.floorplanner.setMode(BP3DJS.floorplannerModes.MOVE);
    });

    $(draw).click(function()
    {
      scope.floorplanner.setMode(BP3DJS.floorplannerModes.DRAW);
    });

    $(remove).click(function()
    {
      scope.floorplanner.setMode(BP3DJS.floorplannerModes.DELETE);
    });
  }

  this.updateFloorplanView = function() {
    scope.floorplanner.reset();
  }

  this.handleWindowResize = function() {
    $(canvasWrapper).height(window.innerHeight - $(canvasWrapper).offset().top);
    scope.floorplanner.resizeView();
  };

  init();
};

// function removeCheck() {

// 	if (confirm("정말 삭제하시겠습니까??") == true){    //확인
   
// 		document.removefrm.submit();
   
// 	}else{   //취소
   
// 		return false;
   
// 	}
   
//    }



var mainControls = function(blueprint3d)
{
	  var blueprint3d = blueprint3d;

	  function newDesign(){

	  if (confirm("새로 작성하시겠습니까?(작성된 파일은 삭제됩니다.)") == true){    //확인
		blueprint3d.model.loadSerialized(myhome);
		document.removefrm.submit();
	    }else{   //취소
			
		return false;
   
		}
	}
	
	  function loadDesign()
	  {
	    files = $("#loadFile").get(0).files;
      if(files.length == 0)
      {
          files = $("#loadFile2d").get(0).files;
      }
	    var reader  = new FileReader();
	    reader.onload = function(event) {
	        var data = event.target.result;
	        blueprint3d.model.loadSerialized(data);
	    }
	    reader.readAsText(files[0]);
	  }

	  function saveDesign() {
	    var data = blueprint3d.model.exportSerialized();
	    var a = window.document.createElement('a');
	    var blob = new Blob([data], {type : 'text'});
	    a.href = window.URL.createObjectURL(blob);
	    a.download = 'design.blueprint3d';
	    document.body.appendChild(a)
	    a.click();
	    document.body.removeChild(a)
	  }

	  function saveGLTF()
	  {
		  blueprint3d.three.exportForBlender();
	  }

	  function saveGLTFCallback(o)
	  {
		var data = o.gltf;
		var a = window.document.createElement('a');
		var blob = new Blob([data], {type : 'text'});
		a.href = window.URL.createObjectURL(blob);
		a.download = 'design.gltf';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	  }

	  function saveMesh() {
		    var data = blueprint3d.model.exportMeshAsObj();
		    var a = window.document.createElement('a');
		    var blob = new Blob([data], {type : 'text'});
		    a.href = window.URL.createObjectURL(blob);
		    a.download = 'design.obj';
		    document.body.appendChild(a)
		    a.click();
		    document.body.removeChild(a)
		  }

	  function init() {
	    $("#new").click(newDesign);
	    $("#new2d").click(newDesign);
	    $("#loadFile").change(loadDesign);
	    $("#saveFile").click(saveDesign);

      $("#loadFile2d").change(loadDesign);
	    $("#saveFile2d").click(saveDesign);

	    $("#saveMesh").click(saveMesh);
	    $("#saveGLTF").click(saveGLTF);
	    blueprint3d.three.addEventListener(BP3DJS.EVENT_GLTF_READY, saveGLTFCallback);
	  }

	  init();
}

var GlobalProperties = function()
{
	this.name = 'Global';
	//a - feet and inches, b = inches, c - cms, d - millimeters, e - meters
	this.units = {a:false, b:false, c:false, d:false, e:true};
	this.unitslabel = {a:BP3DJS.dimFeetAndInch, b:BP3DJS.dimInch, c:BP3DJS.dimCentiMeter, d:BP3DJS.dimMilliMeter, e:BP3DJS.dimMeter};
	this.guiControllers = null;

	this.setUnit = function(unit)
	{
		for (let param in this.units)
		{
			this.units[param] = false;
		}
		this.units[unit] = true;

		BP3DJS.Configuration.setValue(BP3DJS.configDimUnit, this.unitslabel[unit]);

		console.log(this.units, this.unitslabel[unit], BP3DJS.Configuration.getStringValue(BP3DJS.configDimUnit));
		
//		globalPropFolder = getGlobalPropertiesFolder(gui, aGlobal, floorplanner);
		var view2df = construct2dInterfaceFolder(globalPropFolder, aGlobal, blueprint3d.floorplanner);
		blueprint3d.floorplanner.view.draw();
		for (var i in this.guiControllers) // Iterate over gui controllers to update the values
		{
			this.guiControllers[i].updateDisplay();
	    }
	}

	this.setGUIControllers = function(guiControls)
	{
		this.guiControllers = guiControls;
	}
}

var CameraProperties = function()
{
	this.ratio = 1;
	this.ratio2 = 1;
	this.locked = false;
	this.three = null;

	this.change = function()
	{
		if(this.three)
		{
			this.three.changeClippingPlanes(this.ratio, this.ratio2);
		}
	}

	this.changeLock = function()
	{
		if(this.three)
		{
			this.three.lockView(!this.locked);
		}
	}

	this.reset = function()
	{
		if(this.three)
		{
			this.three.resetClipping();
		}
	}
}

var CornerProperties = function(corner, gui)
{
	var scope = this;
	this.x = BP3DJS.Dimensioning.cmToMeasureRaw(corner.x);
	this.y = BP3DJS.Dimensioning.cmToMeasureRaw(corner.y);
	this.elevation = BP3DJS.Dimensioning.cmToMeasureRaw(corner.elevation);
	this.gui = gui;
	this.corner = corner;
	
	function onEvent()
	{
		scope.x = BP3DJS.Dimensioning.cmToMeasureRaw(scope.corner.x);
		scope.y = BP3DJS.Dimensioning.cmToMeasureRaw(scope.corner.y);
		scope.elevation = BP3DJS.Dimensioning.cmToMeasureRaw(scope.corner.elevation);
		scope.xcontrol.updateDisplay();
		scope.ycontrol.updateDisplay();
		scope.elevationcontrol.updateDisplay();
	}
	
	function onChangeX()
	{
		scope.corner.x = BP3DJS.Dimensioning.cmFromMeasureRaw(scope.x);
	}
	function onChangeY()
	{
		scope.corner.y = BP3DJS.Dimensioning.cmFromMeasureRaw(scope.y);
	}
	function onChangeElevation()
	{
		scope.corner.elevation = BP3DJS.Dimensioning.cmFromMeasureRaw(scope.elevation);
	}
	
	this.corner.addEventListener(BP3DJS.EVENT_CORNER_ATTRIBUTES_CHANGED, onEvent);
//	this.corner.addEventListener(BP3DJS.EVENT_MOVED, onEvent);
		
	this.f = gui.addFolder('선택한 모서리(2D)');
	// this.xcontrol = f.add(this, 'x').name(`x(${BP3DJS.Configuration.getStringValue(BP3DJS.configDimUnit)})`).step(0.01).onChange(()=>{onChangeX()});
	// this.ycontrol = f.add(this, 'y').name(`y(${BP3DJS.Configuration.getStringValue(BP3DJS.configDimUnit)})`).step(0.01).onChange(()=>{onChangeY()});
	this.elevationcontrol = f.add(this, 'elevation').name(`모서리의 높이(${BP3DJS.Configuration.getStringValue(BP3DJS.configDimUnit)})`).min(0).step(0.01).onChange(()=>{onChangeElevation()});  
	
	
	return this.f;
}

var RoomProperties = function(room, gui)
{
	var scope = this;
	this.gui = gui;
	this.room = room;		
	this.f = gui.addFolder('선택한 공간(2D)');
	this.namecontrol = f.add(room, 'name').name("공간의 이름");
	return this.f;
}

var Wall2DProperties = function(wall2d, gui)
{
	var scope = this;
	this.gui = gui;
	this.wall2d = wall2d;		
	this.walltype = 'Straight';
	this.walllength = BP3DJS.Dimensioning.cmToMeasureRaw( wall2d.wallSize);
	function onChangeWallType()
	{
		if(scope.walltype == 'Straight')
		{
			scope.wall2d.wallType = BP3DJS.WallTypes.STRAIGHT;
		}
		else if(scope.walltype == 'Curved')
		{
			scope.wall2d.wallType = BP3DJS.WallTypes.CURVED;
			
		}
		blueprint3d.floorplanner.view.draw();
	}
	
	function onChangeWallLength()
	{
		scope.wall2d.wallSize = BP3DJS.Dimensioning.cmFromMeasureRaw(scope.walllength);
		blueprint3d.floorplanner.view.draw();
	}
	
	
	this.options = ['Straight', 'Curved'];
	if(this.wall2d.wallType == BP3DJS.WallTypes.CURVED)
	{
		this.walltype = 'Curved';
	}
	this.f = gui.addFolder('선택한 벽(2D)');
	/*wall type 숨기기 */ 
	// this.typecontrol = f.add(this, 'walltype', this.options).name("Wall Type").onChange(()=>{onChangeWallType()});
	if(this.wall2d.wallType == BP3DJS.WallTypes.STRAIGHT)
	{
		this.lengthcontrol = f.add(this, 'walllength').name("벽의 길이").onChange(()=>{onChangeWallLength()});
	}	
	return this.f;
}

var ItemProperties = function(gui)
{
	this.name = 'an item';
	this.link = null;
	this.width = 10;
	this.height = 10;
	this.depth = 10;
	this.fixed = false;
	this.currentItem = null;
	this.guiControllers = null;
	this.gui = gui;
	this.materialsfolder = null;
	this.materials = {};
	this.totalmaterials = -1;
	this.proportionalsize = false;
	this.changingdimension = 'w';

	this.setGUIControllers = function(guiControls)
	{
		this.guiControllers = guiControls;
	}

	this.setItem = function(item)
	{
		this.currentItem = item;
		if(this.materialsfolder)
		{
			this.gui.removeFolder(this.materialsfolder.name);
		}
		if(item)
		{
			var scope = this;
			var material = item.material;
			this.name = item.metadata.itemName;
			this.link = item.metadata.itemLink;
			this.width = BP3DJS.Dimensioning.cmToMeasureRaw(item.getWidth());
			this.height = BP3DJS.Dimensioning.cmToMeasureRaw(item.getHeight());
			this.depth = BP3DJS.Dimensioning.cmToMeasureRaw(item.getDepth());
			this.fixed = item.fixed;
			this.proportionalsize = item.getProportionalResize();

			for (var i in this.guiControllers) // Iterate over gui controllers to update the values
			{
				this.guiControllers[i].updateDisplay();
		    }
			
			
			// materials 기능활성함 오류수정함 (코드재작성) 
			this.materialsfolder =  this.gui.addFolder('Materials');
			this.materials = {};
			this.materialsfolder.name = ('제품 색상 변경(3D)')
			if(material.length)
			{
				this.totalmaterials = material.length;
				for (var i=0;i<material.length;i++)
				{
					this.materials['mat_'+i] = '#'+material[i].color.getHexString();
					var matname = (material[i].name) ? material[i].name : 'Material '+(i+1);
					var ccontrol = this.materialsfolder.addColor(this.materials, 'mat_'+i).name(matname).onChange(()=>{scope.dimensionsChanged()});
				}
				return;
			}
			this.totalmaterials = 1;
			var matname = (material.name) ? material.name : 'Material 1';
			this.materials['mat_0'] = '#'+material.color.getHexString();
			var ccontrol = this.materialsfolder.addColor(this.materials, 'mat_0').name(matname).onChange(()=>{scope.dimensionsChanged()});
			return;
		}
		this.name = 'None';
		return;
	}

	this.dimensionsChanged = function()
	{
		if(this.currentItem)
		{
			var item = this.currentItem;

			var ow = BP3DJS.Dimensioning.cmToMeasureRaw(item.getWidth());
			var oh = BP3DJS.Dimensioning.cmToMeasureRaw(item.getHeight());
			var od = BP3DJS.Dimensioning.cmToMeasureRaw(item.getDepth());

			var h = BP3DJS.Dimensioning.cmFromMeasureRaw(this.height);
			var w = BP3DJS.Dimensioning.cmFromMeasureRaw(this.width);
			var d = BP3DJS.Dimensioning.cmFromMeasureRaw(this.depth);

			this.currentItem.resize(h,w,d);

			if( w != ow)
			{
				this.height = BP3DJS.Dimensioning.cmToMeasureRaw(item.getHeight());
				this.depth = BP3DJS.Dimensioning.cmToMeasureRaw(item.getDepth());
			}

			if( h != oh)
			{
				this.width = BP3DJS.Dimensioning.cmToMeasureRaw(item.getWidth());
				this.depth = BP3DJS.Dimensioning.cmToMeasureRaw(item.getDepth());
			}

			if( d != od)
			{
				this.width = BP3DJS.Dimensioning.cmToMeasureRaw(item.getWidth());
				this.height = BP3DJS.Dimensioning.cmToMeasureRaw(item.getHeight());
			}
			for (var i=0;i<this.totalmaterials;i++)
			{
				this.currentItem.setMaterialColor(this.materials['mat_'+i], i);
			}

			this.guiControllers.forEach((control)=>{control.updateDisplay()}); // Iterate over gui controllers to update the values
		}
	}

	this.proportionFlagChange = function()
	{
		if(this.currentItem)
		{
			this.currentItem.setProportionalResize(this.proportionalsize);
		}
	}

	this.lockFlagChanged = function()
	{
		if(this.currentItem)
		{
			this.currentItem.setFixed(this.fixed);
		}
	}

	this.deleteItem = function()
	{
		if(this.currentItem)
		{
			this.currentItem.remove();
			this.setItem(null);
		}
	}

	// 검색기능 링크 연결
	this.linkurl = function()
	{

		if(this.currentItem)
		{
			var item = this.currentItem;
			window.open(item.metadata.itemLink, "네이버쇼핑검색", "width=750,height=600, left=1000, top=100, location=no,menubar=no,resizable=no,status=no,titlebar=no,toolbar=no ");
		}
	
	}


}

var WallProperties = function() // 벽지과 바닥 텍스쳐 추가
{
	this.textures = [
		['rooms/textures/wall_floor/01.모던회벽_라이트그레이.png', true, 1], ['rooms/textures/wall_floor/02.모던회벽_그레이.png', true, 1],
		['rooms/textures/wall_floor/03.모던회벽_화이트.png', false, 300], ['rooms/textures/wall_floor/04.자이언트스톤_그레이.png', false, 300],
		['rooms/textures/wall_floor/05.자이언트스톤_베이지.png', false, 300], ['rooms/textures/wall_floor/06.회벽_골드.png', false, 300],
		['rooms/textures/wall_floor/07.회벽_그레이.png', false, 300], ['rooms/textures/wall_floor/08.회벽_딥그레이.png', false, 300],
		['rooms/textures/wall_floor/09.회벽_라이트그레이.png', false, 300], ['rooms/textures/wall_floor/10.회벽_라이트베이지.png', false, 300],
		['rooms/textures/wall_floor/11.회벽_미들그레이.png', false, 300], ['rooms/textures/wall_floor/12.회벽_베이지.png', false, 300],
		['rooms/textures/wall_floor/13.회벽_소프트그레이.png', false, 300], ['rooms/textures/wall_floor/14.회벽_화이트.png', false, 300],
		['rooms/textures/wall_floor/20.타일_크림임페리얼.png', false, 300], ['rooms/textures/wall_floor/21.타일_실버임페리얼.png', false, 300],
		['rooms/textures/wall_floor/22.원목마루_밀키화이트.png', false, 300], ['rooms/textures/wall_floor/23.원목마루_애쉬.png', false, 300],
		['rooms/textures/wall_floor/24.원목마루_월넛.png', false, 300], ['rooms/textures/wall_floor/25.콘크리트라이트.png', false, 300],
		['rooms/textures/wall_floor/26.콘크리트그레이.png', false, 300],
	];
		

	this.floormaterialname = 0;
	this.wallmaterialname = 0;

	this.forAllWalls = false;

	this.currentWall = null;
	this.currentFloor = null;

	this.wchanged = function()
	{
		if(this.currentWall)
		{
			this.currentWall.setTexture(this.textures[this.wallmaterialname][0], this.textures[this.wallmaterialname][1], this.textures[this.wallmaterialname][2]);
		}
		if(this.currentWall && this.forAllWalls)
		{
			this.currentFwall.setRoomWallsTexture(this.textures[this.wallmaterialname][0], this.textures[this.wallmaterialname][1], this.textures[this.wallmaterialname][2]);
		}
	}

	this.fchanged = function()
	{
		if(this.currentFloor)
		{
			this.currentFloor.setTexture(this.textures[this.floormaterialname][0], this.textures[this.floormaterialname][1], this.textures[this.floormaterialname][2]);
		}
	}


	this.setWall = function(wall)
	{
		this.currentWall = wall;
	}

	this.setFloor = function(floor)
	{
		this.currentFloor = floor;
	}
}

// var MainView = function(blueprint3d, floorplanControls, modalEffects) {
// 	var blueprint3d = blueprint3d;
// 	var floorplanControls = floorplanControls;
// 	var modalEffects = modalEffects;


// 	var scope = this;
// 	this.stateChangeCallbacks = $.Callbacks();
  
// 	this.states = {
// 	  "DEFAULT" : {
// 		"div" : $("#viewer"),
// 	  },
// 	  "FLOORPLAN" : {
// 		"div" : $("#floorplanner"),
// 	  },
// 	}


// 여기에서  기능추가 함수를 짠다.


function addBlueprintListeners(blueprint3d)
{
	var three = blueprint3d.three;	 
	var currentFolder = undefined; 
	
	function closeCurrent3DSelectionFolders()
	{
		if(itemPropFolder && itemPropFolder != null)
		{
			itemPropFolder.close();
			selectionsFolder.removeFolder(itemPropFolder.name);
		}
		if(wallPropFolder && wallPropFolder != null)
		{
			wallPropFolder.close();
			selectionsFolder.removeFolder(wallPropFolder.name);
		}
	}
	function wallClicked(wall)
	{
		closeCurrent3DSelectionFolders();
		
		aWall = new WallProperties();
		aWall.setWall(wall);
		aWall.setFloor(null);		
		wallPropFolder = getWallAndFloorPropertiesFolderwall(selectionsFolder, aWall);
//		selectionsFolder.addFolder(wallPropFolder);
		
		wallPropFolder.open();
		selectionsFolder.open();
	}

	function floorClicked(floor)
	{
		closeCurrent3DSelectionFolders();
		
		aWall = new WallProperties();
		aWall.setFloor(floor);
		aWall.setWall(null);
		
		wallPropFolder = getWallAndFloorPropertiesFolderfloor(selectionsFolder, aWall);
//		selectionsFolder.addFolder(wallPropFolder);
		
		wallPropFolder.open();
		selectionsFolder.open();
	}

	function itemSelected(item)
	{
		closeCurrent3DSelectionFolders();
	

		// materials 기능 item 에서 item 건너갈때 오류 정정
		if(void 0 !== selectionsFolder.__folders.Materials)
		{
			selectionsFolder.removeFolder('Materials');
		}

		anItem = new ItemProperties(selectionsFolder, item);
		anItem.setItem(item);  // 주석 해제
		
		itemPropFolder = getItemPropertiesFolder(selectionsFolder, anItem);
		// selectionsFolder.addFolder(itemPropFolder); 
		itemPropFolder.open();
		selectionsFolder.open();



	

	}
	

	  

	// materials 기능구현 부분 
	function itemUnselected()
	{
		// closeCurrent3DSelectionFolders();
		// if(anItem!=null)
		// {
		// 	anItem.setItem(undefined);
		// }
		// materials 기능 item 에서 선택해제할때  오류 정정
		if(void 0 !== selectionsFolder.__folders.Materials)
		{
			selectionsFolder.removeFolder('Materials');
		}
	}
	
	three.addEventListener(BP3DJS.EVENT_ITEM_SELECTED, function(o){itemSelected(o.item);});
	three.addEventListener(BP3DJS.EVENT_ITEM_UNSELECTED, function(o){itemUnselected();});
	three.addEventListener(BP3DJS.EVENT_WALL_CLICKED, (o)=>{wallClicked(o.item);});
    three.addEventListener(BP3DJS.EVENT_FLOOR_CLICKED, (o)=>{floorClicked(o.item);});
    three.addEventListener(BP3DJS.EVENT_FPS_EXIT, ()=>{$('#showDesign').trigger('click')});
    
    function echoEvents(o)
    {	
//    	console.log(o.type, o.item);
    }	
    
    function addGUIFolder(o)
    {	
//    	console.log(o.type, o.item);
    	if(currentFolder)
		{
    		selectionsFolder.removeFolder(currentFolder.name);
		}
    	if(o.type == BP3DJS.EVENT_CORNER_2D_CLICKED)
		{
    		currentFolder = CornerProperties(o.item, selectionsFolder);//getCornerPropertiesFolder(gui, o.item);
		}
    	else if(o.type == BP3DJS.EVENT_ROOM_2D_CLICKED)
		{
    		currentFolder = RoomProperties(o.item, selectionsFolder);//getRoomPropertiesFolder(gui, );
		}
    	else if(o.type == BP3DJS.EVENT_WALL_2D_CLICKED)
		{
    		currentFolder = Wall2DProperties(o.item, selectionsFolder);
		}
    	if(currentFolder)
		{
    		currentFolder.open();
    		selectionsFolder.open();
		}
    }	
    
    var model_floorplan = blueprint3d.model.floorplan;
    model_floorplan.addEventListener(BP3DJS.EVENT_CORNER_2D_DOUBLE_CLICKED, echoEvents);
    model_floorplan.addEventListener(BP3DJS.EVENT_WALL_2D_DOUBLE_CLICKED, echoEvents);
    model_floorplan.addEventListener(BP3DJS.EVENT_ROOM_2D_DOUBLE_CLICKED, echoEvents);
    
    model_floorplan.addEventListener(BP3DJS.EVENT_NOTHING_CLICKED, addGUIFolder);
    model_floorplan.addEventListener(BP3DJS.EVENT_CORNER_2D_CLICKED, addGUIFolder);
    model_floorplan.addEventListener(BP3DJS.EVENT_WALL_2D_CLICKED, addGUIFolder);
    model_floorplan.addEventListener(BP3DJS.EVENT_ROOM_2D_CLICKED, addGUIFolder);
    
    model_floorplan.addEventListener(BP3DJS.EVENT_CORNER_2D_HOVER, echoEvents);
    model_floorplan.addEventListener(BP3DJS.EVENT_WALL_2D_HOVER, echoEvents);
    model_floorplan.addEventListener(BP3DJS.EVENT_ROOM_2D_HOVER, echoEvents);
    
    model_floorplan.addEventListener(BP3DJS.EVENT_CORNER_ATTRIBUTES_CHANGED, echoEvents);
    model_floorplan.addEventListener(BP3DJS.EVENT_WALL_ATTRIBUTES_CHANGED, echoEvents);
    model_floorplan.addEventListener(BP3DJS.EVENT_ROOM_ATTRIBUTES_CHANGED, echoEvents);
    
    
    function deleteEvent(evt)
    {
    	console.log('DELETED ', evt);
    }
    
    model_floorplan.addEventListener(BP3DJS.EVENT_DELETED, deleteEvent);
    
    BP3DJS.Configuration.setValue(BP3DJS.configSystemUI, false);
    
    
// three.skybox.toggleEnvironment(this.checked);
// currentTarget.setTexture(textureUrl, textureStretch, textureScale);
// three.skybox.setEnvironmentMap(textureUrl);
}

function getCornerPropertiesFolder(gui, corner)
{
	var f = gui.addFolder('Current Corner');
	var xcontrol = f.add(corner, 'x').name("x").step(0.01);
	var ycontrol = f.add(corner, 'y').name("y").step(0.01);
	var elevationctonrol = f.add(corner, 'elevation').name("Elevation").step(0.01);
	// elevationctonrol.add(BP3DJS.config, 'elevation', 4, 10,).step(0.01).onChange(onChangeElevation); 
	// elevation 시작값 2.5에서 4로 변경하려고 시도중
	return f;	
}

function getRoomPropertiesFolder(gui, room)
{
	var f = gui.addFolder('Current Room');
	var namecontrol = f.add(corner, 'name').name("Name");
	return f;	
}

function getCameraRangePropertiesFolder(gui, camerarange)
{
	var f = gui.addFolder('카메라 설정');
	// var ficontrol = f.add(camerarange, 'ratio', -1, 1).name("Range").step(0.01).onChange(function(){camerarange.change()});
	// var ficontrol2 = f.add(camerarange, 'ratio2', -1, 1).name("Range 2").step(0.01).onChange(function(){camerarange.change()});
	var flockcontrol = f.add(camerarange, 'locked').name("화면고정").onChange(function(){camerarange.changeLock()});
	// var resetControl = f.add(camerarange, 'reset').name('Reset');
	
	
	return f;

}

function construct2dInterfaceFolder(f, global, floorplanner)
{
	function onChangeSnapResolution()
	{
		BP3DJS.Configuration.setValue(BP3DJS.snapTolerance, BP3DJS.Dimensioning.cmFromMeasureRaw(view2dindirect.snapValue));
	}
	
	function onChangeGridResolution()
	{
		BP3DJS.Configuration.setValue(BP3DJS.gridSpacing, BP3DJS.Dimensioning.cmFromMeasureRaw(view2dindirect.gridResValue));
		blueprint3d.floorplanner.view.draw();
	}
	
	var units = BP3DJS.Configuration.getStringValue(BP3DJS.configDimUnit);
	var view2dindirect = {
			'snapValue': BP3DJS.Dimensioning.cmToMeasureRaw(BP3DJS.Configuration.getNumericValue(BP3DJS.snapTolerance)), 
			'gridResValue': BP3DJS.Dimensioning.cmToMeasureRaw(BP3DJS.Configuration.getNumericValue(BP3DJS.gridSpacing))
			};	
	
	f.removeFolder('2D 포트폴리오 편집옵션');
	
	var view2df = f.addFolder('2D 포트폴리오 편집옵션');
	view2df.add(BP3DJS.config, 'snapToGrid',).name("점 직각 이동");
	view2df.add(view2dindirect, 'snapValue', 0.1).name(`점 이동 크기(${units})`).onChange(onChangeSnapResolution);
	view2df.add(view2dindirect, 'gridResValue', 0.1).name(`격자 눈금 크기(${units})`).onChange(onChangeGridResolution);
	view2df.add(BP3DJS.config, 'scale', 0.25, 5, ).step(0.25).name('화면크기').onChange(()=>{
//	view2df.add(BP3DJS.config, 'scale', 1.0, 10, ).step(0.25).onChange(()=>{
		blueprint3d.floorplanner.zoom();
//		blueprint3d.floorplanner.view.zoom();
		blueprint3d.floorplanner.view.draw();
		});
	
	/* Wall Measurements 제거 */ 
	// var wallf = view2df.addFolder('Wall Measurements');
	// wallf.add(BP3DJS.wallInformation, 'exterior').name('Exterior');
	// wallf.add(BP3DJS.wallInformation, 'interior').name('Interior');
	// wallf.add(BP3DJS.wallInformation, 'midline').name('Midline');
	// wallf.add(BP3DJS.wallInformation, 'labels').name('Labels');
	// wallf.add(BP3DJS.wallInformation, 'exteriorlabel').name('Label for Exterior');
	// wallf.add(BP3DJS.wallInformation, 'interiorlabel').name('Label for Interior');
	// wallf.add(BP3DJS.wallInformation, 'midlinelabel').name('Label for Midline');
	
	/* carbon sheet 제거 */ 
	// var carbonPropsFolder = getCarbonSheetPropertiesFolder(view2df, floorplanner.carbonSheet, global);
	
	view2df.open();
	return view2df;
}

function getGlobalPropertiesFolder(gui, global, floorplanner)
{
	var f = gui.addFolder('인터페이스 및 구성');
	
	var unitsf = f.addFolder('단위');	
	var ficontrol = unitsf.add(global.units, 'a',).name("피트(Feets)").onChange(function(){global.setUnit("a")});
	var icontrol = unitsf.add(global.units, 'b',).name("인치(Inches)'").onChange(function(){global.setUnit("b")});
	var ccontrol = unitsf.add(global.units, 'c',).name('센치미터(cm)').onChange(function(){global.setUnit("c")});
	var mmcontrol = unitsf.add(global.units, 'd',).name('밀리미터(mm)').onChange(function(){global.setUnit("d")});
	var mcontrol = unitsf.add(global.units, 'e',).name('미터(m)').onChange(function(){global.setUnit("e")});
	global.setGUIControllers([ficontrol, icontrol, ccontrol, mmcontrol, mcontrol]);
	
	// BP3DJS.Dimensioning.cmFromMeasureRaw(scope.x);
	// BP3DJS.Dimensioning.cmToMeasureRaw(scope.x);
	
	f.open();
	return f;
}
/* carbon sheet 제거 */ 
// function getCarbonSheetPropertiesFolder(gui, carbonsheet, globalproperties)
// {
// 	var f = gui.addFolder('Carbon Sheet');
// 	var url = f.add(carbonsheet, 'url').name('Url');
// 	var width = f.add(carbonsheet, 'width').name('Real Width').max(1000.0).step(0.01);
// 	var height = f.add(carbonsheet, 'height').name('Real Height').max(1000.0).step(0.01);
// 	var proportion = f.add(carbonsheet, 'maintainProportion').name('Maintain Proportion');
// 	var x = f.add(carbonsheet, 'x').name('Move in X');
// 	var y = f.add(carbonsheet, 'y').name('Move in Y');

// 	var ax = f.add(carbonsheet, 'anchorX').name('Anchor X');
// 	var ay = f.add(carbonsheet, 'anchorY').name('Anchor Y');
// 	var transparency = f.add(carbonsheet, 'transparency').name('Transparency').min(0).max(1.0).step(0.05);
// 	carbonsheet.addEventListener(BP3DJS.EVENT_UPDATED, function(){
// 		url.updateDisplay();
// 		width.updateDisplay();
// 		height.updateDisplay();
// 		x.updateDisplay();
// 		y.updateDisplay();
// 		ax.updateDisplay();
// 		ay.updateDisplay();
// 		transparency.updateDisplay(width);
// 	});

// 	globalproperties.guiControllers.push(width);
// 	globalproperties.guiControllers.push(height);
// 	return f;
// }

function getItemPropertiesFolder(gui, anItem)
{
	var f = gui.addFolder('인테리어 제품(3D)')
	var namecontrol = f.add(anItem, 'name').name('제품이름');
	var linkurl = f.add(anItem, 'linkurl').name('네이버쇼핑검색'); // 검색기능 추가
	var wcontrol = f.add(anItem, 'width', 0.05, 5.1).step(0.1).name('폭'); // 최대치 1000.1 -> 5.1 로 변경
	var hcontrol = f.add(anItem, 'height', 0.05, 5.1).step(0.1).name('높이'); // 최대치 1000.1 -> 5.1 로 변경
	var dcontrol = f.add(anItem, 'depth', 0.05, 5.1).step(0.1).name('깊이'); // 최대치 1000.1 -> 5.1 로 변경
	var pcontrol = f.add(anItem, 'proportionalsize').name('비율 고정');
	var lockcontrol = f.add(anItem, 'fixed').name('위치 고정');
	var deleteItemControl = f.add(anItem, 'deleteItem').name('항목 삭제');
	

	function changed()
	{
		anItem.dimensionsChanged();
	}

	function lockChanged()
	{
		anItem.lockFlagChanged();
	}

	function proportionFlagChanged()
	{
		anItem.proportionFlagChange();
	}
	// 이부분도 필요없네
	// function deleteItem()
	// {
	// 	anItem.deleteItem();
	// }

	// function linkurl()
	// {
	// 	anItem.linkurl();
	// }

	wcontrol.onChange(changed);
	hcontrol.onChange(changed);
	dcontrol.onChange(changed);
	pcontrol.onChange(proportionFlagChanged);
	lockcontrol.onChange(lockChanged);
	
	

	// anItem.setGUIControllers([inamecontrol, wcontrol, hcontrol, dcontrol, pcontrol, lockcontrol, deleteItemControl]);
    // 주석처리해도 문제없네. 왜지? 해도되고 안해도 되고
	return f;
}

function getWallAndFloorPropertiesFolderwall(gui, aWall)
{
	var f = gui.addFolder('벽면(3D)');
	var wcontrol = f.add(aWall, 'wallmaterialname', 
	{
		모던회벽_라이트그레이: 0 , 모던회벽_그레이: 1, 모던회벽_화이트: 2, 자이언트스톤_그레이: 3, 자이언트스톤_베이지: 4, 
		회벽_골드: 5, 회벽_그레이: 6, 회벽_딥그레이: 7, 회벽_라이트그레이: 8, 회벽_라이트베이지: 9,
		회벽_미들그레이: 10, 회벽_베이지: 11, 회벽_소프트그레이: 12, 회벽_화이트: 13, 
	}
	).name('벽지종류선택');
	// var fcontrol = f.add(aWall, 'floormaterialname', {'Fine Wood': 5, 'Hard Wood': 6}).name('Floor');
	// var multicontrol = f.add(aWall, 'forAllWalls').name('공간 전체적용');
	function wchanged()
	{
		aWall.wchanged();
	}

	// function fchanged()
	// {
	// 	aWall.fchanged();
	// }

	wcontrol.onChange(wchanged);
	// multicontrol.onChange(wchanged);
	// fcontrol.onChange(fchanged);
	return f;
}
function getWallAndFloorPropertiesFolderfloor(gui, aWall)
{
	var f = gui.addFolder('바닥면(3D)');datGUI
	// var wcontrol = f.add(aWall, 'wallmaterialname', {Grey: 0, Yellow: 1, Checker: 2, Marble: 3, Bricks: 4}).name('Wall');
	var fcontrol = f.add(aWall, 'floormaterialname', 
	{
		'타일_크림임페리얼': 14, '타일_실버임페리얼': 15, '원목마루_밀키화이트': 16, '원목마루_애쉬': 17,
		'원목마루_월넛': 18, '콘크리트라이트': 19, '콘크리트그레이':20,
	}
	).name('바닥종류선택');
	// var multicontrol = f.add(aWall, 'forAllWalls').name('공간 전체적용');
	// function wchanged()
	// {
	// 	aWall.wchanged();
	// }

	function fchanged()
	{
		aWall.fchanged();
	}

	// wcontrol.onChange(wchanged);
	fcontrol.onChange(fchanged);
	return f;
}

function datGUI(three, floorplanner)
{
	gui = new dat.GUI();	
	aCameraRange = new CameraProperties();	
	aCameraRange.three = three;
	aGlobal = new GlobalProperties();
	globalPropFolder = getGlobalPropertiesFolder(gui, aGlobal, floorplanner);	

	f3d = globalPropFolder.addFolder('3D 포트폴리오 편집옵션')
	cameraPropFolder = getCameraRangePropertiesFolder(f3d, aCameraRange);
	
	var view2df = construct2dInterfaceFolder(globalPropFolder, aGlobal, floorplanner);
	view2df.open();
	
	selectionsFolder = gui.addFolder('선택한 항목');
}


$(document).ready(function()
{
	dat.GUI.prototype.removeFolder = function(name)
	{
		  var folder = this.__folders[name];
		  if (!folder) {
		    return;
		  }
		  folder.close();
		  this.__ul.removeChild(folder.domElement.parentNode);
		  delete this.__folders[name];
		  this.onResize();
	}
	// main setup
	var opts =
	{
			floorplannerElement: 'floorplanner-canvas',
			threeElement: '#viewer',
			threeCanvasElement: 'three-canvas',
			textureDir: "models/textures/",
			widget: false
	}
	blueprint3d = new BP3DJS.BlueprintJS(opts);
	var viewerFloorplanner = new ViewerFloorplanner(blueprint3d);
	
	
	blueprint3d.model.addEventListener(BP3DJS.EVENT_LOADED, function(){console.log('LOAD SERIALIZED JSON ::: ');});
	
	
	mainControls(blueprint3d);
	blueprint3d.model.loadSerialized(myhome);


	addBlueprintListeners(blueprint3d);
	datGUI(blueprint3d.three, blueprint3d.floorplanner);
	blueprint3d.three.stopSpin();
//	gui.closed = true;


	$('#showAddItems').hide();
	$('#viewcontrols').hide();

	$('.card').flip({trigger:'manual', axis:'x'});
	$('#showFloorPlan').click(function()
	{
		$('.card').flip(false);
		$(this).addClass('active');
		$('#showDesign').removeClass('active');
		$('#personFPS').removeClass('active');
		$('#showAddItems').hide();
		$('#viewcontrols').hide();

//		gui.closed = true;
		blueprint3d.three.pauseTheRendering(true);
		blueprint3d.three.getController().setSelectedObject(null);
	});

	$('#showDesign').click(function()
	{
		blueprint3d.model.floorplan.update();
		$('.card').flip(true);
//		gui.closed = false;
		$(this).addClass('active');
		$('#showFloorPlan').removeClass('active');
		$('#personFPS').removeClass('active');

		$('#showAddItems').show();
		$('#viewcontrols').show();

		blueprint3d.three.pauseTheRendering(false);
		blueprint3d.three.switchFPSMode(false);
	});
	$('#personFPS').click(function()
	{
		blueprint3d.model.floorplan.update();
		$('.card').flip(true);
//		gui.closed = true;
		$(this).addClass('active');
		$('#showFloorPlan').removeClass('active');
		$('#showDesign').removeClass('active');

		$('#showAddItems').show();
		$('#viewcontrols').show();

		blueprint3d.three.pauseTheRendering(false);
		blueprint3d.three.switchFPSMode(true);
	});

	$('#showSwitchCameraMode').click(function()
	{
		$(this).toggleClass('active');
		blueprint3d.three.switchOrthographicMode($(this).hasClass('active'));
	});

	$('#showSwitchWireframeMode').click(function()
	{
		$(this).toggleClass('wireframe-active');
		blueprint3d.three.switchWireframe($(this).hasClass('wireframe-active'));
	});

	$('#topview, #isometryview, #frontview, #leftview, #rightview').click(function(){
		blueprint3d.three.switchView($(this).attr('id'));
	});



	$("#add-items").find(".add-item").mousedown(function(e) {
	      var modelUrl = $(this).attr("model-url");
	      var itemType = parseInt($(this).attr("model-type"));
	      var itemFormat = $(this).attr('model-format');


	      var metadata = {
	        itemName: $(this).attr("model-name"),
	        resizable: true,
	        modelUrl: modelUrl,
	        itemType: itemType,
	        format: itemFormat,
			itemLink : $(this).attr("model-link"), // 검색기능 추가

	      }
	      console.log('ITEM TYPE ::: ', itemType);
	      if([2,3,7,9].indexOf(metadata.itemType) != -1 && aWall.currentWall)
    	  {
	    	  var placeAt = aWall.currentWall.center.clone();
	    	  blueprint3d.model.scene.addItem(itemType, modelUrl, metadata, null, null, null, false, {position: placeAt, edge: aWall.currentWall});
    	  }
	      else if(aWall.currentFloor)
    	  {
	    	  var placeAt = aWall.currentFloor.center.clone();
	    	  blueprint3d.model.scene.addItem(itemType, modelUrl, metadata, null, null, null, false, {position: placeAt});
    	  }
	      else
    	  {
	    	  blueprint3d.model.scene.addItem(itemType, modelUrl, metadata);
    	  }
	    });
});
