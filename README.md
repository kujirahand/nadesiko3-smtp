# nadesiko3-smtp

なでしこ3のための電子メール送信プラグイン

## プラグインをインストール

[Node.js](https://nodejs.org/ja)と[なでしこ3](https://nadesi.com/doc3/go.php?272)をインストールし、ターミナルで以下を実行します。

```
npm install nadesiko3-smtp
```

すると、node_modulesというフォルダが作成されて、その下に必要なライブラリがインストールされます。そこで、node_modulesのある同じフォルダにプログラムを配置します。以下のように配置します。

```
.
| - <node_modules>
| - メール送信.nako3
```

## GMailを使ってメール送信する方法

Gmailを使う場合には、Googleアカウントの設定が必要です。

- [1] Googleアカウントの[セキュリティ設定画面](https://myaccount.google.com/security?hl=ja)にアクセス
- [2] 「Googleへのログイン」にて「2段階認証プロセス」をオンに設定
- [3] アプリパスワードをクリック、認証して、アプリパスワードを生成して、生成されたパスワードをメモる

以下のようなプログラムを作成します。

```
!「nadesiko3-smtp」を取り込む。

{
  "user": "xxx@gmail.com", # Gmailアカウントを指定
  "pass": "xxx", # 上記で取得したアプリパスワードを指定
  "宛先": "xxx@example.com",
  "件名": "送信テスト",
  "本文": "送信テストです。届くかな？"
}のGMAIL送信
JSONエンコードして表示。# 結果を表示
```

## 添付ファイルをつける場合

複数の添付ファイルを添付できます。

```
!「nadesiko3-smtp」を取り込む。

{
  "user": "xxx@gmail.com", # Gmailアカウントを指定
  "pass": "xxx", # 上記で取得したアプリパスワードを指定
  "宛先": "xxx@example.com",
  "件名": "送信テスト",
  "本文": "送信テストです。届くかな？",
  "添付": [{ filename: 'a.pdf', path: "{母艦パス}/test.pdf"}]
}のGMAIL送信
JSONエンコードして表示。# 結果を表示
```
