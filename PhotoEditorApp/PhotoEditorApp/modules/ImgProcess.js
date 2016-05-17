
var cameraRawBytes;
var img;
var finalImageObject;
var filter1;
var filter2;
var filter3;
var filter4;
var secondaryImgObject;
var primaryImgObject;
var finalImageObject1;
var brightnessstatus;
var rearFlag;
var width;
var height;
var centerx;
var centery;
var colorstaus;
var filter5;
var filter6;
var filter7;
var filter8;
var filter9;

function takePictureAPI(){
  
  if(rearFlag == true){
    frmOverlay1.RearCamera.takePicture();
  }else{
    frmHome.Camera0b80625cf993243.takePicture();
  }
}

function setRearCamera(){
     rearFlag=true;
}


var filterDataObject=
    {
      filterName:undefined,
      InputImage:undefined,
      inputBrightness:undefined,
      inputSaturation:undefined,
      inputContrast:undefined,
      inputAngle:undefined
      
    }

function setCamerRawBytes(eventobject){
kony.application.showLoadingScreen("frmskin8","",constants.
LOADING_SCREEN_POSITION_ONLY_CENTER, false,true,{enableMenuKey:true, 
enableBackKey:true,progressIndicatorType:constants.PROGRESS_INDICATOR_TYPE_BIG});
  cameraRawBytes = eventobject.rawBytes;
  createImageObject();
  assignRawBytestoImage();
}

function openGallery()
{
 var querycontext = {mimetype:"image/*"};
 var returnStatus = kony.phone.openMediaGallery(onselectioncallback, querycontext);
}

function onselectioncallback(rawbytes)
{
    if (rawbytes == null)
    {
       alert("Please select an Image");
       return;
     }
kony.application.showLoadingScreen("frmskin8","",constants.
LOADING_SCREEN_POSITION_ONLY_CENTER, false,true,{enableMenuKey:true, 
enableBackKey:true,progressIndicatorType:constants.PROGRESS_INDICATOR_TYPE_BIG});
   cameraRawBytes = rawbytes;
   createImageObject();
   assignRawBytestoImage();
}

function createImageObject(){
   img = kony.image.createImage(cameraRawBytes);
   undoImageObject1=kony.image.createImage(cameraRawBytes);
}

function assignRawBytestoImage(){
  kony.print("passing image from ");
  frm2.Img2.width=img.getImageWidth()+"px";
  frm2.Img2.height=img.getImageHeight()+"px";
  frm2.Img2.rawBytes=img.getImageAsRawBytes();
  frm2.forceLayout();
  kony.application.dismissLoadingScreen();
  frm2.show();
}



function cropImage(){

var tempImag = kony.image.createImage(img.getImageAsRawBytes());
kony.application.showLoadingScreen("frmskin8","",constants.
LOADING_SCREEN_POSITION_ONLY_CENTER, false,true,{enableMenuKey:true, 
enableBackKey:true,progressIndicatorType:constants.PROGRESS_INDICATOR_TYPE_BIG});
  if(kony.os.deviceInfo().name == "android")
  {
    var tempfilter = kony.filter.createFilter();
     filterData = {
        "filterName": kony.filter.BRIGHTNESS,
        "inputImage": img,
      	"inputBrightness": 0.2
    };

    tempfilter.applyFilter(filterData);
    frmCropPreview.img1.width= img.getImageWidth()+"px";
    frmCropPreview.img1.height=img.getImageHeight()+"px";
    var imageObj = tempfilter.getOutputImage();
  	frmCropPreview.img1.rawBytes=imageObj.getImageAsRawBytes();
    frmCropPreview.forceLayout();
  }
  else{
  var tempfilter = kony.filter.createFilter();
      filterData= {
        "filterName": kony.filter.COLOR_CONTROLS,
        "inputImage": img,
        "inputBrightness": 0.1,
        "inputContrast":0.2
       
    };
    tempfilter.applyFilter(filterData);
    frmCropPreview.img1.width= img.getImageWidth()+"px";
    frmCropPreview.img1.height=img.getImageHeight()+"px";
    var imageObj = tempfilter.getOutputImage();
  	frmCropPreview.img1.rawBytes=imageObj.getImageAsRawBytes();
    frmCropPreview.forceLayout();
  }
  
var width= tempImag.getImageWidth();
var height= tempImag.getImageHeight();
kony.print("###############Image Width is##############"+width);
kony.print("###############Image Height is ############"+height);
centerx=width/2;
centery=height/2;
var xFivePercentage=(8*width)/100;
var yFivePercentage=(8*height)/100;
var x = centerx-xFivePercentage;
var y = centery-yFivePercentage;
var w = 2*xFivePercentage;
var h = 2*yFivePercentage;
kony.print("###############Image x is ############"+x+"y is"+y+"width is"+w+"height is"+h);
tempImag.cropToRect([x,y,w,h]);
frmCropPreview.Img2.width=w+"px";
frmCropPreview.Img2.height=h+"px";
var croprawybtes=tempImag.getImageAsRawBytes();
frmCropPreview.Img2.rawBytes=tempImag.getImageAsRawBytes();
finalImageObject=kony.image.createImage(croprawybtes);
frmCropPreview.headers[0].Label0a36b18a7ecee49.text="Crop";
frmCropPreview.forceLayout();
kony.application.dismissLoadingScreen();
frmCropPreview.show();
}

