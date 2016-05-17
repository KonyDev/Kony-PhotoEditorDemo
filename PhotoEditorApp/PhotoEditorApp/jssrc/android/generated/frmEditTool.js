function initializefrmEditTool() {
    FlexContainer03745b46512bd47 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "FlexContainer03745b46512bd47",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox016d9a9ec59f544"
    }, {}, {});
    FlexContainer03745b46512bd47.setDefaultUnit(kony.flex.DP);
    var FlexScrollContainer02fc69c09b4074e = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "FlexScrollContainer02fc69c09b4074e",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%"
    }, {}, {});
    FlexScrollContainer02fc69c09b4074e.setDefaultUnit(kony.flex.DP);
    var Button0692b2239355a41 = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed07372232ffcd444",
        "height": "100%",
        "id": "Button0692b2239355a41",
        "isVisible": true,
        "left": "0.06%",
        "onClick": AS_Button_2c286f4c8f184a4a95f8f626dc90e0a6,
        "skin": "Copybtnskin07916093f31714c",
        "top": "0.00%",
        "width": "14%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Scale = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed06d4c293a5a6e49",
        "height": "100%",
        "id": "Scale",
        "isVisible": true,
        "left": "17%",
        "onClick": AS_Button_b46c0c7da77144f2ac7a49aeedade6d1,
        "skin": "btnskin2",
        "top": "0%",
        "width": "14%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyScale093413d1631204d = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0a015edabf4ce42",
        "height": "100%",
        "id": "CopyScale093413d1631204d",
        "isVisible": true,
        "left": "33%",
        "onClick": AS_Button_52a14681e2bf49b282bffbe4fa0364e8,
        "skin": "btnskin3",
        "top": "0.26%",
        "width": "14%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var blur = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0725429ef23f445",
        "height": "100%",
        "id": "blur",
        "isVisible": true,
        "left": "65%",
        "onClick": AS_Button_760babb830f3478da68c9264da25f007,
        "skin": "btnskin4",
        "top": "0.26%",
        "width": "14%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Copyblur00745c7fa47a640 = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0b8141aad5ffc49",
        "height": "100%",
        "id": "Copyblur00745c7fa47a640",
        "isVisible": true,
        "left": "49%",
        "onClick": AS_Button_eba6815df3f74467b8d6be419eed8bc0,
        "skin": "btnskin6",
        "top": "0.26%",
        "width": "14%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var moreeffectsID = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed04e8adeda000345",
        "height": "100%",
        "id": "moreeffectsID",
        "isVisible": true,
        "left": "82%",
        "onClick": AS_Button_54c903cffce7404e885c9c8cb4b0b773,
        "skin": "btnskin7",
        "top": "0.00%",
        "width": "14%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexScrollContainer02fc69c09b4074e.add(
    Button0692b2239355a41, Scale, CopyScale093413d1631204d, blur, Copyblur00745c7fa47a640, moreeffectsID);
    FlexContainer03745b46512bd47.add(
    FlexScrollContainer02fc69c09b4074e);
}