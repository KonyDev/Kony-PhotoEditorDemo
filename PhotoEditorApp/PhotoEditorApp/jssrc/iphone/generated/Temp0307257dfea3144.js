function initializeTemp0307257dfea3144() {
    FlexContainer06e9d0abcd67741 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "FlexContainer06e9d0abcd67741",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox01f45ff8a6d6a4bf"
    }, {}, {});
    FlexContainer06e9d0abcd67741.setDefaultUnit(kony.flex.DP);
    var Image032827b42cf4e40 = new kony.ui.Image2({
        "height": "100%",
        "id": "Image032827b42cf4e40",
        "isVisible": true,
        "left": "8dp",
        "onTouchEnd": AS_Image_c2411dc2993242dd9ce378dc8887c153,
        "skin": "slImage",
        "src": "left207.png",
        "top": "1dp",
        "width": "15%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label00a4c105dde0d4f = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "Label00a4c105dde0d4f",
        "isVisible": true,
        "skin": "CopyslLabel01cbef059b9e949",
        "text": "Adjust",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var Button02b386f42245846 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "80%",
        "id": "Button02b386f42245846",
        "isVisible": true,
        "left": "85%",
        "onClick": AS_Button_c049ffc9cdd948a9bf79f28fb77e7650,
        "skin": "btnskin11",
        "top": "10%",
        "width": "15%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    FlexContainer06e9d0abcd67741.add(
    Image032827b42cf4e40, Label00a4c105dde0d4f, Button02b386f42245846);
}