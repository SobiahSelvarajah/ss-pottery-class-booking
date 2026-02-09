

export type Studio = {
    name: string
    slug: string
    location: string
    area: "hackney" | "greenwich" | "islington" | "peckham"
    description: string
    images: string[]
    alt: string
}

export const studiosData: Studio[] = [
  {
    name: "Clay Room Studio",
    slug: "clay-room-studio",
    location: "Hackney, London",
    area: "hackney",
    description:
      "A warm, community-led studio focused on wheel throwing and beginner-friendly classes.",
    images: [
      "/images/studio1-1.jpg",
      "/images/studio1-2.jpg",
      "/images/studio1-3.jpg",
    ],
    alt: "Clay Room studio pottery wheels"
  },
  {
    name: "Earth & Fire",
    slug: "earth-and-fire",
    location: "Greenwich, London",
    area: "greenwich",
    description:
      "An intimate studio specialising in hand-building and small group workshops.",
    images: [
      "/images/studio2-1.jpg",
      "/images/studio2-2.jpg",
      "/images/studio2-3.jpg",
    ],
    alt: "Earth & Fire studio handmade ceramics"
  },
  {
    name: "Kiln House",
    slug: "kiln-house",
    location: "Islington, London",
    area: "islington",
    description:
      "Contemporary ceramics studio offering structured courses for all skill levels.",
    images: [
      "/images/studio3-1.jpg",
      "/images/studio3-2.jpg",
      "/images/studio3-3.jpg",
    ],
    alt: "Kiln House studio interior with shelves"
  },
  {
    name: "South Clay Studio",
    slug: "south-clay-studio",
    location: "Peckham, London",
    area: "peckham",
    description:
      "A relaxed, welcoming space focused on creative exploration and community learning.",
    images: [
      "/images/studio4-1.jpg",
      "/images/studio4-2.jpg",
      "/images/studio4-3.jpg",
    ],
    alt: "South Clay Studio pottery class in progress"
  },
]