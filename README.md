# MZCF-KBD01

RP2040-Zero を搭載した左右分割の自作キーボード。レイアウトは [ergogen](https://github.com/ergogen/ergogen) で生成し、KiCad 10 で設計しています。

## 構成

| パス | 内容 |
|---|---|
| `ergogen/` | ergogen 実行用ディレクトリ(レイアウト定義 `config.yaml`・カスタムフットプリント) |
| `pcb/` | KiCad プロジェクト(左: `MZCF-KBD01L.*`、右: `MZCF-KBD01R.*`)と部品ライブラリ |
| `cad/` | Plasticity 3D モデル |
| `firmware/` | QMK ファームウェア(ビルド・書き込み手順は `firmware/README.md`) |

## 主要部品

- **MCU**: Waveshare RP2040-Zero(各手に1個)
- **ダイオード**: 1N4148W(SOD-123、裏面実装)
- **左右接続**: XH 2.54mm 4ピンコネクタ(5V / GND / GP28 / GP29)
- **スイッチ**: Cherry MX 互換(ソルダー)

## ライブラリについて

`pcb/libs/lcsc/` のシンボル・フットプリントは LCSC / EasyEDA のデータを変換したものです。
