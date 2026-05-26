import{j as ke,o as Ee,f as O,b as c,u as B,t as x,y as Ae,x as F,w as q,v as Ue,F as Oe,p as Ie,h as Ne,c as Pe,e as Ce,s as xe,q as De,a as Se,r as A,m as I,_ as Le}from"./index-CKH3s0AJ.js";import{o as Be}from"./auth-BZT-P6Hj.js";import{f as Fe,u as Me,a as $e}from"./products-cVTxm3e2.js";import{m as V,b as Ve,F as He,_ as je,k as qe,i as ze,q as oe,x as We,e as Ke,c as Xe,C as Ge,A as Q,S as Ze}from"./index.esm-BRL0tNP0.js";import{a as Ye}from"./firebase-B5949V8L.js";import{c as Je}from"./products-BRW9OgbK.js";import"./index.esm-DjbQtYH8.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie="firebasestorage.googleapis.com",ae="storageBucket",Qe=120*1e3,et=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m extends He{constructor(t,n,s=0){super(z(t),`Firebase Storage: ${n} (${z(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,m.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return z(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var _;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_||(_={}));function z(e){return"storage/"+e}function X(){const e="An unknown error occurred, please check the error payload for server response.";return new m(_.UNKNOWN,e)}function tt(e){return new m(_.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function nt(e){return new m(_.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function st(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new m(_.UNAUTHENTICATED,e)}function rt(){return new m(_.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ot(e){return new m(_.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function it(){return new m(_.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function at(){return new m(_.CANCELED,"User canceled the upload/download.")}function lt(e){return new m(_.INVALID_URL,"Invalid URL '"+e+"'.")}function ut(e){return new m(_.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function ct(){return new m(_.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ae+"' property when initializing the app?")}function dt(){return new m(_.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ht(){return new m(_.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ft(e){return new m(_.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function K(e){return new m(_.INVALID_ARGUMENT,e)}function le(){return new m(_.APP_DELETED,"The Firebase app was deleted.")}function pt(e){return new m(_.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function S(e,t){return new m(_.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function D(e){throw new m(_.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=T.makeFromUrl(t,n)}catch{return new T(t,"")}if(s.path==="")return s;throw ut(t)}static makeFromUrl(t,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function o(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+r+i,"i"),l={bucket:1,path:3};function d(b){b.path_=decodeURIComponent(b.path)}const p="v[A-Za-z0-9_]+",w=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",y=new RegExp(`^https?://${w}/${p}/b/${r}/o${g}`,"i"),k={bucket:1,path:3},E=n===ie?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",f=new RegExp(`^https?://${E}/${r}/${R}`,"i"),h=[{regex:a,indices:l,postModify:o},{regex:y,indices:k,postModify:d},{regex:f,indices:{bucket:1,path:2},postModify:d}];for(let b=0;b<h.length;b++){const L=h[b],H=L.regex.exec(t);if(H){const Te=H[L.indices.bucket];let j=H[L.indices.path];j||(j=""),s=new T(Te,j),L.postModify(s);break}}if(s==null)throw lt(t);return s}}class _t{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e,t,n){let s=1,r=null,o=null,i=!1,a=0;function l(){return a===2}let d=!1;function p(...R){d||(d=!0,t.apply(null,R))}function w(R){r=setTimeout(()=>{r=null,e(y,l())},R)}function g(){o&&clearTimeout(o)}function y(R,...f){if(d){g();return}if(R){g(),p.call(null,R,...f);return}if(l()||i){g(),p.call(null,R,...f);return}s<64&&(s*=2);let h;a===1?(a=2,h=0):h=(s+Math.random())*1e3,w(h)}let k=!1;function E(R){k||(k=!0,g(),!d&&(r!==null?(R||(a=2),clearTimeout(r),w(0)):R||(a=1)))}return w(0),o=setTimeout(()=>{i=!0,E(!0)},n),E}function gt(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(e){return e!==void 0}function wt(e){return typeof e=="object"&&!Array.isArray(e)}function G(e){return typeof e=="string"||e instanceof String}function ee(e){return Z()&&e instanceof Blob}function Z(){return typeof Blob<"u"}function te(e,t,n,s){if(s<t)throw K(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw K(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function ue(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const r=t(s)+"="+t(e[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var P;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(P||(P={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||r||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,n,s,r,o,i,a,l,d,p,w,g=!0,y=!1){this.url_=t,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=p,this.connectionFactory_=w,this.retry=g,this.isUsingEmulator=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,E)=>{this.resolve_=k,this.reject_=E,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new M(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=a=>{const l=a.loaded,d=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const a=o.getErrorCode()===P.NO_ERROR,l=o.getStatus();if(!a||Rt(l,this.additionalRetryCodes_)&&this.retry){const p=o.getErrorCode()===P.ABORT;s(!1,new M(!1,null,p));return}const d=this.successCodes_.indexOf(l)!==-1;s(!0,new M(d,o))})},n=(s,r)=>{const o=this.resolve_,i=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());bt(l)?o(l):o()}catch(l){i(l)}else if(a!==null){const l=X();l.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,l)):i(l)}else if(r.canceled){const l=this.appDelete_?le():at();i(l)}else{const l=it();i(l)}};this.canceled_?n(!1,new M(!1,null,!0)):this.backoffId_=mt(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&gt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class M{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function yt(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Tt(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function kt(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Et(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function At(e,t,n,s,r,o,i=!0,a=!1){const l=ue(e.urlParams),d=e.url+l,p=Object.assign({},e.headers);return kt(p,t),yt(p,n),Tt(p,o),Et(p,s),new vt(d,e.method,p,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Ot(...e){const t=Ut();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(Z())return new Blob(e);throw new m(_.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function It(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(e){if(typeof atob>"u")throw ft("base-64");return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class W{constructor(t,n){this.data=t,this.contentType=n||null}}function Pt(e,t){switch(e){case U.RAW:return new W(ce(t));case U.BASE64:case U.BASE64URL:return new W(de(e,t));case U.DATA_URL:return new W(xt(t),Dt(t))}throw X()}function ce(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const o=s,i=e.charCodeAt(++n);s=65536|(o&1023)<<10|i&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function Ct(e){let t;try{t=decodeURIComponent(e)}catch{throw S(U.DATA_URL,"Malformed data URL.")}return ce(t)}function de(e,t){switch(e){case U.BASE64:{const r=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(r||o)throw S(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case U.BASE64URL:{const r=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(r||o)throw S(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Nt(t)}catch(r){throw r.message.includes("polyfill")?r:S(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class he{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw S(U.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=St(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function xt(e){const t=new he(e);return t.base64?de(U.BASE64,t.rest):Ct(t.rest)}function Dt(e){return new he(e).contentType}function St(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t,n){let s=0,r="";ee(t)?(this.data_=t,s=t.size,r=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,n){if(ee(this.data_)){const s=this.data_,r=It(s,t,n);return r===null?null:new N(r)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new N(s,!0)}}static getBlob(...t){if(Z()){const n=t.map(s=>s instanceof N?s.data_:s);return new N(Ot.apply(null,n))}else{const n=t.map(i=>G(i)?Pt(U.RAW,i).data:i.data_);let s=0;n.forEach(i=>{s+=i.byteLength});const r=new Uint8Array(s);let o=0;return n.forEach(i=>{for(let a=0;a<i.length;a++)r[o++]=i[a]}),new N(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e){let t;try{t=JSON.parse(e)}catch{return null}return wt(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Bt(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function pe(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(e,t){return t}class v{constructor(t,n,s,r){this.server=t,this.local=n||t,this.writable=!!s,this.xform=r||Ft}}let $=null;function Mt(e){return!G(e)||e.length<2?e:pe(e)}function _e(){if($)return $;const e=[];e.push(new v("bucket")),e.push(new v("generation")),e.push(new v("metageneration")),e.push(new v("name","fullPath",!0));function t(o,i){return Mt(i)}const n=new v("name");n.xform=t,e.push(n);function s(o,i){return i!==void 0?Number(i):i}const r=new v("size");return r.xform=s,e.push(r),e.push(new v("timeCreated")),e.push(new v("updated")),e.push(new v("md5Hash",null,!0)),e.push(new v("cacheControl",null,!0)),e.push(new v("contentDisposition",null,!0)),e.push(new v("contentEncoding",null,!0)),e.push(new v("contentLanguage",null,!0)),e.push(new v("contentType",null,!0)),e.push(new v("metadata","customMetadata",!0)),$=e,$}function $t(e,t){function n(){const s=e.bucket,r=e.fullPath,o=new T(s,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function Vt(e,t,n){const s={};s.type="file";const r=n.length;for(let o=0;o<r;o++){const i=n[o];s[i.local]=i.xform(s,t[i.server])}return $t(s,e),s}function me(e,t,n){const s=fe(t);return s===null?null:Vt(e,s,n)}function Ht(e,t,n,s){const r=fe(t);if(r===null||!G(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(d=>{const p=e.bucket,w=e.fullPath,g="/b/"+i(p)+"/o/"+i(w),y=Y(g,n,s),k=ue({alt:"media",token:d});return y+k})[0]}function jt(e,t){const n={},s=t.length;for(let r=0;r<s;r++){const o=t[r];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}class ge{constructor(t,n,s,r){this.url=t,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e){if(!e)throw X()}function qt(e,t){function n(s,r){const o=me(e,r,t);return be(o!==null),o}return n}function zt(e,t){function n(s,r){const o=me(e,r,t);return be(o!==null),Ht(o,r,e.host,e._protocol)}return n}function we(e){function t(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=rt():r=st():n.getStatus()===402?r=nt(e.bucket):n.getStatus()===403?r=ot(e.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return t}function Wt(e){const t=we(e);function n(s,r){let o=t(s,r);return s.getStatus()===404&&(o=tt(e.path)),o.serverResponse=r.serverResponse,o}return n}function Kt(e,t,n){const s=t.fullServerUrl(),r=Y(s,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,a=new ge(r,o,zt(e,n),i);return a.errorHandler=Wt(t),a}function Xt(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Gt(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=Xt(null,t)),s}function Zt(e,t,n,s,r){const o=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let h="";for(let b=0;b<2;b++)h=h+Math.random().toString().slice(2);return h}const l=a();i["Content-Type"]="multipart/related; boundary="+l;const d=Gt(t,s,r),p=jt(d,n),w="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+l+`\r
Content-Type: `+d.contentType+`\r
\r
`,g=`\r
--`+l+"--",y=N.getBlob(w,s,g);if(y===null)throw dt();const k={name:d.fullPath},E=Y(o,e.host,e._protocol),R="POST",f=e.maxUploadRetryTime,u=new ge(E,R,qt(e,n),f);return u.urlParams=k,u.headers=i,u.body=y.uploadData(),u.errorHandler=we(t),u}class Yt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=P.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=P.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=P.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,r,o){if(this.sent_)throw D("cannot .send() more than once");if(oe(t)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const i in o)o.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,o[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw D("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw D("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw D("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw D("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Jt extends Yt{initXhr(){this.xhr_.responseType="text"}}function Re(){return new Jt}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t,n){this._service=t,n instanceof T?this._location=n:this._location=T.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new C(t,n)}get root(){const t=new T(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pe(this._location.path)}get storage(){return this._service}get parent(){const t=Lt(this._location.path);if(t===null)return null;const n=new T(this._location.bucket,t);return new C(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw pt(t)}}function Qt(e,t,n){e._throwIfRoot("uploadBytes");const s=Zt(e.storage,e._location,_e(),new N(t,!0),n);return e.storage.makeRequestWithTokens(s,Re).then(r=>({metadata:r,ref:e}))}function en(e){e._throwIfRoot("getDownloadURL");const t=Kt(e.storage,e._location,_e());return e.storage.makeRequestWithTokens(t,Re).then(n=>{if(n===null)throw ht();return n})}function tn(e,t){const n=Bt(e._location.path,t),s=new T(e._location.bucket,n);return new C(e.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(e){return/^[A-Za-z]+:\/\//.test(e)}function sn(e,t){return new C(e,t)}function ve(e,t){if(e instanceof J){const n=e;if(n._bucket==null)throw ct();const s=new C(n,n._bucket);return t!=null?ve(s,t):s}else return t!==void 0?tn(e,t):e}function rn(e,t){if(t&&nn(t)){if(e instanceof J)return sn(e,t);throw K("To use ref(service, url), the first argument must be a Storage instance.")}else return ve(e,t)}function ne(e,t){const n=t==null?void 0:t[ae];return n==null?null:T.makeFromBucketSpec(n,e)}function on(e,t,n,s={}){e.host=`${t}:${n}`;const r=oe(t);r&&We(`https://${e.host}/b`),e._isUsingEmulator=!0,e._protocol=r?"https":"http";const{mockUserToken:o}=s;o&&(e._overrideAuthToken=typeof o=="string"?o:Ke(o,e.app.options.projectId))}class J{constructor(t,n,s,r,o,i=!1){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._isUsingEmulator=i,this._bucket=null,this._host=ie,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Qe,this._maxUploadRetryTime=et,this._requests=new Set,r!=null?this._bucket=T.makeFromBucketSpec(r,this._host):this._bucket=ne(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=T.makeFromBucketSpec(this._url,t):this._bucket=ne(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){te("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){te("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new C(this,t)}_makeRequest(t,n,s,r,o=!0){if(this._deleted)return new _t(le());{const i=At(t,this._appId,s,r,n,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,r).getPromise()}}const se="@firebase/storage",re="0.14.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="storage";function an(e,t,n){return e=V(e),Qt(e,t,n)}function ln(e){return e=V(e),en(e)}function un(e,t){return e=V(e),rn(e,t)}function cn(e=ze(),t){e=V(e);const s=je(e,ye).getImmediate({identifier:t}),r=qe("storage");return r&&dn(s,...r),s}function dn(e,t,n,s={}){on(e,t,n,s)}function hn(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new J(n,s,r,t,Ze)}function fn(){Xe(new Ge(ye,hn,"PUBLIC").setMultipleInstances(!0)),Q(se,re,""),Q(se,re,"esm2020")}fn();const pn=cn(Ye);async function _n(e){const t=e.name.split(".").pop()||"jpg",n=`products/${Date.now()}-${Math.random().toString(36).slice(2)}.${t}`,s=un(pn,n),r=await an(s,e);return ln(r.ref)}const mn={class:"page"},gn={class:"container"},bn={class:"form-card"},wn={key:0,class:"loading"},Rn={class:"form-group"},vn={class:"form-group"},yn={class:"form-row"},Tn={class:"form-group"},kn={class:"form-group"},En=["value"],An={class:"form-group"},Un={class:"upload-area"},On={key:0,class:"upload-btn"},In={key:1,class:"upload-preview"},Nn=["src"],Pn={class:"preview"},Cn={class:"preview-card"},xn=["src","alt"],Dn={key:0,class:"error"},Sn={class:"form-actions"},Ln=["disabled"],Bn=ke({__name:"AdminProductForm",setup(e){const t=xe(),n=De(),s=Se(()=>!!n.params.id),r=A(!0),o=A(!1),i=A(""),a=A(""),l=A(""),d=A(""),p=A("fleisch"),w=A(null),g=A(null),y=A(null);Ee(async()=>{if(Be(f=>{f||t.replace("/admin")}),s.value){const f=await Fe(n.params.id);f?(a.value=f.name,l.value=f.description,d.value=f.price,p.value=f.category,f.image&&(y.value=f.image,g.value=f.image)):i.value="Produkt nicht gefunden"}r.value=!1});function k(f){var b;const h=(b=f.target.files)==null?void 0:b[0];h&&(w.value=h,g.value=URL.createObjectURL(h))}function E(){w.value=null,g.value=null,y.value=null}async function R(){if(!a.value||!l.value||!d.value){i.value="Bitte alle Felder ausfüllen";return}i.value="",o.value=!0;try{let f=y.value||void 0;w.value&&(f=await _n(w.value));const u={name:a.value,description:l.value,price:d.value,category:p.value,image:f};s.value?await Me(n.params.id,u):await $e(u),t.push("/admin/dashboard")}catch(f){i.value=f.message||"Fehler beim Speichern"}finally{o.value=!1}}return(f,u)=>(I(),O("section",mn,[c("div",gn,[c("button",{class:"back-btn",onClick:u[0]||(u[0]=h=>B(t).push("/admin/dashboard"))}," ← Zurück zur Übersicht "),c("div",bn,[c("h1",null,x(s.value?"Produkt bearbeiten":"Neues Produkt"),1),r.value?(I(),O("div",wn,"Lädt...")):(I(),O("form",{key:1,onSubmit:Ae(R,["prevent"]),class:"form"},[c("div",Rn,[u[6]||(u[6]=c("label",{for:"name"},"Name",-1)),F(c("input",{id:"name","onUpdate:modelValue":u[1]||(u[1]=h=>a.value=h),type:"text",class:"form-input",required:""},null,512),[[q,a.value]])]),c("div",vn,[u[7]||(u[7]=c("label",{for:"description"},"Beschreibung",-1)),F(c("textarea",{id:"description","onUpdate:modelValue":u[2]||(u[2]=h=>l.value=h),class:"form-input form-textarea",rows:"3",required:""},null,512),[[q,l.value]])]),c("div",yn,[c("div",Tn,[u[8]||(u[8]=c("label",{for:"price"},"Preis",-1)),F(c("input",{id:"price","onUpdate:modelValue":u[3]||(u[3]=h=>d.value=h),type:"text",class:"form-input",placeholder:"z.B. 4,50 € / kg",required:""},null,512),[[q,d.value]])]),c("div",kn,[u[9]||(u[9]=c("label",{for:"category"},"Kategorie",-1)),F(c("select",{id:"category","onUpdate:modelValue":u[4]||(u[4]=h=>p.value=h),class:"form-input"},[(I(!0),O(Oe,null,Ie(B(Je),h=>(I(),O("option",{key:h.id,value:h.id},x(h.label),9,En))),128))],512),[[Ue,p.value]])])]),c("div",An,[u[11]||(u[11]=c("label",null,"Bild",-1)),c("div",Un,[g.value?(I(),O("div",In,[c("img",{src:g.value,alt:"Vorschau"},null,8,Nn),c("button",{type:"button",class:"upload-remove",onClick:E},"×")])):(I(),O("label",On,[c("input",{type:"file",accept:"image/*",hidden:"",onChange:k},null,32),u[10]||(u[10]=Ne(" Bild auswählen ",-1))]))])]),c("div",Pn,[u[12]||(u[12]=c("span",{class:"preview-label"},"Vorschau (öffentlich):",-1)),c("div",Cn,[c("img",{src:g.value||B(Pe)[p.value],alt:a.value,class:"preview-img"},null,8,xn),c("div",null,[c("strong",null,x(a.value||"Produktname"),1),c("p",null,x(d.value||"Preis"),1)])])]),i.value?(I(),O("p",Dn,x(i.value),1)):Ce("",!0),c("div",Sn,[c("button",{type:"button",class:"btn btn-secondary",onClick:u[5]||(u[5]=h=>B(t).push("/admin/dashboard"))}," Abbrechen "),c("button",{type:"submit",class:"btn btn-primary",disabled:o.value},x(o.value?"Wird gespeichert...":s.value?"Speichern":"Produkt anlegen"),9,Ln)])],32))])])]))}}),zn=Le(Bn,[["__scopeId","data-v-33473522"]]);export{zn as default};
