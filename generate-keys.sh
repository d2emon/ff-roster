#! /bin/bash
makedir -p infra/key
openssl genrsa -out infra/keys/private.pem 2048
openssl rsa -in infra/keys/private.pem -pubout -out infra/keys/public.pem