function onCropSlideFunc(){
var tempImag = kony.image.createImage(img.getImageAsRawBytes());
var width= tempImag.getImageWidth();
var height= tempImag.getImageHeight();
kony.print("###############Image Width is##############"+width);
kony.print("###############Image Height is ############"+height);
var percentagevalue= (frmCropPreview.Slider0a1d0fefb5b6d48.selectedValue)/3;
kony.print("##########"+percentagevalue+"StepValue");
var xPercentage=(percentagevalue*width)/100;
var yPercentage=(percentagevalue*height)/100;
var x = centerx-xPercentage;
var y = centery-yPercentage;
var w = xPercentage*2;
var h = yPercentage*2;
kony.print("###############Image x is ############"+x+"y is"+y+"width is"+w+"height is"+h);
tempImag.cropToRect([x,y,w,h]);
frmCropPreview.Img2.width=w+"Px";
frmCropPreview.Img2.height=h+"Px";
var rawbytesOfCropValue =tempImag.getImageAsRawBytes();
finalImageObject=kony.image.createImage(rawbytesOfCropValue);
frmCropPreview.Img2.image=tempImag;
frmCropPreview.forceLayout();
}

function applyCropImage(){
 
  img = finalImageObject;
  frm2.Img2.width=img.getImageWidth()+"px";
  frm2.Img2.height=img.getImageHeight()+"px";
  frm2.Img2.rawBytes=img.getImageAsRawBytes();
  frm2.forceLayout();
  frm2.show();
}

function applyAdjustImage(){
  img = finalImageObject1;
  frm2.Img2.width=img.getImageWidth()+"px";
  frm2.Img2.height=img.getImageHeight()+"px";
  frm2.Img2.rawBytes=img.getImageAsRawBytes();
  frm2.forceLayout();
  frm2.show();
}

function NavigateScaleForm(){
var tempImag = kony.image.createImage(img.getImageAsRawBytes());
tempImag.scale(0.2);
kony.application.showLoadingScreen("frmskin8","",constants.
LOADING_SCREEN_POSITION_ONLY_CENTER, false,true,{enableMenuKey:true, 
enableBackKey:true,progressIndicatorType:constants.PROGRESS_INDICATOR_TYPE_BIG});
frmScaleFactor.Img2.width=tempImag.getImageWidth()+"px";
frmScaleFactor.Img2.height=tempImag.getImageHeight()+"px";
finalImageObject=kony.image.createImage(tempImag.getImageAsRawBytes());
frmScaleFactor.headers[0].Label0a36b18a7ecee49.text="Scale";
frmScaleFactor.Img2.rawBytes=finalImageObject.getImageAsRawBytes();
frmScaleFactor.forceLayout();
kony.application.dismissLoadingScreen();
frmScaleFactor.show();
}

function ScalefactorFunc(){
var tempImag = kony.image.createImage(img.getImageAsRawBytes());
var percentagevalue= frmScaleFactor.Slider0a1d0fefb5b6d48.selectedValue;
var scalevalue = parseFloat(percentagevalue/10);
kony.print("scaleValue is"+scalevalue);
tempImag.scale(scalevalue);
frmScaleFactor.Img2.width=tempImag.getImageWidth()+"px";
frmScaleFactor.Img2.height=tempImag.getImageHeight()+"px";
frmScaleFactor.Img2.image=tempImag;
finalImageObject=kony.image.createImage(tempImag.getImageAsRawBytes());
frmScaleFactor.forceLayout();
}

