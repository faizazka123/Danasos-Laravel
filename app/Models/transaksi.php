<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class transaksi extends Model
{
    use HasFactory;

    protected $fillable = ['nip', 'jenis_transaksi', 'kategori_transaksi', 'tanggal_transaksi', 'jumlah', 'bukti', 'deskripsi', 'status'];
}
