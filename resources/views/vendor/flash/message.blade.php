@foreach (session('flash_notification', collect())->toArray() as $message)
    @if ($message['overlay'])
        @include('flash::modal', [
            'modalClass' => 'flash-modal',
            'title'      => $message['title'],
            'body'       => $message['message']
        ])
    @else
        <div class="py-4 px-6 border-2 mb-4 rounded leading-loose
                    {{ ($message['level']  == 'success' ? 'border-teal-200 bg-teal-100 text-teal-600' : '') }}
                    {{ ($message['level']  == 'danger' ? 'border-red-600 bg-red-100 text-red-600' : '') }}
                    {{ $message['important'] ? 'alert-important' : '' }}"
                    role="alert"
        >
            @if ($message['important'])
                <button type="button"
                        class="close"
                        data-dismiss="alert"
                        aria-hidden="true"
                >&times;</button>
            @endif

            {!! $message['message'] !!}
        </div>
    @endif
@endforeach

{{ session()->forget('flash_notification') }}
