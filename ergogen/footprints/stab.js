// PCB マウント MX スタビライザー (2u〜2.75u 共通、ワイヤー間隔 23.8125mm)。
// 穴位置・径は marbastlib の STAB_MX_2u に合わせている。
// キー中心 (= スイッチ中心) に配置する。ネジ止め式・クリップ式どちらも同じ穴で使える。
// refname を指定するとリファレンス文字列をそのまま使う (mx.js / diode.js と同じ流儀)。
module.exports = {
  params: {
    designator: 'ST',
    refname: ''
  },
  body: p => `
    (module STAB_MX (layer F.Cu) (tedit 5DD4F656)
    ${p.at /* parametric position */}

    ${'' /* footprint reference */}
    (fp_text reference "${p.refname || p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
    (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

    ${'' /* stem holes: top 3.048mm, bottom (wire) 3.9878mm, stems at +-11.90625mm */}
    (pad "" np_thru_hole circle (at -11.90625 -6.985) (size 3.048 3.048) (drill 3.048) (layers *.Cu *.Mask))
    (pad "" np_thru_hole circle (at 11.90625 -6.985) (size 3.048 3.048) (drill 3.048) (layers *.Cu *.Mask))
    (pad "" np_thru_hole circle (at -11.90625 8.255) (size 3.9878 3.9878) (drill 3.9878) (layers *.Cu *.Mask))
    (pad "" np_thru_hole circle (at 11.90625 8.255) (size 3.9878 3.9878) (drill 3.9878) (layers *.Cu *.Mask))
    )
  `
}
