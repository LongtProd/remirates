async function bootstrapStyle(){
    return new Promise((resolve, reject) => {
    var link = document.createElement('link');
    var surl = 'css/bootstrap.css';
    link.href = surl;
    link.rel="stylesheet"
    resolve(document.head.appendChild(link))
    });
}
async function mainStyle(){
    await bootstrapStyle()
    return new Promise((resolve, reject) => {
    var link = document.createElement('link');
    var surl = 'css/main.css';
    link.href = surl;
    link.rel="stylesheet"
    resolve(document.head.appendChild(link))
    });
}
async function responsiveStyle(){
    await mainStyle()
    return new Promise((resolve, reject) => {
    var link = document.createElement('link');
    var surl = 'css/responsive.css';
    link.href = surl;
    link.rel="stylesheet"
    resolve(document.head.appendChild(link))
    });
}
async function akakScript(){
    await responsiveStyle()
    return new Promise((resolve, reject) => {
    var script = document.createElement('script');
    var surl = 'akak.js';
    script.src = surl;
    resolve(document.body.appendChild(script))
    });
}
akakScript();