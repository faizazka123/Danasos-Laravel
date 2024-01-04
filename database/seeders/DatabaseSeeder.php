<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory()->create([
        //     'nip' => 111,
        //     'nama' => 'Muhammad Faiz Azka',
        //     'email' => 'faiz22ti@mahasiswa.pcr.ac.id',
        //     'role' => 'Dosen',
        //     'created_at' => Carbon::now(),
        //     'updated_at' => Carbon::now(),
        // ]);

        User::create([
            'nip' => 111,
            'nama' => 'Muhammad Faiz Azka',
            'email' => 'faiz22ti@mahasiswa.pcr.ac.id',
            'password' => bcrypt('faiz22ti@mahasiswa.pcr.ac.id'),
            'role' => 'Dosen',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        User::create([
            'nip' => 112,
            'nama' => 'Dharma Putra Pratama',
            'email' => 'dharma22ti@mahasiswa.pcr.ac.id',
            'password' => bcrypt('dharma22ti@mahasiswa.pcr.ac.id'),
            'role' => 'Kaprodi',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        User::create([
            'nip' => 113,
            'nama' => 'Rijalul Ghodi Almunawwar',
            'email' => 'rijalul22ti@mahasiswa.pcr.ac.id',
            'password' => bcrypt('rijalul22ti@mahasiswa.pcr.ac.id'),
            'role' => 'Dosen',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        User::create([
            'nip' => 114,
            'nama' => 'Tionida Valerie',
            'email' => 'tionida22ti@mahasiswa.pcr.ac.id',
            'password' => bcrypt('tionida22ti@mahasiswa.pcr.ac.id'),
            'role' => 'Bendahara',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
