(function(){
  const GDP=2993, PB0=-3.1, D0=115.7, I0=1.96, Y0=2026, YEARS=20, FB=0.25;
  const toPt=md=>md/GDP*100;
  // Chaque levier : effMd(v) = effet sur le solde à pleine montée en Md€ (positif = améliore le solde),
  // lvl(v) = effet durable sur le niveau du PIB en %, ramp = années de montée en charge, mult = multiplicateur de court terme.
  // info : c = concrètement, who = qui est concerné, pour / contre = arguments, src = d'où vient le montant.
  const SECTORS=[
    {id:"ret",name:"Retraites",base:"≈ 390 Md€ de pensions par an (13,1 % du PIB en 2023), dont environ 74 % pilotés par l'État",
     intro:"C'est la première dépense publique. Elle est financée surtout par les cotisations des actifs. Les régimes de base et ceux des fonctionnaires sont pilotés par l'État ; les complémentaires (Agirc-Arrco…) sont gérées par les syndicats et le patronat. Point de départ : la réforme de 2023 est suspendue par la loi de financement de la Sécurité sociale pour 2026.",
     levers:[
      {id:"pens",label:"Sous-indexation des pensions",min:0,max:1.5,step:0.1,fmt:v=>fr(v)+" pt/an",
        help:"Augmenter les retraites de base et des fonctionnaires un peu moins vite que les prix, pendant 5 ans.",
        effMd:v=>v*5*2.9,ramp:5,mult:0.4,
        info:{c:"Chaque année, les pensions de base sont normalement revalorisées comme l'inflation. Avec 1 pt de sous-indexation, si les prix montent de 2 %, les pensions ne montent que de 1 %. Après 5 ans, un retraité a perdu environ 5 % de pouvoir d'achat sur cette partie de sa pension. Attention : le budget 2027 prévoit déjà une sous-indexation des prestations, que ce curseur peut recouper.",
          who:"Les quelque 17 millions de retraités, quel que soit le montant de leur pension.",
          pour:"Rapporte beaucoup et vite, car la masse des pensions est énorme. Le niveau de vie moyen des retraités est aujourd'hui proche de celui des actifs.",
          contre:"Touche aussi les petites pensions. Protéger celles-ci par un seuil est plus juste mais réduit nettement le rendement.",
          src:"Drees, Les retraités et les retraites 2025 : 369,9 Md€ de pensions en 2023 (13,1 % du PIB), dont 26 % versés par les régimes complémentaires. Base retenue : 74 % de 13,1 % du PIB 2025, soit environ 290 Md€, donc 2,9 Md€ par point."},
        alert:v=>v>1?"Au-delà d'1 pt/an, la perte de pouvoir d'achat devient forte pour les petites pensions.":""},
      {id:"compl",label:"Sous-indexation des retraites complémentaires",min:0,max:1.5,step:0.1,fmt:v=>fr(v)+" pt/an",
        help:"Même mesure sur les complémentaires (Agirc-Arrco…). Elle dépend des syndicats et du patronat, pas de l'État.",
        effMd:v=>v*5*1.02,ramp:5,mult:0.4,
        info:{c:"Les complémentaires représentent environ un quart des pensions. Leur revalorisation est décidée par les partenaires sociaux qui les gèrent. L'État ne peut que les inciter, ou passer par la loi, ce qui serait inédit.",
          who:"Les anciens salariés du privé, surtout les cadres, pour qui la complémentaire pèse lourd.",
          pour:"Les régimes complémentaires ont des réserves et peuvent participer à l'effort.",
          contre:"Décision qui n'appartient pas au gouvernement ; leurs excédents n'améliorent le solde public que s'ils ne sont pas redistribués.",
          src:"Drees : 26 % des pensions versées par les régimes complémentaires, soit environ 102 Md€ sur la base de 2025, donc 1 Md€ par point."}},
      {id:"age",label:"Recul de l'âge effectif de départ",min:0,max:2,step:0.25,fmt:v=>fr(v,2).replace(/,?0+$/,"")+" an",
        help:"Partir à la retraite plus tard en moyenne, par l'âge légal ou la durée de cotisation, par rapport à la situation actuelle (réforme de 2023 suspendue).",
        effMd:v=>v*4.5,lvl:v=>v*0.6,ramp:8,mult:0.3,
        info:{c:"Si les gens partent 1 an plus tard, l'État verse moins de pensions et touche plus d'impôts et de cotisations, car ils travaillent plus longtemps. L'effet monte en charge sur environ 8 ans, génération après génération.",
          who:"Les actifs qui partiront à la retraite dans les prochaines années, surtout ceux qui ont commencé à travailler tôt.",
          pour:"Effet durable : augmente à la fois les recettes et la production. L'espérance de vie à 60 ans continue de progresser.",
          contre:"Pénalise les métiers pénibles et ceux qui ont une espérance de vie plus courte. Une partie des seniors ne trouve pas d'emploi et passe par le chômage ou l'invalidité.",
          src:"Hypothèse de l'auteur : environ 9 Md€ par an et par année de recul, ordre de grandeur inspiré de l'étude d'impact de la réforme de 2023, non revérifié."}},
      {id:"abat",label:"Abattement fiscal de 10 % des retraités",min:0,max:2,step:1,fmt:v=>["Inchangé","Forfait 2 000 €","Supprimé"][v],
        help:"Avantage fiscal : les retraités ne paient l'impôt que sur 90 % de leur pension.",
        effMd:v=>[0,1.2,4.96][v],ramp:1,mult:0.3,
        info:{c:"Comme les salariés, les retraités déduisent 10 % de leurs revenus avant le calcul de l'impôt sur le revenu, alors qu'ils n'ont pas de frais professionnels. Le forfait de 2 000 € par retraité garde l'avantage pour les petites pensions (en dessous d'environ 1 670 € par mois) et le réduit au-dessus.",
          who:"Les retraités imposables. Les retraités non imposables ne sont pas touchés.",
          pour:"Cet abattement profite surtout aux retraités aisés, puisqu'il est proportionnel à la pension.",
          contre:"Hausse d'impôt directe pour les retraités des classes moyennes, déjà concernés par d'autres mesures.",
          src:"Source secondaire : 4,96 Md€ selon les annexes du budget 2025, cités par Moneyvox ; rendement du forfait d'environ 1,2 Md€ cité par la presse lors des débats budgétaires."}}
    ]},
    {id:"sante",name:"Santé",base:"265 Md€ d'assurance maladie en 2025",
     intro:"L'assurance maladie paie les consultations, médicaments, hôpitaux, établissements pour personnes âgées et handicapées, et les arrêts de travail. Elle augmente avec le vieillissement et le progrès médical.",
     levers:[
      {id:"ville",label:"Freinage des soins de ville",min:0,max:2,step:0.1,fmt:v=>fr(v)+" pt/an",
        help:"Consultations, médicaments, analyses, kiné, transports sanitaires : faire progresser moins vite.",
        effMd:v=>v*5*0.959,ramp:5,mult:0.6,
        info:{c:"Ces 96 Md€ augmentent d'environ 4 à 5 % par an. Freiner d'1 pt veut dire : négocier les prix des médicaments, limiter les examens en double, développer les génériques, mieux contrôler les prescriptions. Au-delà, il faut dérembourser.",
          who:"Les patients, les médecins libéraux, les pharmacies, l'industrie pharmaceutique.",
          pour:"La Cour des comptes estime qu'une partie des actes et prescriptions ne sont pas pertinents. Les prix de certains produits restent élevés.",
          contre:"Un freinage trop fort se traduit par des déremboursements, donc des dépenses reportées sur les ménages et les mutuelles.",
          src:"Avis du Sénat sur la sécurité sociale : soins de ville 113,7 Md€ en 2025, dont on retire les 17,8 Md€ d'indemnités journalières (levier séparé)."},
        alert:v=>v>1?"Au-delà d'environ 1 pt/an, il faut dérembourser : le coût est reporté sur les ménages et les mutuelles.":""},
      {id:"hop",label:"Freinage des dépenses hospitalières",min:0,max:2,step:0.1,fmt:v=>fr(v)+" pt/an",
        help:"Hôpitaux publics et cliniques : faire progresser leur budget moins vite.",
        effMd:v=>v*5*1.094,ramp:5,mult:0.7,
        info:{c:"Le budget hospitalier (109 Md€) finance surtout des salaires de soignants. Le freiner signifie regrouper des services, réduire les achats, développer l'ambulatoire (sortie le jour même). Au-delà d'un certain rythme, cela veut dire moins de lits ou de personnel.",
          who:"Le 1,2 million d'agents hospitaliers et tous les patients hospitalisés.",
          pour:"Organisation perfectible : achats, durées de séjour, chirurgie ambulatoire encore moins développée que chez certains voisins.",
          contre:"L'hôpital sort d'années de tension sur les effectifs ; les urgences et certains services peinent déjà à recruter.",
          src:"Avis du Sénat sur la sécurité sociale : établissements de santé 109,4 Md€ en 2025. Les salaires hospitaliers sont inclus ici et pas dans la masse salariale publique."},
        alert:v=>v>0.5?"Au-delà d'environ 0,5 pt/an, l'économie passe par moins de lits ou des salaires qui décrochent.":""},
      {id:"ij",label:"Indemnités journalières (arrêts de travail)",min:0,max:30,step:1,fmt:v=>"−"+v+" %",
        help:"Les sommes versées aux salariés en arrêt maladie ou accident du travail.",
        effMd:v=>v/100*17.8,ramp:2,mult:0.5,
        info:{c:"Quand un salarié est en arrêt, la Sécurité sociale lui verse une partie de son salaire. Réduire cette dépense passe par un jour de carence de plus, un plafond plus bas, des contrôles renforcés des arrêts longs ou répétés.",
          who:"Les salariés malades, et les employeurs qui complètent souvent l'indemnité.",
          pour:"Dépense en forte hausse depuis dix ans, plus vite que l'emploi et les salaires.",
          contre:"Une partie de la hausse vient du vieillissement des actifs et de la santé au travail. Moins indemniser pénalise d'abord les salariés sans bonne complémentaire.",
          src:"Avis du Sénat : 17,8 Md€ d'indemnités journalières maladie et accidents du travail."},
        alert:v=>v>20?"Une baisse forte reporte la charge sur les employeurs ou pénalise les salariés sans complémentaire.":""},
      {id:"grandage",label:"Investissement dans le grand âge",min:0,max:8,step:0.5,fmt:v=>fr(v)+" Md€",
        help:"Plus de personnel dans les Ehpad et pour l'aide à domicile. C'est une dépense en plus.",
        effMd:v=>-v,ramp:4,mult:0.8,
        info:{c:"Le nombre de personnes de plus de 85 ans va fortement augmenter. Ce curseur ajoute des moyens : aides-soignants en Ehpad, auxiliaires de vie à domicile, salaires de ces métiers.",
          who:"Les personnes âgées dépendantes, leurs familles, les salariés du secteur.",
          pour:"Besoin démographique certain, conditions de travail difficiles et pénurie de personnel dans ces métiers.",
          contre:"Coûte cher et alourdit le déficit, alors que la dépense médico-sociale (33 Md€) augmente déjà.",
          src:"Montant de départ : avis du Sénat, médico-social personnes âgées 17,3 Md€ en 2025."}},
      {id:"soignants",label:"Recrutement et salaires des soignants",min:0,max:8,step:0.5,fmt:v=>fr(v)+" Md€",
        help:"Rendre l'hôpital plus attractif : salaires, postes, conditions de travail. C'est une dépense en plus.",
        effMd:v=>-v,ramp:4,mult:0.8,
        info:{c:"Infirmiers, aides-soignants et médecins hospitaliers manquent dans de nombreux services. Ce curseur ajoute des moyens pour recruter et garder ce personnel. Il peut compenser un freinage de l'hôpital ailleurs.",
          who:"Les soignants hospitaliers et les patients.",
          pour:"Sans personnel, des lits ferment même quand le budget existe.",
          contre:"Dépense permanente, difficile à revenir en arrière ensuite.",
          src:"Mesure nouvelle, montant choisi par vous."}}
    ]},
    {id:"etat",name:"État, école et collectivités",base:"109,5 Md€ de salaires de l'État hors pensions, 97 Md€ dans les collectivités, 77 Md€ pour les agences de l'État",
     intro:"L'État paie les enseignants, policiers, magistrats, militaires. Les collectivités (communes, départements, régions) gèrent écoles primaires, collèges, lycées, routes, aide sociale. Des agences publiques (universités, France Travail, CNRS…) complètent le tout.",
     levers:[
      {id:"wetat",label:"Freinage de la masse salariale de l'État",min:0,max:2,step:0.1,fmt:v=>fr(v)+" pt/an",
        help:"Salaires et effectifs des fonctionnaires de l'État : faire progresser moins vite pendant 5 ans.",
        effMd:v=>v*5*1.095,ramp:5,mult:0.8,
        info:{c:"On peut geler le point d'indice (la base des salaires des fonctionnaires), ne pas remplacer tous les départs à la retraite, ou réduire certaines primes. Les enseignants représentent environ la moitié des agents de l'État.",
          who:"Les 2,5 millions d'agents de l'État, et indirectement les usagers.",
          pour:"Premier poste de dépense de l'État, sur lequel il a la main directement.",
          contre:"Les salaires des enseignants sont déjà inférieurs à ceux de nombreux pays voisins ; les recrutements sont difficiles.",
          src:"Sénat, avis sur le budget 2026 (Fonction publique) : masse salariale de l'État hors pensions de 109,47 Md€. Les pensions des fonctionnaires sont dans le secteur Retraites, pour éviter un double compte."},
        alert:v=>v>0.6?"À ce rythme, il faut supprimer des postes de terrain ou laisser décrocher les salaires des enseignants.":""},
      {id:"profs",label:"Revalorisation des enseignants",min:0,max:10,step:0.5,fmt:v=>fr(v)+" Md€",
        help:"Mieux payer et recruter des enseignants. C'est une dépense en plus.",
        effMd:v=>-v,ramp:4,mult:0.8,
        info:{c:"Augmenter les salaires, surtout en début de carrière, pour que le métier attire à nouveau. Environ 1 Md€ correspond à une hausse de l'ordre de 2 % pour l'ensemble des enseignants.",
          who:"Environ 850 000 enseignants et les élèves.",
          pour:"Postes non pourvus aux concours, classes sans professeur, niveau des élèves en baisse dans les évaluations internationales.",
          contre:"Dépense permanente ; l'effet sur le niveau des élèves dépend aussi de la formation et de l'organisation.",
          src:"Mesure nouvelle, montant choisi par vous. L'équivalence 1 Md€ ≈ 2 % est un ordre de grandeur."}},
      {id:"ops",label:"Dépenses des agences de l'État",min:0,max:10,step:1,fmt:v=>"−"+v+" %",
        help:"Universités, France Travail, CNRS, Ademe et plus de 400 autres organismes publics.",
        effMd:v=>v/100*77,ramp:3,mult:0.7,
        info:{c:"Ces organismes reçoivent 77 Md€ par an. On peut fusionner les plus petits, mutualiser leurs achats et leurs services administratifs, ou réduire leurs missions.",
          who:"Les 490 000 agents de ces organismes et leurs usagers (étudiants, demandeurs d'emploi, chercheurs).",
          pour:"Multiplication des agences au fil des ans, doublons avec les ministères, petites structures coûteuses à gérer.",
          contre:"Près de la moitié des effectifs sont dans les universités et la recherche : couper fort, c'est couper dans l'enseignement supérieur.",
          src:"Fipeco, d'après le budget 2025 : 77 Md€ de crédits et taxes affectées pour 434 opérateurs."},
        alert:v=>v>5?"Au-delà de 5 %, les économies touchent forcément les universités, la recherche et France Travail.":""},
      {id:"wcoll",label:"Freinage de la masse salariale des collectivités",min:0,max:2,step:0.1,fmt:v=>fr(v)+" pt/an",
        help:"Agents des mairies, intercommunalités, départements et régions.",
        effMd:v=>v*5*0.97,ramp:5,mult:0.8,
        info:{c:"Les effectifs des collectivités ont fortement augmenté depuis 30 ans. Freiner veut dire mutualiser entre communes et intercommunalités, supprimer les doublons entre niveaux.",
          who:"1,9 million d'agents territoriaux, et les services de proximité (crèches, cantines, voirie, aide sociale).",
          pour:"Le « millefeuille » territorial crée des doublons ; les effectifs ont augmenté plus vite que les compétences transférées.",
          contre:"Ce sont les services les plus proches des habitants ; l'État ne décide pas directement de leurs embauches.",
          src:"Insee, comptes 2025 : rémunérations des administrations locales 97,0 Md€. Ce montant inclut des cotisations de retraite (CNRACL), donc l'effet est un peu surestimé."},
        alert:v=>v>1?"Au-delà d'1 pt/an, ce sont les services de proximité qui reculent.":""},
      {id:"dgf",label:"Baisse de la dotation de l'État aux collectivités",min:0,max:20,step:1,fmt:v=>"−"+v+" %",
        help:"L'argent que l'État verse chaque année aux communes, départements et régions.",
        effMd:v=>v/100*27.4,ramp:3,mult:0.8,
        info:{c:"La dotation globale de fonctionnement (DGF) est la principale aide de l'État aux collectivités. Si elle baisse, les collectivités, qui doivent équilibrer leur budget, réduisent leurs dépenses (souvent l'investissement) ou augmentent les impôts locaux.",
          who:"Toutes les collectivités, surtout les communes rurales et pauvres qui en dépendent le plus.",
          pour:"Oblige les collectivités à participer à l'effort.",
          contre:"Lors de la baisse de 2014-2017, l'investissement local avait fortement chuté. Les impôts locaux peuvent augmenter à la place.",
          src:"Banque des Territoires : DGF 2026 de 27,4 Md€."},
        alert:v=>v>10?"Une baisse forte fait reculer l'investissement local (écoles, routes, réseaux), comme en 2014-2017.":""},
      {id:"invest",label:"Investissement public",min:-1,max:1,step:0.1,fmt:v=>(v>0?"+":"")+fr(v)+" pt PIB",
        help:"Routes, rail, réseaux, bâtiments publics, numérique, transition énergétique.",
        effMd:v=>-v*GDP/100,lvl:v=>v*1.2,ramp:3,lvlRamp:10,mult:1.0,
        info:{c:"Un point de PIB, c'est environ 30 Md€ par an. Investir plus coûte maintenant mais rend l'économie plus productive à long terme. Couper l'investissement est souvent la première économie faite en période de rigueur, parce qu'elle est peu visible.",
          who:"Les entreprises du BTP et de l'industrie, et à terme tous les usagers des infrastructures.",
          pour:"Un investissement bien choisi augmente la croissance future, donc les recettes.",
          contre:"Tout investissement n'est pas rentable ; il faut des projets bien sélectionnés.",
          src:"Mesure nouvelle. L'effet durable sur la croissance est une hypothèse de l'auteur, inspirée de la littérature économique."},
        alert:v=>v<0?"Couper l'investissement améliore le solde vite, mais réduit la croissance future.":""},
      {id:"def",label:"Défense au-delà de la programmation militaire",min:0,max:1.5,step:0.1,fmt:v=>"+"+fr(v)+" pt PIB",
        help:"Hausse supplémentaire, en plus de ce que prévoit déjà la loi de programmation militaire (incluse dans le scénario de base). C'est une dépense en plus.",
        effMd:v=>-v*GDP/100,ramp:4,mult:0.6,
        info:{c:"La programmation militaire actualisée prévoit déjà 63,4 Md€ pour les armées en 2027 et 36 Md€ de plus d'ici 2030 : c'est dans le scénario de base. Ce curseur ajoute un effort au-delà, si le contexte l'exige. Chaque 0,5 pt supplémentaire coûte environ 15 Md€ par an.",
          who:"Les armées, l'industrie de défense, et l'ensemble des contribuables.",
          pour:"Le contexte géopolitique a changé, et une partie de la dépense soutient l'industrie française.",
          contre:"Chaque milliard pour la défense doit être trouvé ailleurs, alors que la dette monte déjà.",
          src:"Ministère des Armées, budget 2027 : 63,4 Md€, et 36 Md€ supplémentaires d'ici 2030 avec l'actualisation de la programmation militaire."}}
    ]},
    {id:"social",name:"Chômage, solidarité et logement",base:"32 Md€ d'allocations chômage, 32 Md€ de minima sociaux, 17 Md€ d'APL",
     intro:"Ce sont les revenus de remplacement et les aides aux ménages modestes : assurance chômage, RSA, allocation adulte handicapé, minimum vieillesse, aides au logement.",
     levers:[
      {id:"chomage",label:"Allocations chômage",min:0,max:25,step:1,fmt:v=>"−"+v+" %",
        help:"Durée ou montant de l'indemnisation des demandeurs d'emploi.",
        effMd:v=>v/100*32.1,lvl:v=>v*0.004,ramp:2,mult:0.6,
        info:{c:"Réduire la durée maximale d'indemnisation, durcir les conditions d'accès ou baisser le montant pour les hauts salaires. Plusieurs réformes ont déjà été faites depuis 2019.",
          who:"Environ 2,5 millions de personnes indemnisées.",
          pour:"Des études montrent qu'une indemnisation plus courte accélère un peu le retour à l'emploi, surtout quand le chômage est bas.",
          contre:"L'ampleur de cet effet est discutée ; une partie des chômeurs bascule au RSA, ce qui réduit l'économie réelle.",
          src:"Unédic, rapport financier 2025 : 32,1 Md€ d'allocations d'aide au retour à l'emploi."},
        alert:v=>v>15?"Une baisse forte augmente la pauvreté des chômeurs de longue durée et reporte une partie du coût sur le RSA.":""},
      {id:"minima",label:"Revalorisation des minima sociaux",min:0,max:1.5,step:0.1,fmt:v=>"−"+fr(v)+" pt/an",
        help:"RSA, allocation adulte handicapé, minimum vieillesse : augmenter moins vite que les prix.",
        effMd:v=>v*5*0.316,ramp:5,mult:0.9,
        info:{c:"Ces allocations sont le dernier filet de sécurité : RSA (environ 650 € par mois pour une personne seule), allocation adulte handicapé, minimum vieillesse. Les sous-indexer pendant 5 ans réduit leur pouvoir d'achat.",
          who:"4,3 millions d'allocataires, parmi les ménages les plus pauvres.",
          pour:"Rendement modeste mais immédiat.",
          contre:"Touche directement les plus pauvres, qui dépensent tout leur revenu : fort effet sur la pauvreté et sur la consommation.",
          src:"Drees, Minima sociaux édition 2025 : 31,6 Md€ versés en 2023."},
        alert:v=>v>0.3?"Ces allocations sont déjà au niveau du seuil de grande pauvreté : la sous-indexation augmente directement la pauvreté.":""},
      {id:"apl",label:"Aides personnelles au logement (APL)",min:0,max:25,step:1,fmt:v=>"−"+v+" %",
        help:"Aides versées aux locataires et accédants modestes pour payer leur logement.",
        effMd:v=>v/100*17,ramp:2,mult:0.7,
        info:{c:"Environ 6 millions de ménages touchent une aide au logement. On peut la réduire en baissant le barème, en la recentrant ou en la gelant.",
          who:"Les ménages modestes, les étudiants, les jeunes actifs.",
          pour:"Une partie des APL est absorbée par des loyers plus élevés, selon plusieurs études.",
          contre:"Pour les ménages qui la touchent, c'est une part importante du revenu ; la baisse de 5 € en 2017 avait été très mal vécue.",
          src:"Sénat, avis budgétaire logement : 17 Md€ d'APL."},
        alert:v=>v>8?"Au-delà d'environ 8 %, la baisse touche directement le reste à vivre des ménages les plus modestes.":""},
      {id:"mpr",label:"Aides à la rénovation énergétique (MaPrimeRénov')",min:0,max:100,step:10,fmt:v=>"−"+v+" %",
        help:"Subventions pour isoler les logements et changer les chauffages.",
        effMd:v=>v/100*3.6,ramp:1,mult:0.7,
        info:{c:"MaPrimeRénov' aide les ménages à financer l'isolation et les pompes à chaleur. La réduire diminue la dépense mais ralentit la rénovation des passoires thermiques.",
          who:"Les propriétaires, surtout modestes, et les artisans du bâtiment.",
          pour:"Le dispositif a connu des fraudes et des effets d'aubaine.",
          contre:"La France est en retard sur ses objectifs climatiques et de rénovation ; les factures d'énergie restent élevées pour les ménages mal logés.",
          src:"Source secondaire : 3,6 Md€ en 2025 selon le budget, cité par MySweetImmo."},
        alert:v=>v>40?"Une baisse forte ralentit la rénovation des logements mal isolés.":""}
    ]},
    {id:"entr",name:"Entreprises et formation",base:"75 Md€ d'allègements de cotisations, 15,5 Md€ pour l'apprentissage, 8 Md€ de crédit d'impôt recherche",
     intro:"L'État aide les entreprises surtout en réduisant leurs cotisations sociales et leurs impôts. Ces aides visent l'emploi, la recherche et la compétitivité.",
     levers:[
      {id:"cotis",label:"Allègements de cotisations patronales",min:0,max:40,step:1,fmt:v=>"−"+v+" %",
        help:"Réductions de charges sociales sur les salaires, surtout les bas salaires.",
        effMd:v=>v/100*75,lvl:v=>-v*0.015,ramp:2,mult:0.5,
        info:{c:"Depuis les années 1990, les cotisations patronales sont réduites sur les salaires proches du Smic, puis sur des salaires plus élevés. Réduire ces allègements augmente le coût du travail pour les entreprises.",
          who:"Toutes les entreprises, surtout celles qui emploient beaucoup de salariés peu qualifiés (commerce, restauration, nettoyage, services).",
          pour:"Les allègements sur les salaires au-dessus de 2 Smic ont peu d'effet sur l'emploi selon plusieurs évaluations.",
          contre:"Ceux sur les bas salaires ont permis de nombreux emplois : un rabot large en détruit.",
          src:"Commission d'enquête du Sénat 2025 : 75 Md€ d'allègements de cotisations sociales."},
        alert:v=>v>25?"Un rabot large finit par toucher les bas salaires, là où les allègements créent le plus d'emplois.":""},
      {id:"apprenti",label:"Aides à l'apprentissage",min:0,max:40,step:5,fmt:v=>"−"+v+" %",
        help:"Financement des centres de formation des apprentis et primes aux employeurs.",
        effMd:v=>v/100*15.5,lvl:v=>-v*0.004,ramp:2,mult:0.5,
        info:{c:"Le nombre d'apprentis a plus que doublé depuis 2018 grâce à des aides généreuses. Les réduire passe par des primes moins élevées, ou recentrées sur les jeunes peu qualifiés et les petites entreprises.",
          who:"Environ 900 000 apprentis, les centres de formation et les employeurs.",
          pour:"Une grande partie des aides va à des étudiants du supérieur qui auraient trouvé un emploi de toute façon.",
          contre:"L'apprentissage est l'un des meilleurs outils d'insertion des jeunes peu diplômés.",
          src:"Banque des Territoires, d'après France compétences : 15,5 Md€ en 2024."}},
      {id:"cir",label:"Crédit d'impôt recherche",min:0,max:50,step:5,fmt:v=>"−"+v+" %",
        help:"Réduction d'impôt pour les entreprises qui font de la recherche.",
        effMd:v=>v/100*8.0,lvl:v=>-v*0.004,ramp:2,mult:0.3,
        info:{c:"Les entreprises récupèrent environ 30 % de leurs dépenses de recherche. On peut le plafonner par groupe ou réduire son taux.",
          who:"Des milliers d'entreprises, mais une grande partie du montant va aux grands groupes.",
          pour:"Coût élevé, effets d'optimisation chez les grands groupes, effet sur l'innovation jugé moyen par plusieurs évaluations.",
          contre:"Il aide à garder des centres de recherche en France face à la concurrence internationale.",
          src:"Sénat, rapport sur le budget 2026 : 7,8 Md€ en 2024, plus de 8 Md€ prévus en 2025 et 2026."}},
      {id:"surtaxe",label:"Prolonger la surtaxe des grandes entreprises",min:0,max:8,step:1,fmt:v=>v+" Md€",
        help:"Le scénario de base suppose qu'elle s'arrête après 2026, comme prévu. Ce curseur la maintient, en Md€ par an.",
        effMd:v=>v,lvl:v=>-v*0.01,ramp:1,mult:0.2,
        info:{c:"Depuis 2025, les groupes de plus d'1 Md€ de chiffre d'affaires paient un impôt sur les sociétés majoré, présenté comme temporaire et prolongé en 2026 à demi-taux. Environ 4 Md€ à demi-taux, 8 Md€ à plein taux.",
          who:"Quelques centaines de grands groupes.",
          pour:"Rendement élevé sur un petit nombre d'entreprises très profitables.",
          contre:"Risque pour l'attractivité, et la promesse d'une mesure temporaire n'est pas tenue.",
          src:"Source secondaire : environ 8 Md€ attendus en 2025 selon le budget, cité par le Journal du Net. Sénat : prolongation en 2026 à la moitié des taux."}}
    ]},
    {id:"niches",name:"Niches fiscales des ménages",base:"≈ 80 Md€ de dépenses fiscales hors crédit d'impôt recherche (estimation)",
     intro:"Une niche fiscale est une réduction d'impôt accordée pour encourager un comportement (embaucher à domicile, épargner, donner, rénover…). Il en existe environ 470.",
     levers:[
      {id:"domicile",label:"Crédit d'impôt emploi à domicile",min:0,max:50,step:5,fmt:v=>"−"+v+" %",
        help:"La moitié des dépenses de ménage, garde d'enfants, aide à domicile est remboursée par l'État.",
        effMd:v=>v/100*6.86,ramp:2,mult:0.5,
        info:{c:"Quand on emploie quelqu'un chez soi, l'État rembourse 50 % du coût, dans la limite d'un plafond. On peut baisser le plafond ou le taux.",
          who:"Plusieurs millions de foyers, dont une forte part de ménages aisés, et les salariés du secteur.",
          pour:"Profite surtout aux foyers aisés, qui consomment le plus de services à domicile.",
          contre:"Aide aussi les personnes âgées et la garde d'enfants ; une baisse forte pousse vers le travail non déclaré.",
          src:"Source secondaire : 6,86 Md€ selon les annexes du budget 2025, cités par Moneyvox."},
        alert:v=>v>30?"Une baisse forte risque de renvoyer une partie de ces emplois vers le travail non déclaré.":""},
      {id:"tvared",label:"TVA réduites sur travaux et restauration",min:0,max:100,step:10,fmt:v=>v+" %",
        help:"Ces secteurs paient 10 % de TVA au lieu de 20 %.",
        effMd:v=>v/100*8.3,ramp:2,mult:0.6,
        info:{c:"La rénovation de logement et la restauration bénéficient d'un taux de TVA réduit. Ce curseur indique la part de l'avantage supprimée, en remontant progressivement le taux.",
          who:"Les clients des restaurants et des artisans, et ces deux secteurs.",
          pour:"La baisse de TVA en restauration en 2009 a peu baissé les prix et a surtout augmenté les marges.",
          contre:"Hausse des prix pour les consommateurs ; risque de travail non déclaré dans le bâtiment.",
          src:"Source secondaire : Fipeco, 4,3 Md€ pour les travaux et 4,0 Md€ pour la restauration, chiffres 2022."}},
      {id:"hsup",label:"Exonération d'impôt des heures supplémentaires",min:0,max:100,step:10,fmt:v=>v+" %",
        help:"Les heures supplémentaires ne sont pas soumises à l'impôt sur le revenu, jusqu'à un plafond.",
        effMd:v=>v/100*1.79,ramp:1,mult:0.6,
        info:{c:"Supprimer tout ou partie de l'exonération : les heures supplémentaires redeviennent imposables comme le reste du salaire.",
          who:"Les salariés qui font des heures supplémentaires, surtout ouvriers et employés.",
          pour:"Incite peu à travailler plus selon plusieurs évaluations ; favorise l'optimisation.",
          contre:"Hausse d'impôt visible pour des salariés modestes et moyens.",
          src:"Source secondaire : 1,79 Md€ selon les annexes du budget 2025, cités par Moneyvox."}},
      {id:"epsal",label:"Exonération de l'épargne salariale",min:0,max:100,step:10,fmt:v=>v+" %",
        help:"Intéressement et participation ne sont pas imposés s'ils sont placés.",
        effMd:v=>v/100*2.75,ramp:1,mult:0.4,
        info:{c:"Les primes d'intéressement et de participation placées sur un plan d'épargne échappent à l'impôt sur le revenu. Les fiscaliser, même partiellement, rapporte.",
          who:"Les salariés des entreprises qui en distribuent, surtout les grandes.",
          pour:"Avantage concentré sur les salariés des grandes entreprises, souvent mieux payés.",
          contre:"Moins d'incitation à partager les bénéfices avec les salariés.",
          src:"Source secondaire : 2,75 Md€ selon les annexes du budget 2025, cités par Moneyvox."}},
      {id:"autres",label:"Rabot sur les autres niches",min:0,max:30,step:1,fmt:v=>"−"+v+" %",
        help:"Toutes les autres niches : dons, investissement locatif, outre-mer, épargne, secteurs particuliers…",
        effMd:v=>v/100*55,ramp:2,mult:0.4,
        info:{c:"Un pourcentage de réduction appliqué uniformément à environ 55 Md€ de niches restantes, de ménages comme d'entreprises. Dans la réalité, on choisirait niche par niche.",
          who:"Très variable : donateurs, investisseurs, habitants d'outre-mer, agriculteurs, transporteurs…",
          pour:"Beaucoup de niches n'ont jamais été évaluées ; la Cour des comptes recommande régulièrement d'en supprimer.",
          contre:"Chaque niche a ses défenseurs ; certaines soutiennent des territoires ou des secteurs fragiles.",
          src:"Estimation de l'auteur : total de 88 Md€ hors CICE en 2022 (Fipeco), moins les niches traitées séparément. Base ancienne et approximative ; le total officiel est dans l'annexe « Voies et moyens » du budget."}}
    ]},
    {id:"impots",name:"Impôts nouveaux ou plus élevés",base:"Mesures nouvelles",
     intro:"Les prélèvements obligatoires représentent déjà environ 43 % du PIB, parmi les plus élevés au monde. Les hausses possibles diffèrent beaucoup par qui elles touchent.",
     levers:[
      {id:"patri",label:"Impôt minimum sur les très hauts patrimoines",min:0,max:2,step:0.25,fmt:v=>fr(v,2).replace(/,?0+$/,"")+" %",
        help:"Un impôt plancher pour les patrimoines de plus de 100 millions d'euros.",
        effMd:v=>v/2*10,ramp:2,mult:0.1,
        info:{c:"Environ 1 800 foyers paieraient au moins un certain pourcentage de leur patrimoine chaque année, impôts déjà payés déduits. C'est la « taxe Zucman » quand le taux est de 2 %.",
          who:"Les 0,01 % les plus riches.",
          pour:"Ces foyers paient proportionnellement peu d'impôt sur le revenu, car leurs gains restent dans leurs sociétés.",
          contre:"Risque d'exil fiscal et difficulté à taxer des entreprises non cotées : le rendement réel est très incertain.",
          src:"Hypothèse de l'auteur : 10 Md€ à 2 %, au milieu des estimations publiées (de quelques milliards à environ 20 Md€). Aucune évaluation administrative officielle."}},
      {id:"succ",label:"Taxation des très grosses successions",min:0,max:14,step:1,fmt:v=>v+" Md€",
        help:"Limiter les exonérations (assurance-vie, transmission d'entreprises) et taxer plus les très gros héritages.",
        effMd:v=>v,ramp:3,mult:0.1,
        info:{c:"Les droits de succession rapportent déjà environ 0,7 % du PIB. Une grande partie des très gros patrimoines échappe à l'impôt grâce à l'assurance-vie et au pacte Dutreil. Ce curseur indique la recette supplémentaire visée.",
          who:"Les héritiers de gros patrimoines. La grande majorité des successions en ligne directe ne paie déjà rien.",
          pour:"La part de la richesse héritée augmente ; c'est un impôt peu nuisible à l'activité.",
          contre:"Impôt très impopulaire, y compris chez ceux qui ne le paient pas ; risque de départs et de difficultés pour transmettre les entreprises familiales.",
          src:"Source non officielle : l'Ifrap (think tank) chiffrait en 2022 la proposition la plus ambitieuse à environ 14 Md€ par an, ce qui fixe le maximum du curseur."}},
      {id:"tva",label:"Hausse de tous les taux de TVA",min:0,max:2,step:0.5,fmt:v=>"+"+fr(v)+" pt",
        help:"Par exemple 20 % → 21 %, 10 % → 11 %, 5,5 % → 6,5 %.",
        effMd:v=>v*11.4,ramp:1,mult:0.6,
        info:{c:"La TVA s'applique sur presque tout ce qu'on achète. Un point de plus sur tous les taux augmente les prix de l'ordre de 1 %.",
          who:"Tous les consommateurs ; proportionnellement plus les ménages modestes, qui consomment tout leur revenu.",
          pour:"Rendement élevé et certain ; touche aussi les produits importés.",
          contre:"Pèse sur le pouvoir d'achat et la consommation ; c'est l'impôt le moins progressif.",
          src:"DG Trésor : 11,4 Md€ en 2025 pour une hausse d'un point de tous les taux, sans effet de comportement."}},
      {id:"fraude",label:"Recettes supplémentaires contre la fraude",min:0,max:10,step:1,fmt:v=>v+" Md€",
        help:"Mieux détecter et récupérer la fraude fiscale et sociale.",
        effMd:v=>v,ramp:4,mult:0.2,
        info:{c:"Plus de contrôleurs, croisement des données, sanctions plus fortes. Ce curseur indique ce qu'on récupère réellement chaque année en plus.",
          who:"Les fraudeurs : entreprises, particuliers, fraudes aux prestations.",
          pour:"Mesure consensuelle et juste.",
          contre:"La fraude totale se compte en dizaines de milliards, mais la part réellement récupérable est faible ; au-delà de quelques milliards, l'objectif est peu réaliste.",
          src:"Hypothèse : montant choisi par vous, plafonné à 10 Md€."}}
    ]},
    {id:"crois",name:"Emploi",base:"Effet sur la croissance",
     intro:"Plus de gens au travail, c'est plus de cotisations et d'impôts, et moins d'allocations. La France a un taux d'emploi plus faible que ses voisins, surtout chez les jeunes et les seniors.",
     levers:[
      {id:"emploi",label:"Hausse du taux d'emploi (seniors, jeunes)",min:0,max:5,step:0.5,fmt:v=>"+"+fr(v)+" pt",
        help:"Formation, accompagnement, incitations, en plus du recul de l'âge de départ.",
        effMd:()=>0,lvl:v=>v*0.8,ramp:8,mult:0,
        info:{c:"Un point de taux d'emploi, c'est environ 400 000 personnes de plus au travail. Le curseur suppose qu'on y arrive progressivement sur 8 ans, par la formation, l'accompagnement et les incitations.",
          who:"Les jeunes peu qualifiés, les seniors, les mères isolées, les chômeurs de longue durée.",
          pour:"C'est le levier le plus indolore : il augmente les recettes sans baisser les revenus de personne.",
          contre:"Son rendement est incertain : les politiques de l'emploi mettent du temps et ne marchent pas toujours.",
          src:"Hypothèse de l'auteur : chaque point d'emploi ajoute environ 0,8 % au PIB."}}
    ]}
  ];
  const MACRO=[
    {id:"g",label:"Croissance nominale tendancielle",min:0.5,max:5,step:0.1,unit:" %",def:2.6,help:"Croissance réelle + inflation, sans vos mesures."},
    {id:"r",label:"Taux d'emprunt à 10 ans",min:0.5,max:7,step:0.1,unit:" %",def:3.4,help:"Taux auquel la dette qui arrive à échéance est refinancée."},
    {id:"mat",label:"Maturité moyenne de la dette",min:3,max:15,step:0.5,unit:" ans",def:8.5,help:"Vitesse à laquelle le taux moyen rejoint le taux de marché."},
    {id:"ms",label:"Échelle des multiplicateurs",min:0,max:2,step:0.1,unit:"×",def:1,help:"Hypothèse de l'auteur. 1 = valeurs centrales. 2 = l'austérité freine deux fois plus l'activité."},
    {id:"vieil",label:"Dérive liée au vieillissement",min:0,max:0.15,step:0.01,unit:" pt PIB/an",def:0.05,fmt:v=>fr(v,2)+" pt PIB/an",help:"Hausse spontanée des dépenses de santé, dépendance et retraites, chaque année de 2027 à 2040. Hypothèse de l'auteur, à défaut de projection officielle consultée."},
    {id:"lpm",label:"Programmation militaire déjà votée",min:0,max:1,step:1,unit:"",def:1,fmt:v=>v?"Incluse":"Exclue",help:"Incluse : le budget des armées monte comme prévu (63,4 Md€ en 2027, +36 Md€ d'ici 2030), soit environ +0,5 pt de PIB d'ici 2030."}
  ];
  // Scénario « à politique inchangée » : défense programmée, vieillissement, fin de la surtaxe des grands groupes (≈ 4 Md€ à demi-taux).
  const SURTAXE_END=4/GDP*100, SEMI=0.5, PERSIST=0.8;
  function drift(p,t){
    if(t<1)return 0;
    const def=p.lpm?[0,0.2,0.3,0.4,0.5][Math.min(t,4)]:0;
    return def+p.vieil*Math.min(t,14)+SURTAXE_END;
  }
  const PRESETS={
    sq:{},
    dep:{pens:1.5,compl:1,age:2,abat:1,ville:1.2,hop:1,ij:20,wetat:1.3,ops:8,wcoll:1.2,dgf:15,chomage:25,minima:0.5,apl:20,mpr:60,apprenti:30,cotis:30,cir:40,domicile:50,autres:30,def:0.5,emploi:3.5},
    rec:{pens:1,compl:0.5,abat:2,ville:0.5,hop:0.5,ij:10,grandage:2,wetat:0.6,ops:3,wcoll:0.8,profs:4,apprenti:20,cotis:35,cir:50,surtaxe:8,domicile:40,tvared:100,hsup:100,epsal:100,autres:30,patri:2,succ:14,tva:2,fraude:10,def:0.5,emploi:2},
    mix:{pens:1,compl:1,age:1.5,abat:1,ville:1,hop:0.5,ij:15,grandage:3,soignants:2,wetat:0.6,ops:5,wcoll:1,dgf:10,profs:4,invest:0.3,chomage:10,apl:5,apprenti:25,cotis:25,cir:40,surtaxe:8,domicile:25,tvared:80,hsup:50,epsal:50,autres:30,patri:2,succ:8,tva:1,fraude:8,def:0.5,emploi:4}
  };


  const L=[];SECTORS.forEach(s=>s.levers.forEach(x=>{x.sector=s.id;L.push(x)}));
  function fr(x,n=1){return x.toLocaleString("fr-FR",{minimumFractionDigits:n,maximumFractionDigits:n})}
  const sign=(x,n=1)=>(x>0.0001?"+":x<-0.0001?"−":"")+fr(Math.abs(x),n);
  const $=id=>document.getElementById(id);
  const fullMd=(x,v)=>x.effMd(v)+(x.lvl?toPt(0)+FB*x.lvl(v)*GDP/100:0);

  // construction des contrôles
  const host=$("levers");
  SECTORS.forEach((s,k)=>{
    const d=document.createElement("details");d.className="panel sector";if(k<1)d.open=true;
    d.innerHTML=`<summary><div class="shead"><h3>${s.name}</h3><span class="tot zero" id="t-${s.id}"></span></div><span class="sbase">${s.base}</span><span class="chev"></span></summary><p class="sintro">${s.intro}</p>`+
      s.levers.map(x=>`<div class="ctrl"><div class="top"><label for="${x.id}">${x.label}</label><output id="o-${x.id}"></output></div>
      <input type="range" id="${x.id}" min="${x.min}" max="${x.max}" step="${x.step}" value="0">
      <span class="md" id="m-${x.id}"></span><small>${x.help}</small><span class="alert" id="a-${x.id}" hidden></span>
      <details class="more"><summary>Comprendre ce curseur</summary><div class="fiche">
        <div><b>Concrètement</b>${x.info.c}</div>
        <div><b>Qui est concerné</b>${x.info.who}</div>
        <div class="pc"><div><b>Arguments pour</b>${x.info.pour}</div><div><b>Arguments contre</b>${x.info.contre}</div></div>
        <div class="src"><b>D'où vient le chiffre</b>${x.info.src}</div></div></details></div>`).join("");
    host.appendChild(d);
  });
  const det=document.createElement("details");det.className="panel macro";
  det.innerHTML=`<summary>Hypothèses économiques</summary>`+MACRO.map(m=>`<div class="ctrl"><div class="top"><label for="${m.id}">${m.label}</label><output id="o-${m.id}"></output></div><input type="range" id="${m.id}" min="${m.min}" max="${m.max}" step="${m.step}" value="${m.def}"><small>${m.help}</small></div>`).join("");
  host.appendChild(det);

  function read(){const p={};L.forEach(x=>p[x.id]=parseFloat($(x.id).value));MACRO.forEach(m=>p[m.id]=parseFloat($(m.id).value));return p}
  const frac=(t,ramp)=>Math.min(1,Math.max(0,t/ramp));
  // G_REF : croissance supposée par le scénario de base. Écart conjoncturel (persistance 0,8) × semi-élasticité 0,5 → solde.
  const G_REF=2.6;
  function simulate(p,sq){
    let d=D0,i=I0,gdp=GDP,prevC=L.map(()=>0),prevLvl=0,cyc=0,prevDr=0;const out=[];
    for(let t=0;t<YEARS;t++){
      let lvl=0,dc=0,sum=0;const lv=[];
      const c=L.map((x,k)=>{const v=sq?0:p[x.id];const e=toPt(x.effMd(v))*frac(t,x.ramp);
        const l=x.lvl?x.lvl(v)*frac(t,x.lvlRamp||x.ramp):0;lvl+=l;lv.push(l);
        dc+=x.mult*(e-prevC[k]);sum+=e;return e;});
      const dr=drift(p,t);
      dc+=0.6*(-(dr-prevDr)); // la hausse spontanée des dépenses soutient un peu l'activité
      const gCyc=(p.g-G_REF)-p.ms*dc;
      cyc=PERSIST*cyc+gCyc;
      const pb=PB0-dr+sum+FB*lvl+SEMI*cyc, g=p.g+(lvl-prevLvl)-p.ms*dc;
      prevDr=dr;
      i=i+(p.r-i)/p.mat;
      const interest=d*i/100/(1+g/100);
      d=d*(1+i/100)/(1+g/100)-pb; gdp*=1+g/100;
      out.push({y:Y0+t,d,pb,i,g,intPct:interest,intMd:interest/100*gdp,c,lv,dr,cyc});
      prevC=c;prevLvl=lvl;
    }
    return out;
  }

  function quality(p){
    const st=v=>v>0.3?["down","Renforcés"]:v>-0.3?["flat","Préservés"]:v>-1.2?["amber","Sous tension"]:["up","Dégradés"];
    const sante=p.grandage/4+p.soignants/3-Math.max(0,p.hop-0.5)*2.5-Math.max(0,p.ville-0.8)*1.5-Math.max(0,p.ij-20)/15;
    const ecole=p.profs/4-Math.max(0,p.wetat-0.6)*2.5-Math.max(0,p.ops-5)/4;
    const local=-Math.max(0,p.wcoll-1)*1.5-Math.max(0,p.dgf-10)/8+Math.max(0,p.invest)*0.5-Math.max(0,-p.invest)*1.5;
    const solid=-Math.max(0,p.apl-8)/8-Math.max(0,p.chomage-15)/12-Math.max(0,p.pens-1)*1.5-Math.max(0,p.minima-0.3)*2-(p.tva>1?0.3:0);
    const clim=-Math.max(0,p.mpr-40)/40+Math.max(0,p.invest)*0.8-Math.max(0,-p.invest)*1.2;
    const t=(v,a,b,c)=>v>0.3?a:v>-0.3?b:c;
    return [
      ["Santé",st(sante),t(sante,"Plus de moyens humains à l'hôpital et pour le grand âge.","Les économies restent dans ce que la pertinence des soins peut absorber.","Les freins dépassent les gains d'efficience : délais et accès aux soins se dégradent.")],
      ["École et recherche",st(ecole),t(ecole,"Métier d'enseignant revalorisé, recrutements facilités.","Moyens stables en volume.","Postes supprimés, salaires qui décrochent ou universités sous pression.")],
      ["Services locaux",st(local),t(local,"Plus d'investissement dans les équipements locaux.","Collectivités à moyens comparables.","Moins d'investissement local et des services de proximité qui reculent.")],
      ["Solidarité",st(solid),t(solid,"Pas de baisse marquée du revenu des plus modestes.","Pas de baisse marquée du revenu des plus modestes.","Le revenu des ménages modestes, des chômeurs ou des petits retraités recule nettement.")],
      ["Transition écologique",st(clim),t(clim,"Plus d'investissement dans la transition.","Effort de transition maintenu.","Rénovation des logements et investissements verts ralentis.")]
    ];
  }

  function render(){
    const p=read();
    L.forEach(x=>{
      const v=p[x.id];$("o-"+x.id).textContent=v===0&&x.id!=="abat"?"—":x.fmt(v);
      const md=fullMd(x,v),m=$("m-"+x.id);
      m.textContent=Math.abs(md)<0.05?"Aucun effet":`${sign(md,1)} Md€/an sur le solde à pleine montée`;
      m.className="md"+(md>0.05?" pos":md<-0.05?" neg":"");
      const a=$("a-"+x.id),txt=x.alert?x.alert(v):"";a.hidden=!txt;a.textContent=txt;
    });
    SECTORS.forEach(s=>{const t=s.levers.reduce((a,x)=>a+fullMd(x,p[x.id]),0),e=$("t-"+s.id);
      e.textContent=Math.abs(t)<0.05?"0 Md€":sign(t,1)+" Md€";e.className="tot "+(t>0.05?"pos":t<-0.05?"neg":"zero")});
    MACRO.forEach(m=>$("o-"+m.id).textContent=m.fmt?m.fmt(p[m.id]):fr(p[m.id])+m.unit);

    const s=simulate(p,false),sq=simulate(p,true),at=(a,y)=>a.find(o=>o.y===y);
    $("k30").textContent=fr(at(s,2030).d)+" %";
    $("k30s").textContent="statu quo : "+fr(at(sq,2030).d)+" %";
    const last=s[s.length-1],prev=s[s.length-6];
    $("k45").textContent=fr(last.d)+" %";
    const slope=(last.d-prev.d)/5;
    $("ktrend").innerHTML=slope>0.15?'<span class="pill up">en hausse</span>':slope<-0.15?'<span class="pill down">en baisse</span>':'<span class="pill flat">stable</span>';
    let pk=s[0];s.forEach(o=>{if(o.d>pk.d)pk=o});
    $("kpk").textContent=fr(pk.d)+" %";
    $("kpky").textContent=pk.y===last.y?"toujours en hausse en 2045":"atteint en "+pk.y;
    $("kint").textContent=fr(last.intMd,0)+" Md€";
    $("kints").textContent=fr(last.intPct)+" % du PIB";

    const r33=at(s,2033);
    const lm=L.map((x,k)=>({x,md:(r33.c[k]+FB*r33.lv[k])*GDP/100}));
    const secs=SECTORS.map(sc=>{const items=lm.filter(o=>o.x.sector===sc.id&&Math.abs(o.md)>=0.3).sort((a,b)=>Math.abs(b.md)-Math.abs(a.md));
      return {name:sc.name,md:items.reduce((a,o)=>a+o.md,0),items}}).filter(o=>o.items.length).sort((a,b)=>b.md-a.md);
    const drMd=-r33.dr*GDP/100, cyMd=SEMI*r33.cyc*GDP/100;
    secs.push({name:"Dérive à politique inchangée",md:drMd,items:[{x:{label:"Défense programmée, vieillissement, fin de la surtaxe"},md:drMd}]});
    if(Math.abs(cyMd)>=0.5)secs.push({name:"Effet de la conjoncture sur les recettes",md:cyMd,items:[{x:{label:"Activité freinée ou soutenue par les mesures et la croissance"},md:cyMd}]});
    const mx=Math.max(1,...secs.map(o=>Math.abs(o.md)));
    $("bars").innerHTML=secs.length>1?secs.map(o=>{const w=Math.abs(o.md)/mx*100,col=o.md>=0?"var(--good)":"var(--warn)";
      const det=o.items.map(i=>`${i.x.label.toLowerCase()} ${sign(i.md,0)}`).join(" · ");
      return `<div class="bar"><div class="name"><span>${o.name}</span><div class="track"><div class="fill" style="width:${w}%;background:${col}"></div></div><span class="det">${det}</span></div><span class="v">${sign(o.md,0)}</span></div>`}).join("")
      :'<p class="empty">Aucune mesure : dépliez un secteur à gauche ou choisissez un paquet.</p>';
    $("pb33").textContent=sign(r33.pb)+" % du PIB";
    const pbStar=Math.max(last.d,100)*(p.r-p.g)/(100+p.g),gap=(pbStar-r33.pb)*GDP/100;
    $("need").innerHTML=`Solde primaire qui stabilise la dette à long terme avec ces hypothèses : <strong>${sign(pbStar)} %</strong>. `+(gap>1?`Il manque environ <strong>${fr(gap,0)} Md€</strong> par an en 2033.`:`Objectif atteint en 2033, avec une marge d'environ ${fr(-gap,0)} Md€.`);

    $("quality").innerHTML=quality(p).map(([n,[c,l],t])=>`<div class="qrow"><span class="qn">${n}</span><span><span class="pill ${c}">${l}</span></span><span class="qt">${t}</span></div>`).join("");
    document.querySelectorAll("#presets button").forEach(b=>{const pr=PRESETS[b.dataset.p];b.classList.toggle("on",L.every(x=>Math.abs((pr[x.id]||0)-p[x.id])<1e-9))});
    drawChart(s,sq);
  }

  let pts=[];
  function drawChart(s,sq){
    const svg=$("chart"),W=720,H=280,Lm=46,R=16,T=14,B=30;
    const all=s.map(o=>o.d).concat(sq.map(o=>o.d),[D0]);
    const lo=Math.max(0,Math.floor((Math.min(...all)-5)/10)*10),hi=Math.ceil((Math.max(...all)+5)/10)*10;
    const yEnd=s[s.length-1].y,x=y=>Lm+(y-2025)/(yEnd-2025)*(W-Lm-R),yv=v=>T+(hi-v)/(hi-lo)*(H-T-B);
    let g="";const st=(hi-lo)>80?20:10;
    for(let v=lo;v<=hi;v+=st)g+=`<line x1="${Lm}" x2="${W-R}" y1="${yv(v)}" y2="${yv(v)}" stroke="var(--line)" stroke-width="1"/><text x="${Lm-8}" y="${yv(v)+4}" text-anchor="end">${v}</text>`;
    [2025,2030,2035,2040,2045].forEach(y=>g+=`<text x="${x(y)}" y="${H-8}" text-anchor="middle">${y}</text>`);
    const line=a=>"M"+[[2025,D0]].concat(a.map(o=>[o.y,o.d])).map(([a,b])=>x(a).toFixed(1)+","+yv(b).toFixed(1)).join(" L");
    const sp=line(s);
    g+=`<path d="${sp} L${x(yEnd)},${H-B} L${x(2025)},${H-B} Z" fill="var(--accent)" fill-opacity="0.08"/>`;
    g+=`<path d="${line(sq)}" fill="none" stroke="var(--ghost)" stroke-width="2" stroke-dasharray="5 4"/>`;
    g+=`<path d="${sp}" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>`;
    const a=s[s.length-1],b=sq[sq.length-1],close=Math.abs(yv(a.d)-yv(b.d))<16;
    g+=`<circle cx="${x(a.y)}" cy="${yv(a.d)}" r="4" fill="var(--accent)"/>`;
    if(!close)g+=`<text x="${x(b.y)-6}" y="${yv(b.d)-8}" text-anchor="end">${fr(b.d,0)} %</text>`;
    g+=`<text x="${x(a.y)-8}" y="${yv(a.d)+(a.d<b.d||close?18:-8)}" text-anchor="end" style="fill:var(--accent);font-weight:600">${fr(a.d,0)} %</text>`;
    g+=`<line id="hov" x1="0" x2="0" y1="${T}" y2="${H-B}" stroke="var(--muted)" stroke-width="1" visibility="hidden"/>`;
    svg.innerHTML=g;pts=s.map((o,k)=>({o,q:sq[k],px:x(o.y)}));
  }
  const box=$("chartbox"),tip=$("tip");
  box.addEventListener("pointermove",e=>{
    const r=$("chart").getBoundingClientRect(),sx=(e.clientX-r.left)/r.width*720;
    let best=null;pts.forEach(p=>{if(!best||Math.abs(p.px-sx)<Math.abs(best.px-sx))best=p});if(!best)return;
    const h=$("hov");h.setAttribute("x1",best.px);h.setAttribute("x2",best.px);h.setAttribute("visibility","visible");
    tip.hidden=false;tip.textContent=`${best.o.y} · vos choix ${fr(best.o.d)} % · statu quo ${fr(best.q.d)} %`;
    tip.style.left=Math.min(Math.max(0,best.px/720*r.width-tip.offsetWidth/2),r.width-tip.offsetWidth)+"px";tip.style.top="0px";
  });
  box.addEventListener("pointerleave",()=>{tip.hidden=true;const h=$("hov");if(h)h.setAttribute("visibility","hidden")});

  function setPreset(k){const pr=PRESETS[k];L.forEach(x=>$(x.id).value=pr[x.id]||0);render()}
  L.concat(MACRO).forEach(x=>$(x.id).addEventListener("input",render));
  $("presets").addEventListener("click",e=>{const b=e.target.closest("button");if(b)setPreset(b.dataset.p)});
  setPreset("mix");
})();
