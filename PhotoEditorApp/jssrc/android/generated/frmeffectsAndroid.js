function addWidgetsfrmeffectsAndroid() {
    frmeffectsAndroid.setDefaultUnit(kony.flex.DP);
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
        "onTouchEnd": AS_Image_d77fd712902d40e4b536f191b959cd72,
        "skin": "CopyslImage0175b4bfffde046",
        "src": "grey.png",
        "top": "0%",
        "width": "24%",
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
        "left": "25%",
        "onTouchEnd": AS_Image_1695f78497544a409920c515b13caed6,
        "skin": "CopyslImage0175b4bfffde046",
        "src": "grey23.png",
        "top": "0%",
        "width": "24%",
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
        "left": "50%",
        "onTouchEnd": AS_Image_db969b9a1a4e457385c5db2a2181351a,
        "skin": "CopyslImage0175b4bfffde046",
        "src": "grey4.png",
        "top": "0%",
        "width": "25%",
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
        "left": "75%",
        "onTouchEnd": AS_Image_65f13aac271d4d3798f5ecb5fc7d754b,
        "skin": "CopyslImage0175b4bfffde046",
        "src": "grey5.png",
        "top": "0.00%",
        "width": "25%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer021184713ccf344.add(
    img1, img3, img4, img5);
    frmeffectsAndroid.add(
    FlexContainer0738bfb11778d46, FlexContainer021184713ccf344);
};

function frmeffectsAndroidGlobals() {
    frmeffectsAndroid = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmeffectsAndroid,
        "enabledForIdleTimeout": false,
        "headers": [FlexContainer0587f683a8a6e4e],
        "id": "frmeffectsAndroid",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "onHide": AS_Form_5932fcd389ca499183f17a09f3f07e6a,
        "skin": "frmSkin"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};