<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class Content implements Rule
{
    public $type;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($type)
    {
        $this->type = $type;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value, $parameters = [])
    {
        if($this->type == 'markdown') {
            if(strlen(trim($value)) > 0) return true;

            return false;
        }else{
            $value = json_decode($value, true);

            if($value && is_array($value) && count($value) > 0)
            {
                if(array_key_exists('caption', $value[0]) && strlen(trim($value[0]['caption'])) > 0)
                {
                    return true;
                }
            }

            return false;
        }
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The first slide must be filled with caption.';
    }
}
