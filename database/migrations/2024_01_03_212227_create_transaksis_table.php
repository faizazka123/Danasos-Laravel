<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transaksis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('nip')->constrained(
                table: 'users', column: 'nip', indexName: 'fknip'
            );
            $table->string('jenis_transaksi');
            $table->string('kategori_transaksi');
            $table->date('tanggal_transaksi');
            $table->date('tanggal_jatuhtempo');
            $table->integer('jumlah');
            $table->string('deskripsi')->nullable;
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transaksis');
    }
};
