import str2dom from '../utils/str2dom';
import find from '../utils/find';
import adds from '../utils/adds';

/**
 * Comment template
 * @param  {Object} data Comment data
 * @return {String}      Interpolated template
 */
let commentTemplate = function(data) {
    return `
        <div id="discuss-${data.id}" class="group bg-white rounded border border-gray-200 mb-6 p-6 cmt-${data.id}">
            ${ window.cmtSP ? `<div class="text-sm mb-4 text-gray-600">Dalam <a href="${routes.post_single.replace(/username/g, data.post.username).replace(/slug/g, data.post.slug)}#discuss-${data.id}" class="italic underline">${data.post.title}</a></div>` : ''}
            <div class="flex">
                <img class="rounded w-10 h-10 flex-shrink-0" src="${data.avatar}">
                <div class="ml-5 w-full">
                    <p class="mx-1 text-blue-500 text-sm font-semibold float-right cmt-time">${data.time}</p>
                    <h4 class="mb-1 font-bold"><a class="text-indigo-600 cmt-name" href="${routes.base_url +'/'+ data.username}">${data.name}</a> <span class="text-gray-600 font-normal">(@${data.username})</span></h4>
                    <div class= text-gray-700">
                        <div class="quoted-cmt-wrapper my-2"></div>
                        <div class="cmt-content mb-2 text-base break-all markdowned">${data.content}</div>
                    </div>
                    <div class="cmt-actions opacity-25 group-hover:opacity-100"></div>
                </div>
            </div>
        </div>
    `;
}

/**
 * Comment action buttons
 * @type {Object}
 */
let commentActions = {
    /**
     * Delete button
     * @type {Object}
     */
    delete: {
        markup: function() {
            return `
                <a class="mt-5 text-red-600 cursor-pointer text-sm mr-3">Delete</a>
            `;
        },
        isMine: true,
        isAdmin: true,
        listener: {
            on: 'click',
            handler: function(obj, event) {
                let c = confirm('are you sure?');

                if(c)
                    commentRemove(obj.id, event)
            }
        }
    },
    /**
     * Permalink button
     * @return {[type]} [description]
     */
    permalink: function() {
        return `
            <a class="text-sm mr-3" href="${window.location.href}#discuss-${this.id}">Permalink</a>
        `;
    },
    /**
     * Quote button
     * @type {Object}
     */
    quote: {
        markup: function() {
            return `
                <a class="mt-5 hover:text-indigo-600 cursor-pointer text-sm mr-3">Quote</a>
            `;
        },
        auth: true,
        listener: {
            on: 'click',
            handler: function(obj, event) {
                quote(obj.id, event);
            }
        }
    },
}

/**
 * Quote comment template
 * @param  {Object} data Quote data
 * @return {Object}      Interpolated template
 */
let quoteTemplate = function(data) {
    return `
        <div class="quoted-cmt cursor-pointer hover:bg-teal-200 bg-teal-100 border border-teal-200 mb-2 py-2 px-4 rounded">
            <div class="text-sm text-teal-600">Oleh <span class="font-bold">${data.name}</span></div>
            <div class="overflow-hidden h-22 break-all markdowned" style="max-height: 40px;">${data.content}</div>
        </div>
    `;
}

/**
 * Quote template action buttons
 * @type {Object}
 */
let quoteTemplateActions = {
    /**
     * Cancel button
     * @type {Object}
     */
    cancel: {
        markup: function() {
            return `
                <a class="quote-remove cursor-pointer text-red-600 text-sm mt-2 inline-block">Batalkan</a>
            `;
        },
        listener: {
            on: 'click',
            handler: function(event) {
                quoteRemove(event);
            }
        }
    }
}

/**
 * Comment wrapper
 * @type {[type]}
 */
let comments = $('#comments');

/**
 * Add a comment method
 * @param  {Object} obj     Comment data
 * @param  {String} classes Classes
 * @param  {String} method  Appending method
 * @param  {Node}   target  Temporary comment node
 * @return {Node}           Appended element
 */
