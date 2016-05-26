function AS_Image_a2a3983a848e4a1bb548da05457b86c1(eventobject, x, y) {
    if (frmHome.flextemp1.isVisible == false) {
        frmHome.flextemp1.isVisible = true;
    } else {
        frmHome.flextemp1.isVisible = false;
    }
    frmHome.forceLayout();
}