---
id: NextcloudLoginFehler
title: Nextcloud Login Fehler beheben
---

> Schritt 1

Erstelle einen Ordner namens **phpsessions** im Hauptverzeichnis
![](https://puhscreen.de/1e2bb/DejisobA16.png/raw)

> Schritt 2

Gehe nun zu der betroffenen Domain wo die Nextcloud installiert ist und klicke auf **PHP-Einstellungen**
![](https://puhscreen.de/1e2bb/NEgEWEHa93.png/raw)

> Schritt 3

Suche nun den Parameter **session.save_path** und gebe folgendes ein und klicke anschließen auf OK:
```{WEBSPACEROOT}{/}phpsessions```
![](https://puhscreen.de/1e2bb/cOsedORi05.png/raw)

> Schritt 4

Jetzt warte paar Minuten und anschließend sollte der Login bei deiner Nextcloud wieder funktionieren.

> Fertig!
