# Pomodoro Timer

Pomodoro Timer ini adalah aplikasi berbasis Node.js yang menggunakan teknik Pomodoro untuk meningkatkan produktivitas. Teknik Pomodoro adalah metode manajemen waktu yang terdiri dari sesi kerja yang terfokus selama 25 menit, diikuti dengan istirahat singkat.

Aplikasi ini memungkinkan pengguna untuk menentukan durasi sesi kerja dan sesi istirahat. Setelah sesi selesai, aplikasi akan mengirimkan notifikasi untuk mengingatkan pengguna untuk beristirahat atau kembali bekerja.

# Cara Menggunakan

## 1. Instalasi Dependensi
Sebelum menjalankan aplikasi ini, pastikan Anda sudah menginstal Node.js dan npm. Kemudian, instal dependensi yang diperlukan dengan perintah:
  
    npm install node-notifier moment

## 2. Menjalankan Aplikasi
Setelah dependensi terinstal, Anda dapat menjalankan aplikasi dengan perintah berikut. Pastikan Anda menentukan durasi sesi kerja dan sesi istirahat (dalam menit) sebagai argumen:

    node pomodoro.js <POMODORO_DURATION> <BREAK_DURATION>
misalnya 

    node pomodoro.js 0.5 0.3

- POMODORO_DURATION: Durasi sesi kerja dalam menit.
- BREAK_DURATION: Durasi sesi istirahat dalam menit.

Setelah menjalankan perintah tersebut, aplikasi akan mulai menghitung mundur waktu dan mengirimkan notifikasi saat sesi kerja atau istirahat selesai.

# Penjelasan Kode

## 1. Mengimpor Modul yang Diperlukan

```javascript
const notifier = require("node-notifier");
const moment = require("moment");
```

- node-notifier : Digunakan untuk menampilkan notifikasi di sistem operasi.

- moment : Digunakan untuk menangani dan memformat waktu dengan lebih mudah.

## 2. Mengambil Argumen Waktu

```javascript
const argTime = process.argv.slice(2);
const POMODORO_DURATION = argTime[0];
const BREAK_DURATIONN = argTime[1];
```
 ### - Program mengambil dua argumen dari command line:
       POMODORO_DURATION: Durasi sesi kerja dalam menit.
       BREAK_DURATION: Durasi sesi istirahat dalam menit.

## 3. Fungsi formatingTime

```javascript
function formatingTime(totalSeccond) {
  const duration = moment.duration(totalSeccond, "second");
  const hours = duration.hours().toString().padStart(2, "0");
  const minutes = duration.minutes().toString().padStart(2, "0");
  const second = duration.seconds().toString().padStart(2, "0");

  return `${hours}:${minutes}:${second}`;
}
```
- Fungsi ini mengubah total detik yang tersisa (totalSeccond) menjadi format jam:menit menggunakan moment.duration.
- padStart(2, "0") memastikan bahwa angka yang kurang dari 10 akan ditampilkan dengan dua digit (misalnya, 03 bukannya 3).

## 4. Fungsi startTimer

```javascript
function startTimer(duration) {
  isWorking = !isWorking;
  remainingTime = duration * 60;

  const timer = setInterval(() => {
    remainingTime--;
    const formatedTime = formatingTime(remainingTime);
    console.log(`${isWorking ? "work" : "Break"} : ${formatedTime}`);

    if (remainingTime === 0) {
      clearInterval(timer);

      notifier.notify({
        title: isWorking ? "Break Time" : "Working Time",
        message: isWorking ? "Waktunya Istirahat" : "Ayoo Fokus Kembali",
        sound: true,
        wait: true,
      });

      startTimer(isWorking ? POMODORO_DURATION : BREAK_DURATIONN);
    }
  }, 1000);
}
```
- startTimer adalah fungsi yang menjalankan timer untuk sesi kerja atau istirahat.
- setInterval digunakan untuk menghitung mundur detik per detik.
- Ketika waktu mencapai 0, notifikasi akan muncul menggunakan notifier.notify(), yang akan memberitahu pengguna untuk beristirahat atau kembali bekerja.
- Setelah notifikasi, timer dimulai kembali sesuai dengan durasi sesi berikutnya (sesi kerja atau istirahat).

## 5. Menjalankan Timer
```javascript
startTimer(POMODORO_DURATION);
```
- Program dimulai dengan menjalankan timer untuk sesi kerja pertama, dengan durasi yang telah ditentukan oleh pengguna (argumen pertama).

# FITUR
- Menentukan durasi sesi kerja dan istirahat.
- Menampilkan notifikasi di desktop ketika sesi selesai.
- Timer akan secara otomatis berpindah antara sesi kerja dan istirahat.

## Output 

https://github.com/user-attachments/assets/968be67b-b8a4-4c72-b304-9c70b95621a2

