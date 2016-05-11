function addWidgetsfrmOverlayVideo() {
    frmOverlayVideo.setDefaultUnit(kony.flex.DP);
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
        "captureMode": constants.CAMERA_CAPTURE_MODE_VIDEO,
        "height": "50dp",
        "id": "FrontCamera",
        "isVisible": true,
        "left": "70%",
        "right": "5.0%",
        "text": "Front Camera",
        "top": "10%",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": true,
        "nativeUserInterface": true,
        "overlayConfig": {
            "startVideoButtonText": "",
            "stopVideoButtonText": ""
        }
    });
    flexContainer19986005869098.add(
    FrontCamera);
    frmOverlayVideo.add(
    flexContainer19986005869098);
};

function frmOverlayVideoGlobals() {
    frmOverlayVideo = new kony.ui.Form2({
        "accessibilityConfig": {
            "a11yHidden": false,
            "a11yHint": "",
            "a11yLabel": "",
            "a11yValue": ""
        },
        "addWidgets": addWidgetsfrmOverlayVideo,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "enableScrolling": true,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "frmOverlayVideo",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "pagingEnabled": false,
        "skin": "frmskin4",
        "verticalScrollIndicator": true
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
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
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "button",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "button",
            "labelRightSideView": "Edit"
        },
        "zoomScale": 1
    });
};