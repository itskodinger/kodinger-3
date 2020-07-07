<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostMDCreateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|min:5',
            'slug' => 'required|min:5|unique:posts,slug'
        ];
    }
}