function navigatetoBrightness(){
if(kony.os.deviceInfo().name == "android")
  {
  frmBrightness.Img2.width= img.getImageWidth()+"px";
  frmBrightness.Img2.height=img.getImageHeight()+"px";
  frmBrightness.Img2.rawBytes=img.getImageAsRawBytes();
  finalImageObject=kony.image.createImage(img.getImageAsRawBytes());
  frmBrightness.headers[0].Label0a36b18a7ecee49.text="BrightNess";
  frmBrightness.forceLayout();
  frmBrightness.show(); 
  }
  else{
 kony.application.showLoadingScreen("frmskin8","",constants.
LOADING_SCREEN_POSITION_ONLY_CENTER, false,true,{enableMenuKey:true, 
enableBackKey:true,progressIndicatorType:constants.PROGRESS_INDICATOR_TYPE_BIG});
  frmBrightnessIPhone.Img2.width= img.getImageWidth()+"px";
  frmBrightnessIPhone.Img2.height=img.getImageHeight()+"px";
  frmBrightnessIPhone.Img2.rawBytes=img.getImageAsRawBytes();
  finalImageObject=kony.image.createImage(img.getImageAsRawBytes());
  finalImageObject1=kony.image.createImage(img.getImageAsRawBytes());
  frmBrightnessIPhone.forceLayout();
 
kony.application.dismissLoadingScreen();
  frmBrightnessIPhone.show();
  brightnessstatus=true;
  }
  
}

function setBrightnessFunc(){
  var tempfilter = kony.filter.createFilter();
  filterDataObject.filterName=kony.filter.BRIGHTNESS;
  filterDataObject.InputImage=img;
  var percentagevalue= frmBrightness.Slider0a1d0fefb5b6d48.selectedValue;
  var scalevalue = parseFloat(percentagevalue/10);
  filterDataObject.inputBrightness=scalevalue;
  
    filterData = {
        "filterName": filterDataObject.filterName,
        "inputImage": filterDataObject.InputImage,
      	"inputBrightness": filterDataObject.inputBrightness
    };
   tempfilter.applyFilter(filterData);
   finalImageObject= tempfilter.getOutputImage();
   frmBrightness.Img2.width=finalImageObject.getImageWidth()+"px";
   frmBrightness.Img2.height=finalImageObject.getImageHeight()+"px";
   frmBrightness.forceLayout();
   frmBrightness.Img2.image=finalImageObject;
   
}

function setBrightnessFuncIphone(){
  var tempImag = kony.image.createImage(finalImageObject.getImageAsRawBytes());
  var tempfilter = kony.filter.createFilter();
  var percentagevalue= frmBrightnessIPhone.Slider0a1d0fefb5b6d48.selectedValue;
  var brightness = parseFloat(percentagevalue/10);
  var brightness2= brightness/2;
     filterData= {
        "filterName": kony.filter.COLOR_CONTROLS,
        "inputImage": tempImag,
        "inputBrightness": brightness2,
       
    };
    tempfilter.applyFilter(filterData);
   finalImageObject1= tempfilter.getOutputImage();
   frmBrightnessIPhone.Img2.width=finalImageObject1.getImageWidth()+"px";
   frmBrightnessIPhone.Img2.height=finalImageObject1.getImageHeight()+"px";
    frmBrightnessIPhone.Img2.rawBytes=finalImageObject1.getImageAsRawBytes();
    frmBrightnessIPhone.forceLayout();
}

function setContrastFuncIphone(){
  var tempImag = kony.image.createImage(finalImageObject.getImageAsRawBytes());
  var tempfilter = kony.filter.createFilter();
  var percentagevalue= frmBrightnessIPhone.Slider0a1d0fefb5b6d48.selectedValue;
  var brightness = parseFloat(percentagevalue/10);
     filterData= {
        "filterName": kony.filter.COLOR_CONTROLS,
        "inputImage": tempImag,
        "inputContrast": brightness
    };
    tempfilter.applyFilter(filterData);
   finalImageObject1= tempfilter.getOutputImage();
   frmBrightnessIPhone.Img2.width=finalImageObject1.getImageWidth()+"px";
   frmBrightnessIPhone.Img2.height=finalImageObject1.getImageHeight()+"px";
    frmBrightnessIPhone.Img2.rawBytes=finalImageObject1.getImageAsRawBytes();
    frmBrightnessIPhone.forceLayout();
}

