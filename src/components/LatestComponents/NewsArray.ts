interface blogs {
  id: number;
  title: string;
  topic: string;
  description: string;
  image: string;
  publisher: string;
  date: string;
}

const Blog: blogs[] = [
  {
    id: 1,
    title: "The albanian German lawyers",
    topic: "Topic 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://s3-alpha-sig.figma.com/img/5d5e/8284/5d3abe2fcad0b544fec8284e9ce0ef49?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TWHVImTMTSXsKKSpXs4c1i3v4hNOu7SNGlDJnfSW5rBTULBaMH3T2GRRks-r3blyEDBbEIs5OsLVlUysGAMYsqXnnOHVWUrNafTXSYkyoirMmi30oISZeGyC~3KrUPtGZ9CyjYM-Lq4Alz4deso3UxoCY2PUWOMhKQkN9J3OaPCOf1T14fosec~YNNaL1da34x7NfixFjH9ffB9FpUTpGBAdNGs94bQ0oofhxd-RdFWf6BshDmcYnLlyE~cuCTWtJ5tDHYV5wtuDsiehHgvK75GuEUBuXjtF3IbB50n5R5hSkvBehjprPn~yRW5fX6ivifVz~7kz~EXPDNSvJN9jCQ__",
    publisher: "Publisher Name",
    date: "2 Dec 2024",
  },
  {
    id: 2,
    title: "Why Lorem Ipsum?",
    topic: "Topic 2",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://s3-alpha-sig.figma.com/img/5d5e/8284/5d3abe2fcad0b544fec8284e9ce0ef49?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TWHVImTMTSXsKKSpXs4c1i3v4hNOu7SNGlDJnfSW5rBTULBaMH3T2GRRks-r3blyEDBbEIs5OsLVlUysGAMYsqXnnOHVWUrNafTXSYkyoirMmi30oISZeGyC~3KrUPtGZ9CyjYM-Lq4Alz4deso3UxoCY2PUWOMhKQkN9J3OaPCOf1T14fosec~YNNaL1da34x7NfixFjH9ffB9FpUTpGBAdNGs94bQ0oofhxd-RdFWf6BshDmcYnLlyE~cuCTWtJ5tDHYV5wtuDsiehHgvK75GuEUBuXjtF3IbB50n5R5hSkvBehjprPn~yRW5fX6ivifVz~7kz~EXPDNSvJN9jCQ__",
    publisher: "Publisher Name",
    date: "1 Dec 2024",
  },
  {
    id: 3,
    title: "The Evolution of Lorem Ipsum",
    topic: "Topic 3",
    description:
      "It has survived not only five centuries, but also the leap into electronic typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://s3-alpha-sig.figma.com/img/5d5e/8284/5d3abe2fcad0b544fec8284e9ce0ef49?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TWHVImTMTSXsKKSpXs4c1i3v4hNOu7SNGlDJnfSW5rBTULBaMH3T2GRRks-r3blyEDBbEIs5OsLVlUysGAMYsqXnnOHVWUrNafTXSYkyoirMmi30oISZeGyC~3KrUPtGZ9CyjYM-Lq4Alz4deso3UxoCY2PUWOMhKQkN9J3OaPCOf1T14fosec~YNNaL1da34x7NfixFjH9ffB9FpUTpGBAdNGs94bQ0oofhxd-RdFWf6BshDmcYnLlyE~cuCTWtJ5tDHYV5wtuDsiehHgvK75GuEUBuXjtF3IbB50n5R5hSkvBehjprPn~yRW5fX6ivifVz~7kz~EXPDNSvJN9jCQ__",
    publisher: "Publisher Name",
    date: "29 Nov 2024",
  },
  {
    id: 4,
    title: "Lorem Ipsum is simply",
    topic: "Topic 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://s3-alpha-sig.figma.com/img/5d5e/8284/5d3abe2fcad0b544fec8284e9ce0ef49?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TWHVImTMTSXsKKSpXs4c1i3v4hNOu7SNGlDJnfSW5rBTULBaMH3T2GRRks-r3blyEDBbEIs5OsLVlUysGAMYsqXnnOHVWUrNafTXSYkyoirMmi30oISZeGyC~3KrUPtGZ9CyjYM-Lq4Alz4deso3UxoCY2PUWOMhKQkN9J3OaPCOf1T14fosec~YNNaL1da34x7NfixFjH9ffB9FpUTpGBAdNGs94bQ0oofhxd-RdFWf6BshDmcYnLlyE~cuCTWtJ5tDHYV5wtuDsiehHgvK75GuEUBuXjtF3IbB50n5R5hSkvBehjprPn~yRW5fX6ivifVz~7kz~EXPDNSvJN9jCQ__",
    publisher: "Publisher Name",
    date: "2 Dec 2024",
  },
  {
    id: 5,
    title: "Why Lorem Ipsum?",
    topic: "Topic 2",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://s3-alpha-sig.figma.com/img/5d5e/8284/5d3abe2fcad0b544fec8284e9ce0ef49?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TWHVImTMTSXsKKSpXs4c1i3v4hNOu7SNGlDJnfSW5rBTULBaMH3T2GRRks-r3blyEDBbEIs5OsLVlUysGAMYsqXnnOHVWUrNafTXSYkyoirMmi30oISZeGyC~3KrUPtGZ9CyjYM-Lq4Alz4deso3UxoCY2PUWOMhKQkN9J3OaPCOf1T14fosec~YNNaL1da34x7NfixFjH9ffB9FpUTpGBAdNGs94bQ0oofhxd-RdFWf6BshDmcYnLlyE~cuCTWtJ5tDHYV5wtuDsiehHgvK75GuEUBuXjtF3IbB50n5R5hSkvBehjprPn~yRW5fX6ivifVz~7kz~EXPDNSvJN9jCQ__",
    publisher: "Publisher Name",
    date: "1 Dec 2024",
  },
  {
    id: 6,
    title: "The Evolution of Lorem Ipsum",
    topic: "Topic 3",
    description:
      "It has survived not only five centuries, but also the leap into electronic typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://s3-alpha-sig.figma.com/img/5d5e/8284/5d3abe2fcad0b544fec8284e9ce0ef49?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TWHVImTMTSXsKKSpXs4c1i3v4hNOu7SNGlDJnfSW5rBTULBaMH3T2GRRks-r3blyEDBbEIs5OsLVlUysGAMYsqXnnOHVWUrNafTXSYkyoirMmi30oISZeGyC~3KrUPtGZ9CyjYM-Lq4Alz4deso3UxoCY2PUWOMhKQkN9J3OaPCOf1T14fosec~YNNaL1da34x7NfixFjH9ffB9FpUTpGBAdNGs94bQ0oofhxd-RdFWf6BshDmcYnLlyE~cuCTWtJ5tDHYV5wtuDsiehHgvK75GuEUBuXjtF3IbB50n5R5hSkvBehjprPn~yRW5fX6ivifVz~7kz~EXPDNSvJN9jCQ__",
    publisher: "Publisher Name",
    date: "29 Nov 2024",
  },
  {
    id: 7,
    title: "The way to program",
    topic: "Topic 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://s3-alpha-sig.figma.com/img/5d5e/8284/5d3abe2fcad0b544fec8284e9ce0ef49?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TWHVImTMTSXsKKSpXs4c1i3v4hNOu7SNGlDJnfSW5rBTULBaMH3T2GRRks-r3blyEDBbEIs5OsLVlUysGAMYsqXnnOHVWUrNafTXSYkyoirMmi30oISZeGyC~3KrUPtGZ9CyjYM-Lq4Alz4deso3UxoCY2PUWOMhKQkN9J3OaPCOf1T14fosec~YNNaL1da34x7NfixFjH9ffB9FpUTpGBAdNGs94bQ0oofhxd-RdFWf6BshDmcYnLlyE~cuCTWtJ5tDHYV5wtuDsiehHgvK75GuEUBuXjtF3IbB50n5R5hSkvBehjprPn~yRW5fX6ivifVz~7kz~EXPDNSvJN9jCQ__",
    publisher: "Publisher Name",
    date: "2 Dec 2024",
  },
  {
    id: 8,
    title: "Why Lorem Ipsum?",
    topic: "Topic 2",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://s3-alpha-sig.figma.com/img/5d5e/8284/5d3abe2fcad0b544fec8284e9ce0ef49?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TWHVImTMTSXsKKSpXs4c1i3v4hNOu7SNGlDJnfSW5rBTULBaMH3T2GRRks-r3blyEDBbEIs5OsLVlUysGAMYsqXnnOHVWUrNafTXSYkyoirMmi30oISZeGyC~3KrUPtGZ9CyjYM-Lq4Alz4deso3UxoCY2PUWOMhKQkN9J3OaPCOf1T14fosec~YNNaL1da34x7NfixFjH9ffB9FpUTpGBAdNGs94bQ0oofhxd-RdFWf6BshDmcYnLlyE~cuCTWtJ5tDHYV5wtuDsiehHgvK75GuEUBuXjtF3IbB50n5R5hSkvBehjprPn~yRW5fX6ivifVz~7kz~EXPDNSvJN9jCQ__",
    publisher: "Publisher Name",
    date: "1 Dec 2024",
  },
  {
    id: 9,
    title: "The Evolution of Lorem Ipsum",
    topic: "Topic 3",
    description:
      "It has survived not only five centuries, but also the leap into electronic typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://s3-alpha-sig.figma.com/img/5d5e/8284/5d3abe2fcad0b544fec8284e9ce0ef49?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TWHVImTMTSXsKKSpXs4c1i3v4hNOu7SNGlDJnfSW5rBTULBaMH3T2GRRks-r3blyEDBbEIs5OsLVlUysGAMYsqXnnOHVWUrNafTXSYkyoirMmi30oISZeGyC~3KrUPtGZ9CyjYM-Lq4Alz4deso3UxoCY2PUWOMhKQkN9J3OaPCOf1T14fosec~YNNaL1da34x7NfixFjH9ffB9FpUTpGBAdNGs94bQ0oofhxd-RdFWf6BshDmcYnLlyE~cuCTWtJ5tDHYV5wtuDsiehHgvK75GuEUBuXjtF3IbB50n5R5hSkvBehjprPn~yRW5fX6ivifVz~7kz~EXPDNSvJN9jCQ__",
    publisher: "Publisher Name",
    date: "29 Nov 2024",
  },
  {
    id: 10,
    title: "The Evolution of Lorem Ipsum",
    topic: "Topic 3",
    description:
      "It has survived not only five centuries, but also the leap into electronic typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://s3-alpha-sig.figma.com/img/5d5e/8284/5d3abe2fcad0b544fec8284e9ce0ef49?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TWHVImTMTSXsKKSpXs4c1i3v4hNOu7SNGlDJnfSW5rBTULBaMH3T2GRRks-r3blyEDBbEIs5OsLVlUysGAMYsqXnnOHVWUrNafTXSYkyoirMmi30oISZeGyC~3KrUPtGZ9CyjYM-Lq4Alz4deso3UxoCY2PUWOMhKQkN9J3OaPCOf1T14fosec~YNNaL1da34x7NfixFjH9ffB9FpUTpGBAdNGs94bQ0oofhxd-RdFWf6BshDmcYnLlyE~cuCTWtJ5tDHYV5wtuDsiehHgvK75GuEUBuXjtF3IbB50n5R5hSkvBehjprPn~yRW5fX6ivifVz~7kz~EXPDNSvJN9jCQ__",
    publisher: "Publisher Name",
    date: "29 Nov 2024",
  },
];

export default Blog;
