<?php

use Illuminate\Database\Seeder;
use App\Tag;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$tags = [
    		['name' => 'php'],
    		['name' => 'javascript'],
    		['name' => 'mysql'],
    		['name' => 'mongodb'],
    		['name' => 'maridb'],
    		['name' => 'node-js'],
    		['name' => 'laravel'],
    		['name' => 'codeigniter'],
    		['name' => 'react-js'],
    		['name' => 'next-js'],
    		['name' => 'front-end'],
    		['name' => 'back-end'],
    		['name' => 'full-stack'],
    		['name' => 'design'],
    		['name' => 'ui-design'],
    		['name' => 'ux-design'],
    		['name' => 'resource'],
    		['name' => 'freebie'],
    		['name' => 'hosting'],
    		['name' => 'devops'],
    		['name' => 'tool'],
    		['name' => 'beginner'],
    		['name' => 'intermediate'],
    		['name' => 'advanced'],
    		['name' => 'database'],
    		['name' => 'environment'],
    		// ['name' => '']
    	];

    	foreach($tags as $tag)
    	{
    		if(!Tag::whereName($tag['name'])->count())
	    		Tag::create($tag);
    	}
    }
}
