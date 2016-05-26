function AS_Image_76885c4bb7564e9e9b20be86bad22d28(eventobject, x, y) {
    if (frm2.Flexscroll2.isVisible == false) {
        frm2.Flexscroll2.isVisible = true;
    } else {
        frm2.Flexscroll2.isVisible = false;
    }
    frm2.Flexscroll2.forceLayout();
}