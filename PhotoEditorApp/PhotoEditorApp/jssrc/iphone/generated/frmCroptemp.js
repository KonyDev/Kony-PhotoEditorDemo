function initializefrmCroptemp() {
    FlexContainer0587f683a8a6e4e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "9%",
        "id": "FlexContainer0587f683a8a6e4e",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox01f45ff8a6d6a4bf"
    }, {}, {});
    FlexContainer0587f683a8a6e4e.setDefaultUnit(kony.flex.DP);
    var Button0194c371faa9142 = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed01d8b9fa5e23843",
        "height": "80%",
        "id": "Button0194c371faa9142",
        "isVisible": true,
        "left": "85%",
        "onClick": AS_Button_2b9d801a9c4c466397c1901282432c65,
        "skin": "btnskin11",
        "top": "10%",
        "width": "15%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var Label0a36b18a7ecee49 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "Label0a36b18a7ecee49",
        "isVisible": true,
        "skin": "CopyslLabel01cbef059b9e949",
        "text": "Crop",
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
    var Image032827b42cf4e40 = new kony.ui.Image2({
        "height": "100%",
        "id": "Image032827b42cf4e40",
        "isVisible": true,
        "left": "0dp",
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
    FlexContainer0587f683a8a6e4e.add(
    Button0194c371faa9142, Label0a36b18a7ecee49, Image032827b42cf4e40);
}