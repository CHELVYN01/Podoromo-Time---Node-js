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

## Output 

https://github.com/user-attachments/assets/968be67b-b8a4-4c72-b304-9c70b95621a2

