export interface Project {
  name: string;
  description: string;
  image: string;
  slug: string;
}

export const projects: readonly Project[] = [
  {
    name: 'Sitka Camp',
    description: 'Empowering youth through basketball in Alaska',
    image: '/assets/projects/sitka_camp.webp',
    slug: 'sitka-camp',
  },
  {
    name: 'Philippines Hoopers',
    description: 'Growing basketball communities in the Philippines',
    image: '/assets/projects/philippines_hoopers.webp',
    slug: 'philippines-hoopers',
  },
] as const;
