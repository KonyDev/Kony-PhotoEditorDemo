function addWidgetsfrmOverlayIOS2() {
    frmOverlayIOS2.setDefaultUnit(kony.flex.DP);
    var Button0c3b6b9cd2b544e = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "10%",
        "id": "Button0c3b6b9cd2b544e",
        "isVisible": true,
        "left": "80%",
        "onClick": AS_Button_cccf68d203c04de9a8aa1a184cd2c661,
        "skin": "cambtnskin",
        "top": "0%",
        "width": "20%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    frmOverlayIOS2.add(
    Button0c3b6b9cd2b544e);
};

function frmOverlayIOS2Globals() {
    frmOverlayIOS2 = new kony.ui.Form2({
        "accessibilityConfig": {
            "a11yHidden": false,
            "a11yHint": "",
            "a11yLabel": "",
            "a11yValue": ""
        },
        "addWidgets": addWidgetsfrmOverlayIOS2,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "enableScrolling": true,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "frmOverlayIOS2",
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
};