@REM Android
inkscape.exe logo.svg --export-png=res\icon\android\icon-36-ldpi.png -w36 -h36
inkscape.exe logo.svg --export-png=res\icon\android\icon-48-mdpi.png -w48 -h48
inkscape.exe logo.svg --export-png=res\icon\android\icon-72-hdpi.png -w72 -h72
inkscape.exe logo.svg --export-png=res\icon\android\icon-96-xhdpi.png -w96 -h96
inkscape.exe logo.svg --export-png=res\icon\android\icon-144-xxhdpi.png -w144 -h144
inkscape.exe logo.svg --export-png=res\icon\android\icon-192-xxxhdpi.png -w192 -h192

inkscape.exe logo.svg --export-png=res/screens/android/screen-ldpi-landscape.png -w100 -h100
convert res/screens/android/screen-ldpi-landscape.png -resize "320x200>" -size 320x200 xc:transparent +swap -gravity center -composite res/screens/android/screen-ldpi-landscape.png

inkscape.exe logo.svg --export-png=res/screens/android/screen-mdpi-landscape.png -w160 -h160
convert res/screens/android/screen-mdpi-landscape.png -resize "480x320>" -size 480x320 xc:transparent +swap -gravity center -composite res/screens/android/screen-mdpi-landscape.png

inkscape.exe logo.svg --export-png=res/screens/android/screen-hdpi-landscape.png -w240 -h240
convert res/screens/android/screen-hdpi-landscape.png -resize "800x480>" -size 800x480 xc:transparent +swap -gravity center -composite res/screens/android/screen-hdpi-landscape.png

inkscape.exe logo.svg --export-png=res/screens/android/screen-xhdpi-landscape.png -w360 -h360
convert res/screens/android/screen-xhdpi-landscape.png -resize "1280x720>" -size 1280x720 xc:transparent +swap -gravity center -composite res/screens/android/screen-xhdpi-landscape.png

inkscape.exe logo.svg --export-png=res/screens/android/screen-xxhdpi-landscape.png -w480 -h480
convert res/screens/android/screen-xxhdpi-landscape.png -resize "1600x960>" -size 1600x960 xc:transparent +swap -gravity center -composite res/screens/android/screen-xxhdpi-landscape.png

inkscape.exe logo.svg --export-png=res/screens/android/screen-xxxhdpi-landscape.png -w640 -h640
convert res/screens/android/screen-xxxhdpi-landscape.png -resize "1920x1080>" -size 1920x1080 xc:transparent +swap -gravity center -composite res/screens/android/screen-xxxhdpi-landscape.png


inkscape.exe logo.svg --export-png=res/screens/android/screen-ldpi-portrait.png -w100 -h100
convert res/screens/android/screen-ldpi-portrait.png -resize "200x320>" -size 200x320 xc:transparent +swap -gravity center -composite res/screens/android/screen-ldpi-portrait.png

inkscape.exe logo.svg --export-png=res/screens/android/screen-mdpi-portrait.png -w160 -h160
convert res/screens/android/screen-mdpi-portrait.png -resize "320x480>" -size 320x480 xc:transparent +swap -gravity center -composite res/screens/android/screen-mdpi-portrait.png

inkscape.exe logo.svg --export-png=res/screens/android/screen-hdpi-portrait.png -w240 -h240
convert res/screens/android/screen-hdpi-portrait.png -resize "480x800>" -size 480x800 xc:transparent +swap -gravity center -composite res/screens/android/screen-hdpi-portrait.png

inkscape.exe logo.svg --export-png=res/screens/android/screen-xhdpi-portrait.png -w360 -h360
convert res/screens/android/screen-xhdpi-portrait.png -resize "720x1280>" -size 720x1280 xc:transparent +swap -gravity center -composite res/screens/android/screen-xhdpi-portrait.png

inkscape.exe logo.svg --export-png=res/screens/android/screen-xxhdpi-portrait.png -w480 -h480
convert res/screens/android/screen-xxhdpi-portrait.png -resize "960x1600>" -size 960x1600 xc:transparent +swap -gravity center -composite res/screens/android/screen-xxhdpi-portrait.png

