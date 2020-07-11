/*this is bad!*/
window.hideQuote = true;
window.cmtSP = true;

import { commentLoad, comment } from './libs/comment';
import hljs from 'highlight.js';
import 'highlight.js/styles/tomorrow-night-bright.css';
window.hljs = hljs;

commentLoad({
    route: routes.comment_ajax + 'mine/' + userId 
}, function(res) {
    let hash = window.location.hash;
    setTimeout(function() {
        if(hash)
            window.scrollTo(0, document.querySelector(hash).offsetTop - 80);                
    }, 50);
});
