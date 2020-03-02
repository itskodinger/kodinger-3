# Tentang Konten

Sebelum membuat konten, kamu harus memamahi "konten" yang terdapat di Kodinger.

---

Pada dasarnya, Kodinger dibangun untuk berbagi pengetahuan yang kami miliki. Namun, seiring perkembangan Kodinger dan ini adalah kali ke-3 kami merancang ulang situs Kodinger ini, maka terciptalah ide untuk membuat sesuatu yang memungkinkan orang lain berbagi pengetahuannya – bukan hanya kami.

- [Bagaimana Cara Membuat Konten](#how-to-create-content)
- [Bagaimana Cara Mengisi Form](#how-to-fill-the-form)
- [Bagaimana Menyimpan Konten](#how-to-save-content)
- [Bagaimana Mempublikasikan Konten](#how-to-publish-content)
- [Menyunting Konten](#editing-content)
- [Mengatur Visibilitas Konten](#content-visibility)
- [Menghapus Konten](#deleting-content)

<a name="how-to-create-content"></a>
## Bagaimana Cara Membuat Konten?
1. Pastikan kamu sudah login
2. Klik tombol "Buat Konten" yang berada di atas dan di sisi kanan layar komputer kamu, atau mudahnya kamu dapat mengunjungi [halaman ini](https://kodinger.com/post)
3. Kamu akan melihat form dengan 2 bidang di dalamnya:
- Judul: isi bidang ini dengan judul konten yang ingin kamu buat
- Slug: slug bisa jadi mirip dengan judul, hanya saja slug menggunakan simbol "-" sebagai pemisah
4. Klik tombol "Simpan &amp; Lanjutkan"
5. Setelah berhasil, kamu akan melihat bidang lain di dalam form yang perlu diisi

Kamu masih bingung konten apa yang ingin kamu buat? Kamu bisa membaca [dokumen ini](design-content) untuk mencari ide konten untuk diterbitkan.

<a name="how-to-fill-the-form"></a>
## Bagaimana Cara Mengisi Form?
Setelah menginisialisasi konten, kamu perlu melengkapi beberapa bidang yang wajib diisi. Terdapat beberapa bidang di dalam form, diantaranya:

<a name="form-title"></a>
### Judul
Kita akan mulai dari bidang yang pertama lagi, yaitu judul. Bidang ini wajib diisi, kamu dapat mengisinya dengan judul konten yang hendak dibuat, misal: "Apa itu Headless CMS?", "Membuat tombol salin dengan Clipboard JS", atau semacam itu. Tidak ada *best-practice* dalam hal ini; kamu hanya perlu membuat judul yang relevan dengan konten yang akan dibahas.

Bidang ini wajib? **Ya**.

<a name="form-slug"></a>
### Slug
Bila kamu terbiasa dengan platform *blogging* seperti WordPress, mungkin bidang ini sudah kamu pahami. Sederhananya, bidang ini dapat kamu isi mirip seperti judul, namun ketimbang menggunakan karakter spasi sebagai pemisah, di dalam slug kamu harus menggunakan simbol "-" sebagai pemisah. Tenang, kamu tidak perlu mengubah spasi menjadi simbol "-" secara manual, kami sudah mengatasinya secara otomatis.

Pada dasarnya, slug akan terisi otomatis ketika kamu mengetik judul konten di dalam bidang judul, namun, ketika kamu ingin mengubah slug berbeda dengan judul, maka ketika kamu mengubah judul konten di dalam bidang judul, maka slug tidak akan otomatis terisi lagi, karena slug sudah dalam kondisi "*dirty*"; sehingga kamu perlu mengubahnya secara manual lagi.

Bidang ini wajib? **Ya**.

<a name="form-tags"></a>
### Topik
Topik mirip dengan penggunaan tagar di sosial media, namun, di sosial media kamu tidak diwajibkan menggunakan tagar, di sini kamu diwajibkan mengisi minimal satu topik dan maksimal 5 topik. Topik memudahkan pengguna lain mencari konten yang kamu publikasikan. 

Sebagai contoh, bila kamu sedang membahas tentang *library* JavaScript untuk membuat carousel, maka kamu dapat memberikan topik: `library`, `javascript`, `front-end`, dan topik yang relevan lainnya.

Bidang ini wajib? **Ya**.

<a name="form-design-keyword"></a>
### Design Keyword
Bila mendengar kata *keyword* mungkin kamu akan mengingat tentang SEO, di sini bukan tentang SEO. Design keyword kami gunakan sebagai kata kunci untuk mencari inspirasi desain di 3 situs populer: Dribbble, Behance, dan Uplabs. Sebagai contoh, ketika kamu sedang membahas *library* JavaScript untuk membuat *modal*, maka kamu dapat mengisi bidang ini dengan nilai: modal. Sistem kami akan menggenerasi URL ke tiga situs tersebut, salah satunya: `https://dribbble.com/search/modal`.

Bidang ini wajib? **Tidak**.

<a name="form-media"></a>
### Media
Format konten di sini berbeda dengan platform *blogging* biasanya. Kami mengedepankan visual, bagaimana mendeskripsikan suatu teknologi hanya dalam beberapa slide media (gambar atau video). Tujuannya tidak sampai memberi pemahaman secara mendalam, setidaknya pembaca paham masalah apa yang diatasi oleh teknologi tersebut, sehingga pembaca akan memiliki minat untuk mempelajarinya lebih dalam – pendeknya seperti *tl;dr*. 

Sering kami jumpai, pembaca sudah membaca artikel yang begitu panjang, namun masih tidak paham teknologi tersebut sebenarnya mengatasi masalah apa, berangkat dari sini kami tertarik untuk  memperbaiki hal semacam itu.

Bidang ini dapat kamu isi dengan beberapa gambar atau video, masing-masing *file* maksimal berukuran **10MB**. Kami tidak membatasi berapa gambar atau video yang dapat kamu unggah, tapi biasanya kami hanya memerlukan 9 gambar dan 1 video untuk menjelaskan sesuatu – seperti di Instagram.

Pada dasarnya, masing-masing gambar atau video dapat kamu berikan keterangan atau deskripsi. Namun, seringnya, kamu hanya ingin mengisi satu keterangan saja untuk semua slide (gambar atau video); untuk mengaktifkan fitur ini, kamu perlu menceklis opsi "Single Caption" setelah mengunggah semua media.

<a name="supported-images"></a>
#### Gambar yang didukung: 
- PNG
- JPEG
- BMP
- PNG
- WEBP
- SVG

<a name="supported-videos"></a>
#### Video yang didukung:
- MP4
- WEBM
- OGG

Bidang ini wajib? **Ya, minimal satu slide**.

<a name="form-links"></a>
### Tautan
Ketika kamu membahas suatu *library*, *framework*, bahasa pemrograman, atau teknologi lainnya, kamu perlu mencantumkan beberapa jenis tautan:

#### Referensi
Tautan yang kamu masukkan di sini adalah URL dari sebuah web yang kamu gunakan sebagai referensi membuat konten, URL dari sebuah web yang dapat digunakan oleh pembaca untuk mempelajari teknologi yang sedang dibahas lebih dalam, dan URL halaman resmi dari teknologi tersebut. Contohnya, URL repositori, halaman *landing page*, atau semacam itu.

#### Tutorial
Tautan jenis ini dapat kamu isi dengan URL dari sebuah blog pribadi atau orang lain yang membuat sebuah tutorial dari teknologi yang sedang dibahas. Misal, kamu sedang membahas sebuah *framework* CSS, maka kamu dapat mengisinya dengan URL dari sebuah blog pribadi atau orang lain yang berisi tutorial tentang *framework* CSS tersebut.

#### Komunitas
Tautan ini diisi dengan URL yang dapat pembaca gunakan sebagai tempat bertanya atau troubleshooting. Misal, kamu sedang membahas sebuah *library*, maka kamu dapat mengisinya dengan URL dari sebuah GitHub issue *library* tersebut, URL pencarian StackOverflow, dan URL komunitas lainnya.

#### Demo
Tautan ini dapat kamu isi dengan URL yang dapat pembaca akses dan melihat contoh implementasi dari suatu teknologi yang sedang dibahas. Misal, kamu sedang membahas sebuah *library* JavaScript untuk membuat *lightbox*, maka kamu dapat mengisinya dengan URL yang berisi contoh implementasi *library* tersebut, seringnya diisi dengan URL dari CodePen, JSFiddle atau platform semacam itu.

Semua tautan tidak wajib diisi, tapi **sangat direkomendasikan** diisi untuk membuat konten yang berkualitas.


<a name="how-to-save-content"></a>
## Bagaimana Menyimpan Konten?
Ketika kamu sudah menginisialisasi konten (mengisi judul dan slug) dan menyimpannya, sistem sudah menjalankan fitur *auto-save* untuk menjaga data di dalam konten kamu agar tetap *up-to-date*. Fitur *auto-save* akan berjalan ketika kamu melakukan perubahan di suatu bidang, entah itu judul, slug, topik, atau bidang lainnya. 

Fitur ini akan mengirim data yang berubah tadi ke *back-end* setelah menghitung mundur 10 detik (bila tidak ada perubahan lagi di bidang lain), bila ada perubahan lagi di bidang lain, fitur ini akan menghitung mundur 10 detik dari awal lagi. Kamu dapat menyimpannya secara langsung (tanpa harus menunggu 10 detik) dengan cara menekan tombol kombinasi di papan ketik: `Ctrl+S` untuk sistem operasi Windows dan Linux, atau `Command+S` untuk sistem operasi Mac.

<a name="how-to-publish-content"></a>
## Bagaimana Mempublikasikan Konten
Perlu kamu ingat, konten yang kamu buat pada dasarnya memiliki status `draft` yang berarti konten kamu tidak dapat dilihat oleh siapapun. Kami menerapkan konsep ini untuk menjaga konten yang masih berantkan agar tidak dapat dilihat oleh siapapun. Untuk mempublikasikannya, kamu hanya perlu menekan tombol "Terbitkan Konten" yang berada di atas dan di sisi kanan layar komputer kamu. 

**Catatan:** konten yang sudah diterbitkan atau dipublikasikan akan dapat diakses oleh siapapun dengan cara apapun. Kamu dapat mengatur visibilitas konten di bagian berikutnya.

<a name="editing-content"></a>
## Menyunting Konten
Ketika kamu menjeda untuk membuat konten, seringkali kamu menutup tab halaman untuk membuat konten tersebut. Atau kondisi lainnya, kamu ingin menyunting untuk memperbarui data yang ada di dalam konten yang sudah terbit. 

Untuk itu kamu dapat menyunting konten yang sudah terbit atau masih draf, dengan cara:

1. Pergi ke halaman dasbor pengguna (https://kodinger.com/@nama_pengguna_kamu), di halaman tersebut akan tampil semua konten yang kamu miliki
2. Cari konten yang hendak disunting
3. Klik tombol diskusi atau klik gambar pada konten untuk menuju ke halaman detail konten
4. Di samping kanan atas terlihat bagian opsi, di sana terdapat 2 tombol: Sunting dan Hapus
5. Klik tombol "Sunting" dan kamu akan diarahkan ke halaman penyuntingan konten

Di halaman ini kamu dapat menyunting apapun yang ada di konten kamu, sama seperti ketika kamu membuat konten tersebut pertama kali.

<a name="content-visibility"></a>
## Mengatur Visibilitas Konten
Saat ini, setiap konten hanya memiliki 2 jenis status: `draft` dan `publish`. Kamu dapat mengatur visibilitas konten yang sudah diterbitkan, klik tombol "Sunting" pada konten yang kamu hendak atur; lalu pergi ke bagian paling bawah pada halaman edit konten, kamu akan melihat bagian "Visibilitas"; ceklis opsi "Sembunyikan Konten" untuk mengatur konten menjadi `draft`. Ketika konten sudah menjadi `draft` kamu dapat menerbitkannya kembali dengan cara yang ada di bagian sebelumnya.

<a name="deleting-content"></a>
## Menghapus Konten
Ketika kamu mengubah status konten menjadi `draft`, itu berarti data konten masih berada di dalam basis data sistem, hanya saja tidak dapat diakses oleh publik. Berbeda dengan mengatur visibilitas konten, menghapus konten sama dengan menghilangkan dan menghancurkan data konten di dalam basis data sistem, itu berarti konten yang sudah dihapus tidak dapat kamu kembalikan. 

Untuk menghapus konten, kamu dapat mengikuti langkah-langkah ini:

1. Pergi ke halaman dasbor pengguna (https://kodinger.com/@nama_pengguna_kamu), di halaman tersebut akan tampil semua konten yang kamu miliki
2. Cari konten yang hendak dihapus
3. Klik tombol diskusi atau klik gambar pada konten untuk menuju ke halaman detail konten
4. Di samping kanan atas terlihat bagian opsi, di sana terdapat 2 tombol: Sunting dan Hapus
5. Klik tombol "Hapus" dan kamu akan diarahkan ke halaman konfirmasi penghapusan konten
6. Klik tombol "Hapus" untuk mengonfirmasi penghapusan konten dan konten akan dihapus secara permanen

**Catatan:** pikirkan ulang sebelum melakukan aksi ini, karena kamu tidak dapat mengembalikan konten yang sudah dihapus.

<a name="best-practice-content"></a>
## Best Practice

Setelah membaca halaman ini, sangat disarankan kamu untuk membaca halaman tentang tips-tips membuat konten yang baik dan sesuai kaidah Kodinger. Silahkan pergi ke [halaman ini](create-content). Selain itu, kamu juga dapat mempelajari cara [mendesain konten dengan Figma](design-content) di sini.
