function addWidgetsfrmVideo() {
    frmVideo.setDefaultUnit(kony.flex.DP);
    var FlexContainer0f9ca570a05a94f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "FlexContainer0f9ca570a05a94f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox01f45ff8a6d6a4bf",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0f9ca570a05a94f.setDefaultUnit(kony.flex.DP);
    var Image0c6ee6f8a4f754f = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0c6ee6f8a4f754f",
        "isVisible": true,
        "left": "0dp",
        "onTouchEnd": AS_Image_b53758e8970244b493291ac8f48e2a99,
        "skin": "slImage",
        "src": "left207.png",
        "top": "0dp",
        "width": "15%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Image0ab62ad7311e94c = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0ab62ad7311e94c",
        "isVisible": true,
        "left": "85%",
        "onTouchEnd": AS_Image_8eb0e2afcb544a94b9a4cca5a3626a9c,
        "skin": "slImage",
        "src": "network19.png",
        "top": "2dp",
        "width": "15%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label02e7c5982c65946 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "Label02e7c5982c65946",
        "isVisible": true,
        "left": "110dp",
        "skin": "CopyslLabel01cbef059b9e949",
        "text": "Video Settings",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "13dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer0f9ca570a05a94f.add(
    Image0c6ee6f8a4f754f, Image0ab62ad7311e94c, Label02e7c5982c65946);
    var FcMode = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "FcMode",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FcMode.setDefaultUnit(kony.flex.DP);
    var label195726331671603 = new kony.ui.Label({
        "accessibilityConfig": {
            "a11yHidden": false,
            "a11yHint": "",
            "a11yLabel": "",
            "a11yValue": ""
        },
        "centerY": "50%",
        "id": "label195726331671603",
        "isVisible": true,
        "left": "5%",
        "skin": "videolabelSkin",
        "text": "Flash Mode",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var listboxflash = new kony.ui.ListBox({
        "accessibilityConfig": {
            "a11yHidden": false,
            "a11yHint": "",
            "a11yLabel": "",
            "a11yValue": ""
        },
        "centerY": "50%",
        "id": "listboxflash",
        "isVisible": true,
        "masterData": [
            ["constants.FLASH_MODE_AUTO", "Auto"],
            ["constants.FLASH_MODE_ON", "On"],
            ["constants.FLASH_MODE_OFF", "Off"],
            ["constants.FLASH_MODE_ALWAYS_ON", "Always On"]
        ],
        "onSelection": AS_ListBox_a015a244743e4996aee3d2fe51141420,
        "right": "4%",
        "selectedKey": "constants.FLASH_MODE_AUTO",
        "selectedKeyValue": ["constants.FLASH_MODE_AUTO", "Auto"],
        "skin": "slListBox010921d56151a4d",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "placeholder": "Select",
        "popupTitle": "Please Select",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var CopyLblLine00fd6aa474b8e46 = new kony.ui.Label({
        "bottom": "0%",
        "height": "1%",
        "id": "CopyLblLine00fd6aa474b8e46",
        "isVisible": true,
        "left": "5%",
        "right": "4%",
        "skin": "sknLblLine",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FcMode.add(
    label195726331671603, listboxflash, CopyLblLine00fd6aa474b8e46);
    var FcVideoQuality = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "FcVideoQuality",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "20%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FcVideoQuality.setDefaultUnit(kony.flex.DP);
    var label195726331671452 = new kony.ui.Label({
        "accessibilityConfig": {
            "a11yHidden": false,
            "a11yHint": "",
            "a11yLabel": "",
            "a11yValue": ""
        },
        "centerY": "50%",
        "id": "label195726331671452",
        "isVisible": true,
        "left": "5%",
        "skin": "videolabelSkin",
        "text": "Video Quality",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var listboxquality = new kony.ui.ListBox({
        "accessibilityConfig": {
            "a11yHidden": false,
            "a11yHint": "",
            "a11yLabel": "",
            "a11yValue": ""
        },
        "centerY": "50%",
        "id": "listboxquality",
        "isVisible": true,
        "masterData": [
            ["1", "Medium"],
            ["2", "High"],
            ["3", "Low"],
            ["4", "640x480"],
            ["5", "1280x720"],
            ["6", "960x540"]
        ],
        "onSelection": AS_ListBox_01afbcfe65614d1eafc1a90922ac784f,
        "right": "4%",
        "selectedKey": "1",
        "selectedKeyValue": ["1", "Medium"],
        "skin": "slListBox010921d56151a4d",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "placeholder": "Select Quality Level",
        "popupTitle": "Please Select",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var CopyLblLine05bed8916b5e84f = new kony.ui.Label({
        "bottom": "0%",
        "height": "1%",
        "id": "CopyLblLine05bed8916b5e84f",
        "isVisible": true,
        "left": "5%",
        "right": "4%",
        "skin": "sknLblLine",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FcVideoQuality.add(
    label195726331671452, listboxquality, CopyLblLine05bed8916b5e84f);
    var FCformat = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "FCformat",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "30%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FCformat.setDefaultUnit(kony.flex.DP);
    var CopyLblLine0a36247b3e5e444 = new kony.ui.Label({
        "bottom": "0%",
        "height": "1%",
        "id": "CopyLblLine0a36247b3e5e444",
        "isVisible": true,
        "left": "5%",
        "right": "4%",
        "skin": "sknLblLine",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FCformat.add(
    CopyLblLine0a36247b3e5e444);
    var FcDuration = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "FcDuration",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "40%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FcDuration.setDefaultUnit(kony.flex.DP);
    var label195726331671444 = new kony.ui.Label({
        "accessibilityConfig": {
            "a11yHidden": false,
            "a11yHint": "",
            "a11yLabel": "",
            "a11yValue": ""
        },
        "centerY": "50%",
        "id": "label195726331671444",
        "isVisible": true,
        "left": "5%",
        "skin": "videolabelSkin",
        "text": "Video Duration",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var slider195726331671443 = new kony.ui.Slider({
        "accessibilityConfig": {
            "a11yHidden": false,
            "a11yHint": "",
            "a11yLabel": "",
            "a11yValue": ""
        },
        "centerY": "50%",
        "id": "slider195726331671443",
        "isVisible": true,
        "max": 100,
        "min": 0,
        "onSelection": AS_Slider_38bba47a1c0f4672b52c7ab5bbd26cfd,
        "right": "4%",
        "selectedValue": 0,
        "step": 1,
        "width": "40%",
        "zIndex": 1
    }, {}, {});
    var LblLine = new kony.ui.Label({
        "bottom": "0%",
        "height": "1%",
        "id": "LblLine",
        "isVisible": true,
        "left": "5%",
        "right": "4%",
        "skin": "sknLblLine",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FcDuration.add(
    label195726331671444, slider195726331671443, LblLine);
    var camerawidget = new kony.ui.Camera({
        "accessibilityConfig": {
            "a11yHidden": false,
            "a11yHint": "",
            "a11yLabel": "",
            "a11yValue": ""
        },
        "cameraSource": constants.CAMERA_SOURCE_REAR,
        "captureMode": constants.CAMERA_CAPTURE_MODE_VIDEO,
        "centerX": "50%",
        "height": "10%",
        "id": "camerawidget",
        "isVisible": true,
        "left": "24.06%",
        "onCapture": AS_Camera_3668edfbe24c42b885934ba426afc2d2,
        "skin": "slCamera083b2c1c36e3649",
        "top": "58.84%",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": true,
        "enablePhotoCropFeature": false,
        "overlayConfig": {
            "captureButtonText": "",
            "startVideoButtonText": "",
            "stopVideoButtonText": "",
            "overlayForm": frmOverlay
        }
    });
    frmVideo.add(
    FlexContainer0f9ca570a05a94f, FcMode, FcVideoQuality, FCformat, FcDuration, camerawidget);
};

function frmVideoGlobals() {
    frmVideo = new kony.ui.Form2({
        "accessibilityConfig": {
            "a11yHidden": false,
            "a11yHint": "",
            "a11yLabel": "",
            "a11yValue": ""
        },
        "addWidgets": addWidgetsfrmVideo,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "enableScrolling": true,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "frmVideo",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "onHide": AS_Form_ed4320f8c3874555a81d3e518fa439d2,
        "pagingEnabled": false,
        "skin": "slForm07900c270bd4d49",
        "verticalScrollIndicator": true
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "titleBar": true,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};