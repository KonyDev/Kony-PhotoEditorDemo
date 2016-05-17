function addWidgetsfrmtwoImagesIphone() {
    frmtwoImagesIphone.setDefaultUnit(kony.flex.DP);
    var FlexContainer0344ae25ce9564f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "FlexContainer0344ae25ce9564f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox01f45ff8a6d6a4bf",
        "top": "0%",
        "width": "100%"
    }, {}, {});
    FlexContainer0344ae25ce9564f.setDefaultUnit(kony.flex.DP);
    var Label025c2f675fd1a47 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "height": "70%",
        "id": "Label025c2f675fd1a47",
        "isVisible": true,
        "skin": "CopyslLabel01cbef059b9e949",
        "text": "Image Blend",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Button0eb92b74f4c1848 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "44dp",
        "id": "Button0eb92b74f4c1848",
        "isVisible": true,
        "left": "77.33%",
        "onTouchEnd": AS_Button_f6f588a0e63247fd87c48b27a882e391,
        "skin": "btnskin11",
        "top": "6dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Image032827b42cf4e40 = new kony.ui.Image2({
        "height": "100%",
        "id": "Image032827b42cf4e40",
        "isVisible": true,
        "left": "0dp",
        "onTouchEnd": AS_Image_c2411dc2993242dd9ce378dc8887c153,
        "skin": "slImage",
        "src": "left207.png",
        "top": "1dp",
        "width": "15%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0344ae25ce9564f.add(
    Label025c2f675fd1a47, Button0eb92b74f4c1848, Image032827b42cf4e40);
    var FlexContainer0393e20c5f1314b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "28%",
        "id": "FlexContainer0393e20c5f1314b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "62%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0393e20c5f1314b.setDefaultUnit(kony.flex.DP);
    var img1 = new kony.ui.Image2({
        "height": "100%",
        "id": "img1",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslImage02c879fd2204b47",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var img2 = new kony.ui.Image2({
        "height": "100%",
        "id": "img2",
        "isVisible": true,
        "left": "188dp",
        "skin": "CopyslImage02c879fd2204b47",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0393e20c5f1314b.add(
    img1, img2);
    var FlexContainer015071beb53914d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "FlexContainer015071beb53914d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0c075a45c7cd34a",
        "top": "11%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer015071beb53914d.setDefaultUnit(kony.flex.DP);
    var Img4 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "Img4",
        "isVisible": false,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "78dp",
        "width": "100.00%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer015071beb53914d.add(
    Img4);
    var RadioButtonGroup09b7e6319b35d43 = new kony.ui.RadioButtonGroup({
        "centerX": "50%",
        "height": "10%",
        "id": "RadioButtonGroup09b7e6319b35d43",
        "isVisible": true,
        "left": "48dp",
        "masterData": [
            ["key1", "CISourceOverCompositing"],
            ["key2", "CIAdditionCompositing"],
            ["key3", "CIColorBlendMode"],
            ["key4", "CIColorBurnBlendMode"],
            ["key5", "CIDarkenBlendMode"]
        ],
        "onSelection": AS_RadioButtonGroup_525e6a1c4fa6400a9ad038ebb8d2ebe2,
        "selectedKey": "key1",
        "selectedKeyValue": ["key1", "CISourceOverCompositing"],
        "skin": "CopyslRadioButtonGroup013e319d652344b",
        "top": "90%",
        "width": "260dp",
        "zIndex": 1
    }, {
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmtwoImagesIphone.add(
    FlexContainer0344ae25ce9564f, FlexContainer0393e20c5f1314b, FlexContainer015071beb53914d, RadioButtonGroup09b7e6319b35d43);
};

function frmtwoImagesIphoneGlobals() {
    frmtwoImagesIphone = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmtwoImagesIphone,
        "enabledForIdleTimeout": false,
        "id": "frmtwoImagesIphone",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "onHide": AS_Form_09ca349dc29c4070a6c661de19f9f244,
        "skin": "frmSkin"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmtwoImagesIphone.info = {
        "kuid": "e3beb9c37ebd4665b17204fe78b784f2"
    };
};