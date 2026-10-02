# Hawaldarni — book website

The website for *Hawaldarni: What He Never Said, and How Much It Was* by Sharda Ashok Yaduvanshi.

- `index.html` — the book page (cover, blurb, Amazon button, QR code, editions)
- `read.html` — the free reader (cover, title page, Interlude, Chapters 1–32), page by page like an e-book
- `book.js` — the text of the free preview
- `config.js` — **the only file you need to edit** (statistics code, Amazon link)
- `analytics.js` — sends anonymous reading statistics (only when a code is set)
- `cover.jpg`, `share.jpg`, `qr.png`, `icon.png` — images

Everything is in one folder on purpose, so it can be uploaded from a phone.

## Put it online free with GitHub Pages

1. Make a free account at **github.com**.
2. Tap **+** → **New repository**. Name it `hawaldarni`, choose **Public**, and create it.
3. On the new repository page tap **uploading an existing file** (or **Add file → Upload files**).
4. Select **all the files from this folder** (not the folder itself) and tap **Commit changes**.
5. Open **Settings → Pages**. Under *Build and deployment*, set **Source: Deploy from a branch**, **Branch: main**, folder **/ (root)**, and **Save**.
6. After a minute or two the site is live at:
   `https://YOUR-GITHUB-USERNAME.github.io/hawaldarni/`

To change anything later, open the file on GitHub, tap the pencil (✏️) icon, edit, and **Commit changes**. The site updates within a minute or two.

## Turn on reader statistics (free, GoatCounter)

1. Make a free account at **goatcounter.com** and choose a code, e.g. `hawaldarni`.
2. On GitHub open `config.js`, tap ✏️, and write the code between the quotes:
   `goatcounterCode: "hawaldarni",`
3. **Commit changes.** Statistics appear at `https://hawaldarni.goatcounter.com`.

GoatCounter uses no cookies and collects no personal data. It shows visits, countries, devices and where visitors came from, plus these reading events:

| Event | Meaning |
|---|---|
| `amazon-click-home` | Tapped the Amazon button on the book page |
| `reader-open` | Opened the free reader |
| `read-section-01` … `read-section-34` | Reached a section (01 = Interlude, 02 = Chapter 1 … 34 = Chapter 32, The Last Evening) |
| `read-progress-25` / `50` / `75` / `100` | Read that share of the free preview (100 = finished it) |
| `read-time-05min` / `15min` / `30min` / `60min` | Actively read for that long in one visit |
| `amazon-click-reader` | Tapped "Get the Full Book on Amazon" at the end of the preview |

## Share-preview image (WhatsApp, Facebook)

Once the site is live, open `index.html` on GitHub, tap ✏️, and change
`<meta property="og:image" content="share.jpg">` to the full address, e.g.
`<meta property="og:image" content="https://YOUR-GITHUB-USERNAME.github.io/hawaldarni/share.jpg">`.
Some apps only show the cover picture in link previews when the address is complete.
