export const conceptsData = [
  {
      id: "VAR-01",
      title: "The Obsidian Gallery",
      vibe: "Mysterious, high-end, architectural.",
      imagery: "High-contrast B&W photography with heavy film grain.",
      typography: "Overlapping serif headers that bleed off the edges of the grid.",
      implementation: "Focus on 'Negative Space' and sharp, 1px borders.",
      previewClass: "bg-[#0A0A0A] border border-gray-800",
      previewContent: "<div class='w-full text-left'><div class='text-white font-serif text-3xl italic tracking-tighter ml-[-10px]'>Obsidian.</div><div class='text-[10px] text-gray-500 font-mono mt-4 border-t border-gray-800 pt-2'>1PX // NEGATIVE SPACE</div></div>",
      metrics: [95, 70, 30, 85, 20]
  },
  {
      id: "VAR-02",
      title: "The Kinetic Sidebar",
      vibe: "Fast, digital-first, fluid.",
      imagery: "Video loops or Lottie animations that play only when the specific experiment is in the center of the screen.",
      typography: "Vertical sidebars that act as navigation and progress indicators.",
      implementation: "Scroll-linked animations and viewport intersection observers.",
      previewClass: "bg-blue-50 flex items-center gap-4 border border-blue-100",
      previewContent: "<div class='w-8 h-full bg-blue-600 rounded-full animate-pulse'></div><div class='flex-1'><div class='h-4 bg-blue-200 rounded w-3/4 mb-2'></div><div class='h-2 bg-blue-100 rounded w-1/2'></div></div>",
      metrics: [40, 95, 80, 50, 70]
  },
  {
      id: "VAR-03",
      title: "The Blueprint Archive",
      vibe: "Scientific, precise, 'Work in Progress.'",
      imagery: "Cyanotype-style blue/white technical drawings or thermal heatmaps.",
      typography: "100% Monospace (Courier/IBM Plex Mono) with 'Version Numbers' and 'Timestamp' metadata visible everywhere.",
      implementation: "Grid layouts, dashed borders, and rigorous alignment.",
      previewClass: "bg-blue-900 border-2 border-dashed border-blue-400",
      previewContent: "<div class='w-full border border-blue-400 p-2'><div class='text-blue-300 font-mono text-xs mb-2'>TS: 19:04:22 // V1.0</div><div class='grid grid-cols-3 gap-1'><div class='h-8 border border-blue-500'></div><div class='h-8 border border-blue-500 bg-blue-800'></div><div class='h-8 border border-blue-500'></div></div></div>",
      metrics: [80, 60, 90, 40, 10]
  },
  {
      id: "VAR-04",
      title: "The Glass Prism",
      vibe: "Clean, airy, futuristic.",
      imagery: "Translucent 3D objects that distort the text behind them using backdrop-filter: blur().",
      typography: "Thin, spaced-out sans-serif (Inter/Geist) for a tech-startup feel.",
      implementation: "Heavy use of CSS backdrop-filter, gradients, and z-index layering.",
      previewClass: "bg-gradient-to-tr from-pink-100 to-cyan-100 relative overflow-hidden border border-white",
      previewContent: "<div class='absolute top-2 left-2 right-2 bottom-2 glass-bg rounded-lg flex items-center justify-center'><span class='text-gray-800 tracking-[0.3em] text-xs uppercase'>Translucent</span></div>",
      metrics: [20, 90, 60, 60, 95]
  },
  {
      id: "VAR-05",
      title: "The Brutalist Newspaper",
      vibe: "Raw, authentic, printed.",
      imagery: "Dithered, low-resolution 'stamped' images that look like they were printed on newspaper.",
      typography: "Variable fonts that change weight as you scroll, creating a sense of 'pressure' or 'urgency.'",
      implementation: "CSS dithering techniques, extreme typography scaling, minimal color.",
      previewClass: "bg-[#eee] border-4 border-black dither-bg",
      previewContent: "<div class='bg-white p-2 border-2 border-black w-3/4 transform -rotate-2'><h1 class='font-serif font-black text-2xl uppercase leading-none'>RAW<br>DATA</h1></div>",
      metrics: [90, 40, 20, 95, 30]
  }
];
