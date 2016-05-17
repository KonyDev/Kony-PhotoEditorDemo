function addWidgetsfrm2() {
    frm2.setDefaultUnit(kony.flex.DP);
    var FlexContainer0738bfb11778d46 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0738bfb11778d46",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5.08%",
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
        "left": 0,
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": 0,
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Flexscroll2 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "15%",
        "horizontalScrollIndicator": true,
        "id": "Flexscroll2",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "65%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
        "skin": "CopyslFSbox021bbe21514814c",
        "top": "0%",
        "verticalScrollIndicator": true,
        "width": "35%",
        "zIndex": 2
    }, {}, {});
    Flexscroll2.setDefaultUnit(kony.flex.DP);
    var Image03e407801a1474f = new kony.ui.Image2({
        "height": "100%",
        "id": "Image03e407801a1474f",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "facebook2.png",
        "top": "0%",
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage010e0ac2dfbc34f = new kony.ui.Image2({
        "height": "100%",
        "id": "CopyImage010e0ac2dfbc34f",
        "isVisible": true,
        "left": "49.98%",
        "skin": "slImage",
        "src": "logotype144.png",
        "top": "0.00%",
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    Flexscroll2.add(
    Image03e407801a1474f, CopyImage010e0ac2dfbc34f);
    FlexContainer0738bfb11778d46.add(
    Img2, Flexscroll2);
    frm2.add(
    FlexContainer0738bfb11778d46);
};

function frm2Globals() {
    frm2 = new kony.ui.Form2({
        "addWidgets": addWidgetsfrm2,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer03745b46512bd47],
        "headers": [FlexContainer01d10782f16be43],
        "id": "frm2",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "onHide": AS_Form_a37f5c5dd07841938875d8f1a6b6e4b1,
        "skin": "frmSkin"
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
    frm2.info = {
        "kuid": "fa3bbd4f53184d168a1f9b2a0c208176"
    };
};