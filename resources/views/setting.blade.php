@extends('layouts.profile', ['title' => 'Pengaturan'])

@section('profile_content')
    <h1 class="mb-4 text-gray-600 text-lg flex items-center">Pengaturan</h1>
    @include('flash::message')
    <form enctype="multipart/form-data" method="post" action="{{ route('setting_update') }}">
        @csrf
        @card
            <h4 class="mb-1 text-lg font-semibold text-indigo-500">Pengaturan Avatar</h4>
            <p class="mb-5 text-sm text-gray-500 font-light">Gunakan foto asli kamu agar orang lain dapat mengenali kamu dengan mudah.</p>
            <label class="relative inline-block cursor-pointer">
                <div style="background-image: url({{ $user->the_avatar }});" class="w-32 h-32 bg-cover bg-center rounded-lg border {{ $errors->has('avatar') ? 'border-red-600' : 'border-gray-400'}}" id="avatar"></div>
                <input type="file" name="avatar" class="avatar-field hidden">
                <div class="absolute bottom-0 right-0 z-10 bg-black text-white rounded-tl text-sm py-1 px-2">Pilih Foto</div>
            </label>

            @if($errors->has('avatar'))
            <div class="text-red-600 text-sm">
                {!! $errors->first('avatar') !!}
            </div>
            @endif

            <h4 class="mb-1 mt-10 text-lg font-semibold text-indigo-500">Pengaturan Umum</h4>
            <p class="mb-5 text-sm text-gray-500 font-light">Lengkapi nama, bio, lokasi kamu dan data lainnya agar orang lain dapat mengenali kamu.</p>

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
                'help' => 'Tautan ke website eksternal miliki kamu, seperti website portofolio, resume atau semacamnya – agar orang lain dapat mengenal kamu lebih jauh.'
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
                'help' => 'URL ke akun GitHub kamu. Disarankan untuk mempublikasikan beberapa proyek kamu di GitHub agar orang lain dapat melihat portofolio kamu dengan mudah.'
            ])

            @field([
                'name' => 'company',
                'label' => 'Perusahaan',
                'type' => 'text',
                'value' => $user->company,
                'help' => 'Cantumkan perusahaan tempat kamu bekerja sekarang.'
            ])

            <h4 class="mb-1 mt-6 text-lg font-semibold text-indigo-500">Pengaturan Akun</h4>
            <p class="mb-5 text-sm text-gray-500 font-light">Informasi akun tidak dapat kamu ubah sendiri, kamu perlu menghubungi salah satu admin untuk membuat permintaan pengubahan informasi akun.</p>

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
                'type' => 'div',
                'value' => $user->username,
                'help' => 'Username digunakan oleh orang lain untuk menyebut kamu di dalam sebuah diskusi atau post.'
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
<script>
    let avatar_field = $('.avatar-field');
    
    avatar_field.addEventListener('change', function() {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#avatar').style.backgroundImage = 'url(' + e.target.result + ')';
        }

        reader.readAsDataURL(this.files[0]);
    });
</script>
@endpush
