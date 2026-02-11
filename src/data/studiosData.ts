

export type Studio = {
    id: number
    name: string
    slug: string
    location: string
    area: "Hackney" | "Greenwich" | "Islington" | "Peckham"
    city: string
    description: string
    images: string[]
    alt: string
}

export const studiosData: Studio[] = [
  {
    id: 1,
    name: "Clay Room Studio",
    slug: "clay-room-studio",
    location: "hackney",
    area: "Hackney",
    city: "London",
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
    id: 2,
    name: "Earth & Fire",
    slug: "earth-and-fire",
    location: "greenwich",
    area: "Greenwich",
    city: "London",
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
    id: 3,
    name: "Kiln House",
    slug: "kiln-house",
    location: "islington",
    area: "Islington",
    city: "London",
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
    id: 4,
    name: "South Clay Studio",
    slug: "south-clay-studio",
    location: "peckham",
    area: "Peckham",
    city: "London",
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