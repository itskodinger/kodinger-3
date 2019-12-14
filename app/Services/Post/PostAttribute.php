<?php 

namespace App\Services\Post;

use App\Contracts\Post\PostAttribute as PostAttributeContract;

class PostAttribute implements PostAttributeContract {

    /**
     * The attribute key.
     *
     * @var  string $key
     */
    protected $key;

    /**
     * The attribute value.
     *
     * @var  string $value
     */
    protected $value;

    /**
     * The attribute description.
     *
     * @var  string $description
     */
    protected $description;

    /**
     * The  attribute kind.
     *
     * @var  string
     */
    protected $kind;

    /**
     * The attribute escaped.
     *
     * @var  bool $escaped
     */
    protected $escaped = false;

    /**
     * Set the attribute key.
     *
     * @param  string $key
     * @return self
     */
    public function setKey($key) {
        $this->key = $key;

        return $this;
    }

    /**
     * Set the attribute value.
     * 
     * @param  string $value
     * @return self
     */
    public function setValue($value) {
        $this->value = $value;

        return $this;
    }

    /**
     * Set the attribute description
     *
     * @param  string $description
     * @return self
     */
    public function setDescription($description) {
        $this->description = $description;

        return $this;
    }

    /**
     * Set the attribute kind.
     *
     * @param  string $kind
     * @return self
     */
    public function setKind($kind) {
        $this->kind = $kind;

        return $this;
    }

    /**
     * Set the attribute should be escaped or not.
     *
     * @param  bool $escaped
     * @return self
     */
    public function setEscaped(bool $escaped) {
        $this->escaped = $escaped;

        return $this;
    }

    /**
     * Get the key.
     *
     * @return string|null
     */
    public function getKey() {
        return $this->key;
    }

    /**
     * Get the value.
     *
     * @return string|null
     */
    public function getValue() {
        return $this->value;
    }
    
    /**
     * Get the description.
     *
     * @return string|null
     */
    public function getDescription() {
        return $this->description;
    }

    /**
     * Get the kind.
     *
     * @return string|null
     */
    public function getKind() {
        return $this->kind;
    }

    /**
     * Get the escaped value.
     *
     * @return bool
     */
    public function getEscaped() {
        return $this->escaped;
    }

}
