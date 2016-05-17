function addWidgetsfrmBrightness() {
    frmBrightness.setDefaultUnit(kony.flex.DP);
    var Slider0a1d0fefb5b6d48 = new kony.ui.Slider({
        "height": "10%",
        "id": "Slider0a1d0fefb5b6d48",
        "isVisible": true,
        "left": "0%",
        "leftSkin": "CopyslSliderLeftBlue0a46e1d61031540",
        "max": 30,
        "min": 3,
        "onSelection": AS_Slider_b24ae4d085c540ef8a1d61c62302cfe6,
        "rightSkin": "CopyslSliderRightBlue0b9b109a0e96f48",
        "selectedValue": 9,
        "step": 3,
        "thumbImage": "aviary_seekbar_thumb_zero_pressed.png",
        "top": "91%",
        "width": "100%",
        "zIndex": 1
    }, {}, {
        "thumbTintColor": "ffffff00"
    });
    var FlexContainer0738bfb11778d46 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
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
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0738bfb11778d46.add(
    Img2);
    frmBrightness.add(
    Slider0a1d0fefb5b6d48, FlexContainer0738bfb11778d46);
};

function frmBrightnessGlobals() {
    frmBrightness = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmBrightness,
        "enabledForIdleTimeout": false,
        "headers": [FlexContainer0587f683a8a6e4e],
        "id": "frmBrightness",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "onHide": AS_Form_e64fa807a552494ab64a0d028944c2ef,
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
    frmBrightness.info = {
        "kuid": "8986432cf61542a8a0c6ffec10621353"
    };
};