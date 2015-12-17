function AS_Image_8eb0e2afcb544a94b9a4cca5a3626a9c(eventobject, x, y) {
    if (frm2.Flexscroll2.isVisible == false) {
        frm2.Flexscroll2.isVisible = true;
    } else {
        frm2.Flexscroll2.isVisible = false;
    }
    frm2.Flexscroll2.forceLayout();
}