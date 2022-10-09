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

var myhome = '{"floorplan":{"version":"0.0.2a","corners":{"2ba6d682-827e-88d5-25b9-ecc069a90842":{"x":-0.019,"y":0.759,"elevation":2.5},"36db37eb-082f-9f7b-5f1f-d9629fc4a705":{"x":-0.019,"y":5.239,"elevation":2.5},"8e727fc6-ff79-5ac8-969d-ebe82a30eaeb":{"x":1.451,"y":0.759,"elevation":2.5},"5b347aef-f672-9d20-ba1f-635a9d74091a":{"x":-1.299,"y":5.239,"elevation":2.5},"bd18acac-fc6b-82c3-086d-d9e76c9aa422":{"x":5.886,"y":0.759,"elevation":2.5},"07ffa8ad-8720-a9ea-62a7-85ebe3ebdd4c":{"x":-1.299,"y":10.274,"elevation":2.5},"be87d3fe-7e94-9f34-f1f3-d0bb3e63f81b":{"x":8.406,"y":0.759,"elevation":2.5},"68c8b544-73c6-0dcd-14ef-a8819d0690e1":{"x":-1.299,"y":11.574,"elevation":2.5},"c08dde7c-1dcb-a6dd-24e0-dc031ed10494":{"x":-1.299,"y":12.234,"elevation":2.5},"849da7c2-ae90-d717-256b-9926128e4195":{"x":0.201,"y":12.234,"elevation":2.5},"08eb0d58-a75e-dcca-3efd-a02006b8ae98":{"x":4.336,"y":12.234,"elevation":2.5},"07392d1b-e338-322e-134d-692e4f78c7ef":{"x":4.336,"y":12.594,"elevation":2.5},"1dc4fb41-43dc-beb1-95c0-4519c9bb2e85":{"x":6.776,"y":12.594,"elevation":2.5},"54bf3433-7861-a371-2887-40801cb6f1c9":{"x":9.156,"y":12.594,"elevation":2.5},"7545fef5-a795-78bf-da87-47507ac9114c":{"x":12.656,"y":12.594,"elevation":2.5},"b3a40d46-7376-b294-876a-d3b46731ba0a":{"x":12.656,"y":11.724,"elevation":2.5},"927c025e-754d-9ada-b14f-353e6b687497":{"x":16.236,"y":11.724,"elevation":2.5},"bcd98e50-52cd-7b7e-a4cc-74d3c266bf54":{"x":16.236,"y":10.224,"elevation":2.5},"4933a8e4-d961-9342-3ed0-7c18c922eef6":{"x":16.236,"y":6.329,"elevation":2.5},"1e670e4f-8bef-9b03-4764-b8c7cfb68e9c":{"x":13.436,"y":6.329,"elevation":2.5},"0033c646-5a9d-68f3-5a1f-77254741106b":{"x":13.436,"y":5.829,"elevation":2.5},"50359f0d-71ce-abea-bf0c-42d4c0633975":{"x":8.406,"y":2.059,"elevation":2.5},"33718dd7-b3de-4803-6685-c1d02b159dd5":{"x":5.886,"y":2.059,"elevation":2.5},"e845a270-9ef4-500c-cc09-9caa0549a15c":{"x":8.406,"y":3.529,"elevation":2.5},"6952fd0d-118a-e376-95bb-f08acfe86aeb":{"x":5.886,"y":3.529,"elevation":2.5},"0277ccb4-4963-370e-a085-7f1c05f71b86":{"x":13.436,"y":3.529,"elevation":2.5},"fe54f83b-da85-db52-2390-16db2bee6be2":{"x":11.446,"y":3.529,"elevation":2.5},"d9fce720-85b9-be62-c4b1-615ade90acde":{"x":11.446,"y":4.079,"elevation":2.5},"521b262e-d953-c312-2d1e-a0ff4292781b":{"x":0.201,"y":5.239,"elevation":2.5},"718edd64-2c0b-7cb5-30da-1fbe3a4dd431":{"x":5.886,"y":5.829,"elevation":2.5},"253720ce-dd2f-580c-c014-d6dfa97aae31":{"x":4.281,"y":5.239,"elevation":2.5},"60088aa0-6d26-584f-28a6-4937488afef5":{"x":4.281,"y":5.829,"elevation":2.5},"8f669735-4145-85b1-2a97-6cef889bc8f3":{"x":8.406,"y":4.079,"elevation":2.5},"12489c95-0876-34ef-5a1f-d507c6fcc0a7":{"x":8.406,"y":5.829,"elevation":2.5},"06e99210-3ff2-da15-5ec2-0b8706e67f23":{"x":11.446,"y":5.829,"elevation":2.5},"a2f2099c-0996-ce66-821e-6f7c108c3072":{"x":10.324,"y":4.079,"elevation":2.5},"9c2f18ba-8fc2-a4fb-e763-0474794a04da":{"x":13.436,"y":7.529,"elevation":2.5},"ab3fe31a-81b2-c4db-33d1-43ae6db6bf3b":{"x":12.656,"y":11.269,"elevation":2.5},"e3b2569b-2719-e2a3-425a-61bb8a7f6c77":{"x":12.656,"y":7.529,"elevation":2.5},"4be038a4-25f9-8f78-4d2b-feae4933474c":{"x":12.656,"y":10.224,"elevation":2.5},"98c1dcc4-1dc5-d650-e3c2-c1adad58bd3e":{"x":9.156,"y":7.529,"elevation":2.5},"5df3dfa7-7c64-c511-230e-adfa40b53730":{"x":9.156,"y":11.269,"elevation":2.5},"0db83cfe-51d2-6c03-6b17-63058feeebe4":{"x":8.156,"y":7.529,"elevation":2.5},"03485097-33ba-ec44-80bf-51421157896d":{"x":0.201,"y":11.434,"elevation":2.5},"d0bb70be-4ccc-a2ff-4610-6b45071c5604":{"x":1.451,"y":5.239,"elevation":2.5},"07359d80-a115-54a3-7641-eafb2c054bb8":{"x":9.156,"y":10.862,"elevation":2.5},"9b71ddb4-48a7-32ab-a918-52cbae9b82e0":{"x":6.776,"y":10.862,"elevation":2.5},"9ff8d50a-bc43-4c1c-ead0-ac6eab096119":{"x":6.776,"y":10.062,"elevation":2.5},"bc2abf35-3456-c86b-220e-0bd631feb5ab":{"x":4.336,"y":10.062,"elevation":2.5},"ceb3126b-cfe4-5b98-2a5e-9f6066333f69":{"x":0.201,"y":10.062,"elevation":2.5},"9fb44861-aa32-7297-b838-82163dd1fd36":{"x":-0.199,"y":10.062,"elevation":2.5}},"walls":[{"corner1":"2ba6d682-827e-88d5-25b9-ecc069a90842","corner2":"36db37eb-082f-9f7b-5f1f-d9629fc4a705","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":-201.61473613257806,"y":217.12597613257805},"b":{"x":-201.6147361325781,"y":382.5801838674221}},{"corner1":"2ba6d682-827e-88d5-25b9-ecc069a90842","corner2":"8e727fc6-ff79-5ac8-969d-ebe82a30eaeb","frontTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":62.76400407169788,"y":140.510924071698},"b":{"x":116.3283159283021,"y":140.510924071698}},{"corner1":"36db37eb-082f-9f7b-5f1f-d9629fc4a705","corner2":"5b347aef-f672-9d20-ba1f-635a9d74091a","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":-83.79377582415073,"y":441.95314417584945},"b":{"x":-151.64190417584933,"y":441.95314417584945}},{"corner1":"8e727fc6-ff79-5ac8-969d-ebe82a30eaeb","corner2":"bd18acac-fc6b-82c3-086d-d9e76c9aa422","frontTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":323.028368282159,"y":253.77528828215912},"b":{"x":470.42395171784085,"y":253.77528828215915}},{"corner1":"5b347aef-f672-9d20-ba1f-635a9d74091a","corner2":"07ffa8ad-8720-a9ea-62a7-85ebe3ebdd4c","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":-277.71875524773486,"y":671.677995247735},"b":{"x":-277.7187552477349,"y":794.1401647522652}},{"corner1":"bd18acac-fc6b-82c3-086d-d9e76c9aa422","corner2":"be87d3fe-7e94-9f34-f1f3-d0bb3e63f81b","frontTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":744.0720711252367,"y":231.31899112523678},"b":{"x":872.8642488747632,"y":231.3189911252368}},{"corner1":"07ffa8ad-8720-a9ea-62a7-85ebe3ebdd4c","corner2":"68c8b544-73c6-0dcd-14ef-a8819d0690e1","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":-235.48609563458714,"y":1132.945335634587},"b":{"x":-235.48609563458717,"y":1220.420824365413}},{"corner1":"68c8b544-73c6-0dcd-14ef-a8819d0690e1","corner2":"c08dde7c-1dcb-a6dd-24e0-dc031ed10494","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":-183.77679093997736,"y":1211.2360309399774},"b":{"x":-183.77679093997736,"y":1255.8741290600228}},{"corner1":"c08dde7c-1dcb-a6dd-24e0-dc031ed10494","corner2":"849da7c2-ae90-d717-256b-9926128e4195","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":-74.58111914846359,"y":1278.6658008515365},"b":{"x":-28.758560851536572,"y":1278.6658008515367}},{"corner1":"849da7c2-ae90-d717-256b-9926128e4195","corner2":"08eb0d58-a75e-dcca-3efd-a02006b8ae98","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":161.75944726153864,"y":1365.0063672615388},"b":{"x":279.1088727384613,"y":1365.0063672615388}},{"corner1":"08eb0d58-a75e-dcca-3efd-a02006b8ae98","corner2":"07392d1b-e338-322e-134d-692e4f78c7ef","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":405.2129943082353,"y":1251.7462456917647},"b":{"x":405.2129943082353,"y":1275.2679143082355}},{"corner1":"07392d1b-e338-322e-134d-692e4f78c7ef","corner2":"1dc4fb41-43dc-beb1-95c0-4519c9bb2e85","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":549.0413420287039,"y":1374.788262028704},"b":{"x":644.670977971296,"y":1374.788262028704}},{"corner1":"1dc4fb41-43dc-beb1-95c0-4519c9bb2e85","corner2":"54bf3433-7861-a371-2887-40801cb6f1c9","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":777.1795227131272,"y":1358.9264427131272},"b":{"x":859.6687972868726,"y":1358.9264427131272}},{"corner1":"54bf3433-7861-a371-2887-40801cb6f1c9","corner2":"7545fef5-a795-78bf-da87-47507ac9114c","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":1026.583740880104,"y":1370.330660880104},"b":{"x":1118.5205791198962,"y":1370.330660880104}},{"corner1":"7545fef5-a795-78bf-da87-47507ac9114c","corner2":"b3a40d46-7376-b294-876a-d3b46731ba0a","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":1317.4724424000333,"y":1207.4867975999668},"b":{"x":1317.4724424000333,"y":1164.5193624000333}},{"corner1":"b3a40d46-7376-b294-876a-d3b46731ba0a","corner2":"927c025e-754d-9ada-b14f-353e6b687497","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":1360.603127625288,"y":1267.350047625288},"b":{"x":1439.3011923747122,"y":1267.350047625288}},{"corner1":"927c025e-754d-9ada-b14f-353e6b687497","corner2":"bcd98e50-52cd-7b7e-a4cc-74d3c266bf54","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":1728.0500742219401,"y":1067.9091657780598},"b":{"x":1728.0500742219403,"y":981.3849942219402}},{"corner1":"bcd98e50-52cd-7b7e-a4cc-74d3c266bf54","corner2":"4933a8e4-d961-9342-3ed0-7c18c922eef6","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":1739.674909704647,"y":906.284330295353},"b":{"x":1739.674909704647,"y":810.1298297046471}},{"corner1":"4933a8e4-d961-9342-3ed0-7c18c922eef6","corner2":"1e670e4f-8bef-9b03-4764-b8c7cfb68e9c","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":1538.8678975561666,"y":548.1148175561666},"b":{"x":1468.6684224438334,"y":548.1148175561666}},{"corner1":"1e670e4f-8bef-9b03-4764-b8c7cfb68e9c","corner2":"0033c646-5a9d-68f3-5a1f-77254741106b","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":1483.6104742478117,"y":492.8487657521884},"b":{"x":1483.6104742478117,"y":376.8653942478117}},{"corner1":"be87d3fe-7e94-9f34-f1f3-d0bb3e63f81b","corner2":"50359f0d-71ce-abea-bf0c-42d4c0633975","frontTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":711.1207662291193,"y":205.33847377088065},"b":{"x":711.1207662291193,"y":312.6076862291195}},{"corner1":"bd18acac-fc6b-82c3-086d-d9e76c9aa422","corner2":"33718dd7-b3de-4803-6685-c1d02b159dd5","frontTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":546.7680659707543,"y":117.6911740292457},"b":{"x":546.7680659707543,"y":152.3509859707544}},{"corner1":"33718dd7-b3de-4803-6685-c1d02b159dd5","corner2":"50359f0d-71ce-abea-bf0c-42d4c0633975","frontTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":675.8221246051111,"y":293.06904460511123},"b":{"x":748.0741953948889,"y":293.06904460511123}},{"corner1":"50359f0d-71ce-abea-bf0c-42d4c0633975","corner2":"e845a270-9ef4-500c-cc09-9caa0549a15c","frontTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":785.1973014071825,"y":259.7049182416051},"b":{"x":786.7543217583949,"y":302.76022140718266}},{"corner1":"e845a270-9ef4-500c-cc09-9caa0549a15c","corner2":"6952fd0d-118a-e376-95bb-f08acfe86aeb","frontTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":746.0504270061724,"y":258.2973470061726},"b":{"x":667.7178929938274,"y":258.2973470061726}},{"corner1":"0277ccb4-4963-370e-a085-7f1c05f71b86","corner2":"fe54f83b-da85-db52-2390-16db2bee6be2","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":1243.6339890622835,"y":252.8809090622836},"b":{"x":1160.8143309377165,"y":252.8809090622836}},{"corner1":"fe54f83b-da85-db52-2390-16db2bee6be2","corner2":"d9fce720-85b9-be62-c4b1-615ade90acde","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":1123.8313627687394,"y":373.6278772312608},"b":{"x":1123.8313627687394,"y":390.8382827687393}},{"corner1":"36db37eb-082f-9f7b-5f1f-d9629fc4a705","corner2":"521b262e-d953-c312-2d1e-a0ff4292781b","frontTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":151.1297243030183,"y":676.8766443030185},"b":{"x":277.8985956969815,"y":676.8766443030185}},{"corner1":"6952fd0d-118a-e376-95bb-f08acfe86aeb","corner2":"718edd64-2c0b-7cb5-30da-1fbe3a4dd431","frontTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":507.48404163515454,"y":433.97519836484554},"b":{"x":507.4840416351545,"y":501.17896163515456}},{"corner1":"253720ce-dd2f-580c-c014-d6dfa97aae31","corner2":"60088aa0-6d26-584f-28a6-4937488afef5","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":383.0153747772962,"y":568.9438652227038},"b":{"x":383.0153747772962,"y":606.2982947772963}},{"corner1":"718edd64-2c0b-7cb5-30da-1fbe3a4dd431","corner2":"60088aa0-6d26-584f-28a6-4937488afef5","frontTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":529.2643447092626,"y":523.5112647092627},"b":{"x":480.1039752907374,"y":523.5112647092627}},{"corner1":"e845a270-9ef4-500c-cc09-9caa0549a15c","corner2":"8f669735-4145-85b1-2a97-6cef889bc8f3","frontTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":729.3103810683621,"y":464.14885893163796},"b":{"x":729.3103810683621,"y":556.3493010683623}},{"corner1":"718edd64-2c0b-7cb5-30da-1fbe3a4dd431","corner2":"12489c95-0876-34ef-5a1f-d507c6fcc0a7","frontTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":677.2589655844822,"y":671.5058855844823},"b":{"x":750.7013544155177,"y":671.5058855844824}},{"corner1":"d9fce720-85b9-be62-c4b1-615ade90acde","corner2":"06e99210-3ff2-da15-5ec2-0b8706e67f23","frontTexture":{"url":"rooms/textures/wall_floor/13.회벽_소프트그레이.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":1005.3400652317472,"y":547.1191747682531},"b":{"x":1005.3400652317471,"y":662.4909852317472}},{"corner1":"d9fce720-85b9-be62-c4b1-615ade90acde","corner2":"a2f2099c-0996-ce66-821e-6f7c108c3072","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/13.회벽_소프트그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":1037.4017009043075,"y":300.64862090430756},"b":{"x":948.5906190956924,"y":300.64862090430756}},{"corner1":"8f669735-4145-85b1-2a97-6cef889bc8f3","corner2":"12489c95-0876-34ef-5a1f-d507c6fcc0a7","frontTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"backTexture":{"url":"rooms/textures/wall_floor/13.회벽_소프트그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":779.2385450015142,"y":469.4491517091603},"b":{"x":779.0100882908398,"y":520.7054650015144}},{"corner1":"a2f2099c-0996-ce66-821e-6f7c108c3072","corner2":"8f669735-4145-85b1-2a97-6cef889bc8f3","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/13.회벽_소프트그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":964.4793820941567,"y":339.84926255563767},"b":{"x":908.3059774443623,"y":339.93830209415694}},{"corner1":"06e99210-3ff2-da15-5ec2-0b8706e67f23","corner2":"0033c646-5a9d-68f3-5a1f-77254741106b","frontTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":1214.8515618566341,"y":653.0984818566341},"b":{"x":1273.044758143366,"y":653.0984818566341}},{"corner1":"0033c646-5a9d-68f3-5a1f-77254741106b","corner2":"0277ccb4-4963-370e-a085-7f1c05f71b86","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/01.모던회벽_라이트그레이.png","stretch":true,"scale":1},"wallType":"STRAIGHT","a":{"x":1424.7191627078805,"y":501.6475230349746},"b":{"x":1424.8117169650254,"y":434.28208270788053}},{"corner1":"1e670e4f-8bef-9b03-4764-b8c7cfb68e9c","corner2":"9c2f18ba-8fc2-a4fb-e763-0474794a04da","frontTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":1283.1711576255482,"y":693.288082374452},"b":{"x":1283.1711576255482,"y":743.3540776255481}},{"corner1":"b3a40d46-7376-b294-876a-d3b46731ba0a","corner2":"ab3fe31a-81b2-c4db-33d1-43ae6db6bf3b","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":1441.173702700808,"y":996.7855372991921},"b":{"x":1441.173702700808,"y":851.3406227008079}},{"corner1":"9c2f18ba-8fc2-a4fb-e763-0474794a04da","corner2":"e3b2569b-2719-e2a3-425a-61bb8a7f6c77","frontTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":1316.912879010208,"y":726.159799010208},"b":{"x":1294.7994409897922,"y":726.159799010208}},{"corner1":"bcd98e50-52cd-7b7e-a4cc-74d3c266bf54","corner2":"4be038a4-25f9-8f78-4d2b-feae4933474c","frontTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":1497.1995091544056,"y":895.9464291544058},"b":{"x":1392.4808108455945,"y":895.9464291544058}},{"corner1":"4be038a4-25f9-8f78-4d2b-feae4933474c","corner2":"e3b2569b-2719-e2a3-425a-61bb8a7f6c77","frontTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":1361.1913357780898,"y":926.9049782483152},"b":{"x":1361.054261751685,"y":847.9702557780897}},{"corner1":"e3b2569b-2719-e2a3-425a-61bb8a7f6c77","corner2":"98c1dcc4-1dc5-d650-e3c2-c1adad58bd3e","frontTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":1092.6322849725843,"y":579.8792049725844},"b":{"x":949.3360350274156,"y":579.8792049725844}},{"corner1":"54bf3433-7861-a371-2887-40801cb6f1c9","corner2":"5df3dfa7-7c64-c511-230e-adfa40b53730","frontTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":1092.4776076053158,"y":1082.4816323946843},"b":{"x":1092.4776076053158,"y":935.956527605316}},{"corner1":"98c1dcc4-1dc5-d650-e3c2-c1adad58bd3e","corner2":"0db83cfe-51d2-6c03-6b17-63058feeebe4","frontTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":868.5793164104074,"y":707.651546950053},"b":{"x":827.795693049947,"y":705.8262364104075}},{"corner1":"849da7c2-ae90-d717-256b-9926128e4195","corner2":"03485097-33ba-ec44-80bf-51421157896d","frontTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":72.89450964270043,"y":1170.5647303572996},"b":{"x":72.89450964270043,"y":1126.8334296427006}},{"corner1":"8e727fc6-ff79-5ac8-969d-ebe82a30eaeb","corner2":"d0bb70be-4ccc-a2ff-4610-6b45071c5604","frontTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":-12.39763286861637,"y":233.3568728686164},"b":{"x":-12.397632868616398,"y":363.83728713138373}},{"corner1":"d0bb70be-4ccc-a2ff-4610-6b45071c5604","corner2":"253720ce-dd2f-580c-c014-d6dfa97aae31","frontTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":244.2736434207261,"y":622.2848156550668},"b":{"x":327.16242434493313,"y":623.0205634207263}},{"corner1":"521b262e-d953-c312-2d1e-a0ff4292781b","corner2":"d0bb70be-4ccc-a2ff-4610-6b45071c5604","frontTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":64.84904868635988,"y":569.0505389619585},"b":{"x":101.46070103804144,"y":568.59596868636}},{"corner1":"ab3fe31a-81b2-c4db-33d1-43ae6db6bf3b","corner2":"4be038a4-25f9-8f78-4d2b-feae4933474c","frontTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":1302.8635116115736,"y":1089.756802414831},"b":{"x":1302.726437585169,"y":1059.1424316115738}},{"corner1":"ab3fe31a-81b2-c4db-33d1-43ae6db6bf3b","corner2":"5df3dfa7-7c64-c511-230e-adfa40b53730","frontTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":1142.9217192505716,"y":1004.1926392505716},"b":{"x":1041.2866007494283,"y":1004.1926392505716}},{"corner1":"5df3dfa7-7c64-c511-230e-adfa40b53730","corner2":"07359d80-a115-54a3-7641-eafb2c054bb8","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":1049.780367405041,"y":993.580380678524},"b":{"x":1048.902859321476,"y":884.0312874050412}},{"corner1":"07359d80-a115-54a3-7641-eafb2c054bb8","corner2":"98c1dcc4-1dc5-d650-e3c2-c1adad58bd3e","frontTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":1031.471219080387,"y":969.4640519412912},"b":{"x":1032.3791880587087,"y":871.8181390803873}},{"corner1":"07359d80-a115-54a3-7641-eafb2c054bb8","corner2":"9b71ddb4-48a7-32ab-a918-52cbae9b82e0","frontTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":836.9207316031233,"y":1007.5516516031234},"b":{"x":771.7355883968767,"y":1007.5516516031234}},{"corner1":"9b71ddb4-48a7-32ab-a918-52cbae9b82e0","corner2":"9ff8d50a-bc43-4c1c-ead0-ac6eab096119","frontTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":709.2166615461634,"y":1054.6265784538366},"b":{"x":709.2166615461634,"y":1028.4395815461635}},{"corner1":"9ff8d50a-bc43-4c1c-ead0-ac6eab096119","corner2":"bc2abf35-3456-c86b-220e-0bd631feb5ab","frontTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":423.71664178784533,"y":752.3475617878455},"b":{"x":213.38767821215458,"y":752.3475617878455}},{"corner1":"ceb3126b-cfe4-5b98-2a5e-9f6066333f69","corner2":"521b262e-d953-c312-2d1e-a0ff4292781b","frontTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":190.6546587679457,"y":835.6885812320543},"b":{"x":190.65465876794568,"y":694.4015787679459}},{"corner1":"ceb3126b-cfe4-5b98-2a5e-9f6066333f69","corner2":"9fb44861-aa32-7297-b838-82163dd1fd36","frontTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":-1.3220038970771952,"y":984.808916102923},"b":{"x":-19.073676102922906,"y":984.808916102923}},{"corner1":"08eb0d58-a75e-dcca-3efd-a02006b8ae98","corner2":"bc2abf35-3456-c86b-220e-0bd631feb5ab","frontTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":509.38396531263754,"y":1147.5752746873625},"b":{"x":509.38396531263754,"y":1084.7988853126376}},{"corner1":"bc2abf35-3456-c86b-220e-0bd631feb5ab","corner2":"ceb3126b-cfe4-5b98-2a5e-9f6066333f69","frontTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/08.회벽_딥그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":288.3961256290928,"y":861.8424603502697},"b":{"x":167.28477964973024,"y":861.027045629093}},{"corner1":"12489c95-0876-34ef-5a1f-d507c6fcc0a7","corner2":"06e99210-3ff2-da15-5ec2-0b8706e67f23","frontTexture":{"url":"rooms/textures/wall_floor/14.회벽_화이트.png","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wall_floor/13.회벽_소프트그레이.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":948.0802307403552,"y":690.3802307403552},"b":{"x":1037.1197692596447,"y":690.3802307403552}}],"rooms":{"f90da5e3-9e0e-eba7-173d-eb0b071e838e,71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,da026c08-d76a-a944-8e7b-096b752da9ed":{"name":"A New Room"},"2ba6d682-827e-88d5-25b9-ecc069a90842,8e727fc6-ff79-5ac8-969d-ebe82a30eaeb,bd18acac-fc6b-82c3-086d-d9e76c9aa422,be87d3fe-7e94-9f34-f1f3-d0bb3e63f81b,e845a270-9ef4-500c-cc09-9caa0549a15c,0277ccb4-4963-370e-a085-7f1c05f71b86,1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,4933a8e4-d961-9342-3ed0-7c18c922eef6,bcd98e50-52cd-7b7e-a4cc-74d3c266bf54,927c025e-754d-9ada-b14f-353e6b687497,b3a40d46-7376-b294-876a-d3b46731ba0a,7545fef5-a795-78bf-da87-47507ac9114c,54bf3433-7861-a371-2887-40801cb6f1c9,1dc4fb41-43dc-beb1-95c0-4519c9bb2e85,07392d1b-e338-322e-134d-692e4f78c7ef,08eb0d58-a75e-dcca-3efd-a02006b8ae98,849da7c2-ae90-d717-256b-9926128e4195,c08dde7c-1dcb-a6dd-24e0-dc031ed10494,68c8b544-73c6-0dcd-14ef-a8819d0690e1,07ffa8ad-8720-a9ea-62a7-85ebe3ebdd4c,5b347aef-f672-9d20-ba1f-635a9d74091a,36db37eb-082f-9f7b-5f1f-d9629fc4a705":{"name":"A New Room"},"2ba6d682-827e-88d5-25b9-ecc069a90842,8e727fc6-ff79-5ac8-969d-ebe82a30eaeb,bd18acac-fc6b-82c3-086d-d9e76c9aa422,33718dd7-b3de-4803-6685-c1d02b159dd5,50359f0d-71ce-abea-bf0c-42d4c0633975,e845a270-9ef4-500c-cc09-9caa0549a15c,1cf778f5-bd60-4674-58be-f93d0774343f,d9fce720-85b9-be62-c4b1-615ade90acde,fe54f83b-da85-db52-2390-16db2bee6be2,0277ccb4-4963-370e-a085-7f1c05f71b86,1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,4933a8e4-d961-9342-3ed0-7c18c922eef6,bcd98e50-52cd-7b7e-a4cc-74d3c266bf54,927c025e-754d-9ada-b14f-353e6b687497,b3a40d46-7376-b294-876a-d3b46731ba0a,7545fef5-a795-78bf-da87-47507ac9114c,54bf3433-7861-a371-2887-40801cb6f1c9,1dc4fb41-43dc-beb1-95c0-4519c9bb2e85,07392d1b-e338-322e-134d-692e4f78c7ef,08eb0d58-a75e-dcca-3efd-a02006b8ae98,849da7c2-ae90-d717-256b-9926128e4195,c08dde7c-1dcb-a6dd-24e0-dc031ed10494,68c8b544-73c6-0dcd-14ef-a8819d0690e1,07ffa8ad-8720-a9ea-62a7-85ebe3ebdd4c,5b347aef-f672-9d20-ba1f-635a9d74091a,36db37eb-082f-9f7b-5f1f-d9629fc4a705":{"name":"A New Room"},"2ba6d682-827e-88d5-25b9-ecc069a90842,8e727fc6-ff79-5ac8-969d-ebe82a30eaeb,bd18acac-fc6b-82c3-086d-d9e76c9aa422,33718dd7-b3de-4803-6685-c1d02b159dd5,50359f0d-71ce-abea-bf0c-42d4c0633975,e845a270-9ef4-500c-cc09-9caa0549a15c,6952fd0d-118a-e376-95bb-f08acfe86aeb,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,60088aa0-6d26-584f-28a6-4937488afef5,253720ce-dd2f-580c-c014-d6dfa97aae31,36db37eb-082f-9f7b-5f1f-d9629fc4a705":{"name":"A New Room"},"36db37eb-082f-9f7b-5f1f-d9629fc4a705,253720ce-dd2f-580c-c014-d6dfa97aae31,60088aa0-6d26-584f-28a6-4937488afef5,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,6952fd0d-118a-e376-95bb-f08acfe86aeb,e845a270-9ef4-500c-cc09-9caa0549a15c,1cf778f5-bd60-4674-58be-f93d0774343f,d9fce720-85b9-be62-c4b1-615ade90acde,fe54f83b-da85-db52-2390-16db2bee6be2,0277ccb4-4963-370e-a085-7f1c05f71b86,1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,4933a8e4-d961-9342-3ed0-7c18c922eef6,bcd98e50-52cd-7b7e-a4cc-74d3c266bf54,927c025e-754d-9ada-b14f-353e6b687497,b3a40d46-7376-b294-876a-d3b46731ba0a,7545fef5-a795-78bf-da87-47507ac9114c,54bf3433-7861-a371-2887-40801cb6f1c9,1dc4fb41-43dc-beb1-95c0-4519c9bb2e85,07392d1b-e338-322e-134d-692e4f78c7ef,08eb0d58-a75e-dcca-3efd-a02006b8ae98,849da7c2-ae90-d717-256b-9926128e4195,c08dde7c-1dcb-a6dd-24e0-dc031ed10494,68c8b544-73c6-0dcd-14ef-a8819d0690e1,07ffa8ad-8720-a9ea-62a7-85ebe3ebdd4c,5b347aef-f672-9d20-ba1f-635a9d74091a":{"name":"A New Room"},"36db37eb-082f-9f7b-5f1f-d9629fc4a705,253720ce-dd2f-580c-c014-d6dfa97aae31,60088aa0-6d26-584f-28a6-4937488afef5,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,c77e1187-6d95-a747-4922-b9dcc107a10a,1cf778f5-bd60-4674-58be-f93d0774343f,d9fce720-85b9-be62-c4b1-615ade90acde,fe54f83b-da85-db52-2390-16db2bee6be2,0277ccb4-4963-370e-a085-7f1c05f71b86,1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,4933a8e4-d961-9342-3ed0-7c18c922eef6,bcd98e50-52cd-7b7e-a4cc-74d3c266bf54,927c025e-754d-9ada-b14f-353e6b687497,b3a40d46-7376-b294-876a-d3b46731ba0a,7545fef5-a795-78bf-da87-47507ac9114c,54bf3433-7861-a371-2887-40801cb6f1c9,1dc4fb41-43dc-beb1-95c0-4519c9bb2e85,07392d1b-e338-322e-134d-692e4f78c7ef,08eb0d58-a75e-dcca-3efd-a02006b8ae98,849da7c2-ae90-d717-256b-9926128e4195,c08dde7c-1dcb-a6dd-24e0-dc031ed10494,68c8b544-73c6-0dcd-14ef-a8819d0690e1,07ffa8ad-8720-a9ea-62a7-85ebe3ebdd4c,5b347aef-f672-9d20-ba1f-635a9d74091a":{"name":"A New Room"},"e845a270-9ef4-500c-cc09-9caa0549a15c,1cf778f5-bd60-4674-58be-f93d0774343f,c77e1187-6d95-a747-4922-b9dcc107a10a,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,6952fd0d-118a-e376-95bb-f08acfe86aeb":{"name":"A New Room"},"36db37eb-082f-9f7b-5f1f-d9629fc4a705,253720ce-dd2f-580c-c014-d6dfa97aae31,60088aa0-6d26-584f-28a6-4937488afef5,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,c77e1187-6d95-a747-4922-b9dcc107a10a,1cf778f5-bd60-4674-58be-f93d0774343f,d9fce720-85b9-be62-c4b1-615ade90acde,d8bdb999-6188-6fc6-8730-14a2f5b8299e,1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,4933a8e4-d961-9342-3ed0-7c18c922eef6,bcd98e50-52cd-7b7e-a4cc-74d3c266bf54,927c025e-754d-9ada-b14f-353e6b687497,b3a40d46-7376-b294-876a-d3b46731ba0a,7545fef5-a795-78bf-da87-47507ac9114c,54bf3433-7861-a371-2887-40801cb6f1c9,1dc4fb41-43dc-beb1-95c0-4519c9bb2e85,07392d1b-e338-322e-134d-692e4f78c7ef,08eb0d58-a75e-dcca-3efd-a02006b8ae98,849da7c2-ae90-d717-256b-9926128e4195,c08dde7c-1dcb-a6dd-24e0-dc031ed10494,68c8b544-73c6-0dcd-14ef-a8819d0690e1,07ffa8ad-8720-a9ea-62a7-85ebe3ebdd4c,5b347aef-f672-9d20-ba1f-635a9d74091a":{"name":"A New Room"},"1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,d8bdb999-6188-6fc6-8730-14a2f5b8299e,d9fce720-85b9-be62-c4b1-615ade90acde,fe54f83b-da85-db52-2390-16db2bee6be2,0277ccb4-4963-370e-a085-7f1c05f71b86":{"name":"A New Room"},"36db37eb-082f-9f7b-5f1f-d9629fc4a705,253720ce-dd2f-580c-c014-d6dfa97aae31,60088aa0-6d26-584f-28a6-4937488afef5,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,c77e1187-6d95-a747-4922-b9dcc107a10a,b8b4c059-e4ae-17e5-05f6-1bca2b18dfbf,49128c78-812c-8761-f2d3-0debe41d1ae8,6627db50-9f0a-e1f0-6feb-6e549041cd9a,d8bdb999-6188-6fc6-8730-14a2f5b8299e,1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,4933a8e4-d961-9342-3ed0-7c18c922eef6,bcd98e50-52cd-7b7e-a4cc-74d3c266bf54,927c025e-754d-9ada-b14f-353e6b687497,b3a40d46-7376-b294-876a-d3b46731ba0a,7545fef5-a795-78bf-da87-47507ac9114c,54bf3433-7861-a371-2887-40801cb6f1c9,1dc4fb41-43dc-beb1-95c0-4519c9bb2e85,07392d1b-e338-322e-134d-692e4f78c7ef,08eb0d58-a75e-dcca-3efd-a02006b8ae98,849da7c2-ae90-d717-256b-9926128e4195,c08dde7c-1dcb-a6dd-24e0-dc031ed10494,68c8b544-73c6-0dcd-14ef-a8819d0690e1,07ffa8ad-8720-a9ea-62a7-85ebe3ebdd4c,5b347aef-f672-9d20-ba1f-635a9d74091a":{"name":"A New Room"},"d9fce720-85b9-be62-c4b1-615ade90acde,6627db50-9f0a-e1f0-6feb-6e549041cd9a,49128c78-812c-8761-f2d3-0debe41d1ae8,b8b4c059-e4ae-17e5-05f6-1bca2b18dfbf,c77e1187-6d95-a747-4922-b9dcc107a10a,1cf778f5-bd60-4674-58be-f93d0774343f":{"name":"A New Room"},"36db37eb-082f-9f7b-5f1f-d9629fc4a705,253720ce-dd2f-580c-c014-d6dfa97aae31,60088aa0-6d26-584f-28a6-4937488afef5,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,c77e1187-6d95-a747-4922-b9dcc107a10a,1cf778f5-bd60-4674-58be-f93d0774343f,d9fce720-85b9-be62-c4b1-615ade90acde,6627db50-9f0a-e1f0-6feb-6e549041cd9a,d8bdb999-6188-6fc6-8730-14a2f5b8299e,1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,4933a8e4-d961-9342-3ed0-7c18c922eef6,bcd98e50-52cd-7b7e-a4cc-74d3c266bf54,927c025e-754d-9ada-b14f-353e6b687497,b3a40d46-7376-b294-876a-d3b46731ba0a,7545fef5-a795-78bf-da87-47507ac9114c,54bf3433-7861-a371-2887-40801cb6f1c9,1dc4fb41-43dc-beb1-95c0-4519c9bb2e85,07392d1b-e338-322e-134d-692e4f78c7ef,08eb0d58-a75e-dcca-3efd-a02006b8ae98,849da7c2-ae90-d717-256b-9926128e4195,c08dde7c-1dcb-a6dd-24e0-dc031ed10494,68c8b544-73c6-0dcd-14ef-a8819d0690e1,07ffa8ad-8720-a9ea-62a7-85ebe3ebdd4c,5b347aef-f672-9d20-ba1f-635a9d74091a":{"name":"A New Room"},"1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,d8bdb999-6188-6fc6-8730-14a2f5b8299e,6627db50-9f0a-e1f0-6feb-6e549041cd9a,d9fce720-85b9-be62-c4b1-615ade90acde,fe54f83b-da85-db52-2390-16db2bee6be2,0277ccb4-4963-370e-a085-7f1c05f71b86":{"name":"A New Room"},"36db37eb-082f-9f7b-5f1f-d9629fc4a705,253720ce-dd2f-580c-c014-d6dfa97aae31,60088aa0-6d26-584f-28a6-4937488afef5,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,6952fd0d-118a-e376-95bb-f08acfe86aeb,e845a270-9ef4-500c-cc09-9caa0549a15c,1cf778f5-bd60-4674-58be-f93d0774343f,d9fce720-85b9-be62-c4b1-615ade90acde,6627db50-9f0a-e1f0-6feb-6e549041cd9a,d8bdb999-6188-6fc6-8730-14a2f5b8299e,1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,4933a8e4-d961-9342-3ed0-7c18c922eef6,bcd98e50-52cd-7b7e-a4cc-74d3c266bf54,927c025e-754d-9ada-b14f-353e6b687497,b3a40d46-7376-b294-876a-d3b46731ba0a,7545fef5-a795-78bf-da87-47507ac9114c,54bf3433-7861-a371-2887-40801cb6f1c9,1dc4fb41-43dc-beb1-95c0-4519c9bb2e85,07392d1b-e338-322e-134d-692e4f78c7ef,08eb0d58-a75e-dcca-3efd-a02006b8ae98,849da7c2-ae90-d717-256b-9926128e4195,c08dde7c-1dcb-a6dd-24e0-dc031ed10494,68c8b544-73c6-0dcd-14ef-a8819d0690e1,07ffa8ad-8720-a9ea-62a7-85ebe3ebdd4c,5b347aef-f672-9d20-ba1f-635a9d74091a":{"name":"A New Room"},"36db37eb-082f-9f7b-5f1f-d9629fc4a705,253720ce-dd2f-580c-c014-d6dfa97aae31,60088aa0-6d26-584f-28a6-4937488afef5,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,6952fd0d-118a-e376-95bb-f08acfe86aeb,e845a270-9ef4-500c-cc09-9caa0549a15c,fe54f83b-da85-db52-2390-16db2bee6be2,d9fce720-85b9-be62-c4b1-615ade90acde,6627db50-9f0a-e1f0-6feb-6e549041cd9a,d8bdb999-6188-6fc6-8730-14a2f5b8299e,1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,4933a8e4-d961-9342-3ed0-7c18c922eef6,bcd98e50-52cd-7b7e-a4cc-74d3c266bf54,927c025e-754d-9ada-b14f-353e6b687497,b3a40d46-7376-b294-876a-d3b46731ba0a,7545fef5-a795-78bf-da87-47507ac9114c,54bf3433-7861-a371-2887-40801cb6f1c9,1dc4fb41-43dc-beb1-95c0-4519c9bb2e85,07392d1b-e338-322e-134d-692e4f78c7ef,08eb0d58-a75e-dcca-3efd-a02006b8ae98,849da7c2-ae90-d717-256b-9926128e4195,c08dde7c-1dcb-a6dd-24e0-dc031ed10494,68c8b544-73c6-0dcd-14ef-a8819d0690e1,07ffa8ad-8720-a9ea-62a7-85ebe3ebdd4c,5b347aef-f672-9d20-ba1f-635a9d74091a":{"name":"A New Room"},"36db37eb-082f-9f7b-5f1f-d9629fc4a705,253720ce-dd2f-580c-c014-d6dfa97aae31,60088aa0-6d26-584f-28a6-4937488afef5,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,12489c95-0876-34ef-5a1f-d507c6fcc0a7,e845a270-9ef4-500c-cc09-9caa0549a15c,fe54f83b-da85-db52-2390-16db2bee6be2,d9fce720-85b9-be62-c4b1-615ade90acde,6627db50-9f0a-e1f0-6feb-6e549041cd9a,d8bdb999-6188-6fc6-8730-14a2f5b8299e,1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,4933a8e4-d961-9342-3ed0-7c18c922eef6,bcd98e50-52cd-7b7e-a4cc-74d3c266bf54,927c025e-754d-9ada-b14f-353e6b687497,b3a40d46-7376-b294-876a-d3b46731ba0a,7545fef5-a795-78bf-da87-47507ac9114c,54bf3433-7861-a371-2887-40801cb6f1c9,1dc4fb41-43dc-beb1-95c0-4519c9bb2e85,07392d1b-e338-322e-134d-692e4f78c7ef,08eb0d58-a75e-dcca-3efd-a02006b8ae98,849da7c2-ae90-d717-256b-9926128e4195,c08dde7c-1dcb-a6dd-24e0-dc031ed10494,68c8b544-73c6-0dcd-14ef-a8819d0690e1,07ffa8ad-8720-a9ea-62a7-85ebe3ebdd4c,5b347aef-f672-9d20-ba1f-635a9d74091a":{"name":"A New Room"},"e845a270-9ef4-500c-cc09-9caa0549a15c,12489c95-0876-34ef-5a1f-d507c6fcc0a7,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,6952fd0d-118a-e376-95bb-f08acfe86aeb":{"name":"A New Room"},"36db37eb-082f-9f7b-5f1f-d9629fc4a705,253720ce-dd2f-580c-c014-d6dfa97aae31,60088aa0-6d26-584f-28a6-4937488afef5,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,12489c95-0876-34ef-5a1f-d507c6fcc0a7,e845a270-9ef4-500c-cc09-9caa0549a15c,fe54f83b-da85-db52-2390-16db2bee6be2,0277ccb4-4963-370e-a085-7f1c05f71b86,1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,4933a8e4-d961-9342-3ed0-7c18c922eef6,bcd98e50-52cd-7b7e-a4cc-74d3c266bf54,927c025e-754d-9ada-b14f-353e6b687497,b3a40d46-7376-b294-876a-d3b46731ba0a,7545fef5-a795-78bf-da87-47507ac9114c,54bf3433-7861-a371-2887-40801cb6f1c9,1dc4fb41-43dc-beb1-95c0-4519c9bb2e85,07392d1b-e338-322e-134d-692e4f78c7ef,08eb0d58-a75e-dcca-3efd-a02006b8ae98,849da7c2-ae90-d717-256b-9926128e4195,c08dde7c-1dcb-a6dd-24e0-dc031ed10494,68c8b544-73c6-0dcd-14ef-a8819d0690e1,07ffa8ad-8720-a9ea-62a7-85ebe3ebdd4c,5b347aef-f672-9d20-ba1f-635a9d74091a":{"name":"A New Room"},"36db37eb-082f-9f7b-5f1f-d9629fc4a705,253720ce-dd2f-580c-c014-d6dfa97aae31,60088aa0-6d26-584f-28a6-4937488afef5,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,12489c95-0876-34ef-5a1f-d507c6fcc0a7,8f669735-4145-85b1-2a97-6cef889bc8f3,d9fce720-85b9-be62-c4b1-615ade90acde,fe54f83b-da85-db52-2390-16db2bee6be2,0277ccb4-4963-370e-a085-7f1c05f71b86,1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,4933a8e4-d961-9342-3ed0-7c18c922eef6,bcd98e50-52cd-7b7e-a4cc-74d3c266bf54,927c025e-754d-9ada-b14f-353e6b687497,b3a40d46-7376-b294-876a-d3b46731ba0a,7545fef5-a795-78bf-da87-47507ac9114c,54bf3433-7861-a371-2887-40801cb6f1c9,1dc4fb41-43dc-beb1-95c0-4519c9bb2e85,07392d1b-e338-322e-134d-692e4f78c7ef,08eb0d58-a75e-dcca-3efd-a02006b8ae98,849da7c2-ae90-d717-256b-9926128e4195,c08dde7c-1dcb-a6dd-24e0-dc031ed10494,68c8b544-73c6-0dcd-14ef-a8819d0690e1,07ffa8ad-8720-a9ea-62a7-85ebe3ebdd4c,5b347aef-f672-9d20-ba1f-635a9d74091a":{"name":"A New Room"},"e845a270-9ef4-500c-cc09-9caa0549a15c,fe54f83b-da85-db52-2390-16db2bee6be2,d9fce720-85b9-be62-c4b1-615ade90acde,8f669735-4145-85b1-2a97-6cef889bc8f3":{"name":"A New Room"},"e845a270-9ef4-500c-cc09-9caa0549a15c,8f669735-4145-85b1-2a97-6cef889bc8f3,12489c95-0876-34ef-5a1f-d507c6fcc0a7,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,6952fd0d-118a-e376-95bb-f08acfe86aeb":{"name":"A New Room"},"36db37eb-082f-9f7b-5f1f-d9629fc4a705,253720ce-dd2f-580c-c014-d6dfa97aae31,60088aa0-6d26-584f-28a6-4937488afef5,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,12489c95-0876-34ef-5a1f-d507c6fcc0a7,ec399efe-7b32-47ed-04f8-fe4ad3e88323,4f7669f7-7260-915d-d3c5-a6f671a30155,06e99210-3ff2-da15-5ec2-0b8706e67f23,d9fce720-85b9-be62-c4b1-615ade90acde,fe54f83b-da85-db52-2390-16db2bee6be2,0277ccb4-4963-370e-a085-7f1c05f71b86,1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,4933a8e4-d961-9342-3ed0-7c18c922eef6,bcd98e50-52cd-7b7e-a4cc-74d3c266bf54,927c025e-754d-9ada-b14f-353e6b687497,b3a40d46-7376-b294-876a-d3b46731ba0a,7545fef5-a795-78bf-da87-47507ac9114c,54bf3433-7861-a371-2887-40801cb6f1c9,1dc4fb41-43dc-beb1-95c0-4519c9bb2e85,07392d1b-e338-322e-134d-692e4f78c7ef,08eb0d58-a75e-dcca-3efd-a02006b8ae98,849da7c2-ae90-d717-256b-9926128e4195,c08dde7c-1dcb-a6dd-24e0-dc031ed10494,68c8b544-73c6-0dcd-14ef-a8819d0690e1,07ffa8ad-8720-a9ea-62a7-85ebe3ebdd4c,5b347aef-f672-9d20-ba1f-635a9d74091a":{"name":"A New Room"},"12489c95-0876-34ef-5a1f-d507c6fcc0a7,8f669735-4145-85b1-2a97-6cef889bc8f3,a2f2099c-0996-ce66-821e-6f7c108c3072,4f7669f7-7260-915d-d3c5-a6f671a30155,ec399efe-7b32-47ed-04f8-fe4ad3e88323":{"name":"A New Room"},"d9fce720-85b9-be62-c4b1-615ade90acde,06e99210-3ff2-da15-5ec2-0b8706e67f23,4f7669f7-7260-915d-d3c5-a6f671a30155,a2f2099c-0996-ce66-821e-6f7c108c3072":{"name":"A New Room"},"36db37eb-082f-9f7b-5f1f-d9629fc4a705,253720ce-dd2f-580c-c014-d6dfa97aae31,60088aa0-6d26-584f-28a6-4937488afef5,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,12489c95-0876-34ef-5a1f-d507c6fcc0a7,8f669735-4145-85b1-2a97-6cef889bc8f3,a2f2099c-0996-ce66-821e-6f7c108c3072,4f7669f7-7260-915d-d3c5-a6f671a30155,06e99210-3ff2-da15-5ec2-0b8706e67f23,d9fce720-85b9-be62-c4b1-615ade90acde,fe54f83b-da85-db52-2390-16db2bee6be2,0277ccb4-4963-370e-a085-7f1c05f71b86,1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,4933a8e4-d961-9342-3ed0-7c18c922eef6,bcd98e50-52cd-7b7e-a4cc-74d3c266bf54,927c025e-754d-9ada-b14f-353e6b687497,b3a40d46-7376-b294-876a-d3b46731ba0a,7545fef5-a795-78bf-da87-47507ac9114c,54bf3433-7861-a371-2887-40801cb6f1c9,1dc4fb41-43dc-beb1-95c0-4519c9bb2e85,07392d1b-e338-322e-134d-692e4f78c7ef,08eb0d58-a75e-dcca-3efd-a02006b8ae98,849da7c2-ae90-d717-256b-9926128e4195,c08dde7c-1dcb-a6dd-24e0-dc031ed10494,68c8b544-73c6-0dcd-14ef-a8819d0690e1,07ffa8ad-8720-a9ea-62a7-85ebe3ebdd4c,5b347aef-f672-9d20-ba1f-635a9d74091a":{"name":"A New Room"},"36db37eb-082f-9f7b-5f1f-d9629fc4a705,253720ce-dd2f-580c-c014-d6dfa97aae31,60088aa0-6d26-584f-28a6-4937488afef5,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,12489c95-0876-34ef-5a1f-d507c6fcc0a7,8f669735-4145-85b1-2a97-6cef889bc8f3,a2f2099c-0996-ce66-821e-6f7c108c3072,d9fce720-85b9-be62-c4b1-615ade90acde,fe54f83b-da85-db52-2390-16db2bee6be2,0277ccb4-4963-370e-a085-7f1c05f71b86,1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,4933a8e4-d961-9342-3ed0-7c18c922eef6,bcd98e50-52cd-7b7e-a4cc-74d3c266bf54,927c025e-754d-9ada-b14f-353e6b687497,b3a40d46-7376-b294-876a-d3b46731ba0a,7545fef5-a795-78bf-da87-47507ac9114c,54bf3433-7861-a371-2887-40801cb6f1c9,1dc4fb41-43dc-beb1-95c0-4519c9bb2e85,07392d1b-e338-322e-134d-692e4f78c7ef,08eb0d58-a75e-dcca-3efd-a02006b8ae98,849da7c2-ae90-d717-256b-9926128e4195,c08dde7c-1dcb-a6dd-24e0-dc031ed10494,68c8b544-73c6-0dcd-14ef-a8819d0690e1,07ffa8ad-8720-a9ea-62a7-85ebe3ebdd4c,5b347aef-f672-9d20-ba1f-635a9d74091a":{"name":"A New Room"},"36db37eb-082f-9f7b-5f1f-d9629fc4a705,253720ce-dd2f-580c-c014-d6dfa97aae31,60088aa0-6d26-584f-28a6-4937488afef5,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,12489c95-0876-34ef-5a1f-d507c6fcc0a7,8f669735-4145-85b1-2a97-6cef889bc8f3,a2f2099c-0996-ce66-821e-6f7c108c3072,d9fce720-85b9-be62-c4b1-615ade90acde,06e99210-3ff2-da15-5ec2-0b8706e67f23,0033c646-5a9d-68f3-5a1f-77254741106b,1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,4933a8e4-d961-9342-3ed0-7c18c922eef6,bcd98e50-52cd-7b7e-a4cc-74d3c266bf54,927c025e-754d-9ada-b14f-353e6b687497,b3a40d46-7376-b294-876a-d3b46731ba0a,7545fef5-a795-78bf-da87-47507ac9114c,54bf3433-7861-a371-2887-40801cb6f1c9,1dc4fb41-43dc-beb1-95c0-4519c9bb2e85,07392d1b-e338-322e-134d-692e4f78c7ef,08eb0d58-a75e-dcca-3efd-a02006b8ae98,849da7c2-ae90-d717-256b-9926128e4195,c08dde7c-1dcb-a6dd-24e0-dc031ed10494,68c8b544-73c6-0dcd-14ef-a8819d0690e1,07ffa8ad-8720-a9ea-62a7-85ebe3ebdd4c,5b347aef-f672-9d20-ba1f-635a9d74091a":{"name":"A New Room"},"36db37eb-082f-9f7b-5f1f-d9629fc4a705,253720ce-dd2f-580c-c014-d6dfa97aae31,60088aa0-6d26-584f-28a6-4937488afef5,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,12489c95-0876-34ef-5a1f-d507c6fcc0a7,8f669735-4145-85b1-2a97-6cef889bc8f3,a2f2099c-0996-ce66-821e-6f7c108c3072,d9fce720-85b9-be62-c4b1-615ade90acde,06e99210-3ff2-da15-5ec2-0b8706e67f23,0033c646-5a9d-68f3-5a1f-77254741106b,1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,9c2f18ba-8fc2-a4fb-e763-0474794a04da,e3b2569b-2719-e2a3-425a-61bb8a7f6c77,b3a40d46-7376-b294-876a-d3b46731ba0a,7545fef5-a795-78bf-da87-47507ac9114c,54bf3433-7861-a371-2887-40801cb6f1c9,1dc4fb41-43dc-beb1-95c0-4519c9bb2e85,07392d1b-e338-322e-134d-692e4f78c7ef,08eb0d58-a75e-dcca-3efd-a02006b8ae98,849da7c2-ae90-d717-256b-9926128e4195,c08dde7c-1dcb-a6dd-24e0-dc031ed10494,68c8b544-73c6-0dcd-14ef-a8819d0690e1,07ffa8ad-8720-a9ea-62a7-85ebe3ebdd4c,5b347aef-f672-9d20-ba1f-635a9d74091a":{"name":"A New Room"},"b3a40d46-7376-b294-876a-d3b46731ba0a,e3b2569b-2719-e2a3-425a-61bb8a7f6c77,9c2f18ba-8fc2-a4fb-e763-0474794a04da,1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,4933a8e4-d961-9342-3ed0-7c18c922eef6,bcd98e50-52cd-7b7e-a4cc-74d3c266bf54,927c025e-754d-9ada-b14f-353e6b687497":{"name":"A New Room"},"36db37eb-082f-9f7b-5f1f-d9629fc4a705,253720ce-dd2f-580c-c014-d6dfa97aae31,60088aa0-6d26-584f-28a6-4937488afef5,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,12489c95-0876-34ef-5a1f-d507c6fcc0a7,8f669735-4145-85b1-2a97-6cef889bc8f3,a2f2099c-0996-ce66-821e-6f7c108c3072,d9fce720-85b9-be62-c4b1-615ade90acde,06e99210-3ff2-da15-5ec2-0b8706e67f23,0033c646-5a9d-68f3-5a1f-77254741106b,1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,9c2f18ba-8fc2-a4fb-e763-0474794a04da,e3b2569b-2719-e2a3-425a-61bb8a7f6c77,4be038a4-25f9-8f78-4d2b-feae4933474c,b3a40d46-7376-b294-876a-d3b46731ba0a,7545fef5-a795-78bf-da87-47507ac9114c,54bf3433-7861-a371-2887-40801cb6f1c9,1dc4fb41-43dc-beb1-95c0-4519c9bb2e85,07392d1b-e338-322e-134d-692e4f78c7ef,08eb0d58-a75e-dcca-3efd-a02006b8ae98,849da7c2-ae90-d717-256b-9926128e4195,c08dde7c-1dcb-a6dd-24e0-dc031ed10494,68c8b544-73c6-0dcd-14ef-a8819d0690e1,07ffa8ad-8720-a9ea-62a7-85ebe3ebdd4c,5b347aef-f672-9d20-ba1f-635a9d74091a":{"name":"A New Room"},"36db37eb-082f-9f7b-5f1f-d9629fc4a705,253720ce-dd2f-580c-c014-d6dfa97aae31,60088aa0-6d26-584f-28a6-4937488afef5,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,12489c95-0876-34ef-5a1f-d507c6fcc0a7,8f669735-4145-85b1-2a97-6cef889bc8f3,a2f2099c-0996-ce66-821e-6f7c108c3072,d9fce720-85b9-be62-c4b1-615ade90acde,06e99210-3ff2-da15-5ec2-0b8706e67f23,0033c646-5a9d-68f3-5a1f-77254741106b,1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,9c2f18ba-8fc2-a4fb-e763-0474794a04da,e3b2569b-2719-e2a3-425a-61bb8a7f6c77,98c1dcc4-1dc5-d650-e3c2-c1adad58bd3e,54bf3433-7861-a371-2887-40801cb6f1c9,1dc4fb41-43dc-beb1-95c0-4519c9bb2e85,07392d1b-e338-322e-134d-692e4f78c7ef,08eb0d58-a75e-dcca-3efd-a02006b8ae98,849da7c2-ae90-d717-256b-9926128e4195,c08dde7c-1dcb-a6dd-24e0-dc031ed10494,68c8b544-73c6-0dcd-14ef-a8819d0690e1,07ffa8ad-8720-a9ea-62a7-85ebe3ebdd4c,5b347aef-f672-9d20-ba1f-635a9d74091a":{"name":"A New Room"},"54bf3433-7861-a371-2887-40801cb6f1c9,98c1dcc4-1dc5-d650-e3c2-c1adad58bd3e,e3b2569b-2719-e2a3-425a-61bb8a7f6c77,4be038a4-25f9-8f78-4d2b-feae4933474c,b3a40d46-7376-b294-876a-d3b46731ba0a,7545fef5-a795-78bf-da87-47507ac9114c":{"name":"A New Room"},"849da7c2-ae90-d717-256b-9926128e4195,03485097-33ba-ec44-80bf-51421157896d,521b262e-d953-c312-2d1e-a0ff4292781b,d0bb70be-4ccc-a2ff-4610-6b45071c5604,253720ce-dd2f-580c-c014-d6dfa97aae31,60088aa0-6d26-584f-28a6-4937488afef5,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,12489c95-0876-34ef-5a1f-d507c6fcc0a7,8f669735-4145-85b1-2a97-6cef889bc8f3,a2f2099c-0996-ce66-821e-6f7c108c3072,d9fce720-85b9-be62-c4b1-615ade90acde,06e99210-3ff2-da15-5ec2-0b8706e67f23,0033c646-5a9d-68f3-5a1f-77254741106b,1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,9c2f18ba-8fc2-a4fb-e763-0474794a04da,e3b2569b-2719-e2a3-425a-61bb8a7f6c77,98c1dcc4-1dc5-d650-e3c2-c1adad58bd3e,07359d80-a115-54a3-7641-eafb2c054bb8,5df3dfa7-7c64-c511-230e-adfa40b53730,54bf3433-7861-a371-2887-40801cb6f1c9,1dc4fb41-43dc-beb1-95c0-4519c9bb2e85,07392d1b-e338-322e-134d-692e4f78c7ef,08eb0d58-a75e-dcca-3efd-a02006b8ae98":{"name":"A New Room"},"e3b2569b-2719-e2a3-425a-61bb8a7f6c77,4be038a4-25f9-8f78-4d2b-feae4933474c,ab3fe31a-81b2-c4db-33d1-43ae6db6bf3b,5df3dfa7-7c64-c511-230e-adfa40b53730,07359d80-a115-54a3-7641-eafb2c054bb8,98c1dcc4-1dc5-d650-e3c2-c1adad58bd3e":{"name":"A New Room"},"0277ccb4-4963-370e-a085-7f1c05f71b86,0033c646-5a9d-68f3-5a1f-77254741106b,06e99210-3ff2-da15-5ec2-0b8706e67f23,d9fce720-85b9-be62-c4b1-615ade90acde,fe54f83b-da85-db52-2390-16db2bee6be2":{"name":"A New Room"},"36db37eb-082f-9f7b-5f1f-d9629fc4a705,521b262e-d953-c312-2d1e-a0ff4292781b,ceb3126b-cfe4-5b98-2a5e-9f6066333f69,9ff8d50a-bc43-4c1c-ead0-ac6eab096119,9b71ddb4-48a7-32ab-a918-52cbae9b82e0,07359d80-a115-54a3-7641-eafb2c054bb8,5df3dfa7-7c64-c511-230e-adfa40b53730,54bf3433-7861-a371-2887-40801cb6f1c9,1dc4fb41-43dc-beb1-95c0-4519c9bb2e85,07392d1b-e338-322e-134d-692e4f78c7ef,08eb0d58-a75e-dcca-3efd-a02006b8ae98,849da7c2-ae90-d717-256b-9926128e4195,c08dde7c-1dcb-a6dd-24e0-dc031ed10494,68c8b544-73c6-0dcd-14ef-a8819d0690e1,07ffa8ad-8720-a9ea-62a7-85ebe3ebdd4c,5b347aef-f672-9d20-ba1f-635a9d74091a":{"name":"A New Room"},"1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,9c2f18ba-8fc2-a4fb-e763-0474794a04da,e3b2569b-2719-e2a3-425a-61bb8a7f6c77,98c1dcc4-1dc5-d650-e3c2-c1adad58bd3e,07359d80-a115-54a3-7641-eafb2c054bb8,9b71ddb4-48a7-32ab-a918-52cbae9b82e0,9ff8d50a-bc43-4c1c-ead0-ac6eab096119,ceb3126b-cfe4-5b98-2a5e-9f6066333f69,521b262e-d953-c312-2d1e-a0ff4292781b,d0bb70be-4ccc-a2ff-4610-6b45071c5604,253720ce-dd2f-580c-c014-d6dfa97aae31,60088aa0-6d26-584f-28a6-4937488afef5,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,12489c95-0876-34ef-5a1f-d507c6fcc0a7,8f669735-4145-85b1-2a97-6cef889bc8f3,a2f2099c-0996-ce66-821e-6f7c108c3072,d9fce720-85b9-be62-c4b1-615ade90acde,06e99210-3ff2-da15-5ec2-0b8706e67f23,0033c646-5a9d-68f3-5a1f-77254741106b":{"name":"A New Room"},"2ba6d682-827e-88d5-25b9-ecc069a90842,8e727fc6-ff79-5ac8-969d-ebe82a30eaeb,d0bb70be-4ccc-a2ff-4610-6b45071c5604,521b262e-d953-c312-2d1e-a0ff4292781b,36db37eb-082f-9f7b-5f1f-d9629fc4a705":{"name":"A New Room"},"36db37eb-082f-9f7b-5f1f-d9629fc4a705,521b262e-d953-c312-2d1e-a0ff4292781b,d0bb70be-4ccc-a2ff-4610-6b45071c5604,253720ce-dd2f-580c-c014-d6dfa97aae31,60088aa0-6d26-584f-28a6-4937488afef5,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,12489c95-0876-34ef-5a1f-d507c6fcc0a7,8f669735-4145-85b1-2a97-6cef889bc8f3,a2f2099c-0996-ce66-821e-6f7c108c3072,d9fce720-85b9-be62-c4b1-615ade90acde,06e99210-3ff2-da15-5ec2-0b8706e67f23,0033c646-5a9d-68f3-5a1f-77254741106b,1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,9c2f18ba-8fc2-a4fb-e763-0474794a04da,e3b2569b-2719-e2a3-425a-61bb8a7f6c77,98c1dcc4-1dc5-d650-e3c2-c1adad58bd3e,07359d80-a115-54a3-7641-eafb2c054bb8,5df3dfa7-7c64-c511-230e-adfa40b53730,54bf3433-7861-a371-2887-40801cb6f1c9,1dc4fb41-43dc-beb1-95c0-4519c9bb2e85,07392d1b-e338-322e-134d-692e4f78c7ef,08eb0d58-a75e-dcca-3efd-a02006b8ae98,849da7c2-ae90-d717-256b-9926128e4195,c08dde7c-1dcb-a6dd-24e0-dc031ed10494,68c8b544-73c6-0dcd-14ef-a8819d0690e1,07ffa8ad-8720-a9ea-62a7-85ebe3ebdd4c,5b347aef-f672-9d20-ba1f-635a9d74091a":{"name":"A New Room"},"36db37eb-082f-9f7b-5f1f-d9629fc4a705,521b262e-d953-c312-2d1e-a0ff4292781b,ceb3126b-cfe4-5b98-2a5e-9f6066333f69,03485097-33ba-ec44-80bf-51421157896d,849da7c2-ae90-d717-256b-9926128e4195,c08dde7c-1dcb-a6dd-24e0-dc031ed10494,68c8b544-73c6-0dcd-14ef-a8819d0690e1,07ffa8ad-8720-a9ea-62a7-85ebe3ebdd4c,5b347aef-f672-9d20-ba1f-635a9d74091a":{"name":"A New Room"},"849da7c2-ae90-d717-256b-9926128e4195,03485097-33ba-ec44-80bf-51421157896d,ceb3126b-cfe4-5b98-2a5e-9f6066333f69,9ff8d50a-bc43-4c1c-ead0-ac6eab096119,9b71ddb4-48a7-32ab-a918-52cbae9b82e0,07359d80-a115-54a3-7641-eafb2c054bb8,5df3dfa7-7c64-c511-230e-adfa40b53730,54bf3433-7861-a371-2887-40801cb6f1c9,1dc4fb41-43dc-beb1-95c0-4519c9bb2e85,07392d1b-e338-322e-134d-692e4f78c7ef,08eb0d58-a75e-dcca-3efd-a02006b8ae98":{"name":"A New Room"},"1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,9c2f18ba-8fc2-a4fb-e763-0474794a04da,e3b2569b-2719-e2a3-425a-61bb8a7f6c77,98c1dcc4-1dc5-d650-e3c2-c1adad58bd3e,07359d80-a115-54a3-7641-eafb2c054bb8,9b71ddb4-48a7-32ab-a918-52cbae9b82e0,9ff8d50a-bc43-4c1c-ead0-ac6eab096119,bc2abf35-3456-c86b-220e-0bd631feb5ab,ceb3126b-cfe4-5b98-2a5e-9f6066333f69,521b262e-d953-c312-2d1e-a0ff4292781b,d0bb70be-4ccc-a2ff-4610-6b45071c5604,253720ce-dd2f-580c-c014-d6dfa97aae31,60088aa0-6d26-584f-28a6-4937488afef5,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,12489c95-0876-34ef-5a1f-d507c6fcc0a7,8f669735-4145-85b1-2a97-6cef889bc8f3,a2f2099c-0996-ce66-821e-6f7c108c3072,d9fce720-85b9-be62-c4b1-615ade90acde,06e99210-3ff2-da15-5ec2-0b8706e67f23,0033c646-5a9d-68f3-5a1f-77254741106b":{"name":"A New Room"},"0033c646-5a9d-68f3-5a1f-77254741106b,06e99210-3ff2-da15-5ec2-0b8706e67f23,d9fce720-85b9-be62-c4b1-615ade90acde,fe54f83b-da85-db52-2390-16db2bee6be2,0277ccb4-4963-370e-a085-7f1c05f71b86":{"name":"A New Room"}},"wallTextures":[],"floorTextures":{},"newFloorTextures":{"2ba6d682-827e-88d5-25b9-ecc069a90842,36db37eb-082f-9f7b-5f1f-d9629fc4a705,521b262e-d953-c312-2d1e-a0ff4292781b,8e727fc6-ff79-5ac8-969d-ebe82a30eaeb,d0bb70be-4ccc-a2ff-4610-6b45071c5604":{"url":"rooms/textures/wall_floor/26.콘크리트그레이.png","scale":300},"07ffa8ad-8720-a9ea-62a7-85ebe3ebdd4c,08eb0d58-a75e-dcca-3efd-a02006b8ae98,36db37eb-082f-9f7b-5f1f-d9629fc4a705,521b262e-d953-c312-2d1e-a0ff4292781b,5b347aef-f672-9d20-ba1f-635a9d74091a,68c8b544-73c6-0dcd-14ef-a8819d0690e1,849da7c2-ae90-d717-256b-9926128e4195,bc2abf35-3456-c86b-220e-0bd631feb5ab,c08dde7c-1dcb-a6dd-24e0-dc031ed10494,ceb3126b-cfe4-5b98-2a5e-9f6066333f69":{"url":"rooms/textures/wall_floor/26.콘크리트그레이.png","scale":300},"07359d80-a115-54a3-7641-eafb2c054bb8,07392d1b-e338-322e-134d-692e4f78c7ef,08eb0d58-a75e-dcca-3efd-a02006b8ae98,1dc4fb41-43dc-beb1-95c0-4519c9bb2e85,54bf3433-7861-a371-2887-40801cb6f1c9,5df3dfa7-7c64-c511-230e-adfa40b53730,9b71ddb4-48a7-32ab-a918-52cbae9b82e0,9ff8d50a-bc43-4c1c-ead0-ac6eab096119,bc2abf35-3456-c86b-220e-0bd631feb5ab":{"url":"rooms/textures/wall_floor/26.콘크리트그레이.png","scale":300},"54bf3433-7861-a371-2887-40801cb6f1c9,5df3dfa7-7c64-c511-230e-adfa40b53730,7545fef5-a795-78bf-da87-47507ac9114c,ab3fe31a-81b2-c4db-33d1-43ae6db6bf3b,b3a40d46-7376-b294-876a-d3b46731ba0a":{"url":"rooms/textures/wall_floor/26.콘크리트그레이.png","scale":300},"4be038a4-25f9-8f78-4d2b-feae4933474c,927c025e-754d-9ada-b14f-353e6b687497,ab3fe31a-81b2-c4db-33d1-43ae6db6bf3b,b3a40d46-7376-b294-876a-d3b46731ba0a,bcd98e50-52cd-7b7e-a4cc-74d3c266bf54":{"url":"rooms/textures/wall_floor/26.콘크리트그레이.png","scale":300},"12489c95-0876-34ef-5a1f-d507c6fcc0a7,6952fd0d-118a-e376-95bb-f08acfe86aeb,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,8f669735-4145-85b1-2a97-6cef889bc8f3,e845a270-9ef4-500c-cc09-9caa0549a15c":{"url":"rooms/textures/wall_floor/20.타일_크림임페리얼.png","scale":300},"0033c646-5a9d-68f3-5a1f-77254741106b,0277ccb4-4963-370e-a085-7f1c05f71b86,06e99210-3ff2-da15-5ec2-0b8706e67f23,d9fce720-85b9-be62-c4b1-615ade90acde,fe54f83b-da85-db52-2390-16db2bee6be2":{"url":"rooms/textures/wall_floor/20.타일_크림임페리얼.png","scale":300},"07359d80-a115-54a3-7641-eafb2c054bb8,4be038a4-25f9-8f78-4d2b-feae4933474c,5df3dfa7-7c64-c511-230e-adfa40b53730,98c1dcc4-1dc5-d650-e3c2-c1adad58bd3e,ab3fe31a-81b2-c4db-33d1-43ae6db6bf3b,e3b2569b-2719-e2a3-425a-61bb8a7f6c77":{"url":"rooms/textures/wall_floor/23.원목마루_애쉬.png","scale":300},"1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,4933a8e4-d961-9342-3ed0-7c18c922eef6,4be038a4-25f9-8f78-4d2b-feae4933474c,9c2f18ba-8fc2-a4fb-e763-0474794a04da,bcd98e50-52cd-7b7e-a4cc-74d3c266bf54,e3b2569b-2719-e2a3-425a-61bb8a7f6c77":{"url":"rooms/textures/wall_floor/23.원목마루_애쉬.png","scale":300},"253720ce-dd2f-580c-c014-d6dfa97aae31,33718dd7-b3de-4803-6685-c1d02b159dd5,50359f0d-71ce-abea-bf0c-42d4c0633975,60088aa0-6d26-584f-28a6-4937488afef5,6952fd0d-118a-e376-95bb-f08acfe86aeb,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,8e727fc6-ff79-5ac8-969d-ebe82a30eaeb,bd18acac-fc6b-82c3-086d-d9e76c9aa422,d0bb70be-4ccc-a2ff-4610-6b45071c5604,e845a270-9ef4-500c-cc09-9caa0549a15c":{"url":"rooms/textures/wall_floor/23.원목마루_애쉬.png","scale":300},"33718dd7-b3de-4803-6685-c1d02b159dd5,50359f0d-71ce-abea-bf0c-42d4c0633975,bd18acac-fc6b-82c3-086d-d9e76c9aa422,be87d3fe-7e94-9f34-f1f3-d0bb3e63f81b":{"url":"rooms/textures/wall_floor/26.콘크리트그레이.png","scale":300},"06e99210-3ff2-da15-5ec2-0b8706e67f23,12489c95-0876-34ef-5a1f-d507c6fcc0a7,8f669735-4145-85b1-2a97-6cef889bc8f3,a2f2099c-0996-ce66-821e-6f7c108c3072,d9fce720-85b9-be62-c4b1-615ade90acde":{"url":"rooms/textures/wall_floor/21.타일_실버임페리얼.png","scale":300},"0033c646-5a9d-68f3-5a1f-77254741106b,06e99210-3ff2-da15-5ec2-0b8706e67f23,07359d80-a115-54a3-7641-eafb2c054bb8,12489c95-0876-34ef-5a1f-d507c6fcc0a7,1e670e4f-8bef-9b03-4764-b8c7cfb68e9c,253720ce-dd2f-580c-c014-d6dfa97aae31,521b262e-d953-c312-2d1e-a0ff4292781b,60088aa0-6d26-584f-28a6-4937488afef5,718edd64-2c0b-7cb5-30da-1fbe3a4dd431,98c1dcc4-1dc5-d650-e3c2-c1adad58bd3e,9b71ddb4-48a7-32ab-a918-52cbae9b82e0,9c2f18ba-8fc2-a4fb-e763-0474794a04da,9ff8d50a-bc43-4c1c-ead0-ac6eab096119,bc2abf35-3456-c86b-220e-0bd631feb5ab,ceb3126b-cfe4-5b98-2a5e-9f6066333f69,d0bb70be-4ccc-a2ff-4610-6b45071c5604,e3b2569b-2719-e2a3-425a-61bb8a7f6c77":{"url":"rooms/textures/wall_floor/23.원목마루_애쉬.png","scale":300}},"carbonSheet":{"url":"","transparency":1,"x":0,"y":0,"anchorX":0,"anchorY":0,"width":0.01,"height":0.01}},"items":[{"item_name":"얇은 원목 책장","item_type":1,"model_url":"models/js/cb-kendallbookcasewalnut_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EC%96%87%EC%9D%80%20%EC%9B%90%EB%AA%A9%20%EC%B1%85%EC%9E%A5&frm=NVSHATC&prevQuery=%EC%96%87%EC%9D%80%20%EC%B1%85%EC%9E%A5","xpos":190.88067142567257,"ypos":92.17650034119151,"zpos":106.38622574361818,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"얇은 원목 책장","item_type":1,"model_url":"models/js/cb-kendallbookcasewalnut_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EC%96%87%EC%9D%80%20%EC%9B%90%EB%AA%A9%20%EC%B1%85%EC%9E%A5&frm=NVSHATC&prevQuery=%EC%96%87%EC%9D%80%20%EC%B1%85%EC%9E%A5","xpos":1237.2485096886423,"ypos":92.17650034119151,"zpos":903.8028884931012,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"거실용 스텐드","item_type":1,"model_url":"models/js/ore-3legged-white_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EA%B1%B0%EC%8B%A4%EC%9A%A9%20%EC%8A%A4%ED%85%90%EB%93%9C&frm=NVSHATC&prevQuery=%EC%9B%90%EB%AA%A9%20%EC%88%98%EB%82%A9%EC%9E%A5","xpos":546.052898052933,"ypos":72.163997943445,"zpos":157.49321576348723,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"거실용 스텐드","item_type":1,"model_url":"models/js/ore-3legged-white_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EA%B1%B0%EC%8B%A4%EC%9A%A9%20%EC%8A%A4%ED%85%90%EB%93%9C&frm=NVSHATC&prevQuery=%EC%9B%90%EB%AA%A9%20%EC%88%98%EB%82%A9%EC%9E%A5","xpos":1040.566776066893,"ypos":48.76187419879701,"zpos":796.9271307701462,"rotation":0,"scale_x":0.6757091567600196,"scale_y":0.6757091567600196,"scale_z":0.6757091567600196,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"문틀","item_type":7,"format":"gltf","model_url":"models/gltf/doorwayOpen.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EB%AC%B8%ED%8B%80&frm=NVSHATC&prevQuery=%EB%AC%B8%EC%A7%80%EB%B0%A9","xpos":718.7410701938121,"ypos":110.01000000000006,"zpos":206.4,"rotation":0,"scale_x":349.794259103491,"scale_y":217.92281715700167,"scale_z":164.98317277512567,"fixed":true,"material_colors":["#e49964"]},{"item_name":"문틀","item_type":7,"format":"gltf","model_url":"models/gltf/doorwayOpen.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EB%AC%B8%ED%8B%80&frm=NVSHATC&prevQuery=%EB%AC%B8%EC%A7%80%EB%B0%A9","xpos":145.6,"ypos":105.01,"zpos":306.9852707091123,"rotation":1.5707963267948966,"scale_x":720.1646510954223,"scale_y":208.01723455895603,"scale_z":207.63188410475007,"fixed":false,"material_colors":["#e49964"]},{"item_name":"문틀","item_type":7,"format":"gltf","model_url":"models/gltf/doorwayOpen.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EB%AC%B8%ED%8B%80&frm=NVSHATC&prevQuery=%EB%AC%B8%EC%A7%80%EB%B0%A9","xpos":20.600000000000016,"ypos":105.01000000000002,"zpos":763.7305405548785,"rotation":1.5707963267948966,"scale_x":864.1975813145073,"scale_y":208.01723455895606,"scale_z":207.63188410475004,"fixed":true,"material_colors":["#e49964"]},{"item_name":"문틀","item_type":7,"format":"gltf","model_url":"models/gltf/doorwayOpen.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EB%AC%B8%ED%8B%80&frm=NVSHATC&prevQuery=%EB%AC%B8%EC%A7%80%EB%B0%A9","xpos":228.17686279825276,"ypos":105.01,"zpos":1005.7,"rotation":3.141592653589793,"scale_x":658.4362524301006,"scale_y":208.01723455895603,"scale_z":207.63188410475,"fixed":true,"material_colors":["#e49964"]},{"item_name":"문틀","item_type":7,"format":"gltf","model_url":"models/gltf/doorwayOpen.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EB%AC%B8%ED%8B%80&frm=NVSHATC&prevQuery=%EB%AC%B8%EC%A7%80%EB%B0%A9","xpos":555.9202341497956,"ypos":105.01,"zpos":1005.7,"rotation":3.141592653589793,"scale_x":370.37039199193134,"scale_y":208.01723455895603,"scale_z":207.63188410475,"fixed":true,"material_colors":["#e49964"]},{"item_name":"문틀","item_type":7,"format":"gltf","model_url":"models/gltf/doorwayOpen.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EB%AC%B8%ED%8B%80&frm=NVSHATC&prevQuery=%EB%AC%B8%EC%A7%80%EB%B0%A9","xpos":1090.2290856614866,"ypos":105.00999999999999,"zpos":1126.4,"rotation":3.141592653589793,"scale_x":555.5555879878973,"scale_y":208.017234558956,"scale_z":207.63188410474996,"fixed":true,"material_colors":["#e49964"]},{"item_name":"문틀","item_type":7,"format":"gltf","model_url":"models/gltf/doorwayOpen.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EB%AC%B8%ED%8B%80&frm=NVSHATC&prevQuery=%EB%AC%B8%EC%A7%80%EB%B0%A9","xpos":1444.4496366672236,"ypos":105.01,"zpos":1021.9,"rotation":3.141592653589793,"scale_x":555.5555879878973,"scale_y":208.01723455895603,"scale_z":207.63188410475,"fixed":true,"material_colors":["#e49964"]},{"item_name":"문틀","item_type":7,"format":"gltf","model_url":"models/gltf/doorwayOpen.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EB%AC%B8%ED%8B%80&frm=NVSHATC&prevQuery=%EB%AC%B8%EC%A7%80%EB%B0%A9","xpos":990.0344695566188,"ypos":105.01,"zpos":583.4,"rotation":0,"scale_x":452.674923545694,"scale_y":208.01723455895603,"scale_z":207.63188410475,"fixed":true,"material_colors":["#e49964"]},{"item_name":"닫힌 문","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EB%B0%A9%EB%AC%B8&frm=NVSHATC&prevQuery=%EB%AC%B8","xpos":697.6623215188575,"ypos":105.01,"zpos":353.4,"rotation":0,"scale_x":0.9477389637277374,"scale_y":0.9477389637277374,"scale_z":0.9477389637277374,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"닫힌 문","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EB%B0%A9%EB%AC%B8&frm=NVSHATC&prevQuery=%EB%AC%B8","xpos":982.8500000000001,"ypos":105.01,"zpos":408.4,"rotation":0,"scale_x":0.9477389637277374,"scale_y":0.9477389637277374,"scale_z":0.9477389637277374,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"닫힌 문","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EB%B0%A9%EB%AC%B8&frm=NVSHATC&prevQuery=%EB%AC%B8","xpos":1233.384328355436,"ypos":105.01,"zpos":583.4,"rotation":0,"scale_x":0.9477389637277374,"scale_y":0.9477389637277374,"scale_z":0.9477389637277374,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"닫힌 문","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EB%B0%A9%EB%AC%B8&frm=NVSHATC&prevQuery=%EB%AC%B8","xpos":1344.1,"ypos":105.01,"zpos":694.7368083299825,"rotation":1.5707963267948966,"scale_x":0.9477389637277374,"scale_y":0.9477389637277374,"scale_z":0.9477389637277374,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"닫힌 문","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EB%B0%A9%EB%AC%B8&frm=NVSHATC&prevQuery=%EB%AC%B8","xpos":851.6519240082312,"ypos":105.01,"zpos":1086.7,"rotation":0,"scale_x":0.9477389637277374,"scale_y":0.9477389637277374,"scale_z":0.9477389637277374,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"닫힌 문","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EB%B0%A9%EB%AC%B8&frm=NVSHATC&prevQuery=%EB%AC%B8","xpos":508.4821755754699,"ypos":105.01,"zpos":583.4,"rotation":0,"scale_x":0.9477389637277374,"scale_y":0.9477389637277374,"scale_z":0.9477389637277374,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"욕조2","item_type":2,"format":"gltf","model_url":"models/gltf/tub.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EC%9A%95%EC%A1%B0&frm=NVSHATC&prevQuery=%ED%99%94%EC%9E%A5%EC%8B%A4%20%EC%9C%A0%EB%A6%AC","xpos":795.6,"ypos":29.2,"zpos":466.9,"rotation":-1.5707963267948966,"scale_x":0.815172561223019,"scale_y":0.667125629875294,"scale_z":0.6670869296001057,"fixed":true,"material_colors":["#fafafa"]},{"item_name":"화장실 유리","item_type":2,"format":"gltf","model_url":"models/gltf/bathroomMirror.glb","item_link":"https://search.shopping.naver.com/search/all?query=%ED%99%94%EC%9E%A5%EC%8B%A4%20%EC%9C%A0%EB%A6%AC&frm=NVSHATC&prevQuery=%ED%99%94%EC%9E%A5%EC%8B%A4%EC%9C%A0%EB%A6%AC","xpos":605.5798241411682,"ypos":121.49279341121849,"zpos":466.1128493312951,"rotation":1.5707963267948966,"scale_x":165.9255414639395,"scale_y":165.9255414639395,"scale_z":165.9255414639395,"fixed":true,"material_colors":["#e49964","#bcd1d6","#b2d3c4"]},{"item_name":"화장실 유리","item_type":2,"format":"gltf","model_url":"models/gltf/bathroomMirror.glb","item_link":"https://search.shopping.naver.com/search/all?query=%ED%99%94%EC%9E%A5%EC%8B%A4%20%EC%9C%A0%EB%A6%AC&frm=NVSHATC&prevQuery=%ED%99%94%EC%9E%A5%EC%8B%A4%EC%9C%A0%EB%A6%AC","xpos":1326.6201758588318,"ypos":121.9335761374466,"zpos":525.9712044105408,"rotation":-1.5707963267948966,"scale_x":165.92554146393954,"scale_y":165.92554146393954,"scale_z":165.92554146393954,"fixed":true,"material_colors":["#e49964","#bcd1d6","#b2d3c4"]},{"item_name":"1인용 빨간 소파","item_type":1,"model_url":"models/js/ik-ekero-orange_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=1%EC%9D%B8%EC%9A%A9+%EB%B9%A8%EA%B0%84+%EC%87%BC%ED%8C%8C&bt=-1&frm=NVSCPRO","xpos":239.01917314617526,"ypos":37.50235073007,"zpos":442.4167691672974,"rotation":2.472390450931049,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"거실 러그","item_type":8,"model_url":"models/js/cb-blue-block-60x96.js","item_link":"https://search.shopping.naver.com/search/all?color=8192&frm=NVSHPRC&origQuery=%EA%B1%B0%EC%8B%A4%20%EB%9F%AC%EA%B7%B8&pagingIndex=1&pagingSize=40&productSet=total&query=%EA%B1%B0%EC%8B%A4%20%EB%9F%AC%EA%B7%B8&sort=rel&timestamp=&viewType=list","xpos":338.48247422885265,"ypos":0.250005,"zpos":413.80476929945524,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"텔레비전","item_type":8,"model_url":"models/js/cb-clapboard_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%ED%85%94%EB%A0%88%EB%B9%84%EC%A0%84&frm=NVSHATC&prevQuery=%EC%B9%A8%EB%8C%80","xpos":216.69863938342047,"ypos":71.23104073017849,"zpos":562.5158942549753,"rotation":0,"scale_x":1.0492125984251968,"scale_y":1.0492125984251968,"scale_z":1.0492125984251968,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"원목 커피테이블","item_type":1,"model_url":"models/js/ik-stockholmcoffee-brown.js","item_link":"https://search.shopping.naver.com/search/all?query=%EC%9B%90%EB%AA%A9%20%EC%BB%A4%ED%94%BC%20%ED%85%8C%EC%9D%B4%EB%B8%94&frm=NVSHATC&prevQuery=%EA%B1%B0%EC%8B%A4%EC%9A%A9%20%EC%8A%A4%ED%83%A0%EB%93%9C","xpos":222.92749242902457,"ypos":24.01483158034958,"zpos":736.2317196829356,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff","#7f7f7f","#000000","#a59292","#ffffff","#a59292","#ffffff","#a59292","#a59292","#a59292","#000000","#000000","#a59292","#ffffff","#a59292","#a59292","#ffffff","#ffffff","#ffffff"]},{"item_name":"일반형 냉장고2","item_type":2,"format":"gltf","model_url":"models/gltf/refrigerator2.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EC%9D%BC%EB%B0%98%ED%98%95%20%EB%83%89%EC%9E%A5%EA%B3%A0&frm=NVSHATC&prevQuery=%EB%83%89%EC%9E%A5%EA%B3%A0","xpos":883.7139643186156,"ypos":78.02591704542597,"zpos":790.2840744527666,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#c8c8c8"]},{"item_name":"철제 의자","item_type":1,"model_url":"models/js/gus-churchchair-whiteoak.js","item_link":"https://search.shopping.naver.com/search/all?query=%EC%B2%A0%EC%A0%9C%20%EC%9D%98%EC%9E%90&frm=NVSHATC&prevQuery=%EC%98%A4%EB%A5%B4%EB%82%B4%EB%A6%AC%20%EC%B0%BD","xpos":1028.3638403542789,"ypos":34.43261360231758,"zpos":984.7990846376373,"rotation":-1.5707963267948966,"scale_x":0.8722100958318592,"scale_y":0.8722100958318592,"scale_z":0.8722100958318592,"fixed":true,"material_colors":["#ffffff","#cccccc","#ffffff","#ffffff","#cccccc","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"]},{"item_name":"나무 5칸 서랍형 옷장","item_type":1,"model_url":"models/js/DWR_MATERA_DRESSER2.js","item_link":"https://search.shopping.naver.com/search/all?query=%EB%82%98%EB%AC%B4%20%EC%84%9C%EB%9E%8D%ED%98%95%20%EC%98%B7%EC%9E%A5&frm=NVSHATC&prevQuery=%EB%82%98%EB%AC%B4%20%EC%98%B7%EC%9E%A5","xpos":966.5111850426066,"ypos":57.785001860754996,"zpos":786.5561624583953,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff","#a3a3a3"]},{"item_name":"오르내리 창문1","item_type":3,"model_url":"models/js/whitewindow.js","item_link":"https://search.shopping.naver.com/search/all?query=%EC%98%A4%EB%A5%B4%EB%82%B4%EB%A6%AC%20%EC%B0%BD&frm=NVSHATC&prevQuery=%EC%97%B4%EB%A6%B0%20%EB%AC%B8","xpos":361.0923569492261,"ypos":175.58701350933188,"zpos":76.4,"rotation":0,"scale_x":1.4624999999992048,"scale_y":0.5866033070919602,"scale_z":0.5898407621166818,"fixed":true,"material_colors":["#ffffff","#a09050","#a09050","#ffffff","#ffffff","#6c6c6c","#000000","#000000","#ffffff","#ffffff","#6c6c6c","#ffffff"]},{"item_name":"오르내리 창문1","item_type":3,"model_url":"models/js/whitewindow.js","item_link":"https://search.shopping.naver.com/search/all?query=%EC%98%A4%EB%A5%B4%EB%82%B4%EB%A6%AC%20%EC%B0%BD&frm=NVSHATC&prevQuery=%EC%97%B4%EB%A6%B0%20%EB%AC%B8","xpos":1623.1,"ypos":132.0001366822421,"zpos":724.8678689378168,"rotation":-1.5707963267948966,"scale_x":0.9749999999994698,"scale_y":0.5866033070919604,"scale_z":0.7322161184896739,"fixed":true,"material_colors":["#ffffff","#a09050","#a09050","#ffffff","#ffffff","#6c6c6c","#000000","#000000","#ffffff","#ffffff","#6c6c6c","#ffffff"]},{"item_name":"샤워부스","item_type":2,"format":"gltf","model_url":"models/gltf/shower.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EC%83%A4%EC%9B%8C%20%EB%B6%80%EC%8A%A4&frm=NVSHATC&prevQuery=%EB%93%9C%EB%9F%BC%20%EC%84%B8%ED%83%81%EA%B8%B0","xpos":1200.6,"ypos":105.99999999999997,"zpos":406.19999999999993,"rotation":0,"scale_x":171.882747728875,"scale_y":191.95029581209786,"scale_z":171.94977638322808,"fixed":true,"material_colors":["#b2d3c4","#bcd1d6","#f8ffff","#4e6363"]},{"item_name":"1인용 파란 소파","item_type":1,"model_url":"models/js/ik-ekero-blue_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=1%EC%9D%B8%EC%9A%A9%20%ED%8C%8C%EB%9E%80%20%EC%87%BC%ED%8C%8C&frm=NVSHATC&prevQuery=%EC%B2%A0%EC%A0%9C%20%EC%9D%98%EC%9E%90","xpos":1342.8168079668649,"ypos":37.500000370129,"zpos":948.4730832326818,"rotation":2.428658490708357,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"사이드 테이블","item_type":1,"model_url":"models/js/GUSossingtonendtable.js","item_link":"https://search.shopping.naver.com/search/all?query=%EC%82%AC%EC%9D%B4%EB%93%9C%20%ED%85%8C%EC%9D%B4%EB%B8%94&frm=NVSHATC&prevQuery=%EC%9B%90%EB%AA%A9%20%EC%BB%A4%ED%94%BC%20%ED%85%8C%EC%9D%B4%EB%B8%94","xpos":1410.4178957860945,"ypos":23.208047256097558,"zpos":868.8020360262814,"rotation":-0.7492320380796877,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff","#ffffff","#020202","#ffffff","#ffffff","#ffffff"]},{"item_name":"나무 침대 옆 협탁","item_type":1,"model_url":"models/js/bd-shalebedside-smoke_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EC%B9%A8%EB%8C%80%EC%98%86%20%ED%98%91%ED%83%81&frm=NVSHATC&prevQuery=%EC%84%9C%EB%9E%8D%ED%98%95%20%EC%98%B7%EC%9E%A5","xpos":1456.49118149189,"ypos":26.155249745364998,"zpos":663.8241050827128,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"러버덕 인형","item_type":1,"format":"gltf","model_url":"models/js/Duck.gltf","item_link":"https://search.shopping.naver.com/search/all?query=%EB%9F%AC%EB%B2%84%EB%8D%95%20%EC%9D%B8%ED%98%95&cat_id=&frm=NVSHATC","xpos":313.8175656639539,"ypos":55.86732072923875,"zpos":1133.78485634207,"rotation":0,"scale_x":0.7253582416514541,"scale_y":0.7253582416514541,"scale_z":0.7253582416514541,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"화장실 세면대","item_type":2,"format":"gltf","model_url":"models/gltf/sink2.glb","item_link":"https://search.shopping.naver.com/search/all?query=%ED%99%94%EC%9E%A5%EC%8B%A4%20%EC%84%B8%EB%A9%B4%EB%8C%80&frm=NVSHATC&prevQuery=%EC%96%91%EB%B3%80%EA%B8%B0","xpos":628.7728725636589,"ypos":58.93525608296949,"zpos":465.8423344334653,"rotation":1.5707963267948966,"scale_x":0.4774665625357542,"scale_y":0.4774665625357542,"scale_z":0.4774665625357542,"fixed":true,"material_colors":["#fff2f5","#9d9d9d"]},{"item_name":"화장실 세면대","item_type":2,"format":"gltf","model_url":"models/gltf/sink2.glb","item_link":"https://search.shopping.naver.com/search/all?query=%ED%99%94%EC%9E%A5%EC%8B%A4%20%EC%84%B8%EB%A9%B4%EB%8C%80&frm=NVSHATC&prevQuery=%EC%96%91%EB%B3%80%EA%B8%B0","xpos":1303.427127436341,"ypos":45.31468481089709,"zpos":526.8856845298321,"rotation":-1.5707963267948966,"scale_x":0.4774665625357543,"scale_y":0.4774665625357543,"scale_z":0.4774665625357543,"fixed":true,"material_colors":["#fff2f5","#9d9d9d"]},{"item_name":"침대","item_type":1,"model_url":"models/js/ik_nordli_full.js","item_link":"https://search.shopping.naver.com/search/all?query=%EC%B9%A8%EB%8C%80&frm=NVSHATC&prevQuery=%ED%9D%B0%EC%83%89%20%EC%B9%A8%EB%8C%80%20%EC%98%86%20%ED%98%91%ED%83%81","xpos":1547.4513670060946,"ypos":50,"zpos":738.2584582467928,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff","#b6b2a4","#cccccc"]},{"item_name":"여닫이 창문2","item_type":3,"format":"gltf","model_url":"models/gltf/window.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EC%97%AC%EB%8B%AB%EC%9D%B4%EC%B0%BD&frm=NVSHATC&prevQuery=%EC%97%AC%EB%8B%AB%EC%9D%B4%20%EC%B0%BD","xpos":1301.1890664718105,"ypos":153.50412704210942,"zpos":353.4,"rotation":0,"scale_x":192.30770200667365,"scale_y":192.30770200667365,"scale_z":192.30770200667365,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"장농","item_type":1,"format":"gltf","model_url":"models/gltf/wardrobe.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EC%9E%A5%EB%86%8D&frm=NVSHATC&prevQuery=%EB%B2%BD%EA%B1%B8%EC%9D%B4%20%EC%84%A0%EB%B0%98","xpos":1588.9101907944337,"ypos":73.20801432572426,"zpos":961.2309146670378,"rotation":-1.5707963267948966,"scale_x":186.41714553897302,"scale_y":186.41714553897302,"scale_z":186.41714553897302,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"양변기","item_type":2,"format":"gltf","model_url":"models/gltf/toilet1.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EC%96%91%EB%B3%80%EA%B8%B0&frm=NVSHATC&prevQuery=%ED%99%94%EC%B4%88","xpos":634.3073628563859,"ypos":52.5747764252221,"zpos":547.7437813944188,"rotation":3.141592653589793,"scale_x":300,"scale_y":300,"scale_z":300,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"양변기","item_type":2,"format":"gltf","model_url":"models/gltf/toilet1.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EC%96%91%EB%B3%80%EA%B8%B0&frm=NVSHATC&prevQuery=%ED%99%94%EC%B4%88","xpos":1308.4437813944187,"ypos":52.524943686836906,"zpos":398.60736285638586,"rotation":-1.5707963267948966,"scale_x":300,"scale_y":300,"scale_z":300,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"소파","item_type":1,"format":"gltf","model_url":"models/gltf/sofa1.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EC%86%8C%ED%8C%8C&frm=NVSHATC&prevQuery=%EC%9A%95%EC%A1%B0","xpos":220.00192578541746,"ypos":43.12153499390991,"zpos":853.9963030652848,"rotation":-3.141592653589793,"scale_x":300,"scale_y":300,"scale_z":300,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"화초","item_type":8,"format":"gltf","model_url":"models/gltf/plant.glb","item_link":"https://search.shopping.naver.com/search/all?query=%ED%99%94%EC%B4%88&frm=NVSHATC&prevQuery=%EB%B2%BD%EA%B1%B8%EC%9D%B4%ED%98%95%20%EC%97%90%EC%96%B4%EC%BB%A8","xpos":-57.20862568542819,"ypos":80.3433837890625,"zpos":592.985135103113,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff","#ffffff","#d0d0d0"]},{"item_name":"컴퓨터책상","item_type":1,"format":"gltf","model_url":"models/gltf/office_desk1.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EC%BB%B4%ED%93%A8%ED%84%B0%EC%B1%85%EC%83%81&frm=NVSHATC&prevQuery=%EC%86%8C%ED%8C%8C","xpos":971.1533796851156,"ypos":23.007204388787954,"zpos":990.0573117818033,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"에어컨","item_type":2,"format":"gltf","model_url":"models/gltf/air_conditioner.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EB%B2%BD%EA%B1%B8%EC%9D%B4%ED%98%95%20%EC%97%90%EC%96%B4%EC%BB%A8&frm=NVSHATC&prevQuery=%EC%9E%A5%EB%86%8D","xpos":344.11555644604636,"ypos":192.86470058154384,"zpos":498.5209342125345,"rotation":3.141592653589793,"scale_x":0.712411960707186,"scale_y":0.712411960707186,"scale_z":0.712411960707186,"fixed":false,"material_colors":["#ffffff"]},{"item_name":"킹사이즈 침대","item_type":1,"format":"gltf","model_url":"models/gltf/bed1.glb","item_link":"https://search.shopping.naver.com/search/all?query=%ED%82%B9%EC%82%AC%EC%9D%B4%EC%A6%88%20%EC%B9%A8%EB%8C%80&frm=NVSHATC&prevQuery=%ED%82%B9%20%EC%B9%A8%EB%8C%80","xpos":378.24111675565683,"ypos":52.51725046063938,"zpos":194.2384649780829,"rotation":0,"scale_x":1.0311408855932214,"scale_y":1.0311408855932214,"scale_z":1.0311408855932214,"fixed":true,"material_colors":["#ffffff"]}]}'
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
