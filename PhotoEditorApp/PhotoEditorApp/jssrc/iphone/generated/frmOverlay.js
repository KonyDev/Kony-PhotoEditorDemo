function addWidgetsfrmOverlay() {
    frmOverlay.setDefaultUnit(kony.flex.DP);
    var flexContainer19986005869098 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "15%",
        "id": "flexContainer19986005869098",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainer19986005869098.setDefaultUnit(kony.flex.DP);
    var FrontCamera = new kony.ui.Camera({
        "accessibilityConfig": {
            "a11yHidden": false,
            "a11yHint": "",
            "a11yLabel": "",
            "a11yValue": ""
        },
        "cameraSource": constants.CAMERA_SOURCE_FRONT,
        "compressionLevel": 0,
        "height": "50dp",
        "id": "FrontCamera",
        "isVisible": true,
        "left": "70%",
        "onCapture": AS_Camera_3665961b2cd44eaeaf9aa6ca250e5d9e,
        "right": "5.0%",
        "scaleFactor": 70,
        "skin": "cameraswitch",
        "top": "10%",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "captureOrientation": constants.CAMERA_CAPTURE_ORIENTATION_DEFAULT,
        "enableOverlay": true,
        "imageFormat": constants.CAMERA_IMAGE_FORMAT_PNG,
        "nativeUserInterface": false,
        "overlayConfig": {
            "startVideoButtonText": "",
            "stopVideoButtonText": "",
            "overlayForm": frmOverlay1
        }
    });
    flexContainer19986005869098.add(
    FrontCamera);
    var FlexContainer039310b3f463945 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "FlexContainer039310b3f463945",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox01f45ff8a6d6a4bf",
        "top": "90%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer039310b3f463945.setDefaultUnit(kony.flex.DP);
    var Button04e92dfc6b8274e = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "100%",
        "id": "Button04e92dfc6b8274e",
        "isVisible": true,
        "left": "57dp",
        "onClick": AS_Button_150b54b05ffe46ff9ed7aa7e423554ce,
        "skin": "camerabuton",
        "top": "0%",
        "width": "25%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    FlexContainer039310b3f463945.add(
    Button04e92dfc6b8274e);
    frmOverlay.add(
    flexContainer19986005869098, FlexContainer039310b3f463945);
};

function frmOverlayGlobals() {
    frmOverlay = new kony.ui.Form2({
        "accessibilityConfig": {
            "a11yHidden": false,
            "a11yHint": "",
            "a11yLabel": "",
            "a11yValue": ""
        },
        "addWidgets": addWidgetsfrmOverlay,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "enableScrolling": true,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "frmOverlay",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "pagingEnabled": false,
        "postShow": AS_Form_b087f55acdfb4e3daa28d363cd4b13dd,
        "preShow": AS_Form_737b90383c9d48de99efbd44196171c5,
        "skin": "frmskin4",
        "verticalScrollIndicator": true
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "maxZoomScale": 1,
        "minZoomScale": 1,
        "needsIndicatorDuringPostShow": false,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "retainScrollPosition": false,
        "titleBar": false,
        "zoomScale": 1
    });
    frmOverlay.info = {
        "kuid": "p2kwiet1379155974107"
    };
};