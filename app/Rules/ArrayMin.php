<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class ArrayMin implements Rule
{
    protected $min;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($min=0)
    {
        $this->min = $min;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return is_array($value) && count($value) >= $this->min ? true : false;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return "The :attribute must be at least {$this->min}.";
    }
}
