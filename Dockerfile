FROM dhi.io/node:24-debian-dev AS development-dependencies-env
COPY . /app
WORKDIR /app
RUN npm ci

FROM dhi.io/node:24-debian-dev AS production-dependencies-env
COPY ./package.json package-lock.json /app/
WORKDIR /app
RUN npm ci --omit=dev

FROM dhi.io/node:24-debian-dev AS build-env
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN npm run build

FROM dhi.io/node:24-debian-dev
COPY ./package.json package-lock.json /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
WORKDIR /app
