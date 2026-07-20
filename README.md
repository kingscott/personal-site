# kingscott.ca

Static personal site built with [Zola](https://www.getzola.org/) and the
[Tailwind CSS standalone CLI](https://tailwindcss.com/blog/standalone-cli),
hosted on [nearlyfreespeech.net](https://www.nearlyfreespeech.net/).

## Local development

Requires `zola` and `tailwindcss` (v4) on your PATH. On NixOS:

```sh
nix-shell -p zola tailwindcss_4 --run "make serve"
```

- `make serve` — build CSS and run `zola serve` with live reload
- `make build` — full production build into `public/`
- `make check` — build + verify internal/external links

## Adding a photo series

1. Create a folder `content/projects/<slug>/` (the slug becomes the URL:
   `/projects/<slug>/`).
2. Drop your images in it. **Display order = filename sort order**, so number
   them (`myseries-0001.jpg`, `myseries-0002.jpg`, ...).
3. Add an `index.md` next to the images:

   ```toml
   +++
   title = "My New Series"
   weight = 8          # position in the Photography list (higher = lower)

   [extra]
   year = "2026"
   +++
   ```

That's it — no manifest to maintain. Thumbnails (500px webp) are generated at
build time by `resize_image` in `templates/series.html`; originals are served
when a thumbnail is clicked (lightbox).

## Adding a page

Add a markdown file under `content/` (see `content/contact.md`). It renders
with `templates/page.html`. Add a nav link in `templates/base.html` if needed.

## Deployment

Merging to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and rsyncs `public/` to NFSN over SSH.

One-time setup (already done, documented for reference):

1. Generate a deploy keypair: `ssh-keygen -t ed25519 -f nfsn_deploy -N ""`
2. Add the public key to the NFSN member interface (Profile → SSH Keys), or
   append it to `/home/protected/.ssh/authorized_keys` on the site.
3. Add GitHub repo secrets:
   - `NFSN_SSH_KEY` — contents of the private key file
   - `NFSN_SSH_DESTINATION` — e.g. `username_sitename@ssh.nyc1.nearlyfreespeech.net`
   - `NFSN_KNOWN_HOSTS` — output of `ssh-keyscan ssh.nyc1.nearlyfreespeech.net`
