# TypeScript Compiler

## Target

`target`: **menentukan bagaimana TypeScript mengkompilasi sintaks** menjadi JavaScript yang sesuai dengan versi ECMAScript tertentu.

Gunakan `target` untuk **menentukan versi ECMAScript yang perlu didukung** oleh environment kita. Misalnya, jika kita menargetkan browser lama, gunakan `"ES5"`, tetapi untuk aplikasi modern, gunakan versi yang lebih baru seperti `"ES6"`, `"ES2020"`, atau `"ES2022"`.

## lib

`lib`: **menentukan library API atau fitur environment yang tersedia** untuk digunakan dalam kode TypeScript. Jika kita tidak mengatur `lib`, TypeScript akan secara otomatis memilih library berdasarkan nilai dari `target`. Misalnya, jika target diatur ke `"ES6"`, maka TypeScript secara otomatis menggunakan library ES6 (termasuk: `"dom"`, `"es6"`, `"dom.iterable"`, `"scripthost"`).

Saat kita menetapkan versi `lib` yang lebih tinggi, **TypeScript otomatis menyertakan fitur-fitur dari versi sebelumnya**. Jadi, jika Anda mengatur `lib` ke `"ES2022"`, itu sudah mencakup semua fitur yang ada dalam `"ES2015"`, `"ES2016"`, hingga `"ES2022"`.

Jadi, meskipun kita misalnya mengatur target ke `"ES5"`, kita masih bisa menggunakan beberapa fitur modern seperti `Promise` atau `Map`, selama kita menambahkan library modern secara eksplisit di properti `lib`.
.
