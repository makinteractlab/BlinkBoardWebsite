$(function () {
    
    

    const os = getOS();
    console.log(os)
    if (os == 'Mac'){
        $('#download').text('Download for Mac');
        $('#otherOs').text('Windows');
        $('#otherOs').attr('href', 'github.com/makinteractlab/BlinkBoardApp/releases/latest');

    }else if (os == 'Windows'){
        $('#download').text('Download for Windows');
        $('#otherOs').text('Mac');
        $('#otherOs').attr('href', 'github.com/makinteractlab/BlinkBoardApp/releases/latest');

    }else{
        $('#download').text('Download');
        $('#download').click(function(){
            location.href = "https://github.com/makinteractlab/BlinkBoardApp/releases/latest"
        });
        $('#otherOs').parent().hide();
    }
});


function getLatestMac()
{
    const octokit = new Octokit()
}


function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    }

    return os;
}