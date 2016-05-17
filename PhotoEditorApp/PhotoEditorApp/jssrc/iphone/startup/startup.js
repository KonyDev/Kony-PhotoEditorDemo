//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "PhotoEditor",
    appName: "PhotoEditorApp",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: null,
    serverPort: null,
    secureServerPort: null,
    isDebug: true,
    middlewareContext: "middleware",
    isMFApp: false,
    eventTypes: [],
    url: null,
    secureurl: null
};
sessionID = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
    initializefrmCroptemp();
    initializefrmPreview();
    initializeTemp0307257dfea3144();
    initializefrmEditTool();
    initializeTemp0a64c2fbb7e8441();
    Form0462476075e4144Globals();
    frm2Globals();
    frmblurAndroidGlobals();
    frmblurIphoneGlobals();
    frmBrightnessGlobals();
    frmBrightnessIPhoneGlobals();
    frmCropPreviewGlobals();
    frmeffectsAndroidGlobals();
    frmeffectsIphoneGlobals();
    frmHomeGlobals();
    frmOverlayGlobals();
    frmOverlay1Globals();
    frmOverlayiOSGlobals();
    frmOverlayIOS2Globals();
    frmOverlayVideoGlobals();
    frmOverlayVideo1Globals();
    frmScaleFactorGlobals();
    frmtwoImagesAndroidGlobals();
    frmtwoImagesIphoneGlobals();
    frmVideoGlobals();
    frmVideo2Globals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 6900
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;