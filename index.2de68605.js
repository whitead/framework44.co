!function(e,n,o,t,r){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof i[t]&&i[t],d=a.cache||{},u="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(n,o){if(!d[n]){if(!e[n]){var r="function"==typeof i[t]&&i[t];if(!o&&r)return r(n,!0);if(a)return a(n,!0);if(u&&"string"==typeof n)return u(n);var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}c.resolve=function(o){var t=e[n][1][o];return null!=t?t:o},c.cache={};var f=d[n]=new l.Module(n);e[n][0].call(f.exports,c,f,f.exports,this)}return d[n].exports;function c(e){var n=c.resolve(e);return!1===n?{}:l(n)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=d,l.parent=a,l.register=function(n,o){e[n]=[function(e,n){n.exports=o},{}]},Object.defineProperty(l,"root",{get:function(){return i[t]}}),i[t]=l;for(var s=0;s<n.length;s++)l(n[s]);if(o){var f=l(o);"object"==typeof exports&&"undefined"!=typeof module?module.exports=f:"function"==typeof define&&define.amd&&define((function(){return f}))}}({e8Kp4:[function(e,n,o){message="\nBooting Framework44...\nLoading kernel modules...\nMounting file systems...\nStarting system logging service...\nConfiguring network interfaces...\nInitializing hardware detection and evaluation...\nScanning for available hardware components...\nFound hardware component 0: Capture system 0 [PCI bus address: 00:02.0]\nFound hardware component 1: Flow modulator [PCI bus address: 01:00.0]\nFound hardware component 2: Controller 0 [PCI bus address: 02:00.0]\nFound hardware component 3: Controller 1 [PCI bus address: 02:05.0]\nWarming system bus: 0...1..2...3\nHardware component 3 (Controller 0) detected as most suitable for optimal performance.\nSetting Controller 0 as the primary hardware component...\nStarting optimization loop\nAll required software components for Controller 0 have been installed.\nWelcome to Framework44!\n",document.addEventListener("DOMContentLoaded",(function(e){!function(e,n,o,t){let r=document.getElementById(e),i=0,a="";setTimeout((function e(){let d=o;i<n.length&&("\r\n"===n.charAt(i)||"\n"===n.charAt(i)?(a+="\n",i++,d=Math.random()*(t-o)+o):a.endsWith("\n")?a+="[root@framework44] ":(a+=n.charAt(i),i++),r.innerHTML=a+"_",setTimeout(e,d))}),Math.random()*(t-o)+o)}("terminal",message,100,2e3)}))},{}]},["e8Kp4"],"e8Kp4","parcelRequireb480");
//# sourceMappingURL=index.2de68605.js.map