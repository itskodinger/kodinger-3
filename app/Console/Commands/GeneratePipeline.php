<?php

namespace App\Console\Commands;

use App\Utils\StubGenerator;
use Illuminate\Console\Command;

class GeneratePipeline extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:pipeline { className }';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate new Pipeline.';

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
        $path        = $this->argument('className');
        $className   = basename($path);
        $namespace   = str_replace("/", "\\", dirname($path));
        $namespace   = ($namespace != '.') ? sprintf("\\%s", $namespace) : "";

        try {

            $stub = new StubGenerator(
                app_path("Stubs/Pipeline.stub"),
                app_path("Services/Pipeline/$path.php")
            );

            $stub->render([
                ':CLASS_NAME:' => $className,
                ':NAMESPACE:'  => $namespace
            ]);

            $this->info('Pipeline Generated Successfully.');

        } catch(\Exception $e) {
            $this->error($e->getMessage());
        }
    }
}

