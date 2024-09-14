run-dev: install-node-modules
    pnpm run dev

lint:
    pnpm run lint

post-create-dev-container:
    just .devcontainer/post-create
    just bootstrap

bootstrap: install-node-modules

install-node-modules:
    echo Y | pnpm i
