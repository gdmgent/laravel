(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{356:function(a,e,s){"use strict";s.r(e);var t=s(14),n=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"authenticatie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authenticatie"}},[a._v("#")]),a._v(" Authenticatie")]),a._v(" "),e("p",[e("em",[a._v("Authenticatie is een belangrijk onderdeel van elke applicatie. Het is belangrijk dat gebruikers kunnen inloggen en uitloggen. En dat ze hun wachtwoord kunnen resetten indien ze deze vergeten zijn.")])]),a._v(" "),e("h2",{attrs:{id:"mogelijkheden"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mogelijkheden"}},[a._v("#")]),a._v(" Mogelijkheden")]),a._v(" "),e("p",[a._v("Laravel biedt verschillende mogelijkheden om authenticatie te implementeren. Je kan kiezen voor een volledig zelfgeschreven authenticatie systeem. Of je kan gebruik maken van een package die dit voor jou doet. Laravel zelf biedt 2 packages aan om dit te doen. "),e("code",[a._v("laravel/ui")]),a._v(" en "),e("code",[a._v("laravel/breeze")]),a._v(". Beide packages bieden een auth systeem aan. Maar "),e("code",[a._v("laravel/breeze")]),a._v(" is meer recent en biedt meer mogelijkheden. Hieronder leg ik laravel Breeze uit. Wil je een iets eenvoudigere authenticatie dan kan je opteren om "),e("a",{attrs:{href:"/laravel/laravel/how-to/laravel-ui"}},[a._v("Laravel UI")]),a._v(" te installeren")]),a._v(" "),e("blockquote",[e("p",[e("em",[a._v("Opgelet!")]),a._v(" Heb je reeds routes en layouts aangemaakt dan neem je hier best een backup (Bv. commit en push je aanpassingen zodat ze op GitHub staan). Je kan er ook voor zorgen dat je jouw "),e("code",[a._v("layouts/app.blade.php")]),a._v(" hernoemt naar "),e("code",[a._v("my_layout.php")])])]),a._v(" "),e("h2",{attrs:{id:"laravel-breeze"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#laravel-breeze"}},[a._v("#")]),a._v(" Laravel Breeze")]),a._v(" "),e("p",[a._v("Voor Laravel Breeze moet je gelijkaardige stappen doorlopen. Installeer de package:")]),a._v(" "),e("div",{staticClass:"language-php line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[a._v("ddev composer "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("require")]),a._v(" laravel"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("breeze "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("dev\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("Om daarna de scripts te runnen en de javascript en css te builden.")]),a._v(" "),e("div",{staticClass:"language-php line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[a._v("ddev artisan breeze"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("install\n \nddev artisan migrate\nnpm install\nnpm run dev\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("Je kan nu zelf een gebruiker aanmaken via "),e("code",[a._v("/register")]),a._v(" en daarna inloggen via "),e("code",[a._v("/login")]),a._v(".")]),a._v(" "),e("h2",{attrs:{id:"authenticatie-toepassen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authenticatie-toepassen"}},[a._v("#")]),a._v(" Authenticatie toepassen")]),a._v(" "),e("p",[a._v("De bedoeling is dat je vanaf nu delen van je website kan afschermen.")]),a._v(" "),e("p",[a._v("Dit kan op verschillende manieren. Je kan een volledige Controller beveiligen. Hiervoor gebruik je de constructor van die class en de middleware van auth. Hieronder een voorbeeld van de "),e("code",[a._v("AdminController.php")]),a._v(".")]),a._v(" "),e("div",{staticClass:"language-php line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[a._v("AdminController")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Controller")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[a._v("__construct")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("middleware")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'auth'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("Je kan uiteraard ook 1 bepaalde method beveiligen van een Controller. Bv de edit method.")]),a._v(" "),e("div",{staticClass:"language-php line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[a._v("ProjectController")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Controller")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[a._v("edit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("middleware")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'auth'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("Of meteen in de routing:")]),a._v(" "),e("div",{staticClass:"language-php line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[a._v("Route")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'/admin'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[a._v("AdminController")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'index'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("middleware")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'auth'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"huidige-user-ophalen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#huidige-user-ophalen"}},[a._v("#")]),a._v(" Huidige user ophalen")]),a._v(" "),e("div",{staticClass:"language-php line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[a._v("Illuminate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Support"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Facades"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Auth")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Retrieve the currently authenticated user...")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$user")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[a._v("Auth")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("user")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),e("span",{pre:!0,attrs:{class:"token property"}},[a._v("email")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("h2",{attrs:{id:"middleware-zelf-aanmaken"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#middleware-zelf-aanmaken"}},[a._v("#")]),a._v(" Middleware zelf aanmaken")]),a._v(" "),e("p",[a._v("We hebben al gezien dat de middleware er kan voor zorgen dat er gekeken wordt of een bezoeker al dan niet is ingelogd.")]),a._v(" "),e("p",[a._v("Maar meestal willen we ook gaan valideren of een ingelogde gebruiker bepaalde rechten heeft.")]),a._v(" "),e("p",[a._v("Hiervoor kunnen we zelf een middleware aanmaken. Maak in eerste instantie de middleware class aan "),e("code",[a._v("app/Http/Middleware/AuthenticateAdmin.php")]),a._v(" met onderstaande voorbeeldcode. Hierbij zal een bezoeker gecontroleerd worden of hij is ingelogd en de naam ‘George’ heeft.")]),a._v(" "),e("div",{staticClass:"language-php line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("namespace")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[a._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Middleware")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[a._v("Closure")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[a._v("Illuminate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Auth"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Middleware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Authenticate")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("as")]),a._v(" Middleware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[a._v("AuthenticateAdmin")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Middleware")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[a._v("handle")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$request")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[a._v("Closure")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$guards")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$request")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("user")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$request")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("user")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),e("span",{pre:!0,attrs:{class:"token property"}},[a._v("name")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!==")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'George'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("redirect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'/'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$request")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br")])]),e("p",[a._v("Daarna moeten we deze middleware toevoegen aan de lijst van routeMiddleware in "),e("code",[a._v("app/Http/Kernel.php")]),a._v(".")]),a._v(" "),e("div",{staticClass:"language-php line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("protected")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$routeMiddleware")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'auth'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Middleware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Authenticate")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'auth.admin'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Middleware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("AuthenticateAdmin")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("Vanaf nu kunnen we deze middleware gaan gebruiken. De meest eenvoudige manier is om dit rechtstreeks in onze route te doen. Hieronder een voorbeeld van een pagina die dus enkel bereikbaar is voor ingelogde personen met de naam ‘George’.")]),a._v(" "),e("div",{staticClass:"language-php line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[a._v("Route")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'/george'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'Enkel voor ingelogde gebruikers met de naam George'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("middleware")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'auth.admin'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);