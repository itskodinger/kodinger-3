# Tentang Markdown 

Dewasa ini, banyak sekali *platform* yang menggunakan Markdown untuk format penulisannya, termasuk kami.

---

Kami menggunakan Markdown untuk format penulisan. Sebagai *programmer*, mayoritas dari kita sudah mengenal Markdown, atau bahkan sudah menguasainya. Tapi, untuk pendatang baru atau *programmer* yang baru belajar, mungkin belum pernah menulis Markdown atau bahkan kenal saja tidak.

- [Apa Itu Markdown?](#what-is-markdown)
- [Sintaksis Markdown Yang Didukung Kodinger](#supported-markdown)

<a name="what-is-markdown"></a>
## Apa Itu Markdown?
Mengutip dari [Wikipedia][0], Markdown adalah bahasa markah ringan dengan sintaksis pemformatan teks polos. Bahasa markah ini dirancang agar bisa dikonversi menjadi HTML dan banyak format lainnya menggunakan alat yang memiliki nama yang serupa. 

Sederhananya, Markdown merupakan bahasa *markup* yang memiliki sintaksis sederhana dan dapat kamu konversi menjadi berkas HTML, PDF atau format berkas lainnya.

Contoh sintaksis Markdown:
```markdown
# Judul

Saya adalah paragraf

List:
- Apel
- Jeruk
- Mangga
```

Markdown di atas bila dikonversi ke HTML akan menjadi seperti ini:

# Judul

Saya adalah paragraf

List:
- Apel
- Jeruk
- Mangga

<a name="supported-markdown"></a>
## Sintaksis Markdown Yang Didukung Kodinger

Setiap *platform* yang menggunakan Markdown, biasanya memiliki "cita rasa" sendiri. Misalnya, ketika kamu menulis berkas `readme.md` di GitHub, kamu dapat membuat tautan dengan sintaksis seperti ini:

```markdown
[Link](http://blabla.com)
```

Sedangkan di Kodinger (pada caption post), kamu tidak dapat menggunakan sintaksis di atas untuk membuat tautan. 

Pada dasarnya kami mendukung semua sintaksis yang ada pada Markdown kecuali beberapa sintaksis saja. Beberapa sintaksis yang tidak kami dukung, diantaranya:
- Link
- Table
- Image
- Kode HTML (kecuali di dalam kode blok atau kode inline)
- H1 (# Header)
- H2 (## Header)
- H3 (### Header)
- H4 (#### Header)

Pada saat memberikan keterangan pada gambar/video yang terdapat di konten yang kamu buat, kamu tidak bisa menggunakan beberapa sintaksis Markdown di atas. Begitpula pada komentar, kamu juga tidak dapat menggunakan sintaksis Markdown di atas, tapi, kami akan –secara otomatis– menerjemahkan URL di dalam isi komentar menjadi *clickable link*.

Bila terdapat satu atau semua sintaksis yang tidak kami dukung di dalam komentar atau keterangan gambar konten, kami tidak akan menerjemahkannya menjadi apapun, kecuali menampilkannya dengan format yang **tidak** berbeda.

[0]: https://id.wikipedia.org/wiki/Markdown