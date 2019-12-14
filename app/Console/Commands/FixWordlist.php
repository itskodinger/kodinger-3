<?php

/**
 *
 * DON'T USE THIS COMMAND ON PRODUCTION, ONLY USE FOR TESTING.
 *
 */

namespace App\Console\Commands;

use Illuminate\Console\Command;

class FixWordlist extends Command
{

    /**
     * Ignore Paths.
     *
     * @var array $ignore
     */
    protected $ignore = ['.', '..'];

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fix:wordlist';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fix the wordlist url.';

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
        $files = scandir(storage_path("wordlists"));

        foreach($files as $file) {
            if( ! in_array($file, $this->ignore) ) {

                $rows = file(sprintf("%s/%s", 
                    storage_path("wordlists"),
                    $file 
                ));

                foreach($rows as $line => $row) {

                    $segments = explode(" ", $row);

                    $rows[$line] = sprintf("%s\n", $segments[0]);

                    $this->info($segments[0]);


                }

            }
        }


        file_put_contents(
            sprintf("%s/%s", storage_path("wordlists"), $file),
            $rows
        );
    }


    protected function validDomain($domain_name)
    {
        return (preg_match("/^([a-z\d](-*[a-z\d])*)(\.([a-z\d](-*[a-z\d])*))*$/i", $domain_name) //valid chars check
                && preg_match("/^.{1,253}$/", $domain_name) //overall length check
                && preg_match("/^[^\.]{1,63}(\.[^\.]{1,63})*$/", $domain_name)   ); //length of each label
    }

}
