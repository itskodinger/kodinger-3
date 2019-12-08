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
            ['name' => 'member'],
    	];

    	foreach ($roles as $role) 
    	{
	    	Role::firstOrcreate($role);
    	}

    	$permissions = [
    		'post-list',
    		'post-create',
    		'post-update',
    		'post-delete',
            'user-list',
            'user-update',
            'user-block',
            'user-role', // change the user role
            'user-delete',
            'contribute-list',
            'contribute-merge',
            'contribute-reject',
            'contribute-delete',
    	];

    	foreach($permissions as $permission) 
    	{
    		Permission::firstOrcreate($permission);
    	}

        $admin = Role::whereName('admin')->first();
        $admin->syncPermissions($permissions);
    }
}
