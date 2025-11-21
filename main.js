

let sourceUrl = document.referrer;

// https://l.instagram.com/


let twitterUrl = "aHR0cHM6Ly9vbmx5ZmFucy5jb20vbWl6eml2aXAvYzM="; //c3

let igUrl = "aHR0cHM6Ly9vbmx5ZmFucy5jb20vbWl6eml2aXAvYzE="; //c1

let baseUrl = 'aHR0cHM6Ly9vbmx5ZmFucy5jb20vbWl6eml2aXAvYzQ=' //c4

let link = document.getElementById('of');


let params = new URLSearchParams(document.location.search);
let ref = params.get('ref');

const checkRef = (urlRef) => {
    
    if (urlRef == "twitter" ) {
        console.log('source is from twitter');
        changeLink(ofLink, twitterUrl)
    } else if (urlRef == "instagram") {
        console.log('source is from instagram');
        changeLink(ofLink, igUrl);
    } else if (urlRef == "tiktok") {
        console.log('source is from TikTok');
        changeLink(ofLink, tiktokUrl)
    } else {
        console.log('no source found');
    }
}

link.addEventListener('click', (e) => {

if (sourceUrl == "https://l.instagram.com/") {
    console.log('Source is from instagram: ', sourceUrl );
    window.location.href = atob(igUrl);
} else if (sourceUrl == "") {
    console.log('referrer blank, checking URL parameters');
    window.location.href = atob(baseUrl);
} else {
    console.log('error: no source found');
    window.location.href = atob(baseUrl);
}

});