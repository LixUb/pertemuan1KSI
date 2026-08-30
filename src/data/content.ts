export const navItems = [
  { id: "overview", label: "Overview" },
  { id: "hsb", label: "Hardware / Software / Brainware" },
  { id: "io", label: "Input → Processing → Output" },
  { id: "cpu", label: "CPU" },
  { id: "memory", label: "Memory" },
  { id: "input-devices", label: "Input Device" },
  { id: "output-devices", label: "Output Device" },
  { id: "example", label: "Contoh Cara Kerja" },
  { id: "conclusion", label: "Inti Materi" },
] as const;

export const hardwareExamples = [
  "CPU / Processor",
  "RAM",
  "SSD / HDD",
  "Keyboard",
  "Mouse",
  "Monitor",
  "Motherboard",
  "GPU",
];

export const softwareExamples = [
  "Windows",
  "Linux",
  "macOS",
  "Google Chrome",
  "Microsoft Word",
  "VS Code",
  "Game",
];

export const brainwareExamples = [
  "User",
  "Programmer",
  "Developer",
  "System Administrator",
];

export const inputExamples = [
  "Keyboard",
  "Mouse",
  "Microphone",
  "Camera",
  "Scanner",
  "Touchscreen",
];

export const processingComponents = [
  "CPU",
  "ALU",
  "Control Unit",
  "Register",
  "RAM (penyimpanan sementara)",
];

export const outputExamples = [
  "Monitor",
  "Speaker",
  "Printer",
  "Projector",
  "Headphone",
];

export const inputDevices = [
  {
    name: "Keyboard",
    icon: "Keyboard" as const,
    desc: "Digunakan untuk mengetik teks dan perintah ke komputer.",
  },
  {
    name: "Mouse",
    icon: "MousePointer2" as const,
    desc: "Menggerakkan kursor dan memilih objek di layar.",
  },
  {
    name: "Microphone",
    icon: "Mic" as const,
    desc: "Merekam suara sebagai input audio.",
  },
  {
    name: "Webcam",
    icon: "Camera" as const,
    desc: "Menangkap video atau gambar untuk komputer.",
  },
  {
    name: "Scanner",
    icon: "ScanLine" as const,
    desc: "Mengubah dokumen fisik menjadi file digital.",
  },
  {
    name: "Touchscreen",
    icon: "Hand" as const,
    desc: "Memberikan input sentuh langsung pada layar.",
  },
  {
    name: "Game Controller",
    icon: "Gamepad2" as const,
    desc: "Mengontrol karakter dan aksi dalam game.",
  },
];

export const outputDevices = [
  {
    name: "Monitor",
    icon: "Monitor" as const,
    desc: "Menampilkan teks, gambar, dan video kepada pengguna.",
  },
  {
    name: "Speaker",
    icon: "Speaker" as const,
    desc: "Mengeluarkan suara atau audio ke lingkungan sekitar.",
  },
  {
    name: "Printer",
    icon: "Printer" as const,
    desc: "Mencetak dokumen atau gambar ke kertas.",
  },
  {
    name: "Projector",
    icon: "Projector" as const,
    desc: "Memproyeksikan tampilan ke layar atau dinding besar.",
  },
  {
    name: "Headphone",
    icon: "Headphones" as const,
    desc: "Memberikan output audio secara pribadi ke telinga.",
  },
];

export const conclusionPoints = [
  "Hardware = perangkat fisik",
  "Software = program / instruksi",
  "Brainware = manusia",
  "Input = data yang masuk",
  "Processing = data yang diproses",
  "Output = hasil pemrosesan",
  "CPU = menjalankan instruksi dan memproses data",
  "RAM = memori sementara",
  "SSD / HDD = penyimpanan permanen",
];

export type IconName =
  | "Keyboard"
  | "MousePointer2"
  | "Mic"
  | "Camera"
  | "ScanLine"
  | "Hand"
  | "Gamepad2"
  | "Monitor"
  | "Speaker"
  | "Printer"
  | "Projector"
  | "Headphones";
