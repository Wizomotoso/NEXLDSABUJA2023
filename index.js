loader();

// document.querySelector('.btn').onclick = loader;

/*====================================
*     LOADER
======================================*/
function loader(_success) {
    var obj = document.querySelector('.preloader'),
    inner = document.querySelector('.preloader_inner');
    var w = 0,
        t = setInterval(function() {
            w = w + 1;
            inner.textContent = "LOADING "+ w+'%';
            if (w === 100){
                clearInterval(t);
                w = 0;
                inner.textContent="LAB PRECAUTIONS ARE ALL SET";
                if (_success){
                    return _success();
                }
            }
        }, 80);
}
