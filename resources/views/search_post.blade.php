<div class="posts"></div>

@push('js')
    <script src="https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js"></script>
    <script src="{{ asset('js/post.js') }}"></script>
    <script>const search = '{{ request()->q }}', tag = '{{ request()->tag }}';</script>
    <script src="{{ asset('js/search.js') }}"></script>
@endpush