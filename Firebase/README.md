# Firebaseとは
Webアプリから膨大なデータが必要なものを検索し取り出して表示するといった処理に適したプログラム。
> データベースを利用するアプリは、通常、サーバーにプログラムが設定されていて、そこでデータベース処理を行うのが基本
そうなるとReactのようなプラウ座の中だけで動くプログラムでは、本格的なデータベースを利用できない。
これを覆し、サーバーレスでデータを扱えるようにしたサービスがFirebase。
### Googleが提供するサービス
[Firebase公式](https://firebase.google.com)

# Firebaseプロジェクトを作る
1. トップページから「コンソールに移動」というリンクをクリックする。
2. プロジェクトを作成する。
- プロジェクトの名前：他の人と被らない名前にすること
- Googleアナリティクス：基本はOFFで良い
3. 「プロジェクトを作成」をクリックし、その後「続行」をクリックする。
4. プロジェクトの概要からWebアプリを追加する。この時、HostingはOFFで良い
5. Firebase SDKの追加でスクリプトが出てくるのでコピーしてどこかに保管しておく
今回の場合
```js
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCVbO6amPfGin2-cqUV2N08mNq5JbpDxh4",
    authDomain: "chatbot-shiory602.firebaseapp.com",
    projectId: "chatbot-shiory602",
    storageBucket: "chatbot-shiory602.appspot.com",
    messagingSenderId: "934113601842",
    appId: "1:934113601842:web:1a7b68c4e15ba36a7c0f2b",
    measurementId: "G-KYF92Z5M79"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
```
6. 「コンソールに進む」ボタンで元の画面に戻る。
このSDKは「プロジェクトの概要」の隣の歯車にあるプロジェクトを設定でいつでも確認できる。
### SDKとCDNの違い
| 種類 | 説明 |
| --- | --- |
| CDN | Content Delivery Networkを利用してFirebaseを使うためのもの。HTMLの`<head>`内にペーストして使う |
| 構成 | npmでFirebase SDKのパッケージをインストールして利用するためのもの。JavaScriptのスクリプト内からFirebaseを呼び出す際に使う |