function commentAdd(obj, classes, method, target)
{
    if(!method) method = 'append';

    let item = commentTemplate(obj);

    item = str2dom(item);

    if(window.hideQuote)
        delete commentActions.quote;

    Object.keys(commentActions).forEach(function(actionKey) {
        let action = commentActions[actionKey];

        if(((('auth' in action && action.auth) == auth) && !('isMine' in action)) || (('isMine' in action && action.isMine) == obj.is_mine) || (!('auth' in action) && !('isMine' in action)) || ('isAdmin' in action && isCurrentUserAdmin)) {
            let act = str2dom(
                typeof action == 'object' ? action.markup.call(obj) : action.call(obj)
            );

            if(action.listener)
                act.addEventListener(action.listener.on, action.listener.handler.bind(this, obj));

            find(item, '.cmt-actions').prepend(act);
        }
    });

    // if has reply
    if("reply" in obj && obj.reply) {
        let quote_template = str2dom(
            quoteTemplate({name: obj.reply.user.name, ...obj.reply})
        );

        quote_template.addEventListener('click', function() {
            commentGo(obj.reply.id);
        });

        find(item, '.quoted-cmt-wrapper').appendChild(quote_template);

        // item = findRemove(str2dom(item), '.quote-remove');
    }else{
        find(item, '.quoted-cmt-wrapper').remove();
    }

    if(typeof classes == 'function')
        classes.call(this, item);

    if(typeof classes == 'string') {
        classes = classes.split(' ');
        classes.forEach((cl) => {
            item.classList.add(cl);
        });
    }

    if($('.no-comment'))
        $('.no-comment').remove();

    if(window.hljs) {
        item.querySelectorAll('pre code').forEach((block) => {
          hljs.highlightBlock(block);
        });
    }

    if(method == 'after')
        target.parentNode.insertBefore(item, target);
    else
        comments[method](item);

    const content = find(item, '.cmt-content');

    if(content.clientHeight > 200) {
        content.classList.add('comment-truncate');
        content.parentNode.insertAdjacentHTML('afterend', '<p class="text-center text-indigo-600 read-more-wrapper"><a class="read-more cursor-pointer">Tampilkan Semuanya</a></p>');

        const readMoreWrapper = content.parentNode.parentNode.querySelector('.read-more-wrapper');
        readMoreWrapper.addEventListener('click', function() {
            content.classList.remove('comment-truncate');
            readMoreWrapper.remove();
        });
    }

    return item;
}

/**
 * Quote comment method
 * @param  {Integer}    id  Comment ID
 * @param  {Object}     e   Event
 */
function quote(id, e)
{
    const the_form = $('.comment-form'),
          quoted = $('#discuss-'+id);

    let form_pos = the_form.offsetTop - 150;

    window.scrollTo(0, form_pos);

    $('.reply-id').value = id;

    let data = {
        id,
        name: find(quoted, '.cmt-name').innerText,
        content: find(quoted, '.cmt-content').innerHTML
    }

    let the_template = str2dom(
        quoteTemplate(data)
    );

    Object.keys(quoteTemplateActions).forEach(function(action) {
        action = quoteTemplateActions[action];

        let act = str2dom(
            typeof action == 'object' ? action.markup.call(data) : action.call(data)
        );

        if(action.listener)
            act.addEventListener(action.listener.on, action.listener.handler.bind(this, data));

        the_template.appendChild(act);
    });

    the_template.addEventListener('click', function(e) {
        if(e.target.className.indexOf('quote-remove') == -1)
            commentGo(id);
    });

    // remove first
    if(find(the_form, '.quoted-cmt'))
        find(the_form, '.quoted-cmt').remove();

    find(the_form, 'textarea').parentNode.prepend(the_template);
    find(the_form, 'textarea').focus();
}

/**
 * Remove quote method
 * @param  {Object} e Event
 */
function quoteRemove(e)
{
    if($('.quoted-cmt'))
        $('.quoted-cmt').remove();

    $('.reply-id').value = '';
}

/**
 * Remove a comment method
 * @param  {Integer}    id    Comment ID
 * @param  {Object}     event Event
 */
