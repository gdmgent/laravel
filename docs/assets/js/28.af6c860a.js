(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{320:function(e,n,a){"use strict";a.r(n);var t=a(13),s=Object(t.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"htaccess"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#htaccess"}},[e._v("#")]),e._v(" htaccess")]),e._v(" "),n("p",[n("em",[e._v("htaccess staat voor "),n("strong",[e._v("Hypertext Access")]),e._v(". Het is een configuratiebestand dat "),n("strong",[e._v("enkel")]),e._v(" wordt gebruikt op "),n("strong",[e._v("APACHE")]),e._v(" servers.")])]),e._v(" "),n("p",[n("em",[e._v("Door middel van "),n("strong",[e._v("configuratiebestanden")]),e._v(", kunt u de basisinstellingen van de server configureren. Oftewel, een "),n("code",[e._v(".htaccess")]),e._v("-bestand kan gebruikt worden om de applicatie op een bepaalde manier te laten werken. Elke functie is eigenlijk gewoon een regel tekst, of code, die de server vertelt wat te doen. U kunt een functionaliteit toevoegen of wijzigen door de code toe te voegen in een .htaccess bestand.")])]),e._v(" "),n("h2",{attrs:{id:"waar-kan-ik-htaccess-voor-gebruiken"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#waar-kan-ik-htaccess-voor-gebruiken"}},[e._v("#")]),e._v(" Waar kan ik .htaccess voor gebruiken?")]),e._v(" "),n("p",[e._v("Er zijn veel toepassingsmogelijkheden met "),n("code",[e._v(".htaccess")]),e._v(", bijvoorbeeld:")]),e._v(" "),n("ul",[n("li",[e._v("Bescherm uw website door middel van een wachtwoord.")]),e._v(" "),n("li",[e._v("Maak een eigengemaakte foutmeldingspagina")]),e._v(" "),n("li",[e._v("Redirect bezoekers naar een andere pagina.")])]),e._v(" "),n("h2",{attrs:{id:"het-formaat-van-een-htaccess-bestand"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#het-formaat-van-een-htaccess-bestand"}},[e._v("#")]),e._v(" Het formaat van een .htaccess bestand")]),e._v(" "),n("p",[e._v("Het "),n("code",[e._v(".htaccess")]),e._v(" bestand is speciaal, omdat het begint met een punt. Hierdoor is het niet altijd zichtbaar in de verkenner of Finder. Als u het bestand niet kunt vinden, kunt u de optie “Verborgen bestanden weergeven” aanzetten. In Visual Studio Code zie je het meestal wel staan in de bestandsverkenner.")]),e._v(" "),n("h2",{attrs:{id:"opvangen-van-alle-requests"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#opvangen-van-alle-requests"}},[e._v("#")]),e._v(" Opvangen van alle requests")]),e._v(" "),n("p",[e._v("Je moet weten dat iedere request, dat geen bestaande file of folder is in de public folder, binnenkomt op de index.php in de public folder. Dit staat immers zo beschreven in de "),n("code",[e._v(".htaccess")]),e._v(".")]),e._v(" "),n("p",[e._v("Bij de meeste php-frameworks wordt gebruik gemaakt van een "),n("code",[e._v(".htaccess")]),e._v("-file die je bij Laravel kan terugvinden onder de "),n("code",[e._v("/public")]),e._v(" folder. Deze htaccess zorgt ervoor dat elke url (dat al dan niet bestaat) wordt opgevangen door de "),n("code",[e._v("index.php")]),e._v(" binnen de public die folder.")]),e._v(" "),n("p",[e._v("Er dient dus een andere manier te zijn dan het filesystem om de correcte pagina in te laden. Hiervoor maken de meeste frameworks gebruik van een router. De configuratie van de routing voor de website kan je terugvinden onder "),n("code",[e._v("routes/web.php")]),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"voorbeeld-laravel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#voorbeeld-laravel"}},[e._v("#")]),e._v(" Voorbeeld (laravel)")]),e._v(" "),n("p",[e._v("Een voorbeeld van een standaard .htaccess bestand voor een Laravel-project.\nDit bestand kan je terugvinden onder "),n("code",[e._v("/public/.htaccess")]),e._v(".")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<IfModule mod_rewrite.c>\n    <IfModule mod_negotiation.c>\n        Options -MultiViews -Indexes\n    </IfModule>\n\n    RewriteEngine On\n\n    # Handle Authorization Header\n    RewriteCond %{HTTP:Authorization} .\n    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]\n\n    # Redirect Trailing Slashes If Not A Folder...\n    RewriteCond %{REQUEST_FILENAME} !-d\n    RewriteCond %{REQUEST_URI} (.+)/$\n    RewriteRule ^ %1 [L,R=301]\n\n    # Handle Front Controller...\n    RewriteCond %{REQUEST_FILENAME} !-d\n    RewriteCond %{REQUEST_FILENAME} !-f\n    RewriteRule ^ index.php [L]\n</IfModule>\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br")])])])}),[],!1,null,null,null);n.default=s.exports}}]);