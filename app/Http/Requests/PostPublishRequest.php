<?php

namespace Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\ArrayMin;
use App\Rules\Content;

class PostPublishRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|max:100|min:5',
            'slug' => 'required|min:5|unique:posts,slug,' . $this->id,
            'tags' => ['array', new ArrayMin(1)],
            'content' => [new Content(request()->type)]
        ];
    }
}
