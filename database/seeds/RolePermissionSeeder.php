<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$roles = [
    		['name' => 'admin'],
    		['name' => 'contributor'],
    		['name' => 'moderator'],
    		['name' => 'author'],
    	];

    	foreach ($roles as $role) 
    	{
	    	Role::firstOrcreate($role);
    	}

    	$permissions = [
    		['name' => 'post-list'],
    		['name' => 'post-create'],
    		['name' => 'post-update'],
    		['name' => 'post-delete'],
    	];

    	foreach($permissions as $permission) 
    	{
    		Permission::firstOrcreate($permission);
    	}
    }
}
