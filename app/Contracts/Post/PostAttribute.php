<?php 

namespace App\Contracts\Post;

interface PostAttribute {

    /**
     * Set the attribute key.
     *
     * @param  string $key
     * @return self
     */
    public function setKey($key);

    /**
     * Set the attribute value.
     * 
     * @param  string $value
     * @return self
     */
    public function setValue($value);

    /**
     * Set the attribute description
     *
     * @param  string $description
     * @return self
     */
    public function setDescription($description);

    /**
     * Set the attribute kind.
     *
     * @param  string $kind
     * @return self
     */
    public function setKind($kind);

    /**
     * Set the attribute should be escaped or not.
     *
     * @param  bool $escaped
     * @return self
     */
    public function setEscaped(bool $escaped);

    /**
     * Get the key.
     *
     * @return string|null
     */
    public function getKey();

    /**
     * Get the value.
     *
     * @return string|null
     */
    public function getValue();
    
    /**
     * Get the description.
     *
     * @return string|null
     */
    public function getDescription();

    /**
     * Get the kind.
     *
     * @return string|null
     */
    public function getKind();

    /**
     * Get the escaped value.
     *
     * @return bool
     */
    public function getEscaped();

}
