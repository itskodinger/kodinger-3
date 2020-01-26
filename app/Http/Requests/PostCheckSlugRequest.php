<?php

namespace Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostCheckSlugRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'slug' => 'required|min:5'
        ];
    }
}
