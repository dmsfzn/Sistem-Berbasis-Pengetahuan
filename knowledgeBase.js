const knowledgeBase = [
  // RAM <4GB
  {
    kondisi: { ram: "<4GB", kamera: "Tidak", spek: "Tidak Pernah", harga: "Dibawah 3 juta" },
    rekomendasi: "Infinix Smart 7 (RAM 2GB, Kamera Standar, Rp1.2jt)"
  },
  {
    kondisi: { ram: "<4GB", kamera: "Tidak", spek: "Ringan", harga: "Dibawah 3 juta" },
    rekomendasi: "Realme C30 (RAM 3GB, Kamera 8MP, Rp1.3jt)"
  },
  // RAM 4GB
  {
    kondisi: { ram: "4GB", kamera: "Penting", spek: "Jarang", harga: "Dibawah 3 juta" },
    rekomendasi: "OPPO A57 (RAM 4GB, Kamera 13MP, Rp2.5jt)"
  },
  {
    kondisi: { ram: "4GB", kamera: "Tidak", spek: "Ringan", harga: "Dibawah 3 juta" },
    rekomendasi: "Tecno Spark Go 2023 (RAM 4GB, Kamera 13MP, Rp1.4jt)"
  },
  {
    kondisi: { ram: "4GB", kamera: "Penting", spek: "Jarang", harga: "Dibawah 3 juta" },
    rekomendasi: "Redmi 10C (RAM 4GB, Kamera 50MP, Rp1.8jt)"
  },
  // RAM 6GB
  {
    kondisi: { ram: "6GB", kamera: "Penting", spek: "Jarang", harga: "3-6 juta" },
    rekomendasi: "Samsung Galaxy A14 (RAM 6GB, Kamera 50MP, Rp3.5jt)"
  },
  {
    kondisi: { ram: "6GB", kamera: "Tidak", spek: "Jarang", harga: "Dibawah 3 juta" },
    rekomendasi: "Infinix Note 12 (RAM 6GB, Kamera 50MP, Rp2.8jt)"
  },
  {
    kondisi: { ram: "6GB", kamera: "Penting", spek: "Ya, Sering", harga: "Lebih dari 6 juta" },
    rekomendasi: "Vivo V29 5G (RAM 6GB, Kamera 50MP, Rp6.1jt)"
  },
  // RAM 8GB
  {
    kondisi: { ram: "8GB", kamera: "Penting", spek: "Ya, Sering", harga: "3-6 juta" },
    rekomendasi: "POCO F5 (RAM 8GB, Snapdragon 7+ Gen2, Rp4.8jt)"
  },
  {
    kondisi: { ram: "8GB", kamera: "Penting", spek: "Ya, Sering", harga: "Lebih dari 6 juta" },
    rekomendasi: "Realme GT Neo 3T (RAM 8GB, Kamera 64MP, Rp6.2jt)"
  },
  {
    kondisi: { ram: "8GB", kamera: "Tidak", spek: "Ya, Sering", harga: "3-6 juta" },
    rekomendasi: "Samsung Galaxy M34 (RAM 8GB, Kamera 50MP, Rp3.9jt)"
  },
  {
    kondisi: { ram: "8GB", kamera: "Penting", spek: "Ya, Sering", harga: "Lebih dari 6 juta" },
    rekomendasi: "Xiaomi 13T (RAM 8GB, Kamera Leica, Rp7.5jt)"
  },
  // RAM >=12GB
  {
    kondisi: { ram: ">=12GB", kamera: "Penting", spek: "Ya, Sering", harga: "Lebih dari 6 juta" },
    rekomendasi: "Samsung Galaxy S23 Ultra (RAM 12GB, Kamera 200MP, Rp16jt)"
  },
  // RAM <4GB, kamera: Penting
  {
    kondisi: { ram: "<4GB", kamera: "Penting", spek: "Ringan", harga: "Dibawah 3 juta" },
    rekomendasi: "Advan G9 Pro (RAM 3GB, Kamera 16MP, Rp1.5jt)"
  },
  // RAM 4GB, kamera: Penting, spek: Ya, Sering
  {
    kondisi: { ram: "4GB", kamera: "Penting", spek: "Ya, Sering", harga: "Dibawah 3 juta" },
    rekomendasi: "Vivo Y21s (RAM 4GB, Kamera 50MP, Rp2.7jt)"
  },
  // RAM 6GB, kamera: Tidak, spek: Ya, Sering
  {
    kondisi: { ram: "6GB", kamera: "Tidak", spek: "Ya, Sering", harga: "3-6 juta" },
    rekomendasi: "Redmi Note 11 (RAM 6GB, Kamera 50MP, Rp3.1jt)"
  },
  // RAM 8GB, kamera: Tidak, spek: Tidak Pernah
  {
    kondisi: { ram: "8GB", kamera: "Tidak", spek: "Tidak Pernah", harga: "3-6 juta" },
    rekomendasi: "Infinix Note 30 (RAM 8GB, Kamera 64MP, Rp3.5jt)"
  },
  // RAM >=12GB, kamera: Tidak, spek: Ya, Sering
  {
    kondisi: { ram: ">=12GB", kamera: "Tidak", spek: "Ya, Sering", harga: "Lebih dari 6 juta" },
    rekomendasi: "ASUS ROG Phone 7 (RAM 16GB, Kamera 50MP, Rp13jt)"
  },
  // RAM 6GB, kamera: Penting, spek: Tidak Pernah
  {
    kondisi: { ram: "6GB", kamera: "Penting", spek: "Tidak Pernah", harga: "3-6 juta" },
    rekomendasi: "OPPO A76 (RAM 6GB, Kamera 13MP, Rp3.2jt)"
  },
  // RAM 4GB, kamera: Tidak, spek: Tidak Pernah
  {
    kondisi: { ram: "4GB", kamera: "Tidak", spek: "Tidak Pernah", harga: "Dibawah 3 juta" },
    rekomendasi: "Samsung Galaxy A03 (RAM 4GB, Kamera 48MP, Rp1.6jt)"
  },
  // RAM <4GB, kamera: Tidak, spek: Ya, Sering
  {
    kondisi: { ram: "<4GB", kamera: "Tidak", spek: "Ya, Sering", harga: "Dibawah 3 juta" },
    rekomendasi: "Itel A60 (RAM 2GB, Kamera 8MP, Rp1.1jt)"
  },
  // RAM 4GB, kamera: Penting, spek: Tidak Pernah
  {
    kondisi: { ram: "4GB", kamera: "Penting", spek: "Tidak Pernah", harga: "Dibawah 3 juta" },
    rekomendasi: "Infinix Hot 12i (RAM 4GB, Kamera 13MP, Rp1.5jt)"
  },
  // RAM 6GB, kamera: Penting, spek: Ringan
  {
    kondisi: { ram: "6GB", kamera: "Penting", spek: "Ringan", harga: "3-6 juta" },
    rekomendasi: "Vivo Y33s (RAM 6GB, Kamera 50MP, Rp3.3jt)"
  },
  // RAM 8GB, kamera: Penting, spek: Tidak Pernah
  {
    kondisi: { ram: "8GB", kamera: "Penting", spek: "Tidak Pernah", harga: "3-6 juta" },
    rekomendasi: "OPPO A96 (RAM 8GB, Kamera 50MP, Rp3.7jt)"
  },
  // RAM >=12GB, kamera: Penting, spek: Tidak Pernah
  {
    kondisi: { ram: ">=12GB", kamera: "Penting", spek: "Tidak Pernah", harga: "Lebih dari 6 juta" },
    rekomendasi: "iPhone 15 Pro (RAM 12GB, Kamera 48MP, Rp18jt)"
  },
  // RAM 6GB, kamera: Tidak, spek: Tidak Pernah
  {
    kondisi: { ram: "6GB", kamera: "Tidak", spek: "Tidak Pernah", harga: "Dibawah 3 juta" },
    rekomendasi: "Realme Narzo 50 (RAM 6GB, Kamera 50MP, Rp2.9jt)"
  },
  // RAM 8GB, kamera: Tidak, spek: Ringan
  {
    kondisi: { ram: "8GB", kamera: "Tidak", spek: "Ringan", harga: "3-6 juta" },
    rekomendasi: "POCO M5 (RAM 8GB, Kamera 50MP, Rp3.2jt)"
  },
  // RAM 4GB, kamera: Penting, spek: Ringan
  {
    kondisi: { ram: "4GB", kamera: "Penting", spek: "Ringan", harga: "Dibawah 3 juta" },
    rekomendasi: "Vivo Y16 (RAM 4GB, Kamera 13MP, Rp1.7jt)"
  },
];
