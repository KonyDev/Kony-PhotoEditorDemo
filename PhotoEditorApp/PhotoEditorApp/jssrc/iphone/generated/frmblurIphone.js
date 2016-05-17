function addWidgetsfrmblurIphone() {
    frmblurIphone.setDefaultUnit(kony.flex.DP);
    var FlexContainer0738bfb11778d46 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80%",
        "id": "FlexContainer0738bfb11778d46",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
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
    var FlexContainer05d04d3cae8644a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "FlexContainer05d04d3cae8644a",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "90%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer05d04d3cae8644a.setDefaultUnit(kony.flex.DP);
    FlexContainer05d04d3cae8644a.add();
    var FlexContainer035b43882b4c047 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "18%",
        "id": "FlexContainer035b43882b4c047",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "81%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer035b43882b4c047.setDefaultUnit(kony.flex.DP);
    var Img1 = new kony.ui.Image2({
        "height": "75%",
        "id": "Img1",
        "isVisible": true,
        "left": "10dp",
        "onTouchEnd": AS_Image_331b5005c8874d50b8cb44b52047aca1,
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "2dp",
        "width": "30%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label1 = new kony.ui.Label({
        "id": "Label1",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel00496f5b76ae144",
        "text": "Box_blur",
        "top": "75.69%",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var Img3 = new kony.ui.Image2({
        "height": "75%",
        "id": "Img3",
        "isVisible": true,
        "left": "122dp",
        "onTouchEnd": AS_Image_28d5c25fe94f4f07b59122123a37fedb,
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "30%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var img4 = new kony.ui.Image2({
        "height": "70%",
        "id": "img4",
        "isVisible": true,
        "left": "70%",
        "onTouchEnd": AS_Image_463bbe221f6b4a979cebbb6e462e74f0,
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "2dp",
        "width": "30%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel09aa53134e61343 = new kony.ui.Label({
        "id": "CopyLabel09aa53134e61343",
        "isVisible": true,
        "left": "35%",
        "skin": "CopyslLabel00496f5b76ae144",
        "text": "Disc_blur",
        "top": "76.37%",
        "width": "28%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyLabel05fe846364e4045 = new kony.ui.Label({
        "id": "CopyLabel05fe846364e4045",
        "isVisible": true,
        "left": "69.95%",
        "skin": "CopyslLabel00496f5b76ae144",
        "text": "Motionblur",
        "top": "76.35%",
        "width": "28%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    FlexContainer035b43882b4c047.add(
    Img1, Label1, Img3, img4, CopyLabel09aa53134e61343, CopyLabel05fe846364e4045);
    frmblurIphone.add(
    FlexContainer0738bfb11778d46, FlexContainer05d04d3cae8644a, FlexContainer035b43882b4c047);
};

function frmblurIphoneGlobals() {
    frmblurIphone = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmblurIphone,
        "enabledForIdleTimeout": false,
        "headers": [FlexContainer0587f683a8a6e4e],
        "id": "frmblurIphone",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "onHide": AS_Form_2440a505f3074cb2aace824a08f438a9,
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
    frmblurIphone.info = {
        "kuid": "4d1a6ee5c62141bebcd59c65f399d1b7"
    };
};