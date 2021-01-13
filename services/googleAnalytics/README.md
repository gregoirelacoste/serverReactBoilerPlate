#Tag analytics

 ##withtracker
Withtracker fonction avec react router
- placer les fonction dans chaque route
exemple : 
  
`` <Route
  path={MENU_LINK.home.href}
  component={withTracker(Home, { title: "Accueil" })}
  />``

##Code google analytics
- Récupérer le code dans le compte GA (UA-11111 ou G-12365456)
- Ajouter dans .env GA_ID
- Vérifier que index.html contient dans le head

``window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag("js", new Date());
window.gtag("config", "<%= htmlWebpackPlugin.options.GA_ID %>");``