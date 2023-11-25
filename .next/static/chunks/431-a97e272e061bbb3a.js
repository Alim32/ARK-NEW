(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[431],{34310:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(62140);function n(e,t,r){return void 0===t&&(t=new Uint8Array(2)),void 0===r&&(r=0),t[r+0]=e>>>8,t[r+1]=e>>>0,t}function o(e,t,r){return void 0===t&&(t=new Uint8Array(2)),void 0===r&&(r=0),t[r+0]=e>>>0,t[r+1]=e>>>8,t}function a(e,t){return void 0===t&&(t=0),e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}function s(e,t){return void 0===t&&(t=0),(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}function l(e,t){return void 0===t&&(t=0),e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t]}function c(e,t){return void 0===t&&(t=0),(e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t])>>>0}function u(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),t[r+0]=e>>>24,t[r+1]=e>>>16,t[r+2]=e>>>8,t[r+3]=e>>>0,t}function h(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),t[r+0]=e>>>0,t[r+1]=e>>>8,t[r+2]=e>>>16,t[r+3]=e>>>24,t}function d(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),u(e/4294967296>>>0,t,r),u(e>>>0,t,r+4),t}function f(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),h(e>>>0,t,r),h(e/4294967296>>>0,t,r+4),t}t.readInt16BE=function(e,t){return void 0===t&&(t=0),(e[t+0]<<8|e[t+1])<<16>>16},t.readUint16BE=function(e,t){return void 0===t&&(t=0),(e[t+0]<<8|e[t+1])>>>0},t.readInt16LE=function(e,t){return void 0===t&&(t=0),(e[t+1]<<8|e[t])<<16>>16},t.readUint16LE=function(e,t){return void 0===t&&(t=0),(e[t+1]<<8|e[t])>>>0},t.writeUint16BE=n,t.writeInt16BE=n,t.writeUint16LE=o,t.writeInt16LE=o,t.readInt32BE=a,t.readUint32BE=s,t.readInt32LE=l,t.readUint32LE=c,t.writeUint32BE=u,t.writeInt32BE=u,t.writeUint32LE=h,t.writeInt32LE=h,t.readInt64BE=function(e,t){void 0===t&&(t=0);var r=a(e,t),i=a(e,t+4);return 4294967296*r+i-(i>>31)*4294967296},t.readUint64BE=function(e,t){return void 0===t&&(t=0),4294967296*s(e,t)+s(e,t+4)},t.readInt64LE=function(e,t){void 0===t&&(t=0);var r=l(e,t);return 4294967296*l(e,t+4)+r-(r>>31)*4294967296},t.readUint64LE=function(e,t){void 0===t&&(t=0);var r=c(e,t);return 4294967296*c(e,t+4)+r},t.writeUint64BE=d,t.writeInt64BE=d,t.writeUint64LE=f,t.writeInt64LE=f,t.readUintBE=function(e,t,r){if(void 0===r&&(r=0),e%8!=0)throw Error("readUintBE supports only bitLengths divisible by 8");if(e/8>t.length-r)throw Error("readUintBE: array is too short for the given bitLength");for(var i=0,n=1,o=e/8+r-1;o>=r;o--)i+=t[o]*n,n*=256;return i},t.readUintLE=function(e,t,r){if(void 0===r&&(r=0),e%8!=0)throw Error("readUintLE supports only bitLengths divisible by 8");if(e/8>t.length-r)throw Error("readUintLE: array is too short for the given bitLength");for(var i=0,n=1,o=r;o<r+e/8;o++)i+=t[o]*n,n*=256;return i},t.writeUintBE=function(e,t,r,n){if(void 0===r&&(r=new Uint8Array(e/8)),void 0===n&&(n=0),e%8!=0)throw Error("writeUintBE supports only bitLengths divisible by 8");if(!i.isSafeInteger(t))throw Error("writeUintBE value must be an integer");for(var o=1,a=e/8+n-1;a>=n;a--)r[a]=t/o&255,o*=256;return r},t.writeUintLE=function(e,t,r,n){if(void 0===r&&(r=new Uint8Array(e/8)),void 0===n&&(n=0),e%8!=0)throw Error("writeUintLE supports only bitLengths divisible by 8");if(!i.isSafeInteger(t))throw Error("writeUintLE value must be an integer");for(var o=1,a=n;a<n+e/8;a++)r[a]=t/o&255,o*=256;return r},t.readFloat32BE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat32(t)},t.readFloat32LE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat32(t,!0)},t.readFloat64BE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat64(t)},t.readFloat64LE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat64(t,!0)},t.writeFloat32BE=function(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat32(r,e),t},t.writeFloat32LE=function(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat32(r,e,!0),t},t.writeFloat64BE=function(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat64(r,e),t},t.writeFloat64LE=function(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat64(r,e,!0),t}},51040:function(e,t,r){"use strict";var i=r(48733),n=r(66508),o=r(55277),a=r(34310),s=r(51448);t.Cv=32,t.WH=12,t.pg=16;var l=new Uint8Array(16),c=function(){function e(e){if(this.nonceLength=t.WH,this.tagLength=t.pg,e.length!==t.Cv)throw Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(e)}return e.prototype.seal=function(e,t,r,n){if(e.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");var a,s=new Uint8Array(16);s.set(e,s.length-e.length);var l=new Uint8Array(32);i.stream(this._key,s,l,4);var c=t.length+this.tagLength;if(n){if(n.length!==c)throw Error("ChaCha20Poly1305: incorrect destination length");a=n}else a=new Uint8Array(c);return i.streamXOR(this._key,s,t,a,4),this._authenticate(a.subarray(a.length-this.tagLength,a.length),l,a.subarray(0,a.length-this.tagLength),r),o.wipe(s),a},e.prototype.open=function(e,t,r,n){if(e.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");if(t.length<this.tagLength)return null;var a,l=new Uint8Array(16);l.set(e,l.length-e.length);var c=new Uint8Array(32);i.stream(this._key,l,c,4);var u=new Uint8Array(this.tagLength);if(this._authenticate(u,c,t.subarray(0,t.length-this.tagLength),r),!s.equal(u,t.subarray(t.length-this.tagLength,t.length)))return null;var h=t.length-this.tagLength;if(n){if(n.length!==h)throw Error("ChaCha20Poly1305: incorrect destination length");a=n}else a=new Uint8Array(h);return i.streamXOR(this._key,l,t.subarray(0,t.length-this.tagLength),a,4),o.wipe(l),a},e.prototype.clean=function(){return o.wipe(this._key),this},e.prototype._authenticate=function(e,t,r,i){var s=new n.Poly1305(t);i&&(s.update(i),i.length%16>0&&s.update(l.subarray(i.length%16))),s.update(r),r.length%16>0&&s.update(l.subarray(r.length%16));var c=new Uint8Array(8);i&&a.writeUint64LE(i.length,c),s.update(c),a.writeUint64LE(r.length,c),s.update(c);for(var u=s.digest(),h=0;h<u.length;h++)e[h]=u[h];s.clean(),o.wipe(u),o.wipe(c)},e}();t.OK=c},48733:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(34310),n=r(55277);function o(e,t,r,o,a){if(void 0===a&&(a=0),32!==e.length)throw Error("ChaCha: key size must be 32 bytes");if(o.length<r.length)throw Error("ChaCha: destination is shorter than source");if(0===a){if(8!==t.length&&12!==t.length)throw Error("ChaCha nonce must be 8 or 12 bytes");l=(s=new Uint8Array(16)).length-t.length,s.set(t,l)}else{if(16!==t.length)throw Error("ChaCha nonce with counter must be 16 bytes");s=t,l=a}for(var s,l,c=new Uint8Array(64),u=0;u<r.length;u+=64){!function(e,t,r){for(var n=r[3]<<24|r[2]<<16|r[1]<<8|r[0],o=r[7]<<24|r[6]<<16|r[5]<<8|r[4],a=r[11]<<24|r[10]<<16|r[9]<<8|r[8],s=r[15]<<24|r[14]<<16|r[13]<<8|r[12],l=r[19]<<24|r[18]<<16|r[17]<<8|r[16],c=r[23]<<24|r[22]<<16|r[21]<<8|r[20],u=r[27]<<24|r[26]<<16|r[25]<<8|r[24],h=r[31]<<24|r[30]<<16|r[29]<<8|r[28],d=t[3]<<24|t[2]<<16|t[1]<<8|t[0],f=t[7]<<24|t[6]<<16|t[5]<<8|t[4],p=t[11]<<24|t[10]<<16|t[9]<<8|t[8],g=t[15]<<24|t[14]<<16|t[13]<<8|t[12],w=1634760805,b=857760878,m=2036477234,y=1797285236,v=n,x=o,C=a,E=s,k=l,S=c,_=u,A=h,$=d,P=f,O=p,D=g,I=0;I<20;I+=2)$^=w=w+v|0,v^=k=k+($=$>>>16|$<<16)|0,v=v>>>20|v<<12,P^=b=b+x|0,x^=S=S+(P=P>>>16|P<<16)|0,x=x>>>20|x<<12,O^=m=m+C|0,C^=_=_+(O=O>>>16|O<<16)|0,C=C>>>20|C<<12,D^=y=y+E|0,E^=A=A+(D=D>>>16|D<<16)|0,E=E>>>20|E<<12,O^=m=m+C|0,C^=_=_+(O=O>>>24|O<<8)|0,C=C>>>25|C<<7,D^=y=y+E|0,E^=A=A+(D=D>>>24|D<<8)|0,E=E>>>25|E<<7,P^=b=b+x|0,x^=S=S+(P=P>>>24|P<<8)|0,x=x>>>25|x<<7,$^=w=w+v|0,v^=k=k+($=$>>>24|$<<8)|0,v=v>>>25|v<<7,D^=w=w+x|0,x^=_=_+(D=D>>>16|D<<16)|0,x=x>>>20|x<<12,$^=b=b+C|0,C^=A=A+($=$>>>16|$<<16)|0,C=C>>>20|C<<12,P^=m=m+E|0,E^=k=k+(P=P>>>16|P<<16)|0,E=E>>>20|E<<12,O^=y=y+v|0,v^=S=S+(O=O>>>16|O<<16)|0,v=v>>>20|v<<12,P^=m=m+E|0,E^=k=k+(P=P>>>24|P<<8)|0,E=E>>>25|E<<7,O^=y=y+v|0,v^=S=S+(O=O>>>24|O<<8)|0,v=v>>>25|v<<7,$^=b=b+C|0,C^=A=A+($=$>>>24|$<<8)|0,C=C>>>25|C<<7,D^=w=w+x|0,x^=_=_+(D=D>>>24|D<<8)|0,x=x>>>25|x<<7;i.writeUint32LE(w+1634760805|0,e,0),i.writeUint32LE(b+857760878|0,e,4),i.writeUint32LE(m+2036477234|0,e,8),i.writeUint32LE(y+1797285236|0,e,12),i.writeUint32LE(v+n|0,e,16),i.writeUint32LE(x+o|0,e,20),i.writeUint32LE(C+a|0,e,24),i.writeUint32LE(E+s|0,e,28),i.writeUint32LE(k+l|0,e,32),i.writeUint32LE(S+c|0,e,36),i.writeUint32LE(_+u|0,e,40),i.writeUint32LE(A+h|0,e,44),i.writeUint32LE($+d|0,e,48),i.writeUint32LE(P+f|0,e,52),i.writeUint32LE(O+p|0,e,56),i.writeUint32LE(D+g|0,e,60)}(c,s,e);for(var h=u;h<u+64&&h<r.length;h++)o[h]=r[h]^c[h-u];!function(e,t,r){for(var i=1;r--;)i=i+(255&e[t])|0,e[t]=255&i,i>>>=8,t++;if(i>0)throw Error("ChaCha: counter overflow")}(s,0,l)}return n.wipe(c),0===a&&n.wipe(s),o}t.streamXOR=o,t.stream=function(e,t,r,i){return void 0===i&&(i=0),n.wipe(r),o(e,t,r,r,i)}},51448:function(e,t){"use strict";function r(e,t){if(e.length!==t.length)return 0;for(var r=0,i=0;i<e.length;i++)r|=e[i]^t[i];return 1&r-1>>>8}Object.defineProperty(t,"__esModule",{value:!0}),t.select=function(e,t,r){return~(e-1)&t|e-1&r},t.lessOrEqual=function(e,t){return(0|e)-(0|t)-1>>>31&1},t.compare=r,t.equal=function(e,t){return 0!==e.length&&0!==t.length&&0!==r(e,t)}},12621:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSerializableHash=function(e){return void 0!==e.saveState&&void 0!==e.restoreState&&void 0!==e.cleanSavedState}},20342:function(e,t,r){"use strict";var i=r(9922),n=r(55277),o=function(){function e(e,t,r,n){void 0===r&&(r=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=e,this._info=n;var o=i.hmac(this._hash,r,t);this._hmac=new i.HMAC(e,o),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return e.prototype._fillBuffer=function(){this._counter[0]++;var e=this._counter[0];if(0===e)throw Error("hkdf: cannot expand more");this._hmac.reset(),e>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},e.prototype.expand=function(e){for(var t=new Uint8Array(e),r=0;r<t.length;r++)this._bufpos===this._buffer.length&&this._fillBuffer(),t[r]=this._buffer[this._bufpos++];return t},e.prototype.clean=function(){this._hmac.clean(),n.wipe(this._buffer),n.wipe(this._counter),this._bufpos=0},e}();t.t=o},9922:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(12621),n=r(51448),o=r(55277),a=function(){function e(e,t){this._finished=!1,this._inner=new e,this._outer=new e,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var r=new Uint8Array(this.blockSize);t.length>this.blockSize?this._inner.update(t).finish(r).clean():r.set(t);for(var n=0;n<r.length;n++)r[n]^=54;this._inner.update(r);for(var n=0;n<r.length;n++)r[n]^=106;this._outer.update(r),i.isSerializableHash(this._inner)&&i.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),o.wipe(r)}return e.prototype.reset=function(){if(!i.isSerializableHash(this._inner)||!i.isSerializableHash(this._outer))throw Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.clean=function(){i.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),i.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},e.prototype.update=function(e){return this._inner.update(e),this},e.prototype.finish=function(e){return this._finished?this._outer.finish(e):(this._inner.finish(e),this._outer.update(e.subarray(0,this.digestLength)).finish(e),this._finished=!0),this},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e.prototype.saveState=function(){if(!i.isSerializableHash(this._inner))throw Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},e.prototype.restoreState=function(e){if(!i.isSerializableHash(this._inner)||!i.isSerializableHash(this._outer))throw Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(e),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.cleanSavedState=function(e){if(!i.isSerializableHash(this._inner))throw Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(e)},e}();t.HMAC=a,t.hmac=function(e,t,r){var i=new a(e,t);i.update(r);var n=i.digest();return i.clean(),n},t.equal=n.equal},62140:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mul=Math.imul||function(e,t){var r=65535&e,i=65535&t;return r*i+((e>>>16&65535)*i+r*(t>>>16&65535)<<16>>>0)|0},t.add=function(e,t){return e+t|0},t.sub=function(e,t){return e-t|0},t.rotl=function(e,t){return e<<t|e>>>32-t},t.rotr=function(e,t){return e<<32-t|e>>>t},t.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},t.MAX_SAFE_INTEGER=9007199254740991,t.isSafeInteger=function(e){return t.isInteger(e)&&e>=-t.MAX_SAFE_INTEGER&&e<=t.MAX_SAFE_INTEGER}},66508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(51448),n=r(55277);t.DIGEST_LENGTH=16;var o=function(){function e(e){this.digestLength=t.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var r=e[0]|e[1]<<8;this._r[0]=8191&r;var i=e[2]|e[3]<<8;this._r[1]=(r>>>13|i<<3)&8191;var n=e[4]|e[5]<<8;this._r[2]=(i>>>10|n<<6)&7939;var o=e[6]|e[7]<<8;this._r[3]=(n>>>7|o<<9)&8191;var a=e[8]|e[9]<<8;this._r[4]=(o>>>4|a<<12)&255,this._r[5]=a>>>1&8190;var s=e[10]|e[11]<<8;this._r[6]=(a>>>14|s<<2)&8191;var l=e[12]|e[13]<<8;this._r[7]=(s>>>11|l<<5)&8065;var c=e[14]|e[15]<<8;this._r[8]=(l>>>8|c<<8)&8191,this._r[9]=c>>>5&127,this._pad[0]=e[16]|e[17]<<8,this._pad[1]=e[18]|e[19]<<8,this._pad[2]=e[20]|e[21]<<8,this._pad[3]=e[22]|e[23]<<8,this._pad[4]=e[24]|e[25]<<8,this._pad[5]=e[26]|e[27]<<8,this._pad[6]=e[28]|e[29]<<8,this._pad[7]=e[30]|e[31]<<8}return e.prototype._blocks=function(e,t,r){for(var i=this._fin?0:2048,n=this._h[0],o=this._h[1],a=this._h[2],s=this._h[3],l=this._h[4],c=this._h[5],u=this._h[6],h=this._h[7],d=this._h[8],f=this._h[9],p=this._r[0],g=this._r[1],w=this._r[2],b=this._r[3],m=this._r[4],y=this._r[5],v=this._r[6],x=this._r[7],C=this._r[8],E=this._r[9];r>=16;){var k,S=e[t+0]|e[t+1]<<8;n+=8191&S;var _=e[t+2]|e[t+3]<<8;o+=(S>>>13|_<<3)&8191;var A=e[t+4]|e[t+5]<<8;a+=(_>>>10|A<<6)&8191;var $=e[t+6]|e[t+7]<<8;s+=(A>>>7|$<<9)&8191;var P=e[t+8]|e[t+9]<<8;l+=($>>>4|P<<12)&8191,c+=P>>>1&8191;var O=e[t+10]|e[t+11]<<8;u+=(P>>>14|O<<2)&8191;var D=e[t+12]|e[t+13]<<8;h+=(O>>>11|D<<5)&8191;var I=e[t+14]|e[t+15]<<8;d+=(D>>>8|I<<8)&8191,f+=I>>>5|i;var R=0;R=(k=0+n*p+o*(5*E)+a*(5*C)+s*(5*x)+l*(5*v))>>>13,k&=8191,k+=c*(5*y)+u*(5*m)+h*(5*b)+d*(5*w)+f*(5*g),R+=k>>>13,k&=8191;var N=R;N+=n*g+o*p+a*(5*E)+s*(5*C)+l*(5*x),R=N>>>13,N&=8191,N+=c*(5*v)+u*(5*y)+h*(5*m)+d*(5*b)+f*(5*w),R+=N>>>13,N&=8191;var T=R;T+=n*w+o*g+a*p+s*(5*E)+l*(5*C),R=T>>>13,T&=8191,T+=c*(5*x)+u*(5*v)+h*(5*y)+d*(5*m)+f*(5*b),R+=T>>>13,T&=8191;var M=R;M+=n*b+o*w+a*g+s*p+l*(5*E),R=M>>>13,M&=8191,M+=c*(5*C)+u*(5*x)+h*(5*v)+d*(5*y)+f*(5*m),R+=M>>>13,M&=8191;var j=R;j+=n*m+o*b+a*w+s*g+l*p,R=j>>>13,j&=8191,j+=c*(5*E)+u*(5*C)+h*(5*x)+d*(5*v)+f*(5*y),R+=j>>>13,j&=8191;var U=R;U+=n*y+o*m+a*b+s*w+l*g,R=U>>>13,U&=8191,U+=c*p+u*(5*E)+h*(5*C)+d*(5*x)+f*(5*v),R+=U>>>13,U&=8191;var B=R;B+=n*v+o*y+a*m+s*b+l*w,R=B>>>13,B&=8191,B+=c*g+u*p+h*(5*E)+d*(5*C)+f*(5*x),R+=B>>>13,B&=8191;var L=R;L+=n*x+o*v+a*y+s*m+l*b,R=L>>>13,L&=8191,L+=c*w+u*g+h*p+d*(5*E)+f*(5*C),R+=L>>>13,L&=8191;var F=R;F+=n*C+o*x+a*v+s*y+l*m,R=F>>>13,F&=8191,F+=c*b+u*w+h*g+d*p+f*(5*E),R+=F>>>13,F&=8191;var z=R;z+=n*E+o*C+a*x+s*v+l*y,R=z>>>13,z&=8191,z+=c*m+u*b+h*w+d*g+f*p,R+=z>>>13,z&=8191,k=8191&(R=(R=(R<<2)+R|0)+k|0),R>>>=13,N+=R,n=k,o=N,a=T,s=M,l=j,c=U,u=B,h=L,d=F,f=z,t+=16,r-=16}this._h[0]=n,this._h[1]=o,this._h[2]=a,this._h[3]=s,this._h[4]=l,this._h[5]=c,this._h[6]=u,this._h[7]=h,this._h[8]=d,this._h[9]=f},e.prototype.finish=function(e,t){void 0===t&&(t=0);var r,i,n,o,a=new Uint16Array(10);if(this._leftover){for(o=this._leftover,this._buffer[o++]=1;o<16;o++)this._buffer[o]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(r=this._h[1]>>>13,this._h[1]&=8191,o=2;o<10;o++)this._h[o]+=r,r=this._h[o]>>>13,this._h[o]&=8191;for(this._h[0]+=5*r,r=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=r,r=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=r,a[0]=this._h[0]+5,r=a[0]>>>13,a[0]&=8191,o=1;o<10;o++)a[o]=this._h[o]+r,r=a[o]>>>13,a[o]&=8191;for(a[9]-=8192,i=(1^r)-1,o=0;o<10;o++)a[o]&=i;for(o=0,i=~i;o<10;o++)this._h[o]=this._h[o]&i|a[o];for(o=1,this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,n=this._h[0]+this._pad[0],this._h[0]=65535&n;o<8;o++)n=(this._h[o]+this._pad[o]|0)+(n>>>16)|0,this._h[o]=65535&n;return e[t+0]=this._h[0]>>>0,e[t+1]=this._h[0]>>>8,e[t+2]=this._h[1]>>>0,e[t+3]=this._h[1]>>>8,e[t+4]=this._h[2]>>>0,e[t+5]=this._h[2]>>>8,e[t+6]=this._h[3]>>>0,e[t+7]=this._h[3]>>>8,e[t+8]=this._h[4]>>>0,e[t+9]=this._h[4]>>>8,e[t+10]=this._h[5]>>>0,e[t+11]=this._h[5]>>>8,e[t+12]=this._h[6]>>>0,e[t+13]=this._h[6]>>>8,e[t+14]=this._h[7]>>>0,e[t+15]=this._h[7]>>>8,this._finished=!0,this},e.prototype.update=function(e){var t,r=0,i=e.length;if(this._leftover){(t=16-this._leftover)>i&&(t=i);for(var n=0;n<t;n++)this._buffer[this._leftover+n]=e[r+n];if(i-=t,r+=t,this._leftover+=t,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(i>=16&&(t=i-i%16,this._blocks(e,r,t),r+=t,i-=t),i){for(var n=0;n<i;n++)this._buffer[this._leftover+n]=e[r+n];this._leftover+=i}return this},e.prototype.digest=function(){if(this._finished)throw Error("Poly1305 was finished");var e=new Uint8Array(16);return this.finish(e),e},e.prototype.clean=function(){return n.wipe(this._buffer),n.wipe(this._r),n.wipe(this._h),n.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},e}();t.Poly1305=o,t.oneTimeAuth=function(e,t){var r=new o(e);r.update(t);var i=r.digest();return r.clean(),i},t.equal=function(e,r){return e.length===t.DIGEST_LENGTH&&r.length===t.DIGEST_LENGTH&&i.equal(e,r)}},35077:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.randomStringForEntropy=t.randomString=t.randomUint32=t.randomBytes=t.defaultRandomSource=void 0;let i=r(62739),n=r(34310),o=r(55277);function a(e,r=t.defaultRandomSource){return r.randomBytes(e)}t.defaultRandomSource=new i.SystemRandomSource,t.randomBytes=a,t.randomUint32=function(e=t.defaultRandomSource){let r=a(4,e),i=(0,n.readUint32LE)(r);return(0,o.wipe)(r),i};let s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function l(e,r=s,i=t.defaultRandomSource){if(r.length<2)throw Error("randomString charset is too short");if(r.length>256)throw Error("randomString charset is too long");let n="",l=r.length,c=256-256%l;for(;e>0;){let t=a(Math.ceil(256*e/c),i);for(let i=0;i<t.length&&e>0;i++){let o=t[i];o<c&&(n+=r.charAt(o%l),e--)}(0,o.wipe)(t)}return n}t.randomString=l,t.randomStringForEntropy=function(e,r=s,i=t.defaultRandomSource){let n=Math.ceil(e/(Math.log(r.length)/Math.LN2));return l(n,r,i)}},85183:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BrowserRandomSource=void 0,t.BrowserRandomSource=class{constructor(){this.isAvailable=!1,this.isInstantiated=!1;let e="undefined"!=typeof self?self.crypto||self.msCrypto:null;e&&void 0!==e.getRandomValues&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(e){if(!this.isAvailable||!this._crypto)throw Error("Browser random byte generator is not available.");let t=new Uint8Array(e);for(let e=0;e<t.length;e+=65536)this._crypto.getRandomValues(t.subarray(e,e+Math.min(t.length-e,65536)));return t}}},32586:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NodeRandomSource=void 0;let i=r(55277);t.NodeRandomSource=class{constructor(){this.isAvailable=!1,this.isInstantiated=!1;{let e=r(35883);e&&e.randomBytes&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(e){if(!this.isAvailable||!this._crypto)throw Error("Node.js random byte generator is not available.");let t=this._crypto.randomBytes(e);if(t.length!==e)throw Error("NodeRandomSource: got fewer bytes than requested");let r=new Uint8Array(e);for(let e=0;e<r.length;e++)r[e]=t[e];return(0,i.wipe)(t),r}}},62739:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SystemRandomSource=void 0;let i=r(85183),n=r(32586);t.SystemRandomSource=class{constructor(){if(this.isAvailable=!1,this.name="",this._source=new i.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new n.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(e){if(!this.isAvailable)throw Error("System random byte generator is not available.");return this._source.randomBytes(e)}}},87853:function(e,t,r){"use strict";var i=r(34310),n=r(55277);t.k=32,t.cn=64;var o=function(){function e(){this.digestLength=t.k,this.blockSize=t.cn,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return e.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},e.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},e.prototype.clean=function(){n.wipe(this._buffer),n.wipe(this._temp),this.reset()},e.prototype.update=function(e,t){if(void 0===t&&(t=e.length),this._finished)throw Error("SHA256: can't update because hash was finished.");var r=0;if(this._bytesHashed+=t,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&t>0;)this._buffer[this._bufferLength++]=e[r++],t--;this._bufferLength===this.blockSize&&(s(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(t>=this.blockSize&&(r=s(this._temp,this._state,e,r,t),t%=this.blockSize);t>0;)this._buffer[this._bufferLength++]=e[r++],t--;return this},e.prototype.finish=function(e){if(!this._finished){var t=this._bytesHashed,r=this._bufferLength,n=t%64<56?64:128;this._buffer[r]=128;for(var o=r+1;o<n-8;o++)this._buffer[o]=0;i.writeUint32BE(t/536870912|0,this._buffer,n-8),i.writeUint32BE(t<<3,this._buffer,n-4),s(this._temp,this._state,this._buffer,0,n),this._finished=!0}for(var o=0;o<this.digestLength/4;o++)i.writeUint32BE(this._state[o],e,4*o);return this},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e.prototype.saveState=function(){if(this._finished)throw Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},e.prototype.restoreState=function(e){return this._state.set(e.state),this._bufferLength=e.bufferLength,e.buffer&&this._buffer.set(e.buffer),this._bytesHashed=e.bytesHashed,this._finished=!1,this},e.prototype.cleanSavedState=function(e){n.wipe(e.state),e.buffer&&n.wipe(e.buffer),e.bufferLength=0,e.bytesHashed=0},e}();t.mE=o;var a=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function s(e,t,r,n,o){for(;o>=64;){for(var s=t[0],l=t[1],c=t[2],u=t[3],h=t[4],d=t[5],f=t[6],p=t[7],g=0;g<16;g++){var w=n+4*g;e[g]=i.readUint32BE(r,w)}for(var g=16;g<64;g++){var b=e[g-2],m=(b>>>17|b<<15)^(b>>>19|b<<13)^b>>>10,y=((b=e[g-15])>>>7|b<<25)^(b>>>18|b<<14)^b>>>3;e[g]=(m+e[g-7]|0)+(y+e[g-16]|0)}for(var g=0;g<64;g++){var m=(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))+(h&d^~h&f)|0)+(p+(a[g]+e[g]|0)|0)|0,y=((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+(s&l^s&c^l&c)|0;p=f,f=d,d=h,h=u+m|0,u=c,c=l,l=s,s=m+y|0}t[0]+=s,t[1]+=l,t[2]+=c,t[3]+=u,t[4]+=h,t[5]+=d,t[6]+=f,t[7]+=p,n+=64,o-=64}return n}t.vp=function(e){var t=new o;t.update(e);var r=t.digest();return t.clean(),r}},55277:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wipe=function(e){for(var t=0;t<e.length;t++)e[t]=0;return e}},38195:function(e,t,r){"use strict";t.gi=t.Au=t.KS=t.kz=void 0;let i=r(35077),n=r(55277);function o(e){let t=new Float64Array(16);if(e)for(let r=0;r<e.length;r++)t[r]=e[r];return t}t.kz=32,t.KS=32;let a=new Uint8Array(32);a[0]=9;let s=o([56129,1]);function l(e){let t=1;for(let r=0;r<16;r++){let i=e[r]+t+65535;t=Math.floor(i/65536),e[r]=i-65536*t}e[0]+=t-1+37*(t-1)}function c(e,t,r){let i=~(r-1);for(let r=0;r<16;r++){let n=i&(e[r]^t[r]);e[r]^=n,t[r]^=n}}function u(e,t,r){for(let i=0;i<16;i++)e[i]=t[i]+r[i]}function h(e,t,r){for(let i=0;i<16;i++)e[i]=t[i]-r[i]}function d(e,t,r){let i,n,o=0,a=0,s=0,l=0,c=0,u=0,h=0,d=0,f=0,p=0,g=0,w=0,b=0,m=0,y=0,v=0,x=0,C=0,E=0,k=0,S=0,_=0,A=0,$=0,P=0,O=0,D=0,I=0,R=0,N=0,T=0,M=r[0],j=r[1],U=r[2],B=r[3],L=r[4],F=r[5],z=r[6],W=r[7],H=r[8],q=r[9],G=r[10],V=r[11],Z=r[12],K=r[13],Q=r[14],X=r[15];o+=(i=t[0])*M,a+=i*j,s+=i*U,l+=i*B,c+=i*L,u+=i*F,h+=i*z,d+=i*W,f+=i*H,p+=i*q,g+=i*G,w+=i*V,b+=i*Z,m+=i*K,y+=i*Q,v+=i*X,a+=(i=t[1])*M,s+=i*j,l+=i*U,c+=i*B,u+=i*L,h+=i*F,d+=i*z,f+=i*W,p+=i*H,g+=i*q,w+=i*G,b+=i*V,m+=i*Z,y+=i*K,v+=i*Q,x+=i*X,s+=(i=t[2])*M,l+=i*j,c+=i*U,u+=i*B,h+=i*L,d+=i*F,f+=i*z,p+=i*W,g+=i*H,w+=i*q,b+=i*G,m+=i*V,y+=i*Z,v+=i*K,x+=i*Q,C+=i*X,l+=(i=t[3])*M,c+=i*j,u+=i*U,h+=i*B,d+=i*L,f+=i*F,p+=i*z,g+=i*W,w+=i*H,b+=i*q,m+=i*G,y+=i*V,v+=i*Z,x+=i*K,C+=i*Q,E+=i*X,c+=(i=t[4])*M,u+=i*j,h+=i*U,d+=i*B,f+=i*L,p+=i*F,g+=i*z,w+=i*W,b+=i*H,m+=i*q,y+=i*G,v+=i*V,x+=i*Z,C+=i*K,E+=i*Q,k+=i*X,u+=(i=t[5])*M,h+=i*j,d+=i*U,f+=i*B,p+=i*L,g+=i*F,w+=i*z,b+=i*W,m+=i*H,y+=i*q,v+=i*G,x+=i*V,C+=i*Z,E+=i*K,k+=i*Q,S+=i*X,h+=(i=t[6])*M,d+=i*j,f+=i*U,p+=i*B,g+=i*L,w+=i*F,b+=i*z,m+=i*W,y+=i*H,v+=i*q,x+=i*G,C+=i*V,E+=i*Z,k+=i*K,S+=i*Q,_+=i*X,d+=(i=t[7])*M,f+=i*j,p+=i*U,g+=i*B,w+=i*L,b+=i*F,m+=i*z,y+=i*W,v+=i*H,x+=i*q,C+=i*G,E+=i*V,k+=i*Z,S+=i*K,_+=i*Q,A+=i*X,f+=(i=t[8])*M,p+=i*j,g+=i*U,w+=i*B,b+=i*L,m+=i*F,y+=i*z,v+=i*W,x+=i*H,C+=i*q,E+=i*G,k+=i*V,S+=i*Z,_+=i*K,A+=i*Q,$+=i*X,p+=(i=t[9])*M,g+=i*j,w+=i*U,b+=i*B,m+=i*L,y+=i*F,v+=i*z,x+=i*W,C+=i*H,E+=i*q,k+=i*G,S+=i*V,_+=i*Z,A+=i*K,$+=i*Q,P+=i*X,g+=(i=t[10])*M,w+=i*j,b+=i*U,m+=i*B,y+=i*L,v+=i*F,x+=i*z,C+=i*W,E+=i*H,k+=i*q,S+=i*G,_+=i*V,A+=i*Z,$+=i*K,P+=i*Q,O+=i*X,w+=(i=t[11])*M,b+=i*j,m+=i*U,y+=i*B,v+=i*L,x+=i*F,C+=i*z,E+=i*W,k+=i*H,S+=i*q,_+=i*G,A+=i*V,$+=i*Z,P+=i*K,O+=i*Q,D+=i*X,b+=(i=t[12])*M,m+=i*j,y+=i*U,v+=i*B,x+=i*L,C+=i*F,E+=i*z,k+=i*W,S+=i*H,_+=i*q,A+=i*G,$+=i*V,P+=i*Z,O+=i*K,D+=i*Q,I+=i*X,m+=(i=t[13])*M,y+=i*j,v+=i*U,x+=i*B,C+=i*L,E+=i*F,k+=i*z,S+=i*W,_+=i*H,A+=i*q,$+=i*G,P+=i*V,O+=i*Z,D+=i*K,I+=i*Q,R+=i*X,y+=(i=t[14])*M,v+=i*j,x+=i*U,C+=i*B,E+=i*L,k+=i*F,S+=i*z,_+=i*W,A+=i*H,$+=i*q,P+=i*G,O+=i*V,D+=i*Z,I+=i*K,R+=i*Q,N+=i*X,v+=(i=t[15])*M,x+=i*j,C+=i*U,E+=i*B,k+=i*L,S+=i*F,_+=i*z,A+=i*W,$+=i*H,P+=i*q,O+=i*G,D+=i*V,I+=i*Z,R+=i*K,N+=i*Q,T+=i*X,o+=38*x,a+=38*C,s+=38*E,l+=38*k,c+=38*S,u+=38*_,h+=38*A,d+=38*$,f+=38*P,p+=38*O,g+=38*D,w+=38*I,b+=38*R,m+=38*N,y+=38*T,n=Math.floor((i=o+(n=1)+65535)/65536),o=i-65536*n,n=Math.floor((i=a+n+65535)/65536),a=i-65536*n,n=Math.floor((i=s+n+65535)/65536),s=i-65536*n,n=Math.floor((i=l+n+65535)/65536),l=i-65536*n,n=Math.floor((i=c+n+65535)/65536),c=i-65536*n,n=Math.floor((i=u+n+65535)/65536),u=i-65536*n,n=Math.floor((i=h+n+65535)/65536),h=i-65536*n,n=Math.floor((i=d+n+65535)/65536),d=i-65536*n,n=Math.floor((i=f+n+65535)/65536),f=i-65536*n,n=Math.floor((i=p+n+65535)/65536),p=i-65536*n,n=Math.floor((i=g+n+65535)/65536),g=i-65536*n,n=Math.floor((i=w+n+65535)/65536),w=i-65536*n,n=Math.floor((i=b+n+65535)/65536),b=i-65536*n,n=Math.floor((i=m+n+65535)/65536),m=i-65536*n,n=Math.floor((i=y+n+65535)/65536),y=i-65536*n,n=Math.floor((i=v+n+65535)/65536),v=i-65536*n,o+=n-1+37*(n-1),n=Math.floor((i=o+(n=1)+65535)/65536),o=i-65536*n,n=Math.floor((i=a+n+65535)/65536),a=i-65536*n,n=Math.floor((i=s+n+65535)/65536),s=i-65536*n,n=Math.floor((i=l+n+65535)/65536),l=i-65536*n,n=Math.floor((i=c+n+65535)/65536),c=i-65536*n,n=Math.floor((i=u+n+65535)/65536),u=i-65536*n,n=Math.floor((i=h+n+65535)/65536),h=i-65536*n,n=Math.floor((i=d+n+65535)/65536),d=i-65536*n,n=Math.floor((i=f+n+65535)/65536),f=i-65536*n,n=Math.floor((i=p+n+65535)/65536),p=i-65536*n,n=Math.floor((i=g+n+65535)/65536),g=i-65536*n,n=Math.floor((i=w+n+65535)/65536),w=i-65536*n,n=Math.floor((i=b+n+65535)/65536),b=i-65536*n,n=Math.floor((i=m+n+65535)/65536),m=i-65536*n,n=Math.floor((i=y+n+65535)/65536),y=i-65536*n,n=Math.floor((i=v+n+65535)/65536),v=i-65536*n,o+=n-1+37*(n-1),e[0]=o,e[1]=a,e[2]=s,e[3]=l,e[4]=c,e[5]=u,e[6]=h,e[7]=d,e[8]=f,e[9]=p,e[10]=g,e[11]=w,e[12]=b,e[13]=m,e[14]=y,e[15]=v}function f(e,t){let r=new Uint8Array(32),i=new Float64Array(80),n=o(),a=o(),f=o(),p=o(),g=o(),w=o();for(let t=0;t<31;t++)r[t]=e[t];r[31]=127&e[31]|64,r[0]&=248,function(e,t){for(let r=0;r<16;r++)e[r]=t[2*r]+(t[2*r+1]<<8);e[15]&=32767}(i,t);for(let e=0;e<16;e++)a[e]=i[e];n[0]=p[0]=1;for(let e=254;e>=0;--e){let t=r[e>>>3]>>>(7&e)&1;c(n,a,t),c(f,p,t),u(g,n,f),h(n,n,f),u(f,a,p),h(a,a,p),d(p,g,g),d(w,n,n),d(n,f,n),d(f,a,g),u(g,n,f),h(n,n,f),d(a,n,n),h(f,p,w),d(n,f,s),u(n,n,p),d(f,f,n),d(n,p,w),d(p,a,i),d(a,g,g),c(n,a,t),c(f,p,t)}for(let e=0;e<16;e++)i[e+16]=n[e],i[e+32]=f[e],i[e+48]=a[e],i[e+64]=p[e];let b=i.subarray(32),m=i.subarray(16);!function(e,t){let r=o();for(let e=0;e<16;e++)r[e]=t[e];for(let e=253;e>=0;e--)d(r,r,r),2!==e&&4!==e&&d(r,r,t);for(let t=0;t<16;t++)e[t]=r[t]}(b,b),d(m,m,b);let y=new Uint8Array(32);return!function(e,t){let r=o(),i=o();for(let e=0;e<16;e++)i[e]=t[e];l(i),l(i),l(i);for(let e=0;e<2;e++){r[0]=i[0]-65517;for(let e=1;e<15;e++)r[e]=i[e]-65535-(r[e-1]>>16&1),r[e-1]&=65535;r[15]=i[15]-32767-(r[14]>>16&1);let e=r[15]>>16&1;r[14]&=65535,c(i,r,1-e)}for(let t=0;t<16;t++)e[2*t]=255&i[t],e[2*t+1]=i[t]>>8}(y,m),y}t.Au=function(e){let r=(0,i.randomBytes)(32,e),o=function(e){if(e.length!==t.KS)throw Error(`x25519: seed must be ${t.KS} bytes`);let r=new Uint8Array(e),i=f(r,a);return{publicKey:i,secretKey:r}}(r);return(0,n.wipe)(r),o},t.gi=function(e,r,i=!1){if(e.length!==t.kz)throw Error("X25519: incorrect secret key length");if(r.length!==t.kz)throw Error("X25519: incorrect public key length");let n=f(e,r);if(i){let e=0;for(let t=0;t<n.length;t++)e|=n[t];if(0===e)throw Error("X25519: invalid shared key")}return n}},24584:function(){},72852:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(1812);i.__exportStar(r(83343),t),i.__exportStar(r(38520),t)},83343:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_THOUSAND=t.ONE_HUNDRED=void 0,t.ONE_HUNDRED=100,t.ONE_THOUSAND=1e3},38520:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_YEAR=t.FOUR_WEEKS=t.THREE_WEEKS=t.TWO_WEEKS=t.ONE_WEEK=t.THIRTY_DAYS=t.SEVEN_DAYS=t.FIVE_DAYS=t.THREE_DAYS=t.ONE_DAY=t.TWENTY_FOUR_HOURS=t.TWELVE_HOURS=t.SIX_HOURS=t.THREE_HOURS=t.ONE_HOUR=t.SIXTY_MINUTES=t.THIRTY_MINUTES=t.TEN_MINUTES=t.FIVE_MINUTES=t.ONE_MINUTE=t.SIXTY_SECONDS=t.THIRTY_SECONDS=t.TEN_SECONDS=t.FIVE_SECONDS=t.ONE_SECOND=void 0,t.ONE_SECOND=1,t.FIVE_SECONDS=5,t.TEN_SECONDS=10,t.THIRTY_SECONDS=30,t.SIXTY_SECONDS=60,t.ONE_MINUTE=t.SIXTY_SECONDS,t.FIVE_MINUTES=5*t.ONE_MINUTE,t.TEN_MINUTES=10*t.ONE_MINUTE,t.THIRTY_MINUTES=30*t.ONE_MINUTE,t.SIXTY_MINUTES=60*t.ONE_MINUTE,t.ONE_HOUR=t.SIXTY_MINUTES,t.THREE_HOURS=3*t.ONE_HOUR,t.SIX_HOURS=6*t.ONE_HOUR,t.TWELVE_HOURS=12*t.ONE_HOUR,t.TWENTY_FOUR_HOURS=24*t.ONE_HOUR,t.ONE_DAY=t.TWENTY_FOUR_HOURS,t.THREE_DAYS=3*t.ONE_DAY,t.FIVE_DAYS=5*t.ONE_DAY,t.SEVEN_DAYS=7*t.ONE_DAY,t.THIRTY_DAYS=30*t.ONE_DAY,t.ONE_WEEK=t.SEVEN_DAYS,t.TWO_WEEKS=2*t.ONE_WEEK,t.THREE_WEEKS=3*t.ONE_WEEK,t.FOUR_WEEKS=4*t.ONE_WEEK,t.ONE_YEAR=365*t.ONE_DAY},58619:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(1812);i.__exportStar(r(6954),t),i.__exportStar(r(91895),t),i.__exportStar(r(21087),t),i.__exportStar(r(72852),t)},21087:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(1812);i.__exportStar(r(36448),t)},36448:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IWatch=void 0,t.IWatch=class{}},24810:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fromMiliseconds=t.toMiliseconds=void 0;let i=r(72852);t.toMiliseconds=function(e){return e*i.ONE_THOUSAND},t.fromMiliseconds=function(e){return Math.floor(e/i.ONE_THOUSAND)}},18995:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.delay=void 0,t.delay=function(e){return new Promise(t=>{setTimeout(()=>{t(!0)},e)})}},6954:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(1812);i.__exportStar(r(18995),t),i.__exportStar(r(24810),t)},91895:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Watch=void 0;class r{constructor(){this.timestamps=new Map}start(e){if(this.timestamps.has(e))throw Error(`Watch already started for label: ${e}`);this.timestamps.set(e,{started:Date.now()})}stop(e){let t=this.get(e);if(void 0!==t.elapsed)throw Error(`Watch already stopped for label: ${e}`);let r=Date.now()-t.started;this.timestamps.set(e,{started:t.started,elapsed:r})}get(e){let t=this.timestamps.get(e);if(void 0===t)throw Error(`No timestamp found for label: ${e}`);return t}elapsed(e){let t=this.get(e),r=t.elapsed||Date.now()-t.started;return r}}t.Watch=r,t.default=r},1812:function(e,t,r){"use strict";r.r(t),r.d(t,{__assign:function(){return o},__asyncDelegator:function(){return v},__asyncGenerator:function(){return y},__asyncValues:function(){return x},__await:function(){return m},__awaiter:function(){return u},__classPrivateFieldGet:function(){return S},__classPrivateFieldSet:function(){return _},__createBinding:function(){return d},__decorate:function(){return s},__exportStar:function(){return f},__extends:function(){return n},__generator:function(){return h},__importDefault:function(){return k},__importStar:function(){return E},__makeTemplateObject:function(){return C},__metadata:function(){return c},__param:function(){return l},__read:function(){return g},__rest:function(){return a},__spread:function(){return w},__spreadArrays:function(){return b},__values:function(){return p}});/*! *****************************************************************************
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
***************************************************************************** */var i=function(e,t){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function n(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o=function(){return(o=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function a(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++)0>t.indexOf(i[n])&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]]);return r}function s(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}function l(e,t){return function(r,i){t(r,i,e)}}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,r,i){return new(r||(r=Promise))(function(n,o){function a(e){try{l(i.next(e))}catch(e){o(e)}}function s(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}l((i=i.apply(e,t||[])).next())})}function h(e,t){var r,i,n,o,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw TypeError("Generator is already executing.");for(;a;)try{if(r=1,i&&(n=2&o[0]?i.return:o[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,o[1])).done)return n;switch(i=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(n=(n=a.trys).length>0&&n[n.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){a.label=o[1];break}if(6===o[0]&&a.label<n[1]){a.label=n[1],n=o;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(o);break}n[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],i=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function d(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}function f(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||(t[r]=e[r])}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],i=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var i,n,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(i=o.next()).done;)a.push(i.value)}catch(e){n={error:e}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return a}function w(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]));return e}function b(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var i=Array(e),n=0,t=0;t<r;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,n++)i[n]=o[a];return i}function m(e){return this instanceof m?(this.v=e,this):new m(e)}function y(e,t,r){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var i,n=r.apply(e,t||[]),o=[];return i={},a("next"),a("throw"),a("return"),i[Symbol.asyncIterator]=function(){return this},i;function a(e){n[e]&&(i[e]=function(t){return new Promise(function(r,i){o.push([e,t,r,i])>1||s(e,t)})})}function s(e,t){try{var r;(r=n[e](t)).value instanceof m?Promise.resolve(r.value.v).then(l,c):u(o[0][2],r)}catch(e){u(o[0][3],e)}}function l(e){s("next",e)}function c(e){s("throw",e)}function u(e,t){e(t),o.shift(),o.length&&s(o[0][0],o[0][1])}}function v(e){var t,r;return t={},i("next"),i("throw",function(e){throw e}),i("return"),t[Symbol.iterator]=function(){return this},t;function i(i,n){t[i]=e[i]?function(t){return(r=!r)?{value:m(e[i](t)),done:"return"===i}:n?n(t):t}:n}}function x(e){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=p(e),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(r){t[r]=e[r]&&function(t){return new Promise(function(i,n){!function(e,t,r,i){Promise.resolve(i).then(function(t){e({value:t,done:r})},t)}(i,n,(t=e[r](t)).done,t.value)})}}}function C(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function E(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function k(e){return e&&e.__esModule?e:{default:e}}function S(e,t){if(!t.has(e))throw TypeError("attempted to get private field on non-instance");return t.get(e)}function _(e,t,r){if(!t.has(e))throw TypeError("attempted to set private field on non-instance");return t.set(e,r),r}},75409:function(e,t,r){"use strict";r.d(t,{AW:function(){return O},O6:function(){return tw},rV:function(){return R},gn:function(){return ep},H1:function(){return el},hF:function(){return ec},WG:function(){return B},pe:function(){return F},m$:function(){return M},vB:function(){return z},HI:function(){return L},E0:function(){return ew},Gq:function(){return ed},$0:function(){return en},Z4:function(){return eh},Bv:function(){return e$},Au:function(){return N},jd:function(){return T},gu:function(){return A},D:function(){return ei},Z7:function(){return eq},cO:function(){return ev},_H:function(){return ey},fc:function(){return eB},D6:function(){return eG},Hh:function(){return em},Ym:function(){return j},rj:function(){return U},jU:function(){return et},gp:function(){return eL},rF:function(){return tc},Bw:function(){return eg},UG:function(){return J},Gg:function(){return td},xW:function(){return e1},b$:function(){return ee},Ih:function(){return eY},h1:function(){return e2},Q8:function(){return q},o8:function(){return eK},qt:function(){return eV},Dd:function(){return e5},$t:function(){return tr},nf:function(){return to},Q0:function(){return te},in:function(){return e8},p8:function(){return ta},sI:function(){return tl},al:function(){return ts},L5:function(){return eZ},EJ:function(){return tt},Z2:function(){return e9},PM:function(){return e7},hH:function(){return ti},ON:function(){return th},n:function(){return e4},JT:function(){return tn},M_:function(){return eQ},jv:function(){return e0},KC:function(){return ea},eG:function(){return eb},fK:function(){return ez},IP:function(){return es},DQ:function(){return _},iP:function(){return ef},M:function(){return eF},he:function(){return eA},uw:function(){return tp},Ll:function(){return W},EN:function(){return H}});var i=r(51040),n=r(20342),o=r(35077),a=r(87853),s=r(38195),l=r(71188),c=r(62601),u=function(e,t,r){if(r||2==arguments.length)for(var i,n=0,o=t.length;n<o;n++)!i&&n in t||(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))},h=function(e,t,r){this.name=e,this.version=t,this.os=r,this.type="browser"},d=function(e){this.version=e,this.type="node",this.name="node",this.os=c.platform},f=function(e,t,r,i){this.name=e,this.version=t,this.os=r,this.bot=i,this.type="bot-device"},p=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},g=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},w=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,b=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],m=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function y(e){var t=""!==e&&b.reduce(function(t,r){var i=r[0],n=r[1];if(t)return t;var o=n.exec(e);return!!o&&[i,o]},!1);if(!t)return null;var r=t[0],i=t[1];if("searchbot"===r)return new p;var n=i[1]&&i[1].split(".").join("_").split("_").slice(0,3);n?n.length<3&&(n=u(u([],n,!0),function(e){for(var t=[],r=0;r<e;r++)t.push("0");return t}(3-n.length),!0)):n=[];var o=n.join("."),a=function(e){for(var t=0,r=m.length;t<r;t++){var i=m[t],n=i[0];if(i[1].exec(e))return n}return null}(e),s=w.exec(e);return s&&s[1]?new f(r,o,a,s[1]):new h(r,o,a)}var v=r(58619),x=r(849),C=r(36073),E=r(43824);r(24584);let k={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}};var S=r(62601);function _(e){let[t,r]=e.split(":");return{namespace:t,reference:r}}function A(e,t=[]){let r=[];return Object.keys(e).forEach(i=>{if(t.length&&!t.includes(i))return;let n=e[i];r.push(...n.accounts)}),r}function $(e,t){return e.includes(":")?[e]:t.chains||[]}let P="base10",O="base16",D="base64pad",I="utf8",R=1;function N(){let e=s.Au();return{privateKey:(0,l.BB)(e.secretKey,O),publicKey:(0,l.BB)(e.publicKey,O)}}function T(){let e=(0,o.randomBytes)(32);return(0,l.BB)(e,O)}function M(e,t){let r=s.gi((0,l.mL)(e,O),(0,l.mL)(t,O),!0),i=new n.t(a.mE,r).expand(32);return(0,l.BB)(i,O)}function j(e){let t=(0,a.vp)((0,l.mL)(e,O));return(0,l.BB)(t,O)}function U(e){let t=(0,a.vp)((0,l.mL)(e,I));return(0,l.BB)(t,O)}function B(e){return Number((0,l.BB)(e,P))}function L(e){var t;let r=(t="u">typeof e.type?e.type:0,(0,l.mL)(`${t}`,P));if(B(r)===R&&typeof e.senderPublicKey>"u")throw Error("Missing sender public key for type 1 envelope");let n="u">typeof e.senderPublicKey?(0,l.mL)(e.senderPublicKey,O):void 0,a="u">typeof e.iv?(0,l.mL)(e.iv,O):(0,o.randomBytes)(12),s=new i.OK((0,l.mL)(e.symKey,O)).seal(a,(0,l.mL)(e.message,I));return function(e){if(B(e.type)===R){if(typeof e.senderPublicKey>"u")throw Error("Missing sender public key for type 1 envelope");return(0,l.BB)((0,l.zo)([e.type,e.senderPublicKey,e.iv,e.sealed]),D)}return(0,l.BB)((0,l.zo)([e.type,e.iv,e.sealed]),D)}({type:r,sealed:s,iv:a,senderPublicKey:n})}function F(e){let t=new i.OK((0,l.mL)(e.symKey,O)),{sealed:r,iv:n}=z(e.encoded),o=t.open(n,r);if(null===o)throw Error("Failed to decrypt");return(0,l.BB)(o,I)}function z(e){let t=(0,l.mL)(e,D),r=t.slice(0,1);if(B(r)===R){let e=t.slice(1,33),i=t.slice(33,45),n=t.slice(45);return{type:r,sealed:n,iv:i,senderPublicKey:e}}let i=t.slice(1,13),n=t.slice(13);return{type:r,sealed:n,iv:i}}function W(e,t){let r=z(e);return H({type:B(r.type),senderPublicKey:"u">typeof r.senderPublicKey?(0,l.BB)(r.senderPublicKey,O):void 0,receiverPublicKey:t?.receiverPublicKey})}function H(e){let t=e?.type||0;if(t===R){if(typeof e?.senderPublicKey>"u")throw Error("missing sender public key");if(typeof e?.receiverPublicKey>"u")throw Error("missing receiver public key")}return{type:t,senderPublicKey:e?.senderPublicKey,receiverPublicKey:e?.receiverPublicKey}}function q(e){return e.type===R&&"string"==typeof e.senderPublicKey&&"string"==typeof e.receiverPublicKey}var G=Object.defineProperty,V=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,Q=(e,t,r)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,X=(e,t)=>{for(var r in t||(t={}))Z.call(t,r)&&Q(e,r,t[r]);if(V)for(var r of V(t))K.call(t,r)&&Q(e,r,t[r]);return e};let Y={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"};function J(){return"u">typeof S&&"u">typeof S.versions&&"u">typeof S.versions.node}function ee(){return!(0,x.getDocument)()&&!!(0,x.getNavigator)()&&"ReactNative"===navigator.product}function et(){return!J()&&!!(0,x.getNavigator)()}function er(){return ee()?Y.reactNative:J()?Y.node:et()?Y.browser:Y.unknown}function ei(){return(0,C.D)()||{name:"",description:"",url:"",icons:[""]}}function en({protocol:e,version:t,relayUrl:i,sdkVersion:n,auth:o,projectId:a,useOnCloseEvent:s}){var l;let u;let h=i.split("?"),f=function(e,t,i){let n=function(){var e;if(er()===Y.reactNative&&"u">typeof r.g&&"u">typeof(null==r.g?void 0:r.g.Platform)){let{OS:e,Version:t}=r.g.Platform;return[e,t].join("-")}let t=e?y(e):"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new g:"undefined"!=typeof navigator?y(navigator.userAgent):void 0!==c&&c.version?new d(c.version.slice(1)):null;if(null===t)return"unknown";let i=t.os?t.os.replace(" ","").toLowerCase():"unknown";return"browser"===t.type?[i,t.name,t.version].join("-"):[i,t.version].join("-")}(),o=function(){var e;let t=er();return t===Y.browser?[t,(null==(e=(0,x.getLocation)())?void 0:e.host)||"unknown"].join(":"):t}();return[[e,t].join("-"),["js",i].join("-"),n,o].join("/")}(e,t,n),p=(l=h[1]||"",u=X(X({},u=E.parse(l)),{auth:o,ua:f,projectId:a,useOnCloseEvent:s||void 0}),l=E.stringify(u));return h[0]+"?"+p}function eo(e,t){return e.filter(e=>t.includes(e)).length===e.length}function ea(e){return Object.fromEntries(e.entries())}function es(e){return new Map(Object.entries(e))}function el(e=v.FIVE_MINUTES,t){let r,i,n;let o=(0,v.toMiliseconds)(e||v.FIVE_MINUTES);return{resolve:e=>{n&&r&&(clearTimeout(n),r(e))},reject:e=>{n&&i&&(clearTimeout(n),i(e))},done:()=>new Promise((e,a)=>{n=setTimeout(()=>{a(Error(t))},o),r=e,i=a})}}function ec(e,t,r){return new Promise(async(i,n)=>{let o=setTimeout(()=>n(Error(r)),t);try{let t=await e;i(t)}catch(e){n(e)}clearTimeout(o)})}function eu(e,t){if("string"==typeof t&&t.startsWith(`${e}:`))return t;if("topic"===e.toLowerCase()){if("string"!=typeof t)throw Error('Value must be "string" for expirer target type: topic');return`topic:${t}`}if("id"===e.toLowerCase()){if("number"!=typeof t)throw Error('Value must be "number" for expirer target type: id');return`id:${t}`}throw Error(`Unknown expirer target type: ${e}`)}function eh(e){return eu("topic",e)}function ed(e){return eu("id",e)}function ef(e){let[t,r]=e.split(":"),i={id:void 0,topic:void 0};if("topic"===t&&"string"==typeof r)i.topic=r;else if("id"===t&&Number.isInteger(Number(r)))i.id=Number(r);else throw Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);return i}function ep(e,t){return(0,v.fromMiliseconds)((t||Date.now())+(0,v.toMiliseconds)(e))}function eg(e){return Date.now()>=(0,v.toMiliseconds)(e)}function ew(e,t){return`${e}${t?`:${t}`:""}`}function eb(e=[],t=[]){return[...new Set([...e,...t])]}async function em({id:e,topic:t,wcDeepLink:i}){try{if(!i)return;let n="string"==typeof i?JSON.parse(i):i,o=n?.href;if("string"!=typeof o)return;o.endsWith("/")&&(o=o.slice(0,-1));let a=`${o}/wc?requestId=${e}&sessionTopic=${t}`,s=er();s===Y.browser?a.startsWith("https://")?window.open(a,"_blank","noreferrer noopener"):window.open(a,"_self","noreferrer noopener"):s===Y.reactNative&&"u">typeof(null==r.g?void 0:r.g.Linking)&&await r.g.Linking.openURL(a)}catch(e){console.error(e)}}function ey(e){return e?.relay||{protocol:"irn"}}function ev(e){let t=k[e];if(typeof t>"u")throw Error(`Relay Protocol not supported: ${e}`);return t}var ex=Object.defineProperty,eC=Object.getOwnPropertySymbols,eE=Object.prototype.hasOwnProperty,ek=Object.prototype.propertyIsEnumerable,eS=(e,t,r)=>t in e?ex(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,e_=(e,t)=>{for(var r in t||(t={}))eE.call(t,r)&&eS(e,r,t[r]);if(eC)for(var r of eC(t))ek.call(t,r)&&eS(e,r,t[r]);return e};function eA(e){var t;let r=e.indexOf(":"),i=-1!==e.indexOf("?")?e.indexOf("?"):void 0,n=e.substring(0,r),o=e.substring(r+1,i).split("@"),a="u">typeof i?e.substring(i):"",s=E.parse(a);return{protocol:n,topic:(t=o[0]).startsWith("//")?t.substring(2):t,version:parseInt(o[1],10),symKey:s.symKey,relay:function(e,t="-"){let r={},i="relay"+t;return Object.keys(e).forEach(t=>{if(t.startsWith(i)){let n=t.replace(i,""),o=e[t];r[n]=o}}),r}(s)}}function e$(e){return`${e.protocol}:${e.topic}@${e.version}?`+E.stringify(e_({symKey:e.symKey},function(e,t="-"){let r={};return Object.keys(e).forEach(i=>{e[i]&&(r["relay"+t+i]=e[i])}),r}(e.relay)))}var eP=Object.defineProperty,eO=Object.defineProperties,eD=Object.getOwnPropertyDescriptors,eI=Object.getOwnPropertySymbols,eR=Object.prototype.hasOwnProperty,eN=Object.prototype.propertyIsEnumerable,eT=(e,t,r)=>t in e?eP(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,eM=(e,t)=>{for(var r in t||(t={}))eR.call(t,r)&&eT(e,r,t[r]);if(eI)for(var r of eI(t))eN.call(t,r)&&eT(e,r,t[r]);return e},ej=(e,t)=>eO(e,eD(t));function eU(e){let t=[];return e.forEach(e=>{let[r,i]=e.split(":");t.push(`${r}:${i}`)}),t}function eB(e,t){let r=e8(e,t);if(r)throw Error(r.message);let i={};for(let[t,r]of Object.entries(e))i[t]={methods:r.methods,events:r.events,chains:r.accounts.map(e=>`${e.split(":")[0]}:${e.split(":")[1]}`)};return i}function eL(e){return e.includes(":")}function eF(e){return eL(e)?e.split(":")[0]:e}function ez(e){var t,r,i;let n={};if(!eZ(e))return n;for(let[o,a]of Object.entries(e)){let e=eL(o)?[o]:a.chains,s=a.methods||[],l=a.events||[],c=eF(o);n[c]=ej(eM({},n[c]),{chains:eb(e,null==(t=n[c])?void 0:t.chains),methods:eb(s,null==(r=n[c])?void 0:r.methods),events:eb(l,null==(i=n[c])?void 0:i.events)})}return n}let eW={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},eH={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function eq(e,t){let{message:r,code:i}=eH[e];return{message:t?`${r} ${t}`:r,code:i}}function eG(e,t){let{message:r,code:i}=eW[e];return{message:t?`${r} ${t}`:r,code:i}}function eV(e,t){return!!Array.isArray(e)&&(!("u">typeof t)||!e.length||e.every(t))}function eZ(e){return Object.getPrototypeOf(e)===Object.prototype&&Object.keys(e).length}function eK(e){return typeof e>"u"}function eQ(e,t){return!!(t&&eK(e))||"string"==typeof e&&!!e.trim().length}function eX(e,t){return!!(t&&eK(e))||"number"==typeof e&&!isNaN(e)}function eY(e,t){let{requiredNamespaces:r}=t,i=Object.keys(e.namespaces),n=Object.keys(r),o=!0;return!!eo(n,i)&&(i.forEach(t=>{let{accounts:i,methods:n,events:a}=e.namespaces[t],s=eU(i),l=r[t];eo($(t,l),s)&&eo(l.methods,n)&&eo(l.events,a)||(o=!1)}),o)}function eJ(e){return!!(eQ(e,!1)&&e.includes(":"))&&2===e.split(":").length}function e0(e){if(eQ(e,!1))try{return"u">typeof new URL(e)}catch{}return!1}function e1(e){var t;return null==(t=e?.proposer)?void 0:t.publicKey}function e2(e){return e?.topic}function e5(e,t){let r=null;return eQ(e?.publicKey,!1)||(r=eq("MISSING_OR_INVALID",`${t} controller public key should be a string`)),r}function e3(e){let t=!0;return eV(e)?e.length&&(t=e.every(e=>eQ(e,!1))):t=!1,t}function e6(e,t){let r=null;return Object.values(e).forEach(e=>{var i;let n;if(r)return;let o=(i=`${t}, namespace`,n=null,e3(e?.methods)?e3(e?.events)||(n=eG("UNSUPPORTED_EVENTS",`${i}, events should be an array of strings or empty array for no events`)):n=eG("UNSUPPORTED_METHODS",`${i}, methods should be an array of strings or empty array for no methods`),n);o&&(r=o)}),r}function e4(e,t,r){let i=null;if(e&&eZ(e)){let n;let o=e6(e,t);o&&(i=o);let a=(n=null,Object.entries(e).forEach(([e,i])=>{var o,a;let s;if(n)return;let l=(o=$(e,i),a=`${t} ${r}`,s=null,eV(o)&&o.length?o.forEach(e=>{s||eJ(e)||(s=eG("UNSUPPORTED_CHAINS",`${a}, chain ${e} should be a string and conform to "namespace:chainId" format`))}):eJ(e)||(s=eG("UNSUPPORTED_CHAINS",`${a}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),s);l&&(n=l)}),n);a&&(i=a)}else i=eq("MISSING_OR_INVALID",`${t}, ${r} should be an object with data`);return i}function e8(e,t){let r=null;if(e&&eZ(e)){let i;let n=e6(e,t);n&&(r=n);let o=(i=null,Object.values(e).forEach(e=>{var r,n;let o;if(i)return;let a=(r=e?.accounts,n=`${t} namespace`,o=null,eV(r)?r.forEach(e=>{o||function(e){if(eQ(e,!1)&&e.includes(":")){let t=e.split(":");if(3===t.length){let e=t[0]+":"+t[1];return!!t[2]&&eJ(e)}}return!1}(e)||(o=eG("UNSUPPORTED_ACCOUNTS",`${n}, account ${e} should be a string and conform to "namespace:chainId:address" format`))}):o=eG("UNSUPPORTED_ACCOUNTS",`${n}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),o);a&&(i=a)}),i);o&&(r=o)}else r=eq("MISSING_OR_INVALID",`${t}, namespaces should be an object with data`);return r}function e9(e){return eQ(e.protocol,!0)}function e7(e,t){let r=!1;return t&&!e?r=!0:e&&eV(e)&&e.length&&e.forEach(e=>{r=e9(e)}),r}function te(e){return"number"==typeof e}function tt(e){return"u">typeof e}function tr(e){return!(!e||"object"!=typeof e||!e.code||!eX(e.code,!1)||!e.message||!eQ(e.message,!1))}function ti(e){return!(eK(e)||!eQ(e.method,!1))}function tn(e){return!(eK(e)||eK(e.result)&&eK(e.error)||!eX(e.id,!1)||!eQ(e.jsonrpc,!1))}function to(e){return!(eK(e)||!eQ(e.name,!1))}function ta(e,t){return!(!eJ(t)||!(function(e){let t=[];return Object.values(e).forEach(e=>{t.push(...eU(e.accounts))}),t})(e).includes(t))}function ts(e,t,r){return!!eQ(r,!1)&&(function(e,t){let r=[];return Object.values(e).forEach(e=>{eU(e.accounts).includes(t)&&r.push(...e.methods)}),r})(e,t).includes(r)}function tl(e,t,r){return!!eQ(r,!1)&&(function(e,t){let r=[];return Object.values(e).forEach(e=>{eU(e.accounts).includes(t)&&r.push(...e.events)}),r})(e,t).includes(r)}function tc(e,t,r){let i=null,n=function(e){let t={};return Object.keys(e).forEach(r=>{var i;r.includes(":")?t[r]=e[r]:null==(i=e[r].chains)||i.forEach(i=>{t[i]={methods:e[r].methods,events:e[r].events}})}),t}(e),o=function(e){let t={};return Object.keys(e).forEach(r=>{if(r.includes(":"))t[r]=e[r];else{let i=eU(e[r].accounts);i?.forEach(i=>{t[i]={accounts:e[r].accounts.filter(e=>e.includes(`${i}:`)),methods:e[r].methods,events:e[r].events}})}}),t}(t),a=Object.keys(n),s=Object.keys(o),l=tu(Object.keys(e)),c=tu(Object.keys(t)),u=l.filter(e=>!c.includes(e));return u.length&&(i=eq("NON_CONFORMING_NAMESPACES",`${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${u.toString()}
      Received: ${Object.keys(t).toString()}`)),eo(a,s)||(i=eq("NON_CONFORMING_NAMESPACES",`${r} namespaces chains don't satisfy required namespaces.
      Required: ${a.toString()}
      Approved: ${s.toString()}`)),Object.keys(t).forEach(e=>{if(!e.includes(":")||i)return;let n=eU(t[e].accounts);n.includes(e)||(i=eq("NON_CONFORMING_NAMESPACES",`${r} namespaces accounts don't satisfy namespace accounts for ${e}
        Required: ${e}
        Approved: ${n.toString()}`))}),a.forEach(e=>{i||(eo(n[e].methods,o[e].methods)?eo(n[e].events,o[e].events)||(i=eq("NON_CONFORMING_NAMESPACES",`${r} namespaces events don't satisfy namespace events for ${e}`)):i=eq("NON_CONFORMING_NAMESPACES",`${r} namespaces methods don't satisfy namespace methods for ${e}`))}),i}function tu(e){return[...new Set(e.map(e=>e.includes(":")?e.split(":")[0]:e))]}function th(e,t){return eX(e,!1)&&e<=t.max&&e>=t.min}function td(){let e=er();return new Promise(t=>{switch(e){case Y.browser:t(et()&&navigator?.onLine);break;case Y.reactNative:t(tf());break;case Y.node:default:t(!0)}})}async function tf(){if(ee()&&"u">typeof r.g&&null!=r.g&&r.g.NetInfo){let e=await (null==r.g?void 0:r.g.NetInfo.fetch());return e?.isConnected}return!0}function tp(e){switch(er()){case Y.browser:!ee()&&et()&&(window.addEventListener("online",()=>e(!0)),window.addEventListener("offline",()=>e(!1)));break;case Y.reactNative:ee()&&"u">typeof r.g&&null!=r.g&&r.g.NetInfo&&r.g?.NetInfo.addEventListener(t=>e(t?.isConnected));case Y.node:}}let tg={};class tw{static get(e){return tg[e]}static set(e,t){tg[e]=t}static delete(e){delete tg[e]}}},43824:function(e,t,r){"use strict";let i=r(67116),n=r(58005),o=r(34470),a=r(61820),s=e=>null==e,l=Symbol("encodeFragmentIdentifier");function c(e){if("string"!=typeof e||1!==e.length)throw TypeError("arrayFormatSeparator must be single character string")}function u(e,t){return t.encode?t.strict?i(e):encodeURIComponent(e):e}function h(e,t){return t.decode?n(e):e}function d(e){let t=e.indexOf("#");return -1!==t&&(e=e.slice(0,t)),e}function f(e){e=d(e);let t=e.indexOf("?");return -1===t?"":e.slice(t+1)}function p(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):t.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())&&(e="true"===e.toLowerCase()),e}function g(e,t){c((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);let r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,i)=>{if(t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),!t){i[e]=r;return}void 0===i[e]&&(i[e]={}),i[e][t[1]]=r};case"bracket":return(e,r,i)=>{if(t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),!t){i[e]=r;return}if(void 0===i[e]){i[e]=[r];return}i[e]=[].concat(i[e],r)};case"colon-list-separator":return(e,r,i)=>{if(t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),!t){i[e]=r;return}if(void 0===i[e]){i[e]=[r];return}i[e]=[].concat(i[e],r)};case"comma":case"separator":return(t,r,i)=>{let n="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!n&&h(r,e).includes(e.arrayFormatSeparator);r=o?h(r,e):r;let a=n||o?r.split(e.arrayFormatSeparator).map(t=>h(t,e)):null===r?r:h(r,e);i[t]=a};case"bracket-separator":return(t,r,i)=>{let n=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!n){i[t]=r?h(r,e):r;return}let o=null===r?[]:r.split(e.arrayFormatSeparator).map(t=>h(t,e));if(void 0===i[t]){i[t]=o;return}i[t]=[].concat(i[t],o)};default:return(e,t,r)=>{if(void 0===r[e]){r[e]=t;return}r[e]=[].concat(r[e],t)}}}(t),i=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return i;for(let n of e.split("&")){if(""===n)continue;let[e,a]=o(t.decode?n.replace(/\+/g," "):n,"=");a=void 0===a?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?a:h(a,t),r(h(e,t),a,i)}for(let e of Object.keys(i)){let r=i[e];if("object"==typeof r&&null!==r)for(let e of Object.keys(r))r[e]=p(r[e],t);else i[e]=p(r,t)}return!1===t.sort?i:(!0===t.sort?Object.keys(i).sort():Object.keys(i).sort(t.sort)).reduce((e,t)=>{let r=i[t];return r&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(r):e[t]=r,e},Object.create(null))}t.extract=f,t.parse=g,t.stringify=(e,t)=>{if(!e)return"";c((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);let r=r=>t.skipNull&&s(e[r])||t.skipEmptyString&&""===e[r],i=function(e){switch(e.arrayFormat){case"index":return t=>(r,i)=>{let n=r.length;return void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?r:null===i?[...r,[u(t,e),"[",n,"]"].join("")]:[...r,[u(t,e),"[",u(n,e),"]=",u(i,e)].join("")]};case"bracket":return t=>(r,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?r:null===i?[...r,[u(t,e),"[]"].join("")]:[...r,[u(t,e),"[]=",u(i,e)].join("")];case"colon-list-separator":return t=>(r,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?r:null===i?[...r,[u(t,e),":list="].join("")]:[...r,[u(t,e),":list=",u(i,e)].join("")];case"comma":case"separator":case"bracket-separator":{let t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(i,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?i:(n=null===n?"":n,0===i.length)?[[u(r,e),t,u(n,e)].join("")]:[[i,u(n,e)].join(e.arrayFormatSeparator)]}default:return t=>(r,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?r:null===i?[...r,u(t,e)]:[...r,[u(t,e),"=",u(i,e)].join("")]}}(t),n={};for(let t of Object.keys(e))r(t)||(n[t]=e[t]);let o=Object.keys(n);return!1!==t.sort&&o.sort(t.sort),o.map(r=>{let n=e[r];return void 0===n?"":null===n?u(r,t):Array.isArray(n)?0===n.length&&"bracket-separator"===t.arrayFormat?u(r,t)+"[]":n.reduce(i(r),[]).join("&"):u(r,t)+"="+u(n,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);let[r,i]=o(e,"#");return Object.assign({url:r.split("?")[0]||"",query:g(f(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:h(i,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[l]:!0},r);let i=d(e.url).split("?")[0]||"",n=t.extract(e.url),o=t.parse(n,{sort:!1}),a=Object.assign(o,e.query),s=t.stringify(a,r);s&&(s=`?${s}`);let c=function(e){let t="",r=e.indexOf("#");return -1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(c=`#${r[l]?u(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${i}${s}${c}`},t.pick=(e,r,i)=>{i=Object.assign({parseFragmentIdentifier:!0,[l]:!1},i);let{url:n,query:o,fragmentIdentifier:s}=t.parseUrl(e,i);return t.stringifyUrl({url:n,query:a(o,r),fragmentIdentifier:s},i)},t.exclude=(e,r,i)=>{let n=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,n,i)}},849:function(e,t){"use strict";function r(e){let t;return"undefined"!=typeof window&&void 0!==window[e]&&(t=window[e]),t}function i(e){let t=r(e);if(!t)throw Error(`${e} is not defined in Window`);return t}Object.defineProperty(t,"__esModule",{value:!0}),t.getLocalStorage=t.getLocalStorageOrThrow=t.getCrypto=t.getCryptoOrThrow=t.getLocation=t.getLocationOrThrow=t.getNavigator=t.getNavigatorOrThrow=t.getDocument=t.getDocumentOrThrow=t.getFromWindowOrThrow=t.getFromWindow=void 0,t.getFromWindow=r,t.getFromWindowOrThrow=i,t.getDocumentOrThrow=function(){return i("document")},t.getDocument=function(){return r("document")},t.getNavigatorOrThrow=function(){return i("navigator")},t.getNavigator=function(){return r("navigator")},t.getLocationOrThrow=function(){return i("location")},t.getLocation=function(){return r("location")},t.getCryptoOrThrow=function(){return i("crypto")},t.getCrypto=function(){return r("crypto")},t.getLocalStorageOrThrow=function(){return i("localStorage")},t.getLocalStorage=function(){return r("localStorage")}},36073:function(e,t,r){"use strict";t.D=void 0;let i=r(849);t.D=function(){let e,t,r;try{e=i.getDocumentOrThrow(),t=i.getLocationOrThrow()}catch(e){return null}function n(...t){let r=e.getElementsByTagName("meta");for(let e=0;e<r.length;e++){let i=r[e],n=["itemprop","property","name"].map(e=>i.getAttribute(e)).filter(e=>!!e&&t.includes(e));if(n.length&&n){let e=i.getAttribute("content");if(e)return e}}return""}let o=((r=n("name","og:site_name","og:title","twitter:title"))||(r=e.title),r),a=function(){let e=n("description","og:description","twitter:description","keywords");return e}(),s=t.origin,l=function(){let r=e.getElementsByTagName("link"),i=[];for(let e=0;e<r.length;e++){let n=r[e],o=n.getAttribute("rel");if(o&&o.toLowerCase().indexOf("icon")>-1){let e=n.getAttribute("href");if(e){if(-1===e.toLowerCase().indexOf("https:")&&-1===e.toLowerCase().indexOf("http:")&&0!==e.indexOf("//")){let r=t.protocol+"//"+t.host;if(0===e.indexOf("/"))r+=e;else{let i=t.pathname.split("/");i.pop();let n=i.join("/");r+=n+"/"+e}i.push(r)}else if(0===e.indexOf("//")){let r=t.protocol+e;i.push(r)}else i.push(e)}}}return i}();return{description:a,url:s,icons:l,name:o}}},34699:function(e,t){"use strict";t.byteLength=function(e){var t=l(e),r=t[0],i=t[1];return(r+i)*3/4-i},t.toByteArray=function(e){var t,r,o=l(e),a=o[0],s=o[1],c=new n((a+s)*3/4-s),u=0,h=s>0?a-4:a;for(r=0;r<h;r+=4)t=i[e.charCodeAt(r)]<<18|i[e.charCodeAt(r+1)]<<12|i[e.charCodeAt(r+2)]<<6|i[e.charCodeAt(r+3)],c[u++]=t>>16&255,c[u++]=t>>8&255,c[u++]=255&t;return 2===s&&(t=i[e.charCodeAt(r)]<<2|i[e.charCodeAt(r+1)]>>4,c[u++]=255&t),1===s&&(t=i[e.charCodeAt(r)]<<10|i[e.charCodeAt(r+1)]<<4|i[e.charCodeAt(r+2)]>>2,c[u++]=t>>8&255,c[u++]=255&t),c},t.fromByteArray=function(e){for(var t,i=e.length,n=i%3,o=[],a=0,s=i-n;a<s;a+=16383)o.push(function(e,t,i){for(var n,o=[],a=t;a<i;a+=3)o.push(r[(n=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]))>>18&63]+r[n>>12&63]+r[n>>6&63]+r[63&n]);return o.join("")}(e,a,a+16383>s?s:a+16383));return 1===n?o.push(r[(t=e[i-1])>>2]+r[t<<4&63]+"=="):2===n&&o.push(r[(t=(e[i-2]<<8)+e[i-1])>>10]+r[t>>4&63]+r[t<<2&63]+"="),o.join("")};for(var r=[],i=[],n="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,s=o.length;a<s;++a)r[a]=o[a],i[o.charCodeAt(a)]=a;function l(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var i=r===t?0:4-r%4;return[r,i]}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},67133:function(e,t,r){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */let i=r(34699),n=r(19087),o="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function a(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,s.prototype),t}function s(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return u(e)}return l(e,t,r)}function l(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!s.isEncoding(t))throw TypeError("Unknown encoding: "+t);let r=0|p(e,t),i=a(r),n=i.write(e,t);return n!==r&&(i=i.slice(0,n)),i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(j(e,Uint8Array)){let t=new Uint8Array(e);return d(t.buffer,t.byteOffset,t.byteLength)}return h(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(j(e,ArrayBuffer)||e&&j(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(j(e,SharedArrayBuffer)||e&&j(e.buffer,SharedArrayBuffer)))return d(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return s.from(i,t,r);let n=function(e){var t;if(s.isBuffer(e)){let t=0|f(e.length),r=a(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?a(0):h(e):"Buffer"===e.type&&Array.isArray(e.data)?h(e.data):void 0}(e);if(n)return n;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return s.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function c(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function u(e){return c(e),a(e<0?0:0|f(e))}function h(e){let t=e.length<0?0:0|f(e.length),r=a(t);for(let i=0;i<t;i+=1)r[i]=255&e[i];return r}function d(e,t,r){let i;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(i=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),s.prototype),i}function f(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function p(e,t){if(s.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||j(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===r)return 0;let n=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return N(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return T(e).length;default:if(n)return i?-1:N(e).length;t=(""+t).toLowerCase(),n=!0}}function g(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){let i=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>i)&&(r=i);let n="";for(let i=t;i<r;++i)n+=U[e[i]];return n}(this,t,r);case"utf8":case"utf-8":return y(this,t,r);case"ascii":return function(e,t,r){let i="";r=Math.min(e.length,r);for(let n=t;n<r;++n)i+=String.fromCharCode(127&e[n]);return i}(this,t,r);case"latin1":case"binary":return function(e,t,r){let i="";r=Math.min(e.length,r);for(let n=t;n<r;++n)i+=String.fromCharCode(e[n]);return i}(this,t,r);case"base64":var o,a;return o=t,a=r,0===o&&a===this.length?i.fromByteArray(this):i.fromByteArray(this.slice(o,a));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){let i=e.slice(t,r),n="";for(let e=0;e<i.length-1;e+=2)n+=String.fromCharCode(i[e]+256*i[e+1]);return n}(this,t,r);default:if(n)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function w(e,t,r){let i=e[t];e[t]=e[r],e[r]=i}function b(e,t,r,i,n){var o;if(0===e.length)return -1;if("string"==typeof r?(i=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(o=r=+r)!=o&&(r=n?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(n)return -1;r=e.length-1}else if(r<0){if(!n)return -1;r=0}if("string"==typeof t&&(t=s.from(t,i)),s.isBuffer(t))return 0===t.length?-1:m(e,t,r,i,n);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?n?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):m(e,[t],r,i,n);throw TypeError("val must be string, number or Buffer")}function m(e,t,r,i,n){let o,a=1,s=e.length,l=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return -1;a=2,s/=2,l/=2,r/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(n){let i=-1;for(o=r;o<s;o++)if(c(e,o)===c(t,-1===i?0:o-i)){if(-1===i&&(i=o),o-i+1===l)return i*a}else -1!==i&&(o-=o-i),i=-1}else for(r+l>s&&(r=s-l),o=r;o>=0;o--){let r=!0;for(let i=0;i<l;i++)if(c(e,o+i)!==c(t,i)){r=!1;break}if(r)return o}return -1}function y(e,t,r){r=Math.min(e.length,r);let i=[],n=t;for(;n<r;){let t=e[n],o=null,a=t>239?4:t>223?3:t>191?2:1;if(n+a<=r){let r,i,s,l;switch(a){case 1:t<128&&(o=t);break;case 2:(192&(r=e[n+1]))==128&&(l=(31&t)<<6|63&r)>127&&(o=l);break;case 3:r=e[n+1],i=e[n+2],(192&r)==128&&(192&i)==128&&(l=(15&t)<<12|(63&r)<<6|63&i)>2047&&(l<55296||l>57343)&&(o=l);break;case 4:r=e[n+1],i=e[n+2],s=e[n+3],(192&r)==128&&(192&i)==128&&(192&s)==128&&(l=(15&t)<<18|(63&r)<<12|(63&i)<<6|63&s)>65535&&l<1114112&&(o=l)}}null===o?(o=65533,a=1):o>65535&&(o-=65536,i.push(o>>>10&1023|55296),o=56320|1023&o),i.push(o),n+=a}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let r="",i=0;for(;i<t;)r+=String.fromCharCode.apply(String,e.slice(i,i+=4096));return r}(i)}function v(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function x(e,t,r,i,n,o){if(!s.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>n||t<o)throw RangeError('"value" argument is out of bounds');if(r+i>e.length)throw RangeError("Index out of range")}function C(e,t,r,i,n){O(t,i,n,e,r,7);let o=Number(t&BigInt(4294967295));e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,r}function E(e,t,r,i,n){O(t,i,n,e,r,7);let o=Number(t&BigInt(4294967295));e[r+7]=o,o>>=8,e[r+6]=o,o>>=8,e[r+5]=o,o>>=8,e[r+4]=o;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=a,a>>=8,e[r+2]=a,a>>=8,e[r+1]=a,a>>=8,e[r]=a,r+8}function k(e,t,r,i,n,o){if(r+i>e.length||r<0)throw RangeError("Index out of range")}function S(e,t,r,i,o){return t=+t,r>>>=0,o||k(e,t,r,4,34028234663852886e22,-34028234663852886e22),n.write(e,t,r,i,23,4),r+4}function _(e,t,r,i,o){return t=+t,r>>>=0,o||k(e,t,r,8,17976931348623157e292,-17976931348623157e292),n.write(e,t,r,i,52,8),r+8}t.Buffer=s,t.SlowBuffer=function(e){return+e!=e&&(e=0),s.alloc(+e)},t.INSPECT_MAX_BYTES=50,t.kMaxLength=2147483647,s.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),s.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}}),s.poolSize=8192,s.from=function(e,t,r){return l(e,t,r)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array),s.alloc=function(e,t,r){return(c(e),e<=0)?a(e):void 0!==t?"string"==typeof r?a(e).fill(t,r):a(e).fill(t):a(e)},s.allocUnsafe=function(e){return u(e)},s.allocUnsafeSlow=function(e){return u(e)},s.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==s.prototype},s.compare=function(e,t){if(j(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),j(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(e)||!s.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,i=t.length;for(let n=0,o=Math.min(r,i);n<o;++n)if(e[n]!==t[n]){r=e[n],i=t[n];break}return r<i?-1:i<r?1:0},s.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(e,t){let r;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return s.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;let i=s.allocUnsafe(t),n=0;for(r=0;r<e.length;++r){let t=e[r];if(j(t,Uint8Array))n+t.length>i.length?(s.isBuffer(t)||(t=s.from(t)),t.copy(i,n)):Uint8Array.prototype.set.call(i,t,n);else if(s.isBuffer(t))t.copy(i,n);else throw TypeError('"list" argument must be an Array of Buffers');n+=t.length}return i},s.byteLength=p,s.prototype._isBuffer=!0,s.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)w(this,t,t+1);return this},s.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)w(this,t,t+3),w(this,t+1,t+2);return this},s.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)w(this,t,t+7),w(this,t+1,t+6),w(this,t+2,t+5),w(this,t+3,t+4);return this},s.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?y(this,0,e):g.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(e){if(!s.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===s.compare(this,e)},s.prototype.inspect=function(){let e="",r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},o&&(s.prototype[o]=s.prototype.inspect),s.prototype.compare=function(e,t,r,i,n){if(j(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===i&&(i=0),void 0===n&&(n=this.length),t<0||r>e.length||i<0||n>this.length)throw RangeError("out of range index");if(i>=n&&t>=r)return 0;if(i>=n)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,i>>>=0,n>>>=0,this===e)return 0;let o=n-i,a=r-t,l=Math.min(o,a),c=this.slice(i,n),u=e.slice(t,r);for(let e=0;e<l;++e)if(c[e]!==u[e]){o=c[e],a=u[e];break}return o<a?-1:a<o?1:0},s.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},s.prototype.indexOf=function(e,t,r){return b(this,e,t,r,!0)},s.prototype.lastIndexOf=function(e,t,r){return b(this,e,t,r,!1)},s.prototype.write=function(e,t,r,i){var n,o,a,s,l,c,u,h;if(void 0===t)i="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)i=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===i&&(i="utf8")):(i=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let d=this.length-t;if((void 0===r||r>d)&&(r=d),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let f=!1;for(;;)switch(i){case"hex":return function(e,t,r,i){let n;r=Number(r)||0;let o=e.length-r;i?(i=Number(i))>o&&(i=o):i=o;let a=t.length;for(i>a/2&&(i=a/2),n=0;n<i;++n){let i=parseInt(t.substr(2*n,2),16);if(i!=i)break;e[r+n]=i}return n}(this,e,t,r);case"utf8":case"utf-8":return n=t,o=r,M(N(e,this.length-n),this,n,o);case"ascii":case"latin1":case"binary":return a=t,s=r,M(function(e){let t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,a,s);case"base64":return l=t,c=r,M(T(e),this,l,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=t,h=r,M(function(e,t){let r,i;let n=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)i=(r=e.charCodeAt(o))>>8,n.push(r%256),n.push(i);return n}(e,this.length-u),this,u,h);default:if(f)throw TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),f=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},s.prototype.slice=function(e,t){let r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);let i=this.subarray(e,t);return Object.setPrototypeOf(i,s.prototype),i},s.prototype.readUintLE=s.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||v(e,t,this.length);let i=this[e],n=1,o=0;for(;++o<t&&(n*=256);)i+=this[e+o]*n;return i},s.prototype.readUintBE=s.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||v(e,t,this.length);let i=this[e+--t],n=1;for(;t>0&&(n*=256);)i+=this[e+--t]*n;return i},s.prototype.readUint8=s.prototype.readUInt8=function(e,t){return e>>>=0,t||v(e,1,this.length),this[e]},s.prototype.readUint16LE=s.prototype.readUInt16LE=function(e,t){return e>>>=0,t||v(e,2,this.length),this[e]|this[e+1]<<8},s.prototype.readUint16BE=s.prototype.readUInt16BE=function(e,t){return e>>>=0,t||v(e,2,this.length),this[e]<<8|this[e+1]},s.prototype.readUint32LE=s.prototype.readUInt32LE=function(e,t){return e>>>=0,t||v(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},s.prototype.readUint32BE=s.prototype.readUInt32BE=function(e,t){return e>>>=0,t||v(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},s.prototype.readBigUInt64LE=B(function(e){D(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&I(e,this.length-8);let i=t+256*this[++e]+65536*this[++e]+16777216*this[++e],n=this[++e]+256*this[++e]+65536*this[++e]+16777216*r;return BigInt(i)+(BigInt(n)<<BigInt(32))}),s.prototype.readBigUInt64BE=B(function(e){D(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&I(e,this.length-8);let i=16777216*t+65536*this[++e]+256*this[++e]+this[++e],n=16777216*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(i)<<BigInt(32))+BigInt(n)}),s.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||v(e,t,this.length);let i=this[e],n=1,o=0;for(;++o<t&&(n*=256);)i+=this[e+o]*n;return i>=(n*=128)&&(i-=Math.pow(2,8*t)),i},s.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||v(e,t,this.length);let i=t,n=1,o=this[e+--i];for(;i>0&&(n*=256);)o+=this[e+--i]*n;return o>=(n*=128)&&(o-=Math.pow(2,8*t)),o},s.prototype.readInt8=function(e,t){return(e>>>=0,t||v(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},s.prototype.readInt16LE=function(e,t){e>>>=0,t||v(e,2,this.length);let r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt16BE=function(e,t){e>>>=0,t||v(e,2,this.length);let r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt32LE=function(e,t){return e>>>=0,t||v(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},s.prototype.readInt32BE=function(e,t){return e>>>=0,t||v(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},s.prototype.readBigInt64LE=B(function(e){D(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&I(e,this.length-8);let i=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+16777216*this[++e])}),s.prototype.readBigInt64BE=B(function(e){D(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&I(e,this.length-8);let i=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(16777216*this[++e]+65536*this[++e]+256*this[++e]+r)}),s.prototype.readFloatLE=function(e,t){return e>>>=0,t||v(e,4,this.length),n.read(this,e,!0,23,4)},s.prototype.readFloatBE=function(e,t){return e>>>=0,t||v(e,4,this.length),n.read(this,e,!1,23,4)},s.prototype.readDoubleLE=function(e,t){return e>>>=0,t||v(e,8,this.length),n.read(this,e,!0,52,8)},s.prototype.readDoubleBE=function(e,t){return e>>>=0,t||v(e,8,this.length),n.read(this,e,!1,52,8)},s.prototype.writeUintLE=s.prototype.writeUIntLE=function(e,t,r,i){if(e=+e,t>>>=0,r>>>=0,!i){let i=Math.pow(2,8*r)-1;x(this,e,t,r,i,0)}let n=1,o=0;for(this[t]=255&e;++o<r&&(n*=256);)this[t+o]=e/n&255;return t+r},s.prototype.writeUintBE=s.prototype.writeUIntBE=function(e,t,r,i){if(e=+e,t>>>=0,r>>>=0,!i){let i=Math.pow(2,8*r)-1;x(this,e,t,r,i,0)}let n=r-1,o=1;for(this[t+n]=255&e;--n>=0&&(o*=256);)this[t+n]=e/o&255;return t+r},s.prototype.writeUint8=s.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,1,255,0),this[t]=255&e,t+1},s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},s.prototype.writeBigUInt64LE=B(function(e,t=0){return C(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeBigUInt64BE=B(function(e,t=0){return E(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeIntLE=function(e,t,r,i){if(e=+e,t>>>=0,!i){let i=Math.pow(2,8*r-1);x(this,e,t,r,i-1,-i)}let n=0,o=1,a=0;for(this[t]=255&e;++n<r&&(o*=256);)e<0&&0===a&&0!==this[t+n-1]&&(a=1),this[t+n]=(e/o>>0)-a&255;return t+r},s.prototype.writeIntBE=function(e,t,r,i){if(e=+e,t>>>=0,!i){let i=Math.pow(2,8*r-1);x(this,e,t,r,i-1,-i)}let n=r-1,o=1,a=0;for(this[t+n]=255&e;--n>=0&&(o*=256);)e<0&&0===a&&0!==this[t+n+1]&&(a=1),this[t+n]=(e/o>>0)-a&255;return t+r},s.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},s.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},s.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},s.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},s.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},s.prototype.writeBigInt64LE=B(function(e,t=0){return C(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeBigInt64BE=B(function(e,t=0){return E(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeFloatLE=function(e,t,r){return S(this,e,t,!0,r)},s.prototype.writeFloatBE=function(e,t,r){return S(this,e,t,!1,r)},s.prototype.writeDoubleLE=function(e,t,r){return _(this,e,t,!0,r)},s.prototype.writeDoubleBE=function(e,t,r){return _(this,e,t,!1,r)},s.prototype.copy=function(e,t,r,i){if(!s.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<r&&(i=r),i===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(i<0)throw RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-r&&(i=e.length-t+r);let n=i-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,i):Uint8Array.prototype.set.call(e,this.subarray(r,i),t),n},s.prototype.fill=function(e,t,r,i){let n;if("string"==typeof e){if("string"==typeof t?(i=t,t=0,r=this.length):"string"==typeof r&&(i=r,r=this.length),void 0!==i&&"string"!=typeof i)throw TypeError("encoding must be a string");if("string"==typeof i&&!s.isEncoding(i))throw TypeError("Unknown encoding: "+i);if(1===e.length){let t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(n=t;n<r;++n)this[n]=e;else{let o=s.isBuffer(e)?e:s.from(e,i),a=o.length;if(0===a)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(n=0;n<r-t;++n)this[n+t]=o[n%a]}return this};let A={};function $(e,t,r){A[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function P(e){let t="",r=e.length,i="-"===e[0]?1:0;for(;r>=i+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function O(e,t,r,i,n,o){if(e>r||e<t){let i;let n="bigint"==typeof t?"n":"";throw i=o>3?0===t||t===BigInt(0)?`>= 0${n} and < 2${n} ** ${(o+1)*8}${n}`:`>= -(2${n} ** ${(o+1)*8-1}${n}) and < 2 ** ${(o+1)*8-1}${n}`:`>= ${t}${n} and <= ${r}${n}`,new A.ERR_OUT_OF_RANGE("value",i,e)}D(n,"offset"),(void 0===i[n]||void 0===i[n+o])&&I(n,i.length-(o+1))}function D(e,t){if("number"!=typeof e)throw new A.ERR_INVALID_ARG_TYPE(t,"number",e)}function I(e,t,r){if(Math.floor(e)!==e)throw D(e,r),new A.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new A.ERR_BUFFER_OUT_OF_BOUNDS;throw new A.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}$("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),$("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),$("ERR_OUT_OF_RANGE",function(e,t,r){let i=`The value of "${e}" is out of range.`,n=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?n=P(String(r)):"bigint"==typeof r&&(n=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(n=P(n)),n+="n"),i+=` It must be ${t}. Received ${n}`},RangeError);let R=/[^+/0-9A-Za-z-_]/g;function N(e,t){let r;t=t||1/0;let i=e.length,n=null,o=[];for(let a=0;a<i;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!n){if(r>56319||a+1===i){(t-=3)>-1&&o.push(239,191,189);continue}n=r;continue}if(r<56320){(t-=3)>-1&&o.push(239,191,189),n=r;continue}r=(n-55296<<10|r-56320)+65536}else n&&(t-=3)>-1&&o.push(239,191,189);if(n=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return o}function T(e){return i.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(R,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function M(e,t,r,i){let n;for(n=0;n<i&&!(n+r>=t.length)&&!(n>=e.length);++n)t[n+r]=e[n];return n}function j(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}let U=function(){let e="0123456789abcdef",t=Array(256);for(let r=0;r<16;++r){let i=16*r;for(let n=0;n<16;++n)t[i+n]=e[r]+e[n]}return t}();function B(e){return"undefined"==typeof BigInt?L:e}function L(){throw Error("BigInt not supported")}},58005:function(e){"use strict";var t="%[a-f0-9]{2}",r=RegExp("("+t+")|([^%]+?)","gi"),i=RegExp("("+t+")+","gi");e.exports=function(e){if("string"!=typeof e)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=i.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var o=function(e){try{return decodeURIComponent(e)}catch(n){for(var t=e.match(r)||[],i=1;i<t.length;i++)t=(e=(function e(t,r){try{return[decodeURIComponent(t.join(""))]}catch(e){}if(1===t.length)return t;r=r||1;var i=t.slice(0,r),n=t.slice(r);return Array.prototype.concat.call([],e(i),e(n))})(t,i).join("")).match(r)||[];return e}}(n[0]);o!==n[0]&&(t[n[0]]=o)}n=i.exec(e)}t["%C2"]="�";for(var a=Object.keys(t),s=0;s<a.length;s++){var l=a[s];e=e.replace(RegExp(l,"g"),t[l])}return e}(e)}}},78343:function(e){"use strict";var t={single_source_shortest_paths:function(e,r,i){var n,o,a,s,l,c,u,h={},d={};d[r]=0;var f=t.PriorityQueue.make();for(f.push(r,0);!f.empty();)for(a in o=(n=f.pop()).value,s=n.cost,l=e[o]||{})l.hasOwnProperty(a)&&(c=s+l[a],u=d[a],(void 0===d[a]||u>c)&&(d[a]=c,f.push(a,c),h[a]=o));if(void 0!==i&&void 0===d[i])throw Error(["Could not find a path from ",r," to ",i,"."].join(""));return h},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],i=t;i;)r.push(i),e[i],i=e[i];return r.reverse(),r},find_path:function(e,r,i){var n=t.single_source_shortest_paths(e,r,i);return t.extract_shortest_path_from_predecessor_list(n,i)},PriorityQueue:{make:function(e){var r,i=t.PriorityQueue,n={};for(r in e=e||{},i)i.hasOwnProperty(r)&&(n[r]=i[r]);return n.queue=[],n.sorter=e.sorter||i.default_sorter,n},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},53216:function(e){"use strict";e.exports=function(e){for(var t=[],r=e.length,i=0;i<r;i++){var n=e.charCodeAt(i);if(n>=55296&&n<=56319&&r>i+1){var o=e.charCodeAt(i+1);o>=56320&&o<=57343&&(n=(n-55296)*1024+o-56320+65536,i+=1)}if(n<128){t.push(n);continue}if(n<2048){t.push(n>>6|192),t.push(63&n|128);continue}if(n<55296||n>=57344&&n<65536){t.push(n>>12|224),t.push(n>>6&63|128),t.push(63&n|128);continue}if(n>=65536&&n<=1114111){t.push(n>>18|240),t.push(n>>12&63|128),t.push(n>>6&63|128),t.push(63&n|128);continue}t.push(239,191,189)}return new Uint8Array(t).buffer}},28729:function(e){"use strict";var t=Object.prototype.hasOwnProperty,r="~";function i(){}function n(e,t,r){this.fn=e,this.context=t,this.once=r||!1}function o(e,t,i,o,a){if("function"!=typeof i)throw TypeError("The listener must be a function");var s=new n(i,o||e,a),l=r?r+t:t;return e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],s]:e._events[l].push(s):(e._events[l]=s,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new i:delete e._events[t]}function s(){this._events=new i,this._eventsCount=0}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(r=!1)),s.prototype.eventNames=function(){var e,i,n=[];if(0===this._eventsCount)return n;for(i in e=this._events)t.call(e,i)&&n.push(r?i.slice(1):i);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},s.prototype.listeners=function(e){var t=r?r+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var n=0,o=i.length,a=Array(o);n<o;n++)a[n]=i[n].fn;return a},s.prototype.listenerCount=function(e){var t=r?r+e:e,i=this._events[t];return i?i.fn?1:i.length:0},s.prototype.emit=function(e,t,i,n,o,a){var s=r?r+e:e;if(!this._events[s])return!1;var l,c,u=this._events[s],h=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),h){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,i),!0;case 4:return u.fn.call(u.context,t,i,n),!0;case 5:return u.fn.call(u.context,t,i,n,o),!0;case 6:return u.fn.call(u.context,t,i,n,o,a),!0}for(c=1,l=Array(h-1);c<h;c++)l[c-1]=arguments[c];u.fn.apply(u.context,l)}else{var d,f=u.length;for(c=0;c<f;c++)switch(u[c].once&&this.removeListener(e,u[c].fn,void 0,!0),h){case 1:u[c].fn.call(u[c].context);break;case 2:u[c].fn.call(u[c].context,t);break;case 3:u[c].fn.call(u[c].context,t,i);break;case 4:u[c].fn.call(u[c].context,t,i,n);break;default:if(!l)for(d=1,l=Array(h-1);d<h;d++)l[d-1]=arguments[d];u[c].fn.apply(u[c].context,l)}}return!0},s.prototype.on=function(e,t,r){return o(this,e,t,r,!1)},s.prototype.once=function(e,t,r){return o(this,e,t,r,!0)},s.prototype.removeListener=function(e,t,i,n){var o=r?r+e:e;if(!this._events[o])return this;if(!t)return a(this,o),this;var s=this._events[o];if(s.fn)s.fn!==t||n&&!s.once||i&&s.context!==i||a(this,o);else{for(var l=0,c=[],u=s.length;l<u;l++)(s[l].fn!==t||n&&!s[l].once||i&&s[l].context!==i)&&c.push(s[l]);c.length?this._events[o]=1===c.length?c[0]:c:a(this,o)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&a(this,t)):(this._events=new i,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=r,s.EventEmitter=s,e.exports=s},61820:function(e){"use strict";e.exports=function(e,t){for(var r={},i=Object.keys(e),n=Array.isArray(t),o=0;o<i.length;o++){var a=i[o],s=e[a];(n?-1!==t.indexOf(a):t(a,s,e))&&(r[a]=s)}return r}},19087:function(e,t){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */t.read=function(e,t,r,i,n){var o,a,s=8*n-i-1,l=(1<<s)-1,c=l>>1,u=-7,h=r?n-1:0,d=r?-1:1,f=e[t+h];for(h+=d,o=f&(1<<-u)-1,f>>=-u,u+=s;u>0;o=256*o+e[t+h],h+=d,u-=8);for(a=o&(1<<-u)-1,o>>=-u,u+=i;u>0;a=256*a+e[t+h],h+=d,u-=8);if(0===o)o=1-c;else{if(o===l)return a?NaN:(f?-1:1)*(1/0);a+=Math.pow(2,i),o-=c}return(f?-1:1)*a*Math.pow(2,o-i)},t.write=function(e,t,r,i,n,o){var a,s,l,c=8*o-n-1,u=(1<<c)-1,h=u>>1,d=23===n?5960464477539062e-23:0,f=i?0:o-1,p=i?1:-1,g=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(s=isNaN(t)?1:0,a=u):(a=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-a))<1&&(a--,l*=2),a+h>=1?t+=d/l:t+=d*Math.pow(2,1-h),t*l>=2&&(a++,l/=2),a+h>=u?(s=0,a=u):a+h>=1?(s=(t*l-1)*Math.pow(2,n),a+=h):(s=t*Math.pow(2,h-1)*Math.pow(2,n),a=0));n>=8;e[r+f]=255&s,f+=p,s/=256,n-=8);for(a=a<<n|s,c+=n;c>0;e[r+f]=255&a,f+=p,a/=256,c-=8);e[r+f-p]|=128*g}},62601:function(e,t,r){"use strict";var i,n;e.exports=(null==(i=r.g.process)?void 0:i.env)&&"object"==typeof(null==(n=r.g.process)?void 0:n.env)?r.g.process:r(58960)},1295:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return c},unstable_getImgProps:function(){return l}});let i=r(21024),n=r(32301),o=r(27873),a=r(63222),s=i._(r(75033)),l=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},c=a.Image},58960:function(e){!function(){var t={229:function(e){var t,r,i,n=e.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l=[],c=!1,u=-1;function h(){c&&i&&(c=!1,i.length?l=i.concat(l):u=-1,l.length&&d())}function d(){if(!c){var e=s(h);c=!0;for(var t=l.length;t;){for(i=l,l=[];++u<t;)i&&i[u].run();u=-1,t=l.length}i=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}n.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new f(e,t)),1!==l.length||c||s(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(e){return[]},n.binding=function(e){throw Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function i(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}},a=!0;try{t[e](o,o.exports,i),a=!1}finally{a&&delete r[e]}return o.exports}i.ab="//";var n=i(229);e.exports=n}()},16691:function(e,t,r){e.exports=r(1295)},75298:function(e,t,r){let i=r(47363),n=r(37621),o=r(46028),a=r(12330);function s(e,t,r,o,a){let s=[].slice.call(arguments,1),l=s.length,c="function"==typeof s[l-1];if(!c&&!i())throw Error("Callback required as last argument");if(c){if(l<2)throw Error("Too few arguments provided");2===l?(a=r,r=t,t=o=void 0):3===l&&(t.getContext&&void 0===a?(a=o,o=void 0):(a=o,o=r,r=t,t=void 0))}else{if(l<1)throw Error("Too few arguments provided");return 1===l?(r=t,t=o=void 0):2!==l||t.getContext||(o=r,r=t,t=void 0),new Promise(function(i,a){try{let a=n.create(r,o);i(e(a,t,o))}catch(e){a(e)}})}try{let i=n.create(r,o);a(null,e(i,t,o))}catch(e){a(e)}}t.create=n.create,t.toCanvas=s.bind(null,o.render),t.toDataURL=s.bind(null,o.renderToDataURL),t.toString=s.bind(null,function(e,t,r){return a.render(e,r)})},47363:function(e){e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},8177:function(e,t,r){let i=r(13400).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];let t=Math.floor(e/7)+2,r=i(e),n=145===r?26:2*Math.ceil((r-13)/(2*t-2)),o=[r-7];for(let e=1;e<t-1;e++)o[e]=o[e-1]-n;return o.push(6),o.reverse()},t.getPositions=function(e){let r=[],i=t.getRowColCoords(e),n=i.length;for(let e=0;e<n;e++)for(let t=0;t<n;t++)(0!==e||0!==t)&&(0!==e||t!==n-1)&&(e!==n-1||0!==t)&&r.push([i[e],i[t]]);return r}},77654:function(e,t,r){let i=r(37662),n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(e){this.mode=i.ALPHANUMERIC,this.data=e}o.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=45*n.indexOf(this.data[t]);r+=n.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(n.indexOf(this.data[t]),6)},e.exports=o},41904:function(e){function t(){this.buffer=[],this.length=0}t.prototype={get:function(e){return(this.buffer[Math.floor(e/8)]>>>7-e%8&1)==1},put:function(e,t){for(let r=0;r<t;r++)this.putBit((e>>>t-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},21091:function(e){function t(e){if(!e||e<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}t.prototype.set=function(e,t,r,i){let n=e*this.size+t;this.data[n]=r,i&&(this.reservedBit[n]=!0)},t.prototype.get=function(e,t){return this.data[e*this.size+t]},t.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r},t.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=t},90690:function(e,t,r){let i=r(53216),n=r(37662);function o(e){this.mode=n.BYTE,"string"==typeof e&&(e=i(e)),this.data=new Uint8Array(e)}o.getBitsLength=function(e){return 8*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)},e.exports=o},37039:function(e,t,r){let i=r(9406),n=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case i.L:return n[(e-1)*4+0];case i.M:return n[(e-1)*4+1];case i.Q:return n[(e-1)*4+2];case i.H:return n[(e-1)*4+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case i.L:return o[(e-1)*4+0];case i.M:return o[(e-1)*4+1];case i.Q:return o[(e-1)*4+2];case i.H:return o[(e-1)*4+3];default:return}}},9406:function(e,t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");let r=e.toLowerCase();switch(r){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw Error("Unknown EC Level: "+e)}}(e)}catch(e){return r}}},78241:function(e,t,r){let i=r(13400).getSymbolSize;t.getPositions=function(e){let t=i(e);return[[0,0],[t-7,0],[0,t-7]]}},50237:function(e,t,r){let i=r(13400),n=i.getBCHDigit(1335);t.getEncodedBits=function(e,t){let r=e.bit<<3|t,o=r<<10;for(;i.getBCHDigit(o)-n>=0;)o^=1335<<i.getBCHDigit(o)-n;return(r<<10|o)^21522}},51309:function(e,t){let r=new Uint8Array(512),i=new Uint8Array(256);!function(){let e=1;for(let t=0;t<255;t++)r[t]=e,i[e]=t,256&(e<<=1)&&(e^=285);for(let e=255;e<512;e++)r[e]=r[e-255]}(),t.log=function(e){if(e<1)throw Error("log("+e+")");return i[e]},t.exp=function(e){return r[e]},t.mul=function(e,t){return 0===e||0===t?0:r[i[e]+i[t]]}},69592:function(e,t,r){let i=r(37662),n=r(13400);function o(e){this.mode=i.KANJI,this.data=e}o.getBitsLength=function(e){return 13*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let r=n.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");r=(r>>>8&255)*192+(255&r),e.put(r,13)}},e.exports=o},68334:function(e,t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let r={N1:3,N2:3,N3:40,N4:10};t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){let t=e.size,i=0,n=0,o=0,a=null,s=null;for(let l=0;l<t;l++){n=o=0,a=s=null;for(let c=0;c<t;c++){let t=e.get(l,c);t===a?n++:(n>=5&&(i+=r.N1+(n-5)),a=t,n=1),(t=e.get(c,l))===s?o++:(o>=5&&(i+=r.N1+(o-5)),s=t,o=1)}n>=5&&(i+=r.N1+(n-5)),o>=5&&(i+=r.N1+(o-5))}return i},t.getPenaltyN2=function(e){let t=e.size,i=0;for(let r=0;r<t-1;r++)for(let n=0;n<t-1;n++){let t=e.get(r,n)+e.get(r,n+1)+e.get(r+1,n)+e.get(r+1,n+1);(4===t||0===t)&&i++}return i*r.N2},t.getPenaltyN3=function(e){let t=e.size,i=0,n=0,o=0;for(let r=0;r<t;r++){n=o=0;for(let a=0;a<t;a++)n=n<<1&2047|e.get(r,a),a>=10&&(1488===n||93===n)&&i++,o=o<<1&2047|e.get(a,r),a>=10&&(1488===o||93===o)&&i++}return i*r.N3},t.getPenaltyN4=function(e){let t=0,i=e.data.length;for(let r=0;r<i;r++)t+=e.data[r];let n=Math.abs(Math.ceil(100*t/i/5)-10);return n*r.N4},t.applyMask=function(e,r){let i=r.size;for(let n=0;n<i;n++)for(let o=0;o<i;o++)r.isReserved(o,n)||r.xor(o,n,function(e,r,i){switch(e){case t.Patterns.PATTERN000:return(r+i)%2==0;case t.Patterns.PATTERN001:return r%2==0;case t.Patterns.PATTERN010:return i%3==0;case t.Patterns.PATTERN011:return(r+i)%3==0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(i/3))%2==0;case t.Patterns.PATTERN101:return r*i%2+r*i%3==0;case t.Patterns.PATTERN110:return(r*i%2+r*i%3)%2==0;case t.Patterns.PATTERN111:return(r*i%3+(r+i)%2)%2==0;default:throw Error("bad maskPattern:"+e)}}(e,o,n))},t.getBestMask=function(e,r){let i=Object.keys(t.Patterns).length,n=0,o=1/0;for(let a=0;a<i;a++){r(a),t.applyMask(a,e);let i=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(a,e),i<o&&(o=i,n=a)}return n}},37662:function(e,t,r){let i=r(64956),n=r(66579);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw Error("Invalid mode: "+e);if(!i.isValid(t))throw Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return n.testNumeric(e)?t.NUMERIC:n.testAlphanumeric(e)?t.ALPHANUMERIC:n.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");let r=e.toLowerCase();switch(r){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw Error("Unknown mode: "+e)}}(e)}catch(e){return r}}},10894:function(e,t,r){let i=r(37662);function n(e){this.mode=i.NUMERIC,this.data=e.toString()}n.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){let t,r;for(t=0;t+3<=this.data.length;t+=3)r=parseInt(this.data.substr(t,3),10),e.put(r,10);let i=this.data.length-t;i>0&&(r=parseInt(this.data.substr(t),10),e.put(r,3*i+1))},e.exports=n},25153:function(e,t,r){let i=r(51309);t.mul=function(e,t){let r=new Uint8Array(e.length+t.length-1);for(let n=0;n<e.length;n++)for(let o=0;o<t.length;o++)r[n+o]^=i.mul(e[n],t[o]);return r},t.mod=function(e,t){let r=new Uint8Array(e);for(;r.length-t.length>=0;){let e=r[0];for(let n=0;n<t.length;n++)r[n]^=i.mul(t[n],e);let n=0;for(;n<r.length&&0===r[n];)n++;r=r.slice(n)}return r},t.generateECPolynomial=function(e){let r=new Uint8Array([1]);for(let n=0;n<e;n++)r=t.mul(r,new Uint8Array([1,i.exp(n)]));return r}},37621:function(e,t,r){let i=r(13400),n=r(9406),o=r(41904),a=r(21091),s=r(8177),l=r(78241),c=r(68334),u=r(37039),h=r(9936),d=r(48670),f=r(50237),p=r(37662),g=r(25082);function w(e,t,r){let i,n;let o=e.size,a=f.getEncodedBits(t,r);for(i=0;i<15;i++)n=(a>>i&1)==1,i<6?e.set(i,8,n,!0):i<8?e.set(i+1,8,n,!0):e.set(o-15+i,8,n,!0),i<8?e.set(8,o-i-1,n,!0):i<9?e.set(8,15-i-1+1,n,!0):e.set(8,15-i-1,n,!0);e.set(o-8,8,1,!0)}t.create=function(e,t){let r,f;if(void 0===e||""===e)throw Error("No input text");let b=n.M;return void 0!==t&&(b=n.from(t.errorCorrectionLevel,n.M),r=d.from(t.version),f=c.from(t.maskPattern),t.toSJISFunc&&i.setToSJISFunction(t.toSJISFunc)),function(e,t,r,n){let f;if(Array.isArray(e))f=g.fromArray(e);else if("string"==typeof e){let i=t;if(!i){let t=g.rawSplit(e);i=d.getBestVersionForData(t,r)}f=g.fromString(e,i||40)}else throw Error("Invalid data");let b=d.getBestVersionForData(f,r);if(!b)throw Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<b)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+b+".\n")}else t=b;let m=function(e,t,r){let n=new o;r.forEach(function(t){n.put(t.mode.bit,4),n.put(t.getLength(),p.getCharCountIndicator(t.mode,e)),t.write(n)});let a=i.getSymbolTotalCodewords(e),s=u.getTotalCodewordsCount(e,t),l=(a-s)*8;for(n.getLengthInBits()+4<=l&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);let c=(l-n.getLengthInBits())/8;for(let e=0;e<c;e++)n.put(e%2?17:236,8);return function(e,t,r){let n,o;let a=i.getSymbolTotalCodewords(t),s=u.getTotalCodewordsCount(t,r),l=a-s,c=u.getBlocksCount(t,r),d=a%c,f=c-d,p=Math.floor(a/c),g=Math.floor(l/c),w=g+1,b=p-g,m=new h(b),y=0,v=Array(c),x=Array(c),C=0,E=new Uint8Array(e.buffer);for(let e=0;e<c;e++){let t=e<f?g:w;v[e]=E.slice(y,y+t),x[e]=m.encode(v[e]),y+=t,C=Math.max(C,t)}let k=new Uint8Array(a),S=0;for(n=0;n<C;n++)for(o=0;o<c;o++)n<v[o].length&&(k[S++]=v[o][n]);for(n=0;n<b;n++)for(o=0;o<c;o++)k[S++]=x[o][n];return k}(n,e,t)}(t,r,f),y=i.getSymbolSize(t),v=new a(y);return function(e,t){let r=e.size,i=l.getPositions(t);for(let t=0;t<i.length;t++){let n=i[t][0],o=i[t][1];for(let t=-1;t<=7;t++)if(!(n+t<=-1)&&!(r<=n+t))for(let i=-1;i<=7;i++)o+i<=-1||r<=o+i||(t>=0&&t<=6&&(0===i||6===i)||i>=0&&i<=6&&(0===t||6===t)||t>=2&&t<=4&&i>=2&&i<=4?e.set(n+t,o+i,!0,!0):e.set(n+t,o+i,!1,!0))}}(v,t),function(e){let t=e.size;for(let r=8;r<t-8;r++){let t=r%2==0;e.set(r,6,t,!0),e.set(6,r,t,!0)}}(v),function(e,t){let r=s.getPositions(t);for(let t=0;t<r.length;t++){let i=r[t][0],n=r[t][1];for(let t=-2;t<=2;t++)for(let r=-2;r<=2;r++)-2===t||2===t||-2===r||2===r||0===t&&0===r?e.set(i+t,n+r,!0,!0):e.set(i+t,n+r,!1,!0)}}(v,t),w(v,r,0),t>=7&&function(e,t){let r,i,n;let o=e.size,a=d.getEncodedBits(t);for(let t=0;t<18;t++)r=Math.floor(t/3),i=t%3+o-8-3,n=(a>>t&1)==1,e.set(r,i,n,!0),e.set(i,r,n,!0)}(v,t),function(e,t){let r=e.size,i=-1,n=r-1,o=7,a=0;for(let s=r-1;s>0;s-=2)for(6===s&&s--;;){for(let r=0;r<2;r++)if(!e.isReserved(n,s-r)){let i=!1;a<t.length&&(i=(t[a]>>>o&1)==1),e.set(n,s-r,i),-1==--o&&(a++,o=7)}if((n+=i)<0||r<=n){n-=i,i=-i;break}}}(v,m),isNaN(n)&&(n=c.getBestMask(v,w.bind(null,v,r))),c.applyMask(n,v),w(v,r,n),{modules:v,version:t,errorCorrectionLevel:r,maskPattern:n,segments:f}}(e,r,b,f)}},9936:function(e,t,r){let i=r(25153);function n(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}n.prototype.initialize=function(e){this.degree=e,this.genPoly=i.generateECPolynomial(this.degree)},n.prototype.encode=function(e){if(!this.genPoly)throw Error("Encoder not initialized");let t=new Uint8Array(e.length+this.degree);t.set(e);let r=i.mod(t,this.genPoly),n=this.degree-r.length;if(n>0){let e=new Uint8Array(this.degree);return e.set(r,n),e}return r},e.exports=n},66579:function(e,t){let r="[0-9]+",i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";i=i.replace(/u/g,"\\u");let n="(?:(?![A-Z0-9 $%*+\\-./:]|"+i+")(?:.|[\r\n]))+";t.KANJI=RegExp(i,"g"),t.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=RegExp(n,"g"),t.NUMERIC=RegExp(r,"g"),t.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let o=RegExp("^"+i+"$"),a=RegExp("^"+r+"$"),s=RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return o.test(e)},t.testNumeric=function(e){return a.test(e)},t.testAlphanumeric=function(e){return s.test(e)}},25082:function(e,t,r){let i=r(37662),n=r(10894),o=r(77654),a=r(90690),s=r(69592),l=r(66579),c=r(13400),u=r(78343);function h(e){return unescape(encodeURIComponent(e)).length}function d(e,t,r){let i;let n=[];for(;null!==(i=e.exec(r));)n.push({data:i[0],index:i.index,mode:t,length:i[0].length});return n}function f(e){let t,r;let n=d(l.NUMERIC,i.NUMERIC,e),o=d(l.ALPHANUMERIC,i.ALPHANUMERIC,e);c.isKanjiModeEnabled()?(t=d(l.BYTE,i.BYTE,e),r=d(l.KANJI,i.KANJI,e)):(t=d(l.BYTE_KANJI,i.BYTE,e),r=[]);let a=n.concat(o,t,r);return a.sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function p(e,t){switch(t){case i.NUMERIC:return n.getBitsLength(e);case i.ALPHANUMERIC:return o.getBitsLength(e);case i.KANJI:return s.getBitsLength(e);case i.BYTE:return a.getBitsLength(e)}}function g(e,t){let r;let l=i.getBestModeForData(e);if((r=i.from(t,l))!==i.BYTE&&r.bit<l.bit)throw Error('"'+e+'" cannot be encoded with mode '+i.toString(r)+".\n Suggested mode is: "+i.toString(l));switch(r!==i.KANJI||c.isKanjiModeEnabled()||(r=i.BYTE),r){case i.NUMERIC:return new n(e);case i.ALPHANUMERIC:return new o(e);case i.KANJI:return new s(e);case i.BYTE:return new a(e)}}t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(g(t,null)):t.data&&e.push(g(t.data,t.mode)),e},[])},t.fromString=function(e,r){let n=f(e,c.isKanjiModeEnabled()),o=function(e){let t=[];for(let r=0;r<e.length;r++){let n=e[r];switch(n.mode){case i.NUMERIC:t.push([n,{data:n.data,mode:i.ALPHANUMERIC,length:n.length},{data:n.data,mode:i.BYTE,length:n.length}]);break;case i.ALPHANUMERIC:t.push([n,{data:n.data,mode:i.BYTE,length:n.length}]);break;case i.KANJI:t.push([n,{data:n.data,mode:i.BYTE,length:h(n.data)}]);break;case i.BYTE:t.push([{data:n.data,mode:i.BYTE,length:h(n.data)}])}}return t}(n),a=function(e,t){let r={},n={start:{}},o=["start"];for(let a=0;a<e.length;a++){let s=e[a],l=[];for(let e=0;e<s.length;e++){let c=s[e],u=""+a+e;l.push(u),r[u]={node:c,lastCount:0},n[u]={};for(let e=0;e<o.length;e++){let a=o[e];r[a]&&r[a].node.mode===c.mode?(n[a][u]=p(r[a].lastCount+c.length,c.mode)-p(r[a].lastCount,c.mode),r[a].lastCount+=c.length):(r[a]&&(r[a].lastCount=c.length),n[a][u]=p(c.length,c.mode)+4+i.getCharCountIndicator(c.mode,t))}}o=l}for(let e=0;e<o.length;e++)n[o[e]].end=0;return{map:n,table:r}}(o,r),s=u.find_path(a.map,"start","end"),l=[];for(let e=1;e<s.length-1;e++)l.push(a.table[s[e]].node);return t.fromArray(l.reduce(function(e,t){let r=e.length-1>=0?e[e.length-1]:null;return r&&r.mode===t.mode?e[e.length-1].data+=t.data:e.push(t),e},[]))},t.rawSplit=function(e){return t.fromArray(f(e,c.isKanjiModeEnabled()))}},13400:function(e,t){let r;let i=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw Error('"version" cannot be null or undefined');if(e<1||e>40)throw Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return i[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw Error('"toSJISFunc" is not a valid function.');r=e},t.isKanjiModeEnabled=function(){return void 0!==r},t.toSJIS=function(e){return r(e)}},64956:function(e,t){t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},48670:function(e,t,r){let i=r(13400),n=r(37039),o=r(9406),a=r(37662),s=r(64956),l=i.getBCHDigit(7973);function c(e,t){return a.getCharCountIndicator(e,t)+4}t.from=function(e,t){return s.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,r){if(!s.isValid(e))throw Error("Invalid QR Code version");void 0===r&&(r=a.BYTE);let o=i.getSymbolTotalCodewords(e),l=n.getTotalCodewordsCount(e,t),u=(o-l)*8;if(r===a.MIXED)return u;let h=u-c(r,e);switch(r){case a.NUMERIC:return Math.floor(h/10*3);case a.ALPHANUMERIC:return Math.floor(h/11*2);case a.KANJI:return Math.floor(h/13);case a.BYTE:default:return Math.floor(h/8)}},t.getBestVersionForData=function(e,r){let i;let n=o.from(r,o.M);if(Array.isArray(e)){if(e.length>1)return function(e,r){for(let i=1;i<=40;i++){let n=function(e,t){let r=0;return e.forEach(function(e){let i=c(e.mode,t);r+=i+e.getBitsLength()}),r}(e,i);if(n<=t.getCapacity(i,r,a.MIXED))return i}}(e,n);if(0===e.length)return 1;i=e[0]}else i=e;return function(e,r,i){for(let n=1;n<=40;n++)if(r<=t.getCapacity(n,i,e))return n}(i.mode,i.getLength(),n)},t.getEncodedBits=function(e){if(!s.isValid(e)||e<7)throw Error("Invalid QR Code version");let t=e<<12;for(;i.getBCHDigit(t)-l>=0;)t^=7973<<i.getBCHDigit(t)-l;return e<<12|t}},46028:function(e,t,r){let i=r(10544);t.render=function(e,t,r){var n;let o=r,a=t;void 0!==o||t&&t.getContext||(o=t,t=void 0),t||(a=function(){try{return document.createElement("canvas")}catch(e){throw Error("You need to specify a canvas element")}}()),o=i.getOptions(o);let s=i.getImageWidth(e.modules.size,o),l=a.getContext("2d"),c=l.createImageData(s,s);return i.qrToImageData(c.data,e,o),n=a,l.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px",l.putImageData(c,0,0),a},t.renderToDataURL=function(e,r,i){let n=i;void 0!==n||r&&r.getContext||(n=r,r=void 0),n||(n={});let o=t.render(e,r,n),a=n.type||"image/png",s=n.rendererOpts||{};return o.toDataURL(a,s.quality)}},12330:function(e,t,r){let i=r(10544);function n(e,t){let r=e.a/255,i=t+'="'+e.hex+'"';return r<1?i+" "+t+'-opacity="'+r.toFixed(2).slice(1)+'"':i}function o(e,t,r){let i=e+t;return void 0!==r&&(i+=" "+r),i}t.render=function(e,t,r){let a=i.getOptions(t),s=e.modules.size,l=e.modules.data,c=s+2*a.margin,u=a.color.light.a?"<path "+n(a.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",h="<path "+n(a.color.dark,"stroke")+' d="'+function(e,t,r){let i="",n=0,a=!1,s=0;for(let l=0;l<e.length;l++){let c=Math.floor(l%t),u=Math.floor(l/t);c||a||(a=!0),e[l]?(s++,l>0&&c>0&&e[l-1]||(i+=a?o("M",c+r,.5+u+r):o("m",n,0),n=0,a=!1),c+1<t&&e[l+1]||(i+=o("h",s),s=0)):n++}return i}(l,s,a.margin)+'"/>',d=a.width?'width="'+a.width+'" height="'+a.width+'" ':"",f='<svg xmlns="http://www.w3.org/2000/svg" '+d+('viewBox="0 0 '+c)+" "+c+'" shape-rendering="crispEdges">'+u+h+"</svg>\n";return"function"==typeof r&&r(null,f),f}},10544:function(e,t){function r(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw Error("Invalid hex color: "+e);(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");let r=parseInt(t.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});let t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,i=e.width&&e.width>=21?e.width:void 0,n=e.scale||4;return{width:i,scale:i?4:n,margin:t,color:{dark:r(e.color.dark||"#000000ff"),light:r(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,r){let i=t.getScale(e,r);return Math.floor((e+2*r.margin)*i)},t.qrToImageData=function(e,r,i){let n=r.modules.size,o=r.modules.data,a=t.getScale(n,i),s=Math.floor((n+2*i.margin)*a),l=i.margin*a,c=[i.color.light,i.color.dark];for(let t=0;t<s;t++)for(let r=0;r<s;r++){let u=(t*s+r)*4,h=i.color.light;if(t>=l&&r>=l&&t<s-l&&r<s-l){let e=Math.floor((t-l)/a),i=Math.floor((r-l)/a);h=c[o[e*n+i]?1:0]}e[u++]=h.r,e[u++]=h.g,e[u++]=h.b,e[u]=h.a}}},34470:function(e){"use strict";e.exports=(e,t)=>{if(!("string"==typeof e&&"string"==typeof t))throw TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];let r=e.indexOf(t);return -1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},67116:function(e){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)},81853:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=r(2265),n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=i.useState,a=i.useEffect,s=i.useLayoutEffect,l=i.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!n(e,r)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),i=o({inst:{value:r,getSnapshot:t}}),n=i[0].inst,u=i[1];return s(function(){n.value=r,n.getSnapshot=t,c(n)&&u({inst:n})},[e,r,t]),a(function(){return c(n)&&u({inst:n}),e(function(){c(n)&&u({inst:n})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==i.useSyncExternalStore?i.useSyncExternalStore:u},78704:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=r(2265),n=r(26272),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=n.useSyncExternalStore,s=i.useRef,l=i.useEffect,c=i.useMemo,u=i.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,i,n){var h=s(null);if(null===h.current){var d={hasValue:!1,value:null};h.current=d}else d=h.current;h=c(function(){function e(e){if(!l){if(l=!0,a=e,e=i(e),void 0!==n&&d.hasValue){var t=d.value;if(n(t,e))return s=t}return s=e}if(t=s,o(a,e))return t;var r=i(e);return void 0!==n&&n(t,r)?t:(a=e,s=r)}var a,s,l=!1,c=void 0===r?null:r;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,r,i,n]);var f=a(e,h[0],h[1]);return l(function(){d.hasValue=!0,d.value=f},[f]),u(f),f}},26272:function(e,t,r){"use strict";e.exports=r(81853)},65401:function(e,t,r){"use strict";e.exports=r(78704)},92998:function(e,t,r){"use strict";r.d(t,{_:function(){return d}});var i,n=r(38026),o=r(40106),a=r(53404),s=r(39803),l=r(48519),c=r(71061),u=r(39730),h=r(21693),d=class extends a.wR{constructor({chains:e,options:t}={}){let r={shimDisconnect:!0,getProvider(){if("undefined"==typeof window)return;let e=window.ethereum;return e?.providers?e.providers[0]:e},...t};super({chains:e,options:r}),this.id="injected",(0,a.Ko)(this,i,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,s.K)(e[0])})},this.onChainChanged=e=>{let t=(0,o.J)(e),r=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:r}})},this.onDisconnect=async e=>{if(1013===e.code){let e=await this.getProvider();if(e){let e=await this.getAccount();if(e)return}}this.emit("disconnect"),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey)};let n=r.getProvider();if("string"==typeof r.name)this.name=r.name;else if(n){let e=function(e){if(!e)return"Injected";let t=e=>e.isApexWallet?"Apex Wallet":e.isAvalanche?"Core Wallet":e.isBackpack?"Backpack":e.isBifrost?"Bifrost Wallet":e.isBitKeep?"BitKeep":e.isBitski?"Bitski":e.isBlockWallet?"BlockWallet":e.isBraveWallet?"Brave Wallet":e.isCoin98?"Coin98 Wallet":e.isCoinbaseWallet?"Coinbase Wallet":e.isDawn?"Dawn Wallet":e.isDefiant?"Defiant":e.isDesig?"Desig Wallet":e.isEnkrypt?"Enkrypt":e.isExodus?"Exodus":e.isFordefi?"Fordefi":e.isFrame?"Frame":e.isFrontier?"Frontier Wallet":e.isGamestop?"GameStop Wallet":e.isHaqqWallet?"HAQQ Wallet":e.isHyperPay?"HyperPay Wallet":e.isImToken?"ImToken":e.isHaloWallet?"Halo Wallet":e.isKuCoinWallet?"KuCoin Wallet":e.isMathWallet?"MathWallet":e.isNovaWallet?"Nova Wallet":e.isOkxWallet||e.isOKExWallet?"OKX Wallet":e.isOneInchIOSWallet||e.isOneInchAndroidWallet?"1inch Wallet":e.isOpera?"Opera":e.isPhantom?"Phantom":e.isPortal?"Ripio Portal":e.isRabby?"Rabby Wallet":e.isRainbow?"Rainbow":e.isStatus?"Status":e.isSubWallet?"SubWallet":e.isTalisman?"Talisman":e.isTally?"Taho":e.isTokenPocket?"TokenPocket":e.isTokenary?"Tokenary":e.isTrust||e.isTrustWallet?"Trust Wallet":e.isTTWallet?"TTWallet":e.isXDEFI?"XDEFI Wallet":e.isZeal?"Zeal":e.isZerion?"Zerion":e.isMetaMask?"MetaMask":void 0;if(e.providers?.length){let r=new Set,i=1;for(let n of e.providers){let e=t(n);e||(e=`Unknown Wallet #${i}`,i+=1),r.add(e)}let n=[...r];return n.length?n:n[0]??"Injected"}return t(e)??"Injected"}(n);r.name?this.name=r.name(e):"string"==typeof e?this.name=e:this.name=e[0]}else this.name="Injected";this.ready=!!n}async connect({chainId:e}={}){try{let t=await this.getProvider();if(!t)throw new n.N;t.on&&(t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});let r=await t.request({method:"eth_requestAccounts"}),i=(0,s.K)(r[0]),o=await this.getChainId(),a=this.isChainUnsupported(o);if(e&&o!==e){let t=await this.switchChain(e);o=t.id,a=this.isChainUnsupported(o)}return this.options.shimDisconnect&&this.storage?.setItem(this.shimDisconnectKey,!0),{account:i,chain:{id:o,unsupported:a}}}catch(e){if(this.isUserRejectedRequestError(e))throw new l.ab(e);if(-32002===e.code)throw new l.pT(e);throw e}}async disconnect(){let e=await this.getProvider();e?.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey))}async getAccount(){let e=await this.getProvider();if(!e)throw new n.N;return(0,s.K)((await e.request({method:"eth_accounts"}))[0])}async getChainId(){let e=await this.getProvider();if(!e)throw new n.N;return e.request({method:"eth_chainId"}).then(o.J)}async getProvider(){let e=this.options.getProvider();return e&&(0,a.qx)(this,i,e),(0,a.ac)(this,i)}async getWalletClient({chainId:e}={}){let[t,r]=await Promise.all([this.getProvider(),this.getAccount()]),i=this.chains.find(t=>t.id===e);if(!t)throw Error("provider is required.");return(0,c.K)({account:r,chain:i,transport:(0,u.P)(t)})}async isAuthorized(){try{if(this.options.shimDisconnect&&!this.storage?.getItem(this.shimDisconnectKey))return!1;let e=await this.getProvider();if(!e)throw new n.N;let t=await this.getAccount();return!!t}catch{return!1}}async switchChain(e){let t=await this.getProvider();if(!t)throw new n.N;let r=(0,h.eC)(e);try{return await Promise.all([t.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),new Promise(t=>this.on("change",({chain:r})=>{r?.id===e&&t()}))]),this.chains.find(t=>t.id===e)??{id:e,name:`Chain ${r}`,network:`${r}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(o){let i=this.chains.find(t=>t.id===e);if(!i)throw new n.B({chainId:e,connectorId:this.id});if(4902===o.code||o?.data?.originalError?.code===4902)try{await t.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:i.name,nativeCurrency:i.nativeCurrency,rpcUrls:[i.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(i)}]});let n=await this.getChainId();if(n!==e)throw new l.ab(Error("User rejected switch after adding network."));return i}catch(e){throw new l.ab(e)}if(this.isUserRejectedRequestError(o))throw new l.ab(o);throw new l.x3(o)}}async watchAsset({address:e,decimals:t=18,image:r,symbol:i}){let o=await this.getProvider();if(!o)throw new n.N;return o.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:r,symbol:i}}})}isUserRejectedRequestError(e){return 4001===e.code}};i=new WeakMap},40106:function(e,t,r){"use strict";function i(e){return"string"==typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"==typeof e?Number(e):e}r.d(t,{J:function(){return i}})},38026:function(e,t,r){"use strict";r.d(t,{B:function(){return i},N:function(){return n}});var i=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured for connector "${t}".`),this.name="ChainNotConfiguredForConnectorError"}},n=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}}},53404:function(e,t,r){"use strict";r.d(t,{wR:function(){return d},Ko:function(){return c},ac:function(){return l},U9:function(){return h},qx:function(){return u}});var i=r(28729),n=r(75404),o=r(71186);let a=(0,o.a)({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0});var s=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},l=(e,t,r)=>(s(e,t,"read from private field"),r?r.call(e):t.get(e)),c=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},u=(e,t,r,i)=>(s(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r),h=(e,t,r)=>(s(e,t,"access private method"),r),d=class extends i{constructor({chains:e=[n.R,a],options:t}){super(),this.chains=e,this.options=t}getBlockExplorerUrls(e){let{default:t,...r}=e.blockExplorers??{};if(t)return[t.url,...Object.values(r).map(e=>e.url)]}isChainUnsupported(e){return!this.chains.some(t=>t.id===e)}setStorage(e){this.storage=e}}},20558:function(e,t,r){"use strict";r.d(t,{QB:function(){return tL},$j:function(){return t6},_g:function(){return t5},o6:function(){return t0},vZ:function(){return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){let i,n;if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)&&Array.isArray(r)){if((i=t.length)!=r.length)return!1;for(n=i;0!=n--;)if(!e(t[n],r[n]))return!1;return!0}if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();let o=Object.keys(t);if((i=o.length)!==Object.keys(r).length)return!1;for(n=i;0!=n--;)if(!Object.prototype.hasOwnProperty.call(r,o[n]))return!1;for(n=i;0!=n--;){let i=o[n];if(i&&!e(t[i],r[i]))return!1}return!0}return t!=t&&r!=r}},zP:function(){return t4},EG:function(){return rc},RQ:function(){return rb},w6:function(){return rg},Lk:function(){return rw},D0:function(){return ru},Hy:function(){return rh},uV:function(){return t7},gY:function(){return tZ},jr:function(){return rt},wp:function(){return tJ},a4:function(){return ra},JH:function(){return rs},If:function(){return rd},Mn:function(){return rm},uH:function(){return rf},QC:function(){return rp},pC:function(){return rr},fq:function(){return ri},n9:function(){return rl}});var i,n,o,a,s,l=r(92998),c=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},u=(e,t,r)=>(c(e,t,"read from private field"),r?r.call(e):t.get(e)),h=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},d=(e,t,r,i)=>(c(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r),f=(e,t,r)=>(c(e,t,"access private method"),r),p=r(30315),g=r(42980),w=r(3458),b=r(53883),m=r(94540),y=r(94973),v=r(21693),x=r(28483),C=r(95950),E=r(98458);function k(e,t){if(!(e instanceof C.G))return!1;let r=e.walk(e=>e instanceof E.Lu);return r instanceof E.Lu&&(!!(r.data?.errorName==="ResolverNotFound"||r.data?.errorName==="ResolverWildcardNotSupported"||r.reason?.includes("Wildcard on non-extended resolvers is not supported"))||"reverse"===t&&r.reason===x.$[50])}var S=r(69809),_=r(56728),A=r(55852),$=r(45008);function P(e){if(66!==e.length||0!==e.indexOf("[")||65!==e.indexOf("]"))return null;let t=`0x${e.slice(1,65)}`;return(0,$.v)(t)?t:null}function O(e){let t=new Uint8Array(32).fill(0);if(!e)return(0,v.ci)(t);let r=e.split(".");for(let e=r.length-1;e>=0;e-=1){let i=P(r[e]),n=i?(0,_.O0)(i):(0,A.w)((0,_.qX)(r[e]),"bytes");t=(0,A.w)((0,S.zo)([t,n]),"bytes")}return(0,v.ci)(t)}function D(e){let t=e.replace(/^\.|\.$/gm,"");if(0===t.length)return new Uint8Array(1);let r=new Uint8Array((0,_.qX)(t).byteLength+2),i=0,n=t.split(".");for(let e=0;e<n.length;e++){let t=(0,_.qX)(n[e]);t.byteLength>255&&(t=(0,_.qX)(`[${(function(e){let t=new Uint8Array(32).fill(0);return e?P(e)||(0,A.w)((0,_.qX)(e)):(0,v.ci)(t)})(n[e]).slice(2)}]`)),r[i]=t.length,r.set(t,i+1),i+=t.length+1}return r.byteLength!==i+1?r.slice(0,i+1):r}var I=r(82600),R=r(71878),N=r(48519);function T(e,{abi:t,address:r,args:i,docsPath:n,functionName:o,sender:a}){let{code:s,data:l,message:c,shortMessage:u}=e instanceof E.VQ?e:e instanceof C.G?e.walk(e=>"data"in e)||e.walk():{},h=e instanceof R.wb?new E.Dk({functionName:o}):[3,N.XS.code].includes(s)&&(l||c||u)?new E.Lu({abi:t,data:"object"==typeof l?l.data:l,functionName:o,message:u??c}):e;return new E.uq(h,{abi:t,args:i,contractAddress:r,docsPath:n,functionName:o,sender:a})}var M=r(98873);async function j(e,{abi:t,address:r,args:i,functionName:n,...o}){let a=(0,b.R)({abi:t,args:i,functionName:n});try{let{data:s}=await (0,I.s)(e,M.R)({data:a,to:r,...o});return(0,w.k)({abi:t,args:i,functionName:n,data:s||"0x"})}catch(e){throw T(e,{abi:t,address:r,args:i,docsPath:"/docs/contract/readContract",functionName:n})}}async function U(e,{blockNumber:t,blockTag:r,coinType:i,name:n,universalResolverAddress:o}){let a=o;if(!a){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");a=(0,m.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{let o=(0,b.R)({abi:g.X$,functionName:"addr",...null!=i?{args:[O(n),BigInt(i)]}:{args:[O(n)]}}),s=await (0,I.s)(e,j)({address:a,abi:g.k3,functionName:"resolve",args:[(0,v.NC)(D(n)),o],blockNumber:t,blockTag:r});if("0x"===s[0])return null;let l=(0,w.k)({abi:g.X$,args:null!=i?[O(n),BigInt(i)]:void 0,functionName:"addr",data:s[0]});if("0x"===l||"0x00"===(0,y.f)(l))return null;return l}catch(e){if(k(e,"resolve"))return null;throw e}}class B extends C.G{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class L extends C.G{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class F extends C.G{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class z extends C.G{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}let W=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,H=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,q=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,G=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function V(e){try{let t=await fetch(e,{method:"HEAD"});if(200===t.status){let e=t.headers.get("content-type");return e?.startsWith("image/")}return!1}catch(t){if("object"==typeof t&&void 0!==t.response||!globalThis.hasOwnProperty("Image"))return!1;return new Promise(t=>{let r=new Image;r.onload=()=>{t(!0)},r.onerror=()=>{t(!1)},r.src=e})}}function Z(e,t){return e?e.endsWith("/")?e.slice(0,-1):e:t}function K({uri:e,gatewayUrls:t}){let r=q.test(e);if(r)return{uri:e,isOnChain:!0,isEncoded:r};let i=Z(t?.ipfs,"https://ipfs.io"),n=Z(t?.arweave,"https://arweave.net"),o=e.match(W),{protocol:a,subpath:s,target:l,subtarget:c=""}=o?.groups||{},u="ipns:/"===a||"ipns/"===s,h="ipfs:/"===a||"ipfs/"===s||H.test(e);if(e.startsWith("http")&&!u&&!h){let r=e;return t?.arweave&&(r=e.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:r,isOnChain:!1,isEncoded:!1}}if((u||h)&&l)return{uri:`${i}/${u?"ipns":"ipfs"}/${l}${c}`,isOnChain:!1,isEncoded:!1};if("ar:/"===a&&l)return{uri:`${n}/${l}${c||""}`,isOnChain:!1,isEncoded:!1};let d=e.replace(G,"");if(d.startsWith("<svg")&&(d=`data:image/svg+xml;base64,${btoa(d)}`),d.startsWith("data:")||d.startsWith("{"))return{uri:d,isOnChain:!0,isEncoded:!1};throw new F({uri:e})}function Q(e){if("object"!=typeof e||!("image"in e)&&!("image_url"in e)&&!("image_data"in e))throw new B({data:e});return e.image||e.image_url||e.image_data}async function X({gatewayUrls:e,uri:t}){try{let r=await fetch(t).then(e=>e.json()),i=await Y({gatewayUrls:e,uri:Q(r)});return i}catch{throw new F({uri:t})}}async function Y({gatewayUrls:e,uri:t}){let{uri:r,isOnChain:i}=K({uri:t,gatewayUrls:e});if(i)return r;let n=await V(r);if(n)return r;throw new F({uri:t})}async function J(e,{nft:t}){if("erc721"===t.namespace)return j(e,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if("erc1155"===t.namespace)return j(e,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new z({namespace:t.namespace})}async function ee(e,{gatewayUrls:t,record:r}){return/eip155:/i.test(r)?et(e,{gatewayUrls:t,record:r}):Y({uri:r,gatewayUrls:t})}async function et(e,{gatewayUrls:t,record:r}){let i=function(e){let t=e;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));let[r,i,n]=t.split("/"),[o,a]=r.split(":"),[s,l]=i.split(":");if(!o||"eip155"!==o.toLowerCase())throw new L({reason:"Only EIP-155 supported"});if(!a)throw new L({reason:"Chain ID not found"});if(!l)throw new L({reason:"Contract address not found"});if(!n)throw new L({reason:"Token ID not found"});if(!s)throw new L({reason:"ERC namespace not found"});return{chainID:parseInt(a),namespace:s.toLowerCase(),contractAddress:l,tokenID:n}}(r),n=await J(e,{nft:i}),{uri:o,isOnChain:a,isEncoded:s}=K({uri:n,gatewayUrls:t});if(a&&(o.includes("data:application/json;base64,")||o.startsWith("{"))){let e=s?atob(o.replace("data:application/json;base64,","")):o,r=JSON.parse(e);return Y({uri:Q(r),gatewayUrls:t})}let l=i.tokenID;return"erc1155"===i.namespace&&(l=l.replace("0x","").padStart(64,"0")),X({gatewayUrls:t,uri:o.replace(/(?:0x)?{id}/,l)})}async function er(e,{blockNumber:t,blockTag:r,name:i,key:n,universalResolverAddress:o}){let a=o;if(!a){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");a=(0,m.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{let o=await (0,I.s)(e,j)({address:a,abi:g.k3,functionName:"resolve",args:[(0,v.NC)(D(i)),(0,b.R)({abi:g.nZ,functionName:"text",args:[O(i),n]})],blockNumber:t,blockTag:r});if("0x"===o[0])return null;let s=(0,w.k)({abi:g.nZ,functionName:"text",data:o[0]});return""===s?null:s}catch(e){if(k(e,"resolve"))return null;throw e}}async function ei(e,{blockNumber:t,blockTag:r,gatewayUrls:i,name:n,universalResolverAddress:o}){let a=await (0,I.s)(e,er)({blockNumber:t,blockTag:r,key:"avatar",name:n,universalResolverAddress:o});if(!a)return null;try{return await ee(e,{record:a,gatewayUrls:i})}catch{return null}}async function en(e,{address:t,blockNumber:r,blockTag:i,universalResolverAddress:n}){let o=n;if(!o){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");o=(0,m.L)({blockNumber:r,chain:e.chain,contract:"ensUniversalResolver"})}let a=`${t.toLowerCase().substring(2)}.addr.reverse`;try{let t=await (0,I.s)(e,j)({address:o,abi:g.du,functionName:"reverse",args:[(0,v.NC)(D(a))],blockNumber:r,blockTag:i});return t[0]}catch(e){if(k(e,"reverse"))return null;throw e}}async function eo(e,{blockNumber:t,blockTag:r,name:i,universalResolverAddress:n}){let o=n;if(!o){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");o=(0,m.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}let[a]=await (0,I.s)(e,j)({address:o,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[(0,v.NC)(D(i))],blockNumber:t,blockTag:r});return a}function ea(e,{method:t}){let r={};return"fallback"===e.transport.type&&e.transport.onResponse?.(({method:e,response:i,status:n,transport:o})=>{"success"===n&&t===e&&(r[i]=o.request)}),t=>r[t]||e.request}async function es(e){let t=ea(e,{method:"eth_newBlockFilter"}),r=await e.request({method:"eth_newBlockFilter"});return{id:r,request:t(r),type:"block"}}class el extends C.G{constructor(e){super(`Filter type "${e}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}var ec=r(77688),eu=r(90929),eh=r(40928),ed=r(77804);function ef({abi:e,eventName:t,args:r}){let i=e[0];if(t&&!(i=(0,ed.m)({abi:e,args:r,name:t})))throw new R.mv(t,{docsPath:"/docs/contract/encodeEventTopics"});if("event"!==i.type)throw new R.mv(void 0,{docsPath:"/docs/contract/encodeEventTopics"});let n=(0,eh.t)(i),o=(0,ec.e)(n),a=[];if(r&&"inputs"in i){let e=i.inputs?.filter(e=>"indexed"in e&&e.indexed),t=Array.isArray(r)?r:Object.values(r).length>0?e?.map(e=>r[e.name])??[]:[];t.length>0&&(a=e?.map((e,r)=>Array.isArray(t[r])?t[r].map((i,n)=>ep({param:e,value:t[r][n]})):t[r]?ep({param:e,value:t[r]}):null)??[])}return[o,...a]}function ep({param:e,value:t}){if("string"===e.type||"bytes"===e.type)return(0,A.w)((0,_.O0)(t));if("tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/))throw new el(e.type);return(0,eu.E)([e],[t])}async function eg(e,{address:t,abi:r,args:i,eventName:n,fromBlock:o,strict:a,toBlock:s}){let l=ea(e,{method:"eth_newFilter"}),c=n?ef({abi:r,args:i,eventName:n}):void 0,u=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:"bigint"==typeof o?(0,v.eC)(o):o,toBlock:"bigint"==typeof s?(0,v.eC)(s):s,topics:c}]});return{abi:r,args:i,eventName:n,id:u,request:l(u),strict:a,type:"event"}}async function ew(e,{address:t,args:r,event:i,events:n,fromBlock:o,strict:a,toBlock:s}={}){let l=n??(i?[i]:void 0),c=ea(e,{method:"eth_newFilter"}),u=[];l&&(u=[l.flatMap(e=>ef({abi:[e],eventName:e.name,args:r}))],i&&(u=u[0]));let h=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:"bigint"==typeof o?(0,v.eC)(o):o,toBlock:"bigint"==typeof s?(0,v.eC)(s):s,...u.length?{topics:u}:{}}]});return{abi:l,args:r,eventName:i?i.name:void 0,fromBlock:o,id:h,request:c(h),strict:a,toBlock:s,type:"event"}}async function eb(e){let t=ea(e,{method:"eth_newPendingTransactionFilter"}),r=await e.request({method:"eth_newPendingTransactionFilter"});return{id:r,request:t(r),type:"transaction"}}var em=r(4832),ey=r(89412);async function ev(e,{abi:t,address:r,args:i,functionName:n,...o}){let a=(0,b.R)({abi:t,args:i,functionName:n});try{let t=await (0,I.s)(e,ey.Q)({data:a,to:r,...o});return t}catch(a){let e=o.account?(0,em.T)(o.account):void 0;throw T(a,{abi:t,address:r,args:i,docsPath:"/docs/contract/estimateContractGas",functionName:n,sender:e?.address})}}var ex=r(77451),eC=r(17976);async function eE(e,{address:t,blockNumber:r,blockTag:i="latest"}){let n=r?(0,v.eC)(r):void 0,o=await e.request({method:"eth_getBalance",params:[t,n||i]});return BigInt(o)}var ek=r(69059);let eS=new Map,e_=new Map;async function eA(e,{cacheKey:t,cacheTime:r=1/0}){let i=function(e){let t=(e,t)=>({clear:()=>t.delete(e),get:()=>t.get(e),set:r=>t.set(e,r)}),r=t(e,eS),i=t(e,e_);return{clear:()=>{r.clear(),i.clear()},promise:r,response:i}}(t),n=i.response.get();if(n&&r>0){let e=new Date().getTime()-n.created.getTime();if(e<r)return n.data}let o=i.promise.get();o||(o=e(),i.promise.set(o));try{let e=await o;return i.response.set({created:new Date,data:e}),e}finally{i.promise.clear()}}let e$=e=>`blockNumber.${e}`;async function eP(e,{cacheTime:t=e.cacheTime,maxAge:r}={}){let i=await eA(()=>e.request({method:"eth_blockNumber"}),{cacheKey:e$(e.uid),cacheTime:r??t});return BigInt(i)}var eO=r(30838);async function eD(e,{blockHash:t,blockNumber:r,blockTag:i="latest"}={}){let n;let o=void 0!==r?(0,v.eC)(r):void 0;return n=t?await e.request({method:"eth_getBlockTransactionCountByHash",params:[t]}):await e.request({method:"eth_getBlockTransactionCountByNumber",params:[o||i]}),(0,eO.ly)(n)}async function eI(e,{address:t,blockNumber:r,blockTag:i="latest"}){let n=void 0!==r?(0,v.eC)(r):void 0,o=await e.request({method:"eth_getCode",params:[t,n||i]});if("0x"!==o)return o}var eR=r(13438),eN=r(87425);let eT="/docs/contract/decodeEventLog";function eM({abi:e,data:t,strict:r,topics:i}){let n=r??!0,[o,...a]=i;if(!o)throw new R.FM({docsPath:eT});let s=e.find(e=>"event"===e.type&&o===(0,ec.e)((0,eh.t)(e)));if(!(s&&"name"in s)||"event"!==s.type)throw new R.lC(o,{docsPath:eT});let{name:l,inputs:c}=s,u=c?.some(e=>!("name"in e&&e.name)),h=u?[]:{},d=c.filter(e=>"indexed"in e&&e.indexed);for(let e=0;e<d.length;e++){let t=d[e],r=a[e];if(!r)throw new R.Gy({abiItem:s,param:t});h[t.name||e]=function({param:e,value:t}){if("string"===e.type||"bytes"===e.type||"tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/))return t;let r=(0,eN.r)([e],t)||[];return r[0]}({param:t,value:r})}let f=c.filter(e=>!("indexed"in e&&e.indexed));if(f.length>0){if(t&&"0x"!==t)try{let e=(0,eN.r)(f,t);if(e){if(u)h=[...h,...e];else for(let t=0;t<f.length;t++)h[f[t].name]=e[t]}}catch(e){if(n){if(e instanceof R.xB)throw new R.SM({abiItem:s,data:e.data,params:e.params,size:e.size});throw e}}else if(n)throw new R.SM({abiItem:s,data:"0x",params:f,size:0})}return{eventName:l,args:Object.values(h).length>0?h:void 0}}function ej(e,{args:t,eventName:r}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...r?{args:t,eventName:r}:{}}}async function eU(e,{address:t,blockHash:r,fromBlock:i,toBlock:n,event:o,events:a,args:s,strict:l}={}){let c=l??!1,u=a??(o?[o]:void 0),h=[];return u&&(h=[u.flatMap(e=>ef({abi:[e],eventName:e.name,args:s}))],o&&(h=h[0])),(r?await e.request({method:"eth_getLogs",params:[{address:t,topics:h,blockHash:r}]}):await e.request({method:"eth_getLogs",params:[{address:t,topics:h,fromBlock:"bigint"==typeof i?(0,v.eC)(i):i,toBlock:"bigint"==typeof n?(0,v.eC)(n):n}]})).map(e=>{try{let{eventName:t,args:r}=u?eM({abi:u,data:e.data,topics:e.topics,strict:c}):{eventName:void 0,args:void 0};return ej(e,{args:r,eventName:t})}catch(i){let t,r;if(i instanceof R.SM||i instanceof R.Gy){if(c)return;t=i.abiItem.name,r=i.abiItem.inputs?.some(e=>!("name"in e&&e.name))}return ej(e,{args:r?[]:{},eventName:t})}}).filter(Boolean)}async function eB(e,{abi:t,address:r,args:i,blockHash:n,eventName:o,fromBlock:a,toBlock:s,strict:l}){let c=o?(0,ed.m)({abi:t,name:o}):void 0,u=c?void 0:t.filter(e=>"event"===e.type);return(0,I.s)(e,eU)({address:r,args:i,blockHash:n,event:c,events:u,fromBlock:a,toBlock:s,strict:l})}async function eL(e,{blockCount:t,blockNumber:r,blockTag:i="latest",rewardPercentiles:n}){let o=r?(0,v.eC)(r):void 0,a=await e.request({method:"eth_feeHistory",params:[(0,v.eC)(t),o||i,n]});return{baseFeePerGas:a.baseFeePerGas.map(e=>BigInt(e)),gasUsedRatio:a.gasUsedRatio,oldestBlock:BigInt(a.oldestBlock),reward:a.reward?.map(e=>e.map(e=>BigInt(e)))}}async function eF(e,{filter:t}){let r="strict"in t&&t.strict,i=await t.request({method:"eth_getFilterChanges",params:[t.id]});return i.map(e=>{if("string"==typeof e)return e;try{let{eventName:i,args:n}="abi"in t&&t.abi?eM({abi:t.abi,data:e.data,topics:e.topics,strict:r}):{eventName:void 0,args:void 0};return ej(e,{args:n,eventName:i})}catch(n){let r,i;if(n instanceof R.SM||n instanceof R.Gy){if("strict"in t&&t.strict)return;r=n.abiItem.name,i=n.abiItem.inputs?.some(e=>!("name"in e&&e.name))}return ej(e,{args:i?[]:{},eventName:r})}}).filter(Boolean)}async function ez(e,{filter:t}){let r=t.strict??!1,i=await t.request({method:"eth_getFilterLogs",params:[t.id]});return i.map(e=>{try{let{eventName:i,args:n}="abi"in t&&t.abi?eM({abi:t.abi,data:e.data,topics:e.topics,strict:r}):{eventName:void 0,args:void 0};return ej(e,{args:n,eventName:i})}catch(n){let r,i;if(n instanceof R.SM||n instanceof R.Gy){if("strict"in t&&t.strict)return;r=n.abiItem.name,i=n.abiItem.inputs?.some(e=>!("name"in e&&e.name))}return ej(e,{args:i?[]:{},eventName:r})}}).filter(Boolean)}var eW=r(75188);async function eH(e,{address:t,blockNumber:r,blockTag:i,storageKeys:n}){let o=void 0!==r?(0,v.eC)(r):void 0,a=await e.request({method:"eth_getProof",params:[t,n,o||(i??"latest")]});return{...a,balance:a.balance?BigInt(a.balance):void 0,nonce:a.nonce?(0,eO.ly)(a.nonce):void 0,storageProof:a.storageProof?a.storageProof.map(e=>({...e,value:BigInt(e.value)})):void 0}}async function eq(e,{address:t,blockNumber:r,blockTag:i="latest",slot:n}){let o=void 0!==r?(0,v.eC)(r):void 0,a=await e.request({method:"eth_getStorageAt",params:[t,n,o||i]});return a}var eG=r(44818),eV=r(52017);async function eZ(e,{blockHash:t,blockNumber:r,blockTag:i,hash:n,index:o}){let a=i||"latest",s=void 0!==r?(0,v.eC)(r):void 0,l=null;if(n?l=await e.request({method:"eth_getTransactionByHash",params:[n]}):t?l=await e.request({method:"eth_getTransactionByBlockHashAndIndex",params:[t,(0,v.eC)(o)]}):(s||a)&&(l=await e.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[s||a,(0,v.eC)(o)]})),!l)throw new eG.Bh({blockHash:t,blockNumber:r,blockTag:a,hash:n,index:o});let c=e.chain?.formatters?.transaction?.format||eV.Tr;return c(l)}async function eK(e,{hash:t,transactionReceipt:r}){let[i,n]=await Promise.all([(0,I.s)(e,eP)({}),t?(0,I.s)(e,eZ)({hash:t}):void 0]),o=r?.blockNumber||n?.blockNumber;return o?i-o+1n:0n}var eQ=r(31742);let eX={"0x0":"reverted","0x1":"success"};function eY(e){return{...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map(e=>ej(e)):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?(0,eO.ly)(e.transactionIndex):null,status:e.status?eX[e.status]:null,type:e.type?eV.c8[e.type]||e.type:null}}async function eJ(e,{hash:t}){let r=await e.request({method:"eth_getTransactionReceipt",params:[t]});if(!r)throw new eG.Yb({hash:t});let i=e.chain?.formatters?.transactionReceipt?.format||eY;return i(r)}async function e0(e,t){let{allowFailure:r=!0,batchSize:i,blockNumber:n,blockTag:o,contracts:a,multicallAddress:s}=t,l=i??("object"==typeof e.batch?.multicall&&e.batch.multicall.batchSize||1024),c=s;if(!c){if(!e.chain)throw Error("client chain not configured. multicallAddress is required.");c=(0,m.L)({blockNumber:n,chain:e.chain,contract:"multicall3"})}let u=[[]],h=0,d=0;for(let e=0;e<a.length;e++){let{abi:t,address:i,args:n,functionName:o}=a[e];try{let e=(0,b.R)({abi:t,args:n,functionName:o});d+=(e.length-2)/2,l>0&&d>l&&u[h].length>0&&(h++,d=(e.length-2)/2,u[h]=[]),u[h]=[...u[h],{allowFailure:!0,callData:e,target:i}]}catch(a){let e=T(a,{abi:t,address:i,args:n,docsPath:"/docs/contract/multicall",functionName:o});if(!r)throw e;u[h]=[...u[h],{allowFailure:!0,callData:"0x",target:i}]}}let f=await Promise.allSettled(u.map(t=>(0,I.s)(e,j)({abi:g.F8,address:c,args:[t],blockNumber:n,blockTag:o,functionName:"aggregate3"}))),p=[];for(let e=0;e<f.length;e++){let t=f[e];if("rejected"===t.status){if(!r)throw t.reason;for(let r=0;r<u[e].length;r++)p.push({status:"failure",error:t.reason,result:void 0});continue}let i=t.value;for(let t=0;t<i.length;t++){let{returnData:n,success:o}=i[t],{callData:s}=u[e][t],{abi:l,address:c,functionName:h,args:d}=a[p.length];try{if("0x"===s)throw new R.wb;if(!o)throw new E.VQ({data:n});let e=(0,w.k)({abi:l,args:d,data:n,functionName:h});p.push(r?{result:e,status:"success"}:e)}catch(t){let e=T(t,{abi:l,address:c,args:d,docsPath:"/docs/contract/multicall",functionName:h});if(!r)throw e;p.push({error:e,result:void 0,status:"failure"})}}}if(p.length!==a.length)throw new C.G("multicall results mismatch");return p}async function e1(e,{abi:t,address:r,args:i,dataSuffix:n,functionName:o,...a}){let s=a.account?(0,em.T)(a.account):void 0,l=(0,b.R)({abi:t,args:i,functionName:o});try{let{data:s}=await (0,I.s)(e,M.R)({batch:!1,data:`${l}${n?n.replace("0x",""):""}`,to:r,...a}),c=(0,w.k)({abi:t,args:i,functionName:o,data:s||"0x"});return{result:c,request:{abi:t,address:r,args:i,dataSuffix:n,functionName:o,...a}}}catch(e){throw T(e,{abi:t,address:r,args:i,docsPath:"/docs/contract/simulateContract",functionName:o,sender:s?.address})}}async function e2(e,{filter:t}){return t.request({method:"eth_uninstallFilter",params:[t.id]})}BigInt(0),BigInt(1),BigInt(2);var e5=r(12732);async function e3(e,{address:t,hash:r,signature:i,...n}){let o=(0,$.v)(i)?i:(0,v.NC)(i);try{let{data:i}=await (0,I.s)(e,M.R)({data:(0,e5.w)({abi:g.$o,args:[t,r,o],bytecode:"0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572"}),...n});return function(e,t){let r=(0,$.v)(e)?(0,_.O0)(e):e,i=(0,$.v)(t)?(0,_.O0)(t):t;return function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(r,i)}(i??"0x0","0x1")}catch(e){if(e instanceof E.cg)return!1;throw e}}async function e6(e,{address:t,message:r,signature:i,...n}){let o=function(e,t){let r="string"==typeof e?(0,_.qX)(e):e.raw instanceof Uint8Array?e.raw:(0,_.O0)(e.raw),i=(0,_.qX)(`\x19Ethereum Signed Message:
${r.length}`);return(0,A.w)((0,S.zo)([i,r]),void 0)}(r);return e3(e,{address:t,hash:o,signature:i,...n})}var e4=r(29578);function e8({data:e,primaryType:t,types:r}){let i=function e({data:t,primaryType:r,types:i}){let n=[{type:"bytes32"}],o=[function({primaryType:e,types:t}){let r=(0,v.NC)(function({primaryType:e,types:t}){let r="",i=function e({primaryType:t,types:r},i=new Set){let n=t.match(/^\w*/u)?.[0];if(i.has(n)||void 0===r[n])return i;for(let t of(i.add(n),r[n]))e({primaryType:t.type,types:r},i);return i}({primaryType:e,types:t});i.delete(e);let n=[e,...Array.from(i).sort()];for(let e of n)r+=`${e}(${t[e].map(({name:e,type:t})=>`${t} ${e}`).join(",")})`;return r}({primaryType:e,types:t}));return(0,A.w)(r)}({primaryType:r,types:i})];for(let a of i[r]){let[r,s]=function t({types:r,name:i,type:n,value:o}){if(void 0!==r[n])return[{type:"bytes32"},(0,A.w)(e({data:o,primaryType:n,types:r}))];if("bytes"===n){let e=o.length%2?"0":"";return o=`0x${e+o.slice(2)}`,[{type:"bytes32"},(0,A.w)(o)]}if("string"===n)return[{type:"bytes32"},(0,A.w)((0,v.NC)(o))];if(n.lastIndexOf("]")===n.length-1){let e=n.slice(0,n.lastIndexOf("[")),a=o.map(n=>t({name:i,type:e,types:r,value:n}));return[{type:"bytes32"},(0,A.w)((0,eu.E)(a.map(([e])=>e),a.map(([,e])=>e)))]}return[{type:n},o]}({types:i,name:a.name,type:a.type,value:t[a.name]});n.push(r),o.push(s)}return(0,eu.E)(n,o)}({data:e,primaryType:t,types:r});return(0,A.w)(i)}async function e9(e,{address:t,signature:r,message:i,primaryType:n,types:o,domain:a,...s}){let l=function({domain:e,message:t,primaryType:r,types:i}){let n=void 0===e?{}:e,o={EIP712Domain:(0,e4.cj)({domain:n}),...i};(0,e4.iC)({domain:n,message:t,primaryType:r,types:o});let a=["0x1901"];return n&&a.push(function({domain:e,types:t}){return e8({data:e,primaryType:"EIP712Domain",types:t})}({domain:n,types:o})),"EIP712Domain"!==r&&a.push(e8({data:t,primaryType:r,types:o})),(0,A.w)((0,S.zo)(a))}({message:i,primaryType:n,types:o,domain:a});return e3(e,{address:t,hash:l,signature:r,...s})}let e7=new Map,te=new Map,tt=0;function tr(e,t,r){let i=++tt,n=()=>e7.get(e)||[],o=()=>{let t=n();e7.set(e,t.filter(e=>e.id!==i))},a=()=>{let t=te.get(e);1===n().length&&t&&t(),o()},s=n();if(e7.set(e,[...s,{id:i,fns:t}]),s&&s.length>0)return a;let l={};for(let e in t)l[e]=(...t)=>{let r=n();0!==r.length&&r.forEach(r=>r.fns[e]?.(...t))};let c=r(l);return"function"==typeof c&&te.set(e,c),a}var ti=r(36063),tn=r(71891),to=r(21810);function ta(e,{emitOnBegin:t,initialWaitTime:r,interval:i}){let n=!0,o=()=>n=!1,a=async()=>{let a;t&&(a=await e({unpoll:o}));let s=await r?.(a)??i;await (0,to.D)(s);let l=async()=>{n&&(await e({unpoll:o}),await (0,to.D)(i),l())};l()};return a(),o}function ts(e,{emitOnBegin:t=!1,emitMissed:r=!1,onBlockNumber:i,onError:n,poll:o,pollingInterval:a=e.pollingInterval}){let s,l,c;let u=void 0!==o?o:"webSocket"!==e.transport.type;return u?(()=>{let o=(0,tn.P)(["watchBlockNumber",e.uid,t,r,a]);return tr(o,{onBlockNumber:i,onError:n},i=>ta(async()=>{try{let t=await (0,I.s)(e,eP)({cacheTime:0});if(s){if(t===s)return;if(t-s>1&&r)for(let e=s+1n;e<t;e++)i.onBlockNumber(e,s),s=e}(!s||t>s)&&(i.onBlockNumber(t,s),s=t)}catch(e){i.onError?.(e)}},{emitOnBegin:t,interval:a}))})():(l=!0,c=()=>l=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newHeads"],onData(e){if(!l)return;let t=(0,eO.y_)(e.result?.number);i(t,s),s=t},onError(e){n?.(e)}});c=t,l||c()}catch(e){n?.(e)}})(),c)}async function tl(e,{confirmations:t=1,hash:r,onReplaced:i,pollingInterval:n=e.pollingInterval,timeout:o}){let a,s,l;let c=(0,tn.P)(["waitForTransactionReceipt",e.uid,r]),u=!1;return new Promise((h,d)=>{o&&setTimeout(()=>d(new eG.mc({hash:r})),o);let f=tr(c,{onReplaced:i,resolve:h,reject:d},i=>{let o=(0,I.s)(e,ts)({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:n,async onBlockNumber(n){if(u)return;let c=n,h=e=>{o(),e(),f()};try{if(l){if(t>1&&(!l.blockNumber||c-l.blockNumber+1n<t))return;h(()=>i.resolve(l));return}if(a||(u=!0,await (0,ti.J)(async()=>{(a=await (0,I.s)(e,eZ)({hash:r})).blockNumber&&(c=a.blockNumber)},{delay:({count:e})=>200*~~(1<<e),retryCount:6}),u=!1),l=await (0,I.s)(e,eJ)({hash:r}),t>1&&(!l.blockNumber||c-l.blockNumber+1n<t))return;h(()=>i.resolve(l))}catch(r){if(a&&(r instanceof eG.Bh||r instanceof eG.Yb))try{s=a;let r=await (0,I.s)(e,ek.Q)({blockNumber:c,includeTransactions:!0}),n=r.transactions.find(({from:e,nonce:t})=>e===s.from&&t===s.nonce);if(!n||(l=await (0,I.s)(e,eJ)({hash:n.hash}),t>1&&(!l.blockNumber||c-l.blockNumber+1n<t)))return;let o="replaced";n.to===s.to&&n.value===s.value?o="repriced":n.from===n.to&&0n===n.value&&(o="cancelled"),h(()=>{i.onReplaced?.({reason:o,replacedTransaction:s,transaction:n,transactionReceipt:l}),i.resolve(l)})}catch(e){h(()=>i.reject(e))}else h(()=>i.reject(r))}}})})})}var tc=r(78723),tu=r(40044),th=r(73971);function td(e){return{call:t=>(0,M.R)(e,t),createBlockFilter:()=>es(e),createContractEventFilter:t=>eg(e,t),createEventFilter:t=>ew(e,t),createPendingTransactionFilter:()=>eb(e),estimateContractGas:t=>ev(e,t),estimateGas:t=>(0,ey.Q)(e,t),getBalance:t=>eE(e,t),getBlock:t=>(0,ek.Q)(e,t),getBlockNumber:t=>eP(e,t),getBlockTransactionCount:t=>eD(e,t),getBytecode:t=>eI(e,t),getChainId:()=>(0,eR.L)(e),getContractEvents:t=>eB(e,t),getEnsAddress:t=>U(e,t),getEnsAvatar:t=>ei(e,t),getEnsName:t=>en(e,t),getEnsResolver:t=>eo(e,t),getEnsText:t=>er(e,t),getFeeHistory:t=>eL(e,t),estimateFeesPerGas:t=>(0,ex.X)(e,t),getFilterChanges:t=>eF(e,t),getFilterLogs:t=>ez(e,t),getGasPrice:()=>(0,eW.o)(e),getLogs:t=>eU(e,t),getProof:t=>eH(e,t),estimateMaxPriorityFeePerGas:t=>(0,eC._)(e,t),getStorageAt:t=>eq(e,t),getTransaction:t=>eZ(e,t),getTransactionConfirmations:t=>eK(e,t),getTransactionCount:t=>(0,eQ.K)(e,t),getTransactionReceipt:t=>eJ(e,t),multicall:t=>e0(e,t),prepareTransactionRequest:t=>(0,tu.Z)(e,t),readContract:t=>j(e,t),sendRawTransaction:t=>(0,th.p)(e,t),simulateContract:t=>e1(e,t),verifyMessage:t=>e6(e,t),verifyTypedData:t=>e9(e,t),uninstallFilter:t=>e2(e,t),waitForTransactionReceipt:t=>tl(e,t),watchBlocks:t=>(function(e,{blockTag:t="latest",emitMissed:r=!1,emitOnBegin:i=!1,onBlock:n,onError:o,includeTransactions:a,poll:s,pollingInterval:l=e.pollingInterval}){let c,u,h;let d=void 0!==s?s:"webSocket"!==e.transport.type,f=a??!1;return d?(()=>{let a=(0,tn.P)(["watchBlocks",e.uid,r,i,f,l]);return tr(a,{onBlock:n,onError:o},n=>ta(async()=>{try{let i=await (0,I.s)(e,ek.Q)({blockTag:t,includeTransactions:f});if(i.number&&c?.number){if(i.number===c.number)return;if(i.number-c.number>1&&r)for(let t=c?.number+1n;t<i.number;t++){let r=await (0,I.s)(e,ek.Q)({blockNumber:t,includeTransactions:f});n.onBlock(r,c),c=r}}(!c?.number||"pending"===t&&!i?.number||i.number&&i.number>c.number)&&(n.onBlock(i,c),c=i)}catch(e){n.onError?.(e)}},{emitOnBegin:i,interval:l}))})():(u=!0,h=()=>u=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newHeads"],onData(t){if(!u)return;let r=e.chain?.formatters?.block?.format||tc.Z,i=r(t.result);n(i,c),c=i},onError(e){o?.(e)}});h=t,u||h()}catch(e){o?.(e)}})(),h)})(e,t),watchBlockNumber:t=>ts(e,t),watchContractEvent:t=>(function(e,{abi:t,address:r,args:i,batch:n=!0,eventName:o,onError:a,onLogs:s,poll:l,pollingInterval:c=e.pollingInterval,strict:u}){let h,d;let f=void 0!==l?l:"webSocket"!==e.transport.type;return f?(()=>{let l=(0,tn.P)(["watchContractEvent",r,i,n,e.uid,o,c]),h=u??!1;return tr(l,{onLogs:s,onError:a},a=>{let s,l;let u=!1,d=ta(async()=>{if(!u){try{l=await (0,I.s)(e,eg)({abi:t,address:r,args:i,eventName:o,strict:h})}catch{}u=!0;return}try{let o;if(l)o=await (0,I.s)(e,eF)({filter:l});else{let n=await (0,I.s)(e,eP)({});o=s&&s!==n?await (0,I.s)(e,eB)({abi:t,address:r,args:i,fromBlock:s+1n,toBlock:n,strict:h}):[],s=n}if(0===o.length)return;n?a.onLogs(o):o.forEach(e=>a.onLogs([e]))}catch(e){l&&e instanceof N.yR&&(u=!1),a.onError?.(e)}},{emitOnBegin:!0,interval:c});return async()=>{l&&await (0,I.s)(e,e2)({filter:l}),d()}})})():(h=!0,d=()=>h=!1,(async()=>{try{let n=o?ef({abi:t,eventName:o,args:i}):[],{unsubscribe:l}=await e.transport.subscribe({params:["logs",{address:r,topics:n}],onData(e){if(!h)return;let r=e.result;try{let{eventName:e,args:i}=eM({abi:t,data:r.data,topics:r.topics,strict:u}),n=ej(r,{args:i,eventName:e});s([n])}catch(n){let e,t;if(n instanceof R.SM||n instanceof R.Gy){if(u)return;e=n.abiItem.name,t=n.abiItem.inputs?.some(e=>!("name"in e&&e.name))}let i=ej(r,{args:t?[]:{},eventName:e});s([i])}},onError(e){a?.(e)}});d=l,h||d()}catch(e){a?.(e)}})(),d)})(e,t),watchEvent:t=>(function(e,{address:t,args:r,batch:i=!0,event:n,events:o,onError:a,onLogs:s,poll:l,pollingInterval:c=e.pollingInterval,strict:u}){let h,d;let f=void 0!==l?l:"webSocket"!==e.transport.type,p=u??!1;return f?(()=>{let l=(0,tn.P)(["watchEvent",t,r,i,e.uid,n,c]);return tr(l,{onLogs:s,onError:a},a=>{let s,l;let u=!1,h=ta(async()=>{if(!u){try{l=await (0,I.s)(e,ew)({address:t,args:r,event:n,events:o,strict:p})}catch{}u=!0;return}try{let c;if(l)c=await (0,I.s)(e,eF)({filter:l});else{let i=await (0,I.s)(e,eP)({});c=s&&s!==i?await (0,I.s)(e,eU)({address:t,args:r,event:n,events:o,fromBlock:s+1n,toBlock:i}):[],s=i}if(0===c.length)return;i?a.onLogs(c):c.forEach(e=>a.onLogs([e]))}catch(e){l&&e instanceof N.yR&&(u=!1),a.onError?.(e)}},{emitOnBegin:!0,interval:c});return async()=>{l&&await (0,I.s)(e,e2)({filter:l}),h()}})})():(h=!0,d=()=>h=!1,(async()=>{try{let i=o??(n?[n]:void 0),l=[];i&&(l=[i.flatMap(e=>ef({abi:[e],eventName:e.name,args:r}))],n&&(l=l[0]));let{unsubscribe:c}=await e.transport.subscribe({params:["logs",{address:t,topics:l}],onData(e){if(!h)return;let t=e.result;try{let{eventName:e,args:r}=eM({abi:i,data:t.data,topics:t.topics,strict:p}),n=ej(t,{args:r,eventName:e});s([n])}catch(n){let e,r;if(n instanceof R.SM||n instanceof R.Gy){if(u)return;e=n.abiItem.name,r=n.abiItem.inputs?.some(e=>!("name"in e&&e.name))}let i=ej(t,{args:r?[]:{},eventName:e});s([i])}},onError(e){a?.(e)}});d=c,h||d()}catch(e){a?.(e)}})(),d)})(e,t),watchPendingTransactions:t=>(function(e,{batch:t=!0,onError:r,onTransactions:i,poll:n,pollingInterval:o=e.pollingInterval}){let a,s;let l=void 0!==n?n:"webSocket"!==e.transport.type;return l?(()=>{let n=(0,tn.P)(["watchPendingTransactions",e.uid,t,o]);return tr(n,{onTransactions:i,onError:r},r=>{let i;let n=ta(async()=>{try{if(!i)try{i=await (0,I.s)(e,eb)({});return}catch(e){throw n(),e}let o=await (0,I.s)(e,eF)({filter:i});if(0===o.length)return;t?r.onTransactions(o):o.forEach(e=>r.onTransactions([e]))}catch(e){r.onError?.(e)}},{emitOnBegin:!0,interval:o});return async()=>{i&&await (0,I.s)(e,e2)({filter:i}),n()}})})():(a=!0,s=()=>a=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newPendingTransactions"],onData(e){if(!a)return;let t=e.result;i([t])},onError(e){r?.(e)}});s=t,a||s()}catch(e){r?.(e)}})(),s)})(e,t)}}function tf(e){let{key:t="public",name:r="Public Client"}=e,i=(0,p.e)({...e,key:t,name:r,type:"publicClient"});return i.extend(td)}var tp=r(35215),tg=r(68124);function tw(e,t={}){let{key:r="fallback",name:i="Fallback",rank:n=!1,retryCount:o,retryDelay:a}=t;return({chain:t,pollingInterval:s=4e3,timeout:l})=>{let c=e,u=()=>{},h=(0,tg.q)({key:r,name:i,async request({method:e,params:r}){let i=async(n=0)=>{let o=c[n]({chain:t,retryCount:0,timeout:l});try{let t=await o.request({method:e,params:r});return u({method:e,params:r,response:t,transport:o,status:"success"}),t}catch(t){if(u({error:t,method:e,params:r,transport:o,status:"error"}),(0,tp.y)(t)||n===c.length-1)throw t;return i(n+1)}};return i()},retryCount:o,retryDelay:a,type:"fallback"},{onResponse:e=>u=e,transports:c.map(e=>e({chain:t,retryCount:0}))});if(n){let e="object"==typeof n?n:{};!function({chain:e,interval:t=4e3,onTransports:r,sampleCount:i=10,timeout:n=1e3,transports:o,weights:a={}}){let{stability:s=.7,latency:l=.3}=a,c=[],u=async()=>{let a=await Promise.all(o.map(async t=>{let r,i;let o=t({chain:e,retryCount:0,timeout:n}),a=Date.now();try{await o.request({method:"net_listening"}),i=1}catch{i=0}finally{r=Date.now()}let s=r-a;return{latency:s,success:i}}));c.push(a),c.length>i&&c.shift();let h=Math.max(...c.map(e=>Math.max(...e.map(({latency:e})=>e)))),d=o.map((e,t)=>{let r=c.map(e=>e[t].latency),i=r.reduce((e,t)=>e+t,0)/r.length,n=c.map(e=>e[t].success),o=n.reduce((e,t)=>e+t,0)/n.length;return 0===o?[0,t]:[l*(1-i/h)+s*o,t]}).sort((e,t)=>t[0]-e[0]);r(d.map(([,e])=>o[e])),await (0,to.D)(t),u()};u()}({chain:t,interval:e.interval??s,onTransports:e=>c=e,sampleCount:e.sampleCount,timeout:e.timeout,transports:c,weights:e.weights})}return h}}var tb=r(20722);class tm extends C.G{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}var ty=r(33668);let tv=function(){if("undefined"!=typeof WebSocket)return WebSocket;if(void 0!==global.WebSocket)return global.WebSocket;if(void 0!==window.WebSocket)return window.WebSocket;if(void 0!==self.WebSocket)return self.WebSocket;throw Error("`WebSocket` is not supported in this environment")}();function tx(e,{errorInstance:t=Error("timed out"),timeout:r,signal:i}){return new Promise((n,o)=>{(async()=>{let a;try{let s=new AbortController;r>0&&(a=setTimeout(()=>{i?s.abort():o(t)},r)),n(await e({signal:s?.signal}))}catch(e){"AbortError"===e.name&&o(t),o(e)}finally{clearTimeout(a)}})()})}let tC=0;async function tE(e,{body:t,fetchOptions:r={},timeout:i=1e4}){let{headers:n,method:o,signal:a}=r;try{let s;let l=await tx(async({signal:s})=>{let l=await fetch(e,{...r,body:Array.isArray(t)?(0,tn.P)(t.map(e=>({jsonrpc:"2.0",id:e.id??tC++,...e}))):(0,tn.P)({jsonrpc:"2.0",id:t.id??tC++,...t}),headers:{...n,"Content-Type":"application/json"},method:o||"POST",signal:a||(i>0?s:void 0)});return l},{errorInstance:new tb.W5({body:t,url:e}),timeout:i,signal:!0});if(s=l.headers.get("Content-Type")?.startsWith("application/json")?await l.json():await l.text(),!l.ok)throw new tb.Gg({body:t,details:(0,tn.P)(s.error)||l.statusText,headers:l.headers,status:l.status,url:e});return s}catch(r){if(r instanceof tb.Gg||r instanceof tb.W5)throw r;throw new tb.Gg({body:t,details:r.message,url:e})}}let tk=new Map;async function tS(e){let t=tk.get(e);if(t)return t;let{schedule:r}=(0,ty.S)({id:e,fn:async()=>{let r=new tv(e),i=new Map,n=new Map,o=({data:e})=>{let t=JSON.parse(e),r="eth_subscription"===t.method,o=r?t.params.subscription:t.id,a=r?n:i,s=a.get(o);s&&s({data:e}),r||a.delete(o)},a=()=>{tk.delete(e),r.removeEventListener("close",a),r.removeEventListener("message",o)};return r.addEventListener("close",a),r.addEventListener("message",o),r.readyState===tv.CONNECTING&&await new Promise((e,t)=>{r&&(r.onopen=e,r.onerror=t)}),t=Object.assign(r,{requests:i,subscriptions:n}),tk.set(e,t),[t]}}),[i,[n]]=await r();return n}async function t_(e,{body:t,timeout:r=1e4}){return tx(()=>new Promise(r=>tA.webSocket(e,{body:t,onResponse:r})),{errorInstance:new tb.W5({body:t,url:e.url}),timeout:r})}let tA={http:tE,webSocket:function(e,{body:t,onResponse:r}){if(e.readyState===e.CLOSED||e.readyState===e.CLOSING)throw new tb.c9({body:t,url:e.url,details:"Socket is closed."});let i=tC++,n=({data:o})=>{let a=JSON.parse(o);("number"!=typeof a.id||i===a.id)&&(r?.(a),"eth_subscribe"===t.method&&"string"==typeof a.result&&e.subscriptions.set(a.result,n),"eth_unsubscribe"===t.method&&e.subscriptions.delete(t.params?.[0]))};return e.requests.set(i,n),e.send(JSON.stringify({jsonrpc:"2.0",...t,id:i})),e},webSocketAsync:t_};var t$=r(38026),tP=r(36238);let tO=e=>(t,r,i)=>{let n=i.subscribe;i.subscribe=(e,t,r)=>{let o=e;if(t){let n=(null==r?void 0:r.equalityFn)||Object.is,a=e(i.getState());o=r=>{let i=e(r);if(!n(a,i)){let e=a;t(a=i,e)}},(null==r?void 0:r.fireImmediately)&&t(a,a)}return n(o)};let o=e(t,r,i);return o},tD=e=>t=>{try{let r=e(t);if(r instanceof Promise)return r;return{then:e=>tD(e)(r),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>tD(t)(e)}}},tI=(e,t)=>(r,i,n)=>{let o,a,s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},l=!1,c=new Set,u=new Set;try{o=s.getStorage()}catch(e){}if(!o)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),r(...e)},i,n);let h=tD(s.serialize),d=()=>{let e;let t=s.partialize({...i()}),r=h({state:t,version:s.version}).then(e=>o.setItem(s.name,e)).catch(t=>{e=t});if(e)throw e;return r},f=n.setState;n.setState=(e,t)=>{f(e,t),d()};let p=e((...e)=>{r(...e),d()},i,n),g=()=>{var e;if(!o)return;l=!1,c.forEach(e=>e(i()));let t=(null==(e=s.onRehydrateStorage)?void 0:e.call(s,i()))||void 0;return tD(o.getItem.bind(o))(s.name).then(e=>{if(e)return s.deserialize(e)}).then(e=>{if(e){if("number"!=typeof e.version||e.version===s.version)return e.state;if(s.migrate)return s.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(a=s.merge(e,null!=(t=i())?t:p),!0),d()}).then(()=>{null==t||t(a,void 0),l=!0,u.forEach(e=>e(a))}).catch(e=>{null==t||t(void 0,e)})};return n.persist={setOptions:e=>{s={...s,...e},e.getStorage&&(o=e.getStorage())},clearStorage:()=>{null==o||o.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>g(),hasHydrated:()=>l,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(u.add(e),()=>{u.delete(e)})},g(),a||p},tR=(e,t)=>(r,i,n)=>{let o,a={storage:function(e,t){let r;try{r=e()}catch(e){return}return{getItem:e=>{var i;let n=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),o=null!=(i=r.getItem(e))?i:null;return o instanceof Promise?o.then(n):n(o)},setItem:(e,i)=>r.setItem(e,JSON.stringify(i,null==t?void 0:t.replacer)),removeItem:e=>r.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},s=!1,l=new Set,c=new Set,u=a.storage;if(!u)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),r(...e)},i,n);let h=()=>{let e=a.partialize({...i()});return u.setItem(a.name,{state:e,version:a.version})},d=n.setState;n.setState=(e,t)=>{d(e,t),h()};let f=e((...e)=>{r(...e),h()},i,n),p=()=>{var e,t;if(!u)return;s=!1,l.forEach(e=>{var t;return e(null!=(t=i())?t:f)});let n=(null==(t=a.onRehydrateStorage)?void 0:t.call(a,null!=(e=i())?e:f))||void 0;return tD(u.getItem.bind(u))(a.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===a.version)return e.state;if(a.migrate)return a.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(o=a.merge(e,null!=(t=i())?t:f),!0),h()}).then(()=>{null==n||n(o,void 0),o=i(),s=!0,c.forEach(e=>e(o))}).catch(e=>{null==n||n(void 0,e)})};return n.persist={setOptions:e=>{a={...a,...e},e.storage&&(u=e.storage)},clearStorage:()=>{null==u||u.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>p(),hasHydrated:()=>s,onHydrate:e=>(l.add(e),()=>{l.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},a.skipHydration||p(),o||f},tN=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),tI(e,t)):tR(e,t),tT=e=>{let t;let r=new Set,i=(e,i)=>{let n="function"==typeof e?e(t):e;if(!Object.is(n,t)){let e=t;t=(null!=i?i:"object"!=typeof n)?n:Object.assign({},t,n),r.forEach(r=>r(t,e))}},n=()=>t,o={setState:i,getState:n,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}};return t=e(i,n,o),o},tM=e=>e?tT(e):tT;var tj=r(16775);function tU(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[r,i]of e)if(!Object.is(i,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let r of e)if(!t.has(r))return!1;return!0}let r=Object.keys(e);if(r.length!==Object.keys(t).length)return!1;for(let i=0;i<r.length;i++)if(!Object.prototype.hasOwnProperty.call(t,r[i])||!Object.is(e[r[i]],t[r[i]]))return!1;return!0}var tB=r(39803);function tL(e,t,{batch:r={multicall:{wait:32}},pollingInterval:i=4e3,rank:n,retryCount:o,retryDelay:a,stallTimeout:s}={}){if(!e.length)throw Error("must have at least one chain");let l=[],c={},u={};for(let r of e){let e=!1;for(let i of t){let t=i(r);t&&(e=!0,l.some(({id:e})=>e===r.id)||(l=[...l,t.chain]),c[r.id]=[...c[r.id]||[],...t.rpcUrls.http],t.rpcUrls.webSocket&&(u[r.id]=[...u[r.id]||[],...t.rpcUrls.webSocket]))}if(!e)throw Error(`Could not find valid provider configuration for chain "${r.name}".

You may need to add \`jsonRpcProvider\` to \`configureChains\` with the chain's RPC URLs.
Read more: https://wagmi.sh/core/providers/jsonRpc`)}return{chains:l,publicClient:({chainId:t})=>{let u=l.find(e=>e.id===t)??e[0],h=c[u.id];if(!h||!h[0])throw Error(`No providers configured for chain "${u.id}"`);let d=tf({batch:r,chain:u,transport:tw(h.map(e=>(function(e,t={}){let{batch:r,fetchOptions:i,key:n="http",name:o="HTTP JSON-RPC",retryDelay:a}=t;return({chain:s,retryCount:l,timeout:c})=>{let{batchSize:u=1e3,wait:h=0}="object"==typeof r?r:{},d=t.retryCount??l,f=c??t.timeout??1e4,p=e||s?.rpcUrls.default.http[0];if(!p)throw new tm;return(0,tg.q)({key:n,name:o,async request({method:t,params:n}){let o={method:t,params:n},{schedule:a}=(0,ty.S)({id:`${e}`,wait:h,shouldSplitBatch:e=>e.length>u,fn:e=>tA.http(p,{body:e,fetchOptions:i,timeout:f}),sort:(e,t)=>e.id-t.id}),s=async e=>r?a(e):[await tA.http(p,{body:e,fetchOptions:i,timeout:f})],[{error:l,result:c}]=await s(o);if(l)throw new tb.bs({body:o,error:l,url:p});return c},retryCount:d,retryDelay:a,timeout:f,type:"http"},{fetchOptions:i,url:e})}})(e,{timeout:s})),{rank:n,retryCount:o,retryDelay:a}),pollingInterval:i});return Object.assign(d,{chains:l})},webSocketPublicClient:({chainId:t})=>{let c=l.find(e=>e.id===t)??e[0],h=u[c.id];if(!h||!h[0])return;let d=tf({batch:r,chain:c,transport:tw(h.map(e=>(function(e,t={}){let{key:r="webSocket",name:i="WebSocket JSON-RPC",retryDelay:n}=t;return({chain:o,retryCount:a,timeout:s})=>{let l=t.retryCount??a,c=s??t.timeout??1e4,u=e||o?.rpcUrls.default.webSocket?.[0];if(!u)throw new tm;return(0,tg.q)({key:r,name:i,async request({method:e,params:t}){let r={method:e,params:t},i=await tS(u),{error:n,result:o}=await tA.webSocketAsync(i,{body:r,timeout:c});if(n)throw new tb.bs({body:r,error:n,url:u});return o},retryCount:l,retryDelay:n,timeout:c,type:"webSocket"},{getSocket:()=>tS(u),async subscribe({params:e,onData:t,onError:r}){let i=await tS(u),{result:n}=await new Promise((n,o)=>tA.webSocket(i,{body:{method:"eth_subscribe",params:e},onResponse(e){if(e.error){o(e.error),r?.(e.error);return}if("number"==typeof e.id){n(e);return}"eth_subscription"===e.method&&t(e.params)}}));return{subscriptionId:n,unsubscribe:async()=>new Promise(e=>tA.webSocket(i,{body:{method:"eth_unsubscribe",params:[n]},onResponse:e}))}}})}})(e,{timeout:s})),{rank:n,retryCount:o,retryDelay:a}),pollingInterval:i});return Object.assign(d,{chains:l})}}}var tF=class extends Error{constructor({activeChain:e,targetChain:t}){super(`Chain mismatch: Expected "${t}", received "${e}".`),this.name="ChainMismatchError"}},tz=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured${t?` for connector "${t}"`:""}.`),this.name="ChainNotConfigured"}},tW=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},tH=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},tq=class extends Error{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}},tG=(e,{find:t,replace:r})=>e&&t(e)?r(e):"object"!=typeof e?e:Array.isArray(e)?e.map(e=>tG(e,{find:t,replace:r})):e instanceof Object?Object.entries(e).reduce((e,[i,n])=>({...e,[i]:tG(n,{find:t,replace:r})}),{}):e;function tV(e){let t=JSON.parse(e),r=tG(t,{find:e=>"string"==typeof e&&e.startsWith("#bigint."),replace:e=>BigInt(e.replace("#bigint.",""))});return r}function tZ(e){return{accessList:e.accessList,account:e.account,data:e.data,gas:e.gas,gasPrice:e.gasPrice,maxFeePerGas:e.maxFeePerGas,maxPriorityFeePerGas:e.maxPriorityFeePerGas,nonce:e.nonce,to:e.to,value:e.value}}function tK(e){return"number"==typeof e?e:"wei"===e?0:Math.abs(tP.Bd[e])}function tQ(e,t){return e.slice(0,t).join(".")||"."}function tX(e,t){let{length:r}=e;for(let i=0;i<r;++i)if(e[i]===t)return i+1;return 0}function tY(e,t,r,i){return JSON.stringify(e,function(e,t){let r="function"==typeof e,i="function"==typeof t,n=[],o=[];return function(a,s){if("object"==typeof s){if(n.length){let e=tX(n,this);0===e?n[n.length]=this:(n.splice(e),o.splice(e)),o[o.length]=a;let r=tX(n,s);if(0!==r)return i?t.call(this,a,s,tQ(o,r)):`[ref=${tQ(o,r)}]`}else n[0]=s,o[0]=a}return r?e.call(this,a,s):s}}((e,r)=>{let i="bigint"==typeof r?`#bigint.${r.toString()}`:r;return t?.(e,i)||i},i),r??void 0)}var tJ={getItem:e=>"",setItem:(e,t)=>null,removeItem:e=>null};function t0({deserialize:e=tV,key:t="wagmi",serialize:r=tY,storage:i}){return{...i,getItem:(r,n=null)=>{let o=i.getItem(`${t}.${r}`);try{return o?e(o):n}catch(e){return console.warn(e),n}},setItem:(e,n)=>{if(null===n)i.removeItem(`${t}.${e}`);else try{i.setItem(`${t}.${e}`,r(n))}catch(e){console.error(e)}},removeItem:e=>i.removeItem(`${t}.${e}`)}}var t1="store",t2=class{constructor({autoConnect:e=!1,connectors:t=[new l._],publicClient:r,storage:s=t0({storage:"undefined"!=typeof window?window.localStorage:tJ}),logger:c={warn:console.warn},webSocketPublicClient:u}){let p;h(this,o),this.publicClients=new Map,this.webSocketPublicClients=new Map,h(this,i,void 0),h(this,n,void 0),this.args={autoConnect:e,connectors:t,logger:c,publicClient:r,storage:s,webSocketPublicClient:u};let g="disconnected";if(e)try{let e=s.getItem(t1),t=e?.state?.data;g=t?.account?"reconnecting":"connecting",p=t?.chain?.id}catch(e){}let w="function"==typeof t?t():t;w.forEach(e=>e.setStorage(s)),this.store=tM(tO(tN(()=>({connectors:w,publicClient:this.getPublicClient({chainId:p}),status:g,webSocketPublicClient:this.getWebSocketPublicClient({chainId:p})}),{name:t1,storage:s,partialize:t=>({...e&&{data:{account:t?.data?.account,chain:t?.data?.chain}},chains:t?.chains}),version:2}))),this.storage=s,d(this,n,s?.getItem("wallet")),f(this,o,a).call(this),e&&"undefined"!=typeof window&&setTimeout(async()=>await this.autoConnect(),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){return this.data?.chain?.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(e){let t="function"==typeof e?e(this.store.getState()):e;this.store.setState(t,!0)}clearState(){this.setState(e=>({...e,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"}))}async destroy(){this.connector&&await this.connector.disconnect?.(),d(this,i,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(u(this,i))return;d(this,i,!0),this.setState(e=>({...e,status:e.data?.account?"reconnecting":"connecting"}));let e=u(this,n)?[...this.connectors].sort(e=>e.id===u(this,n)?-1:1):this.connectors,t=!1;for(let r of e){if(!r.ready||!r.isAuthorized)continue;let e=await r.isAuthorized();if(!e)continue;let i=await r.connect();this.setState(e=>({...e,connector:r,chains:r?.chains,data:i,status:"connected"})),t=!0;break}return t||this.setState(e=>({...e,data:void 0,status:"disconnected"})),d(this,i,!1),this.data}setConnectors(e){this.args={...this.args,connectors:e};let t="function"==typeof e?e():e;t.forEach(e=>e.setStorage(this.args.storage)),this.setState(e=>({...e,connectors:t}))}getPublicClient({chainId:e}={}){let t=this.publicClients.get(-1);if(t&&t?.chain.id===e||(t=this.publicClients.get(e??-1)))return t;let{publicClient:r}=this.args;return t="function"==typeof r?r({chainId:e}):r,this.publicClients.set(e??-1,t),t}setPublicClient(e){let t=this.data?.chain?.id;this.args={...this.args,publicClient:e},this.publicClients.clear(),this.setState(e=>({...e,publicClient:this.getPublicClient({chainId:t})}))}getWebSocketPublicClient({chainId:e}={}){let t=this.webSocketPublicClients.get(-1);if(t&&t?.chain.id===e||(t=this.webSocketPublicClients.get(e??-1)))return t;let{webSocketPublicClient:r}=this.args;return(t="function"==typeof r?r({chainId:e}):r)&&this.webSocketPublicClients.set(e??-1,t),t}setWebSocketPublicClient(e){let t=this.data?.chain?.id;this.args={...this.args,webSocketPublicClient:e},this.webSocketPublicClients.clear(),this.setState(e=>({...e,webSocketPublicClient:this.getWebSocketPublicClient({chainId:t})}))}setLastUsedConnector(e=null){this.storage?.setItem("wallet",e)}};function t5(e){let t=new t2(e);return s=t,t}function t3(){if(!s)throw Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return s}async function t6({chainId:e,connector:t}){let r=t3(),i=r.connector;if(i&&t.id===i.id)throw new tW;try{r.setState(e=>({...e,status:"connecting"}));let i=await t.connect({chainId:e});return r.setLastUsedConnector(t.id),r.setState(e=>({...e,connector:t,chains:t?.chains,data:i,status:"connected"})),r.storage.setItem("connected",!0),{...i,connector:t}}catch(e){throw r.setState(e=>({...e,status:e.connector?"connected":"disconnected"})),e}}async function t4(){let e=t3();e.connector&&await e.connector.disconnect(),e.clearState(),e.storage.removeItem("connected")}i=new WeakMap,n=new WeakMap,o=new WeakSet,a=function(){let e=e=>{this.setState(t=>({...t,data:{...t.data,...e}}))},t=()=>{this.clearState()},r=e=>{this.setState(t=>({...t,error:e}))};this.store.subscribe(({connector:e})=>e,(i,n)=>{n?.off?.("change",e),n?.off?.("disconnect",t),n?.off?.("error",r),i&&(i.on?.("change",e),i.on?.("disconnect",t),i.on?.("error",r))});let{publicClient:i,webSocketPublicClient:n}=this.args;("function"==typeof i||"function"==typeof n)&&this.store.subscribe(({data:e})=>e?.chain?.id,e=>{this.setState(t=>({...t,publicClient:this.getPublicClient({chainId:e}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:e})}))})};var t8=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],t9=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function t7({chainId:e}={}){let t=t3();return e&&t.getPublicClient({chainId:e})||t.publicClient}async function re({chainId:e}={}){let t=t3(),r=await t.connector?.getWalletClient?.({chainId:e})||null;return r}function rt({chainId:e}={}){let t=t3();return e&&t.getWebSocketPublicClient({chainId:e})||t.webSocketPublicClient}function rr(e,t){let r=t3(),i=async()=>t(t7(e)),n=r.subscribe(({publicClient:e})=>e,i);return n}function ri(e,t){let r=t3(),i=async()=>t(rt(e)),n=r.subscribe(({webSocketPublicClient:e})=>e,i);return n}async function rn({abi:e,address:t,args:r,chainId:i,dataSuffix:n,functionName:o,walletClient:a,...s}){let l=t7({chainId:i}),c=a??await re({chainId:i});if(!c)throw new t$.N;i&&ry({chainId:i});let{account:u,accessList:h,blockNumber:d,blockTag:f,gas:p,gasPrice:g,maxFeePerGas:w,maxPriorityFeePerGas:b,nonce:m,value:y}={accessList:s.accessList,account:s.account,blockNumber:s.blockNumber,blockTag:s.blockTag,data:s.data,gas:s.gas,gasPrice:s.gasPrice,maxFeePerGas:s.maxFeePerGas,maxPriorityFeePerGas:s.maxPriorityFeePerGas,nonce:s.nonce,to:s.to,value:s.value},{result:v,request:x}=await l.simulateContract({abi:e,address:t,functionName:o,args:r,account:u||c.account,accessList:h,blockNumber:d,blockTag:f,dataSuffix:n,gas:p,gasPrice:g,maxFeePerGas:w,maxPriorityFeePerGas:b,nonce:m,value:y}),C=e.filter(e=>"name"in e&&e.name===o);return{mode:"prepared",request:{...x,abi:C,chainId:i},result:v}}async function ro({chainId:e,contracts:t,blockNumber:r,blockTag:i,...n}){let o=t7({chainId:e});if(!o.chains)throw new tH;if(e&&o.chain.id!==e)throw new tz({chainId:e});return o.multicall({allowFailure:n.allowFailure??!0,blockNumber:r,blockTag:i,contracts:t})}async function ra({address:e,account:t,chainId:r,abi:i,args:n,functionName:o,blockNumber:a,blockTag:s}){let l=t7({chainId:r});return l.readContract({abi:i,address:e,account:t,functionName:o,args:n,blockNumber:a,blockTag:s})}async function rs({contracts:e,blockNumber:t,blockTag:r,...i}){let{allowFailure:n=!0}=i;try{let i=t7(),o=e.reduce((e,t,r)=>{let n=t.chainId??i.chain.id;return{...e,[n]:[...e[n]||[],{contract:t,index:r}]}},{}),a=(await Promise.all(Object.entries(o).map(([e,i])=>ro({allowFailure:n,chainId:parseInt(e),contracts:i.map(({contract:e})=>e),blockNumber:t,blockTag:r})))).flat(),s=Object.values(o).flatMap(e=>e.map(({index:e})=>e));return a.reduce((e,t,r)=>(e&&(e[s[r]]=t),e),[])}catch(o){if(o instanceof E.uq)throw o;let i=()=>e.map(e=>ra({...e,blockNumber:t,blockTag:r}));if(n)return(await Promise.allSettled(i())).map(e=>"fulfilled"===e.status?{result:e.value,status:"success"}:{error:e.reason,result:void 0,status:"failure"});return await Promise.all(i())}}async function rl(e){let t;let r=await re({chainId:e.chainId});if(!r)throw new t$.N;if(e.chainId&&ry({chainId:e.chainId}),"prepared"===e.mode)t=e.request;else{let{chainId:r,mode:i,...n}=e,o=await rn(n);t=o.request}let i=await r.writeContract({...t,chain:e.chainId?{id:e.chainId}:null});return{hash:i}}async function rc({address:e,chainId:t,formatUnits:r,token:i}){let n=t3(),o=t7({chainId:t});if(i){let n=async({abi:n})=>{let o={abi:n,address:i,chainId:t},[a,s,l]=await rs({allowFailure:!1,contracts:[{...o,functionName:"balanceOf",args:[e]},{...o,functionName:"decimals"},{...o,functionName:"symbol"}]});return{decimals:s,formatted:(0,tj.b)(a??"0",tK(r??s)),symbol:l,value:a}};try{return await n({abi:t8})}catch(e){if(e instanceof E.uq){let{symbol:e,...t}=await n({abi:t9});return{symbol:(0,eO.rR)((0,y.f)(e,{dir:"right"})),...t}}throw e}}let a=[...n.publicClient.chains||[],...n.chains??[]],s=await o.getBalance({address:e}),l=a.find(e=>e.id===o.chain.id);return{decimals:l?.nativeCurrency.decimals??18,formatted:(0,tj.b)(s??"0",tK(r??18)),symbol:l?.nativeCurrency.symbol??"ETH",value:s}}function ru(){let{data:e,connector:t,status:r}=t3();switch(r){case"connected":return{address:e?.account,connector:t,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:r};case"reconnecting":return{address:e?.account,connector:t,isConnected:!!e?.account,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:r};case"connecting":return{address:e?.account,connector:t,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:r};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:r}}}function rh(){let e=t3(),t=e.data?.chain?.id,r=e.chains??[],i=[...e.publicClient?.chains||[],...r].find(e=>e.id===t)??{id:t,name:`Chain ${t}`,network:`${t}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:t?{...i,...e.data?.chain,id:t}:void 0,chains:r}}async function rd({chainId:e}){let{connector:t}=t3();if(!t)throw new t$.N;if(!t.switchChain)throw new tq({connector:t});return t.switchChain(e)}function rf(e,{selector:t=e=>e}={}){let r=t3(),i=r.subscribe(({data:e,connector:r,status:i})=>t({address:e?.account,connector:r,status:i}),()=>e(ru()),{equalityFn:tU});return i}function rp(e,{selector:t=e=>e}={}){let r=t3(),i=r.subscribe(({data:e,chains:r})=>t({chainId:e?.chain?.id,chains:r}),()=>e(rh()),{equalityFn:tU});return i}async function rg({name:e,chainId:t}){let{normalize:i}=await r.e(45).then(r.bind(r,50045)),n=t7({chainId:t}),o=await n.getEnsAvatar({name:i(e)});return o}async function rw({address:e,chainId:t}){let r=t7({chainId:t});return r.getEnsName({address:(0,tB.K)(e)})}async function rb({chainId:e}={}){let t=t7({chainId:e}),r=await t.getBlockNumber();return r}async function rm({chainId:e,confirmations:t=1,hash:r,onReplaced:i,timeout:n=0}){let o=t7({chainId:e}),a=await o.waitForTransactionReceipt({hash:r,confirmations:t,onReplaced:i,timeout:n});if("reverted"===a.status){let e=await o.getTransaction({hash:a.transactionHash}),t=await o.call({...e,gasPrice:"eip1559"!==e.type?e.gasPrice:void 0,maxFeePerGas:"eip1559"===e.type?e.maxFeePerGas:void 0,maxPriorityFeePerGas:"eip1559"===e.type?e.maxPriorityFeePerGas:void 0}),r=(0,eO.rR)(`0x${t.substring(138)}`);throw Error(r)}return a}function ry({chainId:e}){let{chain:t,chains:r}=rh(),i=t?.id;if(i&&e!==i)throw new tF({activeChain:r.find(e=>e.id===i)?.name??`Chain ${i}`,targetChain:r.find(t=>t.id===e)?.name??`Chain ${e}`})}},73895:function(e,t,r){"use strict";r.d(t,{AccountController:function(){return l},ApiController:function(){return A},WM:function(){return g},fz:function(){return G},Lr:function(){return q},ConnectionController:function(){return U},ConnectorController:function(){return b},bq:function(){return o},j1:function(){return a},Xs:function(){return I},IN:function(){return M},NetworkController:function(){return x},OptionsController:function(){return E},Ie:function(){return y},RouterController:function(){return N},SnackController:function(){return L},MO:function(){return f},ThemeController:function(){return z}});var i=r(53722);function n(e,t,r,n){let o=e[t];return(0,i.Ld)(e,()=>{let i=e[t];Object.is(o,i)||r(o=i)},n)}Symbol();let o={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"]},a={isMobile:()=>"undefined"!=typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid(){let e=navigator.userAgent.toLowerCase();return a.isMobile()&&e.includes("android")},isIos(){let e=navigator.userAgent.toLowerCase();return a.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient:()=>"undefined"!=typeof window,isPairingExpired:e=>!e||e-Date.now()<=o.TEN_SEC_MS,isAllowedRetry:e=>Date.now()-e>=o.ONE_SEC_MS,copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry:()=>Date.now()+o.FOUR_MINUTES_MS,getPlainAddress:e=>e.split(":")[2],wait:async e=>new Promise(t=>{setTimeout(t,e)}),debounce(e,t=500){let r;return(...i)=>{r&&clearTimeout(r),r=setTimeout(function(){e(...i)},t)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t){if(a.isHttpUrl(e))return this.formatUniversalUrl(e,t);let r=e;r.includes("://")||(r=`${r=e.replaceAll("/","").replaceAll(":","")}://`),r.endsWith("/")||(r=`${r}/`);let i=encodeURIComponent(t);return{redirect:`${r}wc?uri=${i}`,href:r}},formatUniversalUrl(e,t){if(!a.isHttpUrl(e))return this.formatNativeUrl(e,t);let r=e;r.endsWith("/")||(r=`${r}/`);let i=encodeURIComponent(t);return{redirect:`${r}wc?uri=${i}`,href:r}},openHref(e,t){window.open(e,t,"noreferrer noopener")},async preloadImage(e){let t=new Promise((t,r)=>{let i=new Image;i.onload=t,i.onerror=r,i.crossOrigin="anonymous",i.src=e});return Promise.race([t,a.wait(2e3)])},formatBalance(e,t){let r;if("0"===e)r="0.000";else if("string"==typeof e){let t=Number(e);t&&(r=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return r?`${r} ${t}`:"0.000"},isRestrictedRegion(){try{let{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return o.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl:()=>a.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com",getBlockchainApiUrl:()=>a.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com",getAnalyticsUrl:()=>a.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com",getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},s=(0,i.sj)({isConnected:!1}),l={state:s,subscribe:e=>(0,i.Ld)(s,()=>e(s)),subscribeKey:(e,t)=>n(s,e,t),setIsConnected(e){s.isConnected=e},setCaipAddress(e){s.caipAddress=e,s.address=e?a.getPlainAddress(e):void 0},setBalance(e,t){s.balance=e,s.balanceSymbol=t},setProfileName(e){s.profileName=e},setProfileImage(e){s.profileImage=e},setAddressExplorerUrl(e){s.addressExplorerUrl=e},resetAccount(){s.isConnected=!1,s.caipAddress=void 0,s.address=void 0,s.balance=void 0,s.balanceSymbol=void 0,s.profileName=void 0,s.profileImage=void 0,s.addressExplorerUrl=void 0}};class c{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...t}){let r=this.createUrl(t),i=await fetch(r,{method:"GET",headers:e});return i.json()}async getBlob({headers:e,...t}){let r=this.createUrl(t),i=await fetch(r,{method:"GET",headers:e});return i.blob()}async post({body:e,headers:t,...r}){let i=this.createUrl(r),n=await fetch(i,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0});return n.json()}async put({body:e,headers:t,...r}){let i=this.createUrl(r),n=await fetch(i,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0});return n.json()}async delete({body:e,headers:t,...r}){let i=this.createUrl(r),n=await fetch(i,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0});return n.json()}createUrl({path:e,params:t}){let r=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([e,t])=>{t&&r.searchParams.append(e,t)}),r}}let u="WALLETCONNECT_DEEPLINK_CHOICE",h="@w3m/recent",d="@w3m/connected_wallet_image_url",f={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(u,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let e=localStorage.getItem(u);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(u)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{let t=f.getRecentWallets(),r=t.find(t=>t.id===e.id);r||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(h,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{let e=localStorage.getItem(h);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(e){try{localStorage.setItem(d,e)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(d)}catch{console.info("Unable to set Connected Wallet Image Url")}}},p=(0,i.sj)({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),g={state:p,subscribeNetworkImages:e=>(0,i.Ld)(p.networkImages,()=>e(p.networkImages)),subscribeKey:(e,t)=>n(p,e,t),setWalletImage(e,t){p.walletImages[e]=t},setNetworkImage(e,t){p.networkImages[e]=t},setConnectorImage(e,t){p.connectorImages[e]=t},setTokenImage(e,t){p.tokenImages[e]=t}},w=(0,i.sj)({connectors:[]}),b={state:w,subscribeKey:(e,t)=>n(w,e,t),setConnectors(e){w.connectors=e.map(e=>(0,i.iH)(e))},addConnector(e){w.connectors.push((0,i.iH)(e))},getConnectors:()=>w.connectors},m=(0,i.sj)({open:!1,selectedNetworkId:void 0}),y={state:m,subscribe:e=>(0,i.Ld)(m,()=>e(m)),set(e){Object.assign(m,{...m,...e})}},v=(0,i.sj)({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),x={state:v,subscribeKey:(e,t)=>n(v,e,t),_getClient(){if(!v._client)throw Error("NetworkController client not set");return v._client},setClient(e){v._client=(0,i.iH)(e)},setCaipNetwork(e){v.caipNetwork=e,y.set({selectedNetworkId:e?.id})},setDefaultCaipNetwork(e){v.caipNetwork=e,y.set({selectedNetworkId:e?.id}),v.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){v.requestedCaipNetworks=e},async getApprovedCaipNetworksData(){let e=await this._getClient().getApprovedCaipNetworksData();v.supportsAllNetworks=e.supportsAllNetworks,v.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),v.caipNetwork=e},resetNetwork(){v.isDefaultCaipNetwork||(v.caipNetwork=void 0),v.approvedCaipNetworkIds=void 0,v.supportsAllNetworks=!0}},C=(0,i.sj)({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),E={state:C,subscribeKey:(e,t)=>n(C,e,t),setProjectId(e){C.projectId=e},setIncludeWalletIds(e){C.includeWalletIds=e},setExcludeWalletIds(e){C.excludeWalletIds=e},setFeaturedWalletIds(e){C.featuredWalletIds=e},setTokens(e){C.tokens=e},setTermsConditionsUrl(e){C.termsConditionsUrl=e},setPrivacyPolicyUrl(e){C.privacyPolicyUrl=e},setCustomWallets(e){C.customWallets=e},setEnableAnalytics(e){C.enableAnalytics=e},setSdkVersion(e){C.sdkVersion=e},setMetadata(e){C.metadata=e}},k=a.getApiUrl(),S=new c({baseUrl:k}),_=(0,i.sj)({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),A={state:_,subscribeKey:(e,t)=>n(_,e,t),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:r}=E.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _fetchWalletImage(e){let t=`${S.baseUrl}/getWalletImage/${e}`,r=await S.getBlob({path:t,headers:A._getApiHeaders()});g.setWalletImage(e,URL.createObjectURL(r))},async _fetchNetworkImage(e){let t=`${S.baseUrl}/public/getAssetImage/${e}`,r=await S.getBlob({path:t,headers:A._getApiHeaders()});g.setNetworkImage(e,URL.createObjectURL(r))},async _fetchConnectorImage(e){let t=`${S.baseUrl}/public/getAssetImage/${e}`,r=await S.getBlob({path:t,headers:A._getApiHeaders()});g.setConnectorImage(e,URL.createObjectURL(r))},async fetchNetworkImages(){let{requestedCaipNetworks:e}=x.state,t=e?.map(({imageId:e})=>e).filter(Boolean);t&&await Promise.allSettled(t.map(e=>A._fetchNetworkImage(e)))},async fetchConnectorImages(){let{connectors:e}=b.state,t=e.map(({imageId:e})=>e).filter(Boolean);await Promise.allSettled(t.map(e=>A._fetchConnectorImage(e)))},async fetchFeaturedWallets(){let{featuredWalletIds:e}=E.state;if(e?.length){let{data:t}=await S.get({path:"/getWallets",headers:A._getApiHeaders(),params:{page:"1",entries:e?.length?String(e.length):"4",include:e?.join(",")}});t.sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id));let r=t.map(e=>e.image_id).filter(Boolean);await Promise.allSettled(r.map(e=>A._fetchWalletImage(e))),_.featured=t}},async fetchRecommendedWallets(){let{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=E.state,i=[...t??[],...r??[]].filter(Boolean),{data:n,count:o}=await S.get({path:"/getWallets",headers:A._getApiHeaders(),params:{page:"1",entries:"4",include:e?.join(","),exclude:i?.join(",")}}),a=f.getRecentWallets(),s=n.map(e=>e.image_id).filter(Boolean),l=a.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...s,...l].map(e=>A._fetchWalletImage(e))),_.recommended=n,_.count=o??0},async fetchWallets({page:e}){let{includeWalletIds:t,excludeWalletIds:r,featuredWalletIds:i}=E.state,n=[..._.recommended.map(({id:e})=>e),...r??[],...i??[]].filter(Boolean),{data:o,count:s}=await S.get({path:"/getWallets",headers:A._getApiHeaders(),params:{page:String(e),entries:"40",include:t?.join(","),exclude:n.join(",")}}),l=o.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...l.map(e=>A._fetchWalletImage(e)),a.wait(300)]),_.wallets=[..._.wallets,...o],_.count=s>_.count?s:_.count,_.page=e},async searchWallet({search:e}){let{includeWalletIds:t,excludeWalletIds:r}=E.state;_.search=[];let{data:i}=await S.get({path:"/getWallets",headers:A._getApiHeaders(),params:{page:"1",entries:"100",search:e,include:t?.join(","),exclude:r?.join(",")}}),n=i.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...n.map(e=>A._fetchWalletImage(e)),a.wait(300)]),_.search=i},prefetch(){_.prefetchPromise=Promise.race([Promise.allSettled([A.fetchFeaturedWallets(),A.fetchRecommendedWallets(),A.fetchNetworkImages(),A.fetchConnectorImages()]),a.wait(3e3)])}},$=a.getAnalyticsUrl(),P=new c({baseUrl:$}),O=["MODAL_CREATED"],D=(0,i.sj)({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),I={state:D,subscribe:e=>(0,i.Ld)(D,()=>e(D)),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:r}=E.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _sendAnalyticsEvent(e){try{if(O.includes(e.data.event)||"undefined"==typeof window)return;await P.post({path:"/e",headers:I._getApiHeaders(),body:{eventId:a.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){D.timestamp=Date.now(),D.data=e,E.state.enableAnalytics&&I._sendAnalyticsEvent(D)}},R=(0,i.sj)({view:"Connect",history:["Connect"]}),N={state:R,subscribeKey:(e,t)=>n(R,e,t),push(e,t){e!==R.view&&(R.view=e,R.history.push(e),R.data=t)},reset(e){R.view=e,R.history=[e]},replace(e){R.history.length>1&&R.history.at(-1)!==e&&(R.view=e,R.history[R.history.length-1]=e)},goBack(){if(R.history.length>1){R.history.pop();let[e]=R.history.slice(-1);e&&(R.view=e)}}},T=(0,i.sj)({open:!1}),M={state:T,subscribeKey:(e,t)=>n(T,e,t),async open(e){await A.state.prefetchPromise,e?.view?N.reset(e.view):l.state.isConnected?N.reset("Account"):N.reset("Connect"),T.open=!0,y.set({open:!0}),I.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){T.open=!1,y.set({open:!1}),I.sendEvent({type:"track",event:"MODAL_CLOSE"})}},j=(0,i.sj)({wcError:!1,buffering:!1}),U={state:j,subscribeKey:(e,t)=>n(j,e,t),_getClient(){if(!j._client)throw Error("ConnectionController client not set");return j._client},setClient(e){j._client=(0,i.iH)(e)},connectWalletConnect(){j.wcPromise=this._getClient().connectWalletConnect(e=>{j.wcUri=e,j.wcPairingExpiry=a.getPairingExpiry()})},async connectExternal(e){await this._getClient().connectExternal?.(e)},checkInstalled(e){return this._getClient().checkInstalled?.(e)},resetWcConnection(){j.wcUri=void 0,j.wcPairingExpiry=void 0,j.wcPromise=void 0,j.wcLinking=void 0,j.recentWallet=void 0,f.deleteWalletConnectDeepLink()},setWcLinking(e){j.wcLinking=e},setWcError(e){j.wcError=e,j.buffering=!1},setRecentWallet(e){j.recentWallet=e},setBuffering(e){j.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},B=(0,i.sj)({message:"",variant:"success",open:!1}),L={state:B,subscribeKey:(e,t)=>n(B,e,t),showSuccess(e){B.message=e,B.variant="success",B.open=!0},showError(e){B.message=e,B.variant="error",B.open=!0},hide(){B.open=!1}},F=(0,i.sj)({themeMode:"dark",themeVariables:{}}),z={state:F,subscribe:e=>(0,i.Ld)(F,()=>e(F)),setThemeMode(e){F.themeMode=e},setThemeVariables(e){F.themeVariables={...F.themeVariables,...e}}},W=a.getBlockchainApiUrl(),H=new c({baseUrl:W}),q={fetchIdentity:({caipChainId:e,address:t})=>H.get({path:`/v1/identity/${t}`,params:{chainId:e,projectId:E.state.projectId}})},G={getWalletImage:e=>e?.image_url?e?.image_url:e?.image_id?g.state.walletImages[e.image_id]:void 0,getNetworkImage:e=>e?.imageUrl?e?.imageUrl:e?.imageId?g.state.networkImages[e.imageId]:void 0,getConnectorImage:e=>e?.imageUrl?e.imageUrl:e?.imageId?g.state.connectorImages[e.imageId]:void 0}},9448:function(e,t,r){"use strict";r.r(t),r.d(t,{W3mModal:function(){return u}});var i=r(73895),n=r(66265),o=r(69307),a=r(92468),s=o.iv`
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
`,l=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let c="scroll-lock",u=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=i.IN.state.open,this.initializeTheming(),i.ApiController.prefetch(),this.unsubscribe.push(i.IN.subscribeKey("open",e=>e?this.onOpen():this.onClose())),i.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?o.dy`
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
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${c}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)i.IN.close();else if("Tab"===t.key){let{tagName:r}=t.target;!r||r.includes("W3M-")||r.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}};u.styles=s,l([(0,a.SB)()],u.prototype,"open",void 0),u=l([(0,n.customElement)("w3m-modal")],u)},85055:function(e,t,r){"use strict";r.d(t,{fl:function(){return _},iv:function(){return c},Ts:function(){return E},Qu:function(){return k}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i=globalThis,n=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;class s{constructor(e,t,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(n&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&a.set(t,e))}return e}toString(){return this.cssText}}let l=e=>new s("string"==typeof e?e:e+"",void 0,o),c=(e,...t)=>{let r=1===e.length?e[0]:t.reduce((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]);return new s(r,e,o)},u=(e,t)=>{if(n)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),n=i.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=r.cssText,e.appendChild(t)}},h=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return l(t)})(e):e,{is:d,defineProperty:f,getOwnPropertyDescriptor:p,getOwnPropertyNames:g,getOwnPropertySymbols:w,getPrototypeOf:b}=Object,m=globalThis,y=m.trustedTypes,v=y?y.emptyScript:"",x=m.reactiveElementPolyfillSupport,C=(e,t)=>e,E={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},k=(e,t)=>!d(e,t),S={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:k};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class _ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=S){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,t);void 0!==i&&f(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){let{get:i,set:n}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){let o=i?.call(this);n.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??S}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;let e=b(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){let e=this.properties,t=[...g(e),...w(e)];for(let r of t)this.createProperty(r,e[r])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let e of r)t.unshift(h(e))}else void 0!==e&&t.push(h(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){let n=(void 0!==r.converter?.toAttribute?r.converter:E).toAttribute(t,r.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){let r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){let e=r.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:E;this._$Em=i,this[i]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r,i=!1,n){if(void 0!==e){if(!((r??=this.constructor.getPropertyOptions(e)).hasChanged??k)(i?n:this[e],t))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],r)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$ES?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(e){}firstUpdated(e){}}_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[C("elementProperties")]=new Map,_[C("finalized")]=new Map,x?.({ReactiveElement:_}),(m.reactiveElementVersions??=[]).push("2.0.1")},57173:function(e,t,r){"use strict";r.d(t,{Jb:function(){return S},Ld:function(){return _},dy:function(){return k},sY:function(){return F}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i=globalThis,n=i.trustedTypes,o=n?n.createPolicy("lit-html",{createHTML:e=>e}):void 0,a="$lit$",s=`lit$${(Math.random()+"").slice(9)}$`,l="?"+s,c=`<${l}>`,u=document,h=()=>u.createComment(""),d=e=>null===e||"object"!=typeof e&&"function"!=typeof e,f=Array.isArray,p=e=>f(e)||"function"==typeof e?.[Symbol.iterator],g="[ 	\n\f\r]",w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,b=/-->/g,m=/>/g,y=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),v=/'/g,x=/"/g,C=/^(?:script|style|textarea|title)$/i,E=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),k=E(1),S=(E(2),Symbol.for("lit-noChange")),_=Symbol.for("lit-nothing"),A=new WeakMap,$=u.createTreeWalker(u,129);function P(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==o?o.createHTML(t):t}let O=(e,t)=>{let r=e.length-1,i=[],n,o=2===t?"<svg>":"",l=w;for(let t=0;t<r;t++){let r=e[t],u,h,d=-1,f=0;for(;f<r.length&&(l.lastIndex=f,null!==(h=l.exec(r)));)f=l.lastIndex,l===w?"!--"===h[1]?l=b:void 0!==h[1]?l=m:void 0!==h[2]?(C.test(h[2])&&(n=RegExp("</"+h[2],"g")),l=y):void 0!==h[3]&&(l=y):l===y?">"===h[0]?(l=n??w,d=-1):void 0===h[1]?d=-2:(d=l.lastIndex-h[2].length,u=h[1],l=void 0===h[3]?y:'"'===h[3]?x:v):l===x||l===v?l=y:l===b||l===m?l=w:(l=y,n=void 0);let p=l===y&&e[t+1].startsWith("/>")?" ":"";o+=l===w?r+c:d>=0?(i.push(u),r.slice(0,d)+a+r.slice(d)+s+p):r+s+(-2===d?t:p)}return[P(e,o+(e[r]||"<?>")+(2===t?"</svg>":"")),i]};class D{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let o=0,c=0,u=e.length-1,d=this.parts,[f,p]=O(e,t);if(this.el=D.createElement(f,r),$.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=$.nextNode())&&d.length<u;){if(1===i.nodeType){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(a)){let t=p[c++],r=i.getAttribute(e).split(s),n=/([.?@])?(.*)/.exec(t);d.push({type:1,index:o,name:n[2],strings:r,ctor:"."===n[1]?M:"?"===n[1]?j:"@"===n[1]?U:T}),i.removeAttribute(e)}else e.startsWith(s)&&(d.push({type:6,index:o}),i.removeAttribute(e));if(C.test(i.tagName)){let e=i.textContent.split(s),t=e.length-1;if(t>0){i.textContent=n?n.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],h()),$.nextNode(),d.push({type:2,index:++o});i.append(e[t],h())}}}else if(8===i.nodeType){if(i.data===l)d.push({type:2,index:o});else{let e=-1;for(;-1!==(e=i.data.indexOf(s,e+1));)d.push({type:7,index:o}),e+=s.length-1}}o++}}static createElement(e,t){let r=u.createElement("template");return r.innerHTML=e,r}}function I(e,t,r=e,i){if(t===S)return t;let n=void 0!==i?r._$Co?.[i]:r._$Cl,o=d(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(e))._$AT(e,r,i),void 0!==i?(r._$Co??=[])[i]=n:r._$Cl=n),void 0!==n&&(t=I(e,n._$AS(e,t.values),n,i)),t}class R{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??u).importNode(t,!0);$.currentNode=i;let n=$.nextNode(),o=0,a=0,s=r[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new N(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new B(n,this,e)),this._$AV.push(t),s=r[++a]}o!==s?.index&&(n=$.nextNode(),o++)}return $.currentNode=u,i}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class N{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){d(e=I(this,e,t))?e===_||null==e||""===e?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==S&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):p(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==_&&d(this._$AH)?this._$AA.nextSibling.data=e:this.$(u.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=D.createElement(P(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new R(i,this),r=e.u(this.options);e.p(t),this.$(r),this._$AH=e}}_$AC(e){let t=A.get(e.strings);return void 0===t&&A.set(e.strings,t=new D(e)),t}T(e){f(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let n of e)i===t.length?t.push(r=new N(this.k(h()),this.k(h()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class T{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,n){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=_}_$AI(e,t=this,r,i){let n=this.strings,o=!1;if(void 0===n)(o=!d(e=I(this,e,t,0))||e!==this._$AH&&e!==S)&&(this._$AH=e);else{let i,a;let s=e;for(e=n[0],i=0;i<n.length-1;i++)(a=I(this,s[r+i],t,i))===S&&(a=this._$AH[i]),o||=!d(a)||a!==this._$AH[i],a===_?e=_:e!==_&&(e+=(a??"")+n[i+1]),this._$AH[i]=a}o&&!i&&this.O(e)}O(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class M extends T{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===_?void 0:e}}class j extends T{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}}class U extends T{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){if((e=I(this,e,t,0)??_)===S)return;let r=this._$AH,i=e===_&&r!==_||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==_&&(r===_||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class B{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}}let L=i.litHtmlPolyfillSupport;L?.(D,N),(i.litHtmlVersions??=[]).push("3.0.2");let F=(e,t,r)=>{let i=r?.renderBefore??t,n=i._$litPart$;if(void 0===n){let e=r?.renderBefore??null;i._$litPart$=n=new N(t.insertBefore(h(),e),e,void 0,r??{})}return n._$AI(e),n}},92468:function(e,t,r){"use strict";r.d(t,{Cb:function(){return a},SB:function(){return s}});var i=r(85055);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n={attribute:!0,type:String,converter:i.Ts,reflect:!1,hasChanged:i.Qu},o=(e=n,t,r)=>{let{kind:i,metadata:o}=r,a=globalThis.litPropertyMetadata.get(o);if(void 0===a&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(r.name,e),"accessor"===i){let{name:i}=r;return{set(r){let n=t.get.call(this);t.set.call(this,r),this.requestUpdate(i,n,e)},init(t){return void 0!==t&&this.C(i,void 0,e),t}}}if("setter"===i){let{name:i}=r;return function(r){let n=this[i];t.call(this,r),this.requestUpdate(i,n,e)}}throw Error("Unsupported decorator location: "+i)};function a(e){return(t,r)=>"object"==typeof r?o(e,t,r):((e,t,r)=>{let i=t.hasOwnProperty(r);return t.constructor.createProperty(r,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function s(e){return a({...e,state:!0,attribute:!1})}},69307:function(e,t,r){"use strict";r.d(t,{oi:function(){return o},iv:function(){return i.iv},dy:function(){return n.dy}});var i=r(85055),n=r(57173);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class o extends i.fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=(0,n.sY)(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return n.Jb}}o._$litElement$=!0,o.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:o});let a=globalThis.litElementPolyfillSupport;a?.({LitElement:o}),(globalThis.litElementVersions??=[]).push("4.0.1")},66265:function(e,t,r){"use strict";let i,n,o;r.r(t),r.d(t,{UiHelperUtil:function(){return t8},WuiAccountButton:function(){return rc},WuiAllWalletsImage:function(){return rg},WuiAvatar:function(){return ri},WuiButton:function(){return rm},WuiCard:function(){return eA},WuiCardSelect:function(){return rP},WuiCardSelectLoader:function(){return rC},WuiChip:function(){return rI},WuiConnectButton:function(){return rT},WuiCtaButton:function(){return rU},WuiEmailInput:function(){return r5},WuiFlex:function(){return re},WuiGrid:function(){return i8},WuiIcon:function(){return tC},WuiIconBox:function(){return ra},WuiIconLink:function(){return r4},WuiImage:function(){return tS},WuiInputElement:function(){return r7},WuiInputNumeric:function(){return ir},WuiInputText:function(){return r0},WuiLink:function(){return ia},WuiListItem:function(){return ic},WuiListTransaction:function(){return iv},WuiListWallet:function(){return i_},WuiLoadingHexagon:function(){return tA},WuiLoadingSpinner:function(){return tO},WuiLoadingThumbnail:function(){return tR},WuiLogo:function(){return iP},WuiLogoSelect:function(){return iI},WuiNetworkButton:function(){return iT},WuiNetworkImage:function(){return r_},WuiOtp:function(){return iU},WuiQrCode:function(){return iH},WuiSearchBar:function(){return iG},WuiSeparator:function(){return ne},WuiShimmer:function(){return tM},WuiSnackbar:function(){return iK},WuiTabs:function(){return iY},WuiTag:function(){return iE},WuiText:function(){return tz},WuiTooltip:function(){return i1},WuiTransactionVisual:function(){return ib},WuiVisual:function(){return t6},WuiVisualThumbnail:function(){return i3},WuiWalletImage:function(){return rd},customElement:function(){return eS},initializeTheming:function(){return em},setColorTheme:function(){return ey},setThemeVariables:function(){return ev}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let a=globalThis,s=a.ShadowRoot&&(void 0===a.ShadyCSS||a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),c=new WeakMap;class u{constructor(e,t,r){if(this._$cssResult$=!0,r!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(s&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=c.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&c.set(t,e))}return e}toString(){return this.cssText}}let h=e=>new u("string"==typeof e?e:e+"",void 0,l),d=(e,...t)=>{let r=1===e.length?e[0]:t.reduce((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]);return new u(r,e,l)},f=(e,t)=>{if(s)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),i=a.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=r.cssText,e.appendChild(t)}},p=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return h(t)})(e):e,{is:g,defineProperty:w,getOwnPropertyDescriptor:b,getOwnPropertyNames:m,getOwnPropertySymbols:y,getPrototypeOf:v}=Object,x=globalThis,C=x.trustedTypes,E=C?C.emptyScript:"",k=x.reactiveElementPolyfillSupport,S=(e,t)=>e,_={toAttribute(e,t){switch(t){case Boolean:e=e?E:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},A=(e,t)=>!g(e,t),$={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:A};Symbol.metadata??=Symbol("metadata"),x.litPropertyMetadata??=new WeakMap;class P extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,t);void 0!==i&&w(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){let{get:i,set:n}=b(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){let o=i?.call(this);n.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;let e=v(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){let e=this.properties,t=[...m(e),...y(e)];for(let r of t)this.createProperty(r,e[r])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let e of r)t.unshift(p(e))}else void 0!==e&&t.push(p(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return f(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){let n=(void 0!==r.converter?.toAttribute?r.converter:_).toAttribute(t,r.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){let r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){let e=r.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:_;this._$Em=i,this[i]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r,i=!1,n){if(void 0!==e){if(!((r??=this.constructor.getPropertyOptions(e)).hasChanged??A)(i?n:this[e],t))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],r)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$ES?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(e){}firstUpdated(e){}}P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[S("elementProperties")]=new Map,P[S("finalized")]=new Map,k?.({ReactiveElement:P}),(x.reactiveElementVersions??=[]).push("2.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let O=globalThis,D=O.trustedTypes,I=D?D.createPolicy("lit-html",{createHTML:e=>e}):void 0,R="$lit$",N=`lit$${(Math.random()+"").slice(9)}$`,T="?"+N,M=`<${T}>`,j=document,U=()=>j.createComment(""),B=e=>null===e||"object"!=typeof e&&"function"!=typeof e,L=Array.isArray,F=e=>L(e)||"function"==typeof e?.[Symbol.iterator],z="[ 	\n\f\r]",W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,q=/>/g,G=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,Z=/"/g,K=/^(?:script|style|textarea|title)$/i,Q=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),X=Q(1),Y=Q(2),J=Symbol.for("lit-noChange"),ee=Symbol.for("lit-nothing"),et=new WeakMap,er=j.createTreeWalker(j,129);function ei(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==I?I.createHTML(t):t}let en=(e,t)=>{let r=e.length-1,i=[],n,o=2===t?"<svg>":"",a=W;for(let t=0;t<r;t++){let r=e[t],s,l,c=-1,u=0;for(;u<r.length&&(a.lastIndex=u,null!==(l=a.exec(r)));)u=a.lastIndex,a===W?"!--"===l[1]?a=H:void 0!==l[1]?a=q:void 0!==l[2]?(K.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=G):void 0!==l[3]&&(a=G):a===G?">"===l[0]?(a=n??W,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?G:'"'===l[3]?Z:V):a===Z||a===V?a=G:a===H||a===q?a=W:(a=G,n=void 0);let h=a===G&&e[t+1].startsWith("/>")?" ":"";o+=a===W?r+M:c>=0?(i.push(s),r.slice(0,c)+R+r.slice(c)+N+h):r+N+(-2===c?t:h)}return[ei(e,o+(e[r]||"<?>")+(2===t?"</svg>":"")),i]};class eo{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let n=0,o=0,a=e.length-1,s=this.parts,[l,c]=en(e,t);if(this.el=eo.createElement(l,r),er.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=er.nextNode())&&s.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(R)){let t=c[o++],r=i.getAttribute(e).split(N),a=/([.?@])?(.*)/.exec(t);s.push({type:1,index:n,name:a[2],strings:r,ctor:"."===a[1]?eu:"?"===a[1]?eh:"@"===a[1]?ed:ec}),i.removeAttribute(e)}else e.startsWith(N)&&(s.push({type:6,index:n}),i.removeAttribute(e));if(K.test(i.tagName)){let e=i.textContent.split(N),t=e.length-1;if(t>0){i.textContent=D?D.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],U()),er.nextNode(),s.push({type:2,index:++n});i.append(e[t],U())}}}else if(8===i.nodeType){if(i.data===T)s.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(N,e+1));)s.push({type:7,index:n}),e+=N.length-1}}n++}}static createElement(e,t){let r=j.createElement("template");return r.innerHTML=e,r}}function ea(e,t,r=e,i){if(t===J)return t;let n=void 0!==i?r._$Co?.[i]:r._$Cl,o=B(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(e))._$AT(e,r,i),void 0!==i?(r._$Co??=[])[i]=n:r._$Cl=n),void 0!==n&&(t=ea(e,n._$AS(e,t.values),n,i)),t}class es{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??j).importNode(t,!0);er.currentNode=i;let n=er.nextNode(),o=0,a=0,s=r[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new el(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new ef(n,this,e)),this._$AV.push(t),s=r[++a]}o!==s?.index&&(n=er.nextNode(),o++)}return er.currentNode=j,i}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class el{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=ee,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){B(e=ea(this,e,t))?e===ee||null==e||""===e?(this._$AH!==ee&&this._$AR(),this._$AH=ee):e!==this._$AH&&e!==J&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):F(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==ee&&B(this._$AH)?this._$AA.nextSibling.data=e:this.$(j.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=eo.createElement(ei(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new es(i,this),r=e.u(this.options);e.p(t),this.$(r),this._$AH=e}}_$AC(e){let t=et.get(e.strings);return void 0===t&&et.set(e.strings,t=new eo(e)),t}T(e){L(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let n of e)i===t.length?t.push(r=new el(this.k(U()),this.k(U()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ec{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,n){this.type=1,this._$AH=ee,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ee}_$AI(e,t=this,r,i){let n=this.strings,o=!1;if(void 0===n)(o=!B(e=ea(this,e,t,0))||e!==this._$AH&&e!==J)&&(this._$AH=e);else{let i,a;let s=e;for(e=n[0],i=0;i<n.length-1;i++)(a=ea(this,s[r+i],t,i))===J&&(a=this._$AH[i]),o||=!B(a)||a!==this._$AH[i],a===ee?e=ee:e!==ee&&(e+=(a??"")+n[i+1]),this._$AH[i]=a}o&&!i&&this.O(e)}O(e){e===ee?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class eu extends ec{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===ee?void 0:e}}class eh extends ec{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==ee)}}class ed extends ec{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){if((e=ea(this,e,t,0)??ee)===J)return;let r=this._$AH,i=e===ee&&r!==ee||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==ee&&(r===ee||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ef{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ea(this,e)}}let ep=O.litHtmlPolyfillSupport;ep?.(eo,el),(O.litHtmlVersions??=[]).push("3.0.2");let eg=(e,t,r)=>{let i=r?.renderBefore??t,n=i._$litPart$;if(void 0===n){let e=r?.renderBefore??null;i._$litPart$=n=new el(t.insertBefore(U(),e),e,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ew extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=eg(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return J}}ew._$litElement$=!0,ew.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ew});let eb=globalThis.litElementPolyfillSupport;function em(e,t){i=document.createElement("style"),n=document.createElement("style"),o=document.createElement("style"),i.textContent=ex(e).core.cssText,n.textContent=ex(e).dark.cssText,o.textContent=ex(e).light.cssText,document.head.appendChild(i),document.head.appendChild(n),document.head.appendChild(o),ey(t)}function ey(e){n&&o&&("light"===e?(n.removeAttribute("media"),o.media="enabled"):(o.removeAttribute("media"),n.media="enabled"))}function ev(e){i&&n&&o&&(i.textContent=ex(e).core.cssText,n.textContent=ex(e).dark.cssText,o.textContent=ex(e).light.cssText)}function ex(e){return{core:d`
      :root {
        --w3m-color-mix-strength: ${h(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${h(e?.["--w3m-font-family"]||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${h(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${h(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${h(e?.["--w3m-z-index"]||100)};

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
    `,light:d`
      :root {
        --w3m-color-mix: ${h(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${h(e?.["--w3m-accent"]||"#47a1ff")};
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
    `,dark:d`
      :root {
        --w3m-color-mix: ${h(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${h(e?.["--w3m-accent"]||"#3396ff")};
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
    `}}eb?.({LitElement:ew}),(globalThis.litElementVersions??=[]).push("4.0.1");let eC=d`
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
`,eE=d`
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
`,ek=d`
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
`;function eS(e){return function(t){return"function"==typeof t?(customElements.get(e)||customElements.define(e,t),t):function(e,t){let{kind:r,elements:i}=t;return{kind:r,elements:i,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}var e_=d`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;let eA=class extends ew{render(){return X`<slot></slot>`}};eA.styles=[eC,e_],eA=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([eS("wui-card")],eA);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let e$={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:A},eP=(e=e$,t,r)=>{let{kind:i,metadata:n}=r,o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),o.set(r.name,e),"accessor"===i){let{name:i}=r;return{set(r){let n=t.get.call(this);t.set.call(this,r),this.requestUpdate(i,n,e)},init(t){return void 0!==t&&this.C(i,void 0,e),t}}}if("setter"===i){let{name:i}=r;return function(r){let n=this[i];t.call(this,r),this.requestUpdate(i,n,e)}}throw Error("Unsupported decorator location: "+i)};function eO(e){return(t,r)=>"object"==typeof r?eP(e,t,r):((e,t,r)=>{let i=t.hasOwnProperty(r);return t.constructor.createProperty(r,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function eD(e){return eO({...e,state:!0,attribute:!1})}var eI=d`
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
`;let eR=Y`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,eN=Y`
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
</svg>`,eT=Y`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,eM=Y`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ej=Y`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,eU=Y`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eB=Y`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,eL=Y`<svg fill="none" viewBox="0 0 20 20">
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
</svg>`,eF=Y`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,ez=Y`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,eW=Y`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,eH=Y`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,eq=Y`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,eG=Y`<svg width="36" height="36" fill="none">
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
</svg>`,eV=Y`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eZ=Y`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,eK=Y`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,eQ=Y`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,eX=Y`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,eY=Y` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,eJ=Y`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,e0=Y`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,e1=Y`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,e2=Y`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,e5=Y`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,e3=Y`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,e6=Y`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,e4=Y`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,e8=Y`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,e9=Y`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,e7=Y`<svg fill="none" viewBox="0 0 16 16">
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
</svg>`,te=Y`<svg fill="none" viewBox="0 0 14 15">
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
</svg>`,tt=Y`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,tr=Y`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,ti=Y`<svg fill="none" viewBox="0 0 22 20">
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
</svg>`,tn=Y`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,to=Y`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,ta=Y` <svg
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
</svg>`,ts=Y`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,tl=Y`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,tc=Y`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,tu=Y`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,th=Y`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,td=Y`<svg fill="none" viewBox="0 0 40 40">
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
</svg> `,tf=Y`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,tp=Y`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,tg=Y`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,tw=Y`
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
`,tb=Y`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,tm=Y`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,ty=Y`<svg fill="none" viewBox="0 0 20 20">
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
</svg>`;var tv=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tx={allWallets:eR,appStore:eN,chromeStore:eG,apple:eT,arrowBottom:eM,arrowLeft:ej,arrowRight:eU,arrowTop:eB,browser:eL,checkmark:eF,chevronBottom:ez,chevronLeft:eW,chevronRight:eH,chevronTop:eq,clock:eV,close:eZ,compass:eQ,coinPlaceholder:eK,copy:eX,cursor:eY,desktop:eJ,disconnect:e0,discord:e1,etherscan:e2,extension:e5,externalLink:e3,facebook:e6,filters:e4,github:e8,google:e9,helpCircle:e7,infoCircle:te,mail:tt,mobile:tr,networkPlaceholder:ti,nftPlaceholder:tn,off:to,playStore:ta,qrCode:ts,refresh:tl,search:tc,swapHorizontal:tu,swapVertical:th,telegram:td,twitch:tf,twitter:tp,twitterIcon:tg,wallet:tb,walletConnect:tm,walletPlaceholder:tw,warningCircle:ty},tC=class extends ew{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: var(--wui-color-${this.color});
      --local-width: var(--wui-icon-size-${this.size});
    `,X`${tx[this.name]}`}};tC.styles=[eC,ek,eI],tv([eO()],tC.prototype,"size",void 0),tv([eO()],tC.prototype,"name",void 0),tv([eO()],tC.prototype,"color",void 0),tC=tv([eS("wui-icon")],tC);var tE=d`
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
`,tk=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tS=class extends ew{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return X`<img src=${this.src} alt=${this.alt} />`}};tS.styles=[eC,ek,tE],tk([eO()],tS.prototype,"src",void 0),tk([eO()],tS.prototype,"alt",void 0),tS=tk([eS("wui-image")],tS);var t_=d`
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
`;let tA=class extends ew{render(){return X`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};tA.styles=[eC,t_],tA=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([eS("wui-loading-hexagon")],tA);var t$=d`
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
`,tP=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tO=class extends ew{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,X`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};tO.styles=[eC,t$],tP([eO()],tO.prototype,"color",void 0),tP([eO()],tO.prototype,"size",void 0),tO=tP([eS("wui-loading-spinner")],tO);var tD=d`
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
`,tI=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tR=class extends ew{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,t=36-e;return X`
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
    `}};tR.styles=[eC,tD],tI([eO({type:Number})],tR.prototype,"radius",void 0),tR=tI([eS("wui-loading-thumbnail")],tR);var tN=d`
  :host {
    display: block;
    outline: 1px solid var(--wui-gray-glass-005);
    background: linear-gradient(
      90deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 2.5s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,tT=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tM=class extends ew{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,X`<slot></slot>`}};tM.styles=[tN],tT([eO()],tM.prototype,"width",void 0),tT([eO()],tM.prototype,"height",void 0),tT([eO()],tM.prototype,"borderRadius",void 0),tM=tT([eS("wui-shimmer")],tM);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tj=e=>(...t)=>({_$litDirective$:e,values:t});class tU{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tB=tj(class extends tU{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.it){for(let r in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[r]&&!this.st?.has(r)&&this.it.add(r);return this.render(t)}let r=e.element.classList;for(let e of this.it)e in t||(r.remove(e),this.it.delete(e));for(let e in t){let i=!!t[e];i===this.it.has(e)||this.st?.has(e)||(i?(r.add(e),this.it.add(e)):(r.remove(e),this.it.delete(e)))}return J}});var tL=d`
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
`,tF=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tz=class extends ew{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){let e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,X`<slot class=${tB(e)}></slot>`}};tz.styles=[eC,tL],tF([eO()],tz.prototype,"variant",void 0),tF([eO()],tz.prototype,"color",void 0),tF([eO()],tz.prototype,"align",void 0),tz=tF([eS("wui-text")],tz);let tW=Y`<svg fill="none" viewBox="0 0 60 60">
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
</svg> `,tH=Y`<svg viewBox="0 0 60 60" fill="none">
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
</svg> `,tq=Y`<svg fill="none" viewBox="0 0 60 60">
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
</svg>`,tG=Y`<svg fill="none" viewBox="0 0 60 60">
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
</svg> `,tV=Y`<svg fill="none" viewBox="0 0 60 60">
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
</svg> `,tZ=Y`<svg fill="none" viewBox="0 0 60 60">
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
</svg>`,tK=Y`<svg fill="none" viewBox="0 0 60 60">
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
</svg>`,tQ=Y`<svg fill="none" viewBox="0 0 60 60">
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
</svg> `,tX=Y`<svg fill="none" viewBox="0 0 60 60">
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
</svg>`,tY=Y`<svg fill="none" viewBox="0 0 60 60">
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
</svg> `,tJ=Y`<svg fill="none" viewBox="0 0 60 60">
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
</svg>`,t0=Y`<svg
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
</svg> `,t1=Y`<svg viewBox="0 0 60 60" fill="none">
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
</svg> `;var t2=d`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`,t5=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let t3={browser:tW,dao:tH,defi:tq,defiAlt:tG,eth:tV,layers:tZ,lock:tK,login:tQ,network:tX,nft:tY,noun:tJ,profile:t0,system:t1},t6=class extends ew{constructor(){super(...arguments),this.name="browser"}render(){return X`${t3[this.name]}`}};t6.styles=[eC,t2],t5([eO()],t6.prototype,"name",void 0),t6=t5([eS("wui-visual")],t6);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let t4=e=>e??ee,t8={getSpacingStyles:(e,t)=>Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"==typeof e?`var(--wui-spacing-${e})`:void 0,getFormattedDate:e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),getHostName(e){let t=new URL(e);return t.hostname},getTruncateString:({string:e,charsStart:t,charsEnd:r,truncate:i})=>e.length<=t+r?e:"end"===i?`${e.substring(0,t)}...`:"start"===i?`...${e.substring(e.length-r)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`,generateAvatarColors(e){let t=e.toLowerCase().replace(/^0x/iu,""),r=t.substring(0,6),i=this.hexToRgb(r),n=[];for(let e=0;e<5;e+=1){let t=this.tintColor(i,.15*e);n.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`
    --local-color-1: ${n[0]};
    --local-color-2: ${n[1]};
    --local-color-3: ${n[2]};
    --local-color-4: ${n[3]};
    --local-color-5: ${n[4]};
   `},hexToRgb(e){let t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){let[r,i,n]=e;return[Math.round(r+(255-r)*t),Math.round(i+(255-i)*t),Math.round(n+(255-n)*t)]},isNumber:e=>/^[0-9]+$/u.test(e),getColorTheme:e=>e||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")};var t9=d`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,t7=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let re=class extends ew{render(){return this.style.cssText=`
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
      padding-top: ${this.padding&&t8.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&t8.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&t8.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&t8.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&t8.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&t8.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&t8.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&t8.getSpacingStyles(this.margin,3)};
    `,X`<slot></slot>`}};re.styles=[eC,t9],t7([eO()],re.prototype,"flexDirection",void 0),t7([eO()],re.prototype,"flexWrap",void 0),t7([eO()],re.prototype,"flexBasis",void 0),t7([eO()],re.prototype,"flexGrow",void 0),t7([eO()],re.prototype,"flexShrink",void 0),t7([eO()],re.prototype,"alignItems",void 0),t7([eO()],re.prototype,"justifyContent",void 0),t7([eO()],re.prototype,"columnGap",void 0),t7([eO()],re.prototype,"rowGap",void 0),t7([eO()],re.prototype,"gap",void 0),t7([eO()],re.prototype,"padding",void 0),t7([eO()],re.prototype,"margin",void 0),re=t7([eS("wui-flex")],re);var rt=d`
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
`,rr=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ri=class extends ew{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return X`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",X`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let e=t8.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};ri.styles=[eC,rt],rr([eO()],ri.prototype,"imageSrc",void 0),rr([eO()],ri.prototype,"alt",void 0),rr([eO()],ri.prototype,"address",void 0),ri=rr([eS("wui-avatar")],ri);var rn=d`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
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
`,ro=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ra=class extends ew{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let e="xxs";switch(this.size){case"lg":e="lg";break;case"md":e="md";break;case"mdl":e="mdl";break;case"sm":e="xs";break;default:e="xxs"}let t="lg"===this.size,r="opaque"===this.background,i="accent-100"===this.backgroundColor&&r||"success-100"===this.backgroundColor&&r||"error-100"===this.backgroundColor&&r||"inverse-100"===this.backgroundColor&&r;return this.style.cssText=`
       --local-bg-value: ${i?`var(--wui-icon-box-bg-${this.backgroundColor})`:`var(--wui-color-${this.backgroundColor})`};
       --local-bg-mix: ${i?"100%":t?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${t?"xxs":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,X` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};ra.styles=[eC,eE,rn],ro([eO()],ra.prototype,"size",void 0),ro([eO()],ra.prototype,"backgroundColor",void 0),ro([eO()],ra.prototype,"iconColor",void 0),ro([eO()],ra.prototype,"background",void 0),ro([eO({type:Boolean})],ra.prototype,"border",void 0),ro([eO()],ra.prototype,"borderColor",void 0),ro([eO()],ra.prototype,"icon",void 0),ra=ro([eS("wui-icon-box")],ra);var rs=d`
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
`,rl=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rc=class extends ew{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return X`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${t4(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${t8.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){let e=this.networkSrc?X`<wui-image src=${this.networkSrc}></wui-image>`:X`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return X`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};rc.styles=[eC,eE,rs],rl([eO()],rc.prototype,"networkSrc",void 0),rl([eO()],rc.prototype,"avatarSrc",void 0),rl([eO()],rc.prototype,"balance",void 0),rl([eO({type:Boolean})],rc.prototype,"disabled",void 0),rl([eO({type:Boolean})],rc.prototype,"isProfileName",void 0),rl([eO()],rc.prototype,"address",void 0),rc=rl([eS("wui-account-button")],rc);var ru=d`
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
`,rh=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rd=class extends ew{constructor(){super(...arguments),this.size="md",this.name=""}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),X` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?X`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?X`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:X`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};rd.styles=[eC,ru],rh([eO()],rd.prototype,"size",void 0),rh([eO()],rd.prototype,"name",void 0),rh([eO()],rd.prototype,"imageSrc",void 0),rh([eO()],rd.prototype,"walletIcon",void 0),rd=rh([eS("wui-wallet-image")],rd);var rf=d`
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
`,rp=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rg=class extends ew{constructor(){super(...arguments),this.walletImages=[]}render(){let e=this.walletImages.length<4;return X`${this.walletImages.slice(0,4).map(({src:e,walletName:t})=>X`
          <wui-wallet-image
            size="inherit"
            imageSrc=${e}
            name=${t4(t)}
          ></wui-wallet-image>
        `)}
    ${e?[...Array(4-this.walletImages.length)].map(()=>X` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}`}};rg.styles=[eC,rf],rp([eO({type:Array})],rg.prototype,"walletImages",void 0),rg=rp([eS("wui-all-wallets-image")],rg);var rw=d`
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
`,rb=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rm=class extends ew{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;let e="md"===this.size?"paragraph-600":"small-600";return X`
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
    `}loadingTemplate(){return this.loading?X`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:X``}};rm.styles=[eC,eE,rw],rb([eO()],rm.prototype,"size",void 0),rb([eO({type:Boolean})],rm.prototype,"disabled",void 0),rb([eO({type:Boolean})],rm.prototype,"fullWidth",void 0),rb([eO({type:Boolean})],rm.prototype,"loading",void 0),rb([eO()],rm.prototype,"variant",void 0),rm=rb([eS("wui-button")],rm);let ry=Y`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var rv=d`
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
`,rx=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rC=class extends ew{constructor(){super(...arguments),this.type="wallet"}render(){return X`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?X` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${ry}`:X`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};rC.styles=[eC,eE,rv],rx([eO()],rC.prototype,"type",void 0),rC=rx([eS("wui-card-select-loader")],rC);let rE=Y`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var rk=d`
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
`,rS=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r_=class extends ew{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){let e="lg"===this.size;return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${e?"86px":"48px"};
      --local-height: ${e?"96px":"54px"};
      --local-icon-size: ${e?"42px":"24px"};
    `,X`${this.templateVisual()} ${e?rE:ry}`}templateVisual(){return this.imageSrc?X`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:X`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};r_.styles=[eC,rk],rS([eO()],r_.prototype,"size",void 0),rS([eO()],r_.prototype,"name",void 0),rS([eO()],r_.prototype,"imageSrc",void 0),rS([eO({type:Boolean})],r_.prototype,"selected",void 0),r_=rS([eS("wui-network-image")],r_);var rA=d`
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
`,r$=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rP=class extends ew{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return X`
      <button data-selected=${t4(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?X`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${t4(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:X`
      <wui-wallet-image size="md" imageSrc=${t4(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};rP.styles=[eC,eE,rA],r$([eO()],rP.prototype,"name",void 0),r$([eO()],rP.prototype,"type",void 0),r$([eO()],rP.prototype,"imageSrc",void 0),r$([eO({type:Boolean})],rP.prototype,"disabled",void 0),r$([eO({type:Boolean})],rP.prototype,"selected",void 0),rP=r$([eS("wui-card-select")],rP);var rO=d`
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
`,rD=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rI=class extends ew{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){let e="transparent"===this.variant?"small-600":"paragraph-600";return X`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${t8.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?X`<wui-image src=${this.imageSrc}></wui-image>`:null}};rI.styles=[eC,eE,rO],rD([eO()],rI.prototype,"variant",void 0),rD([eO()],rI.prototype,"imageSrc",void 0),rD([eO({type:Boolean})],rI.prototype,"disabled",void 0),rD([eO()],rI.prototype,"icon",void 0),rD([eO()],rI.prototype,"href",void 0),rI=rD([eS("wui-chip")],rI);var rR=d`
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
`,rN=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rT=class extends ew{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let e="md"===this.size?"paragraph-600":"small-600";return X`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?X`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};rT.styles=[eC,eE,rR],rN([eO()],rT.prototype,"size",void 0),rN([eO({type:Boolean})],rT.prototype,"loading",void 0),rT=rN([eS("wui-connect-button")],rT);var rM=d`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,rj=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rU=class extends ew{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return X`
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
    `}};rU.styles=[eC,eE,rM],rj([eO({type:Boolean})],rU.prototype,"disabled",void 0),rj([eO()],rU.prototype,"label",void 0),rj([eO()],rU.prototype,"buttonLabel",void 0),rU=rj([eS("wui-cta-button")],rU);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let{D:rB}={j:R,P:N,A:T,C:1,M:en,L:es,R:F,V:ea,D:el,I:ec,H:eh,N:ed,U:eu,B:ef},rL=e=>void 0===e.strings,rF=(e,t)=>{let r=e._$AN;if(void 0===r)return!1;for(let e of r)e._$AO?.(t,!1),rF(e,t);return!0},rz=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while(0===r?.size)},rW=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),rG(t)}};function rH(e){void 0!==this._$AN?(rz(this),this._$AM=e,rW(this)):this._$AM=e}function rq(e,t=!1,r=0){let i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size){if(t){if(Array.isArray(i))for(let e=r;e<i.length;e++)rF(i[e],!1),rz(i[e]);else null!=i&&(rF(i,!1),rz(i))}else rF(this,e)}}let rG=e=>{2==e.type&&(e._$AP??=rq,e._$AQ??=rH)};class rV extends tU{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),rW(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(rF(this,e),rz(this))}setValue(e){if(rL(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let rZ=()=>new rK;class rK{}let rQ=new WeakMap,rX=tj(class extends rV{render(e){return ee}update(e,[t]){let r=t!==this.G;return r&&void 0!==this.G&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=t,this.ct=e.options?.host,this.ot(this.lt=e.element)),ee}ot(e){if("function"==typeof this.G){let t=this.ct??globalThis,r=rQ.get(t);void 0===r&&(r=new WeakMap,rQ.set(t,r)),void 0!==r.get(this.G)&&this.G.call(this.ct,void 0),r.set(this.G,e),void 0!==e&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){return"function"==typeof this.G?rQ.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var rY=d`
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
`,rJ=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r0=class extends ew{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=rZ()}render(){let e=`wui-size-${this.size}`;return X` ${this.templateIcon()}
      <input
        ${rX(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${t4(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?X`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};r0.styles=[eC,eE,rY],rJ([eO()],r0.prototype,"size",void 0),rJ([eO()],r0.prototype,"icon",void 0),rJ([eO({type:Boolean})],r0.prototype,"disabled",void 0),rJ([eO()],r0.prototype,"placeholder",void 0),rJ([eO()],r0.prototype,"type",void 0),rJ([eO()],r0.prototype,"keyHint",void 0),r0=rJ([eS("wui-input-text")],r0);var r1=d`
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
`,r2=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r5=class extends ew{render(){return X`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?X`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};r5.styles=[eC,r1],r2([eO()],r5.prototype,"errorMessage",void 0),r5=r2([eS("wui-email-input")],r5);var r3=d`
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
`,r6=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r4=class extends ew{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return X`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};r4.styles=[eC,eE,ek,r3],r6([eO()],r4.prototype,"size",void 0),r6([eO({type:Boolean})],r4.prototype,"disabled",void 0),r6([eO()],r4.prototype,"icon",void 0),r6([eO()],r4.prototype,"iconColor",void 0),r4=r6([eS("wui-icon-link")],r4);var r8=d`
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
`,r9=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r7=class extends ew{constructor(){super(...arguments),this.icon="copy"}render(){return X`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};r7.styles=[eC,eE,r8],r9([eO()],r7.prototype,"icon",void 0),r7=r9([eS("wui-input-element")],r7);var ie=d`
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
`,it=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ir=class extends ew{constructor(){super(...arguments),this.disabled=!1}render(){return X`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};ir.styles=[eC,eE,ie],it([eO({type:Boolean})],ir.prototype,"disabled",void 0),ir=it([eS("wui-input-numeric")],ir);var ii=d`
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
`,io=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ia=class extends ew{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return X`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};ia.styles=[eC,eE,ii],io([eO({type:Boolean})],ia.prototype,"disabled",void 0),io([eO()],ia.prototype,"color",void 0),ia=io([eS("wui-link")],ia);var is=d`
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
`,il=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ic=class extends ew{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return X`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${t4(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return X`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return X`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){let e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md";return X`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?X`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:X``}chevronTemplate(){return this.chevron?X`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};ic.styles=[eC,eE,is],il([eO()],ic.prototype,"icon",void 0),il([eO()],ic.prototype,"variant",void 0),il([eO()],ic.prototype,"iconVariant",void 0),il([eO({type:Boolean})],ic.prototype,"disabled",void 0),il([eO()],ic.prototype,"imageSrc",void 0),il([eO()],ic.prototype,"alt",void 0),il([eO({type:Boolean})],ic.prototype,"chevron",void 0),il([eO({type:Boolean})],ic.prototype,"loading",void 0),ic=il([eS("wui-list-item")],ic);var iu=d`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    border: 1px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  :host([data-type='minted']),
  :host([data-type='nftSent']),
  :host([data-type='bought']) {
    border-radius: var(--wui-border-radius-xs);
  }

  wui-image {
    display: block;
    border-radius: inherit;
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
`,ih=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let id=["withdrawed","buy","cryptoSent","nftSent"],ip=["deposited","received","bought","minted"],ig=["minted","bought","nftSent"],iw=["deposited","withdrawed","cryptoSent","buy","received"],ib=class extends ew{constructor(){super(...arguments),this.type="buy"}render(){let e="accent-100",t="arrowTop";return id.includes(this.type)?(e="accent-100",t="arrowTop"):ip.includes(this.type)&&ig.includes(this.type)?(e="success-100",t="arrowBottom"):ip.includes(this.type)&&iw.includes(this.type)?(e="success-100",t="arrowBottom"):(e="accent-100",t="swapVertical"),this.dataset.type=this.type,X`
      ${this.templateVisual()}
      <wui-icon-box
        size="xs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        .icon=${t}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `}templateVisual(){return this.imageSrc?X`<wui-image src=${this.imageSrc} alt=${this.type}></wui-image>`:ig.includes(this.type)?X`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:X`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}};ib.styles=[eC,iu],ih([eO()],ib.prototype,"type",void 0),ih([eO()],ib.prototype,"imageSrc",void 0),ib=ih([eS("wui-transaction-visual")],ib);var im=d`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  button > wui-flex > wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  button > wui-flex > wui-text:nth-child(2) {
    text-transform: uppercase;
  }

  button:disabled {
    color: var(--wui-color-fg-300);
  }
`,iy=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iv=class extends ew{constructor(){super(...arguments),this.type="bought",this.disabled=!1,this.imageSrc="",this.date=new Date,this.transactionDetail=""}render(){let e="nftSent"===this.type||"cryptoSent"===this.type,t=e?"Sent":this.type,r=t8.getFormattedDate(this.date);return X`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-transaction-visual
          type=${this.type}
          imageSrc=${this.imageSrc}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">${t}</wui-text>
          <wui-text variant="small-500" color="fg-200">${this.transactionDetail}</wui-text>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300">${r}</wui-text>
      </button>
    `}};iv.styles=[eC,eE,im],iy([eO()],iv.prototype,"type",void 0),iy([eO({type:Boolean})],iv.prototype,"disabled",void 0),iy([eO()],iv.prototype,"imageSrc",void 0),iy([eO({attribute:!1})],iv.prototype,"date",void 0),iy([eO()],iv.prototype,"transactionDetail",void 0),iv=iy([eS("wui-list-transaction")],iv);var ix=d`
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
`,iC=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iE=class extends ew{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,X`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};iE.styles=[eC,ix],iC([eO()],iE.prototype,"variant",void 0),iE=iC([eS("wui-tag")],iE);var ik=d`
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
`,iS=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let i_=class extends ew{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return X`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?X` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?X` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?X`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:X`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?X`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?X`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};i_.styles=[eC,eE,ik],iS([eO({type:Array})],i_.prototype,"walletImages",void 0),iS([eO()],i_.prototype,"imageSrc",void 0),iS([eO()],i_.prototype,"name",void 0),iS([eO()],i_.prototype,"tagLabel",void 0),iS([eO()],i_.prototype,"tagVariant",void 0),iS([eO()],i_.prototype,"icon",void 0),iS([eO()],i_.prototype,"walletIcon",void 0),iS([eO({type:Boolean})],i_.prototype,"disabled",void 0),iS([eO({type:Boolean})],i_.prototype,"showAllWallets",void 0),i_=iS([eS("wui-list-wallet")],i_);var iA=d`
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
`,i$=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iP=class extends ew{constructor(){super(...arguments),this.logo="google"}render(){return X`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};iP.styles=[eC,iA],i$([eO()],iP.prototype,"logo",void 0),iP=i$([eS("wui-logo")],iP);var iO=d`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,iD=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iI=class extends ew{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return X`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};iI.styles=[eC,eE,iO],iD([eO()],iI.prototype,"logo",void 0),iD([eO({type:Boolean})],iI.prototype,"disabled",void 0),iI=iD([eS("wui-logo-select")],iI);var iR=d`
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
`,iN=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iT=class extends ew{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return X`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?X`<wui-image src=${this.imageSrc}></wui-image>`:X`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};iT.styles=[eC,eE,iR],iN([eO()],iT.prototype,"imageSrc",void 0),iN([eO({type:Boolean})],iT.prototype,"disabled",void 0),iT=iN([eS("wui-network-button")],iT);var iM=d`
  :host {
    position: relative;
    display: block;
  }
`,ij=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iU=class extends ew{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(e,t)=>{let r=e.target,i=this.getInputElement(r);if(!i)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();let n=i.selectionStart;switch(e.key){case"ArrowLeft":n&&i.setSelectionRange(n+1,n+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===i.value?this.focusInputField("prev",t):i.value=""}},this.focusInputField=(e,t)=>{if("next"===e){let e=t+1,r=this.numerics[e<this.length?e:t],i=r?this.getInputElement(r):void 0;i&&i.focus()}if("prev"===e){let e=t-1,r=this.numerics[e>-1?e:t],i=r?this.getInputElement(r):void 0;i&&i.focus()}}}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e))}render(){return X`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map((e,t)=>X`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @keydown=${e=>this.handleKeyDown(e,t)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}handleInput(e,t){let r=e.target,i=this.getInputElement(r);if(i){let r=i.value;if("insertFromPaste"===e.inputType)this.handlePaste(i,r,t);else{let n=t8.isNumber(r);n&&e.data?(i.value=e.data,this.focusInputField("next",t)):i.value=""}}}handlePaste(e,t,r){let i=t[0],n=i&&t8.isNumber(i);if(n){e.value=i;let n=t.substring(1);if(r+1<this.length&&n.length){let e=this.numerics[r+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,n,r+1)}else this.focusInputField("next",r)}else e.value=""}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}};iU.styles=[eC,iM],ij([eO({type:Number})],iU.prototype,"length",void 0),iU=ij([eS("wui-otp")],iU);var iB=r(75298);function iL(e,t,r){return e!==t&&(e-t<0?t-e:e-t)<=r+.1}let iF={generate(e,t,r){let i="#141414",n=[],o=function(e,t){let r=Array.prototype.slice.call(iB.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),i=Math.sqrt(r.length);return r.reduce((e,t,r)=>(r%i==0?e.push([t]):e[e.length-1].push(t))&&e,[])}(e,0),a=t/o.length,s=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];s.forEach(({x:e,y:t})=>{let r=(o.length-7)*a*e,l=(o.length-7)*a*t;for(let e=0;e<s.length;e+=1){let t=a*(7-2*e);n.push(Y`
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
          `)}});let l=Math.floor((r+25)/a),c=o.length/2-l/2,u=o.length/2+l/2-1,h=[];o.forEach((e,t)=>{e.forEach((e,r)=>{if(o[t][r]&&!(t<7&&r<7||t>o.length-8&&r<7||t<7&&r>o.length-8)&&!(t>c&&t<u&&r>c&&r<u)){let e=t*a+a/2,i=r*a+a/2;h.push([e,i])}})});let d={};return h.forEach(([e,t])=>{d[e]?d[e]?.push(t):d[e]=[t]}),Object.entries(d).map(([e,t])=>{let r=t.filter(e=>t.every(t=>!iL(e,t,a)));return[Number(e),r]}).forEach(([e,t])=>{t.forEach(t=>{n.push(Y`<circle cx=${e} cy=${t} fill=${i} r=${a/2.5} />`)})}),Object.entries(d).filter(([e,t])=>t.length>1).map(([e,t])=>{let r=t.filter(e=>t.some(t=>iL(e,t,a)));return[Number(e),r]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);let r=[];for(let e of t){let t=r.find(t=>t.some(t=>iL(e,t,a)));t?t.push(e):r.push([e])}return[e,r.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,r])=>{n.push(Y`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${r}
                stroke=${i}
                stroke-width=${a/1.25}
                stroke-linecap="round"
              />
            `)})}),n}};var iz=d`
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
`,iW=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iH=class extends ew{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,X`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let e="light"===this.theme?this.size:this.size-32;return Y`
      <svg height=${e} width=${e}>
        ${iF.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?X`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:X`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};iH.styles=[eC,iz],iW([eO()],iH.prototype,"uri",void 0),iW([eO({type:Number})],iH.prototype,"size",void 0),iW([eO()],iH.prototype,"theme",void 0),iW([eO()],iH.prototype,"imageSrc",void 0),iW([eO()],iH.prototype,"alt",void 0),iH=iW([eS("wui-qr-code")],iH);var iq=d`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let iG=class extends ew{constructor(){super(...arguments),this.inputComponentRef=rZ()}render(){return X`
      <wui-input-text
        ${rX(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};iG.styles=[eC,iq],iG=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([eS("wui-search-bar")],iG);var iV=d`
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
`,iZ=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iK=class extends ew{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return X`
      <wui-icon-box
        size="sm"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};iK.styles=[eC,iV],iZ([eO()],iK.prototype,"backgroundColor",void 0),iZ([eO()],iK.prototype,"iconColor",void 0),iZ([eO()],iK.prototype,"icon",void 0),iZ([eO()],iK.prototype,"message",void 0),iK=iZ([eS("wui-snackbar")],iK);var iQ=d`
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
`,iX=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iY=class extends ew{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{let r=t===this.activeTab;return X`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
        >
          <wui-icon size="sm" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){let r=this.buttons[this.activeTab],i=this.buttons[e],n=r?.querySelector("wui-text"),o=i?.querySelector("wui-text"),a=i?.getBoundingClientRect(),s=o?.getBoundingClientRect();r&&n&&!t&&e!==this.activeTab&&(n.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&a&&s&&o&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(a.width+s.width)+6}px`,i.animate([{width:`${a.width+s.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),o.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};iY.styles=[eC,eE,iQ],iX([eO({type:Array})],iY.prototype,"tabs",void 0),iX([eO()],iY.prototype,"onTabChange",void 0),iX([eO({type:Array})],iY.prototype,"buttons",void 0),iX([eO({type:Boolean})],iY.prototype,"disabled",void 0),iX([eD()],iY.prototype,"activeTab",void 0),iX([eD()],iY.prototype,"localTabWidth",void 0),iX([eD()],iY.prototype,"isDense",void 0),iY=iX([eS("wui-tabs")],iY);var iJ=d`
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
`,i0=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let i1=class extends ew{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return X`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};i1.styles=[eC,eE,iJ],i0([eO()],i1.prototype,"placement",void 0),i0([eO()],i1.prototype,"message",void 0),i1=i0([eS("wui-tooltip")],i1);var i2=d`
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
`,i5=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let i3=class extends ew{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,X`${this.templateVisual()}`}templateVisual(){return this.imageSrc?X`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:X`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};i3.styles=[eC,i2],i5([eO()],i3.prototype,"imageSrc",void 0),i5([eO()],i3.prototype,"alt",void 0),i5([eO({type:Boolean})],i3.prototype,"borderRadiusFull",void 0),i3=i5([eS("wui-visual-thumbnail")],i3);var i6=d`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,i4=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let i8=class extends ew{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&t8.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&t8.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&t8.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&t8.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&t8.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&t8.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&t8.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&t8.getSpacingStyles(this.margin,3)};
    `,X`<slot></slot>`}};i8.styles=[eC,i6],i4([eO()],i8.prototype,"gridTemplateRows",void 0),i4([eO()],i8.prototype,"gridTemplateColumns",void 0),i4([eO()],i8.prototype,"justifyItems",void 0),i4([eO()],i8.prototype,"alignItems",void 0),i4([eO()],i8.prototype,"justifyContent",void 0),i4([eO()],i8.prototype,"alignContent",void 0),i4([eO()],i8.prototype,"columnGap",void 0),i4([eO()],i8.prototype,"rowGap",void 0),i4([eO()],i8.prototype,"gap",void 0),i4([eO()],i8.prototype,"padding",void 0),i4([eO()],i8.prototype,"margin",void 0),i8=i4([eS("wui-grid")],i8);var i9=d`
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
`,i7=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ne=class extends ew{constructor(){super(...arguments),this.text=""}render(){return X`${this.template()}`}template(){return this.text?X`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};ne.styles=[eC,i9],i7([eO()],ne.prototype,"text",void 0),ne=i7([eS("wui-separator")],ne)},36967:function(e,t,r){"use strict";let i,n;function o(){if(!i)throw Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');return{open:async function(e){await i?.open(e)},close:async function(){await i?.close()}}}r.d(t,{OY:function(){return tv},o1:function(){return ty},k_:function(){return o}}),r(2265);var a,s,l,c,u,h,d,f,p,g,w,b,m,y,v,x,C,E,k,S,_,A,$,P,O=r(20558),D=r(75404),I=r(73895),R=r(66265),N=r(69307),T=r(92468),M=r(57173);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let j=e=>e??M.Ld;var U=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let B=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.networkImages=I.WM.state.networkImages,this.disabled=!1,this.balance="show",this.address=I.AccountController.state.address,this.balanceVal=I.AccountController.state.balance,this.balanceSymbol=I.AccountController.state.balanceSymbol,this.profileName=I.AccountController.state.profileName,this.profileImage=I.AccountController.state.profileImage,this.network=I.NetworkController.state.caipNetwork,this.unsubscribe.push(...[I.AccountController.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),I.NetworkController.subscribeKey("caipNetwork",e=>this.network=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.networkImages[this.network?.imageId??""],t="show"===this.balance;return N.dy`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${j(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${j(e)}
        avatarSrc=${j(this.profileImage)}
        balance=${t?I.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){I.IN.open()}};U([(0,T.Cb)({type:Boolean})],B.prototype,"disabled",void 0),U([(0,T.Cb)()],B.prototype,"balance",void 0),U([(0,T.SB)()],B.prototype,"address",void 0),U([(0,T.SB)()],B.prototype,"balanceVal",void 0),U([(0,T.SB)()],B.prototype,"balanceSymbol",void 0),U([(0,T.SB)()],B.prototype,"profileName",void 0),U([(0,T.SB)()],B.prototype,"profileImage",void 0),U([(0,T.SB)()],B.prototype,"network",void 0),B=U([(0,R.customElement)("w3m-account-button")],B);var L=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let F=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=I.AccountController.state.isConnected,this.unsubscribe.push(I.AccountController.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?N.dy`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${j(this.balance)}
          >
          </w3m-account-button>
        `:N.dy`
          <w3m-connect-button
            size=${j(this.size)}
            label=${j(this.label)}
            loadingLabel=${j(this.loadingLabel)}
          ></w3m-connect-button>
        `}};L([(0,T.Cb)({type:Boolean})],F.prototype,"disabled",void 0),L([(0,T.Cb)()],F.prototype,"balance",void 0),L([(0,T.Cb)()],F.prototype,"size",void 0),L([(0,T.Cb)()],F.prototype,"label",void 0),L([(0,T.Cb)()],F.prototype,"loadingLabel",void 0),L([(0,T.SB)()],F.prototype,"isAccount",void 0),F=L([(0,R.customElement)("w3m-button")],F);var z=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let W=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=I.IN.state.open,this.unsubscribe.push(I.IN.subscribeKey("open",e=>this.open=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return N.dy`
      <wui-connect-button
        size=${j(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?I.IN.close():I.IN.open()}};z([(0,T.Cb)()],W.prototype,"size",void 0),z([(0,T.Cb)()],W.prototype,"label",void 0),z([(0,T.Cb)()],W.prototype,"loadingLabel",void 0),z([(0,T.SB)()],W.prototype,"open",void 0),W=z([(0,R.customElement)("w3m-connect-button")],W),r(9448);var H=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let q=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=I.NetworkController.state.caipNetwork,this.connected=I.AccountController.state.isConnected,this.unsubscribe.push(...[I.NetworkController.subscribeKey("caipNetwork",e=>this.network=e),I.AccountController.subscribeKey("isConnected",e=>this.connected=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return N.dy`
      <wui-network-button
        .disabled=${!!this.disabled}
        imageSrc=${j(I.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){I.IN.open({view:"Networks"})}};H([(0,T.Cb)({type:Boolean})],q.prototype,"disabled",void 0),H([(0,T.SB)()],q.prototype,"network",void 0),H([(0,T.SB)()],q.prototype,"connected",void 0),q=H([(0,R.customElement)("w3m-network-button")],q);var G=N.iv`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`,V=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Z=class extends N.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=I.RouterController.state.view,this.unsubscribe.push(I.RouterController.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{let t=`${e?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return N.dy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return N.dy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return N.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return N.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return N.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return N.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return N.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return N.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return N.dy`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return N.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return N.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return N.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return N.dy`<w3m-downloads-view></w3m-downloads-view>`}}async onViewChange(e){let{history:t}=I.RouterController.state,r=-10,i=10;t.length<this.prevHistoryLength&&(r=10,i=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${i}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};Z.styles=G,V([(0,T.SB)()],Z.prototype,"view",void 0),Z=V([(0,R.customElement)("w3m-router")],Z);var K=N.iv`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`,Q=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let X=class extends N.oi{constructor(){super(),this.usubscribe=[],this.networkImages=I.WM.state.networkImages,this.address=I.AccountController.state.address,this.profileImage=I.AccountController.state.profileImage,this.profileName=I.AccountController.state.profileName,this.balance=I.AccountController.state.balance,this.balanceSymbol=I.AccountController.state.balanceSymbol,this.network=I.NetworkController.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(...[I.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):I.IN.close()})],I.NetworkController.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-view: No account provided");let e=this.networkImages[this.network?.imageId??""];return N.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${j(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?R.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):R.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
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
              ${I.j1.formatBalance(this.balance,this.balanceSymbol)}
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
          imageSrc=${j(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
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
    `}explorerBtnTemplate(){let{addressExplorerUrl:e}=I.AccountController.state;return e?N.dy`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){let{requestedCaipNetworks:e}=I.NetworkController.state,t=!!e&&e.length>1,r=e?.find(({id:e})=>e===this.network?.id);return t||!r}onCopyAddress(){try{this.address&&(I.j1.copyToClopboard(this.address),I.SnackController.showSuccess("Address copied"))}catch{I.SnackController.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&I.RouterController.push("Networks")}async onDisconnect(){try{this.disconecting=!0,await I.ConnectionController.disconnect(),I.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),I.IN.close()}catch{I.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),I.SnackController.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){let{addressExplorerUrl:e}=I.AccountController.state;e&&I.j1.openHref(e,"_blank")}};X.styles=K,Q([(0,T.SB)()],X.prototype,"address",void 0),Q([(0,T.SB)()],X.prototype,"profileImage",void 0),Q([(0,T.SB)()],X.prototype,"profileName",void 0),Q([(0,T.SB)()],X.prototype,"balance",void 0),Q([(0,T.SB)()],X.prototype,"balanceSymbol",void 0),Q([(0,T.SB)()],X.prototype,"network",void 0),Q([(0,T.SB)()],X.prototype,"disconecting",void 0),X=Q([(0,R.customElement)("w3m-account-view")],X);var Y=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let J=class extends N.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=I.j1.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return N.dy`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?N.dy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:N.dy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return I.j1.isMobile()?N.dy`
        <wui-icon-box
          size="lg"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){I.RouterController.push("ConnectingWalletConnect")}};Y([(0,T.SB)()],J.prototype,"search",void 0),J=Y([(0,R.customElement)("w3m-all-wallets-view")],J);var ee=N.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`,et=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let er=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.connectors=I.ConnectorController.state.connectors,this.unsubscribe.push(I.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return N.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(I.j1.isMobile())return null;let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type);return e?N.dy`
      <wui-list-wallet
        imageSrc=${j(I.fz.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){let{customWallets:e}=I.OptionsController.state;if(!e?.length)return null;let t=this.filterOutDuplicateWallets(e);return t.map(e=>N.dy`
        <wui-list-wallet
          imageSrc=${j(I.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)}featuredTemplate(){let{featured:e}=I.ApiController.state;if(!e.length)return null;let t=this.filterOutDuplicateWallets(e);return t.map(e=>N.dy`
        <wui-list-wallet
          imageSrc=${j(I.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)}recentTemplate(){let e=I.MO.getRecentWallets();return e.map(e=>N.dy`
        <wui-list-wallet
          imageSrc=${j(I.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>"ANNOUNCED"!==e.type?null:N.dy`
        <wui-list-wallet
          imageSrc=${j(I.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `)}injectedTemplate(){let e=this.connectors.find(e=>"ANNOUNCED"===e.type);return this.connectors.map(t=>"INJECTED"===t.type&&I.ConnectionController.checkInstalled()?N.dy`
        <wui-list-wallet
          imageSrc=${j(I.fz.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
          tagLabel=${j(e?void 0:"installed")}
          tagVariant=${j(e?void 0:"success")}
        >
        </wui-list-wallet>
      `:null)}connectorsTemplate(){return this.connectors.map(e=>["WALLET_CONNECT","INJECTED","ANNOUNCED"].includes(e.type)?null:N.dy`
        <wui-list-wallet
          imageSrc=${j(I.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){let e=10*Math.floor(I.ApiController.state.count/10);return N.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${e}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){let{recommended:e}=I.ApiController.state,{customWallets:t,featuredWalletIds:r}=I.OptionsController.state,{connectors:i}=I.ConnectorController.state,n=I.MO.getRecentWallets(),o=i.filter(e=>"ANNOUNCED"===e.type);if(r||t||!e.length)return null;let a=o.length+n.length,s=this.filterOutDuplicateWallets(e).slice(0,Math.max(0,2-a));return s.map(e=>N.dy`
        <wui-list-wallet
          imageSrc=${j(I.fz.getWalletImage(e))}
          name=${e?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)}onConnector(e){"WALLET_CONNECT"===e.type?I.j1.isMobile()?I.RouterController.push("AllWallets"):I.RouterController.push("ConnectingWalletConnect"):I.RouterController.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){let{connectors:t}=I.ConnectorController.state,r=I.MO.getRecentWallets(),i=r.map(e=>e.id),n=t.map(e=>e.info?.rdns).filter(Boolean),o=e.filter(e=>!i.includes(e.id)&&!n.includes(e.rdns??void 0));return o}onAllWallets(){I.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),I.RouterController.push("AllWallets")}onConnectWallet(e){I.RouterController.push("ConnectingWalletConnect",{wallet:e})}};er.styles=ee,et([(0,T.SB)()],er.prototype,"connectors",void 0),er=et([(0,R.customElement)("w3m-connect-view")],er);var ei=N.iv`
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
`,en=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};class eo extends N.oi{constructor(){super(),this.wallet=I.RouterController.state.data?.wallet,this.connector=I.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=I.fz.getWalletImage(this.wallet)??I.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=I.ConnectionController.state.wcUri,this.error=I.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(...[I.ConnectionController.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),I.ConnectionController.subscribeKey("wcError",e=>this.error=e),I.ConnectionController.subscribeKey("buffering",e=>this.buffering=e)])}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),N.dy`
      <wui-flex
        data-error=${j(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${j(this.imageSrc)}></wui-wallet-image>

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

      ${this.isWalletConnect?N.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(I.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){let e=I.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return N.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(I.j1.copyToClopboard(this.uri),I.SnackController.showSuccess("Link copied"))}catch{I.SnackController.showError("Failed to copy")}}}eo.styles=ei,en([(0,T.SB)()],eo.prototype,"uri",void 0),en([(0,T.SB)()],eo.prototype,"error",void 0),en([(0,T.SB)()],eo.prototype,"ready",void 0),en([(0,T.SB)()],eo.prototype,"showRetry",void 0),en([(0,T.SB)()],eo.prototype,"buffering",void 0),en([(0,T.Cb)({type:Boolean})],eo.prototype,"isMobile",void 0),en([(0,T.Cb)()],eo.prototype,"onRetry",void 0);let ea={INJECTED:"browser",ANNOUNCED:"browser"},es=class extends eo{constructor(){if(super(),!this.connector)throw Error("w3m-connecting-view: No connector provided");I.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:ea[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&I.MO.setConnectedWalletImageUrl(this.connector.imageUrl),await I.ConnectionController.connectExternal(this.connector),I.IN.close(),I.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){I.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};es=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,R.customElement)("w3m-connecting-external-view")],es);let el=class extends N.oi{constructor(){super(...arguments),this.dappUrl=I.OptionsController.state.metadata?.url,this.dappName=I.OptionsController.state.metadata?.name}render(){return N.dy`
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
    `}urlTemplate(){return this.dappUrl?N.dy`<wui-flex .padding=${["0","0","l","0"]} justifyContent="center">
        <wui-button size="sm" variant="accentBg" @click=${this.onDappLink.bind(this)}>
          ${this.dappUrl}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>`:null}onDappLink(){this.dappUrl&&I.j1.openHref(this.dappUrl,"_blank")}onSign(){}onCancel(){I.RouterController.goBack()}};el=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,R.customElement)("w3m-connecting-siwe-view")],el);var ec=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eu=class extends N.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=I.RouterController.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),I.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),N.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):N.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{let{wcPairingExpiry:t}=I.ConnectionController.state;if(e||I.j1.isPairingExpired(t)){if(I.ConnectionController.connectWalletConnect(),this.wallet){let e=I.fz.getWalletImage(this.wallet);e&&I.MO.setConnectedWalletImageUrl(e)}else{let e=I.ConnectorController.state.connectors,t=e.find(e=>"WALLET_CONNECT"===e.type),r=I.fz.getConnectorImage(t);r&&I.MO.setConnectedWalletImageUrl(r)}await I.ConnectionController.state.wcPromise,this.finalizeConnection(),I.IN.close()}}catch(e){I.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),I.ConnectionController.setWcError(!0),I.j1.isAllowedRetry(this.lastRetry)&&(I.SnackController.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){let{wcLinking:e,recentWallet:t}=I.ConnectionController.state;e&&I.MO.setWalletConnectDeepLink(e),t&&I.MO.setWeb3ModalRecent(t),I.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:r,injected:i,rdns:n}=this.wallet,o=i?.map(({injected_id:e})=>e).filter(Boolean),a=n?[n]:o??[],s=a.length,l=I.ConnectionController.checkInstalled(a),c=s&&l,u=t&&!I.j1.isMobile();c&&this.platforms.push("browser"),e&&this.platforms.push(I.j1.isMobile()?"mobile":"qrcode"),r&&this.platforms.push("web"),u&&this.platforms.push("desktop"),!c&&s&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return N.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return N.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return N.dy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return N.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return N.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return N.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){let e=this.platforms.length>1;return e?N.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};ec([(0,T.SB)()],eu.prototype,"platform",void 0),ec([(0,T.SB)()],eu.prototype,"platforms",void 0),eu=ec([(0,R.customElement)("w3m-connecting-wc-view")],eu);let eh=class extends N.oi{constructor(){super(...arguments),this.wallet=I.RouterController.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return N.dy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?N.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?N.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?N.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?N.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&I.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&I.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&I.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&I.j1.openHref(this.wallet.homepage,"_blank")}};eh=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,R.customElement)("w3m-downloads-view")],eh);let ed=class extends N.oi{render(){return N.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{I.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:e,featured:t}=I.ApiController.state,{customWallets:r}=I.OptionsController.state,i=[...t,...r??[],...e].slice(0,4);return i.map(e=>N.dy`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${j(I.fz.getWalletImage(e))}
          @click=${()=>{I.j1.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};ed=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,R.customElement)("w3m-get-wallet-view")],ed);var ef=N.iv`
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
`,ep=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eg=class extends N.oi{constructor(){super(),this.network=I.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=I.NetworkController.state.caipNetwork,this.unsubscribe.push(I.NetworkController.subscribeKey("caipNetwork",e=>{e?.id!==this.currentNetwork?.id&&I.RouterController.goBack()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error("w3m-network-switch-view: No network provided");this.onShowRetry();let e=this.error?"Switch declined":"Approve in wallet",t=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return N.dy`
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
            imageSrc=${j(I.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:N.dy`<wui-loading-hexagon></wui-loading-hexagon>`}

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
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await I.NetworkController.switchActiveNetwork(this.network),I.RouterController.goBack())}catch{this.error=!0}}};eg.styles=ef,ep([(0,T.SB)()],eg.prototype,"showRetry",void 0),ep([(0,T.SB)()],eg.prototype,"error",void 0),ep([(0,T.SB)()],eg.prototype,"currentNetwork",void 0),eg=ep([(0,R.customElement)("w3m-network-switch-view")],eg);var ew=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eb=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.caipNetwork=I.NetworkController.state.caipNetwork,this.unsubscribe.push(I.NetworkController.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return N.dy`
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
    `}onNetworkHelp(){I.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),I.RouterController.push("WhatIsANetwork")}networksTemplate(){let{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:r}=I.NetworkController.state;return e?.length&&t?.sort((t,r)=>e.indexOf(r.id)-e.indexOf(t.id)),t?.map(t=>N.dy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===t.id}
          imageSrc=${j(I.fz.getNetworkImage(t))}
          type="network"
          name=${t.name??t.id}
          @click=${()=>this.onSwitchNetwork(t)}
          .disabled=${!r&&!e?.includes(t.id)}
        ></wui-card-select>
      `)}async onSwitchNetwork(e){let{isConnected:t}=I.AccountController.state,{approvedCaipNetworkIds:r,supportsAllNetworks:i,caipNetwork:n}=I.NetworkController.state;t&&n?.id!==e.id?r?.includes(e.id)?await I.NetworkController.switchActiveNetwork(e):i&&I.RouterController.push("SwitchNetwork",{network:e}):t||(I.NetworkController.setCaipNetwork(e),I.RouterController.push("Connect"))}};ew([(0,T.SB)()],eb.prototype,"caipNetwork",void 0),eb=ew([(0,R.customElement)("w3m-networks-view")],eb);let em=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],ey=class extends N.oi{render(){return N.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${em}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{I.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};ey=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,R.customElement)("w3m-what-is-a-network-view")],ey);let ev=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],ex=class extends N.oi{render(){return N.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${ev}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){I.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),I.RouterController.push("GetWallet")}};ex=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,R.customElement)("w3m-what-is-a-wallet-view")],ex);var eC=N.iv`
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
`,eE=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ek="local-paginator",eS=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!I.ApiController.state.wallets.length,this.wallets=I.ApiController.state.wallets,this.recommended=I.ApiController.state.recommended,this.featured=I.ApiController.state.featured,this.unsubscribe.push(...[I.ApiController.subscribeKey("wallets",e=>this.wallets=e),I.ApiController.subscribeKey("recommended",e=>this.recommended=e),I.ApiController.subscribeKey("featured",e=>this.featured=e)])}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return N.dy`
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
    `}async initialFetch(){let e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await I.ApiController.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>N.dy`
        <wui-card-select-loader type="wallet" id=${j(t)}></wui-card-select-loader>
      `)}walletsTemplate(){let e=[...this.featured,...this.recommended,...this.wallets];return e.map(e=>N.dy`
        <wui-card-select
          imageSrc=${j(I.fz.getWalletImage(e))}
          type="wallet"
          name=${e.name}
          @click=${()=>this.onConnectWallet(e)}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:r,count:i}=I.ApiController.state,n=window.innerWidth<352?3:4,o=e.length+t.length,a=Math.ceil(o/n)*n-o+n;return(a-=e.length?r.length%n:0,0===i||[...r,...e,...t].length<i)?this.shimmerTemplate(a,ek):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${ek}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.initial){let{page:e,count:t,wallets:r}=I.ApiController.state;r.length<t&&I.ApiController.fetchWallets({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){let{connectors:t}=I.ConnectorController.state,r=t.find(({explorerId:t})=>t===e.id);r?I.RouterController.push("ConnectingExternal",{connector:r}):I.RouterController.push("ConnectingWalletConnect",{wallet:e})}};eS.styles=eC,eE([(0,T.SB)()],eS.prototype,"initial",void 0),eE([(0,T.SB)()],eS.prototype,"wallets",void 0),eE([(0,T.SB)()],eS.prototype,"recommended",void 0),eE([(0,T.SB)()],eS.prototype,"featured",void 0),eS=eE([(0,R.customElement)("w3m-all-wallets-list")],eS);var e_=N.iv`
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
`,eA=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let e$=class extends N.oi{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?N.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await I.ApiController.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){let{search:e}=I.ApiController.state;return e.length?N.dy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${e.map(e=>N.dy`
            <wui-card-select
              imageSrc=${j(I.fz.getWalletImage(e))}
              type="wallet"
              name=${e.name}
              @click=${()=>this.onConnectWallet(e)}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:N.dy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconcolor="fg-200"
            backgroundcolor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){let{connectors:t}=I.ConnectorController.state,r=t.find(({explorerId:t})=>t===e.id);r?I.RouterController.push("ConnectingExternal",{connector:r}):I.RouterController.push("ConnectingWalletConnect",{wallet:e})}};e$.styles=e_,eA([(0,T.SB)()],e$.prototype,"loading",void 0),eA([(0,T.Cb)()],e$.prototype,"query",void 0),e$=eA([(0,R.customElement)("w3m-all-wallets-search")],e$);var eP=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eO=class extends N.oi{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(I.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return N.dy`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};eP([(0,T.Cb)({type:Array})],eO.prototype,"platforms",void 0),eP([(0,T.Cb)()],eO.prototype,"onSelectPlatfrom",void 0),eP([(0,T.SB)()],eO.prototype,"buffering",void 0),eO=eP([(0,R.customElement)("w3m-connecting-header")],eO);let eD=class extends eo{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),I.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=I.ConnectorController.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns),r=e.find(e=>"INJECTED"===e.type);t?await I.ConnectionController.connectExternal(t):r&&await I.ConnectionController.connectExternal(r),I.IN.close(),I.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){I.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};eD=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,R.customElement)("w3m-connecting-wc-browser")],eD);let eI=class extends eo{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),I.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{this.onConnect?.()},200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:r,href:i}=I.j1.formatNativeUrl(e,this.uri);I.ConnectionController.setWcLinking({name:t,href:i}),I.ConnectionController.setRecentWallet(this.wallet),I.j1.openHref(r,"_self")}catch{this.error=!0}}};eI=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,R.customElement)("w3m-connecting-wc-desktop")],eI);let eR=class extends eo{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),I.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:e,name:t}=this.wallet,{redirect:r,href:i}=I.j1.formatNativeUrl(e,this.uri);I.ConnectionController.setWcLinking({name:t,href:i}),I.ConnectionController.setRecentWallet(this.wallet),I.j1.openHref(r,"_self")}catch{this.error=!0}}onBuffering(){let e=I.j1.isIos();document?.visibilityState==="visible"&&!this.error&&e&&(I.ConnectionController.setBuffering(!0),setTimeout(()=>{I.ConnectionController.setBuffering(!1)},5e3))}};eR=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,R.customElement)("w3m-connecting-wc-mobile")],eR);var eN=N.iv`
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
`;let eT=class extends eo{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),I.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),N.dy`
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
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return I.ConnectionController.setWcLinking(void 0),I.ConnectionController.setRecentWallet(this.wallet),N.dy`<wui-qr-code
      size=${e}
      theme=${I.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${j(I.fz.getWalletImage(this.wallet))}
      alt=${j(t)}
    ></wui-qr-code>`}};eT.styles=eN,eT=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,R.customElement)("w3m-connecting-wc-qrcode")],eT);var eM=N.iv`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let ej=class extends N.oi{constructor(){super(...arguments),this.dappImageUrl=I.OptionsController.state.metadata?.icons,this.walletImageUrl=I.MO.getConnectedWalletImageUrl()}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return N.dy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};ej.styles=eM,ej=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,R.customElement)("w3m-connecting-siwe")],ej);let eU=class extends N.oi{constructor(){if(super(),this.wallet=I.RouterController.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");I.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return N.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${j(I.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};eU=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,R.customElement)("w3m-connecting-wc-unsupported")],eU);let eB=class extends eo{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",I.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:r,href:i}=I.j1.formatUniversalUrl(e,this.uri);I.ConnectionController.setWcLinking({name:t,href:i}),I.ConnectionController.setRecentWallet(this.wallet),I.j1.openHref(r,"_blank")}catch{this.error=!0}}};eB=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,R.customElement)("w3m-connecting-wc-web")],eB);var eL=N.iv`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`,eF=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};function ez(){let e=I.RouterController.state.data?.connector?.name,t=I.RouterController.state.data?.wallet?.name,r=I.RouterController.state.data?.network?.name,i=t??e;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:i??"Connect Wallet",ConnectingWalletConnect:i??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:r??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a Wallet",Downloads:i?`Get ${i}`:"Downloads"}}let eW=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.heading=ez()[I.RouterController.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(I.RouterController.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),I.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return N.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${I.IN.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){I.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),I.RouterController.push("WhatIsAWallet")}titleTemplate(){return N.dy`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){let{view:e}=I.RouterController.state;return this.showBack?N.dy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${I.RouterController.goBack}
      ></wui-icon-link>`:N.dy`<wui-icon-link
      data-hidden=${"Connect"!==e}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?N.dy`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){let t=this.shadowRoot?.querySelector("wui-text");if(t){let r=ez()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=r,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){let{history:e}=I.RouterController.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};eW.styles=[eL],eF([(0,T.SB)()],eW.prototype,"heading",void 0),eF([(0,T.SB)()],eW.prototype,"buffering",void 0),eF([(0,T.SB)()],eW.prototype,"showBack",void 0),eW=eF([(0,R.customElement)("w3m-header")],eW);var eH=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eq=class extends N.oi{constructor(){super(...arguments),this.data=[]}render(){return N.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>N.dy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(e=>N.dy`<wui-visual name=${e}></wui-visual>`)}
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
    `}};eH([(0,T.Cb)({type:Array})],eq.prototype,"data",void 0),eq=eH([(0,R.customElement)("w3m-help-widget")],eq);var eG=N.iv`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`;let eV=class extends N.oi{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=I.OptionsController.state;return e||t?N.dy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=I.OptionsController.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=I.OptionsController.state;return e?N.dy`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=I.OptionsController.state;return e?N.dy`<a href=${e}>Privacy Policy</a>`:null}};eV.styles=[eG],eV=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,R.customElement)("w3m-legal-footer")],eV);var eZ=N.iv`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,eK=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eQ=class extends N.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:e,app_store:t,play_store:r,chrome_store:i,homepage:n}=this.wallet,o=I.j1.isMobile(),a=I.j1.isIos(),s=I.j1.isAndroid(),l=[t,r,n,i].filter(Boolean).length>1,c=R.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return l&&!o?N.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${()=>I.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&n?N.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&a?N.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&s?N.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&I.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&I.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&I.j1.openHref(this.wallet.homepage,"_blank")}};eQ.styles=[eZ],eK([(0,T.Cb)({type:Object})],eQ.prototype,"wallet",void 0),eQ=eK([(0,R.customElement)("w3m-mobile-download-links")],eQ);var eX=N.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`,eY=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eJ={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}},e0=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=I.SnackController.state.open,this.unsubscribe.push(I.SnackController.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=I.SnackController.state,r=eJ[t];return N.dy`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>I.SnackController.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};e0.styles=eX,eY([(0,T.SB)()],e0.prototype,"open",void 0),e0=eY([(0,R.customElement)("w3m-snackbar")],e0);let e1=!1;class e2{constructor(e){this.initPromise=void 0,this.setIsConnected=e=>{I.AccountController.setIsConnected(e)},this.setCaipAddress=e=>{I.AccountController.setCaipAddress(e)},this.setBalance=(e,t)=>{I.AccountController.setBalance(e,t)},this.setProfileName=e=>{I.AccountController.setProfileName(e)},this.setProfileImage=e=>{I.AccountController.setProfileImage(e)},this.resetAccount=()=>{I.AccountController.resetAccount()},this.setCaipNetwork=e=>{I.NetworkController.setCaipNetwork(e)},this.getCaipNetwork=()=>I.NetworkController.state.caipNetwork,this.setRequestedCaipNetworks=e=>{I.NetworkController.setRequestedCaipNetworks(e)},this.getApprovedCaipNetworksData=()=>I.NetworkController.getApprovedCaipNetworksData(),this.resetNetwork=()=>{I.NetworkController.resetNetwork()},this.setConnectors=e=>{I.ConnectorController.setConnectors(e)},this.addConnector=e=>{I.ConnectorController.addConnector(e)},this.getConnectors=()=>I.ConnectorController.getConnectors(),this.resetWcConnection=()=>{I.ConnectionController.resetWcConnection()},this.fetchIdentity=e=>I.Lr.fetchIdentity(e),this.setAddressExplorerUrl=e=>{I.AccountController.setAddressExplorerUrl(e)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),I.IN.open(e)}async close(){await this.initOrContinue(),I.IN.close()}getThemeMode(){return I.ThemeController.state.themeMode}getThemeVariables(){return I.ThemeController.state.themeVariables}setThemeMode(e){I.ThemeController.setThemeMode(e),(0,R.setColorTheme)(I.ThemeController.state.themeMode)}setThemeVariables(e){I.ThemeController.setThemeVariables(e),(0,R.setThemeVariables)(I.ThemeController.state.themeVariables)}subscribeTheme(e){return I.ThemeController.subscribe(e)}getState(){return{...I.Ie.state}}subscribeState(e){return I.Ie.subscribe(e)}getEvent(){return{...I.Xs.state}}subscribeEvents(e){return I.Xs.subscribe(e)}initControllers(e){I.NetworkController.setClient(e.networkControllerClient),I.NetworkController.setDefaultCaipNetwork(e.defaultChain),I.OptionsController.setProjectId(e.projectId),I.OptionsController.setIncludeWalletIds(e.includeWalletIds),I.OptionsController.setExcludeWalletIds(e.excludeWalletIds),I.OptionsController.setFeaturedWalletIds(e.featuredWalletIds),I.OptionsController.setTokens(e.tokens),I.OptionsController.setTermsConditionsUrl(e.termsConditionsUrl),I.OptionsController.setPrivacyPolicyUrl(e.privacyPolicyUrl),I.OptionsController.setCustomWallets(e.customWallets),I.OptionsController.setEnableAnalytics(e.enableAnalytics),I.OptionsController.setSdkVersion(e._sdkVersion),I.ConnectionController.setClient(e.connectionControllerClient),e.metadata&&I.OptionsController.setMetadata(e.metadata),e.themeMode&&I.ThemeController.setThemeMode(e.themeMode),e.themeVariables&&I.ThemeController.setThemeVariables(e.themeVariables)}async initOrContinue(){return!this.initPromise&&!e1&&I.j1.isClient()&&(e1=!0,this.initPromise=new Promise(async e=>{await Promise.all([Promise.resolve().then(r.bind(r,66265)),Promise.resolve().then(r.bind(r,9448))]);let t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),e()})),this.initPromise}}let e5={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"3.2.0-alpha.1"},e3={ConnectorExplorerIds:{[e5.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[e5.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[e5.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},ConnectorImageIds:{[e5.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[e5.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[e5.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[e5.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[e5.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[e5.INJECTED_CONNECTOR_ID]:"Browser Wallet",[e5.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[e5.COINBASE_CONNECTOR_ID]:"Coinbase",[e5.LEDGER_CONNECTOR_ID]:"Ledger",[e5.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[e5.INJECTED_CONNECTOR_ID]:"INJECTED",[e5.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[e5.EIP6963_CONNECTOR_ID]:"ANNOUNCED"}},e6={caipNetworkIdToNumber:e=>e?Number(e.split(":")[1]):void 0,getCaipTokens(e){if(!e)return;let t={};return Object.entries(e).forEach(([e,r])=>{t[`${e5.EIP155}:${e}`]=r}),t}};class e4 extends e2{constructor(e){let{wagmiConfig:t,chains:r,defaultChain:i,tokens:n,_sdkVersion:o,...a}=e;if(!t)throw Error("web3modal:constructor - wagmiConfig is undefined");if(!a.projectId)throw Error("web3modal:constructor - projectId is undefined");if(!t.connectors.find(e=>e.id===e5.WALLET_CONNECT_CONNECTOR_ID))throw Error("web3modal:constructor - WalletConnectConnector is required");let s={connectWalletConnect:async e=>{let r=t.connectors.find(e=>e.id===e5.WALLET_CONNECT_CONNECTOR_ID);if(!r)throw Error("connectionControllerClient:getWalletConnectUri - connector is undefined");r.on("message",t=>{"display_uri"===t.type&&(e(t.data),r.removeAllListeners())});let i=e6.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await (0,O.$j)({connector:r,chainId:i})},connectExternal:async({id:e,provider:r,info:i})=>{let n=t.connectors.find(t=>t.id===e);if(!n)throw Error("connectionControllerClient:connectExternal - connector is undefined");r&&i&&n.id===e5.EIP6963_CONNECTOR_ID&&n.setEip6963Wallet?.({provider:r,info:i});let o=e6.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await (0,O.$j)({connector:n,chainId:o})},checkInstalled:e=>{let t=this.getConnectors().filter(e=>"ANNOUNCED"===e.type),r=this.getConnectors().find(e=>"INJECTED"===e.type);if(!e)return!!window.ethereum;if(t.length){let r=e.some(e=>t.some(t=>t.info?.rdns===e));if(r)return!0}return!!r&&!!window?.ethereum&&e.some(e=>!!window.ethereum?.[String(e)])},disconnect:O.zP};super({networkControllerClient:{switchCaipNetwork:async e=>{let t=e6.caipNetworkIdToNumber(e?.id);t&&await (0,O.If)({chainId:t})},async getApprovedCaipNetworksData(){let e=localStorage.getItem("wagmi.wallet");if(e?.includes(e5.WALLET_CONNECT_CONNECTOR_ID)){let e=t.connectors.find(e=>e.id===e5.WALLET_CONNECT_CONNECTOR_ID);if(!e)throw Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");let r=await e.getProvider(),i=r.signer?.session?.namespaces,n=i?.[e5.EIP155]?.methods,o=i?.[e5.EIP155]?.chains;return{supportsAllNetworks:n?.includes(e5.ADD_CHAIN_METHOD),approvedCaipNetworkIds:o}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},connectionControllerClient:s,defaultChain:function(e){if(e)return{id:`${e5.EIP155}:${e.id}`,name:e.name,imageId:e3.EIP155NetworkImageIds[e.id]}}(i),tokens:e6.getCaipTokens(n),_sdkVersion:o??`html-wagmi-${e5.VERSION}`,...a}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.syncRequestedNetworks(r),this.syncConnectors(t),this.listenConnectors(t),(0,O.uH)(()=>this.syncAccount()),(0,O.QC)(()=>this.syncNetwork())}getState(){let e=super.getState();return{...e,selectedNetworkId:e6.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(t=>e({...t,selectedNetworkId:e6.caipNetworkIdToNumber(t.selectedNetworkId)}))}syncRequestedNetworks(e){let t=e?.map(e=>({id:`${e5.EIP155}:${e.id}`,name:e.name,imageId:e3.EIP155NetworkImageIds[e.id],imageUrl:this.options?.chainImages?.[e.id]}));this.setRequestedCaipNetworks(t??[])}async syncAccount(){let{address:e,isConnected:t}=(0,O.D0)(),{chain:r}=(0,O.Hy)();if(this.resetAccount(),t&&e&&r){let i=`${e5.EIP155}:${r.id}:${e}`;this.setIsConnected(t),this.setCaipAddress(i),await Promise.all([this.syncProfile(e),this.syncBalance(e,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!t&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){let{address:e,isConnected:t}=(0,O.D0)(),{chain:r}=(0,O.Hy)();if(r){let i=String(r.id),n=`${e5.EIP155}:${i}`;if(this.setCaipNetwork({id:n,name:r.name,imageId:e3.EIP155NetworkImageIds[r.id],imageUrl:this.options?.chainImages?.[r.id]}),t&&e){let t=`${e5.EIP155}:${r.id}:${e}`;if(this.setCaipAddress(t),r.blockExplorers?.default?.url){let t=`${r.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(t)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&await this.syncBalance(e,r)}}}async syncProfile(e){try{let{name:t,avatar:r}=await this.fetchIdentity({caipChainId:`${e5.EIP155}:${D.R.id}`,address:e});this.setProfileName(t),this.setProfileImage(r)}catch{let t=await (0,O.Lk)({address:e,chainId:D.R.id});if(t){this.setProfileName(t);let e=await (0,O.w6)({name:t,chainId:D.R.id});e&&this.setProfileImage(e)}}}async syncBalance(e,t){let r=await (0,O.EG)({address:e,chainId:t.id,token:this.options?.tokens?.[t.id]?.address});this.setBalance(r.formatted,r.symbol)}syncConnectors(e){let t=[];e.connectors.forEach(({id:e,name:r})=>{e!==e5.EIP6963_CONNECTOR_ID&&t.push({id:e,explorerId:e3.ConnectorExplorerIds[e],imageId:e3.ConnectorImageIds[e],imageUrl:this.options?.connectorImages?.[e],name:e3.ConnectorNamesMap[e]??r,type:e3.ConnectorTypesMap[e]??"EXTERNAL"})}),this.setConnectors(t)}eip6963EventHandler(e,t){if(t.detail){let{info:r,provider:i}=t.detail,n=this.getConnectors(),o=n.find(e=>e.name===r.name);o||(this.addConnector({id:e5.EIP6963_CONNECTOR_ID,type:"ANNOUNCED",imageUrl:r.icon??this.options?.connectorImages?.[e5.EIP6963_CONNECTOR_ID],name:r.name,provider:i,info:r}),e.isAuthorized({info:r,provider:i}))}}listenConnectors(e){let t=e.connectors.find(e=>e.id===e5.EIP6963_CONNECTOR_ID);if("undefined"!=typeof window&&t){let e=this.eip6963EventHandler.bind(this,t);window.addEventListener(e5.EIP6963_ANNOUNCE_EVENT,e),window.dispatchEvent(new Event(e5.EIP6963_REQUEST_EVENT))}}}var e8=r(92998),e9=function(e,t,r,i,n){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!n)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?n.call(e,r):n?n.value=r:t.set(e,r),r},e7=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};let te="connectedRdns";class tt extends e8._{constructor(e){super({chains:e.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",a.set(this,void 0),s.set(this,void 0),e9(this,a,this.options.getProvider(),"f")}async connect(e){let t=await super.connect(e);return e7(this,s,"f")&&this.storage?.setItem(te,e7(this,s,"f").info.rdns),t}async disconnect(){await super.disconnect(),this.storage?.removeItem(te),e9(this,s,void 0,"f")}async isAuthorized(e){let t=this.storage?.getItem(te);if(t){if(!e||t!==e.info.rdns)return!0;e9(this,s,e,"f")}return super.isAuthorized()}async getProvider(){return Promise.resolve(e7(this,s,"f")?.provider??e7(this,a,"f"))}setEip6963Wallet(e){e9(this,s,e,"f")}}a=new WeakMap,s=new WeakMap;var tr=r(67133);"undefined"==typeof window||(window.Buffer||(window.Buffer=tr.Buffer),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}));var ti=r(56926),tn=r(38026),to=r(40106),ta=r(53404),ts=r(39803),tl=r(48519),tc=r(71061),tu=r(39730),th=r(21693),td=class extends ta.wR{constructor({chains:e,options:t}){super({chains:e,options:{reloadOnDisconnect:!1,...t}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,(0,ta.Ko)(this,l,void 0),(0,ta.Ko)(this,c,void 0),this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,ts.K)(e[0])})},this.onChainChanged=e=>{let t=(0,to.J)(e),r=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:r}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:e}={}){try{let t=await this.getProvider();t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});let r=await t.enable(),i=(0,ts.K)(r[0]),n=await this.getChainId(),o=this.isChainUnsupported(n);if(e&&n!==e){let t=await this.switchChain(e);n=t.id,o=this.isChainUnsupported(n)}return{account:i,chain:{id:n,unsupported:o}}}catch(e){if(/(user closed modal|accounts received is empty)/i.test(e.message))throw new tl.ab(e);throw e}}async disconnect(){if(!(0,ta.ac)(this,c))return;let e=await this.getProvider();e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),e.disconnect(),e.close()}async getAccount(){let e=await this.getProvider();return(0,ts.K)((await e.request({method:"eth_accounts"}))[0])}async getChainId(){let e=await this.getProvider(),t=(0,to.J)(e.chainId);return t}async getProvider(){if(!(0,ta.ac)(this,c)){let e=(await Promise.all([r.e(775),r.e(246)]).then(r.t.bind(r,64775,19))).default;"function"!=typeof e&&"function"==typeof e.default&&(e=e.default),(0,ta.qx)(this,l,new e(this.options));let t=ta.ac(this,l).walletExtension?.getChainId(),i=this.chains.find(e=>this.options.chainId?e.id===this.options.chainId:e.id===t)||this.chains[0],n=this.options.chainId||i?.id,o=this.options.jsonRpcUrl||i?.rpcUrls.default.http[0];(0,ta.qx)(this,c,(0,ta.ac)(this,l).makeWeb3Provider(o,n))}return(0,ta.ac)(this,c)}async getWalletClient({chainId:e}={}){let[t,r]=await Promise.all([this.getProvider(),this.getAccount()]),i=this.chains.find(t=>t.id===e);if(!t)throw Error("provider is required.");return(0,tc.K)({account:r,chain:i,transport:(0,tu.P)(t)})}async isAuthorized(){try{let e=await this.getAccount();return!!e}catch{return!1}}async switchChain(e){let t=await this.getProvider(),r=(0,th.eC)(e);try{return await t.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),this.chains.find(t=>t.id===e)??{id:e,name:`Chain ${r}`,network:`${r}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(n){let i=this.chains.find(t=>t.id===e);if(!i)throw new tn.B({chainId:e,connectorId:this.id});if(4902===n.code)try{return await t.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:i.name,nativeCurrency:i.nativeCurrency,rpcUrls:[i.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(i)}]}),i}catch(e){throw new tl.ab(e)}throw new tl.x3(n)}}async watchAsset({address:e,decimals:t=18,image:r,symbol:i}){let n=await this.getProvider();return n.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:r,symbol:i}}})}};l=new WeakMap,c=new WeakMap;var tf=r(75409),tp="eip155",tg="requestedChains",tw="wallet_addEthereumChain",tb=class extends ta.wR{constructor(e){super({...e,options:{isNewChainsStale:!0,...e.options}}),(0,ta.Ko)(this,d),(0,ta.Ko)(this,p),(0,ta.Ko)(this,w),(0,ta.Ko)(this,m),(0,ta.Ko)(this,v),(0,ta.Ko)(this,C),(0,ta.Ko)(this,k),(0,ta.Ko)(this,_),(0,ta.Ko)(this,$),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,(0,ta.Ko)(this,u,void 0),(0,ta.Ko)(this,h,void 0),this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,ts.K)(e[0])})},this.onChainChanged=e=>{let t=Number(e),r=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:r}})},this.onDisconnect=()=>{(0,ta.U9)(this,C,E).call(this,[]),this.emit("disconnect")},this.onDisplayUri=e=>{this.emit("message",{type:"display_uri",data:e})},this.onConnect=()=>{this.emit("connect",{})},(0,ta.U9)(this,d,f).call(this)}async connect({chainId:e,pairingTopic:t}={}){try{let r=e;if(!r){let e=this.storage?.getItem("store"),t=e?.state?.data?.chain?.id;r=t&&!this.isChainUnsupported(t)?t:this.chains[0]?.id}if(!r)throw Error("No chains found on connector.");let i=await this.getProvider();(0,ta.U9)(this,m,y).call(this);let n=(0,ta.U9)(this,w,b).call(this);if(i.session&&n&&await i.disconnect(),!i.session||n){let e=this.chains.filter(e=>e.id!==r).map(e=>e.id);this.emit("message",{type:"connecting"}),await i.connect({pairingTopic:t,chains:[r],optionalChains:e.length?e:void 0}),(0,ta.U9)(this,C,E).call(this,this.chains.map(({id:e})=>e))}let o=await i.enable(),a=(0,ts.K)(o[0]),s=await this.getChainId(),l=this.isChainUnsupported(s);return{account:a,chain:{id:s,unsupported:l}}}catch(e){if(/user rejected/i.test(e?.message))throw new tl.ab(e);throw e}}async disconnect(){let e=await this.getProvider();try{await e.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{(0,ta.U9)(this,v,x).call(this),(0,ta.U9)(this,C,E).call(this,[])}}async getAccount(){let{accounts:e}=await this.getProvider();return(0,ts.K)(e[0])}async getChainId(){let{chainId:e}=await this.getProvider();return e}async getProvider({chainId:e}={}){return(0,ta.ac)(this,u)||await (0,ta.U9)(this,d,f).call(this),e&&await this.switchChain(e),(0,ta.ac)(this,u)}async getWalletClient({chainId:e}={}){let[t,r]=await Promise.all([this.getProvider({chainId:e}),this.getAccount()]),i=this.chains.find(t=>t.id===e);if(!t)throw Error("provider is required.");return(0,tc.K)({account:r,chain:i,transport:(0,tu.P)(t)})}async isAuthorized(){try{let[e,t]=await Promise.all([this.getAccount(),this.getProvider()]),r=(0,ta.U9)(this,w,b).call(this);if(!e)return!1;if(r&&t.session){try{await t.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(e){let t=this.chains.find(t=>t.id===e);if(!t)throw new tl.x3(Error("chain not found on connector."));try{let r=await this.getProvider(),i=(0,ta.U9)(this,_,A).call(this),n=(0,ta.U9)(this,$,P).call(this),o=i.includes(e);if(!o&&n.includes(tw)){await r.request({method:tw,params:[{chainId:(0,th.eC)(t.id),blockExplorerUrls:[t.blockExplorers?.default?.url],chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[...t.rpcUrls.default.http]}]});let i=(0,ta.U9)(this,k,S).call(this);i.push(e),(0,ta.U9)(this,C,E).call(this,i)}return await r.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,th.eC)(e)}]}),t}catch(t){let e="string"==typeof t?t:t?.message;if(/user rejected request/i.test(e))throw new tl.ab(t);throw new tl.x3(t)}}};u=new WeakMap,h=new WeakMap,d=new WeakSet,f=async function(){return(0,ta.ac)(this,h)||"undefined"==typeof window||(0,ta.qx)(this,h,(0,ta.U9)(this,p,g).call(this)),(0,ta.ac)(this,h)},p=new WeakSet,g=async function(){let{EthereumProvider:e,OPTIONAL_EVENTS:t,OPTIONAL_METHODS:i}=await r.e(797).then(r.bind(r,78797)),[n,...o]=this.chains.map(({id:e})=>e);if(n){let{projectId:r,showQrModal:a=!0,qrModalOptions:s,metadata:l,relayUrl:c}=this.options;(0,ta.qx)(this,u,await e.init({showQrModal:a,qrModalOptions:s,projectId:r,optionalMethods:i,optionalEvents:t,chains:[n],optionalChains:o.length?o:void 0,rpcMap:Object.fromEntries(this.chains.map(e=>[e.id,e.rpcUrls.default.http[0]])),metadata:l,relayUrl:c}))}},w=new WeakSet,b=function(){let e=(0,ta.U9)(this,$,P).call(this);if(e.includes(tw)||!this.options.isNewChainsStale)return!1;let t=(0,ta.U9)(this,k,S).call(this),r=this.chains.map(({id:e})=>e),i=(0,ta.U9)(this,_,A).call(this);return(!i.length||!!i.some(e=>r.includes(e)))&&!r.every(e=>t.includes(e))},m=new WeakSet,y=function(){(0,ta.ac)(this,u)&&((0,ta.U9)(this,v,x).call(this),(0,ta.ac)(this,u).on("accountsChanged",this.onAccountsChanged),(0,ta.ac)(this,u).on("chainChanged",this.onChainChanged),(0,ta.ac)(this,u).on("disconnect",this.onDisconnect),(0,ta.ac)(this,u).on("session_delete",this.onDisconnect),(0,ta.ac)(this,u).on("display_uri",this.onDisplayUri),(0,ta.ac)(this,u).on("connect",this.onConnect))},v=new WeakSet,x=function(){(0,ta.ac)(this,u)&&((0,ta.ac)(this,u).removeListener("accountsChanged",this.onAccountsChanged),(0,ta.ac)(this,u).removeListener("chainChanged",this.onChainChanged),(0,ta.ac)(this,u).removeListener("disconnect",this.onDisconnect),(0,ta.ac)(this,u).removeListener("session_delete",this.onDisconnect),(0,ta.ac)(this,u).removeListener("display_uri",this.onDisplayUri),(0,ta.ac)(this,u).removeListener("connect",this.onConnect))},C=new WeakSet,E=function(e){this.storage?.setItem(tg,e)},k=new WeakSet,S=function(){return this.storage?.getItem(tg)??[]},_=new WeakSet,A=function(){if(!(0,ta.ac)(this,u))return[];let e=ta.ac(this,u).session?.namespaces;if(!e)return[];let t=(0,tf.fK)(e),r=t[tp]?.chains?.map(e=>parseInt(e.split(":")[1]||""));return r??[]},$=new WeakSet,P=function(){if(!(0,ta.ac)(this,u))return[];let e=ta.ac(this,u).session?.namespaces;if(!e)return[];let t=(0,tf.fK)(e),r=t[tp]?.methods;return r??[]};let tm=I.j1.getBlockchainApiUrl();function ty({projectId:e,chains:t,metadata:r}){let{publicClient:i}=(0,O.QB)(t,[function({projectId:e}){return function(t){if(![1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280].includes(t.id))return null;let r=`${tm}/v1/?chainId=${e5.EIP155}:${t.id}&projectId=${e}`;return{chain:{...t,rpcUrls:{...t.rpcUrls,default:{http:[r]}}},rpcUrls:{http:[r]}}}}({projectId:e}),function(e){return e.rpcUrls.public.http[0]?{chain:e,rpcUrls:e.rpcUrls.public}:null}]);return(0,ti._g)({autoConnect:!0,connectors:[new tb({chains:t,options:{projectId:e,showQrModal:!1,metadata:r}}),new tt({chains:t}),new e8._({chains:t,options:{shimDisconnect:!0}}),new td({chains:t,options:{appName:r?.name??"Unknown"}})],publicClient:i})}function tv(e){return!n&&(i=n=new e4({...e,_sdkVersion:`react-wagmi-${e5.VERSION}`})),n}},50741:function(e,t,r){"use strict";r.d(t,{E:function(){return n}});var i=r(7541);function n(e=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?(0,i.P)(globalThis.Buffer.allocUnsafe(e)):new Uint8Array(e)}},72281:function(e,t,r){"use strict";r.d(t,{z:function(){return o}});var i=r(50741),n=r(7541);function o(e,t){t||(t=e.reduce((e,t)=>e+t.length,0));let r=(0,i.E)(t),o=0;for(let t of e)r.set(t,o),o+=t.length;return(0,n.P)(r)}},34901:function(e,t,r){"use strict";r.d(t,{m:function(){return o}});var i=r(85418),n=r(7541);function o(e,t="utf8"){let r=i.Z[t];if(!r)throw Error(`Unsupported encoding "${t}"`);return("utf8"===t||"utf-8"===t)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?(0,n.P)(globalThis.Buffer.from(e,"utf-8")):r.decoder.decode(`${r.prefix}${e}`)}},71188:function(e,t,r){"use strict";r.d(t,{BB:function(){return o.B},mL:function(){return n.m},zo:function(){return i.z}});var i=r(72281),n=r(34901),o=r(21361)},21361:function(e,t,r){"use strict";r.d(t,{B:function(){return n}});var i=r(85418);function n(e,t="utf8"){let r=i.Z[t];if(!r)throw Error(`Unsupported encoding "${t}"`);return("utf8"===t||"utf-8"===t)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?globalThis.Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("utf8"):r.encoder.encode(e).substring(1)}},7541:function(e,t,r){"use strict";function i(e){return null!=globalThis.Buffer?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e}r.d(t,{P:function(){return i}})},85418:function(e,t,r){"use strict";r.d(t,{Z:function(){return eK}});var i={};r.r(i),r.d(i,{identity:function(){return I}});var n={};r.r(n),r.d(n,{base2:function(){return R}});var o={};r.r(o),r.d(o,{base8:function(){return N}});var a={};r.r(a),r.d(a,{base10:function(){return T}});var s={};r.r(s),r.d(s,{base16:function(){return M},base16upper:function(){return j}});var l={};r.r(l),r.d(l,{base32:function(){return U},base32hex:function(){return z},base32hexpad:function(){return H},base32hexpadupper:function(){return q},base32hexupper:function(){return W},base32pad:function(){return L},base32padupper:function(){return F},base32upper:function(){return B},base32z:function(){return G}});var c={};r.r(c),r.d(c,{base36:function(){return V},base36upper:function(){return Z}});var u={};r.r(u),r.d(u,{base58btc:function(){return K},base58flickr:function(){return Q}});var h={};r.r(h),r.d(h,{base64:function(){return X},base64pad:function(){return Y},base64url:function(){return J},base64urlpad:function(){return ee}});var d={};r.r(d),r.d(d,{base256emoji:function(){return en}});var f={};r.r(f),r.d(f,{sha256:function(){return em},sha512:function(){return ey}});var p={};r.r(p),r.d(p,{identity:function(){return ev}});var g={};r.r(g),r.d(g,{code:function(){return eC},decode:function(){return ek},encode:function(){return eE},name:function(){return ex}});var w={};r.r(w),r.d(w,{code:function(){return e$},decode:function(){return eO},encode:function(){return eP},name:function(){return eA}});var b=function(e,t){if(e.length>=255)throw TypeError("Alphabet too long");for(var r=new Uint8Array(256),i=0;i<r.length;i++)r[i]=255;for(var n=0;n<e.length;n++){var o=e.charAt(n),a=o.charCodeAt(0);if(255!==r[a])throw TypeError(o+" is ambiguous");r[a]=n}var s=e.length,l=e.charAt(0),c=Math.log(s)/Math.log(256),u=Math.log(256)/Math.log(s);function h(e){if("string"!=typeof e)throw TypeError("Expected String");if(0===e.length)return new Uint8Array;var t=0;if(" "!==e[0]){for(var i=0,n=0;e[t]===l;)i++,t++;for(var o=(e.length-t)*c+1>>>0,a=new Uint8Array(o);e[t];){var u=r[e.charCodeAt(t)];if(255===u)return;for(var h=0,d=o-1;(0!==u||h<n)&&-1!==d;d--,h++)u+=s*a[d]>>>0,a[d]=u%256>>>0,u=u/256>>>0;if(0!==u)throw Error("Non-zero carry");n=h,t++}if(" "!==e[t]){for(var f=o-n;f!==o&&0===a[f];)f++;for(var p=new Uint8Array(i+(o-f)),g=i;f!==o;)p[g++]=a[f++];return p}}}return{encode:function(t){if(t instanceof Uint8Array||(ArrayBuffer.isView(t)?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):Array.isArray(t)&&(t=Uint8Array.from(t))),!(t instanceof Uint8Array))throw TypeError("Expected Uint8Array");if(0===t.length)return"";for(var r=0,i=0,n=0,o=t.length;n!==o&&0===t[n];)n++,r++;for(var a=(o-n)*u+1>>>0,c=new Uint8Array(a);n!==o;){for(var h=t[n],d=0,f=a-1;(0!==h||d<i)&&-1!==f;f--,d++)h+=256*c[f]>>>0,c[f]=h%s>>>0,h=h/s>>>0;if(0!==h)throw Error("Non-zero carry");i=d,n++}for(var p=a-i;p!==a&&0===c[p];)p++;for(var g=l.repeat(r);p<a;++p)g+=e.charAt(c[p]);return g},decodeUnsafe:h,decode:function(e){var r=h(e);if(r)return r;throw Error(`Non-${t} character`)}}};new Uint8Array(0);let m=(e,t)=>{if(e===t)return!0;if(e.byteLength!==t.byteLength)return!1;for(let r=0;r<e.byteLength;r++)if(e[r]!==t[r])return!1;return!0},y=e=>{if(e instanceof Uint8Array&&"Uint8Array"===e.constructor.name)return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw Error("Unknown type, must be binary type")},v=e=>new TextEncoder().encode(e),x=e=>new TextDecoder().decode(e);class C{constructor(e,t,r){this.name=e,this.prefix=t,this.baseEncode=r}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class E{constructor(e,t,r){if(this.name=e,this.prefix=t,void 0===t.codePointAt(0))throw Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=r}decode(e){if("string"==typeof e){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(e){return S(this,e)}}class k{constructor(e){this.decoders=e}or(e){return S(this,e)}decode(e){let t=e[0],r=this.decoders[t];if(r)return r.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}let S=(e,t)=>new k({...e.decoders||{[e.prefix]:e},...t.decoders||{[t.prefix]:t}});class _{constructor(e,t,r,i){this.name=e,this.prefix=t,this.baseEncode=r,this.baseDecode=i,this.encoder=new C(e,t,r),this.decoder=new E(e,t,i)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}let A=({name:e,prefix:t,encode:r,decode:i})=>new _(e,t,r,i),$=({prefix:e,name:t,alphabet:r})=>{let{encode:i,decode:n}=b(r,t);return A({prefix:e,name:t,encode:i,decode:e=>y(n(e))})},P=(e,t,r,i)=>{let n={};for(let e=0;e<t.length;++e)n[t[e]]=e;let o=e.length;for(;"="===e[o-1];)--o;let a=new Uint8Array(o*r/8|0),s=0,l=0,c=0;for(let t=0;t<o;++t){let o=n[e[t]];if(void 0===o)throw SyntaxError(`Non-${i} character`);l=l<<r|o,(s+=r)>=8&&(s-=8,a[c++]=255&l>>s)}if(s>=r||255&l<<8-s)throw SyntaxError("Unexpected end of data");return a},O=(e,t,r)=>{let i="="===t[t.length-1],n=(1<<r)-1,o="",a=0,s=0;for(let i=0;i<e.length;++i)for(s=s<<8|e[i],a+=8;a>r;)a-=r,o+=t[n&s>>a];if(a&&(o+=t[n&s<<r-a]),i)for(;o.length*r&7;)o+="=";return o},D=({name:e,prefix:t,bitsPerChar:r,alphabet:i})=>A({prefix:t,name:e,encode:e=>O(e,i,r),decode:t=>P(t,i,r,e)}),I=A({prefix:"\x00",name:"identity",encode:e=>x(e),decode:e=>v(e)}),R=D({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),N=D({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),T=$({prefix:"9",name:"base10",alphabet:"0123456789"}),M=D({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),j=D({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),U=D({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),B=D({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),L=D({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),F=D({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),z=D({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),W=D({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),H=D({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),q=D({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),G=D({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),V=$({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),Z=$({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),K=$({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),Q=$({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),X=D({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),Y=D({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),J=D({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),ee=D({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),et=Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),er=et.reduce((e,t,r)=>(e[r]=t,e),[]),ei=et.reduce((e,t,r)=>(e[t.codePointAt(0)]=r,e),[]),en=A({prefix:"\uD83D\uDE80",name:"base256emoji",encode:function(e){return e.reduce((e,t)=>e+=er[t],"")},decode:function(e){let t=[];for(let r of e){let e=ei[r.codePointAt(0)];if(void 0===e)throw Error(`Non-base256emoji character: ${r}`);t.push(e)}return new Uint8Array(t)}});function eo(e,t,r){t=t||[];for(var i=r=r||0;e>=2147483648;)t[r++]=255&e|128,e/=128;for(;-128&e;)t[r++]=255&e|128,e>>>=7;return t[r]=0|e,eo.bytes=r-i+1,t}function ea(e,t){var r,i=0,t=t||0,n=0,o=t,a=e.length;do{if(o>=a)throw ea.bytes=0,RangeError("Could not decode varint");r=e[o++],i+=n<28?(127&r)<<n:(127&r)*Math.pow(2,n),n+=7}while(r>=128);return ea.bytes=o-t,i}var es={encode:eo,decode:ea,encodingLength:function(e){return e<128?1:e<16384?2:e<2097152?3:e<268435456?4:e<34359738368?5:e<4398046511104?6:e<562949953421312?7:e<72057594037927940?8:e<0x7fffffffffffffff?9:10}};let el=(e,t=0)=>{let r=es.decode(e,t);return[r,es.decode.bytes]},ec=(e,t,r=0)=>(es.encode(e,t,r),t),eu=e=>es.encodingLength(e),eh=(e,t)=>{let r=t.byteLength,i=eu(e),n=i+eu(r),o=new Uint8Array(n+r);return ec(e,o,0),ec(r,o,i),o.set(t,n),new ep(e,r,t,o)},ed=e=>{let t=y(e),[r,i]=el(t),[n,o]=el(t.subarray(i)),a=t.subarray(i+o);if(a.byteLength!==n)throw Error("Incorrect length");return new ep(r,n,a,t)},ef=(e,t)=>e===t||e.code===t.code&&e.size===t.size&&m(e.bytes,t.bytes);class ep{constructor(e,t,r,i){this.code=e,this.size=t,this.digest=r,this.bytes=i}}let eg=({name:e,code:t,encode:r})=>new ew(e,t,r);class ew{constructor(e,t,r){this.name=e,this.code=t,this.encode=r}digest(e){if(e instanceof Uint8Array){let t=this.encode(e);return t instanceof Uint8Array?eh(this.code,t):t.then(e=>eh(this.code,e))}throw Error("Unknown type, must be binary type")}}let eb=e=>async t=>new Uint8Array(await crypto.subtle.digest(e,t)),em=eg({name:"sha2-256",code:18,encode:eb("SHA-256")}),ey=eg({name:"sha2-512",code:19,encode:eb("SHA-512")}),ev={code:0,name:"identity",encode:y,digest:e=>eh(0,y(e))},ex="raw",eC=85,eE=e=>y(e),ek=e=>y(e),eS=new TextEncoder,e_=new TextDecoder,eA="json",e$=512,eP=e=>eS.encode(JSON.stringify(e)),eO=e=>JSON.parse(e_.decode(e));class eD{constructor(e,t,r,i){this.code=t,this.version=e,this.multihash=r,this.bytes=i,this.byteOffset=i.byteOffset,this.byteLength=i.byteLength,this.asCID=this,this._baseCache=new Map,Object.defineProperties(this,{byteOffset:eL,byteLength:eL,code:eB,version:eB,multihash:eB,bytes:eB,_baseCache:eL,asCID:eL})}toV0(){if(0===this.version)return this;{let{code:e,multihash:t}=this;if(e!==eT)throw Error("Cannot convert a non dag-pb CID to CIDv0");if(t.code!==eM)throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");return eD.createV0(t)}}toV1(){switch(this.version){case 0:{let{code:e,digest:t}=this.multihash,r=eh(e,t);return eD.createV1(this.code,r)}case 1:return this;default:throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)}}equals(e){return e&&this.code===e.code&&this.version===e.version&&ef(this.multihash,e.multihash)}toString(e){let{bytes:t,version:r,_baseCache:i}=this;return 0===r?eR(t,i,e||K.encoder):eN(t,i,e||U.encoder)}toJSON(){return{code:this.code,version:this.version,hash:this.multihash.bytes}}get[Symbol.toStringTag](){return"CID"}[Symbol.for("nodejs.util.inspect.custom")](){return"CID("+this.toString()+")"}static isCID(e){return eF(/^0\.0/,ez),!!(e&&(e[eU]||e.asCID===e))}get toBaseEncodedString(){throw Error("Deprecated, use .toString()")}get codec(){throw Error('"codec" property is deprecated, use integer "code" property instead')}get buffer(){throw Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")}get multibaseName(){throw Error('"multibaseName" property is deprecated')}get prefix(){throw Error('"prefix" property is deprecated')}static asCID(e){if(e instanceof eD)return e;if(null!=e&&e.asCID===e){let{version:t,code:r,multihash:i,bytes:n}=e;return new eD(t,r,i,n||ej(t,r,i.bytes))}if(null==e||!0!==e[eU])return null;{let{version:t,multihash:r,code:i}=e,n=ed(r);return eD.create(t,i,n)}}static create(e,t,r){if("number"!=typeof t)throw Error("String codecs are no longer supported");switch(e){case 0:if(t===eT)return new eD(e,t,r,r.bytes);throw Error(`Version 0 CID must use dag-pb (code: ${eT}) block encoding`);case 1:{let i=ej(e,t,r.bytes);return new eD(e,t,r,i)}default:throw Error("Invalid version")}}static createV0(e){return eD.create(0,eT,e)}static createV1(e,t){return eD.create(1,e,t)}static decode(e){let[t,r]=eD.decodeFirst(e);if(r.length)throw Error("Incorrect length");return t}static decodeFirst(e){let t=eD.inspectBytes(e),r=t.size-t.multihashSize,i=y(e.subarray(r,r+t.multihashSize));if(i.byteLength!==t.multihashSize)throw Error("Incorrect length");let n=i.subarray(t.multihashSize-t.digestSize),o=new ep(t.multihashCode,t.digestSize,n,i),a=0===t.version?eD.createV0(o):eD.createV1(t.codec,o);return[a,e.subarray(t.size)]}static inspectBytes(e){let t=0,r=()=>{let[r,i]=el(e.subarray(t));return t+=i,r},i=r(),n=eT;if(18===i?(i=0,t=0):1===i&&(n=r()),0!==i&&1!==i)throw RangeError(`Invalid CID version ${i}`);let o=t,a=r(),s=r(),l=t+s;return{version:i,codec:n,multihashCode:a,digestSize:s,multihashSize:l-o,size:l}}static parse(e,t){let[r,i]=eI(e,t),n=eD.decode(i);return n._baseCache.set(r,e),n}}let eI=(e,t)=>{switch(e[0]){case"Q":return[K.prefix,(t||K).decode(`${K.prefix}${e}`)];case K.prefix:return[K.prefix,(t||K).decode(e)];case U.prefix:return[U.prefix,(t||U).decode(e)];default:if(null==t)throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");return[e[0],t.decode(e)]}},eR=(e,t,r)=>{let{prefix:i}=r;if(i!==K.prefix)throw Error(`Cannot string encode V0 in ${r.name} encoding`);let n=t.get(i);if(null!=n)return n;{let n=r.encode(e).slice(1);return t.set(i,n),n}},eN=(e,t,r)=>{let{prefix:i}=r,n=t.get(i);if(null!=n)return n;{let n=r.encode(e);return t.set(i,n),n}},eT=112,eM=18,ej=(e,t,r)=>{let i=eu(e),n=i+eu(t),o=new Uint8Array(n+r.byteLength);return ec(e,o,0),ec(t,o,i),o.set(r,n),o},eU=Symbol.for("@ipld/js-cid/CID"),eB={writable:!1,configurable:!1,enumerable:!0},eL={writable:!1,enumerable:!1,configurable:!1},eF=(e,t)=>{if(e.test("0.0.0-dev"))console.warn(t);else throw Error(t)},ez=`CID.isCID(v) is deprecated and will be removed in the next major release.
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
`,eW={...i,...n,...o,...a,...s,...l,...c,...u,...h,...d};({...f,...p});var eH=r(50741);function eq(e,t,r,i){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:r},decoder:{decode:i}}}let eG=eq("utf8","u",e=>{let t=new TextDecoder("utf8");return"u"+t.decode(e)},e=>{let t=new TextEncoder;return t.encode(e.substring(1))}),eV=eq("ascii","a",e=>{let t="a";for(let r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},e=>{e=e.substring(1);let t=(0,eH.E)(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}),eZ={utf8:eG,"utf-8":eG,hex:eW.base16,latin1:eV,ascii:eV,binary:eV,...eW};var eK=eZ},53722:function(e,t,r){"use strict";r.d(t,{sj:function(){return p},iH:function(){return b},CO:function(){return w},Ld:function(){return g}}),Symbol();let i=Symbol(),n=Object.getPrototypeOf,o=new WeakMap,a=e=>e&&(o.has(e)?o.get(e):n(e)===Object.prototype||n(e)===Array.prototype),s=e=>a(e)&&e[i]||null,l=(e,t=!0)=>{o.set(e,t)},c=e=>"object"==typeof e&&null!==e,u=new WeakMap,h=new WeakSet,d=(e=Object.is,t=(e,t)=>new Proxy(e,t),r=e=>c(e)&&!h.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),i=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},n=new WeakMap,o=(e,t,r=i)=>{let a=n.get(e);if((null==a?void 0:a[0])===t)return a[1];let s=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return l(s,!0),n.set(e,[t,s]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(s,t))return;let i=Reflect.get(e,t),n={value:i,enumerable:!0,configurable:!0};if(h.has(i))l(i,!1);else if(i instanceof Promise)delete n.value,n.get=()=>r(i);else if(u.has(i)){let[e,t]=u.get(i);n.value=o(e,t(),r)}Object.defineProperty(s,t,n)}),Object.preventExtensions(s)},a=new WeakMap,d=[1,1],f=i=>{if(!c(i))throw Error("object required");let n=a.get(i);if(n)return n;let l=d[0],p=new Set,g=(e,t=++d[0])=>{l!==t&&(l=t,p.forEach(r=>r(e,t)))},w=d[1],b=(e=++d[1])=>(w===e||p.size||(w=e,y.forEach(([t])=>{let r=t[1](e);r>l&&(l=r)})),l),m=e=>(t,r)=>{let i=[...t];i[1]=[e,...i[1]],g(i,r)},y=new Map,v=(e,t)=>{if(y.has(e))throw Error("prop listener already exists");if(p.size){let r=t[3](m(e));y.set(e,[t,r])}else y.set(e,[t])},x=e=>{var t;let r=y.get(e);r&&(y.delete(e),null==(t=r[1])||t.call(r))},C=e=>{p.add(e),1===p.size&&y.forEach(([e,t],r)=>{if(t)throw Error("remove already exists");let i=e[3](m(r));y.set(r,[e,i])});let t=()=>{p.delete(e),0===p.size&&y.forEach(([e,t],r)=>{t&&(t(),y.set(r,[e]))})};return t},E=Array.isArray(i)?[]:Object.create(Object.getPrototypeOf(i)),k={deleteProperty(e,t){let r=Reflect.get(e,t);x(t);let i=Reflect.deleteProperty(e,t);return i&&g(["delete",[t],r]),i},set(t,i,n,o){let l=Reflect.has(t,i),d=Reflect.get(t,i,o);if(l&&(e(d,n)||a.has(n)&&e(d,a.get(n))))return!0;x(i),c(n)&&(n=s(n)||n);let p=n;if(n instanceof Promise)n.then(e=>{n.status="fulfilled",n.value=e,g(["resolve",[i],e])}).catch(e=>{n.status="rejected",n.reason=e,g(["reject",[i],e])});else{!u.has(n)&&r(n)&&(p=f(n));let e=!h.has(p)&&u.get(p);e&&v(i,e)}return Reflect.set(t,i,p,o),g(["set",[i],n,d]),!0}},S=t(E,k);a.set(i,S);let _=[E,b,o,C];return u.set(S,_),Reflect.ownKeys(i).forEach(e=>{let t=Object.getOwnPropertyDescriptor(i,e);"value"in t&&(S[e]=i[e],delete t.value,delete t.writable),Object.defineProperty(E,e,t)}),S})=>[f,u,h,e,t,r,i,n,o,a,d],[f]=d();function p(e={}){return f(e)}function g(e,t,r){let i;let n=u.get(e);n||console.warn("Please use proxy object");let o=[],a=n[3],s=!1,l=a(e=>{if(o.push(e),r){t(o.splice(0));return}i||(i=Promise.resolve().then(()=>{i=void 0,s&&t(o.splice(0))}))});return s=!0,()=>{s=!1,l()}}function w(e,t){let r=u.get(e);r||console.warn("Please use proxy object");let[i,n,o]=r;return o(i,n(),t)}function b(e){return h.add(e),e}},4832:function(e,t,r){"use strict";function i(e){return"string"==typeof e?{address:e,type:"json-rpc"}:e}r.d(t,{T:function(){return i}})},98873:function(e,t,r){"use strict";r.d(t,{R:function(){return m}});var i=r(4832),n=r(42980),o=r(95950),a=r(27878),s=r(98458),l=r(3458),c=r(53883),u=r(94540),h=r(21693),d=r(40009),f=r(36074),p=r(21028),g=r(86868),w=r(33668),b=r(2445);async function m(e,t){let{account:n=e.account,batch:l=!!e.batch?.multicall,blockNumber:c,blockTag:u="latest",accessList:w,data:m,gas:v,gasPrice:x,maxFeePerGas:C,maxPriorityFeePerGas:E,nonce:k,to:S,value:_,...A}=t,$=n?(0,i.T)(n):void 0;try{(0,b.F)(t);let r=c?(0,h.eC)(c):void 0,i=r||u,n=e.chain?.formatters?.transactionRequest?.format,o=n||g.tG,s=o({...(0,p.K)(A,{format:n}),from:$?.address,accessList:w,data:m,gas:v,gasPrice:x,maxFeePerGas:C,maxPriorityFeePerGas:E,nonce:k,to:S,value:_});if(l&&function({request:e}){let{data:t,to:r,...i}=e;return!(!t||t.startsWith("0x82ad56cb"))&&!!r&&!(Object.values(i).filter(e=>void 0!==e).length>0)}({request:s}))try{return await y(e,{...s,blockNumber:c,blockTag:u})}catch(e){if(!(e instanceof a.pZ)&&!(e instanceof a.mm))throw e}let d=await e.request({method:"eth_call",params:i?[s,i]:[s]});if("0x"===d)return{data:void 0};return{data:d}}catch(l){let i=function(e){if(!(e instanceof o.G))return;let t=e.walk();return"object"==typeof t.data?t.data.data:t.data}(l),{offchainLookup:n,offchainLookupSignature:a}=await r.e(572).then(r.bind(r,5572));if(i?.slice(0,10)===a&&S)return{data:await n(e,{data:i,to:S})};throw function(e,{docsPath:t,...r}){let i=(()=>{let t=(0,f.k)(e,r);return t instanceof d.cj?e:t})();return new s.cg(i,{docsPath:t,...r})}(l,{...t,account:$,chain:e.chain})}}async function y(e,t){let{batchSize:r=1024,wait:i=0}="object"==typeof e.batch?.multicall?e.batch.multicall:{},{blockNumber:o,blockTag:d="latest",data:f,multicallAddress:p,to:g}=t,b=p;if(!b){if(!e.chain)throw new a.pZ;b=(0,u.L)({blockNumber:o,chain:e.chain,contract:"multicall3"})}let m=o?(0,h.eC)(o):void 0,y=m||d,{schedule:v}=(0,w.S)({id:`${e.uid}.${y}`,wait:i,shouldSplitBatch(e){let t=e.reduce((e,{data:t})=>e+(t.length-2),0);return t>2*r},fn:async t=>{let r=t.map(e=>({allowFailure:!0,callData:e.data,target:e.to})),i=(0,c.R)({abi:n.F8,args:[r],functionName:"aggregate3"}),o=await e.request({method:"eth_call",params:[{data:i,to:b},y]});return(0,l.k)({abi:n.F8,args:[r],functionName:"aggregate3",data:o||"0x"})}}),[{returnData:x,success:C}]=await v({data:f,to:g});if(!C)throw new s.VQ({data:x});return"0x"===x?{data:void 0}:{data:x}}},77451:function(e,t,r){"use strict";r.d(t,{C:function(){return c},X:function(){return l}});var i=r(84161),n=r(82600),o=r(17976),a=r(69059),s=r(75188);async function l(e,t){return c(e,t)}async function c(e,t){let{block:r,chain:l=e.chain,request:c,type:u="eip1559"}=t||{},h=await (async()=>"function"==typeof l?.fees?.baseFeeMultiplier?l.fees.baseFeeMultiplier({block:r,client:e,request:c}):l?.fees?.baseFeeMultiplier??1.2)();if(h<1)throw new i.Fz;let d=h.toString().split(".")[1]?.length??0,f=10**d,p=e=>e*BigInt(Math.ceil(h*f))/BigInt(f),g=r||await (0,n.s)(e,a.Q)({});if("function"==typeof l?.fees?.estimateFeesPerGas)return l.fees.estimateFeesPerGas({block:r,client:e,multiply:p,request:c,type:u});if("eip1559"===u){if("bigint"!=typeof g.baseFeePerGas)throw new i.e5;let t=c?.maxPriorityFeePerGas?c.maxPriorityFeePerGas:await (0,o.h)(e,{block:g,chain:l,request:c}),r=p(g.baseFeePerGas),n=c?.maxFeePerGas??r+t;return{maxFeePerGas:n,maxPriorityFeePerGas:t}}let w=c?.gasPrice??p(await (0,n.s)(e,s.o)({}));return{gasPrice:w}}},89412:function(e,t,r){"use strict";r.d(t,{Q:function(){return b}});var i=r(4832),n=r(67333),o=r(21693),a=r(79352),s=r(32421),l=r(95950),c=r(44818);class u extends l.G{constructor(e,{account:t,docsPath:r,chain:i,data:n,gas:o,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:h,nonce:d,to:f,value:p}){let g=(0,c.xr)({from:t?.address,to:f,value:void 0!==p&&`${(0,a.d)(p)} ${i?.nativeCurrency.symbol||"ETH"}`,data:n,gas:o,gasPrice:void 0!==l&&`${(0,s.o)(l)} gwei`,maxFeePerGas:void 0!==u&&`${(0,s.o)(u)} gwei`,maxPriorityFeePerGas:void 0!==h&&`${(0,s.o)(h)} gwei`,nonce:d});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",g].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}var h=r(40009),d=r(36074),f=r(21028),p=r(86868),g=r(2445),w=r(40044);async function b(e,t){let r=t.account??e.account;if(!r)throw new n.o({docsPath:"/docs/actions/public/estimateGas"});let a=(0,i.T)(r);try{let{accessList:r,blockNumber:i,blockTag:n,data:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:h,nonce:d,to:b,value:m,...y}="local"===a.type?await (0,w.Z)(e,t):t,v=i?(0,o.eC)(i):void 0,x=v||n;(0,g.F)(t);let C=e.chain?.formatters?.transactionRequest?.format,E=C||p.tG,k=E({...(0,f.K)(y,{format:C}),from:a.address,accessList:r,data:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:h,nonce:d,to:b,value:m}),S=await e.request({method:"eth_estimateGas",params:x?[k,x]:[k]});return BigInt(S)}catch(r){throw function(e,{docsPath:t,...r}){let i=(()=>{let t=(0,d.k)(e,r);return t instanceof h.cj?e:t})();return new u(i,{docsPath:t,...r})}(r,{...t,account:a,chain:e.chain})}}},17976:function(e,t,r){"use strict";r.d(t,{_:function(){return l},h:function(){return c}});var i=r(84161),n=r(30838),o=r(82600),a=r(69059),s=r(75188);async function l(e,t){return c(e,t)}async function c(e,t){let{block:r,chain:l=e.chain,request:c}=t||{};if("function"==typeof l?.fees?.defaultPriorityFee){let t=r||await (0,o.s)(e,a.Q)({});return l.fees.defaultPriorityFee({block:t,client:e,request:c})}if(void 0!==l?.fees?.defaultPriorityFee)return l?.fees?.defaultPriorityFee;try{let t=await e.request({method:"eth_maxPriorityFeePerGas"});return(0,n.y_)(t)}catch{let[t,n]=await Promise.all([r?Promise.resolve(r):(0,o.s)(e,a.Q)({}),(0,o.s)(e,s.o)({})]);if("bigint"!=typeof t.baseFeePerGas)throw new i.e5;let l=n-t.baseFeePerGas;if(l<0n)return 0n;return l}}},69059:function(e,t,r){"use strict";r.d(t,{Q:function(){return s}});var i=r(95950);class n extends i.G{constructor({blockHash:e,blockNumber:t}){let r="Block";e&&(r=`Block at hash "${e}"`),t&&(r=`Block at number "${t}"`),super(`${r} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}var o=r(21693),a=r(78723);async function s(e,{blockHash:t,blockNumber:r,blockTag:i,includeTransactions:s}={}){let l=s??!1,c=void 0!==r?(0,o.eC)(r):void 0,u=null;if(!(u=t?await e.request({method:"eth_getBlockByHash",params:[t,l]}):await e.request({method:"eth_getBlockByNumber",params:[c||(i??"latest"),l]})))throw new n({blockHash:t,blockNumber:r});let h=e.chain?.formatters?.block?.format||a.Z;return h(u)}},13438:function(e,t,r){"use strict";r.d(t,{L:function(){return n}});var i=r(30838);async function n(e){let t=await e.request({method:"eth_chainId"});return(0,i.ly)(t)}},75188:function(e,t,r){"use strict";async function i(e){let t=await e.request({method:"eth_gasPrice"});return BigInt(t)}r.d(t,{o:function(){return i}})},31742:function(e,t,r){"use strict";r.d(t,{K:function(){return o}});var i=r(30838),n=r(21693);async function o(e,{address:t,blockTag:r="latest",blockNumber:o}){let a=await e.request({method:"eth_getTransactionCount",params:[t,o?(0,n.eC)(o):r]});return(0,i.ly)(a)}},40044:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var i=r(4832),n=r(77451),o=r(89412),a=r(69059),s=r(31742),l=r(67333),c=r(84161),u=r(82600),h=r(2445),d=r(44818);async function f(e,t){let{account:r=e.account,chain:f,gas:p,nonce:g,type:w}=t;if(!r)throw new l.o;let b=(0,i.T)(r),m=await (0,u.s)(e,a.Q)({blockTag:"latest"}),y={...t,from:b.address};if(void 0===g&&(y.nonce=await (0,u.s)(e,s.K)({address:b.address,blockTag:"pending"})),void 0===w)try{y.type=function(e){if(e.type)return e.type;if(void 0!==e.maxFeePerGas||void 0!==e.maxPriorityFeePerGas)return"eip1559";if(void 0!==e.gasPrice)return void 0!==e.accessList?"eip2930":"legacy";throw new d.j3({transaction:e})}(y)}catch{y.type="bigint"==typeof m.baseFeePerGas?"eip1559":"legacy"}if("eip1559"===y.type){let{maxFeePerGas:r,maxPriorityFeePerGas:i}=await (0,n.C)(e,{block:m,chain:f,request:y});if(void 0===t.maxPriorityFeePerGas&&t.maxFeePerGas&&t.maxFeePerGas<i)throw new c.ld({maxPriorityFeePerGas:i});y.maxPriorityFeePerGas=i,y.maxFeePerGas=r}else{if(void 0!==t.maxFeePerGas||void 0!==t.maxPriorityFeePerGas)throw new c.e5;let{gasPrice:r}=await (0,n.C)(e,{block:m,chain:f,request:y,type:"legacy"});y.gasPrice=r}return void 0===p&&(y.gas=await (0,u.s)(e,o.Q)({...y,account:{address:b.address,type:"json-rpc"}})),(0,h.F)(y),y}},73971:function(e,t,r){"use strict";async function i(e,{serializedTransaction:t}){return e.request({method:"eth_sendRawTransaction",params:[t]})}r.d(t,{p:function(){return i}})},88301:function(e,t,r){"use strict";r.d(t,{e:function(){return n}});var i=r(71186);let n=(0,i.a)({id:56,name:"BNB Smart Chain",network:"bsc",nativeCurrency:{decimals:18,name:"BNB",symbol:"BNB"},rpcUrls:{default:{http:["https://rpc.ankr.com/bsc"]},public:{http:["https://rpc.ankr.com/bsc"]}},blockExplorers:{etherscan:{name:"BscScan",url:"https://bscscan.com"},default:{name:"BscScan",url:"https://bscscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:15921452}}})},75404:function(e,t,r){"use strict";r.d(t,{R:function(){return n}});var i=r(71186);let n=(0,i.a)({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}})},3748:function(e,t,r){"use strict";r.d(t,{y:function(){return n}});var i=r(71186);let n=(0,i.a)({id:137,name:"Polygon",network:"matic",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:{alchemy:{http:["https://polygon-mainnet.g.alchemy.com/v2"],webSocket:["wss://polygon-mainnet.g.alchemy.com/v2"]},infura:{http:["https://polygon-mainnet.infura.io/v3"],webSocket:["wss://polygon-mainnet.infura.io/ws/v3"]},default:{http:["https://polygon-rpc.com"]},public:{http:["https://polygon-rpc.com"]}},blockExplorers:{etherscan:{name:"PolygonScan",url:"https://polygonscan.com"},default:{name:"PolygonScan",url:"https://polygonscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:25770160}}})},30315:function(e,t,r){"use strict";let i;r.d(t,{e:function(){return a}});var n=r(4832);let o=256;function a(e){let{batch:t,cacheTime:r=e.pollingInterval??4e3,key:a="base",name:s="Base Client",pollingInterval:l=4e3,type:c="base"}=e,u=e.chain,h=e.account?(0,n.T)(e.account):void 0,{config:d,request:f,value:p}=e.transport({chain:u,pollingInterval:l}),g={...d,...p},w={account:h,batch:t,cacheTime:r,chain:u,key:a,name:s,pollingInterval:l,request:f,transport:g,type:c,uid:function(e=11){if(!i||o+e>512){i="",o=0;for(let e=0;e<256;e++)i+=(256+256*Math.random()|0).toString(16).substring(1)}return i.substring(o,o+++e)}()};return Object.assign(w,{extend:function e(t){return r=>{let i=r(t);for(let e in w)delete i[e];let n={...t,...i};return Object.assign(n,{extend:e(n)})}}(w)})}},71061:function(e,t,r){"use strict";r.d(t,{K:function(){return U}});var i=r(30315),n=r(13438),o=r(21693);async function a(e,{chain:t}){let{id:r,name:i,nativeCurrency:n,rpcUrls:a,blockExplorers:s}=t;await e.request({method:"wallet_addEthereumChain",params:[{chainId:(0,o.eC)(r),chainName:i,nativeCurrency:n,rpcUrls:a.default.http,blockExplorerUrls:s?Object.values(s).map(({url:e})=>e):void 0}]})}var s=r(12732),l=r(4832),c=r(67333),u=r(27878);function h({chain:e,currentChainId:t}){if(!e)throw new u.Bk;if(t!==e.id)throw new u.Yl({chain:e,currentChainId:t})}var d=r(40009),f=r(44818),p=r(36074),g=r(21028),w=r(86868),b=r(82600),m=r(2445),y=r(40044),v=r(73971);async function x(e,t){let{account:r=e.account,chain:i=e.chain,accessList:o,data:a,gas:s,gasPrice:u,maxFeePerGas:x,maxPriorityFeePerGas:C,nonce:E,to:k,value:S,..._}=t;if(!r)throw new c.o({docsPath:"/docs/actions/wallet/sendTransaction"});let A=(0,l.T)(r);try{let r;if((0,m.F)(t),null!==i&&(r=await (0,b.s)(e,n.L)({}),h({currentChainId:r,chain:i})),"local"===A.type){let t=await (0,b.s)(e,y.Z)({account:A,accessList:o,chain:i,data:a,gas:s,gasPrice:u,maxFeePerGas:x,maxPriorityFeePerGas:C,nonce:E,to:k,value:S,..._});r||(r=await (0,b.s)(e,n.L)({}));let l=i?.serializers?.transaction,c=await A.signTransaction({...t,chainId:r},{serializer:l});return await (0,b.s)(e,v.p)({serializedTransaction:c})}let l=e.chain?.formatters?.transactionRequest?.format,c=l||w.tG,d=c({...(0,g.K)(_,{format:l}),accessList:o,data:a,from:A.address,gas:s,gasPrice:u,maxFeePerGas:x,maxPriorityFeePerGas:C,nonce:E,to:k,value:S});return await e.request({method:"eth_sendTransaction",params:[d]})}catch(e){throw function(e,{docsPath:t,...r}){let i=(()=>{let t=(0,p.k)(e,r);return t instanceof d.cj?e:t})();return new f.mk(i,{docsPath:t,...r})}(e,{...t,account:A,chain:t.chain||void 0})}}var C=r(39803);async function E(e){if(e.account?.type==="local")return[e.account.address];let t=await e.request({method:"eth_accounts"});return t.map(e=>(0,C.x)(e))}async function k(e){let t=await e.request({method:"wallet_getPermissions"});return t}async function S(e){let t=await e.request({method:"eth_requestAccounts"});return t.map(e=>(0,C.K)(e))}async function _(e,t){return e.request({method:"wallet_requestPermissions",params:[t]})}async function A(e,{account:t=e.account,message:r}){if(!t)throw new c.o({docsPath:"/docs/actions/wallet/signMessage"});let i=(0,l.T)(t);if("local"===i.type)return i.signMessage({message:r});let n="string"==typeof r?(0,o.$G)(r):r.raw instanceof Uint8Array?(0,o.NC)(r.raw):r.raw;return e.request({method:"personal_sign",params:[n,i.address]})}async function $(e,t){let{account:r=e.account,chain:i=e.chain,...a}=t;if(!r)throw new c.o({docsPath:"/docs/actions/wallet/signTransaction"});let s=(0,l.T)(r);(0,m.F)({account:s,...t});let u=await (0,b.s)(e,n.L)({});null!==i&&h({currentChainId:u,chain:i});let d=i?.formatters||e.chain?.formatters,f=d?.transactionRequest?.format||w.tG;return"local"===s.type?s.signTransaction({...a,chainId:u},{serializer:e.chain?.serializers?.transaction}):await e.request({method:"eth_signTransaction",params:[{...f(a),chainId:(0,o.eC)(u),from:s.address}]})}var P=r(45008),O=r(71891),D=r(29578);async function I(e,{account:t=e.account,domain:r,message:i,primaryType:n,types:o}){if(!t)throw new c.o({docsPath:"/docs/actions/wallet/signTypedData"});let a=(0,l.T)(t),s={EIP712Domain:(0,D.cj)({domain:r}),...o};if((0,D.iC)({domain:r,message:i,primaryType:n,types:s}),"local"===a.type)return a.signTypedData({domain:r,primaryType:n,types:s,message:i});let u=(0,O.P)({domain:r??{},primaryType:n,types:s,message:i},(e,t)=>(0,P.v)(t)?t.toLowerCase():t);return e.request({method:"eth_signTypedData_v4",params:[a.address,u]})}async function R(e,{id:t}){await e.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,o.eC)(t)}]})}async function N(e,t){let r=await e.request({method:"wallet_watchAsset",params:t});return r}var T=r(53883);async function M(e,{abi:t,address:r,args:i,dataSuffix:n,functionName:o,...a}){let s=(0,T.R)({abi:t,args:i,functionName:o}),l=await (0,b.s)(e,x)({data:`${s}${n?n.replace("0x",""):""}`,to:r,...a});return l}function j(e){return{addChain:t=>a(e,t),deployContract:t=>(function(e,{abi:t,args:r,bytecode:i,...n}){let o=(0,s.w)({abi:t,args:r,bytecode:i});return x(e,{...n,data:o})})(e,t),getAddresses:()=>E(e),getChainId:()=>(0,n.L)(e),getPermissions:()=>k(e),prepareTransactionRequest:t=>(0,y.Z)(e,t),requestAddresses:()=>S(e),requestPermissions:t=>_(e,t),sendRawTransaction:t=>(0,v.p)(e,t),sendTransaction:t=>x(e,t),signMessage:t=>A(e,t),signTransaction:t=>$(e,t),signTypedData:t=>I(e,t),switchChain:t=>R(e,t),watchAsset:t=>N(e,t),writeContract:t=>M(e,t)}}function U(e){let{key:t="wallet",name:r="Wallet Client",transport:n}=e,o=(0,i.e)({...e,key:t,name:r,transport:e=>n({...e,retryCount:0}),type:"walletClient"});return o.extend(j)}},68124:function(e,t,r){"use strict";r.d(t,{q:function(){return n}});var i=r(35215);function n({key:e,name:t,request:r,retryCount:n=3,retryDelay:o=150,timeout:a,type:s},l){return{config:{key:e,name:t,request:r,retryCount:n,retryDelay:o,timeout:a,type:s},request:(0,i.n)(r,{retryCount:n,retryDelay:o}),value:l}}},39730:function(e,t,r){"use strict";r.d(t,{P:function(){return n}});var i=r(68124);function n(e,t={}){let{key:r="custom",name:n="Custom Provider",retryDelay:o}=t;return({retryCount:a})=>(0,i.q)({key:r,name:n,request:e.request.bind(e),retryCount:t.retryCount??a,retryDelay:o,type:"custom"})}},42980:function(e,t,r){"use strict";r.d(t,{$o:function(){return c},F8:function(){return i},X$:function(){return l},du:function(){return a},k3:function(){return o},nZ:function(){return s}});let i=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],n=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],o=[...n,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],a=[...n,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],s=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],l=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],c=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}]},28483:function(e,t,r){"use strict";r.d(t,{$:function(){return i},Up:function(){return n},hZ:function(){return o}});let i={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},n={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},o={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}},36238:function(e,t,r){"use strict";r.d(t,{Bd:function(){return o},Zn:function(){return n},ez:function(){return i}});let i={gwei:9,wei:18},n={ether:-9,wei:9},o={ether:-18,gwei:-9}},71878:function(e,t,r){"use strict";r.d(t,{CI:function(){return E},FM:function(){return p},Gy:function(){return x},KY:function(){return y},M4:function(){return h},MX:function(){return m},SM:function(){return v},cO:function(){return s},dh:function(){return C},fM:function(){return a},fs:function(){return d},gr:function(){return u},hn:function(){return k},lC:function(){return g},mv:function(){return w},wM:function(){return S},wb:function(){return c},xB:function(){return l},xL:function(){return b},yP:function(){return f}});var i=r(40928),n=r(39868),o=r(95950);class a extends o.G{constructor({docsPath:e}){super("A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class s extends o.G{constructor({docsPath:e}){super("Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class l extends o.G{constructor({data:e,params:t,size:r}){super(`Data size of ${r} bytes is too small for given parameters.`,{metaMessages:[`Params: (${(0,i.h)(t,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=t,this.size=r}}class c extends o.G{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class u extends o.G{constructor({expectedLength:e,givenLength:t,type:r}){super(`ABI encoding array length mismatch for type ${r}.
Expected length: ${e}
Given length: ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class h extends o.G{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${(0,n.d)(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class d extends o.G{constructor({expectedLength:e,givenLength:t}){super(`ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class f extends o.G{constructor(e,{docsPath:t}){super(`Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class p extends o.G{constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class g extends o.G{constructor(e,{docsPath:t}){super(`Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class w extends o.G{constructor(e,{docsPath:t}={}){super(`Event ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class b extends o.G{constructor(e,{docsPath:t}={}){super(`Function ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class m extends o.G{constructor(e,{docsPath:t}){super(`Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class y extends o.G{constructor({expectedSize:e,givenSize:t}){super(`Expected bytes${e}, got bytes${t}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class v extends o.G{constructor({abiItem:e,data:t,params:r,size:n}){super(`Data size of ${n} bytes is too small for non-indexed event parameters.`,{metaMessages:[`Params: (${(0,i.h)(r,{includeName:!0})})`,`Data:   ${t} (${n} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=t,this.params=r,this.size=n}}class x extends o.G{constructor({abiItem:e,param:t}){super(`Expected a topic for indexed event parameter${t.name?` "${t.name}"`:""} on event "${(0,i.t)(e,{includeName:!0})}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}}class C extends o.G{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class E extends o.G{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class k extends o.G{constructor(e){super(`Value "${e}" is not a valid array.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class S extends o.G{constructor(e){super(`"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}},67333:function(e,t,r){"use strict";r.d(t,{o:function(){return n}});var i=r(95950);class n extends i.G{constructor({docsPath:e}={}){super("Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.",{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}},21485:function(e,t,r){"use strict";r.d(t,{b:function(){return n}});var i=r(95950);class n extends i.G{constructor({address:e}){super(`Address "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}},95950:function(e,t,r){"use strict";r.d(t,{G:function(){return n}});var i=r(66291);class n extends Error{constructor(e,t={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:(0,i.bo)()});let r=t.cause instanceof n?t.cause.details:t.cause?.message?t.cause.message:t.details,o=t.cause instanceof n&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...o?[`Docs: https://viem.sh${o}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=o,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return function e(t,r){return r?.(t)?t:t&&"object"==typeof t&&"cause"in t?e(t.cause,r):r?null:t}(this,e)}}},27878:function(e,t,r){"use strict";r.d(t,{Bk:function(){return a},Yl:function(){return o},mm:function(){return n},pZ:function(){return s}});var i=r(95950);class n extends i.G{constructor({blockNumber:e,chain:t,contract:r}){super(`Chain "${t.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...e&&r.blockCreated&&r.blockCreated>e?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class o extends i.G{constructor({chain:e,currentChainId:t}){super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class a extends i.G{constructor(){super("No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class s extends i.G{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}},98458:function(e,t,r){"use strict";r.d(t,{cg:function(){return w},uq:function(){return b},Lu:function(){return m},Dk:function(){return y},VQ:function(){return v}});var i=r(4832),n=r(28483),o=r(49039),a=r(40928),s=r(71891);function l({abiItem:e,args:t,includeFunctionName:r=!0,includeName:i=!1}){if("name"in e&&"inputs"in e&&e.inputs)return`${r?e.name:""}(${e.inputs.map((e,r)=>`${i&&e.name?`${e.name}: `:""}${"object"==typeof t[r]?(0,s.P)(t[r]):t[r]}`).join(", ")})`}var c=r(77804),u=r(79352),h=r(32421),d=r(71878),f=r(95950),p=r(44818),g=r(66291);class w extends f.G{constructor(e,{account:t,docsPath:r,chain:n,data:o,gas:a,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:d,to:f,value:g}){let w=t?(0,i.T)(t):void 0,b=(0,p.xr)({from:w?.address,to:f,value:void 0!==g&&`${(0,u.d)(g)} ${n?.nativeCurrency.symbol||"ETH"}`,data:o,gas:a,gasPrice:void 0!==s&&`${(0,h.o)(s)} gwei`,maxFeePerGas:void 0!==l&&`${(0,h.o)(l)} gwei`,maxPriorityFeePerGas:void 0!==c&&`${(0,h.o)(c)} gwei`,nonce:d});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",b].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class b extends f.G{constructor(e,{abi:t,args:r,contractAddress:i,docsPath:n,functionName:o,sender:s}){let u=(0,c.m)({abi:t,args:r,name:o}),h=u?l({abiItem:u,args:r,includeFunctionName:!1,includeName:!1}):void 0,d=u?(0,a.t)(u,{includeName:!0}):void 0,f=(0,p.xr)({address:i&&(0,g.CR)(i),function:d,args:h&&"()"!==h&&`${[...Array(o?.length??0).keys()].map(()=>" ").join("")}${h}`,sender:s});super(e.shortMessage||`An unknown error occurred while executing the contract function "${o}".`,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",f].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=t,this.args=r,this.cause=e,this.contractAddress=i,this.functionName=o,this.sender=s}}class m extends f.G{constructor({abi:e,data:t,functionName:r,message:i}){let s,c,u,h,f;if(t&&"0x"!==t)try{f=(0,o.p)({abi:e,data:t});let{abiItem:r,errorName:i,args:s}=f;if("Error"===i)u=s[0];else if("Panic"===i){let[e]=s;u=n.$[e]}else{let e=r?(0,a.t)(r,{includeName:!0}):void 0,t=r&&s?l({abiItem:r,args:s,includeFunctionName:!1,includeName:!1}):void 0;c=[e?`Error: ${e}`:"",t&&"()"!==t?`       ${[...Array(i?.length??0).keys()].map(()=>" ").join("")}${t}`:""]}}catch(e){s=e}else i&&(u=i);s instanceof d.yP&&(c=[`Unable to decode signature "${h=s.signature}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${h}.`]),super(u&&"execution reverted"!==u||h?[`The contract function "${r}" reverted with the following ${h?"signature":"reason"}:`,u||h].join("\n"):`The contract function "${r}" reverted.`,{cause:s,metaMessages:c}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=f,this.reason=u,this.signature=h}}class y extends f.G{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class v extends f.G{constructor({data:e,message:t}){super(t||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}},741:function(e,t,r){"use strict";r.d(t,{$:function(){return o},m:function(){return n}});var i=r(95950);class n extends i.G{constructor({offset:e,position:t,size:r}){super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class o extends i.G{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}},86714:function(e,t,r){"use strict";r.d(t,{Cd:function(){return o},J5:function(){return n},M6:function(){return a}});var i=r(95950);class n extends i.G{constructor({max:e,min:t,signed:r,size:i,value:n}){super(`Number "${n}" is not in safe ${i?`${8*i}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class o extends i.G{constructor(e){super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}class a extends i.G{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}},84161:function(e,t,r){"use strict";r.d(t,{Fz:function(){return o},e5:function(){return a},ld:function(){return s}});var i=r(32421),n=r(95950);class o extends n.G{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class a extends n.G{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class s extends n.G{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,i.o)(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}},40009:function(e,t,r){"use strict";r.d(t,{C_:function(){return h},G$:function(){return s},Hh:function(){return a},M_:function(){return o},WF:function(){return d},ZI:function(){return l},cj:function(){return w},cs:function(){return g},dR:function(){return f},pZ:function(){return p},se:function(){return u},vU:function(){return c}});var i=r(32421),n=r(95950);class o extends n.G{constructor({cause:e,message:t}={}){let r=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(o,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(o,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class a extends n.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,i.o)(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(a,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class s extends n.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,i.o)(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(s,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class l extends n.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(l,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class c extends n.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(c,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class u extends n.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(u,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class h extends n.G{constructor({cause:e}={}){super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(h,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class d extends n.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(d,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class f extends n.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(f,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class p extends n.G{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(p,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class g extends n.G{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:r}={}){super(`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${(0,i.o)(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${(0,i.o)(r)} gwei`:""}).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(g,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class w extends n.G{constructor({cause:e}){super(`An error occurred while executing: ${e?.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}},20722:function(e,t,r){"use strict";r.d(t,{Gg:function(){return a},W5:function(){return c},bs:function(){return l},c9:function(){return s}});var i=r(71891),n=r(95950),o=r(66291);class a extends n.G{constructor({body:e,details:t,headers:r,status:n,url:a}){super("HTTP request failed.",{details:t,metaMessages:[n&&`Status: ${n}`,`URL: ${(0,o.Gr)(a)}`,e&&`Request body: ${(0,i.P)(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=r,this.status=n,this.url=a}}class s extends n.G{constructor({body:e,details:t,url:r}){super("WebSocket request failed.",{details:t,metaMessages:[`URL: ${(0,o.Gr)(r)}`,`Request body: ${(0,i.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class l extends n.G{constructor({body:e,error:t,url:r}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${(0,o.Gr)(r)}`,`Request body: ${(0,i.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code}}class c extends n.G{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,o.Gr)(t)}`,`Request body: ${(0,i.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}},48519:function(e,t,r){"use strict";r.d(t,{B:function(){return l},GD:function(){return m},I0:function(){return E},KB:function(){return g},LX:function(){return c},Og:function(){return f},PE:function(){return v},Pv:function(){return b},Ts:function(){return x},XS:function(){return h},ab:function(){return y},gS:function(){return w},ir:function(){return S},nY:function(){return u},pT:function(){return p},s7:function(){return s},u5:function(){return C},x3:function(){return k},yR:function(){return d}});var i=r(95950),n=r(20722);class o extends i.G{constructor(e,{code:t,docsPath:r,metaMessages:i,shortMessage:o}){super(o,{cause:e,docsPath:r,metaMessages:i||e?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof n.bs?e.code:t??-1}}class a extends o{constructor(e,t){super(e,t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class s extends o{constructor(e){super(e,{code:s.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(s,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class l extends o{constructor(e){super(e,{code:l.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(l,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class c extends o{constructor(e){super(e,{code:c.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(c,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class u extends o{constructor(e){super(e,{code:u.code,shortMessage:"Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(u,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class h extends o{constructor(e){super(e,{code:h.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(h,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class d extends o{constructor(e){super(e,{code:d.code,shortMessage:"Missing or invalid parameters.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(d,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class f extends o{constructor(e){super(e,{code:f.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(f,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class p extends o{constructor(e){super(e,{code:p.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(p,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class g extends o{constructor(e){super(e,{code:g.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(g,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class w extends o{constructor(e){super(e,{code:w.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(w,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class b extends o{constructor(e){super(e,{code:b.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(b,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class m extends o{constructor(e){super(e,{code:m.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(m,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class y extends a{constructor(e){super(e,{code:y.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(y,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class v extends a{constructor(e){super(e,{code:v.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(v,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class x extends a{constructor(e){super(e,{code:x.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(x,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class C extends a{constructor(e){super(e,{code:C.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(C,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class E extends a{constructor(e){super(e,{code:E.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(E,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class k extends a{constructor(e){super(e,{code:k.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(k,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class S extends o{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}},44818:function(e,t,r){"use strict";r.d(t,{Bh:function(){return u},Yb:function(){return h},j3:function(){return l},mc:function(){return d},mk:function(){return c},xY:function(){return s},xr:function(){return a}});var i=r(79352),n=r(32421),o=r(95950);function a(e){let t=Object.entries(e).map(([e,t])=>void 0===t||!1===t?null:[e,t]).filter(Boolean),r=t.reduce((e,[t])=>Math.max(e,t.length),0);return t.map(([e,t])=>`  ${`${e}:`.padEnd(r+1)}  ${t}`).join("\n")}class s extends o.G{constructor(){super("Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class l extends o.G{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",a(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class c extends o.G{constructor(e,{account:t,docsPath:r,chain:o,data:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:h,nonce:d,to:f,value:p}){let g=a({chain:o&&`${o?.name} (id: ${o?.id})`,from:t?.address,to:f,value:void 0!==p&&`${(0,i.d)(p)} ${o?.nativeCurrency.symbol||"ETH"}`,data:s,gas:l,gasPrice:void 0!==c&&`${(0,n.o)(c)} gwei`,maxFeePerGas:void 0!==u&&`${(0,n.o)(u)} gwei`,maxPriorityFeePerGas:void 0!==h&&`${(0,n.o)(h)} gwei`,nonce:d});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",g].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}class u extends o.G{constructor({blockHash:e,blockNumber:t,blockTag:r,hash:i,index:n}){let o="Transaction";r&&void 0!==n&&(o=`Transaction at block time "${r}" at index "${n}"`),e&&void 0!==n&&(o=`Transaction at block hash "${e}" at index "${n}"`),t&&void 0!==n&&(o=`Transaction at block number "${t}" at index "${n}"`),i&&(o=`Transaction with hash "${i}"`),super(`${o} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class h extends o.G{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class d extends o.G{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}},66291:function(e,t,r){"use strict";r.d(t,{CR:function(){return i},Gr:function(){return n},bo:function(){return o}});let i=e=>e,n=e=>e,o=()=>"viem@1.18.6"},87425:function(e,t,r){"use strict";r.d(t,{r:function(){return u}});var i=r(71878),n=r(39803),o=r(39868),a=r(72619),s=r(94973),l=r(30838),c=r(90929);function u(e,t){if("0x"===t&&e.length>0)throw new i.wb;if((0,o.d)(t)&&32>(0,o.d)(t))throw new i.xB({data:t,params:e,size:(0,o.d)(t)});return function({data:e,params:t}){let r=[],u=0;for(let d=0;d<t.length;d++){if(u>=(0,o.d)(e))throw new i.xB({data:e,params:t,size:(0,o.d)(e)});let f=t[d],{consumed:p,value:g}=function e({data:t,param:r,position:o}){let u=(0,c.S)(r.type);if(u){let[i,n]=u;return function(t,{param:r,length:i,position:n}){if(!i){let i=(0,l.ly)((0,a.tP)(t,n,n+32,{strict:!0})),o=(0,l.ly)((0,a.tP)(t,i,i+32,{strict:!0})),s=0,c=[];for(let n=0;n<o;++n){let n=e({data:(0,a.tP)(t,i+32),param:r,position:s});s+=n.consumed,c.push(n.value)}return{value:c,consumed:32}}if(h(r)){let o=(0,c.S)(r.type),s=!o?.[0],u=0,h=[];for(let o=0;o<i;++o){let i=(0,l.ly)((0,a.tP)(t,n,n+32,{strict:!0})),c=e({data:(0,a.tP)(t,i),param:r,position:s?u:32*o});u+=c.consumed,h.push(c.value)}return{value:h,consumed:32}}let o=0,s=[];for(let a=0;a<i;++a){let i=e({data:t,param:r,position:n+o});o+=i.consumed,s.push(i.value)}return{value:s,consumed:o}}(t,{length:i,param:{...r,type:n},position:o})}if("tuple"===r.type)return function(t,{param:r,position:i}){let n=0===r.components.length||r.components.some(({name:e})=>!e),o=n?[]:{},s=0;if(h(r)){let c=(0,l.ly)((0,a.tP)(t,i,i+32,{strict:!0}));for(let i=0;i<r.components.length;++i){let l=r.components[i],u=e({data:(0,a.tP)(t,c),param:l,position:s});s+=u.consumed,o[n?i:l?.name]=u.value}return{consumed:32,value:o}}for(let a=0;a<r.components.length;++a){let l=r.components[a],c=e({data:t,param:l,position:i+s});s+=c.consumed,o[n?a:l?.name]=c.value}return{consumed:s,value:o}}(t,{param:r,position:o});if("string"===r.type)return function(e,{position:t}){let r=(0,l.ly)((0,a.tP)(e,t,t+32,{strict:!0})),i=(0,l.ly)((0,a.tP)(e,r,r+32,{strict:!0}));if(0===i)return{consumed:32,value:""};let n=(0,l.rR)((0,s.f)((0,a.tP)(e,r+32,r+32+i,{strict:!0})));return{consumed:32,value:n}}(t,{position:o});if(r.type.startsWith("bytes"))return function(e,{param:t,position:r}){let[i,n]=t.type.split("bytes");if(!n){let t=(0,l.ly)((0,a.tP)(e,r,r+32,{strict:!0})),i=(0,l.ly)((0,a.tP)(e,t,t+32,{strict:!0}));if(0===i)return{consumed:32,value:"0x"};let n=(0,a.tP)(e,t+32,t+32+i,{strict:!0});return{consumed:32,value:n}}let o=(0,a.tP)(e,r,r+parseInt(n),{strict:!0});return{consumed:32,value:o}}(t,{param:r,position:o});let d=(0,a.tP)(t,o,o+32,{strict:!0});if(r.type.startsWith("uint")||r.type.startsWith("int"))return function(e,{param:t}){let r=t.type.startsWith("int"),i=parseInt(t.type.split("int")[1]||"256");return{consumed:32,value:i>48?(0,l.y_)(e,{signed:r}):(0,l.ly)(e,{signed:r})}}(d,{param:r});if("address"===r.type)return{consumed:32,value:(0,n.x)((0,a.tP)(d,-20))};if("bool"===r.type)return{consumed:32,value:(0,l.XA)(d)};throw new i.CI(r.type,{docsPath:"/docs/contract/decodeAbiParameters"})}({data:e,param:f,position:u});r.push(g),u+=p}return r}({data:t,params:e})}function h(e){let{type:t}=e;if("string"===t||"bytes"===t||t.endsWith("[]"))return!0;if("tuple"===t)return e.components?.some(h);let r=(0,c.S)(e.type);return!!(r&&h({...e,type:r[1]}))}},49039:function(e,t,r){"use strict";r.d(t,{p:function(){return c}});var i=r(28483),n=r(71878),o=r(72619),a=r(33655),s=r(87425),l=r(40928);function c({abi:e,data:t}){let r=(0,o.tP)(t,0,4);if("0x"===r)throw new n.wb;let c=[...e||[],i.Up,i.hZ],u=c.find(e=>"error"===e.type&&r===(0,a.o)((0,l.t)(e)));if(!u)throw new n.yP(r,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:u,args:"inputs"in u&&u.inputs&&u.inputs.length>0?(0,s.r)(u.inputs,(0,o.tP)(t,4)):void 0,errorName:u.name}}},3458:function(e,t,r){"use strict";r.d(t,{k:function(){return s}});var i=r(71878),n=r(87425),o=r(77804);let a="/docs/contract/decodeFunctionResult";function s({abi:e,args:t,functionName:r,data:s}){let l=e[0];if(r&&!(l=(0,o.m)({abi:e,args:t,name:r})))throw new i.xL(r,{docsPath:a});if("function"!==l.type)throw new i.xL(void 0,{docsPath:a});if(!l.outputs)throw new i.MX(l.name,{docsPath:a});let c=(0,n.r)(l.outputs,s);return c&&c.length>1?c:c&&1===c.length?c[0]:void 0}},90929:function(e,t,r){"use strict";r.d(t,{E:function(){return h},S:function(){return f}});var i=r(71878),n=r(21485),o=r(87364),a=r(69809),s=r(99725),l=r(39868),c=r(72619),u=r(21693);function h(e,t){if(e.length!==t.length)throw new i.fs({expectedLength:e.length,givenLength:t.length});let r=function({params:e,values:t}){let r=[];for(let h=0;h<e.length;h++)r.push(function e({param:t,value:r}){let h=f(t.type);if(h){let[n,o]=h;return function(t,{length:r,param:n}){let o=null===r;if(!Array.isArray(t))throw new i.hn(t);if(!o&&t.length!==r)throw new i.gr({expectedLength:r,givenLength:t.length,type:`${n.type}[${r}]`});let s=!1,l=[];for(let r=0;r<t.length;r++){let i=e({param:n,value:t[r]});i.dynamic&&(s=!0),l.push(i)}if(o||s){let e=d(l);if(o){let t=(0,u.eC)(l.length,{size:32});return{dynamic:!0,encoded:l.length>0?(0,a.zo)([t,e]):t}}if(s)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:(0,a.zo)(l.map(({encoded:e})=>e))}}(r,{length:n,param:{...t,type:o}})}if("tuple"===t.type)return function(t,{param:r}){let i=!1,n=[];for(let o=0;o<r.components.length;o++){let a=r.components[o],s=Array.isArray(t)?o:a.name,l=e({param:a,value:t[s]});n.push(l),l.dynamic&&(i=!0)}return{dynamic:i,encoded:i?d(n):(0,a.zo)(n.map(({encoded:e})=>e))}}(r,{param:t});if("address"===t.type)return function(e){if(!(0,o.U)(e))throw new n.b({address:e});return{dynamic:!1,encoded:(0,s.gc)(e.toLowerCase())}}(r);if("bool"===t.type)return{dynamic:!1,encoded:(0,s.gc)((0,u.C4)(r))};if(t.type.startsWith("uint")||t.type.startsWith("int")){let e=t.type.startsWith("int");return function(e,{signed:t}){return{dynamic:!1,encoded:(0,u.eC)(e,{size:32,signed:t})}}(r,{signed:e})}if(t.type.startsWith("bytes"))return function(e,{param:t}){let[,r]=t.type.split("bytes"),n=(0,l.d)(e);if(!r){let t=e;return n%32!=0&&(t=(0,s.gc)(t,{dir:"right",size:32*Math.ceil((e.length-2)/2/32)})),{dynamic:!0,encoded:(0,a.zo)([(0,s.gc)((0,u.eC)(n,{size:32})),t])}}if(n!==parseInt(r))throw new i.M4({expectedSize:parseInt(r),value:e});return{dynamic:!1,encoded:(0,s.gc)(e,{dir:"right"})}}(r,{param:t});if("string"===t.type)return function(e){let t=(0,u.$G)(e),r=Math.ceil((0,l.d)(t)/32),i=[];for(let e=0;e<r;e++)i.push((0,s.gc)((0,c.tP)(t,32*e,(e+1)*32),{dir:"right"}));return{dynamic:!0,encoded:(0,a.zo)([(0,s.gc)((0,u.eC)((0,l.d)(t),{size:32})),...i])}}(r);throw new i.dh(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}({param:e[h],value:t[h]}));return r}({params:e,values:t}),h=d(r);return 0===h.length?"0x":h}function d(e){let t=0;for(let r=0;r<e.length;r++){let{dynamic:i,encoded:n}=e[r];i?t+=32:t+=(0,l.d)(n)}let r=[],i=[],n=0;for(let o=0;o<e.length;o++){let{dynamic:a,encoded:s}=e[o];a?(r.push((0,u.eC)(t+n,{size:32})),i.push(s),n+=(0,l.d)(s)):r.push(s)}return(0,a.zo)([...r,...i])}function f(e){let t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}},12732:function(e,t,r){"use strict";r.d(t,{w:function(){return s}});var i=r(71878),n=r(69809),o=r(90929);let a="/docs/contract/encodeDeployData";function s({abi:e,args:t,bytecode:r}){if(!t||0===t.length)return r;let s=e.find(e=>"type"in e&&"constructor"===e.type);if(!s)throw new i.fM({docsPath:a});if(!("inputs"in s)||!s.inputs||0===s.inputs.length)throw new i.cO({docsPath:a});let l=(0,o.E)(s.inputs,t);return(0,n.SM)([r,l])}},53883:function(e,t,r){"use strict";r.d(t,{R:function(){return c}});var i=r(71878),n=r(69809),o=r(33655),a=r(90929),s=r(40928),l=r(77804);function c({abi:e,args:t,functionName:r}){let c=e[0];if(r&&!(c=(0,l.m)({abi:e,args:t,name:r})))throw new i.xL(r,{docsPath:"/docs/contract/encodeFunctionData"});if("function"!==c.type)throw new i.xL(void 0,{docsPath:"/docs/contract/encodeFunctionData"});let u=(0,s.t)(c),h=(0,o.o)(u),d="inputs"in c&&c.inputs?(0,a.E)(c.inputs,t??[]):void 0;return(0,n.SM)([h,d??"0x"])}},40928:function(e,t,r){"use strict";r.d(t,{h:function(){return o},t:function(){return n}});var i=r(71878);function n(e,{includeName:t=!1}={}){if("function"!==e.type&&"event"!==e.type&&"error"!==e.type)throw new i.wM(e.type);return`${e.name}(${o(e.inputs,{includeName:t})})`}function o(e,{includeName:t=!1}={}){return e?e.map(e=>(function(e,{includeName:t}){return e.type.startsWith("tuple")?`(${o(e.components,{includeName:t})})${e.type.slice(5)}`:e.type+(t&&e.name?` ${e.name}`:"")})(e,{includeName:t})).join(t?", ":","):""}},77804:function(e,t,r){"use strict";r.d(t,{m:function(){return s}});var i=r(45008),n=r(77688),o=r(33655),a=r(87364);function s({abi:e,args:t=[],name:r}){let s=(0,i.v)(r,{strict:!1}),l=e.filter(e=>s?"function"===e.type?(0,o.o)(e)===r:"event"===e.type&&(0,n.e)(e)===r:"name"in e&&e.name===r);if(0!==l.length){if(1===l.length)return l[0];for(let e of l){if(!("inputs"in e))continue;if(!t||0===t.length){if(!e.inputs||0===e.inputs.length)return e;continue}if(!e.inputs||0===e.inputs.length||e.inputs.length!==t.length)continue;let r=t.every((t,r)=>{let i="inputs"in e&&e.inputs[r];return!!i&&function e(t,r){let i=typeof t,n=r.type;switch(n){case"address":return(0,a.U)(t);case"bool":return"boolean"===i;case"function":case"string":return"string"===i;default:if("tuple"===n&&"components"in r)return Object.values(r.components).every((r,i)=>e(Object.values(t)[i],r));if(/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(n))return"number"===i||"bigint"===i;if(/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n))return"string"===i||t instanceof Uint8Array;if(/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n))return Array.isArray(t)&&t.every(t=>e(t,{...r,type:n.replace(/(\[[0-9]{0,}\])$/,"")}));return!1}}(t,i)});if(r)return e}return l[0]}}},39803:function(e,t,r){"use strict";r.d(t,{K:function(){return l},x:function(){return s}});var i=r(21485),n=r(56728),o=r(55852),a=r(87364);function s(e,t){let r=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),i=(0,o.w)((0,n.qX)(r),"bytes"),a=(t?r.substring(`${t}0x`.length):r).split("");for(let e=0;e<40;e+=2)i[e>>1]>>4>=8&&a[e]&&(a[e]=a[e].toUpperCase()),(15&i[e>>1])>=8&&a[e+1]&&(a[e+1]=a[e+1].toUpperCase());return`0x${a.join("")}`}function l(e,t){if(!(0,a.U)(e))throw new i.b({address:e});return s(e,t)}},87364:function(e,t,r){"use strict";r.d(t,{U:function(){return n}});let i=/^0x[a-fA-F0-9]{40}$/;function n(e){return i.test(e)}},35215:function(e,t,r){"use strict";r.d(t,{n:function(){return l},y:function(){return s}});var i=r(95950),n=r(20722),o=r(48519),a=r(36063);let s=e=>"code"in e?-1!==e.code&&-32004!==e.code&&-32005!==e.code&&-32042!==e.code&&-32603!==e.code:e instanceof n.Gg&&!!e.status&&403!==e.status&&408!==e.status&&413!==e.status&&429!==e.status&&500!==e.status&&502!==e.status&&503!==e.status&&504!==e.status;function l(e,{retryDelay:t=150,retryCount:r=3}={}){return async l=>(0,a.J)(async()=>{try{return await e(l)}catch(e){switch(e.code){case o.s7.code:throw new o.s7(e);case o.B.code:throw new o.B(e);case o.LX.code:throw new o.LX(e);case o.nY.code:throw new o.nY(e);case o.XS.code:throw new o.XS(e);case o.yR.code:throw new o.yR(e);case o.Og.code:throw new o.Og(e);case o.pT.code:throw new o.pT(e);case o.KB.code:throw new o.KB(e);case o.gS.code:throw new o.gS(e);case o.Pv.code:throw new o.Pv(e);case o.GD.code:throw new o.GD(e);case o.ab.code:throw new o.ab(e);case o.PE.code:throw new o.PE(e);case o.Ts.code:throw new o.Ts(e);case o.u5.code:throw new o.u5(e);case o.I0.code:throw new o.I0(e);case o.x3.code:throw new o.x3(e);case 5e3:throw new o.ab(e);default:if(e instanceof i.G)throw e;throw new o.ir(e)}}},{delay:({count:e,error:r})=>{if(r&&r instanceof n.Gg){let e=r?.headers?.get("Retry-After");if(e?.match(/\d/))return 1e3*parseInt(e)}return~~(1<<e)*t},retryCount:r,shouldRetry:({error:e})=>!s(e)})}},71186:function(e,t,r){"use strict";function i(e,t={}){let{fees:r=e.fees,formatters:i=e.formatters,serializers:n=e.serializers}=t;return{...e,fees:r,formatters:i,serializers:n}}r.d(t,{a:function(){return i}})},94540:function(e,t,r){"use strict";r.d(t,{L:function(){return n}});var i=r(27878);function n({blockNumber:e,chain:t,contract:r}){let n=t?.contracts?.[r];if(!n)throw new i.mm({chain:t,contract:{name:r}});if(e&&n.blockCreated&&n.blockCreated>e)throw new i.mm({blockNumber:e,chain:t,contract:{name:r,blockCreated:n.blockCreated}});return n.address}},69809:function(e,t,r){"use strict";function i(e){return"string"==typeof e[0]?n(e):function(e){let t=0;for(let r of e)t+=r.length;let r=new Uint8Array(t),i=0;for(let t of e)r.set(t,i),i+=t.length;return r}(e)}function n(e){return`0x${e.reduce((e,t)=>e+t.replace("0x",""),"")}`}r.d(t,{SM:function(){return n},zo:function(){return i}})},45008:function(e,t,r){"use strict";function i(e,{strict:t=!0}={}){return!!e&&"string"==typeof e&&(t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x"))}r.d(t,{v:function(){return i}})},99725:function(e,t,r){"use strict";r.d(t,{gc:function(){return o},vk:function(){return n}});var i=r(741);function n(e,{dir:t,size:r=32}={}){return"string"==typeof e?o(e,{dir:t,size:r}):function(e,{dir:t,size:r=32}={}){if(null===r)return e;if(e.length>r)throw new i.$({size:e.length,targetSize:r,type:"bytes"});let n=new Uint8Array(r);for(let i=0;i<r;i++){let o="right"===t;n[o?i:r-i-1]=e[o?i:e.length-i-1]}return n}(e,{dir:t,size:r})}function o(e,{dir:t,size:r=32}={}){if(null===r)return e;let n=e.replace("0x","");if(n.length>2*r)throw new i.$({size:Math.ceil(n.length/2),targetSize:r,type:"hex"});return`0x${n["right"===t?"padEnd":"padStart"](2*r,"0")}`}},39868:function(e,t,r){"use strict";r.d(t,{d:function(){return n}});var i=r(45008);function n(e){return(0,i.v)(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}},72619:function(e,t,r){"use strict";r.d(t,{tP:function(){return a}});var i=r(741),n=r(45008),o=r(39868);function a(e,t,r,{strict:i}={}){return(0,n.v)(e,{strict:!1})?function(e,t,r,{strict:i}={}){s(e,t);let n=`0x${e.replace("0x","").slice((t??0)*2,(r??e.length)*2)}`;return i&&l(n,t,r),n}(e,t,r,{strict:i}):function(e,t,r,{strict:i}={}){s(e,t);let n=e.slice(t,r);return i&&l(n,t,r),n}(e,t,r,{strict:i})}function s(e,t){if("number"==typeof t&&t>0&&t>(0,o.d)(e)-1)throw new i.m({offset:t,position:"start",size:(0,o.d)(e)})}function l(e,t,r){if("number"==typeof t&&"number"==typeof r&&(0,o.d)(e)!==r-t)throw new i.m({offset:r,position:"end",size:(0,o.d)(e)})}},94973:function(e,t,r){"use strict";function i(e,{dir:t="left"}={}){let r="string"==typeof e?e.replace("0x",""):e,i=0;for(let e=0;e<r.length-1&&"0"===r["left"===t?e:r.length-e-1].toString();e++)i++;return(r="left"===t?r.slice(i):r.slice(0,r.length-i),"string"==typeof e)?(1===r.length&&"right"===t&&(r=`${r}0`),`0x${r.length%2==1?`0${r}`:r}`):r}r.d(t,{f:function(){return i}})},30838:function(e,t,r){"use strict";r.d(t,{XA:function(){return c},Yf:function(){return s},ly:function(){return u},rR:function(){return h},y_:function(){return l}});var i=r(86714),n=r(39868),o=r(94973),a=r(56728);function s(e,{size:t}){if((0,n.d)(e)>t)throw new i.M6({givenSize:(0,n.d)(e),maxSize:t})}function l(e,t={}){let{signed:r}=t;t.size&&s(e,{size:t.size});let i=BigInt(e);if(!r)return i;let n=(e.length-2)/2,o=(1n<<8n*BigInt(n)-1n)-1n;return i<=o?i:i-BigInt(`0x${"f".padStart(2*n,"f")}`)-1n}function c(e,t={}){let r=e;if(t.size&&(s(r,{size:t.size}),r=(0,o.f)(r)),"0x00"===(0,o.f)(r))return!1;if("0x01"===(0,o.f)(r))return!0;throw new i.Cd(r)}function u(e,t={}){return Number(l(e,t))}function h(e,t={}){let r=(0,a.nr)(e);return t.size&&(s(r,{size:t.size}),r=(0,o.f)(r,{dir:"right"})),new TextDecoder().decode(r)}},56728:function(e,t,r){"use strict";r.d(t,{O0:function(){return c},nr:function(){return d},qX:function(){return f}});var i=r(95950),n=r(45008),o=r(99725),a=r(30838),s=r(21693);let l=new TextEncoder;function c(e,t={}){return"number"==typeof e||"bigint"==typeof e?function(e,t){let r=(0,s.eC)(e,t);return d(r)}(e,t):"boolean"==typeof e?function(e,t={}){let r=new Uint8Array(1);return(r[0]=Number(e),"number"==typeof t.size)?((0,a.Yf)(r,{size:t.size}),(0,o.vk)(r,{size:t.size})):r}(e,t):(0,n.v)(e)?d(e,t):f(e,t)}let u={zero:48,nine:57,A:65,F:70,a:97,f:102};function h(e){return e>=u.zero&&e<=u.nine?e-u.zero:e>=u.A&&e<=u.F?e-(u.A-10):e>=u.a&&e<=u.f?e-(u.a-10):void 0}function d(e,t={}){let r=e;t.size&&((0,a.Yf)(r,{size:t.size}),r=(0,o.vk)(r,{dir:"right",size:t.size}));let n=r.slice(2);n.length%2&&(n=`0${n}`);let s=n.length/2,l=new Uint8Array(s);for(let e=0,t=0;e<s;e++){let r=h(n.charCodeAt(t++)),o=h(n.charCodeAt(t++));if(void 0===r||void 0===o)throw new i.G(`Invalid byte sequence ("${n[t-2]}${n[t-1]}" in "${n}").`);l[e]=16*r+o}return l}function f(e,t={}){let r=l.encode(e);return"number"==typeof t.size?((0,a.Yf)(r,{size:t.size}),(0,o.vk)(r,{dir:"right",size:t.size})):r}},21693:function(e,t,r){"use strict";r.d(t,{$G:function(){return d},C4:function(){return l},NC:function(){return s},ci:function(){return c},eC:function(){return u}});var i=r(86714),n=r(99725),o=r(30838);let a=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function s(e,t={}){return"number"==typeof e||"bigint"==typeof e?u(e,t):"string"==typeof e?d(e,t):"boolean"==typeof e?l(e,t):c(e,t)}function l(e,t={}){let r=`0x${Number(e)}`;return"number"==typeof t.size?((0,o.Yf)(r,{size:t.size}),(0,n.vk)(r,{size:t.size})):r}function c(e,t={}){let r="";for(let t=0;t<e.length;t++)r+=a[e[t]];let i=`0x${r}`;return"number"==typeof t.size?((0,o.Yf)(i,{size:t.size}),(0,n.vk)(i,{dir:"right",size:t.size})):i}function u(e,t={}){let r;let{signed:o,size:a}=t,s=BigInt(e);a?r=o?(1n<<8n*BigInt(a)-1n)-1n:2n**(8n*BigInt(a))-1n:"number"==typeof e&&(r=BigInt(Number.MAX_SAFE_INTEGER));let l="bigint"==typeof r&&o?-r-1n:0;if(r&&s>r||s<l){let t="bigint"==typeof e?"n":"";throw new i.J5({max:r?`${r}${t}`:void 0,min:`${l}${t}`,signed:o,size:a,value:`${e}${t}`})}let c=`0x${(o&&s<0?(1n<<BigInt(8*a))+BigInt(s):s).toString(16)}`;return a?(0,n.vk)(c,{size:a}):c}let h=new TextEncoder;function d(e,t={}){let r=h.encode(e);return c(r,t)}},36074:function(e,t,r){"use strict";r.d(t,{k:function(){return o}});var i=r(95950),n=r(40009);function o(e,t){let r=(e.details||"").toLowerCase(),o=e.walk(e=>e.code===n.M_.code);if(o instanceof i.G)return new n.M_({cause:e,message:o.details});if(n.M_.nodeMessage.test(r))return new n.M_({cause:e,message:e.details});if(n.Hh.nodeMessage.test(r))return new n.Hh({cause:e,maxFeePerGas:t?.maxFeePerGas});if(n.G$.nodeMessage.test(r))return new n.G$({cause:e,maxFeePerGas:t?.maxFeePerGas});if(n.ZI.nodeMessage.test(r))return new n.ZI({cause:e,nonce:t?.nonce});if(n.vU.nodeMessage.test(r))return new n.vU({cause:e,nonce:t?.nonce});if(n.se.nodeMessage.test(r))return new n.se({cause:e,nonce:t?.nonce});else if(n.C_.nodeMessage.test(r))return new n.C_({cause:e});else if(n.WF.nodeMessage.test(r))return new n.WF({cause:e,gas:t?.gas});else if(n.dR.nodeMessage.test(r))return new n.dR({cause:e,gas:t?.gas});else if(n.pZ.nodeMessage.test(r))return new n.pZ({cause:e});else if(n.cs.nodeMessage.test(r))return new n.cs({cause:e,maxFeePerGas:t?.maxFeePerGas,maxPriorityFeePerGas:t?.maxPriorityFeePerGas});return new n.cj({cause:e})}},78723:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var i=r(52017);function n(e){let t=e.transactions?.map(e=>"string"==typeof e?e:i.Tr(e));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,difficulty:e.difficulty?BigInt(e.difficulty):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:t,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}},21028:function(e,t,r){"use strict";function i(e,{format:t}){if(!t)return{};let r={},i=t(e||{});return!function t(i){let n=Object.keys(i);for(let o of n)o in e&&(r[o]=e[o]),i[o]&&"object"==typeof i[o]&&!Array.isArray(i[o])&&t(i[o])}(i),r}r.d(t,{K:function(){return i}})},52017:function(e,t,r){"use strict";r.d(t,{Tr:function(){return o},c8:function(){return n}});var i=r(30838);let n={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function o(e){let t={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?(0,i.ly)(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?(0,i.ly)(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?n[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return"legacy"===t.type&&(delete t.accessList,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),"eip2930"===t.type&&(delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t}},86868:function(e,t,r){"use strict";r.d(t,{tG:function(){return o}});var i=r(21693);let n={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function o(e){return{...e,gas:void 0!==e.gas?(0,i.eC)(e.gas):void 0,gasPrice:void 0!==e.gasPrice?(0,i.eC)(e.gasPrice):void 0,maxFeePerGas:void 0!==e.maxFeePerGas?(0,i.eC)(e.maxFeePerGas):void 0,maxPriorityFeePerGas:void 0!==e.maxPriorityFeePerGas?(0,i.eC)(e.maxPriorityFeePerGas):void 0,nonce:void 0!==e.nonce?(0,i.eC)(e.nonce):void 0,type:void 0!==e.type?n[e.type]:void 0,value:void 0!==e.value?(0,i.eC)(e.value):void 0}}},82600:function(e,t,r){"use strict";function i(e,t){return r=>e[t.name]?.(r)??t(e,r)}r.d(t,{s:function(){return i}})},77688:function(e,t,r){"use strict";r.d(t,{e:function(){return l}});var i=r(56728),n=r(86933);let o=e=>(0,n.r)(e);var a=r(55852);let s=e=>(0,a.w)((0,i.O0)(e)),l=e=>s(o(e))},33655:function(e,t,r){"use strict";r.d(t,{o:function(){return l}});var i=r(72619),n=r(56728),o=r(86933),a=r(55852);let s=e=>(0,a.w)((0,n.O0)(e)),l=e=>(0,i.tP)(s((0,o.r)(e)),0,4)},86933:function(e,t,r){"use strict";r.d(t,{r:function(){return a}});var i=r(40928);let n=/((function|event)\s)?(.*)(\((.*)\))/;function o(e){let t=e.match(n),r=t?.[2]||void 0,i=t?.[3],o=t?.[5]||void 0;return{type:r,name:i,params:o}}let a=e=>{if("string"==typeof e){let t=o(e).name,r=function(e){let t=o(e).params,r=t?.split(",").map(e=>e.trim().split(" "));return r?.map(e=>({type:e[0],name:"indexed"===e[1]?e[2]:e[1],..."indexed"===e[1]?{indexed:!0}:{}}))}(e)||[];return`${t}(${r.map(({type:e})=>e).join(",")})`}return(0,i.t)(e)}},55852:function(e,t,r){"use strict";function i(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`Wrong positive integer: ${e}`)}function n(e,...t){if(!(e instanceof Uint8Array))throw Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function o(e,t=!0){if(e.destroyed)throw Error("Hash instance has been destroyed");if(t&&e.finished)throw Error("Hash#digest() has already been called")}r.d(t,{w:function(){return T}});let a=BigInt(4294967296-1),s=BigInt(32),l=(e,t,r)=>e<<r|t>>>32-r,c=(e,t,r)=>t<<r|e>>>32-r,u=(e,t,r)=>t<<r-32|e>>>64-r,h=(e,t,r)=>e<<r-32|t>>>64-r,d=e=>e instanceof Uint8Array,f=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),p=68===new Uint8Array(new Uint32Array([287454020]).buffer)[0];if(!p)throw Error("Non little-endian hardware is not supported");function g(e){if("string"==typeof e&&(e=function(e){if("string"!=typeof e)throw Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}(e)),!d(e))throw Error(`expected Uint8Array, got ${typeof e}`);return e}class w{clone(){return this._cloneInto()}}let[b,m,y]=[[],[],[]],v=BigInt(0),x=BigInt(1),C=BigInt(2),E=BigInt(7),k=BigInt(256),S=BigInt(113);for(let e=0,t=x,r=1,i=0;e<24;e++){[r,i]=[i,(2*r+3*i)%5],b.push(2*(5*i+r)),m.push((e+1)*(e+2)/2%64);let n=v;for(let e=0;e<7;e++)(t=(t<<x^(t>>E)*S)%k)&C&&(n^=x<<(x<<BigInt(e))-x);y.push(n)}let[_,A]=function(e,t=!1){let r=new Uint32Array(e.length),i=new Uint32Array(e.length);for(let n=0;n<e.length;n++){let{h:o,l}=function(e,t=!1){return t?{h:Number(e&a),l:Number(e>>s&a)}:{h:0|Number(e>>s&a),l:0|Number(e&a)}}(e[n],t);[r[n],i[n]]=[o,l]}return[r,i]}(y,!0),$=(e,t,r)=>r>32?u(e,t,r):l(e,t,r),P=(e,t,r)=>r>32?h(e,t,r):c(e,t,r);class O extends w{constructor(e,t,r,n=!1,o=24){if(super(),this.blockLen=e,this.suffix=t,this.outputLen=r,this.enableXOF=n,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,i(r),0>=this.blockLen||this.blockLen>=200)throw Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=f(this.state)}keccak(){!function(e,t=24){let r=new Uint32Array(10);for(let i=24-t;i<24;i++){for(let t=0;t<10;t++)r[t]=e[t]^e[t+10]^e[t+20]^e[t+30]^e[t+40];for(let t=0;t<10;t+=2){let i=(t+8)%10,n=(t+2)%10,o=r[n],a=r[n+1],s=$(o,a,1)^r[i],l=P(o,a,1)^r[i+1];for(let r=0;r<50;r+=10)e[t+r]^=s,e[t+r+1]^=l}let t=e[2],n=e[3];for(let r=0;r<24;r++){let i=m[r],o=$(t,n,i),a=P(t,n,i),s=b[r];t=e[s],n=e[s+1],e[s]=o,e[s+1]=a}for(let t=0;t<50;t+=10){for(let i=0;i<10;i++)r[i]=e[t+i];for(let i=0;i<10;i++)e[t+i]^=~r[(i+2)%10]&r[(i+4)%10]}e[0]^=_[i],e[1]^=A[i]}r.fill(0)}(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){o(this);let{blockLen:t,state:r}=this;e=g(e);let i=e.length;for(let n=0;n<i;){let o=Math.min(t-this.pos,i-n);for(let t=0;t<o;t++)r[this.pos++]^=e[n++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:e,suffix:t,pos:r,blockLen:i}=this;e[r]^=t,(128&t)!=0&&r===i-1&&this.keccak(),e[i-1]^=128,this.keccak()}writeInto(e){o(this,!1),n(e),this.finish();let t=this.state,{blockLen:r}=this;for(let i=0,n=e.length;i<n;){this.posOut>=r&&this.keccak();let o=Math.min(r-this.posOut,n-i);e.set(t.subarray(this.posOut,this.posOut+o),i),this.posOut+=o,i+=o}return e}xofInto(e){if(!this.enableXOF)throw Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return i(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(!function(e,t){n(e);let r=t.outputLen;if(e.length<r)throw Error(`digestInto() expects output buffer of length at least ${r}`)}(e,this),this.finished)throw Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){let{blockLen:t,suffix:r,outputLen:i,rounds:n,enableXOF:o}=this;return e||(e=new O(t,r,i,o,n)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=n,e.suffix=r,e.outputLen=i,e.enableXOF=o,e.destroyed=this.destroyed,e}}let D=function(e){let t=t=>e().update(g(t)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}(()=>new O(136,1,32));var I=r(45008),R=r(56728),N=r(21693);function T(e,t){let r=D((0,I.v)(e,{strict:!1})?(0,R.O0)(e):e);return"bytes"===(t||"hex")?r:(0,N.NC)(r)}},33668:function(e,t,r){"use strict";r.d(t,{S:function(){return n}});let i=new Map;function n({fn:e,id:t,shouldSplitBatch:r,wait:n=0,sort:o}){let a=async()=>{let t=c();s();let r=t.map(({args:e})=>e);0!==r.length&&e(r).then(e=>{o&&Array.isArray(e)&&e.sort(o),t.forEach(({pendingPromise:t},r)=>t.resolve?.([e[r],e]))}).catch(e=>{t.forEach(({pendingPromise:t})=>t.reject?.(e))})},s=()=>i.delete(t),l=()=>c().map(({args:e})=>e),c=()=>i.get(t)||[],u=e=>i.set(t,[...c(),e]);return{flush:s,async schedule(e){let t={},i=new Promise((e,r)=>{t.resolve=e,t.reject=r}),o=r?.([...l(),e]);o&&a();let s=c().length>0;return s?u({args:e,pendingPromise:t}):(u({args:e,pendingPromise:t}),setTimeout(a,n)),i}}}},36063:function(e,t,r){"use strict";r.d(t,{J:function(){return n}});var i=r(21810);function n(e,{delay:t=100,retryCount:r=2,shouldRetry:n=()=>!0}={}){return new Promise((o,a)=>{let s=async({count:l=0}={})=>{let c=async({error:e})=>{let r="function"==typeof t?t({count:l,error:e}):t;r&&await (0,i.D)(r),s({count:l+1})};try{let t=await e();o(t)}catch(e){if(l<r&&await n({count:l,error:e}))return c({error:e});a(e)}};s()})}},71891:function(e,t,r){"use strict";r.d(t,{P:function(){return i}});let i=(e,t,r)=>JSON.stringify(e,(e,r)=>{let i="bigint"==typeof r?r.toString():r;return"function"==typeof t?t(e,i):i},r)},2445:function(e,t,r){"use strict";r.d(t,{F:function(){return l}});var i=r(4832),n=r(21485),o=r(40009),a=r(44818),s=r(87364);function l(e){let{account:t,gasPrice:r,maxFeePerGas:l,maxPriorityFeePerGas:c,to:u}=e,h=t?(0,i.T)(t):void 0;if(h&&!(0,s.U)(h.address))throw new n.b({address:h.address});if(u&&!(0,s.U)(u))throw new n.b({address:u});if(void 0!==r&&(void 0!==l||void 0!==c))throw new a.xY;if(l&&l>2n**256n-1n)throw new o.Hh({maxFeePerGas:l});if(c&&l&&c>l)throw new o.cs({maxFeePerGas:l,maxPriorityFeePerGas:c})}},29578:function(e,t,r){"use strict";r.d(t,{cj:function(){return h},iC:function(){return u}});var i=r(71878),n=r(21485),o=r(87364),a=r(39868),s=r(21693);let l=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,c=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function u({domain:e,message:t,primaryType:r,types:u}){let h=(e,t)=>{for(let r of e){let{name:e,type:d}=r,f=t[e],p=d.match(c);if(p&&("number"==typeof f||"bigint"==typeof f)){let[e,t,r]=p;(0,s.eC)(f,{signed:"int"===t,size:parseInt(r)/8})}if("address"===d&&"string"==typeof f&&!(0,o.U)(f))throw new n.b({address:f});let g=d.match(l);if(g){let[e,t]=g;if(t&&(0,a.d)(f)!==parseInt(t))throw new i.KY({expectedSize:parseInt(t),givenSize:(0,a.d)(f)})}let w=u[d];w&&h(w,f)}};if(u.EIP712Domain&&e&&h(u.EIP712Domain,e),"EIP712Domain"!==r){let e=u[r];h(e,t)}}function h({domain:e}){return["string"==typeof e?.name&&{name:"name",type:"string"},e?.version&&{name:"version",type:"string"},"number"==typeof e?.chainId&&{name:"chainId",type:"uint256"},e?.verifyingContract&&{name:"verifyingContract",type:"address"},e?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}},79352:function(e,t,r){"use strict";r.d(t,{d:function(){return o}});var i=r(36238),n=r(16775);function o(e,t="wei"){return(0,n.b)(e,i.ez[t])}},32421:function(e,t,r){"use strict";r.d(t,{o:function(){return o}});var i=r(36238),n=r(16775);function o(e,t="wei"){return(0,n.b)(e,i.Zn[t])}},16775:function(e,t,r){"use strict";function i(e,t){let r=e.toString(),i=r.startsWith("-");i&&(r=r.slice(1));let[n,o]=[(r=r.padStart(t,"0")).slice(0,r.length-t),r.slice(r.length-t)];return o=o.replace(/(0+)$/,""),`${i?"-":""}${n||"0"}${o?`.${o}`:""}`}r.d(t,{b:function(){return i}})},21810:function(e,t,r){"use strict";async function i(e){return new Promise(t=>setTimeout(t,e))}r.d(t,{D:function(){return i}})},56926:function(e,t,r){"use strict";let i;function n(){}r.d(t,{eM:function(){return ex},_g:function(){return em},mA:function(){return eT},xx:function(){return eO},$4:function(){return eU},do:function(){return ez},GG:function(){return eH},g0:function(){return eF},BX:function(){return eq}});let o="undefined"==typeof window||"Deno"in window;function a(){}function s(e){return"number"==typeof e&&e>=0&&e!==1/0}function l(e,t){return Math.max(e+(t||0)-Date.now(),0)}function c(e,t,r){return C(e)?"function"==typeof t?{...r,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function u(e,t,r){return C(e)?"function"==typeof t?{...r,mutationKey:e,mutationFn:t}:{...t,mutationKey:e}:"function"==typeof e?{...t,mutationFn:e}:{...e}}function h(e,t,r){return C(e)?[{...t,queryKey:e},r]:[e||{},t]}function d(e,t){let{type:r="all",exact:i,fetchStatus:n,predicate:o,queryKey:a,stale:s}=e;if(C(a)){if(i){if(t.queryHash!==p(a,t.options))return!1}else{if(!w(t.queryKey,a))return!1}}if("all"!==r){let e=t.isActive();if("active"===r&&!e||"inactive"===r&&e)return!1}return("boolean"!=typeof s||t.isStale()===s)&&(void 0===n||n===t.state.fetchStatus)&&(!o||!!o(t))}function f(e,t){let{exact:r,fetching:i,predicate:n,mutationKey:o}=e;if(C(o)){if(!t.options.mutationKey)return!1;if(r){if(g(t.options.mutationKey)!==g(o))return!1}else{if(!w(t.options.mutationKey,o))return!1}}return("boolean"!=typeof i||"loading"===t.state.status===i)&&(!n||!!n(t))}function p(e,t){let r=(null==t?void 0:t.queryKeyHashFn)||g;return r(e)}function g(e){return JSON.stringify(e,(e,t)=>v(t)?Object.keys(t).sort().reduce((e,r)=>(e[r]=t[r],e),{}):t)}function w(e,t){return e===t||typeof e==typeof t&&!!e&&!!t&&"object"==typeof e&&"object"==typeof t&&!Object.keys(t).some(r=>!w(e[r],t[r]))}function b(e,t){if(e===t)return e;let r=y(e)&&y(t);if(r||v(e)&&v(t)){let i=r?e.length:Object.keys(e).length,n=r?t:Object.keys(t),o=n.length,a=r?[]:{},s=0;for(let i=0;i<o;i++){let o=r?i:n[i];a[o]=b(e[o],t[o]),a[o]===e[o]&&s++}return i===o&&s===i?e:a}return t}function m(e,t){if(e&&!t||t&&!e)return!1;for(let r in e)if(e[r]!==t[r])return!1;return!0}function y(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function v(e){if(!x(e))return!1;let t=e.constructor;if(void 0===t)return!0;let r=t.prototype;return!!(x(r)&&r.hasOwnProperty("isPrototypeOf"))}function x(e){return"[object Object]"===Object.prototype.toString.call(e)}function C(e){return Array.isArray(e)}function E(e){return new Promise(t=>{setTimeout(t,e)})}function k(e){E(0).then(e)}function S(e,t,r){return null!=r.isDataEqual&&r.isDataEqual(e,t)?e:"function"==typeof r.structuralSharing?r.structuralSharing(e,t):!1!==r.structuralSharing?b(e,t):t}let _=console,A=function(){let e=[],t=0,r=e=>{e()},i=e=>{e()},n=i=>{t?e.push(i):k(()=>{r(i)})},o=()=>{let t=e;e=[],t.length&&k(()=>{i(()=>{t.forEach(e=>{r(e)})})})};return{batch:e=>{let r;t++;try{r=e()}finally{--t||o()}return r},batchCalls:e=>(...t)=>{n(()=>{e(...t)})},schedule:n,setNotifyFunction:e=>{r=e},setBatchNotifyFunction:e=>{i=e}}}();class ${constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){let t={listener:e};return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}let P=new class extends ${constructor(){super(),this.setup=e=>{if(!o&&window.addEventListener){let t=()=>e();return window.addEventListener("visibilitychange",t,!1),window.addEventListener("focus",t,!1),()=>{window.removeEventListener("visibilitychange",t),window.removeEventListener("focus",t)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e(e=>{"boolean"==typeof e?this.setFocused(e):this.onFocus()})}setFocused(e){let t=this.focused!==e;t&&(this.focused=e,this.onFocus())}onFocus(){this.listeners.forEach(({listener:e})=>{e()})}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}},O=["online","offline"],D=new class extends ${constructor(){super(),this.setup=e=>{if(!o&&window.addEventListener){let t=()=>e();return O.forEach(e=>{window.addEventListener(e,t,!1)}),()=>{O.forEach(e=>{window.removeEventListener(e,t)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e(e=>{"boolean"==typeof e?this.setOnline(e):this.onOnline()})}setOnline(e){let t=this.online!==e;t&&(this.online=e,this.onOnline())}onOnline(){this.listeners.forEach(({listener:e})=>{e()})}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}};function I(e){return Math.min(1e3*2**e,3e4)}function R(e){return(null!=e?e:"online")!=="online"||D.isOnline()}class N{constructor(e){this.revert=null==e?void 0:e.revert,this.silent=null==e?void 0:e.silent}}function T(e){return e instanceof N}function M(e){let t,r,i,n=!1,o=0,a=!1,s=new Promise((e,t)=>{r=e,i=t}),l=()=>!P.isFocused()||"always"!==e.networkMode&&!D.isOnline(),c=i=>{a||(a=!0,null==e.onSuccess||e.onSuccess(i),null==t||t(),r(i))},u=r=>{a||(a=!0,null==e.onError||e.onError(r),null==t||t(),i(r))},h=()=>new Promise(r=>{t=e=>{let t=a||!l();return t&&r(e),t},null==e.onPause||e.onPause()}).then(()=>{t=void 0,a||null==e.onContinue||e.onContinue()}),d=()=>{let t;if(!a){try{t=e.fn()}catch(e){t=Promise.reject(e)}Promise.resolve(t).then(c).catch(t=>{var r,i;if(a)return;let s=null!=(r=e.retry)?r:3,c=null!=(i=e.retryDelay)?i:I,f="function"==typeof c?c(o,t):c,p=!0===s||"number"==typeof s&&o<s||"function"==typeof s&&s(o,t);if(n||!p){u(t);return}o++,null==e.onFail||e.onFail(o,t),E(f).then(()=>{if(l())return h()}).then(()=>{n?u(t):d()})})}};return R(e.networkMode)?d():h().then(d),{promise:s,cancel:t=>{a||(u(new N(t)),null==e.abort||e.abort())},continue:()=>{let e=null==t?void 0:t();return e?s:Promise.resolve()},cancelRetry:()=>{n=!0},continueRetry:()=>{n=!1}}}class j{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),s(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,null!=e?e:o?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class U extends j{constructor(e){super(),this.abortSignalConsumed=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.logger=e.logger||_,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||function(e){let t="function"==typeof e.initialData?e.initialData():e.initialData,r=void 0!==t,i=r?"function"==typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:r?null!=i?i:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"loading",fetchStatus:"idle"}}(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.cache.remove(this)}setData(e,t){let r=S(this.state.data,e,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:null==t?void 0:t.updatedAt,manual:null==t?void 0:t.manual}),r}setState(e,t){this.dispatch({type:"setState",state:e,setStateOptions:t})}cancel(e){var t;let r=this.promise;return null==(t=this.retryer)||t.cancel(e),r?r.then(a).catch(a):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(e=>!1!==e.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!l(this.state.dataUpdatedAt,e)}onFocus(){var e;let t=this.observers.find(e=>e.shouldFetchOnWindowFocus());t&&t.refetch({cancelRefetch:!1}),null==(e=this.retryer)||e.continue()}onOnline(){var e;let t=this.observers.find(e=>e.shouldFetchOnReconnect());t&&t.refetch({cancelRefetch:!1}),null==(e=this.retryer)||e.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,t){var r,i,n,o;if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&null!=t&&t.cancelRefetch)this.cancel({silent:!0});else if(this.promise)return null==(n=this.retryer)||n.continueRetry(),this.promise}if(e&&this.setOptions(e),!this.options.queryFn){let e=this.observers.find(e=>e.options.queryFn);e&&this.setOptions(e.options)}let a=function(){if("function"==typeof AbortController)return new AbortController}(),s={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},l=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>{if(a)return this.abortSignalConsumed=!0,a.signal}})};l(s);let c={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(s)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'")};l(c),null==(r=this.options.behavior)||r.onFetch(c),this.revertState=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==(null==(i=c.fetchOptions)?void 0:i.meta))&&this.dispatch({type:"fetch",meta:null==(o=c.fetchOptions)?void 0:o.meta});let u=e=>{if(T(e)&&e.silent||this.dispatch({type:"error",error:e}),!T(e)){var t,r,i,n;null==(t=(r=this.cache.config).onError)||t.call(r,e,this),null==(i=(n=this.cache.config).onSettled)||i.call(n,this.state.data,e,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=M({fn:c.fetchFn,abort:null==a?void 0:a.abort.bind(a),onSuccess:e=>{var t,r,i,n;if(void 0===e){u(Error(this.queryHash+" data is undefined"));return}this.setData(e),null==(t=(r=this.cache.config).onSuccess)||t.call(r,e,this),null==(i=(n=this.cache.config).onSettled)||i.call(n,e,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:u,onFail:(e,t)=>{this.dispatch({type:"failed",failureCount:e,error:t})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(e){this.state=(t=>{var r,i;switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null!=(r=e.meta)?r:null,fetchStatus:R(this.options.networkMode)?"fetching":"paused",...!t.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...t,data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:null!=(i=e.dataUpdatedAt)?i:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let n=e.error;if(T(n)&&n.revert&&this.revertState)return{...this.revertState,fetchStatus:"idle"};return{...t,error:n,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:n,fetchStatus:"idle",status:"error"};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}})(this.state),A.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate(e)}),this.cache.notify({query:this,type:"updated",action:e})})}}class B extends ${constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,t,r){var i;let n=t.queryKey,o=null!=(i=t.queryHash)?i:p(n,t),a=this.get(o);return a||(a=new U({cache:this,logger:e.getLogger(),queryKey:n,queryHash:o,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(n)}),this.add(a)),a}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"added",query:e}))}remove(e){let t=this.queriesMap[e.queryHash];t&&(e.destroy(),this.queries=this.queries.filter(t=>t!==e),t===e&&delete this.queriesMap[e.queryHash],this.notify({type:"removed",query:e}))}clear(){A.batch(()=>{this.queries.forEach(e=>{this.remove(e)})})}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,t){let[r]=h(e,t);return void 0===r.exact&&(r.exact=!0),this.queries.find(e=>d(r,e))}findAll(e,t){let[r]=h(e,t);return Object.keys(r).length>0?this.queries.filter(e=>d(r,e)):this.queries}notify(e){A.batch(()=>{this.listeners.forEach(({listener:t})=>{t(e)})})}onFocus(){A.batch(()=>{this.queries.forEach(e=>{e.onFocus()})})}onOnline(){A.batch(()=>{this.queries.forEach(e=>{e.onOnline()})})}}class L extends j{constructor(e){super(),this.defaultOptions=e.defaultOptions,this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||_,this.observers=[],this.state=e.state||F(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter(t=>t!==e),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){var e,t;return null!=(e=null==(t=this.retryer)?void 0:t.continue())?e:this.execute()}async execute(){var e,t,r,i,n,o,a,s,l,c,u,h,d,f,p,g,w,b,m,y;let v="loading"===this.state.status;try{if(!v){this.dispatch({type:"loading",variables:this.options.variables}),await (null==(l=(c=this.mutationCache.config).onMutate)?void 0:l.call(c,this.state.variables,this));let e=await (null==(u=(h=this.options).onMutate)?void 0:u.call(h,this.state.variables));e!==this.state.context&&this.dispatch({type:"loading",context:e,variables:this.state.variables})}let d=await (()=>{var e;return this.retryer=M({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(e,t)=>{this.dispatch({type:"failed",failureCount:e,error:t})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(e=this.options.retry)?e:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise})();return await (null==(e=(t=this.mutationCache.config).onSuccess)?void 0:e.call(t,d,this.state.variables,this.state.context,this)),await (null==(r=(i=this.options).onSuccess)?void 0:r.call(i,d,this.state.variables,this.state.context)),await (null==(n=(o=this.mutationCache.config).onSettled)?void 0:n.call(o,d,null,this.state.variables,this.state.context,this)),await (null==(a=(s=this.options).onSettled)?void 0:a.call(s,d,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:d}),d}catch(e){try{throw await (null==(d=(f=this.mutationCache.config).onError)?void 0:d.call(f,e,this.state.variables,this.state.context,this)),await (null==(p=(g=this.options).onError)?void 0:p.call(g,e,this.state.variables,this.state.context)),await (null==(w=(b=this.mutationCache.config).onSettled)?void 0:w.call(b,void 0,e,this.state.variables,this.state.context,this)),await (null==(m=(y=this.options).onSettled)?void 0:m.call(y,void 0,e,this.state.variables,this.state.context)),e}finally{this.dispatch({type:"error",error:e})}}}dispatch(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"loading":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!R(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"};case"setState":return{...t,...e.state}}})(this.state),A.batch(()=>{this.observers.forEach(t=>{t.onMutationUpdate(e)}),this.mutationCache.notify({mutation:this,type:"updated",action:e})})}}function F(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class z extends ${constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,t,r){let i=new L({mutationCache:this,logger:e.getLogger(),mutationId:++this.mutationId,options:e.defaultMutationOptions(t),state:r,defaultOptions:t.mutationKey?e.getMutationDefaults(t.mutationKey):void 0});return this.add(i),i}add(e){this.mutations.push(e),this.notify({type:"added",mutation:e})}remove(e){this.mutations=this.mutations.filter(t=>t!==e),this.notify({type:"removed",mutation:e})}clear(){A.batch(()=>{this.mutations.forEach(e=>{this.remove(e)})})}getAll(){return this.mutations}find(e){return void 0===e.exact&&(e.exact=!0),this.mutations.find(t=>f(e,t))}findAll(e){return this.mutations.filter(t=>f(e,t))}notify(e){A.batch(()=>{this.listeners.forEach(({listener:t})=>{t(e)})})}resumePausedMutations(){var e;return this.resuming=(null!=(e=this.resuming)?e:Promise.resolve()).then(()=>{let e=this.mutations.filter(e=>e.state.isPaused);return A.batch(()=>e.reduce((e,t)=>e.then(()=>t.continue().catch(a)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function W(e,t){return null==e.getNextPageParam?void 0:e.getNextPageParam(t[t.length-1],t)}class H{constructor(e={}){this.queryCache=e.queryCache||new B,this.mutationCache=e.mutationCache||new z,this.logger=e.logger||_,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,1===this.mountCount&&(this.unsubscribeFocus=P.subscribe(()=>{P.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=D.subscribe(()=>{D.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var e,t;this.mountCount--,0===this.mountCount&&(null==(e=this.unsubscribeFocus)||e.call(this),this.unsubscribeFocus=void 0,null==(t=this.unsubscribeOnline)||t.call(this),this.unsubscribeOnline=void 0)}isFetching(e,t){let[r]=h(e,t);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(e){return this.mutationCache.findAll({...e,fetching:!0}).length}getQueryData(e,t){var r;return null==(r=this.queryCache.find(e,t))?void 0:r.state.data}ensureQueryData(e,t,r){let i=c(e,t,r),n=this.getQueryData(i.queryKey);return n?Promise.resolve(n):this.fetchQuery(i)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:e,state:t})=>{let r=t.data;return[e,r]})}setQueryData(e,t,r){let i=this.queryCache.find(e),n=null==i?void 0:i.state.data,o="function"==typeof t?t(n):t;if(void 0===o)return;let a=c(e),s=this.defaultQueryOptions(a);return this.queryCache.build(this,s).setData(o,{...r,manual:!0})}setQueriesData(e,t,r){return A.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,r)]))}getQueryState(e,t){var r;return null==(r=this.queryCache.find(e,t))?void 0:r.state}removeQueries(e,t){let[r]=h(e,t),i=this.queryCache;A.batch(()=>{i.findAll(r).forEach(e=>{i.remove(e)})})}resetQueries(e,t,r){let[i,n]=h(e,t,r),o=this.queryCache,a={type:"active",...i};return A.batch(()=>(o.findAll(i).forEach(e=>{e.reset()}),this.refetchQueries(a,n)))}cancelQueries(e,t,r){let[i,n={}]=h(e,t,r);void 0===n.revert&&(n.revert=!0);let o=A.batch(()=>this.queryCache.findAll(i).map(e=>e.cancel(n)));return Promise.all(o).then(a).catch(a)}invalidateQueries(e,t,r){let[i,n]=h(e,t,r);return A.batch(()=>{var e,t;if(this.queryCache.findAll(i).forEach(e=>{e.invalidate()}),"none"===i.refetchType)return Promise.resolve();let r={...i,type:null!=(e=null!=(t=i.refetchType)?t:i.type)?e:"active"};return this.refetchQueries(r,n)})}refetchQueries(e,t,r){let[i,n]=h(e,t,r),o=A.batch(()=>this.queryCache.findAll(i).filter(e=>!e.isDisabled()).map(e=>{var t;return e.fetch(void 0,{...n,cancelRefetch:null==(t=null==n?void 0:n.cancelRefetch)||t,meta:{refetchPage:i.refetchPage}})})),s=Promise.all(o).then(a);return null!=n&&n.throwOnError||(s=s.catch(a)),s}fetchQuery(e,t,r){let i=c(e,t,r),n=this.defaultQueryOptions(i);void 0===n.retry&&(n.retry=!1);let o=this.queryCache.build(this,n);return o.isStaleByTime(n.staleTime)?o.fetch(n):Promise.resolve(o.state.data)}prefetchQuery(e,t,r){return this.fetchQuery(e,t,r).then(a).catch(a)}fetchInfiniteQuery(e,t,r){let i=c(e,t,r);return i.behavior={onFetch:e=>{e.fetchFn=()=>{var t,r,i,n,o,a,s;let l;let c=null==(t=e.fetchOptions)?void 0:null==(r=t.meta)?void 0:r.refetchPage,u=null==(i=e.fetchOptions)?void 0:null==(n=i.meta)?void 0:n.fetchMore,h=null==u?void 0:u.pageParam,d=(null==u?void 0:u.direction)==="forward",f=(null==u?void 0:u.direction)==="backward",p=(null==(o=e.state.data)?void 0:o.pages)||[],g=(null==(a=e.state.data)?void 0:a.pageParams)||[],w=g,b=!1,m=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>{var t,r;return null!=(t=e.signal)&&t.aborted?b=!0:null==(r=e.signal)||r.addEventListener("abort",()=>{b=!0}),e.signal}})},y=e.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+e.options.queryHash+"'")),v=(e,t,r,i)=>(w=i?[t,...w]:[...w,t],i?[r,...e]:[...e,r]),x=(t,r,i,n)=>{if(b)return Promise.reject("Cancelled");if(void 0===i&&!r&&t.length)return Promise.resolve(t);let o={queryKey:e.queryKey,pageParam:i,meta:e.options.meta};m(o);let a=y(o),s=Promise.resolve(a).then(e=>v(t,i,e,n));return s};if(p.length){if(d){let t=void 0!==h,r=t?h:W(e.options,p);l=x(p,t,r)}else if(f){let t=void 0!==h,r=t?h:null==(s=e.options).getPreviousPageParam?void 0:s.getPreviousPageParam(p[0],p);l=x(p,t,r,!0)}else{w=[];let t=void 0===e.options.getNextPageParam,r=!c||!p[0]||c(p[0],0,p);l=r?x([],t,g[0]):Promise.resolve(v([],g[0],p[0]));for(let r=1;r<p.length;r++)l=l.then(i=>{let n=!c||!p[r]||c(p[r],r,p);if(n){let n=t?g[r]:W(e.options,i);return x(i,t,n)}return Promise.resolve(v(i,g[r],p[r]))})}}else l=x([]);let C=l.then(e=>({pages:e,pageParams:w}));return C}}},this.fetchQuery(i)}prefetchInfiniteQuery(e,t,r){return this.fetchInfiniteQuery(e,t,r).then(a).catch(a)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,t){let r=this.queryDefaults.find(t=>g(e)===g(t.queryKey));r?r.defaultOptions=t:this.queryDefaults.push({queryKey:e,defaultOptions:t})}getQueryDefaults(e){if(!e)return;let t=this.queryDefaults.find(t=>w(e,t.queryKey));return null==t?void 0:t.defaultOptions}setMutationDefaults(e,t){let r=this.mutationDefaults.find(t=>g(e)===g(t.mutationKey));r?r.defaultOptions=t:this.mutationDefaults.push({mutationKey:e,defaultOptions:t})}getMutationDefaults(e){if(!e)return;let t=this.mutationDefaults.find(t=>w(e,t.mutationKey));return null==t?void 0:t.defaultOptions}defaultQueryOptions(e){if(null!=e&&e._defaulted)return e;let t={...this.defaultOptions.queries,...this.getQueryDefaults(null==e?void 0:e.queryKey),...e,_defaulted:!0};return!t.queryHash&&t.queryKey&&(t.queryHash=p(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.useErrorBoundary&&(t.useErrorBoundary=!!t.suspense),t}defaultMutationOptions(e){return null!=e&&e._defaulted?e:{...this.defaultOptions.mutations,...this.getMutationDefaults(null==e?void 0:e.mutationKey),...e,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}function q(e){return e.state.isPaused}function G(e){return"success"===e.state.status}let V=["added","removed","updated"];function Z(e){return V.includes(e)}async function K({queryClient:e,persister:t,maxAge:r=864e5,buster:i="",hydrateOptions:n}){try{let o=await t.restoreClient();if(o){if(o.timestamp){let a=Date.now()-o.timestamp>r,s=o.buster!==i;a||s?t.removeClient():function(e,t,r){if("object"!=typeof t||null===t)return;let i=e.getMutationCache(),n=e.getQueryCache(),o=t.mutations||[],a=t.queries||[];o.forEach(t=>{var n;i.build(e,{...null==r?void 0:null==(n=r.defaultOptions)?void 0:n.mutations,mutationKey:t.mutationKey},t.state)}),a.forEach(({queryKey:t,state:i,queryHash:o})=>{var a;let s=n.get(o);if(s){if(s.state.dataUpdatedAt<i.dataUpdatedAt){let{fetchStatus:e,...t}=i;s.setState(t)}return}n.build(e,{...null==r?void 0:null==(a=r.defaultOptions)?void 0:a.queries,queryKey:t,queryHash:o},{...i,fetchStatus:"idle"})})}(e,o.clientState,n)}else t.removeClient()}}catch(e){t.removeClient()}}async function Q({queryClient:e,persister:t,buster:r="",dehydrateOptions:i}){let n={buster:r,timestamp:Date.now(),clientState:function(e,t={}){let r=[],i=[];if(!1!==t.dehydrateMutations){let i=t.shouldDehydrateMutation||q;e.getMutationCache().getAll().forEach(e=>{i(e)&&r.push({mutationKey:e.options.mutationKey,state:e.state})})}if(!1!==t.dehydrateQueries){let r=t.shouldDehydrateQuery||G;e.getQueryCache().getAll().forEach(e=>{r(e)&&i.push({state:e.state,queryKey:e.queryKey,queryHash:e.queryHash})})}return{mutations:r,queries:i}}(e,i)};await t.persistClient(n)}var X=r(20558),Y=r(2265);let J=Y.createContext(void 0),ee=Y.createContext(!1);function et(e,t){return e||(t&&"undefined"!=typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=J),window.ReactQueryClientContext):J)}let er=({context:e}={})=>{let t=Y.useContext(et(e,Y.useContext(ee)));if(!t)throw Error("No QueryClient set, use QueryClientProvider to set one");return t},ei=({client:e,children:t,context:r,contextSharing:i=!1})=>{Y.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]);let n=et(r,i);return Y.createElement(ee.Provider,{value:!r&&i},Y.createElement(n.Provider,{value:e},t))},en=Y.createContext(!1),eo=()=>Y.useContext(en);en.Provider;let ea=Y.createContext((i=!1,{clearReset:()=>{i=!1},reset:()=>{i=!0},isReset:()=>i})),es=()=>Y.useContext(ea);var el=r(26272);class ec extends ${constructor(e,t){super(),this.client=e,this.setOptions(t),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var t;let r=this.options;this.options=this.client.defaultMutationOptions(e),m(r,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),null==(t=this.currentMutation)||t.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.currentMutation)||e.removeObserver(this)}}onMutationUpdate(e){this.updateResult();let t={listeners:!0};"success"===e.type?t.onSuccess=!0:"error"===e.type&&(t.onError=!0),this.notify(t)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==e?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){let e=this.currentMutation?this.currentMutation.state:F(),t={...e,isLoading:"loading"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset};this.currentResult=t}notify(e){A.batch(()=>{if(this.mutateOptions&&this.hasListeners()){var t,r,i,n,o,a,s,l;e.onSuccess?(null==(t=(r=this.mutateOptions).onSuccess)||t.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(i=(n=this.mutateOptions).onSettled)||i.call(n,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)):e.onError&&(null==(o=(a=this.mutateOptions).onError)||o.call(a,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(s=(l=this.mutateOptions).onSettled)||s.call(l,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context))}e.listeners&&this.listeners.forEach(({listener:e})=>{e(this.currentResult)})})}}let eu=el.useSyncExternalStore;function eh(){}class ed extends ${constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.currentQuery.addObserver(this),ef(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return ep(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return ep(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){let r=this.options,i=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),m(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();let n=this.hasListeners();n&&eg(this.currentQuery,i,this.options,r)&&this.executeFetch(),this.updateResult(t),n&&(this.currentQuery!==i||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();let o=this.computeRefetchInterval();n&&(this.currentQuery!==i||this.options.enabled!==r.enabled||o!==this.currentRefetchInterval)&&this.updateRefetchInterval(o)}getOptimisticResult(e){let t=this.client.getQueryCache().build(this.client,e),r=this.createResult(t,e);return e.keepPreviousData||(void 0!==e.placeholderData?!r.isPlaceholderData:m(this.getCurrentResult(),r))||(this.currentResult=r,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),r}getCurrentResult(){return this.currentResult}trackResult(e){let t={};return Object.keys(e).forEach(r=>{Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),e[r])})}),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){let t=this.client.defaultQueryOptions(e),r=this.client.getQueryCache().build(this.client,t);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,t))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:null==(t=e.cancelRefetch)||t}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return null!=e&&e.throwOnError||(t=t.catch(a)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),o||this.currentResult.isStale||!s(this.options.staleTime))return;let e=l(this.currentResult.dataUpdatedAt,this.options.staleTime);this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},e+1)}computeRefetchInterval(){var e;return"function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(e=this.options.refetchInterval)&&e}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!o&&!1!==this.options.enabled&&s(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||P.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){let r;let i=this.currentQuery,n=this.options,o=this.currentResult,a=this.currentResultState,s=this.currentResultOptions,l=e!==i,c=l?e.state:this.currentQueryInitialState,u=l?this.currentResult:this.previousQueryResult,{state:h}=e,{dataUpdatedAt:d,error:f,errorUpdatedAt:p,fetchStatus:g,status:w}=h,b=!1,m=!1;if(t._optimisticResults){let r=this.hasListeners(),o=!r&&ef(e,t),a=r&&eg(e,i,t,n);(o||a)&&(g=R(e.options.networkMode)?"fetching":"paused",d||(w="loading")),"isRestoring"===t._optimisticResults&&(g="idle")}if(t.keepPreviousData&&!h.dataUpdatedAt&&null!=u&&u.isSuccess&&"error"!==w)r=u.data,d=u.dataUpdatedAt,w=u.status,b=!0;else if(t.select&&void 0!==h.data){if(o&&h.data===(null==a?void 0:a.data)&&t.select===this.selectFn)r=this.selectResult;else try{this.selectFn=t.select,r=t.select(h.data),r=S(null==o?void 0:o.data,r,t),this.selectResult=r,this.selectError=null}catch(e){this.selectError=e}}else r=h.data;if(void 0!==t.placeholderData&&void 0===r&&"loading"===w){let e;if(null!=o&&o.isPlaceholderData&&t.placeholderData===(null==s?void 0:s.placeholderData))e=o.data;else if(e="function"==typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&void 0!==e)try{e=t.select(e),this.selectError=null}catch(e){this.selectError=e}void 0!==e&&(w="success",r=S(null==o?void 0:o.data,e,t),m=!0)}this.selectError&&(f=this.selectError,r=this.selectResult,p=Date.now(),w="error");let y="fetching"===g,v="loading"===w,x="error"===w,C={status:w,fetchStatus:g,isLoading:v,isSuccess:"success"===w,isError:x,isInitialLoading:v&&y,data:r,dataUpdatedAt:d,error:f,errorUpdatedAt:p,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>c.dataUpdateCount||h.errorUpdateCount>c.errorUpdateCount,isFetching:y,isRefetching:y&&!v,isLoadingError:x&&0===h.dataUpdatedAt,isPaused:"paused"===g,isPlaceholderData:m,isPreviousData:b,isRefetchError:x&&0!==h.dataUpdatedAt,isStale:ew(e,t),refetch:this.refetch,remove:this.remove};return C}updateResult(e){let t=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,m(r,t))return;this.currentResult=r;let i={cache:!0};(null==e?void 0:e.listeners)!==!1&&(()=>{if(!t)return!0;let{notifyOnChangeProps:e}=this.options,r="function"==typeof e?e():e;if("all"===r||!r&&!this.trackedProps.size)return!0;let i=new Set(null!=r?r:this.trackedProps);return this.options.useErrorBoundary&&i.add("error"),Object.keys(this.currentResult).some(e=>{let r=this.currentResult[e]!==t[e];return r&&i.has(e)})})()&&(i.listeners=!0),this.notify({...i,...e})}updateQuery(){let e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;let t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){let t={};"success"===e.type?t.onSuccess=!e.manual:"error"!==e.type||T(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){A.batch(()=>{var t,r,i,n,o,a,s,l;e.onSuccess?(null==(t=(r=this.options).onSuccess)||t.call(r,this.currentResult.data),null==(i=(n=this.options).onSettled)||i.call(n,this.currentResult.data,null)):e.onError&&(null==(o=(a=this.options).onError)||o.call(a,this.currentResult.error),null==(s=(l=this.options).onSettled)||s.call(l,void 0,this.currentResult.error)),e.listeners&&this.listeners.forEach(({listener:e})=>{e(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function ef(e,t){return!1!==t.enabled&&!e.state.dataUpdatedAt&&!("error"===e.state.status&&!1===t.retryOnMount)||e.state.dataUpdatedAt>0&&ep(e,t,t.refetchOnMount)}function ep(e,t,r){if(!1!==t.enabled){let i="function"==typeof r?r(e):r;return"always"===i||!1!==i&&ew(e,t)}return!1}function eg(e,t,r,i){return!1!==r.enabled&&(e!==t||!1===i.enabled)&&(!r.suspense||"error"!==e.state.status)&&ew(e,r)}function ew(e,t){return e.isStaleByTime(t.staleTime)}var eb=r(65401);function em({queryClient:e=new H({defaultOptions:{queries:{cacheTime:864e5,networkMode:"offlineFirst",refetchOnWindowFocus:!1,retry:0},mutations:{networkMode:"offlineFirst"}}}),storage:t=(0,X.o6)({storage:"undefined"!=typeof window&&window.localStorage?window.localStorage:X.wp}),persister:r="undefined"!=typeof window?function({storage:e,key:t="REACT_QUERY_OFFLINE_CACHE",throttleTime:r=1e3,serialize:i=JSON.stringify,deserialize:o=JSON.parse,retry:a}){if(e){let n=r=>{try{e.setItem(t,i(r));return}catch(e){return e}};return{persistClient:function(e,t=100){let r,i=null;return function(...n){r=n,null===i&&(i=setTimeout(()=>{e(...r),i=null},t))}}(e=>{let t=e,r=n(t),i=0;for(;r&&t;)i++,(t=null==a?void 0:a({persistedClient:t,error:r,errorCount:i}))&&(r=n(t))},r),restoreClient:()=>{let r=e.getItem(t);if(r)return o(r)},removeClient:()=>{e.removeItem(t)}}}return{persistClient:n,restoreClient:()=>void 0,removeClient:n}}({key:"cache",storage:t,serialize:e=>e,deserialize:e=>e}):void 0,...i}){let o=(0,X._g)({...i,storage:t});return r&&function(e){K(e).then(()=>{(function(e){let t=e.queryClient.getQueryCache().subscribe(t=>{Z(t.type)&&Q(e)}),r=e.queryClient.getMutationCache().subscribe(t=>{Z(t.type)&&Q(e)})})(e)})}({queryClient:e,persister:r,dehydrateOptions:{shouldDehydrateQuery:e=>0!==e.cacheTime&&!1!==e.queryKey[0].persist}}),Object.assign(o,{queryClient:e})}var ey=Y.createContext(void 0),ev=Y.createContext(void 0);function ex({children:e,config:t}){return Y.createElement(ey.Provider,{children:Y.createElement(ei,{children:e,client:t.queryClient,context:ev}),value:t})}function eC(){let e=Y.useContext(ey);if(!e)throw Error("`useConfig` must be used within `WagmiConfig`.\n\nRead more: https://wagmi.sh/react/WagmiConfig");return e}var eE=el.useSyncExternalStore;function ek(e){return"[object Object]"===Object.prototype.toString.call(e)}function eS(e){return JSON.stringify(e,(e,t)=>!function(e){if(!ek(e))return!1;let t=e.constructor;if(void 0===t)return!0;let r=t.prototype;return!!(ek(r)&&r.hasOwnProperty("isPrototypeOf"))}(t)?"bigint"==typeof t?t.toString():t:Object.keys(t).sort().reduce((e,r)=>(e[r]=t[r],e),{}))}function e_(e,t,r){let i=u(e,t,r);return function(e,t,r){var i,n;let o=u(e,void 0,void 0),a=er({context:o.context}),[s]=Y.useState(()=>new ec(a,o));Y.useEffect(()=>{s.setOptions(o)},[s,o]);let l=eu(Y.useCallback(e=>s.subscribe(A.batchCalls(e)),[s]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),c=Y.useCallback((e,t)=>{s.mutate(e,t).catch(eh)},[s]);if(l.error&&(i=s.options.useErrorBoundary,n=[l.error],"function"==typeof i?i(...n):!!i))throw l.error;return{...l,mutate:c,mutateAsync:l.mutate}}({context:ev,...i})}function eA(e,t,r){let i=Array.isArray(e)?"function"==typeof t?{...r,queryKey:e,queryFn:t}:{...t,queryKey:e}:e,n=function(e,t){var r,i;let n=er({context:e.context}),o=eo(),a=es(),s=n.defaultQueryOptions({...e,queryKeyHashFn:eS});s._optimisticResults=o?"isRestoring":"optimistic",s.onError&&(s.onError=A.batchCalls(s.onError)),s.onSuccess&&(s.onSuccess=A.batchCalls(s.onSuccess)),s.onSettled&&(s.onSettled=A.batchCalls(s.onSettled)),s.suspense&&"number"!=typeof s.staleTime&&(s.staleTime=1e3),(s.suspense||s.useErrorBoundary)&&!a.isReset()&&(s.retryOnMount=!1);let[l]=Y.useState(()=>new t(n,s)),c=l.getOptimisticResult(s);if(eE(Y.useCallback(e=>o?()=>void 0:l.subscribe(A.batchCalls(e)),[l,o]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),Y.useEffect(()=>{a.clearReset()},[a]),Y.useEffect(()=>{l.setOptions(s,{listeners:!1})},[s,l]),s.suspense&&c.isLoading&&c.isFetching&&!o)throw l.fetchOptimistic(s).then(({data:e})=>{s.onSuccess?.(e),s.onSettled?.(e,null)}).catch(e=>{a.clearReset(),s.onError?.(e),s.onSettled?.(void 0,e)});if(c.isError&&!a.isReset()&&!c.isFetching&&(r=s.useErrorBoundary,i=[c.error,l.getCurrentQuery()],"function"==typeof r?r(...i):!!r))throw c.error;let u="loading"===c.status&&"idle"===c.fetchStatus?"idle":c.status,h="loading"===u&&"fetching"===c.fetchStatus;return{...c,defaultedOptions:s,isIdle:"idle"===u,isLoading:h,observer:l,status:u}}({context:ev,...i},ed),o={data:n.data,error:n.error,fetchStatus:n.fetchStatus,isError:n.isError,isFetched:n.isFetched,isFetchedAfterMount:n.isFetchedAfterMount,isFetching:n.isFetching,isIdle:n.isIdle,isLoading:n.isLoading,isRefetching:n.isRefetching,isSuccess:n.isSuccess,refetch:n.refetch,status:n.status,internal:{dataUpdatedAt:n.dataUpdatedAt,errorUpdatedAt:n.errorUpdatedAt,failureCount:n.failureCount,isFetchedAfterMount:n.isFetchedAfterMount,isLoadingError:n.isLoadingError,isPaused:n.isPaused,isPlaceholderData:n.isPlaceholderData,isPreviousData:n.isPreviousData,isRefetchError:n.isRefetchError,isStale:n.isStale,remove:n.remove}};return n.defaultedOptions.notifyOnChangeProps?o:function(e,t){let r={};return Object.keys(e).forEach(i=>{Object.defineProperty(r,i,{configurable:!1,enumerable:!0,get:()=>(t.trackedProps.add(i),e[i])})}),r}(o,n.observer)}var e$=()=>er({context:ev});function eP({chainId:e}={}){return(0,eb.useSyncExternalStoreWithSelector)(t=>(0,X.pC)({chainId:e},t),()=>(0,X.uV)({chainId:e}),()=>(0,X.uV)({chainId:e}),e=>e,(e,t)=>e.uid===t.uid)}function eO({chainId:e}={}){let t=eP({chainId:e});return t.chain.id}function eD({chainId:e,scopeKey:t}){return[{entity:"blockNumber",chainId:e,scopeKey:t}]}function eI({queryKey:[{chainId:e}]}){return(0,X.RQ)({chainId:e})}function eR({cacheTime:e=0,chainId:t,enabled:r=!0,scopeKey:i,staleTime:n,suspense:o,watch:a=!1,onBlock:s,onError:l,onSettled:c,onSuccess:u}={}){let h=eO({chainId:t}),d=eP({chainId:h}),f=function({chainId:e}={}){return(0,eb.useSyncExternalStoreWithSelector)(t=>(0,X.fq)({chainId:e},t),()=>(0,X.jr)({chainId:e}),()=>(0,X.jr)({chainId:e}),e=>e,(e,t)=>e?.uid===t?.uid)}({chainId:h}),p=e$();return Y.useEffect(()=>{if(!r||!a&&!s)return;let e=f??d,t=e.watchBlockNumber({onBlockNumber:e=>{a&&p.setQueryData(eD({chainId:h,scopeKey:i}),e),s&&s(e)},emitOnBegin:!0});return t},[h,i,s,d,p,a,f,r]),eA(eD({scopeKey:i,chainId:h}),eI,{cacheTime:e,enabled:r,staleTime:n,suspense:o,onError:l,onSettled:c,onSuccess:u})}var eN=e=>"object"==typeof e&&!Array.isArray(e);function eT({onConnect:e,onDisconnect:t}={}){let r=eC(),i=Y.useCallback(e=>(0,X.uH)(e),[r]),n=function(e,t,r=t,i=X.vZ){let n=Y.useRef([]),o=(0,eb.useSyncExternalStoreWithSelector)(e,t,r,e=>e,(e,t)=>{if(eN(e)&&eN(t)&&n.current.length){for(let r of n.current){let n=i(e[r],t[r]);if(!n)return!1}return!0}return i(e,t)});if(eN(o)){let e={...o};return Object.defineProperties(e,Object.entries(e).reduce((e,[t,r])=>({...e,[t]:{configurable:!1,enumerable:!0,get:()=>(n.current.includes(t)||n.current.push(t),r)}}),{})),e}return o}(i,X.D0),o=Y.useRef(),a=o.current;return Y.useEffect(()=>{a?.status!=="connected"&&"connected"===n.status&&e?.({address:n.address,connector:n.connector,isReconnected:a?.status==="reconnecting"||a?.status===void 0}),a?.status==="connected"&&"disconnected"===n.status&&t?.(),o.current=n},[e,t,a,n]),n}var eM=e=>[{entity:"connect",...e}],ej=e=>{let{connector:t,chainId:r}=e;if(!t)throw Error("connector is required");return(0,X.$j)({connector:t,chainId:r})};function eU({chainId:e,connector:t,onError:r,onMutate:i,onSettled:n,onSuccess:o}={}){let a=eC(),{data:s,error:l,isError:c,isIdle:u,isLoading:h,isSuccess:d,mutate:f,mutateAsync:p,reset:g,status:w,variables:b}=e_(eM({connector:t,chainId:e}),ej,{onError:r,onMutate:i,onSettled:n,onSuccess:o}),m=Y.useCallback(r=>f({chainId:r?.chainId??e,connector:r?.connector??t}),[e,t,f]),y=Y.useCallback(r=>p({chainId:r?.chainId??e,connector:r?.connector??t}),[e,t,p]);return{connect:m,connectAsync:y,connectors:a.connectors,data:s,error:l,isError:c,isIdle:u,isLoading:h,isSuccess:d,pendingConnector:b?.connector,reset:g,status:w,variables:b}}var eB=e=>[{entity:"switchNetwork",...e}],eL=e=>{let{chainId:t}=e;if(!t)throw Error("chainId is required");return(0,X.If)({chainId:t})};function eF({chainId:e,throwForSwitchChainNotSupported:t,onError:r,onMutate:i,onSettled:n,onSuccess:o}={}){let a,s;let l=eC(),c=function(){let[,e]=Y.useReducer(e=>e+1,0);return e}(),{data:u,error:h,isError:d,isIdle:f,isLoading:p,isSuccess:g,mutate:w,mutateAsync:b,reset:m,status:y,variables:v}=e_(eB({chainId:e}),eL,{onError:r,onMutate:i,onSettled:n,onSuccess:o}),x=Y.useCallback(t=>w({chainId:t??e}),[e,w]),C=Y.useCallback(t=>b({chainId:t??e}),[e,b]);Y.useEffect(()=>{let e=l.subscribe(({chains:e,connector:t})=>({chains:e,connector:t}),c);return e},[l,c]);let E=!!l.connector?.switchChain;return(t||E)&&(a=x,s=C),{chains:l.chains??[],data:u,error:h,isError:d,isIdle:f,isLoading:p,isSuccess:g,pendingChainId:v?.chainId,reset:m,status:y,switchNetwork:a,switchNetworkAsync:s,variables:v}}function ez({abi:e,address:t,account:r,args:i,blockNumber:n,blockTag:o,cacheOnBlock:a=!1,cacheTime:s,chainId:l,enabled:c=!0,functionName:u,isDataEqual:h,keepPreviousData:d,onError:f,onSettled:p,onSuccess:g,scopeKey:w,select:m,staleTime:y,structuralSharing:v=(e,t)=>(0,X.vZ)(e,t)?e:b(e,t),suspense:x,watch:C}={}){let E=eO({chainId:l}),{data:k}=eR({chainId:E,enabled:C||a,scopeKey:C||a?void 0:"idle",watch:C}),S=n??k,_=Y.useMemo(()=>(function({account:e,address:t,args:r,blockNumber:i,blockTag:n,chainId:o,functionName:a,scopeKey:s}){return[{entity:"readContract",account:e,address:t,args:r,blockNumber:i,blockTag:n,chainId:o,functionName:a,scopeKey:s}]})({account:r,address:t,args:i,blockNumber:a?S:void 0,blockTag:o,chainId:E,functionName:u,scopeKey:w}),[r,t,i,S,o,a,E,u,w]),A=Y.useMemo(()=>{let r=!!(c&&e&&t&&u);return a&&(r=!!(r&&S)),r},[e,t,S,a,c,u]);return!function({chainId:e,enabled:t,queryKey:r}){let i=e$(),n=Y.useCallback(()=>i.invalidateQueries({queryKey:r},{cancelRefetch:!1}),[i,r]);eR({chainId:e,enabled:t,onBlock:t?n:void 0,scopeKey:t?void 0:"idle"})}({chainId:E,enabled:!!(A&&C&&!a),queryKey:_}),eA(_,function({abi:e}){return async({queryKey:[{account:t,address:r,args:i,blockNumber:n,blockTag:o,chainId:a,functionName:s}]})=>{if(!e)throw Error("abi is required");if(!r)throw Error("address is required");return await (0,X.a4)({account:t,address:r,args:i,blockNumber:n,blockTag:o,chainId:a,abi:e,functionName:s})??null}}({abi:e}),{cacheTime:s,enabled:A,isDataEqual:h,keepPreviousData:d,select:m,staleTime:y,structuralSharing:v,suspense:x,onError:f,onSettled:p,onSuccess:g})}function eW(e){if("prepared"===e.mode){if(!e.request)throw Error("request is required");return(0,X.n9)({mode:"prepared",request:e.request})}if(!e.address)throw Error("address is required");if(!e.abi)throw Error("abi is required");if(!e.functionName)throw Error("functionName is required");return(0,X.n9)({address:e.address,args:e.args,chainId:e.chainId,abi:e.abi,functionName:e.functionName,accessList:e.accessList,account:e.account,dataSuffix:e.dataSuffix,gas:e.gas,gasPrice:e.gasPrice,maxFeePerGas:e.maxFeePerGas,maxPriorityFeePerGas:e.maxPriorityFeePerGas,nonce:e.nonce,value:e.value})}function eH(e){let{address:t,abi:r,args:i,chainId:n,functionName:o,mode:a,request:s,dataSuffix:l}=e,{accessList:c,account:u,gas:h,gasPrice:d,maxFeePerGas:f,maxPriorityFeePerGas:p,nonce:g,value:w}=(0,X.gY)(e),{data:b,error:m,isError:y,isIdle:v,isLoading:x,isSuccess:C,mutate:E,mutateAsync:k,reset:S,status:_,variables:A}=e_(function({address:e,abi:t,functionName:r,...i}){let{args:n,accessList:o,account:a,dataSuffix:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:h,nonce:d,request:f,value:p}=i;return[{entity:"writeContract",address:e,args:n,abi:t,accessList:o,account:a,dataSuffix:s,functionName:r,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:h,nonce:d,request:f,value:p}]}({address:t,abi:r,functionName:o,chainId:n,mode:a,args:i,accessList:c,account:u,dataSuffix:l,gas:h,gasPrice:d,maxFeePerGas:f,maxPriorityFeePerGas:p,nonce:g,request:s,value:w}),eW,{onError:e.onError,onMutate:e.onMutate,onSettled:e.onSettled,onSuccess:e.onSuccess}),$=Y.useMemo(()=>{if("prepared"===e.mode){if(!s)return;return()=>E({mode:"prepared",request:e.request,chainId:e.chainId})}return e=>E({address:t,args:i,abi:r,functionName:o,chainId:n,accessList:c,account:u,dataSuffix:l,gas:h,gasPrice:d,maxFeePerGas:f,maxPriorityFeePerGas:p,nonce:g,value:w,...e})},[c,u,r,t,i,n,e.chainId,e.mode,e.request,l,o,h,d,f,p,E,g,s,w]),P=Y.useMemo(()=>{if("prepared"===e.mode){if(!s)return;return()=>k({mode:"prepared",request:e.request})}return e=>k({address:t,args:i,abi:r,chainId:n,functionName:o,accessList:c,account:u,dataSuffix:l,gas:h,gasPrice:d,maxFeePerGas:f,maxPriorityFeePerGas:p,nonce:g,value:w,...e})},[c,u,r,t,i,n,e.mode,e.request,l,o,h,d,f,p,k,g,s,w]);return{data:b,error:m,isError:y,isIdle:v,isLoading:x,isSuccess:C,reset:S,status:_,variables:A,write:$,writeAsync:P}}function eq({chainId:e,confirmations:t,hash:r,timeout:i,cacheTime:n,enabled:o=!0,scopeKey:a,staleTime:s,suspense:l,onError:c,onReplaced:u,onSettled:h,onSuccess:d}={}){let f=eO({chainId:e});return eA(function({confirmations:e,chainId:t,hash:r,scopeKey:i,timeout:n}){return[{entity:"waitForTransaction",confirmations:e,chainId:t,hash:r,scopeKey:i,timeout:n}]}({chainId:f,confirmations:t,hash:r,scopeKey:a,timeout:i}),function({onReplaced:e}){return({queryKey:[{chainId:t,confirmations:r,hash:i,timeout:n}]})=>{if(!i)throw Error("hash is required");return(0,X.Mn)({chainId:t,confirmations:r,hash:i,onReplaced:e,timeout:n})}}({onReplaced:u}),{cacheTime:n,enabled:!!(o&&r),staleTime:s,suspense:l,onError:c,onSettled:h,onSuccess:d})}}}]);