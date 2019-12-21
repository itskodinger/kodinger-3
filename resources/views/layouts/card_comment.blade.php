<a name="comments"></a>
@if(auth()->check())
<div class="bg-gray-100 py-4 px-6">
    <form class="w-full flex comment-form">
        <input type="hidden" name="reply_id" class="reply-id">
        <img class="w-10 h-10 flex-shrink-0 rounded-full border border-gray-200" src="{{ the_avatar() }}">
        <div class="ml-3 w-full">
            <textarea 
                onkeydown="if(event.keyCode == 13 && !event.shiftKey) {event.preventDefault(); comment(this.value); this.value = ''; return false;} " 
                onkeyup="if(event.shiftKey && event.keyCode == 13 || event.keyCode == 8) {this.style.height='5px';this.style.height=(this.scrollHeight) + 'px';}" 
                class="rounded focus:shadow focus:border-indigo-600 resize-none w-full border border-gray-200 py-2 h-10 px-4 text-sm focus:outline-none focus:border-gray-300" placeholder="Tulis komentar kamu ..." name="message"
            ></textarea>
            <div class="flex items-center">
                <svg width="20px" class="mr-2 fill-current text-gray-600" viewBox="0 0 256 158" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                    <g>
                        <path d="M238.371257,157.892216 L18.3952096,157.892216 C8.43113772,157.892216 0,149.461078 0,139.497006 L0,18.3952096 C0,8.43113772 8.43113772,0 18.3952096,0 L237.60479,0 C247.568862,0 256,8.43113772 256,18.3952096 L256,139.497006 C256,149.461078 248.335329,157.892216 238.371257,157.892216 L238.371257,157.892216 Z M18.3952096,12.2634731 C15.3293413,12.2634731 12.2634731,15.3293413 12.2634731,18.3952096 L12.2634731,139.497006 C12.2634731,143.329341 15.3293413,145.628743 18.3952096,145.628743 L237.60479,145.628743 C241.437126,145.628743 243.736527,142.562874 243.736527,139.497006 L243.736527,18.3952096 C243.736527,14.5628743 240.670659,12.2634731 237.60479,12.2634731 C238.371257,12.2634731 18.3952096,12.2634731 18.3952096,12.2634731 L18.3952096,12.2634731 Z M36.7904192,121.101796 L36.7904192,36.7904192 L61.3173653,36.7904192 L85.8443114,67.4491018 L110.371257,36.7904192 L134.898204,36.7904192 L134.898204,121.101796 L110.371257,121.101796 L110.371257,72.8143713 L85.8443114,103.473054 L61.3173653,72.8143713 L61.3173653,121.101796 L36.7904192,121.101796 L36.7904192,121.101796 Z M190.850299,121.101796 L154.05988,80.4790419 L178.586826,80.4790419 L178.586826,36.7904192 L203.113772,36.7904192 L203.113772,79.7125749 L227.640719,79.7125749 L190.850299,121.101796 L190.850299,121.101796 Z"></path>
                    </g>
                </svg>
                <p class="text-xs text-gray-600">Markdown &nbsp;&bull;&nbsp; Berdiskusi dengan bijak (<a href="#" class="text-indigo-700 font-bold">Kebijakan</a>)</p>
            </div>
        </div>
    </form>
</div>
@endif
<div id="comments">
</div>

