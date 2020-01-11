<?php

use Illuminate\Database\Seeder;

class CommunitiesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('communities')->delete();
        
        \DB::table('communities')->insert(array (
            0 => 
            array (
                'created_at' => '2019-12-13 21:57:44',
                'description' => NULL,
                'id' => 1,
                'links' => '{"facebook":"https:\\/\\/www.facebook.com\\/groups\\/35688476100\\/","twitter":"https:\\/\\/twitter.com\\/php_indonesia","telegram":"https:\\/\\/t.me\\/PHPIDforStudent","website":"https:\\/\\/www.phpindonesia.id\\/","github":"https:\\/\\/github.com\\/phpindonesia"}',
                'logo' => 'php-indonesia.jpg',
                'logo_bg' => NULL,
                'member' => '153000',
                'name' => 'PHP Indonesia',
                'short_description' => 'Bersama. Berkarya. Berjaya.',
                'updated_at' => '2019-12-13 23:37:49',
                'user_id' => 0,
            ),
            1 => 
            array (
                'created_at' => '2019-12-13 23:49:06',
                'description' => NULL,
                'id' => 2,
                'links' => '{"facebook":"https:\\/\\/www.facebook.com\\/groups\\/442974152553174\\/","twitter":null,"telegram":"https:\\/\\/t.me\\/react_id","website":"https:\\/\\/reactjs.id\\/","github":"https:\\/\\/github.com\\/reactjs-id"}',
                'logo' => 'reactjs-indonesia.png',
                'logo_bg' => '#000',
                'member' => '8400',
                'name' => 'ReactJS Indonesia',
                'short_description' => 'Komunitas Developer ReactJS Indonesia',
                'updated_at' => '2019-12-13 23:49:06',
                'user_id' => 0,
            ),
            2 => 
            array (
                'created_at' => '2019-12-14 06:19:27',
                'description' => NULL,
                'id' => 4,
                'links' => '{"facebook":"https:\\/\\/www.facebook.com\\/groups\\/sencha.indo.admin\\/","twitter":null,"telegram":"https:\\/\\/t.me\\/js_id","website":"https:\\/\\/medium.com\\/javascript-indonesia-community","github":null}',
                'logo' => 'javascript-indonesia.png',
                'logo_bg' => '#F0DB4E',
                'member' => '41700',
                'name' => 'JavaScript Indonesia',
                'short_description' => 'Komunitas Developer JavaScript Indonesia',
                'updated_at' => '2019-12-14 06:22:21',
                'user_id' => 0,
            ),
            3 => 
            array (
                'created_at' => '2020-01-03 11:00:15',
                'description' => NULL,
                'id' => 5,
                'links' => '{"facebook":"https:\\/\\/www.facebook.com\\/groups\\/laravel","twitter":null,"telegram":"https:\\/\\/t.me\\/laravelindonesia","website":"https:\\/\\/id-laravel.com","github":null}',
                'logo' => 'larave-indonesia.jpeg',
                'logo_bg' => '#EF3B2D',
                'member' => '11410',
                'name' => 'Laravel Indonesia',
                'short_description' => 'Grup diskusi, berita terbaru, dan segala tentang Laravel',
                'updated_at' => '2020-01-03 11:01:02',
                'user_id' => 0,
            ),
            4 => 
            array (
                'created_at' => '2020-01-04 09:31:18',
                'description' => NULL,
                'id' => 6,
                'links' => '{"facebook":"https:\\/\\/www.facebook.com\\/groups\\/1675298779418239\\/","twitter":null,"telegram":"https:\\/\\/t.me\\/vuejsindonesia","website":"https:\\/\\/vuejs.id\\/","github":"https:\\/\\/github.com\\/vuejs-id"}',
                'logo' => 'vuejs-indonesia.jpeg',
                'logo_bg' => '#0F2537',
                'member' => '1700',
                'name' => 'Vue.js Indonesia',
                'short_description' => 'Make Front-end Developer Great Again',
                'updated_at' => '2020-01-04 09:31:18',
                'user_id' => 0,
            ),
            5 => 
            array (
                'created_at' => '2020-01-04 09:34:22',
                'description' => NULL,
                'id' => 7,
                'links' => '{"facebook":"https:\\/\\/www.facebook.com\\/groups\\/GophersID\\/","twitter":null,"telegram":"https:\\/\\/t.me\\/golangID","website":"https:\\/\\/golang-id.org\\/","github":"https:\\/\\/github.com\\/golang-id"}',
                'logo' => 'golang-indonesia.png',
                'logo_bg' => NULL,
                'member' => '3900',
                'name' => 'Golang Indonesia',
                'short_description' => 'Komunitas Pengguna Bahasa Pemrograman Go Indonesia.',
                'updated_at' => '2020-01-04 09:34:22',
                'user_id' => 0,
            ),
            6 => 
            array (
                'created_at' => '2020-01-04 09:38:09',
                'description' => NULL,
                'id' => 8,
                'links' => '{"facebook":"https:\\/\\/www.facebook.com\\/groups\\/codeigniter.id\\/","twitter":null,"telegram":"https:\\/\\/t.me\\/codeigniterindonesia","website":"http:\\/\\/codeigniter-id.github.io\\/","github":"https:\\/\\/github.com\\/codeigniter-id"}',
                'logo' => 'codeigniter-indonesia.png',
                'logo_bg' => NULL,
                'member' => '77200',
                'name' => 'CodeIgniter Indonesia',
                'short_description' => 'Codeigniter Indonesia Group',
                'updated_at' => '2020-01-04 09:39:01',
                'user_id' => 0,
            ),
            7 => 
            array (
                'created_at' => '2020-01-04 09:42:11',
                'description' => NULL,
                'id' => 9,
                'links' => '{"facebook":"https:\\/\\/www.facebook.com\\/groups\\/symfonian.indo","twitter":null,"telegram":"https:\\/\\/t.me\\/symfonyid","website":"http:\\/\\/symfonyid.github.io\\/#\\/home","github":"https:\\/\\/github.com\\/SymfonyId"}',
                'logo' => 'symfony-framework-indonesia.jpeg',
                'logo_bg' => '#FE0000',
                'member' => '2052',
                'name' => 'Symfony Framework Indonesia',
                'short_description' => 'Komunitas Framework Symfony Indonesia',
                'updated_at' => '2020-01-04 09:42:11',
                'user_id' => 0,
            ),
            8 => 
            array (
                'created_at' => '2020-01-04 09:47:42',
                'description' => NULL,
                'id' => 10,
                'links' => '{"facebook":"https:\\/\\/www.facebook.com\\/groups\\/nodejsid\\/","twitter":null,"telegram":"https:\\/\\/t.me\\/js_id","website":null,"github":null}',
                'logo' => 'nodejs-indonesia.jpg',
                'logo_bg' => NULL,
                'member' => '15400',
                'name' => 'Node.js Indonesia',
                'short_description' => 'Komunitas Developer Node.js Indonesia',
                'updated_at' => '2020-01-04 09:47:42',
                'user_id' => 0,
            ),
            9 => 
            array (
                'created_at' => '2020-01-04 09:52:11',
                'description' => NULL,
                'id' => 11,
                'links' => '{"facebook":"https:\\/\\/www.facebook.com\\/groups\\/485013421637081\\/","twitter":null,"telegram":"https:\\/\\/t.me\\/indonesiaionic","website":null,"github":null}',
                'logo' => 'ionic-indonesia.jpg',
                'logo_bg' => NULL,
                'member' => '5700',
                'name' => 'Ionic Indonesia',
                'short_description' => 'Komunitas Ionic Framework Indonesia',
                'updated_at' => '2020-01-04 09:52:11',
                'user_id' => 0,
            ),
            10 => 
            array (
                'created_at' => '2020-01-04 09:56:50',
                'description' => NULL,
                'id' => 12,
                'links' => '{"facebook":"https:\\/\\/www.facebook.com\\/groups\\/wp.indonesia\\/","twitter":null,"telegram":"https:\\/\\/t.me\\/idwordpress","website":"https:\\/\\/wp-id.org\\/","github":"https:\\/\\/github.com\\/wp-id\\/"}',
                'logo' => 'wordpress-indonesia.png',
                'logo_bg' => NULL,
                'member' => '41972',
                'name' => 'WordPress Indonesia',
                'short_description' => 'Komunitas WordPress Indonesia',
                'updated_at' => '2020-01-06 04:51:06',
                'user_id' => 0,
            ),
            11 => 
            array (
                'created_at' => '2020-01-04 09:58:54',
                'description' => NULL,
                'id' => 13,
                'links' => '{"facebook":"https:\\/\\/www.facebook.com\\/groups\\/462764390497214\\/","twitter":null,"telegram":"https:\\/\\/t.me\\/AngularID","website":"https:\\/\\/angular-indonesia.github.io\\/","github":"https:\\/\\/github.com\\/angular-indonesia"}',
                'logo' => 'angular-indonesia.png',
                'logo_bg' => NULL,
                'member' => '10501',
                'name' => 'Angular Indonesia',
                'short_description' => 'Komunitas Developer Angular Indonesia',
                'updated_at' => '2020-01-04 09:58:54',
                'user_id' => 0,
            ),
        ));
        
        
    }
}