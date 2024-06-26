

let sourceUrl = document.referrer;

// https://l.instagram.com/

let twitterUrl = "https://onlyfans.com/mizzivip/c3";

let igUrl = "https://onlyfans.com/mizzivip/c1";

let ofLink = document.getElementById('of');

const changeLink = (el, newUrl) => {
    el.href=newUrl;
}

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

if (sourceUrl == "https://l.instagram.com/") {
    console.log('Source is from instagram: ', sourceUrl );
    changeLink(ofLink, igUrl);
} else if (sourceUrl == "") {
    console.log('referrer blank, checking URL parameters');
    checkRef(ref);
}

