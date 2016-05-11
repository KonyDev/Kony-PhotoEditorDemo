function addWidgetsfrmeffectsIphone() {
    frmeffectsIphone.setDefaultUnit(kony.flex.DP);
    var FlexContainer0738bfb11778d46 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80%",
        "id": "FlexContainer0738bfb11778d46",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "right": "0%",
        "skin": "CopyslFbox0c56bf400115748",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    FlexContainer0738bfb11778d46.setDefaultUnit(kony.flex.DP);
    var Img2 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "id": "Img2",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0%",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0738bfb11778d46.add(
    Img2);
    var FlexContainer021184713ccf344 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "FlexContainer021184713ccf344",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "80%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer021184713ccf344.setDefaultUnit(kony.flex.DP);
    var img1 = new kony.ui.Image2({
        "height": "100%",
        "id": "img1",
        "isVisible": true,
        "left": "0%",
        "onTouchEnd": AS_Image_2ba86f55cd4a4244b2d2b26261641f07,
        "skin": "CopyslImage0175b4bfffde046",
        "src": "grey.png",
        "top": "0%",
        "width": "16%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var img3 = new kony.ui.Image2({
        "height": "100%",
        "id": "img3",
        "isVisible": true,
        "left": "17%",
        "onTouchEnd": AS_Image_934bbb6bf37440849bde627129e3edad,
        "skin": "CopyslImage0175b4bfffde046",
        "src": "grey23.png",
        "top": "0%",
        "width": "16%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var img4 = new kony.ui.Image2({
        "height": "100%",
        "id": "img4",
        "isVisible": true,
        "left": "33%",
        "onTouchEnd": AS_Image_e958b67a572b4d3da9403d82e636f5fd,
        "skin": "CopyslImage0175b4bfffde046",
        "src": "grey4.png",
        "top": "0%",
        "width": "16%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var img5 = new kony.ui.Image2({
        "height": "100%",
        "id": "img5",
        "isVisible": true,
        "left": "49%",
        "onTouchEnd": AS_Image_2eb8fd3f45c1419db70367bd1c7e7b46,
        "skin": "CopyslImage0175b4bfffde046",
        "src": "grey5.png",
        "top": "0.00%",
        "width": "16%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var img6 = new kony.ui.Image2({
        "height": "100%",
        "id": "img6",
        "isVisible": true,
        "left": "65%",
        "onTouchEnd": AS_Image_fa1cd07d1ddc4b05afddce63569014b0,
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0%",
        "width": "16%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var img7 = new kony.ui.Image2({
        "height": "100%",
        "id": "img7",
        "isVisible": true,
        "left": "81.33%",
        "onTouchEnd": AS_Image_011e388544b5404fa21475e5101091cc,
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "-0.01%",
        "width": "16%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer021184713ccf344.add(
    img1, img3, img4, img5, img6, img7);
    frmeffectsIphone.add(
    FlexContainer0738bfb11778d46, FlexContainer021184713ccf344);
};

function frmeffectsIphoneGlobals() {
    frmeffectsIphone = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmeffectsIphone,
        "enabledForIdleTimeout": false,
        "headers": [FlexContainer0587f683a8a6e4e],
        "id": "frmeffectsIphone",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "onHide": AS_Form_725e8a3fd53041588656f5afd6bb74ad,
        "skin": "frmSkin"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
};