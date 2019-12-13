<?php

namespace Requests;

use Illuminate\Foundation\Http\FormRequest;

class CommunityUpdateRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'short_description' => 'required'
        ];
    }
}
