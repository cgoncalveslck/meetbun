# Stack

- **Elysia.js** (web framework): https://elysiajs.com/introduction.html
- **Bun** (runtime): https://bun.sh/
- **Tailwind** (css framework): https://tailwindcss.com/
- **Prisma** (ORM): https://www.prisma.io/

```bash
  # Install dependencies
  bun install
```

#### Setup DB

```bash
  # Start postgres container
  docker compose up -d
```

```bash
  # Run migrations
  npx prisma migrate dev

  # Generate new prisma client
  npx prisma generate
```

#### Run Dev server

```bash
  # Start the development server
  bun run dev
```

```bash
  # Start the Tailwind CLI build process
  bun run tailwind
```

**UI:** http://localhost:3000/
**API docs:** http://localhost:3000/docs
