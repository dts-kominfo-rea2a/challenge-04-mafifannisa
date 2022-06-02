# Tantangan: JS Fungsi - Part 2

Pada tantangan ini Anda diberikan sebuah kasus yang harus Anda selesaikan.

Case:

Diberikan sebuah data berupa `array of string` sebagai berikut:
```js
[
  "2019-01-02",
  "2022-05-06 00:00:00 UTC-2",
  "2021-03-04 07:00:00 UTC",
  "2021-04-05 00:00:00 UTC+2",
  "2020-02-03 UTC+7",
]
```

Buatlah sebuah fungsi dengan nama `sortDate` yang akan menerima argument `array of string` yang diberikan di atas, dan `posisi` ke berapa yang akan dicari, dan akan mengembalikan nilai berupa `string` tanggal yang dicari dengan format epoch time dalam second (`BUKAN` millisecond)

Apabila `posisi` tidak diberikan, maka akan mencetak semuanya dan sudah terurut berdasarkan angka epoch time tersebut, dalam `string` epoch time second juga.

Contoh:
- asumsi nama dari array adalah `dates`
- `createDate(dates, 1)` akan mengembalikan `'1651802400'`
- `createDate(dates, 3)` akan mengembalikan `'1617573600'`
- `createDate(dates)` akan mengembalikan `'1546387200-1580662800-1614841200-1617573600-1651802400'`

Ketentuan:
- Gunakan built-in function semaksimal mungkin
- Sangat diperbolehkan menggunakan logic dan looping
- Tidak boleh menggunakan package tambahan lainnya (pure JS)
- Tidak boleh menggunkan `Temporal API`