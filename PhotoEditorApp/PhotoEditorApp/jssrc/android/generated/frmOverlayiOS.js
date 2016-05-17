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
    }, {});
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
    frmOverlayiOS.info = {
        "kuid": "p2kwiet1379155974119"
    };
};