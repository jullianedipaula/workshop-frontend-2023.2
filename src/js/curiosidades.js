
let count = 1;
document.getElementById('radio1').Checked = true;

setInterval(function() {
    nextImage();
}, 3500);

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }
    
    document.getElementById('radio' + count).checked = true;
}