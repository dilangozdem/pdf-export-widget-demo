# PDF Export Widget - GitHub Pages Deploy

Bu klasor ArcGIS Enterprise 12.0 Experience Builder custom widget host etmek icin hazirlandi.

GitHub Pages URL formati:

```text
https://<github-user>.github.io/<repo-name>/widgets/pdf-export-widget/manifest.json
https://<github-user>.github.io/<repo-name>/widgets/property-report/manifest.json
```

Cache'e takilmamak icin versioned URL:

```text
https://<github-user>.github.io/<repo-name>/v114/widgets/pdf-export-widget/manifest.json
https://<github-user>.github.io/<repo-name>/v114/widgets/property-report/manifest.json
```

Portal'da:

```text
Content > Add item > An application > Experience Builder widget
```

alanina yukaridaki manifest URL girilir.

Notlar:

- Repo public olmali.
- GitHub Pages root olarak bu klasoru veya repo root'unu yayinlamali.
- `widgets/chunks` klasoru silinmemeli; html2canvas/jsPDF chunk dosyalari buradan yuklenir.
- `widgets-info.json` yuklenmez; Portal built-in widget registry'sini karistirabilir.
- `github.com/.../blob/.../manifest.json` URL'si kullanilmaz.
