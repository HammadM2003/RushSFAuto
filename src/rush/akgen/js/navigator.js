import Flatted from './flatted.js';
var x = String.raw`[{"vendorSub":"1","productSub":"2","vendor":"3","maxTouchPoints":0,"hardwareConcurrency":12,"cookieEnabled":true,"appCodeName":"4","appName":"5","appVersion":"6","platform":"7","product":"8","userAgent":"9","language":"10","languages":"11","onLine":true,"doNotTrack":null,"geolocation":"12","mediaCapabilities":"13","connection":"14","plugins":"15","mimeTypes":"16","webkitTemporaryStorage":"17","webkitPersistentStorage":"18","userActivation":"19","mediaSession":"20","permissions":"21","deviceMemory":8,"clipboard":"22","credentials":"23","keyboard":"24","locks":"25","mediaDevices":"26","serviceWorker":"27","storage":"28","presentation":"29","bluetooth":"30","usb":"31","xr":"32"},"","20030107","Google Inc.","Mozilla","Netscape","5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36","MacIntel","Gecko","Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36","en-US",["10","33"],{},{},{},{"0":"34","1":"35","2":"36"},{"0":"37","1":"38","2":"39","3":"40"},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},"en",{"0":"41"},{"0":"42"},{"0":"43","1":"44"},{},{},{},{},{},{},{},{}]`
export default Flatted.parse(x);