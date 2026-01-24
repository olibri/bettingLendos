# =========================
# Stage 1: Dependencies
# =========================
FROM node:20-alpine AS deps

# Build tools для native модулів
RUN apk add --no-cache \
    libc6-compat \
    python3 \
    make \
    g++ \
    bash \
    linux-headers

WORKDIR /app

COPY package.json package-lock.json* ./

# npm ci зіб’є підзалежності, включно з usb
RUN npm ci

# =========================
# Stage 2: Builder
# =========================
FROM node:20-alpine AS builder

WORKDIR /app

# Копіюємо встановлені node_modules з deps
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

# Build-time environment variables
ARG NEXT_PUBLIC_API_URL=https://betkalendingbackend-production.up.railway.app
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN npm run build

# =========================
# Stage 3: Runner
# =========================
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Security: non-root user
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# Public assets
COPY --from=builder /app/public ./public

# Next.js runtime output
RUN mkdir .next && chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