inkscape.exe logo.svg --export-png=res/screens/android/screen-xxxhdpi-portrait.png -w640 -h640
convert res/screens/android/screen-xxxhdpi-portrait.png -resize "1080x1920>" -size 1080x1920 xc:transparent +swap -gravity center -composite res/screens/android/screen-xxxhdpi-portrait.png


@REM Ios
inkscape.exe logo.svg --export-png=res\icon\ios\icon-57.png -w57 -h57
inkscape.exe logo.svg --export-png=res\icon\ios\icon-57-2x.png -w114 -h114
inkscape.exe logo.svg --export-png=res\icon\ios\icon-40.png -w40 -h40
inkscape.exe logo.svg --export-png=res\icon\ios\icon-40-2x.png -w80 -h80
inkscape.exe logo.svg --export-png=res\icon\ios\icon-50.png -w50 -h50
inkscape.exe logo.svg --export-png=res\icon\ios\icon-50-2x.png -w100 -h100
inkscape.exe logo.svg --export-png=res\icon\ios\icon-60.png -w60 -h60
inkscape.exe logo.svg --export-png=res\icon\ios\icon-60-2x.png -w120 -h120
inkscape.exe logo.svg --export-png=res\icon\ios\icon-60-3x.png -w180 -h180
inkscape.exe logo.svg --export-png=res\icon\ios\icon-72.png -w72 -h72
inkscape.exe logo.svg --export-png=res\icon\ios\icon-72-2x.png -w144 -h144
inkscape.exe logo.svg --export-png=res\icon\ios\icon-76.png -w76 -h76
inkscape.exe logo.svg --export-png=res\icon\ios\icon-76-2x.png -w152 -h152
inkscape.exe logo.svg --export-png=res\icon\ios\icon-2x.png -w152 -h152
inkscape.exe logo.svg --export-png=res\icon\ios\icon-small.png -w29 -h29
inkscape.exe logo.svg --export-png=res\icon\ios\icon-small-2.png -w58 -h58

inkscape.exe logo.svg --export-png=res\screen\ios\screen-iphone-portrait.png -w160 -h160
convert res\screens\ios\screen-iphone-portrait.png -resize "320x480>" -size 320x480 xc:transparent +swap -gravity center -composite res\screens\ios\screen-iphone-portrait.png

inkscape.exe logo.svg --export-png=res\screens\ios\screen-iphone-portrait-2x.png -w320 -h320
convert res\screens\ios\screen-iphone-portrait-2x.png -resize "640x960>" -size 640x960 xc:transparent +swap -gravity center -composite res\screens\ios\screen-iphone-portrait-2x.png

inkscape.exe logo.svg --export-png=res\screens\ios\screen-iphone-568h-2x.png -w320 -h320
convert res\screens\ios\screen-iphone-568h-2x.png -resize "640x1136>" -size 640x1136 xc:transparent +swap -gravity center -composite res\screens\ios\screen-iphone-568h-2x.png

inkscape.exe logo.svg --export-png=res\screens\ios\screen-iphone-portrait-667h.png -w375 -h375
convert res\screens\ios\screen-iphone-portrait-667h.png -resize "750x1334>" -size 750x1334 xc:transparent +swap -gravity center -composite res\screens\ios\screen-iphone-portrait-667h.png

inkscape.exe logo.svg --export-png=res\screens\ios\screen-iphone-portrait-736h.png -w621 -h621
convert res\screens\ios\screen-iphone-portrait-736h.png -resize "1242x2208>" -size 1242x2208 xc:transparent +swap -gravity center -composite res\screens\ios\screen-iphone-portrait-736h.png

inkscape.exe logo.svg --export-png=res\screens\ios\screen-ipad-landscape-2x.png -w768 -h768
convert res\screens\ios\screen-ipad-landscape-2x.png -resize "2048x1536>" -size 2048x1536 xc:transparent +swap -gravity center -composite res\screens\ios\screen-ipad-landscape-2x.png

inkscape.exe logo.svg --export-png=res\screens\ios\screen-ipad-landscape.png -w384 -h384
convert res\screens\ios\screen-ipad-landscape.png -resize "1024x768>" -size 1024x768 xc:transparent +swap -gravity center -composite res\screens\ios\screen-ipad-landscape.png

