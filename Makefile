ZOLA ?= zola
TAILWIND ?= tailwindcss

.PHONY: css build serve check clean

css:
	$(TAILWIND) -i styles/input.css -o static/css/main.css --minify

build: css
	$(ZOLA) build

serve: css
	$(ZOLA) serve

check: css
	$(ZOLA) check

clean:
	rm -rf public static/css/main.css
