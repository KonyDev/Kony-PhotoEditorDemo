function addWidgetsfrmOverlayiOS() {
    frmOverlayiOS.setDefaultUnit(kony.flex.DP);
    var Button05edd7837bfb240 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "10%",
        "id": "Button05edd7837bfb240",
        "isVisible": true,
        "left": "80%",
        "onClick": AS_Button_cf865f8acf8e4917971ec8fc876ca8e5,
        "skin": "cambtnskin",
        "top": "0dp",
        "width": "20%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    frmOverlayiOS.add(
    Button05edd7837bfb240);
};

function frmOverlayiOSGlobals() {
    frmOverlayiOS = new kony.ui.Form2({
        "accessibilityConfig": {
            "a11yHidden": false,
            "a11yHint": "",
            "a11yLabel": "",
            "a11yValue": ""
        },
        "addWidgets": addWidgetsfrmOverlayiOS,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "enableScrolling": true,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "frmOverlayiOS",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "pagingEnabled": false,
        "skin": "slForm053fc096b0bfa45",
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
    frmOverlayiOS.info = {
        "kuid": "p2kwiet1379155974119"
    };
};