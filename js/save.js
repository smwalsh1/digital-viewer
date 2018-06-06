function mySave() {
    var x = document.getElementsByClassName("editContent");
    var i
    for (i = 0; i < x.length; i++)
    if (x[i].contentEditable == "true") {
        x[i].contentEditable = "false";
    } else {
        x[i].contentEditable = "true";
    }


    document.getElementById("dynamicButtons").remove();

    var pageheader = '<html lang="en"><head><meta charset="utf-8"><title>CVS Pharmacy Creative Presentation</title><link rel="stylesheet" href="css/styles.css"></head><body onload="myFunction()">';
    var pagefooter = '<footer><p>© <script src="js/copyright.js"><\/script> CVS Health and/or one of its affiliates: Confidential & Proprietary</p></footer>'

    alert('<!DOCTYPE html>\n' + pageheader + editable.innerHTML + pagefooter);



}



/*
download(document.documentElement.outerHTML, "newFile.html", "text/html");
// function save(){ document.execCommand("SaveAs")}

*/
