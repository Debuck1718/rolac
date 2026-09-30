import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const SRC = "public/photos_originals";
const OUT = "public/photos";
await mkdir(OUT, { recursive: true });

// name, source, width, height, position
const jobs = [
  // ---- program.jpeg (4471x3577, landscape) — community / teachers / programs
  ["program-wide", "program.jpeg", 1600, 900, "attention"],
  ["program-hero", "program.jpeg", 1920, 1080, "attention"],
  ["program-portrait", "program.jpeg", 900, 1200, "attention"],
  ["program-square", "program.jpeg", 900, 900, "attention"],
  ["program-card", "program.jpeg", 800, 600, "attention"],
  ["program-thumb", "program.jpeg", 640, 480, "attention"],
  ["program-alt", "program.jpeg", 800, 600, "east"],

  // ---- students.jpeg (960x1280, portrait) — students learning
  ["students-portrait", "students.jpeg", 900, 1200, "attention"],
  ["students-card", "students.jpeg", 800, 1000, "attention"],
  ["students-square", "students.jpeg", 900, 900, "attention"],
  ["students-thumb", "students.jpeg", 640, 480, "attention"],
  ["students-alt", "students.jpeg", 800, 600, "south"],

  // ---- student_grad.png (830x960, portrait) — graduation / achievements
  ["grads-portrait", "student_grad.png", 900, 1200, "attention"],
  ["grads-card", "student_grad.png", 800, 1000, "attention"],
  ["grads-square", "student_grad.png", 900, 900, "attention"],
  ["grads-thumb", "student_grad.png", 640, 480, "attention"],
  ["grads-alt", "student_grad.png", 800, 600, "north"],

  // ---- lectures.jpeg (720x960, portrait) — lecturing environment
  ["lectures-portrait", "lectures.jpeg", 900, 1200, "attention"],
  ["lectures-card", "lectures.jpeg", 800, 1000, "attention"],
  ["lectures-square", "lectures.jpeg", 900, 900, "attention"],
  ["lectures-thumb", "lectures.jpeg", 640, 480, "attention"],
  ["lectures-alt", "lectures.jpeg", 800, 600, "north"],
];

for (const [name, file, w, h, pos] of jobs) {
  const base = sharp(`${SRC}/${file}`)
    .resize(w, h, { fit: "cover", position: pos })
    .modulate({ saturation: 1.05 });

  await base.clone().webp({ quality: 82 }).toFile(`${OUT}/${name}.webp`);
  await base.clone().jpeg({ quality: 84, mozjpeg: true }).toFile(`${OUT}/${name}.jpg`);
  console.log("built", name);
}

console.log("done");
