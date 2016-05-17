function addWidgetsfrmblurAndroid() {
    frmblurAndroid.setDefaultUnit(kony.flex.DP);
    var FlexContainer0738bfb11778d46 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "85%",
        "id": "FlexContainer0738bfb11778d46",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
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
    var FlexScrollContainer0bca70123445b43 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "10%",
        "horizontalScrollIndicator": true,
        "id": "FlexScrollContainer0bca70123445b43",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
        "skin": "slFSbox",
        "top": "87%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexScrollContainer0bca70123445b43.setDefaultUnit(kony.flex.DP);
    var Slider00e30a845fa1d40 = new kony.ui.Slider({
        "height": "100%",
        "id": "Slider00e30a845fa1d40",
        "isVisible": true,
        "left": "1%",
        "leftSkin": "slSliderLeftBlue",
        "max": 50,
        "min": 5,
        "onSlide": AS_Slider_ed59dac54e3a4e739fe8c07d8b542fd2,
        "right": "1%",
        "rightSkin": "CopyslSliderRightBlue0b9b109a0e96f48",
        "selectedValue": 15,
        "step": 5,
        "thumbImage": "aviary_seekbar_thumb_zero_pressed.png",
        "top": "0%"
    }, {}, {
        "thumbTintColor": "ffffff00"
    });
    FlexScrollContainer0bca70123445b43.add(
    Slider00e30a845fa1d40);
    frmblurAndroid.add(
    FlexContainer0738bfb11778d46, FlexScrollContainer0bca70123445b43);
};

function frmblurAndroidGlobals() {
    frmblurAndroid = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmblurAndroid,
        "enabledForIdleTimeout": false,
        "headers": [FlexContainer0587f683a8a6e4e],
        "id": "frmblurAndroid",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "onHide": AS_Form_7b22af3c5faf47e5b83e594247ceda6b,
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
    frmblurAndroid.info = {
        "kuid": "421e80eda23744eda8e843993a89ce4f"
    };
};