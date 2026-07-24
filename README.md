# MZCF-KBD01

RP2040-Zero を搭載した左右分割の自作キーボード。レイアウトは [ergogen](https://github.com/ergogen/ergogen) で生成し、KiCad 10 で設計しています。

## 構成

| パス | 内容 |
|---|---|
| `MZCF-KBD01L.*` | 左手側プロジェクト(回路図・基板) |
| `MZCF-KBD01R.*` | 右手側プロジェクト(回路図) |
| `keyboard.yaml` | ergogen 設定(レイアウト定義) |
| `ergogen/` | ergogen 実行用ディレクトリ(カスタムフットプリント含む) |
| `libs/` | プロジェクトローカルの部品ライブラリ |

## 主要部品

- **MCU**: Waveshare RP2040-Zero(各手に1個)
- **ダイオード**: 1N4148W(SOD-123、裏面実装)
- **左右接続**: XH 2.54mm 4ピンコネクタ(5V / GND / GP28 / GP29)
- **スイッチ**: Cherry MX 互換(ソルダー)

## ライブラリについて

`libs/lcsc/` のシンボル・フットプリントは LCSC / EasyEDA のデータを変換したものです。
