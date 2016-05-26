function AS_Image_e1c11d378b8749f889d0412eb5ada54f(eventobject, x, y) {
    if (frm2.Flexscroll2.isVisible == false) {
        frm2.Flexscroll2.isVisible = true;
    } else {
        frm2.Flexscroll2.isVisible = false;
    }
    frm2.Flexscroll2.forceLayout();
}