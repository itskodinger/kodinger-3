<?php

namespace App\Utils;

use RuntimeException;

class StubGenerator
{
    /**
     * @var string
     */
    protected $source;

    /**
     * @var string
     */
    protected $target;

    /**
     * @param string $source
     * @param string $target
     */
    public function __construct(string $source, string $target)
    {
        $this->source = $source;
        $this->target = $target;
    }

    /**
     * @param array $replacements
     *
     * @throws \RuntimeException
     */
    public function render(array $replacements)
    {
        if (file_exists($this->target)) {
            throw new RuntimeException('Cannot generate file. Target ' . $this->target . ' already exists.');
        }

        $contents = file_get_contents($this->source);

        // Standard replacements
        collect($replacements)->each(function (string $replacement, string $tag) use (&$contents) {
            $contents = str_replace($tag, $replacement, $contents);
        });

        $path = pathinfo($this->target, PATHINFO_DIRNAME);

        if (!file_exists($path)) {
            mkdir($path, 0776, true);
        }

        file_put_contents($this->target, $contents);
    }

    /**
     * @param array $replacements
     *
     * @throws \RuntimeException
     */
    public function render2($overwrite = false)
    {
        $contents = $this->source;
        if (file_exists($this->target) && !$overwrite) {
            throw new RuntimeException('Cannot generate file. Target ' . $this->target . ' already exists.');
        }

        // Standard replacements
        // collect($replacements)->each(function (string $replacement, string $tag) use (&$contents) {
        //     $contents = str_replace($tag, $replacement, $contents);
        // });

        $path = pathinfo($this->target, PATHINFO_DIRNAME);

        if (!file_exists($path)) {
            mkdir($path, 0776, true);
        }

        file_put_contents($this->target, $contents);
    }
}
