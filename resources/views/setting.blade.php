@extends('layouts.profile', ['title' => 'Pengaturan'])

@section('profile_content')
    <h1 class="mb-4 text-lg flex items-center">Pengaturan</h1>
    @include('flash::message')
    @alert
    <form enctype="multipart/form-data" method="post" action="@route('setting_update')">
        @csrf
        @card
            <h4 class="mb-1 text-lg font-semibold text-indigo-500">Pengaturan Avatar</h4>
            <p class="mb-5 text-gray-500 font-light">Gunakan foto asli kamu agar orang lain dapat mengenali kamu dengan mudah.</p>
            <label class="relative inline-block cursor-pointer">
                <div style="background-image: url({{ $user->the_avatar }});" class="w-32 h-32 bg-cover bg-center rounded-lg border {{ $errors->has('avatar') ? 'border-red-600' : 'border-gray-400'}}" id="avatar"></div>
                <input type="file" name="avatar" class="avatar-field hidden">
                <div class="absolute bottom-0 right-0 z-1 bg-black text-white rounded-tl py-1 px-2">Pilih Foto</div>
            </label>

            @if($errors->has('avatar'))
            <div class="text-red-600">
                {!! $errors->first('avatar') !!}
            </div>
            @endif

            <h4 class="mb-1 mt-10 text-lg font-semibold text-indigo-500">Pengaturan Umum</h4>
            <p class="mb-5 text-gray-500 font-light">Lengkapi nama, bio, lokasi kamu dan data lainnya agar orang lain dapat mengenali kamu.</p>

            @field([
                'name' => 'name',
                'label' => 'Nama',
                'type' => 'text',
                'value' => $user->name,
                'help' => 'Boleh nama lengkap atau nama panggilan kamu.',
                'error' => $errors->has('name') ? $errors->first('name') : false
            ])

            @field([
                'name' => 'bio',
                'label' => 'Bio',
                'type' => 'textarea',
                'value' => $user->bio,
                'help' => 'Deskripsikan tentang diri kamu, seperti tanggal kelahiran, hobi dan lain semacamnya.'
            ])

            @field([
                'name' => 'link',
                'label' => 'Tautan',
                'type' => 'text',
                'value' => $user->link,
                'help' => 'Gunakan http:// atau https://. Tautan ke website eksternal miliki kamu, seperti website portofolio, resume atau semacamnya – agar orang lain dapat mengenal kamu lebih jauh.'
            ])

            @field([
                'name' => 'location',
                'label' => 'Lokasi',
                'type' => 'text',
                'value' => $user->location,
                'help' => 'Lokasi tempat tinggal kamu. Contoh: Bogor, Indonesia'
            ])

            @field([
                'name' => 'github',
                'label' => 'GitHub',
                'type' => 'text',
                'value' => $user->github,
                'help' => 'Gunakan http:// atau https://. URL ke akun GitHub kamu. Disarankan untuk mempublikasikan beberapa proyek kamu di GitHub agar orang lain dapat melihat portofolio kamu dengan mudah.'
            ])

            @field([
                'name' => 'company',
                'label' => 'Perusahaan',
                'type' => 'text',
                'value' => $user->company,
                'help' => 'Cantumkan perusahaan tempat kamu bekerja sekarang.'
            ])

            <h4 id="account-setting" class="mb-1 mt-6 text-lg font-semibold text-indigo-500">Pengaturan Tautan</h4>
            <p class="mb-5 text-gray-500 font-light">Definisikan tautan eksternal ke sosial media, platform portfolio atau halaman dukungan kamu. Ini akan mempermudah pengguna lain untuk menjalin koneksi dengan kamu di luar platform Kodinger.</p>

            @foreach(supported_links() as $link)
                @field([
                    'name' => $link['name'],
                    'label' => $link['display_name'],
                    'type' => 'text',
                    'value' => $user->setting->pluck('value', 'name')[$link['name']] ?? null,
                    'placeholder' => $link['eg']
                ])
            @endforeach

            <h4 id="account-setting" class="mb-1 mt-6 text-lg font-semibold text-indigo-500">Pengaturan Akun</h4>
            <p class="mb-5 text-gray-500 font-light">Informasi akun tidak dapat kamu ubah sendiri, kamu perlu menghubungi salah satu admin untuk membuat permintaan pengubahan informasi akun.</p>

            @field([
                'name' => 'email',
                'label' => 'Email',
                'type' => 'div',
                'value' => $user->email,
                'help' => 'Email tidak akan dipublikasikan.'
            ])

            @field([
                'name' => 'username',
                'label' => 'Username',
                'type' => (enable_username() ? 'input' : 'div'),
                'value' => $user->username,
                'help' => (enable_username() ? '<span class="text-red-600 font-bold">Username tidak dapat diubah kembali setelah ini, tentukan username dengan benar.</span> ' : '') . 'Username digunakan oleh orang lain untuk menyebut kamu di dalam sebuah diskusi atau post.'
            ])

            @field([
                'name' => 'provider',
                'label' => 'Provider',
                'type' => 'div',
                'value' => $user->provider
            ])

            @button([
                'class' => 'w-full'
            ])
                Simpan Perubahan
            @endbutton

        @endcard
    </form>
@stop

@push('js')
<script src="{{ mix('js/setting.js') }}"></script>
@endpush
