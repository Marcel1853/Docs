---
id: Webmail
title: Webmail hinzufügen
---

> Schritt 1

Gehe in deine DNS Einstellungen deiner Domain und füge folgende Einträge hinzu.

|Record|Name|Inhalt|Priorität|
|:----:|:----:|:------:|:----:|
|A|mail|IPv4 des Webhostes|
|A|webmail|IPv4 des Webhostes||
|MX|@|mail.DEINE.DOMAIN|1|

Wichtig ist bei Cloudflare verwalteten Domains, dass du bei dem A Record die Wolke auf grau hast (Nur DNS).

> Schritt 2

Überprüfe, ob du im Browser Webmail aufrufen kannst
![](https://screen.magic-pics.tk/FOku9/LeNahugi08.png/raw)

> Fertig!
