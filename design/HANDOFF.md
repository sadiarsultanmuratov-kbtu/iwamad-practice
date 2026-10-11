# Week 5 — Handoff notes (SIS 2 starter design)

Routes (from the prototype):  / → posts list · /posts/:id → post detail · * → 404 (Read more opens the post, back returns to the list)
Components → React files:     PostCard → src/components/ui/Card.tsx   Button → src/components/ui/Button.tsx   Tag → src/components/ui/Tag.tsx
Button variants → prop:       variant = "primary" | "secondary"
PostCard layout:              direction vertical (column)  gap 8px (space/2)  padding 24px (space/6)  radius 8px (radius/md)
Breakpoint change:            phone 1 column, desktop 3 columns; header stacked on phone, one row on desktop
Tokens (all ten):             color/primary = #1D4ED8, color/on-primary = #FFFFFF, color/text = #1F2937, color/text-muted = #9CA3AF, color/surface = #FFFFFF, color/border = #D1D5DB, space/2 = 8px, space/4 = 16px, space/6 = 24px, radius/md = 8px

Design fix: color/text-muted #9CA3AF on #FFFFFF is 2.54 : 1 (fails 4.5 : 1) → changed to #6B7280 (4.83 : 1) in tokens.css
