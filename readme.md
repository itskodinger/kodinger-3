# Kodinger 3
Kodinger 3 merupakan project dari tim Kodinger untuk refactoring website utama Kodinger.com. Kodinger 3 juga menjadi major change selanjutnya yang kami lakukan. Bukan hanya meredesain antarmuka, Kodinger juga akan merubah konsep dari website sebelumnya menjadi website komunitas dan terbuka untuk siapa saja.

## Tasks
- Input post-post lama yang ada di IG (half)
- Quote comment system
- Mention comment system
- Notification system
- Messaging system (gak penting kayaknya)
- Community: daily bugs, daily tricks, show-off creation fun and more
- Filter by tag (done)
- User follow system (masih belum penting kayaknya)
- Allow other content creator to upload their design 
- User public profile (done)
- User dashboard (done)
- User badge (hmm, what?)
- Search post (ok, done)
- Save post (ok, done)
- Report post, comment, community
- ACL (ok,d one)
- Upvote post (done)
- Discover fetch
- Lazy-load image (done)
- Search (done)
- Off-canvasify overflow (bug) (done)
- Ajax to REST (endpoint) (done)
- Otomatis add image ke post ketika upload tanpa ID post (later)
- Otomatis update slug ketika `checkSlug`
- Simplify form.js's fetch function (ok)
- Send generated video thumbnail to the server (ok)
- Lazyload first video slide content (ok)
- Multi-line tags di post card harusnya kasih margin (ok)
- Add 'Tambah Baru' link di alert ketika post berhasil diterbitkan (done)
- Hide draft post from public (home, profile page, other places) (done)
- Page untuk daftar post draft
- Help page/documentation (ok)
- Markdown parser (post caption, comment reply) (ok)
- Auto-resize carousel (ok)
- More more more more

## RN & BUGS
- Read-mode (single page)
- Generate video thumbnail kadang bug – kalo ukuranya gede (maybe), eh tapi kalo ukurannya kecil juga kadang gak bisa lho
- Upload multiple media kadang beberapanya gagal kalo ada aktivitas XHR lain (input tag, atau auto save) (hold)
- Apakah memungkinkan untuk menambah post di mobile? (hold)
- Perbaiki layout di mobile (hold)
- Lebih bagus kalo bisa ekstrak teks dan url dari gambar, ini bisa pakai tesseract or something (hold)
- Image cropper (create content page) (hold)
- Upgrade server!!!! 
- Ganti cloud storage!!!!

## Setup
- Add the `MIX_PROXY=your_proxy_here.test` key-value to your `.env`