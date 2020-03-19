@extends('layouts.app', ['title' => 'About'])

@section('content')
    <div class="container mx-auto">
        <div class="py-12 -mx-4">
            <div class="w-6/12 mx-auto border rounded border-gray-200">
                <div class="p-8">
                    <h1 class="text-indigo-600 text-xl font-semibold">Contact</h1>
                    <p class="mt-2 text-gray-600">Bila kamu menemukan bug keamanan di situs ini, memiliki pertanyaan seputar bisnis atau sponsorship, kamu bisa menghubungi kami melalui alamat di bawah.</p>

                    <div class="mt-4 leading-loose">
                        <p>Email: nauvalazhar2@gmail.com</p>
                        <p>Phone: +6282124768469</p>
                    </div>
                    <p class="mt-2 text-gray-600">Bila kamu menemukan bug yang tidak ada korelasinya dengan keamanan, kamu dapat melaporkannya melalui <a href="https://github.com/itskodinger/kodinger-3/issues" target="_blank" class="text-indigo-600 border-b border-indigo-600">issue di repositori GitHub</a> kami.</p>
                    <p class="mt-4 text-gray-600">Terima kasih,<br>Kodinger</p>
                </div>
            </div>
        </div>
    </div>
@stop