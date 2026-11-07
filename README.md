# Strona internetowa Dr Moniki Olejniczak

Kompletny projekt statycznej strony WWW (3 podstrony), wykonany w HTML, CSS i JavaScript, w palecie **Ciepły minimalizm**. Strona działa bez instalowania Node.js, Reacta, serwera, bazy danych ani płatnych bibliotek.

## Zawartość

- `index.html` — strona główna, sekcja o mnie, oferta i kontakt.
- `o-mnie.html` — podejście do pracy oraz kwalifikacje.
- `oferta.html` — superwizja (wyróżniona), psychoterapia, praktyczne informacje i FAQ.
- `styles.css` — komplet stylów, w tym widok na telefony i tablety.
- `config.js` — dane kontaktowe do zmiany w jednym miejscu.
- `script.js` — menu mobilne, dynamiczny rok i podpinanie danych kontaktowych.
- `assets/` — własne ilustracje SVG i ikona strony.

## Jak zobaczyć projekt

Otwórz plik `index.html` w przeglądarce, a następnie przejdź do pozostałych podstron z menu. Nie trzeba uruchamiać żadnych komend.

Jeśli chcesz testować w lokalnym serwerze:

```bash
cd dr-monika-strona
python3 -m http.server 8000
```

Następnie otwórz `http://localhost:8000`.

## Co trzeba uzupełnić PRZED publikacją

1. **Prawdziwy portret klientki.** Na stronie głównej znajduje się wyraźny placeholder `MO`, nie zdjęcie przypadkowej osoby. Podmień element `.portrait-frame` w `index.html` na prawdziwe zdjęcie (po uzyskaniu zgody), np. umieść plik w `assets/portret-monika.jpg`, a w środku `.portrait-frame` zastąp `.portrait-placeholder` tagiem:

   ```html
   <img class="portrait-real" src="assets/portret-monika.jpg" alt="Portret dr Moniki Olejniczak" loading="lazy">
   ```
   Możesz również usunąć etykietę `.portrait-plate` z dolnej części zdjęcia.

2. **Kwalifikacje.** W `o-mnie.html` podmień wszystkie wiersze sekcji `#kwalifikacje` na prawdziwe, potwierdzone dane i usuń widoczną notatkę `admin-note`.
3. **Oferta.** W `oferta.html` potwierdź zakres superwizji, psychoterapii, dostępne formy (np. online), długość sesji i cennik. Usuń robocze zdania informujące, że dane są do uzupełnienia.
4. **Kontakt.** W `config.js` wpisz rzeczywisty adres e-mail, telefon i potwierdź miejscowość. Brak adresu e-mail powoduje ukrycie przycisku `Napisz e-mail` — strona nie udaje, że działa bez kontaktu.
5. **Teksty.** Wszystkie proponowane opisy i cytaty mają charakter roboczy: poproś klientkę o ich przeczytanie, zatwierdzenie i korekty. Nie dopisuj niezweryfikowanych certyfikatów czy obietnic efektów leczenia.
6. **Informacje prawne i prywatność.** Strona nie ustawia ciasteczek analitycznych, nie ma formularza ani backendu przetwarzającego dane. Jeśli dodasz formularz, analitykę lub narzędzia zewnętrzne, dopasuj politykę prywatności oraz obowiązki RODO. Rozważ także osobną informację o administratorze danych.
7. **SEO:** każda strona ma tymczasowo `<meta name="robots" content="noindex,nofollow">`, by wyszukiwarki nie indeksowały roboczych treści. **Po ostatecznej akceptacji strony usuń ten tag ze wszystkich trzech plików**, ewentualnie zamień na `index,follow`, i dodaj właściwe kanoniczne URL-e, gdy domena będzie znana.

## Kolory

| Zastosowanie | Kolor |
|---|---|
| Dominujący ciepły brąz | `#8B5E3C` |
| Jasny beż | `#D4B896` |
| Główne tło | `#F8F4ED` |
| Akcent karmelowy | `#A67C52` |
| Jasny akcent | `#E7C9A3` |

Dodatkowy ciemny tekst `#302923` jest celowy: zapewnia czytelność na jasnym tle. Zmiana kolorów jest najprostsza w sekcji `:root` pliku `styles.css`.

## Publikacja

### Netlify (najprościej)

1. Załóż konto na https://www.netlify.com/ i utwórz nową witrynę.
2. Przeciągnij cały **rozpakowany folder z plikami strony** do narzędzia Netlify Drop. `index.html` musi znajdować się w katalogu głównym strony.
3. Sprawdź stronę pod przyznanym adresem testowym.
4. Po zakupie domeny dodaj ją w ustawieniach witryny i skonfiguruj rekordy DNS zgodnie z instrukcją dostawcy hostingu.
5. Zweryfikuj HTTPS/SSL i dopiero wtedy usuń `noindex` po uzupełnieniu treści.

### GitHub Pages

Możesz również wrzucić wszystkie pliki do repozytorium i włączyć Pages (Settings → Pages). W przypadku komercyjnych stron przed wyborem planu zawsze sprawdź aktualne warunki konkretnego dostawcy hostingu.

## Ważne: edycja przez klientkę

To jest **strona statyczna**: teksty edytuje się w HTML, a kontakt w `config.js`. Nie ma panelu administracyjnego do samodzielnych zmian przez klientkę. Gdy będzie potrzebny, najlepiej osobno wycenić wdrożenie CMS (np. WordPress) albo panelu do zarządzania treścią.

## Rzeczy, których projekt celowo nie udaje

- Nie zawiera wymyślonego portretu właścicielki gabinetu ani fikcyjnych certyfikatów.
- Nie zawiera niesprawdzonych numerów telefonów, adresów e-mail ani stawek usług.
- Nie zawiera nieaktywnego formularza, który miałby rzekomo wysyłać wiadomości.
- Nie zawiera płatnych bibliotek ani nie wymaga hostingu obsługującego Node.js.

## Testowanie

Przed przekazaniem klientce sprawdź stronę na komputerze, telefonie i w co najmniej dwóch przeglądarkach. Sprawdź wszystkie linki oraz skrzynkę e-mail podpiętą do przycisku kontaktowego.