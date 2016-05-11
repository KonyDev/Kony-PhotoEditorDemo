function addWidgetsfrmVideo2() {
    frmVideo2.setDefaultUnit(kony.flex.DP);
    var checkboxgroup195726331671440 = new kony.ui.CheckBoxGroup({
        "accessibilityConfig": {
            "a11yHidden": false,
            "a11yHint": "",
            "a11yLabel": "",
            "a11yValue": ""
        },
        "height": "8.0%",
        "id": "checkboxgroup195726331671440",
        "isVisible": true,
        "left": "28.0%",
        "masterData": [
            ["1", "Video Stabilization"]
        ],
        "onSelection": AS_CheckBoxGroup_03e382e612814db281ee01596b8b9670,
        "top": "10%",
        "width": "50%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var listbox195726331671442 = new kony.ui.ListBox({
        "accessibilityConfig": {
            "a11yHidden": false,
            "a11yHint": "",
            "a11yLabel": "",
            "a11yValue": ""
        },
        "height": "6.0%",
        "id": "listbox195726331671442",
        "isVisible": true,
        "left": "37.66%",
        "masterData": [
            ["1", "Auto"],
            ["2", "Continuous"]
        ],
        "onSelection": AS_ListBox_5736b7148d6e4bab8d0d275dcae47658,
        "selectedKey": "1",
        "selectedKeyValue": ["1", "Auto"],
        "skin": "slListBox010921d56151a4d",
        "top": "16.33%",
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
    var label195726331671564 = new kony.ui.Label({
        "accessibilityConfig": {
            "a11yHidden": false,
            "a11yHint": "",
            "a11yLabel": "",
            "a11yValue": ""
        },
        "height": "8%",
        "id": "label195726331671564",
        "isVisible": true,
        "left": "5.0%",
        "skin": "videolabelSkin",
        "text": "Focus Mode",
        "top": "15%",
        "width": "30%",
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
        "height": "10%",
        "id": "slider195726331671443",
        "isVisible": true,
        "left": "40%",
        "max": 100,
        "min": 0,
        "onSelection": AS_Slider_c58227c44e2a4ffaa987a62fd865627d,
        "selectedValue": 0,
        "step": 1,
        "top": "31.66%",
        "width": "55%",
        "zIndex": 1
    }, {}, {});
    var label195726331671444 = new kony.ui.Label({
        "accessibilityConfig": {
            "a11yHidden": false,
            "a11yHint": "",
            "a11yLabel": "",
            "a11yValue": ""
        },
        "height": "20%",
        "id": "label195726331671444",
        "isVisible": true,
        "left": "4%",
        "skin": "videolabelSkin",
        "text": "Video Duration",
        "top": "28%",
        "width": "38%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var label195726331671452 = new kony.ui.Label({
        "accessibilityConfig": {
            "a11yHidden": false,
            "a11yHint": "",
            "a11yLabel": "",
            "a11yValue": ""
        },
        "height": "12%",
        "id": "label195726331671452",
        "isVisible": true,
        "left": "5.0%",
        "skin": "videolabelSkin",
        "text": "Video Quality",
        "top": "45%",
        "width": "30%",
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
        "height": "7.0%",
        "id": "listboxquality",
        "isVisible": true,
        "left": "38%",
        "masterData": [
            ["1", "Medium"],
            ["2", "High"],
            ["3", "Low"],
            ["4", "640x480"],
            ["5", "1280x720"],
            ["6", "960x540"]
        ],
        "onSelection": AS_ListBox_f6591537387a4c18a741157756a487d9,
        "selectedKey": "1",
        "selectedKeyValue": ["1", "Medium"],
        "skin": "slListBox010921d56151a4d",
        "top": "46%",
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
    var label195726331671603 = new kony.ui.Label({
        "accessibilityConfig": {
            "a11yHidden": false,
            "a11yHint": "",
            "a11yLabel": "",
            "a11yValue": ""
        },
        "height": "12%",
        "id": "label195726331671603",
        "isVisible": true,
        "left": "5.00%",
        "skin": "videolabelSkin",
        "text": "Flash Mode",
        "top": "60.22%",
        "width": "30%",
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
        "height": "7.0%",
        "id": "listboxflash",
        "isVisible": true,
        "left": "38.0%",
        "masterData": [
            ["constants.FLASH_MODE_AUTO", "Auto"],
            ["constants.FLASH_MODE_ON", "On"],
            ["constants.FLASH_MODE_OFF", "Off"],
            ["constants.FLASH_MODE_ALWAYS_ON", "Always On"]
        ],
        "onSelection": AS_ListBox_ffd55e23a3f74ef48dc8e7bf09d5b8bd,
        "selectedKey": "constants.FLASH_MODE_AUTO",
        "selectedKeyValue": ["constants.FLASH_MODE_AUTO", "Auto"],
        "skin": "slListBox010921d56151a4d",
        "top": "62%",
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
    var camerawidget = new kony.ui.Camera({
        "accessibilityConfig": {
            "a11yHidden": false,
            "a11yHint": "",
            "a11yLabel": "",
            "a11yValue": ""
        },
        "cameraSource": constants.CAMERA_SOURCE_REAR,
        "captureMode": constants.CAMERA_CAPTURE_MODE_VIDEO,
        "height": "10%",
        "id": "camerawidget",
        "isVisible": true,
        "left": "30.67%",
        "onCapture": AS_Camera_fab272860370473cae887cfdc91c5f76,
        "skin": "slCamera083b2c1c36e3649",
        "top": "90%",
        "width": "40%",
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
    var FlexContainer0f9ca570a05a94f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "FlexContainer0f9ca570a05a94f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
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
        "onTouchEnd": AS_Image_75b8bb1662ca42098af6b6e0f5137946,
        "skin": "slImage",
        "src": "left207.png",
        "top": "0dp",
        "width": "15%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Image085b14b750b254c = new kony.ui.Image2({
        "height": "100%",
        "id": "Image085b14b750b254c",
        "isVisible": true,
        "left": "20%",
        "skin": "slImage",
        "src": "drawing2.png",
        "top": "0%",
        "width": "60%",
        "zIndex": 1
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
        "onTouchEnd": AS_Image_f9f285f2e6f641e593b3696b37bd1ffc,
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
    FlexContainer0f9ca570a05a94f.add(
    Image0c6ee6f8a4f754f, Image085b14b750b254c, Image0ab62ad7311e94c);
    frmVideo2.add(
    checkboxgroup195726331671440, listbox195726331671442, label195726331671564, slider195726331671443, label195726331671444, label195726331671452, listboxquality, label195726331671603, listboxflash, camerawidget, FlexContainer0f9ca570a05a94f);
};

function frmVideo2Globals() {
    frmVideo2 = new kony.ui.Form2({
        "accessibilityConfig": {
            "a11yHidden": false,
            "a11yHint": "",
            "a11yLabel": "",
            "a11yValue": ""
        },
        "addWidgets": addWidgetsfrmVideo2,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "enableScrolling": true,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "frmVideo2",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "onHide": AS_Form_c0b449e91a544218a3f4c0262da249d3,
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