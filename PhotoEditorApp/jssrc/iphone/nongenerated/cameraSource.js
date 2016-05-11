function camera_captureSource_Toggle() {
    if (frmHome.Camera0b80625cf993243.cameraSource == constants.CAMERA_SOURCE_FRONT) {
        frmHome.Camera0b80625cf993243.cameraSource = constants.CAMERA_SOURCE_REAR;
    } else {
        frmHome.Camera0b80625cf993243.cameraSource = constants.CAMERA_SOURCE_FRONT;
    }
}

function camera_captureSource_Toggle2() {
    if (frmVideo.camerawidget.cameraSource == constants.CAMERA_SOURCE_FRONT) {
        frmVideo.camerawidget.cameraSource = constants.CAMERA_SOURCE_REAR;
    } else {
        frmVideo.camerawidget.cameraSource = constants.CAMERA_SOURCE_FRONT;
    }
}
isVideoMode = false;
globalSupportedLevels_string = ["constants.CAMERA_VIDEO_QUALITY_HIGH", "constants.CAMERA_VIDEO_QUALITY_2160P", "constants.CAMERA_VIDEO_QUALITY_1080P", "constants.CAMERA_VIDEO_QUALITY_720P", "constants.CAMERA_VIDEO_QUALITY_480P", "constants.CAMERA_VIDEO_QUALITY_CIF", "constants.CAMERA_VIDEO_QUALITY_QVGA", "constants.CAMERA_VIDEO_QUALITY_LOW", "constants.CAMERA_VIDEO_QUALITY_HIGH_SPEED_HIGH", "constants.CAMERA_VIDEO_QUALITY_HIGH_SPEED_2160P", "constants.CAMERA_VIDEO_QUALITY_HIGH_SPEED_1080P", "constants.CAMERA_VIDEO_QUALITY_HIGH_SPEED_720P", "constants.CAMERA_VIDEO_QUALITY_HIGH_SPEED_480P", "constants.CAMERA_VIDEO_QUALITY_HIGH_SPEED_LOW"];
globalSupportedLevels = [constants.CAMERA_VIDEO_QUALITY_HIGH, constants.CAMERA_VIDEO_QUALITY_2160P, constants.CAMERA_VIDEO_QUALITY_1080P, constants.CAMERA_VIDEO_QUALITY_720P, constants.CAMERA_VIDEO_QUALITY_480P, constants.CAMERA_VIDEO_QUALITY_CIF, constants.CAMERA_VIDEO_QUALITY_QVGA, constants.CAMERA_VIDEO_QUALITY_LOW, constants.CAMERA_VIDEO_QUALITY_HIGH_SPEED_HIGH, constants.CAMERA_VIDEO_QUALITY_HIGH_SPEED_2160P, constants.CAMERA_VIDEO_QUALITY_HIGH_SPEED_1080P, constants.CAMERA_VIDEO_QUALITY_HIGH_SPEED_720P, constants.CAMERA_VIDEO_QUALITY_HIGH_SPEED_480P, constants.CAMERA_VIDEO_QUALITY_HIGH_SPEED_LOW];

function videoQualityLevel_Android() {
    alert((Number)(frmVideo.listboxquality.selectedKey));
    frmVideo.camerawidget.videoQualityLevel = (Number)(frmVideo.listboxquality.selectedKey);
}

function camera_videoQualityLevel() {
    var result = frmVideo.listboxquality.selectedKey;
    switch (result) {
    case "1":
        frmVideo.camerawidget.videoQualityLevel = constants.CAMERA_VIDEO_QUALITY_MEDIUM;
        break;
    case "2":
        frmVideo.camerawidget.videoQualityLevel = constants.CAMERA_VIDEO_QUALITY_HIGH;
        break;
    case "3":
        frmVideo.camerawidget.videoQualityLevel = constants.CAMERA_VIDEO_QUALITY_LOW;
        break;
    case "4":
        frmVideo.camerawidget.videoQualityLevel = constants.CAMERA_VIDEO_QUALITY_640X480;
        break;
    case "5":
        frmVideo.camerawidget.videoQualityLevel = constants.CAMERA_VIDEO_QUALITY_1280X720;
        break;
    case "6":
        frmVideo.camerawidget.videoQualityLevel = constants.CAMERA_VIDEO_QUALITY_960X540;
        break;
    }
}

