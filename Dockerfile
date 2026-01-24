# =========================
# Stage 1: Dependencies
# =========================
FROM node:20-bullseye AS deps

# Build tools для native модулів (usb, libusb)
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 \
    make \
    g++ \
    libc6-dev \
    libusb-1.0-0-dev \
    libudev-dev \
    bash \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Копіюємо лише package файли для кешування
COPY package.json package-lock.json* ./

# Встановлюємо всі залежності, включно з usb
RUN npm ci

# =========================
# Stage 2: Builder
# =========================
FROM node:20-bullseye AS builder

WORKDIR /app

# Копіюємо node_modules із deps
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

# API URL для билд-часу
ARG NEXT_PUBLIC_API_URL=https://betkalendingbackend-production.up.railway.app
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

# Будуємо Next.js
RUN npm run build

# =========================
# Stage 3: Runner
# =========================
FROM node:20-bullseye-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Створюємо non-root користувача
RUN groupadd --system --gid 1001 nodejs \
    && useradd --system --uid 1001 --gid nodejs nextjs

# Копіюємо потрібні файли з builder
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Створюємо та даємо права на .next
RUN mkdir .next && chown nextjs:nodejs .next

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
