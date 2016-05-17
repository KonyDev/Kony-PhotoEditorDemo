function initializefrmPreview() {
    FlexContainer01d10782f16be43 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "9%",
        "id": "FlexContainer01d10782f16be43",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox01f45ff8a6d6a4bf"
    }, {}, {});
    FlexContainer01d10782f16be43.setDefaultUnit(kony.flex.DP);
    var Image083a5b5ca4b9540 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "80%",
        "id": "Image083a5b5ca4b9540",
        "isVisible": true,
        "left": "0dp",
        "onTouchEnd": AS_Image_86e62977867642f3b10edbdd85b5c5c0,
        "skin": "slImage",
        "src": "cancel30.png",
        "top": "0%",
        "width": "15%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Image0ab62ad7311e94c = new kony.ui.Image2({
        "centerY": "50%",
        "height": "100%",
        "id": "Image0ab62ad7311e94c",
        "isVisible": true,
        "left": "85%",
        "onTouchEnd": AS_Image_8eb0e2afcb544a94b9a4cca5a3626a9c,
        "skin": "slImage",
        "src": "network19.png",
        "width": "15%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label0c5ffe2fd647e44 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "Label0c5ffe2fd647e44",
        "isVisible": true,
        "skin": "CopysknLblTitle07cd3cc6f99aa47",
        "text": "Photo",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer01d10782f16be43.add(
    Image083a5b5ca4b9540, Image0ab62ad7311e94c, Label0c5ffe2fd647e44);
}