function headPage() {
    return new Promise((resolve, reject) => {
    var header = document.getElementById("gridhead");
    var xhr = new XMLHttpRequest();
            var url = '_head.html';
            xhr.open('GET', url, true);
            xhr.onload = function() {
            if (xhr.status === 200) {
                // Set the innerHTML property of the div element to display the fetched content
                //console.log(xhr.response)
                resolve( header.innerHTML = xhr.response)
            }
            else {
               reject(console.log('Request failed.  Returned status of ' + xhr.status))
            }
            };
            xhr.send();
        });
}
async function footPage() {
    await headPage()
    return new Promise((resolve, reject) => {
    var footer = document.getElementById("gridfoot");
    var xhr = new XMLHttpRequest();
            var url = '_foot.html';
            xhr.open('GET', url, true);
            xhr.onload = function() {
            if (xhr.status === 200) {
                // Set the innerHTML property of the div element to display the fetched content
                //console.log(xhr.response)
                resolve(footer.innerHTML = xhr.response)
            }
            else {
                reject(console.log('Request failed.  Returned status of ' + xhr.status))
            }
            };
            xhr.send();
        });
}
async function onintateBody() {
    await footPage()
    return new Promise((resolve, reject) => {
    resolve(document.getElementById("pageWrapper").style.display = '')
    var d = new Date(); 
    document.getElementById("gridcopyright").innerHTML = `<p>&copy; ${d.getFullYear()} <b class="text-white"> RELS </b>  Royal Emirates Legal Services </b></a></p>`
    });
}
async function jqueryScript(){
    await onintateBody()
    return new Promise((resolve, reject) => {
        var script = document.createElement('script');
        var surl = 'js/jquery.js';
        script.src = surl;
        resolve(document.body.appendChild(script))
    });
}
async function popperScript(){
    await jqueryScript()
    return new Promise((resolve, reject) => {
        var script = document.createElement('script');
        var surl = 'js/popper.min.js';
        script.src = surl;
        resolve(document.body.appendChild(script))
    });
}
async function bootstrapScript(){
    await popperScript()
    return new Promise((resolve, reject) => {
        var script = document.createElement('script');
        var surl = 'js/bootstrap.min.js';
        script.src = surl;
        resolve(document.body.appendChild(script))
    });
}
async function mCustomScrollbarScript(){
    await bootstrapScript()
    return new Promise((resolve, reject) => {
        var script = document.createElement('script');
        var surl = 'js/jquery.mCustomScrollbar.concat.min.js';
        script.src = surl;
        resolve(document.body.appendChild(script))
    });
}
async function fancyboxScript(){
    await mCustomScrollbarScript()
    return new Promise((resolve, reject) => {
        var script = document.createElement('script');
        var surl = 'js/jquery.fancybox.js';
        script.src = surl;
        resolve(document.body.appendChild(script))
    });
}
async function appearScript(){
    await fancyboxScript()
    return new Promise((resolve, reject) => {
        var script = document.createElement('script');
        var surl = 'js/appear.js';
        script.src = surl;
        resolve(document.body.appendChild(script))
    });
}
async function wowScript(){
    await appearScript()
    return new Promise((resolve, reject) => {
        var script = document.createElement('script');
        var surl = 'js/wow.js';
        script.src = surl;
        resolve(document.body.appendChild(script))
    });
}
async function parallaxScript(){
    await wowScript()
    return new Promise((resolve, reject) => {
        var script = document.createElement('script');
        var surl = 'js/parallax.min.js';
        script.src = surl;
        resolve(document.body.appendChild(script))
    });
}
async function tiltScript(){
    await parallaxScript()
    return new Promise((resolve, reject) => {
        var script = document.createElement('script');
        var surl = 'js/tilt.jquery.min.js';
        script.src = surl;
        resolve(document.body.appendChild(script))
    });
}
async function parollerScript(){
    await tiltScript()
    return new Promise((resolve, reject) => {
        var script = document.createElement('script');
        var surl = 'js/jquery.paroller.min.js';
        script.src = surl;
        resolve(document.body.appendChild(script))
    });
}
async function swiperScript(){
    await parollerScript()
    return new Promise((resolve, reject) => {
        var script = document.createElement('script');
        var surl = 'js/swiper.min.js';
        script.src = surl;
        resolve(document.body.appendChild(script))
    });
}
async function validateScript(){
    await swiperScript()
    return new Promise((resolve, reject) => {
        var script = document.createElement('script');
        var surl = 'js/validate.js';
        script.src = surl;
        resolve(document.body.appendChild(script))
    });
}
async function jqueryuiScript(){
    await validateScript()
    return new Promise((resolve, reject) => {
        var script = document.createElement('script');
        var surl = 'js/jquery-ui.js';
        script.src = surl;
        resolve(document.body.appendChild(script))
    });
}
async function scriptUIScript(){
    await jqueryuiScript()
    return new Promise((resolve, reject) => {
        var script = document.createElement('script');
        var surl = 'js/script.js';
        script.src = surl;
        resolve(document.body.appendChild(script))
    });
}

window.onload = function () {
scriptUIScript();
}
