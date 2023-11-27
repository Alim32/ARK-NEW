exports.id=114,exports.ids=[114],exports.modules={78675:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(75347);function n(e,t,r){return void 0===t&&(t=new Uint8Array(2)),void 0===r&&(r=0),t[r+0]=e>>>8,t[r+1]=e>>>0,t}function o(e,t,r){return void 0===t&&(t=new Uint8Array(2)),void 0===r&&(r=0),t[r+0]=e>>>0,t[r+1]=e>>>8,t}function a(e,t){return void 0===t&&(t=0),e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}function s(e,t){return void 0===t&&(t=0),(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}function l(e,t){return void 0===t&&(t=0),e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t]}function c(e,t){return void 0===t&&(t=0),(e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t])>>>0}function u(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),t[r+0]=e>>>24,t[r+1]=e>>>16,t[r+2]=e>>>8,t[r+3]=e>>>0,t}function h(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),t[r+0]=e>>>0,t[r+1]=e>>>8,t[r+2]=e>>>16,t[r+3]=e>>>24,t}function d(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),u(e/4294967296>>>0,t,r),u(e>>>0,t,r+4),t}function f(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),h(e>>>0,t,r),h(e/4294967296>>>0,t,r+4),t}t.readInt16BE=function(e,t){return void 0===t&&(t=0),(e[t+0]<<8|e[t+1])<<16>>16},t.readUint16BE=function(e,t){return void 0===t&&(t=0),(e[t+0]<<8|e[t+1])>>>0},t.readInt16LE=function(e,t){return void 0===t&&(t=0),(e[t+1]<<8|e[t])<<16>>16},t.readUint16LE=function(e,t){return void 0===t&&(t=0),(e[t+1]<<8|e[t])>>>0},t.writeUint16BE=n,t.writeInt16BE=n,t.writeUint16LE=o,t.writeInt16LE=o,t.readInt32BE=a,t.readUint32BE=s,t.readInt32LE=l,t.readUint32LE=c,t.writeUint32BE=u,t.writeInt32BE=u,t.writeUint32LE=h,t.writeInt32LE=h,t.readInt64BE=function(e,t){void 0===t&&(t=0);var r=a(e,t),i=a(e,t+4);return 4294967296*r+i-(i>>31)*4294967296},t.readUint64BE=function(e,t){return void 0===t&&(t=0),4294967296*s(e,t)+s(e,t+4)},t.readInt64LE=function(e,t){void 0===t&&(t=0);var r=l(e,t);return 4294967296*l(e,t+4)+r-(r>>31)*4294967296},t.readUint64LE=function(e,t){void 0===t&&(t=0);var r=c(e,t);return 4294967296*c(e,t+4)+r},t.writeUint64BE=d,t.writeInt64BE=d,t.writeUint64LE=f,t.writeInt64LE=f,t.readUintBE=function(e,t,r){if(void 0===r&&(r=0),e%8!=0)throw Error("readUintBE supports only bitLengths divisible by 8");if(e/8>t.length-r)throw Error("readUintBE: array is too short for the given bitLength");for(var i=0,n=1,o=e/8+r-1;o>=r;o--)i+=t[o]*n,n*=256;return i},t.readUintLE=function(e,t,r){if(void 0===r&&(r=0),e%8!=0)throw Error("readUintLE supports only bitLengths divisible by 8");if(e/8>t.length-r)throw Error("readUintLE: array is too short for the given bitLength");for(var i=0,n=1,o=r;o<r+e/8;o++)i+=t[o]*n,n*=256;return i},t.writeUintBE=function(e,t,r,n){if(void 0===r&&(r=new Uint8Array(e/8)),void 0===n&&(n=0),e%8!=0)throw Error("writeUintBE supports only bitLengths divisible by 8");if(!i.isSafeInteger(t))throw Error("writeUintBE value must be an integer");for(var o=1,a=e/8+n-1;a>=n;a--)r[a]=t/o&255,o*=256;return r},t.writeUintLE=function(e,t,r,n){if(void 0===r&&(r=new Uint8Array(e/8)),void 0===n&&(n=0),e%8!=0)throw Error("writeUintLE supports only bitLengths divisible by 8");if(!i.isSafeInteger(t))throw Error("writeUintLE value must be an integer");for(var o=1,a=n;a<n+e/8;a++)r[a]=t/o&255,o*=256;return r},t.readFloat32BE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat32(t)},t.readFloat32LE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat32(t,!0)},t.readFloat64BE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat64(t)},t.readFloat64LE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat64(t,!0)},t.writeFloat32BE=function(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat32(r,e),t},t.writeFloat32LE=function(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat32(r,e,!0),t},t.writeFloat64BE=function(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat64(r,e),t},t.writeFloat64LE=function(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat64(r,e,!0),t}},83204:(e,t,r)=>{"use strict";var i=r(72554),n=r(30914),o=r(33859),a=r(78675),s=r(42976);t.Cv=32,t.WH=12,t.pg=16;var l=new Uint8Array(16),c=function(){function e(e){if(this.nonceLength=t.WH,this.tagLength=t.pg,e.length!==t.Cv)throw Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(e)}return e.prototype.seal=function(e,t,r,n){if(e.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");var a,s=new Uint8Array(16);s.set(e,s.length-e.length);var l=new Uint8Array(32);i.stream(this._key,s,l,4);var c=t.length+this.tagLength;if(n){if(n.length!==c)throw Error("ChaCha20Poly1305: incorrect destination length");a=n}else a=new Uint8Array(c);return i.streamXOR(this._key,s,t,a,4),this._authenticate(a.subarray(a.length-this.tagLength,a.length),l,a.subarray(0,a.length-this.tagLength),r),o.wipe(s),a},e.prototype.open=function(e,t,r,n){if(e.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");if(t.length<this.tagLength)return null;var a,l=new Uint8Array(16);l.set(e,l.length-e.length);var c=new Uint8Array(32);i.stream(this._key,l,c,4);var u=new Uint8Array(this.tagLength);if(this._authenticate(u,c,t.subarray(0,t.length-this.tagLength),r),!s.equal(u,t.subarray(t.length-this.tagLength,t.length)))return null;var h=t.length-this.tagLength;if(n){if(n.length!==h)throw Error("ChaCha20Poly1305: incorrect destination length");a=n}else a=new Uint8Array(h);return i.streamXOR(this._key,l,t.subarray(0,t.length-this.tagLength),a,4),o.wipe(l),a},e.prototype.clean=function(){return o.wipe(this._key),this},e.prototype._authenticate=function(e,t,r,i){var s=new n.Poly1305(t);i&&(s.update(i),i.length%16>0&&s.update(l.subarray(i.length%16))),s.update(r),r.length%16>0&&s.update(l.subarray(r.length%16));var c=new Uint8Array(8);i&&a.writeUint64LE(i.length,c),s.update(c),a.writeUint64LE(r.length,c),s.update(c);for(var u=s.digest(),h=0;h<u.length;h++)e[h]=u[h];s.clean(),o.wipe(u),o.wipe(c)},e}();t.OK=c},72554:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(78675),n=r(33859);function o(e,t,r,o,a){if(void 0===a&&(a=0),32!==e.length)throw Error("ChaCha: key size must be 32 bytes");if(o.length<r.length)throw Error("ChaCha: destination is shorter than source");if(0===a){if(8!==t.length&&12!==t.length)throw Error("ChaCha nonce must be 8 or 12 bytes");l=(s=new Uint8Array(16)).length-t.length,s.set(t,l)}else{if(16!==t.length)throw Error("ChaCha nonce with counter must be 16 bytes");s=t,l=a}for(var s,l,c=new Uint8Array(64),u=0;u<r.length;u+=64){!function(e,t,r){for(var n=r[3]<<24|r[2]<<16|r[1]<<8|r[0],o=r[7]<<24|r[6]<<16|r[5]<<8|r[4],a=r[11]<<24|r[10]<<16|r[9]<<8|r[8],s=r[15]<<24|r[14]<<16|r[13]<<8|r[12],l=r[19]<<24|r[18]<<16|r[17]<<8|r[16],c=r[23]<<24|r[22]<<16|r[21]<<8|r[20],u=r[27]<<24|r[26]<<16|r[25]<<8|r[24],h=r[31]<<24|r[30]<<16|r[29]<<8|r[28],d=t[3]<<24|t[2]<<16|t[1]<<8|t[0],f=t[7]<<24|t[6]<<16|t[5]<<8|t[4],p=t[11]<<24|t[10]<<16|t[9]<<8|t[8],g=t[15]<<24|t[14]<<16|t[13]<<8|t[12],m=1634760805,b=857760878,w=2036477234,y=1797285236,v=n,x=o,C=a,_=s,E=l,k=c,S=u,O=h,D=d,P=f,A=p,T=g,$=0;$<20;$+=2)D^=m=m+v|0,v^=E=E+(D=D>>>16|D<<16)|0,v=v>>>20|v<<12,P^=b=b+x|0,x^=k=k+(P=P>>>16|P<<16)|0,x=x>>>20|x<<12,A^=w=w+C|0,C^=S=S+(A=A>>>16|A<<16)|0,C=C>>>20|C<<12,T^=y=y+_|0,_^=O=O+(T=T>>>16|T<<16)|0,_=_>>>20|_<<12,A^=w=w+C|0,C^=S=S+(A=A>>>24|A<<8)|0,C=C>>>25|C<<7,T^=y=y+_|0,_^=O=O+(T=T>>>24|T<<8)|0,_=_>>>25|_<<7,P^=b=b+x|0,x^=k=k+(P=P>>>24|P<<8)|0,x=x>>>25|x<<7,D^=m=m+v|0,v^=E=E+(D=D>>>24|D<<8)|0,v=v>>>25|v<<7,T^=m=m+x|0,x^=S=S+(T=T>>>16|T<<16)|0,x=x>>>20|x<<12,D^=b=b+C|0,C^=O=O+(D=D>>>16|D<<16)|0,C=C>>>20|C<<12,P^=w=w+_|0,_^=E=E+(P=P>>>16|P<<16)|0,_=_>>>20|_<<12,A^=y=y+v|0,v^=k=k+(A=A>>>16|A<<16)|0,v=v>>>20|v<<12,P^=w=w+_|0,_^=E=E+(P=P>>>24|P<<8)|0,_=_>>>25|_<<7,A^=y=y+v|0,v^=k=k+(A=A>>>24|A<<8)|0,v=v>>>25|v<<7,D^=b=b+C|0,C^=O=O+(D=D>>>24|D<<8)|0,C=C>>>25|C<<7,T^=m=m+x|0,x^=S=S+(T=T>>>24|T<<8)|0,x=x>>>25|x<<7;i.writeUint32LE(m+1634760805|0,e,0),i.writeUint32LE(b+857760878|0,e,4),i.writeUint32LE(w+2036477234|0,e,8),i.writeUint32LE(y+1797285236|0,e,12),i.writeUint32LE(v+n|0,e,16),i.writeUint32LE(x+o|0,e,20),i.writeUint32LE(C+a|0,e,24),i.writeUint32LE(_+s|0,e,28),i.writeUint32LE(E+l|0,e,32),i.writeUint32LE(k+c|0,e,36),i.writeUint32LE(S+u|0,e,40),i.writeUint32LE(O+h|0,e,44),i.writeUint32LE(D+d|0,e,48),i.writeUint32LE(P+f|0,e,52),i.writeUint32LE(A+p|0,e,56),i.writeUint32LE(T+g|0,e,60)}(c,s,e);for(var h=u;h<u+64&&h<r.length;h++)o[h]=r[h]^c[h-u];(function(e,t,r){for(var i=1;r--;)i=i+(255&e[t])|0,e[t]=255&i,i>>>=8,t++;if(i>0)throw Error("ChaCha: counter overflow")})(s,0,l)}return n.wipe(c),0===a&&n.wipe(s),o}t.streamXOR=o,t.stream=function(e,t,r,i){return void 0===i&&(i=0),n.wipe(r),o(e,t,r,r,i)}},42976:(e,t)=>{"use strict";function r(e,t){if(e.length!==t.length)return 0;for(var r=0,i=0;i<e.length;i++)r|=e[i]^t[i];return 1&r-1>>>8}Object.defineProperty(t,"__esModule",{value:!0}),t.select=function(e,t,r){return~(e-1)&t|e-1&r},t.lessOrEqual=function(e,t){return(0|e)-(0|t)-1>>>31&1},t.compare=r,t.equal=function(e,t){return 0!==e.length&&0!==t.length&&0!==r(e,t)}},67291:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSerializableHash=function(e){return void 0!==e.saveState&&void 0!==e.restoreState&&void 0!==e.cleanSavedState}},85293:(e,t,r)=>{"use strict";var i=r(12289),n=r(33859),o=function(){function e(e,t,r,n){void 0===r&&(r=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=e,this._info=n;var o=i.hmac(this._hash,r,t);this._hmac=new i.HMAC(e,o),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return e.prototype._fillBuffer=function(){this._counter[0]++;var e=this._counter[0];if(0===e)throw Error("hkdf: cannot expand more");this._hmac.reset(),e>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},e.prototype.expand=function(e){for(var t=new Uint8Array(e),r=0;r<t.length;r++)this._bufpos===this._buffer.length&&this._fillBuffer(),t[r]=this._buffer[this._bufpos++];return t},e.prototype.clean=function(){this._hmac.clean(),n.wipe(this._buffer),n.wipe(this._counter),this._bufpos=0},e}();t.t=o},12289:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(67291),n=r(42976),o=r(33859),a=function(){function e(e,t){this._finished=!1,this._inner=new e,this._outer=new e,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var r=new Uint8Array(this.blockSize);t.length>this.blockSize?this._inner.update(t).finish(r).clean():r.set(t);for(var n=0;n<r.length;n++)r[n]^=54;this._inner.update(r);for(var n=0;n<r.length;n++)r[n]^=106;this._outer.update(r),i.isSerializableHash(this._inner)&&i.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),o.wipe(r)}return e.prototype.reset=function(){if(!i.isSerializableHash(this._inner)||!i.isSerializableHash(this._outer))throw Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.clean=function(){i.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),i.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},e.prototype.update=function(e){return this._inner.update(e),this},e.prototype.finish=function(e){return this._finished?this._outer.finish(e):(this._inner.finish(e),this._outer.update(e.subarray(0,this.digestLength)).finish(e),this._finished=!0),this},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e.prototype.saveState=function(){if(!i.isSerializableHash(this._inner))throw Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},e.prototype.restoreState=function(e){if(!i.isSerializableHash(this._inner)||!i.isSerializableHash(this._outer))throw Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(e),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.cleanSavedState=function(e){if(!i.isSerializableHash(this._inner))throw Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(e)},e}();t.HMAC=a,t.hmac=function(e,t,r){var i=new a(e,t);i.update(r);var n=i.digest();return i.clean(),n},t.equal=n.equal},75347:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mul=Math.imul||function(e,t){var r=65535&e,i=65535&t;return r*i+((e>>>16&65535)*i+r*(t>>>16&65535)<<16>>>0)|0},t.add=function(e,t){return e+t|0},t.sub=function(e,t){return e-t|0},t.rotl=function(e,t){return e<<t|e>>>32-t},t.rotr=function(e,t){return e<<32-t|e>>>t},t.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},t.MAX_SAFE_INTEGER=9007199254740991,t.isSafeInteger=function(e){return t.isInteger(e)&&e>=-t.MAX_SAFE_INTEGER&&e<=t.MAX_SAFE_INTEGER}},30914:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(42976),n=r(33859);t.DIGEST_LENGTH=16;var o=function(){function e(e){this.digestLength=t.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var r=e[0]|e[1]<<8;this._r[0]=8191&r;var i=e[2]|e[3]<<8;this._r[1]=(r>>>13|i<<3)&8191;var n=e[4]|e[5]<<8;this._r[2]=(i>>>10|n<<6)&7939;var o=e[6]|e[7]<<8;this._r[3]=(n>>>7|o<<9)&8191;var a=e[8]|e[9]<<8;this._r[4]=(o>>>4|a<<12)&255,this._r[5]=a>>>1&8190;var s=e[10]|e[11]<<8;this._r[6]=(a>>>14|s<<2)&8191;var l=e[12]|e[13]<<8;this._r[7]=(s>>>11|l<<5)&8065;var c=e[14]|e[15]<<8;this._r[8]=(l>>>8|c<<8)&8191,this._r[9]=c>>>5&127,this._pad[0]=e[16]|e[17]<<8,this._pad[1]=e[18]|e[19]<<8,this._pad[2]=e[20]|e[21]<<8,this._pad[3]=e[22]|e[23]<<8,this._pad[4]=e[24]|e[25]<<8,this._pad[5]=e[26]|e[27]<<8,this._pad[6]=e[28]|e[29]<<8,this._pad[7]=e[30]|e[31]<<8}return e.prototype._blocks=function(e,t,r){for(var i=this._fin?0:2048,n=this._h[0],o=this._h[1],a=this._h[2],s=this._h[3],l=this._h[4],c=this._h[5],u=this._h[6],h=this._h[7],d=this._h[8],f=this._h[9],p=this._r[0],g=this._r[1],m=this._r[2],b=this._r[3],w=this._r[4],y=this._r[5],v=this._r[6],x=this._r[7],C=this._r[8],_=this._r[9];r>=16;){var E,k=e[t+0]|e[t+1]<<8;n+=8191&k;var S=e[t+2]|e[t+3]<<8;o+=(k>>>13|S<<3)&8191;var O=e[t+4]|e[t+5]<<8;a+=(S>>>10|O<<6)&8191;var D=e[t+6]|e[t+7]<<8;s+=(O>>>7|D<<9)&8191;var P=e[t+8]|e[t+9]<<8;l+=(D>>>4|P<<12)&8191,c+=P>>>1&8191;var A=e[t+10]|e[t+11]<<8;u+=(P>>>14|A<<2)&8191;var T=e[t+12]|e[t+13]<<8;h+=(A>>>11|T<<5)&8191;var $=e[t+14]|e[t+15]<<8;d+=(T>>>8|$<<8)&8191,f+=$>>>5|i;var I=0;I=(E=0+n*p+o*(5*_)+a*(5*C)+s*(5*x)+l*(5*v))>>>13,E&=8191,E+=c*(5*y)+u*(5*w)+h*(5*b)+d*(5*m)+f*(5*g),I+=E>>>13,E&=8191;var N=I;N+=n*g+o*p+a*(5*_)+s*(5*C)+l*(5*x),I=N>>>13,N&=8191,N+=c*(5*v)+u*(5*y)+h*(5*w)+d*(5*b)+f*(5*m),I+=N>>>13,N&=8191;var R=I;R+=n*m+o*g+a*p+s*(5*_)+l*(5*C),I=R>>>13,R&=8191,R+=c*(5*x)+u*(5*v)+h*(5*y)+d*(5*w)+f*(5*b),I+=R>>>13,R&=8191;var M=I;M+=n*b+o*m+a*g+s*p+l*(5*_),I=M>>>13,M&=8191,M+=c*(5*C)+u*(5*x)+h*(5*v)+d*(5*y)+f*(5*w),I+=M>>>13,M&=8191;var j=I;j+=n*w+o*b+a*m+s*g+l*p,I=j>>>13,j&=8191,j+=c*(5*_)+u*(5*C)+h*(5*x)+d*(5*v)+f*(5*y),I+=j>>>13,j&=8191;var L=I;L+=n*y+o*w+a*b+s*m+l*g,I=L>>>13,L&=8191,L+=c*p+u*(5*_)+h*(5*C)+d*(5*x)+f*(5*v),I+=L>>>13,L&=8191;var B=I;B+=n*v+o*y+a*w+s*b+l*m,I=B>>>13,B&=8191,B+=c*g+u*p+h*(5*_)+d*(5*C)+f*(5*x),I+=B>>>13,B&=8191;var U=I;U+=n*x+o*v+a*y+s*w+l*b,I=U>>>13,U&=8191,U+=c*m+u*g+h*p+d*(5*_)+f*(5*C),I+=U>>>13,U&=8191;var F=I;F+=n*C+o*x+a*v+s*y+l*w,I=F>>>13,F&=8191,F+=c*b+u*m+h*g+d*p+f*(5*_),I+=F>>>13,F&=8191;var W=I;W+=n*_+o*C+a*x+s*v+l*y,I=W>>>13,W&=8191,W+=c*w+u*b+h*m+d*g+f*p,I+=W>>>13,W&=8191,E=8191&(I=(I=(I<<2)+I|0)+E|0),I>>>=13,N+=I,n=E,o=N,a=R,s=M,l=j,c=L,u=B,h=U,d=F,f=W,t+=16,r-=16}this._h[0]=n,this._h[1]=o,this._h[2]=a,this._h[3]=s,this._h[4]=l,this._h[5]=c,this._h[6]=u,this._h[7]=h,this._h[8]=d,this._h[9]=f},e.prototype.finish=function(e,t){void 0===t&&(t=0);var r,i,n,o,a=new Uint16Array(10);if(this._leftover){for(o=this._leftover,this._buffer[o++]=1;o<16;o++)this._buffer[o]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(r=this._h[1]>>>13,this._h[1]&=8191,o=2;o<10;o++)this._h[o]+=r,r=this._h[o]>>>13,this._h[o]&=8191;for(this._h[0]+=5*r,r=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=r,r=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=r,a[0]=this._h[0]+5,r=a[0]>>>13,a[0]&=8191,o=1;o<10;o++)a[o]=this._h[o]+r,r=a[o]>>>13,a[o]&=8191;for(a[9]-=8192,i=(1^r)-1,o=0;o<10;o++)a[o]&=i;for(o=0,i=~i;o<10;o++)this._h[o]=this._h[o]&i|a[o];for(o=1,this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,n=this._h[0]+this._pad[0],this._h[0]=65535&n;o<8;o++)n=(this._h[o]+this._pad[o]|0)+(n>>>16)|0,this._h[o]=65535&n;return e[t+0]=this._h[0]>>>0,e[t+1]=this._h[0]>>>8,e[t+2]=this._h[1]>>>0,e[t+3]=this._h[1]>>>8,e[t+4]=this._h[2]>>>0,e[t+5]=this._h[2]>>>8,e[t+6]=this._h[3]>>>0,e[t+7]=this._h[3]>>>8,e[t+8]=this._h[4]>>>0,e[t+9]=this._h[4]>>>8,e[t+10]=this._h[5]>>>0,e[t+11]=this._h[5]>>>8,e[t+12]=this._h[6]>>>0,e[t+13]=this._h[6]>>>8,e[t+14]=this._h[7]>>>0,e[t+15]=this._h[7]>>>8,this._finished=!0,this},e.prototype.update=function(e){var t,r=0,i=e.length;if(this._leftover){(t=16-this._leftover)>i&&(t=i);for(var n=0;n<t;n++)this._buffer[this._leftover+n]=e[r+n];if(i-=t,r+=t,this._leftover+=t,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(i>=16&&(t=i-i%16,this._blocks(e,r,t),r+=t,i-=t),i){for(var n=0;n<i;n++)this._buffer[this._leftover+n]=e[r+n];this._leftover+=i}return this},e.prototype.digest=function(){if(this._finished)throw Error("Poly1305 was finished");var e=new Uint8Array(16);return this.finish(e),e},e.prototype.clean=function(){return n.wipe(this._buffer),n.wipe(this._r),n.wipe(this._h),n.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},e}();t.Poly1305=o,t.oneTimeAuth=function(e,t){var r=new o(e);r.update(t);var i=r.digest();return r.clean(),i},t.equal=function(e,r){return e.length===t.DIGEST_LENGTH&&r.length===t.DIGEST_LENGTH&&i.equal(e,r)}},88196:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.randomStringForEntropy=t.randomString=t.randomUint32=t.randomBytes=t.defaultRandomSource=void 0;let i=r(28855),n=r(78675),o=r(33859);function a(e,r=t.defaultRandomSource){return r.randomBytes(e)}t.defaultRandomSource=new i.SystemRandomSource,t.randomBytes=a,t.randomUint32=function(e=t.defaultRandomSource){let r=a(4,e),i=(0,n.readUint32LE)(r);return(0,o.wipe)(r),i};let s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function l(e,r=s,i=t.defaultRandomSource){if(r.length<2)throw Error("randomString charset is too short");if(r.length>256)throw Error("randomString charset is too long");let n="",l=r.length,c=256-256%l;for(;e>0;){let t=a(Math.ceil(256*e/c),i);for(let i=0;i<t.length&&e>0;i++){let o=t[i];o<c&&(n+=r.charAt(o%l),e--)}(0,o.wipe)(t)}return n}t.randomString=l,t.randomStringForEntropy=function(e,r=s,i=t.defaultRandomSource){let n=Math.ceil(e/(Math.log(r.length)/Math.LN2));return l(n,r,i)}},16975:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BrowserRandomSource=void 0;class r{constructor(){this.isAvailable=!1,this.isInstantiated=!1;let e="undefined"!=typeof self?self.crypto||self.msCrypto:null;e&&void 0!==e.getRandomValues&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(e){if(!this.isAvailable||!this._crypto)throw Error("Browser random byte generator is not available.");let t=new Uint8Array(e);for(let e=0;e<t.length;e+=65536)this._crypto.getRandomValues(t.subarray(e,e+Math.min(t.length-e,65536)));return t}}t.BrowserRandomSource=r},15214:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NodeRandomSource=void 0;let i=r(33859);class n{constructor(){this.isAvailable=!1,this.isInstantiated=!1;{let e=r(6113);e&&e.randomBytes&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(e){if(!this.isAvailable||!this._crypto)throw Error("Node.js random byte generator is not available.");let t=this._crypto.randomBytes(e);if(t.length!==e)throw Error("NodeRandomSource: got fewer bytes than requested");let r=new Uint8Array(e);for(let e=0;e<r.length;e++)r[e]=t[e];return(0,i.wipe)(t),r}}t.NodeRandomSource=n},28855:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SystemRandomSource=void 0;let i=r(16975),n=r(15214);class o{constructor(){if(this.isAvailable=!1,this.name="",this._source=new i.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new n.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(e){if(!this.isAvailable)throw Error("System random byte generator is not available.");return this._source.randomBytes(e)}}t.SystemRandomSource=o},56621:(e,t,r)=>{"use strict";var i=r(78675),n=r(33859);t.k=32,t.cn=64;var o=function(){function e(){this.digestLength=t.k,this.blockSize=t.cn,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return e.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},e.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},e.prototype.clean=function(){n.wipe(this._buffer),n.wipe(this._temp),this.reset()},e.prototype.update=function(e,t){if(void 0===t&&(t=e.length),this._finished)throw Error("SHA256: can't update because hash was finished.");var r=0;if(this._bytesHashed+=t,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&t>0;)this._buffer[this._bufferLength++]=e[r++],t--;this._bufferLength===this.blockSize&&(s(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(t>=this.blockSize&&(r=s(this._temp,this._state,e,r,t),t%=this.blockSize);t>0;)this._buffer[this._bufferLength++]=e[r++],t--;return this},e.prototype.finish=function(e){if(!this._finished){var t=this._bytesHashed,r=this._bufferLength,n=t%64<56?64:128;this._buffer[r]=128;for(var o=r+1;o<n-8;o++)this._buffer[o]=0;i.writeUint32BE(t/536870912|0,this._buffer,n-8),i.writeUint32BE(t<<3,this._buffer,n-4),s(this._temp,this._state,this._buffer,0,n),this._finished=!0}for(var o=0;o<this.digestLength/4;o++)i.writeUint32BE(this._state[o],e,4*o);return this},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e.prototype.saveState=function(){if(this._finished)throw Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},e.prototype.restoreState=function(e){return this._state.set(e.state),this._bufferLength=e.bufferLength,e.buffer&&this._buffer.set(e.buffer),this._bytesHashed=e.bytesHashed,this._finished=!1,this},e.prototype.cleanSavedState=function(e){n.wipe(e.state),e.buffer&&n.wipe(e.buffer),e.bufferLength=0,e.bytesHashed=0},e}();t.mE=o;var a=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function s(e,t,r,n,o){for(;o>=64;){for(var s=t[0],l=t[1],c=t[2],u=t[3],h=t[4],d=t[5],f=t[6],p=t[7],g=0;g<16;g++){var m=n+4*g;e[g]=i.readUint32BE(r,m)}for(var g=16;g<64;g++){var b=e[g-2],w=(b>>>17|b<<15)^(b>>>19|b<<13)^b>>>10,y=((b=e[g-15])>>>7|b<<25)^(b>>>18|b<<14)^b>>>3;e[g]=(w+e[g-7]|0)+(y+e[g-16]|0)}for(var g=0;g<64;g++){var w=(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))+(h&d^~h&f)|0)+(p+(a[g]+e[g]|0)|0)|0,y=((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+(s&l^s&c^l&c)|0;p=f,f=d,d=h,h=u+w|0,u=c,c=l,l=s,s=w+y|0}t[0]+=s,t[1]+=l,t[2]+=c,t[3]+=u,t[4]+=h,t[5]+=d,t[6]+=f,t[7]+=p,n+=64,o-=64}return n}t.vp=function(e){var t=new o;t.update(e);var r=t.digest();return t.clean(),r}},33859:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wipe=function(e){for(var t=0;t<e.length;t++)e[t]=0;return e}},95739:(e,t,r)=>{"use strict";t.gi=t.Au=t.KS=t.kz=void 0;let i=r(88196),n=r(33859);function o(e){let t=new Float64Array(16);if(e)for(let r=0;r<e.length;r++)t[r]=e[r];return t}t.kz=32,t.KS=32;let a=new Uint8Array(32);a[0]=9;let s=o([56129,1]);function l(e){let t=1;for(let r=0;r<16;r++){let i=e[r]+t+65535;t=Math.floor(i/65536),e[r]=i-65536*t}e[0]+=t-1+37*(t-1)}function c(e,t,r){let i=~(r-1);for(let r=0;r<16;r++){let n=i&(e[r]^t[r]);e[r]^=n,t[r]^=n}}function u(e,t,r){for(let i=0;i<16;i++)e[i]=t[i]+r[i]}function h(e,t,r){for(let i=0;i<16;i++)e[i]=t[i]-r[i]}function d(e,t,r){let i,n,o=0,a=0,s=0,l=0,c=0,u=0,h=0,d=0,f=0,p=0,g=0,m=0,b=0,w=0,y=0,v=0,x=0,C=0,_=0,E=0,k=0,S=0,O=0,D=0,P=0,A=0,T=0,$=0,I=0,N=0,R=0,M=r[0],j=r[1],L=r[2],B=r[3],U=r[4],F=r[5],W=r[6],z=r[7],H=r[8],q=r[9],G=r[10],V=r[11],Z=r[12],K=r[13],Y=r[14],Q=r[15];o+=(i=t[0])*M,a+=i*j,s+=i*L,l+=i*B,c+=i*U,u+=i*F,h+=i*W,d+=i*z,f+=i*H,p+=i*q,g+=i*G,m+=i*V,b+=i*Z,w+=i*K,y+=i*Y,v+=i*Q,a+=(i=t[1])*M,s+=i*j,l+=i*L,c+=i*B,u+=i*U,h+=i*F,d+=i*W,f+=i*z,p+=i*H,g+=i*q,m+=i*G,b+=i*V,w+=i*Z,y+=i*K,v+=i*Y,x+=i*Q,s+=(i=t[2])*M,l+=i*j,c+=i*L,u+=i*B,h+=i*U,d+=i*F,f+=i*W,p+=i*z,g+=i*H,m+=i*q,b+=i*G,w+=i*V,y+=i*Z,v+=i*K,x+=i*Y,C+=i*Q,l+=(i=t[3])*M,c+=i*j,u+=i*L,h+=i*B,d+=i*U,f+=i*F,p+=i*W,g+=i*z,m+=i*H,b+=i*q,w+=i*G,y+=i*V,v+=i*Z,x+=i*K,C+=i*Y,_+=i*Q,c+=(i=t[4])*M,u+=i*j,h+=i*L,d+=i*B,f+=i*U,p+=i*F,g+=i*W,m+=i*z,b+=i*H,w+=i*q,y+=i*G,v+=i*V,x+=i*Z,C+=i*K,_+=i*Y,E+=i*Q,u+=(i=t[5])*M,h+=i*j,d+=i*L,f+=i*B,p+=i*U,g+=i*F,m+=i*W,b+=i*z,w+=i*H,y+=i*q,v+=i*G,x+=i*V,C+=i*Z,_+=i*K,E+=i*Y,k+=i*Q,h+=(i=t[6])*M,d+=i*j,f+=i*L,p+=i*B,g+=i*U,m+=i*F,b+=i*W,w+=i*z,y+=i*H,v+=i*q,x+=i*G,C+=i*V,_+=i*Z,E+=i*K,k+=i*Y,S+=i*Q,d+=(i=t[7])*M,f+=i*j,p+=i*L,g+=i*B,m+=i*U,b+=i*F,w+=i*W,y+=i*z,v+=i*H,x+=i*q,C+=i*G,_+=i*V,E+=i*Z,k+=i*K,S+=i*Y,O+=i*Q,f+=(i=t[8])*M,p+=i*j,g+=i*L,m+=i*B,b+=i*U,w+=i*F,y+=i*W,v+=i*z,x+=i*H,C+=i*q,_+=i*G,E+=i*V,k+=i*Z,S+=i*K,O+=i*Y,D+=i*Q,p+=(i=t[9])*M,g+=i*j,m+=i*L,b+=i*B,w+=i*U,y+=i*F,v+=i*W,x+=i*z,C+=i*H,_+=i*q,E+=i*G,k+=i*V,S+=i*Z,O+=i*K,D+=i*Y,P+=i*Q,g+=(i=t[10])*M,m+=i*j,b+=i*L,w+=i*B,y+=i*U,v+=i*F,x+=i*W,C+=i*z,_+=i*H,E+=i*q,k+=i*G,S+=i*V,O+=i*Z,D+=i*K,P+=i*Y,A+=i*Q,m+=(i=t[11])*M,b+=i*j,w+=i*L,y+=i*B,v+=i*U,x+=i*F,C+=i*W,_+=i*z,E+=i*H,k+=i*q,S+=i*G,O+=i*V,D+=i*Z,P+=i*K,A+=i*Y,T+=i*Q,b+=(i=t[12])*M,w+=i*j,y+=i*L,v+=i*B,x+=i*U,C+=i*F,_+=i*W,E+=i*z,k+=i*H,S+=i*q,O+=i*G,D+=i*V,P+=i*Z,A+=i*K,T+=i*Y,$+=i*Q,w+=(i=t[13])*M,y+=i*j,v+=i*L,x+=i*B,C+=i*U,_+=i*F,E+=i*W,k+=i*z,S+=i*H,O+=i*q,D+=i*G,P+=i*V,A+=i*Z,T+=i*K,$+=i*Y,I+=i*Q,y+=(i=t[14])*M,v+=i*j,x+=i*L,C+=i*B,_+=i*U,E+=i*F,k+=i*W,S+=i*z,O+=i*H,D+=i*q,P+=i*G,A+=i*V,T+=i*Z,$+=i*K,I+=i*Y,N+=i*Q,v+=(i=t[15])*M,x+=i*j,C+=i*L,_+=i*B,E+=i*U,k+=i*F,S+=i*W,O+=i*z,D+=i*H,P+=i*q,A+=i*G,T+=i*V,$+=i*Z,I+=i*K,N+=i*Y,R+=i*Q,o+=38*x,a+=38*C,s+=38*_,l+=38*E,c+=38*k,u+=38*S,h+=38*O,d+=38*D,f+=38*P,p+=38*A,g+=38*T,m+=38*$,b+=38*I,w+=38*N,y+=38*R,n=Math.floor((i=o+(n=1)+65535)/65536),o=i-65536*n,n=Math.floor((i=a+n+65535)/65536),a=i-65536*n,n=Math.floor((i=s+n+65535)/65536),s=i-65536*n,n=Math.floor((i=l+n+65535)/65536),l=i-65536*n,n=Math.floor((i=c+n+65535)/65536),c=i-65536*n,n=Math.floor((i=u+n+65535)/65536),u=i-65536*n,n=Math.floor((i=h+n+65535)/65536),h=i-65536*n,n=Math.floor((i=d+n+65535)/65536),d=i-65536*n,n=Math.floor((i=f+n+65535)/65536),f=i-65536*n,n=Math.floor((i=p+n+65535)/65536),p=i-65536*n,n=Math.floor((i=g+n+65535)/65536),g=i-65536*n,n=Math.floor((i=m+n+65535)/65536),m=i-65536*n,n=Math.floor((i=b+n+65535)/65536),b=i-65536*n,n=Math.floor((i=w+n+65535)/65536),w=i-65536*n,n=Math.floor((i=y+n+65535)/65536),y=i-65536*n,n=Math.floor((i=v+n+65535)/65536),v=i-65536*n,o+=n-1+37*(n-1),n=Math.floor((i=o+(n=1)+65535)/65536),o=i-65536*n,n=Math.floor((i=a+n+65535)/65536),a=i-65536*n,n=Math.floor((i=s+n+65535)/65536),s=i-65536*n,n=Math.floor((i=l+n+65535)/65536),l=i-65536*n,n=Math.floor((i=c+n+65535)/65536),c=i-65536*n,n=Math.floor((i=u+n+65535)/65536),u=i-65536*n,n=Math.floor((i=h+n+65535)/65536),h=i-65536*n,n=Math.floor((i=d+n+65535)/65536),d=i-65536*n,n=Math.floor((i=f+n+65535)/65536),f=i-65536*n,n=Math.floor((i=p+n+65535)/65536),p=i-65536*n,n=Math.floor((i=g+n+65535)/65536),g=i-65536*n,n=Math.floor((i=m+n+65535)/65536),m=i-65536*n,n=Math.floor((i=b+n+65535)/65536),b=i-65536*n,n=Math.floor((i=w+n+65535)/65536),w=i-65536*n,n=Math.floor((i=y+n+65535)/65536),y=i-65536*n,n=Math.floor((i=v+n+65535)/65536),v=i-65536*n,o+=n-1+37*(n-1),e[0]=o,e[1]=a,e[2]=s,e[3]=l,e[4]=c,e[5]=u,e[6]=h,e[7]=d,e[8]=f,e[9]=p,e[10]=g,e[11]=m,e[12]=b,e[13]=w,e[14]=y,e[15]=v}function f(e,t){let r=new Uint8Array(32),i=new Float64Array(80),n=o(),a=o(),f=o(),p=o(),g=o(),m=o();for(let t=0;t<31;t++)r[t]=e[t];r[31]=127&e[31]|64,r[0]&=248,function(e,t){for(let r=0;r<16;r++)e[r]=t[2*r]+(t[2*r+1]<<8);e[15]&=32767}(i,t);for(let e=0;e<16;e++)a[e]=i[e];n[0]=p[0]=1;for(let e=254;e>=0;--e){let t=r[e>>>3]>>>(7&e)&1;c(n,a,t),c(f,p,t),u(g,n,f),h(n,n,f),u(f,a,p),h(a,a,p),d(p,g,g),d(m,n,n),d(n,f,n),d(f,a,g),u(g,n,f),h(n,n,f),d(a,n,n),h(f,p,m),d(n,f,s),u(n,n,p),d(f,f,n),d(n,p,m),d(p,a,i),d(a,g,g),c(n,a,t),c(f,p,t)}for(let e=0;e<16;e++)i[e+16]=n[e],i[e+32]=f[e],i[e+48]=a[e],i[e+64]=p[e];let b=i.subarray(32),w=i.subarray(16);(function(e,t){let r=o();for(let e=0;e<16;e++)r[e]=t[e];for(let e=253;e>=0;e--)d(r,r,r),2!==e&&4!==e&&d(r,r,t);for(let t=0;t<16;t++)e[t]=r[t]})(b,b),d(w,w,b);let y=new Uint8Array(32);return function(e,t){let r=o(),i=o();for(let e=0;e<16;e++)i[e]=t[e];l(i),l(i),l(i);for(let e=0;e<2;e++){r[0]=i[0]-65517;for(let e=1;e<15;e++)r[e]=i[e]-65535-(r[e-1]>>16&1),r[e-1]&=65535;r[15]=i[15]-32767-(r[14]>>16&1);let e=r[15]>>16&1;r[14]&=65535,c(i,r,1-e)}for(let t=0;t<16;t++)e[2*t]=255&i[t],e[2*t+1]=i[t]>>8}(y,w),y}t.Au=function(e){let r=(0,i.randomBytes)(32,e),o=function(e){if(e.length!==t.KS)throw Error(`x25519: seed must be ${t.KS} bytes`);let r=new Uint8Array(e),i=f(r,a);return{publicKey:i,secretKey:r}}(r);return(0,n.wipe)(r),o},t.gi=function(e,r,i=!1){if(e.length!==t.kz)throw Error("X25519: incorrect secret key length");if(r.length!==t.kz)throw Error("X25519: incorrect public key length");let n=f(e,r);if(i){let e=0;for(let t=0;t<n.length;t++)e|=n[t];if(0===e)throw Error("X25519: invalid shared key")}return n}},90439:()=>{},79013:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(52069);i.__exportStar(r(54765),t),i.__exportStar(r(20266),t)},54765:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_THOUSAND=t.ONE_HUNDRED=void 0,t.ONE_HUNDRED=100,t.ONE_THOUSAND=1e3},20266:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_YEAR=t.FOUR_WEEKS=t.THREE_WEEKS=t.TWO_WEEKS=t.ONE_WEEK=t.THIRTY_DAYS=t.SEVEN_DAYS=t.FIVE_DAYS=t.THREE_DAYS=t.ONE_DAY=t.TWENTY_FOUR_HOURS=t.TWELVE_HOURS=t.SIX_HOURS=t.THREE_HOURS=t.ONE_HOUR=t.SIXTY_MINUTES=t.THIRTY_MINUTES=t.TEN_MINUTES=t.FIVE_MINUTES=t.ONE_MINUTE=t.SIXTY_SECONDS=t.THIRTY_SECONDS=t.TEN_SECONDS=t.FIVE_SECONDS=t.ONE_SECOND=void 0,t.ONE_SECOND=1,t.FIVE_SECONDS=5,t.TEN_SECONDS=10,t.THIRTY_SECONDS=30,t.SIXTY_SECONDS=60,t.ONE_MINUTE=t.SIXTY_SECONDS,t.FIVE_MINUTES=5*t.ONE_MINUTE,t.TEN_MINUTES=10*t.ONE_MINUTE,t.THIRTY_MINUTES=30*t.ONE_MINUTE,t.SIXTY_MINUTES=60*t.ONE_MINUTE,t.ONE_HOUR=t.SIXTY_MINUTES,t.THREE_HOURS=3*t.ONE_HOUR,t.SIX_HOURS=6*t.ONE_HOUR,t.TWELVE_HOURS=12*t.ONE_HOUR,t.TWENTY_FOUR_HOURS=24*t.ONE_HOUR,t.ONE_DAY=t.TWENTY_FOUR_HOURS,t.THREE_DAYS=3*t.ONE_DAY,t.FIVE_DAYS=5*t.ONE_DAY,t.SEVEN_DAYS=7*t.ONE_DAY,t.THIRTY_DAYS=30*t.ONE_DAY,t.ONE_WEEK=t.SEVEN_DAYS,t.TWO_WEEKS=2*t.ONE_WEEK,t.THREE_WEEKS=3*t.ONE_WEEK,t.FOUR_WEEKS=4*t.ONE_WEEK,t.ONE_YEAR=365*t.ONE_DAY},26335:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(52069);i.__exportStar(r(27260),t),i.__exportStar(r(49428),t),i.__exportStar(r(88195),t),i.__exportStar(r(79013),t)},88195:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(52069);i.__exportStar(r(2893),t)},2893:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IWatch=void 0;class r{}t.IWatch=r},62683:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fromMiliseconds=t.toMiliseconds=void 0;let i=r(79013);t.toMiliseconds=function(e){return e*i.ONE_THOUSAND},t.fromMiliseconds=function(e){return Math.floor(e/i.ONE_THOUSAND)}},19409:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.delay=void 0,t.delay=function(e){return new Promise(t=>{setTimeout(()=>{t(!0)},e)})}},27260:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(52069);i.__exportStar(r(19409),t),i.__exportStar(r(62683),t)},49428:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Watch=void 0;class r{constructor(){this.timestamps=new Map}start(e){if(this.timestamps.has(e))throw Error(`Watch already started for label: ${e}`);this.timestamps.set(e,{started:Date.now()})}stop(e){let t=this.get(e);if(void 0!==t.elapsed)throw Error(`Watch already stopped for label: ${e}`);let r=Date.now()-t.started;this.timestamps.set(e,{started:t.started,elapsed:r})}get(e){let t=this.timestamps.get(e);if(void 0===t)throw Error(`No timestamp found for label: ${e}`);return t}elapsed(e){let t=this.get(e),r=t.elapsed||Date.now()-t.started;return r}}t.Watch=r,t.default=r},52069:(e,t,r)=>{"use strict";r.r(t),r.d(t,{__assign:()=>o,__asyncDelegator:()=>v,__asyncGenerator:()=>y,__asyncValues:()=>x,__await:()=>w,__awaiter:()=>u,__classPrivateFieldGet:()=>k,__classPrivateFieldSet:()=>S,__createBinding:()=>d,__decorate:()=>s,__exportStar:()=>f,__extends:()=>n,__generator:()=>h,__importDefault:()=>E,__importStar:()=>_,__makeTemplateObject:()=>C,__metadata:()=>c,__param:()=>l,__read:()=>g,__rest:()=>a,__spread:()=>m,__spreadArrays:()=>b,__values:()=>p});/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var i=function(e,t){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function n(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o=function(){return(o=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function a(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++)0>t.indexOf(i[n])&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]]);return r}function s(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}function l(e,t){return function(r,i){t(r,i,e)}}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,r,i){return new(r||(r=Promise))(function(n,o){function a(e){try{l(i.next(e))}catch(e){o(e)}}function s(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}l((i=i.apply(e,t||[])).next())})}function h(e,t){var r,i,n,o,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw TypeError("Generator is already executing.");for(;a;)try{if(r=1,i&&(n=2&o[0]?i.return:o[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,o[1])).done)return n;switch(i=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(n=(n=a.trys).length>0&&n[n.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){a.label=o[1];break}if(6===o[0]&&a.label<n[1]){a.label=n[1],n=o;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(o);break}n[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],i=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function d(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}function f(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||(t[r]=e[r])}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],i=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var i,n,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(i=o.next()).done;)a.push(i.value)}catch(e){n={error:e}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return a}function m(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]));return e}function b(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var i=Array(e),n=0,t=0;t<r;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,n++)i[n]=o[a];return i}function w(e){return this instanceof w?(this.v=e,this):new w(e)}function y(e,t,r){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var i,n=r.apply(e,t||[]),o=[];return i={},a("next"),a("throw"),a("return"),i[Symbol.asyncIterator]=function(){return this},i;function a(e){n[e]&&(i[e]=function(t){return new Promise(function(r,i){o.push([e,t,r,i])>1||s(e,t)})})}function s(e,t){try{var r;(r=n[e](t)).value instanceof w?Promise.resolve(r.value.v).then(l,c):u(o[0][2],r)}catch(e){u(o[0][3],e)}}function l(e){s("next",e)}function c(e){s("throw",e)}function u(e,t){e(t),o.shift(),o.length&&s(o[0][0],o[0][1])}}function v(e){var t,r;return t={},i("next"),i("throw",function(e){throw e}),i("return"),t[Symbol.iterator]=function(){return this},t;function i(i,n){t[i]=e[i]?function(t){return(r=!r)?{value:w(e[i](t)),done:"return"===i}:n?n(t):t}:n}}function x(e){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=p(e),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(r){t[r]=e[r]&&function(t){return new Promise(function(i,n){(function(e,t,r,i){Promise.resolve(i).then(function(t){e({value:t,done:r})},t)})(i,n,(t=e[r](t)).done,t.value)})}}}function C(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function _(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function E(e){return e&&e.__esModule?e:{default:e}}function k(e,t){if(!t.has(e))throw TypeError("attempted to get private field on non-instance");return t.get(e)}function S(e,t,r){if(!t.has(e))throw TypeError("attempted to set private field on non-instance");return t.set(e,r),r}},19744:(e,t,r)=>{"use strict";r.d(t,{AW:()=>D,O6:()=>tp,rV:()=>T,gn:()=>ed,H1:()=>ea,hF:()=>es,WG:()=>j,pe:()=>B,m$:()=>N,vB:()=>U,HI:()=>L,E0:()=>ep,Gq:()=>eu,$0:()=>er,Z4:()=>ec,Bv:()=>eS,Au:()=>$,jd:()=>I,gu:()=>k,D:()=>et,Z7:()=>ez,cO:()=>ew,_H:()=>eb,fc:()=>ej,D6:()=>eH,Hh:()=>em,Ym:()=>R,rj:()=>M,jU:()=>J,gp:()=>eL,rF:()=>ts,Bw:()=>ef,UG:()=>Q,Gg:()=>tu,xW:()=>eJ,b$:()=>X,Ih:()=>eY,h1:()=>e0,Q8:()=>z,o8:()=>eV,qt:()=>eq,Dd:()=>e1,$t:()=>te,nf:()=>ti,Q0:()=>e9,in:()=>e4,p8:()=>tn,sI:()=>ta,al:()=>to,L5:()=>eG,EJ:()=>e7,Z2:()=>e6,PM:()=>e8,hH:()=>tt,ON:()=>tc,n:()=>e5,JT:()=>tr,M_:()=>eZ,jv:()=>eX,KC:()=>en,eG:()=>eg,fK:()=>eU,IP:()=>eo,DQ:()=>E,iP:()=>eh,M:()=>eB,he:()=>ek,uw:()=>td,Ll:()=>F,EN:()=>W});var i=r(83204),n=r(85293),o=r(88196),a=r(56621),s=r(95739),l=r(97027),c=function(e,t,r){if(r||2==arguments.length)for(var i,n=0,o=t.length;n<o;n++)!i&&n in t||(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))},u=function(e,t,r){this.name=e,this.version=t,this.os=r,this.type="browser"},h=function(e){this.version=e,this.type="node",this.name="node",this.os=process.platform},d=function(e,t,r,i){this.name=e,this.version=t,this.os=r,this.bot=i,this.type="bot-device"},f=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},p=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},g=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,m=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],b=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function w(e){var t=""!==e&&m.reduce(function(t,r){var i=r[0],n=r[1];if(t)return t;var o=n.exec(e);return!!o&&[i,o]},!1);if(!t)return null;var r=t[0],i=t[1];if("searchbot"===r)return new f;var n=i[1]&&i[1].split(".").join("_").split("_").slice(0,3);n?n.length<3&&(n=c(c([],n,!0),function(e){for(var t=[],r=0;r<e;r++)t.push("0");return t}(3-n.length),!0)):n=[];var o=n.join("."),a=function(e){for(var t=0,r=b.length;t<r;t++){var i=b[t],n=i[0];if(i[1].exec(e))return n}return null}(e),s=g.exec(e);return s&&s[1]?new d(r,o,a,s[1]):new u(r,o,a)}var y=r(26335),v=r(84957),x=r(76739),C=r(95117);r(90439);let _={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}};function E(e){let[t,r]=e.split(":");return{namespace:t,reference:r}}function k(e,t=[]){let r=[];return Object.keys(e).forEach(i=>{if(t.length&&!t.includes(i))return;let n=e[i];r.push(...n.accounts)}),r}function S(e,t){return e.includes(":")?[e]:t.chains||[]}let O="base10",D="base16",P="base64pad",A="utf8",T=1;function $(){let e=s.Au();return{privateKey:(0,l.BB)(e.secretKey,D),publicKey:(0,l.BB)(e.publicKey,D)}}function I(){let e=(0,o.randomBytes)(32);return(0,l.BB)(e,D)}function N(e,t){let r=s.gi((0,l.mL)(e,D),(0,l.mL)(t,D),!0),i=new n.t(a.mE,r).expand(32);return(0,l.BB)(i,D)}function R(e){let t=(0,a.vp)((0,l.mL)(e,D));return(0,l.BB)(t,D)}function M(e){let t=(0,a.vp)((0,l.mL)(e,A));return(0,l.BB)(t,D)}function j(e){return Number((0,l.BB)(e,O))}function L(e){var t;let r=(t="u">typeof e.type?e.type:0,(0,l.mL)(`${t}`,O));if(j(r)===T&&typeof e.senderPublicKey>"u")throw Error("Missing sender public key for type 1 envelope");let n="u">typeof e.senderPublicKey?(0,l.mL)(e.senderPublicKey,D):void 0,a="u">typeof e.iv?(0,l.mL)(e.iv,D):(0,o.randomBytes)(12),s=new i.OK((0,l.mL)(e.symKey,D)).seal(a,(0,l.mL)(e.message,A));return function(e){if(j(e.type)===T){if(typeof e.senderPublicKey>"u")throw Error("Missing sender public key for type 1 envelope");return(0,l.BB)((0,l.zo)([e.type,e.senderPublicKey,e.iv,e.sealed]),P)}return(0,l.BB)((0,l.zo)([e.type,e.iv,e.sealed]),P)}({type:r,sealed:s,iv:a,senderPublicKey:n})}function B(e){let t=new i.OK((0,l.mL)(e.symKey,D)),{sealed:r,iv:n}=U(e.encoded),o=t.open(n,r);if(null===o)throw Error("Failed to decrypt");return(0,l.BB)(o,A)}function U(e){let t=(0,l.mL)(e,P),r=t.slice(0,1);if(j(r)===T){let e=t.slice(1,33),i=t.slice(33,45),n=t.slice(45);return{type:r,sealed:n,iv:i,senderPublicKey:e}}let i=t.slice(1,13),n=t.slice(13);return{type:r,sealed:n,iv:i}}function F(e,t){let r=U(e);return W({type:j(r.type),senderPublicKey:"u">typeof r.senderPublicKey?(0,l.BB)(r.senderPublicKey,D):void 0,receiverPublicKey:t?.receiverPublicKey})}function W(e){let t=e?.type||0;if(t===T){if(typeof e?.senderPublicKey>"u")throw Error("missing sender public key");if(typeof e?.receiverPublicKey>"u")throw Error("missing receiver public key")}return{type:t,senderPublicKey:e?.senderPublicKey,receiverPublicKey:e?.receiverPublicKey}}function z(e){return e.type===T&&"string"==typeof e.senderPublicKey&&"string"==typeof e.receiverPublicKey}var H=Object.defineProperty,q=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,Z=(e,t,r)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,K=(e,t)=>{for(var r in t||(t={}))G.call(t,r)&&Z(e,r,t[r]);if(q)for(var r of q(t))V.call(t,r)&&Z(e,r,t[r]);return e};let Y={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"};function Q(){return"u">typeof process&&"u">typeof process.versions&&"u">typeof process.versions.node}function X(){return!(0,v.getDocument)()&&!!(0,v.getNavigator)()&&"ReactNative"===navigator.product}function J(){return!Q()&&!!(0,v.getNavigator)()}function ee(){return X()?Y.reactNative:Q()?Y.node:J()?Y.browser:Y.unknown}function et(){return(0,x.D)()||{name:"",description:"",url:"",icons:[""]}}function er({protocol:e,version:t,relayUrl:r,sdkVersion:i,auth:n,projectId:o,useOnCloseEvent:a}){var s;let l;let c=r.split("?"),u=function(e,t,r){let i=function(){var e;if(ee()===Y.reactNative&&"u">typeof global&&"u">typeof(null==global?void 0:global.Platform)){let{OS:e,Version:t}=global.Platform;return[e,t].join("-")}let t=e?w(e):"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new p:"undefined"!=typeof navigator?w(navigator.userAgent):"undefined"!=typeof process&&process.version?new h(process.version.slice(1)):null;if(null===t)return"unknown";let r=t.os?t.os.replace(" ","").toLowerCase():"unknown";return"browser"===t.type?[r,t.name,t.version].join("-"):[r,t.version].join("-")}(),n=function(){var e;let t=ee();return t===Y.browser?[t,(null==(e=(0,v.getLocation)())?void 0:e.host)||"unknown"].join(":"):t}();return[[e,t].join("-"),["js",r].join("-"),i,n].join("/")}(e,t,i),d=(s=c[1]||"",l=K(K({},l=C.parse(s)),{auth:n,ua:u,projectId:o,useOnCloseEvent:a||void 0}),s=C.stringify(l));return c[0]+"?"+d}function ei(e,t){return e.filter(e=>t.includes(e)).length===e.length}function en(e){return Object.fromEntries(e.entries())}function eo(e){return new Map(Object.entries(e))}function ea(e=y.FIVE_MINUTES,t){let r,i,n;let o=(0,y.toMiliseconds)(e||y.FIVE_MINUTES);return{resolve:e=>{n&&r&&(clearTimeout(n),r(e))},reject:e=>{n&&i&&(clearTimeout(n),i(e))},done:()=>new Promise((e,a)=>{n=setTimeout(()=>{a(Error(t))},o),r=e,i=a})}}function es(e,t,r){return new Promise(async(i,n)=>{let o=setTimeout(()=>n(Error(r)),t);try{let t=await e;i(t)}catch(e){n(e)}clearTimeout(o)})}function el(e,t){if("string"==typeof t&&t.startsWith(`${e}:`))return t;if("topic"===e.toLowerCase()){if("string"!=typeof t)throw Error('Value must be "string" for expirer target type: topic');return`topic:${t}`}if("id"===e.toLowerCase()){if("number"!=typeof t)throw Error('Value must be "number" for expirer target type: id');return`id:${t}`}throw Error(`Unknown expirer target type: ${e}`)}function ec(e){return el("topic",e)}function eu(e){return el("id",e)}function eh(e){let[t,r]=e.split(":"),i={id:void 0,topic:void 0};if("topic"===t&&"string"==typeof r)i.topic=r;else if("id"===t&&Number.isInteger(Number(r)))i.id=Number(r);else throw Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);return i}function ed(e,t){return(0,y.fromMiliseconds)((t||Date.now())+(0,y.toMiliseconds)(e))}function ef(e){return Date.now()>=(0,y.toMiliseconds)(e)}function ep(e,t){return`${e}${t?`:${t}`:""}`}function eg(e=[],t=[]){return[...new Set([...e,...t])]}async function em({id:e,topic:t,wcDeepLink:r}){try{if(!r)return;let i="string"==typeof r?JSON.parse(r):r,n=i?.href;if("string"!=typeof n)return;n.endsWith("/")&&(n=n.slice(0,-1));let o=`${n}/wc?requestId=${e}&sessionTopic=${t}`,a=ee();a===Y.browser?o.startsWith("https://")?window.open(o,"_blank","noreferrer noopener"):window.open(o,"_self","noreferrer noopener"):a===Y.reactNative&&"u">typeof(null==global?void 0:global.Linking)&&await global.Linking.openURL(o)}catch(e){console.error(e)}}function eb(e){return e?.relay||{protocol:"irn"}}function ew(e){let t=_[e];if(typeof t>"u")throw Error(`Relay Protocol not supported: ${e}`);return t}var ey=Object.defineProperty,ev=Object.getOwnPropertySymbols,ex=Object.prototype.hasOwnProperty,eC=Object.prototype.propertyIsEnumerable,e_=(e,t,r)=>t in e?ey(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,eE=(e,t)=>{for(var r in t||(t={}))ex.call(t,r)&&e_(e,r,t[r]);if(ev)for(var r of ev(t))eC.call(t,r)&&e_(e,r,t[r]);return e};function ek(e){var t;let r=e.indexOf(":"),i=-1!==e.indexOf("?")?e.indexOf("?"):void 0,n=e.substring(0,r),o=e.substring(r+1,i).split("@"),a="u">typeof i?e.substring(i):"",s=C.parse(a);return{protocol:n,topic:(t=o[0]).startsWith("//")?t.substring(2):t,version:parseInt(o[1],10),symKey:s.symKey,relay:function(e,t="-"){let r={},i="relay"+t;return Object.keys(e).forEach(t=>{if(t.startsWith(i)){let n=t.replace(i,""),o=e[t];r[n]=o}}),r}(s)}}function eS(e){return`${e.protocol}:${e.topic}@${e.version}?`+C.stringify(eE({symKey:e.symKey},function(e,t="-"){let r={};return Object.keys(e).forEach(i=>{e[i]&&(r["relay"+t+i]=e[i])}),r}(e.relay)))}var eO=Object.defineProperty,eD=Object.defineProperties,eP=Object.getOwnPropertyDescriptors,eA=Object.getOwnPropertySymbols,eT=Object.prototype.hasOwnProperty,e$=Object.prototype.propertyIsEnumerable,eI=(e,t,r)=>t in e?eO(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,eN=(e,t)=>{for(var r in t||(t={}))eT.call(t,r)&&eI(e,r,t[r]);if(eA)for(var r of eA(t))e$.call(t,r)&&eI(e,r,t[r]);return e},eR=(e,t)=>eD(e,eP(t));function eM(e){let t=[];return e.forEach(e=>{let[r,i]=e.split(":");t.push(`${r}:${i}`)}),t}function ej(e,t){let r=e4(e,t);if(r)throw Error(r.message);let i={};for(let[t,r]of Object.entries(e))i[t]={methods:r.methods,events:r.events,chains:r.accounts.map(e=>`${e.split(":")[0]}:${e.split(":")[1]}`)};return i}function eL(e){return e.includes(":")}function eB(e){return eL(e)?e.split(":")[0]:e}function eU(e){var t,r,i;let n={};if(!eG(e))return n;for(let[o,a]of Object.entries(e)){let e=eL(o)?[o]:a.chains,s=a.methods||[],l=a.events||[],c=eB(o);n[c]=eR(eN({},n[c]),{chains:eg(e,null==(t=n[c])?void 0:t.chains),methods:eg(s,null==(r=n[c])?void 0:r.methods),events:eg(l,null==(i=n[c])?void 0:i.events)})}return n}let eF={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},eW={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function ez(e,t){let{message:r,code:i}=eW[e];return{message:t?`${r} ${t}`:r,code:i}}function eH(e,t){let{message:r,code:i}=eF[e];return{message:t?`${r} ${t}`:r,code:i}}function eq(e,t){return!!Array.isArray(e)&&(!("u">typeof t)||!e.length||e.every(t))}function eG(e){return Object.getPrototypeOf(e)===Object.prototype&&Object.keys(e).length}function eV(e){return typeof e>"u"}function eZ(e,t){return!!(t&&eV(e))||"string"==typeof e&&!!e.trim().length}function eK(e,t){return!!(t&&eV(e))||"number"==typeof e&&!isNaN(e)}function eY(e,t){let{requiredNamespaces:r}=t,i=Object.keys(e.namespaces),n=Object.keys(r),o=!0;return!!ei(n,i)&&(i.forEach(t=>{let{accounts:i,methods:n,events:a}=e.namespaces[t],s=eM(i),l=r[t];ei(S(t,l),s)&&ei(l.methods,n)&&ei(l.events,a)||(o=!1)}),o)}function eQ(e){return!!(eZ(e,!1)&&e.includes(":"))&&2===e.split(":").length}function eX(e){if(eZ(e,!1))try{return"u">typeof new URL(e)}catch{}return!1}function eJ(e){var t;return null==(t=e?.proposer)?void 0:t.publicKey}function e0(e){return e?.topic}function e1(e,t){let r=null;return eZ(e?.publicKey,!1)||(r=ez("MISSING_OR_INVALID",`${t} controller public key should be a string`)),r}function e2(e){let t=!0;return eq(e)?e.length&&(t=e.every(e=>eZ(e,!1))):t=!1,t}function e3(e,t){let r=null;return Object.values(e).forEach(e=>{var i;let n;if(r)return;let o=(i=`${t}, namespace`,n=null,e2(e?.methods)?e2(e?.events)||(n=eH("UNSUPPORTED_EVENTS",`${i}, events should be an array of strings or empty array for no events`)):n=eH("UNSUPPORTED_METHODS",`${i}, methods should be an array of strings or empty array for no methods`),n);o&&(r=o)}),r}function e5(e,t,r){let i=null;if(e&&eG(e)){let n;let o=e3(e,t);o&&(i=o);let a=(n=null,Object.entries(e).forEach(([e,i])=>{var o,a;let s;if(n)return;let l=(o=S(e,i),a=`${t} ${r}`,s=null,eq(o)&&o.length?o.forEach(e=>{s||eQ(e)||(s=eH("UNSUPPORTED_CHAINS",`${a}, chain ${e} should be a string and conform to "namespace:chainId" format`))}):eQ(e)||(s=eH("UNSUPPORTED_CHAINS",`${a}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),s);l&&(n=l)}),n);a&&(i=a)}else i=ez("MISSING_OR_INVALID",`${t}, ${r} should be an object with data`);return i}function e4(e,t){let r=null;if(e&&eG(e)){let i;let n=e3(e,t);n&&(r=n);let o=(i=null,Object.values(e).forEach(e=>{var r,n;let o;if(i)return;let a=(r=e?.accounts,n=`${t} namespace`,o=null,eq(r)?r.forEach(e=>{o||function(e){if(eZ(e,!1)&&e.includes(":")){let t=e.split(":");if(3===t.length){let e=t[0]+":"+t[1];return!!t[2]&&eQ(e)}}return!1}(e)||(o=eH("UNSUPPORTED_ACCOUNTS",`${n}, account ${e} should be a string and conform to "namespace:chainId:address" format`))}):o=eH("UNSUPPORTED_ACCOUNTS",`${n}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),o);a&&(i=a)}),i);o&&(r=o)}else r=ez("MISSING_OR_INVALID",`${t}, namespaces should be an object with data`);return r}function e6(e){return eZ(e.protocol,!0)}function e8(e,t){let r=!1;return t&&!e?r=!0:e&&eq(e)&&e.length&&e.forEach(e=>{r=e6(e)}),r}function e9(e){return"number"==typeof e}function e7(e){return"u">typeof e}function te(e){return!(!e||"object"!=typeof e||!e.code||!eK(e.code,!1)||!e.message||!eZ(e.message,!1))}function tt(e){return!(eV(e)||!eZ(e.method,!1))}function tr(e){return!(eV(e)||eV(e.result)&&eV(e.error)||!eK(e.id,!1)||!eZ(e.jsonrpc,!1))}function ti(e){return!(eV(e)||!eZ(e.name,!1))}function tn(e,t){return!(!eQ(t)||!(function(e){let t=[];return Object.values(e).forEach(e=>{t.push(...eM(e.accounts))}),t})(e).includes(t))}function to(e,t,r){return!!eZ(r,!1)&&(function(e,t){let r=[];return Object.values(e).forEach(e=>{eM(e.accounts).includes(t)&&r.push(...e.methods)}),r})(e,t).includes(r)}function ta(e,t,r){return!!eZ(r,!1)&&(function(e,t){let r=[];return Object.values(e).forEach(e=>{eM(e.accounts).includes(t)&&r.push(...e.events)}),r})(e,t).includes(r)}function ts(e,t,r){let i=null,n=function(e){let t={};return Object.keys(e).forEach(r=>{var i;r.includes(":")?t[r]=e[r]:null==(i=e[r].chains)||i.forEach(i=>{t[i]={methods:e[r].methods,events:e[r].events}})}),t}(e),o=function(e){let t={};return Object.keys(e).forEach(r=>{if(r.includes(":"))t[r]=e[r];else{let i=eM(e[r].accounts);i?.forEach(i=>{t[i]={accounts:e[r].accounts.filter(e=>e.includes(`${i}:`)),methods:e[r].methods,events:e[r].events}})}}),t}(t),a=Object.keys(n),s=Object.keys(o),l=tl(Object.keys(e)),c=tl(Object.keys(t)),u=l.filter(e=>!c.includes(e));return u.length&&(i=ez("NON_CONFORMING_NAMESPACES",`${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${u.toString()}
      Received: ${Object.keys(t).toString()}`)),ei(a,s)||(i=ez("NON_CONFORMING_NAMESPACES",`${r} namespaces chains don't satisfy required namespaces.
      Required: ${a.toString()}
      Approved: ${s.toString()}`)),Object.keys(t).forEach(e=>{if(!e.includes(":")||i)return;let n=eM(t[e].accounts);n.includes(e)||(i=ez("NON_CONFORMING_NAMESPACES",`${r} namespaces accounts don't satisfy namespace accounts for ${e}
        Required: ${e}
        Approved: ${n.toString()}`))}),a.forEach(e=>{i||(ei(n[e].methods,o[e].methods)?ei(n[e].events,o[e].events)||(i=ez("NON_CONFORMING_NAMESPACES",`${r} namespaces events don't satisfy namespace events for ${e}`)):i=ez("NON_CONFORMING_NAMESPACES",`${r} namespaces methods don't satisfy namespace methods for ${e}`))}),i}function tl(e){return[...new Set(e.map(e=>e.includes(":")?e.split(":")[0]:e))]}function tc(e,t){return eK(e,!1)&&e<=t.max&&e>=t.min}function tu(){let e=ee();return new Promise(t=>{switch(e){case Y.browser:t(J()&&navigator?.onLine);break;case Y.reactNative:t(th());break;case Y.node:default:t(!0)}})}async function th(){if(X()&&"u">typeof global&&null!=global&&global.NetInfo){let e=await (null==global?void 0:global.NetInfo.fetch());return e?.isConnected}return!0}function td(e){switch(ee()){case Y.browser:!X()&&J()&&(window.addEventListener("online",()=>e(!0)),window.addEventListener("offline",()=>e(!1)));break;case Y.reactNative:X()&&"u">typeof global&&null!=global&&global.NetInfo&&global?.NetInfo.addEventListener(t=>e(t?.isConnected));case Y.node:}}let tf={};class tp{static get(e){return tf[e]}static set(e,t){tf[e]=t}static delete(e){delete tf[e]}}},95117:(e,t,r)=>{"use strict";let i=r(33753),n=r(26359),o=r(20498),a=r(16223),s=e=>null==e,l=Symbol("encodeFragmentIdentifier");function c(e){if("string"!=typeof e||1!==e.length)throw TypeError("arrayFormatSeparator must be single character string")}function u(e,t){return t.encode?t.strict?i(e):encodeURIComponent(e):e}function h(e,t){return t.decode?n(e):e}function d(e){let t=e.indexOf("#");return -1!==t&&(e=e.slice(0,t)),e}function f(e){e=d(e);let t=e.indexOf("?");return -1===t?"":e.slice(t+1)}function p(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):t.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())&&(e="true"===e.toLowerCase()),e}function g(e,t){c((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);let r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,i)=>{if(t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),!t){i[e]=r;return}void 0===i[e]&&(i[e]={}),i[e][t[1]]=r};case"bracket":return(e,r,i)=>{if(t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),!t){i[e]=r;return}if(void 0===i[e]){i[e]=[r];return}i[e]=[].concat(i[e],r)};case"colon-list-separator":return(e,r,i)=>{if(t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),!t){i[e]=r;return}if(void 0===i[e]){i[e]=[r];return}i[e]=[].concat(i[e],r)};case"comma":case"separator":return(t,r,i)=>{let n="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!n&&h(r,e).includes(e.arrayFormatSeparator);r=o?h(r,e):r;let a=n||o?r.split(e.arrayFormatSeparator).map(t=>h(t,e)):null===r?r:h(r,e);i[t]=a};case"bracket-separator":return(t,r,i)=>{let n=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!n){i[t]=r?h(r,e):r;return}let o=null===r?[]:r.split(e.arrayFormatSeparator).map(t=>h(t,e));if(void 0===i[t]){i[t]=o;return}i[t]=[].concat(i[t],o)};default:return(e,t,r)=>{if(void 0===r[e]){r[e]=t;return}r[e]=[].concat(r[e],t)}}}(t),i=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return i;for(let n of e.split("&")){if(""===n)continue;let[e,a]=o(t.decode?n.replace(/\+/g," "):n,"=");a=void 0===a?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?a:h(a,t),r(h(e,t),a,i)}for(let e of Object.keys(i)){let r=i[e];if("object"==typeof r&&null!==r)for(let e of Object.keys(r))r[e]=p(r[e],t);else i[e]=p(r,t)}return!1===t.sort?i:(!0===t.sort?Object.keys(i).sort():Object.keys(i).sort(t.sort)).reduce((e,t)=>{let r=i[t];return r&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(r):e[t]=r,e},Object.create(null))}t.extract=f,t.parse=g,t.stringify=(e,t)=>{if(!e)return"";c((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);let r=r=>t.skipNull&&s(e[r])||t.skipEmptyString&&""===e[r],i=function(e){switch(e.arrayFormat){case"index":return t=>(r,i)=>{let n=r.length;return void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?r:null===i?[...r,[u(t,e),"[",n,"]"].join("")]:[...r,[u(t,e),"[",u(n,e),"]=",u(i,e)].join("")]};case"bracket":return t=>(r,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?r:null===i?[...r,[u(t,e),"[]"].join("")]:[...r,[u(t,e),"[]=",u(i,e)].join("")];case"colon-list-separator":return t=>(r,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?r:null===i?[...r,[u(t,e),":list="].join("")]:[...r,[u(t,e),":list=",u(i,e)].join("")];case"comma":case"separator":case"bracket-separator":{let t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(i,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?i:(n=null===n?"":n,0===i.length)?[[u(r,e),t,u(n,e)].join("")]:[[i,u(n,e)].join(e.arrayFormatSeparator)]}default:return t=>(r,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?r:null===i?[...r,u(t,e)]:[...r,[u(t,e),"=",u(i,e)].join("")]}}(t),n={};for(let t of Object.keys(e))r(t)||(n[t]=e[t]);let o=Object.keys(n);return!1!==t.sort&&o.sort(t.sort),o.map(r=>{let n=e[r];return void 0===n?"":null===n?u(r,t):Array.isArray(n)?0===n.length&&"bracket-separator"===t.arrayFormat?u(r,t)+"[]":n.reduce(i(r),[]).join("&"):u(r,t)+"="+u(n,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);let[r,i]=o(e,"#");return Object.assign({url:r.split("?")[0]||"",query:g(f(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:h(i,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[l]:!0},r);let i=d(e.url).split("?")[0]||"",n=t.extract(e.url),o=t.parse(n,{sort:!1}),a=Object.assign(o,e.query),s=t.stringify(a,r);s&&(s=`?${s}`);let c=function(e){let t="",r=e.indexOf("#");return -1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(c=`#${r[l]?u(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${i}${s}${c}`},t.pick=(e,r,i)=>{i=Object.assign({parseFragmentIdentifier:!0,[l]:!1},i);let{url:n,query:o,fragmentIdentifier:s}=t.parseUrl(e,i);return t.stringifyUrl({url:n,query:a(o,r),fragmentIdentifier:s},i)},t.exclude=(e,r,i)=>{let n=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,n,i)}},84957:(e,t)=>{"use strict";function r(e){}function i(e){let t=r(e);if(!t)throw Error(`${e} is not defined in Window`);return t}Object.defineProperty(t,"__esModule",{value:!0}),t.getLocalStorage=t.getLocalStorageOrThrow=t.getCrypto=t.getCryptoOrThrow=t.getLocation=t.getLocationOrThrow=t.getNavigator=t.getNavigatorOrThrow=t.getDocument=t.getDocumentOrThrow=t.getFromWindowOrThrow=t.getFromWindow=void 0,t.getFromWindow=r,t.getFromWindowOrThrow=i,t.getDocumentOrThrow=function(){return i("document")},t.getDocument=function(){return r("document")},t.getNavigatorOrThrow=function(){return i("navigator")},t.getNavigator=function(){return r("navigator")},t.getLocationOrThrow=function(){return i("location")},t.getLocation=function(){return r("location")},t.getCryptoOrThrow=function(){return i("crypto")},t.getCrypto=function(){return r("crypto")},t.getLocalStorageOrThrow=function(){return i("localStorage")},t.getLocalStorage=function(){return r("localStorage")}},76739:(e,t,r)=>{"use strict";t.D=void 0;let i=r(84957);t.D=function(){let e,t,r;try{e=i.getDocumentOrThrow(),t=i.getLocationOrThrow()}catch(e){return null}function n(...t){let r=e.getElementsByTagName("meta");for(let e=0;e<r.length;e++){let i=r[e],n=["itemprop","property","name"].map(e=>i.getAttribute(e)).filter(e=>!!e&&t.includes(e));if(n.length&&n){let e=i.getAttribute("content");if(e)return e}}return""}let o=((r=n("name","og:site_name","og:title","twitter:title"))||(r=e.title),r),a=function(){let e=n("description","og:description","twitter:description","keywords");return e}(),s=t.origin,l=function(){let r=e.getElementsByTagName("link"),i=[];for(let e=0;e<r.length;e++){let n=r[e],o=n.getAttribute("rel");if(o&&o.toLowerCase().indexOf("icon")>-1){let e=n.getAttribute("href");if(e){if(-1===e.toLowerCase().indexOf("https:")&&-1===e.toLowerCase().indexOf("http:")&&0!==e.indexOf("//")){let r=t.protocol+"//"+t.host;if(0===e.indexOf("/"))r+=e;else{let i=t.pathname.split("/");i.pop();let n=i.join("/");r+=n+"/"+e}i.push(r)}else if(0===e.indexOf("//")){let r=t.protocol+e;i.push(r)}else i.push(e)}}}return i}();return{description:a,url:s,icons:l,name:o}}},63616:e=>{"use strict";e.exports={mask:(e,t,r,i,n)=>{for(var o=0;o<n;o++)r[i+o]=e[o]^t[3&o]},unmask:(e,t)=>{let r=e.length;for(var i=0;i<r;i++)e[i]^=t[3&i]}}},61413:(e,t,r)=>{"use strict";try{e.exports=r(25266)(__dirname)}catch(t){e.exports=r(63616)}},30362:e=>{"use strict";e.exports=function(){var e="millisecond",t="second",r="minute",i="hour",n="week",o="month",a="quarter",s="year",l="date",c="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=function(e,t,r){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(r)+e},f="en",p={};p[f]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||"th")+"]"}};var g="$isDayjsObject",m=function(e){return e instanceof v||!(!e||!e[g])},b=function e(t,r,i){var n;if(!t)return f;if("string"==typeof t){var o=t.toLowerCase();p[o]&&(n=o),r&&(p[o]=r,n=o);var a=t.split("-");if(!n&&a.length>1)return e(a[0])}else{var s=t.name;p[s]=t,n=s}return!i&&n&&(f=n),n||!i&&f},w=function(e,t){if(m(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new v(r)},y={s:d,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+d(Math.floor(r/60),2,"0")+":"+d(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var i=12*(r.year()-t.year())+(r.month()-t.month()),n=t.clone().add(i,o),a=r-n<0,s=t.clone().add(i+(a?-1:1),o);return+(-(i+(r-n)/(a?n-s:s-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(c){return({M:o,y:s,w:n,d:"day",D:l,h:i,m:r,s:t,ms:e,Q:a})[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};y.l=b,y.i=m,y.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var v=function(){function d(e){this.$L=b(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[g]=!0}var f=d.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(y.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(u);if(i){var n=i[2]-1||0,o=(i[7]||"0").substring(0,3);return r?new Date(Date.UTC(i[1],n,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)):new Date(i[1],n,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)}}return new Date(t)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return y},f.isValid=function(){return this.$d.toString()!==c},f.isSame=function(e,t){var r=w(e);return this.startOf(t)<=r&&r<=this.endOf(t)},f.isAfter=function(e,t){return w(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<w(e)},f.$g=function(e,t,r){return y.u(e)?this[t]:this.set(r,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,a){var c=this,u=!!y.u(a)||a,h=y.p(e),d=function(e,t){var r=y.w(c.$u?Date.UTC(c.$y,t,e):new Date(c.$y,t,e),c);return u?r:r.endOf("day")},f=function(e,t){return y.w(c.toDate()[e].apply(c.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),c)},p=this.$W,g=this.$M,m=this.$D,b="set"+(this.$u?"UTC":"");switch(h){case s:return u?d(1,0):d(31,11);case o:return u?d(1,g):d(0,g+1);case n:var w=this.$locale().weekStart||0,v=(p<w?p+7:p)-w;return d(u?m-v:m+(6-v),g);case"day":case l:return f(b+"Hours",0);case i:return f(b+"Minutes",1);case r:return f(b+"Seconds",2);case t:return f(b+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(n,a){var c,u=y.p(n),h="set"+(this.$u?"UTC":""),d=((c={}).day=h+"Date",c[l]=h+"Date",c[o]=h+"Month",c[s]=h+"FullYear",c[i]=h+"Hours",c[r]=h+"Minutes",c[t]=h+"Seconds",c[e]=h+"Milliseconds",c)[u],f="day"===u?this.$D+(a-this.$W):a;if(u===o||u===s){var p=this.clone().set(l,1);p.$d[d](f),p.init(),this.$d=p.set(l,Math.min(this.$D,p.daysInMonth())).$d}else d&&this.$d[d](f);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[y.p(e)]()},f.add=function(e,a){var l,c=this;e=Number(e);var u=y.p(a),h=function(t){var r=w(c);return y.w(r.date(r.date()+Math.round(t*e)),c)};if(u===o)return this.set(o,this.$M+e);if(u===s)return this.set(s,this.$y+e);if("day"===u)return h(1);if(u===n)return h(7);var d=((l={})[r]=6e4,l[i]=36e5,l[t]=1e3,l)[u]||1,f=this.$d.getTime()+e*d;return y.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||c;var i=e||"YYYY-MM-DDTHH:mm:ssZ",n=y.z(this),o=this.$H,a=this.$m,s=this.$M,l=r.weekdays,u=r.months,d=r.meridiem,f=function(e,r,n,o){return e&&(e[r]||e(t,i))||n[r].slice(0,o)},p=function(e){return y.s(o%12||12,e,"0")},g=d||function(e,t,r){var i=e<12?"AM":"PM";return r?i.toLowerCase():i};return i.replace(h,function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return y.s(t.$y,4,"0");case"M":return s+1;case"MM":return y.s(s+1,2,"0");case"MMM":return f(r.monthsShort,s,u,3);case"MMMM":return f(u,s);case"D":return t.$D;case"DD":return y.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return f(r.weekdaysMin,t.$W,l,2);case"ddd":return f(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return y.s(o,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return g(o,a,!0);case"A":return g(o,a,!1);case"m":return String(a);case"mm":return y.s(a,2,"0");case"s":return String(t.$s);case"ss":return y.s(t.$s,2,"0");case"SSS":return y.s(t.$ms,3,"0");case"Z":return n}return null}(e)||n.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(e,l,c){var u,h=this,d=y.p(l),f=w(e),p=(f.utcOffset()-this.utcOffset())*6e4,g=this-f,m=function(){return y.m(h,f)};switch(d){case s:u=m()/12;break;case o:u=m();break;case a:u=m()/3;break;case n:u=(g-p)/6048e5;break;case"day":u=(g-p)/864e5;break;case i:u=g/36e5;break;case r:u=g/6e4;break;case t:u=g/1e3;break;default:u=g}return c?u:y.a(u)},f.daysInMonth=function(){return this.endOf(o).$D},f.$locale=function(){return p[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),i=b(e,t,!0);return i&&(r.$L=i),r},f.clone=function(){return y.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},d}(),x=v.prototype;return w.prototype=x,[["$ms",e],["$s",t],["$m",r],["$H",i],["$W","day"],["$M",o],["$y",s],["$D",l]].forEach(function(e){x[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),w.extend=function(e,t){return e.$i||(e(t,v,w),e.$i=!0),w},w.locale=b,w.isDayjs=m,w.unix=function(e){return w(1e3*e)},w.en=p[f],w.Ls=p,w.p={},w}()},38285:e=>{"use strict";e.exports=function(e,t,r){e=e||{};var i=t.prototype,n={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(e,t,r,n){return i.fromToBase(e,t,r,n)}r.en.relativeTime=n,i.fromToBase=function(t,i,o,a,s){for(var l,c,u,h=o.$locale().relativeTime||n,d=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=d.length,p=0;p<f;p+=1){var g=d[p];g.d&&(l=a?r(t).diff(o,g.d,!0):o.diff(t,g.d,!0));var m=(e.rounding||Math.round)(Math.abs(l));if(u=l>0,m<=g.r||!g.r){m<=1&&p>0&&(g=d[p-1]);var b=h[g.l];s&&(m=s(""+m)),c="string"==typeof b?b.replace("%d",m):b(m,i,g.l,u);break}}if(i)return c;var w=u?h.future:h.past;return"function"==typeof w?w(c):w.replace("%s",c)},i.to=function(e,t){return o(e,t,this,!0)},i.from=function(e,t){return o(e,t,this)};var a=function(e){return e.$u?r.utc():r()};i.toNow=function(e){return this.to(a(this),e)},i.fromNow=function(e){return this.from(a(this),e)}}},73850:e=>{"use strict";e.exports=function(e,t,r){r.updateLocale=function(e,t){var i=r.Ls[e];if(i)return(t?Object.keys(t):[]).forEach(function(e){i[e]=t[e]}),i}}},26359:e=>{"use strict";var t="%[a-f0-9]{2}",r=RegExp("("+t+")|([^%]+?)","gi"),i=RegExp("("+t+")+","gi");e.exports=function(e){if("string"!=typeof e)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=i.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var o=function(e){try{return decodeURIComponent(e)}catch(n){for(var t=e.match(r)||[],i=1;i<t.length;i++)t=(e=(function e(t,r){try{return[decodeURIComponent(t.join(""))]}catch(e){}if(1===t.length)return t;r=r||1;var i=t.slice(0,r),n=t.slice(r);return Array.prototype.concat.call([],e(i),e(n))})(t,i).join("")).match(r)||[];return e}}(n[0]);o!==n[0]&&(t[n[0]]=o)}n=i.exec(e)}t["%C2"]="�";for(var a=Object.keys(t),s=0;s<a.length;s++){var l=a[s];e=e.replace(RegExp(l,"g"),t[l])}return e}(e)}}},19638:e=>{"use strict";var t={single_source_shortest_paths:function(e,r,i){var n,o,a,s,l,c,u,h={},d={};d[r]=0;var f=t.PriorityQueue.make();for(f.push(r,0);!f.empty();)for(a in o=(n=f.pop()).value,s=n.cost,l=e[o]||{})l.hasOwnProperty(a)&&(c=s+l[a],u=d[a],(void 0===d[a]||u>c)&&(d[a]=c,f.push(a,c),h[a]=o));if(void 0!==i&&void 0===d[i])throw Error(["Could not find a path from ",r," to ",i,"."].join(""));return h},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],i=t;i;)r.push(i),e[i],i=e[i];return r.reverse(),r},find_path:function(e,r,i){var n=t.single_source_shortest_paths(e,r,i);return t.extract_shortest_path_from_predecessor_list(n,i)},PriorityQueue:{make:function(e){var r,i=t.PriorityQueue,n={};for(r in e=e||{},i)i.hasOwnProperty(r)&&(n[r]=i[r]);return n.queue=[],n.sorter=e.sorter||i.default_sorter,n},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},90791:e=>{"use strict";e.exports=function(e){for(var t=[],r=e.length,i=0;i<r;i++){var n=e.charCodeAt(i);if(n>=55296&&n<=56319&&r>i+1){var o=e.charCodeAt(i+1);o>=56320&&o<=57343&&(n=(n-55296)*1024+o-56320+65536,i+=1)}if(n<128){t.push(n);continue}if(n<2048){t.push(n>>6|192),t.push(63&n|128);continue}if(n<55296||n>=57344&&n<65536){t.push(n>>12|224),t.push(n>>6&63|128),t.push(63&n|128);continue}if(n>=65536&&n<=1114111){t.push(n>>18|240),t.push(n>>12&63|128),t.push(n>>6&63|128),t.push(63&n|128);continue}t.push(239,191,189)}return new Uint8Array(t).buffer}},6297:e=>{"use strict";var t=Object.prototype.hasOwnProperty,r="~";function i(){}function n(e,t,r){this.fn=e,this.context=t,this.once=r||!1}function o(e,t,i,o,a){if("function"!=typeof i)throw TypeError("The listener must be a function");var s=new n(i,o||e,a),l=r?r+t:t;return e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],s]:e._events[l].push(s):(e._events[l]=s,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new i:delete e._events[t]}function s(){this._events=new i,this._eventsCount=0}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(r=!1)),s.prototype.eventNames=function(){var e,i,n=[];if(0===this._eventsCount)return n;for(i in e=this._events)t.call(e,i)&&n.push(r?i.slice(1):i);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},s.prototype.listeners=function(e){var t=r?r+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var n=0,o=i.length,a=Array(o);n<o;n++)a[n]=i[n].fn;return a},s.prototype.listenerCount=function(e){var t=r?r+e:e,i=this._events[t];return i?i.fn?1:i.length:0},s.prototype.emit=function(e,t,i,n,o,a){var s=r?r+e:e;if(!this._events[s])return!1;var l,c,u=this._events[s],h=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),h){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,i),!0;case 4:return u.fn.call(u.context,t,i,n),!0;case 5:return u.fn.call(u.context,t,i,n,o),!0;case 6:return u.fn.call(u.context,t,i,n,o,a),!0}for(c=1,l=Array(h-1);c<h;c++)l[c-1]=arguments[c];u.fn.apply(u.context,l)}else{var d,f=u.length;for(c=0;c<f;c++)switch(u[c].once&&this.removeListener(e,u[c].fn,void 0,!0),h){case 1:u[c].fn.call(u[c].context);break;case 2:u[c].fn.call(u[c].context,t);break;case 3:u[c].fn.call(u[c].context,t,i);break;case 4:u[c].fn.call(u[c].context,t,i,n);break;default:if(!l)for(d=1,l=Array(h-1);d<h;d++)l[d-1]=arguments[d];u[c].fn.apply(u[c].context,l)}}return!0},s.prototype.on=function(e,t,r){return o(this,e,t,r,!1)},s.prototype.once=function(e,t,r){return o(this,e,t,r,!0)},s.prototype.removeListener=function(e,t,i,n){var o=r?r+e:e;if(!this._events[o])return this;if(!t)return a(this,o),this;var s=this._events[o];if(s.fn)s.fn!==t||n&&!s.once||i&&s.context!==i||a(this,o);else{for(var l=0,c=[],u=s.length;l<u;l++)(s[l].fn!==t||n&&!s[l].once||i&&s[l].context!==i)&&c.push(s[l]);c.length?this._events[o]=1===c.length?c[0]:c:a(this,o)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&a(this,t)):(this._events=new i,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=r,s.EventEmitter=s,e.exports=s},16223:e=>{"use strict";e.exports=function(e,t){for(var r={},i=Object.keys(e),n=Array.isArray(t),o=0;o<i.length;o++){var a=i[o],s=e[a];(n?-1!==t.indexOf(a):t(a,s,e))&&(r[a]=s)}return r}},5767:(e,t)=>{"use strict";var r;/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */!function(t,r){"object"==typeof e.exports?e.exports=t.document?r(t,!0):function(e){if(!e.document)throw Error("jQuery requires a window with a document");return r(e)}:r(t)}(void 0,function(i,n){var o,a=[],s=Object.getPrototypeOf,l=a.slice,c=a.flat?function(e){return a.flat.call(e)}:function(e){return a.concat.apply([],e)},u=a.push,h=a.indexOf,d={},f=d.toString,p=d.hasOwnProperty,g=p.toString,m=g.call(Object),b={},w=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},v=i.document,x={type:!0,src:!0,nonce:!0,noModule:!0};function C(e,t,r){var i,n,o=(r=r||v).createElement("script");if(o.text=e,t)for(i in x)(n=t[i]||t.getAttribute&&t.getAttribute(i))&&o.setAttribute(i,n);r.head.appendChild(o).parentNode.removeChild(o)}function _(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?d[f.call(e)]||"object":typeof e}var E="3.7.1",k=/HTML$/i,S=function(e,t){return new S.fn.init(e,t)};function O(e){var t=!!e&&"length"in e&&e.length,r=_(e);return!(w(e)||y(e))&&("array"===r||0===t||"number"==typeof t&&t>0&&t-1 in e)}function D(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}S.fn=S.prototype={jquery:E,constructor:S,length:0,toArray:function(){return l.call(this)},get:function(e){return null==e?l.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(e){return this.pushStack(S.map(this,function(t,r){return e.call(t,r,t)}))},slice:function(){return this.pushStack(l.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,r=+e+(e<0?t:0);return this.pushStack(r>=0&&r<t?[this[r]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:a.sort,splice:a.splice},S.extend=S.fn.extend=function(){var e,t,r,i,n,o,a=arguments[0]||{},s=1,l=arguments.length,c=!1;for("boolean"==typeof a&&(c=a,a=arguments[s]||{},s++),"object"==typeof a||w(a)||(a={}),s===l&&(a=this,s--);s<l;s++)if(null!=(e=arguments[s]))for(t in e)i=e[t],"__proto__"!==t&&a!==i&&(c&&i&&(S.isPlainObject(i)||(n=Array.isArray(i)))?(r=a[t],o=n&&!Array.isArray(r)?[]:n||S.isPlainObject(r)?r:{},n=!1,a[t]=S.extend(c,o,i)):void 0!==i&&(a[t]=i));return a},S.extend({expando:"jQuery"+(E+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw Error(e)},noop:function(){},isPlainObject:function(e){var t,r;return!!e&&"[object Object]"===f.call(e)&&(!(t=s(e))||"function"==typeof(r=p.call(t,"constructor")&&t.constructor)&&g.call(r)===m)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,r){C(e,{nonce:t&&t.nonce},r)},each:function(e,t){var r,i=0;if(O(e))for(r=e.length;i<r&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},text:function(e){var t,r="",i=0,n=e.nodeType;if(!n)for(;t=e[i++];)r+=S.text(t);return 1===n||11===n?e.textContent:9===n?e.documentElement.textContent:3===n||4===n?e.nodeValue:r},makeArray:function(e,t){var r=t||[];return null!=e&&(O(Object(e))?S.merge(r,"string"==typeof e?[e]:e):u.call(r,e)),r},inArray:function(e,t,r){return null==t?-1:h.call(t,e,r)},isXMLDoc:function(e){var t=e&&e.namespaceURI,r=e&&(e.ownerDocument||e).documentElement;return!k.test(t||r&&r.nodeName||"HTML")},merge:function(e,t){for(var r=+t.length,i=0,n=e.length;i<r;i++)e[n++]=t[i];return e.length=n,e},grep:function(e,t,r){for(var i=[],n=0,o=e.length,a=!r;n<o;n++)!t(e[n],n)!==a&&i.push(e[n]);return i},map:function(e,t,r){var i,n,o=0,a=[];if(O(e))for(i=e.length;o<i;o++)null!=(n=t(e[o],o,r))&&a.push(n);else for(o in e)null!=(n=t(e[o],o,r))&&a.push(n);return c(a)},guid:1,support:b}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=a[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){d["[object "+t+"]"]=t.toLowerCase()});var P=a.pop,A=a.sort,T=a.splice,$="[\\x20\\t\\r\\n\\f]",I=RegExp("^"+$+"+|((?:^|[^\\\\])(?:\\\\.)*)"+$+"+$","g");S.contains=function(e,t){var r=t&&t.parentNode;return e===r||!!(r&&1===r.nodeType&&(e.contains?e.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))};var N=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function R(e,t){return t?"\x00"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}S.escapeSelector=function(e){return(e+"").replace(N,R)},function(){var e,t,r,n,o,s,c,d,f,g,m=u,w=S.expando,y=0,x=0,C=ee(),_=ee(),E=ee(),k=ee(),O=function(e,t){return e===t&&(o=!0),0},N="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",R="(?:\\\\[\\da-fA-F]{1,6}"+$+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+",M="\\["+$+"*("+R+")(?:"+$+"*([*^$|!~]?=)"+$+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+$+"*\\]",j=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",L=RegExp($+"+","g"),B=RegExp("^"+$+"*,"+$+"*"),U=RegExp("^"+$+"*([>+~]|"+$+")"+$+"*"),F=RegExp($+"|>"),W=new RegExp(j),z=RegExp("^"+R+"$"),H={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R+"|[*])"),ATTR:RegExp("^"+M),PSEUDO:RegExp("^"+j),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+$+"*(even|odd|(([+-]|)(\\d*)n|)"+$+"*(?:([+-]|)"+$+"*(\\d+)|))"+$+"*\\)|)","i"),bool:RegExp("^(?:"+N+")$","i"),needsContext:RegExp("^"+$+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+$+"*((?:-\\d)?\\d*)"+$+"*\\)|)(?=[^-]|$)","i")},q=/^(?:input|select|textarea|button)$/i,G=/^h\d$/i,V=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/[+~]/,K=RegExp("\\\\[\\da-fA-F]{1,6}"+$+"?|\\\\([^\\r\\n\\f])","g"),Y=function(e,t){var r="0x"+e.slice(1)-65536;return t||(r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320))},Q=function(){ea()},X=eu(function(e){return!0===e.disabled&&D(e,"fieldset")},{dir:"parentNode",next:"legend"});try{m.apply(a=l.call(v.childNodes),v.childNodes),a[v.childNodes.length].nodeType}catch(e){m={apply:function(e,t){u.apply(e,l.call(t))},call:function(e){u.apply(e,l.call(arguments,1))}}}function J(e,t,r,i){var n,o,a,l,c,u,h,p=t&&t.ownerDocument,g=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==g&&9!==g&&11!==g)return r;if(!i&&(ea(t),t=t||s,d)){if(11!==g&&(c=V.exec(e))){if(n=c[1]){if(9===g){if(!(a=t.getElementById(n)))return r;if(a.id===n)return m.call(r,a),r}else if(p&&(a=p.getElementById(n))&&J.contains(t,a)&&a.id===n)return m.call(r,a),r}else if(c[2])return m.apply(r,t.getElementsByTagName(e)),r;else if((n=c[3])&&t.getElementsByClassName)return m.apply(r,t.getElementsByClassName(n)),r}if(!k[e+" "]&&(!f||!f.test(e))){if(h=e,p=t,1===g&&(F.test(e)||U.test(e))){for((p=Z.test(e)&&eo(t.parentNode)||t)==t&&b.scope||((l=t.getAttribute("id"))?l=S.escapeSelector(l):t.setAttribute("id",l=w)),o=(u=el(e)).length;o--;)u[o]=(l?"#"+l:":scope")+" "+ec(u[o]);h=u.join(",")}try{return m.apply(r,p.querySelectorAll(h)),r}catch(t){k(e,!0)}finally{l===w&&t.removeAttribute("id")}}}return ep(e.replace(I,"$1"),t,r,i)}function ee(){var e=[];return function r(i,n){return e.push(i+" ")>t.cacheLength&&delete r[e.shift()],r[i+" "]=n}}function et(e){return e[w]=!0,e}function er(e){var t=s.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ei(e){return function(t){if("form"in t)return t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||!e!==t.isDisabled&&X(t)===e:t.disabled===e;return"label"in t&&t.disabled===e}}function en(e){return et(function(t){return t=+t,et(function(r,i){for(var n,o=e([],r.length,t),a=o.length;a--;)r[n=o[a]]&&(r[n]=!(i[n]=r[n]))})})}function eo(e){return e&&void 0!==e.getElementsByTagName&&e}function ea(e){var r,i=e?e.ownerDocument||e:v;return i!=s&&9===i.nodeType&&i.documentElement&&(c=(s=i).documentElement,d=!S.isXMLDoc(s),g=c.matches||c.webkitMatchesSelector||c.msMatchesSelector,c.msMatchesSelector&&v!=s&&(r=s.defaultView)&&r.top!==r&&r.addEventListener("unload",Q),b.getById=er(function(e){return c.appendChild(e).id=S.expando,!s.getElementsByName||!s.getElementsByName(S.expando).length}),b.disconnectedMatch=er(function(e){return g.call(e,"*")}),b.scope=er(function(){return s.querySelectorAll(":scope")}),b.cssHas=er(function(){try{return s.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),b.getById?(t.filter.ID=function(e){var t=e.replace(K,Y);return function(e){return e.getAttribute("id")===t}},t.find.ID=function(e,t){if(void 0!==t.getElementById&&d){var r=t.getElementById(e);return r?[r]:[]}}):(t.filter.ID=function(e){var t=e.replace(K,Y);return function(e){var r=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return r&&r.value===t}},t.find.ID=function(e,t){if(void 0!==t.getElementById&&d){var r,i,n,o=t.getElementById(e);if(o){if((r=o.getAttributeNode("id"))&&r.value===e)return[o];for(n=t.getElementsByName(e),i=0;o=n[i++];)if((r=o.getAttributeNode("id"))&&r.value===e)return[o]}return[]}}),t.find.TAG=function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},t.find.CLASS=function(e,t){if(void 0!==t.getElementsByClassName&&d)return t.getElementsByClassName(e)},f=[],er(function(e){var t;c.appendChild(e).innerHTML="<a id='"+w+"' href='' disabled='disabled'></a><select id='"+w+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||f.push("\\["+$+"*(?:value|"+N+")"),e.querySelectorAll("[id~="+w+"-]").length||f.push("~="),e.querySelectorAll("a#"+w+"+*").length||f.push(".#.+[+~]"),e.querySelectorAll(":checked").length||f.push(":checked"),(t=s.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),c.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&f.push(":enabled",":disabled"),(t=s.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||f.push("\\["+$+"*name"+$+"*="+$+"*(?:''|\"\")")}),b.cssHas||f.push(":has"),f=f.length&&new RegExp(f.join("|")),O=function(e,t){if(e===t)return o=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!b.sortDetached&&t.compareDocumentPosition(e)===r?e===s||e.ownerDocument==v&&J.contains(v,e)?-1:t===s||t.ownerDocument==v&&J.contains(v,t)?1:n?h.call(n,e)-h.call(n,t):0:4&r?-1:1)}),s}for(e in J.matches=function(e,t){return J(e,null,null,t)},J.matchesSelector=function(e,t){if(ea(e),d&&!k[t+" "]&&(!f||!f.test(t)))try{var r=g.call(e,t);if(r||b.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){k(t,!0)}return J(t,s,null,[e]).length>0},J.contains=function(e,t){return(e.ownerDocument||e)!=s&&ea(e),S.contains(e,t)},J.attr=function(e,r){(e.ownerDocument||e)!=s&&ea(e);var i=t.attrHandle[r.toLowerCase()],n=i&&p.call(t.attrHandle,r.toLowerCase())?i(e,r,!d):void 0;return void 0!==n?n:e.getAttribute(r)},J.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},S.uniqueSort=function(e){var t,r=[],i=0,a=0;if(o=!b.sortStable,n=!b.sortStable&&l.call(e,0),A.call(e,O),o){for(;t=e[a++];)t===e[a]&&(i=r.push(a));for(;i--;)T.call(e,r[i],1)}return n=null,e},S.fn.uniqueSort=function(){return this.pushStack(S.uniqueSort(l.apply(this)))},(t=S.expr={cacheLength:50,createPseudo:et,match:H,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(K,Y),e[3]=(e[3]||e[4]||e[5]||"").replace(K,Y),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||J.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&J.error(e[0]),e},PSEUDO:function(e){var t,r=!e[6]&&e[2];return H.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":r&&W.test(r)&&(t=el(r,!0))&&(t=r.indexOf(")",r.length-t)-r.length)&&(e[0]=e[0].slice(0,t),e[2]=r.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(K,Y).toLowerCase();return"*"===e?function(){return!0}:function(e){return D(e,t)}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+$+")"+e+"("+$+"|$)"),C(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,r){return function(i){var n=J.attr(i,e);return null==n?"!="===t:!t||((n+="","="===t)?n===r:"!="===t?n!==r:"^="===t?r&&0===n.indexOf(r):"*="===t?r&&n.indexOf(r)>-1:"$="===t?r&&n.slice(-r.length)===r:"~="===t?(" "+n.replace(L," ")+" ").indexOf(r)>-1:"|="===t&&(n===r||n.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,r,i,n){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===i&&0===n?function(e){return!!e.parentNode}:function(t,r,l){var c,u,h,d,f,p=o!==a?"nextSibling":"previousSibling",g=t.parentNode,m=s&&t.nodeName.toLowerCase(),b=!l&&!s,v=!1;if(g){if(o){for(;p;){for(h=t;h=h[p];)if(s?D(h,m):1===h.nodeType)return!1;f=p="only"===e&&!f&&"nextSibling"}return!0}if(f=[a?g.firstChild:g.lastChild],a&&b){for(v=(d=(c=(u=g[w]||(g[w]={}))[e]||[])[0]===y&&c[1])&&c[2],h=d&&g.childNodes[d];h=++d&&h&&h[p]||(v=d=0)||f.pop();)if(1===h.nodeType&&++v&&h===t){u[e]=[y,d,v];break}}else if(b&&(v=d=(c=(u=t[w]||(t[w]={}))[e]||[])[0]===y&&c[1]),!1===v)for(;(h=++d&&h&&h[p]||(v=d=0)||f.pop())&&(!((s?D(h,m):1===h.nodeType)&&++v)||(b&&((u=h[w]||(h[w]={}))[e]=[y,v]),h!==t)););return(v-=n)===i||v%i==0&&v/i>=0}}},PSEUDO:function(e,r){var i,n=t.pseudos[e]||t.setFilters[e.toLowerCase()]||J.error("unsupported pseudo: "+e);return n[w]?n(r):n.length>1?(i=[e,e,"",r],t.setFilters.hasOwnProperty(e.toLowerCase())?et(function(e,t){for(var i,o=n(e,r),a=o.length;a--;)i=h.call(e,o[a]),e[i]=!(t[i]=o[a])}):function(e){return n(e,0,i)}):n}},pseudos:{not:et(function(e){var t=[],r=[],i=ef(e.replace(I,"$1"));return i[w]?et(function(e,t,r,n){for(var o,a=i(e,null,n,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,n,o){return t[0]=e,i(t,null,o,r),t[0]=null,!r.pop()}}),has:et(function(e){return function(t){return J(e,t).length>0}}),contains:et(function(e){return e=e.replace(K,Y),function(t){return(t.textContent||S.text(t)).indexOf(e)>-1}}),lang:et(function(e){return z.test(e||"")||J.error("unsupported lang: "+e),e=e.replace(K,Y).toLowerCase(),function(t){var r;do if(r=d?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(r=r.toLowerCase())===e||0===r.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(e){var t=i.location&&i.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===c},focus:function(e){return e===function(){try{return s.activeElement}catch(e){}}()&&s.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:ei(!1),disabled:ei(!0),checked:function(e){return D(e,"input")&&!!e.checked||D(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!t.pseudos.empty(e)},header:function(e){return G.test(e.nodeName)},input:function(e){return q.test(e.nodeName)},button:function(e){return D(e,"input")&&"button"===e.type||D(e,"button")},text:function(e){var t;return D(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:en(function(){return[0]}),last:en(function(e,t){return[t-1]}),eq:en(function(e,t,r){return[r<0?r+t:r]}),even:en(function(e,t){for(var r=0;r<t;r+=2)e.push(r);return e}),odd:en(function(e,t){for(var r=1;r<t;r+=2)e.push(r);return e}),lt:en(function(e,t,r){var i;for(i=r<0?r+t:r>t?t:r;--i>=0;)e.push(i);return e}),gt:en(function(e,t,r){for(var i=r<0?r+t:r;++i<t;)e.push(i);return e})}}).pseudos.nth=t.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})t.pseudos[e]=function(e){return function(t){return D(t,"input")&&t.type===e}}(e);for(e in{submit:!0,reset:!0})t.pseudos[e]=function(e){return function(t){return(D(t,"input")||D(t,"button"))&&t.type===e}}(e);function es(){}function el(e,r){var i,n,o,a,s,l,c,u=_[e+" "];if(u)return r?0:u.slice(0);for(s=e,l=[],c=t.preFilter;s;){for(a in(!i||(n=B.exec(s)))&&(n&&(s=s.slice(n[0].length)||s),l.push(o=[])),i=!1,(n=U.exec(s))&&(i=n.shift(),o.push({value:i,type:n[0].replace(I," ")}),s=s.slice(i.length)),t.filter)(n=H[a].exec(s))&&(!c[a]||(n=c[a](n)))&&(i=n.shift(),o.push({value:i,type:a,matches:n}),s=s.slice(i.length));if(!i)break}return r?s.length:s?J.error(e):_(e,l).slice(0)}function ec(e){for(var t=0,r=e.length,i="";t<r;t++)i+=e[t].value;return i}function eu(e,t,r){var i=t.dir,n=t.next,o=n||i,a=r&&"parentNode"===o,s=x++;return t.first?function(t,r,n){for(;t=t[i];)if(1===t.nodeType||a)return e(t,r,n);return!1}:function(t,r,l){var c,u,h=[y,s];if(l){for(;t=t[i];)if((1===t.nodeType||a)&&e(t,r,l))return!0}else for(;t=t[i];)if(1===t.nodeType||a){if(u=t[w]||(t[w]={}),n&&D(t,n))t=t[i]||t;else if((c=u[o])&&c[0]===y&&c[1]===s)return h[2]=c[2];else if(u[o]=h,h[2]=e(t,r,l))return!0}return!1}}function eh(e){return e.length>1?function(t,r,i){for(var n=e.length;n--;)if(!e[n](t,r,i))return!1;return!0}:e[0]}function ed(e,t,r,i,n){for(var o,a=[],s=0,l=e.length,c=null!=t;s<l;s++)(o=e[s])&&(!r||r(o,i,n))&&(a.push(o),c&&t.push(s));return a}function ef(e,i){var n,o,a,l,c=[],u=[],f=E[e+" "];if(!f){for(i||(i=el(e)),l=i.length;l--;)(f=function e(i){for(var n,o,a,s=i.length,l=t.relative[i[0].type],c=l||t.relative[" "],u=l?1:0,d=eu(function(e){return e===n},c,!0),f=eu(function(e){return h.call(n,e)>-1},c,!0),p=[function(e,t,i){var o=!l&&(i||t!=r)||((n=t).nodeType?d(e,t,i):f(e,t,i));return n=null,o}];u<s;u++)if(o=t.relative[i[u].type])p=[eu(eh(p),o)];else{if((o=t.filter[i[u].type].apply(null,i[u].matches))[w]){for(a=++u;a<s&&!t.relative[i[a].type];a++);return function e(t,r,i,n,o,a){return n&&!n[w]&&(n=e(n)),o&&!o[w]&&(o=e(o,a)),et(function(e,a,s,l){var c,u,d,f,p=[],g=[],b=a.length,w=e||function(e,t,r){for(var i=0,n=t.length;i<n;i++)J(e,t[i],r);return r}(r||"*",s.nodeType?[s]:s,[]),y=t&&(e||!r)?ed(w,p,t,s,l):w;if(i?i(y,f=o||(e?t:b||n)?[]:a,s,l):f=y,n)for(c=ed(f,g),n(c,[],s,l),u=c.length;u--;)(d=c[u])&&(f[g[u]]=!(y[g[u]]=d));if(e){if(o||t){if(o){for(c=[],u=f.length;u--;)(d=f[u])&&c.push(y[u]=d);o(null,f=[],c,l)}for(u=f.length;u--;)(d=f[u])&&(c=o?h.call(e,d):p[u])>-1&&(e[c]=!(a[c]=d))}}else f=ed(f===a?f.splice(b,f.length):f),o?o(null,a,f,l):m.apply(a,f)})}(u>1&&eh(p),u>1&&ec(i.slice(0,u-1).concat({value:" "===i[u-2].type?"*":""})).replace(I,"$1"),o,u<a&&e(i.slice(u,a)),a<s&&e(i=i.slice(a)),a<s&&ec(i))}p.push(o)}return eh(p)}(i[l]))[w]?c.push(f):u.push(f);(f=E(e,(n=c.length>0,o=u.length>0,a=function(e,i,a,l,h){var f,p,g,b=0,w="0",v=e&&[],x=[],C=r,_=e||o&&t.find.TAG("*",h),E=y+=null==C?1:Math.random()||.1,k=_.length;for(h&&(r=i==s||i||h);w!==k&&null!=(f=_[w]);w++){if(o&&f){for(p=0,i||f.ownerDocument==s||(ea(f),a=!d);g=u[p++];)if(g(f,i||s,a)){m.call(l,f);break}h&&(y=E)}n&&((f=!g&&f)&&b--,e&&v.push(f))}if(b+=w,n&&w!==b){for(p=0;g=c[p++];)g(v,x,i,a);if(e){if(b>0)for(;w--;)v[w]||x[w]||(x[w]=P.call(l));x=ed(x)}m.apply(l,x),h&&!e&&x.length>0&&b+c.length>1&&S.uniqueSort(l)}return h&&(y=E,r=C),v},n?et(a):a))).selector=e}return f}function ep(e,r,i,n){var o,a,s,l,c,u="function"==typeof e&&e,h=!n&&el(e=u.selector||e);if(i=i||[],1===h.length){if((a=h[0]=h[0].slice(0)).length>2&&"ID"===(s=a[0]).type&&9===r.nodeType&&d&&t.relative[a[1].type]){if(!(r=(t.find.ID(s.matches[0].replace(K,Y),r)||[])[0]))return i;u&&(r=r.parentNode),e=e.slice(a.shift().value.length)}for(o=H.needsContext.test(e)?0:a.length;o--&&(s=a[o],!t.relative[l=s.type]);)if((c=t.find[l])&&(n=c(s.matches[0].replace(K,Y),Z.test(a[0].type)&&eo(r.parentNode)||r))){if(a.splice(o,1),!(e=n.length&&ec(a)))return m.apply(i,n),i;break}}return(u||ef(e,h))(n,r,!d,i,!r||Z.test(e)&&eo(r.parentNode)||r),i}es.prototype=t.filters=t.pseudos,t.setFilters=new es,b.sortStable=w.split("").sort(O).join("")===w,ea(),b.sortDetached=er(function(e){return 1&e.compareDocumentPosition(s.createElement("fieldset"))}),S.find=J,S.expr[":"]=S.expr.pseudos,S.unique=S.uniqueSort,J.compile=ef,J.select=ep,J.setDocument=ea,J.tokenize=el,J.escape=S.escapeSelector,J.getText=S.text,J.isXML=S.isXMLDoc,J.selectors=S.expr,J.support=S.support,J.uniqueSort=S.uniqueSort}();var M=function(e,t,r){for(var i=[],n=void 0!==r;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(n&&S(e).is(r))break;i.push(e)}return i},j=function(e,t){for(var r=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&r.push(e);return r},L=S.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function U(e,t,r){return w(t)?S.grep(e,function(e,i){return!!t.call(e,i,e)!==r}):t.nodeType?S.grep(e,function(e){return e===t!==r}):"string"!=typeof t?S.grep(e,function(e){return h.call(t,e)>-1!==r}):S.filter(t,e,r)}S.filter=function(e,t,r){var i=t[0];return(r&&(e=":not("+e+")"),1===t.length&&1===i.nodeType)?S.find.matchesSelector(i,e)?[i]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,r,i=this.length,n=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<i;t++)if(S.contains(n[t],this))return!0}));for(t=0,r=this.pushStack([]);t<i;t++)S.find(e,n[t],r);return i>1?S.uniqueSort(r):r},filter:function(e){return this.pushStack(U(this,e||[],!1))},not:function(e){return this.pushStack(U(this,e||[],!0))},is:function(e){return!!U(this,"string"==typeof e&&L.test(e)?S(e):e||[],!1).length}});var F,W=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,r){var i,n;if(!e)return this;if(r=r||F,"string"==typeof e){if((i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:W.exec(e))&&(i[1]||!t)){if(!i[1])return(n=v.getElementById(i[2]))&&(this[0]=n,this.length=1),this;if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:v,!0)),B.test(i[1])&&S.isPlainObject(t))for(i in t)w(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return!t||t.jquery?(t||r).find(e):this.constructor(t).find(e)}return e.nodeType?(this[0]=e,this.length=1,this):w(e)?void 0!==r.ready?r.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,F=S(v);var z=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function q(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}S.fn.extend({has:function(e){var t=S(e,this),r=t.length;return this.filter(function(){for(var e=0;e<r;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var r,i=0,n=this.length,o=[],a="string"!=typeof e&&S(e);if(!L.test(e)){for(;i<n;i++)for(r=this[i];r&&r!==t;r=r.parentNode)if(r.nodeType<11&&(a?a.index(r)>-1:1===r.nodeType&&S.find.matchesSelector(r,e))){o.push(r);break}}return this.pushStack(o.length>1?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?h.call(S(e),this[0]):h.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return M(e,"parentNode")},parentsUntil:function(e,t,r){return M(e,"parentNode",r)},next:function(e){return q(e,"nextSibling")},prev:function(e){return q(e,"previousSibling")},nextAll:function(e){return M(e,"nextSibling")},prevAll:function(e){return M(e,"previousSibling")},nextUntil:function(e,t,r){return M(e,"nextSibling",r)},prevUntil:function(e,t,r){return M(e,"previousSibling",r)},siblings:function(e){return j((e.parentNode||{}).firstChild,e)},children:function(e){return j(e.firstChild)},contents:function(e){return null!=e.contentDocument&&s(e.contentDocument)?e.contentDocument:(D(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(e,t){S.fn[e]=function(r,i){var n=S.map(this,t,r);return"Until"!==e.slice(-5)&&(i=r),i&&"string"==typeof i&&(n=S.filter(i,n)),this.length>1&&(H[e]||S.uniqueSort(n),z.test(e)&&n.reverse()),this.pushStack(n)}});var G=/[^\x20\t\r\n\f]+/g;function V(e){return e}function Z(e){throw e}function K(e,t,r,i){var n;try{e&&w(n=e.promise)?n.call(e).done(t).fail(r):e&&w(n=e.then)?n.call(e,t,r):t.apply(void 0,[e].slice(i))}catch(e){r.apply(void 0,[e])}}S.Callbacks=function(e){e="string"==typeof e?(t=e,r={},S.each(t.match(G)||[],function(e,t){r[t]=!0}),r):S.extend({},e);var t,r,i,n,o,a,s=[],l=[],c=-1,u=function(){for(a=a||e.once,o=i=!0;l.length;c=-1)for(n=l.shift();++c<s.length;)!1===s[c].apply(n[0],n[1])&&e.stopOnFalse&&(c=s.length,n=!1);e.memory||(n=!1),i=!1,a&&(s=n?[]:"")},h={add:function(){return s&&(n&&!i&&(c=s.length-1,l.push(n)),function t(r){S.each(r,function(r,i){w(i)?e.unique&&h.has(i)||s.push(i):i&&i.length&&"string"!==_(i)&&t(i)})}(arguments),n&&!i&&u()),this},remove:function(){return S.each(arguments,function(e,t){for(var r;(r=S.inArray(t,s,r))>-1;)s.splice(r,1),r<=c&&c--}),this},has:function(e){return e?S.inArray(e,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return a=l=[],s=n="",this},disabled:function(){return!s},lock:function(){return a=l=[],n||i||(s=n=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],l.push(t),i||u()),this},fire:function(){return h.fireWith(this,arguments),this},fired:function(){return!!o}};return h},S.extend({Deferred:function(e){var t=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],r="pending",n={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return n.then(null,e)},pipe:function(){var e=arguments;return S.Deferred(function(r){S.each(t,function(t,i){var n=w(e[i[4]])&&e[i[4]];o[i[1]](function(){var e=n&&n.apply(this,arguments);e&&w(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[i[0]+"With"](this,n?[e]:arguments)})}),e=null}).promise()},then:function(e,r,n){var o=0;function a(e,t,r,n){return function(){var s=this,l=arguments,c=function(){var i,c;if(!(e<o)){if((i=r.apply(s,l))===t.promise())throw TypeError("Thenable self-resolution");w(c=i&&("object"==typeof i||"function"==typeof i)&&i.then)?n?c.call(i,a(o,t,V,n),a(o,t,Z,n)):(o++,c.call(i,a(o,t,V,n),a(o,t,Z,n),a(o,t,V,t.notifyWith))):(r!==V&&(s=void 0,l=[i]),(n||t.resolveWith)(s,l))}},u=n?c:function(){try{c()}catch(i){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(i,u.error),e+1>=o&&(r!==Z&&(s=void 0,l=[i]),t.rejectWith(s,l))}};e?u():(S.Deferred.getErrorHook?u.error=S.Deferred.getErrorHook():S.Deferred.getStackHook&&(u.error=S.Deferred.getStackHook()),i.setTimeout(u))}}return S.Deferred(function(i){t[0][3].add(a(0,i,w(n)?n:V,i.notifyWith)),t[1][3].add(a(0,i,w(e)?e:V)),t[2][3].add(a(0,i,w(r)?r:Z))}).promise()},promise:function(e){return null!=e?S.extend(e,n):n}},o={};return S.each(t,function(e,i){var a=i[2],s=i[5];n[i[1]]=a.add,s&&a.add(function(){r=s},t[3-e][2].disable,t[3-e][3].disable,t[0][2].lock,t[0][3].lock),a.add(i[3].fire),o[i[0]]=function(){return o[i[0]+"With"](this===o?void 0:this,arguments),this},o[i[0]+"With"]=a.fireWith}),n.promise(o),e&&e.call(o,o),o},when:function(e){var t=arguments.length,r=t,i=Array(r),n=l.call(arguments),o=S.Deferred(),a=function(e){return function(r){i[e]=this,n[e]=arguments.length>1?l.call(arguments):r,--t||o.resolveWith(i,n)}};if(t<=1&&(K(e,o.done(a(r)).resolve,o.reject,!t),"pending"===o.state()||w(n[r]&&n[r].then)))return o.then();for(;r--;)K(n[r],a(r),o.reject);return o.promise()}});var Y=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){i.console&&i.console.warn&&e&&Y.test(e.name)&&i.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){i.setTimeout(function(){throw e})};var Q=S.Deferred();function X(){v.removeEventListener("DOMContentLoaded",X),i.removeEventListener("load",X),S.ready()}S.fn.ready=function(e){return Q.then(e).catch(function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){!(!0===e?--S.readyWait:S.isReady)&&(S.isReady=!0,!0!==e&&--S.readyWait>0||Q.resolveWith(v,[S]))}}),S.ready.then=Q.then,"complete"!==v.readyState&&("loading"===v.readyState||v.documentElement.doScroll)?(v.addEventListener("DOMContentLoaded",X),i.addEventListener("load",X)):i.setTimeout(S.ready);var J=function(e,t,r,i,n,o,a){var s=0,l=e.length,c=null==r;if("object"===_(r))for(s in n=!0,r)J(e,t,s,r[s],!0,o,a);else if(void 0!==i&&(n=!0,w(i)||(a=!0),c&&(a?(t.call(e,i),t=null):(c=t,t=function(e,t,r){return c.call(S(e),r)})),t))for(;s<l;s++)t(e[s],r,a?i:i.call(e[s],s,t(e[s],r)));return n?e:c?t.call(e):l?t(e[0],r):o},ee=/^-ms-/,et=/-([a-z])/g;function er(e,t){return t.toUpperCase()}function ei(e){return e.replace(ee,"ms-").replace(et,er)}var en=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function eo(){this.expando=S.expando+eo.uid++}eo.uid=1,eo.prototype={cache:function(e){var t=e[this.expando];return!t&&(t={},en(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,r){var i,n=this.cache(e);if("string"==typeof t)n[ei(t)]=r;else for(i in t)n[ei(i)]=t[i];return n},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][ei(t)]},access:function(e,t,r){return void 0===t||t&&"string"==typeof t&&void 0===r?this.get(e,t):(this.set(e,t,r),void 0!==r?r:t)},remove:function(e,t){var r,i=e[this.expando];if(void 0!==i){if(void 0!==t)for(r=(t=Array.isArray(t)?t.map(ei):((t=ei(t))in i)?[t]:t.match(G)||[]).length;r--;)delete i[t[r]];(void 0===t||S.isEmptyObject(i))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var ea=new eo,es=new eo,el=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ec=/[A-Z]/g;function eu(e,t,r){var i,n;if(void 0===r&&1===e.nodeType){if(i="data-"+t.replace(ec,"-$&").toLowerCase(),"string"==typeof(r=e.getAttribute(i))){try{n=r,r="true"===n||"false"!==n&&("null"===n?null:n===+n+""?+n:el.test(n)?JSON.parse(n):n)}catch(e){}es.set(e,t,r)}else r=void 0}return r}S.extend({hasData:function(e){return es.hasData(e)||ea.hasData(e)},data:function(e,t,r){return es.access(e,t,r)},removeData:function(e,t){es.remove(e,t)},_data:function(e,t,r){return ea.access(e,t,r)},_removeData:function(e,t){ea.remove(e,t)}}),S.fn.extend({data:function(e,t){var r,i,n,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(n=es.get(o),1===o.nodeType&&!ea.get(o,"hasDataAttrs"))){for(r=a.length;r--;)a[r]&&0===(i=a[r].name).indexOf("data-")&&eu(o,i=ei(i.slice(5)),n[i]);ea.set(o,"hasDataAttrs",!0)}return n}return"object"==typeof e?this.each(function(){es.set(this,e)}):J(this,function(t){var r;if(o&&void 0===t)return void 0!==(r=es.get(o,e))||void 0!==(r=eu(o,e))?r:void 0;this.each(function(){es.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){es.remove(this,e)})}}),S.extend({queue:function(e,t,r){var i;if(e)return t=(t||"fx")+"queue",i=ea.get(e,t),r&&(!i||Array.isArray(r)?i=ea.access(e,t,S.makeArray(r)):i.push(r)),i||[]},dequeue:function(e,t){t=t||"fx";var r=S.queue(e,t),i=r.length,n=r.shift(),o=S._queueHooks(e,t);"inprogress"===n&&(n=r.shift(),i--),n&&("fx"===t&&r.unshift("inprogress"),delete o.stop,n.call(e,function(){S.dequeue(e,t)},o)),!i&&o&&o.empty.fire()},_queueHooks:function(e,t){var r=t+"queueHooks";return ea.get(e,r)||ea.access(e,r,{empty:S.Callbacks("once memory").add(function(){ea.remove(e,[t+"queue",r])})})}}),S.fn.extend({queue:function(e,t){var r=2;return("string"!=typeof e&&(t=e,e="fx",r--),arguments.length<r)?S.queue(this[0],e):void 0===t?this:this.each(function(){var r=S.queue(this,e,t);S._queueHooks(this,e),"fx"===e&&"inprogress"!==r[0]&&S.dequeue(this,e)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var r,i=1,n=S.Deferred(),o=this,a=this.length,s=function(){--i||n.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(r=ea.get(o[a],e+"queueHooks"))&&r.empty&&(i++,r.empty.add(s));return s(),n.promise(t)}});var eh=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ed=RegExp("^(?:([+-])=|)("+eh+")([a-z%]*)$","i"),ef=["Top","Right","Bottom","Left"],ep=v.documentElement,eg=function(e){return S.contains(e.ownerDocument,e)},em={composed:!0};ep.getRootNode&&(eg=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(em)===e.ownerDocument});var eb=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&eg(e)&&"none"===S.css(e,"display")};function ew(e,t,r,i){var n,o,a=20,s=i?function(){return i.cur()}:function(){return S.css(e,t,"")},l=s(),c=r&&r[3]||(S.cssNumber[t]?"":"px"),u=e.nodeType&&(S.cssNumber[t]||"px"!==c&&+l)&&ed.exec(S.css(e,t));if(u&&u[3]!==c){for(l/=2,c=c||u[3],u=+l||1;a--;)S.style(e,t,u+c),(1-o)*(1-(o=s()/l||.5))<=0&&(a=0),u/=o;u*=2,S.style(e,t,u+c),r=r||[]}return r&&(u=+u||+l||0,n=r[1]?u+(r[1]+1)*r[2]:+r[2],i&&(i.unit=c,i.start=u,i.end=n)),n}var ey={};function ev(e,t){for(var r,i,n=[],o=0,a=e.length;o<a;o++)(i=e[o]).style&&(r=i.style.display,t?("none"!==r||(n[o]=ea.get(i,"display")||null,n[o]||(i.style.display="")),""===i.style.display&&eb(i)&&(n[o]=function(e){var t,r=e.ownerDocument,i=e.nodeName,n=ey[i];return n||(t=r.body.appendChild(r.createElement(i)),n=S.css(t,"display"),t.parentNode.removeChild(t),"none"===n&&(n="block"),ey[i]=n),n}(i))):"none"!==r&&(n[o]="none",ea.set(i,"display",r)));for(o=0;o<a;o++)null!=n[o]&&(e[o].style.display=n[o]);return e}S.fn.extend({show:function(){return ev(this,!0)},hide:function(){return ev(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){eb(this)?S(this).show():S(this).hide()})}});var ex=/^(?:checkbox|radio)$/i,eC=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,e_=/^$|^module$|\/(?:java|ecma)script/i;e8=v.createDocumentFragment().appendChild(v.createElement("div")),(e9=v.createElement("input")).setAttribute("type","radio"),e9.setAttribute("checked","checked"),e9.setAttribute("name","t"),e8.appendChild(e9),b.checkClone=e8.cloneNode(!0).cloneNode(!0).lastChild.checked,e8.innerHTML="<textarea>x</textarea>",b.noCloneChecked=!!e8.cloneNode(!0).lastChild.defaultValue,e8.innerHTML="<option></option>",b.option=!!e8.lastChild;var eE={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ek(e,t){var r;return(r=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&D(e,t))?S.merge([e],r):r}function eS(e,t){for(var r=0,i=e.length;r<i;r++)ea.set(e[r],"globalEval",!t||ea.get(t[r],"globalEval"))}eE.tbody=eE.tfoot=eE.colgroup=eE.caption=eE.thead,eE.th=eE.td,b.option||(eE.optgroup=eE.option=[1,"<select multiple='multiple'>","</select>"]);var eO=/<|&#?\w+;/;function eD(e,t,r,i,n){for(var o,a,s,l,c,u=t.createDocumentFragment(),h=[],d=0,f=e.length;d<f;d++)if((o=e[d])||0===o){if("object"===_(o))S.merge(h,o.nodeType?[o]:o);else if(eO.test(o)){for(a=a||u.appendChild(t.createElement("div")),s=eE[(eC.exec(o)||["",""])[1].toLowerCase()]||eE._default,a.innerHTML=s[1]+S.htmlPrefilter(o)+s[2],c=s[0];c--;)a=a.lastChild;S.merge(h,a.childNodes),(a=u.firstChild).textContent=""}else h.push(t.createTextNode(o))}for(u.textContent="",d=0;o=h[d++];){if(i&&S.inArray(o,i)>-1){n&&n.push(o);continue}if(l=eg(o),a=ek(u.appendChild(o),"script"),l&&eS(a),r)for(c=0;o=a[c++];)e_.test(o.type||"")&&r.push(o)}return u}var eP=/^([^.]*)(?:\.(.+)|)/;function eA(){return!0}function eT(){return!1}function e$(e,t,r,i,n,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof r&&(i=i||r,r=void 0),t)e$(e,s,r,i,t[s],o);return e}if(null==i&&null==n?(n=r,i=r=void 0):null==n&&("string"==typeof r?(n=i,i=void 0):(n=i,i=r,r=void 0)),!1===n)n=eT;else if(!n)return e;return 1===o&&(a=n,(n=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,n,i,r)})}function eI(e,t,r){if(!r){void 0===ea.get(e,t)&&S.event.add(e,t,eA);return}ea.set(e,t,!1),S.event.add(e,t,{namespace:!1,handler:function(e){var r,i=ea.get(this,t);if(1&e.isTrigger&&this[t]){if(i)(S.event.special[t]||{}).delegateType&&e.stopPropagation();else if(i=l.call(arguments),ea.set(this,t,i),this[t](),r=ea.get(this,t),ea.set(this,t,!1),i!==r)return e.stopImmediatePropagation(),e.preventDefault(),r}else i&&(ea.set(this,t,S.event.trigger(i[0],i.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=eA)}})}S.event={global:{},add:function(e,t,r,i,n){var o,a,s,l,c,u,h,d,f,p,g,m=ea.get(e);if(en(e))for(r.handler&&(r=(o=r).handler,n=o.selector),n&&S.find.matchesSelector(ep,n),r.guid||(r.guid=S.guid++),(l=m.events)||(l=m.events=Object.create(null)),(a=m.handle)||(a=m.handle=function(t){return S.event.triggered!==t.type?S.event.dispatch.apply(e,arguments):void 0}),c=(t=(t||"").match(G)||[""]).length;c--;)f=g=(s=eP.exec(t[c])||[])[1],p=(s[2]||"").split(".").sort(),f&&(h=S.event.special[f]||{},f=(n?h.delegateType:h.bindType)||f,h=S.event.special[f]||{},u=S.extend({type:f,origType:g,data:i,handler:r,guid:r.guid,selector:n,needsContext:n&&S.expr.match.needsContext.test(n),namespace:p.join(".")},o),(d=l[f])||((d=l[f]=[]).delegateCount=0,(!h.setup||!1===h.setup.call(e,i,p,a))&&e.addEventListener&&e.addEventListener(f,a)),h.add&&(h.add.call(e,u),u.handler.guid||(u.handler.guid=r.guid)),n?d.splice(d.delegateCount++,0,u):d.push(u),S.event.global[f]=!0)},remove:function(e,t,r,i,n){var o,a,s,l,c,u,h,d,f,p,g,m=ea.hasData(e)&&ea.get(e);if(m&&(l=m.events)){for(c=(t=(t||"").match(G)||[""]).length;c--;){if(f=g=(s=eP.exec(t[c])||[])[1],p=(s[2]||"").split(".").sort(),!f){for(f in l)S.event.remove(e,f+t[c],r,i,!0);continue}for(h=S.event.special[f]||{},d=l[f=(i?h.delegateType:h.bindType)||f]||[],s=s[2]&&RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=d.length;o--;)u=d[o],(n||g===u.origType)&&(!r||r.guid===u.guid)&&(!s||s.test(u.namespace))&&(!i||i===u.selector||"**"===i&&u.selector)&&(d.splice(o,1),u.selector&&d.delegateCount--,h.remove&&h.remove.call(e,u));a&&!d.length&&(h.teardown&&!1!==h.teardown.call(e,p,m.handle)||S.removeEvent(e,f,m.handle),delete l[f])}S.isEmptyObject(l)&&ea.remove(e,"handle events")}},dispatch:function(e){var t,r,i,n,o,a,s=Array(arguments.length),l=S.event.fix(e),c=(ea.get(this,"events")||Object.create(null))[l.type]||[],u=S.event.special[l.type]||{};for(t=1,s[0]=l;t<arguments.length;t++)s[t]=arguments[t];if(l.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,l)){for(a=S.event.handlers.call(this,l,c),t=0;(n=a[t++])&&!l.isPropagationStopped();)for(l.currentTarget=n.elem,r=0;(o=n.handlers[r++])&&!l.isImmediatePropagationStopped();)(!l.rnamespace||!1===o.namespace||l.rnamespace.test(o.namespace))&&(l.handleObj=o,l.data=o.data,void 0!==(i=((S.event.special[o.origType]||{}).handle||o.handler).apply(n.elem,s))&&!1===(l.result=i)&&(l.preventDefault(),l.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,l),l.result}},handlers:function(e,t){var r,i,n,o,a,s=[],l=t.delegateCount,c=e.target;if(l&&c.nodeType&&!("click"===e.type&&e.button>=1)){for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&!("click"===e.type&&!0===c.disabled)){for(r=0,o=[],a={};r<l;r++)void 0===a[n=(i=t[r]).selector+" "]&&(a[n]=i.needsContext?S(n,this).index(c)>-1:S.find(n,this,null,[c]).length),a[n]&&o.push(i);o.length&&s.push({elem:c,handlers:o})}}return c=this,l<t.length&&s.push({elem:c,handlers:t.slice(l)}),s},addProp:function(e,t){Object.defineProperty(S.Event.prototype,e,{enumerable:!0,configurable:!0,get:w(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return ex.test(t.type)&&t.click&&D(t,"input")&&eI(t,"click",!0),!1},trigger:function(e){var t=this||e;return ex.test(t.type)&&t.click&&D(t,"input")&&eI(t,"click"),!0},_default:function(e){var t=e.target;return ex.test(t.type)&&t.click&&D(t,"input")&&ea.get(t,"click")||D(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,r){e.removeEventListener&&e.removeEventListener(t,r)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?eA:eT,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:eT,isPropagationStopped:eT,isImmediatePropagationStopped:eT,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=eA,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=eA,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=eA,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){function r(e){if(v.documentMode){var r=ea.get(this,"handle"),i=S.event.fix(e);i.type="focusin"===e.type?"focus":"blur",i.isSimulated=!0,r(e),i.target===i.currentTarget&&r(i)}else S.event.simulate(t,e.target,S.event.fix(e))}S.event.special[e]={setup:function(){var i;if(eI(this,e,!0),!v.documentMode)return!1;(i=ea.get(this,t))||this.addEventListener(t,r),ea.set(this,t,(i||0)+1)},trigger:function(){return eI(this,e),!0},teardown:function(){var e;if(!v.documentMode)return!1;(e=ea.get(this,t)-1)?ea.set(this,t,e):(this.removeEventListener(t,r),ea.remove(this,t))},_default:function(t){return ea.get(t.target,e)},delegateType:t},S.event.special[t]={setup:function(){var i=this.ownerDocument||this.document||this,n=v.documentMode?this:i,o=ea.get(n,t);o||(v.documentMode?this.addEventListener(t,r):i.addEventListener(e,r,!0)),ea.set(n,t,(o||0)+1)},teardown:function(){var i=this.ownerDocument||this.document||this,n=v.documentMode?this:i,o=ea.get(n,t)-1;o?ea.set(n,t,o):(v.documentMode?this.removeEventListener(t,r):i.removeEventListener(e,r,!0),ea.remove(n,t))}}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){S.event.special[e]={delegateType:t,bindType:t,handle:function(e){var r,i=e.relatedTarget,n=e.handleObj;return i&&(i===this||S.contains(this,i))||(e.type=n.origType,r=n.handler.apply(this,arguments),e.type=t),r}}}),S.fn.extend({on:function(e,t,r,i){return e$(this,e,t,r,i)},one:function(e,t,r,i){return e$(this,e,t,r,i,1)},off:function(e,t,r){var i,n;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,S(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(n in e)this.off(n,t,e[n]);return this}return(!1===t||"function"==typeof t)&&(r=t,t=void 0),!1===r&&(r=eT),this.each(function(){S.event.remove(this,e,r,t)})}});var eN=/<script|<style|<link/i,eR=/checked\s*(?:[^=]|=\s*.checked.)/i,eM=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function ej(e,t){return D(e,"table")&&D(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function eL(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function eB(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function eU(e,t){var r,i,n,o,a,s;if(1===t.nodeType){if(ea.hasData(e)&&(s=ea.get(e).events))for(n in ea.remove(t,"handle events"),s)for(r=0,i=s[n].length;r<i;r++)S.event.add(t,n,s[n][r]);es.hasData(e)&&(o=es.access(e),a=S.extend({},o),es.set(t,a))}}function eF(e,t,r,i){t=c(t);var n,o,a,s,l,u,h=0,d=e.length,f=d-1,p=t[0],g=w(p);if(g||d>1&&"string"==typeof p&&!b.checkClone&&eR.test(p))return e.each(function(n){var o=e.eq(n);g&&(t[0]=p.call(this,n,o.html())),eF(o,t,r,i)});if(d&&(o=(n=eD(t,e[0].ownerDocument,!1,e,i)).firstChild,1===n.childNodes.length&&(n=o),o||i)){for(s=(a=S.map(ek(n,"script"),eL)).length;h<d;h++)l=n,h!==f&&(l=S.clone(l,!0,!0),s&&S.merge(a,ek(l,"script"))),r.call(e[h],l,h);if(s)for(u=a[a.length-1].ownerDocument,S.map(a,eB),h=0;h<s;h++)l=a[h],e_.test(l.type||"")&&!ea.access(l,"globalEval")&&S.contains(u,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?S._evalUrl&&!l.noModule&&S._evalUrl(l.src,{nonce:l.nonce||l.getAttribute("nonce")},u):C(l.textContent.replace(eM,""),l,u))}return e}function eW(e,t,r){for(var i,n=t?S.filter(t,e):e,o=0;null!=(i=n[o]);o++)r||1!==i.nodeType||S.cleanData(ek(i)),i.parentNode&&(r&&eg(i)&&eS(ek(i,"script")),i.parentNode.removeChild(i));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,r){var i,n,o,a,s=e.cloneNode(!0),l=eg(e);if(!b.noCloneChecked&&(1===e.nodeType||11===e.nodeType)&&!S.isXMLDoc(e))for(i=0,a=ek(s),n=(o=ek(e)).length;i<n;i++)!function(e,t){var r=t.nodeName.toLowerCase();"input"===r&&ex.test(e.type)?t.checked=e.checked:("input"===r||"textarea"===r)&&(t.defaultValue=e.defaultValue)}(o[i],a[i]);if(t){if(r)for(i=0,o=o||ek(e),a=a||ek(s),n=o.length;i<n;i++)eU(o[i],a[i]);else eU(e,s)}return(a=ek(s,"script")).length>0&&eS(a,!l&&ek(e,"script")),s},cleanData:function(e){for(var t,r,i,n=S.event.special,o=0;void 0!==(r=e[o]);o++)if(en(r)){if(t=r[ea.expando]){if(t.events)for(i in t.events)n[i]?S.event.remove(r,i):S.removeEvent(r,i,t.handle);r[ea.expando]=void 0}r[es.expando]&&(r[es.expando]=void 0)}}}),S.fn.extend({detach:function(e){return eW(this,e,!0)},remove:function(e){return eW(this,e)},text:function(e){return J(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return eF(this,arguments,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&ej(this,e).appendChild(e)})},prepend:function(){return eF(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=ej(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return eF(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return eF(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ek(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return J(this,function(e){var t=this[0]||{},r=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!eN.test(e)&&!eE[(eC.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;r<i;r++)t=this[r]||{},1===t.nodeType&&(S.cleanData(ek(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return eF(this,arguments,function(t){var r=this.parentNode;0>S.inArray(this,e)&&(S.cleanData(ek(this)),r&&r.replaceChild(t,this))},e)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){S.fn[e]=function(e){for(var r,i=[],n=S(e),o=n.length-1,a=0;a<=o;a++)r=a===o?this:this.clone(!0),S(n[a])[t](r),u.apply(i,r.get());return this.pushStack(i)}});var ez=RegExp("^("+eh+")(?!px)[a-z%]+$","i"),eH=/^--/,eq=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=i),t.getComputedStyle(e)},eG=function(e,t,r){var i,n,o={};for(n in t)o[n]=e.style[n],e.style[n]=t[n];for(n in i=r.call(e),t)e.style[n]=o[n];return i},eV=RegExp(ef.join("|"),"i");function eZ(e,t,r){var i,n,o,a,s=eH.test(t),l=e.style;return(r=r||eq(e))&&(a=r.getPropertyValue(t)||r[t],s&&a&&(a=a.replace(I,"$1")||void 0),""!==a||eg(e)||(a=S.style(e,t)),!b.pixelBoxStyles()&&ez.test(a)&&eV.test(t)&&(i=l.width,n=l.minWidth,o=l.maxWidth,l.minWidth=l.maxWidth=l.width=a,a=r.width,l.width=i,l.minWidth=n,l.maxWidth=o)),void 0!==a?a+"":a}function eK(e,t){return{get:function(){if(e()){delete this.get;return}return(this.get=t).apply(this,arguments)}}}!function(){function e(){if(u){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ep.appendChild(c).appendChild(u);var e=i.getComputedStyle(u);r="1%"!==e.top,l=12===t(e.marginLeft),u.style.right="60%",a=36===t(e.right),n=36===t(e.width),u.style.position="absolute",o=12===t(u.offsetWidth/3),ep.removeChild(c),u=null}}function t(e){return Math.round(parseFloat(e))}var r,n,o,a,s,l,c=v.createElement("div"),u=v.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",b.clearCloneStyle="content-box"===u.style.backgroundClip,S.extend(b,{boxSizingReliable:function(){return e(),n},pixelBoxStyles:function(){return e(),a},pixelPosition:function(){return e(),r},reliableMarginLeft:function(){return e(),l},scrollboxSize:function(){return e(),o},reliableTrDimensions:function(){var e,t,r,n;return null==s&&(e=v.createElement("table"),t=v.createElement("tr"),r=v.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="box-sizing:content-box;border:1px solid",t.style.height="1px",r.style.height="9px",r.style.display="block",ep.appendChild(e).appendChild(t).appendChild(r),s=parseInt((n=i.getComputedStyle(t)).height,10)+parseInt(n.borderTopWidth,10)+parseInt(n.borderBottomWidth,10)===t.offsetHeight,ep.removeChild(e)),s}}))}();var eY=["Webkit","Moz","ms"],eQ=v.createElement("div").style,eX={};function eJ(e){return S.cssProps[e]||eX[e]||(e in eQ?e:eX[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),r=eY.length;r--;)if((e=eY[r]+t)in eQ)return e}(e)||e)}var e0=/^(none|table(?!-c[ea]).+)/,e1={position:"absolute",visibility:"hidden",display:"block"},e2={letterSpacing:"0",fontWeight:"400"};function e3(e,t,r){var i=ed.exec(t);return i?Math.max(0,i[2]-(r||0))+(i[3]||"px"):t}function e5(e,t,r,i,n,o){var a="width"===t?1:0,s=0,l=0,c=0;if(r===(i?"border":"content"))return 0;for(;a<4;a+=2)"margin"===r&&(c+=S.css(e,r+ef[a],!0,n)),i?("content"===r&&(l-=S.css(e,"padding"+ef[a],!0,n)),"margin"!==r&&(l-=S.css(e,"border"+ef[a]+"Width",!0,n))):(l+=S.css(e,"padding"+ef[a],!0,n),"padding"!==r?l+=S.css(e,"border"+ef[a]+"Width",!0,n):s+=S.css(e,"border"+ef[a]+"Width",!0,n));return!i&&o>=0&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-l-s-.5))||0),l+c}function e4(e,t,r){var i=eq(e),n=(!b.boxSizingReliable()||r)&&"border-box"===S.css(e,"boxSizing",!1,i),o=n,a=eZ(e,t,i),s="offset"+t[0].toUpperCase()+t.slice(1);if(ez.test(a)){if(!r)return a;a="auto"}return(!b.boxSizingReliable()&&n||!b.reliableTrDimensions()&&D(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,i))&&e.getClientRects().length&&(n="border-box"===S.css(e,"boxSizing",!1,i),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+e5(e,t,r||(n?"border":"content"),o,i,a)+"px"}function e6(e,t,r,i,n){return new e6.prototype.init(e,t,r,i,n)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var r=eZ(e,"opacity");return""===r?"1":r}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var n,o,a,s=ei(t),l=eH.test(t),c=e.style;if(l||(t=eJ(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===r)return a&&"get"in a&&void 0!==(n=a.get(e,!1,i))?n:c[t];"string"==(o=typeof r)&&(n=ed.exec(r))&&n[1]&&(r=ew(e,t,n),o="number"),null!=r&&r==r&&("number"!==o||l||(r+=n&&n[3]||(S.cssNumber[s]?"":"px")),b.clearCloneStyle||""!==r||0!==t.indexOf("background")||(c[t]="inherit"),a&&"set"in a&&void 0===(r=a.set(e,r,i))||(l?c.setProperty(t,r):c[t]=r))}},css:function(e,t,r,i){var n,o,a,s=ei(t);return(eH.test(t)||(t=eJ(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(n=a.get(e,!0,r)),void 0===n&&(n=eZ(e,t,i)),"normal"===n&&t in e2&&(n=e2[t]),""===r||r)?(o=parseFloat(n),!0===r||isFinite(o)?o||0:n):n}}),S.each(["height","width"],function(e,t){S.cssHooks[t]={get:function(e,r,i){if(r)return!e0.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?e4(e,t,i):eG(e,e1,function(){return e4(e,t,i)})},set:function(e,r,i){var n,o=eq(e),a=!b.scrollboxSize()&&"absolute"===o.position,s=(a||i)&&"border-box"===S.css(e,"boxSizing",!1,o),l=i?e5(e,t,i,s,o):0;return s&&a&&(l-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-e5(e,t,"border",!1,o)-.5)),l&&(n=ed.exec(r))&&"px"!==(n[3]||"px")&&(e.style[t]=r,r=S.css(e,t)),e3(e,r,l)}}}),S.cssHooks.marginLeft=eK(b.reliableMarginLeft,function(e,t){if(t)return(parseFloat(eZ(e,"marginLeft"))||e.getBoundingClientRect().left-eG(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(e,t){S.cssHooks[e+t]={expand:function(r){for(var i=0,n={},o="string"==typeof r?r.split(" "):[r];i<4;i++)n[e+ef[i]+t]=o[i]||o[i-2]||o[0];return n}},"margin"!==e&&(S.cssHooks[e+t].set=e3)}),S.fn.extend({css:function(e,t){return J(this,function(e,t,r){var i,n,o={},a=0;if(Array.isArray(t)){for(i=eq(e),n=t.length;a<n;a++)o[t[a]]=S.css(e,t[a],!1,i);return o}return void 0!==r?S.style(e,t,r):S.css(e,t)},e,t,arguments.length>1)}}),S.Tween=e6,e6.prototype={constructor:e6,init:function(e,t,r,i,n,o){this.elem=e,this.prop=r,this.easing=n||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=o||(S.cssNumber[r]?"":"px")},cur:function(){var e=e6.propHooks[this.prop];return e&&e.get?e.get(this):e6.propHooks._default.get(this)},run:function(e){var t,r=e6.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),r&&r.set?r.set(this):e6.propHooks._default.set(this),this}},e6.prototype.init.prototype=e6.prototype,e6.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1===e.elem.nodeType&&(S.cssHooks[e.prop]||null!=e.elem.style[eJ(e.prop)])?S.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},e6.propHooks.scrollTop=e6.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=e6.prototype.init,S.fx.step={};var e8,e9,e7,te,tt=/^(?:toggle|show|hide)$/,tr=/queueHooks$/;function ti(){return i.setTimeout(function(){e7=void 0}),e7=Date.now()}function tn(e,t){var r,i=0,n={height:e};for(t=t?1:0;i<4;i+=2-t)n["margin"+(r=ef[i])]=n["padding"+r]=e;return t&&(n.opacity=n.width=e),n}function to(e,t,r){for(var i,n=(Animation.tweeners[t]||[]).concat(Animation.tweeners["*"]),o=0,a=n.length;o<a;o++)if(i=n[o].call(r,t,e))return i}function Animation(e,t,r){var i,n,o=0,a=Animation.prefilters.length,s=S.Deferred().always(function(){delete l.elem}),l=function(){if(n)return!1;for(var t=e7||ti(),r=Math.max(0,c.startTime+c.duration-t),i=1-(r/c.duration||0),o=0,a=c.tweens.length;o<a;o++)c.tweens[o].run(i);return(s.notifyWith(e,[c,i,r]),i<1&&a)?r:(a||s.notifyWith(e,[c,1,0]),s.resolveWith(e,[c]),!1)},c=s.promise({elem:e,props:S.extend({},t),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},r),originalProperties:t,originalOptions:r,startTime:e7||ti(),duration:r.duration,tweens:[],createTween:function(t,r){var i=S.Tween(e,c.opts,t,r,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(i),i},stop:function(t){var r=0,i=t?c.tweens.length:0;if(n)return this;for(n=!0;r<i;r++)c.tweens[r].run(1);return t?(s.notifyWith(e,[c,1,0]),s.resolveWith(e,[c,t])):s.rejectWith(e,[c,t]),this}}),u=c.props;for(function(e,t){var r,i,n,o,a;for(r in e)if(n=t[i=ei(r)],Array.isArray(o=e[r])&&(n=o[1],o=e[r]=o[0]),r!==i&&(e[i]=o,delete e[r]),(a=S.cssHooks[i])&&("expand"in a))for(r in o=a.expand(o),delete e[i],o)(r in e)||(e[r]=o[r],t[r]=n);else t[i]=n}(u,c.opts.specialEasing);o<a;o++)if(i=Animation.prefilters[o].call(c,e,u,c.opts))return w(i.stop)&&(S._queueHooks(c.elem,c.opts.queue).stop=i.stop.bind(i)),i;return S.map(u,to,c),w(c.opts.start)&&c.opts.start.call(e,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),S.fx.timer(S.extend(l,{elem:e,anim:c,queue:c.opts.queue})),c}S.Animation=S.extend(Animation,{tweeners:{"*":[function(e,t){var r=this.createTween(e,t);return ew(r.elem,e,ed.exec(t),r),r}]},tweener:function(e,t){w(e)?(t=e,e=["*"]):e=e.match(G);for(var r,i=0,n=e.length;i<n;i++)r=e[i],Animation.tweeners[r]=Animation.tweeners[r]||[],Animation.tweeners[r].unshift(t)},prefilters:[function(e,t,r){var i,n,o,a,s,l,c,u,h="width"in t||"height"in t,d=this,f={},p=e.style,g=e.nodeType&&eb(e),m=ea.get(e,"fxshow");for(i in r.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,d.always(function(){d.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(n=t[i],tt.test(n)){if(delete t[i],o=o||"toggle"===n,n===(g?"hide":"show")){if("show"!==n||!m||void 0===m[i])continue;g=!0}f[i]=m&&m[i]||S.style(e,i)}if(!(!(l=!S.isEmptyObject(t))&&S.isEmptyObject(f)))for(i in h&&1===e.nodeType&&(r.overflow=[p.overflow,p.overflowX,p.overflowY],null==(c=m&&m.display)&&(c=ea.get(e,"display")),"none"===(u=S.css(e,"display"))&&(c?u=c:(ev([e],!0),c=e.style.display||c,u=S.css(e,"display"),ev([e]))),("inline"===u||"inline-block"===u&&null!=c)&&"none"===S.css(e,"float")&&(l||(d.done(function(){p.display=c}),null!=c||(c="none"===(u=p.display)?"":u)),p.display="inline-block")),r.overflow&&(p.overflow="hidden",d.always(function(){p.overflow=r.overflow[0],p.overflowX=r.overflow[1],p.overflowY=r.overflow[2]})),l=!1,f)l||(m?"hidden"in m&&(g=m.hidden):m=ea.access(e,"fxshow",{display:c}),o&&(m.hidden=!g),g&&ev([e],!0),d.done(function(){for(i in g||ev([e]),ea.remove(e,"fxshow"),f)S.style(e,i,f[i])})),l=to(g?m[i]:0,i,d),i in m||(m[i]=l.start,g&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?Animation.prefilters.unshift(e):Animation.prefilters.push(e)}}),S.speed=function(e,t,r){var i=e&&"object"==typeof e?S.extend({},e):{complete:r||!r&&t||w(e)&&e,duration:e,easing:r&&t||t&&!w(t)&&t};return S.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in S.fx.speeds?i.duration=S.fx.speeds[i.duration]:i.duration=S.fx.speeds._default),(null==i.queue||!0===i.queue)&&(i.queue="fx"),i.old=i.complete,i.complete=function(){w(i.old)&&i.old.call(this),i.queue&&S.dequeue(this,i.queue)},i},S.fn.extend({fadeTo:function(e,t,r,i){return this.filter(eb).css("opacity",0).show().end().animate({opacity:t},e,r,i)},animate:function(e,t,r,i){var n=S.isEmptyObject(e),o=S.speed(t,r,i),a=function(){var t=Animation(this,S.extend({},e),o);(n||ea.get(this,"finish"))&&t.stop(!0)};return a.finish=a,n||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=S.timers,a=ea.get(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&tr.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem===this&&(null==e||o[n].queue===e)&&(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&S.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,r=ea.get(this),i=r[e+"queue"],n=r[e+"queueHooks"],o=S.timers,a=i?i.length:0;for(r.finish=!0,S.queue(this,e,[]),n&&n.stop&&n.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete r.finish})}}),S.each(["toggle","show","hide"],function(e,t){var r=S.fn[t];S.fn[t]=function(e,i,n){return null==e||"boolean"==typeof e?r.apply(this,arguments):this.animate(tn(t,!0),e,i,n)}}),S.each({slideDown:tn("show"),slideUp:tn("hide"),slideToggle:tn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){S.fn[e]=function(e,r,i){return this.animate(t,e,r,i)}}),S.timers=[],S.fx.tick=function(){var e,t=0,r=S.timers;for(e7=Date.now();t<r.length;t++)(e=r[t])()||r[t]!==e||r.splice(t--,1);r.length||S.fx.stop(),e7=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){te||(te=!0,function e(){te&&(!1===v.hidden&&i.requestAnimationFrame?i.requestAnimationFrame(e):i.setTimeout(e,S.fx.interval),S.fx.tick())}())},S.fx.stop=function(){te=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(e,t){return e=S.fx&&S.fx.speeds[e]||e,t=t||"fx",this.queue(t,function(t,r){var n=i.setTimeout(t,e);r.stop=function(){i.clearTimeout(n)}})},ta=v.createElement("input"),ts=v.createElement("select").appendChild(v.createElement("option")),ta.type="checkbox",b.checkOn=""!==ta.value,b.optSelected=ts.selected,(ta=v.createElement("input")).value="t",ta.type="radio",b.radioValue="t"===ta.value;var ta,ts,tl,tc=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return J(this,S.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,r){var i,n,o=e.nodeType;if(3!==o&&8!==o&&2!==o){if(void 0===e.getAttribute)return S.prop(e,t,r);if(1===o&&S.isXMLDoc(e)||(n=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?tl:void 0)),void 0!==r){if(null===r){S.removeAttr(e,t);return}return n&&"set"in n&&void 0!==(i=n.set(e,r,t))?i:(e.setAttribute(t,r+""),r)}return n&&"get"in n&&null!==(i=n.get(e,t))?i:null==(i=S.find.attr(e,t))?void 0:i}},attrHooks:{type:{set:function(e,t){if(!b.radioValue&&"radio"===t&&D(e,"input")){var r=e.value;return e.setAttribute("type",t),r&&(e.value=r),t}}}},removeAttr:function(e,t){var r,i=0,n=t&&t.match(G);if(n&&1===e.nodeType)for(;r=n[i++];)e.removeAttribute(r)}}),tl={set:function(e,t,r){return!1===t?S.removeAttr(e,r):e.setAttribute(r,r),r}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var r=tc[t]||S.find.attr;tc[t]=function(e,t,i){var n,o,a=t.toLowerCase();return i||(o=tc[a],tc[a]=n,n=null!=r(e,t,i)?a:null,tc[a]=o),n}});var tu=/^(?:input|select|textarea|button)$/i,th=/^(?:a|area)$/i;function td(e){return(e.match(G)||[]).join(" ")}function tf(e){return e.getAttribute&&e.getAttribute("class")||""}function tp(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(G)||[]}S.fn.extend({prop:function(e,t){return J(this,S.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,r){var i,n,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return(1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,n=S.propHooks[t]),void 0!==r)?n&&"set"in n&&void 0!==(i=n.set(e,r,t))?i:e[t]=r:n&&"get"in n&&null!==(i=n.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):tu.test(e.nodeName)||th.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),b.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(e){var t,r,i,n,o,a;return w(e)?this.each(function(t){S(this).addClass(e.call(this,t,tf(this)))}):(t=tp(e)).length?this.each(function(){if(i=tf(this),r=1===this.nodeType&&" "+td(i)+" "){for(o=0;o<t.length;o++)n=t[o],0>r.indexOf(" "+n+" ")&&(r+=n+" ");i!==(a=td(r))&&this.setAttribute("class",a)}}):this},removeClass:function(e){var t,r,i,n,o,a;return w(e)?this.each(function(t){S(this).removeClass(e.call(this,t,tf(this)))}):arguments.length?(t=tp(e)).length?this.each(function(){if(i=tf(this),r=1===this.nodeType&&" "+td(i)+" "){for(o=0;o<t.length;o++)for(n=t[o];r.indexOf(" "+n+" ")>-1;)r=r.replace(" "+n+" "," ");i!==(a=td(r))&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(e,t){var r,i,n,o,a=typeof e,s="string"===a||Array.isArray(e);return w(e)?this.each(function(r){S(this).toggleClass(e.call(this,r,tf(this),t),t)}):"boolean"==typeof t&&s?t?this.addClass(e):this.removeClass(e):(r=tp(e),this.each(function(){if(s)for(n=0,o=S(this);n<r.length;n++)i=r[n],o.hasClass(i)?o.removeClass(i):o.addClass(i);else(void 0===e||"boolean"===a)&&((i=tf(this))&&ea.set(this,"__className__",i),this.setAttribute&&this.setAttribute("class",i||!1===e?"":ea.get(this,"__className__")||""))}))},hasClass:function(e){var t,r,i=0;for(t=" "+e+" ";r=this[i++];)if(1===r.nodeType&&(" "+td(tf(r))+" ").indexOf(t)>-1)return!0;return!1}});var tg=/\r/g;S.fn.extend({val:function(e){var t,r,i,n=this[0];return arguments.length?(i=w(e),this.each(function(r){var n;1===this.nodeType&&(null==(n=i?e.call(this,r,S(this).val()):e)?n="":"number"==typeof n?n+="":Array.isArray(n)&&(n=S.map(n,function(e){return null==e?"":e+""})),(t=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,n,"value")||(this.value=n))})):n?(t=S.valHooks[n.type]||S.valHooks[n.nodeName.toLowerCase()])&&"get"in t&&void 0!==(r=t.get(n,"value"))?r:"string"==typeof(r=n.value)?r.replace(tg,""):null==r?"":r:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:td(S.text(e))}},select:{get:function(e){var t,r,i,n=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],l=a?o+1:n.length;for(i=o<0?l:a?o:0;i<l;i++)if(((r=n[i]).selected||i===o)&&!r.disabled&&(!r.parentNode.disabled||!D(r.parentNode,"optgroup"))){if(t=S(r).val(),a)return t;s.push(t)}return s},set:function(e,t){for(var r,i,n=e.options,o=S.makeArray(t),a=n.length;a--;)((i=n[a]).selected=S.inArray(S.valHooks.option.get(i),o)>-1)&&(r=!0);return r||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=S.inArray(S(e).val(),t)>-1}},b.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var tm=i.location,tb={guid:Date.now()},tw=/\?/;S.parseXML=function(e){var t,r;if(!e||"string"!=typeof e)return null;try{t=new i.DOMParser().parseFromString(e,"text/xml")}catch(e){}return r=t&&t.getElementsByTagName("parsererror")[0],(!t||r)&&S.error("Invalid XML: "+(r?S.map(r.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var ty=/^(?:focusinfocus|focusoutblur)$/,tv=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,r,n){var o,a,s,l,c,u,h,d,f=[r||v],g=p.call(e,"type")?e.type:e,m=p.call(e,"namespace")?e.namespace.split("."):[];if(a=d=s=r=r||v,!(3===r.nodeType||8===r.nodeType||ty.test(g+S.event.triggered))&&(g.indexOf(".")>-1&&(g=(m=g.split(".")).shift(),m.sort()),c=0>g.indexOf(":")&&"on"+g,(e=e[S.expando]?e:new S.Event(g,"object"==typeof e&&e)).isTrigger=n?2:3,e.namespace=m.join("."),e.rnamespace=e.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=r),t=null==t?[e]:S.makeArray(t,[e]),h=S.event.special[g]||{},n||!h.trigger||!1!==h.trigger.apply(r,t))){if(!n&&!h.noBubble&&!y(r)){for(l=h.delegateType||g,ty.test(l+g)||(a=a.parentNode);a;a=a.parentNode)f.push(a),s=a;s===(r.ownerDocument||v)&&f.push(s.defaultView||s.parentWindow||i)}for(o=0;(a=f[o++])&&!e.isPropagationStopped();)d=a,e.type=o>1?l:h.bindType||g,(u=(ea.get(a,"events")||Object.create(null))[e.type]&&ea.get(a,"handle"))&&u.apply(a,t),(u=c&&a[c])&&u.apply&&en(a)&&(e.result=u.apply(a,t),!1===e.result&&e.preventDefault());return e.type=g,!n&&!e.isDefaultPrevented()&&(!h._default||!1===h._default.apply(f.pop(),t))&&en(r)&&c&&w(r[g])&&!y(r)&&((s=r[c])&&(r[c]=null),S.event.triggered=g,e.isPropagationStopped()&&d.addEventListener(g,tv),r[g](),e.isPropagationStopped()&&d.removeEventListener(g,tv),S.event.triggered=void 0,s&&(r[c]=s)),e.result}},simulate:function(e,t,r){var i=S.extend(new S.Event,r,{type:e,isSimulated:!0});S.event.trigger(i,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var r=this[0];if(r)return S.event.trigger(e,t,r,!0)}});var tx=/\[\]$/,tC=/\r?\n/g,t_=/^(?:submit|button|image|reset|file)$/i,tE=/^(?:input|select|textarea|keygen)/i;S.param=function(e,t){var r,i=[],n=function(e,t){var r=w(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==r?"":r)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){n(this.name,this.value)});else for(r in e)!function e(t,r,i,n){var o;if(Array.isArray(r))S.each(r,function(r,o){i||tx.test(t)?n(t,o):e(t+"["+("object"==typeof o&&null!=o?r:"")+"]",o,i,n)});else if(i||"object"!==_(r))n(t,r);else for(o in r)e(t+"["+o+"]",r[o],i,n)}(r,e[r],t,n);return i.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&tE.test(this.nodeName)&&!t_.test(e)&&(this.checked||!ex.test(e))}).map(function(e,t){var r=S(this).val();return null==r?null:Array.isArray(r)?S.map(r,function(e){return{name:t.name,value:e.replace(tC,"\r\n")}}):{name:t.name,value:r.replace(tC,"\r\n")}}).get()}});var tk=/%20/g,tS=/#.*$/,tO=/([?&])_=[^&]*/,tD=/^(.*?):[ \t]*([^\r\n]*)$/mg,tP=/^(?:GET|HEAD)$/,tA=/^\/\//,tT={},t$={},tI="*/".concat("*"),tN=v.createElement("a");function tR(e){return function(t,r){"string"!=typeof t&&(r=t,t="*");var i,n=0,o=t.toLowerCase().match(G)||[];if(w(r))for(;i=o[n++];)"+"===i[0]?(e[i=i.slice(1)||"*"]=e[i]||[]).unshift(r):(e[i]=e[i]||[]).push(r)}}function tM(e,t,r,i){var n={},o=e===t$;function a(s){var l;return n[s]=!0,S.each(e[s]||[],function(e,s){var c=s(t,r,i);return"string"!=typeof c||o||n[c]?o?!(l=c):void 0:(t.dataTypes.unshift(c),a(c),!1)}),l}return a(t.dataTypes[0])||!n["*"]&&a("*")}function tj(e,t){var r,i,n=S.ajaxSettings.flatOptions||{};for(r in t)void 0!==t[r]&&((n[r]?e:i||(i={}))[r]=t[r]);return i&&S.extend(!0,e,i),e}tN.href=tm.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tm.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(tm.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":tI,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?tj(tj(e,S.ajaxSettings),t):tj(S.ajaxSettings,e)},ajaxPrefilter:tR(tT),ajaxTransport:tR(t$),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var r,n,o,a,s,l,c,u,h,d,f=S.ajaxSetup({},t),p=f.context||f,g=f.context&&(p.nodeType||p.jquery)?S(p):S.event,m=S.Deferred(),b=S.Callbacks("once memory"),w=f.statusCode||{},y={},x={},C="canceled",_={readyState:0,getResponseHeader:function(e){var t;if(c){if(!a)for(a={};t=tD.exec(o);)a[t[1].toLowerCase()+" "]=(a[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=a[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return c?o:null},setRequestHeader:function(e,t){return null==c&&(y[e=x[e.toLowerCase()]=x[e.toLowerCase()]||e]=t),this},overrideMimeType:function(e){return null==c&&(f.mimeType=e),this},statusCode:function(e){var t;if(e){if(c)_.always(e[_.status]);else for(t in e)w[t]=[w[t],e[t]]}return this},abort:function(e){var t=e||C;return r&&r.abort(t),E(0,t),this}};if(m.promise(_),f.url=((e||f.url||tm.href)+"").replace(tA,tm.protocol+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=(f.dataType||"*").toLowerCase().match(G)||[""],null==f.crossDomain){l=v.createElement("a");try{l.href=f.url,l.href=l.href,f.crossDomain=tN.protocol+"//"+tN.host!=l.protocol+"//"+l.host}catch(e){f.crossDomain=!0}}if(f.data&&f.processData&&"string"!=typeof f.data&&(f.data=S.param(f.data,f.traditional)),tM(tT,f,t,_),c)return _;for(h in(u=S.event&&f.global)&&0==S.active++&&S.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!tP.test(f.type),n=f.url.replace(tS,""),f.hasContent?f.data&&f.processData&&0===(f.contentType||"").indexOf("application/x-www-form-urlencoded")&&(f.data=f.data.replace(tk,"+")):(d=f.url.slice(n.length),f.data&&(f.processData||"string"==typeof f.data)&&(n+=(tw.test(n)?"&":"?")+f.data,delete f.data),!1===f.cache&&(n=n.replace(tO,"$1"),d=(tw.test(n)?"&":"?")+"_="+tb.guid+++d),f.url=n+d),f.ifModified&&(S.lastModified[n]&&_.setRequestHeader("If-Modified-Since",S.lastModified[n]),S.etag[n]&&_.setRequestHeader("If-None-Match",S.etag[n])),(f.data&&f.hasContent&&!1!==f.contentType||t.contentType)&&_.setRequestHeader("Content-Type",f.contentType),_.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+tI+"; q=0.01":""):f.accepts["*"]),f.headers)_.setRequestHeader(h,f.headers[h]);if(f.beforeSend&&(!1===f.beforeSend.call(p,_,f)||c))return _.abort();if(C="abort",b.add(f.complete),_.done(f.success),_.fail(f.error),r=tM(t$,f,t,_)){if(_.readyState=1,u&&g.trigger("ajaxSend",[_,f]),c)return _;f.async&&f.timeout>0&&(s=i.setTimeout(function(){_.abort("timeout")},f.timeout));try{c=!1,r.send(y,E)}catch(e){if(c)throw e;E(-1,e)}}else E(-1,"No Transport");function E(e,t,a,l){var h,d,y,v,x,C=t;!c&&(c=!0,s&&i.clearTimeout(s),r=void 0,o=l||"",_.readyState=e>0?4:0,h=e>=200&&e<300||304===e,a&&(v=function(e,t,r){for(var i,n,o,a,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i){for(n in s)if(s[n]&&s[n].test(i)){l.unshift(n);break}}if(l[0]in r)o=l[0];else{for(n in r){if(!l[0]||e.converters[n+" "+l[0]]){o=n;break}a||(a=n)}o=o||a}if(o)return o!==l[0]&&l.unshift(o),r[o]}(f,_,a)),!h&&S.inArray("script",f.dataTypes)>-1&&0>S.inArray("json",f.dataTypes)&&(f.converters["text script"]=function(){}),v=function(e,t,r,i){var n,o,a,s,l,c={},u=e.dataTypes.slice();if(u[1])for(a in e.converters)c[a.toLowerCase()]=e.converters[a];for(o=u.shift();o;)if(e.responseFields[o]&&(r[e.responseFields[o]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=u.shift()){if("*"===o)o=l;else if("*"!==l&&l!==o){if(!(a=c[l+" "+o]||c["* "+o])){for(n in c)if((s=n.split(" "))[1]===o&&(a=c[l+" "+s[0]]||c["* "+s[0]])){!0===a?a=c[n]:!0!==c[n]&&(o=s[0],u.unshift(s[1]));break}}if(!0!==a){if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+l+" to "+o}}}}}return{state:"success",data:t}}(f,v,_,h),h?(f.ifModified&&((x=_.getResponseHeader("Last-Modified"))&&(S.lastModified[n]=x),(x=_.getResponseHeader("etag"))&&(S.etag[n]=x)),204===e||"HEAD"===f.type?C="nocontent":304===e?C="notmodified":(C=v.state,d=v.data,h=!(y=v.error))):(y=C,(e||!C)&&(C="error",e<0&&(e=0))),_.status=e,_.statusText=(t||C)+"",h?m.resolveWith(p,[d,C,_]):m.rejectWith(p,[_,C,y]),_.statusCode(w),w=void 0,u&&g.trigger(h?"ajaxSuccess":"ajaxError",[_,f,h?d:y]),b.fireWith(p,[_,C]),!u||(g.trigger("ajaxComplete",[_,f]),--S.active||S.event.trigger("ajaxStop")))}return _},getJSON:function(e,t,r){return S.get(e,t,r,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,t){S[t]=function(e,r,i,n){return w(r)&&(n=n||i,i=r,r=void 0),S.ajax(S.extend({url:e,type:t,dataType:n,data:r,success:i},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,r){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,r)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(w(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return w(e)?this.each(function(t){S(this).wrapInner(e.call(this,t))}):this.each(function(){var t=S(this),r=t.contents();r.length?r.wrapAll(e):t.append(e)})},wrap:function(e){var t=w(e);return this.each(function(r){S(this).wrapAll(t?e.call(this,r):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new i.XMLHttpRequest}catch(e){}};var tL={0:200,1223:204},tB=S.ajaxSettings.xhr();b.cors=!!tB&&"withCredentials"in tB,b.ajax=tB=!!tB,S.ajaxTransport(function(e){var t,r;if(b.cors||tB&&!e.crossDomain)return{send:function(n,o){var a,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(a in e.xhrFields)s[a]=e.xhrFields[a];for(a in e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest"),n)s.setRequestHeader(a,n[a]);t=function(e){return function(){t&&(t=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(tL[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=t(),r=s.onerror=s.ontimeout=t("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&i.setTimeout(function(){t&&r()})},t=t("abort");try{s.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(e){if(e.crossDomain||e.scriptAttrs){var t,r;return{send:function(i,n){t=S("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",r=function(e){t.remove(),r=null,e&&n("error"===e.type?404:200,e.type)}),v.head.appendChild(t[0])},abort:function(){r&&r()}}}});var tU=[],tF=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=tU.pop()||S.expando+"_"+tb.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,r){var n,o,a,s=!1!==e.jsonp&&(tF.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&tF.test(e.data)&&"data");if(s||"jsonp"===e.dataTypes[0])return n=e.jsonpCallback=w(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(tF,"$1"+n):!1!==e.jsonp&&(e.url+=(tw.test(e.url)?"&":"?")+e.jsonp+"="+n),e.converters["script json"]=function(){return a||S.error(n+" was not called"),a[0]},e.dataTypes[0]="json",o=i[n],i[n]=function(){a=arguments},r.always(function(){void 0===o?S(i).removeProp(n):i[n]=o,e[n]&&(e.jsonpCallback=t.jsonpCallback,tU.push(n)),a&&w(o)&&o(a[0]),a=o=void 0}),"script"}),b.createHTMLDocument=((o=v.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===o.childNodes.length),S.parseHTML=function(e,t,r){var i,n,o;return"string"!=typeof e?[]:("boolean"==typeof t&&(r=t,t=!1),t||(b.createHTMLDocument?((i=(t=v.implementation.createHTMLDocument("")).createElement("base")).href=v.location.href,t.head.appendChild(i)):t=v),n=B.exec(e),o=!r&&[],n)?[t.createElement(n[1])]:(n=eD([e],t,o),o&&o.length&&S(o).remove(),S.merge([],n.childNodes))},S.fn.load=function(e,t,r){var i,n,o,a=this,s=e.indexOf(" ");return s>-1&&(i=td(e.slice(s)),e=e.slice(0,s)),w(t)?(r=t,t=void 0):t&&"object"==typeof t&&(n="POST"),a.length>0&&S.ajax({url:e,type:n||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(i?S("<div>").append(S.parseHTML(e)).find(i):e)}).always(r&&function(e,t){a.each(function(){r.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(e){return S.grep(S.timers,function(t){return e===t.elem}).length},S.offset={setOffset:function(e,t,r){var i,n,o,a,s,l,c=S.css(e,"position"),u=S(e),h={};"static"===c&&(e.style.position="relative"),s=u.offset(),o=S.css(e,"top"),l=S.css(e,"left"),("absolute"===c||"fixed"===c)&&(o+l).indexOf("auto")>-1?(a=(i=u.position()).top,n=i.left):(a=parseFloat(o)||0,n=parseFloat(l)||0),w(t)&&(t=t.call(e,r,S.extend({},s))),null!=t.top&&(h.top=t.top-s.top+a),null!=t.left&&(h.left=t.left-s.left+n),"using"in t?t.using.call(e,h):u.css(h)}},S.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){S.offset.setOffset(this,e,t)});var t,r,i=this[0];return i?i.getClientRects().length?(t=i.getBoundingClientRect(),r=i.ownerDocument.defaultView,{top:t.top+r.pageYOffset,left:t.left+r.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,r,i=this[0],n={top:0,left:0};if("fixed"===S.css(i,"position"))t=i.getBoundingClientRect();else{for(t=this.offset(),r=i.ownerDocument,e=i.offsetParent||r.documentElement;e&&(e===r.body||e===r.documentElement)&&"static"===S.css(e,"position");)e=e.parentNode;e&&e!==i&&1===e.nodeType&&(n=S(e).offset(),n.top+=S.css(e,"borderTopWidth",!0),n.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-n.top-S.css(i,"marginTop",!0),left:t.left-n.left-S.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===S.css(e,"position");)e=e.offsetParent;return e||ep})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var r="pageYOffset"===t;S.fn[e]=function(i){return J(this,function(e,i,n){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===n)return o?o[t]:e[i];o?o.scrollTo(r?o.pageXOffset:n,r?n:o.pageYOffset):e[i]=n},e,i,arguments.length)}}),S.each(["top","left"],function(e,t){S.cssHooks[t]=eK(b.pixelPosition,function(e,r){if(r)return r=eZ(e,t),ez.test(r)?S(e).position()[t]+"px":r})}),S.each({Height:"height",Width:"width"},function(e,t){S.each({padding:"inner"+e,content:t,"":"outer"+e},function(r,i){S.fn[i]=function(n,o){var a=arguments.length&&(r||"boolean"!=typeof n),s=r||(!0===n||!0===o?"margin":"border");return J(this,function(t,r,n){var o;return y(t)?0===i.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===n?S.css(t,r,s):S.style(t,r,n,s)},t,a?n:void 0,a)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,r){return this.on(e,null,t,r)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,r,i){return this.on(t,e,r,i)},undelegate:function(e,t,r){return 1==arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){S.fn[t]=function(e,r){return arguments.length>0?this.on(t,null,e,r):this.trigger(t)}});var tW=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var r,i,n;if("string"==typeof t&&(r=e[t],t=e,e=r),w(e))return i=l.call(arguments,2),(n=function(){return e.apply(t||this,i.concat(l.call(arguments)))}).guid=e.guid=e.guid||S.guid++,n},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=D,S.isFunction=w,S.isWindow=y,S.camelCase=ei,S.type=_,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(tW,"$1")},void 0!==(r=(function(){return S}).apply(t,[]))&&(e.exports=r);var tz=i.jQuery,tH=i.$;return S.noConflict=function(e){return i.$===S&&(i.$=tH),e&&i.jQuery===S&&(i.jQuery=tz),S},void 0===n&&(i.jQuery=i.$=S),S})},25266:(e,t,r)=>{"use strict";"function"==typeof process.addon?e.exports=process.addon.bind(process):e.exports=r(2150)},2150:(e,t,r)=>{"use strict";var i=r(57147),n=r(71017),o=r(22037),a=require,s=process.config&&process.config.variables||{},l=!!process.env.PREBUILDS_ONLY,c=process.versions.modules,u=process.versions&&process.versions.electron||process.env.ELECTRON_RUN_AS_NODE?"electron":process.versions&&process.versions.nw?"node-webkit":"node",h=process.env.npm_config_arch||o.arch(),d=process.env.npm_config_platform||o.platform(),f=process.env.LIBC||("linux"===d&&i.existsSync("/etc/alpine-release")?"musl":"glibc"),p=process.env.ARM_VERSION||("arm64"===h?"8":s.arm_version)||"",g=(process.versions.uv||"").split(".")[0];function m(e){return a(m.resolve(e))}function b(e){try{return i.readdirSync(e)}catch(e){return[]}}function w(e,t){var r=b(e).filter(t);return r[0]&&n.join(e,r[0])}function y(e){return/\.node$/.test(e)}function v(e){var t=e.split("-");if(2===t.length){var r=t[0],i=t[1].split("+");if(r&&i.length&&i.every(Boolean))return{name:e,platform:r,architectures:i}}}function x(e,t){return function(r){return null!=r&&r.platform===e&&r.architectures.includes(t)}}function C(e,t){return e.architectures.length-t.architectures.length}function _(e){var t=e.split("."),r=t.pop(),i={file:e,specificity:0};if("node"===r){for(var n=0;n<t.length;n++){var o=t[n];if("node"===o||"electron"===o||"node-webkit"===o)i.runtime=o;else if("napi"===o)i.napi=!0;else if("abi"===o.slice(0,3))i.abi=o.slice(3);else if("uv"===o.slice(0,2))i.uv=o.slice(2);else if("armv"===o.slice(0,4))i.armv=o.slice(4);else{if("glibc"!==o&&"musl"!==o)continue;i.libc=o}i.specificity++}return i}}function E(e,t){return function(r){return null!=r&&(r.runtime===e||!!("node"===r.runtime&&r.napi))&&(r.abi===t||!!r.napi)&&(!r.uv||r.uv===g)&&(!r.armv||r.armv===p)&&(!r.libc||r.libc===f)}}function k(e){return function(t,r){return t.runtime!==r.runtime?t.runtime===e?-1:1:t.abi!==r.abi?t.abi?-1:1:t.specificity!==r.specificity?t.specificity>r.specificity?-1:1:0}}e.exports=m,m.resolve=m.path=function(e){e=n.resolve(e||".");try{var t=a(n.join(e,"package.json")).name.toUpperCase().replace(/-/g,"_");process.env[t+"_PREBUILD"]&&(e=process.env[t+"_PREBUILD"])}catch(e){}if(!l){var r=w(n.join(e,"build/Release"),y);if(r)return r;var i=w(n.join(e,"build/Debug"),y);if(i)return i}var o=m(e);if(o)return o;var s=m(n.dirname(process.execPath));if(s)return s;throw Error("No native build was found for "+["platform="+d,"arch="+h,"runtime="+u,"abi="+c,"uv="+g,p?"armv="+p:"","libc="+f,"node="+process.versions.node,process.versions.electron?"electron="+process.versions.electron:"","webpack=true"].filter(Boolean).join(" ")+"\n    loaded from: "+e+"\n");function m(e){var t=b(n.join(e,"prebuilds")).map(v).filter(x(d,h)).sort(C)[0];if(t){var r=n.join(e,"prebuilds",t.name),i=b(r).map(_).filter(E(u,c)).sort(k(u))[0];if(i)return n.join(r,i.file)}}},m.parseTags=_,m.matchTags=E,m.compareTags=k,m.parseTuple=v,m.matchTuple=x,m.compareTuples=C},13718:(e,t,r)=>{"use strict";let i=r(3480),n=[function(){},function(e,t,r,i){if(i===t.length)throw Error("Ran out of data");let n=t[i];e[r]=n,e[r+1]=n,e[r+2]=n,e[r+3]=255},function(e,t,r,i){if(i+1>=t.length)throw Error("Ran out of data");let n=t[i];e[r]=n,e[r+1]=n,e[r+2]=n,e[r+3]=t[i+1]},function(e,t,r,i){if(i+2>=t.length)throw Error("Ran out of data");e[r]=t[i],e[r+1]=t[i+1],e[r+2]=t[i+2],e[r+3]=255},function(e,t,r,i){if(i+3>=t.length)throw Error("Ran out of data");e[r]=t[i],e[r+1]=t[i+1],e[r+2]=t[i+2],e[r+3]=t[i+3]}],o=[function(){},function(e,t,r,i){let n=t[0];e[r]=n,e[r+1]=n,e[r+2]=n,e[r+3]=i},function(e,t,r){let i=t[0];e[r]=i,e[r+1]=i,e[r+2]=i,e[r+3]=t[1]},function(e,t,r,i){e[r]=t[0],e[r+1]=t[1],e[r+2]=t[2],e[r+3]=i},function(e,t,r){e[r]=t[0],e[r+1]=t[1],e[r+2]=t[2],e[r+3]=t[3]}];t.dataToBitMap=function(e,t){let r,a,s,l,c=t.width,u=t.height,h=t.depth,d=t.bpp,f=t.interlace;if(8!==h){let t,i;t=[],i=0,r={get:function(r){for(;t.length<r;)!function(){let r,n,o,a;if(i===e.length)throw Error("Ran out of data");let s=e[i];switch(i++,h){default:throw Error("unrecognised depth");case 16:o=e[i],i++,t.push((s<<8)+o);break;case 4:o=15&s,a=s>>4,t.push(a,o);break;case 2:r=3&s,n=s>>2&3,o=s>>4&3,a=s>>6&3,t.push(a,o,n,r);break;case 1:r=s>>4&1,n=s>>5&1,o=s>>6&1,a=s>>7&1,t.push(a,o,n,r,s>>3&1,s>>2&1,s>>1&1,1&s)}}();let n=t.slice(0,r);return t=t.slice(r),n},resetAfterLine:function(){t.length=0},end:function(){if(i!==e.length)throw Error("extra data found")}}}a=h<=8?Buffer.alloc(c*u*4):new Uint16Array(c*u*4);let p=Math.pow(2,h)-1,g=0;if(f)s=i.getImagePasses(c,u),l=i.getInterlaceIterator(c,u);else{let e=0;l=function(){let t=e;return e+=4,t},s=[{width:c,height:u}]}for(let t=0;t<s.length;t++)8===h?g=function(e,t,r,i,o,a){let s=e.width,l=e.height,c=e.index;for(let e=0;e<l;e++)for(let l=0;l<s;l++){let s=r(l,e,c);n[i](t,o,s,a),a+=i}return a}(s[t],a,l,d,e,g):function(e,t,r,i,n,a){let s=e.width,l=e.height,c=e.index;for(let e=0;e<l;e++){for(let l=0;l<s;l++){let s=n.get(i),u=r(l,e,c);o[i](t,s,u,a)}n.resetAfterLine()}}(s[t],a,l,d,r,p);if(8===h){if(g!==e.length)throw Error("extra data found")}else r.end();return a}},33947:(e,t,r)=>{"use strict";let i=r(97209);e.exports=function(e,t,r,n){let o=-1!==[i.COLORTYPE_COLOR_ALPHA,i.COLORTYPE_ALPHA].indexOf(n.colorType);if(n.colorType===n.inputColorType){let t;let r=(t=new ArrayBuffer(2),new DataView(t).setInt16(0,256,!0),256!==new Int16Array(t)[0]);if(8===n.bitDepth||16===n.bitDepth&&r)return e}let a=16!==n.bitDepth?e:new Uint16Array(e.buffer),s=255,l=i.COLORTYPE_TO_BPP_MAP[n.inputColorType];4!==l||n.inputHasAlpha||(l=3);let c=i.COLORTYPE_TO_BPP_MAP[n.colorType];16===n.bitDepth&&(s=65535,c*=2);let u=Buffer.alloc(t*r*c),h=0,d=0,f=n.bgColor||{};void 0===f.red&&(f.red=s),void 0===f.green&&(f.green=s),void 0===f.blue&&(f.blue=s);for(let e=0;e<r;e++)for(let e=0;e<t;e++){let e=function(){let e,t,r;let l=s;switch(n.inputColorType){case i.COLORTYPE_COLOR_ALPHA:l=a[h+3],e=a[h],t=a[h+1],r=a[h+2];break;case i.COLORTYPE_COLOR:e=a[h],t=a[h+1],r=a[h+2];break;case i.COLORTYPE_ALPHA:l=a[h+1],t=e=a[h],r=e;break;case i.COLORTYPE_GRAYSCALE:t=e=a[h],r=e;break;default:throw Error("input color type:"+n.inputColorType+" is not supported at present")}return n.inputHasAlpha&&!o&&(l/=s,e=Math.min(Math.max(Math.round((1-l)*f.red+l*e),0),s),t=Math.min(Math.max(Math.round((1-l)*f.green+l*t),0),s),r=Math.min(Math.max(Math.round((1-l)*f.blue+l*r),0),s)),{red:e,green:t,blue:r,alpha:l}}(a,h);switch(n.colorType){case i.COLORTYPE_COLOR_ALPHA:case i.COLORTYPE_COLOR:8===n.bitDepth?(u[d]=e.red,u[d+1]=e.green,u[d+2]=e.blue,o&&(u[d+3]=e.alpha)):(u.writeUInt16BE(e.red,d),u.writeUInt16BE(e.green,d+2),u.writeUInt16BE(e.blue,d+4),o&&u.writeUInt16BE(e.alpha,d+6));break;case i.COLORTYPE_ALPHA:case i.COLORTYPE_GRAYSCALE:{let t=(e.red+e.green+e.blue)/3;8===n.bitDepth?(u[d]=t,o&&(u[d+1]=e.alpha)):(u.writeUInt16BE(t,d),o&&u.writeUInt16BE(e.alpha,d+2));break}default:throw Error("unrecognised color Type "+n.colorType)}h+=l,d+=c}return u}},29068:(e,t,r)=>{"use strict";let i=r(73837),n=r(12781),o=e.exports=function(){n.call(this),this._buffers=[],this._buffered=0,this._reads=[],this._paused=!1,this._encoding="utf8",this.writable=!0};i.inherits(o,n),o.prototype.read=function(e,t){this._reads.push({length:Math.abs(e),allowLess:e<0,func:t}),process.nextTick((function(){this._process(),this._paused&&this._reads&&this._reads.length>0&&(this._paused=!1,this.emit("drain"))}).bind(this))},o.prototype.write=function(e,t){let r;return this.writable?(r=Buffer.isBuffer(e)?e:Buffer.from(e,t||this._encoding),this._buffers.push(r),this._buffered+=r.length,this._process(),this._reads&&0===this._reads.length&&(this._paused=!0),this.writable&&!this._paused):(this.emit("error",Error("Stream not writable")),!1)},o.prototype.end=function(e,t){e&&this.write(e,t),this.writable=!1,this._buffers&&(0===this._buffers.length?this._end():(this._buffers.push(null),this._process()))},o.prototype.destroySoon=o.prototype.end,o.prototype._end=function(){this._reads.length>0&&this.emit("error",Error("Unexpected end of input")),this.destroy()},o.prototype.destroy=function(){this._buffers&&(this.writable=!1,this._reads=null,this._buffers=null,this.emit("close"))},o.prototype._processReadAllowingLess=function(e){this._reads.shift();let t=this._buffers[0];t.length>e.length?(this._buffered-=e.length,this._buffers[0]=t.slice(e.length),e.func.call(this,t.slice(0,e.length))):(this._buffered-=t.length,this._buffers.shift(),e.func.call(this,t))},o.prototype._processRead=function(e){this._reads.shift();let t=0,r=0,i=Buffer.alloc(e.length);for(;t<e.length;){let n=this._buffers[r++],o=Math.min(n.length,e.length-t);n.copy(i,t,0,o),t+=o,o!==n.length&&(this._buffers[--r]=n.slice(o))}r>0&&this._buffers.splice(0,r),this._buffered-=e.length,e.func.call(this,i)},o.prototype._process=function(){try{for(;this._buffered>0&&this._reads&&this._reads.length>0;){let e=this._reads[0];if(e.allowLess)this._processReadAllowingLess(e);else if(this._buffered>=e.length)this._processRead(e);else break}this._buffers&&!this.writable&&this._end()}catch(e){this.emit("error",e)}}},97209:e=>{"use strict";e.exports={PNG_SIGNATURE:[137,80,78,71,13,10,26,10],TYPE_IHDR:1229472850,TYPE_IEND:1229278788,TYPE_IDAT:1229209940,TYPE_PLTE:1347179589,TYPE_tRNS:1951551059,TYPE_gAMA:1732332865,COLORTYPE_GRAYSCALE:0,COLORTYPE_PALETTE:1,COLORTYPE_COLOR:2,COLORTYPE_ALPHA:4,COLORTYPE_PALETTE_COLOR:3,COLORTYPE_COLOR_ALPHA:6,COLORTYPE_TO_BPP_MAP:{0:1,2:3,3:1,4:2,6:4},GAMMA_DIVISION:1e5}},45870:e=>{"use strict";let t=[];!function(){for(let e=0;e<256;e++){let r=e;for(let e=0;e<8;e++)1&r?r=3988292384^r>>>1:r>>>=1;t[e]=r}}();let r=e.exports=function(){this._crc=-1};r.prototype.write=function(e){for(let r=0;r<e.length;r++)this._crc=t[(this._crc^e[r])&255]^this._crc>>>8;return!0},r.prototype.crc32=function(){return -1^this._crc},r.crc32=function(e){let r=-1;for(let i=0;i<e.length;i++)r=t[(r^e[i])&255]^r>>>8;return -1^r}},53062:(e,t,r)=>{"use strict";let i=r(24757),n={0:function(e,t,r,i,n){for(let o=0;o<r;o++)i[n+o]=e[t+o]},1:function(e,t,r,i,n,o){for(let a=0;a<r;a++){let r=a>=o?e[t+a-o]:0,s=e[t+a]-r;i[n+a]=s}},2:function(e,t,r,i,n){for(let o=0;o<r;o++){let a=t>0?e[t+o-r]:0,s=e[t+o]-a;i[n+o]=s}},3:function(e,t,r,i,n,o){for(let a=0;a<r;a++){let s=a>=o?e[t+a-o]:0,l=t>0?e[t+a-r]:0,c=e[t+a]-(s+l>>1);i[n+a]=c}},4:function(e,t,r,n,o,a){for(let s=0;s<r;s++){let l=s>=a?e[t+s-a]:0,c=t>0?e[t+s-r]:0,u=t>0&&s>=a?e[t+s-(r+a)]:0,h=e[t+s]-i(l,c,u);n[o+s]=h}}},o={0:function(e,t,r){let i=0,n=t+r;for(let r=t;r<n;r++)i+=Math.abs(e[r]);return i},1:function(e,t,r,i){let n=0;for(let o=0;o<r;o++){let r=o>=i?e[t+o-i]:0;n+=Math.abs(e[t+o]-r)}return n},2:function(e,t,r){let i=0,n=t+r;for(let o=t;o<n;o++){let n=t>0?e[o-r]:0;i+=Math.abs(e[o]-n)}return i},3:function(e,t,r,i){let n=0;for(let o=0;o<r;o++){let a=o>=i?e[t+o-i]:0,s=t>0?e[t+o-r]:0;n+=Math.abs(e[t+o]-(a+s>>1))}return n},4:function(e,t,r,n){let o=0;for(let a=0;a<r;a++){let s=a>=n?e[t+a-n]:0,l=t>0?e[t+a-r]:0,c=t>0&&a>=n?e[t+a-(r+n)]:0;o+=Math.abs(e[t+a]-i(s,l,c))}return o}};e.exports=function(e,t,r,i,a){let s;if("filterType"in i&&-1!==i.filterType){if("number"==typeof i.filterType)s=[i.filterType];else throw Error("unrecognised filter types")}else s=[0,1,2,3,4];16===i.bitDepth&&(a*=2);let l=t*a,c=0,u=0,h=Buffer.alloc((l+1)*r),d=s[0];for(let t=0;t<r;t++){if(s.length>1){let t=1/0;for(let r=0;r<s.length;r++){let i=o[s[r]](e,u,l,a);i<t&&(d=s[r],t=i)}}h[c]=d,c++,n[d](e,u,l,h,c,a),c+=l,u+=l}return h}},92076:(e,t,r)=>{"use strict";let i=r(73837),n=r(29068),o=r(97298),a=e.exports=function(e){n.call(this);let t=[],r=this;this._filter=new o(e,{read:this.read.bind(this),write:function(e){t.push(e)},complete:function(){r.emit("complete",Buffer.concat(t))}}),this._filter.start()};i.inherits(a,n)},51923:(e,t,r)=>{"use strict";let i=r(93316),n=r(97298);t.process=function(e,t){let r=[],o=new i(e);return new n(t,{read:o.read.bind(o),write:function(e){r.push(e)},complete:function(){}}).start(),o.process(),Buffer.concat(r)}},97298:(e,t,r)=>{"use strict";let i=r(3480),n=r(24757);function o(e,t,r){let i=e*t;return 8!==r&&(i=Math.ceil(i/(8/r))),i}let a=e.exports=function(e,t){let r=e.width,n=e.height,a=e.interlace,s=e.bpp,l=e.depth;if(this.read=t.read,this.write=t.write,this.complete=t.complete,this._imageIndex=0,this._images=[],a){let e=i.getImagePasses(r,n);for(let t=0;t<e.length;t++)this._images.push({byteWidth:o(e[t].width,s,l),height:e[t].height,lineIndex:0})}else this._images.push({byteWidth:o(r,s,l),height:n,lineIndex:0});8===l?this._xComparison=s:16===l?this._xComparison=2*s:this._xComparison=1};a.prototype.start=function(){this.read(this._images[this._imageIndex].byteWidth+1,this._reverseFilterLine.bind(this))},a.prototype._unFilterType1=function(e,t,r){let i=this._xComparison,n=i-1;for(let o=0;o<r;o++){let r=e[1+o],a=o>n?t[o-i]:0;t[o]=r+a}},a.prototype._unFilterType2=function(e,t,r){let i=this._lastLine;for(let n=0;n<r;n++){let r=e[1+n],o=i?i[n]:0;t[n]=r+o}},a.prototype._unFilterType3=function(e,t,r){let i=this._xComparison,n=i-1,o=this._lastLine;for(let a=0;a<r;a++){let r=e[1+a],s=o?o[a]:0,l=Math.floor(((a>n?t[a-i]:0)+s)/2);t[a]=r+l}},a.prototype._unFilterType4=function(e,t,r){let i=this._xComparison,o=i-1,a=this._lastLine;for(let s=0;s<r;s++){let r=e[1+s],l=a?a[s]:0,c=n(s>o?t[s-i]:0,l,s>o&&a?a[s-i]:0);t[s]=r+c}},a.prototype._reverseFilterLine=function(e){let t,r=e[0],i=this._images[this._imageIndex],n=i.byteWidth;if(0===r)t=e.slice(1,n+1);else switch(t=Buffer.alloc(n),r){case 1:this._unFilterType1(e,t,n);break;case 2:this._unFilterType2(e,t,n);break;case 3:this._unFilterType3(e,t,n);break;case 4:this._unFilterType4(e,t,n);break;default:throw Error("Unrecognised filter type - "+r)}this.write(t),i.lineIndex++,i.lineIndex>=i.height?(this._lastLine=null,this._imageIndex++,i=this._images[this._imageIndex]):this._lastLine=t,i?this.read(i.byteWidth+1,this._reverseFilterLine.bind(this)):(this._lastLine=null,this.complete())}},30002:e=>{"use strict";e.exports=function(e,t){let r=t.depth,i=t.width,n=t.height,o=t.colorType,a=t.transColor,s=t.palette,l=e;return 3===o?function(e,t,r,i,n){let o=0;for(let a=0;a<i;a++)for(let i=0;i<r;i++){let r=n[e[o]];if(!r)throw Error("index "+e[o]+" not in palette");for(let e=0;e<4;e++)t[o+e]=r[e];o+=4}}(e,l,i,n,s):(a&&function(e,t,r,i,n){let o=0;for(let a=0;a<i;a++)for(let i=0;i<r;i++){let r=!1;if(1===n.length?n[0]===e[o]&&(r=!0):n[0]===e[o]&&n[1]===e[o+1]&&n[2]===e[o+2]&&(r=!0),r)for(let e=0;e<4;e++)t[o+e]=0;o+=4}}(e,l,i,n,a),8!==r&&(16===r&&(l=Buffer.alloc(i*n*4)),function(e,t,r,i,n){let o=Math.pow(2,n)-1,a=0;for(let n=0;n<i;n++)for(let i=0;i<r;i++){for(let r=0;r<4;r++)t[a+r]=Math.floor(255*e[a+r]/o+.5);a+=4}}(e,l,i,n,r))),l}},3480:(e,t)=>{"use strict";let r=[{x:[0],y:[0]},{x:[4],y:[0]},{x:[0,4],y:[4]},{x:[2,6],y:[0,4]},{x:[0,2,4,6],y:[2,6]},{x:[1,3,5,7],y:[0,2,4,6]},{x:[0,1,2,3,4,5,6,7],y:[1,3,5,7]}];t.getImagePasses=function(e,t){let i=[],n=e%8,o=t%8,a=(e-n)/8,s=(t-o)/8;for(let e=0;e<r.length;e++){let t=r[e],l=a*t.x.length,c=s*t.y.length;for(let e=0;e<t.x.length;e++)if(t.x[e]<n)l++;else break;for(let e=0;e<t.y.length;e++)if(t.y[e]<o)c++;else break;l>0&&c>0&&i.push({width:l,height:c,index:e})}return i},t.getInterlaceIterator=function(e){return function(t,i,n){let o=t%r[n].x.length,a=(t-o)/r[n].x.length*8+r[n].x[o],s=i%r[n].y.length;return 4*a+((i-s)/r[n].y.length*8+r[n].y[s])*e*4}}},90561:(e,t,r)=>{"use strict";let i=r(73837),n=r(12781),o=r(97209),a=r(55103),s=e.exports=function(e){n.call(this),this._packer=new a(e||{}),this._deflate=this._packer.createDeflate(),this.readable=!0};i.inherits(s,n),s.prototype.pack=function(e,t,r,i){this.emit("data",Buffer.from(o.PNG_SIGNATURE)),this.emit("data",this._packer.packIHDR(t,r)),i&&this.emit("data",this._packer.packGAMA(i));let n=this._packer.filterData(e,t,r);this._deflate.on("error",this.emit.bind(this,"error")),this._deflate.on("data",(function(e){this.emit("data",this._packer.packIDAT(e))}).bind(this)),this._deflate.on("end",(function(){this.emit("data",this._packer.packIEND()),this.emit("end")}).bind(this)),this._deflate.end(n)}},22435:(e,t,r)=>{"use strict";let i=!0,n=r(59796);n.deflateSync||(i=!1);let o=r(97209),a=r(55103);e.exports=function(e,t){if(!i)throw Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");let r=new a(t||{}),s=[];s.push(Buffer.from(o.PNG_SIGNATURE)),s.push(r.packIHDR(e.width,e.height)),e.gamma&&s.push(r.packGAMA(e.gamma));let l=r.filterData(e.data,e.width,e.height),c=n.deflateSync(l,r.getDeflateOptions());if(l=null,!c||!c.length)throw Error("bad png - invalid compressed data response");return s.push(r.packIDAT(c)),s.push(r.packIEND()),Buffer.concat(s)}},55103:(e,t,r)=>{"use strict";let i=r(97209),n=r(45870),o=r(33947),a=r(53062),s=r(59796),l=e.exports=function(e){if(this._options=e,e.deflateChunkSize=e.deflateChunkSize||32768,e.deflateLevel=null!=e.deflateLevel?e.deflateLevel:9,e.deflateStrategy=null!=e.deflateStrategy?e.deflateStrategy:3,e.inputHasAlpha=null==e.inputHasAlpha||e.inputHasAlpha,e.deflateFactory=e.deflateFactory||s.createDeflate,e.bitDepth=e.bitDepth||8,e.colorType="number"==typeof e.colorType?e.colorType:i.COLORTYPE_COLOR_ALPHA,e.inputColorType="number"==typeof e.inputColorType?e.inputColorType:i.COLORTYPE_COLOR_ALPHA,-1===[i.COLORTYPE_GRAYSCALE,i.COLORTYPE_COLOR,i.COLORTYPE_COLOR_ALPHA,i.COLORTYPE_ALPHA].indexOf(e.colorType))throw Error("option color type:"+e.colorType+" is not supported at present");if(-1===[i.COLORTYPE_GRAYSCALE,i.COLORTYPE_COLOR,i.COLORTYPE_COLOR_ALPHA,i.COLORTYPE_ALPHA].indexOf(e.inputColorType))throw Error("option input color type:"+e.inputColorType+" is not supported at present");if(8!==e.bitDepth&&16!==e.bitDepth)throw Error("option bit depth:"+e.bitDepth+" is not supported at present")};l.prototype.getDeflateOptions=function(){return{chunkSize:this._options.deflateChunkSize,level:this._options.deflateLevel,strategy:this._options.deflateStrategy}},l.prototype.createDeflate=function(){return this._options.deflateFactory(this.getDeflateOptions())},l.prototype.filterData=function(e,t,r){let n=o(e,t,r,this._options),s=i.COLORTYPE_TO_BPP_MAP[this._options.colorType];return a(n,t,r,this._options,s)},l.prototype._packChunk=function(e,t){let r=t?t.length:0,i=Buffer.alloc(r+12);return i.writeUInt32BE(r,0),i.writeUInt32BE(e,4),t&&t.copy(i,8),i.writeInt32BE(n.crc32(i.slice(4,i.length-4)),i.length-4),i},l.prototype.packGAMA=function(e){let t=Buffer.alloc(4);return t.writeUInt32BE(Math.floor(e*i.GAMMA_DIVISION),0),this._packChunk(i.TYPE_gAMA,t)},l.prototype.packIHDR=function(e,t){let r=Buffer.alloc(13);return r.writeUInt32BE(e,0),r.writeUInt32BE(t,4),r[8]=this._options.bitDepth,r[9]=this._options.colorType,r[10]=0,r[11]=0,r[12]=0,this._packChunk(i.TYPE_IHDR,r)},l.prototype.packIDAT=function(e){return this._packChunk(i.TYPE_IDAT,e)},l.prototype.packIEND=function(){return this._packChunk(i.TYPE_IEND,null)}},24757:e=>{"use strict";e.exports=function(e,t,r){let i=e+t-r,n=Math.abs(i-e),o=Math.abs(i-t),a=Math.abs(i-r);return n<=o&&n<=a?e:o<=a?t:r}},89532:(e,t,r)=>{"use strict";let i=r(73837),n=r(59796),o=r(29068),a=r(92076),s=r(78812),l=r(13718),c=r(30002),u=e.exports=function(e){o.call(this),this._parser=new s(e,{read:this.read.bind(this),error:this._handleError.bind(this),metadata:this._handleMetaData.bind(this),gamma:this.emit.bind(this,"gamma"),palette:this._handlePalette.bind(this),transColor:this._handleTransColor.bind(this),finished:this._finished.bind(this),inflateData:this._inflateData.bind(this),simpleTransparency:this._simpleTransparency.bind(this),headersFinished:this._headersFinished.bind(this)}),this._options=e,this.writable=!0,this._parser.start()};i.inherits(u,o),u.prototype._handleError=function(e){this.emit("error",e),this.writable=!1,this.destroy(),this._inflate&&this._inflate.destroy&&this._inflate.destroy(),this._filter&&(this._filter.destroy(),this._filter.on("error",function(){})),this.errord=!0},u.prototype._inflateData=function(e){if(!this._inflate){if(this._bitmapInfo.interlace)this._inflate=n.createInflate(),this._inflate.on("error",this.emit.bind(this,"error")),this._filter.on("complete",this._complete.bind(this)),this._inflate.pipe(this._filter);else{let e=((this._bitmapInfo.width*this._bitmapInfo.bpp*this._bitmapInfo.depth+7>>3)+1)*this._bitmapInfo.height,t=Math.max(e,n.Z_MIN_CHUNK);this._inflate=n.createInflate({chunkSize:t});let r=e,i=this.emit.bind(this,"error");this._inflate.on("error",function(e){r&&i(e)}),this._filter.on("complete",this._complete.bind(this));let o=this._filter.write.bind(this._filter);this._inflate.on("data",function(e){r&&(e.length>r&&(e=e.slice(0,r)),r-=e.length,o(e))}),this._inflate.on("end",this._filter.end.bind(this._filter))}}this._inflate.write(e)},u.prototype._handleMetaData=function(e){this._metaData=e,this._bitmapInfo=Object.create(e),this._filter=new a(this._bitmapInfo)},u.prototype._handleTransColor=function(e){this._bitmapInfo.transColor=e},u.prototype._handlePalette=function(e){this._bitmapInfo.palette=e},u.prototype._simpleTransparency=function(){this._metaData.alpha=!0},u.prototype._headersFinished=function(){this.emit("metadata",this._metaData)},u.prototype._finished=function(){this.errord||(this._inflate?this._inflate.end():this.emit("error","No Inflate block"))},u.prototype._complete=function(e){let t;if(!this.errord){try{let r=l.dataToBitMap(e,this._bitmapInfo);t=c(r,this._bitmapInfo),r=null}catch(e){this._handleError(e);return}this.emit("parsed",t)}}},42133:(e,t,r)=>{"use strict";let i=!0,n=r(59796),o=r(69369);n.deflateSync||(i=!1);let a=r(93316),s=r(51923),l=r(78812),c=r(13718),u=r(30002);e.exports=function(e,t){let r,h,d,f;if(!i)throw Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");let p=[],g=new a(e);if(new l(t,{read:g.read.bind(g),error:function(e){r=e},metadata:function(e){h=e},gamma:function(e){d=e},palette:function(e){h.palette=e},transColor:function(e){h.transColor=e},inflateData:function(e){p.push(e)},simpleTransparency:function(){h.alpha=!0}}).start(),g.process(),r)throw r;let m=Buffer.concat(p);if(p.length=0,h.interlace)f=n.inflateSync(m);else{let e=((h.width*h.bpp*h.depth+7>>3)+1)*h.height;f=o(m,{chunkSize:e,maxLength:e})}if(m=null,!f||!f.length)throw Error("bad png - invalid inflate data response");let b=s.process(f,h);m=null;let w=c.dataToBitMap(b,h);b=null;let y=u(w,h);return h.data=y,h.gamma=d||0,h}},78812:(e,t,r)=>{"use strict";let i=r(97209),n=r(45870),o=e.exports=function(e,t){this._options=e,e.checkCRC=!1!==e.checkCRC,this._hasIHDR=!1,this._hasIEND=!1,this._emittedHeadersFinished=!1,this._palette=[],this._colorType=0,this._chunks={},this._chunks[i.TYPE_IHDR]=this._handleIHDR.bind(this),this._chunks[i.TYPE_IEND]=this._handleIEND.bind(this),this._chunks[i.TYPE_IDAT]=this._handleIDAT.bind(this),this._chunks[i.TYPE_PLTE]=this._handlePLTE.bind(this),this._chunks[i.TYPE_tRNS]=this._handleTRNS.bind(this),this._chunks[i.TYPE_gAMA]=this._handleGAMA.bind(this),this.read=t.read,this.error=t.error,this.metadata=t.metadata,this.gamma=t.gamma,this.transColor=t.transColor,this.palette=t.palette,this.parsed=t.parsed,this.inflateData=t.inflateData,this.finished=t.finished,this.simpleTransparency=t.simpleTransparency,this.headersFinished=t.headersFinished||function(){}};o.prototype.start=function(){this.read(i.PNG_SIGNATURE.length,this._parseSignature.bind(this))},o.prototype._parseSignature=function(e){let t=i.PNG_SIGNATURE;for(let r=0;r<t.length;r++)if(e[r]!==t[r]){this.error(Error("Invalid file signature"));return}this.read(8,this._parseChunkBegin.bind(this))},o.prototype._parseChunkBegin=function(e){let t=e.readUInt32BE(0),r=e.readUInt32BE(4),o="";for(let t=4;t<8;t++)o+=String.fromCharCode(e[t]);let a=!!(32&e[4]);if(!this._hasIHDR&&r!==i.TYPE_IHDR){this.error(Error("Expected IHDR on beggining"));return}if(this._crc=new n,this._crc.write(Buffer.from(o)),this._chunks[r])return this._chunks[r](t);if(!a){this.error(Error("Unsupported critical chunk type "+o));return}this.read(t+4,this._skipChunk.bind(this))},o.prototype._skipChunk=function(){this.read(8,this._parseChunkBegin.bind(this))},o.prototype._handleChunkEnd=function(){this.read(4,this._parseChunkEnd.bind(this))},o.prototype._parseChunkEnd=function(e){let t=e.readInt32BE(0),r=this._crc.crc32();if(this._options.checkCRC&&r!==t){this.error(Error("Crc error - "+t+" - "+r));return}this._hasIEND||this.read(8,this._parseChunkBegin.bind(this))},o.prototype._handleIHDR=function(e){this.read(e,this._parseIHDR.bind(this))},o.prototype._parseIHDR=function(e){this._crc.write(e);let t=e.readUInt32BE(0),r=e.readUInt32BE(4),n=e[8],o=e[9],a=e[10],s=e[11],l=e[12];if(8!==n&&4!==n&&2!==n&&1!==n&&16!==n){this.error(Error("Unsupported bit depth "+n));return}if(!(o in i.COLORTYPE_TO_BPP_MAP)){this.error(Error("Unsupported color type"));return}if(0!==a){this.error(Error("Unsupported compression method"));return}if(0!==s){this.error(Error("Unsupported filter method"));return}if(0!==l&&1!==l){this.error(Error("Unsupported interlace method"));return}this._colorType=o;let c=i.COLORTYPE_TO_BPP_MAP[this._colorType];this._hasIHDR=!0,this.metadata({width:t,height:r,depth:n,interlace:!!l,palette:!!(o&i.COLORTYPE_PALETTE),color:!!(o&i.COLORTYPE_COLOR),alpha:!!(o&i.COLORTYPE_ALPHA),bpp:c,colorType:o}),this._handleChunkEnd()},o.prototype._handlePLTE=function(e){this.read(e,this._parsePLTE.bind(this))},o.prototype._parsePLTE=function(e){this._crc.write(e);let t=Math.floor(e.length/3);for(let r=0;r<t;r++)this._palette.push([e[3*r],e[3*r+1],e[3*r+2],255]);this.palette(this._palette),this._handleChunkEnd()},o.prototype._handleTRNS=function(e){this.simpleTransparency(),this.read(e,this._parseTRNS.bind(this))},o.prototype._parseTRNS=function(e){if(this._crc.write(e),this._colorType===i.COLORTYPE_PALETTE_COLOR){if(0===this._palette.length){this.error(Error("Transparency chunk must be after palette"));return}if(e.length>this._palette.length){this.error(Error("More transparent colors than palette size"));return}for(let t=0;t<e.length;t++)this._palette[t][3]=e[t];this.palette(this._palette)}this._colorType===i.COLORTYPE_GRAYSCALE&&this.transColor([e.readUInt16BE(0)]),this._colorType===i.COLORTYPE_COLOR&&this.transColor([e.readUInt16BE(0),e.readUInt16BE(2),e.readUInt16BE(4)]),this._handleChunkEnd()},o.prototype._handleGAMA=function(e){this.read(e,this._parseGAMA.bind(this))},o.prototype._parseGAMA=function(e){this._crc.write(e),this.gamma(e.readUInt32BE(0)/i.GAMMA_DIVISION),this._handleChunkEnd()},o.prototype._handleIDAT=function(e){this._emittedHeadersFinished||(this._emittedHeadersFinished=!0,this.headersFinished()),this.read(-e,this._parseIDAT.bind(this,e))},o.prototype._parseIDAT=function(e,t){if(this._crc.write(t),this._colorType===i.COLORTYPE_PALETTE_COLOR&&0===this._palette.length)throw Error("Expected palette not found");this.inflateData(t);let r=e-t.length;r>0?this._handleIDAT(r):this._handleChunkEnd()},o.prototype._handleIEND=function(e){this.read(e,this._parseIEND.bind(this))},o.prototype._parseIEND=function(e){this._crc.write(e),this._hasIEND=!0,this._handleChunkEnd(),this.finished&&this.finished()}},54187:(e,t,r)=>{"use strict";let i=r(42133),n=r(22435);t.read=function(e,t){return i(e,t||{})},t.write=function(e,t){return n(e,t)}},68031:(e,t,r)=>{"use strict";let i=r(73837),n=r(12781),o=r(89532),a=r(90561),s=r(54187),l=t.y=function(e){n.call(this),e=e||{},this.width=0|e.width,this.height=0|e.height,this.data=this.width>0&&this.height>0?Buffer.alloc(4*this.width*this.height):null,e.fill&&this.data&&this.data.fill(0),this.gamma=0,this.readable=this.writable=!0,this._parser=new o(e),this._parser.on("error",this.emit.bind(this,"error")),this._parser.on("close",this._handleClose.bind(this)),this._parser.on("metadata",this._metadata.bind(this)),this._parser.on("gamma",this._gamma.bind(this)),this._parser.on("parsed",(function(e){this.data=e,this.emit("parsed",e)}).bind(this)),this._packer=new a(e),this._packer.on("data",this.emit.bind(this,"data")),this._packer.on("end",this.emit.bind(this,"end")),this._parser.on("close",this._handleClose.bind(this)),this._packer.on("error",this.emit.bind(this,"error"))};i.inherits(l,n),l.sync=s,l.prototype.pack=function(){return this.data&&this.data.length?process.nextTick((function(){this._packer.pack(this.data,this.width,this.height,this.gamma)}).bind(this)):this.emit("error","No data provided"),this},l.prototype.parse=function(e,t){if(t){let e,r;e=(function(e){this.removeListener("error",r),this.data=e,t(null,this)}).bind(this),r=(function(r){this.removeListener("parsed",e),t(r,null)}).bind(this),this.once("parsed",e),this.once("error",r)}return this.end(e),this},l.prototype.write=function(e){return this._parser.write(e),!0},l.prototype.end=function(e){this._parser.end(e)},l.prototype._metadata=function(e){this.width=e.width,this.height=e.height,this.emit("metadata",e)},l.prototype._gamma=function(e){this.gamma=e},l.prototype._handleClose=function(){this._parser.writable||this._packer.readable||this.emit("close")},l.bitblt=function(e,t,r,i,n,o,a,s){if(i|=0,n|=0,o|=0,a|=0,s|=0,(r|=0)>e.width||i>e.height||r+n>e.width||i+o>e.height)throw Error("bitblt reading outside image");if(a>t.width||s>t.height||a+n>t.width||s+o>t.height)throw Error("bitblt writing outside image");for(let l=0;l<o;l++)e.data.copy(t.data,(s+l)*t.width+a<<2,(i+l)*e.width+r<<2,(i+l)*e.width+r+n<<2)},l.prototype.bitblt=function(e,t,r,i,n,o,a){return l.bitblt(this,e,t,r,i,n,o,a),this},l.adjustGamma=function(e){if(e.gamma){for(let t=0;t<e.height;t++)for(let r=0;r<e.width;r++){let i=e.width*t+r<<2;for(let t=0;t<3;t++){let r=e.data[i+t]/255;r=Math.pow(r,1/2.2/e.gamma),e.data[i+t]=Math.round(255*r)}}e.gamma=0}},l.prototype.adjustGamma=function(){l.adjustGamma(this)}},69369:(e,t,r)=>{"use strict";let i=r(39491).ok,n=r(59796),o=r(73837),a=r(14300).kMaxLength;function s(e){if(!(this instanceof s))return new s(e);e&&e.chunkSize<n.Z_MIN_CHUNK&&(e.chunkSize=n.Z_MIN_CHUNK),n.Inflate.call(this,e),this._offset=void 0===this._offset?this._outOffset:this._offset,this._buffer=this._buffer||this._outBuffer,e&&null!=e.maxLength&&(this._maxLength=e.maxLength)}function l(e,t){t&&process.nextTick(t),e._handle&&(e._handle.close(),e._handle=null)}function c(e,t){return function(e,t){if("string"==typeof t&&(t=Buffer.from(t)),!(t instanceof Buffer))throw TypeError("Not a string or buffer");let r=e._finishFlushFlag;return null==r&&(r=n.Z_FINISH),e._processChunk(t,r)}(new s(t),e)}s.prototype._processChunk=function(e,t,r){let o,s;if("function"==typeof r)return n.Inflate._processChunk.call(this,e,t,r);let c=this,u=e&&e.length,h=this._chunkSize-this._offset,d=this._maxLength,f=0,p=[],g=0;this.on("error",function(e){o=e}),i(this._handle,"zlib binding closed");do s=(s=this._handle.writeSync(t,e,f,u,this._buffer,this._offset,h))||this._writeState;while(!this._hadError&&function(e,t){if(c._hadError)return;let r=h-t;if(i(r>=0,"have should not go down"),r>0){let e=c._buffer.slice(c._offset,c._offset+r);if(c._offset+=r,e.length>d&&(e=e.slice(0,d)),p.push(e),g+=e.length,0==(d-=e.length))return!1}return(0===t||c._offset>=c._chunkSize)&&(h=c._chunkSize,c._offset=0,c._buffer=Buffer.allocUnsafe(c._chunkSize)),0===t&&(f+=u-e,u=e,!0)}(s[0],s[1]));if(this._hadError)throw o;if(g>=a)throw l(this),RangeError("Cannot create final Buffer. It would be larger than 0x"+a.toString(16)+" bytes");let m=Buffer.concat(p,g);return l(this),m},o.inherits(s,n.Inflate),e.exports=t=c,t.Inflate=s,t.createInflate=function(e){return new s(e)},t.inflateSync=c},93316:e=>{"use strict";let t=e.exports=function(e){this._buffer=e,this._reads=[]};t.prototype.read=function(e,t){this._reads.push({length:Math.abs(e),allowLess:e<0,func:t})},t.prototype.process=function(){for(;this._reads.length>0&&this._buffer.length;){let e=this._reads[0];if(this._buffer.length&&(this._buffer.length>=e.length||e.allowLess)){this._reads.shift();let t=this._buffer;this._buffer=t.slice(e.length),e.func.call(this,t.slice(0,e.length))}else break}return this._reads.length>0?Error("There are some read requests waitng on finished stream"):this._buffer.length>0?Error("unrecognised content at end of stream"):void 0}},44270:(e,t,r)=>{let i=r(6917),n=r(98756),o=r(29072),a=r(25692);function s(e,t,r,o,a){let s=[].slice.call(arguments,1),l=s.length,c="function"==typeof s[l-1];if(!c&&!i())throw Error("Callback required as last argument");if(c){if(l<2)throw Error("Too few arguments provided");2===l?(a=r,r=t,t=o=void 0):3===l&&(t.getContext&&void 0===a?(a=o,o=void 0):(a=o,o=r,r=t,t=void 0))}else{if(l<1)throw Error("Too few arguments provided");return 1===l?(r=t,t=o=void 0):2!==l||t.getContext||(o=r,r=t,t=void 0),new Promise(function(i,a){try{let a=n.create(r,o);i(e(a,t,o))}catch(e){a(e)}})}try{let i=n.create(r,o);a(null,e(i,t,o))}catch(e){a(e)}}n.create,t.toCanvas=s.bind(null,o.render),s.bind(null,o.renderToDataURL),s.bind(null,function(e,t,r){return a.render(e,r)})},6917:e=>{"use strict";e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},63484:(e,t,r)=>{let i=r(49296).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];let t=Math.floor(e/7)+2,r=i(e),n=145===r?26:2*Math.ceil((r-13)/(2*t-2)),o=[r-7];for(let e=1;e<t-1;e++)o[e]=o[e-1]-n;return o.push(6),o.reverse()},t.getPositions=function(e){let r=[],i=t.getRowColCoords(e),n=i.length;for(let e=0;e<n;e++)for(let t=0;t<n;t++)(0!==e||0!==t)&&(0!==e||t!==n-1)&&(e!==n-1||0!==t)&&r.push([i[e],i[t]]);return r}},24030:(e,t,r)=>{"use strict";let i=r(5334),n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(e){this.mode=i.ALPHANUMERIC,this.data=e}o.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=45*n.indexOf(this.data[t]);r+=n.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(n.indexOf(this.data[t]),6)},e.exports=o},76010:e=>{"use strict";function t(){this.buffer=[],this.length=0}t.prototype={get:function(e){return(this.buffer[Math.floor(e/8)]>>>7-e%8&1)==1},put:function(e,t){for(let r=0;r<t;r++)this.putBit((e>>>t-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},98115:e=>{"use strict";function t(e){if(!e||e<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}t.prototype.set=function(e,t,r,i){let n=e*this.size+t;this.data[n]=r,i&&(this.reservedBit[n]=!0)},t.prototype.get=function(e,t){return this.data[e*this.size+t]},t.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r},t.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=t},31059:(e,t,r)=>{"use strict";let i=r(90791),n=r(5334);function o(e){this.mode=n.BYTE,"string"==typeof e&&(e=i(e)),this.data=new Uint8Array(e)}o.getBitsLength=function(e){return 8*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)},e.exports=o},37902:(e,t,r)=>{let i=r(39763),n=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case i.L:return n[(e-1)*4+0];case i.M:return n[(e-1)*4+1];case i.Q:return n[(e-1)*4+2];case i.H:return n[(e-1)*4+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case i.L:return o[(e-1)*4+0];case i.M:return o[(e-1)*4+1];case i.Q:return o[(e-1)*4+2];case i.H:return o[(e-1)*4+3];default:return}}},39763:(e,t)=>{t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");let r=e.toLowerCase();switch(r){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw Error("Unknown EC Level: "+e)}}(e)}catch(e){return r}}},50566:(e,t,r)=>{let i=r(49296).getSymbolSize;t.getPositions=function(e){let t=i(e);return[[0,0],[t-7,0],[0,t-7]]}},31391:(e,t,r)=>{let i=r(49296),n=i.getBCHDigit(1335);t.getEncodedBits=function(e,t){let r=e.bit<<3|t,o=r<<10;for(;i.getBCHDigit(o)-n>=0;)o^=1335<<i.getBCHDigit(o)-n;return(r<<10|o)^21522}},87132:(e,t)=>{let r=new Uint8Array(512),i=new Uint8Array(256);(function(){let e=1;for(let t=0;t<255;t++)r[t]=e,i[e]=t,256&(e<<=1)&&(e^=285);for(let e=255;e<512;e++)r[e]=r[e-255]})(),t.log=function(e){if(e<1)throw Error("log("+e+")");return i[e]},t.exp=function(e){return r[e]},t.mul=function(e,t){return 0===e||0===t?0:r[i[e]+i[t]]}},97441:(e,t,r)=>{"use strict";let i=r(5334),n=r(49296);function o(e){this.mode=i.KANJI,this.data=e}o.getBitsLength=function(e){return 13*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let r=n.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");r=(r>>>8&255)*192+(255&r),e.put(r,13)}},e.exports=o},85800:(e,t)=>{t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let r={N1:3,N2:3,N3:40,N4:10};t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){let t=e.size,i=0,n=0,o=0,a=null,s=null;for(let l=0;l<t;l++){n=o=0,a=s=null;for(let c=0;c<t;c++){let t=e.get(l,c);t===a?n++:(n>=5&&(i+=r.N1+(n-5)),a=t,n=1),(t=e.get(c,l))===s?o++:(o>=5&&(i+=r.N1+(o-5)),s=t,o=1)}n>=5&&(i+=r.N1+(n-5)),o>=5&&(i+=r.N1+(o-5))}return i},t.getPenaltyN2=function(e){let t=e.size,i=0;for(let r=0;r<t-1;r++)for(let n=0;n<t-1;n++){let t=e.get(r,n)+e.get(r,n+1)+e.get(r+1,n)+e.get(r+1,n+1);(4===t||0===t)&&i++}return i*r.N2},t.getPenaltyN3=function(e){let t=e.size,i=0,n=0,o=0;for(let r=0;r<t;r++){n=o=0;for(let a=0;a<t;a++)n=n<<1&2047|e.get(r,a),a>=10&&(1488===n||93===n)&&i++,o=o<<1&2047|e.get(a,r),a>=10&&(1488===o||93===o)&&i++}return i*r.N3},t.getPenaltyN4=function(e){let t=0,i=e.data.length;for(let r=0;r<i;r++)t+=e.data[r];let n=Math.abs(Math.ceil(100*t/i/5)-10);return n*r.N4},t.applyMask=function(e,r){let i=r.size;for(let n=0;n<i;n++)for(let o=0;o<i;o++)r.isReserved(o,n)||r.xor(o,n,function(e,r,i){switch(e){case t.Patterns.PATTERN000:return(r+i)%2==0;case t.Patterns.PATTERN001:return r%2==0;case t.Patterns.PATTERN010:return i%3==0;case t.Patterns.PATTERN011:return(r+i)%3==0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(i/3))%2==0;case t.Patterns.PATTERN101:return r*i%2+r*i%3==0;case t.Patterns.PATTERN110:return(r*i%2+r*i%3)%2==0;case t.Patterns.PATTERN111:return(r*i%3+(r+i)%2)%2==0;default:throw Error("bad maskPattern:"+e)}}(e,o,n))},t.getBestMask=function(e,r){let i=Object.keys(t.Patterns).length,n=0,o=1/0;for(let a=0;a<i;a++){r(a),t.applyMask(a,e);let i=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(a,e),i<o&&(o=i,n=a)}return n}},5334:(e,t,r)=>{let i=r(96831),n=r(13989);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw Error("Invalid mode: "+e);if(!i.isValid(t))throw Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return n.testNumeric(e)?t.NUMERIC:n.testAlphanumeric(e)?t.ALPHANUMERIC:n.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");let r=e.toLowerCase();switch(r){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw Error("Unknown mode: "+e)}}(e)}catch(e){return r}}},31608:(e,t,r)=>{"use strict";let i=r(5334);function n(e){this.mode=i.NUMERIC,this.data=e.toString()}n.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){let t,r;for(t=0;t+3<=this.data.length;t+=3)r=parseInt(this.data.substr(t,3),10),e.put(r,10);let i=this.data.length-t;i>0&&(r=parseInt(this.data.substr(t),10),e.put(r,3*i+1))},e.exports=n},32178:(e,t,r)=>{let i=r(87132);t.mul=function(e,t){let r=new Uint8Array(e.length+t.length-1);for(let n=0;n<e.length;n++)for(let o=0;o<t.length;o++)r[n+o]^=i.mul(e[n],t[o]);return r},t.mod=function(e,t){let r=new Uint8Array(e);for(;r.length-t.length>=0;){let e=r[0];for(let n=0;n<t.length;n++)r[n]^=i.mul(t[n],e);let n=0;for(;n<r.length&&0===r[n];)n++;r=r.slice(n)}return r},t.generateECPolynomial=function(e){let r=new Uint8Array([1]);for(let n=0;n<e;n++)r=t.mul(r,new Uint8Array([1,i.exp(n)]));return r}},98756:(e,t,r)=>{let i=r(49296),n=r(39763),o=r(76010),a=r(98115),s=r(63484),l=r(50566),c=r(85800),u=r(37902),h=r(56448),d=r(60788),f=r(31391),p=r(5334),g=r(5744);function m(e,t,r){let i,n;let o=e.size,a=f.getEncodedBits(t,r);for(i=0;i<15;i++)n=(a>>i&1)==1,i<6?e.set(i,8,n,!0):i<8?e.set(i+1,8,n,!0):e.set(o-15+i,8,n,!0),i<8?e.set(8,o-i-1,n,!0):i<9?e.set(8,15-i-1+1,n,!0):e.set(8,15-i-1,n,!0);e.set(o-8,8,1,!0)}t.create=function(e,t){let r,f;if(void 0===e||""===e)throw Error("No input text");let b=n.M;return void 0!==t&&(b=n.from(t.errorCorrectionLevel,n.M),r=d.from(t.version),f=c.from(t.maskPattern),t.toSJISFunc&&i.setToSJISFunction(t.toSJISFunc)),function(e,t,r,n){let f;if(Array.isArray(e))f=g.fromArray(e);else if("string"==typeof e){let i=t;if(!i){let t=g.rawSplit(e);i=d.getBestVersionForData(t,r)}f=g.fromString(e,i||40)}else throw Error("Invalid data");let b=d.getBestVersionForData(f,r);if(!b)throw Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<b)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+b+".\n")}else t=b;let w=function(e,t,r){let n=new o;r.forEach(function(t){n.put(t.mode.bit,4),n.put(t.getLength(),p.getCharCountIndicator(t.mode,e)),t.write(n)});let a=i.getSymbolTotalCodewords(e),s=u.getTotalCodewordsCount(e,t),l=(a-s)*8;for(n.getLengthInBits()+4<=l&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);let c=(l-n.getLengthInBits())/8;for(let e=0;e<c;e++)n.put(e%2?17:236,8);return function(e,t,r){let n,o;let a=i.getSymbolTotalCodewords(t),s=u.getTotalCodewordsCount(t,r),l=a-s,c=u.getBlocksCount(t,r),d=a%c,f=c-d,p=Math.floor(a/c),g=Math.floor(l/c),m=g+1,b=p-g,w=new h(b),y=0,v=Array(c),x=Array(c),C=0,_=new Uint8Array(e.buffer);for(let e=0;e<c;e++){let t=e<f?g:m;v[e]=_.slice(y,y+t),x[e]=w.encode(v[e]),y+=t,C=Math.max(C,t)}let E=new Uint8Array(a),k=0;for(n=0;n<C;n++)for(o=0;o<c;o++)n<v[o].length&&(E[k++]=v[o][n]);for(n=0;n<b;n++)for(o=0;o<c;o++)E[k++]=x[o][n];return E}(n,e,t)}(t,r,f),y=i.getSymbolSize(t),v=new a(y);return function(e,t){let r=e.size,i=l.getPositions(t);for(let t=0;t<i.length;t++){let n=i[t][0],o=i[t][1];for(let t=-1;t<=7;t++)if(!(n+t<=-1)&&!(r<=n+t))for(let i=-1;i<=7;i++)o+i<=-1||r<=o+i||(t>=0&&t<=6&&(0===i||6===i)||i>=0&&i<=6&&(0===t||6===t)||t>=2&&t<=4&&i>=2&&i<=4?e.set(n+t,o+i,!0,!0):e.set(n+t,o+i,!1,!0))}}(v,t),function(e){let t=e.size;for(let r=8;r<t-8;r++){let t=r%2==0;e.set(r,6,t,!0),e.set(6,r,t,!0)}}(v),function(e,t){let r=s.getPositions(t);for(let t=0;t<r.length;t++){let i=r[t][0],n=r[t][1];for(let t=-2;t<=2;t++)for(let r=-2;r<=2;r++)-2===t||2===t||-2===r||2===r||0===t&&0===r?e.set(i+t,n+r,!0,!0):e.set(i+t,n+r,!1,!0)}}(v,t),m(v,r,0),t>=7&&function(e,t){let r,i,n;let o=e.size,a=d.getEncodedBits(t);for(let t=0;t<18;t++)r=Math.floor(t/3),i=t%3+o-8-3,n=(a>>t&1)==1,e.set(r,i,n,!0),e.set(i,r,n,!0)}(v,t),function(e,t){let r=e.size,i=-1,n=r-1,o=7,a=0;for(let s=r-1;s>0;s-=2)for(6===s&&s--;;){for(let r=0;r<2;r++)if(!e.isReserved(n,s-r)){let i=!1;a<t.length&&(i=(t[a]>>>o&1)==1),e.set(n,s-r,i),-1==--o&&(a++,o=7)}if((n+=i)<0||r<=n){n-=i,i=-i;break}}}(v,w),isNaN(n)&&(n=c.getBestMask(v,m.bind(null,v,r))),c.applyMask(n,v),m(v,r,n),{modules:v,version:t,errorCorrectionLevel:r,maskPattern:n,segments:f}}(e,r,b,f)}},56448:(e,t,r)=>{"use strict";let i=r(32178);function n(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}n.prototype.initialize=function(e){this.degree=e,this.genPoly=i.generateECPolynomial(this.degree)},n.prototype.encode=function(e){if(!this.genPoly)throw Error("Encoder not initialized");let t=new Uint8Array(e.length+this.degree);t.set(e);let r=i.mod(t,this.genPoly),n=this.degree-r.length;if(n>0){let e=new Uint8Array(this.degree);return e.set(r,n),e}return r},e.exports=n},13989:(e,t)=>{let r="[0-9]+",i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";i=i.replace(/u/g,"\\u");let n="(?:(?![A-Z0-9 $%*+\\-./:]|"+i+")(?:.|[\r\n]))+";t.KANJI=RegExp(i,"g"),t.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=RegExp(n,"g"),t.NUMERIC=RegExp(r,"g"),t.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let o=RegExp("^"+i+"$"),a=RegExp("^"+r+"$"),s=RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return o.test(e)},t.testNumeric=function(e){return a.test(e)},t.testAlphanumeric=function(e){return s.test(e)}},5744:(e,t,r)=>{let i=r(5334),n=r(31608),o=r(24030),a=r(31059),s=r(97441),l=r(13989),c=r(49296),u=r(19638);function h(e){return unescape(encodeURIComponent(e)).length}function d(e,t,r){let i;let n=[];for(;null!==(i=e.exec(r));)n.push({data:i[0],index:i.index,mode:t,length:i[0].length});return n}function f(e){let t,r;let n=d(l.NUMERIC,i.NUMERIC,e),o=d(l.ALPHANUMERIC,i.ALPHANUMERIC,e);c.isKanjiModeEnabled()?(t=d(l.BYTE,i.BYTE,e),r=d(l.KANJI,i.KANJI,e)):(t=d(l.BYTE_KANJI,i.BYTE,e),r=[]);let a=n.concat(o,t,r);return a.sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function p(e,t){switch(t){case i.NUMERIC:return n.getBitsLength(e);case i.ALPHANUMERIC:return o.getBitsLength(e);case i.KANJI:return s.getBitsLength(e);case i.BYTE:return a.getBitsLength(e)}}function g(e,t){let r;let l=i.getBestModeForData(e);if((r=i.from(t,l))!==i.BYTE&&r.bit<l.bit)throw Error('"'+e+'" cannot be encoded with mode '+i.toString(r)+".\n Suggested mode is: "+i.toString(l));switch(r!==i.KANJI||c.isKanjiModeEnabled()||(r=i.BYTE),r){case i.NUMERIC:return new n(e);case i.ALPHANUMERIC:return new o(e);case i.KANJI:return new s(e);case i.BYTE:return new a(e)}}t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(g(t,null)):t.data&&e.push(g(t.data,t.mode)),e},[])},t.fromString=function(e,r){let n=f(e,c.isKanjiModeEnabled()),o=function(e){let t=[];for(let r=0;r<e.length;r++){let n=e[r];switch(n.mode){case i.NUMERIC:t.push([n,{data:n.data,mode:i.ALPHANUMERIC,length:n.length},{data:n.data,mode:i.BYTE,length:n.length}]);break;case i.ALPHANUMERIC:t.push([n,{data:n.data,mode:i.BYTE,length:n.length}]);break;case i.KANJI:t.push([n,{data:n.data,mode:i.BYTE,length:h(n.data)}]);break;case i.BYTE:t.push([{data:n.data,mode:i.BYTE,length:h(n.data)}])}}return t}(n),a=function(e,t){let r={},n={start:{}},o=["start"];for(let a=0;a<e.length;a++){let s=e[a],l=[];for(let e=0;e<s.length;e++){let c=s[e],u=""+a+e;l.push(u),r[u]={node:c,lastCount:0},n[u]={};for(let e=0;e<o.length;e++){let a=o[e];r[a]&&r[a].node.mode===c.mode?(n[a][u]=p(r[a].lastCount+c.length,c.mode)-p(r[a].lastCount,c.mode),r[a].lastCount+=c.length):(r[a]&&(r[a].lastCount=c.length),n[a][u]=p(c.length,c.mode)+4+i.getCharCountIndicator(c.mode,t))}}o=l}for(let e=0;e<o.length;e++)n[o[e]].end=0;return{map:n,table:r}}(o,r),s=u.find_path(a.map,"start","end"),l=[];for(let e=1;e<s.length-1;e++)l.push(a.table[s[e]].node);return t.fromArray(l.reduce(function(e,t){let r=e.length-1>=0?e[e.length-1]:null;return r&&r.mode===t.mode?e[e.length-1].data+=t.data:e.push(t),e},[]))},t.rawSplit=function(e){return t.fromArray(f(e,c.isKanjiModeEnabled()))}},49296:(e,t)=>{let r;let i=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw Error('"version" cannot be null or undefined');if(e<1||e>40)throw Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return i[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw Error('"toSJISFunc" is not a valid function.');r=e},t.isKanjiModeEnabled=function(){return void 0!==r},t.toSJIS=function(e){return r(e)}},96831:(e,t)=>{t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},60788:(e,t,r)=>{let i=r(49296),n=r(37902),o=r(39763),a=r(5334),s=r(96831),l=i.getBCHDigit(7973);function c(e,t){return a.getCharCountIndicator(e,t)+4}t.from=function(e,t){return s.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,r){if(!s.isValid(e))throw Error("Invalid QR Code version");void 0===r&&(r=a.BYTE);let o=i.getSymbolTotalCodewords(e),l=n.getTotalCodewordsCount(e,t),u=(o-l)*8;if(r===a.MIXED)return u;let h=u-c(r,e);switch(r){case a.NUMERIC:return Math.floor(h/10*3);case a.ALPHANUMERIC:return Math.floor(h/11*2);case a.KANJI:return Math.floor(h/13);case a.BYTE:default:return Math.floor(h/8)}},t.getBestVersionForData=function(e,r){let i;let n=o.from(r,o.M);if(Array.isArray(e)){if(e.length>1)return function(e,r){for(let i=1;i<=40;i++){let n=function(e,t){let r=0;return e.forEach(function(e){let i=c(e.mode,t);r+=i+e.getBitsLength()}),r}(e,i);if(n<=t.getCapacity(i,r,a.MIXED))return i}}(e,n);if(0===e.length)return 1;i=e[0]}else i=e;return function(e,r,i){for(let n=1;n<=40;n++)if(r<=t.getCapacity(n,i,e))return n}(i.mode,i.getLength(),n)},t.getEncodedBits=function(e){if(!s.isValid(e)||e<7)throw Error("Invalid QR Code version");let t=e<<12;for(;i.getBCHDigit(t)-l>=0;)t^=7973<<i.getBCHDigit(t)-l;return e<<12|t}},75944:(e,t,r)=>{"use strict";e.exports=r(39083)},29072:(e,t,r)=>{let i=r(46613);t.render=function(e,t,r){var n;let o=r,a=t;void 0!==o||t&&t.getContext||(o=t,t=void 0),t||(a=function(){try{return document.createElement("canvas")}catch(e){throw Error("You need to specify a canvas element")}}()),o=i.getOptions(o);let s=i.getImageWidth(e.modules.size,o),l=a.getContext("2d"),c=l.createImageData(s,s);return i.qrToImageData(c.data,e,o),n=a,l.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px",l.putImageData(c,0,0),a},t.renderToDataURL=function(e,r,i){let n=i;void 0!==n||r&&r.getContext||(n=r,r=void 0),n||(n={});let o=t.render(e,r,n),a=n.type||"image/png",s=n.rendererOpts||{};return o.toDataURL(a,s.quality)}},35364:(e,t,r)=>{let i=r(57147),n=r(68031).y,o=r(46613);t.render=function(e,t){let r=o.getOptions(t),i=r.rendererOpts,a=o.getImageWidth(e.modules.size,r);i.width=a,i.height=a;let s=new n(i);return o.qrToImageData(s.data,e,r),s},t.renderToDataURL=function(e,r,i){void 0===i&&(i=r,r=void 0),t.renderToBuffer(e,r,function(e,t){e&&i(e);let r="data:image/png;base64,";r+=t.toString("base64"),i(null,r)})},t.renderToBuffer=function(e,r,i){void 0===i&&(i=r,r=void 0);let n=t.render(e,r),o=[];n.on("error",i),n.on("data",function(e){o.push(e)}),n.on("end",function(){i(null,Buffer.concat(o))}),n.pack()},t.renderToFile=function(e,r,n,o){void 0===o&&(o=n,n=void 0);let a=!1,s=(...e)=>{a||(a=!0,o.apply(null,e))},l=i.createWriteStream(e);l.on("error",s),l.on("close",s),t.renderToFileStream(l,r,n)},t.renderToFileStream=function(e,r,i){let n=t.render(r,i);n.pack().pipe(e)}},25692:(e,t,r)=>{let i=r(46613);function n(e,t){let r=e.a/255,i=t+'="'+e.hex+'"';return r<1?i+" "+t+'-opacity="'+r.toFixed(2).slice(1)+'"':i}function o(e,t,r){let i=e+t;return void 0!==r&&(i+=" "+r),i}t.render=function(e,t,r){let a=i.getOptions(t),s=e.modules.size,l=e.modules.data,c=s+2*a.margin,u=a.color.light.a?"<path "+n(a.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",h="<path "+n(a.color.dark,"stroke")+' d="'+function(e,t,r){let i="",n=0,a=!1,s=0;for(let l=0;l<e.length;l++){let c=Math.floor(l%t),u=Math.floor(l/t);c||a||(a=!0),e[l]?(s++,l>0&&c>0&&e[l-1]||(i+=a?o("M",c+r,.5+u+r):o("m",n,0),n=0,a=!1),c+1<t&&e[l+1]||(i+=o("h",s),s=0)):n++}return i}(l,s,a.margin)+'"/>',d=a.width?'width="'+a.width+'" height="'+a.width+'" ':"",f='<svg xmlns="http://www.w3.org/2000/svg" '+d+('viewBox="0 0 '+c)+" "+c+'" shape-rendering="crispEdges">'+u+h+"</svg>\n";return"function"==typeof r&&r(null,f),f}},8401:(e,t,r)=>{let i=r(25692);t.render=i.render,t.renderToFile=function(e,i,n,o){void 0===o&&(o=n,n=void 0);let a=r(57147),s=t.render(i,n);a.writeFile(e,'<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">'+s,o)}},90068:(e,t,r)=>{let i=r(25397),n=r(16649);t.render=function(e,t,r){return t&&t.small?n.render(e,t,r):i.render(e,t,r)}},16649:(e,t)=>{let r="\x1b[37m",i="\x1b[30m",n="\x1b[0m",o="\x1b[47m"+i,a="\x1b[40m"+r,s=function(e,t,r,i){let n=t+1;return r>=n||i>=n||i<-1||r<-1?"0":r>=t||i>=t||i<0||r<0?"1":e[i*t+r]?"2":"1"},l=function(e,t,r,i){return s(e,t,r,i)+s(e,t,r,i+1)};t.render=function(e,t,s){var c,u;let h=e.modules.size,d=e.modules.data,f=!!(t&&t.inverse),p=t&&t.inverse?a:o,g={"00":n+" "+p,"01":n+(c=f?i:r)+"▄"+p,"02":n+(u=f?r:i)+"▄"+p,10:n+c+"▀"+p,11:" ",12:"▄",20:n+u+"▀"+p,21:"▀",22:"█"},m=n+"\n"+p,b=p;for(let e=-1;e<h+1;e+=2){for(let t=-1;t<h;t++)b+=g[l(d,h,t,e)];b+=g[l(d,h,h,e)]+m}return b+=n,"function"==typeof s&&s(null,b),b}},25397:(e,t)=>{t.render=function(e,t,r){let i=e.modules.size,n=e.modules.data,o="\x1b[47m  \x1b[0m",a="",s=Array(i+3).join(o),l=[,,].join(o);a+=s+"\n";for(let e=0;e<i;++e){a+=o;for(let t=0;t<i;t++)a+=n[e*i+t]?"\x1b[40m  \x1b[0m":o;a+=l+"\n"}return a+=s+"\n","function"==typeof r&&r(null,a),a}},11886:(e,t,r)=>{let i=r(46613),n={WW:" ",WB:"▄",BB:"█",BW:"▀"},o={BB:" ",BW:"▄",WW:"█",WB:"▀"};t.render=function(e,t,r){let a=i.getOptions(t),s=n;("#ffffff"===a.color.dark.hex||"#000000"===a.color.light.hex)&&(s=o);let l=e.modules.size,c=e.modules.data,u="",h=Array(l+2*a.margin+1).join(s.WW);h=Array(a.margin/2+1).join(h+"\n");let d=Array(a.margin+1).join(s.WW);u+=h;for(let e=0;e<l;e+=2){u+=d;for(let t=0;t<l;t++){var f;let r=c[e*l+t],i=c[(e+1)*l+t];u+=(f=s,r&&i?f.BB:r&&!i?f.BW:!r&&i?f.WB:f.WW)}u+=d+"\n"}return u+=h.slice(0,-1),"function"==typeof r&&r(null,u),u},t.renderToFile=function(e,i,n,o){void 0===o&&(o=n,n=void 0);let a=r(57147),s=t.render(i,n);a.writeFile(e,s,o)}},46613:(e,t)=>{function r(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw Error("Invalid hex color: "+e);(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");let r=parseInt(t.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});let t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,i=e.width&&e.width>=21?e.width:void 0,n=e.scale||4;return{width:i,scale:i?4:n,margin:t,color:{dark:r(e.color.dark||"#000000ff"),light:r(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,r){let i=t.getScale(e,r);return Math.floor((e+2*r.margin)*i)},t.qrToImageData=function(e,r,i){let n=r.modules.size,o=r.modules.data,a=t.getScale(n,i),s=Math.floor((n+2*i.margin)*a),l=i.margin*a,c=[i.color.light,i.color.dark];for(let t=0;t<s;t++)for(let r=0;r<s;r++){let u=(t*s+r)*4,h=i.color.light;if(t>=l&&r>=l&&t<s-l&&r<s-l){let e=Math.floor((t-l)/a),i=Math.floor((r-l)/a);h=c[o[e*n+i]?1:0]}e[u++]=h.r,e[u++]=h.g,e[u++]=h.b,e[u]=h.a}}},39083:(e,t,r)=>{let i=r(6917),n=r(98756),o=r(35364),a=r(11886),s=r(90068),l=r(8401);function c(e,t,r){if(void 0===e)throw Error("String required as first argument");if(void 0===r&&(r=t,t={}),"function"!=typeof r){if(i())t=r||{},r=null;else throw Error("Callback required as last argument")}return{opts:t,cb:r}}function u(e){switch(e){case"svg":return l;case"txt":case"utf8":return a;default:return o}}function h(e,t,r){if(!r.cb)return new Promise(function(i,o){try{let a=n.create(t,r.opts);return e(a,r.opts,function(e,t){return e?o(e):i(t)})}catch(e){o(e)}});try{let i=n.create(t,r.opts);return e(i,r.opts,r.cb)}catch(e){r.cb(e)}}t.create=n.create,t.toCanvas=r(44270).toCanvas,t.toString=function(e,t,r){let i=c(e,t,r),n=i.opts?i.opts.type:void 0,o=function(e){switch(e){case"svg":return l;case"terminal":return s;default:return a}}(n);return h(o.render,e,i)},t.toDataURL=function(e,t,r){let i=c(e,t,r),n=u(i.opts.type);return h(n.renderToDataURL,e,i)},t.toBuffer=function(e,t,r){let i=c(e,t,r),n=u(i.opts.type);return h(n.renderToBuffer,e,i)},t.toFile=function(e,t,r,n){if("string"!=typeof e||!("string"==typeof t||"object"==typeof t))throw Error("Invalid argument");if(arguments.length<3&&!i())throw Error("Too few arguments provided");let o=c(t,r,n),a=o.opts.type||e.slice((e.lastIndexOf(".")-1>>>0)+2).toLowerCase(),s=u(a),l=s.renderToFile.bind(null,e);return h(l,t,o)},t.toFileStream=function(e,t,r){if(arguments.length<2)throw Error("Too few arguments provided");let i=c(t,r,e.emit.bind(e,"error")),n=u("png"),o=n.renderToFileStream.bind(null,e);h(o,t,i)}},20498:e=>{"use strict";e.exports=(e,t)=>{if(!("string"==typeof e&&"string"==typeof t))throw TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];let r=e.indexOf(t);return -1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},33753:e=>{"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)},95397:(e,t,r)=>{"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=r(34218);"function"==typeof Object.is&&Object.is,i.useState,i.useEffect,i.useLayoutEffect,i.useDebugValue,t.useSyncExternalStore=void 0!==i.useSyncExternalStore?i.useSyncExternalStore:function(e,t){return t()}},4403:(e,t,r)=>{"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=r(34218),n=r(41913),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=n.useSyncExternalStore,s=i.useRef,l=i.useEffect,c=i.useMemo,u=i.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,i,n){var h=s(null);if(null===h.current){var d={hasValue:!1,value:null};h.current=d}else d=h.current;var f=a(e,(h=c(function(){function e(e){if(!l){if(l=!0,a=e,e=i(e),void 0!==n&&d.hasValue){var t=d.value;if(n(t,e))return s=t}return s=e}if(t=s,o(a,e))return t;var r=i(e);return void 0!==n&&n(t,r)?t:(a=e,s=r)}var a,s,l=!1,c=void 0===r?null:r;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,r,i,n]))[0],h[1]);return l(function(){d.hasValue=!0,d.value=f},[f]),u(f),f}},41913:(e,t,r)=>{"use strict";e.exports=r(95397)},57359:(e,t,r)=>{"use strict";e.exports=r(4403)},45126:e=>{"use strict";e.exports=function(e){let t=e.length,r=0;for(;r<t;)if((128&e[r])==0)r++;else if((224&e[r])==192){if(r+1===t||(192&e[r+1])!=128||(254&e[r])==192)return!1;r+=2}else if((240&e[r])==224){if(r+2>=t||(192&e[r+1])!=128||(192&e[r+2])!=128||224===e[r]&&(224&e[r+1])==128||237===e[r]&&(224&e[r+1])==160)return!1;r+=3}else{if((248&e[r])!=240||r+3>=t||(192&e[r+1])!=128||(192&e[r+2])!=128||(192&e[r+3])!=128||240===e[r]&&(240&e[r+1])==128||244===e[r]&&e[r+1]>143||e[r]>244)return!1;r+=4}return!0}},30251:(e,t,r)=>{"use strict";try{e.exports=r(25266)(__dirname)}catch(t){e.exports=r(45126)}},91282:(e,t,r)=>{"use strict";let WebSocket=r(99364);WebSocket.createWebSocketStream=r(66994),WebSocket.Server=r(53840),WebSocket.Receiver=r(92535),WebSocket.Sender=r(67345),e.exports=WebSocket},78440:(e,t,r)=>{"use strict";let{EMPTY_BUFFER:i}=r(92267);function n(e,t){if(0===e.length)return i;if(1===e.length)return e[0];let r=Buffer.allocUnsafe(t),n=0;for(let t=0;t<e.length;t++){let i=e[t];r.set(i,n),n+=i.length}return n<t?r.slice(0,n):r}function o(e,t,r,i,n){for(let o=0;o<n;o++)r[i+o]=e[o]^t[3&o]}function a(e,t){let r=e.length;for(let i=0;i<r;i++)e[i]^=t[3&i]}function s(e){return e.byteLength===e.buffer.byteLength?e.buffer:e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)}function l(e){let t;return(l.readOnly=!0,Buffer.isBuffer(e))?e:(e instanceof ArrayBuffer?t=Buffer.from(e):ArrayBuffer.isView(e)?t=Buffer.from(e.buffer,e.byteOffset,e.byteLength):(t=Buffer.from(e),l.readOnly=!1),t)}try{let t=r(61413),i=t.BufferUtil||t;e.exports={concat:n,mask(e,t,r,n,a){a<48?o(e,t,r,n,a):i.mask(e,t,r,n,a)},toArrayBuffer:s,toBuffer:l,unmask(e,t){e.length<32?a(e,t):i.unmask(e,t)}}}catch(t){e.exports={concat:n,mask:o,toArrayBuffer:s,toBuffer:l,unmask:a}}},92267:e=>{"use strict";e.exports={BINARY_TYPES:["nodebuffer","arraybuffer","fragments"],GUID:"258EAFA5-E914-47DA-95CA-C5AB0DC85B11",kStatusCode:Symbol("status-code"),kWebSocket:Symbol("websocket"),EMPTY_BUFFER:Buffer.alloc(0),NOOP:()=>{}}},61198:e=>{"use strict";class Event{constructor(e,t){this.target=t,this.type=e}}class MessageEvent extends Event{constructor(e,t){super("message",t),this.data=e}}class CloseEvent extends Event{constructor(e,t,r){super("close",r),this.wasClean=r._closeFrameReceived&&r._closeFrameSent,this.reason=t,this.code=e}}class t extends Event{constructor(e){super("open",e)}}class ErrorEvent extends Event{constructor(e,t){super("error",t),this.message=e.message,this.error=e}}e.exports={addEventListener(e,r,i){if("function"!=typeof r)return;function n(e){r.call(this,new MessageEvent(e,this))}function o(e,t){r.call(this,new CloseEvent(e,t,this))}function a(e){r.call(this,new ErrorEvent(e,this))}function s(){r.call(this,new t(this))}let l=i&&i.once?"once":"on";"message"===e?(n._listener=r,this[l](e,n)):"close"===e?(o._listener=r,this[l](e,o)):"error"===e?(a._listener=r,this[l](e,a)):"open"===e?(s._listener=r,this[l](e,s)):this[l](e,r)},removeEventListener(e,t){let r=this.listeners(e);for(let i=0;i<r.length;i++)(r[i]===t||r[i]._listener===t)&&this.removeListener(e,r[i])}}},31138:e=>{"use strict";let t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0];function r(e,t,r){void 0===e[t]?e[t]=[r]:e[t].push(r)}e.exports={format:function(e){return Object.keys(e).map(t=>{let r=e[t];return Array.isArray(r)||(r=[r]),r.map(e=>[t].concat(Object.keys(e).map(t=>{let r=e[t];return Array.isArray(r)||(r=[r]),r.map(e=>!0===e?t:`${t}=${e}`).join("; ")})).join("; ")).join(", ")}).join(", ")},parse:function(e){let i,n;let o=Object.create(null);if(void 0===e||""===e)return o;let a=Object.create(null),s=!1,l=!1,c=!1,u=-1,h=-1,d=0;for(;d<e.length;d++){let f=e.charCodeAt(d);if(void 0===i){if(-1===h&&1===t[f])-1===u&&(u=d);else if(32===f||9===f)-1===h&&-1!==u&&(h=d);else if(59===f||44===f){if(-1===u)throw SyntaxError(`Unexpected character at index ${d}`);-1===h&&(h=d);let t=e.slice(u,h);44===f?(r(o,t,a),a=Object.create(null)):i=t,u=h=-1}else throw SyntaxError(`Unexpected character at index ${d}`)}else if(void 0===n){if(-1===h&&1===t[f])-1===u&&(u=d);else if(32===f||9===f)-1===h&&-1!==u&&(h=d);else if(59===f||44===f){if(-1===u)throw SyntaxError(`Unexpected character at index ${d}`);-1===h&&(h=d),r(a,e.slice(u,h),!0),44===f&&(r(o,i,a),a=Object.create(null),i=void 0),u=h=-1}else if(61===f&&-1!==u&&-1===h)n=e.slice(u,d),u=h=-1;else throw SyntaxError(`Unexpected character at index ${d}`)}else if(l){if(1!==t[f])throw SyntaxError(`Unexpected character at index ${d}`);-1===u?u=d:s||(s=!0),l=!1}else if(c){if(1===t[f])-1===u&&(u=d);else if(34===f&&-1!==u)c=!1,h=d;else if(92===f)l=!0;else throw SyntaxError(`Unexpected character at index ${d}`)}else if(34===f&&61===e.charCodeAt(d-1))c=!0;else if(-1===h&&1===t[f])-1===u&&(u=d);else if(-1!==u&&(32===f||9===f))-1===h&&(h=d);else if(59===f||44===f){if(-1===u)throw SyntaxError(`Unexpected character at index ${d}`);-1===h&&(h=d);let t=e.slice(u,h);s&&(t=t.replace(/\\/g,""),s=!1),r(a,n,t),44===f&&(r(o,i,a),a=Object.create(null),i=void 0),n=void 0,u=h=-1}else throw SyntaxError(`Unexpected character at index ${d}`)}if(-1===u||c)throw SyntaxError("Unexpected end of input");-1===h&&(h=d);let f=e.slice(u,h);return void 0===i?r(o,f,a):(void 0===n?r(a,f,!0):s?r(a,n,f.replace(/\\/g,"")):r(a,n,f),r(o,i,a)),o}}},81462:e=>{"use strict";let t=Symbol("kDone"),r=Symbol("kRun");class i{constructor(e){this[t]=()=>{this.pending--,this[r]()},this.concurrency=e||1/0,this.jobs=[],this.pending=0}add(e){this.jobs.push(e),this[r]()}[r](){if(this.pending!==this.concurrency&&this.jobs.length){let e=this.jobs.shift();this.pending++,e(this[t])}}}e.exports=i},5817:(e,t,r)=>{"use strict";let i;let n=r(59796),o=r(78440),a=r(81462),{kStatusCode:s,NOOP:l}=r(92267),c=Buffer.from([0,0,255,255]),u=Symbol("permessage-deflate"),h=Symbol("total-length"),d=Symbol("callback"),f=Symbol("buffers"),p=Symbol("error");class g{constructor(e,t,r){if(this._maxPayload=0|r,this._options=e||{},this._threshold=void 0!==this._options.threshold?this._options.threshold:1024,this._isServer=!!t,this._deflate=null,this._inflate=null,this.params=null,!i){let e=void 0!==this._options.concurrencyLimit?this._options.concurrencyLimit:10;i=new a(e)}}static get extensionName(){return"permessage-deflate"}offer(){let e={};return this._options.serverNoContextTakeover&&(e.server_no_context_takeover=!0),this._options.clientNoContextTakeover&&(e.client_no_context_takeover=!0),this._options.serverMaxWindowBits&&(e.server_max_window_bits=this._options.serverMaxWindowBits),this._options.clientMaxWindowBits?e.client_max_window_bits=this._options.clientMaxWindowBits:null==this._options.clientMaxWindowBits&&(e.client_max_window_bits=!0),e}accept(e){return e=this.normalizeParams(e),this.params=this._isServer?this.acceptAsServer(e):this.acceptAsClient(e),this.params}cleanup(){if(this._inflate&&(this._inflate.close(),this._inflate=null),this._deflate){let e=this._deflate[d];this._deflate.close(),this._deflate=null,e&&e(Error("The deflate stream was closed while data was being processed"))}}acceptAsServer(e){let t=this._options,r=e.find(e=>(!1!==t.serverNoContextTakeover||!e.server_no_context_takeover)&&(!e.server_max_window_bits||!1!==t.serverMaxWindowBits&&("number"!=typeof t.serverMaxWindowBits||!(t.serverMaxWindowBits>e.server_max_window_bits)))&&("number"!=typeof t.clientMaxWindowBits||!!e.client_max_window_bits));if(!r)throw Error("None of the extension offers can be accepted");return t.serverNoContextTakeover&&(r.server_no_context_takeover=!0),t.clientNoContextTakeover&&(r.client_no_context_takeover=!0),"number"==typeof t.serverMaxWindowBits&&(r.server_max_window_bits=t.serverMaxWindowBits),"number"==typeof t.clientMaxWindowBits?r.client_max_window_bits=t.clientMaxWindowBits:(!0===r.client_max_window_bits||!1===t.clientMaxWindowBits)&&delete r.client_max_window_bits,r}acceptAsClient(e){let t=e[0];if(!1===this._options.clientNoContextTakeover&&t.client_no_context_takeover)throw Error('Unexpected parameter "client_no_context_takeover"');if(t.client_max_window_bits){if(!1===this._options.clientMaxWindowBits||"number"==typeof this._options.clientMaxWindowBits&&t.client_max_window_bits>this._options.clientMaxWindowBits)throw Error('Unexpected or invalid parameter "client_max_window_bits"')}else"number"==typeof this._options.clientMaxWindowBits&&(t.client_max_window_bits=this._options.clientMaxWindowBits);return t}normalizeParams(e){return e.forEach(e=>{Object.keys(e).forEach(t=>{let r=e[t];if(r.length>1)throw Error(`Parameter "${t}" must have only a single value`);if(r=r[0],"client_max_window_bits"===t){if(!0!==r){let e=+r;if(!Number.isInteger(e)||e<8||e>15)throw TypeError(`Invalid value for parameter "${t}": ${r}`);r=e}else if(!this._isServer)throw TypeError(`Invalid value for parameter "${t}": ${r}`)}else if("server_max_window_bits"===t){let e=+r;if(!Number.isInteger(e)||e<8||e>15)throw TypeError(`Invalid value for parameter "${t}": ${r}`);r=e}else if("client_no_context_takeover"===t||"server_no_context_takeover"===t){if(!0!==r)throw TypeError(`Invalid value for parameter "${t}": ${r}`)}else throw Error(`Unknown parameter "${t}"`);e[t]=r})}),e}decompress(e,t,r){i.add(i=>{this._decompress(e,t,(e,t)=>{i(),r(e,t)})})}compress(e,t,r){i.add(i=>{this._compress(e,t,(e,t)=>{i(),r(e,t)})})}_decompress(e,t,r){let i=this._isServer?"client":"server";if(!this._inflate){let e=`${i}_max_window_bits`,t="number"!=typeof this.params[e]?n.Z_DEFAULT_WINDOWBITS:this.params[e];this._inflate=n.createInflateRaw({...this._options.zlibInflateOptions,windowBits:t}),this._inflate[u]=this,this._inflate[h]=0,this._inflate[f]=[],this._inflate.on("error",w),this._inflate.on("data",b)}this._inflate[d]=r,this._inflate.write(e),t&&this._inflate.write(c),this._inflate.flush(()=>{let e=this._inflate[p];if(e){this._inflate.close(),this._inflate=null,r(e);return}let n=o.concat(this._inflate[f],this._inflate[h]);this._inflate._readableState.endEmitted?(this._inflate.close(),this._inflate=null):(this._inflate[h]=0,this._inflate[f]=[],t&&this.params[`${i}_no_context_takeover`]&&this._inflate.reset()),r(null,n)})}_compress(e,t,r){let i=this._isServer?"server":"client";if(!this._deflate){let e=`${i}_max_window_bits`,t="number"!=typeof this.params[e]?n.Z_DEFAULT_WINDOWBITS:this.params[e];this._deflate=n.createDeflateRaw({...this._options.zlibDeflateOptions,windowBits:t}),this._deflate[h]=0,this._deflate[f]=[],this._deflate.on("error",l),this._deflate.on("data",m)}this._deflate[d]=r,this._deflate.write(e),this._deflate.flush(n.Z_SYNC_FLUSH,()=>{if(!this._deflate)return;let e=o.concat(this._deflate[f],this._deflate[h]);t&&(e=e.slice(0,e.length-4)),this._deflate[d]=null,this._deflate[h]=0,this._deflate[f]=[],t&&this.params[`${i}_no_context_takeover`]&&this._deflate.reset(),r(null,e)})}}function m(e){this[f].push(e),this[h]+=e.length}function b(e){if(this[h]+=e.length,this[u]._maxPayload<1||this[h]<=this[u]._maxPayload){this[f].push(e);return}this[p]=RangeError("Max payload size exceeded"),this[p].code="WS_ERR_UNSUPPORTED_MESSAGE_LENGTH",this[p][s]=1009,this.removeListener("data",b),this.reset()}function w(e){this[u]._inflate=null,e[s]=1007,this[d](e)}e.exports=g},92535:(e,t,r)=>{"use strict";let{Writable:i}=r(12781),n=r(5817),{BINARY_TYPES:o,EMPTY_BUFFER:a,kStatusCode:s,kWebSocket:l}=r(92267),{concat:c,toArrayBuffer:u,unmask:h}=r(78440),{isValidStatusCode:d,isValidUTF8:f}=r(28211);class p extends i{constructor(e,t,r,i){super(),this._binaryType=e||o[0],this[l]=void 0,this._extensions=t||{},this._isServer=!!r,this._maxPayload=0|i,this._bufferedBytes=0,this._buffers=[],this._compressed=!1,this._payloadLength=0,this._mask=void 0,this._fragmented=0,this._masked=!1,this._fin=!1,this._opcode=0,this._totalPayloadLength=0,this._messageLength=0,this._fragments=[],this._state=0,this._loop=!1}_write(e,t,r){if(8===this._opcode&&0==this._state)return r();this._bufferedBytes+=e.length,this._buffers.push(e),this.startLoop(r)}consume(e){if(this._bufferedBytes-=e,e===this._buffers[0].length)return this._buffers.shift();if(e<this._buffers[0].length){let t=this._buffers[0];return this._buffers[0]=t.slice(e),t.slice(0,e)}let t=Buffer.allocUnsafe(e);do{let r=this._buffers[0],i=t.length-e;e>=r.length?t.set(this._buffers.shift(),i):(t.set(new Uint8Array(r.buffer,r.byteOffset,e),i),this._buffers[0]=r.slice(e)),e-=r.length}while(e>0);return t}startLoop(e){let t;this._loop=!0;do switch(this._state){case 0:t=this.getInfo();break;case 1:t=this.getPayloadLength16();break;case 2:t=this.getPayloadLength64();break;case 3:this.getMask();break;case 4:t=this.getData(e);break;default:this._loop=!1;return}while(this._loop);e(t)}getInfo(){if(this._bufferedBytes<2){this._loop=!1;return}let e=this.consume(2);if((48&e[0])!=0)return this._loop=!1,g(RangeError,"RSV2 and RSV3 must be clear",!0,1002,"WS_ERR_UNEXPECTED_RSV_2_3");let t=(64&e[0])==64;if(t&&!this._extensions[n.extensionName])return this._loop=!1,g(RangeError,"RSV1 must be clear",!0,1002,"WS_ERR_UNEXPECTED_RSV_1");if(this._fin=(128&e[0])==128,this._opcode=15&e[0],this._payloadLength=127&e[1],0===this._opcode){if(t)return this._loop=!1,g(RangeError,"RSV1 must be clear",!0,1002,"WS_ERR_UNEXPECTED_RSV_1");if(!this._fragmented)return this._loop=!1,g(RangeError,"invalid opcode 0",!0,1002,"WS_ERR_INVALID_OPCODE");this._opcode=this._fragmented}else if(1===this._opcode||2===this._opcode){if(this._fragmented)return this._loop=!1,g(RangeError,`invalid opcode ${this._opcode}`,!0,1002,"WS_ERR_INVALID_OPCODE");this._compressed=t}else{if(!(this._opcode>7)||!(this._opcode<11))return this._loop=!1,g(RangeError,`invalid opcode ${this._opcode}`,!0,1002,"WS_ERR_INVALID_OPCODE");if(!this._fin)return this._loop=!1,g(RangeError,"FIN must be set",!0,1002,"WS_ERR_EXPECTED_FIN");if(t)return this._loop=!1,g(RangeError,"RSV1 must be clear",!0,1002,"WS_ERR_UNEXPECTED_RSV_1");if(this._payloadLength>125)return this._loop=!1,g(RangeError,`invalid payload length ${this._payloadLength}`,!0,1002,"WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH")}if(this._fin||this._fragmented||(this._fragmented=this._opcode),this._masked=(128&e[1])==128,this._isServer){if(!this._masked)return this._loop=!1,g(RangeError,"MASK must be set",!0,1002,"WS_ERR_EXPECTED_MASK")}else if(this._masked)return this._loop=!1,g(RangeError,"MASK must be clear",!0,1002,"WS_ERR_UNEXPECTED_MASK");if(126===this._payloadLength)this._state=1;else{if(127!==this._payloadLength)return this.haveLength();this._state=2}}getPayloadLength16(){if(this._bufferedBytes<2){this._loop=!1;return}return this._payloadLength=this.consume(2).readUInt16BE(0),this.haveLength()}getPayloadLength64(){if(this._bufferedBytes<8){this._loop=!1;return}let e=this.consume(8),t=e.readUInt32BE(0);return t>2097151?(this._loop=!1,g(RangeError,"Unsupported WebSocket frame: payload length > 2^53 - 1",!1,1009,"WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH")):(this._payloadLength=4294967296*t+e.readUInt32BE(4),this.haveLength())}haveLength(){if(this._payloadLength&&this._opcode<8&&(this._totalPayloadLength+=this._payloadLength,this._totalPayloadLength>this._maxPayload&&this._maxPayload>0))return this._loop=!1,g(RangeError,"Max payload size exceeded",!1,1009,"WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");this._masked?this._state=3:this._state=4}getMask(){if(this._bufferedBytes<4){this._loop=!1;return}this._mask=this.consume(4),this._state=4}getData(e){let t=a;if(this._payloadLength){if(this._bufferedBytes<this._payloadLength){this._loop=!1;return}t=this.consume(this._payloadLength),this._masked&&h(t,this._mask)}if(this._opcode>7)return this.controlMessage(t);if(this._compressed){this._state=5,this.decompress(t,e);return}return t.length&&(this._messageLength=this._totalPayloadLength,this._fragments.push(t)),this.dataMessage()}decompress(e,t){let r=this._extensions[n.extensionName];r.decompress(e,this._fin,(e,r)=>{if(e)return t(e);if(r.length){if(this._messageLength+=r.length,this._messageLength>this._maxPayload&&this._maxPayload>0)return t(g(RangeError,"Max payload size exceeded",!1,1009,"WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"));this._fragments.push(r)}let i=this.dataMessage();if(i)return t(i);this.startLoop(t)})}dataMessage(){if(this._fin){let e=this._messageLength,t=this._fragments;if(this._totalPayloadLength=0,this._messageLength=0,this._fragmented=0,this._fragments=[],2===this._opcode){let r;r="nodebuffer"===this._binaryType?c(t,e):"arraybuffer"===this._binaryType?u(c(t,e)):t,this.emit("message",r)}else{let r=c(t,e);if(!f(r))return this._loop=!1,g(Error,"invalid UTF-8 sequence",!0,1007,"WS_ERR_INVALID_UTF8");this.emit("message",r.toString())}}this._state=0}controlMessage(e){if(8===this._opcode){if(this._loop=!1,0===e.length)this.emit("conclude",1005,""),this.end();else{if(1===e.length)return g(RangeError,"invalid payload length 1",!0,1002,"WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH");let t=e.readUInt16BE(0);if(!d(t))return g(RangeError,`invalid status code ${t}`,!0,1002,"WS_ERR_INVALID_CLOSE_CODE");let r=e.slice(2);if(!f(r))return g(Error,"invalid UTF-8 sequence",!0,1007,"WS_ERR_INVALID_UTF8");this.emit("conclude",t,r.toString()),this.end()}}else 9===this._opcode?this.emit("ping",e):this.emit("pong",e);this._state=0}}function g(e,t,r,i,n){let o=new e(r?`Invalid WebSocket frame: ${t}`:t);return Error.captureStackTrace(o,g),o.code=n,o[s]=i,o}e.exports=p},67345:(e,t,r)=>{"use strict";r(41808),r(24404);let{randomFillSync:i}=r(6113),n=r(5817),{EMPTY_BUFFER:o}=r(92267),{isValidStatusCode:a}=r(28211),{mask:s,toBuffer:l}=r(78440),c=Buffer.alloc(4);class u{constructor(e,t){this._extensions=t||{},this._socket=e,this._firstFragment=!0,this._compress=!1,this._bufferedBytes=0,this._deflating=!1,this._queue=[]}static frame(e,t){let r=t.mask&&t.readOnly,n=t.mask?6:2,o=e.length;e.length>=65536?(n+=8,o=127):e.length>125&&(n+=2,o=126);let a=Buffer.allocUnsafe(r?e.length+n:n);return(a[0]=t.fin?128|t.opcode:t.opcode,t.rsv1&&(a[0]|=64),a[1]=o,126===o?a.writeUInt16BE(e.length,2):127===o&&(a.writeUInt32BE(0,2),a.writeUInt32BE(e.length,6)),t.mask)?(i(c,0,4),a[1]|=128,a[n-4]=c[0],a[n-3]=c[1],a[n-2]=c[2],a[n-1]=c[3],r)?(s(e,c,a,n,e.length),[a]):(s(e,c,e,0,e.length),[a,e]):[a,e]}close(e,t,r,i){let n;if(void 0===e)n=o;else if("number"==typeof e&&a(e)){if(void 0===t||""===t)(n=Buffer.allocUnsafe(2)).writeUInt16BE(e,0);else{let r=Buffer.byteLength(t);if(r>123)throw RangeError("The message must not be greater than 123 bytes");(n=Buffer.allocUnsafe(2+r)).writeUInt16BE(e,0),n.write(t,2)}}else throw TypeError("First argument must be a valid error code number");this._deflating?this.enqueue([this.doClose,n,r,i]):this.doClose(n,r,i)}doClose(e,t,r){this.sendFrame(u.frame(e,{fin:!0,rsv1:!1,opcode:8,mask:t,readOnly:!1}),r)}ping(e,t,r){let i=l(e);if(i.length>125)throw RangeError("The data size must not be greater than 125 bytes");this._deflating?this.enqueue([this.doPing,i,t,l.readOnly,r]):this.doPing(i,t,l.readOnly,r)}doPing(e,t,r,i){this.sendFrame(u.frame(e,{fin:!0,rsv1:!1,opcode:9,mask:t,readOnly:r}),i)}pong(e,t,r){let i=l(e);if(i.length>125)throw RangeError("The data size must not be greater than 125 bytes");this._deflating?this.enqueue([this.doPong,i,t,l.readOnly,r]):this.doPong(i,t,l.readOnly,r)}doPong(e,t,r,i){this.sendFrame(u.frame(e,{fin:!0,rsv1:!1,opcode:10,mask:t,readOnly:r}),i)}send(e,t,r){let i=l(e),o=this._extensions[n.extensionName],a=t.binary?2:1,s=t.compress;if(this._firstFragment?(this._firstFragment=!1,s&&o&&(s=i.length>=o._threshold),this._compress=s):(s=!1,a=0),t.fin&&(this._firstFragment=!0),o){let e={fin:t.fin,rsv1:s,opcode:a,mask:t.mask,readOnly:l.readOnly};this._deflating?this.enqueue([this.dispatch,i,this._compress,e,r]):this.dispatch(i,this._compress,e,r)}else this.sendFrame(u.frame(i,{fin:t.fin,rsv1:!1,opcode:a,mask:t.mask,readOnly:l.readOnly}),r)}dispatch(e,t,r,i){if(!t){this.sendFrame(u.frame(e,r),i);return}let o=this._extensions[n.extensionName];this._bufferedBytes+=e.length,this._deflating=!0,o.compress(e,r.fin,(t,n)=>{if(this._socket.destroyed){let e=Error("The socket was closed while data was being compressed");"function"==typeof i&&i(e);for(let t=0;t<this._queue.length;t++){let r=this._queue[t][4];"function"==typeof r&&r(e)}return}this._bufferedBytes-=e.length,this._deflating=!1,r.readOnly=!1,this.sendFrame(u.frame(n,r),i),this.dequeue()})}dequeue(){for(;!this._deflating&&this._queue.length;){let e=this._queue.shift();this._bufferedBytes-=e[1].length,Reflect.apply(e[0],this,e.slice(1))}}enqueue(e){this._bufferedBytes+=e[1].length,this._queue.push(e)}sendFrame(e,t){2===e.length?(this._socket.cork(),this._socket.write(e[0]),this._socket.write(e[1],t),this._socket.uncork()):this._socket.write(e[0],t)}}e.exports=u},66994:(e,t,r)=>{"use strict";let{Duplex:i}=r(12781);function n(e){e.emit("close")}function o(){!this.destroyed&&this._writableState.finished&&this.destroy()}function a(e){this.removeListener("error",a),this.destroy(),0===this.listenerCount("error")&&this.emit("error",e)}e.exports=function(e,t){let r=!0,s=!0;function l(){r&&e._socket.resume()}e.readyState===e.CONNECTING?e.once("open",function(){e._receiver.removeAllListeners("drain"),e._receiver.on("drain",l)}):(e._receiver.removeAllListeners("drain"),e._receiver.on("drain",l));let c=new i({...t,autoDestroy:!1,emitClose:!1,objectMode:!1,writableObjectMode:!1});return e.on("message",function(t){c.push(t)||(r=!1,e._socket.pause())}),e.once("error",function(e){c.destroyed||(s=!1,c.destroy(e))}),e.once("close",function(){c.destroyed||c.push(null)}),c._destroy=function(t,r){if(e.readyState===e.CLOSED){r(t),process.nextTick(n,c);return}let i=!1;e.once("error",function(e){i=!0,r(e)}),e.once("close",function(){i||r(t),process.nextTick(n,c)}),s&&e.terminate()},c._final=function(t){if(e.readyState===e.CONNECTING){e.once("open",function(){c._final(t)});return}null!==e._socket&&(e._socket._writableState.finished?(t(),c._readableState.endEmitted&&c.destroy()):(e._socket.once("finish",function(){t()}),e.close()))},c._read=function(){e.readyState!==e.OPEN&&e.readyState!==e.CLOSING||r||(r=!0,e._receiver._writableState.needDrain||e._socket.resume())},c._write=function(t,r,i){if(e.readyState===e.CONNECTING){e.once("open",function(){c._write(t,r,i)});return}e.send(t,i)},c.on("end",o),c.on("error",a),c}},28211:(e,t,r)=>{"use strict";function i(e){return e>=1e3&&e<=1014&&1004!==e&&1005!==e&&1006!==e||e>=3e3&&e<=4999}function n(e){let t=e.length,r=0;for(;r<t;)if((128&e[r])==0)r++;else if((224&e[r])==192){if(r+1===t||(192&e[r+1])!=128||(254&e[r])==192)return!1;r+=2}else if((240&e[r])==224){if(r+2>=t||(192&e[r+1])!=128||(192&e[r+2])!=128||224===e[r]&&(224&e[r+1])==128||237===e[r]&&(224&e[r+1])==160)return!1;r+=3}else{if((248&e[r])!=240||r+3>=t||(192&e[r+1])!=128||(192&e[r+2])!=128||(192&e[r+3])!=128||240===e[r]&&(240&e[r+1])==128||244===e[r]&&e[r+1]>143||e[r]>244)return!1;r+=4}return!0}try{let t=r(30251);"object"==typeof t&&(t=t.Validation.isValidUTF8),e.exports={isValidStatusCode:i,isValidUTF8:e=>e.length<150?n(e):t(e)}}catch(t){e.exports={isValidStatusCode:i,isValidUTF8:n}}},53840:(e,t,r)=>{"use strict";let i=r(82361),n=r(13685);r(95687),r(41808),r(24404);let{createHash:o}=r(6113),a=r(5817),WebSocket=r(99364),{format:s,parse:l}=r(31138),{GUID:c,kWebSocket:u}=r(92267),h=/^[+/0-9A-Za-z]{22}==$/;class d extends i{constructor(e,t){if(super(),null==(e={maxPayload:104857600,perMessageDeflate:!1,handleProtocols:null,clientTracking:!0,verifyClient:null,noServer:!1,backlog:null,server:null,host:null,path:null,port:null,...e}).port&&!e.server&&!e.noServer||null!=e.port&&(e.server||e.noServer)||e.server&&e.noServer)throw TypeError('One and only one of the "port", "server", or "noServer" options must be specified');if(null!=e.port?(this._server=n.createServer((e,t)=>{let r=n.STATUS_CODES[426];t.writeHead(426,{"Content-Length":r.length,"Content-Type":"text/plain"}),t.end(r)}),this._server.listen(e.port,e.host,e.backlog,t)):e.server&&(this._server=e.server),this._server){let e=this.emit.bind(this,"connection");this._removeListeners=function(e,t){for(let r of Object.keys(t))e.on(r,t[r]);return function(){for(let r of Object.keys(t))e.removeListener(r,t[r])}}(this._server,{listening:this.emit.bind(this,"listening"),error:this.emit.bind(this,"error"),upgrade:(t,r,i)=>{this.handleUpgrade(t,r,i,e)}})}!0===e.perMessageDeflate&&(e.perMessageDeflate={}),e.clientTracking&&(this.clients=new Set),this.options=e,this._state=0}address(){if(this.options.noServer)throw Error('The server is operating in "noServer" mode');return this._server?this._server.address():null}close(e){if(e&&this.once("close",e),2===this._state){process.nextTick(f,this);return}if(1===this._state)return;if(this._state=1,this.clients)for(let e of this.clients)e.terminate();let t=this._server;if(t&&(this._removeListeners(),this._removeListeners=this._server=null,null!=this.options.port)){t.close(f.bind(void 0,this));return}process.nextTick(f,this)}shouldHandle(e){if(this.options.path){let t=e.url.indexOf("?"),r=-1!==t?e.url.slice(0,t):e.url;if(r!==this.options.path)return!1}return!0}handleUpgrade(e,t,r,i){t.on("error",p);let n=void 0!==e.headers["sec-websocket-key"]&&e.headers["sec-websocket-key"].trim(),o=+e.headers["sec-websocket-version"],s={};if("GET"!==e.method||"websocket"!==e.headers.upgrade.toLowerCase()||!n||!h.test(n)||8!==o&&13!==o||!this.shouldHandle(e))return g(t,400);if(this.options.perMessageDeflate){let r=new a(this.options.perMessageDeflate,!0,this.options.maxPayload);try{let t=l(e.headers["sec-websocket-extensions"]);t[a.extensionName]&&(r.accept(t[a.extensionName]),s[a.extensionName]=r)}catch(e){return g(t,400)}}if(this.options.verifyClient){let a={origin:e.headers[`${8===o?"sec-websocket-origin":"origin"}`],secure:!!(e.socket.authorized||e.socket.encrypted),req:e};if(2===this.options.verifyClient.length){this.options.verifyClient(a,(o,a,l,c)=>{if(!o)return g(t,a||401,l,c);this.completeUpgrade(n,s,e,t,r,i)});return}if(!this.options.verifyClient(a))return g(t,401)}this.completeUpgrade(n,s,e,t,r,i)}completeUpgrade(e,t,r,i,n,l){if(!i.readable||!i.writable)return i.destroy();if(i[u])throw Error("server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration");if(this._state>0)return g(i,503);let h=o("sha1").update(e+c).digest("base64"),d=["HTTP/1.1 101 Switching Protocols","Upgrade: websocket","Connection: Upgrade",`Sec-WebSocket-Accept: ${h}`],f=new WebSocket(null),b=r.headers["sec-websocket-protocol"];if(b&&(b=b.split(",").map(m),(b=this.options.handleProtocols?this.options.handleProtocols(b,r):b[0])&&(d.push(`Sec-WebSocket-Protocol: ${b}`),f._protocol=b)),t[a.extensionName]){let e=t[a.extensionName].params,r=s({[a.extensionName]:[e]});d.push(`Sec-WebSocket-Extensions: ${r}`),f._extensions=t}this.emit("headers",d,r),i.write(d.concat("\r\n").join("\r\n")),i.removeListener("error",p),f.setSocket(i,n,this.options.maxPayload),this.clients&&(this.clients.add(f),f.on("close",()=>this.clients.delete(f))),l(f,r)}}function f(e){e._state=2,e.emit("close")}function p(){this.destroy()}function g(e,t,r,i){e.writable&&(r=r||n.STATUS_CODES[t],i={Connection:"close","Content-Type":"text/html","Content-Length":Buffer.byteLength(r),...i},e.write(`HTTP/1.1 ${t} ${n.STATUS_CODES[t]}\r
`+Object.keys(i).map(e=>`${e}: ${i[e]}`).join("\r\n")+"\r\n\r\n"+r)),e.removeListener("error",p),e.destroy()}function m(e){return e.trim()}e.exports=d},99364:(e,t,r)=>{"use strict";let i=r(82361),n=r(95687),o=r(13685),a=r(41808),s=r(24404),{randomBytes:l,createHash:c}=r(6113),{Readable:u}=r(12781),{URL}=r(57310),h=r(5817),d=r(92535),f=r(67345),{BINARY_TYPES:p,EMPTY_BUFFER:g,GUID:m,kStatusCode:b,kWebSocket:w,NOOP:y}=r(92267),{addEventListener:v,removeEventListener:x}=r(61198),{format:C,parse:_}=r(31138),{toBuffer:E}=r(78440),k=["CONNECTING","OPEN","CLOSING","CLOSED"],S=[8,13];class WebSocket extends i{constructor(e,t,r){super(),this._binaryType=p[0],this._closeCode=1006,this._closeFrameReceived=!1,this._closeFrameSent=!1,this._closeMessage="",this._closeTimer=null,this._extensions={},this._protocol="",this._readyState=WebSocket.CONNECTING,this._receiver=null,this._sender=null,this._socket=null,null!==e?(this._bufferedAmount=0,this._isServer=!1,this._redirects=0,Array.isArray(t)?t=t.join(", "):"object"==typeof t&&null!==t&&(r=t,t=void 0),function e(t,r,i,a){let s,u;let d={protocolVersion:S[1],maxPayload:104857600,perMessageDeflate:!0,followRedirects:!1,maxRedirects:10,...a,createConnection:void 0,socketPath:void 0,hostname:void 0,protocol:void 0,timeout:void 0,method:void 0,host:void 0,path:void 0,port:void 0};if(!S.includes(d.protocolVersion))throw RangeError(`Unsupported protocol version: ${d.protocolVersion} (supported versions: ${S.join(", ")})`);r instanceof URL?(s=r,t._url=r.href):(s=new URL(r),t._url=r);let f="ws+unix:"===s.protocol;if(!s.host&&(!f||!s.pathname)){let e=Error(`Invalid URL: ${t.url}`);if(0===t._redirects)throw e;O(t,e);return}let p="wss:"===s.protocol||"https:"===s.protocol,g=p?443:80,b=l(16).toString("base64"),w=p?n.get:o.get;if(d.createConnection=p?P:D,d.defaultPort=d.defaultPort||g,d.port=s.port||g,d.host=s.hostname.startsWith("[")?s.hostname.slice(1,-1):s.hostname,d.headers={"Sec-WebSocket-Version":d.protocolVersion,"Sec-WebSocket-Key":b,Connection:"Upgrade",Upgrade:"websocket",...d.headers},d.path=s.pathname+s.search,d.timeout=d.handshakeTimeout,d.perMessageDeflate&&(u=new h(!0!==d.perMessageDeflate?d.perMessageDeflate:{},!1,d.maxPayload),d.headers["Sec-WebSocket-Extensions"]=C({[h.extensionName]:u.offer()})),i&&(d.headers["Sec-WebSocket-Protocol"]=i),d.origin&&(d.protocolVersion<13?d.headers["Sec-WebSocket-Origin"]=d.origin:d.headers.Origin=d.origin),(s.username||s.password)&&(d.auth=`${s.username}:${s.password}`),f){let e=d.path.split(":");d.socketPath=e[0],d.path=e[1]}if(d.followRedirects){if(0===t._redirects){t._originalUnixSocket=f,t._originalSecure=p,t._originalHostOrSocketPath=f?d.socketPath:s.host;let e=a&&a.headers;if(a={...a,headers:{}},e)for(let[t,r]of Object.entries(e))a.headers[t.toLowerCase()]=r}else{let e=f?!!t._originalUnixSocket&&d.socketPath===t._originalHostOrSocketPath:!t._originalUnixSocket&&s.host===t._originalHostOrSocketPath;e&&(!t._originalSecure||p)||(delete d.headers.authorization,delete d.headers.cookie,e||delete d.headers.host,d.auth=void 0)}d.auth&&!a.headers.authorization&&(a.headers.authorization="Basic "+Buffer.from(d.auth).toString("base64"))}let y=t._req=w(d);d.timeout&&y.on("timeout",()=>{A(t,y,"Opening handshake has timed out")}),y.on("error",e=>{null===y||y.aborted||(y=t._req=null,O(t,e))}),y.on("response",n=>{let o=n.headers.location,s=n.statusCode;if(o&&d.followRedirects&&s>=300&&s<400){let n;if(++t._redirects>d.maxRedirects){A(t,y,"Maximum redirects exceeded");return}y.abort();try{n=new URL(o,r)}catch(e){O(t,e);return}e(t,n,i,a)}else t.emit("unexpected-response",y,n)||A(t,y,`Unexpected server response: ${n.statusCode}`)}),y.on("upgrade",(e,r,n)=>{let o;if(t.emit("upgrade",e),t.readyState!==WebSocket.CONNECTING)return;if(y=t._req=null,"websocket"!==e.headers.upgrade.toLowerCase()){A(t,r,"Invalid Upgrade header");return}let a=c("sha1").update(b+m).digest("base64");if(e.headers["sec-websocket-accept"]!==a){A(t,r,"Invalid Sec-WebSocket-Accept header");return}let s=e.headers["sec-websocket-protocol"],l=(i||"").split(/, */);if(!i&&s?o="Server sent a subprotocol but none was requested":i&&!s?o="Server sent no subprotocol":s&&!l.includes(s)&&(o="Server sent an invalid subprotocol"),o){A(t,r,o);return}s&&(t._protocol=s);let f=e.headers["sec-websocket-extensions"];if(void 0!==f){let e;if(!u){A(t,r,"Server sent a Sec-WebSocket-Extensions header but no extension was requested");return}try{e=_(f)}catch(e){A(t,r,"Invalid Sec-WebSocket-Extensions header");return}let i=Object.keys(e);if(i.length){if(1!==i.length||i[0]!==h.extensionName){A(t,r,"Server indicated an extension that was not requested");return}try{u.accept(e[h.extensionName])}catch(e){A(t,r,"Invalid Sec-WebSocket-Extensions header");return}t._extensions[h.extensionName]=u}}t.setSocket(r,n,d.maxPayload)})}(this,e,t,r)):this._isServer=!0}get binaryType(){return this._binaryType}set binaryType(e){p.includes(e)&&(this._binaryType=e,this._receiver&&(this._receiver._binaryType=e))}get bufferedAmount(){return this._socket?this._socket._writableState.length+this._sender._bufferedBytes:this._bufferedAmount}get extensions(){return Object.keys(this._extensions).join()}get onclose(){}set onclose(e){}get onerror(){}set onerror(e){}get onopen(){}set onopen(e){}get onmessage(){}set onmessage(e){}get protocol(){return this._protocol}get readyState(){return this._readyState}get url(){return this._url}setSocket(e,t,r){let i=new d(this.binaryType,this._extensions,this._isServer,r);this._sender=new f(e,this._extensions),this._receiver=i,this._socket=e,i[w]=this,e[w]=this,i.on("conclude",$),i.on("drain",I),i.on("error",N),i.on("message",M),i.on("ping",j),i.on("pong",L),e.setTimeout(0),e.setNoDelay(),t.length>0&&e.unshift(t),e.on("close",U),e.on("data",F),e.on("end",W),e.on("error",z),this._readyState=WebSocket.OPEN,this.emit("open")}emitClose(){if(!this._socket){this._readyState=WebSocket.CLOSED,this.emit("close",this._closeCode,this._closeMessage);return}this._extensions[h.extensionName]&&this._extensions[h.extensionName].cleanup(),this._receiver.removeAllListeners(),this._readyState=WebSocket.CLOSED,this.emit("close",this._closeCode,this._closeMessage)}close(e,t){if(this.readyState!==WebSocket.CLOSED){if(this.readyState===WebSocket.CONNECTING)return A(this,this._req,"WebSocket was closed before the connection was established");if(this.readyState===WebSocket.CLOSING){this._closeFrameSent&&(this._closeFrameReceived||this._receiver._writableState.errorEmitted)&&this._socket.end();return}this._readyState=WebSocket.CLOSING,this._sender.close(e,t,!this._isServer,e=>{!e&&(this._closeFrameSent=!0,(this._closeFrameReceived||this._receiver._writableState.errorEmitted)&&this._socket.end())}),this._closeTimer=setTimeout(this._socket.destroy.bind(this._socket),3e4)}}ping(e,t,r){if(this.readyState===WebSocket.CONNECTING)throw Error("WebSocket is not open: readyState 0 (CONNECTING)");if("function"==typeof e?(r=e,e=t=void 0):"function"==typeof t&&(r=t,t=void 0),"number"==typeof e&&(e=e.toString()),this.readyState!==WebSocket.OPEN){T(this,e,r);return}void 0===t&&(t=!this._isServer),this._sender.ping(e||g,t,r)}pong(e,t,r){if(this.readyState===WebSocket.CONNECTING)throw Error("WebSocket is not open: readyState 0 (CONNECTING)");if("function"==typeof e?(r=e,e=t=void 0):"function"==typeof t&&(r=t,t=void 0),"number"==typeof e&&(e=e.toString()),this.readyState!==WebSocket.OPEN){T(this,e,r);return}void 0===t&&(t=!this._isServer),this._sender.pong(e||g,t,r)}send(e,t,r){if(this.readyState===WebSocket.CONNECTING)throw Error("WebSocket is not open: readyState 0 (CONNECTING)");if("function"==typeof t&&(r=t,t={}),"number"==typeof e&&(e=e.toString()),this.readyState!==WebSocket.OPEN){T(this,e,r);return}let i={binary:"string"!=typeof e,mask:!this._isServer,compress:!0,fin:!0,...t};this._extensions[h.extensionName]||(i.compress=!1),this._sender.send(e||g,i,r)}terminate(){if(this.readyState!==WebSocket.CLOSED){if(this.readyState===WebSocket.CONNECTING)return A(this,this._req,"WebSocket was closed before the connection was established");this._socket&&(this._readyState=WebSocket.CLOSING,this._socket.destroy())}}}function O(e,t){e._readyState=WebSocket.CLOSING,e.emit("error",t),e.emitClose()}function D(e){return e.path=e.socketPath,a.connect(e)}function P(e){return e.path=void 0,e.servername||""===e.servername||(e.servername=a.isIP(e.host)?"":e.host),s.connect(e)}function A(e,t,r){e._readyState=WebSocket.CLOSING;let i=Error(r);Error.captureStackTrace(i,A),t.setHeader?(t.abort(),t.socket&&!t.socket.destroyed&&t.socket.destroy(),t.once("abort",e.emitClose.bind(e)),e.emit("error",i)):(t.destroy(i),t.once("error",e.emit.bind(e,"error")),t.once("close",e.emitClose.bind(e)))}function T(e,t,r){if(t){let r=E(t).length;e._socket?e._sender._bufferedBytes+=r:e._bufferedAmount+=r}if(r){let t=Error(`WebSocket is not open: readyState ${e.readyState} (${k[e.readyState]})`);r(t)}}function $(e,t){let r=this[w];r._closeFrameReceived=!0,r._closeMessage=t,r._closeCode=e,void 0!==r._socket[w]&&(r._socket.removeListener("data",F),process.nextTick(B,r._socket),1005===e?r.close():r.close(e,t))}function I(){this[w]._socket.resume()}function N(e){let t=this[w];void 0!==t._socket[w]&&(t._socket.removeListener("data",F),process.nextTick(B,t._socket),t.close(e[b])),t.emit("error",e)}function R(){this[w].emitClose()}function M(e){this[w].emit("message",e)}function j(e){let t=this[w];t.pong(e,!t._isServer,y),t.emit("ping",e)}function L(e){this[w].emit("pong",e)}function B(e){e.resume()}function U(){let e;let t=this[w];this.removeListener("close",U),this.removeListener("data",F),this.removeListener("end",W),t._readyState=WebSocket.CLOSING,this._readableState.endEmitted||t._closeFrameReceived||t._receiver._writableState.errorEmitted||null===(e=t._socket.read())||t._receiver.write(e),t._receiver.end(),this[w]=void 0,clearTimeout(t._closeTimer),t._receiver._writableState.finished||t._receiver._writableState.errorEmitted?t.emitClose():(t._receiver.on("error",R),t._receiver.on("finish",R))}function F(e){this[w]._receiver.write(e)||this.pause()}function W(){let e=this[w];e._readyState=WebSocket.CLOSING,e._receiver.end(),this.end()}function z(){let e=this[w];this.removeListener("error",z),this.on("error",y),e&&(e._readyState=WebSocket.CLOSING,this.destroy())}Object.defineProperty(WebSocket,"CONNECTING",{enumerable:!0,value:k.indexOf("CONNECTING")}),Object.defineProperty(WebSocket.prototype,"CONNECTING",{enumerable:!0,value:k.indexOf("CONNECTING")}),Object.defineProperty(WebSocket,"OPEN",{enumerable:!0,value:k.indexOf("OPEN")}),Object.defineProperty(WebSocket.prototype,"OPEN",{enumerable:!0,value:k.indexOf("OPEN")}),Object.defineProperty(WebSocket,"CLOSING",{enumerable:!0,value:k.indexOf("CLOSING")}),Object.defineProperty(WebSocket.prototype,"CLOSING",{enumerable:!0,value:k.indexOf("CLOSING")}),Object.defineProperty(WebSocket,"CLOSED",{enumerable:!0,value:k.indexOf("CLOSED")}),Object.defineProperty(WebSocket.prototype,"CLOSED",{enumerable:!0,value:k.indexOf("CLOSED")}),["binaryType","bufferedAmount","extensions","protocol","readyState","url"].forEach(e=>{Object.defineProperty(WebSocket.prototype,e,{enumerable:!0})}),["open","error","close","message"].forEach(e=>{Object.defineProperty(WebSocket.prototype,`on${e}`,{enumerable:!0,get(){let t=this.listeners(e);for(let e=0;e<t.length;e++)if(t[e]._listener)return t[e]._listener},set(t){let r=this.listeners(e);for(let t=0;t<r.length;t++)r[t]._listener&&this.removeListener(e,r[t]);this.addEventListener(e,t)}})}),WebSocket.prototype.addEventListener=v,WebSocket.prototype.removeEventListener=x,e.exports=WebSocket},91792:(e,t,r)=>{"use strict";r.d(t,{mv:()=>s,iN:()=>c});let i=class{get shadowRoot(){return this.__host.__shadowRoot}constructor(e){this.ariaAtomic="",this.ariaAutoComplete="",this.ariaBraileLabel="",this.ariaBraileRoleDescription="",this.ariaBusy="",this.ariaChecked="",this.ariaColCount="",this.ariaColIndex="",this.ariaColSpan="",this.ariaCurrent="",this.ariaDescription="",this.ariaDisabled="",this.ariaExpanded="",this.ariaHasPopup="",this.ariaHidden="",this.ariaInvalid="",this.ariaKeyShortcuts="",this.ariaLabel="",this.ariaLevel="",this.ariaLive="",this.ariaModal="",this.ariaMultiLine="",this.ariaMultiSelectable="",this.ariaOrientation="",this.ariaPlaceholder="",this.ariaPosInSet="",this.ariaPressed="",this.ariaReadOnly="",this.ariaRequired="",this.ariaRoleDescription="",this.ariaRowCount="",this.ariaRowIndex="",this.ariaRowSpan="",this.ariaSelected="",this.ariaSetSize="",this.ariaSort="",this.ariaValueMax="",this.ariaValueMin="",this.ariaValueNow="",this.ariaValueText="",this.role="",this.form=null,this.labels=[],this.states=new Set,this.validationMessage="",this.validity={},this.willValidate=!0,this.__host=e}checkValidity(){return console.warn("`ElementInternals.checkValidity()` was called on the server.This method always returns true."),!0}reportValidity(){return!0}setFormValue(){}setValidity(){}},n=new WeakMap,o=e=>{let t=n.get(e);return void 0===t&&n.set(e,t=new Map),t},a=class{constructor(){this.__shadowRootMode=null,this.__shadowRoot=null,this.__internals=null}get attributes(){return Array.from(o(this)).map(([e,t])=>({name:e,value:t}))}get shadowRoot(){return"closed"===this.__shadowRootMode?null:this.__shadowRoot}setAttribute(e,t){o(this).set(e,String(t))}removeAttribute(e){o(this).delete(e)}hasAttribute(e){return o(this).has(e)}attachShadow(e){let t={host:this};return this.__shadowRootMode=e.mode,e&&"open"===e.mode&&(this.__shadowRoot=t),t}attachInternals(){if(null!==this.__internals)throw Error("Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.");let e=new i(this);return this.__internals=e,e}getAttribute(e){let t=o(this).get(e);return t??null}},s=class extends a{},l=class{constructor(){this.__definitions=new Map}define(e,t){if(this.__definitions.has(e))throw Error(`Failed to execute 'define' on 'CustomElementRegistry': the name "${e}" has already been used with this registry`);this.__definitions.set(e,{ctor:t,observedAttributes:t.observedAttributes??[]})}get(e){let t=this.__definitions.get(e);return t?.ctor}},c=new l},32526:(e,t,r)=>{"use strict";r.d(t,{_:()=>d});var i,n=r(66581),o=r(84811),a=r(73695),s=r(22102),l=r(20997),c=r(61026),u=r(78461),h=r(49226),d=class extends a.wR{constructor({chains:e,options:t}={}){let r={shimDisconnect:!0,getProvider(){},...t};super({chains:e,options:r}),this.id="injected",(0,a.Ko)(this,i,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,s.K)(e[0])})},this.onChainChanged=e=>{let t=(0,o.J)(e),r=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:r}})},this.onDisconnect=async e=>{if(1013===e.code){let e=await this.getProvider();if(e){let e=await this.getAccount();if(e)return}}this.emit("disconnect"),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey)};let n=r.getProvider();if("string"==typeof r.name)this.name=r.name;else if(n){let e=function(e){if(!e)return"Injected";let t=e=>e.isApexWallet?"Apex Wallet":e.isAvalanche?"Core Wallet":e.isBackpack?"Backpack":e.isBifrost?"Bifrost Wallet":e.isBitKeep?"BitKeep":e.isBitski?"Bitski":e.isBlockWallet?"BlockWallet":e.isBraveWallet?"Brave Wallet":e.isCoin98?"Coin98 Wallet":e.isCoinbaseWallet?"Coinbase Wallet":e.isDawn?"Dawn Wallet":e.isDefiant?"Defiant":e.isDesig?"Desig Wallet":e.isEnkrypt?"Enkrypt":e.isExodus?"Exodus":e.isFordefi?"Fordefi":e.isFrame?"Frame":e.isFrontier?"Frontier Wallet":e.isGamestop?"GameStop Wallet":e.isHaqqWallet?"HAQQ Wallet":e.isHyperPay?"HyperPay Wallet":e.isImToken?"ImToken":e.isHaloWallet?"Halo Wallet":e.isKuCoinWallet?"KuCoin Wallet":e.isMathWallet?"MathWallet":e.isNovaWallet?"Nova Wallet":e.isOkxWallet||e.isOKExWallet?"OKX Wallet":e.isOneInchIOSWallet||e.isOneInchAndroidWallet?"1inch Wallet":e.isOpera?"Opera":e.isPhantom?"Phantom":e.isPortal?"Ripio Portal":e.isRabby?"Rabby Wallet":e.isRainbow?"Rainbow":e.isSafePal?"SafePal Wallet":e.isStatus?"Status":e.isSubWallet?"SubWallet":e.isTalisman?"Talisman":e.isTally?"Taho":e.isTokenPocket?"TokenPocket":e.isTokenary?"Tokenary":e.isTrust||e.isTrustWallet?"Trust Wallet":e.isTTWallet?"TTWallet":e.isXDEFI?"XDEFI Wallet":e.isZeal?"Zeal":e.isZerion?"Zerion":e.isMetaMask?"MetaMask":void 0;if(e.providers?.length){let r=new Set,i=1;for(let n of e.providers){let e=t(n);e||(e=`Unknown Wallet #${i}`,i+=1),r.add(e)}let n=[...r];return n.length?n:n[0]??"Injected"}return t(e)??"Injected"}(n);r.name?this.name=r.name(e):"string"==typeof e?this.name=e:this.name=e[0]}else this.name="Injected";this.ready=!!n}async connect({chainId:e}={}){try{let t=await this.getProvider();if(!t)throw new n.N;t.on&&(t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});let r=await t.request({method:"eth_requestAccounts"}),i=(0,s.K)(r[0]),o=await this.getChainId(),a=this.isChainUnsupported(o);if(e&&o!==e){let t=await this.switchChain(e);o=t.id,a=this.isChainUnsupported(o)}return this.options.shimDisconnect&&this.storage?.setItem(this.shimDisconnectKey,!0),{account:i,chain:{id:o,unsupported:a}}}catch(e){if(this.isUserRejectedRequestError(e))throw new l.ab(e);if(-32002===e.code)throw new l.pT(e);throw e}}async disconnect(){let e=await this.getProvider();e?.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey))}async getAccount(){let e=await this.getProvider();if(!e)throw new n.N;let t=await e.request({method:"eth_accounts"});return(0,s.K)(t[0])}async getChainId(){let e=await this.getProvider();if(!e)throw new n.N;return e.request({method:"eth_chainId"}).then(o.J)}async getProvider(){let e=this.options.getProvider();return e&&(0,a.qx)(this,i,e),(0,a.ac)(this,i)}async getWalletClient({chainId:e}={}){let[t,r]=await Promise.all([this.getProvider(),this.getAccount()]),i=this.chains.find(t=>t.id===e);if(!t)throw Error("provider is required.");return(0,c.K)({account:r,chain:i,transport:(0,u.P)(t)})}async isAuthorized(){try{if(this.options.shimDisconnect&&!this.storage?.getItem(this.shimDisconnectKey))return!1;let e=await this.getProvider();if(!e)throw new n.N;let t=await this.getAccount();return!!t}catch{return!1}}async switchChain(e){let t=await this.getProvider();if(!t)throw new n.N;let r=(0,h.eC)(e);try{return await Promise.all([t.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),new Promise(t=>this.on("change",({chain:r})=>{r?.id===e&&t()}))]),this.chains.find(t=>t.id===e)??{id:e,name:`Chain ${r}`,network:`${r}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(o){let i=this.chains.find(t=>t.id===e);if(!i)throw new n.B({chainId:e,connectorId:this.id});if(4902===o.code||o?.data?.originalError?.code===4902)try{await t.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:i.name,nativeCurrency:i.nativeCurrency,rpcUrls:[i.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(i)}]});let n=await this.getChainId();if(n!==e)throw new l.ab(Error("User rejected switch after adding network."));return i}catch(e){throw new l.ab(e)}if(this.isUserRejectedRequestError(o))throw new l.ab(o);throw new l.x3(o)}}async watchAsset({address:e,decimals:t=18,image:r,symbol:i}){let o=await this.getProvider();if(!o)throw new n.N;return o.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:r,symbol:i}}})}isUserRejectedRequestError(e){return 4001===e.code}};i=new WeakMap},84811:(e,t,r)=>{"use strict";function i(e){return"string"==typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"==typeof e?Number(e):e}r.d(t,{J:()=>i})},66581:(e,t,r)=>{"use strict";r.d(t,{B:()=>i,N:()=>n});var i=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured for connector "${t}".`),this.name="ChainNotConfiguredForConnectorError"}},n=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}}},73695:(e,t,r)=>{"use strict";r.d(t,{wR:()=>d,Ko:()=>c,ac:()=>l,U9:()=>h,qx:()=>u});var i=r(6297),n=r(35036),o=r(74850);let a=(0,o.a)({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0});var s=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},l=(e,t,r)=>(s(e,t,"read from private field"),r?r.call(e):t.get(e)),c=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},u=(e,t,r,i)=>(s(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r),h=(e,t,r)=>(s(e,t,"access private method"),r),d=class extends i{constructor({chains:e=[n.R,a],options:t}){super(),this.chains=e,this.options=t}getBlockExplorerUrls(e){let{default:t,...r}=e.blockExplorers??{};if(t)return[t.url,...Object.values(r).map(e=>e.url)]}isChainUnsupported(e){return!this.chains.some(t=>t.id===e)}setStorage(e){this.storage=e}}},36444:(e,t,r)=>{"use strict";r.d(t,{QB:()=>tW,$j:()=>t8,_g:()=>t4,o6:()=>t2,vZ:()=>function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){let i,n;if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)&&Array.isArray(r)){if((i=t.length)!=r.length)return!1;for(n=i;0!=n--;)if(!e(t[n],r[n]))return!1;return!0}if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();let o=Object.keys(t);if((i=o.length)!==Object.keys(r).length)return!1;for(n=i;0!=n--;)if(!Object.prototype.hasOwnProperty.call(r,o[n]))return!1;for(n=i;0!=n--;){let i=o[n];if(i&&!e(t[i],r[i]))return!1}return!0}return t!=t&&r!=r},zP:()=>t9,EG:()=>rh,RQ:()=>ry,w6:()=>rb,Lk:()=>rw,D0:()=>rd,Hy:()=>rf,uV:()=>rt,gY:()=>tY,jr:()=>ri,wp:()=>t1,a4:()=>rl,JH:()=>rc,If:()=>rp,Mn:()=>rv,uH:()=>rg,QC:()=>rm,pC:()=>rn,fq:()=>ro,n9:()=>ru});var i,n,o,a,s,l=r(32526),c=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},u=(e,t,r)=>(c(e,t,"read from private field"),r?r.call(e):t.get(e)),h=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},d=(e,t,r,i)=>(c(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r),f=(e,t,r)=>(c(e,t,"access private method"),r),p=r(79079),g=r(98410),m=r(28870),b=r(20836),w=r(11026),y=r(88402),v=r(49226),x=r(95866),C=r(49873),_=r(75632);function E(e,t){if(!(e instanceof C.G))return!1;let r=e.walk(e=>e instanceof _.Lu);return r instanceof _.Lu&&(!!(r.data?.errorName==="ResolverNotFound"||r.data?.errorName==="ResolverWildcardNotSupported"||r.reason?.includes("Wildcard on non-extended resolvers is not supported"))||"reverse"===t&&r.reason===x.$[50])}var k=r(80971),S=r(7585),O=r(81229),D=r(40338);function P(e){if(66!==e.length||0!==e.indexOf("[")||65!==e.indexOf("]"))return null;let t=`0x${e.slice(1,65)}`;return(0,D.v)(t)?t:null}function A(e){let t=new Uint8Array(32).fill(0);if(!e)return(0,v.ci)(t);let r=e.split(".");for(let e=r.length-1;e>=0;e-=1){let i=P(r[e]),n=i?(0,S.O0)(i):(0,O.w)((0,S.qX)(r[e]),"bytes");t=(0,O.w)((0,k.zo)([t,n]),"bytes")}return(0,v.ci)(t)}function T(e){let t=e.replace(/^\.|\.$/gm,"");if(0===t.length)return new Uint8Array(1);let r=new Uint8Array((0,S.qX)(t).byteLength+2),i=0,n=t.split(".");for(let e=0;e<n.length;e++){let t=(0,S.qX)(n[e]);if(t.byteLength>255){var o;t=(0,S.qX)((o=function(e){let t=new Uint8Array(32).fill(0);return e?P(e)||(0,O.w)((0,S.qX)(e)):(0,v.ci)(t)}(n[e]),`[${o.slice(2)}]`))}r[i]=t.length,r.set(t,i+1),i+=t.length+1}return r.byteLength!==i+1?r.slice(0,i+1):r}var $=r(40490),I=r(9830),N=r(20997);function R(e,{abi:t,address:r,args:i,docsPath:n,functionName:o,sender:a}){let{code:s,data:l,message:c,shortMessage:u}=e instanceof _.VQ?e:e instanceof C.G?e.walk(e=>"data"in e)||e.walk():{},h=e instanceof I.wb?new _.Dk({functionName:o}):[3,N.XS.code].includes(s)&&(l||c||u)?new _.Lu({abi:t,data:"object"==typeof l?l.data:l,functionName:o,message:u??c}):e;return new _.uq(h,{abi:t,args:i,contractAddress:r,docsPath:n,functionName:o,sender:a})}var M=r(50740);async function j(e,{abi:t,address:r,args:i,functionName:n,...o}){let a=(0,b.R)({abi:t,args:i,functionName:n});try{let{data:s}=await (0,$.s)(e,M.R,"call")({data:a,to:r,...o});return(0,m.k)({abi:t,args:i,functionName:n,data:s||"0x"})}catch(e){throw R(e,{abi:t,address:r,args:i,docsPath:"/docs/contract/readContract",functionName:n})}}async function L(e,{blockNumber:t,blockTag:r,coinType:i,name:n,universalResolverAddress:o}){let a=o;if(!a){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");a=(0,w.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{let o=(0,b.R)({abi:g.X$,functionName:"addr",...null!=i?{args:[A(n),BigInt(i)]}:{args:[A(n)]}}),s=await (0,$.s)(e,j,"readContract")({address:a,abi:g.k3,functionName:"resolve",args:[(0,v.NC)(T(n)),o],blockNumber:t,blockTag:r});if("0x"===s[0])return null;let l=(0,m.k)({abi:g.X$,args:null!=i?[A(n),BigInt(i)]:void 0,functionName:"addr",data:s[0]});if("0x"===l||"0x00"===(0,y.f)(l))return null;return l}catch(e){if(E(e,"resolve"))return null;throw e}}class B extends C.G{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class U extends C.G{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class F extends C.G{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class W extends C.G{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}let z=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,H=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,q=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,G=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function V(e){try{let t=await fetch(e,{method:"HEAD"});if(200===t.status){let e=t.headers.get("content-type");return e?.startsWith("image/")}return!1}catch(t){if("object"==typeof t&&void 0!==t.response||!globalThis.hasOwnProperty("Image"))return!1;return new Promise(t=>{let r=new Image;r.onload=()=>{t(!0)},r.onerror=()=>{t(!1)},r.src=e})}}function Z(e,t){return e?e.endsWith("/")?e.slice(0,-1):e:t}function K({uri:e,gatewayUrls:t}){let r=q.test(e);if(r)return{uri:e,isOnChain:!0,isEncoded:r};let i=Z(t?.ipfs,"https://ipfs.io"),n=Z(t?.arweave,"https://arweave.net"),o=e.match(z),{protocol:a,subpath:s,target:l,subtarget:c=""}=o?.groups||{},u="ipns:/"===a||"ipns/"===s,h="ipfs:/"===a||"ipfs/"===s||H.test(e);if(e.startsWith("http")&&!u&&!h){let r=e;return t?.arweave&&(r=e.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:r,isOnChain:!1,isEncoded:!1}}if((u||h)&&l)return{uri:`${i}/${u?"ipns":"ipfs"}/${l}${c}`,isOnChain:!1,isEncoded:!1};if("ar:/"===a&&l)return{uri:`${n}/${l}${c||""}`,isOnChain:!1,isEncoded:!1};let d=e.replace(G,"");if(d.startsWith("<svg")&&(d=`data:image/svg+xml;base64,${btoa(d)}`),d.startsWith("data:")||d.startsWith("{"))return{uri:d,isOnChain:!0,isEncoded:!1};throw new F({uri:e})}function Y(e){if("object"!=typeof e||!("image"in e)&&!("image_url"in e)&&!("image_data"in e))throw new B({data:e});return e.image||e.image_url||e.image_data}async function Q({gatewayUrls:e,uri:t}){try{let r=await fetch(t).then(e=>e.json()),i=await X({gatewayUrls:e,uri:Y(r)});return i}catch{throw new F({uri:t})}}async function X({gatewayUrls:e,uri:t}){let{uri:r,isOnChain:i}=K({uri:t,gatewayUrls:e});if(i)return r;let n=await V(r);if(n)return r;throw new F({uri:t})}async function J(e,{nft:t}){if("erc721"===t.namespace)return j(e,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if("erc1155"===t.namespace)return j(e,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new W({namespace:t.namespace})}async function ee(e,{gatewayUrls:t,record:r}){return/eip155:/i.test(r)?et(e,{gatewayUrls:t,record:r}):X({uri:r,gatewayUrls:t})}async function et(e,{gatewayUrls:t,record:r}){let i=function(e){let t=e;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));let[r,i,n]=t.split("/"),[o,a]=r.split(":"),[s,l]=i.split(":");if(!o||"eip155"!==o.toLowerCase())throw new U({reason:"Only EIP-155 supported"});if(!a)throw new U({reason:"Chain ID not found"});if(!l)throw new U({reason:"Contract address not found"});if(!n)throw new U({reason:"Token ID not found"});if(!s)throw new U({reason:"ERC namespace not found"});return{chainID:parseInt(a),namespace:s.toLowerCase(),contractAddress:l,tokenID:n}}(r),n=await J(e,{nft:i}),{uri:o,isOnChain:a,isEncoded:s}=K({uri:n,gatewayUrls:t});if(a&&(o.includes("data:application/json;base64,")||o.startsWith("{"))){let e=s?atob(o.replace("data:application/json;base64,","")):o,r=JSON.parse(e);return X({uri:Y(r),gatewayUrls:t})}let l=i.tokenID;return"erc1155"===i.namespace&&(l=l.replace("0x","").padStart(64,"0")),Q({gatewayUrls:t,uri:o.replace(/(?:0x)?{id}/,l)})}async function er(e,{blockNumber:t,blockTag:r,name:i,key:n,universalResolverAddress:o}){let a=o;if(!a){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");a=(0,w.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{let o=await (0,$.s)(e,j,"readContract")({address:a,abi:g.k3,functionName:"resolve",args:[(0,v.NC)(T(i)),(0,b.R)({abi:g.nZ,functionName:"text",args:[A(i),n]})],blockNumber:t,blockTag:r});if("0x"===o[0])return null;let s=(0,m.k)({abi:g.nZ,functionName:"text",data:o[0]});return""===s?null:s}catch(e){if(E(e,"resolve"))return null;throw e}}async function ei(e,{blockNumber:t,blockTag:r,gatewayUrls:i,name:n,universalResolverAddress:o}){let a=await (0,$.s)(e,er,"getEnsText")({blockNumber:t,blockTag:r,key:"avatar",name:n,universalResolverAddress:o});if(!a)return null;try{return await ee(e,{record:a,gatewayUrls:i})}catch{return null}}async function en(e,{address:t,blockNumber:r,blockTag:i,universalResolverAddress:n}){let o=n;if(!o){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");o=(0,w.L)({blockNumber:r,chain:e.chain,contract:"ensUniversalResolver"})}let a=`${t.toLowerCase().substring(2)}.addr.reverse`;try{let t=await (0,$.s)(e,j,"readContract")({address:o,abi:g.du,functionName:"reverse",args:[(0,v.NC)(T(a))],blockNumber:r,blockTag:i});return t[0]}catch(e){if(E(e,"reverse"))return null;throw e}}async function eo(e,{blockNumber:t,blockTag:r,name:i,universalResolverAddress:n}){let o=n;if(!o){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");o=(0,w.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}let[a]=await (0,$.s)(e,j,"readContract")({address:o,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[(0,v.NC)(T(i))],blockNumber:t,blockTag:r});return a}function ea(e,{method:t}){let r={};return"fallback"===e.transport.type&&e.transport.onResponse?.(({method:e,response:i,status:n,transport:o})=>{"success"===n&&t===e&&(r[i]=o.request)}),t=>r[t]||e.request}async function es(e){let t=ea(e,{method:"eth_newBlockFilter"}),r=await e.request({method:"eth_newBlockFilter"});return{id:r,request:t(r),type:"block"}}class el extends C.G{constructor(e){super(`Filter type "${e}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}var ec=r(4996),eu=r(520),eh=r(30836),ed=r(411);function ef({abi:e,eventName:t,args:r}){let i=e[0];if(t&&!(i=(0,ed.m)({abi:e,args:r,name:t})))throw new I.mv(t,{docsPath:"/docs/contract/encodeEventTopics"});if("event"!==i.type)throw new I.mv(void 0,{docsPath:"/docs/contract/encodeEventTopics"});let n=(0,eh.t)(i),o=(0,ec.e)(n),a=[];if(r&&"inputs"in i){let e=i.inputs?.filter(e=>"indexed"in e&&e.indexed),t=Array.isArray(r)?r:Object.values(r).length>0?e?.map(e=>r[e.name])??[]:[];t.length>0&&(a=e?.map((e,r)=>Array.isArray(t[r])?t[r].map((i,n)=>ep({param:e,value:t[r][n]})):t[r]?ep({param:e,value:t[r]}):null)??[])}return[o,...a]}function ep({param:e,value:t}){if("string"===e.type||"bytes"===e.type)return(0,O.w)((0,S.O0)(t));if("tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/))throw new el(e.type);return(0,eu.E)([e],[t])}async function eg(e,{address:t,abi:r,args:i,eventName:n,fromBlock:o,strict:a,toBlock:s}){let l=ea(e,{method:"eth_newFilter"}),c=n?ef({abi:r,args:i,eventName:n}):void 0,u=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:"bigint"==typeof o?(0,v.eC)(o):o,toBlock:"bigint"==typeof s?(0,v.eC)(s):s,topics:c}]});return{abi:r,args:i,eventName:n,id:u,request:l(u),strict:a,type:"event"}}async function em(e,{address:t,args:r,event:i,events:n,fromBlock:o,strict:a,toBlock:s}={}){let l=n??(i?[i]:void 0),c=ea(e,{method:"eth_newFilter"}),u=[];l&&(u=[l.flatMap(e=>ef({abi:[e],eventName:e.name,args:r}))],i&&(u=u[0]));let h=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:"bigint"==typeof o?(0,v.eC)(o):o,toBlock:"bigint"==typeof s?(0,v.eC)(s):s,...u.length?{topics:u}:{}}]});return{abi:l,args:r,eventName:i?i.name:void 0,fromBlock:o,id:h,request:c(h),strict:a,toBlock:s,type:"event"}}async function eb(e){let t=ea(e,{method:"eth_newPendingTransactionFilter"}),r=await e.request({method:"eth_newPendingTransactionFilter"});return{id:r,request:t(r),type:"transaction"}}var ew=r(79319),ey=r(20805);async function ev(e,{abi:t,address:r,args:i,functionName:n,...o}){let a=(0,b.R)({abi:t,args:i,functionName:n});try{let t=await (0,$.s)(e,ey.Q,"estimateGas")({data:a,to:r,...o});return t}catch(a){let e=o.account?(0,ew.T)(o.account):void 0;throw R(a,{abi:t,address:r,args:i,docsPath:"/docs/contract/estimateContractGas",functionName:n,sender:e?.address})}}var ex=r(98593),eC=r(93303);async function e_(e,{address:t,blockNumber:r,blockTag:i="latest"}){let n=r?(0,v.eC)(r):void 0,o=await e.request({method:"eth_getBalance",params:[t,n||i]});return BigInt(o)}var eE=r(50931);let ek=new Map,eS=new Map;async function eO(e,{cacheKey:t,cacheTime:r=1/0}){let i=function(e){let t=(e,t)=>({clear:()=>t.delete(e),get:()=>t.get(e),set:r=>t.set(e,r)}),r=t(e,ek),i=t(e,eS);return{clear:()=>{r.clear(),i.clear()},promise:r,response:i}}(t),n=i.response.get();if(n&&r>0){let e=new Date().getTime()-n.created.getTime();if(e<r)return n.data}let o=i.promise.get();o||(o=e(),i.promise.set(o));try{let e=await o;return i.response.set({created:new Date,data:e}),e}finally{i.promise.clear()}}let eD=e=>`blockNumber.${e}`;async function eP(e,{cacheTime:t=e.cacheTime,maxAge:r}={}){let i=await eO(()=>e.request({method:"eth_blockNumber"}),{cacheKey:eD(e.uid),cacheTime:r??t});return BigInt(i)}var eA=r(61313);async function eT(e,{blockHash:t,blockNumber:r,blockTag:i="latest"}={}){let n;let o=void 0!==r?(0,v.eC)(r):void 0;return n=t?await e.request({method:"eth_getBlockTransactionCountByHash",params:[t]}):await e.request({method:"eth_getBlockTransactionCountByNumber",params:[o||i]}),(0,eA.ly)(n)}async function e$(e,{address:t,blockNumber:r,blockTag:i="latest"}){let n=void 0!==r?(0,v.eC)(r):void 0,o=await e.request({method:"eth_getCode",params:[t,n||i]});if("0x"!==o)return o}var eI=r(1816),eN=r(33011);let eR="/docs/contract/decodeEventLog";function eM({abi:e,data:t,strict:r,topics:i}){let n=r??!0,[o,...a]=i;if(!o)throw new I.FM({docsPath:eR});let s=e.find(e=>"event"===e.type&&o===(0,ec.e)((0,eh.t)(e)));if(!(s&&"name"in s)||"event"!==s.type)throw new I.lC(o,{docsPath:eR});let{name:l,inputs:c}=s,u=c?.some(e=>!("name"in e&&e.name)),h=u?[]:{},d=c.filter(e=>"indexed"in e&&e.indexed);for(let e=0;e<d.length;e++){let t=d[e],r=a[e];if(!r)throw new I.Gy({abiItem:s,param:t});h[t.name||e]=function({param:e,value:t}){if("string"===e.type||"bytes"===e.type||"tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/))return t;let r=(0,eN.r)([e],t)||[];return r[0]}({param:t,value:r})}let f=c.filter(e=>!("indexed"in e&&e.indexed));if(f.length>0){if(t&&"0x"!==t)try{let e=(0,eN.r)(f,t);if(e){if(u)h=[...h,...e];else for(let t=0;t<f.length;t++)h[f[t].name]=e[t]}}catch(e){if(n){if(e instanceof I.xB)throw new I.SM({abiItem:s,data:e.data,params:e.params,size:e.size});throw e}}else if(n)throw new I.SM({abiItem:s,data:"0x",params:f,size:0})}return{eventName:l,args:Object.values(h).length>0?h:void 0}}function ej(e,{args:t,eventName:r}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...r?{args:t,eventName:r}:{}}}async function eL(e,{address:t,blockHash:r,fromBlock:i,toBlock:n,event:o,events:a,args:s,strict:l}={}){let c=l??!1,u=a??(o?[o]:void 0),h=[];return u&&(h=[u.flatMap(e=>ef({abi:[e],eventName:e.name,args:s}))],o&&(h=h[0])),(r?await e.request({method:"eth_getLogs",params:[{address:t,topics:h,blockHash:r}]}):await e.request({method:"eth_getLogs",params:[{address:t,topics:h,fromBlock:"bigint"==typeof i?(0,v.eC)(i):i,toBlock:"bigint"==typeof n?(0,v.eC)(n):n}]})).map(e=>{try{let{eventName:t,args:r}=u?eM({abi:u,data:e.data,topics:e.topics,strict:c}):{eventName:void 0,args:void 0};return ej(e,{args:r,eventName:t})}catch(i){let t,r;if(i instanceof I.SM||i instanceof I.Gy){if(c)return;t=i.abiItem.name,r=i.abiItem.inputs?.some(e=>!("name"in e&&e.name))}return ej(e,{args:r?[]:{},eventName:t})}}).filter(Boolean)}async function eB(e,{abi:t,address:r,args:i,blockHash:n,eventName:o,fromBlock:a,toBlock:s,strict:l}){let c=o?(0,ed.m)({abi:t,name:o}):void 0,u=c?void 0:t.filter(e=>"event"===e.type);return(0,$.s)(e,eL,"getLogs")({address:r,args:i,blockHash:n,event:c,events:u,fromBlock:a,toBlock:s,strict:l})}async function eU(e,{blockCount:t,blockNumber:r,blockTag:i="latest",rewardPercentiles:n}){let o=r?(0,v.eC)(r):void 0,a=await e.request({method:"eth_feeHistory",params:[(0,v.eC)(t),o||i,n]});return{baseFeePerGas:a.baseFeePerGas.map(e=>BigInt(e)),gasUsedRatio:a.gasUsedRatio,oldestBlock:BigInt(a.oldestBlock),reward:a.reward?.map(e=>e.map(e=>BigInt(e)))}}async function eF(e,{filter:t}){let r="strict"in t&&t.strict,i=await t.request({method:"eth_getFilterChanges",params:[t.id]});return i.map(e=>{if("string"==typeof e)return e;try{let{eventName:i,args:n}="abi"in t&&t.abi?eM({abi:t.abi,data:e.data,topics:e.topics,strict:r}):{eventName:void 0,args:void 0};return ej(e,{args:n,eventName:i})}catch(n){let r,i;if(n instanceof I.SM||n instanceof I.Gy){if("strict"in t&&t.strict)return;r=n.abiItem.name,i=n.abiItem.inputs?.some(e=>!("name"in e&&e.name))}return ej(e,{args:i?[]:{},eventName:r})}}).filter(Boolean)}async function eW(e,{filter:t}){let r=t.strict??!1,i=await t.request({method:"eth_getFilterLogs",params:[t.id]});return i.map(e=>{try{let{eventName:i,args:n}="abi"in t&&t.abi?eM({abi:t.abi,data:e.data,topics:e.topics,strict:r}):{eventName:void 0,args:void 0};return ej(e,{args:n,eventName:i})}catch(n){let r,i;if(n instanceof I.SM||n instanceof I.Gy){if("strict"in t&&t.strict)return;r=n.abiItem.name,i=n.abiItem.inputs?.some(e=>!("name"in e&&e.name))}return ej(e,{args:i?[]:{},eventName:r})}}).filter(Boolean)}var ez=r(22172);async function eH(e,{address:t,blockNumber:r,blockTag:i,storageKeys:n}){let o=void 0!==r?(0,v.eC)(r):void 0,a=await e.request({method:"eth_getProof",params:[t,n,o||(i??"latest")]});return{...a,balance:a.balance?BigInt(a.balance):void 0,nonce:a.nonce?(0,eA.ly)(a.nonce):void 0,storageProof:a.storageProof?a.storageProof.map(e=>({...e,value:BigInt(e.value)})):void 0}}async function eq(e,{address:t,blockNumber:r,blockTag:i="latest",slot:n}){let o=void 0!==r?(0,v.eC)(r):void 0,a=await e.request({method:"eth_getStorageAt",params:[t,n,o||i]});return a}var eG=r(22297),eV=r(31595);async function eZ(e,{blockHash:t,blockNumber:r,blockTag:i,hash:n,index:o}){let a=i||"latest",s=void 0!==r?(0,v.eC)(r):void 0,l=null;if(n?l=await e.request({method:"eth_getTransactionByHash",params:[n]}):t?l=await e.request({method:"eth_getTransactionByBlockHashAndIndex",params:[t,(0,v.eC)(o)]}):(s||a)&&(l=await e.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[s||a,(0,v.eC)(o)]})),!l)throw new eG.Bh({blockHash:t,blockNumber:r,blockTag:a,hash:n,index:o});let c=e.chain?.formatters?.transaction?.format||eV.Tr;return c(l)}async function eK(e,{hash:t,transactionReceipt:r}){let[i,n]=await Promise.all([(0,$.s)(e,eP,"getBlockNumber")({}),t?(0,$.s)(e,eZ,"getBlockNumber")({hash:t}):void 0]),o=r?.blockNumber||n?.blockNumber;return o?i-o+1n:0n}var eY=r(40761);let eQ={"0x0":"reverted","0x1":"success"};function eX(e){return{...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map(e=>ej(e)):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?(0,eA.ly)(e.transactionIndex):null,status:e.status?eQ[e.status]:null,type:e.type?eV.c8[e.type]||e.type:null}}async function eJ(e,{hash:t}){let r=await e.request({method:"eth_getTransactionReceipt",params:[t]});if(!r)throw new eG.Yb({hash:t});let i=e.chain?.formatters?.transactionReceipt?.format||eX;return i(r)}async function e0(e,t){let{allowFailure:r=!0,batchSize:i,blockNumber:n,blockTag:o,contracts:a,multicallAddress:s}=t,l=i??("object"==typeof e.batch?.multicall&&e.batch.multicall.batchSize||1024),c=s;if(!c){if(!e.chain)throw Error("client chain not configured. multicallAddress is required.");c=(0,w.L)({blockNumber:n,chain:e.chain,contract:"multicall3"})}let u=[[]],h=0,d=0;for(let e=0;e<a.length;e++){let{abi:t,address:i,args:n,functionName:o}=a[e];try{let e=(0,b.R)({abi:t,args:n,functionName:o});d+=(e.length-2)/2,l>0&&d>l&&u[h].length>0&&(h++,d=(e.length-2)/2,u[h]=[]),u[h]=[...u[h],{allowFailure:!0,callData:e,target:i}]}catch(a){let e=R(a,{abi:t,address:i,args:n,docsPath:"/docs/contract/multicall",functionName:o});if(!r)throw e;u[h]=[...u[h],{allowFailure:!0,callData:"0x",target:i}]}}let f=await Promise.allSettled(u.map(t=>(0,$.s)(e,j,"readContract")({abi:g.F8,address:c,args:[t],blockNumber:n,blockTag:o,functionName:"aggregate3"}))),p=[];for(let e=0;e<f.length;e++){let t=f[e];if("rejected"===t.status){if(!r)throw t.reason;for(let r=0;r<u[e].length;r++)p.push({status:"failure",error:t.reason,result:void 0});continue}let i=t.value;for(let t=0;t<i.length;t++){let{returnData:n,success:o}=i[t],{callData:s}=u[e][t],{abi:l,address:c,functionName:h,args:d}=a[p.length];try{if("0x"===s)throw new I.wb;if(!o)throw new _.VQ({data:n});let e=(0,m.k)({abi:l,args:d,data:n,functionName:h});p.push(r?{result:e,status:"success"}:e)}catch(t){let e=R(t,{abi:l,address:c,args:d,docsPath:"/docs/contract/multicall",functionName:h});if(!r)throw e;p.push({error:e,result:void 0,status:"failure"})}}}if(p.length!==a.length)throw new C.G("multicall results mismatch");return p}async function e1(e,{abi:t,address:r,args:i,dataSuffix:n,functionName:o,...a}){let s=a.account?(0,ew.T)(a.account):void 0,l=(0,b.R)({abi:t,args:i,functionName:o});try{let{data:s}=await (0,$.s)(e,M.R,"call")({batch:!1,data:`${l}${n?n.replace("0x",""):""}`,to:r,...a}),c=(0,m.k)({abi:t,args:i,functionName:o,data:s||"0x"});return{result:c,request:{abi:t,address:r,args:i,dataSuffix:n,functionName:o,...a}}}catch(e){throw R(e,{abi:t,address:r,args:i,docsPath:"/docs/contract/simulateContract",functionName:o,sender:s?.address})}}async function e2(e,{filter:t}){return t.request({method:"eth_uninstallFilter",params:[t.id]})}BigInt(0),BigInt(1),BigInt(2),(e,t)=>t.toString(16).padStart(2,"0");var e3=r(54654);async function e5(e,{address:t,hash:r,signature:i,...n}){let o=(0,D.v)(i)?i:(0,v.NC)(i);try{let{data:i}=await (0,$.s)(e,M.R,"call")({data:(0,e3.w)({abi:g.$o,args:[t,r,o],bytecode:"0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572"}),...n});return function(e,t){let r=(0,D.v)(e)?(0,S.O0)(e):e,i=(0,D.v)(t)?(0,S.O0)(t):t;return function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(r,i)}(i??"0x0","0x1")}catch(e){if(e instanceof _.cg)return!1;throw e}}async function e4(e,{address:t,message:r,signature:i,...n}){let o=function(e,t){let r="string"==typeof e?(0,S.qX)(e):e.raw instanceof Uint8Array?e.raw:(0,S.O0)(e.raw),i=(0,S.qX)(`Ethereum Signed Message:
${r.length}`);return(0,O.w)((0,k.zo)([i,r]),void 0)}(r);return e5(e,{address:t,hash:o,signature:i,...n})}var e6=r(70546);function e8({data:e,primaryType:t,types:r}){let i=function e({data:t,primaryType:r,types:i}){let n=[{type:"bytes32"}],o=[function({primaryType:e,types:t}){let r=(0,v.NC)(function({primaryType:e,types:t}){let r="",i=function e({primaryType:t,types:r},i=new Set){let n=t.match(/^\w*/u),o=n?.[0];if(i.has(o)||void 0===r[o])return i;for(let t of(i.add(o),r[o]))e({primaryType:t.type,types:r},i);return i}({primaryType:e,types:t});i.delete(e);let n=[e,...Array.from(i).sort()];for(let e of n)r+=`${e}(${t[e].map(({name:e,type:t})=>`${t} ${e}`).join(",")})`;return r}({primaryType:e,types:t}));return(0,O.w)(r)}({primaryType:r,types:i})];for(let a of i[r]){let[r,s]=function t({types:r,name:i,type:n,value:o}){if(void 0!==r[n])return[{type:"bytes32"},(0,O.w)(e({data:o,primaryType:n,types:r}))];if("bytes"===n){let e=o.length%2?"0":"";return o=`0x${e+o.slice(2)}`,[{type:"bytes32"},(0,O.w)(o)]}if("string"===n)return[{type:"bytes32"},(0,O.w)((0,v.NC)(o))];if(n.lastIndexOf("]")===n.length-1){let e=n.slice(0,n.lastIndexOf("[")),a=o.map(n=>t({name:i,type:e,types:r,value:n}));return[{type:"bytes32"},(0,O.w)((0,eu.E)(a.map(([e])=>e),a.map(([,e])=>e)))]}return[{type:n},o]}({types:i,name:a.name,type:a.type,value:t[a.name]});n.push(r),o.push(s)}return(0,eu.E)(n,o)}({data:e,primaryType:t,types:r});return(0,O.w)(i)}async function e9(e,{address:t,signature:r,message:i,primaryType:n,types:o,domain:a,...s}){let l=function({domain:e,message:t,primaryType:r,types:i}){let n=void 0===e?{}:e,o={EIP712Domain:(0,e6.cj)({domain:n}),...i};(0,e6.iC)({domain:n,message:t,primaryType:r,types:o});let a=["0x1901"];return n&&a.push(function({domain:e,types:t}){return e8({data:e,primaryType:"EIP712Domain",types:t})}({domain:n,types:o})),"EIP712Domain"!==r&&a.push(e8({data:t,primaryType:r,types:o})),(0,O.w)((0,k.zo)(a))}({message:i,primaryType:n,types:o,domain:a});return e5(e,{address:t,hash:l,signature:r,...s})}let e7=new Map,te=new Map,tt=0;function tr(e,t,r){let i=++tt,n=()=>e7.get(e)||[],o=()=>{let t=n();e7.set(e,t.filter(e=>e.id!==i))},a=()=>{let t=te.get(e);1===n().length&&t&&t(),o()},s=n();if(e7.set(e,[...s,{id:i,fns:t}]),s&&s.length>0)return a;let l={};for(let e in t)l[e]=(...t)=>{let r=n();if(0!==r.length)for(let i of r)i.fns[e]?.(...t)};let c=r(l);return"function"==typeof c&&te.set(e,c),a}var ti=r(54474),tn=r(86285),to=r(50939);function ta(e,{emitOnBegin:t,initialWaitTime:r,interval:i}){let n=!0,o=()=>n=!1,a=async()=>{let a;t&&(a=await e({unpoll:o}));let s=await r?.(a)??i;await (0,to.D)(s);let l=async()=>{n&&(await e({unpoll:o}),await (0,to.D)(i),l())};l()};return a(),o}function ts(e,{emitOnBegin:t=!1,emitMissed:r=!1,onBlockNumber:i,onError:n,poll:o,pollingInterval:a=e.pollingInterval}){let s,l,c;let u=void 0!==o?o:"webSocket"!==e.transport.type;return u?(()=>{let o=(0,tn.P)(["watchBlockNumber",e.uid,t,r,a]);return tr(o,{onBlockNumber:i,onError:n},i=>ta(async()=>{try{let t=await (0,$.s)(e,eP,"getBlockNumber")({cacheTime:0});if(s){if(t===s)return;if(t-s>1&&r)for(let e=s+1n;e<t;e++)i.onBlockNumber(e,s),s=e}(!s||t>s)&&(i.onBlockNumber(t,s),s=t)}catch(e){i.onError?.(e)}},{emitOnBegin:t,interval:a}))})():(l=!0,c=()=>l=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newHeads"],onData(e){if(!l)return;let t=(0,eA.y_)(e.result?.number);i(t,s),s=t},onError(e){n?.(e)}});c=t,l||c()}catch(e){n?.(e)}})(),c)}async function tl(e,{confirmations:t=1,hash:r,onReplaced:i,pollingInterval:n=e.pollingInterval,timeout:o}){let a,s,l;let c=(0,tn.P)(["waitForTransactionReceipt",e.uid,r]),u=!1;return new Promise((h,d)=>{o&&setTimeout(()=>d(new eG.mc({hash:r})),o);let f=tr(c,{onReplaced:i,resolve:h,reject:d},i=>{let o=(0,$.s)(e,ts,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:n,async onBlockNumber(n){if(u)return;let c=n,h=e=>{o(),e(),f()};try{if(l){if(t>1&&(!l.blockNumber||c-l.blockNumber+1n<t))return;h(()=>i.resolve(l));return}if(a||(u=!0,await (0,ti.J)(async()=>{(a=await (0,$.s)(e,eZ,"getTransaction")({hash:r})).blockNumber&&(c=a.blockNumber)},{delay:({count:e})=>200*~~(1<<e),retryCount:6}),u=!1),l=await (0,$.s)(e,eJ,"getTransactionReceipt")({hash:r}),t>1&&(!l.blockNumber||c-l.blockNumber+1n<t))return;h(()=>i.resolve(l))}catch(r){if(a&&(r instanceof eG.Bh||r instanceof eG.Yb))try{s=a;let r=await (0,$.s)(e,eE.Q,"getBlock")({blockNumber:c,includeTransactions:!0}),n=r.transactions.find(({from:e,nonce:t})=>e===s.from&&t===s.nonce);if(!n||(l=await (0,$.s)(e,eJ,"getTransactionReceipt")({hash:n.hash}),t>1&&(!l.blockNumber||c-l.blockNumber+1n<t)))return;let o="replaced";n.to===s.to&&n.value===s.value?o="repriced":n.from===n.to&&0n===n.value&&(o="cancelled"),h(()=>{i.onReplaced?.({reason:o,replacedTransaction:s,transaction:n,transactionReceipt:l}),i.resolve(l)})}catch(e){h(()=>i.reject(e))}else h(()=>i.reject(r))}}})})})}var tc=r(48642),tu=r(33500),th=r(25873);function td(e){return{call:t=>(0,M.R)(e,t),createBlockFilter:()=>es(e),createContractEventFilter:t=>eg(e,t),createEventFilter:t=>em(e,t),createPendingTransactionFilter:()=>eb(e),estimateContractGas:t=>ev(e,t),estimateGas:t=>(0,ey.Q)(e,t),getBalance:t=>e_(e,t),getBlock:t=>(0,eE.Q)(e,t),getBlockNumber:t=>eP(e,t),getBlockTransactionCount:t=>eT(e,t),getBytecode:t=>e$(e,t),getChainId:()=>(0,eI.L)(e),getContractEvents:t=>eB(e,t),getEnsAddress:t=>L(e,t),getEnsAvatar:t=>ei(e,t),getEnsName:t=>en(e,t),getEnsResolver:t=>eo(e,t),getEnsText:t=>er(e,t),getFeeHistory:t=>eU(e,t),estimateFeesPerGas:t=>(0,ex.X)(e,t),getFilterChanges:t=>eF(e,t),getFilterLogs:t=>eW(e,t),getGasPrice:()=>(0,ez.o)(e),getLogs:t=>eL(e,t),getProof:t=>eH(e,t),estimateMaxPriorityFeePerGas:t=>(0,eC._)(e,t),getStorageAt:t=>eq(e,t),getTransaction:t=>eZ(e,t),getTransactionConfirmations:t=>eK(e,t),getTransactionCount:t=>(0,eY.K)(e,t),getTransactionReceipt:t=>eJ(e,t),multicall:t=>e0(e,t),prepareTransactionRequest:t=>(0,tu.Z)(e,t),readContract:t=>j(e,t),sendRawTransaction:t=>(0,th.p)(e,t),simulateContract:t=>e1(e,t),verifyMessage:t=>e4(e,t),verifyTypedData:t=>e9(e,t),uninstallFilter:t=>e2(e,t),waitForTransactionReceipt:t=>tl(e,t),watchBlocks:t=>(function(e,{blockTag:t="latest",emitMissed:r=!1,emitOnBegin:i=!1,onBlock:n,onError:o,includeTransactions:a,poll:s,pollingInterval:l=e.pollingInterval}){let c,u,h;let d=void 0!==s?s:"webSocket"!==e.transport.type,f=a??!1;return d?(()=>{let a=(0,tn.P)(["watchBlocks",e.uid,r,i,f,l]);return tr(a,{onBlock:n,onError:o},n=>ta(async()=>{try{let i=await (0,$.s)(e,eE.Q,"getBlock")({blockTag:t,includeTransactions:f});if(i.number&&c?.number){if(i.number===c.number)return;if(i.number-c.number>1&&r)for(let t=c?.number+1n;t<i.number;t++){let r=await (0,$.s)(e,eE.Q,"getBlock")({blockNumber:t,includeTransactions:f});n.onBlock(r,c),c=r}}(!c?.number||"pending"===t&&!i?.number||i.number&&i.number>c.number)&&(n.onBlock(i,c),c=i)}catch(e){n.onError?.(e)}},{emitOnBegin:i,interval:l}))})():(u=!0,h=()=>u=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newHeads"],onData(t){if(!u)return;let r=e.chain?.formatters?.block?.format||tc.Z,i=r(t.result);n(i,c),c=i},onError(e){o?.(e)}});h=t,u||h()}catch(e){o?.(e)}})(),h)})(e,t),watchBlockNumber:t=>ts(e,t),watchContractEvent:t=>(function(e,{abi:t,address:r,args:i,batch:n=!0,eventName:o,onError:a,onLogs:s,poll:l,pollingInterval:c=e.pollingInterval,strict:u}){let h,d;let f=void 0!==l?l:"webSocket"!==e.transport.type;return f?(()=>{let l=(0,tn.P)(["watchContractEvent",r,i,n,e.uid,o,c]),h=u??!1;return tr(l,{onLogs:s,onError:a},a=>{let s,l;let u=!1,d=ta(async()=>{if(!u){try{l=await (0,$.s)(e,eg,"createContractEventFilter")({abi:t,address:r,args:i,eventName:o,strict:h})}catch{}u=!0;return}try{let c;if(l)c=await (0,$.s)(e,eF,"getFilterChanges")({filter:l});else{let n=await (0,$.s)(e,eP,"getBlockNumber")({});c=s&&s!==n?await (0,$.s)(e,eB,"getContractEvents")({abi:t,address:r,args:i,eventName:o,fromBlock:s+1n,toBlock:n,strict:h}):[],s=n}if(0===c.length)return;if(n)a.onLogs(c);else for(let e of c)a.onLogs([e])}catch(e){l&&e instanceof N.yR&&(u=!1),a.onError?.(e)}},{emitOnBegin:!0,interval:c});return async()=>{l&&await (0,$.s)(e,e2,"uninstallFilter")({filter:l}),d()}})})():(h=!0,d=()=>h=!1,(async()=>{try{let n=o?ef({abi:t,eventName:o,args:i}):[],{unsubscribe:l}=await e.transport.subscribe({params:["logs",{address:r,topics:n}],onData(e){if(!h)return;let r=e.result;try{let{eventName:e,args:i}=eM({abi:t,data:r.data,topics:r.topics,strict:u}),n=ej(r,{args:i,eventName:e});s([n])}catch(n){let e,t;if(n instanceof I.SM||n instanceof I.Gy){if(u)return;e=n.abiItem.name,t=n.abiItem.inputs?.some(e=>!("name"in e&&e.name))}let i=ej(r,{args:t?[]:{},eventName:e});s([i])}},onError(e){a?.(e)}});d=l,h||d()}catch(e){a?.(e)}})(),d)})(e,t),watchEvent:t=>(function(e,{address:t,args:r,batch:i=!0,event:n,events:o,onError:a,onLogs:s,poll:l,pollingInterval:c=e.pollingInterval,strict:u}){let h,d;let f=void 0!==l?l:"webSocket"!==e.transport.type,p=u??!1;return f?(()=>{let l=(0,tn.P)(["watchEvent",t,r,i,e.uid,n,c]);return tr(l,{onLogs:s,onError:a},a=>{let s,l;let u=!1,h=ta(async()=>{if(!u){try{l=await (0,$.s)(e,em,"createEventFilter")({address:t,args:r,event:n,events:o,strict:p})}catch{}u=!0;return}try{let c;if(l)c=await (0,$.s)(e,eF,"getFilterChanges")({filter:l});else{let i=await (0,$.s)(e,eP,"getBlockNumber")({});c=s&&s!==i?await (0,$.s)(e,eL,"getLogs")({address:t,args:r,event:n,events:o,fromBlock:s+1n,toBlock:i}):[],s=i}if(0===c.length)return;if(i)a.onLogs(c);else for(let e of c)a.onLogs([e])}catch(e){l&&e instanceof N.yR&&(u=!1),a.onError?.(e)}},{emitOnBegin:!0,interval:c});return async()=>{l&&await (0,$.s)(e,e2,"uninstallFilter")({filter:l}),h()}})})():(h=!0,d=()=>h=!1,(async()=>{try{let i=o??(n?[n]:void 0),l=[];i&&(l=[i.flatMap(e=>ef({abi:[e],eventName:e.name,args:r}))],n&&(l=l[0]));let{unsubscribe:c}=await e.transport.subscribe({params:["logs",{address:t,topics:l}],onData(e){if(!h)return;let t=e.result;try{let{eventName:e,args:r}=eM({abi:i,data:t.data,topics:t.topics,strict:p}),n=ej(t,{args:r,eventName:e});s([n])}catch(n){let e,r;if(n instanceof I.SM||n instanceof I.Gy){if(u)return;e=n.abiItem.name,r=n.abiItem.inputs?.some(e=>!("name"in e&&e.name))}let i=ej(t,{args:r?[]:{},eventName:e});s([i])}},onError(e){a?.(e)}});d=c,h||d()}catch(e){a?.(e)}})(),d)})(e,t),watchPendingTransactions:t=>(function(e,{batch:t=!0,onError:r,onTransactions:i,poll:n,pollingInterval:o=e.pollingInterval}){let a,s;let l=void 0!==n?n:"webSocket"!==e.transport.type;return l?(()=>{let n=(0,tn.P)(["watchPendingTransactions",e.uid,t,o]);return tr(n,{onTransactions:i,onError:r},r=>{let i;let n=ta(async()=>{try{if(!i)try{i=await (0,$.s)(e,eb,"createPendingTransactionFilter")({});return}catch(e){throw n(),e}let o=await (0,$.s)(e,eF,"getFilterChanges")({filter:i});if(0===o.length)return;if(t)r.onTransactions(o);else for(let e of o)r.onTransactions([e])}catch(e){r.onError?.(e)}},{emitOnBegin:!0,interval:o});return async()=>{i&&await (0,$.s)(e,e2,"uninstallFilter")({filter:i}),n()}})})():(a=!0,s=()=>a=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newPendingTransactions"],onData(e){if(!a)return;let t=e.result;i([t])},onError(e){r?.(e)}});s=t,a||s()}catch(e){r?.(e)}})(),s)})(e,t)}}function tf(e){let{key:t="public",name:r="Public Client"}=e,i=(0,p.e)({...e,key:t,name:r,type:"publicClient"});return i.extend(td)}var tp=r(48333),tg=r(86075);function tm(e,t={}){let{key:r="fallback",name:i="Fallback",rank:n=!1,retryCount:o,retryDelay:a}=t;return({chain:t,pollingInterval:s=4e3,timeout:l})=>{let c=e,u=()=>{},h=(0,tg.q)({key:r,name:i,async request({method:e,params:r}){let i=async(n=0)=>{let o=c[n]({chain:t,retryCount:0,timeout:l});try{let t=await o.request({method:e,params:r});return u({method:e,params:r,response:t,transport:o,status:"success"}),t}catch(t){if(u({error:t,method:e,params:r,transport:o,status:"error"}),(0,tp.y)(t)||n===c.length-1)throw t;return i(n+1)}};return i()},retryCount:o,retryDelay:a,type:"fallback"},{onResponse:e=>u=e,transports:c.map(e=>e({chain:t,retryCount:0}))});if(n){let e="object"==typeof n?n:{};(function({chain:e,interval:t=4e3,onTransports:r,sampleCount:i=10,timeout:n=1e3,transports:o,weights:a={}}){let{stability:s=.7,latency:l=.3}=a,c=[],u=async()=>{let a=await Promise.all(o.map(async t=>{let r,i;let o=t({chain:e,retryCount:0,timeout:n}),a=Date.now();try{await o.request({method:"net_listening"}),i=1}catch{i=0}finally{r=Date.now()}let s=r-a;return{latency:s,success:i}}));c.push(a),c.length>i&&c.shift();let h=Math.max(...c.map(e=>Math.max(...e.map(({latency:e})=>e)))),d=o.map((e,t)=>{let r=c.map(e=>e[t].latency),i=r.reduce((e,t)=>e+t,0)/r.length,n=c.map(e=>e[t].success),o=n.reduce((e,t)=>e+t,0)/n.length;return 0===o?[0,t]:[l*(1-i/h)+s*o,t]}).sort((e,t)=>t[0]-e[0]);r(d.map(([,e])=>o[e])),await (0,to.D)(t),u()};u()})({chain:t,interval:e.interval??s,onTransports:e=>c=e,sampleCount:e.sampleCount,timeout:e.timeout,transports:c,weights:e.weights})}return h}}var tb=r(75205);class tw extends C.G{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}var ty=r(52897),tv=r(91282),tx=r.t(tv,2);let tC=(()=>{try{return function(){if("undefined"!=typeof WebSocket)return WebSocket;if(void 0!==global.WebSocket)return global.WebSocket;if(void 0!==window.WebSocket)return window.WebSocket;if(void 0!==self.WebSocket)return self.WebSocket;throw Error("`WebSocket` is not supported in this environment")}()}catch{if(tv.WebSocket)return tv.WebSocket;return tx}})();function t_(e,{errorInstance:t=Error("timed out"),timeout:r,signal:i}){return new Promise((n,o)=>{(async()=>{let a;try{let s=new AbortController;r>0&&(a=setTimeout(()=>{i?s.abort():o(t)},r)),n(await e({signal:s?.signal}))}catch(e){"AbortError"===e.name&&o(t),o(e)}finally{clearTimeout(a)}})()})}let tE=0;async function tk(e,{body:t,fetchOptions:r={},timeout:i=1e4}){let{headers:n,method:o,signal:a}=r;try{let s;let l=await t_(async({signal:s})=>{let l=await fetch(e,{...r,body:Array.isArray(t)?(0,tn.P)(t.map(e=>({jsonrpc:"2.0",id:e.id??tE++,...e}))):(0,tn.P)({jsonrpc:"2.0",id:t.id??tE++,...t}),headers:{...n,"Content-Type":"application/json"},method:o||"POST",signal:a||(i>0?s:void 0)});return l},{errorInstance:new tb.W5({body:t,url:e}),timeout:i,signal:!0});if(s=l.headers.get("Content-Type")?.startsWith("application/json")?await l.json():await l.text(),!l.ok)throw new tb.Gg({body:t,details:(0,tn.P)(s.error)||l.statusText,headers:l.headers,status:l.status,url:e});return s}catch(r){if(r instanceof tb.Gg||r instanceof tb.W5)throw r;throw new tb.Gg({body:t,details:r.message,url:e})}}let tS=new Map;async function tO(e){let t=tS.get(e);if(t)return t;let{schedule:r}=(0,ty.S)({id:e,fn:async()=>{let r=new tC(e),i=new Map,n=new Map,o=({data:e})=>{let t=JSON.parse(e),r="eth_subscription"===t.method,o=r?t.params.subscription:t.id,a=r?n:i,s=a.get(o);s&&s({data:e}),r||a.delete(o)},a=()=>{tS.delete(e),r.removeEventListener("close",a),r.removeEventListener("message",o)};return r.addEventListener("close",a),r.addEventListener("message",o),r.readyState===tC.CONNECTING&&await new Promise((e,t)=>{r&&(r.onopen=e,r.onerror=t)}),t=Object.assign(r,{requests:i,subscriptions:n}),tS.set(e,t),[t]}}),[i,[n]]=await r();return n}async function tD(e,{body:t,timeout:r=1e4}){return t_(()=>new Promise(r=>tP.webSocket(e,{body:t,onResponse:r})),{errorInstance:new tb.W5({body:t,url:e.url}),timeout:r})}let tP={http:tk,webSocket:function(e,{body:t,onResponse:r}){if(e.readyState===e.CLOSED||e.readyState===e.CLOSING)throw new tb.c9({body:t,url:e.url,details:"Socket is closed."});let i=tE++,n=({data:o})=>{let a=JSON.parse(o);("number"!=typeof a.id||i===a.id)&&(r?.(a),"eth_subscribe"===t.method&&"string"==typeof a.result&&e.subscriptions.set(a.result,n),"eth_unsubscribe"===t.method&&e.subscriptions.delete(t.params?.[0]))};return e.requests.set(i,n),e.send(JSON.stringify({jsonrpc:"2.0",...t,id:i})),e},webSocketAsync:tD};var tA=r(66581),tT=r(44682);let t$=e=>(t,r,i)=>{let n=i.subscribe;i.subscribe=(e,t,r)=>{let o=e;if(t){let n=(null==r?void 0:r.equalityFn)||Object.is,a=e(i.getState());o=r=>{let i=e(r);if(!n(a,i)){let e=a;t(a=i,e)}},(null==r?void 0:r.fireImmediately)&&t(a,a)}return n(o)};let o=e(t,r,i);return o},tI=e=>t=>{try{let r=e(t);if(r instanceof Promise)return r;return{then:e=>tI(e)(r),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>tI(t)(e)}}},tN=(e,t)=>(r,i,n)=>{let o,a,s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},l=!1,c=new Set,u=new Set;try{o=s.getStorage()}catch(e){}if(!o)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),r(...e)},i,n);let h=tI(s.serialize),d=()=>{let e;let t=s.partialize({...i()}),r=h({state:t,version:s.version}).then(e=>o.setItem(s.name,e)).catch(t=>{e=t});if(e)throw e;return r},f=n.setState;n.setState=(e,t)=>{f(e,t),d()};let p=e((...e)=>{r(...e),d()},i,n),g=()=>{var e;if(!o)return;l=!1,c.forEach(e=>e(i()));let t=(null==(e=s.onRehydrateStorage)?void 0:e.call(s,i()))||void 0;return tI(o.getItem.bind(o))(s.name).then(e=>{if(e)return s.deserialize(e)}).then(e=>{if(e){if("number"!=typeof e.version||e.version===s.version)return e.state;if(s.migrate)return s.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(a=s.merge(e,null!=(t=i())?t:p),!0),d()}).then(()=>{null==t||t(a,void 0),l=!0,u.forEach(e=>e(a))}).catch(e=>{null==t||t(void 0,e)})};return n.persist={setOptions:e=>{s={...s,...e},e.getStorage&&(o=e.getStorage())},clearStorage:()=>{null==o||o.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>g(),hasHydrated:()=>l,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(u.add(e),()=>{u.delete(e)})},g(),a||p},tR=(e,t)=>(r,i,n)=>{let o,a={storage:function(e,t){let r;try{r=e()}catch(e){return}return{getItem:e=>{var i;let n=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),o=null!=(i=r.getItem(e))?i:null;return o instanceof Promise?o.then(n):n(o)},setItem:(e,i)=>r.setItem(e,JSON.stringify(i,null==t?void 0:t.replacer)),removeItem:e=>r.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},s=!1,l=new Set,c=new Set,u=a.storage;if(!u)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),r(...e)},i,n);let h=()=>{let e=a.partialize({...i()});return u.setItem(a.name,{state:e,version:a.version})},d=n.setState;n.setState=(e,t)=>{d(e,t),h()};let f=e((...e)=>{r(...e),h()},i,n),p=()=>{var e,t;if(!u)return;s=!1,l.forEach(e=>{var t;return e(null!=(t=i())?t:f)});let n=(null==(t=a.onRehydrateStorage)?void 0:t.call(a,null!=(e=i())?e:f))||void 0;return tI(u.getItem.bind(u))(a.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===a.version)return e.state;if(a.migrate)return a.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(o=a.merge(e,null!=(t=i())?t:f),!0),h()}).then(()=>{null==n||n(o,void 0),o=i(),s=!0,c.forEach(e=>e(o))}).catch(e=>{null==n||n(void 0,e)})};return n.persist={setOptions:e=>{a={...a,...e},e.storage&&(u=e.storage)},clearStorage:()=>{null==u||u.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>p(),hasHydrated:()=>s,onHydrate:e=>(l.add(e),()=>{l.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},a.skipHydration||p(),o||f},tM=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),tN(e,t)):tR(e,t),tj=e=>{let t;let r=new Set,i=(e,i)=>{let n="function"==typeof e?e(t):e;if(!Object.is(n,t)){let e=t;t=(null!=i?i:"object"!=typeof n)?n:Object.assign({},t,n),r.forEach(r=>r(t,e))}},n=()=>t,o={setState:i,getState:n,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}};return t=e(i,n,o),o},tL=e=>e?tj(e):tj;var tB=r(29269);function tU(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[r,i]of e)if(!Object.is(i,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let r of e)if(!t.has(r))return!1;return!0}let r=Object.keys(e);if(r.length!==Object.keys(t).length)return!1;for(let i=0;i<r.length;i++)if(!Object.prototype.hasOwnProperty.call(t,r[i])||!Object.is(e[r[i]],t[r[i]]))return!1;return!0}var tF=r(22102);function tW(e,t,{batch:r={multicall:{wait:32}},pollingInterval:i=4e3,rank:n,retryCount:o,retryDelay:a,stallTimeout:s}={}){if(!e.length)throw Error("must have at least one chain");let l=[],c={},u={};for(let r of e){let e=!1;for(let i of t){let t=i(r);t&&(e=!0,l.some(({id:e})=>e===r.id)||(l=[...l,t.chain]),c[r.id]=[...c[r.id]||[],...t.rpcUrls.http],t.rpcUrls.webSocket&&(u[r.id]=[...u[r.id]||[],...t.rpcUrls.webSocket]))}if(!e)throw Error(`Could not find valid provider configuration for chain "${r.name}".

You may need to add \`jsonRpcProvider\` to \`configureChains\` with the chain's RPC URLs.
Read more: https://wagmi.sh/core/providers/jsonRpc`)}return{chains:l,publicClient:({chainId:t})=>{let u=l.find(e=>e.id===t)??e[0],h=c[u.id];if(!h||!h[0])throw Error(`No providers configured for chain "${u.id}"`);let d=tf({batch:r,chain:u,transport:tm(h.map(e=>(function(e,t={}){let{batch:r,fetchOptions:i,key:n="http",name:o="HTTP JSON-RPC",retryDelay:a}=t;return({chain:s,retryCount:l,timeout:c})=>{let{batchSize:u=1e3,wait:h=0}="object"==typeof r?r:{},d=t.retryCount??l,f=c??t.timeout??1e4,p=e||s?.rpcUrls.default.http[0];if(!p)throw new tw;return(0,tg.q)({key:n,name:o,async request({method:t,params:n}){let o={method:t,params:n},{schedule:a}=(0,ty.S)({id:`${e}`,wait:h,shouldSplitBatch:e=>e.length>u,fn:e=>tP.http(p,{body:e,fetchOptions:i,timeout:f}),sort:(e,t)=>e.id-t.id}),s=async e=>r?a(e):[await tP.http(p,{body:e,fetchOptions:i,timeout:f})],[{error:l,result:c}]=await s(o);if(l)throw new tb.bs({body:o,error:l,url:p});return c},retryCount:d,retryDelay:a,timeout:f,type:"http"},{fetchOptions:i,url:e})}})(e,{timeout:s})),{rank:n,retryCount:o,retryDelay:a}),pollingInterval:i});return Object.assign(d,{chains:l})},webSocketPublicClient:({chainId:t})=>{let c=l.find(e=>e.id===t)??e[0],h=u[c.id];if(!h||!h[0])return;let d=tf({batch:r,chain:c,transport:tm(h.map(e=>(function(e,t={}){let{key:r="webSocket",name:i="WebSocket JSON-RPC",retryDelay:n}=t;return({chain:o,retryCount:a,timeout:s})=>{let l=t.retryCount??a,c=s??t.timeout??1e4,u=e||o?.rpcUrls.default.webSocket?.[0];if(!u)throw new tw;return(0,tg.q)({key:r,name:i,async request({method:e,params:t}){let r={method:e,params:t},i=await tO(u),{error:n,result:o}=await tP.webSocketAsync(i,{body:r,timeout:c});if(n)throw new tb.bs({body:r,error:n,url:u});return o},retryCount:l,retryDelay:n,timeout:c,type:"webSocket"},{getSocket:()=>tO(u),async subscribe({params:e,onData:t,onError:r}){let i=await tO(u),{result:n}=await new Promise((n,o)=>tP.webSocket(i,{body:{method:"eth_subscribe",params:e},onResponse(e){if(e.error){o(e.error),r?.(e.error);return}if("number"==typeof e.id){n(e);return}"eth_subscription"===e.method&&t(e.params)}}));return{subscriptionId:n,unsubscribe:async()=>new Promise(e=>tP.webSocket(i,{body:{method:"eth_unsubscribe",params:[n]},onResponse:e}))}}})}})(e,{timeout:s})),{rank:n,retryCount:o,retryDelay:a}),pollingInterval:i});return Object.assign(d,{chains:l})}}}var tz=class extends Error{constructor({activeChain:e,targetChain:t}){super(`Chain mismatch: Expected "${t}", received "${e}".`),this.name="ChainMismatchError"}},tH=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured${t?` for connector "${t}"`:""}.`),this.name="ChainNotConfigured"}},tq=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},tG=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},tV=class extends Error{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}},tZ=(e,{find:t,replace:r})=>e&&t(e)?r(e):"object"!=typeof e?e:Array.isArray(e)?e.map(e=>tZ(e,{find:t,replace:r})):e instanceof Object?Object.entries(e).reduce((e,[i,n])=>({...e,[i]:tZ(n,{find:t,replace:r})}),{}):e;function tK(e){let t=JSON.parse(e),r=tZ(t,{find:e=>"string"==typeof e&&e.startsWith("#bigint."),replace:e=>BigInt(e.replace("#bigint.",""))});return r}function tY(e){return{accessList:e.accessList,account:e.account,data:e.data,gas:e.gas,gasPrice:e.gasPrice,maxFeePerGas:e.maxFeePerGas,maxPriorityFeePerGas:e.maxPriorityFeePerGas,nonce:e.nonce,to:e.to,value:e.value}}function tQ(e){return"number"==typeof e?e:"wei"===e?0:Math.abs(tT.Bd[e])}function tX(e,t){return e.slice(0,t).join(".")||"."}function tJ(e,t){let{length:r}=e;for(let i=0;i<r;++i)if(e[i]===t)return i+1;return 0}function t0(e,t,r,i){return JSON.stringify(e,function(e,t){let r="function"==typeof e,i="function"==typeof t,n=[],o=[];return function(a,s){if("object"==typeof s){if(n.length){let e=tJ(n,this);0===e?n[n.length]=this:(n.splice(e),o.splice(e)),o[o.length]=a;let r=tJ(n,s);if(0!==r)return i?t.call(this,a,s,tX(o,r)):`[ref=${tX(o,r)}]`}else n[0]=s,o[0]=a}return r?e.call(this,a,s):s}}((e,r)=>{let i="bigint"==typeof r?`#bigint.${r.toString()}`:r;return t?.(e,i)||i},i),r??void 0)}var t1={getItem:e=>"",setItem:(e,t)=>null,removeItem:e=>null};function t2({deserialize:e=tK,key:t="wagmi",serialize:r=t0,storage:i}){return{...i,getItem:(r,n=null)=>{let o=i.getItem(`${t}.${r}`);try{return o?e(o):n}catch(e){return console.warn(e),n}},setItem:(e,n)=>{if(null===n)i.removeItem(`${t}.${e}`);else try{i.setItem(`${t}.${e}`,r(n))}catch(e){console.error(e)}},removeItem:e=>i.removeItem(`${t}.${e}`)}}var t3="store",t5=class{constructor({autoConnect:e=!1,connectors:t=[new l._],publicClient:r,storage:s=t2({storage:t1}),logger:c={warn:console.warn},webSocketPublicClient:u}){let p;h(this,o),this.publicClients=new Map,this.webSocketPublicClients=new Map,h(this,i,void 0),h(this,n,void 0),this.args={autoConnect:e,connectors:t,logger:c,publicClient:r,storage:s,webSocketPublicClient:u};let g="disconnected";if(e)try{let e=s.getItem(t3),t=e?.state?.data;g=t?.account?"reconnecting":"connecting",p=t?.chain?.id}catch(e){}let m="function"==typeof t?t():t;m.forEach(e=>e.setStorage(s)),this.store=tL(t$(tM(()=>({connectors:m,publicClient:this.getPublicClient({chainId:p}),status:g,webSocketPublicClient:this.getWebSocketPublicClient({chainId:p})}),{name:t3,storage:s,partialize:t=>({...e&&{data:{account:t?.data?.account,chain:t?.data?.chain}},chains:t?.chains}),version:2}))),this.storage=s,d(this,n,s?.getItem("wallet")),f(this,o,a).call(this)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){return this.data?.chain?.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(e){let t="function"==typeof e?e(this.store.getState()):e;this.store.setState(t,!0)}clearState(){this.setState(e=>({...e,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"}))}async destroy(){this.connector&&await this.connector.disconnect?.(),d(this,i,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(u(this,i))return;d(this,i,!0),this.setState(e=>({...e,status:e.data?.account?"reconnecting":"connecting"}));let e=u(this,n)?[...this.connectors].sort(e=>e.id===u(this,n)?-1:1):this.connectors,t=!1;for(let r of e){if(!r.ready||!r.isAuthorized)continue;let e=await r.isAuthorized();if(!e)continue;let i=await r.connect();this.setState(e=>({...e,connector:r,chains:r?.chains,data:i,status:"connected"})),t=!0;break}return t||this.setState(e=>({...e,data:void 0,status:"disconnected"})),d(this,i,!1),this.data}setConnectors(e){this.args={...this.args,connectors:e};let t="function"==typeof e?e():e;t.forEach(e=>e.setStorage(this.args.storage)),this.setState(e=>({...e,connectors:t}))}getPublicClient({chainId:e}={}){let t=this.publicClients.get(-1);if(t&&t?.chain.id===e||(t=this.publicClients.get(e??-1)))return t;let{publicClient:r}=this.args;return t="function"==typeof r?r({chainId:e}):r,this.publicClients.set(e??-1,t),t}setPublicClient(e){let t=this.data?.chain?.id;this.args={...this.args,publicClient:e},this.publicClients.clear(),this.setState(e=>({...e,publicClient:this.getPublicClient({chainId:t})}))}getWebSocketPublicClient({chainId:e}={}){let t=this.webSocketPublicClients.get(-1);if(t&&t?.chain.id===e||(t=this.webSocketPublicClients.get(e??-1)))return t;let{webSocketPublicClient:r}=this.args;return(t="function"==typeof r?r({chainId:e}):r)&&this.webSocketPublicClients.set(e??-1,t),t}setWebSocketPublicClient(e){let t=this.data?.chain?.id;this.args={...this.args,webSocketPublicClient:e},this.webSocketPublicClients.clear(),this.setState(e=>({...e,webSocketPublicClient:this.getWebSocketPublicClient({chainId:t})}))}setLastUsedConnector(e=null){this.storage?.setItem("wallet",e)}};function t4(e){let t=new t5(e);return s=t,t}function t6(){if(!s)throw Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return s}async function t8({chainId:e,connector:t}){let r=t6(),i=r.connector;if(i&&t.id===i.id)throw new tq;try{r.setState(e=>({...e,status:"connecting"}));let i=await t.connect({chainId:e});return r.setLastUsedConnector(t.id),r.setState(e=>({...e,connector:t,chains:t?.chains,data:i,status:"connected"})),r.storage.setItem("connected",!0),{...i,connector:t}}catch(e){throw r.setState(e=>({...e,status:e.connector?"connected":"disconnected"})),e}}async function t9(){let e=t6();e.connector&&await e.connector.disconnect(),e.clearState(),e.storage.removeItem("connected")}i=new WeakMap,n=new WeakMap,o=new WeakSet,a=function(){let e=e=>{this.setState(t=>({...t,data:{...t.data,...e}}))},t=()=>{this.clearState()},r=e=>{this.setState(t=>({...t,error:e}))};this.store.subscribe(({connector:e})=>e,(i,n)=>{n?.off?.("change",e),n?.off?.("disconnect",t),n?.off?.("error",r),i&&(i.on?.("change",e),i.on?.("disconnect",t),i.on?.("error",r))});let{publicClient:i,webSocketPublicClient:n}=this.args;("function"==typeof i||"function"==typeof n)&&this.store.subscribe(({data:e})=>e?.chain?.id,e=>{this.setState(t=>({...t,publicClient:this.getPublicClient({chainId:e}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:e})}))})};var t7=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],re=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function rt({chainId:e}={}){let t=t6();return e&&t.getPublicClient({chainId:e})||t.publicClient}async function rr({chainId:e}={}){let t=t6(),r=await t.connector?.getWalletClient?.({chainId:e})||null;return r}function ri({chainId:e}={}){let t=t6();return e&&t.getWebSocketPublicClient({chainId:e})||t.webSocketPublicClient}function rn(e,t){let r=t6(),i=async()=>t(rt(e)),n=r.subscribe(({publicClient:e})=>e,i);return n}function ro(e,t){let r=t6(),i=async()=>t(ri(e)),n=r.subscribe(({webSocketPublicClient:e})=>e,i);return n}async function ra({abi:e,address:t,args:r,chainId:i,dataSuffix:n,functionName:o,walletClient:a,...s}){let l=rt({chainId:i}),c=a??await rr({chainId:i});if(!c)throw new tA.N;i&&rx({chainId:i});let{account:u,accessList:h,blockNumber:d,blockTag:f,gas:p,gasPrice:g,maxFeePerGas:m,maxPriorityFeePerGas:b,nonce:w,value:y}={accessList:s.accessList,account:s.account,blockNumber:s.blockNumber,blockTag:s.blockTag,data:s.data,gas:s.gas,gasPrice:s.gasPrice,maxFeePerGas:s.maxFeePerGas,maxPriorityFeePerGas:s.maxPriorityFeePerGas,nonce:s.nonce,to:s.to,value:s.value},{result:v,request:x}=await l.simulateContract({abi:e,address:t,functionName:o,args:r,account:u||c.account,accessList:h,blockNumber:d,blockTag:f,dataSuffix:n,gas:p,gasPrice:g,maxFeePerGas:m,maxPriorityFeePerGas:b,nonce:w,value:y}),C=e.filter(e=>"name"in e&&e.name===o);return{mode:"prepared",request:{...x,abi:C,chainId:i},result:v}}async function rs({chainId:e,contracts:t,blockNumber:r,blockTag:i,...n}){let o=rt({chainId:e});if(!o.chains)throw new tG;if(e&&o.chain.id!==e)throw new tH({chainId:e});return o.multicall({allowFailure:n.allowFailure??!0,blockNumber:r,blockTag:i,contracts:t})}async function rl({address:e,account:t,chainId:r,abi:i,args:n,functionName:o,blockNumber:a,blockTag:s}){let l=rt({chainId:r});return l.readContract({abi:i,address:e,account:t,functionName:o,args:n,blockNumber:a,blockTag:s})}async function rc({contracts:e,blockNumber:t,blockTag:r,...i}){let{allowFailure:n=!0}=i;try{let i=rt(),o=e.reduce((e,t,r)=>{let n=t.chainId??i.chain.id;return{...e,[n]:[...e[n]||[],{contract:t,index:r}]}},{}),a=(await Promise.all(Object.entries(o).map(([e,i])=>rs({allowFailure:n,chainId:parseInt(e),contracts:i.map(({contract:e})=>e),blockNumber:t,blockTag:r})))).flat(),s=Object.values(o).flatMap(e=>e.map(({index:e})=>e));return a.reduce((e,t,r)=>(e&&(e[s[r]]=t),e),[])}catch(o){if(o instanceof _.uq)throw o;let i=()=>e.map(e=>rl({...e,blockNumber:t,blockTag:r}));if(n)return(await Promise.allSettled(i())).map(e=>"fulfilled"===e.status?{result:e.value,status:"success"}:{error:e.reason,result:void 0,status:"failure"});return await Promise.all(i())}}async function ru(e){let t;let r=await rr({chainId:e.chainId});if(!r)throw new tA.N;if(e.chainId&&rx({chainId:e.chainId}),"prepared"===e.mode)t=e.request;else{let{chainId:r,mode:i,...n}=e,o=await ra(n);t=o.request}let i=await r.writeContract({...t,chain:e.chainId?{id:e.chainId}:null});return{hash:i}}async function rh({address:e,chainId:t,formatUnits:r,token:i}){let n=t6(),o=rt({chainId:t});if(i){let n=async({abi:n})=>{let o={abi:n,address:i,chainId:t},[a,s,l]=await rc({allowFailure:!1,contracts:[{...o,functionName:"balanceOf",args:[e]},{...o,functionName:"decimals"},{...o,functionName:"symbol"}]});return{decimals:s,formatted:(0,tB.b)(a??"0",tQ(r??s)),symbol:l,value:a}};try{return await n({abi:t7})}catch(e){if(e instanceof _.uq){let{symbol:e,...t}=await n({abi:re});return{symbol:(0,eA.rR)((0,y.f)(e,{dir:"right"})),...t}}throw e}}let a=[...n.publicClient.chains||[],...n.chains??[]],s=await o.getBalance({address:e}),l=a.find(e=>e.id===o.chain.id);return{decimals:l?.nativeCurrency.decimals??18,formatted:(0,tB.b)(s??"0",tQ(r??18)),symbol:l?.nativeCurrency.symbol??"ETH",value:s}}function rd(){let{data:e,connector:t,status:r}=t6();switch(r){case"connected":return{address:e?.account,connector:t,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:r};case"reconnecting":return{address:e?.account,connector:t,isConnected:!!e?.account,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:r};case"connecting":return{address:e?.account,connector:t,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:r};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:r}}}function rf(){let e=t6(),t=e.data?.chain?.id,r=e.chains??[],i=[...e.publicClient?.chains||[],...r].find(e=>e.id===t)??{id:t,name:`Chain ${t}`,network:`${t}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:t?{...i,...e.data?.chain,id:t}:void 0,chains:r}}async function rp({chainId:e}){let{connector:t}=t6();if(!t)throw new tA.N;if(!t.switchChain)throw new tV({connector:t});return t.switchChain(e)}function rg(e,{selector:t=e=>e}={}){let r=t6(),i=r.subscribe(({data:e,connector:r,status:i})=>t({address:e?.account,connector:r,status:i}),()=>e(rd()),{equalityFn:tU});return i}function rm(e,{selector:t=e=>e}={}){let r=t6(),i=r.subscribe(({data:e,chains:r})=>t({chainId:e?.chain?.id,chains:r}),()=>e(rf()),{equalityFn:tU});return i}async function rb({name:e,chainId:t}){let{normalize:i}=await r.e(399).then(r.bind(r,70399)),n=rt({chainId:t}),o=await n.getEnsAvatar({name:i(e)});return o}async function rw({address:e,chainId:t}){let r=rt({chainId:t});return r.getEnsName({address:(0,tF.K)(e)})}async function ry({chainId:e}={}){let t=rt({chainId:e}),r=await t.getBlockNumber();return r}async function rv({chainId:e,confirmations:t=1,hash:r,onReplaced:i,timeout:n=0}){let o=rt({chainId:e}),a=await o.waitForTransactionReceipt({hash:r,confirmations:t,onReplaced:i,timeout:n});if("reverted"===a.status){let e=await o.getTransaction({hash:a.transactionHash}),t=await o.call({...e,gasPrice:"eip1559"!==e.type?e.gasPrice:void 0,maxFeePerGas:"eip1559"===e.type?e.maxFeePerGas:void 0,maxPriorityFeePerGas:"eip1559"===e.type?e.maxPriorityFeePerGas:void 0}),r=(0,eA.rR)(`0x${t.substring(138)}`);throw Error(r)}return a}function rx({chainId:e}){let{chain:t,chains:r}=rf(),i=t?.id;if(i&&e!==i)throw new tz({activeChain:r.find(e=>e.id===i)?.name??`Chain ${i}`,targetChain:r.find(t=>t.id===e)?.name??`Chain ${e}`})}},91185:(e,t,r)=>{"use strict";r.d(t,{E:()=>a});var i=r(30362),n=r(73850),o=r(38285);i.extend(o),i.extend(n),i.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});let a={getYear:(e=new Date().toISOString())=>i(e).year(),getRelativeDateFromNow:e=>i(e).fromNow(!0)}},61698:(e,t,r)=>{"use strict";r.d(t,{AccountController:()=>c,ApiController:()=>D,WM:()=>m,fz:()=>Y,Lr:()=>B,ConnectionController:()=>q,ConnectorController:()=>w,bq:()=>a,j1:()=>s,Xs:()=>$,IN:()=>M,NetworkController:()=>C,OptionsController:()=>E,Ie:()=>v,RouterController:()=>N,yD:()=>V,SnackController:()=>F,MO:()=>p,ThemeController:()=>K,sl:()=>z});var i=r(95790);function n(e,t,r,n){let o=e[t];return(0,i.Ld)(e,()=>{let i=e[t];Object.is(o,i)||r(o=i)},n)}Symbol();let o=new WeakMap,a={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"]},s={isMobile:()=>!1,isAndroid(){let e=navigator.userAgent.toLowerCase();return s.isMobile()&&e.includes("android")},isIos(){let e=navigator.userAgent.toLowerCase();return s.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient:()=>!1,isPairingExpired:e=>!e||e-Date.now()<=a.TEN_SEC_MS,isAllowedRetry:e=>Date.now()-e>=a.ONE_SEC_MS,copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry:()=>Date.now()+a.FOUR_MINUTES_MS,getPlainAddress:e=>e.split(":")[2],wait:async e=>new Promise(t=>{setTimeout(t,e)}),debounce(e,t=500){let r;return(...i)=>{r&&clearTimeout(r),r=setTimeout(function(){e(...i)},t)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t){if(s.isHttpUrl(e))return this.formatUniversalUrl(e,t);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`);let i=encodeURIComponent(t);return{redirect:`${r}wc?uri=${i}`,href:r}},formatUniversalUrl(e,t){if(!s.isHttpUrl(e))return this.formatNativeUrl(e,t);let r=e;r.endsWith("/")||(r=`${r}/`);let i=encodeURIComponent(t);return{redirect:`${r}wc?uri=${i}`,href:r}},openHref(e,t){window.open(e,t,"noreferrer noopener")},async preloadImage(e){let t=new Promise((t,r)=>{let i=new Image;i.onload=t,i.onerror=r,i.crossOrigin="anonymous",i.src=e});return Promise.race([t,s.wait(2e3)])},formatBalance(e,t){let r;if("0"===e)r="0.000";else if("string"==typeof e){let t=Number(e);t&&(r=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return r?`${r} ${t}`:"0.000"},isRestrictedRegion(){try{let{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return a.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl:()=>s.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com",getBlockchainApiUrl:()=>s.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com",getAnalyticsUrl:()=>s.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com",getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},l=(0,i.sj)({isConnected:!1}),c={state:l,subscribe:e=>(0,i.Ld)(l,()=>e(l)),subscribeKey:(e,t)=>n(l,e,t),setIsConnected(e){l.isConnected=e},setCaipAddress(e){l.caipAddress=e,l.address=e?s.getPlainAddress(e):void 0},setBalance(e,t){l.balance=e,l.balanceSymbol=t},setProfileName(e){l.profileName=e},setProfileImage(e){l.profileImage=e},setAddressExplorerUrl(e){l.addressExplorerUrl=e},resetAccount(){l.isConnected=!1,l.caipAddress=void 0,l.address=void 0,l.balance=void 0,l.balanceSymbol=void 0,l.profileName=void 0,l.profileImage=void 0,l.addressExplorerUrl=void 0}};class u{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...t}){let r=this.createUrl(t),i=await fetch(r,{method:"GET",headers:e});return i.json()}async getBlob({headers:e,...t}){let r=this.createUrl(t),i=await fetch(r,{method:"GET",headers:e});return i.blob()}async post({body:e,headers:t,...r}){let i=this.createUrl(r),n=await fetch(i,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0});return n.json()}async put({body:e,headers:t,...r}){let i=this.createUrl(r),n=await fetch(i,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0});return n.json()}async delete({body:e,headers:t,...r}){let i=this.createUrl(r),n=await fetch(i,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0});return n.json()}createUrl({path:e,params:t}){let r=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([e,t])=>{t&&r.searchParams.append(e,t)}),r}}let h="WALLETCONNECT_DEEPLINK_CHOICE",d="@w3m/recent",f="@w3m/connected_wallet_image_url",p={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(h,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let e=localStorage.getItem(h);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(h)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{let t=p.getRecentWallets(),r=t.find(t=>t.id===e.id);r||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(d,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{let e=localStorage.getItem(d);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(e){try{localStorage.setItem(f,e)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(f)}catch{console.info("Unable to set Connected Wallet Image Url")}}},g=(0,i.sj)({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),m={state:g,subscribeNetworkImages:e=>(0,i.Ld)(g.networkImages,()=>e(g.networkImages)),subscribeKey:(e,t)=>n(g,e,t),setWalletImage(e,t){g.walletImages[e]=t},setNetworkImage(e,t){g.networkImages[e]=t},setConnectorImage(e,t){g.connectorImages[e]=t},setTokenImage(e,t){g.tokenImages[e]=t}},b=(0,i.sj)({connectors:[]}),w={state:b,subscribeKey:(e,t)=>n(b,e,t),setConnectors(e){b.connectors=e.map(e=>(0,i.iH)(e))},addConnector(e){b.connectors.push((0,i.iH)(e))},getConnectors:()=>b.connectors},y=(0,i.sj)({open:!1,selectedNetworkId:void 0}),v={state:y,subscribe:e=>(0,i.Ld)(y,()=>e(y)),set(e){Object.assign(y,{...y,...e})}},x=(0,i.sj)({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),C={state:x,subscribeKey:(e,t)=>n(x,e,t),_getClient(){if(!x._client)throw Error("NetworkController client not set");return x._client},setClient(e){x._client=(0,i.iH)(e)},setCaipNetwork(e){x.caipNetwork=e,v.set({selectedNetworkId:e?.id})},setDefaultCaipNetwork(e){x.caipNetwork=e,v.set({selectedNetworkId:e?.id}),x.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){x.requestedCaipNetworks=e},async getApprovedCaipNetworksData(){let e=await this._getClient().getApprovedCaipNetworksData();x.supportsAllNetworks=e.supportsAllNetworks,x.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),x.caipNetwork=e},resetNetwork(){x.isDefaultCaipNetwork||(x.caipNetwork=void 0),x.approvedCaipNetworkIds=void 0,x.supportsAllNetworks=!0}},_=(0,i.sj)({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),E={state:_,subscribeKey:(e,t)=>n(_,e,t),setProjectId(e){_.projectId=e},setIncludeWalletIds(e){_.includeWalletIds=e},setExcludeWalletIds(e){_.excludeWalletIds=e},setFeaturedWalletIds(e){_.featuredWalletIds=e},setTokens(e){_.tokens=e},setTermsConditionsUrl(e){_.termsConditionsUrl=e},setPrivacyPolicyUrl(e){_.privacyPolicyUrl=e},setCustomWallets(e){_.customWallets=e},setEnableAnalytics(e){_.enableAnalytics=e},setSdkVersion(e){_.sdkVersion=e},setMetadata(e){_.metadata=e}},k=s.getApiUrl(),S=new u({baseUrl:k}),O=(0,i.sj)({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),D={state:O,subscribeKey:(e,t)=>n(O,e,t),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:r}=E.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _fetchWalletImage(e){let t=`${S.baseUrl}/getWalletImage/${e}`,r=await S.getBlob({path:t,headers:D._getApiHeaders()});m.setWalletImage(e,URL.createObjectURL(r))},async _fetchNetworkImage(e){let t=`${S.baseUrl}/public/getAssetImage/${e}`,r=await S.getBlob({path:t,headers:D._getApiHeaders()});m.setNetworkImage(e,URL.createObjectURL(r))},async _fetchConnectorImage(e){let t=`${S.baseUrl}/public/getAssetImage/${e}`,r=await S.getBlob({path:t,headers:D._getApiHeaders()});m.setConnectorImage(e,URL.createObjectURL(r))},async fetchNetworkImages(){let{requestedCaipNetworks:e}=C.state,t=e?.map(({imageId:e})=>e).filter(Boolean);t&&await Promise.allSettled(t.map(e=>D._fetchNetworkImage(e)))},async fetchConnectorImages(){let{connectors:e}=w.state,t=e.map(({imageId:e})=>e).filter(Boolean);await Promise.allSettled(t.map(e=>D._fetchConnectorImage(e)))},async fetchFeaturedWallets(){let{featuredWalletIds:e}=E.state;if(e?.length){let{data:t}=await S.get({path:"/getWallets",headers:D._getApiHeaders(),params:{page:"1",entries:e?.length?String(e.length):"4",include:e?.join(",")}});t.sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id));let r=t.map(e=>e.image_id).filter(Boolean);await Promise.allSettled(r.map(e=>D._fetchWalletImage(e))),O.featured=t}},async fetchRecommendedWallets(){let{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=E.state,i=[...t??[],...r??[]].filter(Boolean),{data:n,count:o}=await S.get({path:"/getWallets",headers:D._getApiHeaders(),params:{page:"1",entries:"4",include:e?.join(","),exclude:i?.join(",")}}),a=p.getRecentWallets(),s=n.map(e=>e.image_id).filter(Boolean),l=a.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...s,...l].map(e=>D._fetchWalletImage(e))),O.recommended=n,O.count=o??0},async fetchWallets({page:e}){let{includeWalletIds:t,excludeWalletIds:r,featuredWalletIds:i}=E.state,n=[...O.recommended.map(({id:e})=>e),...r??[],...i??[]].filter(Boolean),{data:o,count:a}=await S.get({path:"/getWallets",headers:D._getApiHeaders(),params:{page:String(e),entries:"40",include:t?.join(","),exclude:n.join(",")}}),l=o.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...l.map(e=>D._fetchWalletImage(e)),s.wait(300)]),O.wallets=[...O.wallets,...o],O.count=a>O.count?a:O.count,O.page=e},async searchWallet({search:e}){let{includeWalletIds:t,excludeWalletIds:r}=E.state;O.search=[];let{data:i}=await S.get({path:"/getWallets",headers:D._getApiHeaders(),params:{page:"1",entries:"100",search:e,include:t?.join(","),exclude:r?.join(",")}}),n=i.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...n.map(e=>D._fetchWalletImage(e)),s.wait(300)]),O.search=i},prefetch(){O.prefetchPromise=Promise.race([Promise.allSettled([D.fetchFeaturedWallets(),D.fetchRecommendedWallets(),D.fetchNetworkImages(),D.fetchConnectorImages()]),s.wait(3e3)])}},P=s.getAnalyticsUrl();new u({baseUrl:P});let A=["MODAL_CREATED"],T=(0,i.sj)({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),$={state:T,subscribe:e=>(0,i.Ld)(T,()=>e(T)),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:r}=E.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _sendAnalyticsEvent(e){try{A.includes(e.data.event);return}catch{}},sendEvent(e){T.timestamp=Date.now(),T.data=e,E.state.enableAnalytics&&$._sendAnalyticsEvent(T)}},I=(0,i.sj)({view:"Connect",history:["Connect"]}),N={state:I,subscribeKey:(e,t)=>n(I,e,t),push(e,t){e!==I.view&&(I.view=e,I.history.push(e),I.data=t)},reset(e){I.view=e,I.history=[e]},replace(e){I.history.length>1&&I.history.at(-1)!==e&&(I.view=e,I.history[I.history.length-1]=e)},goBack(){if(I.history.length>1){I.history.pop();let[e]=I.history.slice(-1);e&&(I.view=e)}}},R=(0,i.sj)({open:!1}),M={state:R,subscribeKey:(e,t)=>n(R,e,t),async open(e){await D.state.prefetchPromise,e?.view?N.reset(e.view):c.state.isConnected?N.reset("Account"):N.reset("Connect"),R.open=!0,v.set({open:!0}),$.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){R.open=!1,v.set({open:!1}),$.sendEvent({type:"track",event:"MODAL_CLOSE"})}},j=s.getBlockchainApiUrl(),L=new u({baseUrl:j}),B={fetchIdentity:({caipChainId:e,address:t})=>L.get({path:`/v1/identity/${t}`,params:{chainId:e,projectId:E.state.projectId}}),fetchTransactions:({account:e,projectId:t,cursor:r})=>L.get({path:`/v1/account/${e}/history?projectId=${t}`,params:r?{cursor:r}:{}})},U=(0,i.sj)({message:"",variant:"success",open:!1}),F={state:U,subscribeKey:(e,t)=>n(U,e,t),showSuccess(e){U.message=e,U.variant="success",U.open=!0},showError(e){U.message=e,U.variant="error",U.open=!0},hide(){U.open=!1}},W=(0,i.sj)({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),z={state:W,subscribe:e=>(0,i.Ld)(W,()=>e(W)),async fetchTransactions(e){let{projectId:t}=E.state;if(!t||!e)throw Error("Transactions can't be fetched without a projectId and an accountAddress");W.loading=!0;try{let r=await B.fetchTransactions({account:e,projectId:t,cursor:W.next}),i=this.filterSpamTransactions(r.data),n=[...W.transactions,...i];W.loading=!1,W.transactions=n,W.transactionsByYear=this.groupTransactionsByYear(W.transactionsByYear,i),W.empty=0===n.length,W.next=r.next?r.next:void 0}catch(r){$.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:t,cursor:W.next}}),F.showError("Failed to fetch transactions"),W.loading=!1,W.empty=!0}},groupTransactionsByYear:(e={},t=[])=>(t.forEach(t=>{let r=new Date(t.metadata.minedAt).getFullYear();e[r]||(e[r]=[]),e[r]?.push(t)}),e),filterSpamTransactions:e=>e.filter(e=>{let t=e.transfers.every(e=>e.nft_info?.flags.is_spam===!0);return!t}),resetTransactions(){W.transactions=[],W.transactionsByYear={},W.loading=!1,W.empty=!1,W.next=void 0}},H=(0,i.sj)({wcError:!1,buffering:!1}),q={state:H,subscribeKey:(e,t)=>n(H,e,t),_getClient(){if(!H._client)throw Error("ConnectionController client not set");return H._client},setClient(e){H._client=(0,i.iH)(e)},connectWalletConnect(){H.wcPromise=this._getClient().connectWalletConnect(e=>{H.wcUri=e,H.wcPairingExpiry=s.getPairingExpiry()})},async connectExternal(e){await this._getClient().connectExternal?.(e)},checkInstalled(e){return this._getClient().checkInstalled?.(e)},resetWcConnection(){H.wcUri=void 0,H.wcPairingExpiry=void 0,H.wcPromise=void 0,H.wcLinking=void 0,H.recentWallet=void 0,z.resetTransactions(),p.deleteWalletConnectDeepLink()},setWcLinking(e){H.wcLinking=e},setWcError(e){H.wcError=e,H.buffering=!1},setRecentWallet(e){H.recentWallet=e},setBuffering(e){H.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},G=(0,i.sj)({status:"uninitialized"}),V={state:G,subscribeKey:(e,t)=>n(G,e,t),subscribe:e=>(0,i.Ld)(G,()=>e(G)),_getClient(){if(!G._client)throw Error("SIWEController client not set");return G._client},setSIWEClient(e){G._client=(0,i.iH)(e),G.status="ready"},setNonce(e){G.nonce=e},setStatus(e){G.status=e},setMessage(e){G.message=e},setSession(e){G.session=e}},Z=(0,i.sj)({themeMode:"dark",themeVariables:{}}),K={state:Z,subscribe:e=>(0,i.Ld)(Z,()=>e(Z)),setThemeMode(e){Z.themeMode=e},setThemeVariables(e){Z.themeVariables={...Z.themeVariables,...e}}},Y={getWalletImage:e=>e?.image_url?e?.image_url:e?.image_id?m.state.walletImages[e.image_id]:void 0,getNetworkImage:e=>e?.imageUrl?e?.imageUrl:e?.imageId?m.state.networkImages[e.imageId]:void 0,getConnectorImage:e=>e?.imageUrl?e.imageUrl:e?.imageId?m.state.connectorImages[e.imageId]:void 0}},10468:(e,t,r)=>{"use strict";r.r(t),r.d(t,{W3mModal:()=>u});var i=r(61698),n=r(95270),o=r(65867),a=r(86769);let s=o.iv`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var l=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let c="scroll-lock",u=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=i.IN.state.open,this.initializeTheming(),i.ApiController.prefetch(),this.unsubscribe.push(i.IN.subscribeKey("open",e=>e?this.onOpen():this.onClose())),i.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?o.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(e){e.target===e.currentTarget&&i.IN.close()}initializeTheming(){let{themeVariables:e,themeMode:t}=i.ThemeController.state,r=n.UiHelperUtil.getColorTheme(t);(0,n.initializeTheming)(e,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,i.SnackController.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){let e=document.createElement("style");e.dataset.w3m=c,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${c}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)i.IN.close();else if("Tab"===t.key){let{tagName:r}=t.target;!r||r.includes("W3M-")||r.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}};u.styles=s,l([(0,a.SB)()],u.prototype,"open",void 0),u=l([(0,n.customElement)("w3m-modal")],u)},56688:(e,t,r)=>{"use strict";r.d(t,{fl:()=>O,iv:()=>u,Ts:()=>E,Qu:()=>k});var i=r(91792);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=globalThis,o=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),s=new WeakMap;class l{constructor(e,t,r){if(this._$cssResult$=!0,r!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(o&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&s.set(t,e))}return e}toString(){return this.cssText}}let c=e=>new l("string"==typeof e?e:e+"",void 0,a),u=(e,...t)=>{let r=1===e.length?e[0]:t.reduce((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]);return new l(r,e,a)},h=(e,t)=>{if(o)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),i=n.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=r.cssText,e.appendChild(t)}},d=o||void 0===n.CSSStyleSheet?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return c(t)})(e):e,{is:f,defineProperty:p,getOwnPropertyDescriptor:g,getOwnPropertyNames:m,getOwnPropertySymbols:b,getPrototypeOf:w}=Object,y=globalThis;y.customElements??=i.iN;let v=y.trustedTypes,x=v?v.emptyScript:"",C=y.reactiveElementPolyfillSupport,_=(e,t)=>e,E={toAttribute(e,t){switch(t){case Boolean:e=e?x:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},k=(e,t)=>!f(e,t),S={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:k};Symbol.metadata??=Symbol("metadata"),y.litPropertyMetadata??=new WeakMap;class O extends(globalThis.HTMLElement??i.mv){static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=S){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,t);void 0!==i&&p(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){let{get:i,set:n}=g(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){let o=i?.call(this);n.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??S}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;let e=w(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){let e=this.properties,t=[...m(e),...b(e)];for(let r of t)this.createProperty(r,e[r])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let e of r)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return h(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){let n=(void 0!==r.converter?.toAttribute?r.converter:E).toAttribute(t,r.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){let r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){let e=r.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:E;this._$Em=i,this[i]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r,i=!1,n){if(void 0!==e){if(!((r??=this.constructor.getPropertyOptions(e)).hasChanged??k)(i?n:this[e],t))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],r)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$E_?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(e){}firstUpdated(e){}}O.elementStyles=[],O.shadowRootOptions={mode:"open"},O[_("elementProperties")]=new Map,O[_("finalized")]=new Map,C?.({ReactiveElement:O}),(y.reactiveElementVersions??=[]).push("2.0.2")},79898:(e,t,r)=>{"use strict";r.d(t,{Jb:()=>k,Ld:()=>S,dy:()=>E,sY:()=>F});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i=globalThis,n=i.trustedTypes,o=n?n.createPolicy("lit-html",{createHTML:e=>e}):void 0,a="$lit$",s=`lit$${(Math.random()+"").slice(9)}$`,l="?"+s,c=`<${l}>`,u=void 0===i.document?{createTreeWalker:()=>({})}:document,h=()=>u.createComment(""),d=e=>null===e||"object"!=typeof e&&"function"!=typeof e,f=Array.isArray,p=e=>f(e)||"function"==typeof e?.[Symbol.iterator],g="[ 	\n\f\r]",m=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,b=/-->/g,w=/>/g,y=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),v=/'/g,x=/"/g,C=/^(?:script|style|textarea|title)$/i,_=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),E=_(1),k=(_(2),Symbol.for("lit-noChange")),S=Symbol.for("lit-nothing"),O=new WeakMap,D=u.createTreeWalker(u,129);function P(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==o?o.createHTML(t):t}let A=(e,t)=>{let r=e.length-1,i=[],n,o=2===t?"<svg>":"",l=m;for(let t=0;t<r;t++){let r=e[t],u,h,d=-1,f=0;for(;f<r.length&&(l.lastIndex=f,null!==(h=l.exec(r)));)f=l.lastIndex,l===m?"!--"===h[1]?l=b:void 0!==h[1]?l=w:void 0!==h[2]?(C.test(h[2])&&(n=RegExp("</"+h[2],"g")),l=y):void 0!==h[3]&&(l=y):l===y?">"===h[0]?(l=n??m,d=-1):void 0===h[1]?d=-2:(d=l.lastIndex-h[2].length,u=h[1],l=void 0===h[3]?y:'"'===h[3]?x:v):l===x||l===v?l=y:l===b||l===w?l=m:(l=y,n=void 0);let p=l===y&&e[t+1].startsWith("/>")?" ":"";o+=l===m?r+c:d>=0?(i.push(u),r.slice(0,d)+a+r.slice(d)+s+p):r+s+(-2===d?t:p)}return[P(e,o+(e[r]||"<?>")+(2===t?"</svg>":"")),i]};class T{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let o=0,c=0,u=e.length-1,d=this.parts,[f,p]=A(e,t);if(this.el=T.createElement(f,r),D.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=D.nextNode())&&d.length<u;){if(1===i.nodeType){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(a)){let t=p[c++],r=i.getAttribute(e).split(s),n=/([.?@])?(.*)/.exec(t);d.push({type:1,index:o,name:n[2],strings:r,ctor:"."===n[1]?M:"?"===n[1]?j:"@"===n[1]?L:R}),i.removeAttribute(e)}else e.startsWith(s)&&(d.push({type:6,index:o}),i.removeAttribute(e));if(C.test(i.tagName)){let e=i.textContent.split(s),t=e.length-1;if(t>0){i.textContent=n?n.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],h()),D.nextNode(),d.push({type:2,index:++o});i.append(e[t],h())}}}else if(8===i.nodeType){if(i.data===l)d.push({type:2,index:o});else{let e=-1;for(;-1!==(e=i.data.indexOf(s,e+1));)d.push({type:7,index:o}),e+=s.length-1}}o++}}static createElement(e,t){let r=u.createElement("template");return r.innerHTML=e,r}}function $(e,t,r=e,i){if(t===k)return t;let n=void 0!==i?r._$Co?.[i]:r._$Cl,o=d(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(e))._$AT(e,r,i),void 0!==i?(r._$Co??=[])[i]=n:r._$Cl=n),void 0!==n&&(t=$(e,n._$AS(e,t.values),n,i)),t}class I{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??u).importNode(t,!0);D.currentNode=i;let n=D.nextNode(),o=0,a=0,s=r[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new N(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new B(n,this,e)),this._$AV.push(t),s=r[++a]}o!==s?.index&&(n=D.nextNode(),o++)}return D.currentNode=u,i}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class N{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){d(e=$(this,e,t))?e===S||null==e||""===e?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==k&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):p(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==S&&d(this._$AH)?this._$AA.nextSibling.data=e:this.$(u.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=T.createElement(P(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new I(i,this),r=e.u(this.options);e.p(t),this.$(r),this._$AH=e}}_$AC(e){let t=O.get(e.strings);return void 0===t&&O.set(e.strings,t=new T(e)),t}T(e){f(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let n of e)i===t.length?t.push(r=new N(this.k(h()),this.k(h()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,n){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=S}_$AI(e,t=this,r,i){let n=this.strings,o=!1;if(void 0===n)(o=!d(e=$(this,e,t,0))||e!==this._$AH&&e!==k)&&(this._$AH=e);else{let i,a;let s=e;for(e=n[0],i=0;i<n.length-1;i++)(a=$(this,s[r+i],t,i))===k&&(a=this._$AH[i]),o||=!d(a)||a!==this._$AH[i],a===S?e=S:e!==S&&(e+=(a??"")+n[i+1]),this._$AH[i]=a}o&&!i&&this.O(e)}O(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class M extends R{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===S?void 0:e}}class j extends R{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==S)}}class L extends R{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){if((e=$(this,e,t,0)??S)===k)return;let r=this._$AH,i=e===S&&r!==S||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==S&&(r===S||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class B{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){$(this,e)}}let U=i.litHtmlPolyfillSupport;U?.(T,N),(i.litHtmlVersions??=[]).push("3.1.0");let F=(e,t,r)=>{let i=r?.renderBefore??t,n=i._$litPart$;if(void 0===n){let e=r?.renderBefore??null;i._$litPart$=n=new N(t.insertBefore(h(),e),e,void 0,r??{})}return n._$AI(e),n}},86769:(e,t,r)=>{"use strict";r.d(t,{Cb:()=>a,SB:()=>s});var i=r(56688);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n={attribute:!0,type:String,converter:i.Ts,reflect:!1,hasChanged:i.Qu},o=(e=n,t,r)=>{let{kind:i,metadata:o}=r,a=globalThis.litPropertyMetadata.get(o);if(void 0===a&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(r.name,e),"accessor"===i){let{name:i}=r;return{set(r){let n=t.get.call(this);t.set.call(this,r),this.requestUpdate(i,n,e)},init(t){return void 0!==t&&this.C(i,void 0,e),t}}}if("setter"===i){let{name:i}=r;return function(r){let n=this[i];t.call(this,r),this.requestUpdate(i,n,e)}}throw Error("Unsupported decorator location: "+i)};function a(e){return(t,r)=>"object"==typeof r?o(e,t,r):((e,t,r)=>{let i=t.hasOwnProperty(r);return t.constructor.createProperty(r,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function s(e){return a({...e,state:!0,attribute:!1})}},65867:(e,t,r)=>{"use strict";r.d(t,{oi:()=>o,iv:()=>i.iv,dy:()=>n.dy});var i=r(56688),n=r(79898);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class o extends i.fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=(0,n.sY)(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return n.Jb}}o._$litElement$=!0,o.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:o});let a=globalThis.litElementPolyfillSupport;a?.({LitElement:o}),(globalThis.litElementVersions??=[]).push("4.0.2")},95270:(e,t,r)=>{"use strict";let i,n,o;r.r(t),r.d(t,{TransactionUtil:()=>no,UiHelperUtil:()=>re,WuiAccountButton:()=>rd,WuiAllWalletsImage:()=>rw,WuiAvatar:()=>ra,WuiButton:()=>rx,WuiCard:()=>eP,WuiCardSelect:()=>r$,WuiCardSelectLoader:()=>rk,WuiChip:()=>rR,WuiConnectButton:()=>rL,WuiCtaButton:()=>rF,WuiEmailInput:()=>r6,WuiFlex:()=>ri,WuiGrid:()=>i9,WuiIcon:()=>tk,WuiIconBox:()=>rc,WuiIconLink:()=>r7,WuiImage:()=>tD,WuiInputElement:()=>ir,WuiInputNumeric:()=>ia,WuiInputText:()=>r3,WuiLink:()=>ic,WuiListItem:()=>id,WuiListWallet:()=>iO,WuiLoadingHexagon:()=>tA,WuiLoadingSpinner:()=>tI,WuiLoadingThumbnail:()=>tM,WuiLogo:()=>iA,WuiLogoSelect:()=>iI,WuiNetworkButton:()=>iM,WuiNetworkImage:()=>rP,WuiOtp:()=>iB,WuiQrCode:()=>iq,WuiSearchBar:()=>iV,WuiSeparator:()=>nt,WuiShimmer:()=>tB,WuiSnackbar:()=>iY,WuiTabs:()=>iJ,WuiTag:()=>iE,WuiText:()=>tq,WuiTooltip:()=>i2,WuiTransactionListItem:()=>iy,WuiTransactionListItemLoader:()=>ix,WuiTransactionVisual:()=>im,WuiVisual:()=>t9,WuiVisualThumbnail:()=>i4,WuiWalletImage:()=>rg,customElement:()=>eO,initializeTheming:()=>ev,setColorTheme:()=>ex,setThemeVariables:()=>eC});var a,s=r(91792);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let l=globalThis,c=l.ShadowRoot&&(void 0===l.ShadyCSS||l.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,u=Symbol(),h=new WeakMap;class d{constructor(e,t,r){if(this._$cssResult$=!0,r!==u)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(c&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=h.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&h.set(t,e))}return e}toString(){return this.cssText}}let f=e=>new d("string"==typeof e?e:e+"",void 0,u),p=(e,...t)=>{let r=1===e.length?e[0]:t.reduce((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]);return new d(r,e,u)},g=(e,t)=>{if(c)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),i=l.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=r.cssText,e.appendChild(t)}},m=c||void 0===l.CSSStyleSheet?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return f(t)})(e):e,{is:b,defineProperty:w,getOwnPropertyDescriptor:y,getOwnPropertyNames:v,getOwnPropertySymbols:x,getPrototypeOf:C}=Object,_=globalThis;_.customElements??=s.iN;let E=_.trustedTypes,k=E?E.emptyScript:"",S=_.reactiveElementPolyfillSupport,O=(e,t)=>e,D={toAttribute(e,t){switch(t){case Boolean:e=e?k:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},P=(e,t)=>!b(e,t),A={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:P};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;class T extends(globalThis.HTMLElement??s.mv){static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=A){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,t);void 0!==i&&w(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){let{get:i,set:n}=y(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){let o=i?.call(this);n.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??A}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;let e=C(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){let e=this.properties,t=[...v(e),...x(e)];for(let r of t)this.createProperty(r,e[r])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let e of r)t.unshift(m(e))}else void 0!==e&&t.push(m(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return g(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){let n=(void 0!==r.converter?.toAttribute?r.converter:D).toAttribute(t,r.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){let r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){let e=r.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:D;this._$Em=i,this[i]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r,i=!1,n){if(void 0!==e){if(!((r??=this.constructor.getPropertyOptions(e)).hasChanged??P)(i?n:this[e],t))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],r)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$E_?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(e){}firstUpdated(e){}}T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[O("elementProperties")]=new Map,T[O("finalized")]=new Map,S?.({ReactiveElement:T}),(_.reactiveElementVersions??=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let $=globalThis,I=$.trustedTypes,N=I?I.createPolicy("lit-html",{createHTML:e=>e}):void 0,R="$lit$",M=`lit$${(Math.random()+"").slice(9)}$`,j="?"+M,L=`<${j}>`,B=void 0===$.document?{createTreeWalker:()=>({})}:document,U=()=>B.createComment(""),F=e=>null===e||"object"!=typeof e&&"function"!=typeof e,W=Array.isArray,z=e=>W(e)||"function"==typeof e?.[Symbol.iterator],H="[ 	\n\f\r]",q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,G=/-->/g,V=/>/g,Z=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),K=/'/g,Y=/"/g,Q=/^(?:script|style|textarea|title)$/i,X=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),J=X(1),ee=X(2),et=Symbol.for("lit-noChange"),er=Symbol.for("lit-nothing"),ei=new WeakMap,en=B.createTreeWalker(B,129);function eo(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==N?N.createHTML(t):t}let ea=(e,t)=>{let r=e.length-1,i=[],n,o=2===t?"<svg>":"",a=q;for(let t=0;t<r;t++){let r=e[t],s,l,c=-1,u=0;for(;u<r.length&&(a.lastIndex=u,null!==(l=a.exec(r)));)u=a.lastIndex,a===q?"!--"===l[1]?a=G:void 0!==l[1]?a=V:void 0!==l[2]?(Q.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=Z):void 0!==l[3]&&(a=Z):a===Z?">"===l[0]?(a=n??q,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?Z:'"'===l[3]?Y:K):a===Y||a===K?a=Z:a===G||a===V?a=q:(a=Z,n=void 0);let h=a===Z&&e[t+1].startsWith("/>")?" ":"";o+=a===q?r+L:c>=0?(i.push(s),r.slice(0,c)+R+r.slice(c)+M+h):r+M+(-2===c?t:h)}return[eo(e,o+(e[r]||"<?>")+(2===t?"</svg>":"")),i]};class es{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let n=0,o=0,a=e.length-1,s=this.parts,[l,c]=ea(e,t);if(this.el=es.createElement(l,r),en.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=en.nextNode())&&s.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(R)){let t=c[o++],r=i.getAttribute(e).split(M),a=/([.?@])?(.*)/.exec(t);s.push({type:1,index:n,name:a[2],strings:r,ctor:"."===a[1]?ed:"?"===a[1]?ef:"@"===a[1]?ep:eh}),i.removeAttribute(e)}else e.startsWith(M)&&(s.push({type:6,index:n}),i.removeAttribute(e));if(Q.test(i.tagName)){let e=i.textContent.split(M),t=e.length-1;if(t>0){i.textContent=I?I.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],U()),en.nextNode(),s.push({type:2,index:++n});i.append(e[t],U())}}}else if(8===i.nodeType){if(i.data===j)s.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(M,e+1));)s.push({type:7,index:n}),e+=M.length-1}}n++}}static createElement(e,t){let r=B.createElement("template");return r.innerHTML=e,r}}function el(e,t,r=e,i){if(t===et)return t;let n=void 0!==i?r._$Co?.[i]:r._$Cl,o=F(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(e))._$AT(e,r,i),void 0!==i?(r._$Co??=[])[i]=n:r._$Cl=n),void 0!==n&&(t=el(e,n._$AS(e,t.values),n,i)),t}class ec{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??B).importNode(t,!0);en.currentNode=i;let n=en.nextNode(),o=0,a=0,s=r[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new eu(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new eg(n,this,e)),this._$AV.push(t),s=r[++a]}o!==s?.index&&(n=en.nextNode(),o++)}return en.currentNode=B,i}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class eu{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=er,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){F(e=el(this,e,t))?e===er||null==e||""===e?(this._$AH!==er&&this._$AR(),this._$AH=er):e!==this._$AH&&e!==et&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):z(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==er&&F(this._$AH)?this._$AA.nextSibling.data=e:this.$(B.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=es.createElement(eo(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new ec(i,this),r=e.u(this.options);e.p(t),this.$(r),this._$AH=e}}_$AC(e){let t=ei.get(e.strings);return void 0===t&&ei.set(e.strings,t=new es(e)),t}T(e){W(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let n of e)i===t.length?t.push(r=new eu(this.k(U()),this.k(U()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class eh{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,n){this.type=1,this._$AH=er,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=er}_$AI(e,t=this,r,i){let n=this.strings,o=!1;if(void 0===n)(o=!F(e=el(this,e,t,0))||e!==this._$AH&&e!==et)&&(this._$AH=e);else{let i,a;let s=e;for(e=n[0],i=0;i<n.length-1;i++)(a=el(this,s[r+i],t,i))===et&&(a=this._$AH[i]),o||=!F(a)||a!==this._$AH[i],a===er?e=er:e!==er&&(e+=(a??"")+n[i+1]),this._$AH[i]=a}o&&!i&&this.O(e)}O(e){e===er?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ed extends eh{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===er?void 0:e}}class ef extends eh{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==er)}}class ep extends eh{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){if((e=el(this,e,t,0)??er)===et)return;let r=this._$AH,i=e===er&&r!==er||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==er&&(r===er||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class eg{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){el(this,e)}}let em=$.litHtmlPolyfillSupport;em?.(es,eu),($.litHtmlVersions??=[]).push("3.1.0");let eb=(e,t,r)=>{let i=r?.renderBefore??t,n=i._$litPart$;if(void 0===n){let e=r?.renderBefore??null;i._$litPart$=n=new eu(t.insertBefore(U(),e),e,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ew extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=eb(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return et}}ew._$litElement$=!0,ew.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ew});let ey=globalThis.litElementPolyfillSupport;function ev(e,t){i=document.createElement("style"),n=document.createElement("style"),o=document.createElement("style"),i.textContent=e_(e).core.cssText,n.textContent=e_(e).dark.cssText,o.textContent=e_(e).light.cssText,document.head.appendChild(i),document.head.appendChild(n),document.head.appendChild(o),ex(t)}function ex(e){n&&o&&("light"===e?(n.removeAttribute("media"),o.media="enabled"):(o.removeAttribute("media"),n.media="enabled"))}function eC(e){i&&n&&o&&(i.textContent=e_(e).core.cssText,n.textContent=e_(e).dark.cssText,o.textContent=e_(e).light.cssText)}function e_(e){return{core:p`
      :root {
        --w3m-color-mix-strength: ${f(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${f(e?.["--w3m-font-family"]||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${f(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${f(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${f(e?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-015: var(--wui-color-accent-base-015);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:p`
      :root {
        --w3m-color-mix: ${f(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${f(e?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:p`
      :root {
        --w3m-color-mix: ${f(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${f(e?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}ey?.({LitElement:ew}),(globalThis.litElementVersions??=[]).push("4.0.2");let eE=p`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,ek=p`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,eS=p`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function eO(e){return function(t){return"function"==typeof t?(customElements.get(e)||customElements.define(e,t),t):function(e,t){let{kind:r,elements:i}=t;return{kind:r,elements:i,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}let eD=p`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`,eP=class extends ew{render(){return J`<slot></slot>`}};eP.styles=[eE,eD],eP=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([eO("wui-card")],eP);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let eA={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:P},eT=(e=eA,t,r)=>{let{kind:i,metadata:n}=r,o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),o.set(r.name,e),"accessor"===i){let{name:i}=r;return{set(r){let n=t.get.call(this);t.set.call(this,r),this.requestUpdate(i,n,e)},init(t){return void 0!==t&&this.C(i,void 0,e),t}}}if("setter"===i){let{name:i}=r;return function(r){let n=this[i];t.call(this,r),this.requestUpdate(i,n,e)}}throw Error("Unsupported decorator location: "+i)};function e$(e){return(t,r)=>"object"==typeof r?eT(e,t,r):((e,t,r)=>{let i=t.hasOwnProperty(r);return t.constructor.createProperty(r,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function eI(e){return e$({...e,state:!0,attribute:!1})}let eN=p`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,eR=ee`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,eM=ee`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,ej=ee`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,eL=ee`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eB=ee`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,eU=ee`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eF=ee`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,eW=ee`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,ez=ee`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,eH=ee`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,eq=ee`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,eG=ee`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,eV=ee`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,eZ=ee`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,eK=ee`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eY=ee`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,eQ=ee`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,eX=ee`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,eJ=ee`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,e0=ee` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,e1=ee`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,e2=ee`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,e3=ee`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,e5=ee`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,e4=ee`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,e6=ee`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,e8=ee`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,e9=ee`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,e7=ee`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,te=ee`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,tt=ee`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,tr=ee`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,ti=ee`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,tn=ee`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,to=ee`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,ta=ee`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,ts=ee`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,tl=ee` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,tc=ee`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,tu=ee`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,th=ee`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,td=ee`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,tf=ee`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,tp=ee`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,tg=ee`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,tm=ee`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,tb=ee`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,tw=ee`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,ty=ee`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,tv=ee`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,tx=ee`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,tC=ee`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var t_=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tE={allWallets:eR,appStore:eM,chromeStore:eZ,apple:ej,arrowBottom:eL,arrowLeft:eB,arrowRight:eU,arrowTop:eF,browser:eW,checkmark:ez,chevronBottom:eH,chevronLeft:eq,chevronRight:eG,chevronTop:eV,clock:eK,close:eY,compass:eX,coinPlaceholder:eQ,copy:eJ,cursor:e0,desktop:e1,disconnect:e2,discord:e3,etherscan:e5,extension:e4,externalLink:e6,facebook:e8,filters:e9,github:e7,google:te,helpCircle:tt,infoCircle:tr,mail:ti,mobile:tn,networkPlaceholder:to,nftPlaceholder:ta,off:ts,playStore:tl,qrCode:tc,refresh:tu,search:th,swapHorizontal:td,swapHorizontalBold:tf,swapVertical:tp,telegram:tg,twitch:tm,twitter:tb,twitterIcon:tw,wallet:tv,walletConnect:tx,walletPlaceholder:ty,warningCircle:tC},tk=class extends ew{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: var(--wui-color-${this.color});
      --local-width: var(--wui-icon-size-${this.size});
    `,J`${tE[this.name]}`}};tk.styles=[eE,eS,eN],t_([e$()],tk.prototype,"size",void 0),t_([e$()],tk.prototype,"name",void 0),t_([e$()],tk.prototype,"color",void 0),tk=t_([eO("wui-icon")],tk);let tS=p`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var tO=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tD=class extends ew{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return J`<img src=${this.src} alt=${this.alt} />`}};tD.styles=[eE,eS,tS],tO([e$()],tD.prototype,"src",void 0),tO([e$()],tD.prototype,"alt",void 0),tD=tO([eO("wui-image")],tD);let tP=p`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,tA=class extends ew{render(){return J`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};tA.styles=[eE,tP],tA=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([eO("wui-loading-hexagon")],tA);let tT=p`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var t$=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tI=class extends ew{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,J`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};tI.styles=[eE,tT],t$([e$()],tI.prototype,"color",void 0),t$([e$()],tI.prototype,"size",void 0),tI=t$([eO("wui-loading-spinner")],tI);let tN=p`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var tR=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tM=class extends ew{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,t=36-e;return J`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};tM.styles=[eE,tN],tR([e$({type:Number})],tM.prototype,"radius",void 0),tM=tR([eO("wui-loading-thumbnail")],tM);let tj=p`
  :host {
    display: block;
    outline: 1px solid var(--wui-gray-glass-005);
    outline-offset: -1px;
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var tL=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tB=class extends ew{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,J`<slot></slot>`}};tB.styles=[tj],tL([e$()],tB.prototype,"width",void 0),tL([e$()],tB.prototype,"height",void 0),tL([e$()],tB.prototype,"borderRadius",void 0),tB=tL([eO("wui-shimmer")],tB);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tU=e=>(...t)=>({_$litDirective$:e,values:t});class tF{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tW=tU(class extends tF{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.it){for(let r in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[r]&&!this.st?.has(r)&&this.it.add(r);return this.render(t)}let r=e.element.classList;for(let e of this.it)e in t||(r.remove(e),this.it.delete(e));for(let e in t){let i=!!t[e];i===this.it.has(e)||this.st?.has(e)||(i?(r.add(e),this.it.add(e)):(r.remove(e),this.it.delete(e)))}return et}}),tz=p`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var tH=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tq=class extends ew{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){let e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,J`<slot class=${tW(e)}></slot>`}};tq.styles=[eE,tz],tH([e$()],tq.prototype,"variant",void 0),tH([e$()],tq.prototype,"color",void 0),tH([e$()],tq.prototype,"align",void 0),tq=tH([eO("wui-text")],tq);let tG=ee`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,tV=ee`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,tZ=ee`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,tK=ee`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,tY=ee`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,tQ=ee`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,tX=ee`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,tJ=ee`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,t0=ee`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,t1=ee`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,t2=ee`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,t3=ee`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,t5=ee`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,t4=p`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var t6=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let t8={browser:tG,dao:tV,defi:tZ,defiAlt:tK,eth:tY,layers:tQ,lock:tX,login:tJ,network:t0,nft:t1,noun:t2,profile:t3,system:t5},t9=class extends ew{constructor(){super(...arguments),this.name="browser"}render(){return J`${t8[this.name]}`}};t9.styles=[eE,t4],t6([e$()],t9.prototype,"name",void 0),t9=t6([eO("wui-visual")],t9);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let t7=e=>e??er,re={getSpacingStyles:(e,t)=>Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"==typeof e?`var(--wui-spacing-${e})`:void 0,getFormattedDate:e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),getHostName(e){let t=new URL(e);return t.hostname},getTruncateString:({string:e,charsStart:t,charsEnd:r,truncate:i})=>e.length<=t+r?e:"end"===i?`${e.substring(0,t)}...`:"start"===i?`...${e.substring(e.length-r)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`,generateAvatarColors(e){let t=e.toLowerCase().replace(/^0x/iu,""),r=t.substring(0,6),i=this.hexToRgb(r),n=[];for(let e=0;e<5;e+=1){let t=this.tintColor(i,.15*e);n.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`
    --local-color-1: ${n[0]};
    --local-color-2: ${n[1]};
    --local-color-3: ${n[2]};
    --local-color-4: ${n[3]};
    --local-color-5: ${n[4]};
   `},hexToRgb(e){let t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){let[r,i,n]=e;return[Math.round(r+(255-r)*t),Math.round(i+(255-i)*t),Math.round(n+(255-n)*t)]},isNumber:e=>/^[0-9]+$/u.test(e),getColorTheme:e=>e||"dark"},rt=p`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var rr=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ri=class extends ew{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&re.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&re.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&re.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&re.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&re.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&re.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&re.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&re.getSpacingStyles(this.margin,3)};
    `,J`<slot></slot>`}};ri.styles=[eE,rt],rr([e$()],ri.prototype,"flexDirection",void 0),rr([e$()],ri.prototype,"flexWrap",void 0),rr([e$()],ri.prototype,"flexBasis",void 0),rr([e$()],ri.prototype,"flexGrow",void 0),rr([e$()],ri.prototype,"flexShrink",void 0),rr([e$()],ri.prototype,"alignItems",void 0),rr([e$()],ri.prototype,"justifyContent",void 0),rr([e$()],ri.prototype,"columnGap",void 0),rr([e$()],ri.prototype,"rowGap",void 0),rr([e$()],ri.prototype,"gap",void 0),rr([e$()],ri.prototype,"padding",void 0),rr([e$()],ri.prototype,"margin",void 0),ri=rr([eO("wui-flex")],ri);let rn=p`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var ro=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ra=class extends ew{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return J`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",J`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let e=re.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};ra.styles=[eE,rn],ro([e$()],ra.prototype,"imageSrc",void 0),ro([e$()],ra.prototype,"alt",void 0),ro([e$()],ra.prototype,"address",void 0),ra=ro([eO("wui-avatar")],ra);let rs=p`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    outline: var(--local-border);
    outline-offset: 0px;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var rl=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rc=class extends ew{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let e=this.iconSize||this.size,t="lg"===this.size,r="gray"===this.background,i="opaque"===this.background,n="accent-100"===this.backgroundColor&&i||"success-100"===this.backgroundColor&&i||"error-100"===this.backgroundColor&&i||"inverse-100"===this.backgroundColor&&i,o=`var(--wui-color-${this.backgroundColor})`;return n?o=`var(--wui-icon-box-bg-${this.backgroundColor})`:r&&(o=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${o};
       --local-bg-mix: ${n||r?"100%":t?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${t?"xxs":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,J` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};rc.styles=[eE,ek,rs],rl([e$()],rc.prototype,"size",void 0),rl([e$()],rc.prototype,"backgroundColor",void 0),rl([e$()],rc.prototype,"iconColor",void 0),rl([e$()],rc.prototype,"iconSize",void 0),rl([e$()],rc.prototype,"background",void 0),rl([e$({type:Boolean})],rc.prototype,"border",void 0),rl([e$()],rc.prototype,"borderColor",void 0),rl([e$()],rc.prototype,"icon",void 0),rc=rl([eO("wui-icon-box")],rc);let ru=p`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    outline: 2px solid var(--wui-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var rh=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rd=class extends ew{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return J`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${t7(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${re.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){let e=this.networkSrc?J`<wui-image src=${this.networkSrc}></wui-image>`:J`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return J`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};rd.styles=[eE,ek,ru],rh([e$()],rd.prototype,"networkSrc",void 0),rh([e$()],rd.prototype,"avatarSrc",void 0),rh([e$()],rd.prototype,"balance",void 0),rh([e$({type:Boolean})],rd.prototype,"disabled",void 0),rh([e$({type:Boolean})],rd.prototype,"isProfileName",void 0),rh([e$()],rd.prototype,"address",void 0),rd=rh([eO("wui-account-button")],rd);let rf=p`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`;var rp=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rg=class extends ew{constructor(){super(...arguments),this.size="md",this.name=""}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),J` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?J`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?J`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:J`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};rg.styles=[eE,rf],rp([e$()],rg.prototype,"size",void 0),rp([e$()],rg.prototype,"name",void 0),rp([e$()],rg.prototype,"imageSrc",void 0),rp([e$()],rg.prototype,"walletIcon",void 0),rg=rp([eO("wui-wallet-image")],rg);let rm=p`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`;var rb=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rw=class extends ew{constructor(){super(...arguments),this.walletImages=[]}render(){let e=this.walletImages.length<4;return J`${this.walletImages.slice(0,4).map(({src:e,walletName:t})=>J`
          <wui-wallet-image
            size="inherit"
            imageSrc=${e}
            name=${t7(t)}
          ></wui-wallet-image>
        `)}
    ${e?[...Array(4-this.walletImages.length)].map(()=>J` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}`}};rw.styles=[eE,rm],rb([e$({type:Array})],rw.prototype,"walletImages",void 0),rw=rb([eO("wui-all-wallets-image")],rw);let ry=p`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6px 12px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var rv=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rx=class extends ew{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;let e="md"===this.size?"paragraph-600":"small-600";return J`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?J`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:J``}};rx.styles=[eE,ek,ry],rv([e$()],rx.prototype,"size",void 0),rv([e$({type:Boolean})],rx.prototype,"disabled",void 0),rv([e$({type:Boolean})],rx.prototype,"fullWidth",void 0),rv([e$({type:Boolean})],rx.prototype,"loading",void 0),rv([e$()],rx.prototype,"variant",void 0),rx=rv([eO("wui-button")],rx);let rC=ee`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,r_=p`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var rE=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rk=class extends ew{constructor(){super(...arguments),this.type="wallet"}render(){return J`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?J` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${rC}`:J`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};rk.styles=[eE,ek,r_],rE([e$()],rk.prototype,"type",void 0),rk=rE([eO("wui-card-select-loader")],rk);let rS=ee`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,rO=p`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var rD=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rP=class extends ew{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){let e="lg"===this.size;return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${e?"86px":"48px"};
      --local-height: ${e?"96px":"54px"};
      --local-icon-size: ${e?"42px":"24px"};
    `,J`${this.templateVisual()} ${e?rS:rC}`}templateVisual(){return this.imageSrc?J`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:J`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};rP.styles=[eE,rO],rD([e$()],rP.prototype,"size",void 0),rD([e$()],rP.prototype,"name",void 0),rD([e$()],rP.prototype,"imageSrc",void 0),rD([e$({type:Boolean})],rP.prototype,"selected",void 0),rP=rD([eO("wui-network-image")],rP);let rA=p`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var rT=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r$=class extends ew{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return J`
      <button data-selected=${t7(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?J`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${t7(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:J`
      <wui-wallet-image size="md" imageSrc=${t7(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};r$.styles=[eE,ek,rA],rT([e$()],r$.prototype,"name",void 0),rT([e$()],r$.prototype,"type",void 0),rT([e$()],r$.prototype,"imageSrc",void 0),rT([e$({type:Boolean})],r$.prototype,"disabled",void 0),rT([e$({type:Boolean})],r$.prototype,"selected",void 0),r$=rT([eO("wui-card-select")],r$);let rI=p`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`;var rN=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rR=class extends ew{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){let e="transparent"===this.variant?"small-600":"paragraph-600";return J`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${re.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?J`<wui-image src=${this.imageSrc}></wui-image>`:null}};rR.styles=[eE,ek,rI],rN([e$()],rR.prototype,"variant",void 0),rN([e$()],rR.prototype,"imageSrc",void 0),rN([e$({type:Boolean})],rR.prototype,"disabled",void 0),rN([e$()],rR.prototype,"icon",void 0),rN([e$()],rR.prototype,"href",void 0),rR=rN([eO("wui-chip")],rR);let rM=p`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var rj=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rL=class extends ew{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let e="md"===this.size?"paragraph-600":"small-600";return J`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?J`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};rL.styles=[eE,ek,rM],rj([e$()],rL.prototype,"size",void 0),rj([e$({type:Boolean})],rL.prototype,"loading",void 0),rL=rj([eO("wui-connect-button")],rL);let rB=p`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var rU=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rF=class extends ew{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return J`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" colo="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};rF.styles=[eE,ek,rB],rU([e$({type:Boolean})],rF.prototype,"disabled",void 0),rU([e$()],rF.prototype,"label",void 0),rU([e$()],rF.prototype,"buttonLabel",void 0),rF=rU([eO("wui-cta-button")],rF);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let{D:rW}={j:R,P:M,A:j,C:1,M:ea,L:ec,R:z,V:el,D:eu,I:eh,H:ef,N:ep,U:ed,B:eg},rz=e=>void 0===e.strings,rH=(e,t)=>{let r=e._$AN;if(void 0===r)return!1;for(let e of r)e._$AO?.(t,!1),rH(e,t);return!0},rq=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while(0===r?.size)},rG=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),rK(t)}};function rV(e){void 0!==this._$AN?(rq(this),this._$AM=e,rG(this)):this._$AM=e}function rZ(e,t=!1,r=0){let i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size){if(t){if(Array.isArray(i))for(let e=r;e<i.length;e++)rH(i[e],!1),rq(i[e]);else null!=i&&(rH(i,!1),rq(i))}else rH(this,e)}}let rK=e=>{2==e.type&&(e._$AP??=rZ,e._$AQ??=rV)};class rY extends tF{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),rG(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(rH(this,e),rq(this))}setValue(e){if(rz(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let rQ=()=>new rX;class rX{}let rJ=new WeakMap,r0=tU(class extends rY{render(e){return er}update(e,[t]){let r=t!==this.G;return r&&void 0!==this.G&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=t,this.ct=e.options?.host,this.ot(this.lt=e.element)),er}ot(e){if("function"==typeof this.G){let t=this.ct??globalThis,r=rJ.get(t);void 0===r&&(r=new WeakMap,rJ.set(t,r)),void 0!==r.get(this.G)&&this.G.call(this.ct,void 0),r.set(this.G,e),void 0!==e&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){return"function"==typeof this.G?rJ.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),r1=p`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var r2=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r3=class extends ew{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=rQ()}render(){let e=`wui-size-${this.size}`;return J` ${this.templateIcon()}
      <input
        ${r0(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${t7(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?J`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};r3.styles=[eE,ek,r1],r2([e$()],r3.prototype,"size",void 0),r2([e$()],r3.prototype,"icon",void 0),r2([e$({type:Boolean})],r3.prototype,"disabled",void 0),r2([e$()],r3.prototype,"placeholder",void 0),r2([e$()],r3.prototype,"type",void 0),r2([e$()],r3.prototype,"keyHint",void 0),r3=r2([eO("wui-input-text")],r3);let r5=p`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var r4=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r6=class extends ew{render(){return J`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?J`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};r6.styles=[eE,r5],r4([e$()],r6.prototype,"errorMessage",void 0),r6=r4([eO("wui-email-input")],r6);let r8=p`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var r9=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r7=class extends ew{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return J`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};r7.styles=[eE,ek,eS,r8],r9([e$()],r7.prototype,"size",void 0),r9([e$({type:Boolean})],r7.prototype,"disabled",void 0),r9([e$()],r7.prototype,"icon",void 0),r9([e$()],r7.prototype,"iconColor",void 0),r7=r9([eO("wui-icon-link")],r7);let ie=p`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var it=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ir=class extends ew{constructor(){super(...arguments),this.icon="copy"}render(){return J`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};ir.styles=[eE,ek,ie],it([e$()],ir.prototype,"icon",void 0),ir=it([eO("wui-input-element")],ir);let ii=p`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`;var io=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ia=class extends ew{constructor(){super(...arguments),this.disabled=!1}render(){return J`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};ia.styles=[eE,ek,ii],io([e$({type:Boolean})],ia.prototype,"disabled",void 0),ia=io([eO("wui-input-numeric")],ia);let is=p`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var il=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ic=class extends ew{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return J`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};ic.styles=[eE,ek,is],il([e$({type:Boolean})],ic.prototype,"disabled",void 0),il([e$()],ic.prototype,"color",void 0),ic=il([eO("wui-link")],ic);let iu=p`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    outline: 2px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    outline: 2px solid var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    outline: 2px solid var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var ih=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let id=class extends ew{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return J`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${t7(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return J`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return J`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){let e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md",r=this.iconSize?this.iconSize:t;return J`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?J`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:J``}chevronTemplate(){return this.chevron?J`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};id.styles=[eE,ek,iu],ih([e$()],id.prototype,"icon",void 0),ih([e$()],id.prototype,"iconSize",void 0),ih([e$()],id.prototype,"variant",void 0),ih([e$()],id.prototype,"iconVariant",void 0),ih([e$({type:Boolean})],id.prototype,"disabled",void 0),ih([e$()],id.prototype,"imageSrc",void 0),ih([e$()],id.prototype,"alt",void 0),ih([e$({type:Boolean})],id.prototype,"chevron",void 0),ih([e$({type:Boolean})],id.prototype,"loading",void 0),id=ih([eO("wui-list-item")],id),function(e){e.approve="approved",e.bought="bought",e.borrow="borrowed",e.burn="burnt",e.cancel="canceled",e.claim="claimed",e.deploy="deployed",e.deposit="deposited",e.execute="executed",e.mint="minted",e.receive="received",e.repay="repaid",e.send="sent",e.sell="sold",e.stake="staked",e.trade="swapped",e.unstake="unstaked",e.withdraw="withdrawn"}(a||(a={}));let ip=p`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    outline: 1px solid var(--wui-gray-glass-005);
    outline-offset: -1px;
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var ig=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let im=class extends ew{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){let[e,t]=this.images,r=e?.type==="NFT",i=t?.url?"NFT"===t.type:r;return this.style.cssText=`
    --local-left-border-radius: ${r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    --local-right-border-radius: ${i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    `,J`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){let[e,t]=this.images,r=e?.type,i=2===this.images.length;return i&&(e?.url||t?.url)?J`<div class="swap-images-container">
        ${e?.url?J`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t?.url?J`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e?.url?J`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:"NFT"===r?J`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:J`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e,t="accent-100";return(e=this.getIcon(),this.status&&(t=this.getStatusColor()),e)?J`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${e}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};im.styles=[ip],ig([e$()],im.prototype,"type",void 0),ig([e$()],im.prototype,"status",void 0),ig([e$()],im.prototype,"direction",void 0),ig([e$()],im.prototype,"onlyDirectionIcon",void 0),ig([e$()],im.prototype,"images",void 0),ig([e$()],im.prototype,"secondImage",void 0),im=ig([eO("wui-transaction-visual")],im);let ib=p`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var iw=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iy=class extends ew{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return J`
      <wui-flex>
        <wui-transaction-visual
          status=${this.status}
          direction=${this.direction}
          type=${this.type}
          onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${a[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){let e=this.descriptions?.[0];return e?J`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){let e=this.descriptions?.[1];return e?J`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};iy.styles=[eE,ib],iw([e$()],iy.prototype,"type",void 0),iw([e$()],iy.prototype,"descriptions",void 0),iw([e$()],iy.prototype,"date",void 0),iw([e$()],iy.prototype,"onlyDirectionIcon",void 0),iw([e$()],iy.prototype,"status",void 0),iw([e$()],iy.prototype,"direction",void 0),iw([e$()],iy.prototype,"images",void 0),iy=iw([eO("wui-transaction-list-item")],iy);let iv=p`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`,ix=class extends ew{render(){return J`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};ix.styles=[eE,iv],ix=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([eO("wui-transaction-list-item-loader")],ix);let iC=p`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var i_=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iE=class extends ew{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,J`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};iE.styles=[eE,iC],i_([e$()],iE.prototype,"variant",void 0),iE=i_([eO("wui-tag")],iE);let ik=p`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var iS=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iO=class extends ew{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return J`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?J` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?J` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?J`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:J`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?J`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?J`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};iO.styles=[eE,ek,ik],iS([e$({type:Array})],iO.prototype,"walletImages",void 0),iS([e$()],iO.prototype,"imageSrc",void 0),iS([e$()],iO.prototype,"name",void 0),iS([e$()],iO.prototype,"tagLabel",void 0),iS([e$()],iO.prototype,"tagVariant",void 0),iS([e$()],iO.prototype,"icon",void 0),iS([e$()],iO.prototype,"walletIcon",void 0),iS([e$({type:Boolean})],iO.prototype,"disabled",void 0),iS([e$({type:Boolean})],iO.prototype,"showAllWallets",void 0),iO=iS([eO("wui-list-wallet")],iO);let iD=p`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var iP=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iA=class extends ew{constructor(){super(...arguments),this.logo="google"}render(){return J`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};iA.styles=[eE,iD],iP([e$()],iA.prototype,"logo",void 0),iA=iP([eO("wui-logo")],iA);let iT=p`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var i$=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iI=class extends ew{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return J`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};iI.styles=[eE,ek,iT],i$([e$()],iI.prototype,"logo",void 0),i$([e$({type:Boolean})],iI.prototype,"disabled",void 0),iI=i$([eO("wui-logo-select")],iI);let iN=p`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }
`;var iR=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iM=class extends ew{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return J`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?J`<wui-image src=${this.imageSrc}></wui-image>`:J`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};iM.styles=[eE,ek,iN],iR([e$()],iM.prototype,"imageSrc",void 0),iR([e$({type:Boolean})],iM.prototype,"disabled",void 0),iM=iR([eO("wui-network-button")],iM);let ij=p`
  :host {
    position: relative;
    display: block;
  }
`;var iL=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iB=class extends ew{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(e,t)=>{let r=e.target,i=this.getInputElement(r);if(!i)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();let n=i.selectionStart;switch(e.key){case"ArrowLeft":n&&i.setSelectionRange(n+1,n+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===i.value?this.focusInputField("prev",t):i.value=""}},this.focusInputField=(e,t)=>{if("next"===e){let e=t+1,r=this.numerics[e<this.length?e:t],i=r?this.getInputElement(r):void 0;i&&i.focus()}if("prev"===e){let e=t-1,r=this.numerics[e>-1?e:t],i=r?this.getInputElement(r):void 0;i&&i.focus()}}}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e))}render(){return J`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map((e,t)=>J`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @keydown=${e=>this.handleKeyDown(e,t)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}handleInput(e,t){let r=e.target,i=this.getInputElement(r);if(i){let r=i.value;if("insertFromPaste"===e.inputType)this.handlePaste(i,r,t);else{let n=re.isNumber(r);n&&e.data?(i.value=e.data,this.focusInputField("next",t)):i.value=""}}}handlePaste(e,t,r){let i=t[0],n=i&&re.isNumber(i);if(n){e.value=i;let n=t.substring(1);if(r+1<this.length&&n.length){let e=this.numerics[r+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,n,r+1)}else this.focusInputField("next",r)}else e.value=""}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}};iB.styles=[eE,ij],iL([e$({type:Number})],iB.prototype,"length",void 0),iB=iL([eO("wui-otp")],iB);var iU=r(75944);function iF(e,t,r){return e!==t&&(e-t<0?t-e:e-t)<=r+.1}let iW={generate(e,t,r){let i="#141414",n=[],o=function(e,t){let r=Array.prototype.slice.call(iU.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),i=Math.sqrt(r.length);return r.reduce((e,t,r)=>(r%i==0?e.push([t]):e[e.length-1].push(t))&&e,[])}(e,0),a=t/o.length,s=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];s.forEach(({x:e,y:t})=>{let r=(o.length-7)*a*e,l=(o.length-7)*a*t;for(let e=0;e<s.length;e+=1){let t=a*(7-2*e);n.push(ee`
            <rect
              fill=${2===e?i:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*.45:.45*t}
              ry= ${0===e?(t-5)*.45:.45*t}
              stroke=${i}
              stroke-width=${0===e?5:0}
              height=${0===e?t-5:t}
              x= ${0===e?l+a*e+2.5:l+a*e}
              y= ${0===e?r+a*e+2.5:r+a*e}
            />
          `)}});let l=Math.floor((r+25)/a),c=o.length/2-l/2,u=o.length/2+l/2-1,h=[];o.forEach((e,t)=>{e.forEach((e,r)=>{!o[t][r]||t<7&&r<7||t>o.length-8&&r<7||t<7&&r>o.length-8||t>c&&t<u&&r>c&&r<u||h.push([t*a+a/2,r*a+a/2])})});let d={};return h.forEach(([e,t])=>{d[e]?d[e]?.push(t):d[e]=[t]}),Object.entries(d).map(([e,t])=>{let r=t.filter(e=>t.every(t=>!iF(e,t,a)));return[Number(e),r]}).forEach(([e,t])=>{t.forEach(t=>{n.push(ee`<circle cx=${e} cy=${t} fill=${i} r=${a/2.5} />`)})}),Object.entries(d).filter(([e,t])=>t.length>1).map(([e,t])=>{let r=t.filter(e=>t.some(t=>iF(e,t,a)));return[Number(e),r]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);let r=[];for(let e of t){let t=r.find(t=>t.some(t=>iF(e,t,a)));t?t.push(e):r.push([e])}return[e,r.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,r])=>{n.push(ee`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${r}
                stroke=${i}
                stroke-width=${a/1.25}
                stroke-linecap="round"
              />
            `)})}),n}},iz=p`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    outline: 1px solid var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var iH=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iq=class extends ew{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,J`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let e="light"===this.theme?this.size:this.size-32;return ee`
      <svg height=${e} width=${e}>
        ${iW.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?J`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:J`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};iq.styles=[eE,iz],iH([e$()],iq.prototype,"uri",void 0),iH([e$({type:Number})],iq.prototype,"size",void 0),iH([e$()],iq.prototype,"theme",void 0),iH([e$()],iq.prototype,"imageSrc",void 0),iH([e$()],iq.prototype,"alt",void 0),iq=iH([eO("wui-qr-code")],iq);let iG=p`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`,iV=class extends ew{constructor(){super(...arguments),this.inputComponentRef=rQ()}render(){return J`
      <wui-input-text
        ${r0(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};iV.styles=[eE,iG],iV=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([eO("wui-search-bar")],iV);let iZ=p`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var iK=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iY=class extends ew{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return J`
      <wui-icon-box
        size="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};iY.styles=[eE,iZ],iK([e$()],iY.prototype,"backgroundColor",void 0),iK([e$()],iY.prototype,"iconColor",void 0),iK([e$()],iY.prototype,"icon",void 0),iK([e$()],iY.prototype,"message",void 0),iY=iK([eO("wui-snackbar")],iY);let iQ=p`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }
`;var iX=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iJ=class extends ew{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{let r=t===this.activeTab;return J`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
        >
          <wui-icon size="sm" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){let r=this.buttons[this.activeTab],i=this.buttons[e],n=r?.querySelector("wui-text"),o=i?.querySelector("wui-text"),a=i?.getBoundingClientRect(),s=o?.getBoundingClientRect();r&&n&&!t&&e!==this.activeTab&&(n.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&a&&s&&o&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(a.width+s.width)+6}px`,i.animate([{width:`${a.width+s.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),o.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};iJ.styles=[eE,ek,iQ],iX([e$({type:Array})],iJ.prototype,"tabs",void 0),iX([e$()],iJ.prototype,"onTabChange",void 0),iX([e$({type:Array})],iJ.prototype,"buttons",void 0),iX([e$({type:Boolean})],iJ.prototype,"disabled",void 0),iX([eI()],iJ.prototype,"activeTab",void 0),iX([eI()],iJ.prototype,"localTabWidth",void 0),iX([eI()],iJ.prototype,"isDense",void 0),iJ=iX([eO("wui-tabs")],iJ);let i0=p`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var i1=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let i2=class extends ew{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return J`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};i2.styles=[eE,ek,i0],i1([e$()],i2.prototype,"placement",void 0),i1([e$()],i2.prototype,"message",void 0),i2=i1([eO("wui-tooltip")],i2);let i3=p`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var i5=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let i4=class extends ew{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,J`${this.templateVisual()}`}templateVisual(){return this.imageSrc?J`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:J`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};i4.styles=[eE,i3],i5([e$()],i4.prototype,"imageSrc",void 0),i5([e$()],i4.prototype,"alt",void 0),i5([e$({type:Boolean})],i4.prototype,"borderRadiusFull",void 0),i4=i5([eO("wui-visual-thumbnail")],i4);let i6=p`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var i8=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let i9=class extends ew{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&re.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&re.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&re.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&re.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&re.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&re.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&re.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&re.getSpacingStyles(this.margin,3)};
    `,J`<slot></slot>`}};i9.styles=[eE,i6],i8([e$()],i9.prototype,"gridTemplateRows",void 0),i8([e$()],i9.prototype,"gridTemplateColumns",void 0),i8([e$()],i9.prototype,"justifyItems",void 0),i8([e$()],i9.prototype,"alignItems",void 0),i8([e$()],i9.prototype,"justifyContent",void 0),i8([e$()],i9.prototype,"alignContent",void 0),i8([e$()],i9.prototype,"columnGap",void 0),i8([e$()],i9.prototype,"rowGap",void 0),i8([e$()],i9.prototype,"gap",void 0),i8([e$()],i9.prototype,"padding",void 0),i8([e$()],i9.prototype,"margin",void 0),i9=i8([eO("wui-grid")],i9);let i7=p`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`;var ne=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nt=class extends ew{constructor(){super(...arguments),this.text=""}render(){return J`${this.template()}`}template(){return this.text?J`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};nt.styles=[eE,i7],ne([e$()],nt.prototype,"text",void 0),nt=ne([eO("wui-separator")],nt);var nr=r(91185);let ni=["receive","deposit","borrow","claim"],nn=["withdraw","repay","burn"],no={getTransactionGroupTitle(e){let t=nr.E.getYear();return e===t?"This Year":e},getTransactionImages(e){let[t,r]=e,i=!!t&&e?.every(e=>!!e.nft_info),n=e?.length>1,o=e?.length===2;return o&&!i?[this.getTransactionImage(t),this.getTransactionImage(r)]:n?e.map(e=>this.getTransactionImage(e)):[this.getTransactionImage(t)]},getTransactionImage:e=>({type:no.getTransactionTransferTokenType(e),url:no.getTransactionImageURL(e)}),getTransactionImageURL(e){let t=null,r=!!e?.nft_info,i=!!e?.fungible_info;return e&&r?t=e?.nft_info?.content?.preview?.url:e&&i&&(t=e?.fungible_info?.icon?.url),t},getTransactionTransferTokenType:e=>e?.fungible_info?"FUNGIBLE":e?.nft_info?"NFT":null,getTransactionDescriptions(e){let t=e.metadata?.operationType,r=e.transfers,i=e.transfers?.length>0,n=e.transfers?.length>1,o=i&&r?.every(e=>!!e.fungible_info),[a,s]=r,l=this.getTransferDescription(a);if(this.getTransferDescription(s),!i){let r="send"===t||"receive"===t;return r&&o?[l=re.getTruncateString({string:e.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),re.getTruncateString({string:e.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"})]:[e.metadata.status]}if(n)return r.map(e=>this.getTransferDescription(e));let c="";return ni.includes(t)?c="+":nn.includes(t)&&(c="-"),[l=c.concat(l)]},getTransferDescription(e){let t="";return e&&(e?.nft_info?t=e?.nft_info?.name||"-":e?.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-")),t},getFungibleTransferDescription(e){if(!e)return null;let t=this.getQuantityFixedValue(e?.quantity.numeric),r=[t,e?.fungible_info?.symbol].join(" ").trim();return r},getQuantityFixedValue(e){if(!e)return null;let t=parseFloat(e);return t.toFixed(3)}}},37790:(e,t,r)=>{"use strict";let i,n;function o(){if(!i)throw Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');return{open:async function(e){await i?.open(e)},close:async function(){await i?.close()}}}r.d(t,{OY:()=>t_,o1:()=>tC,k_:()=>o}),r(34218);var a,s,l,c,u,h,d,f,p,g,m,b,w,y,v,x,C,_,E,k,S,O,D,P=r(36444),A=r(35036),T=r(61698),$=r(95270),I=r(65867),N=r(86769),R=r(79898);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let M=e=>e??R.Ld;var j=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let L=class extends I.oi{constructor(){super(),this.unsubscribe=[],this.networkImages=T.WM.state.networkImages,this.disabled=!1,this.balance="show",this.address=T.AccountController.state.address,this.balanceVal=T.AccountController.state.balance,this.balanceSymbol=T.AccountController.state.balanceSymbol,this.profileName=T.AccountController.state.profileName,this.profileImage=T.AccountController.state.profileImage,this.network=T.NetworkController.state.caipNetwork,this.unsubscribe.push(...[T.AccountController.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),T.NetworkController.subscribeKey("caipNetwork",e=>this.network=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.networkImages[this.network?.imageId??""],t="show"===this.balance;return I.dy`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${M(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${M(e)}
        avatarSrc=${M(this.profileImage)}
        balance=${t?T.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){T.IN.open()}};j([(0,N.Cb)({type:Boolean})],L.prototype,"disabled",void 0),j([(0,N.Cb)()],L.prototype,"balance",void 0),j([(0,N.SB)()],L.prototype,"address",void 0),j([(0,N.SB)()],L.prototype,"balanceVal",void 0),j([(0,N.SB)()],L.prototype,"balanceSymbol",void 0),j([(0,N.SB)()],L.prototype,"profileName",void 0),j([(0,N.SB)()],L.prototype,"profileImage",void 0),j([(0,N.SB)()],L.prototype,"network",void 0),L=j([(0,$.customElement)("w3m-account-button")],L);var B=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let U=class extends I.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=T.AccountController.state.isConnected,this.unsubscribe.push(T.AccountController.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?I.dy`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${M(this.balance)}
          >
          </w3m-account-button>
        `:I.dy`
          <w3m-connect-button
            size=${M(this.size)}
            label=${M(this.label)}
            loadingLabel=${M(this.loadingLabel)}
          ></w3m-connect-button>
        `}};B([(0,N.Cb)({type:Boolean})],U.prototype,"disabled",void 0),B([(0,N.Cb)()],U.prototype,"balance",void 0),B([(0,N.Cb)()],U.prototype,"size",void 0),B([(0,N.Cb)()],U.prototype,"label",void 0),B([(0,N.Cb)()],U.prototype,"loadingLabel",void 0),B([(0,N.SB)()],U.prototype,"isAccount",void 0),U=B([(0,$.customElement)("w3m-button")],U);var F=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let W=class extends I.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=T.IN.state.open,this.unsubscribe.push(T.IN.subscribeKey("open",e=>this.open=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return I.dy`
      <wui-connect-button
        size=${M(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?T.IN.close():T.IN.open()}};F([(0,N.Cb)()],W.prototype,"size",void 0),F([(0,N.Cb)()],W.prototype,"label",void 0),F([(0,N.Cb)()],W.prototype,"loadingLabel",void 0),F([(0,N.SB)()],W.prototype,"open",void 0),W=F([(0,$.customElement)("w3m-connect-button")],W),r(10468);var z=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let H=class extends I.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=T.NetworkController.state.caipNetwork,this.connected=T.AccountController.state.isConnected,this.unsubscribe.push(...[T.NetworkController.subscribeKey("caipNetwork",e=>this.network=e),T.AccountController.subscribeKey("isConnected",e=>this.connected=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return I.dy`
      <wui-network-button
        .disabled=${!!this.disabled}
        imageSrc=${M(T.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){T.IN.open({view:"Networks"})}};z([(0,N.Cb)({type:Boolean})],H.prototype,"disabled",void 0),z([(0,N.SB)()],H.prototype,"network",void 0),z([(0,N.SB)()],H.prototype,"connected",void 0),H=z([(0,$.customElement)("w3m-network-button")],H);let q=I.iv`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var G=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let V=class extends I.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=T.RouterController.state.view,this.unsubscribe.push(T.RouterController.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{let t=`${e?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return I.dy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return I.dy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return I.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return I.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return I.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return I.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return I.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return I.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return I.dy`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return I.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return I.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return I.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return I.dy`<w3m-downloads-view></w3m-downloads-view>`;case"Transactions":return I.dy`<w3m-transactions-view></w3m-transactions-view>`}}async onViewChange(e){let{history:t}=T.RouterController.state,r=-10,i=10;t.length<this.prevHistoryLength&&(r=10,i=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${i}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};V.styles=q,G([(0,N.SB)()],V.prototype,"view",void 0),V=G([(0,$.customElement)("w3m-router")],V);let Z=I.iv`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`;var K=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Y=class extends I.oi{constructor(){super(),this.usubscribe=[],this.networkImages=T.WM.state.networkImages,this.address=T.AccountController.state.address,this.profileImage=T.AccountController.state.profileImage,this.profileName=T.AccountController.state.profileName,this.balance=T.AccountController.state.balance,this.balanceSymbol=T.AccountController.state.balanceSymbol,this.network=T.NetworkController.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(...[T.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):T.IN.close()})],T.NetworkController.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-view: No account provided");let e=this.networkImages[this.network?.imageId??""];return I.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${M(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?$.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):$.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${T.j1.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${M(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}explorerBtnTemplate(){let{addressExplorerUrl:e}=T.AccountController.state;return e?I.dy`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){let{requestedCaipNetworks:e}=T.NetworkController.state,t=!!e&&e.length>1,r=e?.find(({id:e})=>e===this.network?.id);return t||!r}onCopyAddress(){try{this.address&&(T.j1.copyToClopboard(this.address),T.SnackController.showSuccess("Address copied"))}catch{T.SnackController.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&T.RouterController.push("Networks")}onTransactions(){T.Xs.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),T.RouterController.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await T.ConnectionController.disconnect(),T.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),T.IN.close()}catch{T.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),T.SnackController.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){let{addressExplorerUrl:e}=T.AccountController.state;e&&T.j1.openHref(e,"_blank")}};Y.styles=Z,K([(0,N.SB)()],Y.prototype,"address",void 0),K([(0,N.SB)()],Y.prototype,"profileImage",void 0),K([(0,N.SB)()],Y.prototype,"profileName",void 0),K([(0,N.SB)()],Y.prototype,"balance",void 0),K([(0,N.SB)()],Y.prototype,"balanceSymbol",void 0),K([(0,N.SB)()],Y.prototype,"network",void 0),K([(0,N.SB)()],Y.prototype,"disconecting",void 0),Y=K([(0,$.customElement)("w3m-account-view")],Y);var Q=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let X=class extends I.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=T.j1.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return I.dy`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?I.dy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:I.dy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return T.j1.isMobile()?I.dy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){T.RouterController.push("ConnectingWalletConnect")}};Q([(0,N.SB)()],X.prototype,"search",void 0),X=Q([(0,$.customElement)("w3m-all-wallets-view")],X);let J=I.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var ee=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let et=class extends I.oi{constructor(){super(),this.unsubscribe=[],this.connectors=T.ConnectorController.state.connectors,this.unsubscribe.push(T.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return I.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(T.j1.isMobile())return null;let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type);return e?I.dy`
      <wui-list-wallet
        imageSrc=${M(T.fz.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){let{customWallets:e}=T.OptionsController.state;if(!e?.length)return null;let t=this.filterOutDuplicateWallets(e);return t.map(e=>I.dy`
        <wui-list-wallet
          imageSrc=${M(T.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)}featuredTemplate(){let{featured:e}=T.ApiController.state;if(!e.length)return null;let t=this.filterOutDuplicateWallets(e);return t.map(e=>I.dy`
        <wui-list-wallet
          imageSrc=${M(T.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)}recentTemplate(){let e=T.MO.getRecentWallets();return e.map(e=>I.dy`
        <wui-list-wallet
          imageSrc=${M(T.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>"ANNOUNCED"!==e.type?null:I.dy`
        <wui-list-wallet
          imageSrc=${M(T.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `)}injectedTemplate(){let e=this.connectors.find(e=>"ANNOUNCED"===e.type);return this.connectors.map(t=>"INJECTED"===t.type&&T.ConnectionController.checkInstalled()?I.dy`
        <wui-list-wallet
          imageSrc=${M(T.fz.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
          tagLabel=${M(e?void 0:"installed")}
          tagVariant=${M(e?void 0:"success")}
        >
        </wui-list-wallet>
      `:null)}connectorsTemplate(){return this.connectors.map(e=>["WALLET_CONNECT","INJECTED","ANNOUNCED"].includes(e.type)?null:I.dy`
        <wui-list-wallet
          imageSrc=${M(T.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){let e=10*Math.floor(T.ApiController.state.count/10);return I.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${e}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){let{recommended:e}=T.ApiController.state,{customWallets:t,featuredWalletIds:r}=T.OptionsController.state,{connectors:i}=T.ConnectorController.state,n=T.MO.getRecentWallets(),o=i.filter(e=>"ANNOUNCED"===e.type);if(r||t||!e.length)return null;let a=o.length+n.length,s=this.filterOutDuplicateWallets(e).slice(0,Math.max(0,2-a));return s.map(e=>I.dy`
        <wui-list-wallet
          imageSrc=${M(T.fz.getWalletImage(e))}
          name=${e?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)}onConnector(e){"WALLET_CONNECT"===e.type?T.j1.isMobile()?T.RouterController.push("AllWallets"):T.RouterController.push("ConnectingWalletConnect"):T.RouterController.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){let{connectors:t}=T.ConnectorController.state,r=T.MO.getRecentWallets(),i=r.map(e=>e.id),n=t.map(e=>e.info?.rdns).filter(Boolean),o=e.filter(e=>!i.includes(e.id)&&!n.includes(e.rdns??void 0));return o}onAllWallets(){T.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),T.RouterController.push("AllWallets")}onConnectWallet(e){T.RouterController.push("ConnectingWalletConnect",{wallet:e})}};et.styles=J,ee([(0,N.SB)()],et.prototype,"connectors",void 0),et=ee([(0,$.customElement)("w3m-connect-view")],et);let er=I.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var ei=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};class en extends I.oi{constructor(){super(),this.wallet=T.RouterController.state.data?.wallet,this.connector=T.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=T.fz.getWalletImage(this.wallet)??T.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=T.ConnectionController.state.wcUri,this.error=T.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(...[T.ConnectionController.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),T.ConnectionController.subscribeKey("wcError",e=>this.error=e),T.ConnectionController.subscribeKey("buffering",e=>this.buffering=e)])}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),I.dy`
      <wui-flex
        data-error=${M(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${M(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?I.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(T.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){let e=T.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return I.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(T.j1.copyToClopboard(this.uri),T.SnackController.showSuccess("Link copied"))}catch{T.SnackController.showError("Failed to copy")}}}en.styles=er,ei([(0,N.SB)()],en.prototype,"uri",void 0),ei([(0,N.SB)()],en.prototype,"error",void 0),ei([(0,N.SB)()],en.prototype,"ready",void 0),ei([(0,N.SB)()],en.prototype,"showRetry",void 0),ei([(0,N.SB)()],en.prototype,"buffering",void 0),ei([(0,N.Cb)({type:Boolean})],en.prototype,"isMobile",void 0),ei([(0,N.Cb)()],en.prototype,"onRetry",void 0);let eo={INJECTED:"browser",ANNOUNCED:"browser"},ea=class extends en{constructor(){if(super(),!this.connector)throw Error("w3m-connecting-view: No connector provided");T.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:eo[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&T.MO.setConnectedWalletImageUrl(this.connector.imageUrl),await T.ConnectionController.connectExternal(this.connector),T.IN.close(),T.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){T.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};ea=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,$.customElement)("w3m-connecting-external-view")],ea);let es=class extends I.oi{constructor(){super(...arguments),this.dappUrl=T.OptionsController.state.metadata?.url,this.dappName=T.OptionsController.state.metadata?.name}render(){return I.dy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} wants to connect to your wallet</wui-text
        >
      </wui-flex>
      ${this.urlTemplate()}
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and to continue</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button size="md" ?fullwidth=${!0} variant="shade" @click=${this.onCancel.bind(this)}>
          Cancel
        </wui-button>
        <wui-button size="md" ?fullwidth=${!0} variant="fill" @click=${this.onSign.bind(this)}>
          Sign
        </wui-button>
      </wui-flex>
    `}urlTemplate(){return this.dappUrl?I.dy`<wui-flex .padding=${["0","0","l","0"]} justifyContent="center">
        <wui-button size="sm" variant="accentBg" @click=${this.onDappLink.bind(this)}>
          ${this.dappUrl}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>`:null}onDappLink(){this.dappUrl&&T.j1.openHref(this.dappUrl,"_blank")}onSign(){}onCancel(){T.RouterController.goBack()}};es=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,$.customElement)("w3m-connecting-siwe-view")],es);var el=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ec=class extends I.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=T.RouterController.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),T.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),I.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):I.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{let{wcPairingExpiry:t}=T.ConnectionController.state;if(e||T.j1.isPairingExpired(t)){if(T.ConnectionController.connectWalletConnect(),this.wallet){let e=T.fz.getWalletImage(this.wallet);e&&T.MO.setConnectedWalletImageUrl(e)}else{let e=T.ConnectorController.state.connectors,t=e.find(e=>"WALLET_CONNECT"===e.type),r=T.fz.getConnectorImage(t);r&&T.MO.setConnectedWalletImageUrl(r)}await T.ConnectionController.state.wcPromise,this.finalizeConnection(),T.IN.close()}}catch(e){T.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),T.ConnectionController.setWcError(!0),T.j1.isAllowedRetry(this.lastRetry)&&(T.SnackController.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){let{wcLinking:e,recentWallet:t}=T.ConnectionController.state;e&&T.MO.setWalletConnectDeepLink(e),t&&T.MO.setWeb3ModalRecent(t),T.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:r,injected:i,rdns:n}=this.wallet,o=i?.map(({injected_id:e})=>e).filter(Boolean),a=n?[n]:o??[],s=a.length,l=T.ConnectionController.checkInstalled(a),c=s&&l,u=t&&!T.j1.isMobile();c&&this.platforms.push("browser"),e&&this.platforms.push(T.j1.isMobile()?"mobile":"qrcode"),r&&this.platforms.push("web"),u&&this.platforms.push("desktop"),!c&&s&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return I.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return I.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return I.dy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return I.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return I.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return I.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){let e=this.platforms.length>1;return e?I.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};el([(0,N.SB)()],ec.prototype,"platform",void 0),el([(0,N.SB)()],ec.prototype,"platforms",void 0),ec=el([(0,$.customElement)("w3m-connecting-wc-view")],ec);let eu=class extends I.oi{constructor(){super(...arguments),this.wallet=T.RouterController.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return I.dy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?I.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?I.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?I.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?I.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&T.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&T.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&T.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&T.j1.openHref(this.wallet.homepage,"_blank")}};eu=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,$.customElement)("w3m-downloads-view")],eu);let eh=class extends I.oi{render(){return I.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{T.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:e,featured:t}=T.ApiController.state,{customWallets:r}=T.OptionsController.state,i=[...t,...r??[],...e].slice(0,4);return i.map(e=>I.dy`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${M(T.fz.getWalletImage(e))}
          @click=${()=>{T.j1.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};eh=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,$.customElement)("w3m-get-wallet-view")],eh);let ed=I.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var ef=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ep=class extends I.oi{constructor(){super(),this.network=T.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=T.NetworkController.state.caipNetwork,this.unsubscribe.push(T.NetworkController.subscribeKey("caipNetwork",e=>{e?.id!==this.currentNetwork?.id&&T.RouterController.goBack()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error("w3m-network-switch-view: No network provided");this.onShowRetry();let e=this.error?"Switch declined":"Approve in wallet",t=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return I.dy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${M(T.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:I.dy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await T.NetworkController.switchActiveNetwork(this.network),T.RouterController.goBack())}catch{this.error=!0}}};ep.styles=ed,ef([(0,N.SB)()],ep.prototype,"showRetry",void 0),ef([(0,N.SB)()],ep.prototype,"error",void 0),ef([(0,N.SB)()],ep.prototype,"currentNetwork",void 0),ep=ef([(0,$.customElement)("w3m-network-switch-view")],ep);var eg=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let em=class extends I.oi{constructor(){super(),this.unsubscribe=[],this.caipNetwork=T.NetworkController.state.caipNetwork,this.unsubscribe.push(T.NetworkController.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return I.dy`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){T.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),T.RouterController.push("WhatIsANetwork")}networksTemplate(){let{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:r}=T.NetworkController.state;return e?.length&&t?.sort((t,r)=>e.indexOf(r.id)-e.indexOf(t.id)),t?.map(t=>I.dy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===t.id}
          imageSrc=${M(T.fz.getNetworkImage(t))}
          type="network"
          name=${t.name??t.id}
          @click=${()=>this.onSwitchNetwork(t)}
          .disabled=${!r&&!e?.includes(t.id)}
        ></wui-card-select>
      `)}async onSwitchNetwork(e){let{isConnected:t}=T.AccountController.state,{approvedCaipNetworkIds:r,supportsAllNetworks:i,caipNetwork:n}=T.NetworkController.state;t&&n?.id!==e.id?r?.includes(e.id)?await T.NetworkController.switchActiveNetwork(e):i&&T.RouterController.push("SwitchNetwork",{network:e}):t||(T.NetworkController.setCaipNetwork(e),T.RouterController.push("Connect"))}};eg([(0,N.SB)()],em.prototype,"caipNetwork",void 0),em=eg([(0,$.customElement)("w3m-networks-view")],em);var eb=r(91185);let ew=I.iv`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`;var ey=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ev="last-transaction",ex=class extends I.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=T.AccountController.state.address,this.transactions=T.sl.state.transactions,this.transactionsByYear=T.sl.state.transactionsByYear,this.loading=T.sl.state.loading,this.empty=T.sl.state.empty,this.next=T.sl.state.next,this.unsubscribe.push(...[T.AccountController.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,T.sl.resetTransactions(),T.sl.fetchTransactions(e.address))}),T.sl.subscribe(e=>{this.transactions=e.transactions,this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next})])}firstUpdated(){0===this.transactions.length&&T.sl.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return I.dy`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){let e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((t,r)=>{let i=r===e.length-1,n=parseInt(t,10),o=$.TransactionUtil.getTransactionGroupTitle(n),a=this.transactionsByYear[n];return a?I.dy`
        <wui-flex flexDirection="column" gap="sm">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${o}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(a,i)}
          </wui-flex>
        </wui-flex>
      `:null})}templateRenderTransaction(e,t){let{date:r,descriptions:i,direction:n,isAllNFT:o,images:a,status:s,transfers:l,type:c}=this.getTransactionListItemProps(e),u=l?.length>1,h=l?.length===2;return h&&!o?I.dy`
        <wui-transaction-list-item
          date=${r}
          direction=${n}
          id=${t&&this.next?ev:""}
          status=${s}
          type=${c}
          .images=${a}
          .descriptions=${i}
        ></wui-transaction-list-item>
      `:u?l.map((e,i)=>{let n=$.TransactionUtil.getTransferDescription(e),o=t&&i===l.length-1;return I.dy` <wui-transaction-list-item
          date=${r}
          direction=${e.direction}
          id=${o&&this.next?ev:""}
          status=${s}
          type=${c}
          onlyDirectionIcon=${!0}
          .images=${[a?.[i]]}
          .descriptions=${[n]}
        ></wui-transaction-list-item>`}):I.dy`
      <wui-transaction-list-item
        date=${r}
        direction=${n}
        id=${t&&this.next?ev:""}
        status=${s}
        type=${c}
        .images=${a}
        .descriptions=${i}
      ></wui-transaction-list-item>
    `}templateTransactions(e,t){return e.map((r,i)=>{let n=t&&i===e.length-1;return I.dy`${this.templateRenderTransaction(r,n)}`})}templateEmpty(){return I.dy`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(7).fill(I.dy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}createPaginationObserver(){let{projectId:e}=T.OptionsController.state;this.paginationObserver=new IntersectionObserver(([t])=>{t?.isIntersecting&&!this.loading&&(T.sl.fetchTransactions(this.address),T.Xs.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();let e=this.shadowRoot?.querySelector(`#${ev}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){let t=eb.E.getRelativeDateFromNow(e?.metadata?.minedAt),r=$.TransactionUtil.getTransactionDescriptions(e),i=e?.transfers,n=e?.transfers?.[0],o=!!n&&e?.transfers?.every(e=>!!e.nft_info),a=$.TransactionUtil.getTransactionImages(i);return{date:t,direction:n?.direction,descriptions:r,isAllNFT:o,images:a,status:e.metadata?.status,transfers:i,type:e.metadata?.operationType}}};ex.styles=ew,ey([(0,N.SB)()],ex.prototype,"address",void 0),ey([(0,N.SB)()],ex.prototype,"transactions",void 0),ey([(0,N.SB)()],ex.prototype,"transactionsByYear",void 0),ey([(0,N.SB)()],ex.prototype,"loading",void 0),ey([(0,N.SB)()],ex.prototype,"empty",void 0),ey([(0,N.SB)()],ex.prototype,"next",void 0),ex=ey([(0,$.customElement)("w3m-transactions-view")],ex);let eC=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],e_=class extends I.oi{render(){return I.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${eC}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{T.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};e_=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,$.customElement)("w3m-what-is-a-network-view")],e_);let eE=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],ek=class extends I.oi{render(){return I.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${eE}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){T.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),T.RouterController.push("GetWallet")}};ek=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,$.customElement)("w3m-what-is-a-wallet-view")],ek);let eS=I.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var eO=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eD="local-paginator",eP=class extends I.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!T.ApiController.state.wallets.length,this.wallets=T.ApiController.state.wallets,this.recommended=T.ApiController.state.recommended,this.featured=T.ApiController.state.featured,this.unsubscribe.push(...[T.ApiController.subscribeKey("wallets",e=>this.wallets=e),T.ApiController.subscribeKey("recommended",e=>this.recommended=e),T.ApiController.subscribeKey("featured",e=>this.featured=e)])}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return I.dy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){let e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await T.ApiController.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>I.dy`
        <wui-card-select-loader type="wallet" id=${M(t)}></wui-card-select-loader>
      `)}walletsTemplate(){let e=[...this.featured,...this.recommended,...this.wallets];return e.map(e=>I.dy`
        <wui-card-select
          imageSrc=${M(T.fz.getWalletImage(e))}
          type="wallet"
          name=${e.name}
          @click=${()=>this.onConnectWallet(e)}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:r,count:i}=T.ApiController.state,n=window.innerWidth<352?3:4,o=e.length+t.length,a=Math.ceil(o/n)*n-o+n;return(a-=e.length?r.length%n:0,0===i||[...r,...e,...t].length<i)?this.shimmerTemplate(a,eD):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${eD}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.initial){let{page:e,count:t,wallets:r}=T.ApiController.state;r.length<t&&T.ApiController.fetchWallets({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){let{connectors:t}=T.ConnectorController.state,r=t.find(({explorerId:t})=>t===e.id);r?T.RouterController.push("ConnectingExternal",{connector:r}):T.RouterController.push("ConnectingWalletConnect",{wallet:e})}};eP.styles=eS,eO([(0,N.SB)()],eP.prototype,"initial",void 0),eO([(0,N.SB)()],eP.prototype,"wallets",void 0),eO([(0,N.SB)()],eP.prototype,"recommended",void 0),eO([(0,N.SB)()],eP.prototype,"featured",void 0),eP=eO([(0,$.customElement)("w3m-all-wallets-list")],eP);let eA=I.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var eT=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let e$=class extends I.oi{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?I.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await T.ApiController.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){let{search:e}=T.ApiController.state;return e.length?I.dy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${e.map(e=>I.dy`
            <wui-card-select
              imageSrc=${M(T.fz.getWalletImage(e))}
              type="wallet"
              name=${e.name}
              @click=${()=>this.onConnectWallet(e)}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:I.dy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){let{connectors:t}=T.ConnectorController.state,r=t.find(({explorerId:t})=>t===e.id);r?T.RouterController.push("ConnectingExternal",{connector:r}):T.RouterController.push("ConnectingWalletConnect",{wallet:e})}};e$.styles=eA,eT([(0,N.SB)()],e$.prototype,"loading",void 0),eT([(0,N.Cb)()],e$.prototype,"query",void 0),e$=eT([(0,$.customElement)("w3m-all-wallets-search")],e$);var eI=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eN=class extends I.oi{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(T.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return I.dy`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};eI([(0,N.Cb)({type:Array})],eN.prototype,"platforms",void 0),eI([(0,N.Cb)()],eN.prototype,"onSelectPlatfrom",void 0),eI([(0,N.SB)()],eN.prototype,"buffering",void 0),eN=eI([(0,$.customElement)("w3m-connecting-header")],eN);let eR=class extends en{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),T.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=T.ConnectorController.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns),r=e.find(e=>"INJECTED"===e.type);t?await T.ConnectionController.connectExternal(t):r&&await T.ConnectionController.connectExternal(r),T.IN.close(),T.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){T.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};eR=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,$.customElement)("w3m-connecting-wc-browser")],eR);let eM=class extends en{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),T.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{this.onConnect?.()},200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:r,href:i}=T.j1.formatNativeUrl(e,this.uri);T.ConnectionController.setWcLinking({name:t,href:i}),T.ConnectionController.setRecentWallet(this.wallet),T.j1.openHref(r,"_self")}catch{this.error=!0}}};eM=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,$.customElement)("w3m-connecting-wc-desktop")],eM);let ej=class extends en{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),T.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:e,name:t}=this.wallet,{redirect:r,href:i}=T.j1.formatNativeUrl(e,this.uri);T.ConnectionController.setWcLinking({name:t,href:i}),T.ConnectionController.setRecentWallet(this.wallet),T.j1.openHref(r,"_self")}catch{this.error=!0}}onBuffering(){let e=T.j1.isIos();document?.visibilityState==="visible"&&!this.error&&e&&(T.ConnectionController.setBuffering(!0),setTimeout(()=>{T.ConnectionController.setBuffering(!1)},5e3))}};ej=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,$.customElement)("w3m-connecting-wc-mobile")],ej);let eL=I.iv`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`,eB=class extends en{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),T.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),I.dy`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-link>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return T.ConnectionController.setWcLinking(void 0),T.ConnectionController.setRecentWallet(this.wallet),I.dy`<wui-qr-code
      size=${e}
      theme=${T.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${M(T.fz.getWalletImage(this.wallet))}
      alt=${M(t)}
    ></wui-qr-code>`}};eB.styles=eL,eB=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,$.customElement)("w3m-connecting-wc-qrcode")],eB);let eU=I.iv`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`,eF=class extends I.oi{constructor(){super(...arguments),this.dappImageUrl=T.OptionsController.state.metadata?.icons,this.walletImageUrl=T.MO.getConnectedWalletImageUrl()}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return I.dy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};eF.styles=eU,eF=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,$.customElement)("w3m-connecting-siwe")],eF);let eW=class extends I.oi{constructor(){if(super(),this.wallet=T.RouterController.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");T.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return I.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${M(T.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};eW=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,$.customElement)("w3m-connecting-wc-unsupported")],eW);let ez=class extends en{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",T.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:r,href:i}=T.j1.formatUniversalUrl(e,this.uri);T.ConnectionController.setWcLinking({name:t,href:i}),T.ConnectionController.setRecentWallet(this.wallet),T.j1.openHref(r,"_blank")}catch{this.error=!0}}};ez=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,$.customElement)("w3m-connecting-wc-web")],ez);let eH=I.iv`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var eq=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};function eG(){let e=T.RouterController.state.data?.connector?.name,t=T.RouterController.state.data?.wallet?.name,r=T.RouterController.state.data?.network?.name,i=t??e;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:i??"Connect Wallet",ConnectingWalletConnect:i??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:r??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a Wallet",Downloads:i?`Get ${i}`:"Downloads",Transactions:"Activity"}}let eV=class extends I.oi{constructor(){super(),this.unsubscribe=[],this.heading=eG()[T.RouterController.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(T.RouterController.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),T.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return I.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${T.IN.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){T.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),T.RouterController.push("WhatIsAWallet")}titleTemplate(){return I.dy`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){let{view:e}=T.RouterController.state;return this.showBack?I.dy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${T.RouterController.goBack}
      ></wui-icon-link>`:I.dy`<wui-icon-link
      data-hidden=${"Connect"!==e}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?I.dy`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){let t=this.shadowRoot?.querySelector("wui-text");if(t){let r=eG()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=r,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){let{history:e}=T.RouterController.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};eV.styles=[eH],eq([(0,N.SB)()],eV.prototype,"heading",void 0),eq([(0,N.SB)()],eV.prototype,"buffering",void 0),eq([(0,N.SB)()],eV.prototype,"showBack",void 0),eV=eq([(0,$.customElement)("w3m-header")],eV);var eZ=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eK=class extends I.oi{constructor(){super(...arguments),this.data=[]}render(){return I.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>I.dy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(e=>I.dy`<wui-visual name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};eZ([(0,N.Cb)({type:Array})],eK.prototype,"data",void 0),eK=eZ([(0,$.customElement)("w3m-help-widget")],eK);let eY=I.iv`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`,eQ=class extends I.oi{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=T.OptionsController.state;return e||t?I.dy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=T.OptionsController.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=T.OptionsController.state;return e?I.dy`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=T.OptionsController.state;return e?I.dy`<a href=${e}>Privacy Policy</a>`:null}};eQ.styles=[eY],eQ=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,$.customElement)("w3m-legal-footer")],eQ);let eX=I.iv`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var eJ=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let e0=class extends I.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:e,app_store:t,play_store:r,chrome_store:i,homepage:n}=this.wallet,o=T.j1.isMobile(),a=T.j1.isIos(),s=T.j1.isAndroid(),l=[t,r,n,i].filter(Boolean).length>1,c=$.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return l&&!o?I.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${()=>T.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&n?I.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&a?I.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&s?I.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&T.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&T.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&T.j1.openHref(this.wallet.homepage,"_blank")}};e0.styles=[eX],eJ([(0,N.Cb)({type:Object})],e0.prototype,"wallet",void 0),e0=eJ([(0,$.customElement)("w3m-mobile-download-links")],e0);let e1=I.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`;var e2=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let e3={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}},e5=class extends I.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=T.SnackController.state.open,this.unsubscribe.push(T.SnackController.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=T.SnackController.state,r=e3[t];return I.dy`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>T.SnackController.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};e5.styles=e1,e2([(0,N.SB)()],e5.prototype,"open",void 0),e5=e2([(0,$.customElement)("w3m-snackbar")],e5);let e4=!1;class e6{constructor(e){this.initPromise=void 0,this.setIsConnected=e=>{T.AccountController.setIsConnected(e)},this.setCaipAddress=e=>{T.AccountController.setCaipAddress(e)},this.setBalance=(e,t)=>{T.AccountController.setBalance(e,t)},this.setProfileName=e=>{T.AccountController.setProfileName(e)},this.setProfileImage=e=>{T.AccountController.setProfileImage(e)},this.resetAccount=()=>{T.AccountController.resetAccount()},this.setCaipNetwork=e=>{T.NetworkController.setCaipNetwork(e)},this.getCaipNetwork=()=>T.NetworkController.state.caipNetwork,this.setRequestedCaipNetworks=e=>{T.NetworkController.setRequestedCaipNetworks(e)},this.getApprovedCaipNetworksData=()=>T.NetworkController.getApprovedCaipNetworksData(),this.resetNetwork=()=>{T.NetworkController.resetNetwork()},this.setConnectors=e=>{T.ConnectorController.setConnectors(e)},this.addConnector=e=>{T.ConnectorController.addConnector(e)},this.getConnectors=()=>T.ConnectorController.getConnectors(),this.resetWcConnection=()=>{T.ConnectionController.resetWcConnection()},this.fetchIdentity=e=>T.Lr.fetchIdentity(e),this.setAddressExplorerUrl=e=>{T.AccountController.setAddressExplorerUrl(e)},this.setSIWENonce=e=>{T.yD.setNonce(e)},this.setSIWESession=e=>{T.yD.setSession(e)},this.setSIWEStatus=e=>{T.yD.setStatus(e)},this.setSIWEMessage=e=>{T.yD.setMessage(e)},this.getSIWENonce=()=>T.yD.state.nonce,this.getSIWESession=()=>T.yD.state.session,this.getSIWEStatus=()=>T.yD.state.status,this.getSIWEMessage=()=>T.yD.state.message,this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),T.IN.open(e)}async close(){await this.initOrContinue(),T.IN.close()}getThemeMode(){return T.ThemeController.state.themeMode}getThemeVariables(){return T.ThemeController.state.themeVariables}setThemeMode(e){T.ThemeController.setThemeMode(e),(0,$.setColorTheme)(T.ThemeController.state.themeMode)}setThemeVariables(e){T.ThemeController.setThemeVariables(e),(0,$.setThemeVariables)(T.ThemeController.state.themeVariables)}subscribeTheme(e){return T.ThemeController.subscribe(e)}getState(){return{...T.Ie.state}}subscribeState(e){return T.Ie.subscribe(e)}getEvent(){return{...T.Xs.state}}subscribeEvents(e){return T.Xs.subscribe(e)}subscribeSIWEState(e){return T.yD.subscribe(e)}initControllers(e){T.NetworkController.setClient(e.networkControllerClient),T.NetworkController.setDefaultCaipNetwork(e.defaultChain),T.OptionsController.setProjectId(e.projectId),T.OptionsController.setIncludeWalletIds(e.includeWalletIds),T.OptionsController.setExcludeWalletIds(e.excludeWalletIds),T.OptionsController.setFeaturedWalletIds(e.featuredWalletIds),T.OptionsController.setTokens(e.tokens),T.OptionsController.setTermsConditionsUrl(e.termsConditionsUrl),T.OptionsController.setPrivacyPolicyUrl(e.privacyPolicyUrl),T.OptionsController.setCustomWallets(e.customWallets),T.OptionsController.setEnableAnalytics(e.enableAnalytics),T.OptionsController.setSdkVersion(e._sdkVersion),T.ConnectionController.setClient(e.connectionControllerClient),e.siweControllerClient&&T.yD.setSIWEClient(e.siweControllerClient),e.metadata&&T.OptionsController.setMetadata(e.metadata),e.themeMode&&T.ThemeController.setThemeMode(e.themeMode),e.themeVariables&&T.ThemeController.setThemeVariables(e.themeVariables)}async initOrContinue(){return!this.initPromise&&!e4&&T.j1.isClient()&&(e4=!0,this.initPromise=new Promise(async e=>{await Promise.all([Promise.resolve().then(r.bind(r,95270)),Promise.resolve().then(r.bind(r,10468))]);let t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),e()})),this.initPromise}}let e8={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",VERSION:"3.3.2"},e9={ConnectorExplorerIds:{[e8.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[e8.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[e8.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},ConnectorImageIds:{[e8.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[e8.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[e8.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[e8.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[e8.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[e8.INJECTED_CONNECTOR_ID]:"Browser Wallet",[e8.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[e8.COINBASE_CONNECTOR_ID]:"Coinbase",[e8.LEDGER_CONNECTOR_ID]:"Ledger",[e8.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[e8.INJECTED_CONNECTOR_ID]:"INJECTED",[e8.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[e8.EIP6963_CONNECTOR_ID]:"ANNOUNCED"}},e7={caipNetworkIdToNumber:e=>e?Number(e.split(":")[1]):void 0,getCaipTokens(e){if(!e)return;let t={};return Object.entries(e).forEach(([e,r])=>{t[`${e8.EIP155}:${e}`]=r}),t}};class te extends e6{constructor(e){let{wagmiConfig:t,siweConfig:r,chains:i,defaultChain:n,tokens:o,_sdkVersion:a,...s}=e;if(!t)throw Error("web3modal:constructor - wagmiConfig is undefined");if(!s.projectId)throw Error("web3modal:constructor - projectId is undefined");if(!t.connectors.find(e=>e.id===e8.WALLET_CONNECT_CONNECTOR_ID))throw Error("web3modal:constructor - WalletConnectConnector is required");let l={connectWalletConnect:async e=>{let r=t.connectors.find(e=>e.id===e8.WALLET_CONNECT_CONNECTOR_ID);if(!r)throw Error("connectionControllerClient:getWalletConnectUri - connector is undefined");r.on("message",t=>{"display_uri"===t.type&&(e(t.data),r.removeAllListeners())});let i=e7.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await (0,P.$j)({connector:r,chainId:i})},connectExternal:async({id:e,provider:r,info:i})=>{let n=t.connectors.find(t=>t.id===e);if(!n)throw Error("connectionControllerClient:connectExternal - connector is undefined");r&&i&&n.id===e8.EIP6963_CONNECTOR_ID&&n.setEip6963Wallet?.({provider:r,info:i});let o=e7.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await (0,P.$j)({connector:n,chainId:o})},checkInstalled:e=>{let t=this.getConnectors().filter(e=>"ANNOUNCED"===e.type),r=this.getConnectors().find(e=>"INJECTED"===e.type);if(!e)return!!window.ethereum;if(t.length){let r=e.some(e=>t.some(t=>t.info?.rdns===e));if(r)return!0}return!!r&&!!window?.ethereum&&e.some(e=>!!window.ethereum?.[String(e)])},disconnect:P.zP};super({networkControllerClient:{switchCaipNetwork:async e=>{let t=e7.caipNetworkIdToNumber(e?.id);t&&await (0,P.If)({chainId:t})},async getApprovedCaipNetworksData(){let e=localStorage.getItem("wagmi.wallet");if(e?.includes(e8.WALLET_CONNECT_CONNECTOR_ID)){let e=t.connectors.find(e=>e.id===e8.WALLET_CONNECT_CONNECTOR_ID);if(!e)throw Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");let r=await e.getProvider(),i=r.signer?.session?.namespaces,n=i?.[e8.EIP155]?.methods,o=i?.[e8.EIP155]?.chains;return{supportsAllNetworks:n?.includes(e8.ADD_CHAIN_METHOD),approvedCaipNetworkIds:o}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},connectionControllerClient:l,siweControllerClient:r,defaultChain:function(e){if(e)return{id:`${e8.EIP155}:${e.id}`,name:e.name,imageId:e9.EIP155NetworkImageIds[e.id]}}(n),tokens:e7.getCaipTokens(o),_sdkVersion:a??`html-wagmi-${e8.VERSION}`,...s}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.syncRequestedNetworks(i),this.syncConnectors(t),this.listenConnectors(t),(0,P.uH)(()=>this.syncAccount()),(0,P.QC)(()=>this.syncNetwork())}getState(){let e=super.getState();return{...e,selectedNetworkId:e7.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(t=>e({...t,selectedNetworkId:e7.caipNetworkIdToNumber(t.selectedNetworkId)}))}syncRequestedNetworks(e){let t=e?.map(e=>({id:`${e8.EIP155}:${e.id}`,name:e.name,imageId:e9.EIP155NetworkImageIds[e.id],imageUrl:this.options?.chainImages?.[e.id]}));this.setRequestedCaipNetworks(t??[])}async syncAccount(){let{address:e,isConnected:t}=(0,P.D0)(),{chain:r}=(0,P.Hy)();if(this.resetAccount(),t&&e&&r){let i=`${e8.EIP155}:${r.id}:${e}`;this.setIsConnected(t),this.setCaipAddress(i),await Promise.all([this.syncProfile(e),this.syncBalance(e,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!t&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){let{address:e,isConnected:t}=(0,P.D0)(),{chain:r}=(0,P.Hy)();if(r){let i=String(r.id),n=`${e8.EIP155}:${i}`;if(this.setCaipNetwork({id:n,name:r.name,imageId:e9.EIP155NetworkImageIds[r.id],imageUrl:this.options?.chainImages?.[r.id]}),t&&e){let t=`${e8.EIP155}:${r.id}:${e}`;if(this.setCaipAddress(t),r.blockExplorers?.default?.url){let t=`${r.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(t)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&await this.syncBalance(e,r)}}}async syncProfile(e){try{let{name:t,avatar:r}=await this.fetchIdentity({caipChainId:`${e8.EIP155}:${A.R.id}`,address:e});this.setProfileName(t),this.setProfileImage(r)}catch{let t=await (0,P.Lk)({address:e,chainId:A.R.id});if(t){this.setProfileName(t);let e=await (0,P.w6)({name:t,chainId:A.R.id});e&&this.setProfileImage(e)}}}async syncBalance(e,t){let r=await (0,P.EG)({address:e,chainId:t.id,token:this.options?.tokens?.[t.id]?.address});this.setBalance(r.formatted,r.symbol)}syncConnectors(e){let t=[];e.connectors.forEach(({id:e,name:r})=>{e!==e8.EIP6963_CONNECTOR_ID&&t.push({id:e,explorerId:e9.ConnectorExplorerIds[e],imageId:e9.ConnectorImageIds[e],imageUrl:this.options?.connectorImages?.[e],name:e9.ConnectorNamesMap[e]??r,type:e9.ConnectorTypesMap[e]??"EXTERNAL"})}),this.setConnectors(t)}eip6963EventHandler(e,t){if(t.detail){let{info:r,provider:i}=t.detail,n=this.getConnectors(),o=n.find(e=>e.name===r.name);o||(this.addConnector({id:e8.EIP6963_CONNECTOR_ID,type:"ANNOUNCED",imageUrl:r.icon??this.options?.connectorImages?.[e8.EIP6963_CONNECTOR_ID],name:r.name,provider:i,info:r}),e.isAuthorized({info:r,provider:i}))}}listenConnectors(e){e.connectors.find(e=>e.id===e8.EIP6963_CONNECTOR_ID)}}var tt=r(32526),tr=function(e,t,r,i,n){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!n)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?n.call(e,r):n?n.value=r:t.set(e,r),r},ti=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};let tn="connectedRdns";class to extends tt._{constructor(e){super({chains:e.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",a.set(this,void 0),s.set(this,void 0),tr(this,a,this.options.getProvider(),"f")}async connect(e){let t=await super.connect(e);return ti(this,s,"f")&&this.storage?.setItem(tn,ti(this,s,"f").info.rdns),t}async disconnect(){await super.disconnect(),this.storage?.removeItem(tn),tr(this,s,void 0,"f")}async isAuthorized(e){let t=this.storage?.getItem(tn);if(t){if(!e||t!==e.info.rdns)return!0;tr(this,s,e,"f")}return super.isAuthorized()}async getProvider(){return Promise.resolve(ti(this,s,"f")?.provider??ti(this,a,"f"))}setEip6963Wallet(e){tr(this,s,e,"f")}}a=new WeakMap,s=new WeakMap,r(14300);var ta=r(21799),ts=r(66581),tl=r(84811),tc=r(73695),tu=r(22102),th=r(20997),td=r(61026),tf=r(78461),tp=r(49226),tg=class extends tc.wR{constructor({chains:e,options:t}){super({chains:e,options:{reloadOnDisconnect:!1,...t}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,(0,tc.Ko)(this,l,void 0),(0,tc.Ko)(this,c,void 0),this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,tu.K)(e[0])})},this.onChainChanged=e=>{let t=(0,tl.J)(e),r=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:r}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:e}={}){try{let t=await this.getProvider();t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});let r=await t.enable(),i=(0,tu.K)(r[0]),n=await this.getChainId(),o=this.isChainUnsupported(n);if(e&&n!==e){let t=await this.switchChain(e);n=t.id,o=this.isChainUnsupported(n)}return{account:i,chain:{id:n,unsupported:o}}}catch(e){if(/(user closed modal|accounts received is empty)/i.test(e.message))throw new th.ab(e);throw e}}async disconnect(){if(!(0,tc.ac)(this,c))return;let e=await this.getProvider();e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),e.disconnect(),e.close()}async getAccount(){let e=await this.getProvider(),t=await e.request({method:"eth_accounts"});return(0,tu.K)(t[0])}async getChainId(){let e=await this.getProvider(),t=(0,tl.J)(e.chainId);return t}async getProvider(){if(!(0,tc.ac)(this,c)){let e=(await r.e(235).then(r.t.bind(r,82235,19))).default;"function"!=typeof e&&"function"==typeof e.default&&(e=e.default),(0,tc.qx)(this,l,new e(this.options));let t=tc.ac(this,l).walletExtension?.getChainId(),i=this.chains.find(e=>this.options.chainId?e.id===this.options.chainId:e.id===t)||this.chains[0],n=this.options.chainId||i?.id,o=this.options.jsonRpcUrl||i?.rpcUrls.default.http[0];(0,tc.qx)(this,c,(0,tc.ac)(this,l).makeWeb3Provider(o,n))}return(0,tc.ac)(this,c)}async getWalletClient({chainId:e}={}){let[t,r]=await Promise.all([this.getProvider(),this.getAccount()]),i=this.chains.find(t=>t.id===e);if(!t)throw Error("provider is required.");return(0,td.K)({account:r,chain:i,transport:(0,tf.P)(t)})}async isAuthorized(){try{let e=await this.getAccount();return!!e}catch{return!1}}async switchChain(e){let t=await this.getProvider(),r=(0,tp.eC)(e);try{return await t.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),this.chains.find(t=>t.id===e)??{id:e,name:`Chain ${r}`,network:`${r}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(n){let i=this.chains.find(t=>t.id===e);if(!i)throw new ts.B({chainId:e,connectorId:this.id});if(4902===n.code)try{return await t.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:i.name,nativeCurrency:i.nativeCurrency,rpcUrls:[i.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(i)}]}),i}catch(e){throw new th.ab(e)}throw new th.x3(n)}}async watchAsset({address:e,decimals:t=18,image:r,symbol:i}){let n=await this.getProvider();return n.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:r,symbol:i}}})}};l=new WeakMap,c=new WeakMap;var tm=r(19744),tb="eip155",tw="requestedChains",ty="wallet_addEthereumChain",tv=class extends tc.wR{constructor(e){super({...e,options:{isNewChainsStale:!0,...e.options}}),(0,tc.Ko)(this,d),(0,tc.Ko)(this,p),(0,tc.Ko)(this,g),(0,tc.Ko)(this,b),(0,tc.Ko)(this,y),(0,tc.Ko)(this,x),(0,tc.Ko)(this,_),(0,tc.Ko)(this,k),(0,tc.Ko)(this,O),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,(0,tc.Ko)(this,u,void 0),(0,tc.Ko)(this,h,void 0),this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,tu.K)(e[0])})},this.onChainChanged=e=>{let t=Number(e),r=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:r}})},this.onDisconnect=()=>{(0,tc.U9)(this,x,C).call(this,[]),this.emit("disconnect")},this.onDisplayUri=e=>{this.emit("message",{type:"display_uri",data:e})},this.onConnect=()=>{this.emit("connect",{})},(0,tc.U9)(this,d,f).call(this)}async connect({chainId:e,pairingTopic:t}={}){try{let r=e;if(!r){let e=this.storage?.getItem("store"),t=e?.state?.data?.chain?.id;r=t&&!this.isChainUnsupported(t)?t:this.chains[0]?.id}if(!r)throw Error("No chains found on connector.");let i=await this.getProvider();(0,tc.U9)(this,b,w).call(this);let n=(0,tc.U9)(this,g,m).call(this);if(i.session&&n&&await i.disconnect(),!i.session||n){let e=this.chains.filter(e=>e.id!==r).map(e=>e.id);this.emit("message",{type:"connecting"}),await i.connect({pairingTopic:t,chains:[r],optionalChains:e.length?e:void 0}),(0,tc.U9)(this,x,C).call(this,this.chains.map(({id:e})=>e))}let o=await i.enable(),a=(0,tu.K)(o[0]),s=await this.getChainId(),l=this.isChainUnsupported(s);return{account:a,chain:{id:s,unsupported:l}}}catch(e){if(/user rejected/i.test(e?.message))throw new th.ab(e);throw e}}async disconnect(){let e=await this.getProvider();try{await e.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{(0,tc.U9)(this,y,v).call(this),(0,tc.U9)(this,x,C).call(this,[])}}async getAccount(){let{accounts:e}=await this.getProvider();return(0,tu.K)(e[0])}async getChainId(){let{chainId:e}=await this.getProvider();return e}async getProvider({chainId:e}={}){return(0,tc.ac)(this,u)||await (0,tc.U9)(this,d,f).call(this),e&&await this.switchChain(e),(0,tc.ac)(this,u)}async getWalletClient({chainId:e}={}){let[t,r]=await Promise.all([this.getProvider({chainId:e}),this.getAccount()]),i=this.chains.find(t=>t.id===e);if(!t)throw Error("provider is required.");return(0,td.K)({account:r,chain:i,transport:(0,tf.P)(t)})}async isAuthorized(){try{let[e,t]=await Promise.all([this.getAccount(),this.getProvider()]),r=(0,tc.U9)(this,g,m).call(this);if(!e)return!1;if(r&&t.session){try{await t.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(e){let t=this.chains.find(t=>t.id===e);if(!t)throw new th.x3(Error("chain not found on connector."));try{let r=await this.getProvider(),i=(0,tc.U9)(this,k,S).call(this),n=(0,tc.U9)(this,O,D).call(this),o=i.includes(e);if(!o&&n.includes(ty)){await r.request({method:ty,params:[{chainId:(0,tp.eC)(t.id),blockExplorerUrls:[t.blockExplorers?.default?.url],chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[...t.rpcUrls.default.http]}]});let i=(0,tc.U9)(this,_,E).call(this);i.push(e),(0,tc.U9)(this,x,C).call(this,i)}return await r.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,tp.eC)(e)}]}),t}catch(t){let e="string"==typeof t?t:t?.message;if(/user rejected request/i.test(e))throw new th.ab(t);throw new th.x3(t)}}};u=new WeakMap,h=new WeakMap,d=new WeakSet,f=async function(){return(0,tc.ac)(this,h),(0,tc.ac)(this,h)},p=new WeakSet,g=new WeakSet,m=function(){let e=(0,tc.U9)(this,O,D).call(this);if(e.includes(ty)||!this.options.isNewChainsStale)return!1;let t=(0,tc.U9)(this,_,E).call(this),r=this.chains.map(({id:e})=>e),i=(0,tc.U9)(this,k,S).call(this);return(!i.length||!!i.some(e=>r.includes(e)))&&!r.every(e=>t.includes(e))},b=new WeakSet,w=function(){(0,tc.ac)(this,u)&&((0,tc.U9)(this,y,v).call(this),(0,tc.ac)(this,u).on("accountsChanged",this.onAccountsChanged),(0,tc.ac)(this,u).on("chainChanged",this.onChainChanged),(0,tc.ac)(this,u).on("disconnect",this.onDisconnect),(0,tc.ac)(this,u).on("session_delete",this.onDisconnect),(0,tc.ac)(this,u).on("display_uri",this.onDisplayUri),(0,tc.ac)(this,u).on("connect",this.onConnect))},y=new WeakSet,v=function(){(0,tc.ac)(this,u)&&((0,tc.ac)(this,u).removeListener("accountsChanged",this.onAccountsChanged),(0,tc.ac)(this,u).removeListener("chainChanged",this.onChainChanged),(0,tc.ac)(this,u).removeListener("disconnect",this.onDisconnect),(0,tc.ac)(this,u).removeListener("session_delete",this.onDisconnect),(0,tc.ac)(this,u).removeListener("display_uri",this.onDisplayUri),(0,tc.ac)(this,u).removeListener("connect",this.onConnect))},x=new WeakSet,C=function(e){this.storage?.setItem(tw,e)},_=new WeakSet,E=function(){return this.storage?.getItem(tw)??[]},k=new WeakSet,S=function(){if(!(0,tc.ac)(this,u))return[];let e=tc.ac(this,u).session?.namespaces;if(!e)return[];let t=(0,tm.fK)(e),r=t[tb]?.chains?.map(e=>parseInt(e.split(":")[1]||""));return r??[]},O=new WeakSet,D=function(){if(!(0,tc.ac)(this,u))return[];let e=tc.ac(this,u).session?.namespaces;if(!e)return[];let t=(0,tm.fK)(e),r=t[tb]?.methods;return r??[]};let tx=T.j1.getBlockchainApiUrl();function tC({projectId:e,chains:t,metadata:r}){let{publicClient:i}=(0,P.QB)(t,[function({projectId:e}){return function(t){if(![1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280].includes(t.id))return null;let r=`${tx}/v1/?chainId=${e8.EIP155}:${t.id}&projectId=${e}`;return{chain:{...t,rpcUrls:{...t.rpcUrls,default:{http:[r]}}},rpcUrls:{http:[r]}}}}({projectId:e}),function(e){return e.rpcUrls.public.http[0]?{chain:e,rpcUrls:e.rpcUrls.public}:null}]);return(0,ta._g)({autoConnect:!0,connectors:[new tv({chains:t,options:{projectId:e,showQrModal:!1,metadata:r}}),new to({chains:t}),new tt._({chains:t,options:{shimDisconnect:!0}}),new tg({chains:t,options:{appName:r?.name??"Unknown"}})],publicClient:i})}function t_(e){return!n&&(i=n=new te({...e,_sdkVersion:`react-wagmi-${e8.VERSION}`})),n}},65800:(e,t,r)=>{"use strict";r.d(t,{E:()=>n});var i=r(97857);function n(e=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?(0,i.P)(globalThis.Buffer.allocUnsafe(e)):new Uint8Array(e)}},71184:(e,t,r)=>{"use strict";r.d(t,{z:()=>o});var i=r(65800),n=r(97857);function o(e,t){t||(t=e.reduce((e,t)=>e+t.length,0));let r=(0,i.E)(t),o=0;for(let t of e)r.set(t,o),o+=t.length;return(0,n.P)(r)}},18447:(e,t,r)=>{"use strict";r.d(t,{m:()=>o});var i=r(77776),n=r(97857);function o(e,t="utf8"){let r=i.Z[t];if(!r)throw Error(`Unsupported encoding "${t}"`);return("utf8"===t||"utf-8"===t)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?(0,n.P)(globalThis.Buffer.from(e,"utf-8")):r.decoder.decode(`${r.prefix}${e}`)}},97027:(e,t,r)=>{"use strict";r.d(t,{BB:()=>o.B,mL:()=>n.m,zo:()=>i.z});var i=r(71184),n=r(18447),o=r(1916)},1916:(e,t,r)=>{"use strict";r.d(t,{B:()=>n});var i=r(77776);function n(e,t="utf8"){let r=i.Z[t];if(!r)throw Error(`Unsupported encoding "${t}"`);return("utf8"===t||"utf-8"===t)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?globalThis.Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("utf8"):r.encoder.encode(e).substring(1)}},97857:(e,t,r)=>{"use strict";function i(e){return null!=globalThis.Buffer?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e}r.d(t,{P:()=>i})},77776:(e,t,r)=>{"use strict";r.d(t,{Z:()=>eV});var i={};r.r(i),r.d(i,{identity:()=>$});var n={};r.r(n),r.d(n,{base2:()=>I});var o={};r.r(o),r.d(o,{base8:()=>N});var a={};r.r(a),r.d(a,{base10:()=>R});var s={};r.r(s),r.d(s,{base16:()=>M,base16upper:()=>j});var l={};r.r(l),r.d(l,{base32:()=>L,base32hex:()=>W,base32hexpad:()=>H,base32hexpadupper:()=>q,base32hexupper:()=>z,base32pad:()=>U,base32padupper:()=>F,base32upper:()=>B,base32z:()=>G});var c={};r.r(c),r.d(c,{base36:()=>V,base36upper:()=>Z});var u={};r.r(u),r.d(u,{base58btc:()=>K,base58flickr:()=>Y});var h={};r.r(h),r.d(h,{base64:()=>Q,base64pad:()=>X,base64url:()=>J,base64urlpad:()=>ee});var d={};r.r(d),r.d(d,{base256emoji:()=>en});var f={};r.r(f),r.d(f,{sha256:()=>em,sha512:()=>eb});var p={};r.r(p),r.d(p,{identity:()=>ew});var g={};r.r(g),r.d(g,{code:()=>ev,decode:()=>eC,encode:()=>ex,name:()=>ey});var m={};r.r(m),r.d(m,{code:()=>eS,decode:()=>eD,encode:()=>eO,name:()=>ek});let b=function(e,t){if(e.length>=255)throw TypeError("Alphabet too long");for(var r=new Uint8Array(256),i=0;i<r.length;i++)r[i]=255;for(var n=0;n<e.length;n++){var o=e.charAt(n),a=o.charCodeAt(0);if(255!==r[a])throw TypeError(o+" is ambiguous");r[a]=n}var s=e.length,l=e.charAt(0),c=Math.log(s)/Math.log(256),u=Math.log(256)/Math.log(s);function h(e){if("string"!=typeof e)throw TypeError("Expected String");if(0===e.length)return new Uint8Array;var t=0;if(" "!==e[0]){for(var i=0,n=0;e[t]===l;)i++,t++;for(var o=(e.length-t)*c+1>>>0,a=new Uint8Array(o);e[t];){var u=r[e.charCodeAt(t)];if(255===u)return;for(var h=0,d=o-1;(0!==u||h<n)&&-1!==d;d--,h++)u+=s*a[d]>>>0,a[d]=u%256>>>0,u=u/256>>>0;if(0!==u)throw Error("Non-zero carry");n=h,t++}if(" "!==e[t]){for(var f=o-n;f!==o&&0===a[f];)f++;for(var p=new Uint8Array(i+(o-f)),g=i;f!==o;)p[g++]=a[f++];return p}}}return{encode:function(t){if(t instanceof Uint8Array||(ArrayBuffer.isView(t)?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):Array.isArray(t)&&(t=Uint8Array.from(t))),!(t instanceof Uint8Array))throw TypeError("Expected Uint8Array");if(0===t.length)return"";for(var r=0,i=0,n=0,o=t.length;n!==o&&0===t[n];)n++,r++;for(var a=(o-n)*u+1>>>0,c=new Uint8Array(a);n!==o;){for(var h=t[n],d=0,f=a-1;(0!==h||d<i)&&-1!==f;f--,d++)h+=256*c[f]>>>0,c[f]=h%s>>>0,h=h/s>>>0;if(0!==h)throw Error("Non-zero carry");i=d,n++}for(var p=a-i;p!==a&&0===c[p];)p++;for(var g=l.repeat(r);p<a;++p)g+=e.charAt(c[p]);return g},decodeUnsafe:h,decode:function(e){var r=h(e);if(r)return r;throw Error(`Non-${t} character`)}}};new Uint8Array(0);let w=(e,t)=>{if(e===t)return!0;if(e.byteLength!==t.byteLength)return!1;for(let r=0;r<e.byteLength;r++)if(e[r]!==t[r])return!1;return!0},y=e=>{if(e instanceof Uint8Array&&"Uint8Array"===e.constructor.name)return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw Error("Unknown type, must be binary type")},v=e=>new TextEncoder().encode(e),x=e=>new TextDecoder().decode(e);class C{constructor(e,t,r){this.name=e,this.prefix=t,this.baseEncode=r}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class _{constructor(e,t,r){if(this.name=e,this.prefix=t,void 0===t.codePointAt(0))throw Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=r}decode(e){if("string"==typeof e){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(e){return k(this,e)}}class E{constructor(e){this.decoders=e}or(e){return k(this,e)}decode(e){let t=e[0],r=this.decoders[t];if(r)return r.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}let k=(e,t)=>new E({...e.decoders||{[e.prefix]:e},...t.decoders||{[t.prefix]:t}});class S{constructor(e,t,r,i){this.name=e,this.prefix=t,this.baseEncode=r,this.baseDecode=i,this.encoder=new C(e,t,r),this.decoder=new _(e,t,i)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}let O=({name:e,prefix:t,encode:r,decode:i})=>new S(e,t,r,i),D=({prefix:e,name:t,alphabet:r})=>{let{encode:i,decode:n}=b(r,t);return O({prefix:e,name:t,encode:i,decode:e=>y(n(e))})},P=(e,t,r,i)=>{let n={};for(let e=0;e<t.length;++e)n[t[e]]=e;let o=e.length;for(;"="===e[o-1];)--o;let a=new Uint8Array(o*r/8|0),s=0,l=0,c=0;for(let t=0;t<o;++t){let o=n[e[t]];if(void 0===o)throw SyntaxError(`Non-${i} character`);l=l<<r|o,(s+=r)>=8&&(s-=8,a[c++]=255&l>>s)}if(s>=r||255&l<<8-s)throw SyntaxError("Unexpected end of data");return a},A=(e,t,r)=>{let i="="===t[t.length-1],n=(1<<r)-1,o="",a=0,s=0;for(let i=0;i<e.length;++i)for(s=s<<8|e[i],a+=8;a>r;)a-=r,o+=t[n&s>>a];if(a&&(o+=t[n&s<<r-a]),i)for(;o.length*r&7;)o+="=";return o},T=({name:e,prefix:t,bitsPerChar:r,alphabet:i})=>O({prefix:t,name:e,encode:e=>A(e,i,r),decode:t=>P(t,i,r,e)}),$=O({prefix:"\x00",name:"identity",encode:e=>x(e),decode:e=>v(e)}),I=T({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),N=T({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),R=D({prefix:"9",name:"base10",alphabet:"0123456789"}),M=T({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),j=T({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),L=T({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),B=T({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),U=T({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),F=T({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),W=T({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),z=T({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),H=T({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),q=T({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),G=T({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),V=D({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),Z=D({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),K=D({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),Y=D({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),Q=T({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),X=T({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),J=T({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),ee=T({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),et=Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),er=et.reduce((e,t,r)=>(e[r]=t,e),[]),ei=et.reduce((e,t,r)=>(e[t.codePointAt(0)]=r,e),[]),en=O({prefix:"\uD83D\uDE80",name:"base256emoji",encode:function(e){return e.reduce((e,t)=>e+=er[t],"")},decode:function(e){let t=[];for(let r of e){let e=ei[r.codePointAt(0)];if(void 0===e)throw Error(`Non-base256emoji character: ${r}`);t.push(e)}return new Uint8Array(t)}});var eo=r(6113);let ea={encode:function e(t,r,i){r=r||[];for(var n=i=i||0;t>=2147483648;)r[i++]=255&t|128,t/=128;for(;-128&t;)r[i++]=255&t|128,t>>>=7;return r[i]=0|t,e.bytes=i-n+1,r},decode:function e(t,r){var i,n=0,r=r||0,o=0,a=r,s=t.length;do{if(a>=s)throw e.bytes=0,RangeError("Could not decode varint");i=t[a++],n+=o<28?(127&i)<<o:(127&i)*Math.pow(2,o),o+=7}while(i>=128);return e.bytes=a-r,n},encodingLength:function(e){return e<128?1:e<16384?2:e<2097152?3:e<268435456?4:e<34359738368?5:e<4398046511104?6:e<562949953421312?7:e<72057594037927940?8:e<0x7fffffffffffffff?9:10}},es=(e,t=0)=>{let r=ea.decode(e,t);return[r,ea.decode.bytes]},el=(e,t,r=0)=>(ea.encode(e,t,r),t),ec=e=>ea.encodingLength(e),eu=(e,t)=>{let r=t.byteLength,i=ec(e),n=i+ec(r),o=new Uint8Array(n+r);return el(e,o,0),el(r,o,i),o.set(t,n),new ef(e,r,t,o)},eh=e=>{let t=y(e),[r,i]=es(t),[n,o]=es(t.subarray(i)),a=t.subarray(i+o);if(a.byteLength!==n)throw Error("Incorrect length");return new ef(r,n,a,t)},ed=(e,t)=>e===t||e.code===t.code&&e.size===t.size&&w(e.bytes,t.bytes);class ef{constructor(e,t,r,i){this.code=e,this.size=t,this.digest=r,this.bytes=i}}let ep=({name:e,code:t,encode:r})=>new eg(e,t,r);class eg{constructor(e,t,r){this.name=e,this.code=t,this.encode=r}digest(e){if(e instanceof Uint8Array){let t=this.encode(e);return t instanceof Uint8Array?eu(this.code,t):t.then(e=>eu(this.code,e))}throw Error("Unknown type, must be binary type")}}let em=ep({name:"sha2-256",code:18,encode:e=>y(eo.createHash("sha256").update(e).digest())}),eb=ep({name:"sha2-512",code:19,encode:e=>y(eo.createHash("sha512").update(e).digest())}),ew={code:0,name:"identity",encode:y,digest:e=>eu(0,y(e))},ey="raw",ev=85,ex=e=>y(e),eC=e=>y(e),e_=new TextEncoder,eE=new TextDecoder,ek="json",eS=512,eO=e=>e_.encode(JSON.stringify(e)),eD=e=>JSON.parse(eE.decode(e));class eP{constructor(e,t,r,i){this.code=t,this.version=e,this.multihash=r,this.bytes=i,this.byteOffset=i.byteOffset,this.byteLength=i.byteLength,this.asCID=this,this._baseCache=new Map,Object.defineProperties(this,{byteOffset:eL,byteLength:eL,code:ej,version:ej,multihash:ej,bytes:ej,_baseCache:eL,asCID:eL})}toV0(){if(0===this.version)return this;{let{code:e,multihash:t}=this;if(e!==eI)throw Error("Cannot convert a non dag-pb CID to CIDv0");if(t.code!==eN)throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");return eP.createV0(t)}}toV1(){switch(this.version){case 0:{let{code:e,digest:t}=this.multihash,r=eu(e,t);return eP.createV1(this.code,r)}case 1:return this;default:throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)}}equals(e){return e&&this.code===e.code&&this.version===e.version&&ed(this.multihash,e.multihash)}toString(e){let{bytes:t,version:r,_baseCache:i}=this;return 0===r?eT(t,i,e||K.encoder):e$(t,i,e||L.encoder)}toJSON(){return{code:this.code,version:this.version,hash:this.multihash.bytes}}get[Symbol.toStringTag](){return"CID"}[Symbol.for("nodejs.util.inspect.custom")](){return"CID("+this.toString()+")"}static isCID(e){return eB(/^0\.0/,eU),!!(e&&(e[eM]||e.asCID===e))}get toBaseEncodedString(){throw Error("Deprecated, use .toString()")}get codec(){throw Error('"codec" property is deprecated, use integer "code" property instead')}get buffer(){throw Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")}get multibaseName(){throw Error('"multibaseName" property is deprecated')}get prefix(){throw Error('"prefix" property is deprecated')}static asCID(e){if(e instanceof eP)return e;if(null!=e&&e.asCID===e){let{version:t,code:r,multihash:i,bytes:n}=e;return new eP(t,r,i,n||eR(t,r,i.bytes))}if(null==e||!0!==e[eM])return null;{let{version:t,multihash:r,code:i}=e,n=eh(r);return eP.create(t,i,n)}}static create(e,t,r){if("number"!=typeof t)throw Error("String codecs are no longer supported");switch(e){case 0:if(t===eI)return new eP(e,t,r,r.bytes);throw Error(`Version 0 CID must use dag-pb (code: ${eI}) block encoding`);case 1:{let i=eR(e,t,r.bytes);return new eP(e,t,r,i)}default:throw Error("Invalid version")}}static createV0(e){return eP.create(0,eI,e)}static createV1(e,t){return eP.create(1,e,t)}static decode(e){let[t,r]=eP.decodeFirst(e);if(r.length)throw Error("Incorrect length");return t}static decodeFirst(e){let t=eP.inspectBytes(e),r=t.size-t.multihashSize,i=y(e.subarray(r,r+t.multihashSize));if(i.byteLength!==t.multihashSize)throw Error("Incorrect length");let n=i.subarray(t.multihashSize-t.digestSize),o=new ef(t.multihashCode,t.digestSize,n,i),a=0===t.version?eP.createV0(o):eP.createV1(t.codec,o);return[a,e.subarray(t.size)]}static inspectBytes(e){let t=0,r=()=>{let[r,i]=es(e.subarray(t));return t+=i,r},i=r(),n=eI;if(18===i?(i=0,t=0):1===i&&(n=r()),0!==i&&1!==i)throw RangeError(`Invalid CID version ${i}`);let o=t,a=r(),s=r(),l=t+s;return{version:i,codec:n,multihashCode:a,digestSize:s,multihashSize:l-o,size:l}}static parse(e,t){let[r,i]=eA(e,t),n=eP.decode(i);return n._baseCache.set(r,e),n}}let eA=(e,t)=>{switch(e[0]){case"Q":return[K.prefix,(t||K).decode(`${K.prefix}${e}`)];case K.prefix:return[K.prefix,(t||K).decode(e)];case L.prefix:return[L.prefix,(t||L).decode(e)];default:if(null==t)throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");return[e[0],t.decode(e)]}},eT=(e,t,r)=>{let{prefix:i}=r;if(i!==K.prefix)throw Error(`Cannot string encode V0 in ${r.name} encoding`);let n=t.get(i);if(null!=n)return n;{let n=r.encode(e).slice(1);return t.set(i,n),n}},e$=(e,t,r)=>{let{prefix:i}=r,n=t.get(i);if(null!=n)return n;{let n=r.encode(e);return t.set(i,n),n}},eI=112,eN=18,eR=(e,t,r)=>{let i=ec(e),n=i+ec(t),o=new Uint8Array(n+r.byteLength);return el(e,o,0),el(t,o,i),o.set(r,n),o},eM=Symbol.for("@ipld/js-cid/CID"),ej={writable:!1,configurable:!1,enumerable:!0},eL={writable:!1,enumerable:!1,configurable:!1},eB=(e,t)=>{if(e.test("0.0.0-dev"))console.warn(t);else throw Error(t)},eU=`CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`,eF={...i,...n,...o,...a,...s,...l,...c,...u,...h,...d};({...f,...p});var eW=r(65800);function ez(e,t,r,i){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:r},decoder:{decode:i}}}let eH=ez("utf8","u",e=>{let t=new TextDecoder("utf8");return"u"+t.decode(e)},e=>{let t=new TextEncoder;return t.encode(e.substring(1))}),eq=ez("ascii","a",e=>{let t="a";for(let r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},e=>{e=e.substring(1);let t=(0,eW.E)(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}),eG={utf8:eH,"utf-8":eH,hex:eF.base16,latin1:eq,ascii:eq,binary:eq,...eF},eV=eG},95790:(e,t,r)=>{"use strict";r.d(t,{sj:()=>p,iH:()=>b,CO:()=>m,Ld:()=>g}),Symbol();let i=Symbol(),n=Object.getPrototypeOf,o=new WeakMap,a=e=>e&&(o.has(e)?o.get(e):n(e)===Object.prototype||n(e)===Array.prototype),s=e=>a(e)&&e[i]||null,l=(e,t=!0)=>{o.set(e,t)},c=e=>"object"==typeof e&&null!==e,u=new WeakMap,h=new WeakSet,d=(e=Object.is,t=(e,t)=>new Proxy(e,t),r=e=>c(e)&&!h.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),i=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},n=new WeakMap,o=(e,t,r=i)=>{let a=n.get(e);if((null==a?void 0:a[0])===t)return a[1];let s=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return l(s,!0),n.set(e,[t,s]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(s,t))return;let i=Reflect.get(e,t),n={value:i,enumerable:!0,configurable:!0};if(h.has(i))l(i,!1);else if(i instanceof Promise)delete n.value,n.get=()=>r(i);else if(u.has(i)){let[e,t]=u.get(i);n.value=o(e,t(),r)}Object.defineProperty(s,t,n)}),Object.preventExtensions(s)},a=new WeakMap,d=[1,1],f=i=>{if(!c(i))throw Error("object required");let n=a.get(i);if(n)return n;let l=d[0],p=new Set,g=(e,t=++d[0])=>{l!==t&&(l=t,p.forEach(r=>r(e,t)))},m=d[1],b=(e=++d[1])=>(m===e||p.size||(m=e,y.forEach(([t])=>{let r=t[1](e);r>l&&(l=r)})),l),w=e=>(t,r)=>{let i=[...t];i[1]=[e,...i[1]],g(i,r)},y=new Map,v=(e,t)=>{if(y.has(e))throw Error("prop listener already exists");if(p.size){let r=t[3](w(e));y.set(e,[t,r])}else y.set(e,[t])},x=e=>{var t;let r=y.get(e);r&&(y.delete(e),null==(t=r[1])||t.call(r))},C=e=>{p.add(e),1===p.size&&y.forEach(([e,t],r)=>{if(t)throw Error("remove already exists");let i=e[3](w(r));y.set(r,[e,i])});let t=()=>{p.delete(e),0===p.size&&y.forEach(([e,t],r)=>{t&&(t(),y.set(r,[e]))})};return t},_=Array.isArray(i)?[]:Object.create(Object.getPrototypeOf(i)),E={deleteProperty(e,t){let r=Reflect.get(e,t);x(t);let i=Reflect.deleteProperty(e,t);return i&&g(["delete",[t],r]),i},set(t,i,n,o){let l=Reflect.has(t,i),d=Reflect.get(t,i,o);if(l&&(e(d,n)||a.has(n)&&e(d,a.get(n))))return!0;x(i),c(n)&&(n=s(n)||n);let p=n;if(n instanceof Promise)n.then(e=>{n.status="fulfilled",n.value=e,g(["resolve",[i],e])}).catch(e=>{n.status="rejected",n.reason=e,g(["reject",[i],e])});else{!u.has(n)&&r(n)&&(p=f(n));let e=!h.has(p)&&u.get(p);e&&v(i,e)}return Reflect.set(t,i,p,o),g(["set",[i],n,d]),!0}},k=t(_,E);a.set(i,k);let S=[_,b,o,C];return u.set(k,S),Reflect.ownKeys(i).forEach(e=>{let t=Object.getOwnPropertyDescriptor(i,e);"value"in t&&(k[e]=i[e],delete t.value,delete t.writable),Object.defineProperty(_,e,t)}),k})=>[f,u,h,e,t,r,i,n,o,a,d],[f]=d();function p(e={}){return f(e)}function g(e,t,r){let i;let n=u.get(e);n||console.warn("Please use proxy object");let o=[],a=n[3],s=!1,l=a(e=>{if(o.push(e),r){t(o.splice(0));return}i||(i=Promise.resolve().then(()=>{i=void 0,s&&t(o.splice(0))}))});return s=!0,()=>{s=!1,l()}}function m(e,t){let r=u.get(e);r||console.warn("Please use proxy object");let[i,n,o]=r;return o(i,n(),t)}function b(e){return h.add(e),e}},79319:(e,t,r)=>{"use strict";function i(e){return"string"==typeof e?{address:e,type:"json-rpc"}:e}r.d(t,{T:()=>i})},50740:(e,t,r)=>{"use strict";r.d(t,{R:()=>w});var i=r(79319),n=r(98410),o=r(49873),a=r(34259),s=r(75632),l=r(28870),c=r(20836),u=r(11026),h=r(49226),d=r(96217),f=r(49113),p=r(59228),g=r(66553),m=r(52897),b=r(92998);async function w(e,t){let{account:n=e.account,batch:l=!!e.batch?.multicall,blockNumber:c,blockTag:u="latest",accessList:m,data:w,gas:v,gasPrice:x,maxFeePerGas:C,maxPriorityFeePerGas:_,nonce:E,to:k,value:S,...O}=t,D=n?(0,i.T)(n):void 0;try{(0,b.F)(t);let r=c?(0,h.eC)(c):void 0,i=r||u,n=e.chain?.formatters?.transactionRequest?.format,o=n||g.tG,s=o({...(0,p.K)(O,{format:n}),from:D?.address,accessList:m,data:w,gas:v,gasPrice:x,maxFeePerGas:C,maxPriorityFeePerGas:_,nonce:E,to:k,value:S});if(l&&function({request:e}){let{data:t,to:r,...i}=e;return!(!t||t.startsWith("0x82ad56cb"))&&!!r&&!(Object.values(i).filter(e=>void 0!==e).length>0)}({request:s}))try{return await y(e,{...s,blockNumber:c,blockTag:u})}catch(e){if(!(e instanceof a.pZ)&&!(e instanceof a.mm))throw e}let d=await e.request({method:"eth_call",params:i?[s,i]:[s]});if("0x"===d)return{data:void 0};return{data:d}}catch(l){let i=function(e){if(!(e instanceof o.G))return;let t=e.walk();return"object"==typeof t.data?t.data.data:t.data}(l),{offchainLookup:n,offchainLookupSignature:a}=await r.e(825).then(r.bind(r,63825));if(i?.slice(0,10)===a&&k)return{data:await n(e,{data:i,to:k})};throw function(e,{docsPath:t,...r}){let i=(()=>{let t=(0,f.k)(e,r);return t instanceof d.cj?e:t})();return new s.cg(i,{docsPath:t,...r})}(l,{...t,account:D,chain:e.chain})}}async function y(e,t){let{batchSize:r=1024,wait:i=0}="object"==typeof e.batch?.multicall?e.batch.multicall:{},{blockNumber:o,blockTag:d="latest",data:f,multicallAddress:p,to:g}=t,b=p;if(!b){if(!e.chain)throw new a.pZ;b=(0,u.L)({blockNumber:o,chain:e.chain,contract:"multicall3"})}let w=o?(0,h.eC)(o):void 0,y=w||d,{schedule:v}=(0,m.S)({id:`${e.uid}.${y}`,wait:i,shouldSplitBatch(e){let t=e.reduce((e,{data:t})=>e+(t.length-2),0);return t>2*r},fn:async t=>{let r=t.map(e=>({allowFailure:!0,callData:e.data,target:e.to})),i=(0,c.R)({abi:n.F8,args:[r],functionName:"aggregate3"}),o=await e.request({method:"eth_call",params:[{data:i,to:b},y]});return(0,l.k)({abi:n.F8,args:[r],functionName:"aggregate3",data:o||"0x"})}}),[{returnData:x,success:C}]=await v({data:f,to:g});if(!C)throw new s.VQ({data:x});return"0x"===x?{data:void 0}:{data:x}}},98593:(e,t,r)=>{"use strict";r.d(t,{C:()=>c,X:()=>l});var i=r(57657),n=r(40490),o=r(93303),a=r(50931),s=r(22172);async function l(e,t){return c(e,t)}async function c(e,t){let{block:r,chain:l=e.chain,request:c,type:u="eip1559"}=t||{},h=await (async()=>"function"==typeof l?.fees?.baseFeeMultiplier?l.fees.baseFeeMultiplier({block:r,client:e,request:c}):l?.fees?.baseFeeMultiplier??1.2)();if(h<1)throw new i.Fz;let d=h.toString().split(".")[1]?.length??0,f=10**d,p=e=>e*BigInt(Math.ceil(h*f))/BigInt(f),g=r||await (0,n.s)(e,a.Q,"getBlock")({});if("function"==typeof l?.fees?.estimateFeesPerGas)return l.fees.estimateFeesPerGas({block:r,client:e,multiply:p,request:c,type:u});if("eip1559"===u){if("bigint"!=typeof g.baseFeePerGas)throw new i.e5;let t=c?.maxPriorityFeePerGas?c.maxPriorityFeePerGas:await (0,o.h)(e,{block:g,chain:l,request:c}),r=p(g.baseFeePerGas),n=c?.maxFeePerGas??r+t;return{maxFeePerGas:n,maxPriorityFeePerGas:t}}let m=c?.gasPrice??p(await (0,n.s)(e,s.o,"getGasPrice")({}));return{gasPrice:m}}},20805:(e,t,r)=>{"use strict";r.d(t,{Q:()=>b});var i=r(79319),n=r(15882),o=r(49226),a=r(97671),s=r(44568),l=r(49873),c=r(22297);class u extends l.G{constructor(e,{account:t,docsPath:r,chain:i,data:n,gas:o,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:h,nonce:d,to:f,value:p}){let g=(0,c.xr)({from:t?.address,to:f,value:void 0!==p&&`${(0,a.d)(p)} ${i?.nativeCurrency?.symbol||"ETH"}`,data:n,gas:o,gasPrice:void 0!==l&&`${(0,s.o)(l)} gwei`,maxFeePerGas:void 0!==u&&`${(0,s.o)(u)} gwei`,maxPriorityFeePerGas:void 0!==h&&`${(0,s.o)(h)} gwei`,nonce:d});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",g].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}var h=r(96217),d=r(49113),f=r(59228),p=r(66553),g=r(92998),m=r(33500);async function b(e,t){let r=t.account??e.account;if(!r)throw new n.o({docsPath:"/docs/actions/public/estimateGas"});let a=(0,i.T)(r);try{let{accessList:r,blockNumber:i,blockTag:n,data:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:h,nonce:d,to:b,value:w,...y}="local"===a.type?await (0,m.Z)(e,t):t,v=i?(0,o.eC)(i):void 0,x=v||n;(0,g.F)(t);let C=e.chain?.formatters?.transactionRequest?.format,_=C||p.tG,E=_({...(0,f.K)(y,{format:C}),from:a.address,accessList:r,data:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:h,nonce:d,to:b,value:w}),k=await e.request({method:"eth_estimateGas",params:x?[E,x]:[E]});return BigInt(k)}catch(r){throw function(e,{docsPath:t,...r}){let i=(()=>{let t=(0,d.k)(e,r);return t instanceof h.cj?e:t})();return new u(i,{docsPath:t,...r})}(r,{...t,account:a,chain:e.chain})}}},93303:(e,t,r)=>{"use strict";r.d(t,{_:()=>l,h:()=>c});var i=r(57657),n=r(61313),o=r(40490),a=r(50931),s=r(22172);async function l(e,t){return c(e,t)}async function c(e,t){let{block:r,chain:l=e.chain,request:c}=t||{};if("function"==typeof l?.fees?.defaultPriorityFee){let t=r||await (0,o.s)(e,a.Q,"getBlock")({});return l.fees.defaultPriorityFee({block:t,client:e,request:c})}if(void 0!==l?.fees?.defaultPriorityFee)return l?.fees?.defaultPriorityFee;try{let t=await e.request({method:"eth_maxPriorityFeePerGas"});return(0,n.y_)(t)}catch{let[t,n]=await Promise.all([r?Promise.resolve(r):(0,o.s)(e,a.Q,"getBlock")({}),(0,o.s)(e,s.o,"getGasPrice")({})]);if("bigint"!=typeof t.baseFeePerGas)throw new i.e5;let l=n-t.baseFeePerGas;if(l<0n)return 0n;return l}}},50931:(e,t,r)=>{"use strict";r.d(t,{Q:()=>s});var i=r(49873);class n extends i.G{constructor({blockHash:e,blockNumber:t}){let r="Block";e&&(r=`Block at hash "${e}"`),t&&(r=`Block at number "${t}"`),super(`${r} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}var o=r(49226),a=r(48642);async function s(e,{blockHash:t,blockNumber:r,blockTag:i,includeTransactions:s}={}){let l=s??!1,c=void 0!==r?(0,o.eC)(r):void 0,u=null;if(!(u=t?await e.request({method:"eth_getBlockByHash",params:[t,l]}):await e.request({method:"eth_getBlockByNumber",params:[c||(i??"latest"),l]})))throw new n({blockHash:t,blockNumber:r});let h=e.chain?.formatters?.block?.format||a.Z;return h(u)}},1816:(e,t,r)=>{"use strict";r.d(t,{L:()=>n});var i=r(61313);async function n(e){let t=await e.request({method:"eth_chainId"});return(0,i.ly)(t)}},22172:(e,t,r)=>{"use strict";async function i(e){let t=await e.request({method:"eth_gasPrice"});return BigInt(t)}r.d(t,{o:()=>i})},40761:(e,t,r)=>{"use strict";r.d(t,{K:()=>o});var i=r(61313),n=r(49226);async function o(e,{address:t,blockTag:r="latest",blockNumber:o}){let a=await e.request({method:"eth_getTransactionCount",params:[t,o?(0,n.eC)(o):r]});return(0,i.ly)(a)}},33500:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var i=r(79319),n=r(98593),o=r(20805),a=r(50931),s=r(40761),l=r(15882),c=r(57657),u=r(40490),h=r(92998),d=r(22297);async function f(e,t){let{account:r=e.account,chain:f,gas:p,nonce:g,type:m}=t;if(!r)throw new l.o;let b=(0,i.T)(r),w=await (0,u.s)(e,a.Q,"getBlock")({blockTag:"latest"}),y={...t,from:b.address};if(void 0===g&&(y.nonce=await (0,u.s)(e,s.K,"getTransactionCount")({address:b.address,blockTag:"pending"})),void 0===m)try{y.type=function(e){if(e.type)return e.type;if(void 0!==e.maxFeePerGas||void 0!==e.maxPriorityFeePerGas)return"eip1559";if(void 0!==e.gasPrice)return void 0!==e.accessList?"eip2930":"legacy";throw new d.j3({transaction:e})}(y)}catch{y.type="bigint"==typeof w.baseFeePerGas?"eip1559":"legacy"}if("eip1559"===y.type){let{maxFeePerGas:r,maxPriorityFeePerGas:i}=await (0,n.C)(e,{block:w,chain:f,request:y});if(void 0===t.maxPriorityFeePerGas&&t.maxFeePerGas&&t.maxFeePerGas<i)throw new c.ld({maxPriorityFeePerGas:i});y.maxPriorityFeePerGas=i,y.maxFeePerGas=r}else{if(void 0!==t.maxFeePerGas||void 0!==t.maxPriorityFeePerGas)throw new c.e5;let{gasPrice:r}=await (0,n.C)(e,{block:w,chain:f,request:y,type:"legacy"});y.gasPrice=r}return void 0===p&&(y.gas=await (0,u.s)(e,o.Q,"estimateGas")({...y,account:{address:b.address,type:"json-rpc"}})),(0,h.F)(y),y}},25873:(e,t,r)=>{"use strict";async function i(e,{serializedTransaction:t}){return e.request({method:"eth_sendRawTransaction",params:[t]})}r.d(t,{p:()=>i})},63617:(e,t,r)=>{"use strict";r.d(t,{e:()=>n});var i=r(74850);let n=(0,i.a)({id:56,name:"BNB Smart Chain",network:"bsc",nativeCurrency:{decimals:18,name:"BNB",symbol:"BNB"},rpcUrls:{default:{http:["https://rpc.ankr.com/bsc"]},public:{http:["https://rpc.ankr.com/bsc"]}},blockExplorers:{etherscan:{name:"BscScan",url:"https://bscscan.com"},default:{name:"BscScan",url:"https://bscscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:15921452}}})},35036:(e,t,r)=>{"use strict";r.d(t,{R:()=>n});var i=r(74850);let n=(0,i.a)({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}})},67845:(e,t,r)=>{"use strict";r.d(t,{y:()=>n});var i=r(74850);let n=(0,i.a)({id:137,name:"Polygon",network:"matic",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:{alchemy:{http:["https://polygon-mainnet.g.alchemy.com/v2"],webSocket:["wss://polygon-mainnet.g.alchemy.com/v2"]},infura:{http:["https://polygon-mainnet.infura.io/v3"],webSocket:["wss://polygon-mainnet.infura.io/ws/v3"]},default:{http:["https://polygon-rpc.com"]},public:{http:["https://polygon-rpc.com"]}},blockExplorers:{etherscan:{name:"PolygonScan",url:"https://polygonscan.com"},default:{name:"PolygonScan",url:"https://polygonscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:25770160}}})},79079:(e,t,r)=>{"use strict";let i;r.d(t,{e:()=>a});var n=r(79319);let o=256;function a(e){let{batch:t,cacheTime:r=e.pollingInterval??4e3,key:a="base",name:s="Base Client",pollingInterval:l=4e3,type:c="base"}=e,u=e.chain,h=e.account?(0,n.T)(e.account):void 0,{config:d,request:f,value:p}=e.transport({chain:u,pollingInterval:l}),g={...d,...p},m={account:h,batch:t,cacheTime:r,chain:u,key:a,name:s,pollingInterval:l,request:f,transport:g,type:c,uid:function(e=11){if(!i||o+e>512){i="",o=0;for(let e=0;e<256;e++)i+=(256+256*Math.random()|0).toString(16).substring(1)}return i.substring(o,o+++e)}()};return Object.assign(m,{extend:function e(t){return r=>{let i=r(t);for(let e in m)delete i[e];let n={...t,...i};return Object.assign(n,{extend:e(n)})}}(m)})}},61026:(e,t,r)=>{"use strict";r.d(t,{K:()=>L});var i=r(79079),n=r(1816),o=r(49226);async function a(e,{chain:t}){let{id:r,name:i,nativeCurrency:n,rpcUrls:a,blockExplorers:s}=t;await e.request({method:"wallet_addEthereumChain",params:[{chainId:(0,o.eC)(r),chainName:i,nativeCurrency:n,rpcUrls:a.default.http,blockExplorerUrls:s?Object.values(s).map(({url:e})=>e):void 0}]})}var s=r(54654),l=r(79319),c=r(15882),u=r(34259);function h({chain:e,currentChainId:t}){if(!e)throw new u.Bk;if(t!==e.id)throw new u.Yl({chain:e,currentChainId:t})}var d=r(96217),f=r(22297),p=r(49113),g=r(59228),m=r(66553),b=r(40490),w=r(92998),y=r(33500),v=r(25873);async function x(e,t){let{account:r=e.account,chain:i=e.chain,accessList:o,data:a,gas:s,gasPrice:u,maxFeePerGas:x,maxPriorityFeePerGas:C,nonce:_,to:E,value:k,...S}=t;if(!r)throw new c.o({docsPath:"/docs/actions/wallet/sendTransaction"});let O=(0,l.T)(r);try{let r;if((0,w.F)(t),null!==i&&(r=await (0,b.s)(e,n.L,"getChainId")({}),h({currentChainId:r,chain:i})),"local"===O.type){let t=await (0,b.s)(e,y.Z,"prepareTransactionRequest")({account:O,accessList:o,chain:i,data:a,gas:s,gasPrice:u,maxFeePerGas:x,maxPriorityFeePerGas:C,nonce:_,to:E,value:k,...S});r||(r=await (0,b.s)(e,n.L,"getChainId")({}));let l=i?.serializers?.transaction,c=await O.signTransaction({...t,chainId:r},{serializer:l});return await (0,b.s)(e,v.p,"sendRawTransaction")({serializedTransaction:c})}let l=e.chain?.formatters?.transactionRequest?.format,c=l||m.tG,d=c({...(0,g.K)(S,{format:l}),accessList:o,data:a,from:O.address,gas:s,gasPrice:u,maxFeePerGas:x,maxPriorityFeePerGas:C,nonce:_,to:E,value:k});return await e.request({method:"eth_sendTransaction",params:[d]})}catch(e){throw function(e,{docsPath:t,...r}){let i=(()=>{let t=(0,p.k)(e,r);return t instanceof d.cj?e:t})();return new f.mk(i,{docsPath:t,...r})}(e,{...t,account:O,chain:t.chain||void 0})}}var C=r(22102);async function _(e){if(e.account?.type==="local")return[e.account.address];let t=await e.request({method:"eth_accounts"});return t.map(e=>(0,C.x)(e))}async function E(e){let t=await e.request({method:"wallet_getPermissions"});return t}async function k(e){let t=await e.request({method:"eth_requestAccounts"});return t.map(e=>(0,C.K)(e))}async function S(e,t){return e.request({method:"wallet_requestPermissions",params:[t]})}async function O(e,{account:t=e.account,message:r}){if(!t)throw new c.o({docsPath:"/docs/actions/wallet/signMessage"});let i=(0,l.T)(t);if("local"===i.type)return i.signMessage({message:r});let n="string"==typeof r?(0,o.$G)(r):r.raw instanceof Uint8Array?(0,o.NC)(r.raw):r.raw;return e.request({method:"personal_sign",params:[n,i.address]})}async function D(e,t){let{account:r=e.account,chain:i=e.chain,...a}=t;if(!r)throw new c.o({docsPath:"/docs/actions/wallet/signTransaction"});let s=(0,l.T)(r);(0,w.F)({account:s,...t});let u=await (0,b.s)(e,n.L,"getChainId")({});null!==i&&h({currentChainId:u,chain:i});let d=i?.formatters||e.chain?.formatters,f=d?.transactionRequest?.format||m.tG;return"local"===s.type?s.signTransaction({...a,chainId:u},{serializer:e.chain?.serializers?.transaction}):await e.request({method:"eth_signTransaction",params:[{...f(a),chainId:(0,o.eC)(u),from:s.address}]})}var P=r(40338),A=r(86285),T=r(70546);async function $(e,{account:t=e.account,domain:r,message:i,primaryType:n,types:o}){if(!t)throw new c.o({docsPath:"/docs/actions/wallet/signTypedData"});let a=(0,l.T)(t),s={EIP712Domain:(0,T.cj)({domain:r}),...o};if((0,T.iC)({domain:r,message:i,primaryType:n,types:s}),"local"===a.type)return a.signTypedData({domain:r,primaryType:n,types:s,message:i});let u=(0,A.P)({domain:r??{},primaryType:n,types:s,message:i},(e,t)=>(0,P.v)(t)?t.toLowerCase():t);return e.request({method:"eth_signTypedData_v4",params:[a.address,u]})}async function I(e,{id:t}){await e.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,o.eC)(t)}]})}async function N(e,t){let r=await e.request({method:"wallet_watchAsset",params:t});return r}var R=r(20836);async function M(e,{abi:t,address:r,args:i,dataSuffix:n,functionName:o,...a}){let s=(0,R.R)({abi:t,args:i,functionName:o}),l=await (0,b.s)(e,x,"sendTransaction")({data:`${s}${n?n.replace("0x",""):""}`,to:r,...a});return l}function j(e){return{addChain:t=>a(e,t),deployContract:t=>(function(e,{abi:t,args:r,bytecode:i,...n}){let o=(0,s.w)({abi:t,args:r,bytecode:i});return x(e,{...n,data:o})})(e,t),getAddresses:()=>_(e),getChainId:()=>(0,n.L)(e),getPermissions:()=>E(e),prepareTransactionRequest:t=>(0,y.Z)(e,t),requestAddresses:()=>k(e),requestPermissions:t=>S(e,t),sendRawTransaction:t=>(0,v.p)(e,t),sendTransaction:t=>x(e,t),signMessage:t=>O(e,t),signTransaction:t=>D(e,t),signTypedData:t=>$(e,t),switchChain:t=>I(e,t),watchAsset:t=>N(e,t),writeContract:t=>M(e,t)}}function L(e){let{key:t="wallet",name:r="Wallet Client",transport:n}=e,o=(0,i.e)({...e,key:t,name:r,transport:e=>n({...e,retryCount:0}),type:"walletClient"});return o.extend(j)}},86075:(e,t,r)=>{"use strict";r.d(t,{q:()=>n});var i=r(48333);function n({key:e,name:t,request:r,retryCount:n=3,retryDelay:o=150,timeout:a,type:s},l){return{config:{key:e,name:t,request:r,retryCount:n,retryDelay:o,timeout:a,type:s},request:(0,i.n)(r,{retryCount:n,retryDelay:o}),value:l}}},78461:(e,t,r)=>{"use strict";r.d(t,{P:()=>n});var i=r(86075);function n(e,t={}){let{key:r="custom",name:n="Custom Provider",retryDelay:o}=t;return({retryCount:a})=>(0,i.q)({key:r,name:n,request:e.request.bind(e),retryCount:t.retryCount??a,retryDelay:o,type:"custom"})}},98410:(e,t,r)=>{"use strict";r.d(t,{$o:()=>c,F8:()=>i,X$:()=>l,du:()=>a,k3:()=>o,nZ:()=>s});let i=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],n=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],o=[...n,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],a=[...n,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],s=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],l=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],c=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}]},95866:(e,t,r)=>{"use strict";r.d(t,{$:()=>i,Up:()=>n,hZ:()=>o});let i={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},n={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},o={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}},44682:(e,t,r)=>{"use strict";r.d(t,{Bd:()=>o,Zn:()=>n,ez:()=>i});let i={gwei:9,wei:18},n={ether:-9,wei:9},o={ether:-18,gwei:-9}},9830:(e,t,r)=>{"use strict";r.d(t,{CI:()=>_,FM:()=>p,Gy:()=>x,KY:()=>y,M4:()=>h,MX:()=>w,SM:()=>v,cO:()=>s,dh:()=>C,fM:()=>a,fs:()=>d,gr:()=>u,hn:()=>E,lC:()=>g,mv:()=>m,wM:()=>k,wb:()=>c,xB:()=>l,xL:()=>b,yP:()=>f});var i=r(30836),n=r(55314),o=r(49873);class a extends o.G{constructor({docsPath:e}){super("A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class s extends o.G{constructor({docsPath:e}){super("Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class l extends o.G{constructor({data:e,params:t,size:r}){super(`Data size of ${r} bytes is too small for given parameters.`,{metaMessages:[`Params: (${(0,i.h)(t,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=t,this.size=r}}class c extends o.G{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class u extends o.G{constructor({expectedLength:e,givenLength:t,type:r}){super(`ABI encoding array length mismatch for type ${r}.
Expected length: ${e}
Given length: ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class h extends o.G{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${(0,n.d)(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class d extends o.G{constructor({expectedLength:e,givenLength:t}){super(`ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class f extends o.G{constructor(e,{docsPath:t}){super(`Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class p extends o.G{constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class g extends o.G{constructor(e,{docsPath:t}){super(`Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class m extends o.G{constructor(e,{docsPath:t}={}){super(`Event ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class b extends o.G{constructor(e,{docsPath:t}={}){super(`Function ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class w extends o.G{constructor(e,{docsPath:t}){super(`Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class y extends o.G{constructor({expectedSize:e,givenSize:t}){super(`Expected bytes${e}, got bytes${t}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class v extends o.G{constructor({abiItem:e,data:t,params:r,size:n}){super(`Data size of ${n} bytes is too small for non-indexed event parameters.`,{metaMessages:[`Params: (${(0,i.h)(r,{includeName:!0})})`,`Data:   ${t} (${n} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=t,this.params=r,this.size=n}}class x extends o.G{constructor({abiItem:e,param:t}){super(`Expected a topic for indexed event parameter${t.name?` "${t.name}"`:""} on event "${(0,i.t)(e,{includeName:!0})}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}}class C extends o.G{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class _ extends o.G{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class E extends o.G{constructor(e){super(`Value "${e}" is not a valid array.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class k extends o.G{constructor(e){super(`"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}},15882:(e,t,r)=>{"use strict";r.d(t,{o:()=>n});var i=r(49873);class n extends i.G{constructor({docsPath:e}={}){super("Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.",{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}},26632:(e,t,r)=>{"use strict";r.d(t,{b:()=>n});var i=r(49873);class n extends i.G{constructor({address:e}){super(`Address "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}},49873:(e,t,r)=>{"use strict";r.d(t,{G:()=>n});var i=r(10836);class n extends Error{constructor(e,t={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:(0,i.bo)()});let r=t.cause instanceof n?t.cause.details:t.cause?.message?t.cause.message:t.details,o=t.cause instanceof n&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...o?[`Docs: https://viem.sh${o}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=o,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return function e(t,r){return r?.(t)?t:t&&"object"==typeof t&&"cause"in t?e(t.cause,r):r?null:t}(this,e)}}},34259:(e,t,r)=>{"use strict";r.d(t,{Bk:()=>a,Yl:()=>o,mm:()=>n,pZ:()=>s});var i=r(49873);class n extends i.G{constructor({blockNumber:e,chain:t,contract:r}){super(`Chain "${t.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...e&&r.blockCreated&&r.blockCreated>e?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class o extends i.G{constructor({chain:e,currentChainId:t}){super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class a extends i.G{constructor(){super("No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class s extends i.G{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}},75632:(e,t,r)=>{"use strict";r.d(t,{cg:()=>m,uq:()=>b,Lu:()=>w,Dk:()=>y,VQ:()=>v});var i=r(79319),n=r(95866),o=r(77667),a=r(30836),s=r(86285);function l({abiItem:e,args:t,includeFunctionName:r=!0,includeName:i=!1}){if("name"in e&&"inputs"in e&&e.inputs)return`${r?e.name:""}(${e.inputs.map((e,r)=>`${i&&e.name?`${e.name}: `:""}${"object"==typeof t[r]?(0,s.P)(t[r]):t[r]}`).join(", ")})`}var c=r(411),u=r(97671),h=r(44568),d=r(9830),f=r(49873),p=r(22297),g=r(10836);class m extends f.G{constructor(e,{account:t,docsPath:r,chain:n,data:o,gas:a,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:d,to:f,value:g}){let m=t?(0,i.T)(t):void 0,b=(0,p.xr)({from:m?.address,to:f,value:void 0!==g&&`${(0,u.d)(g)} ${n?.nativeCurrency?.symbol||"ETH"}`,data:o,gas:a,gasPrice:void 0!==s&&`${(0,h.o)(s)} gwei`,maxFeePerGas:void 0!==l&&`${(0,h.o)(l)} gwei`,maxPriorityFeePerGas:void 0!==c&&`${(0,h.o)(c)} gwei`,nonce:d});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",b].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class b extends f.G{constructor(e,{abi:t,args:r,contractAddress:i,docsPath:n,functionName:o,sender:s}){let u=(0,c.m)({abi:t,args:r,name:o}),h=u?l({abiItem:u,args:r,includeFunctionName:!1,includeName:!1}):void 0,d=u?(0,a.t)(u,{includeName:!0}):void 0,f=(0,p.xr)({address:i&&(0,g.CR)(i),function:d,args:h&&"()"!==h&&`${[...Array(o?.length??0).keys()].map(()=>" ").join("")}${h}`,sender:s});super(e.shortMessage||`An unknown error occurred while executing the contract function "${o}".`,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",f].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=t,this.args=r,this.cause=e,this.contractAddress=i,this.functionName=o,this.sender=s}}class w extends f.G{constructor({abi:e,data:t,functionName:r,message:i}){let s,c,u,h,f;if(t&&"0x"!==t)try{f=(0,o.p)({abi:e,data:t});let{abiItem:r,errorName:i,args:s}=f;if("Error"===i)u=s[0];else if("Panic"===i){let[e]=s;u=n.$[e]}else{let e=r?(0,a.t)(r,{includeName:!0}):void 0,t=r&&s?l({abiItem:r,args:s,includeFunctionName:!1,includeName:!1}):void 0;c=[e?`Error: ${e}`:"",t&&"()"!==t?`       ${[...Array(i?.length??0).keys()].map(()=>" ").join("")}${t}`:""]}}catch(e){s=e}else i&&(u=i);s instanceof d.yP&&(h=s.signature,c=[`Unable to decode signature "${h}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${h}.`]),super(u&&"execution reverted"!==u||h?[`The contract function "${r}" reverted with the following ${h?"signature":"reason"}:`,u||h].join("\n"):`The contract function "${r}" reverted.`,{cause:s,metaMessages:c}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=f,this.reason=u,this.signature=h}}class y extends f.G{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class v extends f.G{constructor({data:e,message:t}){super(t||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}},98261:(e,t,r)=>{"use strict";r.d(t,{$:()=>o,m:()=>n});var i=r(49873);class n extends i.G{constructor({offset:e,position:t,size:r}){super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class o extends i.G{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}},61968:(e,t,r)=>{"use strict";r.d(t,{Cd:()=>o,J5:()=>n,M6:()=>a});var i=r(49873);class n extends i.G{constructor({max:e,min:t,signed:r,size:i,value:n}){super(`Number "${n}" is not in safe ${i?`${8*i}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class o extends i.G{constructor(e){super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}class a extends i.G{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}},57657:(e,t,r)=>{"use strict";r.d(t,{Fz:()=>o,e5:()=>a,ld:()=>s});var i=r(44568),n=r(49873);class o extends n.G{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class a extends n.G{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class s extends n.G{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,i.o)(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}},96217:(e,t,r)=>{"use strict";r.d(t,{C_:()=>h,G$:()=>s,Hh:()=>a,M_:()=>o,WF:()=>d,ZI:()=>l,cj:()=>m,cs:()=>g,dR:()=>f,pZ:()=>p,se:()=>u,vU:()=>c});var i=r(44568),n=r(49873);class o extends n.G{constructor({cause:e,message:t}={}){let r=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(o,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(o,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class a extends n.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,i.o)(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(a,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class s extends n.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,i.o)(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(s,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class l extends n.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(l,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class c extends n.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(c,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class u extends n.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(u,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class h extends n.G{constructor({cause:e}={}){super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(h,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class d extends n.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(d,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class f extends n.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(f,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class p extends n.G{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(p,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class g extends n.G{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:r}={}){super(`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${(0,i.o)(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${(0,i.o)(r)} gwei`:""}).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(g,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class m extends n.G{constructor({cause:e}){super(`An error occurred while executing: ${e?.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}},75205:(e,t,r)=>{"use strict";r.d(t,{Gg:()=>a,W5:()=>c,bs:()=>l,c9:()=>s});var i=r(86285),n=r(49873),o=r(10836);class a extends n.G{constructor({body:e,details:t,headers:r,status:n,url:a}){super("HTTP request failed.",{details:t,metaMessages:[n&&`Status: ${n}`,`URL: ${(0,o.Gr)(a)}`,e&&`Request body: ${(0,i.P)(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=r,this.status=n,this.url=a}}class s extends n.G{constructor({body:e,details:t,url:r}){super("WebSocket request failed.",{details:t,metaMessages:[`URL: ${(0,o.Gr)(r)}`,`Request body: ${(0,i.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class l extends n.G{constructor({body:e,error:t,url:r}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${(0,o.Gr)(r)}`,`Request body: ${(0,i.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code}}class c extends n.G{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,o.Gr)(t)}`,`Request body: ${(0,i.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}},20997:(e,t,r)=>{"use strict";r.d(t,{B:()=>l,GD:()=>w,I0:()=>_,KB:()=>g,LX:()=>c,Og:()=>f,PE:()=>v,Pv:()=>b,Ts:()=>x,XS:()=>h,ab:()=>y,gS:()=>m,ir:()=>k,nY:()=>u,pT:()=>p,s7:()=>s,u5:()=>C,x3:()=>E,yR:()=>d});var i=r(49873),n=r(75205);class o extends i.G{constructor(e,{code:t,docsPath:r,metaMessages:i,shortMessage:o}){super(o,{cause:e,docsPath:r,metaMessages:i||e?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof n.bs?e.code:t??-1}}class a extends o{constructor(e,t){super(e,t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class s extends o{constructor(e){super(e,{code:s.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(s,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class l extends o{constructor(e){super(e,{code:l.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(l,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class c extends o{constructor(e){super(e,{code:c.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(c,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class u extends o{constructor(e){super(e,{code:u.code,shortMessage:"Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(u,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class h extends o{constructor(e){super(e,{code:h.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(h,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class d extends o{constructor(e){super(e,{code:d.code,shortMessage:"Missing or invalid parameters.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(d,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class f extends o{constructor(e){super(e,{code:f.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(f,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class p extends o{constructor(e){super(e,{code:p.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(p,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class g extends o{constructor(e){super(e,{code:g.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(g,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class m extends o{constructor(e){super(e,{code:m.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(m,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class b extends o{constructor(e){super(e,{code:b.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(b,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class w extends o{constructor(e){super(e,{code:w.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(w,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class y extends a{constructor(e){super(e,{code:y.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(y,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class v extends a{constructor(e){super(e,{code:v.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(v,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class x extends a{constructor(e){super(e,{code:x.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(x,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class C extends a{constructor(e){super(e,{code:C.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(C,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class _ extends a{constructor(e){super(e,{code:_.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(_,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class E extends a{constructor(e){super(e,{code:E.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(E,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class k extends o{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}},22297:(e,t,r)=>{"use strict";r.d(t,{Bh:()=>u,Yb:()=>h,j3:()=>l,mc:()=>d,mk:()=>c,xY:()=>s,xr:()=>a});var i=r(97671),n=r(44568),o=r(49873);function a(e){let t=Object.entries(e).map(([e,t])=>void 0===t||!1===t?null:[e,t]).filter(Boolean),r=t.reduce((e,[t])=>Math.max(e,t.length),0);return t.map(([e,t])=>`  ${`${e}:`.padEnd(r+1)}  ${t}`).join("\n")}class s extends o.G{constructor(){super("Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class l extends o.G{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",a(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class c extends o.G{constructor(e,{account:t,docsPath:r,chain:o,data:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:h,nonce:d,to:f,value:p}){let g=a({chain:o&&`${o?.name} (id: ${o?.id})`,from:t?.address,to:f,value:void 0!==p&&`${(0,i.d)(p)} ${o?.nativeCurrency?.symbol||"ETH"}`,data:s,gas:l,gasPrice:void 0!==c&&`${(0,n.o)(c)} gwei`,maxFeePerGas:void 0!==u&&`${(0,n.o)(u)} gwei`,maxPriorityFeePerGas:void 0!==h&&`${(0,n.o)(h)} gwei`,nonce:d});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",g].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}class u extends o.G{constructor({blockHash:e,blockNumber:t,blockTag:r,hash:i,index:n}){let o="Transaction";r&&void 0!==n&&(o=`Transaction at block time "${r}" at index "${n}"`),e&&void 0!==n&&(o=`Transaction at block hash "${e}" at index "${n}"`),t&&void 0!==n&&(o=`Transaction at block number "${t}" at index "${n}"`),i&&(o=`Transaction with hash "${i}"`),super(`${o} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class h extends o.G{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class d extends o.G{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}},10836:(e,t,r)=>{"use strict";r.d(t,{CR:()=>i,Gr:()=>n,bo:()=>o});let i=e=>e,n=e=>e,o=()=>"viem@1.19.9"},33011:(e,t,r)=>{"use strict";r.d(t,{r:()=>u});var i=r(9830),n=r(22102),o=r(55314),a=r(10171),s=r(88402),l=r(61313),c=r(520);function u(e,t){if("0x"===t&&e.length>0)throw new i.wb;if((0,o.d)(t)&&32>(0,o.d)(t))throw new i.xB({data:t,params:e,size:(0,o.d)(t)});return function({data:e,params:t}){let r=[],u=0;for(let d=0;d<t.length;d++){if(u>=(0,o.d)(e))throw new i.xB({data:e,params:t,size:(0,o.d)(e)});let f=t[d],{consumed:p,value:g}=function e({data:t,param:r,position:o}){let u=(0,c.S)(r.type);if(u){let[i,n]=u;return function(t,{param:r,length:i,position:n}){if(!i){let i=(0,l.ly)((0,a.tP)(t,n,n+32,{strict:!0})),o=(0,l.ly)((0,a.tP)(t,i,i+32,{strict:!0})),s=0,c=[];for(let n=0;n<o;++n){let n=e({data:(0,a.tP)(t,i+32),param:r,position:s});s+=n.consumed,c.push(n.value)}return{value:c,consumed:32}}if(h(r)){let o=(0,c.S)(r.type),s=!o?.[0],u=0,h=[];for(let o=0;o<i;++o){let i=(0,l.ly)((0,a.tP)(t,n,n+32,{strict:!0})),c=e({data:(0,a.tP)(t,i),param:r,position:s?u:32*o});u+=c.consumed,h.push(c.value)}return{value:h,consumed:32}}let o=0,s=[];for(let a=0;a<i;++a){let i=e({data:t,param:r,position:n+o});o+=i.consumed,s.push(i.value)}return{value:s,consumed:o}}(t,{length:i,param:{...r,type:n},position:o})}if("tuple"===r.type)return function(t,{param:r,position:i}){let n=0===r.components.length||r.components.some(({name:e})=>!e),o=n?[]:{},s=0;if(h(r)){let c=(0,l.ly)((0,a.tP)(t,i,i+32,{strict:!0}));for(let i=0;i<r.components.length;++i){let l=r.components[i],u=e({data:(0,a.tP)(t,c),param:l,position:s});s+=u.consumed,o[n?i:l?.name]=u.value}return{consumed:32,value:o}}for(let a=0;a<r.components.length;++a){let l=r.components[a],c=e({data:t,param:l,position:i+s});s+=c.consumed,o[n?a:l?.name]=c.value}return{consumed:s,value:o}}(t,{param:r,position:o});if("string"===r.type)return function(e,{position:t}){let r=(0,l.ly)((0,a.tP)(e,t,t+32,{strict:!0})),i=(0,l.ly)((0,a.tP)(e,r,r+32,{strict:!0}));if(0===i)return{consumed:32,value:""};let n=(0,l.rR)((0,s.f)((0,a.tP)(e,r+32,r+32+i,{strict:!0})));return{consumed:32,value:n}}(t,{position:o});if(r.type.startsWith("bytes"))return function(e,{param:t,position:r}){let[i,n]=t.type.split("bytes");if(!n){let t=(0,l.ly)((0,a.tP)(e,r,r+32,{strict:!0})),i=(0,l.ly)((0,a.tP)(e,t,t+32,{strict:!0}));if(0===i)return{consumed:32,value:"0x"};let n=(0,a.tP)(e,t+32,t+32+i,{strict:!0});return{consumed:32,value:n}}let o=(0,a.tP)(e,r,r+parseInt(n),{strict:!0});return{consumed:32,value:o}}(t,{param:r,position:o});let d=(0,a.tP)(t,o,o+32,{strict:!0});if(r.type.startsWith("uint")||r.type.startsWith("int"))return function(e,{param:t}){let r=t.type.startsWith("int"),i=parseInt(t.type.split("int")[1]||"256");return{consumed:32,value:i>48?(0,l.y_)(e,{signed:r}):(0,l.ly)(e,{signed:r})}}(d,{param:r});if("address"===r.type)return{consumed:32,value:(0,n.x)((0,a.tP)(d,-20))};if("bool"===r.type)return{consumed:32,value:(0,l.XA)(d)};throw new i.CI(r.type,{docsPath:"/docs/contract/decodeAbiParameters"})}({data:e,param:f,position:u});r.push(g),u+=p}return r}({data:t,params:e})}function h(e){let{type:t}=e;if("string"===t||"bytes"===t||t.endsWith("[]"))return!0;if("tuple"===t)return e.components?.some(h);let r=(0,c.S)(e.type);return!!(r&&h({...e,type:r[1]}))}},77667:(e,t,r)=>{"use strict";r.d(t,{p:()=>c});var i=r(95866),n=r(9830),o=r(10171),a=r(2580),s=r(33011),l=r(30836);function c({abi:e,data:t}){let r=(0,o.tP)(t,0,4);if("0x"===r)throw new n.wb;let c=[...e||[],i.Up,i.hZ],u=c.find(e=>"error"===e.type&&r===(0,a.o)((0,l.t)(e)));if(!u)throw new n.yP(r,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:u,args:"inputs"in u&&u.inputs&&u.inputs.length>0?(0,s.r)(u.inputs,(0,o.tP)(t,4)):void 0,errorName:u.name}}},28870:(e,t,r)=>{"use strict";r.d(t,{k:()=>s});var i=r(9830),n=r(33011),o=r(411);let a="/docs/contract/decodeFunctionResult";function s({abi:e,args:t,functionName:r,data:s}){let l=e[0];if(r&&!(l=(0,o.m)({abi:e,args:t,name:r})))throw new i.xL(r,{docsPath:a});if("function"!==l.type)throw new i.xL(void 0,{docsPath:a});if(!l.outputs)throw new i.MX(l.name,{docsPath:a});let c=(0,n.r)(l.outputs,s);return c&&c.length>1?c:c&&1===c.length?c[0]:void 0}},520:(e,t,r)=>{"use strict";r.d(t,{E:()=>h,S:()=>f});var i=r(9830),n=r(26632),o=r(84889),a=r(80971),s=r(18270),l=r(55314),c=r(10171),u=r(49226);function h(e,t){if(e.length!==t.length)throw new i.fs({expectedLength:e.length,givenLength:t.length});let r=function({params:e,values:t}){let r=[];for(let h=0;h<e.length;h++)r.push(function e({param:t,value:r}){let h=f(t.type);if(h){let[n,o]=h;return function(t,{length:r,param:n}){let o=null===r;if(!Array.isArray(t))throw new i.hn(t);if(!o&&t.length!==r)throw new i.gr({expectedLength:r,givenLength:t.length,type:`${n.type}[${r}]`});let s=!1,l=[];for(let r=0;r<t.length;r++){let i=e({param:n,value:t[r]});i.dynamic&&(s=!0),l.push(i)}if(o||s){let e=d(l);if(o){let t=(0,u.eC)(l.length,{size:32});return{dynamic:!0,encoded:l.length>0?(0,a.zo)([t,e]):t}}if(s)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:(0,a.zo)(l.map(({encoded:e})=>e))}}(r,{length:n,param:{...t,type:o}})}if("tuple"===t.type)return function(t,{param:r}){let i=!1,n=[];for(let o=0;o<r.components.length;o++){let a=r.components[o],s=Array.isArray(t)?o:a.name,l=e({param:a,value:t[s]});n.push(l),l.dynamic&&(i=!0)}return{dynamic:i,encoded:i?d(n):(0,a.zo)(n.map(({encoded:e})=>e))}}(r,{param:t});if("address"===t.type)return function(e){if(!(0,o.U)(e))throw new n.b({address:e});return{dynamic:!1,encoded:(0,s.gc)(e.toLowerCase())}}(r);if("bool"===t.type)return{dynamic:!1,encoded:(0,s.gc)((0,u.C4)(r))};if(t.type.startsWith("uint")||t.type.startsWith("int")){let e=t.type.startsWith("int");return function(e,{signed:t}){return{dynamic:!1,encoded:(0,u.eC)(e,{size:32,signed:t})}}(r,{signed:e})}if(t.type.startsWith("bytes"))return function(e,{param:t}){let[,r]=t.type.split("bytes"),n=(0,l.d)(e);if(!r){let t=e;return n%32!=0&&(t=(0,s.gc)(t,{dir:"right",size:32*Math.ceil((e.length-2)/2/32)})),{dynamic:!0,encoded:(0,a.zo)([(0,s.gc)((0,u.eC)(n,{size:32})),t])}}if(n!==parseInt(r))throw new i.M4({expectedSize:parseInt(r),value:e});return{dynamic:!1,encoded:(0,s.gc)(e,{dir:"right"})}}(r,{param:t});if("string"===t.type)return function(e){let t=(0,u.$G)(e),r=Math.ceil((0,l.d)(t)/32),i=[];for(let e=0;e<r;e++)i.push((0,s.gc)((0,c.tP)(t,32*e,(e+1)*32),{dir:"right"}));return{dynamic:!0,encoded:(0,a.zo)([(0,s.gc)((0,u.eC)((0,l.d)(t),{size:32})),...i])}}(r);throw new i.dh(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}({param:e[h],value:t[h]}));return r}({params:e,values:t}),h=d(r);return 0===h.length?"0x":h}function d(e){let t=0;for(let r=0;r<e.length;r++){let{dynamic:i,encoded:n}=e[r];i?t+=32:t+=(0,l.d)(n)}let r=[],i=[],n=0;for(let o=0;o<e.length;o++){let{dynamic:a,encoded:s}=e[o];a?(r.push((0,u.eC)(t+n,{size:32})),i.push(s),n+=(0,l.d)(s)):r.push(s)}return(0,a.zo)([...r,...i])}function f(e){let t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}},54654:(e,t,r)=>{"use strict";r.d(t,{w:()=>s});var i=r(9830),n=r(80971),o=r(520);let a="/docs/contract/encodeDeployData";function s({abi:e,args:t,bytecode:r}){if(!t||0===t.length)return r;let s=e.find(e=>"type"in e&&"constructor"===e.type);if(!s)throw new i.fM({docsPath:a});if(!("inputs"in s)||!s.inputs||0===s.inputs.length)throw new i.cO({docsPath:a});let l=(0,o.E)(s.inputs,t);return(0,n.SM)([r,l])}},20836:(e,t,r)=>{"use strict";r.d(t,{R:()=>c});var i=r(9830),n=r(80971),o=r(2580),a=r(520),s=r(30836),l=r(411);function c({abi:e,args:t,functionName:r}){let c=e[0];if(r&&!(c=(0,l.m)({abi:e,args:t,name:r})))throw new i.xL(r,{docsPath:"/docs/contract/encodeFunctionData"});if("function"!==c.type)throw new i.xL(void 0,{docsPath:"/docs/contract/encodeFunctionData"});let u=(0,s.t)(c),h=(0,o.o)(u),d="inputs"in c&&c.inputs?(0,a.E)(c.inputs,t??[]):void 0;return(0,n.SM)([h,d??"0x"])}},30836:(e,t,r)=>{"use strict";r.d(t,{h:()=>o,t:()=>n});var i=r(9830);function n(e,{includeName:t=!1}={}){if("function"!==e.type&&"event"!==e.type&&"error"!==e.type)throw new i.wM(e.type);return`${e.name}(${o(e.inputs,{includeName:t})})`}function o(e,{includeName:t=!1}={}){return e?e.map(e=>(function(e,{includeName:t}){return e.type.startsWith("tuple")?`(${o(e.components,{includeName:t})})${e.type.slice(5)}`:e.type+(t&&e.name?` ${e.name}`:"")})(e,{includeName:t})).join(t?", ":","):""}},411:(e,t,r)=>{"use strict";r.d(t,{m:()=>s});var i=r(40338),n=r(4996),o=r(2580),a=r(84889);function s({abi:e,args:t=[],name:r}){let s=(0,i.v)(r,{strict:!1}),l=e.filter(e=>s?"function"===e.type?(0,o.o)(e)===r:"event"===e.type&&(0,n.e)(e)===r:"name"in e&&e.name===r);if(0!==l.length){if(1===l.length)return l[0];for(let e of l){if(!("inputs"in e))continue;if(!t||0===t.length){if(!e.inputs||0===e.inputs.length)return e;continue}if(!e.inputs||0===e.inputs.length||e.inputs.length!==t.length)continue;let r=t.every((t,r)=>{let i="inputs"in e&&e.inputs[r];return!!i&&function e(t,r){let i=typeof t,n=r.type;switch(n){case"address":return(0,a.U)(t);case"bool":return"boolean"===i;case"function":case"string":return"string"===i;default:if("tuple"===n&&"components"in r)return Object.values(r.components).every((r,i)=>e(Object.values(t)[i],r));if(/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(n))return"number"===i||"bigint"===i;if(/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n))return"string"===i||t instanceof Uint8Array;if(/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n))return Array.isArray(t)&&t.every(t=>e(t,{...r,type:n.replace(/(\[[0-9]{0,}\])$/,"")}));return!1}}(t,i)});if(r)return e}return l[0]}}},22102:(e,t,r)=>{"use strict";r.d(t,{K:()=>l,x:()=>s});var i=r(26632),n=r(7585),o=r(81229),a=r(84889);function s(e,t){let r=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),i=(0,o.w)((0,n.qX)(r),"bytes"),a=(t?r.substring(`${t}0x`.length):r).split("");for(let e=0;e<40;e+=2)i[e>>1]>>4>=8&&a[e]&&(a[e]=a[e].toUpperCase()),(15&i[e>>1])>=8&&a[e+1]&&(a[e+1]=a[e+1].toUpperCase());return`0x${a.join("")}`}function l(e,t){if(!(0,a.U)(e))throw new i.b({address:e});return s(e,t)}},84889:(e,t,r)=>{"use strict";r.d(t,{U:()=>n});let i=/^0x[a-fA-F0-9]{40}$/;function n(e){return i.test(e)}},48333:(e,t,r)=>{"use strict";r.d(t,{n:()=>l,y:()=>s});var i=r(49873),n=r(75205),o=r(20997),a=r(54474);let s=e=>"code"in e?-1!==e.code&&-32004!==e.code&&-32005!==e.code&&-32042!==e.code&&-32603!==e.code:e instanceof n.Gg&&!!e.status&&403!==e.status&&408!==e.status&&413!==e.status&&429!==e.status&&500!==e.status&&502!==e.status&&503!==e.status&&504!==e.status;function l(e,{retryDelay:t=150,retryCount:r=3}={}){return async l=>(0,a.J)(async()=>{try{return await e(l)}catch(e){switch(e.code){case o.s7.code:throw new o.s7(e);case o.B.code:throw new o.B(e);case o.LX.code:throw new o.LX(e);case o.nY.code:throw new o.nY(e);case o.XS.code:throw new o.XS(e);case o.yR.code:throw new o.yR(e);case o.Og.code:throw new o.Og(e);case o.pT.code:throw new o.pT(e);case o.KB.code:throw new o.KB(e);case o.gS.code:throw new o.gS(e);case o.Pv.code:throw new o.Pv(e);case o.GD.code:throw new o.GD(e);case o.ab.code:throw new o.ab(e);case o.PE.code:throw new o.PE(e);case o.Ts.code:throw new o.Ts(e);case o.u5.code:throw new o.u5(e);case o.I0.code:throw new o.I0(e);case o.x3.code:throw new o.x3(e);case 5e3:throw new o.ab(e);default:if(e instanceof i.G)throw e;throw new o.ir(e)}}},{delay:({count:e,error:r})=>{if(r&&r instanceof n.Gg){let e=r?.headers?.get("Retry-After");if(e?.match(/\d/))return 1e3*parseInt(e)}return~~(1<<e)*t},retryCount:r,shouldRetry:({error:e})=>!s(e)})}},74850:(e,t,r)=>{"use strict";function i(e,t={}){let{fees:r=e.fees,formatters:i=e.formatters,serializers:n=e.serializers}=t;return{...e,fees:r,formatters:i,serializers:n}}r.d(t,{a:()=>i})},11026:(e,t,r)=>{"use strict";r.d(t,{L:()=>n});var i=r(34259);function n({blockNumber:e,chain:t,contract:r}){let n=t?.contracts?.[r];if(!n)throw new i.mm({chain:t,contract:{name:r}});if(e&&n.blockCreated&&n.blockCreated>e)throw new i.mm({blockNumber:e,chain:t,contract:{name:r,blockCreated:n.blockCreated}});return n.address}},80971:(e,t,r)=>{"use strict";function i(e){return"string"==typeof e[0]?n(e):function(e){let t=0;for(let r of e)t+=r.length;let r=new Uint8Array(t),i=0;for(let t of e)r.set(t,i),i+=t.length;return r}(e)}function n(e){return`0x${e.reduce((e,t)=>e+t.replace("0x",""),"")}`}r.d(t,{SM:()=>n,zo:()=>i})},40338:(e,t,r)=>{"use strict";function i(e,{strict:t=!0}={}){return!!e&&"string"==typeof e&&(t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x"))}r.d(t,{v:()=>i})},18270:(e,t,r)=>{"use strict";r.d(t,{gc:()=>o,vk:()=>n});var i=r(98261);function n(e,{dir:t,size:r=32}={}){return"string"==typeof e?o(e,{dir:t,size:r}):function(e,{dir:t,size:r=32}={}){if(null===r)return e;if(e.length>r)throw new i.$({size:e.length,targetSize:r,type:"bytes"});let n=new Uint8Array(r);for(let i=0;i<r;i++){let o="right"===t;n[o?i:r-i-1]=e[o?i:e.length-i-1]}return n}(e,{dir:t,size:r})}function o(e,{dir:t,size:r=32}={}){if(null===r)return e;let n=e.replace("0x","");if(n.length>2*r)throw new i.$({size:Math.ceil(n.length/2),targetSize:r,type:"hex"});return`0x${n["right"===t?"padEnd":"padStart"](2*r,"0")}`}},55314:(e,t,r)=>{"use strict";r.d(t,{d:()=>n});var i=r(40338);function n(e){return(0,i.v)(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}},10171:(e,t,r)=>{"use strict";r.d(t,{tP:()=>a});var i=r(98261),n=r(40338),o=r(55314);function a(e,t,r,{strict:i}={}){return(0,n.v)(e,{strict:!1})?function(e,t,r,{strict:i}={}){s(e,t);let n=`0x${e.replace("0x","").slice((t??0)*2,(r??e.length)*2)}`;return i&&l(n,t,r),n}(e,t,r,{strict:i}):function(e,t,r,{strict:i}={}){s(e,t);let n=e.slice(t,r);return i&&l(n,t,r),n}(e,t,r,{strict:i})}function s(e,t){if("number"==typeof t&&t>0&&t>(0,o.d)(e)-1)throw new i.m({offset:t,position:"start",size:(0,o.d)(e)})}function l(e,t,r){if("number"==typeof t&&"number"==typeof r&&(0,o.d)(e)!==r-t)throw new i.m({offset:r,position:"end",size:(0,o.d)(e)})}},88402:(e,t,r)=>{"use strict";function i(e,{dir:t="left"}={}){let r="string"==typeof e?e.replace("0x",""):e,i=0;for(let e=0;e<r.length-1&&"0"===r["left"===t?e:r.length-e-1].toString();e++)i++;return(r="left"===t?r.slice(i):r.slice(0,r.length-i),"string"==typeof e)?(1===r.length&&"right"===t&&(r=`${r}0`),`0x${r.length%2==1?`0${r}`:r}`):r}r.d(t,{f:()=>i})},61313:(e,t,r)=>{"use strict";r.d(t,{XA:()=>c,Yf:()=>s,ly:()=>u,rR:()=>h,y_:()=>l});var i=r(61968),n=r(55314),o=r(88402),a=r(7585);function s(e,{size:t}){if((0,n.d)(e)>t)throw new i.M6({givenSize:(0,n.d)(e),maxSize:t})}function l(e,t={}){let{signed:r}=t;t.size&&s(e,{size:t.size});let i=BigInt(e);if(!r)return i;let n=(e.length-2)/2,o=(1n<<8n*BigInt(n)-1n)-1n;return i<=o?i:i-BigInt(`0x${"f".padStart(2*n,"f")}`)-1n}function c(e,t={}){let r=e;if(t.size&&(s(r,{size:t.size}),r=(0,o.f)(r)),"0x00"===(0,o.f)(r))return!1;if("0x01"===(0,o.f)(r))return!0;throw new i.Cd(r)}function u(e,t={}){return Number(l(e,t))}function h(e,t={}){let r=(0,a.nr)(e);return t.size&&(s(r,{size:t.size}),r=(0,o.f)(r,{dir:"right"})),new TextDecoder().decode(r)}},7585:(e,t,r)=>{"use strict";r.d(t,{O0:()=>c,nr:()=>d,qX:()=>f});var i=r(49873),n=r(40338),o=r(18270),a=r(61313),s=r(49226);let l=new TextEncoder;function c(e,t={}){return"number"==typeof e||"bigint"==typeof e?function(e,t){let r=(0,s.eC)(e,t);return d(r)}(e,t):"boolean"==typeof e?function(e,t={}){let r=new Uint8Array(1);return(r[0]=Number(e),"number"==typeof t.size)?((0,a.Yf)(r,{size:t.size}),(0,o.vk)(r,{size:t.size})):r}(e,t):(0,n.v)(e)?d(e,t):f(e,t)}let u={zero:48,nine:57,A:65,F:70,a:97,f:102};function h(e){return e>=u.zero&&e<=u.nine?e-u.zero:e>=u.A&&e<=u.F?e-(u.A-10):e>=u.a&&e<=u.f?e-(u.a-10):void 0}function d(e,t={}){let r=e;t.size&&((0,a.Yf)(r,{size:t.size}),r=(0,o.vk)(r,{dir:"right",size:t.size}));let n=r.slice(2);n.length%2&&(n=`0${n}`);let s=n.length/2,l=new Uint8Array(s);for(let e=0,t=0;e<s;e++){let r=h(n.charCodeAt(t++)),o=h(n.charCodeAt(t++));if(void 0===r||void 0===o)throw new i.G(`Invalid byte sequence ("${n[t-2]}${n[t-1]}" in "${n}").`);l[e]=16*r+o}return l}function f(e,t={}){let r=l.encode(e);return"number"==typeof t.size?((0,a.Yf)(r,{size:t.size}),(0,o.vk)(r,{dir:"right",size:t.size})):r}},49226:(e,t,r)=>{"use strict";r.d(t,{$G:()=>d,C4:()=>l,NC:()=>s,ci:()=>c,eC:()=>u});var i=r(61968),n=r(18270),o=r(61313);let a=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function s(e,t={}){return"number"==typeof e||"bigint"==typeof e?u(e,t):"string"==typeof e?d(e,t):"boolean"==typeof e?l(e,t):c(e,t)}function l(e,t={}){let r=`0x${Number(e)}`;return"number"==typeof t.size?((0,o.Yf)(r,{size:t.size}),(0,n.vk)(r,{size:t.size})):r}function c(e,t={}){let r="";for(let t=0;t<e.length;t++)r+=a[e[t]];let i=`0x${r}`;return"number"==typeof t.size?((0,o.Yf)(i,{size:t.size}),(0,n.vk)(i,{dir:"right",size:t.size})):i}function u(e,t={}){let r;let{signed:o,size:a}=t,s=BigInt(e);a?r=o?(1n<<8n*BigInt(a)-1n)-1n:2n**(8n*BigInt(a))-1n:"number"==typeof e&&(r=BigInt(Number.MAX_SAFE_INTEGER));let l="bigint"==typeof r&&o?-r-1n:0;if(r&&s>r||s<l){let t="bigint"==typeof e?"n":"";throw new i.J5({max:r?`${r}${t}`:void 0,min:`${l}${t}`,signed:o,size:a,value:`${e}${t}`})}let c=`0x${(o&&s<0?(1n<<BigInt(8*a))+BigInt(s):s).toString(16)}`;return a?(0,n.vk)(c,{size:a}):c}let h=new TextEncoder;function d(e,t={}){let r=h.encode(e);return c(r,t)}},49113:(e,t,r)=>{"use strict";r.d(t,{k:()=>o});var i=r(49873),n=r(96217);function o(e,t){let r=(e.details||"").toLowerCase(),o=e.walk(e=>e.code===n.M_.code);if(o instanceof i.G)return new n.M_({cause:e,message:o.details});if(n.M_.nodeMessage.test(r))return new n.M_({cause:e,message:e.details});if(n.Hh.nodeMessage.test(r))return new n.Hh({cause:e,maxFeePerGas:t?.maxFeePerGas});if(n.G$.nodeMessage.test(r))return new n.G$({cause:e,maxFeePerGas:t?.maxFeePerGas});if(n.ZI.nodeMessage.test(r))return new n.ZI({cause:e,nonce:t?.nonce});if(n.vU.nodeMessage.test(r))return new n.vU({cause:e,nonce:t?.nonce});if(n.se.nodeMessage.test(r))return new n.se({cause:e,nonce:t?.nonce});else if(n.C_.nodeMessage.test(r))return new n.C_({cause:e});else if(n.WF.nodeMessage.test(r))return new n.WF({cause:e,gas:t?.gas});else if(n.dR.nodeMessage.test(r))return new n.dR({cause:e,gas:t?.gas});else if(n.pZ.nodeMessage.test(r))return new n.pZ({cause:e});else if(n.cs.nodeMessage.test(r))return new n.cs({cause:e,maxFeePerGas:t?.maxFeePerGas,maxPriorityFeePerGas:t?.maxPriorityFeePerGas});return new n.cj({cause:e})}},48642:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var i=r(31595);function n(e){let t=e.transactions?.map(e=>"string"==typeof e?e:i.Tr(e));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,difficulty:e.difficulty?BigInt(e.difficulty):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:t,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}},59228:(e,t,r)=>{"use strict";function i(e,{format:t}){if(!t)return{};let r={},i=t(e||{});return function t(i){let n=Object.keys(i);for(let o of n)o in e&&(r[o]=e[o]),i[o]&&"object"==typeof i[o]&&!Array.isArray(i[o])&&t(i[o])}(i),r}r.d(t,{K:()=>i})},31595:(e,t,r)=>{"use strict";r.d(t,{Tr:()=>o,c8:()=>n});var i=r(61313);let n={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function o(e){let t={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?(0,i.ly)(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?(0,i.ly)(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?n[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return t.yParity=(()=>{if(e.yParity)return Number(e.yParity);if("bigint"==typeof t.v){if(0n===t.v||27n===t.v)return 0;if(1n===t.v||28n===t.v)return 1;if(t.v>=35n)return t.v%2n===0n?1:0}})(),"legacy"===t.type&&(delete t.accessList,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas,delete t.yParity),"eip2930"===t.type&&(delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t}},66553:(e,t,r)=>{"use strict";r.d(t,{tG:()=>o});var i=r(49226);let n={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function o(e){return{...e,gas:void 0!==e.gas?(0,i.eC)(e.gas):void 0,gasPrice:void 0!==e.gasPrice?(0,i.eC)(e.gasPrice):void 0,maxFeePerGas:void 0!==e.maxFeePerGas?(0,i.eC)(e.maxFeePerGas):void 0,maxPriorityFeePerGas:void 0!==e.maxPriorityFeePerGas?(0,i.eC)(e.maxPriorityFeePerGas):void 0,nonce:void 0!==e.nonce?(0,i.eC)(e.nonce):void 0,type:void 0!==e.type?n[e.type]:void 0,value:void 0!==e.value?(0,i.eC)(e.value):void 0}}},40490:(e,t,r)=>{"use strict";function i(e,t,r){return i=>e[t.name||r]?.(i)??t(e,i)}r.d(t,{s:()=>i})},4996:(e,t,r)=>{"use strict";r.d(t,{e:()=>l});var i=r(7585),n=r(97998);let o=e=>(0,n.r)(e);var a=r(81229);let s=e=>(0,a.w)((0,i.O0)(e)),l=e=>s(o(e))},2580:(e,t,r)=>{"use strict";r.d(t,{o:()=>l});var i=r(10171),n=r(7585),o=r(97998),a=r(81229);let s=e=>(0,a.w)((0,n.O0)(e)),l=e=>(0,i.tP)(s((0,o.r)(e)),0,4)},97998:(e,t,r)=>{"use strict";r.d(t,{r:()=>a});let i=/^tuple(?<array>(\[(\d*)\])*)$/;function n(e){let t="",r=e.length;for(let n=0;n<r;n++){let o=e[n];t+=function e(t){let r=t.type;if(i.test(t.type)&&"components"in t){r="(";let n=t.components.length;for(let i=0;i<n;i++){let o=t.components[i];r+=e(o),i<n-1&&(r+=", ")}let o=function(e,t){let r=e.exec(t);return r?.groups}(i,t.type);return r+=`)${o?.array??""}`,e({...t,type:r})}return("indexed"in t&&t.indexed&&(r=`${r} indexed`),t.name)?`${r} ${t.name}`:r}(o),n!==r-1&&(t+=", ")}return t}var o=r(49873);let a=e=>{let t="string"==typeof e?e:function(e){return"function"===e.type?`function ${e.name}(${n(e.inputs)})${e.stateMutability&&"nonpayable"!==e.stateMutability?` ${e.stateMutability}`:""}${e.outputs.length?` returns (${n(e.outputs)})`:""}`:"event"===e.type?`event ${e.name}(${n(e.inputs)})`:"error"===e.type?`error ${e.name}(${n(e.inputs)})`:"constructor"===e.type?`constructor(${n(e.inputs)})${"payable"===e.stateMutability?" payable":""}`:"fallback"===e.type?"fallback()":"receive() external payable"}(e);return function(e){let t=!0,r="",i=0,n="",a=!1;for(let o=0;o<e.length;o++){let s=e[o];if(["(",")",","].includes(s)&&(t=!0),"("===s&&i++,")"===s&&i--,t){if(0===i){if(" "===s&&["event","function",""].includes(n))n="";else if(n+=s,")"===s){a=!0;break}continue}if(" "===s){","!==e[o-1]&&","!==r&&",("!==r&&(r="",t=!1);continue}n+=s,r+=s}}if(!a)throw new o.G("Unable to normalize signature.");return n}(t)}},81229:(e,t,r)=>{"use strict";function i(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`Wrong positive integer: ${e}`)}function n(e,...t){if(!(e instanceof Uint8Array))throw Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function o(e,t=!0){if(e.destroyed)throw Error("Hash instance has been destroyed");if(t&&e.finished)throw Error("Hash#digest() has already been called")}r.d(t,{w:()=>R});let a=BigInt(4294967296-1),s=BigInt(32),l=(e,t,r)=>e<<r|t>>>32-r,c=(e,t,r)=>t<<r|e>>>32-r,u=(e,t,r)=>t<<r-32|e>>>64-r,h=(e,t,r)=>e<<r-32|t>>>64-r,d=e=>e instanceof Uint8Array,f=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),p=68===new Uint8Array(new Uint32Array([287454020]).buffer)[0];if(!p)throw Error("Non little-endian hardware is not supported");function g(e){if("string"==typeof e&&(e=function(e){if("string"!=typeof e)throw Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}(e)),!d(e))throw Error(`expected Uint8Array, got ${typeof e}`);return e}class m{clone(){return this._cloneInto()}}let[b,w,y]=[[],[],[]],v=BigInt(0),x=BigInt(1),C=BigInt(2),_=BigInt(7),E=BigInt(256),k=BigInt(113);for(let e=0,t=x,r=1,i=0;e<24;e++){[r,i]=[i,(2*r+3*i)%5],b.push(2*(5*i+r)),w.push((e+1)*(e+2)/2%64);let n=v;for(let e=0;e<7;e++)(t=(t<<x^(t>>_)*k)%E)&C&&(n^=x<<(x<<BigInt(e))-x);y.push(n)}let[S,O]=function(e,t=!1){let r=new Uint32Array(e.length),i=new Uint32Array(e.length);for(let n=0;n<e.length;n++){let{h:o,l}=function(e,t=!1){return t?{h:Number(e&a),l:Number(e>>s&a)}:{h:0|Number(e>>s&a),l:0|Number(e&a)}}(e[n],t);[r[n],i[n]]=[o,l]}return[r,i]}(y,!0),D=(e,t,r)=>r>32?u(e,t,r):l(e,t,r),P=(e,t,r)=>r>32?h(e,t,r):c(e,t,r);class A extends m{constructor(e,t,r,n=!1,o=24){if(super(),this.blockLen=e,this.suffix=t,this.outputLen=r,this.enableXOF=n,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,i(r),0>=this.blockLen||this.blockLen>=200)throw Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=f(this.state)}keccak(){(function(e,t=24){let r=new Uint32Array(10);for(let i=24-t;i<24;i++){for(let t=0;t<10;t++)r[t]=e[t]^e[t+10]^e[t+20]^e[t+30]^e[t+40];for(let t=0;t<10;t+=2){let i=(t+8)%10,n=(t+2)%10,o=r[n],a=r[n+1],s=D(o,a,1)^r[i],l=P(o,a,1)^r[i+1];for(let r=0;r<50;r+=10)e[t+r]^=s,e[t+r+1]^=l}let t=e[2],n=e[3];for(let r=0;r<24;r++){let i=w[r],o=D(t,n,i),a=P(t,n,i),s=b[r];t=e[s],n=e[s+1],e[s]=o,e[s+1]=a}for(let t=0;t<50;t+=10){for(let i=0;i<10;i++)r[i]=e[t+i];for(let i=0;i<10;i++)e[t+i]^=~r[(i+2)%10]&r[(i+4)%10]}e[0]^=S[i],e[1]^=O[i]}r.fill(0)})(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){o(this);let{blockLen:t,state:r}=this;e=g(e);let i=e.length;for(let n=0;n<i;){let o=Math.min(t-this.pos,i-n);for(let t=0;t<o;t++)r[this.pos++]^=e[n++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:e,suffix:t,pos:r,blockLen:i}=this;e[r]^=t,(128&t)!=0&&r===i-1&&this.keccak(),e[i-1]^=128,this.keccak()}writeInto(e){o(this,!1),n(e),this.finish();let t=this.state,{blockLen:r}=this;for(let i=0,n=e.length;i<n;){this.posOut>=r&&this.keccak();let o=Math.min(r-this.posOut,n-i);e.set(t.subarray(this.posOut,this.posOut+o),i),this.posOut+=o,i+=o}return e}xofInto(e){if(!this.enableXOF)throw Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return i(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(function(e,t){n(e);let r=t.outputLen;if(e.length<r)throw Error(`digestInto() expects output buffer of length at least ${r}`)}(e,this),this.finished)throw Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){let{blockLen:t,suffix:r,outputLen:i,rounds:n,enableXOF:o}=this;return e||(e=new A(t,r,i,o,n)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=n,e.suffix=r,e.outputLen=i,e.enableXOF=o,e.destroyed=this.destroyed,e}}let T=function(e){let t=t=>e().update(g(t)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}(()=>new A(136,1,32));var $=r(40338),I=r(7585),N=r(49226);function R(e,t){let r=T((0,$.v)(e,{strict:!1})?(0,I.O0)(e):e);return"bytes"===(t||"hex")?r:(0,N.NC)(r)}},52897:(e,t,r)=>{"use strict";r.d(t,{S:()=>n});let i=new Map;function n({fn:e,id:t,shouldSplitBatch:r,wait:n=0,sort:o}){let a=async()=>{let t=c();s();let r=t.map(({args:e})=>e);0!==r.length&&e(r).then(e=>{o&&Array.isArray(e)&&e.sort(o);for(let r=0;r<t.length;r++){let{pendingPromise:i}=t[r];i.resolve?.([e[r],e])}}).catch(e=>{for(let r=0;r<t.length;r++){let{pendingPromise:i}=t[r];i.reject?.(e)}})},s=()=>i.delete(t),l=()=>c().map(({args:e})=>e),c=()=>i.get(t)||[],u=e=>i.set(t,[...c(),e]);return{flush:s,async schedule(e){let t={},i=new Promise((e,r)=>{t.resolve=e,t.reject=r}),o=r?.([...l(),e]);o&&a();let s=c().length>0;return s?u({args:e,pendingPromise:t}):(u({args:e,pendingPromise:t}),setTimeout(a,n)),i}}}},54474:(e,t,r)=>{"use strict";r.d(t,{J:()=>n});var i=r(50939);function n(e,{delay:t=100,retryCount:r=2,shouldRetry:n=()=>!0}={}){return new Promise((o,a)=>{let s=async({count:l=0}={})=>{let c=async({error:e})=>{let r="function"==typeof t?t({count:l,error:e}):t;r&&await (0,i.D)(r),s({count:l+1})};try{let t=await e();o(t)}catch(e){if(l<r&&await n({count:l,error:e}))return c({error:e});a(e)}};s()})}},86285:(e,t,r)=>{"use strict";r.d(t,{P:()=>i});let i=(e,t,r)=>JSON.stringify(e,(e,r)=>{let i="bigint"==typeof r?r.toString():r;return"function"==typeof t?t(e,i):i},r)},92998:(e,t,r)=>{"use strict";r.d(t,{F:()=>l});var i=r(79319),n=r(26632),o=r(96217),a=r(22297),s=r(84889);function l(e){let{account:t,gasPrice:r,maxFeePerGas:l,maxPriorityFeePerGas:c,to:u}=e,h=t?(0,i.T)(t):void 0;if(h&&!(0,s.U)(h.address))throw new n.b({address:h.address});if(u&&!(0,s.U)(u))throw new n.b({address:u});if(void 0!==r&&(void 0!==l||void 0!==c))throw new a.xY;if(l&&l>2n**256n-1n)throw new o.Hh({maxFeePerGas:l});if(c&&l&&c>l)throw new o.cs({maxFeePerGas:l,maxPriorityFeePerGas:c})}},70546:(e,t,r)=>{"use strict";r.d(t,{cj:()=>h,iC:()=>u});var i=r(9830),n=r(26632),o=r(84889),a=r(55314),s=r(49226);let l=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,c=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function u({domain:e,message:t,primaryType:r,types:u}){let h=(e,t)=>{for(let r of e){let{name:e,type:d}=r,f=t[e],p=d.match(c);if(p&&("number"==typeof f||"bigint"==typeof f)){let[e,t,r]=p;(0,s.eC)(f,{signed:"int"===t,size:parseInt(r)/8})}if("address"===d&&"string"==typeof f&&!(0,o.U)(f))throw new n.b({address:f});let g=d.match(l);if(g){let[e,t]=g;if(t&&(0,a.d)(f)!==parseInt(t))throw new i.KY({expectedSize:parseInt(t),givenSize:(0,a.d)(f)})}let m=u[d];m&&h(m,f)}};if(u.EIP712Domain&&e&&h(u.EIP712Domain,e),"EIP712Domain"!==r){let e=u[r];h(e,t)}}function h({domain:e}){return["string"==typeof e?.name&&{name:"name",type:"string"},e?.version&&{name:"version",type:"string"},"number"==typeof e?.chainId&&{name:"chainId",type:"uint256"},e?.verifyingContract&&{name:"verifyingContract",type:"address"},e?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}},97671:(e,t,r)=>{"use strict";r.d(t,{d:()=>o});var i=r(44682),n=r(29269);function o(e,t="wei"){return(0,n.b)(e,i.ez[t])}},44568:(e,t,r)=>{"use strict";r.d(t,{o:()=>o});var i=r(44682),n=r(29269);function o(e,t="wei"){return(0,n.b)(e,i.Zn[t])}},29269:(e,t,r)=>{"use strict";function i(e,t){let r=e.toString(),i=r.startsWith("-");i&&(r=r.slice(1));let[n,o]=[(r=r.padStart(t,"0")).slice(0,r.length-t),r.slice(r.length-t)];return o=o.replace(/(0+)$/,""),`${i?"-":""}${n||"0"}${o?`.${o}`:""}`}r.d(t,{b:()=>i})},50939:(e,t,r)=>{"use strict";async function i(e){return new Promise(t=>setTimeout(t,e))}r.d(t,{D:()=>i})},21799:(e,t,r)=>{"use strict";function i(){}function n(e,t,r){return b(e)?"function"==typeof t?{...r,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function o(e,t,r){return b(e)?"function"==typeof t?{...r,mutationKey:e,mutationFn:t}:{...t,mutationKey:e}:"function"==typeof e?{...t,mutationFn:e}:{...e}}function a(e,t,r){return b(e)?[{...t,queryKey:e},r]:[e||{},t]}function s(e,t){let{type:r="all",exact:i,fetchStatus:n,predicate:o,queryKey:a,stale:s}=e;if(b(a)){if(i){if(t.queryHash!==c(a,t.options))return!1}else{if(!h(t.queryKey,a))return!1}}if("all"!==r){let e=t.isActive();if("active"===r&&!e||"inactive"===r&&e)return!1}return("boolean"!=typeof s||t.isStale()===s)&&(void 0===n||n===t.state.fetchStatus)&&(!o||!!o(t))}function l(e,t){let{exact:r,fetching:i,predicate:n,mutationKey:o}=e;if(b(o)){if(!t.options.mutationKey)return!1;if(r){if(u(t.options.mutationKey)!==u(o))return!1}else{if(!h(t.options.mutationKey,o))return!1}}return("boolean"!=typeof i||"loading"===t.state.status===i)&&(!n||!!n(t))}function c(e,t){let r=(null==t?void 0:t.queryKeyHashFn)||u;return r(e)}function u(e){return JSON.stringify(e,(e,t)=>g(t)?Object.keys(t).sort().reduce((e,r)=>(e[r]=t[r],e),{}):t)}function h(e,t){return e===t||typeof e==typeof t&&!!e&&!!t&&"object"==typeof e&&"object"==typeof t&&!Object.keys(t).some(r=>!h(e[r],t[r]))}function d(e,t){if(e===t)return e;let r=p(e)&&p(t);if(r||g(e)&&g(t)){let i=r?e.length:Object.keys(e).length,n=r?t:Object.keys(t),o=n.length,a=r?[]:{},s=0;for(let i=0;i<o;i++){let o=r?i:n[i];a[o]=d(e[o],t[o]),a[o]===e[o]&&s++}return i===o&&s===i?e:a}return t}function f(e,t){if(e&&!t||t&&!e)return!1;for(let r in e)if(e[r]!==t[r])return!1;return!0}function p(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function g(e){if(!m(e))return!1;let t=e.constructor;if(void 0===t)return!0;let r=t.prototype;return!!(m(r)&&r.hasOwnProperty("isPrototypeOf"))}function m(e){return"[object Object]"===Object.prototype.toString.call(e)}function b(e){return Array.isArray(e)}function w(e){return new Promise(t=>{setTimeout(t,e)})}function y(e){w(0).then(e)}function v(e,t,r){return null!=r.isDataEqual&&r.isDataEqual(e,t)?e:"function"==typeof r.structuralSharing?r.structuralSharing(e,t):!1!==r.structuralSharing?d(e,t):t}r.d(t,{eM:()=>eg,_g:()=>ed,mA:()=>eP,xx:()=>eE,$4:()=>e$,do:()=>eM,GG:()=>eL,g0:()=>eR,BX:()=>eB});let x=console,C=function(){let e=[],t=0,r=e=>{e()},i=e=>{e()},n=i=>{t?e.push(i):y(()=>{r(i)})},o=()=>{let t=e;e=[],t.length&&y(()=>{i(()=>{t.forEach(e=>{r(e)})})})};return{batch:e=>{let r;t++;try{r=e()}finally{--t||o()}return r},batchCalls:e=>(...t)=>{n(()=>{e(...t)})},schedule:n,setNotifyFunction:e=>{r=e},setBatchNotifyFunction:e=>{i=e}}}();class _{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){let t={listener:e};return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}class E extends _{constructor(){super(),this.setup=e=>{}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e(e=>{"boolean"==typeof e?this.setFocused(e):this.onFocus()})}setFocused(e){let t=this.focused!==e;t&&(this.focused=e,this.onFocus())}onFocus(){this.listeners.forEach(({listener:e})=>{e()})}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}}let k=new E;class S extends _{constructor(){super(),this.setup=e=>{}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e(e=>{"boolean"==typeof e?this.setOnline(e):this.onOnline()})}setOnline(e){let t=this.online!==e;t&&(this.online=e,this.onOnline())}onOnline(){this.listeners.forEach(({listener:e})=>{e()})}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}}let O=new S;function D(e){return Math.min(1e3*2**e,3e4)}function P(e){return(null!=e?e:"online")!=="online"||O.isOnline()}class A{constructor(e){this.revert=null==e?void 0:e.revert,this.silent=null==e?void 0:e.silent}}function T(e){return e instanceof A}function $(e){let t,r,i,n=!1,o=0,a=!1,s=new Promise((e,t)=>{r=e,i=t}),l=()=>!k.isFocused()||"always"!==e.networkMode&&!O.isOnline(),c=i=>{a||(a=!0,null==e.onSuccess||e.onSuccess(i),null==t||t(),r(i))},u=r=>{a||(a=!0,null==e.onError||e.onError(r),null==t||t(),i(r))},h=()=>new Promise(r=>{t=e=>{let t=a||!l();return t&&r(e),t},null==e.onPause||e.onPause()}).then(()=>{t=void 0,a||null==e.onContinue||e.onContinue()}),d=()=>{let t;if(!a){try{t=e.fn()}catch(e){t=Promise.reject(e)}Promise.resolve(t).then(c).catch(t=>{var r,i;if(a)return;let s=null!=(r=e.retry)?r:3,c=null!=(i=e.retryDelay)?i:D,f="function"==typeof c?c(o,t):c,p=!0===s||"number"==typeof s&&o<s||"function"==typeof s&&s(o,t);if(n||!p){u(t);return}o++,null==e.onFail||e.onFail(o,t),w(f).then(()=>{if(l())return h()}).then(()=>{n?u(t):d()})})}};return P(e.networkMode)?d():h().then(d),{promise:s,cancel:t=>{a||(u(new A(t)),null==e.abort||e.abort())},continue:()=>{let e=null==t?void 0:t();return e?s:Promise.resolve()},cancelRetry:()=>{n=!0},continueRetry:()=>{n=!1}}}class I{destroy(){this.clearGcTimeout()}scheduleGc(){var e;this.clearGcTimeout(),"number"==typeof(e=this.cacheTime)&&e>=0&&e!==1/0&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,null!=e?e:1/0)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class N extends I{constructor(e){super(),this.abortSignalConsumed=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.logger=e.logger||x,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||function(e){let t="function"==typeof e.initialData?e.initialData():e.initialData,r=void 0!==t,i=r?"function"==typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:r?null!=i?i:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"loading",fetchStatus:"idle"}}(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.cache.remove(this)}setData(e,t){let r=v(this.state.data,e,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:null==t?void 0:t.updatedAt,manual:null==t?void 0:t.manual}),r}setState(e,t){this.dispatch({type:"setState",state:e,setStateOptions:t})}cancel(e){var t;let r=this.promise;return null==(t=this.retryer)||t.cancel(e),r?r.then(i).catch(i):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(e=>!1!==e.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!Math.max(this.state.dataUpdatedAt+(e||0)-Date.now(),0)}onFocus(){var e;let t=this.observers.find(e=>e.shouldFetchOnWindowFocus());t&&t.refetch({cancelRefetch:!1}),null==(e=this.retryer)||e.continue()}onOnline(){var e;let t=this.observers.find(e=>e.shouldFetchOnReconnect());t&&t.refetch({cancelRefetch:!1}),null==(e=this.retryer)||e.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,t){var r,i,n,o;if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&null!=t&&t.cancelRefetch)this.cancel({silent:!0});else if(this.promise)return null==(n=this.retryer)||n.continueRetry(),this.promise}if(e&&this.setOptions(e),!this.options.queryFn){let e=this.observers.find(e=>e.options.queryFn);e&&this.setOptions(e.options)}let a=function(){if("function"==typeof AbortController)return new AbortController}(),s={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},l=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>{if(a)return this.abortSignalConsumed=!0,a.signal}})};l(s);let c={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(s)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'")};l(c),null==(r=this.options.behavior)||r.onFetch(c),this.revertState=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==(null==(i=c.fetchOptions)?void 0:i.meta))&&this.dispatch({type:"fetch",meta:null==(o=c.fetchOptions)?void 0:o.meta});let u=e=>{if(T(e)&&e.silent||this.dispatch({type:"error",error:e}),!T(e)){var t,r,i,n;null==(t=(r=this.cache.config).onError)||t.call(r,e,this),null==(i=(n=this.cache.config).onSettled)||i.call(n,this.state.data,e,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=$({fn:c.fetchFn,abort:null==a?void 0:a.abort.bind(a),onSuccess:e=>{var t,r,i,n;if(void 0===e){u(Error(this.queryHash+" data is undefined"));return}this.setData(e),null==(t=(r=this.cache.config).onSuccess)||t.call(r,e,this),null==(i=(n=this.cache.config).onSettled)||i.call(n,e,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:u,onFail:(e,t)=>{this.dispatch({type:"failed",failureCount:e,error:t})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(e){this.state=(t=>{var r,i;switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null!=(r=e.meta)?r:null,fetchStatus:P(this.options.networkMode)?"fetching":"paused",...!t.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...t,data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:null!=(i=e.dataUpdatedAt)?i:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let n=e.error;if(T(n)&&n.revert&&this.revertState)return{...this.revertState,fetchStatus:"idle"};return{...t,error:n,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:n,fetchStatus:"idle",status:"error"};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}})(this.state),C.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate(e)}),this.cache.notify({query:this,type:"updated",action:e})})}}class R extends _{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,t,r){var i;let n=t.queryKey,o=null!=(i=t.queryHash)?i:c(n,t),a=this.get(o);return a||(a=new N({cache:this,logger:e.getLogger(),queryKey:n,queryHash:o,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(n)}),this.add(a)),a}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"added",query:e}))}remove(e){let t=this.queriesMap[e.queryHash];t&&(e.destroy(),this.queries=this.queries.filter(t=>t!==e),t===e&&delete this.queriesMap[e.queryHash],this.notify({type:"removed",query:e}))}clear(){C.batch(()=>{this.queries.forEach(e=>{this.remove(e)})})}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,t){let[r]=a(e,t);return void 0===r.exact&&(r.exact=!0),this.queries.find(e=>s(r,e))}findAll(e,t){let[r]=a(e,t);return Object.keys(r).length>0?this.queries.filter(e=>s(r,e)):this.queries}notify(e){C.batch(()=>{this.listeners.forEach(({listener:t})=>{t(e)})})}onFocus(){C.batch(()=>{this.queries.forEach(e=>{e.onFocus()})})}onOnline(){C.batch(()=>{this.queries.forEach(e=>{e.onOnline()})})}}class M extends I{constructor(e){super(),this.defaultOptions=e.defaultOptions,this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||x,this.observers=[],this.state=e.state||j(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter(t=>t!==e),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){var e,t;return null!=(e=null==(t=this.retryer)?void 0:t.continue())?e:this.execute()}async execute(){var e,t,r,i,n,o,a,s,l,c,u,h,d,f,p,g,m,b,w,y;let v="loading"===this.state.status;try{if(!v){this.dispatch({type:"loading",variables:this.options.variables}),await (null==(l=(c=this.mutationCache.config).onMutate)?void 0:l.call(c,this.state.variables,this));let e=await (null==(u=(h=this.options).onMutate)?void 0:u.call(h,this.state.variables));e!==this.state.context&&this.dispatch({type:"loading",context:e,variables:this.state.variables})}let d=await (()=>{var e;return this.retryer=$({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(e,t)=>{this.dispatch({type:"failed",failureCount:e,error:t})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(e=this.options.retry)?e:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise})();return await (null==(e=(t=this.mutationCache.config).onSuccess)?void 0:e.call(t,d,this.state.variables,this.state.context,this)),await (null==(r=(i=this.options).onSuccess)?void 0:r.call(i,d,this.state.variables,this.state.context)),await (null==(n=(o=this.mutationCache.config).onSettled)?void 0:n.call(o,d,null,this.state.variables,this.state.context,this)),await (null==(a=(s=this.options).onSettled)?void 0:a.call(s,d,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:d}),d}catch(e){try{throw await (null==(d=(f=this.mutationCache.config).onError)?void 0:d.call(f,e,this.state.variables,this.state.context,this)),await (null==(p=(g=this.options).onError)?void 0:p.call(g,e,this.state.variables,this.state.context)),await (null==(m=(b=this.mutationCache.config).onSettled)?void 0:m.call(b,void 0,e,this.state.variables,this.state.context,this)),await (null==(w=(y=this.options).onSettled)?void 0:w.call(y,void 0,e,this.state.variables,this.state.context)),e}finally{this.dispatch({type:"error",error:e})}}}dispatch(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"loading":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!P(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"};case"setState":return{...t,...e.state}}})(this.state),C.batch(()=>{this.observers.forEach(t=>{t.onMutationUpdate(e)}),this.mutationCache.notify({mutation:this,type:"updated",action:e})})}}function j(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class L extends _{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,t,r){let i=new M({mutationCache:this,logger:e.getLogger(),mutationId:++this.mutationId,options:e.defaultMutationOptions(t),state:r,defaultOptions:t.mutationKey?e.getMutationDefaults(t.mutationKey):void 0});return this.add(i),i}add(e){this.mutations.push(e),this.notify({type:"added",mutation:e})}remove(e){this.mutations=this.mutations.filter(t=>t!==e),this.notify({type:"removed",mutation:e})}clear(){C.batch(()=>{this.mutations.forEach(e=>{this.remove(e)})})}getAll(){return this.mutations}find(e){return void 0===e.exact&&(e.exact=!0),this.mutations.find(t=>l(e,t))}findAll(e){return this.mutations.filter(t=>l(e,t))}notify(e){C.batch(()=>{this.listeners.forEach(({listener:t})=>{t(e)})})}resumePausedMutations(){var e;return this.resuming=(null!=(e=this.resuming)?e:Promise.resolve()).then(()=>{let e=this.mutations.filter(e=>e.state.isPaused);return C.batch(()=>e.reduce((e,t)=>e.then(()=>t.continue().catch(i)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function B(e,t){return null==e.getNextPageParam?void 0:e.getNextPageParam(t[t.length-1],t)}class U{constructor(e={}){this.queryCache=e.queryCache||new R,this.mutationCache=e.mutationCache||new L,this.logger=e.logger||x,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,1===this.mountCount&&(this.unsubscribeFocus=k.subscribe(()=>{k.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=O.subscribe(()=>{O.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var e,t;this.mountCount--,0===this.mountCount&&(null==(e=this.unsubscribeFocus)||e.call(this),this.unsubscribeFocus=void 0,null==(t=this.unsubscribeOnline)||t.call(this),this.unsubscribeOnline=void 0)}isFetching(e,t){let[r]=a(e,t);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(e){return this.mutationCache.findAll({...e,fetching:!0}).length}getQueryData(e,t){var r;return null==(r=this.queryCache.find(e,t))?void 0:r.state.data}ensureQueryData(e,t,r){let i=n(e,t,r),o=this.getQueryData(i.queryKey);return o?Promise.resolve(o):this.fetchQuery(i)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:e,state:t})=>{let r=t.data;return[e,r]})}setQueryData(e,t,r){let i=this.queryCache.find(e),o=null==i?void 0:i.state.data,a="function"==typeof t?t(o):t;if(void 0===a)return;let s=n(e),l=this.defaultQueryOptions(s);return this.queryCache.build(this,l).setData(a,{...r,manual:!0})}setQueriesData(e,t,r){return C.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,r)]))}getQueryState(e,t){var r;return null==(r=this.queryCache.find(e,t))?void 0:r.state}removeQueries(e,t){let[r]=a(e,t),i=this.queryCache;C.batch(()=>{i.findAll(r).forEach(e=>{i.remove(e)})})}resetQueries(e,t,r){let[i,n]=a(e,t,r),o=this.queryCache,s={type:"active",...i};return C.batch(()=>(o.findAll(i).forEach(e=>{e.reset()}),this.refetchQueries(s,n)))}cancelQueries(e,t,r){let[n,o={}]=a(e,t,r);void 0===o.revert&&(o.revert=!0);let s=C.batch(()=>this.queryCache.findAll(n).map(e=>e.cancel(o)));return Promise.all(s).then(i).catch(i)}invalidateQueries(e,t,r){let[i,n]=a(e,t,r);return C.batch(()=>{var e,t;if(this.queryCache.findAll(i).forEach(e=>{e.invalidate()}),"none"===i.refetchType)return Promise.resolve();let r={...i,type:null!=(e=null!=(t=i.refetchType)?t:i.type)?e:"active"};return this.refetchQueries(r,n)})}refetchQueries(e,t,r){let[n,o]=a(e,t,r),s=C.batch(()=>this.queryCache.findAll(n).filter(e=>!e.isDisabled()).map(e=>{var t;return e.fetch(void 0,{...o,cancelRefetch:null==(t=null==o?void 0:o.cancelRefetch)||t,meta:{refetchPage:n.refetchPage}})})),l=Promise.all(s).then(i);return null!=o&&o.throwOnError||(l=l.catch(i)),l}fetchQuery(e,t,r){let i=n(e,t,r),o=this.defaultQueryOptions(i);void 0===o.retry&&(o.retry=!1);let a=this.queryCache.build(this,o);return a.isStaleByTime(o.staleTime)?a.fetch(o):Promise.resolve(a.state.data)}prefetchQuery(e,t,r){return this.fetchQuery(e,t,r).then(i).catch(i)}fetchInfiniteQuery(e,t,r){let i=n(e,t,r);return i.behavior={onFetch:e=>{e.fetchFn=()=>{var t,r,i,n,o,a,s;let l;let c=null==(t=e.fetchOptions)?void 0:null==(r=t.meta)?void 0:r.refetchPage,u=null==(i=e.fetchOptions)?void 0:null==(n=i.meta)?void 0:n.fetchMore,h=null==u?void 0:u.pageParam,d=(null==u?void 0:u.direction)==="forward",f=(null==u?void 0:u.direction)==="backward",p=(null==(o=e.state.data)?void 0:o.pages)||[],g=(null==(a=e.state.data)?void 0:a.pageParams)||[],m=g,b=!1,w=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>{var t,r;return null!=(t=e.signal)&&t.aborted?b=!0:null==(r=e.signal)||r.addEventListener("abort",()=>{b=!0}),e.signal}})},y=e.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+e.options.queryHash+"'")),v=(e,t,r,i)=>(m=i?[t,...m]:[...m,t],i?[r,...e]:[...e,r]),x=(t,r,i,n)=>{if(b)return Promise.reject("Cancelled");if(void 0===i&&!r&&t.length)return Promise.resolve(t);let o={queryKey:e.queryKey,pageParam:i,meta:e.options.meta};w(o);let a=y(o),s=Promise.resolve(a).then(e=>v(t,i,e,n));return s};if(p.length){if(d){let t=void 0!==h,r=t?h:B(e.options,p);l=x(p,t,r)}else if(f){let t=void 0!==h,r=t?h:null==(s=e.options).getPreviousPageParam?void 0:s.getPreviousPageParam(p[0],p);l=x(p,t,r,!0)}else{m=[];let t=void 0===e.options.getNextPageParam,r=!c||!p[0]||c(p[0],0,p);l=r?x([],t,g[0]):Promise.resolve(v([],g[0],p[0]));for(let r=1;r<p.length;r++)l=l.then(i=>{let n=!c||!p[r]||c(p[r],r,p);if(n){let n=t?g[r]:B(e.options,i);return x(i,t,n)}return Promise.resolve(v(i,g[r],p[r]))})}}else l=x([]);let C=l.then(e=>({pages:e,pageParams:m}));return C}}},this.fetchQuery(i)}prefetchInfiniteQuery(e,t,r){return this.fetchInfiniteQuery(e,t,r).then(i).catch(i)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,t){let r=this.queryDefaults.find(t=>u(e)===u(t.queryKey));r?r.defaultOptions=t:this.queryDefaults.push({queryKey:e,defaultOptions:t})}getQueryDefaults(e){if(!e)return;let t=this.queryDefaults.find(t=>h(e,t.queryKey));return null==t?void 0:t.defaultOptions}setMutationDefaults(e,t){let r=this.mutationDefaults.find(t=>u(e)===u(t.mutationKey));r?r.defaultOptions=t:this.mutationDefaults.push({mutationKey:e,defaultOptions:t})}getMutationDefaults(e){if(!e)return;let t=this.mutationDefaults.find(t=>h(e,t.mutationKey));return null==t?void 0:t.defaultOptions}defaultQueryOptions(e){if(null!=e&&e._defaulted)return e;let t={...this.defaultOptions.queries,...this.getQueryDefaults(null==e?void 0:e.queryKey),...e,_defaulted:!0};return!t.queryHash&&t.queryKey&&(t.queryHash=c(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.useErrorBoundary&&(t.useErrorBoundary=!!t.suspense),t}defaultMutationOptions(e){return null!=e&&e._defaulted?e:{...this.defaultOptions.mutations,...this.getMutationDefaults(null==e?void 0:e.mutationKey),...e,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}function F(e){return e.state.isPaused}function W(e){return"success"===e.state.status}let z=["added","removed","updated"];function H(e){return z.includes(e)}async function q({queryClient:e,persister:t,maxAge:r=864e5,buster:i="",hydrateOptions:n}){try{let o=await t.restoreClient();if(o){if(o.timestamp){let a=Date.now()-o.timestamp>r,s=o.buster!==i;a||s?t.removeClient():function(e,t,r){if("object"!=typeof t||null===t)return;let i=e.getMutationCache(),n=e.getQueryCache(),o=t.mutations||[],a=t.queries||[];o.forEach(t=>{var n;i.build(e,{...null==r?void 0:null==(n=r.defaultOptions)?void 0:n.mutations,mutationKey:t.mutationKey},t.state)}),a.forEach(({queryKey:t,state:i,queryHash:o})=>{var a;let s=n.get(o);if(s){if(s.state.dataUpdatedAt<i.dataUpdatedAt){let{fetchStatus:e,...t}=i;s.setState(t)}return}n.build(e,{...null==r?void 0:null==(a=r.defaultOptions)?void 0:a.queries,queryKey:t,queryHash:o},{...i,fetchStatus:"idle"})})}(e,o.clientState,n)}else t.removeClient()}}catch(e){t.removeClient()}}async function G({queryClient:e,persister:t,buster:r="",dehydrateOptions:i}){let n={buster:r,timestamp:Date.now(),clientState:function(e,t={}){let r=[],i=[];if(!1!==t.dehydrateMutations){let i=t.shouldDehydrateMutation||F;e.getMutationCache().getAll().forEach(e=>{i(e)&&r.push({mutationKey:e.options.mutationKey,state:e.state})})}if(!1!==t.dehydrateQueries){let r=t.shouldDehydrateQuery||W;e.getQueryCache().getAll().forEach(e=>{r(e)&&i.push({state:e.state,queryKey:e.queryKey,queryHash:e.queryHash})})}return{mutations:r,queries:i}}(e,i)};await t.persistClient(n)}var V=r(36444),Z=r(34218);let K=Z.createContext(void 0),Y=Z.createContext(!1),Q=({context:e}={})=>{let t=Z.useContext(function(e,t){return e||K}(e,Z.useContext(Y)));if(!t)throw Error("No QueryClient set, use QueryClientProvider to set one");return t},X=({client:e,children:t,context:r,contextSharing:i=!1})=>{Z.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]);let n=function(e,t){return e||K}(r,0);return Z.createElement(Y.Provider,{value:!r&&i},Z.createElement(n.Provider,{value:e},t))},J=Z.createContext(!1),ee=()=>Z.useContext(J);J.Provider;let et=Z.createContext(function(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}()),er=()=>Z.useContext(et);var ei=r(41913);class MutationObserver extends _{constructor(e,t){super(),this.client=e,this.setOptions(t),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var t;let r=this.options;this.options=this.client.defaultMutationOptions(e),f(r,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),null==(t=this.currentMutation)||t.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.currentMutation)||e.removeObserver(this)}}onMutationUpdate(e){this.updateResult();let t={listeners:!0};"success"===e.type?t.onSuccess=!0:"error"===e.type&&(t.onError=!0),this.notify(t)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==e?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){let e=this.currentMutation?this.currentMutation.state:j(),t={...e,isLoading:"loading"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset};this.currentResult=t}notify(e){C.batch(()=>{if(this.mutateOptions&&this.hasListeners()){var t,r,i,n,o,a,s,l;e.onSuccess?(null==(t=(r=this.mutateOptions).onSuccess)||t.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(i=(n=this.mutateOptions).onSettled)||i.call(n,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)):e.onError&&(null==(o=(a=this.mutateOptions).onError)||o.call(a,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(s=(l=this.mutateOptions).onSettled)||s.call(l,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context))}e.listeners&&this.listeners.forEach(({listener:e})=>{e(this.currentResult)})})}}let en=ei.useSyncExternalStore;function eo(){}class ea extends _{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.currentQuery.addObserver(this),es(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return el(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return el(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){let r=this.options,i=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),f(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();let n=this.hasListeners();n&&ec(this.currentQuery,i,this.options,r)&&this.executeFetch(),this.updateResult(t),n&&(this.currentQuery!==i||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();let o=this.computeRefetchInterval();n&&(this.currentQuery!==i||this.options.enabled!==r.enabled||o!==this.currentRefetchInterval)&&this.updateRefetchInterval(o)}getOptimisticResult(e){let t=this.client.getQueryCache().build(this.client,e),r=this.createResult(t,e);return e.keepPreviousData||(void 0!==e.placeholderData?!r.isPlaceholderData:f(this.getCurrentResult(),r))||(this.currentResult=r,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),r}getCurrentResult(){return this.currentResult}trackResult(e){let t={};return Object.keys(e).forEach(r=>{Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),e[r])})}),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){let t=this.client.defaultQueryOptions(e),r=this.client.getQueryCache().build(this.client,t);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,t))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:null==(t=e.cancelRefetch)||t}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return null!=e&&e.throwOnError||(t=t.catch(i)),t}updateStaleTimeout(){this.clearStaleTimeout()}computeRefetchInterval(){var e;return"function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(e=this.options.refetchInterval)&&e}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){let r;let i=this.currentQuery,n=this.options,o=this.currentResult,a=this.currentResultState,s=this.currentResultOptions,l=e!==i,c=l?e.state:this.currentQueryInitialState,u=l?this.currentResult:this.previousQueryResult,{state:h}=e,{dataUpdatedAt:d,error:f,errorUpdatedAt:p,fetchStatus:g,status:m}=h,b=!1,w=!1;if(t._optimisticResults){let r=this.hasListeners(),o=!r&&es(e,t),a=r&&ec(e,i,t,n);(o||a)&&(g=P(e.options.networkMode)?"fetching":"paused",d||(m="loading")),"isRestoring"===t._optimisticResults&&(g="idle")}if(t.keepPreviousData&&!h.dataUpdatedAt&&null!=u&&u.isSuccess&&"error"!==m)r=u.data,d=u.dataUpdatedAt,m=u.status,b=!0;else if(t.select&&void 0!==h.data){if(o&&h.data===(null==a?void 0:a.data)&&t.select===this.selectFn)r=this.selectResult;else try{this.selectFn=t.select,r=t.select(h.data),r=v(null==o?void 0:o.data,r,t),this.selectResult=r,this.selectError=null}catch(e){this.selectError=e}}else r=h.data;if(void 0!==t.placeholderData&&void 0===r&&"loading"===m){let e;if(null!=o&&o.isPlaceholderData&&t.placeholderData===(null==s?void 0:s.placeholderData))e=o.data;else if(e="function"==typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&void 0!==e)try{e=t.select(e),this.selectError=null}catch(e){this.selectError=e}void 0!==e&&(m="success",r=v(null==o?void 0:o.data,e,t),w=!0)}this.selectError&&(f=this.selectError,r=this.selectResult,p=Date.now(),m="error");let y="fetching"===g,x="loading"===m,C="error"===m,_={status:m,fetchStatus:g,isLoading:x,isSuccess:"success"===m,isError:C,isInitialLoading:x&&y,data:r,dataUpdatedAt:d,error:f,errorUpdatedAt:p,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>c.dataUpdateCount||h.errorUpdateCount>c.errorUpdateCount,isFetching:y,isRefetching:y&&!x,isLoadingError:C&&0===h.dataUpdatedAt,isPaused:"paused"===g,isPlaceholderData:w,isPreviousData:b,isRefetchError:C&&0!==h.dataUpdatedAt,isStale:eu(e,t),refetch:this.refetch,remove:this.remove};return _}updateResult(e){let t=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,f(r,t))return;this.currentResult=r;let i={cache:!0};(null==e?void 0:e.listeners)!==!1&&(()=>{if(!t)return!0;let{notifyOnChangeProps:e}=this.options,r="function"==typeof e?e():e;if("all"===r||!r&&!this.trackedProps.size)return!0;let i=new Set(null!=r?r:this.trackedProps);return this.options.useErrorBoundary&&i.add("error"),Object.keys(this.currentResult).some(e=>{let r=this.currentResult[e]!==t[e];return r&&i.has(e)})})()&&(i.listeners=!0),this.notify({...i,...e})}updateQuery(){let e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;let t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){let t={};"success"===e.type?t.onSuccess=!e.manual:"error"!==e.type||T(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){C.batch(()=>{var t,r,i,n,o,a,s,l;e.onSuccess?(null==(t=(r=this.options).onSuccess)||t.call(r,this.currentResult.data),null==(i=(n=this.options).onSettled)||i.call(n,this.currentResult.data,null)):e.onError&&(null==(o=(a=this.options).onError)||o.call(a,this.currentResult.error),null==(s=(l=this.options).onSettled)||s.call(l,void 0,this.currentResult.error)),e.listeners&&this.listeners.forEach(({listener:e})=>{e(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function es(e,t){return!1!==t.enabled&&!e.state.dataUpdatedAt&&!("error"===e.state.status&&!1===t.retryOnMount)||e.state.dataUpdatedAt>0&&el(e,t,t.refetchOnMount)}function el(e,t,r){if(!1!==t.enabled){let i="function"==typeof r?r(e):r;return"always"===i||!1!==i&&eu(e,t)}return!1}function ec(e,t,r,i){return!1!==r.enabled&&(e!==t||!1===i.enabled)&&(!r.suspense||"error"!==e.state.status)&&eu(e,r)}function eu(e,t){return e.isStaleByTime(t.staleTime)}var eh=r(57359);function ed({queryClient:e=new U({defaultOptions:{queries:{cacheTime:864e5,networkMode:"offlineFirst",refetchOnWindowFocus:!1,retry:0},mutations:{networkMode:"offlineFirst"}}}),storage:t=(0,V.o6)({storage:V.wp}),persister:r,...i}){let n=(0,V._g)({...i,storage:t});return r&&function(e){q(e).then(()=>{(function(e){let t=e.queryClient.getQueryCache().subscribe(t=>{H(t.type)&&G(e)}),r=e.queryClient.getMutationCache().subscribe(t=>{H(t.type)&&G(e)})})(e)})}({queryClient:e,persister:r,dehydrateOptions:{shouldDehydrateQuery:e=>0!==e.cacheTime&&!1!==e.queryKey[0].persist}}),Object.assign(n,{queryClient:e})}var ef=Z.createContext(void 0),ep=Z.createContext(void 0);function eg({children:e,config:t}){return Z.createElement(ef.Provider,{children:Z.createElement(X,{children:e,client:t.queryClient,context:ep}),value:t})}function em(){let e=Z.useContext(ef);if(!e)throw Error("`useConfig` must be used within `WagmiConfig`.\n\nRead more: https://wagmi.sh/react/WagmiConfig");return e}var eb=ei.useSyncExternalStore;function ew(e){return"[object Object]"===Object.prototype.toString.call(e)}function ey(e){return JSON.stringify(e,(e,t)=>!function(e){if(!ew(e))return!1;let t=e.constructor;if(void 0===t)return!0;let r=t.prototype;return!!(ew(r)&&r.hasOwnProperty("isPrototypeOf"))}(t)?"bigint"==typeof t?t.toString():t:Object.keys(t).sort().reduce((e,r)=>(e[r]=t[r],e),{}))}function ev(e,t,r){let i=o(e,t,r);return function(e,t,r){var i,n;let a=o(e,void 0,void 0),s=Q({context:a.context}),[l]=Z.useState(()=>new MutationObserver(s,a));Z.useEffect(()=>{l.setOptions(a)},[l,a]);let c=en(Z.useCallback(e=>l.subscribe(C.batchCalls(e)),[l]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),u=Z.useCallback((e,t)=>{l.mutate(e,t).catch(eo)},[l]);if(c.error&&(i=l.options.useErrorBoundary,n=[c.error],"function"==typeof i?i(...n):!!i))throw c.error;return{...c,mutate:u,mutateAsync:c.mutate}}({context:ep,...i})}function ex(e,t,r){let i=Array.isArray(e)?"function"==typeof t?{...r,queryKey:e,queryFn:t}:{...t,queryKey:e}:e,n=function(e,t){var r,i;let n=Q({context:e.context}),o=ee(),a=er(),s=n.defaultQueryOptions({...e,queryKeyHashFn:ey});s._optimisticResults=o?"isRestoring":"optimistic",s.onError&&(s.onError=C.batchCalls(s.onError)),s.onSuccess&&(s.onSuccess=C.batchCalls(s.onSuccess)),s.onSettled&&(s.onSettled=C.batchCalls(s.onSettled)),s.suspense&&"number"!=typeof s.staleTime&&(s.staleTime=1e3),(s.suspense||s.useErrorBoundary)&&!a.isReset()&&(s.retryOnMount=!1);let[l]=Z.useState(()=>new t(n,s)),c=l.getOptimisticResult(s);if(eb(Z.useCallback(e=>o?()=>void 0:l.subscribe(C.batchCalls(e)),[l,o]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),Z.useEffect(()=>{a.clearReset()},[a]),Z.useEffect(()=>{l.setOptions(s,{listeners:!1})},[s,l]),s.suspense&&c.isLoading&&c.isFetching&&!o)throw l.fetchOptimistic(s).then(({data:e})=>{s.onSuccess?.(e),s.onSettled?.(e,null)}).catch(e=>{a.clearReset(),s.onError?.(e),s.onSettled?.(void 0,e)});if(c.isError&&!a.isReset()&&!c.isFetching&&(r=s.useErrorBoundary,i=[c.error,l.getCurrentQuery()],"function"==typeof r?r(...i):!!r))throw c.error;let u="loading"===c.status&&"idle"===c.fetchStatus?"idle":c.status,h="loading"===u&&"fetching"===c.fetchStatus;return{...c,defaultedOptions:s,isIdle:"idle"===u,isLoading:h,observer:l,status:u}}({context:ep,...i},ea),o={data:n.data,error:n.error,fetchStatus:n.fetchStatus,isError:n.isError,isFetched:n.isFetched,isFetchedAfterMount:n.isFetchedAfterMount,isFetching:n.isFetching,isIdle:n.isIdle,isLoading:n.isLoading,isRefetching:n.isRefetching,isSuccess:n.isSuccess,refetch:n.refetch,status:n.status,internal:{dataUpdatedAt:n.dataUpdatedAt,errorUpdatedAt:n.errorUpdatedAt,failureCount:n.failureCount,isFetchedAfterMount:n.isFetchedAfterMount,isLoadingError:n.isLoadingError,isPaused:n.isPaused,isPlaceholderData:n.isPlaceholderData,isPreviousData:n.isPreviousData,isRefetchError:n.isRefetchError,isStale:n.isStale,remove:n.remove}};return n.defaultedOptions.notifyOnChangeProps?o:function(e,t){let r={};return Object.keys(e).forEach(i=>{Object.defineProperty(r,i,{configurable:!1,enumerable:!0,get:()=>(t.trackedProps.add(i),e[i])})}),r}(o,n.observer)}var eC=()=>Q({context:ep});function e_({chainId:e}={}){return(0,eh.useSyncExternalStoreWithSelector)(t=>(0,V.pC)({chainId:e},t),()=>(0,V.uV)({chainId:e}),()=>(0,V.uV)({chainId:e}),e=>e,(e,t)=>e.uid===t.uid)}function eE({chainId:e}={}){let t=e_({chainId:e});return t.chain.id}function ek({chainId:e,scopeKey:t}){return[{entity:"blockNumber",chainId:e,scopeKey:t}]}function eS({queryKey:[{chainId:e}]}){return(0,V.RQ)({chainId:e})}function eO({cacheTime:e=0,chainId:t,enabled:r=!0,scopeKey:i,staleTime:n,suspense:o,watch:a=!1,onBlock:s,onError:l,onSettled:c,onSuccess:u}={}){let h=eE({chainId:t}),d=e_({chainId:h}),f=function({chainId:e}={}){return(0,eh.useSyncExternalStoreWithSelector)(t=>(0,V.fq)({chainId:e},t),()=>(0,V.jr)({chainId:e}),()=>(0,V.jr)({chainId:e}),e=>e,(e,t)=>e?.uid===t?.uid)}({chainId:h}),p=eC();return Z.useEffect(()=>{if(!r||!a&&!s)return;let e=f??d,t=e.watchBlockNumber({onBlockNumber:e=>{a&&p.setQueryData(ek({chainId:h,scopeKey:i}),e),s&&s(e)},emitOnBegin:!0});return t},[h,i,s,d,p,a,f,r]),ex(ek({scopeKey:i,chainId:h}),eS,{cacheTime:e,enabled:r,staleTime:n,suspense:o,onError:l,onSettled:c,onSuccess:u})}var eD=e=>"object"==typeof e&&!Array.isArray(e);function eP({onConnect:e,onDisconnect:t}={}){let r=em(),i=Z.useCallback(e=>(0,V.uH)(e),[r]),n=function(e,t,r=t,i=V.vZ){let n=Z.useRef([]),o=(0,eh.useSyncExternalStoreWithSelector)(e,t,r,e=>e,(e,t)=>{if(eD(e)&&eD(t)&&n.current.length){for(let r of n.current){let n=i(e[r],t[r]);if(!n)return!1}return!0}return i(e,t)});if(eD(o)){let e={...o};return Object.defineProperties(e,Object.entries(e).reduce((e,[t,r])=>({...e,[t]:{configurable:!1,enumerable:!0,get:()=>(n.current.includes(t)||n.current.push(t),r)}}),{})),e}return o}(i,V.D0),o=Z.useRef(),a=o.current;return Z.useEffect(()=>{a?.status!=="connected"&&"connected"===n.status&&e?.({address:n.address,connector:n.connector,isReconnected:a?.status==="reconnecting"||a?.status===void 0}),a?.status==="connected"&&"disconnected"===n.status&&t?.(),o.current=n},[e,t,a,n]),n}var eA=e=>[{entity:"connect",...e}],eT=e=>{let{connector:t,chainId:r}=e;if(!t)throw Error("connector is required");return(0,V.$j)({connector:t,chainId:r})};function e$({chainId:e,connector:t,onError:r,onMutate:i,onSettled:n,onSuccess:o}={}){let a=em(),{data:s,error:l,isError:c,isIdle:u,isLoading:h,isSuccess:d,mutate:f,mutateAsync:p,reset:g,status:m,variables:b}=ev(eA({connector:t,chainId:e}),eT,{onError:r,onMutate:i,onSettled:n,onSuccess:o}),w=Z.useCallback(r=>f({chainId:r?.chainId??e,connector:r?.connector??t}),[e,t,f]),y=Z.useCallback(r=>p({chainId:r?.chainId??e,connector:r?.connector??t}),[e,t,p]);return{connect:w,connectAsync:y,connectors:a.connectors,data:s,error:l,isError:c,isIdle:u,isLoading:h,isSuccess:d,pendingConnector:b?.connector,reset:g,status:m,variables:b}}var eI=e=>[{entity:"switchNetwork",...e}],eN=e=>{let{chainId:t}=e;if(!t)throw Error("chainId is required");return(0,V.If)({chainId:t})};function eR({chainId:e,throwForSwitchChainNotSupported:t,onError:r,onMutate:i,onSettled:n,onSuccess:o}={}){let a,s;let l=em(),c=function(){let[,e]=Z.useReducer(e=>e+1,0);return e}(),{data:u,error:h,isError:d,isIdle:f,isLoading:p,isSuccess:g,mutate:m,mutateAsync:b,reset:w,status:y,variables:v}=ev(eI({chainId:e}),eN,{onError:r,onMutate:i,onSettled:n,onSuccess:o}),x=Z.useCallback(t=>m({chainId:t??e}),[e,m]),C=Z.useCallback(t=>b({chainId:t??e}),[e,b]);Z.useEffect(()=>{let e=l.subscribe(({chains:e,connector:t})=>({chains:e,connector:t}),c);return e},[l,c]);let _=!!l.connector?.switchChain;return(t||_)&&(a=x,s=C),{chains:l.chains??[],data:u,error:h,isError:d,isIdle:f,isLoading:p,isSuccess:g,pendingChainId:v?.chainId,reset:w,status:y,switchNetwork:a,switchNetworkAsync:s,variables:v}}function eM({abi:e,address:t,account:r,args:i,blockNumber:n,blockTag:o,cacheOnBlock:a=!1,cacheTime:s,chainId:l,enabled:c=!0,functionName:u,isDataEqual:h,keepPreviousData:f,onError:p,onSettled:g,onSuccess:m,scopeKey:b,select:w,staleTime:y,structuralSharing:v=(e,t)=>(0,V.vZ)(e,t)?e:d(e,t),suspense:x,watch:C}={}){let _=eE({chainId:l}),{data:E}=eO({chainId:_,enabled:C||a,scopeKey:C||a?void 0:"idle",watch:C}),k=n??E,S=Z.useMemo(()=>(function({account:e,address:t,args:r,blockNumber:i,blockTag:n,chainId:o,functionName:a,scopeKey:s}){return[{entity:"readContract",account:e,address:t,args:r,blockNumber:i,blockTag:n,chainId:o,functionName:a,scopeKey:s}]})({account:r,address:t,args:i,blockNumber:a?k:void 0,blockTag:o,chainId:_,functionName:u,scopeKey:b}),[r,t,i,k,o,a,_,u,b]),O=Z.useMemo(()=>{let r=!!(c&&e&&t&&u);return a&&(r=!!(r&&k)),r},[e,t,k,a,c,u]);return function({chainId:e,enabled:t,queryKey:r}){let i=eC(),n=Z.useCallback(()=>i.invalidateQueries({queryKey:r},{cancelRefetch:!1}),[i,r]);eO({chainId:e,enabled:t,onBlock:t?n:void 0,scopeKey:t?void 0:"idle"})}({chainId:_,enabled:!!(O&&C&&!a),queryKey:S}),ex(S,function({abi:e}){return async({queryKey:[{account:t,address:r,args:i,blockNumber:n,blockTag:o,chainId:a,functionName:s}]})=>{if(!e)throw Error("abi is required");if(!r)throw Error("address is required");return await (0,V.a4)({account:t,address:r,args:i,blockNumber:n,blockTag:o,chainId:a,abi:e,functionName:s})??null}}({abi:e}),{cacheTime:s,enabled:O,isDataEqual:h,keepPreviousData:f,select:w,staleTime:y,structuralSharing:v,suspense:x,onError:p,onSettled:g,onSuccess:m})}function ej(e){if("prepared"===e.mode){if(!e.request)throw Error("request is required");return(0,V.n9)({mode:"prepared",request:e.request})}if(!e.address)throw Error("address is required");if(!e.abi)throw Error("abi is required");if(!e.functionName)throw Error("functionName is required");return(0,V.n9)({address:e.address,args:e.args,chainId:e.chainId,abi:e.abi,functionName:e.functionName,accessList:e.accessList,account:e.account,dataSuffix:e.dataSuffix,gas:e.gas,gasPrice:e.gasPrice,maxFeePerGas:e.maxFeePerGas,maxPriorityFeePerGas:e.maxPriorityFeePerGas,nonce:e.nonce,value:e.value})}function eL(e){let{address:t,abi:r,args:i,chainId:n,functionName:o,mode:a,request:s,dataSuffix:l}=e,{accessList:c,account:u,gas:h,gasPrice:d,maxFeePerGas:f,maxPriorityFeePerGas:p,nonce:g,value:m}=(0,V.gY)(e),{data:b,error:w,isError:y,isIdle:v,isLoading:x,isSuccess:C,mutate:_,mutateAsync:E,reset:k,status:S,variables:O}=ev(function({address:e,abi:t,functionName:r,...i}){let{args:n,accessList:o,account:a,dataSuffix:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:h,nonce:d,request:f,value:p}=i;return[{entity:"writeContract",address:e,args:n,abi:t,accessList:o,account:a,dataSuffix:s,functionName:r,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:h,nonce:d,request:f,value:p}]}({address:t,abi:r,functionName:o,chainId:n,mode:a,args:i,accessList:c,account:u,dataSuffix:l,gas:h,gasPrice:d,maxFeePerGas:f,maxPriorityFeePerGas:p,nonce:g,request:s,value:m}),ej,{onError:e.onError,onMutate:e.onMutate,onSettled:e.onSettled,onSuccess:e.onSuccess}),D=Z.useMemo(()=>{if("prepared"===e.mode){if(!s)return;return()=>_({mode:"prepared",request:e.request,chainId:e.chainId})}return e=>_({address:t,args:i,abi:r,functionName:o,chainId:n,accessList:c,account:u,dataSuffix:l,gas:h,gasPrice:d,maxFeePerGas:f,maxPriorityFeePerGas:p,nonce:g,value:m,...e})},[c,u,r,t,i,n,e.chainId,e.mode,e.request,l,o,h,d,f,p,_,g,s,m]),P=Z.useMemo(()=>{if("prepared"===e.mode){if(!s)return;return()=>E({mode:"prepared",request:e.request})}return e=>E({address:t,args:i,abi:r,chainId:n,functionName:o,accessList:c,account:u,dataSuffix:l,gas:h,gasPrice:d,maxFeePerGas:f,maxPriorityFeePerGas:p,nonce:g,value:m,...e})},[c,u,r,t,i,n,e.mode,e.request,l,o,h,d,f,p,E,g,s,m]);return{data:b,error:w,isError:y,isIdle:v,isLoading:x,isSuccess:C,reset:k,status:S,variables:O,write:D,writeAsync:P}}function eB({chainId:e,confirmations:t,hash:r,timeout:i,cacheTime:n,enabled:o=!0,scopeKey:a,staleTime:s,suspense:l,onError:c,onReplaced:u,onSettled:h,onSuccess:d}={}){let f=eE({chainId:e});return ex(function({confirmations:e,chainId:t,hash:r,scopeKey:i,timeout:n}){return[{entity:"waitForTransaction",confirmations:e,chainId:t,hash:r,scopeKey:i,timeout:n}]}({chainId:f,confirmations:t,hash:r,scopeKey:a,timeout:i}),function({onReplaced:e}){return({queryKey:[{chainId:t,confirmations:r,hash:i,timeout:n}]})=>{if(!i)throw Error("hash is required");return(0,V.Mn)({chainId:t,confirmations:r,hash:i,onReplaced:e,timeout:n})}}({onReplaced:u}),{cacheTime:n,enabled:!!(o&&r),staleTime:s,suspense:l,onError:c,onSettled:h,onSuccess:d})}}};