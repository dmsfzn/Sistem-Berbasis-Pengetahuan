function cariRekomendasi() {
  const ram = document.getElementById("ram").value;
  const kamera = document.getElementById("kamera").value;
  const spek = document.getElementById("spek").value;
  const harga = document.getElementById("harga").value;

  // Fakta user
  const faktaUser = { ram, kamera, spek, harga };

  // Cari aturan yang cocok
  const hasil = knowledgeBase.find(rule =>
    rule.kondisi.ram === faktaUser.ram &&
    rule.kondisi.kamera === faktaUser.kamera &&
    rule.kondisi.spek === faktaUser.spek &&
    rule.kondisi.harga === faktaUser.harga
  );

  // Tampilkan hasil
  document.getElementById("hasil").innerText =
    hasil ? "Rekomendasi: " + hasil.rekomendasi : "Tidak ada smartphone yang cocok dengan kriteria.";
}

// Fungsi yang dipanggil dari HTML
function getRekomendasiSmartphone({ ram, kamera, spek, harga }) {
  // Normalisasi input agar cocok dengan knowledgeBase
  function norm(val) {
    if (!val) return val;
    return val.trim().toLowerCase();
  }
  const input = {
    ram: norm(ram),
    kamera: norm(kamera),
    spek: norm(spek),
    harga: norm(harga)
  };

  // Normalisasi data knowledgeBase
  function normObj(obj) {
    return {
      ram: norm(obj.ram),
      kamera: norm(obj.kamera),
      spek: norm(obj.spek),
      harga: norm(obj.harga)
    };
  }

  // Cari SEMUA aturan yang cocok dari knowledgeBase
  const hasilList = (typeof knowledgeBase !== 'undefined' ? knowledgeBase : []).filter(rule => {
    const k = normObj(rule.kondisi);
    // Perbaiki perbandingan agar null/undefined tidak menyebabkan gagal
    return String(k.ram) === String(input.ram) &&
           String(k.kamera) === String(input.kamera) &&
           String(k.spek) === String(input.spek) &&
           String(k.harga) === String(input.harga);
  });

  if (hasilList.length > 0) {
    return '<b>Rekomendasi:</b><ul style="text-align:left;max-width:400px;margin:1rem auto;">' + hasilList.map(h => `<li>${h.rekomendasi}</li>`).join('') + '</ul>';
  } else {
    return '<b>Tidak ada smartphone yang cocok dengan kriteria Anda.</b>';
  }
}
