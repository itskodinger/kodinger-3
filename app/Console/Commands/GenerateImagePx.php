<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Storage;
use Intervention\Image\ImageManagerStatic as Image;

class GenerateImagePx extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'imagepx';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        dd('stop!');

        $s = Storage::disk('spaces');

        $files = $s->allFiles();

        $files = array_filter($files, function($item) {
            return !(strpos($item, 'public/') > -1) && (strpos($item, '/') > -1);
        });

        // grouping
        $newarr = [];
        foreach($files as $k=>$file)
        {
            $xp = explode('/', $file);
            $ex = explode('.', $file);

            if(!in_array(end($ex), ['mp4', 'txt']))
                $newarr[$xp[0]][$k] = $file;
        }

        $newarr = array_map('array_values', $newarr);

        // slicing
        $final = [];
        foreach($newarr as $k => $f)
        {
            $final[$k] = $f[0];
        }

        $block = ['fig', 'mp4'];

        foreach($final as $k => $file)
        {
            $file_name = pathinfo($file, PATHINFO_FILENAME);
            $file_ext = pathinfo($file, PATHINFO_EXTENSION);
            $dir = pathinfo($file, PATHINFO_DIRNAME);
            $dest = $dir . '/px/' . $file_name .'.'.$file_ext;

            if(!in_array($file_ext, $block))
            {
                $this->info('['.$k.'] Generating: ' . $file);

                $file = env('DO_SPACES_BASEURL') . '/' . str_replace(' ', '%20', $file);
                $image = Image::make($file);
                $resize = $image->fit(50,50)->encode('png');

                $this->info('['.$k.'] Uploading: ' . $dest);
                Storage::disk('spaces')->put($dest, $resize->__toString(), 'public');

                $this->info('['.$k.']Generated: ' . $file);
                $this->info('--------------------------------------------------------');

                sleep(2);
            }
        }
    }
}
