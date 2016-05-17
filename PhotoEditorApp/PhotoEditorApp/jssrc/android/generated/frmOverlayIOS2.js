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
    }, {});
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
    frmOverlayIOS2.info = {
        "kuid": "551dc6a3d7434ef8b2229af56e11b16d"
    };
};