function setSaturationFuncIphone(){
  var tempImag = kony.image.createImage(finalImageObject.getImageAsRawBytes());
  var tempfilter = kony.filter.createFilter();
  var percentagevalue= frmBrightnessIPhone.Slider0a1d0fefb5b6d48.selectedValue;
  var brightness = parseFloat(percentagevalue/10);
     filterData= {
        "filterName": kony.filter.COLOR_CONTROLS,
        "inputImage": tempImag,
        "inputSaturation": brightness
    };
    tempfilter.applyFilter(filterData);
   finalImageObject1= tempfilter.getOutputImage();
   frmBrightnessIPhone.Img2.width=finalImageObject1.getImageWidth()+"px";
   frmBrightnessIPhone.Img2.height=finalImageObject1.getImageHeight()+"px";
    frmBrightnessIPhone.Img2.rawBytes=finalImageObject1.getImageAsRawBytes();
    frmBrightnessIPhone.forceLayout();
}

function setHueFuncIphone(){
  var tempImag = kony.image.createImage(finalImageObject.getImageAsRawBytes());
  var tempfilter = kony.filter.createFilter();
  var percentagevalue= frmBrightnessIPhone.Slider0a1d0fefb5b6d48.selectedValue;
  var finalvalue=percentagevalue*10;
     filterData= {
        "filterName": kony.filter.HUE_ADJUST,
        "inputImage": tempImag,
        "inputAngle": finalvalue
    };
    tempfilter.applyFilter(filterData);
   finalImageObject1= tempfilter.getOutputImage();
   frmBrightnessIPhone.Img2.width=finalImageObject1.getImageWidth()+"px";
   frmBrightnessIPhone.Img2.height=finalImageObject1.getImageHeight()+"px";
    frmBrightnessIPhone.Img2.rawBytes=finalImageObject1.getImageAsRawBytes();
    frmBrightnessIPhone.forceLayout();
}

function setColorfunIphione(){
  
     if(colorstaus == "brightness"){
          setBrightnessFuncIphone();
     }else if(colorstaus == "contrast" ){
          setContrastFuncIphone();
     }else if(colorstaus =="simulation"){
          setSaturationFuncIphone();
     }else if(colorstaus =="hue"){
          setHueFuncIphone();
     }
 
}


function setBlurness(){
  var tempfilter = kony.filter.createFilter();
  var blurness = parseFloat(frmblurAndroid.Slider00e30a845fa1d40.selectedValue/2);
   filterData = {
        "filterName": kony.filter.GAUSSIAN_BLUR,
        "inputImage": img,
        "inputRadius": blurness
    };
   tempfilter.applyFilter(filterData);
   finalImageObject= tempfilter.getOutputImage();
   frmblurAndroid.Img2.width=finalImageObject.getImageWidth()+"px";
   frmblurAndroid.Img2.height=finalImageObject.getImageHeight()+"px";
   frmblurAndroid.forceLayout();
   frmblurAndroid.Img2.rawBytes=finalImageObject.getImageAsRawBytes();
}


function setBlurnessIphone(){
 var tempImag = kony.image.createImage(img.getImageAsRawBytes());
  var tempfilter = kony.filter.createFilter()
  var percentagevalue= frmBrightnessIPhone.Slider0a1d0fefb5b6d48.selectedValue;
    filterData= {
        "filterName":kony.filter.GAUSSIAN_BLUR,
        "inputImage": tempImag,
        "inputBrightness":percentagevalue
       
    };
   tempfilter.applyFilter(filterData);
   finalImageObject= tempfilter.getOutputImage();
   frmblurIphone.Img2.width=finalImageObject.getImageWidth()+"px";
   frmblurIphone.Img2.height=finalImageObject.getImageHeight()+"px";
   frmblurIphone.Img2.rawBytes=finalImageObject.getImageAsRawBytes();
}


