// One Star for Monday — entry pemenang adu lokal V1-V5.
// V5 menang 4/4 pasangan (8/8 game dua arah): "Sunday's leftovers" hanya bisa
// Monday (hari sesudah Minggu) + chef + tagihan + 14 kata, paling quotable.
// Gate terverifikasi lokal 2x run: entry.txt 91 karakter / 91 byte / 14 kata /
// 1 baris / tanpa trailing newline, sha256
// 74171e341b0e4952557b663cf80285a70c7af034b197fcb2abc0c9b841b414c1, byte-identik.
// Program ini menulis SATU baris teks ke /output/entry.txt, tanpa newline
// di akhir, agar lolos gate server: UTF-8 1-180 karakter, satu baris, <=25 kata.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Monday's chef reheated Sunday's leftovers, called it breakfast, and billed me for the week.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Self-check: file yang tertulis harus byte-identik dengan LINE dan tanpa
// newline di akhir; kalau tidak, gagal keras daripada lolos diam-diam.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt tidak byte-identik dengan LINE pemenang");
}
