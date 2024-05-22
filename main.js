

let sourceUrl = document.referrer;

// https://l.instagram.com/

let twitterUrl = "https://onlyfans.com/mizzimie/c4";

let igUrl = "https://onlyfans.com/mizzimie/c3";

let tiktokUrl = "https://onlyfans.com/mizzimie/c2";

let ofLink = document.getElementById('of');

console.log(ofLink);
const changeLink = (el, newUrl) => {
    el.href=newUrl;
}

let params = new URLSearchParams(document.location.search);
let ref = params.get('ref');

if (sourceUrl == "https://l.instagram.com/") {
    console.log('Source is from instagram: ', sourceUrl );
    changeLink(ofLink, igUrl);
} else if (sourceUrl == "") {
    console.log('referrer blank, checking URL parameters');
}

if (ref == "twitter" ) {
    console.log('source is from twitter');
    changeLink(ofLink, twitterUrl)
}


