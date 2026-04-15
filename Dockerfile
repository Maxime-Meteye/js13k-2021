FROM node:24.14.1
WORKDIR /app
COPY . .
ARG CI=true
RUN corepack enable
RUN corepack prepare pnpm@10.22.0 --activate
RUN pnpm install
RUN pnpm exec playwright install --with-deps chromium
#RUN pnpm eslint
RUN pnpm audit
#RUN pnpm vitest
RUN pnpm func-test