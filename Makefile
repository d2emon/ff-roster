.PHONY: help up down build restart logs ps \
        auth-install characters-install \
        auth-migrate characters-migrate

# --------------------
# Общие команды
# --------------------

help:
	@echo "Available commands:"
	@echo "  make up                  - start all services"
	@echo "  make down                - stop all services"
	@echo "  make build               - build all images"
	@echo "  make restart             - restart all services"
	@echo "  make logs                - show logs"
	@echo "  make ps                  - list containers"

up:
	docker compose up -d

up-build:
	docker compose up --build

down:
	docker compose down

build:
	docker compose build

restart:
	docker compose down
	docker compose up -d

logs:
	docker compose logs -f

ps:
	docker compose ps

# --------------------
# Auth service
# --------------------

auth-install:
	docker compose exec auth-service npm install

auth-migrate:
	docker compose exec auth-service npx prisma migrate deploy

auth-studio:
	docker compose exec auth-service npx prisma studio

# --------------------
# Characters service
# --------------------

characters-install:
	docker compose exec characters-service npm install

characters-migrate:
	docker compose exec characters-service npx prisma migrate deploy

characters-studio:
	docker compose exec characters-service npx prisma studio
