<?php

namespace Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserUpdateRequest extends FormRequest
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
            'email' => 'required|unique:users,email,' . $this->id,
            'username' => 'required|unique:users,username,' . $this->id,
            'password' => 'nullable',
            'status' => 'required',
            'roles' => 'required',
        ];
    }
}
