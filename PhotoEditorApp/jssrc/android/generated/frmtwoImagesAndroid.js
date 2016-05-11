function addWidgetsfrmtwoImagesAndroid() {
    frmtwoImagesAndroid.setDefaultUnit(kony.flex.DP);
    var FlexContainer0344ae25ce9564f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "9%",
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
        "id": "Label025c2f675fd1a47",
        "isVisible": true,
        "skin": "CopyslLabel01cbef059b9e949",
        "text": "Image Compositing",
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
        "height": "80%",
        "id": "Button0eb92b74f4c1848",
        "isVisible": true,
        "left": "85%",
        "onTouchEnd": AS_Button_c207f69994e44c449d590b58710241f6,
        "skin": "btnskin11",
        "top": "10%",
        "width": "15%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0344ae25ce9564f.add(
    Label025c2f675fd1a47, Button0eb92b74f4c1848);
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
    var FlexScrollContainer0552175c503e64c = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "11%",
        "horizontalScrollIndicator": true,
        "id": "FlexScrollContainer0552175c503e64c",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
        "skin": "slFSbox",
        "top": "89%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexScrollContainer0552175c503e64c.setDefaultUnit(kony.flex.DP);
    var Image0a3395fab985944 = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0a3395fab985944",
        "isVisible": true,
        "left": "0dp",
        "onTouchEnd": AS_Image_09077f2c96964a6982f51397fef90edf,
        "skin": "slImage",
        "src": "test1.png",
        "top": "0dp",
        "width": "15%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage08826854658574f = new kony.ui.Image2({
        "height": "100%",
        "id": "CopyImage08826854658574f",
        "isVisible": true,
        "left": "16%",
        "onTouchEnd": AS_Image_64bf8d8c963b4e118458e7b0f5849d06,
        "skin": "slImage",
        "src": "test3.png",
        "top": "0dp",
        "width": "15%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage0c7a075f4c28240 = new kony.ui.Image2({
        "height": "100%",
        "id": "CopyImage0c7a075f4c28240",
        "isVisible": true,
        "left": "32%",
        "onTouchEnd": AS_Image_944125762f194487892a068e0dab4bee,
        "skin": "slImage",
        "src": "test4.png",
        "top": "0dp",
        "width": "15%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage08ded9ed1d84644 = new kony.ui.Image2({
        "height": "100%",
        "id": "CopyImage08ded9ed1d84644",
        "isVisible": true,
        "left": "48%",
        "onTouchEnd": AS_Image_47bfe475bd4c41129c875e1642fb77e3,
        "skin": "slImage",
        "src": "test6.png",
        "top": "0dp",
        "width": "15%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage08344cc76b5a740 = new kony.ui.Image2({
        "height": "102.24%",
        "id": "CopyImage08344cc76b5a740",
        "isVisible": true,
        "left": "64.00%",
        "onTouchEnd": AS_Image_2ba772f530824081b6528422cd79cdef,
        "skin": "slImage",
        "src": "test7.png",
        "top": "-1dp",
        "width": "15%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage0a32f0dd6881340 = new kony.ui.Image2({
        "height": "100%",
        "id": "CopyImage0a32f0dd6881340",
        "isVisible": true,
        "left": "81.33%",
        "onTouchEnd": AS_Image_fce3a0cda45d4ce082fb600cf2fe0b0d,
        "skin": "slImage",
        "src": "xor.png",
        "top": "0dp",
        "width": "15%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexScrollContainer0552175c503e64c.add(
    Image0a3395fab985944, CopyImage08826854658574f, CopyImage0c7a075f4c28240, CopyImage08ded9ed1d84644, CopyImage08344cc76b5a740, CopyImage0a32f0dd6881340);
    frmtwoImagesAndroid.add(
    FlexContainer0344ae25ce9564f, FlexContainer0393e20c5f1314b, FlexContainer015071beb53914d, FlexScrollContainer0552175c503e64c);
};

function frmtwoImagesAndroidGlobals() {
    frmtwoImagesAndroid = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmtwoImagesAndroid,
        "enabledForIdleTimeout": false,
        "id": "frmtwoImagesAndroid",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
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
};