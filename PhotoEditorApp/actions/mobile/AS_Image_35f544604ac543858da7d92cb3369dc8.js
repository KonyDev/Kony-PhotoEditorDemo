function AS_Image_35f544604ac543858da7d92cb3369dc8(eventobject, x, y) {
    if (frmHome.flextemp1.isVisible == false) {
        frmHome.flextemp1.isVisible = true;
    } else {
        frmHome.flextemp1.isVisible = false;
    }
    frmHome.forceLayout();
}