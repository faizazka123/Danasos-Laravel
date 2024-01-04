<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoretransaksiRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation()
    {

    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nip' => 'exists:users,nip',
            'jenis_transaksi' => 'string',
            'kategori_transaksi' => 'string|required',
            'tanggal_transaksi' => 'nullable|date',
            'jumlah' => 'integer|required',
            'deskripsi' => 'nullable|string',
            'bukti' => 'nullable',
            'status' => 'nullable',
        ];
    }
}
