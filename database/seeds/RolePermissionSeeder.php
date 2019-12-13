<?php

use App\User;
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
    		['name' => 'post-list'],
    		['name' => 'post-create'],
    		['name' => 'post-update'],
    		['name' => 'post-deleted'],
    	];

    	foreach($permissions as $permission) 
    	{
    		Permission::firstOrcreate($permission);
    	}

        $user = User::find(1);

        if($user instanceof User) {
            $user->assignRole('admin');            
        }
    }
}
