document.getElementById('newversion').onclick = duplicate;


var i = 0;
var original = document.getElementById('duplicater');

function duplicate() {
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "dupliceter" + ++i; // there can only be one element with an ID
    // original.parentNode.appendChild(clone);
    original.parentNode.insertBefore(clone, original.previousSibling);
}
