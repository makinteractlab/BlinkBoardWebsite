$(function () {

    const os = getOS();

    // Windows or Mac
    if (os == 'Mac' || os == 'Windows') {
        if (os == 'Mac') {
            $('#download').text('Download for Mac');
            $('#otherOs').text('Windows');

            getLatestReleaseLink('Mac').then(result => {
                if (result) $('#download').click(() => location.href = result)
            });
            getLatestReleaseLink('Windows').then(result => {
                if (result) $('#otherOs').attr('href', result);
            });

        } else { // Windows
            $('#download').text('Download for Windows');
            $('#otherOs').text('Mac');

            getLatestReleaseLink('Windows').then(result => {
                if (result) $('#download').click(() => location.href = result)
            });
            getLatestReleaseLink('Mac').then(result => {
                if (result) $('#otherOs').attr('href', result);
            });
        }

    } else {
        $('#download').click(function () {
            location.href = "https://github.com/makinteractlab/BlinkBoardApp/releases/latest";
        });
        $('#otherOs').parent().hide();
    }
});


async function getLatestReleaseLink(os) {
    const result = await octokit.request('GET /repos/{owner}/{repo}/releases/latest', {
        owner: 'makinteractlab',
        repo: 'BlinkBoardApp'
    });
    return result.data.assets.filter(asset => asset.name == `BlinkBoardApp-${os}.zip`)[0].browser_download_url;
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