function AS_Image_f9f285f2e6f641e593b3696b37bd1ffc(eventobject, x, y) {
    if (frm2.Flexscroll2.isVisible == false) {
        frm2.Flexscroll2.isVisible = true;
    } else {
        frm2.Flexscroll2.isVisible = false;
    }
    frm2.Flexscroll2.forceLayout();
}