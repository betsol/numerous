REPORTER = spec

build: locales

locales:
	./bin/build-locales.js

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
	--reporter $(REPORTER)

.PHONY: locales test
