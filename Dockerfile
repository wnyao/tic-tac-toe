FROM --platform=linux/amd64 node AS builder

WORKDIR /usr/src/app
COPY . .

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
RUN pnpm run build

FROM --platform=linux/amd64 nginx:alpine

WORKDIR /usr/share/nginx
RUN rm -rf ./*

COPY --from=builder /usr/src/app/build ./html
COPY ./scripts/nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