function navigatetoBlurness(){
if(kony.os.deviceInfo().name == "android")
  {
  frmblurAndroid.Img2.width=img.getImageWidth()+"px";
  frmblurAndroid.Img2.height=img.getImageHeight()+"px";
  frmblurAndroid.Img2.image=img;
  finalImageObject=kony.image.createImage(img.getImageAsRawBytes());
  frmblurAndroid.headers[0].Label0a36b18a7ecee49.text="Blur";
  frmblurAndroid.forceLayout();
  frmblurAndroid.show(); 
  }
  else{
 kony.application.showLoadingScreen("frmskin8","",constants.
LOADING_SCREEN_POSITION_ONLY_CENTER, false,true,{enableMenuKey:true, 
enableBackKey:true,progressIndicatorType:constants.PROGRESS_INDICATOR_TYPE_BIG});
  frmblurIphone.Img2.width=img.getImageWidth()+"px";
  frmblurIphone.Img2.height=img.getImageHeight()+"px";
  frmblurIphone.Img2.rawBytes=img.getImageAsRawBytes();
  finalImageObject=kony.image.createImage(img.getImageAsRawBytes());
  finalImageObject1=kony.image.createImage(img.getImageAsRawBytes());
  frmblurIphone.headers[0].Label0a36b18a7ecee49.text="Blur";
  setBoxBlur();
  setDiscBlur();
  setMotionblur();
  frmblurIphone.forceLayout();
    
kony.application.dismissLoadingScreen();
  frmblurIphone.show(); 
  }
  
}

function setEmbossAndroid(){
  filter2 = kony.filter.createFilter();
   filterData = {
        "filterName": kony.filter.EMBOSS,
        "inputImage": img,
        "inputRadius": 2
    };
   filter2.applyFilter(filterData);
   var ImgTempObject = filter2.getOutputImage();
   frmeffectsAndroid.forceLayout();
   frmeffectsAndroid.img3.rawBytes=ImgTempObject.getImageAsRawBytes();
   ImgTempObject=undefined;
}

function setGreyScale(){
   filter1 = kony.filter.createFilter();
   filterData = {
        "filterName": kony.filter.GREYSCALE,
        "inputImage": img,
    };
   filter1.applyFilter(filterData);
   var ImgTempObject = filter1.getOutputImage();
   frmeffectsAndroid.forceLayout();
   frmeffectsAndroid.img1.rawBytes=ImgTempObject.getImageAsRawBytes();
   ImgTempObject=undefined;
}


function setColorInversionAndroid(){
   filter3 = kony.filter.createFilter();
   filterData = {
        "filterName": kony.filter.COLOR_INVERSION,
        "inputImage": img
    };
   filter3.applyFilter(filterData);
   var ImgTempObject = filter3.getOutputImage();
  frmeffectsAndroid.forceLayout();
   frmeffectsAndroid.img4.rawBytes=ImgTempObject.getImageAsRawBytes();
  ImgTempObject=undefined;
}

function setColorClampAndroid(){
  filter4 = kony.filter.createFilter();
   filterData = {
        "filterName": kony.filter.COLOR_CLAMP,
        "inputImage": img,
        "inputMinComponents": [0.2, 0.3, 0.4, 0.0],
        "inputMaxComponents": [1.0, 1.0, 1.0, 1.0]
    };
   filter4.applyFilter(filterData);
   var ImgTempObject = filter4.getOutputImage();
   frmeffectsAndroid.img5.rawBytes=ImgTempObject.getImageAsRawBytes();
   ImgTempObject=undefined;
}


function navigatetoEffects(){
  if(kony.os.deviceInfo().name == "android")
  {
  frmeffectsAndroid.Img2.width=img.getImageWidth()+"px";
  frmeffectsAndroid.Img2.height=img.getImageHeight()+"px";
  frmeffectsAndroid.Img2.image=img;
  finalImageObject=kony.image.createImage(img.getImageAsRawBytes());
  frmeffectsAndroid.headers[0].Label0a36b18a7ecee49.text="Effects";
  setGreyScale();
  setEmbossAndroid();
  setColorInversionAndroid();
  setColorClampAndroid();
  frmeffectsAndroid.forceLayout();
  frmeffectsAndroid.show(); 
  }
  else{
 kony.application.showLoadingScreen("frmskin8","",constants.
LOADING_SCREEN_POSITION_ONLY_CENTER, false,true,{enableMenuKey:true, 
enableBackKey:true,progressIndicatorType:constants.PROGRESS_INDICATOR_TYPE_BIG});
  frmeffectsIphone.Img2.width=img.getImageWidth()+"px";
  frmeffectsIphone.Img2.height=img.getImageHeight()+"px";
  frmeffectsIphone.Img2.rawBytes=img.getImageAsRawBytes();
  finalImageObject=kony.image.createImage(img.getImageAsRawBytes());
  frmeffectsIphone.headers[0].Label0a36b18a7ecee49.text="Effects";
  setVintageEffect();
  setBlackWhite();
  setCIComicEffect();
  setCIPhototransfer();
  setColorPolynomial();
  setColorEffectNoir();
  frmeffectsIphone.forceLayout();
  kony.application.dismissLoadingScreen();
  frmeffectsIphone.show(); 
  }
  
}
  