function retrieveQualityLevels() {
    if (kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPad") {
        frmVideo.listboxquality.masterData = [
            ["1", "MEDIUM"],
            ["2", "HIGH"],
            ["3", "LOW"],
            ["4", "640x480"],
            ["5", "1280x720"],
            ["6", "960x540"]
        ];
        frmVideo.listboxquality.onSelection = camera_videoQualityLevel;
        return;
    }
    var supportedLevels = frmVideo.camerawidget.supportedVideoQualityLevels;
    var arrayQualityLevels = new Array();
    for (index1 in supportedLevels) {
        for (index2 in globalSupportedLevels) {
            if (supportedLevels[index1] == Number(globalSupportedLevels[index2])) {
                var arrayQualitylevel = new Array();
                arrayQualitylevel.push(supportedLevels[index1]);
                var quality = globalSupportedLevels_string[index2];
                arrayQualitylevel.push(quality.substring(31, 36));
                arrayQualityLevels.push(arrayQualitylevel);
            }
        }
    }
    frmVideo.camerawidget.captureMode = constants.CAMERA_CAPTURE_MODE_VIDEO;
    frmVideo.listboxquality.masterData = arrayQualityLevels;
    frmVideo.listboxquality.onSelection = videoQualityLevel_Android;
    //alert(arrayQualityLevels);
    //alert(frmVideo.listboxquality.masterData);
    return arrayQualityLevels;
}

function setVideoStabilization() {
    frmVideo.camerawidget.videoStabilization = !(frmVideo.camerawidget.videoStabilization);
}

function setFocusMode() {
    var result = frmVideo.listbox195726331671442.selectedKey;
    if (result == 1) frmVideo.camerawidget.focusMode = constants.CAMERA_FOCUS_MODE_AUTO;
    else if (result == 2) frmVideo.camerawidget.focusMode = constants.CAMERA_FOCUS_MODE_CONTINUOUS;
    //alert(frmVideo.camerawidget.focusMode);
}

function setVideoDuration() {
    frmVideo.camerawidget.videoDuration = frmVideo.slider195726331671443.selectedValue;
    frmVideo.label195726331671444.text = "Duration=" + frmVideo.camerawidget.videoDuration + "sec";
}

function openGalleryVideo() {
    var querycontext = {
        mimetype: "video/*"
    };
    var returnStatus = kony.phone.openMediaGallery(onselectioncallback2, querycontext);
}

function onselectioncallback2() {
    kony.print("Hello");
}

function camera_FlashMode(eventobject) {
    var result = new Array();
    result = frmVideo.listboxflash.selectedKeyValues;
    if (result[0][1] == "Auto") frmVideo.camerawidget.cameraOptions = {
        flashMode: constants.FLASH_MODE_AUTO
    };
    else if (result[0][1] == "On") frmVideo.camerawidget.cameraOptions = {
        flashMode: constants.FLASH_MODE_ON
    };
    else if (result[0][1] == "Off") frmVideo.camerawidget.cameraOptions = {
        flashMode: constants.FLASH_MODE_OFF
    };
    else frmVideo.camerawidget.cameraOptions = {
        flashMode: constants.FLASH_MODE_ALWAYS_ON
    };
    //alert("FlashMode : " + result[0][1] + " is selected!!!");
}

function camera_videoFormatProperty() {
    var result = frmVideo.listboxvideoformat.selectedKey;
    if (result == 1) frmVideo.camerawidget.videoFormat = constants.CAMERA_VIDEO_FORMAT_MP4;
    else if (result == 2) frmVideo.camerawidget.videoFormat = constants.CAMERA_VIDEO_FORMAT_MOV;
}