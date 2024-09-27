- [1. TypeScript types](#1-typescript-types)
  - [1.1. Types Assignments \& Types Inference](#11-types-assignments--types-inference)
  - [1.2. Object di TypeScript: Cara Kerja dan Best Practices](#12-object-di-typescript-cara-kerja-dan-best-practices)
  - [1.3. Array di TypeScript: Cara Kerja dan Best Practices](#13-array-di-typescript-cara-kerja-dan-best-practices)
  - [1.4. Tuple di TypeScript](#14-tuple-di-typescript)
  - [1.5. Enum di TypeScript](#15-enum-di-typescript)
    - [1.5.1. Kapan Menggunakan Enum?](#151-kapan-menggunakan-enum)
    - [1.5.2. Numeric vs. String Enum](#152-numeric-vs-string-enum)
    - [1.5.3. Best Practices Menggunakan Enum di Typescript](#153-best-practices-menggunakan-enum-di-typescript)
  - [1.6. Any Type di TypeScript](#16-any-type-di-typescript)
    - [1.6.1. Penggunaan `any`](#161-penggunaan-any)
    - [1.6.2. Kenapa Harus Menghindari `any`?](#162-kenapa-harus-menghindari-any)
    - [1.6.3. Alternatif `any`](#163-alternatif-any)
    - [1.6.4. Best Practices untuk `any`](#164-best-practices-untuk-any)
  - [1.7. Union Type di TypeScript](#17-union-type-di-typescript)
    - [1.7.1. Kapan Union Types Digunakan?](#171-kapan-union-types-digunakan)
    - [1.7.2. Pengecekan Tipe dengan Union](#172-pengecekan-tipe-dengan-union)
    - [1.7.3. Union Type dengan Array](#173-union-type-dengan-array)
    - [1.7.4. Best Practices](#174-best-practices)
  - [1.8. Literal Type di TypeScript](#18-literal-type-di-typescript)
  - [1.9. Aliases Type di TypeScript](#19-aliases-type-di-typescript)
    - [1.9.1. Penggunaan Type Aliases dengan Object Types](#191-penggunaan-type-aliases-dengan-object-types)
    - [1.9.2. Type Aliases untuk Function Types](#192-type-aliases-untuk-function-types)
    - [1.9.3. Intersection Types dengan Type Aliases](#193-intersection-types-dengan-type-aliases)
    - [1.9.4. Type Aliases vs. Interface](#194-type-aliases-vs-interface)
    - [1.9.5. Best Practices untuk Type Aliases](#195-best-practices-untuk-type-aliases)
  - [1.10. Function Return \& "Void" Types](#110-function-return--void-types)
    - [1.10.1. Fungsi dengan Return Tipe dan `void`](#1101-fungsi-dengan-return-tipe-dan-void)
    - [1.10.2. Best Practices](#1102-best-practices)
  - [1.11. Function as Types](#111-function-as-types)
    - [1.11.1. Function Type dengan Parameter Optional](#1111-function-type-dengan-parameter-optional)
    - [1.11.2. Function Type dalam Object](#1112-function-type-dalam-object)
    - [1.11.3. Contoh Kompleks Penggunaan Function Type](#1113-contoh-kompleks-penggunaan-function-type)
    - [1.11.4. Best practice Function Type](#1114-best-practice-function-type)
  - [1.12. Unknown Type di TypeScript](#112-unknown-type-di-typescript)
    - [1.12.1. Best Practices untuk `unknown` type](#1121-best-practices-untuk-unknown-type)
  - [1.13. Never Type di TypeScript](#113-never-type-di-typescript)
    - [1.13.1. Perbedaan Utama `never` type dan `avoid` type](#1131-perbedaan-utama-never-type-dan-avoid-type)
    - [1.13.2. Best Practice Penggunaan `never`:](#1132-best-practice-penggunaan-never)

# 1. TypeScript types

Tipe (**types**) memungkinkan untuk mendeteksi jika data bertipe salah digunakan atau disebarkan, sehingga kita dapat menghindari error runtime yang tidak terduga.

Kunci perbedaannya adalah bahwa: JavaScript menggunakan _Dynamic types_ (diselesaikan saat runtime), sedangkan TypeScript menggunakan _Static types_ (ditetapkan selama development).

TypeScript mengetahui lebih banyak _types_ daripada JavaScript.

Beberapa contoh tipe inti di TypeScript:

1. `number`: semua angka, tidak ada perbedaan antara bilangan bulat dan float. Contoh: 1, 5.4, -10, dll.
2. `string`: semua nilai teks. Contoh: 'hi', "hi", `hi`.
3. `boolean`: hanya `true` dan `false` saja. Tidak untuk nilai "truthy" atau "falsy".
4. `object`: tipe (tipe object) yang lebih pesifik dimungkinkan.
5. `array`: mendukung setiap array di JavaScript, dan array tersebut bisa fleksibel atau ketat.
6. `tuple`: sebuah array khusus dengan panjang yang tetap.
7. `enum`: tipe yang ditambahkan oleh TypeScript yang secara otomatis memberikan identifikasi global konstan.
8. `any`: tipe yang fleksibel yang memungkinkan untuk menentukan nilai apapun. Berhati-hatilah dalam menggunakan tipe ini, karena akan menghilangkan manfaat dari TypeScript.

> _Type primitive_ inti di TypeScript semuanya huruf kecil. misalnya:
>
> Tipe `number`, `string`, dll. Tidak sama dengan `Number`, `String`.

## 1.1. Types Assignments & Types Inference

**Type assignment** di TypeScript adalah proses eksplisit di mana kita secara langsung menentukan tipe data untuk variabel, fungsi, atau parameter. Contohnya:

```typescript
let age: number = 25;
```

> Gunakan _assignment type_ hanya ketika tidak menentukan nilainya, namun dengan tetap menyertakan tipe dari nilai yang diharapkan. Contoh:
>
> ```typescript
> let age: number;
> ```

**Type inference** adalah mekanisme otomatis di mana TypeScript secara implisit menentukan tipe data berdasarkan nilai awal yang diberikan, tanpa perlu menyebutkan tipe secara eksplisit. Contohnya:

```typescript
let name = "John"; // TypeScript otomatis menganggap tipe 'string'
```

## 1.2. Object di TypeScript: Cara Kerja dan Best Practices

1. Deklarasi Objek dengan Tipe Spesifik

   Di TypeScript, kita dapat mendefinisikan objek dengan tipe tertentu menggunakan `interface` atau `type`. Ini memberikan kejelasan mengenai bentuk dan properti yang harus ada dalam objek tersebut.

   _Best Practice_: Lebih disarankan menggunakan `interface` untuk objek yang dapat di-extend dan `type` untuk tipe yang lebih kompleks (misalnya _union types_ atau _tuple_).

   Contoh menggunakan `type`:

   ```typescript
   type User = {
     name: string;
     age: number;
     isActive: boolean;
   };

   const user: User = {
     name: "Alice",
     age: 25,
     isActive: true,
   };
   ```

   Contoh menggunakan `interface`:

   ```typescript
   interface User {
     name: string;
     age: number;
     isActive: boolean;
   }

   const user: User = {
     name: "Alice",
     age: 25,
     isActive: true,
   };
   ```

2. Properti Opsional di Objek (`?`)

   TypeScript memungkinkan untuk mendefinisikan properti opsional menggunakan tanda `?`. Properti ini dapat ada atau tidak, tanpa menimbulkan error.

   _Best Practice_: Gunakan properti opsional dengan hati-hati untuk menjaga konsistensi data dan menghindari bug runtime.

   Contoh:

   ```typescript
   interface User {
     name: string;
     age?: number; // age opsional
   }

   const user1: User = { name: "Alice" };
   const user2: User = { name: "Bob", age: 30 };
   ```

3. Readonly Properties

   Kita bisa membuat properti objek hanya-baca (`readonly`) agar tidak bisa diubah setelah didefinisikan.

   Contoh:

   ```typescript
   interface User {
     readonly id: number;
     name: string;
   }
   const user: User = { id: 1, name: "Alice" };
   // user.id = 2; // Error: id is readonly
   ```

4. Index Signatures (untuk objek dinamis)

   Jika objek memiliki properti dinamis yang nama propertinya tidak diketahui sebelumnya, gunakan _index signature_. Ini memungkinkan objek memiliki properti dengan nama apa saja, tetapi tetap menjaga tipe datanya.

   Contoh:

   ```typescript
   interface User {
     name: string;
     [propName: string]: any; // index signature
   }
   const user: User = { name: "Alice", age: 30, address: "123 Main St" };
   ```

5. Utility Types

   TypeScript menyediakan utility types yang memudahkan untuk membuat tipe yang lebih kompleks, seperti `Partial`, `Pick`, dan `Omit`. Utilitas tersebut dapat mempermudah manipulasi tipe objek tanpa perlu mendefinisikan ulang tipe yang kompleks.

   `Partial<T>`: Membuat semua properti menjadi opsional.

   `Pick<T, K>`: Memilih subset properti dari tipe objek.

   `Omit<T, K>`: Menghilangkan properti tertentu dari tipe objek

   Contoh:

   ```typescript
   interface User {
     name: string;
     age: number;
     isActive: boolean;
   }

   // Partial
   const userPartial: Partial<User> = { name: "Alice" }; // Properti lain bisa tidak ada

   // Pick
   const userPick: Pick<User, "name" | "age"> = { name: "Alice", age: 25 };

   // Omit
   const userOmit: Omit<User, "age"> = { name: "Alice", isActive: true };
   ```

6. Nullable Properties

   Jika properti objek bisa `null` atau `undefined`, kita bisa mendeklarasikannya dengan tipe campuran.

   Contoh:

   ```typescript
   interface User {
     name: string;
     age: number | null; // Bisa null
   }
   const user: User = { name: "Alice", age: null };
   ```

7. Default Parameters dan Object Destructuring

   Ketika menggunakan objek sebagai parameter fungsi, kita bisa menggunakan _object destructuring_ untuk menetapkan nilai default.

   Contoh:

   ```typescript
   interface User {
     name: string;
     age?: number;
   }

   function greet({ name, age = 30 }: User) {
     console.log(`Hello ${name}, you are ${age} years old.`);
   }

   greet({ name: "Alice" }); // Output: Hello Alice, you are 30 years old.
   ```

## 1.3. Array di TypeScript: Cara Kerja dan Best Practices

Dalam TypeScript, array bekerja dengan cara yang sangat mirip dengan JavaScript, namun dengan penambahan tipe data statis untuk memberikan keamanan dan kontrol lebih baik saat bekerja dengan koleksi data.

1. Deklarasi Array

   Di TypeScript, untuk mendeklarasikan array dapat dilakukan dengan dua cara utama:

   - Menggunakan tipe `T[]` (array tipe `T`):

     ```typescript
     let list: number[] = [1, 2, 3];
     ```

   - Menggunakan generik Array<T>:

     ```typescript
     let list: Array<number> = [1, 2, 3];
     ```

   Keduanya melakukan hal yang sama, tetapi pilihan mana yang digunakan tergantung pada preferensi atau gaya penulisan tim.

2. Array Multidimensi

   TypeScript juga mendukung array multidimensi:

   ```typescript
   let matrix: number[][] = [
     [1, 2],
     [3, 4],
   ];
   ```

3. Readonly Array

   Ketika ingin membuat array yang tidak bisa dimodifikasi setelah didefinisikan, penggunaan `readonly` pada array dapat digunakan:

   ```typescript
   let readonlyArray: readonly number[] = [1, 2, 3];
   // readonlyArray[0] = 10; // Error: tidak bisa mengubah elemen array
   ```

   Ini penting dalam proyek skala besar karena membantu menghindari mutasi data yang tidak disengaja.

4. Array Methods dengan Tipe yang Tepat

   Saat menggunakan metode array seperti `.map()`, `.filter()`, atau `.reduce()`, TypeScript secara otomatis mengasumsikan tipe yang benar berdasarkan tipe elemen array.

   Contoh penggunaan `map`:

   ```typescript
   let numbers: number[] = [1, 2, 3];
   let doubled = numbers.map((num) => num * 2); // `doubled` secara otomatis ditipekan sebagai `number[]`
   ```

   _Best practice_ di sini adalah memastikan bahwa metode array mengembalikan tipe yang sesuai, dan menggunakan tipe eksplisit hanya jika diperlukan.

5. Nullable Arrays

   Jika ingin array yang bisa berisi `null` atau `undefined`, kita bisa mendeklarasikannya dengan tipe campuran:

   ```typescript
   let arr: (number | null)[] = [1, null, 3];
   ```

   Gunakan tipe yang lebih jelas seperti `number[]`, `string[]`, atau _tuple_ untuk menghindari ketidakpastian tipe di dalam array.

_Best Practice_ Saat Bekerja dengan Array di TypeScript:

- **Gunakan Tipe Spesifik**: Jangan gunakan `any[]` jika tidak diperlukan. Tentukan tipe array yang jelas seperti `number[]`, `string[]`, atau _tuple_ untuk menghindari ketidakpastian tipe di dalam array.
- **Readonly untuk Immutability**: Gunakan `readonly` jika tidak ingin array dimodifikasi setelah didefinisikan. Ini membantu menghindari bug mutasi data.
- **Jangan Gunakan Array Dinamis Jika Tidak Diperlukan**: Jika kita tahu jumlah elemen atau tipe yang tetap, manfaatkan fitur _tuple_ dan `readonly`.

## 1.4. Tuple di TypeScript

Tipe ini (tuple) di tambahkan oleh TypeScript yang bisa dipertimbangkan dalam skenario di mana ketika kita membutuhkan **sekumpulan elemen dengan jumlah yang tetap** dan **tipe data yang berbeda-beda** untuk setiap elemen. Tuple memungkinkan untuk mengontrol jumlah dan tipe data pada setiap elemen dalam array dengan lebih ketat dibandingkan array biasa.

Tuple merupakan alat yang kuat untuk struktur data yang sederhana dan tetap, tetapi untuk struktur yang kompleks atau dinamis, sebaiknya gunakan objek atau array biasa dengan tipe yang lebih longgar.

Berikut beberapa skenario umum di mana tuple digunakan:

1. Merepresentasikan Nilai dengan Tipe Berbeda dalam Posisi Tetap

   Jika kita ingin menggabungkan berbagai tipe data menjadi satu struktur yang tetap urutannya, tuple sangat bermanfaat. Misalnya, ketika ingin menyimpan koordinat geografis dengan format `[latitude, longitude]`, atau menyimpan pasangan `id` dan `name`. Contoh:

   ```typescript
   let point: [number, number] = [10.5, -7.3]; // Representasi titik koordinat
   let user: [number, string] = [1, "Alice"]; // User ID dan nama
   ```

2. Pengembalian Multi-Value dari Fungsi

   Ketika sebuah fungsi perlu mengembalikan lebih dari satu nilai dengan tipe berbeda, tuple memberikan cara yang rapi untuk melakukannya tanpa harus membuat objek. Ini juga menjaga efisiensi. Contoh:

   ```typescript
   function getUser(): [number, string] {
     return [1, "Alice"];
   }

   const [id, name] = getUser();
   ```

3. Parameter Fungsi yang Memiliki Struktur Tetap

   Tuple sangat berguna ketika fungsi menerima parameter yang memiliki struktur tetap, seperti fungsi yang menerima nilai pasangan. Contoh:

   ```typescript
   function logCoordinates(coordinates: [number, number]) {
     console.log(`Latitude: ${coordinates[0]}, Longitude: ${coordinates[1]}`);
   }

   logCoordinates([10.5, -7.3]);
   ```

4. Menggunakan Tuple dalam Enum-like Structure

   Kita dapat menggunakan tuple untuk mendefinisikan semacam struktur seperti enum yang berisi tipe-tipe konstan dengan nilai yang tetap tetapi beragam tipenya. Contoh:

   ```typescript
   type Status = [number, string];

   const ACTIVE: Status = [1, "active"];
   const INACTIVE: Status = [0, "inactive"];
   ```

5. Interaksi dengan API atau Library yang Mengembalikan Data Berbentuk Tuple

   Beberapa library atau API mungkin mengembalikan data dalam bentuk tuple, terutama library fungsional atau matematis. Dengan menggunakan tuple, Anda dapat menjaga integritas struktur data tersebut. Contoh (dengan fungsi matematis):

   ```typescript
   let result: [boolean, number] = [true, 42];
   ```

6. Merepresentasikan Data CSV

   Jika bekerja dengan data seperti CSV di mana setiap baris memiliki tipe data yang berbeda pada kolom tertentu, tuple sangat cocok untuk merepresentasikan baris data tersebut.

   ```typescript
   let row: [number, string, boolean] = [1, "Alice", true];
   ```

   _Best Practices_ Tuple di Typescript:

   - **Kapan Menggunakan Tuple**: Gunakan tuple ketika memiliki urutan elemen dengan tipe yang tetap dan jumlah elemen yang pasti. Jika struktur data bersifat dinamis, sebaiknya gunakan objek atau array.
   - **Jaga Kejelasan**: Saat mendefinisikan tuple, usahakan memberikan komentar atau variabel yang menjelaskan maksud dari setiap elemen, karena tuple bisa kurang intuitif dibandingkan objek dengan nama properti.
   - **Hindari Penggunaan yang Berlebihan**: Jika jumlah elemen dalam tuple terlalu banyak (lebih dari 3-4), pertimbangkan menggunakan objek, karena tuple dengan banyak elemen bisa sulit dibaca dan dipelihara.

## 1.5. Enum di TypeScript

Enum adalah fitur yang ditambahkan oleh TypeScript untuk mendefinisikan **sekumpulan nilai konstan** yang diberi nama, baik dalam bentuk angka (_numeric enums_) atau string (_string enums_), yang bertujuan untuk membuat kode lebih mudah dibaca dan dipelihara. Enum dapat berguna dalam berbagai situasi, terutama ketika bekerja dengan sekumpulan opsi yang tetap dan terbatas.

Contoh Enum Angka (_Numeric Enum_):

```typescript
// `Up` akan diberi nilai 1, `Down` diberi nilai 2, dan seterusnya secara otomatis.
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;
```

Contoh Enum String (_String Enum_):

```typescript
// nilai enum didefinisikan secara eksplisit sebagai string.
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

let move: Direction = Direction.Up;
```

### 1.5.1. Kapan Menggunakan Enum?

- **Set Opsi yang tetap**: Enum sering digunakan ketika ada sekumpulan nilai yang sudah diketahui dan terbatas, seperti status, arah, mode, atau tingkat prioritas.
- **Meningkatkan Keterbacaan Kode**: Enum memberikan makna lebih pada angka atau string yang digunakan dalam kode. Misalnya `Direction.Up` lebih jelas daripada hanya menggunakan angka `1`.
- **Mencegah Kesalahan Penulisan**: Dengan enum, kita dapat menghindari kesalahan penulisan pada nilai konstan karena TypeScript akan memberikan error jika nilai yang didefinisikan tidak sesuai dengan salah satu anggota enum.

### 1.5.2. Numeric vs. String Enum

- **Numeric Enum**: Pada numeric enum, jika kita tidak memberikan nilai eksplisit, TypeScript akan otomatis memberikan nilai angka, dimulai dari `0` atau dari nilai yang kita tetapkan.
- **String Enum**: String enum lebih fleksibel dan sering kali lebih jelas dibandingkan numeric enum, karena kita dapat menghindari masalah pengubahan nilai ketika enum berubah.
- **Contoh Skenario**: Misalkan saat bekerja dengan status pekerjaan (`Pending`, `InProgress`, `Completed`), string enum lebih disarankan daripada numeric enum, karena lebih mudah diidentifikasi dan tidak bergantung pada urutan numerik.

  ```typescript
  enum JobStatus {
    Pending = "PENDING",
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED",
  }

  let currentStatus: JobStatus = JobStatus.Pending;
  ```

### 1.5.3. Best Practices Menggunakan Enum di Typescript

- **Enum vs. Union Types**: Pada beberapa kasus, lebih baik menggunakan "union types" daripada "enum". Union types lebih ringan dan memberikan lebih banyak manfaat dalam hal inferensi tipe.

  ```typescript
  type JobStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED";

  let currentStatus: JobStatus = "PENDING";
  ```

  Ketika kitatidak memerlukan fitur tambahan dari enum (seperti penggunaan reverse mapping pada numeric enum), union types sering kali lebih sederhana dan efisien.

- **Jangan Gunakan Enum Terlalu Berlebihan**: Enum cocok untuk sekumpulan nilai tetap yang kecil dan statis. Untuk sekumpulan nilai yang bisa berkembang atau berubah secara dinamis, pertimbangkan menggunakan struktur data lain seperti objek atau tipe lainnya.

## 1.6. Any Type di TypeScript

Tipe `any` digunakan untuk merepresentasikan tipe data apapun tanpa pembatasan tipe yang ketat. Secara singkat, `any` memberi fleksibilitas penuh untuk menyimpan nilai dari tipe apa saja, dan perilakunya menyerupai tipe dinamis pada JavaScript biasa. Namun, penggunaannya harus dilakukan secara hati-hati karena dapat mengurangi keuntungan utama TypeScript, yaitu tipe statis dan keamanan tipe.

### 1.6.1. Penggunaan `any`

- **Fleksibel Maksimal**: `any` memungkinkan untuk menonaktifkan pemeriksaan tipe oleh TypeScript, sehingga memberikan fleksibilitas maksimal untuk variabel atau properti yang bisa menampung tipe apa saja. Contoh:

  ```typescript
  let data: any;

  data = 10; // Number
  data = "hello"; // String
  data = [1, 2, 3]; // Array
  ```

- **Penggunaan Situasional**: Tipe `any` bermanfaat ketika bekerja dengan data yang tidak diketahui atau berubah-ubah, misalnya saat mengonsumsi data dari API eksternal yang strukturnya tidak diketahui.

### 1.6.2. Kenapa Harus Menghindari `any`?

- **Menghilangkan Keuntungan TypeScript**: Salah satu manfaat utama menggunakan TypeScript adalah sistem tipe statis yang meningkatkan keandalan kode dan membantu mencegah bug. Dengan menggunakan `any`, kita akan kehilangan manfaat tersebut.
- **Kurangnya Validasi Tipe**: Ketika variabel dideklarasikan dengan tipe `any`, TypeScript tidak akan memberikan error jika kita mengakses properti yang tidak ada atau melakukan operasi tidak valid. Ini bisa menyebabkan bug yang sulit dilacak.
- Contoh Potensi Bug:

  ```typescript
  let data: any = "hello";

  console.log(data.toFixed(2)); // Tidak ada error pada TypeScript, tetapi akan menghasilkan runtime error
  ```

### 1.6.3. Alternatif `any`

1. `unknown`: Sebagai alternatif yang lebih aman, `unknown` sering digunakan daripada `any`. Dengan `unknown`, mengharuskan untuk melakukan pengecekan tipe sebelum melakukan operasi apa pun.

   Contoh:

   ```typescript
   let data: unknown = "hello";

   if (typeof data === "string") {
     console.log(data.toUpperCase());
   }
   ```

2. **Typed Generics**: Dalam beberapa kasus, menggunakan generic types lebih disarankan daripada menggunakan any, terutama ketika tipe yang fleksibel tetapi aman diinginkan.

   Contoh:

   ```typescript
   function logData<T>(data: T): void {
     console.log(data);
   }
   ```

### 1.6.4. Best Practices untuk `any`

- **Minimalkan Penggunaan any**: Gunakan `any` hanya jika benar-benar diperlukan (Ketika tipe data tidak dapat diprediksi atau tidak diketahui sebelumnya) dan tidak ada alternatif yang lebih aman seperti `unknown`, `never`, atau tipe yang lebih spesifik.
- **Gunakan unknown Bila Mungkin**: unknown lebih aman dibandingkan `any` karena tetap memerlukan validasi tipe sebelum menggunakan nilai tersebut.
- **Gunakan any dalam Proses Migrasi atau Prototyping**: `any` dapat digunakan pada saat prototyping atau proses migrasi kode besar dari JavaScript ke TypeScript, tetapi sebaiknya dihapus atau diubah menjadi tipe yang lebih jelas setelah proyek berkembang.
- **Validasi Input**: Jika bekerja dengan input dari luar (seperti API eksternal), penting untuk melakukan validasi tipe agar tidak sepenuhnya bergantung pada `any`.

## 1.7. Union Type di TypeScript

Union types di TypeScript memungkinkan sebuah variabel untuk memiliki lebih dari satu tipe data. Ini berguna ketika suatu nilai dapat diisi dengan beberapa tipe berbeda dan kita ingin memberi tahu TypeScript tentang kemungkinan tersebut.

Union types menggunakan tanda `|` untuk menggabungkan beberapa tipe. Ini berarti variabel bisa berisi salah satu tipe yang ditentukan dalam union.

Contoh:

```typescript
let value: string | number;

value = "Hello"; // valid
value = 123; // valid
value = true; // Error, karena bukan string atau number
```

### 1.7.1. Kapan Union Types Digunakan?

Union types berguna ketika sebuah variabel atau fungsi bisa menerima lebih dari satu tipe data, misalnya:

- **Parameter fungsi yang beragam**: ketika fungsi harus bisa menangani beberapa tipe input. Contoh:

  ```typescript
  function printValue(value: string | number) {
    if (typeof value === "string") {
      console.log("This is a string: " + value);
    } else {
      console.log("This is a number: " + value);
    }
  }
  ```

- **API Responses**: API bisa mengembalikan berbagai tipe data tergantung pada konteks.

### 1.7.2. Pengecekan Tipe dengan Union

Karena TypeScript tidak mengetahui tipe spesifik dari variabel yang menggunakan union type, kita perlu melakukan pengecekan tipe di dalam fungsi menggunakan metode seperti `typeof` atau `instanceof`.

Contoh Pengecekan Tipe:

```typescript
function processId(id: string | number) {
  if (typeof id === "string") {
    console.log("String ID: " + id.toUpperCase());
  } else {
    console.log("Numeric ID: " + (id + 1));
  }
}
```

### 1.7.3. Union Type dengan Array

Kita juga bisa membuat union untuk array yang berisi beberapa tipe yang berbeda.

Contoh:

```typescript
let values: (string | number)[];

values = ["hello", 42]; // valid
```

### 1.7.4. Best Practices

- **Gunakan Union Types untuk Kejelasan Tipe**: Union types memungkinkan untuk mendefinisikan beberapa kemungkinan tipe dan tetap menjaga tipe statis.
- **Lakukan Pengecekan Tipe yang Tepat**: Selalu gunakan `typeof`, `instanceof`, atau custom checks untuk mempersempit tipe dan menghindari error.
- **Perhatikan Penggunaan dengan `null` atau `undefined`**: Jika suatu nilai mungkin `null` atau `undefined`, masukkan tipe tersebut dalam union dan lakukan pengecekan. Contoh:

  ```typescript
  let input: string | null;
  ```

## 1.8. Literal Type di TypeScript

Literal types di TypeScript memungkinkan untuk menentukan nilai spesifik sebagai tipe, alih-alih hanya menentukan tipe seperti `string` atau `number`. Dengan literal type, variabel hanya dapat mengambil satu atau lebih nilai tertentu yang diizinkan, mirip dengan membuat "konstanta" dalam tipe.

Literal types dapat digunakan dengan string, number, dan boolean. Ini memastikan bahwa variabel hanya dapat diatur ke salah satu niai literal yang diizinkan.

Contoh String Literal Types:

```typescript
let status: "success" | "failure" | "pending";

status = "success"; // valid
status = "failure"; // valid
status = "error"; // Error: 'error' bukan bagian dari literal types
```

Contoh Number Literal Types:

```typescript
let score: 1 | 2 | 3;

score = 2; // valid
score = 4; // Error: 4 bukan bagian dari literal types
```

Contoh Boolean Literal Types:

```typescript
let isValid: true | false;

isValid = true; // valid
isValid = false; // valid
isValid = 0; // Error: bukan boolean literal
```

Literal types juga sering digunakan dengan union types dalam fungsi. Ini berguna ketika fungsi hanya boleh menerima nilai-nilai tertentu dan tidak menerima tipe data lain yang tidak diizinkan. Contoh:

```typescript
function move(direction: "left" | "right" | "up" | "down") {
  console.log(`Moving ${direction}`);
}

move("left"); // valid
move("right"); // valid
move("forward"); // Error: 'forward' bukan bagian dari literal types
```

Kita juga bisa mengkombinasikan literal types dengan **type aliases** untuk meningkatkan keterbacaan kode, terutama ketika nilai literal yang digunakan lebih kompleks.

```typescript
type CardinalDirection = "north" | "south" | "east" | "west";

function navigate(direction: CardinalDirection) {
  console.log(`Navigating ${direction}`);
}

navigate("north"); // valid
navigate("east"); // valid
navigate("up"); // Error: 'up' bukan bagian dari alias tipe CardinalDirection
```

Ketika mencoba mendeklarasikan sebuah variabel dengan `const`, TypeScript secara otomatis menganggap bahwa nilai tersebut adalah literal yang tetap atau tidak berubah. Ini berarti, alih-alih menginfer tipe umum seperti `string` atau `number`, TypeScript akan melihat nilai spesifik sebagai tipe literalnya. Contoh:

```typescript
const direction = "left"; // Tipe dari 'direction' adalah "left", bukan string umum
```

Dalam contoh di atas, variabel `direction` bukan hanya bertipe `string`, tapi TypeScript akan menginfer bahwa `direction` hanya bisa memiliki nilai `"left"`. Jika kita mencoba mengubahnya menjadi `"right"` di kemudian hari, TypeScript akan memberikan error. Namun jika kita menggunakan `let`, TypeScript tidak mengasumsikan literal types dan akan memberikan tipe yang lebih umum (`string`) dalam kasus di atas.

_Best Practices_ untuk Literal Types

- Gunakan literal types ketika ingin membatasi nilai yang mungkin untuk argument fungsi atau properti objek tertentu.
- Jika literal types hanya memiliki 3-4 nilai, cukup gunakan **union types manual**.
- Jika nilainya mulai banyak (>4), **enum** adalah best practice yang lebih baik karena lebih terstruktur dan mudah dikelola.
- Untuk meningkatkan keterbacaan dan pemeliharaan, gunakan **type aliases** untuk membuat nilai literal lebih mudah dikelola, terutama dalam sistem besar dan membantu memberikan nama yang lebih deskriptif untuk union types yang besar.

## 1.9. Aliases Type di TypeScript

**Type Aliases** di TypeScript memungkinkan kita memberikan nama baru (alias) untuk tipe yang ada, baik tipe primitif, tipe kompleks, atau tipe gabungan (union types dan intersection types). Dengan type aliases, dapat meningkatkan keterbacaan dan keteraturan dalam kode, terutama ketika tipe yang digunakan cukup panjang atau berulang.

Contoh sederhana:

```typescript
type StringAlias = string;

let message: StringAlias = "Hello, TypeScript";
```

Dalam contoh di atas, `StringAlias` hanyalah alias untuk `string`, jadi variabel `message` dapat menampung nilai string seperti biasa.

### 1.9.1. Penggunaan Type Aliases dengan Object Types

Kita bisa menggunakan type aliases untuk **object types**, di mana tipe-tipe untuk properti tertentu dalam objek bisa didefinisikan. Contoh:

```typescript
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

let newUser: User = {
  name: "Alice",
  age: 30,
  isAdmin: true,
};
```

### 1.9.2. Type Aliases untuk Function Types

Type aliases juga bisa diterapkan untuk **function types**, yang memungkinkan untuk mendefinisikan tipe dari fungsi yang berulang kali digunakan. Contoh:

```typescript
type MathOperation = (x: number, y: number) => number;

let add: MathOperation = (x, y) => x + y;
let subtract: MathOperation = (x, y) => x - y;
```

Dalam contoh di atas, `MathOperation` adalah type alias yang mendefinisikan tipe fungsi dengan dua parameter `number` dan menghasilkan nilai `number`. Setiap fungsi matematika dapat mengikuti tipe ini.

### 1.9.3. Intersection Types dengan Type Aliases

Kita juga bisa menggunakan **intersection types** dengan type aliases untuk menggabungkan beberapa tipe menjadi satu tipe gabungan. Contoh:

```typescript
type CanWrite = { write: () => void };
type CanRead = { read: () => void };

type ReadWriteUser = CanWrite & CanRead;

let person: ReadWriteUser = {
  write() {
    console.log("Writing...");
  },
  read() {
    console.log("Reading...");
  },
};
```

Di sini, `ReadWriteUser` menggabungkan kemampuan dari dua tipe `CanWrite` dan `CanRead` menggunakan intersection (`&`), yang berarti objek `person` harus memiliki kedua fungsi `write` dan `read`.

### 1.9.4. Type Aliases vs. Interface

Pada dasarnya, `type` dan `interface` bisa digunakan untuk hal yang sama dalam banyak kasus, terutama untuk tipe objek. Namun, ada beberapa perbedaan:

`Interface` dapat digabungkan (declaration merging), sedangkan `type` alias tidak bisa.
`Type` alias lebih fleksibel karena dapat digunakan untuk union types dan intersection types, sementara `interface` hanya digunakan untuk objek.

### 1.9.5. Best Practices untuk Type Aliases

- **Gunakan Saat Ada Pengulangan**: Jika melihat tipe yang kompleks berulang kali digunakan, pertimbangkan untuk membuat type alias untuk meningkatkan keterbacaan.
- **Deskriptif dan Spesifik**: Berikan nama yang deskriptif untuk type aliases sehingga mudah dipahami maksud dari tipe tersebut.
- **Gunakan dengan Union dan Intersection**: Type aliases sangat kuat ketika digunakan bersama union types dan intersection types untuk membuat tipe gabungan yang kompleks lebih mudah dikelola.
- Pertimbangkan Interface untuk Objek: Untuk tipe objek, interface mungkin lebih cocok, terutama jika kita ingin memperluas tipe di masa depan.

## 1.10. Function Return & "Void" Types

Dalam TypeScript, fungsi yang me-return tipe `void` menunjukkan bahwa fungsi tersebut **tidak mengembalikan nilai** yang dapat digunakan. Fungsi seperti ini tetap dijalankan, namun hasil akhirnya tidak dapat diproses lebih lanjut karena tidak ada nilai yang dihasilkan untuk dioperasikan. Secara umum, ini digunakan ketika fungsi hanya melakukan efek samping (seperti logging, mengubah nilai variabel global, atau memodifikasi DOM).

Contoh Fungsi dengan Tipe `void`:

```typescript
function logMessage(message: string): void {
  console.log(message);
}
```

Fungsi `logMessage` hanya melakukan `console.log` dan tidak mengembalikan nilai apapun, sehingga tipe return-nya adalah `void`.

Atau contoh di bawah ini juga bisa digunakan (meskipun jarang dalam kasus umum) dengan menggunakan `undefined`, alih-alih dengan `void`:

```typescript
function logMessage(message: string): undefined {
  console.log(message);
  return;
}
```

### 1.10.1. Fungsi dengan Return Tipe dan `void`

Ketika ingin mendeklarasikan sebuah fungsi yang bisa mengembalikan nilai tertentu atau `void`, kita dapat menggunkan **union type**. Dalam kasus ini, fungsi bisa mengembalikan sebuah nilai atau sama sekali tidak mengembalikan apapun (void). Contoh:

```typescript
function mayReturnString(condition: boolean): string | void {
  if (condition) {
    return "Condition is true";
  }
}
```

Dalam contoh di atas:

- Jika `condition` bernilai `true`, fungsi akan mengembalikan sebuah `string`.
- Jika tidak, fungsi tidak mengembalikan apa-apa (dalam hal ini dianggap `void`).

### 1.10.2. Best Practices

- **Gunakan `void` untuk Efek Samping**: Gunakan `void` untuk fungsi yang tidak diharapkan menghasilkan nilai yang dipakai kembali, seperti memodifikasi state atau memanggil API eksternal.

- **Union dengan `void` untuk Fleksibilitas**: Jika ingin fungsi mengembalikan nilai dalam kondisi tertentu, tetapi tidak dalam kondisi lain, kita bisa menggunakan union type dengan `void`. Ini memberikan fleksibilitas dalam menangani hasil return.

- **Pastikan Fungsi yang Mengembalikan void Konsisten**: Hindari skenario di mana fungsi yang seharusnya mengembalikan `void` ternyata secara tidak sengaja mengembalikan sesuatu. Ini bisa menyebabkan kebingungan dan bug di kemudian hari.

## 1.11. Function as Types

Di TypeScript, **function as type** memungkinkan kita mendefinisikan tipe untuk fungsi yang dapat digunakan secara konsisten di seluruh kode. Ini membantu dalam menjaga struktur kode yang rapi dan memastikan bahwa fungsi memiliki parameter dan nilai return yang konsisten sesuai dengan tipe yang diharapkan.

Dengan kata lain, **Function type** adalah tipe yang mendefinisikan tanda tangan (signature) fungsi, yaitu tipe dari parameter dan tipe return-nya. TypeScript memungkinkan untuk mendeklarasikan function type secara eksplisit menggunakan sintaks berikut:

```typescript
type MathOperation = (x: number, y: number) => number;

const add: MathOperation = (x, y) => {
  return x + y;
};

const subtract: MathOperation = (x, y) => {
  return x - y;
};
```

Pada contoh di atas, `MathOperation` adalah tipe untuk fungsi yang menerima dua parameter bertipe `number` dan mengembalikan nilai `number`.

Fungsi `add` dan `subtract` sekarang harus mengikuti format yang telah didefinisikan oleh tipe `MathOperation`. Ini membantu menjaga konsistensi, karena TypeScript akan memberi error jika kita mencoba mendeklarasikan fungsi yang tidak sesuai dengan tanda tangan ini.

### 1.11.1. Function Type dengan Parameter Optional

TypeScript juga memungkinkan untuk menggunakan parameter opsional atau default dalam function type. Misalnya, kita bisa mendefinisikan function type dengan parameter yang opsional menggunakan tanda `?`.

```typescript
type Greet = (name: string, message?: string) => void;

const greet: Greet = (name, message = "Hello") => {
  console.log(`${message}, ${name}!`);
};

greet("Alice"); // Output: Hello, Alice!
```

Di sini, `message` adalah parameter opsional yang memiliki nilai default `"Hello"`. Jika parameter ini tidak disediakan, maka nilai defaultnya akan digunakan.

### 1.11.2. Function Type dalam Object

Kita bisa mendefinisikan function type sebagai bagian dari properti dalam objek. Ini sangat berguna ketika memiliki metode di dalam objek yang perlu didefinisikan secara eksplisit tipenya.

```typescript
type Person = {
  name: string;
  age: number;
  greet: (phrase: string) => void;
};

const user: Person = {
  name: "John",
  age: 30,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  },
};

user.greet("Hello, my name is"); // Output: Hello, my name is John
```

### 1.11.3. Contoh Kompleks Penggunaan Function Type

1. Callback Function

   Berikut contoh lebih kompleks dari penggunaan function type dalam konteks callback atau higher-order functions:

   ```typescript
   type Callback = (result: number) => void;
   function calculate(x: number, y: number, cb: Callback) {
     const result = x + y;
     cb(result);
   }
   calculate(5, 10, (result) => {
     console.log("The result is:", result);
   });
   ```

   Dalam contoh ini, `Callback` adalah tipe yang mendefinisikan fungsi yang menerima satu parameter bertipe `number` dan tidak mengembalikan nilai (`void`). Fungsi `calculate` menggunakan `Callback` sebagai parameter dan memanggilnya dengan hasil perhitungan.

2. Asynchronous Callbacks

   Contoh Callback Asinkron:

   ```typescript
   async function fetchDataAsync(): Promise<string> {
     return new Promise((resolve) => {
       setTimeout(() => {
         resolve("Data fetched successfully with async/await!");
       }, 2000);
     });
   }

   async function handleData() {
     const data = await fetchDataAsync();
     console.log(data);
   }

   handleData(); // Output setelah 2 detik: Data fetched successfully with async/await!
   ```

> Note:
>
> Fungsi callback dapat mengembalikan sesuatu, meskipun argumen yang dilewatkan TIDAK mengharapkan nilai yang dikembalikan (`void`).

### 1.11.4. Best practice Function Type

- **Gunakan Type Aliases untuk Konsistensi**: Definisikan function types menggunakan type aliases untuk menjaga konsistensi dan keterbacaan, terutama jika fungsi tersebut digunakan berulang kali.
- **Gunakan Parameter Optional atau Default**: Saat parameter opsional diperlukan, definisikan dengan tanda `?` atau berikan nilai default untuk menghindari kesalahan input.
- **Selalu Deklarasikan Tipe Return**: Meski TypeScript dapat melakukan inferensi tipe, mendefinisikan tipe return secara eksplisit meningkatkan keterbacaan dan mencegah kesalahan.

## 1.12. Unknown Type di TypeScript

Di TypeScript, `unknown` adalah tipe yang lebih aman daripada `any`. Meskipun kedua tipe ini memungkinkan sebuah variabel untuk menerima nilai dari tipe apa pun, penggunaan `unknown` memaksa kita untuk melakukan pemeriksaan tipe terlebih dahulu sebelum mengoperasikan nilainya. Ini memberikan lebih banyak keamanan tipe dibandingkan `any`, yang tidak memberikan perlindungan sama sekali.

Contoh `unknown`:

```typescript
let value: unknown;
value = 5;
value = "hello";

// Harus melakukan pengecekan tipe sebelum bisa menggunakan nilai tersebut.
if (typeof value === "string") {
  console.log(value.toUpperCase()); // Aman karena tipe sudah diverifikasi
}
```

Saat menggunakan `unknown`, sangat penting untuk memvalidasi tipe data sebelum menggunakan nilainya. Berikut adalah contoh cara memvalidasi tipe menggunakan `typeof`, instance checks (`instanceof`), atau jika kita yakin bahwa variabel `unknown` sebenarnya memiliki tipe tertentu, kita bisa menggunakan _type assertion_ (penegasan tipe) untuk memberi tahu TypeScript tipe apa yang akan digunakan:

```typescript
let input: unknown;
input = "TypeScript is awesome!";

// Memeriksa apakah input bertipe string
if (typeof input === "string") {
  console.log(input.toUpperCase()); // Output: "TYPESCRIPT IS AWESOME!"
}

// Memeriksa apakah input bertipe objek
if (typeof input === "object" && input !== null) {
  console.log("Input is an object.");
}

// Menggunakan type assertion
const str: string = input as string;
console.log(str.toUpperCase()); // Output: "TYPESCRIPT IS AWESOME!"
```

### 1.12.1. Best Practices untuk `unknown` type

- **Gunakan `unknown` daripada `any`**: Selalu lebih baik menggunakan `unknown` karena lebih ketat dan memberikan kontrol yang lebih baik atas tipe data.
- **Selalu periksa tipe**: Lakukan pengecekan tipe sebelum memanipulasi nilai `unknown`.
- **Gunakan type guards**: Manfaatkan type guards (`typeof`, `instanceof`, atau custom type guards) untuk memverifikasi tipe data sebelum digunakan.
- **Hindari type assertion tanpa validasi**: Hati-hati menggunakan type assertion tanpa pemeriksaan, karena ini bisa memunculkan bug jika asumsinya salah.

## 1.13. Never Type di TypeScript

Tipe `never` di TypeScript digunakan untuk menunjukkan nilai yang tidak akan pernah terjadi atau tidak ada nilai yang akan dikembalikan. Biasanya, ini digunakan dalam situasi di mana sebuah fungsi:

1. Tidak akan pernah mengembalikan nilai apa pun (misalnya, fungsi yang selalu melemparkan error atau _Error Handling_).
   ```typescript
   function throwError(message: string): never {
     throw new Error(message);
   }
   ```
   Dalam contoh ini, karena fungsi `throwError` akan selalu melemparkan error, tidak mungkin fungsi tersebut akan mengembalikan nilai yang valid, sehingga kita memberi tahu TypeScript bahwa fungsi ini mengembalikan `never`.
2. Tidak akan pernah menyelesaikan eksekusi normal (misalnya, fungsi yang memiliki loop tak terbatas atau _Infinite Loops_).
3. Digunakan sebagai tipe kembalian pada type guards yang gagal, atau situasi lain yang secara logis tidak mungkin terjadi.

   Misalnya, ketika melakukan pengecekan menyeluruh (_exhaustive type_) pada union type, tipe `never` membantu memastikan bahwa semua nilai sudah ditangani. Jika ada tipe baru yang muncul di masa depan, penggunaan `never` ini akan memberi peringatan kepada kita bahwa ada tipe yang belum kita tangani:

   ```typescript
   type Animal = "dog" | "cat";

   function checkAnimal(animal: Animal) {
     switch (animal) {
       case "dog":
         console.log("This is a dog.");
         break;
       case "cat":
         console.log("This is a cat.");
         break;
       default:
         // Exhaustive check: variable `_exhaustiveCheck` harus bertipe `never`.
         // TypeScript akan memeriksa bahwa semua tipe sudah ditangani.
         const _exhaustiveCheck: never = animal;
         throw new Error(`Unknown animal: ${animal}`);
     }
   }
   ```

   Di sini, `never` digunakan untuk memeriksa bahwa variabel `animal` hanya memiliki tipe yang valid (`dog` atau `cat`). Jika ada tipe lain, misalnya menambahkan nilai lain ke union type, seperti `"bird"`, tetapi lupa menambahkannya ke `switch`, maka TypeScript akan memberikan peringatan bahwa ada tipe yang belum ditangani.

   > Notes:
   >
   > Tanda underscore (`_`) di depan biasanya digunakan untuk menunjukkan bahwa variabel tersebut hanya digunakan secara internal atau sementara di dalam fungsi. Hal ini adalah konvensi yang banyak digunakan oleh pengembang untuk menandai bahwa variabel tersebut tidak memiliki tujuan lain selain untuk pengecekan exhaustiveness.
   >
   > Variabel ini sering diberi nama yang deskriptif untuk memperjelas maksud dari penggunaannya. Dalam hal ini, nama `_exhaustiveCheck` digunakan untuk menunjukkan bahwa variabel ini digunakan untuk pengecekan exhaustiveness.

### 1.13.1. Perbedaan Utama `never` type dan `avoid` type

- `void` berarti **fungsi tidak mengembalikan nilai APAPUN (tidak sama sekali, bahkan seperti `undefined` atau `null`), tetapi eksekusinya selesai dengan normal**. Misalnya, fungsi yang hanya melakukan tugas tanpa menghasilkan hasil yang bisa dipakai.

- `never` berarti **fungsi tidak akan pernah selesai dengan cara yang normal**. Entah karena selalu melempar error, masuk ke dalam infinite loop, atau situasi yang tidak pernah mengembalikan kontrol ke pemanggil fungsi.

### 1.13.2. Best Practice Penggunaan `never`:

- Penggunaan `never` meningkatkan keandalan kode karena memastikan bahwa situasi yang tidak mungkin terjadi diperlakukan dengan benar oleh TypeScript, misalnya saat menangani tipe yang mungkin berubah di masa depan.
- Gunakan `never` dalam type guards untuk mencegah bug yang muncul dari kasus yang tidak ditangani dengan benar, sehingga kode menjadi lebih robust dan aman dari kesalahan.