function applyFilterttoImage(filtername){
   finalImageObject= filtername.getOutputImage();
   frmeffectsAndroid.Img2.width=finalImageObject.getImageWidth()+"px";
   frmeffectsAndroid.Img2.height=finalImageObject.getImageHeight()+"px";
   frmeffectsAndroid.forceLayout();
   frmeffectsAndroid.Img2.rawBytes=finalImageObject.getImageAsRawBytes();
  
}

function applyFilterttoImageIphone(filtername){
   finalImageObject= filtername.getOutputImage();
   frmeffectsIphone.Img2.width=finalImageObject.getImageWidth()+"px";
   frmeffectsIphone.Img2.height=finalImageObject.getImageHeight()+"px";
   frmeffectsIphone.forceLayout();
   frmeffectsIphone.Img2.rawBytes=finalImageObject.getImageAsRawBytes();
  
}

function applyBulrImageIphone(filtername){
   finalImageObject= filtername.getOutputImage();
   frmblurIphone.Img2.width=finalImageObject.getImageWidth()+"px";
   frmblurIphone.Img2.height=finalImageObject.getImageHeight()+"px";
   frmblurIphone.forceLayout();
   frmblurIphone.Img2.rawBytes=finalImageObject.getImageAsRawBytes();
  
}


function navigatetoTwoImages(){
  if(kony.os.deviceInfo().name == "android")
  {
  primaryImgObject=kony.image.createImage("compositing.png");
  secondaryImgObject=kony.image.createImage("images5.png");
  frmtwoImagesAndroid.img1.image=primaryImgObject;
  frmtwoImagesAndroid.img2.image=secondaryImgObject;
  frmtwoImagesAndroid.forceLayout();
  frmtwoImagesAndroid.show(); 
  }
  else{
  primaryImgObject=kony.image.createImage("compositing.png");
  secondaryImgObject=kony.image.createImage("images5.png");
  frmtwoImagesIphone.img1.rawBytes=primaryImgObject.getImageAsRawBytes();
  frmtwoImagesIphone.img2.rawBytes=secondaryImgObject.getImageAsRawBytes();
  frmtwoImagesIphone.forceLayout();
  frmtwoImagesIphone.show(); 
  }
  
}

function setCompositionEditor(filtername){
   filter = kony.filter.createFilter();
    filterData = {
        "filterName": filtername,
        "inputImage": primaryImgObject,
        "inputBackgroundImage": secondaryImgObject
    };
    filter.applyFilter(filterData);
   finalImageObject= filter.getOutputImage();
   frmtwoImagesAndroid.Img4.isVisible=true;
   frmtwoImagesAndroid.Img4.image=finalImageObject;
   frmtwoImagesAndroid.forceLayout();
}

function setCompositionEditorIphone(filtername){
 var filtername1;
 var selectionParam =frmtwoImagesIphone.RadioButtonGroup09b7e6319b35d43.selectedKeyValue[0];
 var index=selectionParam.toString();
  if(index==null){
    alert('Please valid filter');
  }
  switch(index){
     case "key1":
	 filtername1=kony.filter.SOURCE_OVER_COMPOSITING;
      break;
    case "key2":
      filtername1=kony.filter.ADDITION_COMPOSITING;
      break;
    case "key3":
      filtername1=kony.filter.COLOR_BLEND_MODE;
      break;
	case "key4":
	  filtername1=kony.filter.COLOR_BURN_BLEND_MODE;
      break;
    default:
      alert('Please valid filter');
      break; 
      
  }
 
  
   filter = kony.filter.createFilter();
    filterData = {
        "filterName": filtername1,
        "inputImage": primaryImgObject,
        "inputBackgroundImage": secondaryImgObject
    };
    filter.applyFilter(filterData);
   finalImageObject= filter.getOutputImage();
   frmtwoImagesIphone.Img4.isVisible=true;
   frmtwoImagesIphone.Img4.image=finalImageObject;
   frmtwoImagesIphone.forceLayout();
}


