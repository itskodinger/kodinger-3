<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Storage;

class StorageFileExist implements Rule
{
    protected $publicFolder;
    protected $name;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($public_folder, $name)
    {
        $this->publicFolder = $public_folder;
        $this->name = $name;
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
        $path = 'posts/' . $this->publicFolder . '/' . $this->name;

        // if file exists
        if(Storage::disk('spaces')->exists($path))
        {
            return false;
        }

        // if file missing
        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Berkas "'. $this->name .'" sudah ada. Kami tidak ingin menimpanya, tolong ubah nama berkas sendiri!';
    }
}
