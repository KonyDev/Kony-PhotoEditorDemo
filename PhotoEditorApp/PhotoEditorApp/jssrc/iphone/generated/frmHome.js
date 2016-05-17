function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var FlexContainer05bae96ed87254f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "FlexContainer05bae96ed87254f",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer05bae96ed87254f.setDefaultUnit(kony.flex.DP);
    var Image06a9daea9dc4f4f = new kony.ui.Image2({
        "height": "100%",
        "id": "Image06a9daea9dc4f4f",
        "isVisible": true,
        "left": "24.95%",
        "skin": "slImage",
        "src": "drawing.png",
        "top": "0%",
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer05bae96ed87254f.add(
    Image06a9daea9dc4f4f);
    var imgLogo = new kony.ui.Image2({
        "centerX": "50%",
        "id": "imgLogo",
        "isVisible": true,
        "skin": "slImage",
        "src": "logo.png",
        "top": "52dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var LblTitle1 = new kony.ui.Label({
        "centerX": "50%",
        "id": "LblTitle1",
        "isVisible": true,
        "skin": "sknLblTitle",
        "text": "PHOTO EDITOR",
        "top": "20%",
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
    var LblTitle2 = new kony.ui.Label({
        "centerX": "50%",
        "id": "LblTitle2",
        "isVisible": true,
        "skin": "sknLblTitle2",
        "text": "Sample app to create & edit photos",
        "top": "170dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "pasteboardType": constants.PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "textCopyable": true,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var FlexContainerMain = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "220dp",
        "id": "FlexContainerMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "right": "5%",
        "skin": "slFbox",
        "top": "43%",
        "zIndex": 1
    }, {}, {});
    FlexContainerMain.setDefaultUnit(kony.flex.DP);
    var FlexContainer067ae0e29052140 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "49%",
        "id": "FlexContainer067ae0e29052140",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer067ae0e29052140.setDefaultUnit(kony.flex.DP);
    var Image0d8a2ca6187964d = new kony.ui.Image2({
        "centerY": "32%",
        "height": "100%",
        "id": "Image0d8a2ca6187964d",
        "isVisible": true,
        "left": "0%",
        "onTouchEnd": AS_Image_35f544604ac543858da7d92cb3369dc8,
        "skin": "slImage",
        "src": "imageprocessing.png",
        "top": "0dp",
        "width": "50%",
        "zIndex": 10
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Image086cb0ef85c5545 = new kony.ui.Image2({
        "centerY": "32%",
        "height": "100%",
        "id": "Image086cb0ef85c5545",
        "isVisible": true,
        "left": "50%",
        "onTouchEnd": AS_Image_5f840b585b0d4d3e9a6ce7a4f343b0df,
        "skin": "slImage",
        "src": "sample.png",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblLine = new kony.ui.Label({
        "centerX": "50%",
        "height": "100%",
        "id": "lblLine",
        "isVisible": true,
        "left": "49%",
        "skin": "CopysknLblLine0535bf7524cd844",
        "top": "2dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyLabel0e63000efbfc741 = new kony.ui.Label({
        "bottom": "18%",
        "centerX": "25%",
        "id": "CopyLabel0e63000efbfc741",
        "isVisible": true,
        "skin": "CopyslLabel09be9dc6da0614c",
        "text": "PHOTO",
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
    var CopyLabel091b6f8542b7b43 = new kony.ui.Label({
        "bottom": "18%",
        "centerX": "75%",
        "id": "CopyLabel091b6f8542b7b43",
        "isVisible": true,
        "skin": "CopyslLabel09be9dc6da0614c",
        "text": "MOVIES",
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
    FlexContainer067ae0e29052140.add(
    Image0d8a2ca6187964d, Image086cb0ef85c5545, lblLine, CopyLabel0e63000efbfc741, CopyLabel091b6f8542b7b43);
    var flextemp1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "52%",
        "id": "flextemp1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "right": 0,
        "skin": "slFbox",
        "top": "49%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flextemp1.setDefaultUnit(kony.flex.DP);
    var lblLine2 = new kony.ui.Label({
        "height": "1dp",
        "id": "lblLine2",
        "isVisible": true,
        "left": "5%",
        "right": "5%",
        "skin": "CopysknLblLine0535bf7524cd844",
        "text": " ",
        "top": "0dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var FlexContainerGallery = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "25%",
        "clipBounds": true,
        "height": "90%",
        "id": "FlexContainerGallery",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    FlexContainerGallery.setDefaultUnit(kony.flex.DP);
    var Button07cb08b6ae3b944 = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "45%",
        "focusSkin": "CopyslButtonGlossRed0630e8d71292a46",
        "height": "50%",
        "id": "Button07cb08b6ae3b944",
        "isVisible": true,
        "left": "0.00%",
        "onClick": AS_Button_37463d4f8cdb497b9d0d95c2c443f22f,
        "skin": "btnskin9",
        "top": "0.00%",
        "width": "30%",
        "zIndex": 10
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var Label04084abe12bb949 = new kony.ui.Label({
        "bottom": "0%",
        "centerX": "50%",
        "id": "Label04084abe12bb949",
        "isVisible": true,
        "skin": "CopyslLabel09be9dc6da0614c",
        "text": "GALLERY",
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
    FlexContainerGallery.add(
    Button07cb08b6ae3b944, Label04084abe12bb949);
    var FlexContainerCamera = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "FlexContainerCamera",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "50%",
        "skin": "slFbox",
        "top": "0%",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    FlexContainerCamera.setDefaultUnit(kony.flex.DP);
    var Camera0b80625cf993243 = new kony.ui.Camera({
        "cameraSource": constants.CAMERA_SOURCE_REAR,
        "centerX": "50%",
        "centerY": "45%",
        "compressionLevel": 0,
        "height": "42%",
        "id": "Camera0b80625cf993243",
        "isVisible": true,
        "left": "0%",
        "onCapture": AS_Camera_b66a59d6e3a34d36b0d56850501d3551,
        "scaleFactor": 50,
        "skin": "CopyslCamera0eda7c5feed7d4d",
        "top": "0%",
        "width": "32%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PRIVATE,
        "enableOverlay": true,
        "nativeUserInterface": false,
        "overlayConfig": {
            "startVideoButtonText": "",
            "stopVideoButtonText": "",
            "overlayForm": frmOverlayiOS
        }
    });
    var CopyLabel002660f9da9fa4e = new kony.ui.Label({
        "bottom": "0%",
        "centerX": "50%",
        "id": "CopyLabel002660f9da9fa4e",
        "isVisible": true,
        "skin": "CopyslLabel09be9dc6da0614c",
        "text": "CAMERA",
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
    FlexContainerCamera.add(
    Camera0b80625cf993243, CopyLabel002660f9da9fa4e);
    var LblLine3 = new kony.ui.Label({
        "bottom": "0dp",
        "centerX": "50%",
        "id": "LblLine3",
        "isVisible": true,
        "left": "49%",
        "skin": "CopysknLblLine0535bf7524cd844",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flextemp1.add(
    lblLine2, FlexContainerGallery, FlexContainerCamera, LblLine3);
    FlexContainerMain.add(
    FlexContainer067ae0e29052140, flextemp1);
    frmHome.add(
    FlexContainer05bae96ed87254f, imgLogo, LblTitle1, LblTitle2, FlexContainerMain);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_b6830240c51945968d1fd15649e614ca,
        "skin": "startUpSkin"
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
    frmHome.info = {
        "kuid": "5d8e18160e3042f9b64d82a3dc179a49"
    };
};