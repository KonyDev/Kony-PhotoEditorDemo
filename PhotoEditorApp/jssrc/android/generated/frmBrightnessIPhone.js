function addWidgetsfrmBrightnessIPhone() {
    frmBrightnessIPhone.setDefaultUnit(kony.flex.DP);
    var Slider0a1d0fefb5b6d48 = new kony.ui.Slider({
        "height": "8%",
        "id": "Slider0a1d0fefb5b6d48",
        "isVisible": true,
        "left": "0%",
        "leftSkin": "CopyslSliderLeftBlue0e6d7c67527fd4b",
        "max": 10,
        "min": 1,
        "onSlide": AS_Slider_c5ecf95f42024da5b6843fe5d3536967,
        "rightSkin": "CopyslSliderRightBlue0d310833e6fe04a",
        "selectedValue": 1,
        "step": 1,
        "thumbImage": "slider_android.png",
        "top": "76%",
        "width": "100%",
        "zIndex": 1
    }, {}, {
        "thickness": 20
    });
    var FlexContainer0738bfb11778d46 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "75%",
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
    var FlexContainer055b9b6f66e5348 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "16%",
        "id": "FlexContainer055b9b6f66e5348",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox016d9a9ec59f544",
        "top": "88%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer055b9b6f66e5348.setDefaultUnit(kony.flex.DP);
    var Label074801e554cd44e = new kony.ui.Label({
        "height": "20%",
        "id": "Label074801e554cd44e",
        "isVisible": true,
        "left": "1%",
        "skin": "CopyslLabel0f207d696f1994b",
        "text": "bright",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "80%",
        "width": "21%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Image08b0d77a56bda4f = new kony.ui.Image2({
        "height": "80%",
        "id": "Image08b0d77a56bda4f",
        "isVisible": true,
        "left": "0dp",
        "onTouchEnd": AS_Image_15fb3815283b47b69f76ee27a63e6efa,
        "skin": "slImage",
        "src": "brightness1.png",
        "top": "0dp",
        "width": "22%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage0c514db794f374f = new kony.ui.Image2({
        "height": "80%",
        "id": "CopyImage0c514db794f374f",
        "isVisible": true,
        "left": "22.67%",
        "onTouchEnd": AS_Image_53ac80c297f24ab0b743680d406f63a8,
        "skin": "slImage",
        "src": "contrast.png",
        "top": "0dp",
        "width": "22%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage02a9fd7302f7743 = new kony.ui.Image2({
        "height": "80%",
        "id": "CopyImage02a9fd7302f7743",
        "isVisible": true,
        "left": "45.31%",
        "onTouchEnd": AS_Image_4d07e99af73d4d9dabd3068507f7e911,
        "skin": "slImage",
        "src": "saturation.png",
        "top": "0dp",
        "width": "22%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage0e7498f891cd345 = new kony.ui.Image2({
        "height": "80%",
        "id": "CopyImage0e7498f891cd345",
        "isVisible": true,
        "left": "69.90%",
        "onTouchEnd": AS_Image_b7b032b804ad4b4886908689b8b5f66a,
        "skin": "slImage",
        "src": "hue.png",
        "top": "0dp",
        "width": "22%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel078f146f7fd964d = new kony.ui.Label({
        "height": "20%",
        "id": "CopyLabel078f146f7fd964d",
        "isVisible": true,
        "left": "24%",
        "skin": "CopyslLabel0f207d696f1994b",
        "text": "contrast",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "80%",
        "width": "24.00%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0213c5339edac42 = new kony.ui.Label({
        "height": "20%",
        "id": "CopyLabel0213c5339edac42",
        "isVisible": true,
        "left": "48%",
        "skin": "CopyslLabel0f207d696f1994b",
        "text": "saturation",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "80%",
        "width": "30%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0fedcfb45755049 = new kony.ui.Label({
        "height": "20%",
        "id": "CopyLabel0fedcfb45755049",
        "isVisible": true,
        "left": "79%",
        "skin": "CopyslLabel0f207d696f1994b",
        "text": "hue",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "80%",
        "width": "20%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer055b9b6f66e5348.add(
    Label074801e554cd44e, Image08b0d77a56bda4f, CopyImage0c514db794f374f, CopyImage02a9fd7302f7743, CopyImage0e7498f891cd345, CopyLabel078f146f7fd964d, CopyLabel0213c5339edac42, CopyLabel0fedcfb45755049);
    frmBrightnessIPhone.add(
    Slider0a1d0fefb5b6d48, FlexContainer0738bfb11778d46, FlexContainer055b9b6f66e5348);
};

function frmBrightnessIPhoneGlobals() {
    frmBrightnessIPhone = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmBrightnessIPhone,
        "enabledForIdleTimeout": false,
        "headers": [FlexContainer06e9d0abcd67741],
        "id": "frmBrightnessIPhone",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "onHide": AS_Form_d0bf141da6d6431da4e66b5a69e2604d,
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