function setVintageEffect(){
  filter2 = kony.filter.createFilter();
   filterData = {
        "filterName": kony.filter.PHOTO_EFFECT_CHROME,
        "inputImage": img,
    };
   filter2.applyFilter(filterData);
   var ImgTempObject = filter2.getOutputImage();
   frmeffectsIphone.forceLayout();
   frmeffectsIphone.img3.rawBytes=ImgTempObject.getImageAsRawBytes();
   ImgTempObject=undefined;
}

function setBlackWhite(){
   filter1 = kony.filter.createFilter();
   filterData = {
        "filterName": kony.filter.PHOTO_EFFECT_TONAL ,
        "inputImage": img,
    };
   filter1.applyFilter(filterData);
   var ImgTempObject = filter1.getOutputImage();
   frmeffectsIphone.forceLayout();
   frmeffectsIphone.img1.rawBytes=ImgTempObject.getImageAsRawBytes();
   ImgTempObject=undefined;
  
}


function setCIComicEffect(){
   filter3 = kony.filter.createFilter();
   filterData = {
        "filterName": kony.filter.COMIC_EFFECT,
        "inputImage": img
    };
   filter3.applyFilter(filterData);
   var ImgTempObject = filter3.getOutputImage();
  frmeffectsIphone.forceLayout();
   frmeffectsIphone.img4.rawBytes=ImgTempObject.getImageAsRawBytes();
   ImgTempObject=undefined;
}

function setCIPhototransfer(){
  filter4 = kony.filter.createFilter();
   filterData = {
        "filterName": kony.filter.PHOTO_EFFECT_TRANSFER ,
        "inputImage": img,
    };
   filter4.applyFilter(filterData);
   var ImgTempObject = filter4.getOutputImage();
   frmeffectsIphone.img5.rawBytes=ImgTempObject.getImageAsRawBytes();
   ImgTempObject=undefined;
}

function setColorPolynomial(){
  
  filter5 = kony.filter.createFilter();
       filterData = {
        "filterName": kony.filter.COLOR_POLYNOMIAL,
        "inputImage": img,
        "inputRedCoefficients": [0.5, 0.0, 0.0, 0.0],
        "inputGreenCoefficients": [0.0, 0.5, 1.0, 0.0],
        "inputBlueCoefficients": [0.0, 0.0, 1.0, 0.0],
        "inputAlphaCoefficients": [0.0, 0.0, 0.0, 1.0]
    };
   
   filter5.applyFilter(filterData);
   var ImgTempObject = filter5.getOutputImage();
   frmeffectsIphone.img6.rawBytes=ImgTempObject.getImageAsRawBytes();
   ImgTempObject=undefined;
}

function setColorEffectNoir(){
  filter6= kony.filter.createFilter();
   filterData = {
        "filterName": kony.filter.PHOTO_EFFECT_NOIR,
        "inputImage": img
    };
   filter6.applyFilter(filterData);
   var ImgTempObject = filter6.getOutputImage();
  
   frmeffectsIphone.img7.rawBytes=ImgTempObject.getImageAsRawBytes();
   ImgTempObject=undefined;
}

function setBoxBlur(){
  filter7= kony.filter.createFilter();
  filterData = {
        "filterName": kony.filter.BOX_BLUR,
        "inputImage": img,
        "inputRadius": 10
    };
   filter7.applyFilter(filterData);
   var ImgTempObject = filter7.getOutputImage();
   frmblurIphone.Img1.rawBytes=ImgTempObject.getImageAsRawBytes();
   ImgTempObject=undefined;
}

function setDiscBlur(){
  filter8= kony.filter.createFilter();
   filterData = {
        "filterName": kony.filter.DISC_BLUR,
        "inputImage": img,
        "inputRadius": 20
    };
   filter8.applyFilter(filterData);
  var ImgTempObject = filter8.getOutputImage();
   frmblurIphone.Img3.rawBytes=ImgTempObject.getImageAsRawBytes();
   ImgTempObject=undefined;
}

function setMotionblur(){
  filter9 = kony.filter.createFilter();
    var radian = 45.0 * (3.14 / 180.0);
    filterData = {
        "filterName": kony.filter.MOTION_BLUR,
        "inputImage": img,
        "inputRadius": 10,
        "inputAngle": radian
    };
    filter9.applyFilter(filterData);
   var ImgTempObject = filter9.getOutputImage();
  frmblurIphone.img4.rawBytes=ImgTempObject.getImageAsRawBytes();
  ImgTempObject=undefined;
}



