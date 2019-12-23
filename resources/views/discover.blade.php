@extends('layouts.app', ['title' => 'Discover', 'footer' => false])

@push('css')
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/choices.js/public/assets/styles/choices.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@yaireo/tagify@3.1.0/dist/tagify.css">
@endpush

@section('content')
    <div class="container mx-auto">
        <div class="flex py-12 -mx-4">
            <div class="w-3/12 px-4">
                @sidebar
            </div>
            <div class="w-6/12 px-4">
                @auth
                <form id="discover-form" autocomplete="off">
                    <div class="border-2 border-gray-200 rounded">
                        <div class="p-5">
                            <h1 class="text-indigo-600 mb-4 font-semibold flex items-center">
                                <svg class="text-indigo-600 fill-current w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="people"><rect width="24" height="24" opacity="0"/><path d="M9 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/><path d="M17 13a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/><path d="M17 14a5 5 0 0 0-3.06 1.05A7 7 0 0 0 2 20a1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 6.9 6.9 0 0 0-.86-3.35A3 3 0 0 1 20 19a1 1 0 0 0 2 0 5 5 0 0 0-5-5z"/></g></g></svg>
                                Berbagi dengan komunitas
                            </h1>
                            <div class="focus-within:border-indigo-500 px-4 py-3 rounded border border-gray-200">
                                <input name="link" placeholder="Taruh link di sini (cth. https://kodinger.com/artikel)" class="focus:outline-none w-full text-sm resize-none input-link">
                                <input type="text" name="tags[]" class="tags border-l-0 border-r-0 border-b-0 border-t mt-4 w-full focus:outline-none text-sm pt-2">
                            </div>
                        </div>

                        <div class="p-4 border-t border-gray-200 flex items-center">
                            <div class="flex items-center">
                                <img class="w-10 h-10 rounded border-gray-200 border" src="{{ auth()->user()->the_avatar_sm }}" alt="{{ auth()->user()->name }}">
                                <div class="ml-2">
                                    <div class="text-xs uppercase font-semibold tracking-wide leading-tight text text-gray-500">Dibuplikasi oleh</div>
                                    {{ auth()->user()->name }}
                                </div>
                            </div>
                            <div class="ml-auto flex items-center">
                                <svg class="w-6 h-6 mr-2 spin hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="loader"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 2a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1z"/><path d="M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"/><path d="M6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1z"/><path d="M6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41z"/><path d="M17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31z"/><path d="M12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z"/><path d="M17.73 16.14a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42z"/><path d="M6.27 16.14l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44z"/></g></g></svg>
                                <button class="shadow-md bg-indigo-600 text-white px-5 py-2 rounded text-sm hover:shadow-none hover:bg-indigo-700 publish-button">Publish</button>
                            </div>
                        </div>
                    </div>
                </form>
                @endauth

                <h1 class="mb-4 text-lg flex items-center mt-8 text-gray-600">Link Dari Komunitas</h1>
                <div class="posts"></div>
            </div>
            <div class="w-3/12 px-4">
                @rightbar
            </div>
        </div>
    </div>
@stop

@push('js')
    <script src="https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js"></script>
    <script src="{{ url('js/app.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/@yaireo/tagify@3.1.0/dist/tagify.min.js"></script>

    <script>
        let posts = post.init('.posts', {
            url: routes.discover,
            carousel: false,
            truncate_content: true
        });

        let tagify = new Tagify($('.tags'), {
            enforceWhitelist : true,
            whitelist        : [],
            maxTags: 5,
            skipInvalid: true,
            dropdown : {
                highlightFirst: true,
                maxItems: 7
            },
            placeholder: 'Pilih maksimal 5 tag',
            templates : {
                wrapper(input, settings){
                  return `<tags class="tagify focus-within:border-indigo-600 ${settings.mode ? "tagify--" + settings.mode : ""} ${input.className}"
                                      ${settings.readonly ? 'readonly aria-readonly="true"' : 'aria-haspopup="listbox" aria-expanded="false"'}
                                      role="tagslist">
                              <span contenteditable data-placeholder="${settings.placeholder || '&#8203;'}" aria-placeholder="${settings.placeholder || ''}"
                                  class="tagify__input p-0 m-0 py-1"
                                  role="textbox"
                                  aria-controls="dropdown"
                                  aria-autocomplete="both"
                                  aria-multiline="${settings.mode=='mix'?true:false}"></span>
                          </tags>`
                },

                tag(value, tagData){
                    return `<tag title='${tagData.title || value}'
                              contenteditable='false'
                              spellcheck='false'
                              class='tagify__tag m-0 mr-2 rounded ${tagData.class ? tagData.class : ""}'
                              ${this.getAttributes(tagData)}>
                        <x title='' class='tagify__tag__removeBtn' role='button' aria-label='remove tag'></x>
                        <div>
                            <span class='tagify__tag-text'>${value}</span>
                        </div>
                    </tag>`
                },

                dropdownItem( item ){
                  var mapValueTo = this.settings.dropdown.mapValueTo,
                      value = (mapValueTo
                          ? typeof mapValueTo == 'function'
                              ? mapValueTo(item)
                              : item[mapValueTo]
                          : item.value) || item.value,
                      sanitizedValue = (value || item).replace(/`|'/g, "&#39;");

                  return `<div ${this.getAttributes(item)}
                              class='tagify__dropdown__item text-sm px-4 ${item.class ? item.class : ""}'
                              tabindex="0"
                              role="option"
                              aria-labelledby="dropdown-label">${sanitizedValue}</div>`;
                }
            }
        }), controller;

        tagify.on('input', onInput)

        function onInput( e ){
            var value = e.detail.value;
            tagify.settings.whitelist.length = 0;

            controller && controller.abort();
            controller = new AbortController();

            tagify.loading(true).dropdown.hide.call(tagify)

            fetch(routes.post_tags + '?value=' + value, {signal:controller.signal})
            .then(RES => RES.json())
            .then(function(whitelist){
                tagify.settings.whitelist.splice(0, whitelist.length, ...whitelist)
                tagify.loading(false).dropdown.show.call(tagify, value);
            })
        }

        $('#discover-form').addEventListener('submit', function(e) {
            let link = $('.input-link'),
                tags = tagify.value,
                btn = $('.publish-button');

            let tag_ids = '';
            tags.forEach(function(item){
                tag_ids += item.id + ',';
            });
            tag_ids = tag_ids.replace(/,+$/g,"");

            if(link.value.trim().length < 1 || !validateUrl(link.value)) {
                link.focus();
            } else if(tags.length < 1) {
                tagify.DOM.input.focus();
            } else {
                adds(btn.classList, 'pointer-events-none opacity-50');

                console.log(posts)

                // const posting = (async function() {
                //     const res = await fetch(routes.post_store_discover, {
                //         method: 'POST',
                //         headers: {
                //             'X-CSRF-TOKEN': token,
                //             'Content-Type': 'application/json',
                //             'Accept': 'application/json'
                //         },
                //         body: JSON.stringify({
                //             pages: link.value,
                //             tags: tag_ids
                //         })
                //     });

                //     return Promise.resolve(res);
                // })()
                // // on complete
                // .then(function(res) {
                //     removes(btn.classList, 'pointer-events-none opacity-50');

                //     if(res.ok) {
                //         return Promise.resolve(res.json());
                //     }

                //     return Promise.reject(res);
                // })
                // .then(function(res) {
                //     console.log(res);
                // })
                // .catch(function(error) {
                //     if(error.status == 401)
                //         alert('Anda perlu login dulu!')
                // });
            }

            e.preventDefault();
        });
    </script>
@endpush