@push('js')
    <script>
        let comment_tmp = '\
            <div id="discuss-{id}" class="px-6 py-3 bg-gray-100 rounded-bl rounded-br cmt-{id}">\
                <div class="flex">\
                    <img class="rounded-full w-10 h-10 flex-shrink-0" src="{avatar}">\
                    <div class="ml-3 w-full">\
                        <p class="mx-1 text-blue-500 text-xs font-semibold float-right cmt-time">{time}</p>\
                        <h4 class="mb-1 font-bold text-sm"><a class="text-indigo-600 cmt-name" href="'+ routes.base_url +'/{username}">{name}</a> <span class="text-gray-600 font-normal">({username})</span></h4>\
                        <div class="text-sm text-gray-700 cmt-msg">\
                            {quoted}\
                            <div class="cmt-content">{msg}</div>\
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

            let item = comment_tmp.replace(/{msg}/g, obj.msg);
            item = item.replace(/{currentUrl}/g, window.location.href)
            item = item.replace(/{avatar}/g, obj.avatar)
            item = item.replace(/{name}/g, obj.name)
            item = item.replace(/{username}/g, obj.username)
            item = item.replace(/{time}/g, obj.time)
            if(obj.id)
                item = item.replace(/{id}/g, obj.id)
            item = item.replace(/{is_mine}/g, obj.is_mine ? '<a onclick="let c = confirm(\'are you sure?\'); if(c){comment_remove('+obj.id+', event)}" class="mt-5 text-red-600 cursor-pointer text-xs mr-3">Delete</a>' : '')
            item = item.replace(/{quote}/g, '<a onclick="quote('+obj.id+', event)" class="mt-5 hover:text-indigo-600 cursor-pointer text-xs mr-3">Quote</a>')

            // if has reply
            if("reply" in obj && obj.reply) {
                let quote_template = quote_tmp;
                quote_template = quote_template.replace(/{id}/, obj.reply.id);
                quote_template = quote_template.replace(/{name}/, obj.reply.user.name);
                quote_template = quote_template.replace(/{content}/, obj.reply.markdown);
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

            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    let res = xhr.responseText;
                    if(res)
                        res = JSON.parse(res);

                    if(res.status)
                        cmt.remove();
                    else
                        cmt.classList.removes('opacity-50 pointer-events-none');
                }
            }
            xhr.open("delete", "{{ route('comment.destroy') }}", true);
            xhr.setRequestHeader("X-CSRF-TOKEN", $('[name=csrf-token]').getAttribute('content'));
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Accept", "application/json");
            xhr.send('id=' + id);
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
            window.scrollTo(0, $(id).offsetTop - 80);
        }

        function comment(msg)
        {

            if(msg.trim().length < 1)
                return;

            let temp_id = id();
            const reply_id = $('.reply-id').value;

            let item = comment_add({
                name: '{{ optional(auth()->user())->name }}',
                username: '{{ optional(auth()->user())->the_username }}',
                avatar: '{{ optional(auth()->user())->the_avatar }}',
                id: temp_id,
                is_mine: false,
                msg: '<i>Mengirim ...</i>',
                time: 'Baru Saja',
            }, 'opacity-50 pointer-events-none', 'prepend');

            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    let res = xhr.responseText;
                    if(res)
                        res = JSON.parse(res);

                    comment_add({
                        name: res.data.user.name,
                        username: res.data.user.the_username,
                        avatar: res.data.user.the_avatar_sm,
                        id: res.data.id,
                        is_mine: res.data.is_mine,
                        time: res.data.time,
                        msg: res.data.markdown,
                        reply: res.data.reply
                    }, false, 'after', $('.cmt-' + temp_id));

                    $('.cmt-' + temp_id).remove();

                    quote_remove();
                }
            }
            xhr.open("post", "{{ route('comment.store') }}", true);
            xhr.setRequestHeader("X-CSRF-TOKEN", $('[name=csrf-token]').getAttribute('content'));
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Accept", "application/json");
            xhr.send('reply_id='+ reply_id +'&content=' + msg + '&post_id='+{{$post->id}});
        }

        let take = 10,
            offset = 0;
        function comment_load(done)
        {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    let res = xhr.responseText;
                    if(res)
                        res = JSON.parse(res);

                    remove_load_more();

                    res.data.forEach((item) => {
                        comment_add({
                            id: item.id,
                            name: item.user.name,
                            username: item.user.the_username,
                            avatar: item.user.the_avatar_sm,
                            msg: item.markdown,
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
                }
            }
            xhr.open("get", "{{ route('comment.ajax', $post->id) }}?take=" + take + '&offset=' + offset, true);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.send();
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

    </script>
@endpush