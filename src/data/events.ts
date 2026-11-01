export type CampusEvent = { id: number; title: string; date: string; place: string; seats: number }

export const events: CampusEvent[] = [
  { id: 1, title: 'React study night', date: '2026-11-05', place: 'Room 302', seats: 20 },
  { id: 2, title: 'Git workshop for first-years', date: '2026-11-08', place: 'Room 115', seats: 15 },
  { id: 3, title: 'Figma to code meetup', date: '2026-11-12', place: 'Library, 2nd floor', seats: 12 },
  { id: 4, title: 'Mock interview with a mentor', date: '2026-11-15', place: 'Career Center', seats: 3 },
]
