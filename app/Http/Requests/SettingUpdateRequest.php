<?php

namespace Requests;

use Illuminate\Foundation\Http\FormRequest;

class SettingUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|min:3|max:20',
            'avatar' => 'nullable|image',
            'github' => 'nullable|url',
            'username' => 'nullable|unique:users,username',
            'link' => 'nullable|url',
            'bio' => 'nullable|min:10|max:255'
        ];
    }
}
