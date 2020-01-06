let comment_tmp = '\
    <div id="discuss-{id}" class="px-6 py-3 rounded-bl rounded-br cmt-{id}">\
        <div class="flex">\
            <img class="rounded-full w-10 h-10 flex-shrink-0" src="{avatar}">\
            <div class="ml-3 w-full">\
                <p class="mx-1 text-blue-500 text-xs font-semibold float-right cmt-time">{time}</p>\
                <h4 class="mb-1 font-bold text-sm"><a class="text-indigo-600 cmt-name" href="'+ routes.base_url +'/{username}">{name}</a> <span class="text-gray-600 font-normal">({username})</span></h4>\
                <div class="text-sm text-gray-700">\
                    {quoted}\
                    <div class="cmt-content mb-2 text-base">{content}</div>\
                    {is_mine}{quote}<a class="text-xs" href="{currentUrl}#discuss-{id}">Permalink</a>\
                </div>\
            </div>\
        </div>\
    </div>',
    quote_tmp = '\
        <div onclick="comment_go(\'#discuss-{id}\')" class="quoted-cmt cursor-pointer hover:bg-teal-200 bg-teal-100 border border-teal-200 mb-2 py-2 px-4 text-sm rounded">\
            <div class="text-xs text-teal-600">Original by <span class="font-bold">{name}</span></div>\
            <div class="overflow-hidden h-22">{content}</div>\
            <a onclick="quote_remove(event)" class="quote-remove cursor-pointer text-red-600 text-xs mt-2 inline-block">Batalkan</a>\
        </div>\
    ',
    comments = $('#comments');

function comment_add(obj, classes, method, target)
{
    if(!method) method = 'append';

    let item = comment_tmp.replace(/{content}/g, obj.content);
    item = item.replace(/{currentUrl}/g, window.location.href);
    item = item.replace(/{avatar}/g, obj.avatar);
    item = item.replace(/{name}/g, obj.name);
    item = item.replace(/{username}/g, obj.username);
    item = item.replace(/{time}/g, obj.time);
    if(obj.id)
        item = item.replace(/{id}/g, obj.id);
    item = item.replace(/{is_mine}/g, obj.is_mine ? '<a onclick="let c = confirm(\'are you sure?\'); if(c){comment_remove('+obj.id+', event)}" class="mt-5 text-red-600 cursor-pointer text-xs mr-3">Delete</a>' : '');
    item = item.replace(/{quote}/g, auth ? '<a onclick="quote('+obj.id+', event)" class="mt-5 hover:text-indigo-600 cursor-pointer text-xs mr-3">Quote</a>' : '');

    // if has reply
    if("reply" in obj && obj.reply) {
        let quote_template = quote_tmp;
        quote_template = quote_template.replace(/{id}/, obj.reply.id);
        quote_template = quote_template.replace(/{name}/, obj.reply.user.name);
        quote_template = quote_template.replace(/{content}/, obj.reply.markdown);
        quote_template = quote_template.replace(/quoted-cmt /, '');
        item = item.replace(/{quoted}/g, quote_template);

        item = findRemove(str2dom(item), '.quote-remove');
    }else{
        item = item.replace(/{quoted}/, '');
    }

    item = str2dom(item);

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

    if(method == 'after')
        target.parentNode.insertBefore(item, target);
    else
        comments[method](item);

    return item;
}

function quote(id, e)
{
    const the_form = $('.comment-form'),
          quoted = $('#discuss-'+id);

    let form_pos = the_form.offsetTop - 150;

    window.scrollTo(0, form_pos);

    $('.reply-id').value = id;

    let the_template = quote_tmp;
    the_template = the_template.replace(/{id}/, id);
    the_template = the_template.replace(/{name}/, find(quoted, '.cmt-name').innerText);
    the_template = the_template.replace(/{content}/, find(quoted, '.cmt-content').innerHTML);
    the_template = str2dom(the_template);

    // remove first
    if(find(the_form, '.quoted-cmt'))
        find(the_form, '.quoted-cmt').remove();

    find(the_form, 'textarea').parentNode.prepend(the_template);
    find(the_form, 'textarea').focus();
}

function quote_remove(e)
{
    $('.quoted-cmt').remove();
    $('.reply-id').value = '';
}

function comment_remove(id, event)
{
    const cmt = $('.cmt-' + id);
    adds(cmt.classList, 'opacity-50 pointer-events-none');

    fetch(routes.comment_destory, {
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
    });
}

function add_load_more()
{
    let tpl = str2dom('\
    <div class="comment-load px-6 py-2 text-sm text-center cursor-pointer bg-gray-200 hover:bg-gray-300">\
        Load More\
    </div>');

    tpl.addEventListener('click', function() {
        adds($('.comment-load').classList, 'pointer-events-none opacity-50');
        comment_load(function() {
            if($('.comment-load'))
                $('.comment-load').classList.removes('pointer-events-none opacity-50');
        });
    });

    comments.append(tpl);
}

function remove_load_more()
{
    if($('.comment-load'))
        $('.comment-load').remove();
}

var id = function () {
  return Math.random().toString(36).substr(2, 9);
};

function comment_go(id)
{
    function please_go() {
        const el = $(id);
        if(el) {
            window.scrollTo(0, el.offsetTop - 80);
            el.classList.remove('bg-gray-100');
            el.classList.add('bg-yellow-200');
            setTimeout(function() {
                el.classList.remove('bg-yellow-200');
                el.classList.add('bg-gray-100');
            }, 2000);
        }
    }

    if(!$(id) && $('.comment-load')) {
        return comment_load(function() {
            please_go();
        });
    }

    please_go();
}

function comment(content)
{

    if(content.trim().length < 1)
        return;

    let temp_id = id();
    const reply_id = $('.reply-id').value;

    let item = comment_add({
        name: user.name,
        username: user.the_username,
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
        comment_add({
            name: res.data.user.name,
            username: res.data.user.the_username,
            avatar: res.data.user.the_avatar_sm,
            id: res.data.id,
            is_mine: res.data.is_mine,
            time: res.data.time,
            content: res.data.markdown,
            reply: res.data.reply
        }, false, 'after', $('.cmt-' + temp_id));

        $('.cmt-' + temp_id).remove();

        quote_remove();
    });
}

let take = 10,
    offset = 0;
function comment_load(done)
{
    fetch(routes.comment_ajax + post_id + '?take=' + take + '&offset=' + offset)
    .then(res => res.json())
    .then(function(res) {
        remove_load_more();

        res.data.forEach((item) => {
            comment_add({
                id: item.id,
                name: item.user.name,
                username: item.user.the_username,
                avatar: item.user.the_avatar_sm,
                content: item.markdown,
                time: item.time,
                is_mine: item.is_mine,
                reply: item.reply
            }, false, 'append');
        });

        if(res.total > 10)
            add_load_more();

        offset += res.count;

        if(res.count <= 10 && offset >= res.total)
            remove_load_more();

        if(done)
            done.call(this, res);
    })
}

comment_load(function(res) {
    if(res.count == 0)
        comments.innerHTML = '<div class="text-center p-2 text-sm no-comment"><i>Belum ada diskusi, jadilah yang pertama.</i></div>';

    let hash = window.location.hash;
    setTimeout(function() {
        if(hash)
            window.scrollTo(0, document.querySelector(hash).offsetTop - 80);                
    }, 50);
});
