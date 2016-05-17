function addWidgetsfrmCropPreview() {
    frmCropPreview.setDefaultUnit(kony.flex.DP);
    var Slider0a1d0fefb5b6d48 = new kony.ui.Slider({
        "height": "10%",
        "id": "Slider0a1d0fefb5b6d48",
        "isVisible": true,
        "left": "1%",
        "leftSkin": "CopyslSliderLeftBlue0a46e1d61031540",
        "max": 100,
        "min": 10,
        "onSelection": AS_Slider_dd48113cb9314fefa1c80befd9f92b76,
        "right": "1%",
        "rightSkin": "CopyslSliderRightBlue0b9b109a0e96f48",
        "selectedValue": 14,
        "step": 1,
        "thumbImage": "slider_android.png",
        "top": "90.24%",
        "zIndex": 1
    }, {}, {
        "thickness": 1
    });
    var FlexContainer0738bfb11778d46 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "85%",
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
        "maxHeight": "50%",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var img1 = new kony.ui.Image2({
        "centerX": "50.00%",
        "centerY": "49.98%",
        "id": "img1",
        "isVisible": true,
        "left": "0%",
        "maxHeight": "50%",
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
    Img2, img1);
    frmCropPreview.add(
    Slider0a1d0fefb5b6d48, FlexContainer0738bfb11778d46);
};

function frmCropPreviewGlobals() {
    frmCropPreview = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCropPreview,
        "enabledForIdleTimeout": false,
        "headers": [FlexContainer0587f683a8a6e4e],
        "id": "frmCropPreview",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "onHide": AS_Form_789203879bd443c99cddec2e6514f5dd,
        "skin": "frmSkin"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": true,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmCropPreview.info = {
        "kuid": "a331f79022e241d2bbcfe9dbb7fb979b"
    };
};