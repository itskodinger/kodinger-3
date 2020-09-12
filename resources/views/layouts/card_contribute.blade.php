            <div class="p-4 border-b border-gray-200 bg-white rounded border-2 border-gray-200 mb-8">
                <div class="items-center">
                    <div class="py-1 px-2 mr-1 rounded text-sm inline-block text-white capitalize {{ $contribute->status == 'merged' ? 'bg-green-500' : 'bg-orange-500' }}">
                        {{ $contribute->status }}
                    </div>
                    <a class="hover:text-indigo-500" href="@route('post.show', [$contribute->post->user->username, $contribute->post->slug])">{{ $contribute->post->title }}</a>
                </div>
                <div class="mt-6 mb-2 text-gray-600">{{ key2str($contribute->column_name) }}</div>
                <div class="border border-gray-200 bg-gray-100 rounded mb-4 p-4 break-all">
                    {!! nl_list($contribute->post->{$contribute->column_name}) . ($contribute->status == 'draft' ? nl_list($contribute->value, 'text-green-500 font-semibold', 'div', '+') : '') !!}
                </div>
                @can('contribute-reject')
                <div class="mt-6 mb-2 text-gray-600">Catatan (Bila Reject)</div>
                <form action="@route('contribute.reject', $contribute->id)" method="post" id="reject-form-{{$contribute->id}}">
                    @csrf
                    <textarea name="note" class="border border-gray-200 p-4 rounded w-full bg-gray-100 focus:outline-none focus:bg-white" placeholder="Cth: Link tidak bisa diakses"></textarea>
                </form>
                @endcan
                <div class="w-full h-px bg-gray-200 my-4"></div>
                <div class="mt-2 -mx-3 text-gray-600 flex">
                    <div class="mx-3"><a href="@route('single', $contribute->user->username)" class="text-indigo-500 hover:text-indigo-800">{{ $contribute->user->name }}</a></div>
                    <div class="mx-3">{{ $contribute->created_at->diffForHumans() }}</div>
                    @if($contribute->status == 'draft')
                        @if(can('contribute-merge') || $contribute->post->user_id == auth()->user()->id)
                        <a class="mx-3 text-green-500" href="@route('contribute.merge', $contribute->id)">Merge</a>
                        @endif
                        @if(can('contribute-reject') || $contribute->post->user_id == auth()->user()->id)
                        <a class="mx-3 text-orange-500" href="#" onclick="document.querySelector('#reject-form-{{$contribute->id}}').submit();">Reject</a>
                        @endif
                    @endif

                    @if(can('contribute-delete') || $contribute->post->user_id == auth()->user()->id)
                    <a class="mx-3 text-red-600 cursor-pointer" onclick="let c = confirm('Are you sure?'); if(!c) return false; else document.getElementById('delete{{$contribute->id}}').submit();">Delete</a>
                    <form action="@route('contribute.delete', $contribute->id)" method="post" id="delete{{$contribute->id}}">
                        {!! method_field('delete') !!}
                        @csrf
                    </form>
                    @endcan
                </div>
            </div>