function commentRemove(id, event)
{
    const cmt = $('.cmt-' + id);
    adds(cmt.classList, 'opacity-50 pointer-events-none');

    fetch(routes.comment_delete, {
        headers: {
            'X-CSRF-TOKEN': token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            id
        }),
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(function(res) {
        if(res.status)
            cmt.remove();
        else
            cmt.classList.removes('opacity-50 pointer-events-none');

        $('.single-post .post-comment-count').innerText = parseInt($('.single-post .post-comment-count').innerText) - 1;
    });
}

/**
 * Add a load more button
 */
function addLoadMore(opts)
{
    let tpl = str2dom('\
    <div class="comment-load px-6 py-2 text-center cursor-pointer bg-gray-200 hover:bg-gray-300">\
        Load More\
    </div>');

    tpl.addEventListener('click', function() {
        adds($('.comment-load').classList, 'pointer-events-none opacity-50');
        commentLoad(opts, function() {
            if($('.comment-load'))
                $('.comment-load').classList.removes('pointer-events-none opacity-50');
        });
    });

    comments.append(tpl);
}

/**
 * Remove a load more button
 */
function removeLoadMore()
{
    if($('.comment-load'))
        $('.comment-load').remove();
}

/**
 * Generate random string
 * @return {String}         Generated random string
 */
var id = function () {
  return Math.random().toString(36).substr(2, 9);
};

/**
 * Go to a comment method
 * @param  {Integer} id     Comment ID target
 */
function commentGo(id)
{
    if(typeof id == 'number')
        id = '#discuss-' + id;

    function please_go() {
        const el = $(id);
        if(el) {
            window.scrollTo(0, el.offsetTop - 80);
            el.classList.add('bg-yellow-200');
            setTimeout(function() {
                el.classList.remove('bg-yellow-200');
            }, 2000);
        }
    }

    if(!$(id) && $('.comment-load')) {
        return commentLoad(function() {
            please_go();
        });
    }

    please_go();
}

/**
 * Post a new comment
 * @param  {String} content Comment message
 */
export function comment(content)
{

    if(content.trim().length < 1)
        return;

    let temp_id = id();
    const reply_id = $('.reply-id').value;

    let item = commentAdd({
        name: user.name,
        username: user.username,
        avatar: user.the_avatar_sm,
        id: temp_id,
        is_mine: false,
        content: '<i>Mengirim ...</i>',
        time: 'Baru Saja',
    }, 'opacity-50 pointer-events-none', 'prepend');

    fetch(routes.comment_store, {
        method: 'POST',
        headers: {
            'X-CSRF-TOKEN': token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            reply_id,
            content,
            post_id
        })
    })
    .then(res => res.json())
    .then(function(res) {
        commentAdd({
            name: res.data.user.name,
            username: res.data.user.username,
            avatar: res.data.user.the_avatar_sm,
            id: res.data.id,
            is_mine: res.data.is_mine,
            time: res.data.time,
            content: res.data.markdown,
            reply: res.data.reply
        }, false, 'after', $('.cmt-' + temp_id));

        $('.single-post .post-comment-count').innerText = parseInt($('.single-post .post-comment-count').innerText) + 1;

        $('.cmt-' + temp_id).remove();

        quoteRemove();
    });
}

/**
 * Init pagination
 * @type {Number}
 */
let take = 10,
    offset = 0;

/**
 * Load a comment
 * @param  {Function} done Done callback
 */
export function commentLoad(opts, done)
{
    fetch(opts.route + '?take=' + take + '&offset=' + offset)
    .then(res => res.json())
    .then(function(res) {
        removeLoadMore();

        res.data.forEach((item) => {
            if(item.post) {
                commentAdd({
                    id: item.id,
                    name: item.user.name,
                    username: item.user.username,
                    avatar: item.user.the_avatar_sm,
                    content: item.markdown,
                    time: item.time,
                    is_mine: item.is_mine,
                    reply: item.reply,
                    post: {
                        title: item.post.title,
                        slug: item.post.slug,
                        username: item.post.user.username
                    }
                }, false, 'append');
            }
        });

        if(res.total > 10)
            addLoadMore(opts);

        offset += res.count;

        if(res.count == 0)
            comments.innerHTML = '<div class="text-center p-2 no-comment"><i>Belum ada diskusi, jadilah yang pertama.</i></div>';

        if(res.count <= 10 && offset >= res.total)
            removeLoadMore();

        if(done)
            done.call(this, res);
    })
}
