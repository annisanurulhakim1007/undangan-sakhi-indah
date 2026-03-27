# Undangan Pernikahan Digital - Yohanes & Feres

Website undangan pernikahan online dengan tema syari yang elegan dan modern.

## ✨ Fitur

- 🎵 **Backsound Otomatis** - Musik latar yang dapat dikontrol oleh tamu
- ⏱️ **Countdown Timer** - Hitungan mundur real-time menuju hari pernikahan
- 📍 **Google Maps Integration** - Lokasi acara dengan peta interaktif
- 📸 **Galeri Foto** - Tampilan foto dengan animasi smooth
- 💚 **Tema Islami** - Desain dengan nuansa syari yang elegan
- 📱 **Mobile Responsive** - Optimal untuk tampilan mobile (Android/iOS)
- 🎭 **Animasi Smooth** - Menggunakan Motion (Framer Motion) untuk transisi yang halus
- 🎫 **Personalisasi Nama Tamu** - URL dengan parameter nama tamu
- 📅 **Save The Date** - Fitur tambahkan ke kalender

## 🚀 Deploy ke Vercel

### Cara Deploy:

1. **Fork atau Clone Repository ini**

2. **Login ke Vercel**
   - Kunjungi [vercel.com](https://vercel.com)
   - Login dengan akun GitHub

3. **Import Project**
   - Klik "Add New Project"
   - Pilih repository ini
   - Klik "Import"

4. **Configure Project**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. **Deploy**
   - Klik "Deploy"
   - Tunggu hingga proses selesai
   - Website akan live di URL yang diberikan Vercel

### Custom Domain (Opsional):

1. Di dashboard Vercel project Anda, klik "Settings"
2. Pilih tab "Domains"
3. Tambahkan custom domain Anda
4. Follow instruksi DNS configuration

## 📝 Personalisasi

### Mengubah Nama Pengantin:

Edit file berikut:
- `/src/app/components/NewHeroSection.tsx` - Nama pengantin
- `/src/app/components/CoupleSection.tsx` - Detail mempelai
- `/src/app/components/NewClosingSection.tsx` - Penutup

### Mengubah Tanggal & Lokasi:

Edit file:
- `/src/app/components/CountdownTimer.tsx` - Tanggal pernikahan
- `/src/app/components/EventDetails.tsx` - Detail acara dan lokasi
- `/src/app/components/LocationMap.tsx` - Google Maps embed

### Mengubah Foto:

Ganti URL foto di:
- `/src/app/components/PhotoGallery.tsx` - Foto galeri
- `/src/app/components/OpeningCover.tsx` - Foto cover

### URL dengan Nama Tamu:

Format URL: `https://your-domain.vercel.app/?to=Nama+Tamu`

Contoh:
- `https://your-domain.vercel.app/?to=Keluarga+Besar+Manager`
- `https://your-domain.vercel.app/?to=Bapak+Ahmad`

## 🎨 Kustomisasi Warna

Warna utama adalah putih dan hijau emerald. Untuk mengubah warna:

Edit file `/src/styles/theme.css` atau langsung di komponen dengan class Tailwind:
- `emerald-600` - Hijau utama
- `emerald-700` - Hijau gelap
- `emerald-50` - Hijau terang

## 🎵 Mengganti Backsound

Edit file `/src/app/components/MusicPlayer.tsx`:

```tsx
<audio
  ref={audioRef}
  loop
  src="URL_MUSIK_ANDA"
/>
```

Sumber musik gratis:
- [Pixabay Music](https://pixabay.com/music/)
- [Free Music Archive](https://freemusicarchive.org/)

## 📱 Test di Mobile

Setelah deploy, test website di:
- Chrome Android
- Safari iOS
- Chrome iOS

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📄 License

Free to use for personal wedding invitations.

## 💝 Credits

Made with ❤️ using:
- React
- Tailwind CSS
- Motion (Framer Motion)
- Vite
- Lucide Icons

---

**Selamat Menikah! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.** 💚
