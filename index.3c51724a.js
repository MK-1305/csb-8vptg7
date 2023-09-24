const e=()=>{// テキストボックスの値（value）をinputTextに入れる
let e=document.getElementById("add-text").value;// 追加後に文字を消す
document.getElementById("add-text").value="";// div class"list-row"生成
let t=document.createElement("div");t.className="list-row";// liタグ生成
let d=document.createElement("li");// liタグの中にinputTextを入れる
d.innerText=e,// divタグの子要素に各要素を設定
t.appendChild(d),// 未完了リスト(ul)に追加
document.getElementById("incomplete-list").appendChild(t),console.log(t)};document.getElementById("add-button").addEventListener("click",()=>e());//# sourceMappingURL=index.3c51724a.js.map

//# sourceMappingURL=index.3c51724a.js.map
