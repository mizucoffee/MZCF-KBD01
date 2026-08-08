# MZCF-KBD01

A split keyboard with an RP2040-Zero on each half, connected by a TRRS cable.
Either half can be plugged into USB (EE_HANDS + SPLIT_USB_DETECT).

* Keyboard Maintainer: [mizucoffee](https://github.com/mizucoffee)
* Hardware Supported: MZCF-KBD01 PCBs (Waveshare RP2040-Zero)
* Hardware Availability: https://github.com/mizucoffee (personal project)

Make example for this keyboard (after setting up your build environment):

    make mzcf_kbd01:default

Flashing example for this keyboard (first flash per half, to store handedness):

    qmk flash -kb mzcf_kbd01 -km default -bl uf2-split-left
    qmk flash -kb mzcf_kbd01 -km default -bl uf2-split-right

See the [build environment setup](https://docs.qmk.fm/#/getting_started_build_tools) and the [make instructions](https://docs.qmk.fm/#/getting_started_make_guide) for more information. Brand new to QMK? Start with our [Complete Newbs Guide](https://docs.qmk.fm/#/newbs).

## Bootloader

Enter the bootloader by holding the **BOOT** button on the RP2040-Zero while plugging in USB (the `RPI-RP2` drive appears).
