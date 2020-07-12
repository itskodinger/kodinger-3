@inject('userService', 'Services\UserService')

<div class="bg-white rounded border border-gray-200 mt-10 mb-10">
    <h4 class="font-bold py-4 px-5">
        Top User Minggu Ini
    </h4>
    @foreach($userService->weeklyTop() as $user)
        <a class="flex w-full hover:bg-gray-100 px-5 py-4 border-b border-gray-100" href="@route('single', $user->username)">
            <img src="{{ $user->the_avatar }}" class="w-10 h-10 rounded border">
            <div class="ml-4">
                <div class="font-semibold">{{ $user->name }}</div>
                <div class="text-gray-600">{{ '@' . $user->username }}</div>
            </div>
        </a>
    @endforeach
</div>
