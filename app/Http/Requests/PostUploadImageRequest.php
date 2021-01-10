<?php

namespace Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\StorageFileExist;

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
            'image' => ['max:10000', 'mimes:png,jpeg,jpg,bmp,png,webp,svg,mp4,webm,ogg', new StorageFileExist($this->public_folder, $this->name, $this->force)],
        ];
    }
}
