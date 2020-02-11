<?php

namespace Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostUploadImageRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'image' => 'max:5000|mimes:png,jpeg,bmp,png,webp,svg,mp4,webm,ogg',
        ];
    }
}
