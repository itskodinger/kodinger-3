<?php

namespace Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostDiscoverCreateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'pages' => 'required|url',
            'tags' => 'required'
        ];
    }
}
