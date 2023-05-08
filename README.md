Wir wollen eine kleine Vue-Applikation bauen, die an die offene [Pokémon Rest API](https://pokeapi.co/) angeschlossen ist und verschiedene Funktionalität bietet.\
Dies soll nach Möglichkeit [Test Driven (TDD)](https://de.wikipedia.org/wiki/Testgetriebene_Entwicklung) umgesetzt werden.

Das grafische Darstellung ist **irrelevant**. Die Nutzung von Frameworks wie [Material](https://material.angular.io/) oder [Bootstrap](https://ng-bootstrap.github.io/#/home) ist genau so denkbar wie eine Umsetzung auf reiner HTML/TypeScript-Basis.

Bitte erstelle Dir ein Projekt im [neusta GitLab](https://gitlab.neusta.de/) und aktiviere das [Issue Board](https://docs.gitlab.com/ee/user/project/issue_board.html). Hier werden folgende Anforderungen nach dem Konzept der [Smart/Dumb Components](https://blog.angular-university.io/angular-2-smart-components-vs-presentation-components-whats-the-difference-when-to-use-each-and-why/) in kleine Feature Stories übertragen. Jedes Feature soll mittels [Merge Request](https://docs.gitlab.com/ee/user/project/merge_requests/) umgesetzt, vom Coach genehmigt (nach Code Review) und schließlich in den master/develop Branch zurückgeführt (gemerged) werden.

* * * * *

Grundanforderungen
------------------

1.  ### **Setup**

    1.  Die Software basiert auf der aktuellen Vue 3 Version und wurde mit der [Vite](https://vitejs.dev/guide/) aufgesetzt.
    2.  Für die Tests soll das [Vitest](https://vitest.dev/) verwendet werden.
    3.  Die Software soll möglichst wenig externe Abhängigkeiten haben.
    4.  ![(blauer Stern)](https://ci3.googleusercontent.com/proxy/chNBTUUd4FzvZxk6lxYVQcs3cN24LW0juuTPfvSxLUHlhHf_8LrNOPhJTc7u8wDeKrmGwNC8aAu5T39ekrj0TBlRFrWpn-INuEOVZWzUk-jl_8ly_a9WGkyC81g2NfeofSd9iqkHK3MtZEL-c0O0uSxznA=s0-d-e1-ft#https://portal.neusta.de/confluence/s/-fsgvm7/8703/98yf4s/_/images/icons/emoticons/star_blue.svg) Optional**:** Für den Labor-Baustein **Pinia **muss das [Framework](https://ngrx.io/) [installiert](https://pinia.vuejs.org/) und genutzt werden

2.  ### **Die Software**

    1.  #### Suchfunktion

        1.  Zunächst sehe ich ein **erforderliches** Eingabefeld (Suche) und einen dazugehörigen Button zum Abschicken des Formulars.
        2.  Nach Eingabe eines Namens (z.B. *pikachu*) oder einer Zahl (`id`) und dem Absenden des Formulars wird ein Datensatz abgerufen. Der Suchbegriff muss dabei exakt eingegeben (Groß- und Kleinschreibung soll egal sein) werden, damit eine Suche erfolgreich ist. Das Suchfeld bleibt nach Absenden des Formulars sichtbar.
        3.  Wenn meine Suche keine Ergebnisse ergibt wird eine Fehlermeldung angezeigt.
        4.  Während des Ladevorgangs soll ein grafischer Indikator angezeigt werden.

    2.  #### Detailansicht Pokemon

        1.  Der abgefragte Datensatz wird in einer Detailansicht dargestellt. Diese zeigt mindestens folgende Informationen: 

            1.  `name`
            2.  `base_experience`
            3.  `height`
            4.  `weight`
            5.  `sprites.front_default`

    3.  #### Pokémon "fangen"

        1.  In der Detailansicht des Pokémon-Datensatzes befindet sich ein Button zum "fangen" des Pokémon. Klicke ich darauf, wird dieses Pokémon (entspricht einer Art Warenkorb) gespeichert.
        2.  Irgendwo auf der Seite befindet sich ein ![](https://ci4.googleusercontent.com/proxy/mhtmjI2XjPiXDxlOrq7FAAZeGw43fGl58uZVpHNedfV3rs8z0_SPUBEKfwEfH0bq2wCKMiU-fBx5dvrq7cnwhGkoSxLwNEEN4HEwwUAtfhHM1-xVCeREbNj-VIB3Bjbntcg4_4Hot6Jq76Uy66G7boneL9189zLfMTuq8KL35ELoHwhFnnXJPfse9MEJKoknaJA=s0-d-e1-ft#https://portal.neusta.de/confluence/download/thumbnails/365297821/poke-ball.png?version=1&modificationDate=1625644113000&api=v2)Pokéball Icon und zeigt die Anzahl gefangener Pokémon an.
        3.  Habe ich ein Pokémon (z.B. *Pikachu*) bereits gefangen, ist der Button zum hinzufügen/fangen in der Detailansicht inaktiv. Jedes Pokémon kann lediglich ein einziges Mal gefangen werden.

    4.  #### Pokéball

        1.  Der Pokéball ist auch nach einem Refresh (F5) der Seite oder Schließen des Browsers noch mit den gleichen Daten gefüllt ([Local Storage](https://developer.mozilla.org/de/docs/Web/API/Window/localStorage)).
        2.  Klicke ich auf den Pokéball, erscheint in einem Modal eine Auflistung der bereits gefangenen Pokémon als Liste (`name` und Thumbnail von `sprites.front_default`).
        3.  An jedem Listeneintrag ist ein Icon zum "freilassen" des jeweiligen Pokémon. Bei Klick wird dieses aus der Liste entfernt.
        4.  Habe ich alle Pokémon aus der Liste entfernt, schließt sich das Modal automatisch.
        5.  Klicke ich auf ein Pokémon in der Liste, erscheint die in Punkt 2b erstellte Detailansicht.

3.  ### **Tests** 

    1.  Für alle Komponenten und Services existieren Unit Tests.
    2.  Die Testabdeckung sollte stets über 90% liegen.

* * * * *

Zusatzanforderungen
-------------------

Je nach Absprache mit dem zuständigen Coach sollen folgende Zusatzanforderungen erfüllt werden:

1.  ### Weitere Informationen

    1.  Die Detailansicht wird um ein [Akkordeon](https://en.wikipedia.org/wiki/Accordion_(GUI)) Element mit den folgenden API Informationen erweitert:

        1.  *Abilities*
        2.  *Forms*
        3.  *Moves*

    2.  Bei Klick auf einen Eintrag werden die entsprechenden weiterführenden Informationen abgerufen und mindestens folgende Werte angezeigt (![(Warnung)](https://ci3.googleusercontent.com/proxy/XNaf6h0igfXmxadSYTmXtknQMUfHN2LI1kApdoeb3B1PJBwxAqsn6M9eHALRGLVizGmCeYMg-ZkMMHE-vrRVTPBiT2jZNfbuJONdHMacBGdKV2t050ksCmguQp_qZtCkxsldyDJQZTuC2wchlpi1kY0=s0-d-e1-ft#https://portal.neusta.de/confluence/s/-fsgvm7/8703/98yf4s/_/images/icons/emoticons/warning.svg) die Daten sollen **einmalig** abgerufen werden und nicht bei jedem Klick):

        1.  *Abilities*

            1.  `name`
            2.  `generation`
            3.  `short_effect`

        2.  *Moves*

            1.  `name`
            2.  `accuracy`
            3.  `chance_effect`
            4.  `pp`
            5.  `priority`
            6.  `power`
            7.  `damage_class`

2.  ### Vergleichen

    1.  Listeneinträge (Pokémon) sollen sowohl einzeln als auch alle gleichzeitig selektierbar sein (per Checkbox).
    2.  Wenn mindestens zwei Pokémon ausgewählt sind, erscheint ein Button zum Vergleich der Pokémon auf Basis ihrer Werte.
    3.  Bei Klick auf den Button werde ich auf eine Seite */compare* geleitet.
    4.  Auf dieser Seite werden die selektierten Pokémon mit folgenden Werten nebeneinander dargestellt:

        1.  `base_experience`
        2.  `height`
        3.  `weight`
        4.  Anzahl der *Abilities*
        5.  Anzahl der *Moves*

    5.  In der Darstellung soll der höchste (grün) und der niedrigste Wert (rot) farblich markiert werden.
    6.  Ebenfalls soll sich auf der Seite ein Link befinden, der den Nutzer wieder zurück zur Ausgangsseite mit geöffnetem Modal führt.
