# Panduan Kustomisasi Cepat

## 📝 Edit Informasi Pengantin

### 1. Nama Pengantin
File: `/src/app/components/NewHeroSection.tsx`

Cari dan ubah:
```tsx
<h1 className="text-4xl font-serif text-emerald-800 mb-2">
  Yohanes  // ← Ubah nama pria
</h1>

<h1 className="text-4xl font-serif text-emerald-800 mb-2">
  Feres  // ← Ubah nama wanita
</h1>
```

### 2. Nama Orang Tua
File: `/src/app/components/CoupleSection.tsx`

Ubah bagian:
```tsx
<p className="text-gray-600 text-sm">Putra dari Bapak [Nama Ayah] & Ibu [Nama Ibu]</p>
```

### 3. Tanggal Pernikahan
File: `/src/app/components/CountdownTimer.tsx`

Ubah baris:
```tsx
const weddingDate = new Date('2026-06-15T10:00:00').getTime();
// Format: YYYY-MM-DDTHH:mm:ss
```

### 4. Detail Acara
File: `/src/app/components/EventDetails.tsx`

Ubah:
- Tanggal acara
- Waktu acara
- Nama lokasi
- Alamat lengkap

### 5. Google Maps
File: `/src/app/components/LocationMap.tsx`

Cara mendapatkan embed code Google Maps:
1. Buka Google Maps
2. Cari lokasi acara
3. Klik "Share" → "Embed a map"
4. Copy kode iframe
5. Paste ke file LocationMap.tsx

### 6. Instagram
File: `/src/app/components/CoupleSection.tsx`

Ubah username Instagram:
```tsx
<a href="https://instagram.com/username_anda">
  @username_anda
</a>
```

### 7. Ganti Foto
File: `/src/app/components/PhotoGallery.tsx`

Upload foto ke hosting (misalnya Cloudinary, Imgur) lalu ganti URL di array `photos`

### 8. Musik Background
File: `/src/app/components/MusicPlayer.tsx`

Upload musik ke hosting lalu ubah:
```tsx
<audio src="URL_MUSIK_ANDA" />
```

## 🎨 Ubah Warna

Untuk mengubah dari hijau ke warna lain, cari dan replace di semua file:

- `emerald-50` → warna terang
- `emerald-600` → warna utama
- `emerald-700` → warna gelap
- `emerald-800` → warna teks

Pilihan warna Tailwind lain:
- `teal-` untuk hijau kebiruan
- `green-` untuk hijau
- `blue-` untuk biru
- `purple-` untuk ungu
- `rose-` untuk pink

## 📱 Test Sebelum Deploy

1. Jalankan lokal: `npm run dev`
2. Buka di browser: `http://localhost:5173`
3. Test dengan nama tamu: `http://localhost:5173/?to=Nama+Tamu`
4. Buka DevTools → Toggle device toolbar (Ctrl+Shift+M)
5. Test di berbagai ukuran layar

## 🚀 Deploy ke Vercel

1. Push code ke GitHub
2. Login ke vercel.com
3. Import repository
4. Deploy!

Link akan jadi: `https://your-project.vercel.app`

## 💡 Tips

- Test musik autoplay di berbagai browser
- Gunakan foto dengan ukuran optimal (max 1MB)
- Compress foto sebelum upload untuk loading cepat
- Test di device asli (Android/iOS) setelah deploy

---

**Butuh bantuan? Buka README.md untuk panduan lengkap!**
