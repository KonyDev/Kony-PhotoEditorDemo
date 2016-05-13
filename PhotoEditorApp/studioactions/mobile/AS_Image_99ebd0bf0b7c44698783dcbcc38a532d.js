function AS_Image_99ebd0bf0b7c44698783dcbcc38a532d(eventobject, x, y) {
    if (frmHome.flextemp1.isVisible == false) {
        frmHome.flextemp1.isVisible = true;
    } else {
        frmHome.flextemp1.isVisible = false;
    }
    frmHome.forceLayout();
}