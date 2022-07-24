#! /bin/sh

export image="ghcr.io/wnyao/tic-tac-toe"

buildImage() {
  timestamp="$(date +%s)"
  image="$1:$timestamp"
  latest="$1:latest"
  file="$2"

  docker build --rm -f "$file" -t "$image" .
  docker build --rm -f "$file" -t "$latest" .

  echo "$CR_PAT" | docker login ghcr.io -u USERNAME --password-stdin
  docker push "$image"
  docker push "$latest"
}

buildClient() {
  client="$(docker container ls --all | grep "$image")"

  if [ -z "$client" ];then
    echo "Building $image"
    buildImage "$image" ./Dockerfile
    return
  fi

  echo "Found $image container"
}

deployClient() {
  npm run build

  if [ -d "./build" ]; then
    echo "Build file exist"
    mc rm -r --force local/wnyao/tic-tac-toe
    mc cp -r ./build/ local/wnyao/tic-tac-toe
    rm -rf packages/build
  fi
}

buildClient
deployClient