inkscape.exe logo.svg --export-png=res\screens\ios\screen-iphone-landscape-736h.png -w621 -h621
convert res\screens\ios\screen-iphone-landscape-736h.png -resize "2208x1242>" -size 2208x1242 xc:transparent +swap -gravity center -composite res\screens\ios\screen-iphone-landscape-736h.png

inkscape.exe logo.svg --export-png=res\screens\ios\screen-ipad-portrait-2x.png -w768 -h768
convert res\screens\ios\screen-ipad-portrait-2x.png -resize "1536x2048>" -size 1536x2048 xc:transparent +swap -gravity center -composite res\screens\ios\screen-ipad-portrait-2x.png

inkscape.exe logo.svg --export-png=res\screens\ios\screen-ipad-portrait.png -w384 -h384
convert res\screens\ios\screen-ipad-portrait.png -resize "768x1024>" -size 768x1024 xc:transparent +swap -gravity center -composite res\screens\ios\screen-ipad-portrait.png



@REM Windows Store
inkscape.exe logo.svg --export-png=res\icons\windows\Square30x30Logo.scale-100.png -w30 -h30
inkscape.exe logo.svg --export-png=res\icons\windows\Square44x44Logo.scale-100.png -w44 -h44
inkscape.exe logo.svg --export-png=res\icons\windows\Square70x70Logo.scale-100.png -w70 -h70
inkscape.exe logo.svg --export-png=res\icons\windows\Square71x71Logo.scale-100.png -w71 -h71
inkscape.exe logo.svg --export-png=res\icons\windows\Square71x71Logo.scale-240.png -w170 -h170
inkscape.exe logo.svg --export-png=res\icons\windows\Square150x150Logo.scale-100.png -w150 -h150
inkscape.exe logo.svg --export-png=res\icons\windows\Square150x150Logo.scale-240.png -w360 -h360
inkscape.exe logo.svg --export-png=res\icons\windows\Square310x310Logo.scale-100.png -w310 -h310
inkscape.exe logo.svg --export-png=res\icons\windows\StoreLogo.scale-100.png -w50 -h50
inkscape.exe logo.svg --export-png=res\icons\windows\StoreLogo.scale-240.png -w120 -h120
inkscape.exe logo.svg --export-png=res\icons\windows\BadgeLogo.scale-100.png -w24 -h24

inkscape.exe logo.svg --export-png=res\icons\windows\Wide310x150Logo.scale-100.png -w150 -h150
convert res\icons\windows\Wide310x150Logo.scale-100.png -resize "310x150>" -size 310x150 xc:transparent +swap -gravity center -composite res\icons\windows\Wide310x150Logo.scale-100.png

inkscape.exe logo.svg --export-png=res\icons\windows\Wide310x150Logo.scale-240.png -w180 -h180
convert res\icons\windows\Wide310x150Logo.scale-240.png -resize "744x360>" -size 744x360 xc:transparent +swap -gravity center -composite res\icons\windows\Wide310x150Logo.scale-240.png

inkscape.exe logo.svg --export-png=res\screens\windows\splashscreen.scale-100.png -w150 -h150
convert res\screens\windows\splashscreen.scale-100.png -resize "620x300>" -size 620x300 xc:transparent +swap -gravity center -composite res\screens\windows\splashscreen.scale-100.png

inkscape.exe logo.svg --export-png=res\screens\windows\splashscreen.scale-240.png -w576 -h576
convert res\screens\windows\splashscreen.scale-240.png -resize "1920x1152>" -size 1920x1152 xc:transparent +swap -gravity center -composite res\screens\windows\splashscreen.scale-240.png

inkscape.exe logo.svg --export-png=res\screens\windows\splashscreenPhone.scale-240.png -w576 -h576
convert res\screens\windows\splashscreenPhone.scale-240.png -resize "1152x1920>" -size 1152x1920 xc:transparent +swap -gravity center -composite res\screens\windows\splashscreenPhone.scale-240.png




@REM Windows Phone
inkscape.exe logo.svg --export-png=res\icons\wp8\ApplicationIcon.png -w99 -h99
inkscape.exe logo.svg --export-png=res\icons\wp8\Background.png -w159 -h159
