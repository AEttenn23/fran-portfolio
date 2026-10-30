// Portfolio data, taken from https://franrodriguezmorales.artstation.com/
// Image shorthand: "a|path" -> https://cdna.artstation.com/p/assets/images/images/path ("b" -> cdnb)
// The site serves local copies from images/<id>/ (cover as cover-<file>), downloaded from these URLs.

const ARTSTATION = 'https://www.artstation.com/franrodriguezmorales';

const img = (s) => {
  const [cdn, path] = s.split('|');
  return `https://cdn${cdn}.artstation.com/p/assets/images/images/${path}`;
};

const PROJECTS = [
  {
    id: 'KR3vq4',
    title: 'Braided Hair - Haircards',
    cover: 'https://cdna.artstation.com/p/assets/covers/images/102/846/260/medium/francisco-rodriguez-morales-francisco-rodriguez-morales-thumbnail.webp?1790784747',
    description: 'A hair card setup created for a character currently in development. The focus was on building clean, efficient cards for the character’s braided hairstyle, with attention to strand flow, silhouette, layering, and overall realism.',
    images: [
      'a|102/845/472/large/francisco-rodriguez-morales-postpro2.webp?1790784525',
      'b|102/845/473/large/francisco-rodriguez-morales-postpro1.webp?1790783306',
      'b|102/846/109/large/francisco-rodriguez-morales-postpro3.webp?1790784466',
      'b|102/846/105/large/francisco-rodriguez-morales-postpro4.webp?1790784460',
    ],
  },
  {
    id: '0a46G5',
    title: 'Chucky and Props - Game Ready',
    cover: 'https://cdna.artstation.com/p/assets/covers/images/102/294/326/medium/francisco-rodriguez-morales-francisco-rodriguez-morales-thumbnail2.webp?1788991647',
    description: 'Wanted to make a character from A to Z, so I choosed Chucky, not just because I love it but because I don\'t see too much of this little guy (except for the DBD one), so I go all in and tried to make a fusion of the Chucky\'s versions I liked the most and this came out.\nAnd well, for the props, I think it wouldn\'t be Chucky without his bloody knife because "A true classic never goes out of style" ;DDD.\nHope y\'all like it.',
    hasVideo: true,
    images: [
      'b|102/295/265/large/francisco-rodriguez-morales-2.webp?1788994676',
      'b|102/295/275/large/francisco-rodriguez-morales-turnaround.webp?1788994691',
      'b|102/295/277/large/francisco-rodriguez-morales-uvs.webp?1788994697',
      'a|102/295/286/large/francisco-rodriguez-morales-mts.webp?1788994723',
      'a|102/294/336/large/francisco-rodriguez-morales-rendercool.webp?1788991703',
      'b|102/294/335/large/francisco-rodriguez-morales-propsall-props-done.webp?1788991697',
      'a|102/294/332/large/francisco-rodriguez-morales-propsall-props-005.webp?1788991692',
      'b|102/294/329/large/francisco-rodriguez-morales-props-done2.webp?1788991684',
      'a|102/294/330/large/francisco-rodriguez-morales-props-done2-painted.webp?1788991688',
      'a|102/287/686/large/francisco-rodriguez-morales-imagen-2026-09-09-200204269.webp?1788976924',
      'b|102/295/371/large/francisco-rodriguez-morales-fnguer.webp?1788995099',
      'a|102/295/280/large/francisco-rodriguez-morales-6.webp?1788994711',
      'b|102/295/279/large/francisco-rodriguez-morales-5.webp?1788994706',
      'b|102/295/283/large/francisco-rodriguez-morales-7.webp?1788994715',
      'a|102/295/284/large/francisco-rodriguez-morales-8.webp?1788994719',
      'a|102/295/288/large/francisco-rodriguez-morales-1.webp?1788994728',
      'a|102/295/290/large/francisco-rodriguez-morales-3.webp?1788994731',
      'a|102/295/292/large/francisco-rodriguez-morales-4.webp?1788994735',
    ],
  },
  {
    id: 'LaRbgA',
    title: 'Biggie - Likeness WIP',
    cover: 'https://cdnb.artstation.com/p/assets/images/images/102/353/071/medium/francisco-rodriguez-morales-render2.webp?1789172782',
    description: 'WIP of a likeness of Biggie made in Zbrush.\nWanting to push him a bit more, make the suit, hat and hand and take some good renders.',
    images: [
      'b|102/353/071/large/francisco-rodriguez-morales-render2.webp?1789172782',
      'a|102/353/028/large/francisco-rodriguez-morales-2.webp?1789172527',
      'b|102/353/141/large/francisco-rodriguez-morales-imagen-2026-09-12-023447770.webp?1789173288',
    ],
  },
  {
    id: '2LlgGy',
    title: 'Naomi',
    cover: 'https://cdnb.artstation.com/p/assets/covers/images/100/326/071/medium/francisco-rodriguez-morales-francisco-rodriguez-morales-postpro.webp?1782533261',
    description: 'This work was my last project for School, wanted to learn more about hair, haircards and placement, evolved into also making some blendshapes and trying to archive a nice and clean texturing.',
    images: [
      'a|100/325/908/large/francisco-rodriguez-morales-ioj.webp?1782531707',
      'b|100/325/911/large/francisco-rodriguez-morales-postpro.webp?1782531719',
      'b|100/326/157/large/francisco-rodriguez-morales-sin-to-1.webp?1782533475',
      'a|100/326/206/original/francisco-rodriguez-morales-2026-06-27-06-14-01.gif?1782533743',
      'b|100/325/907/large/francisco-rodriguez-morales-ikoj.webp?1782531703',
      'a|100/325/906/large/francisco-rodriguez-morales-fbeauty.webp?1782531698',
      'a|100/325/910/large/francisco-rodriguez-morales-oooool.webp?1782531715',
      'a|100/326/038/large/francisco-rodriguez-morales-sin-titulo-1.webp?1782532611',
      'b|100/325/905/large/francisco-rodriguez-morales-colors.webp?1782531687',
      'a|100/325/916/large/francisco-rodriguez-morales-screenshot-2026-04-30-000719-franciscorodriguez.webp?1782531742',
      'b|100/325/917/large/francisco-rodriguez-morales-screenshot-2026-04-29-234236-franciscorodriguez.webp?1782531745',
      'b|100/325/923/large/francisco-rodriguez-morales-screenshot-2026-04-29-234755.webp?1782531842',
      'a|100/325/920/large/francisco-rodriguez-morales-screenshot-2026-05-04-233553.webp?1782531820',
      'b|100/325/957/large/francisco-rodriguez-morales-screenshot-2026-04-29-235538.webp?1782532126',
      'b|100/325/959/large/francisco-rodriguez-morales-screenshot-2026-04-30-000007.webp?1782532133',
    ],
  },
  {
    id: 'DYvXNo',
    title: 'Pipe Wrench - Game Ready',
    cover: 'https://cdnb.artstation.com/p/assets/covers/images/102/512/349/medium/francisco-rodriguez-morales-francisco-rodriguez-morales-miniatura2.webp?1789690612',
    description: 'I wanted to create a hero prop for a character I’m currently developing.\nFor this piece, I focused heavily on the painted/chipped metal look. I pushed the surface treatment as far as I could and had a lot of fun experimenting with different techniques and methods to achieve the result I was looking for.\nFor the pipeline, I started by building the low/mid-poly model and then brought it into ZBrush for further detailing. This workflow ended up speeding up the process quite a bit while still giving me plenty of control over the final shapes and surface details.',
    images: [
      'b|102/511/865/large/francisco-rodriguez-morales-3.webp?1789688628',
      'b|102/511/867/large/francisco-rodriguez-morales-4.webp?1789688634',
      'a|102/511/876/original/francisco-rodriguez-morales-wireframe.gif?1789688648',
      'b|102/511/879/large/francisco-rodriguez-morales-2.webp?1789688656',
      'b|102/511/881/large/francisco-rodriguez-morales-1.webp?1789688659',
      'b|102/511/871/large/francisco-rodriguez-morales-5.webp?1789688638',
      'a|102/511/874/large/francisco-rodriguez-morales-6.webp?1789688642',
    ],
  },
  {
    id: 'lG8a5O',
    title: 'Karl Müller (3D sculpt)',
    cover: 'https://cdnb.artstation.com/p/assets/covers/images/087/989/961/medium/francisco-rodriguez-morales-francisco-rodriguez-morales-thumbnail.jpg?1747175870',
    description: 'Thanks to this project, I won the Florida Universitaria Art Challenge.\nThe objective was to create a prop, character, environment, or concept based on the Industrial Revolution within a week, so, I quickly created a concept art based on Arthur Shelby, from Peaky Blinders and several steam/diesel punk-themed games, to create Karl.\nIt was an incredible challenge, as I had never pushed a project this far before.\nThe topology isn\'t optimized for animation or games, but that wasn\'t the idea due the short timeframe we were given to complete the challenge.\nI\'d like to thank Florida University for this opportunity, and to those reading this for supporting me.\nI hope you like this piece.',
    images: [
      'b|087/989/501/large/francisco-rodriguez-morales-karl-muller-toexport-0013-fondo.jpg?1747174835',
      'a|087/989/484/large/francisco-rodriguez-morales-karl-muller-toexport-0008-fondo.jpg?1747174811',
      'b|087/989/475/large/francisco-rodriguez-morales-karl-muller-toexport-0002-fondo.jpg?1747174786',
      'b|087/989/481/large/francisco-rodriguez-morales-karl-muller-toexport-0006-fondo.jpg?1747174803',
      'a|087/989/480/large/francisco-rodriguez-morales-karl-muller-toexport-0005-fondo.jpg?1747174799',
      'b|087/989/493/large/francisco-rodriguez-morales-karl-muller-toexport-0011-fondo.jpg?1747174826',
      'b|087/989/477/large/francisco-rodriguez-morales-karl-muller-toexport-0003-fondo.jpg?1747174790',
      'b|087/989/483/large/francisco-rodriguez-morales-karl-muller-toexport-0007-fondo.jpg?1747174807',
      'b|087/989/479/large/francisco-rodriguez-morales-karl-muller-toexport-0004-fondo.jpg?1747174794',
      'a|087/989/488/large/francisco-rodriguez-morales-karl-muller-toexport-0009-fondo.jpg?1747174815',
      'b|087/989/491/large/francisco-rodriguez-morales-karl-muller-toexport-0010-fondo.jpg?1747174820',
      'b|087/989/469/large/francisco-rodriguez-morales-karl-muller-toexport-0000-fondo.jpg?1747174776',
      'b|087/989/473/large/francisco-rodriguez-morales-karl-muller-toexport-0001-fondo.jpg?1747174781',
      'b|087/989/499/large/francisco-rodriguez-morales-karl-muller-toexport-0012-fondo.jpg?1747174831',
      'b|087/990/313/original/francisco-rodriguez-morales-process.gif?1747176925',
      'b|103/220/853/large/francisco-rodriguez-morales-imagen-2026-10-14-185719892.webp?1791997046',
      'b|103/220/885/large/francisco-rodriguez-morales-imagen-2026-10-14-185819989.webp?1791997107',
    ],
  },
  {
    id: '1NDWYG',
    title: 'Anatomy Practice - Hellboy',
    cover: 'https://cdnb.artstation.com/p/assets/covers/images/094/387/385/medium/francisco-rodriguez-morales-francisco-rodriguez-morales-mini.webp?1765293338',
    description: 'Based on Guillermo del Toro\'s Hellboy but with my original design.',
    images: [
      'b|094/387/287/large/francisco-rodriguez-morales-demo-reel-portada.webp?1765293166',
      'a|093/140/356/large/francisco-rodriguez-morales-2.webp?1761694140',
      'a|093/140/332/large/francisco-rodriguez-morales-4.webp?1761694083',
      'b|093/140/327/large/francisco-rodriguez-morales-1.webp?1761694075',
      'b|093/140/329/large/francisco-rodriguez-morales-3.webp?1761694081',
      'a|093/140/334/large/francisco-rodriguez-morales-5.webp?1761694086',
      'a|093/140/336/large/francisco-rodriguez-morales-6.webp?1761694089',
    ],
  },
  {
    id: 'Jwrzb0',
    title: 'Istanbul - Corn',
    cover: 'https://cdna.artstation.com/p/assets/covers/images/102/899/160/medium/francisco-rodriguez-morales-francisco-rodriguez-morales-imagen-2026-10-02-153102907.webp?1790948365',
    description: 'My contribution as a 3D Artist Intern to the Leartes Studios\' latest pack Istanbul Modular City Gigapack. I was responsible for the corn and his variants and the graffitis on this project. Thank you Leartes Studios and everyone who worked on this project. This work was developed during my internship at Hunting Souls, a 3D art outsourcing and co-development studio. Huge thanks to the whole Hunting Souls team for the guidance and the opportunity: https://huntingsouls.es/\n\nYou can access the "Istanbul Modular City Megapack" here:\nhttps://cosmos.leartesstudios.com/environments/istanbul-city-megapack-taksim-istiklal-street',
    images: [
      'a|102/899/028/large/francisco-rodriguez-morales-imagen-2026-10-02-153345475.webp?1790948028',
    ],
  },
  {
    id: 'rzl4y6',
    title: 'Istanbul - Graffiti',
    cover: 'https://cdnb.artstation.com/p/assets/covers/images/102/914/883/medium/francisco-rodriguez-morales-francisco-rodriguez-morales-imagen-2026-10-03-044700813.webp?1790995821',
    description: 'My contribution as a 3D Artist Intern to the Leartes Studios\' latest pack Istanbul Modular City Gigapack. I was responsible for the corn and his variants and the graffitis on this project. Thank you Leartes Studios and everyone who worked on this project. This work was developed during my internship at Hunting Souls, a 3D art outsourcing and co-development studio. Huge thanks to the whole Hunting Souls team for the guidance and the opportunity: https://huntingsouls.es/\n\nYou can access the "Istanbul Modular City Megapack" here:\nhttps://cosmos.leartesstudios.com/environments/istanbul-city-megapack-taksim-istiklal-street',
    images: [
      'a|102/914/846/large/francisco-rodriguez-morales-imagen-2026-10-03-044723556.webp?1790995645',
      'b|102/914/841/large/francisco-rodriguez-morales-imagen-2026-10-03-044713177.webp?1790995634',
    ],
  },
  {
    id: 'K3mzv9',
    title: 'Bust Sketches',
    cover: 'https://cdna.artstation.com/p/assets/covers/images/094/385/748/medium/francisco-rodriguez-morales-francisco-rodriguez-morales-francisco-rodriguez-morales-img-20251115-wa0000.webp?1765290478',
    description: 'Sekiro and a man that I saw on pinterest sketched in Zbrush, used Zwrap to make the principal skin noise with the displacement map.',
    images: [
      'a|094/382/462/large/francisco-rodriguez-morales-img-20251115-wa0000.webp?1765283777',
      'b|094/382/465/large/francisco-rodriguez-morales-img-20251115-wa0001.webp?1765283780',
      'a|094/385/924/large/francisco-rodriguez-morales-sekiro.webp?1765290721',
    ],
  },
  {
    id: '4NG6d8',
    title: 'Hand Sketches',
    cover: 'https://cdna.artstation.com/p/assets/covers/images/094/386/304/medium/francisco-rodriguez-morales-francisco-rodriguez-morales-sin-titulo-1.webp?1765291433',
    description: 'Quick hands I sketched in my free time during classes (45min-1hour each)',
    images: [
      'b|094/386/119/large/francisco-rodriguez-morales-hands1.webp?1765291079',
      'b|094/386/121/large/francisco-rodriguez-morales-hands2.webp?1765291068',
      'b|094/382/349/large/francisco-rodriguez-morales-img-20251209-132611.webp?1765283543',
    ],
  },
  {
    id: 'bgW4Gn',
    title: 'Monkey Sketch - Practice',
    cover: 'https://cdnb.artstation.com/p/assets/covers/images/090/012/803/medium/francisco-rodriguez-morales-francisco-rodriguez-morales-screenshot-2025-07-16-003546.jpg?1752620832',
    description: 'Study of Chimpanzee.\nBegan in nomad for android in my free time, finished on Zbrush.',
    hasVideo: true,
    images: [
      'a|090/012/272/large/francisco-rodriguez-morales-monkey.jpg?1752619296',
    ],
  },
  {
    id: 'DL8kyR',
    title: 'Plague Faun - Concept/Practice',
    cover: 'https://cdnb.artstation.com/p/assets/covers/images/090/207/853/medium/francisco-rodriguez-morales-francisco-rodriguez-morales-thumbnail1.jpg?1753226702',
    description: 'This project started as a simple bust, based on a photo I found on Pinterest. As I worked on it, I started to get some Witcher-style creature vibes, so I decided to completely change direction and turn it into a full-body piece—combining anatomy practice, concept art, and some Fibermesh experimentation.\nIn the end… I wasn’t really sure where it was going.\nStill, I learned a few important lessons along the way:\nDon’t change the project scope without having a clear plan.\nDon’t reinvent the wheel—stick to proven workflows.\nUse polygroups.\nAnd most importantly: save your work more often!\nEven if it’s not one of my strongest pieces, it’s the first full-body sculpt I’ve completed—so it marks a small milestone in my journey.\nHope you like it!\n(As for me… I’m definitely not opening that file again 😅)',
    hasVideo: true,
    images: [
      'b|090/207/631/large/francisco-rodriguez-morales-faun75.jpg?1753226025',
      'b|090/207/635/large/francisco-rodriguez-morales-faun7.jpg?1753226042',
      'b|090/207/649/large/francisco-rodriguez-morales-faun5.jpg?1753226086',
      'b|090/207/645/large/francisco-rodriguez-morales-faun6.jpg?1753226077',
      'a|090/207/272/large/francisco-rodriguez-morales-faun55.jpg?1753225086',
      'b|090/206/927/large/francisco-rodriguez-morales-faun3.jpg?1753223989',
      'a|090/207/672/large/francisco-rodriguez-morales-faun1.jpg?1753226175',
    ],
  },
  {
    id: 'WXDDmE',
    title: 'Likeness Study - Arthur Morgan',
    cover: 'https://cdna.artstation.com/p/assets/covers/images/092/590/726/medium/francisco-rodriguez-morales-francisco-rodriguez-morales-sin-titulo-1.webp?1760071297',
    description: 'Gave myself 3 hours.\nStarted with Head Planes of Zbrush.',
    hasVideo: true,
    images: [
      'a|092/590/144/large/francisco-rodriguez-morales-am3.webp?1760068967',
      'b|092/590/145/large/francisco-rodriguez-morales-am1.webp?1760068974',
      'b|092/590/147/large/francisco-rodriguez-morales-am2.webp?1760068976',
    ],
  },
  {
    id: 'EzW9Nq',
    title: 'Color Studies',
    cover: 'https://cdnb.artstation.com/p/assets/images/images/091/713/471/medium/francisco-rodriguez-morales-color1-franciscorodriguez.webp?1757575680',
    description: 'Those are old works that I used to study color theory employing the color picker to make the palette and then optimizing the amount of strokes to show the max amount of information with the less number of it.',
    images: [
      'b|091/713/471/large/francisco-rodriguez-morales-color1-franciscorodriguez.webp?1757575680',
      'a|091/713/472/large/francisco-rodriguez-morales-color2-franciscorodriguez.webp?1757575513',
      'a|091/713/474/large/francisco-rodriguez-morales-color3-franciscorodriguez.webp?1757575518',
    ],
  },
  {
    id: 'n0qxqr',
    title: 'Grey scale study',
    cover: 'https://cdna.artstation.com/p/assets/images/images/069/681/912/medium/francisco-rodriguez-morales-asset.jpg?1700730265',
    description: 'I wanted to draw some kind of cleric medieval monk so here it is hehe',
    hasVideo: true,
    images: [
      'a|069/681/912/large/francisco-rodriguez-morales-asset.jpg?1700730265',
    ],
  },
].map((p) => {
  const file = (url) => url.split('?')[0].split('/').pop();
  return {
    ...p,
    cover: `images/${p.id}/cover-${file(p.cover)}`,
    images: p.images.map((s) => `images/${p.id}/${file(img(s))}`),
  };
});
