
(function(){
  // ---------- Sources ----------
  const S={
    insee_fp:["Insee, Finances publiques en 2025","https://www.insee.fr/fr/statistiques/8988841"],
    insee_dep:["Insee, Dépenses par administration publique en 2025","https://www.insee.fr/fr/statistiques/2381404"],
    insee_imp:["Insee, Impôts (comptes nationaux 2025)","https://www.insee.fr/fr/statistiques/2381408"],
    insee_pop:["Insee, Bilan démographique 2025","https://www.insee.fr/fr/statistiques/8719824"],
    plf27:["Projet de loi de finances pour 2027, article liminaire","https://www.assemblee-nationale.fr/dyn/opendata/PRJLANR5L17B3210.html"],
    resf:["DG Trésor, Rapport économique, social et financier 2027","https://www.tresor.economie.gouv.fr/Articles/2026/10/06/le-rapport-economique-social-et-financier-resf-2027-est-publie"],
    aft:["Agence France Trésor, chiffres clés","https://www.aft.gouv.fr/fr"],
    cor:["Conseil d'orientation des retraites, rapport annuel 2026, partie 2 chapitre 1","https://www.cor-retraites.fr/sites/default/files/2026-06/RA_Part2_Chap1.pdf"],
    lpm:["Sénat, L'essentiel sur l'actualisation de la programmation militaire","https://www.senat.fr/lessentiel/pjl25-635.pdf"],
    mesange:["DG Trésor, Le modèle macroéconométrique Mésange : réestimation et nouveautés, Cahiers de la DG Trésor n° 2017-04 (mai 2017)","https://www.tresor.economie.gouv.fr/Articles/2017/05/12/le-modele-macroeconometrique-mesange-reestimation-et-nouveautes"],
    drees_ret:["Drees, Les retraités et les retraites 2025, fiche 10","https://drees.solidarites-sante.gouv.fr/sites/default/files/2025-07/Fiche%2010%20-%20Les%20masses%20financi%C3%A8res%20relatives%20aux%20pensions%20de%20retraite.pdf"],
    drees_ve:["Drees, Les retraités et les retraites 2025, vue d'ensemble","https://drees.solidarites-sante.gouv.fr/sites/default/files/2025-07/Vue%20d'ensemble.pdf"],
    drees_mv:["Drees, Les retraités et les retraites 2025, fiche 26 (minimum vieillesse)","https://drees.solidarites-sante.gouv.fr/sites/default/files/2025-07/Fiche%2026%20-%20Les%20allocataires%20du%20minimum%20vieillesse%20et%20les%20allocations%20vers%C3%A9es.pdf"],
    senat_cas:["Sénat, Régimes sociaux et de retraite, PLF 2026","https://www.senat.fr/rap/l25-139-324/l25-139-324-syn.pdf"],
    senat_375:["Sénat, rapport n° 375 (2022-2023) sur la réforme des retraites","https://www.senat.fr/rap/l22-375/l22-3751.pdf"],
    senat_ondam:["Sénat, avis n° 747 (2025-2026) sur les comptes de la Sécurité sociale 2025","https://www.senat.fr/rap/a25-747/a25-7476.html"],
    cnaf_ef:["Cnaf, États financiers 2025 de la branche Famille","https://www.caf.fr/sites/default/files/medias/cnaf/Professionnels/Nous_connaitre/textes_de_reference/etats_financiers/2025/%C3%89tats%20financiers%20combin%C3%A9s%202025%20de%20la%20branche%20Famille%20-%207avril2026.pdf"],
    repss:["Rapport d'évaluation des politiques de Sécurité sociale, Famille 2025","https://questions.assemblee-nationale.fr/dyn/contenu/visualisation/922273/file/PLACSS%202024%20Annexe%201%20-%20REPSS%20Famille%202025.pdf"],
    cnaf_rsa:["Cnaf, RSA conjoncture, 1er trimestre 2026","https://www.caf.fr/sites/default/files/medias/cnaf/Nous_connaitre/Recherche_et_statistiques/Rsa%20Conjoncture/RSA%20Conjoncture_2026T1.pdf"],
    caf_rsa:["Caf, barème du RSA au 1er avril 2026","https://www.caf.fr/professionnels/offres-et-services/accompagnement-des-allocataires/bareme-revenu-de-solidarite-active"],
    senat_siec:["Sénat, Solidarité, insertion et égalité des chances, PLF 2026","https://www.senat.fr/fileadmin/Commissions/Finances/2025-2026/PLF_2026/NP/SIEC_NP_PLF_2026.pdf"],
    senat_aah:["Sénat, Solidarité, insertion et égalité des chances, PLF 2025","https://www.senat.fr/rap/l24-144-330/l24-144-3302.html"],
    unedic_rf:["Unédic, rapport financier 2025","https://s3.eusc-de-east-1.amazonaws.eu/unedic-eks-prod-cms/2026/07/07/unedic_rafi25_global_260702_uid_6a4cebf436690.pdf"],
    unedic_mt:["Unédic, montant d'indemnisation au 4e trimestre 2025","https://www.unedic.org/publications/le-montant-dindemnisation-chomage-au-4e-trimestre-2025"],
    senat_log:["Sénat, Hébergement, logement et ville, PLF 2026","https://www.senat.fr/fileadmin/cru-1759398938/Commissions/Finances/2025-2026/PLF_2026/Essentiel/CT_-_Hebergement__logement_et_ville_-_Essentiel_post-commission_-_PLF_2026.pdf"],
    senat_travail:["Sénat, Travail, emploi et administration des ministères sociaux, PLF 2026","https://www.senat.fr/rap/l25-139-331/l25-139-331_mono.html"],
    senat_scol:["Sénat, Enseignement scolaire, note de présentation PLF 2026","https://www.senat.fr/fileadmin/cru-1762483659/Commissions/Finances/2025-2026/PLF_2026/NP/Enseignement_scolaire_NP_PLF_2026.pdf"],
    senat_mires:["Sénat, Recherche et enseignement supérieur, PLF 2026","https://www.senat.fr/rap/l25-139-323/l25-139-323_mono.html"],
    an_secu:["Assemblée nationale, avis budgétaire Sécurités, PLF 2026","https://www.assemblee-nationale.fr/dyn/contenu/visualisation/1090827/file/EAT%20S%C3%A9curit%C3%A9s%20-%20PLF%202026.pdf"],
    senat_just:["Sénat, L'essentiel sur la mission Justice, PLF 2026","https://www.senat.fr/rap/l25-139-317/l25-139-317-syn.pdf"],
    drees_ms:["Drees, Minima sociaux et prestations de solidarité, édition 2025","https://drees.solidarites-sante.gouv.fr/sites/default/files/2025-12/Drees-Pano-MS%202025.pdf"],
    drees_f10x:["Drees, Les retraités et les retraites 2025, fiche 10, données (graphique 2)","https://drees.solidarites-sante.gouv.fr/sites/default/files/2025-07/Fiche%2010%20-%20Les%20masses%20financi%C3%A8res%20relatives%20aux%20pensions%20de%20retraite.pdf"],
    cdc_demo:["Cour des comptes, Démographie et finances publiques, décembre 2025","https://www.ccomptes.fr/fr/publications/demographie-et-finances-publiques"],
    ccss_sdv:["Commission des comptes de la Sécurité sociale, rapport d'octobre 2026, fiche 2.3 (soins de ville)","https://www.securite-sociale.fr/la-secu-en-detail/comptes-de-la-securite-sociale/rapports-de-la-commission"],
    ccss_ondam:["Commission des comptes de la Sécurité sociale, rapport d'octobre 2026, fiche 2.2 (Ondam 2025, 2026 et 2027)","https://www.securite-sociale.fr/la-secu-en-detail/comptes-de-la-securite-sociale/rapports-de-la-commission"],
    plfss_a5:["Annexe 5 au projet de loi de financement de la Sécurité sociale pour 2026, Ondam et dépenses de santé","https://www.securite-sociale.fr/files/live/sites/SSFR/files/medias/PLFSS/2026/PLFSS2026-Annexe5-2025-10-14_avec%20couverture.pdf"],
    lfi:["Loi n° 2026-103 du 19 février 2026 de finances pour 2026, état B","https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053508155"],
    drees_asd:["Drees, Les dépenses d'aide sociale départementale, séries longues 1999-2024 (tableau A)","https://drees.solidarites-sante.gouv.fr/communique-de-presse-jeux-de-donnees/jeux-de-donnees/une-augmentation-des-depenses-daide-sociale-de"],
    drees_dd124:["Drees, Les Dossiers de la Drees n° 124, L'aide sociale départementale : bénéficiaires, dépenses, financement, personnel (novembre 2024)","https://drees.solidarites-sante.gouv.fr/publications-communique-de-presse/les-dossiers-de-la-drees/241106_DD_aide-sociale-departementale"],
    caf_fraude:["Caf, dossier de presse, Bilan 2025 de la prévention et de la lutte contre la fraude (15 avril 2026)","https://caf.fr/sites/default/files/medias/cnaf/Nous_connaitre/Presse/2026/260415%20DP%20Lutte%20contre%20la%20fraude.pdf"],
    urssaf_fraude:["Urssaf, dossier de presse, Bilan 2025 de la lutte contre la fraude (février 2026)","https://www.urssaf.org"],
    ape:["Agence des participations de l'État, rapport d'activité 2024-2025","https://www.economie.gouv.fr/agence-participations-etat"],
    raefp26:["DGAFP, Rapport annuel sur l'état de la fonction publique, édition 2026 (Faits et chiffres)","https://www.fonction-publique.gouv.fr/collection-etudes-et-statistiques/rapport-annuel"],
    de_maut:["Ministère fédéral allemand des Transports (BMV), la redevance poids lourds (Lkw-Maut)","https://www.bmv.de/SharedDocs/DE/Artikel/StV/Strassenverkehr/lkw-maut.html"],
    de_pib:["Destatis, Germany in the European Union: key figures (PIB 2025)","https://www.destatis.de/Europa/EN/Topic/Key-indicators/Uebersicht.html"],
    uk_hmrc:["HMRC, HMRC tax receipts and National Insurance contributions for the UK, annual bulletin 2025-26","https://www.gov.uk/government/statistics/hmrc-tax-and-nics-receipts-for-the-uk/hmrc-tax-receipts-and-national-insurance-contributions-for-the-uk-new-annual-bulletin"],
    uk_stamp:["HMRC, UK Stamp Tax Statistics 2023 to 2024, commentary","https://www.gov.uk/government/statistics/uk-stamp-tax-statistics/uk-stamp-tax-statistics-2023-to-2024-commentary"],
    uk_gdp:["ONS, série YBHA, PIB aux prix courants du Royaume-Uni","https://www.ons.gov.uk/economy/grossdomesticproductgdp/timeseries/ybha/qna"],
    es_grav:["Gouvernement espagnol (La Moncloa), recettes 2024 des prélèvements temporaires sur les banques et l'énergie","https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/hacienda/paginas/2024/270424-gravamenes-banca.aspx"],
    fr_tsba:["Ministère de la Transition écologique et DGAC, Premiers retours sur la hausse de la TSBA de mars 2025 (novembre 2025)","https://www.ecologie.gouv.fr/sites/default/files/documents/etude_impact_TSBA_transport_aerien_france_novembre2025.pdf"],
    ccss_rec:["Commission des comptes de la Sécurité sociale, rapport d'octobre 2026, fiche 1 (recettes), tableau 2","https://www.securite-sociale.fr/la-secu-en-detail/comptes-de-la-securite-sociale/rapports-de-la-commission"],
    insee_act:["Insee, Évolution de la population active (2025)","https://www.insee.fr/fr/statistiques/8733063"],
    tresor334:["DG Trésor, Taux d'intérêt, croissance et soutenabilité de la dette publique, Trésor-Éco n° 334 (octobre 2023)","https://www.tresor.economie.gouv.fr/Articles/3658fd90-1ddd-492b-884e-56818aa86b2f/files/ac5fd22a-eff1-4cbe-989f-e1f7c75db1ba"],
    fs_cice:["France Stratégie, Évaluation du CICE : synthèse des travaux d'approfondissement (septembre 2020)","https://www.strategie-plan.gouv.fr/files/files/Presse/CP%202020/2020-09-01_Evaluation%20du%20CICE%20%3B%20France%20Strat%C3%A9gie%20publie%20une%20synth%C3%A8se%20des%20travaux%20d%27approfondissement.pdf"],
    senat_cice:["Sénat, avis n° 148 (2018-2019), Économie : coût du CICE par année","https://www.senat.fr/rap/a18-148-3/a18-148-34.html"],
    unedic_eval:["Unédic, Évaluation de la réforme d'assurance chômage 2019-2021 : principaux enseignements (mars 2025)","https://s3.eusc-de-east-1.amazonaws.eu/unedic-eks-prod-cms/2025/04/03/Synthese-Principaux-enseignements-de-l-evaluation_uid_67ee965e4dfb9.pdf"],
    igf_app:["IGF et IGAS, Revue des dépenses publiques d'apprentissage et de formation professionnelle (mars 2024)","https://igas.gouv.fr/sites/igas/files/2024-09/Rapport%20Igas%20-IGF%20Apprentissage-Formation%20%28revue%20de%20d%C3%A9penses%29.pdf"],
    rgpp:["IGA, IGF et IGAS, Bilan de la RGPP et conditions de réussite d'une nouvelle politique de réforme de l'État (septembre 2012)","https://www.fonction-publique.gouv.fr/files/files/ArchivePortailFP/www.fonction-publique.gouv.fr/files/files/publications/hors_collections/20120925-rapport-bilan-RGPP_sans-annexes.pdf"],
    cdc_ecotaxe:["Cour des comptes, rapport public annuel 2017, L'écotaxe poids lourds : un échec stratégique, un abandon coûteux","https://banquedesterritoires.fr/sites/default/files/ra/Le%20chapitre%20du%20rapport%20public%20annuel%20de%20la%20Cour%20des%20Comptes%20sur%20l%27abandon%20de%20l%27%C3%A9cotaxe%20poids%20lourds.pdf"],
    fs_isf:["France Stratégie, Comité d'évaluation des réformes de la fiscalité du capital, quatrième rapport (octobre 2023)","https://www.strategie.gouv.fr/sites/strategie.gouv.fr/files/atoms/files/fs-2023-rapport-isf-quatrieme_rapport_complet_17octobre_avis.pdf"],
    cor_2010:["COR, S. Rabaté et J. Rochut, Impact de la réforme des retraites de 2010 sur l'activité des seniors (document n° 11, octobre 2016)","https://www.cor-retraites.fr/sites/default/files/2019-06/doc-3747.pdf"],
    ca_bourgon:["J. Bourgon (greffière du Conseil privé du Canada de 1994 à 1999), Program Review: The Government of Canada's Experience Eliminating the Deficit, 1994-99 (CIGI, 2009)","https://www.cigionline.org/static/documents/the_government_of_canada_s_experience_eliminating_the_deficit_1994-99.pdf"],
    se_budget98:["Gouvernement suédois, The Budget Statement 1998 (Prop. 1997/98:150)","https://www.regeringen.se/contentassets/7d86681d640044bdb24c7abb4ee7e545/the-budget-statement/"],
    se_jonung:["F. Andersson et L. Jonung, The Swedish Fiscal Framework (Commission européenne)","https://commission.europa.eu/document/download/4a2ec503-e468-4f0d-aadf-159ce604be69_en?filename=swedish-fiscal-framework-andersson-jonung_en.pdf&prefLang=de"],
    ba_hartz:["Bundesagentur für Arbeit, Arbeitslosigkeit im Zeitverlauf (republié par la bpb, 2013)","https://www.bpb.de/system/files/dokument_pdf/04%20Ausgew%C3%A4hlte%20Arbeitslosenquoten%20II.pdf"],
    iab_hartz:["IAB, Kurzbericht n° 18/2007 sur les effets statistiques de Hartz IV","https://doku.iab.de/kurzber/2007/kb1807.pdf"],
    de_rente67:["Bundestag, projet de loi RV-Altersgrenzenanpassungsgesetz, Drucksache 16/3794 (décembre 2006)","https://dserver.bundestag.de/btd/16/037/1603794.pdf"],
    oecd_dk:["OCDE, Ambitious retirement age indexation ensures sustainable public finances in Denmark (janvier 2019)","https://oecdecoscope.blog/2019/01/15/ambitious-retirement-age-indexation-ensures-sustainable-public-finances-in-denmark/"],
    it_mef:["Ministère italien de l'Économie et des Finances, Rapporto sui risultati conseguiti in materia di contrasto all'evasione (septembre 2020)","https://www.finanze.gov.it/export/sites/finanze/.galleries/Documenti/Varie/Rapporto_evasione_2021_25-Settembre_2020.pdf"],
    ec_vatgap:["Commission européenne, VAT Gap in Europe, rapport 2025","https://taxation-customs.ec.europa.eu/vat-gap_fr"],
    upb_superbonus:["Ufficio parlamentare di bilancio (Italie), audition sur le décret-loi 39/2024, Superbonus (avril 2024)","https://www.upbilancio.it/wp-content/uploads/2024/04/Comunicato-Memoria-DL-39.pdf"],
    cor26:["Conseil d'orientation des retraites, rapport annuel de juin 2026 (rapport complet)","https://www.cor-retraites.fr/rapports-du-cor/rapport-annuel-cor-juin-2026-evolutions-perspectives-retraites-france"],
    drees_ase:["Drees, Les Dossiers de la Drees n° 131, L'aide sociale à l'enfance, édition 2025 (juin 2025)","https://onpe.france-enfance-protegee.fr/wp-content/uploads/2025/09/dd-ase-2025_vf.pdf"],
    plfss_a4:["Annexe 4 au projet de loi de financement de la Sécurité sociale pour 2026, réductions et exonérations de cotisations","https://www.assemblee-nationale.fr/dyn/contenu/visualisation/1088679/file/PLFSS2026-Annexe4-20251014-183718-59-11_avec%20couverture-2.pdf"],
    vm1:["Évaluation des voies et moyens, tome I (recettes), PLF 2026","https://www.assemblee-nationale.fr/dyn/contenu/visualisation/1087930/file/PLF%202026%20-%20V%26M%20TI%20-%20Evaluations%20des%20recettes.pdf"],
    raefp:["DGAFP, Rapport annuel sur l'état de la fonction publique, édition 2025 (Faits et chiffres)","https://www.fonction-publique.gouv.fr/toutes-les-publications/rapport-annuel-sur-letat-de-la-fonction-publique-edition-2025"],
    senat_ecolo:["Sénat, Écologie, note de présentation PLF 2026","https://www.senat.fr/fileadmin/cru-1762483659/Commissions/Finances/2025-2026/PLF_2026/NP/Ecologie_NP_PLF_2026.pdf"],
    senat_942:["Sénat, rapport n° 942 (2025-2026) sur le poids des prélèvements obligatoires","https://www.senat.fr/rap/r25-942/r25-94223.html"],
    vm:["Évaluation des voies et moyens, tome II, PLF 2026","https://www.assemblee-nationale.fr/dyn/dyn/contenu/visualisation/1087933/file/Voies_et_moyens_Tome_2_2026.pdf"],
    dgt_tva:["DG Trésor, Analyse de la composition des recettes de TVA","https://www.tresor.economie.gouv.fr/Articles/2025/09/25/analyse-de-la-composition-des-recettes-de-tva"],
    dgfip_ir:["DGFiP Statistiques n° 41, l'impôt sur le revenu 2024","https://www.impots.gouv.fr/sites/default/files/media/9_statistiques/0_etudes_et_stats/0_publications/dgfip_statistiques/2025/num41_11/dgfip_stat_41.pdf"],
    eco_fraude:["Ministère de l'Économie, résultats du contrôle fiscal 2025","https://www.economie.gouv.fr/actualites/lutte-contre-la-fraude-un-controle-fiscal-toujours-plus-efficace-en-2025"],
    senat_312:["Sénat, rapport n° 312 (2025-2026) sur le PLF 2026","https://www.senat.fr/rap/l25-312/l25-312_mono.html"],
    es_patri:["Agencia Tributaria, statistique de l'impôt sur le patrimoine 2023","https://sede.agenciatributaria.gob.es/AEAT/Contenidos_Comunes/La_Agencia_Tributaria/Estadisticas/Publicaciones/sites/patrimonio/2023/jrubikf225ac2608e24170502db1c9c1f3d63347f21d546.html"],
    es_itsgf:["Ministère espagnol des Finances, communiqué du 20 septembre 2023 sur l'impôt de solidarité sur les grandes fortunes","https://www.hacienda.gob.es/GabineteMinistro/notas%20prensa/2023/s.e.hacienda/20-09-23-np-impuesto-grandes-fortunas.pdf"],
    es_pib23:["INE (Espagne), comptes nationaux annuels, révision 2024","https://www.ine.es/dyngs/Prensa/CNA2024.pdf"],
    es_pib22:["INE (Espagne), comptes nationaux annuels, série 1995-2023","https://ine.es/dyngs/Prensa/CNA2023.htm"],
    no_formue:["Gouvernement norvégien, Prop. 1 LS (2026-2027), statistiques fiscales 2024","https://www.regjeringen.no/no/dokumenter/prop.-1-ls-20262027/id3176120/?ch=52"],
    no_pib:["Statistics Norway, Economic Survey 1/2026","https://www.ssb.no/en/nasjonalregnskap-og-konjunkturer/konjunkturer/artikler/economic-survey-1-2026/_/attachment/inline/c8dbf16f-6714-4376-874e-2671fe143570:1ed15e8b9c104bf4d05506c78fec8a0dd2edf957/ES2026-1.pdf"],
    ch_fortune:["Administration fédérale des contributions (Suisse), impôt sur la fortune des personnes physiques","https://www.estv2.admin.ch/stp/ds/d-vermoegenssteuer-np-fr.pdf"],
    ch_pib:["Office fédéral de la statistique (Suisse), PIB 2024","https://www.admin.ch/fr/newnsb/g_gdkur8MbGnSQEUz5IWy"],
    fr_isf:["Sénat, rapport n° 42 (2019-2020), bilan de la transformation de l'ISF en IFI","https://www.senat.fr/rap/r19-042-1/r19-042-1_mono.html"],
    fr_pib17:["Insee, Les comptes de la Nation en 2017","https://www.insee.fr/fr/statistiques/3550563"]
  };
  const POP=69.082; // millions d'habitants au 1er janvier 2026 (Insee)
  const GDP0=3068;  // Md€ 2026 : PIB 2025 (Insee) × croissance et inflation 2026 (RESF 2027)

  function fr(x,n=1){return x.toLocaleString("fr-FR",{minimumFractionDigits:n,maximumFractionDigits:n})}
  const sign=(x,n=1)=>(x>0.00001?"+":x<-0.00001?"−":"")+fr(Math.abs(x),n);
  const perMonth=(base,what)=>v=>`${what} : ${sign(base*v/100,0)} € par mois`;
  const perYear=(base,what)=>v=>`${what} : ${sign(base*v/100,0)} € par an`;
  const perHab=amt=>v=>`Par habitant : ${sign(amt*1000/POP*v/100,0)} € par an de dépense publique`;
  const perTot=(amt,what)=>v=>`${what} : ${sign(amt*v/100,amt*Math.abs(v)/100<10?2:1)} Md€ par an`;
  const P=v=>(v>0?"+":"")+fr(v,Number.isInteger(v)?0:1)+" %";
  const pensTr=v=>`≈ revalorisation de ${fr(Math.abs(v)/5,1)} point par an ${v<0?"en dessous":"au-dessus"} de l'inflation pendant 5 ans`;

  // ---------- Données ----------
  // kind : "dep" (dépense : la baisser améliore le solde), "rec" (recette : la hausser améliore), "niche" (avantage : le réduire améliore)
  const SECTORS=[
  {id:"ret",name:"Retraites",kind:"dep",min:-15,max:15,step:0.5,
   base:"370 Md€ de pensions en 2023, 13,1 % du PIB (Drees)",
   intro:"Première dépense publique. 17,2 millions de retraités de droit direct fin 2023 ; pension moyenne de droit direct : 1 666 € brut par mois (Drees). Le COR projette le poids des retraites à 14,1 % du PIB en 2030 et 14,2 % en 2045 : à législation inchangée, le vieillissement ne fait presque pas monter cette dépense en part de PIB. Effet sur l'activité : selon les modèles réunis par le COR (rapport 2026, p. 20), modérer les pensions de 6 Md€ (0,2 point de PIB) réduit le PIB de 0,1 à 0,2 % ; le gain net sur le solde n'est que de +0,1 point à 2, 10 et 20 ans. Le simulateur reprend ces résultats du COR : 1 point de PIB d'économie sur les pensions améliore le solde de 0,5 point et réduit le PIB de 0,75 % (milieu de la fourchette).",
   tr:v=>`${P(v)} sur les pensions ${pensTr(v)}.`,
   per:v=>`Pour la pension moyenne de droit direct (1 666 € brut) : ${sign(1666*v/100,0)} € par mois au bout de 5 ans`,
   lines:[
    {id:"r_gen",label:"Régime général des salariés du privé (base)",amt:147,yr:2023,ramp:5,tr:pensTr,
     help:"Pensions de base versées par l'Assurance retraite (Cnav).",
     who:"Les anciens salariés du privé : la très grande majorité des retraités.",
     per:perMonth(1000,"Pour 1 000 € de pension de base"),
     down:"Les pensions de base progressent moins vite que les prix : perte de pouvoir d'achat pour presque tous les retraités, y compris les petites pensions, sauf si un seuil de protection est prévu.",
     up:"Les pensions de base progressent plus vite que les prix : gain de pouvoir d'achat pour les retraités, financé par la Sécurité sociale.",
     src:"drees_f10x",note:"Montant 2023 versé par le régime général : 147 Md€ sur 370 Md€ (Drees, fiche 10, données du graphique 2, arrondies au milliard)."},
    {id:"r_pub",label:"Fonctionnaires, régimes spéciaux et salariés agricoles",amt:104,yr:2023,ramp:5,tr:pensTr,
     help:"Pensions des fonctionnaires (État, hôpitaux, collectivités), des régimes spéciaux (SNCF, RATP…) et des salariés agricoles.",
     who:"Les anciens fonctionnaires et agents des régimes spéciaux, dont 69,3 Md€ pour les fonctionnaires de l'État en 2025 (Sénat).",
     per:perMonth(1000,"Pour 1 000 € de pension"),
     down:"Revalorisation plus faible pour les anciens fonctionnaires et agents des régimes spéciaux : perte de pouvoir d'achat.",
     up:"Meilleure revalorisation pour ces retraités, financée par l'État et les caisses concernées.",
     src:"drees_f10x",note:"Régimes particuliers de salariés (MSA salariés, CNRACL, RATP, SNCF, agents de l'État…) : 104 Md€ en 2023 (Drees, fiche 10, données du graphique 2). Pensions de l'État : Sénat, PLF 2026."},
    {id:"r_compl",label:"Retraites complémentaires (Agirc-Arrco, Ircantec…)",amt:97,yr:2023,ramp:5,tr:pensTr,
     help:"Pensions complémentaires des salariés. Leur revalorisation est décidée par les syndicats et le patronat, pas par l'État.",
     who:"Les anciens salariés du privé, surtout les cadres, pour qui la complémentaire pèse lourd.",
     per:perMonth(1000,"Pour 1 000 € de pension complémentaire"),
     down:"Perte de pouvoir d'achat sur la partie complémentaire de la pension. Décision des partenaires sociaux : l'État ne peut pas l'imposer seul.",
     up:"Gain de pouvoir d'achat pour les anciens salariés, si les régimes complémentaires en ont les moyens.",
     src:"drees_f10x",note:"Régimes complémentaires de salariés : 97 Md€ en 2023 (Drees, fiche 10, données du graphique 2)."},
    {id:"r_ns",label:"Indépendants, agriculteurs et professions libérales",amt:20,yr:2023,ramp:5,tr:pensTr,
     help:"Pensions des anciens non-salariés.",
     who:"Les anciens artisans, commerçants, agriculteurs exploitants et professions libérales.",
     per:perMonth(1000,"Pour 1 000 € de pension"),
     down:"Perte de pouvoir d'achat pour d'anciens non-salariés, dont beaucoup d'agriculteurs aux petites pensions.",
     up:"Gain de pouvoir d'achat pour ces retraités, souvent aux pensions modestes.",
     src:"drees_f10x",note:"Régimes de non-salariés : 20 Md€ en 2023 (Drees, fiche 10, données du graphique 2)."},
    {id:"r_mv",label:"Minimum vieillesse (Aspa)",amt:4.109,yr:2023,ramp:2,
     help:"Allocation qui garantit un revenu minimum aux personnes âgées les plus pauvres.",
     who:"723 000 allocataires fin 2023, 752 800 fin 2024 ; 484 € par mois en moyenne versés par allocataire en 2023 (Drees).",
     per:perMonth(484,"Pour l'allocation moyenne"),
     down:"Les plus pauvres des retraités perdent du revenu, sans autre ressource pour compenser.",
     up:"Hausse du revenu des retraités les plus pauvres, pour un coût limité.",
     src:"drees_ms",note:"Dépenses 2023 : 4 109 M€ (ASV et Aspa), effectifs et montant moyen : Drees, Minima sociaux et prestations de solidarité, édition 2025, fiche 07, tableau 1, p. 79 ; effectif fin 2024 : fiche 28. Correction d'octobre 2026 : la version précédente reprenait 4,3 Md€ et 499 €, d'une autre publication de la Drees."}
   ]},
  {id:"ville",name:"Soins de ville",kind:"dep",min:-15,max:15,step:0.5,
   base:"114,7 Md€ prévus en 2026 pour le régime général, avant remises (Comptes de la Sécurité sociale, octobre 2026)",
   intro:"Tout ce que l'assurance maladie rembourse hors de l'hôpital, poste par poste. Champ : régime général, qui couvre la grande majorité des assurés, montants avant les remises des laboratoires. L'objectif voté pour l'ensemble des soins de ville en 2026 est de 117,5 Md€, tous régimes et remises déduites.",
   tr:v=>`${P(v)} sur ces remboursements, une fois appliqué.`,
   per:(v,T)=>`Par habitant : ${sign(T*1000/POP*v/100,0)} € par an de remboursements`,
   lines:[
    {id:"s_gen",label:"Médecins généralistes",amt:6.54,yr:2026,ramp:3,
     help:"Consultations et actes des médecins généralistes libéraux remboursés.",
     who:"Tous les patients et les quelque médecins généralistes libéraux ; zones déjà en manque de médecins.",
     per:perHab(6.54),
     down:"Tarifs ou remboursements plus bas : revenu des généralistes en baisse ou reste à charge plus élevé pour les patients, alors que le métier attire déjà peu.",
     up:"Meilleure rémunération des généralistes, levier pour l'installation dans les zones qui en manquent.",
     src:"ccss_sdv",note:"Comptes de la Sécurité sociale, octobre 2026, tableau 1, p. 96 : prévision 2026, régime général, avant remises des laboratoires, après franchises et participations forfaitaires."},
    {id:"s_spe",label:"Médecins spécialistes",amt:15.732,yr:2026,ramp:3,
     help:"Consultations et actes techniques des spécialistes libéraux (radiologie, cardiologie, chirurgie…).",
     who:"Les patients suivis par un spécialiste, les spécialistes libéraux.",
     per:perHab(15.732),
     down:"Baisse des tarifs ou des remboursements : revenus des spécialistes en baisse, ou dépassements plus fréquents payés par les patients et leurs mutuelles.",
     up:"Meilleurs remboursements des spécialistes.",
     src:"ccss_sdv",note:"Comptes de la Sécurité sociale, octobre 2026, tableau 1, p. 96 : prévision 2026, régime général, avant remises des laboratoires, après franchises et participations forfaitaires."},
    {id:"s_dent",label:"Dentistes et sages-femmes",amt:5.13,yr:2026,ramp:3,
     help:"Soins dentaires et suivi par les sages-femmes libérales.",
     who:"Les patients des dentistes (4 559 M€) et des sages-femmes (571 M€).",
     per:perHab(5.13),
     down:"Moins de remboursements : soins dentaires plus coûteux pour les patients, risque de renoncement aux soins.",
     up:"Soins dentaires mieux remboursés.",
     src:"ccss_sdv",note:"Comptes de la Sécurité sociale, octobre 2026, tableau 1, p. 96 : prévision 2026, régime général, avant remises des laboratoires, après franchises et participations forfaitaires (dentistes 4 559 M€, sages-femmes 571 M€)."},
    {id:"s_inf",label:"Infirmiers libéraux",amt:9.244,yr:2026,ramp:3,
     help:"Soins infirmiers à domicile et en cabinet.",
     who:"Les patients soignés à domicile, souvent âgés, et les infirmiers libéraux.",
     per:perHab(9.244),
     down:"Moins de soins à domicile remboursés ou des tarifs plus bas, alors que le maintien à domicile des personnes âgées repose beaucoup sur eux.",
     up:"Plus de soins infirmiers à domicile.",
     src:"ccss_sdv",note:"Comptes de la Sécurité sociale, octobre 2026, tableau 1, p. 96 : prévision 2026, régime général, avant remises des laboratoires, après franchises et participations forfaitaires."},
    {id:"s_kine",label:"Kinésithérapeutes",amt:5.398,yr:2026,ramp:3,
     help:"Séances de kinésithérapie remboursées.",
     who:"Les patients en rééducation et les kinésithérapeutes.",
     per:perHab(5.398),
     down:"Moins de séances remboursées ou des tarifs plus bas.",
     up:"Meilleure prise en charge de la rééducation.",
     src:"ccss_sdv",note:"Comptes de la Sécurité sociale, octobre 2026, tableau 1, p. 96 : prévision 2026, régime général, avant remises des laboratoires, après franchises et participations forfaitaires."},
    {id:"s_para",label:"Orthophonistes, orthoptistes et psychologues",amt:1.378,yr:2026,ramp:3,
     help:"Rééducation de la parole, de la vue, et consultations de psychologues (dispositif Mon soutien psy).",
     who:"Les enfants suivis en orthophonie, les patients en souffrance psychique.",
     per:perHab(1.378),
     down:"Moins de séances remboursées, alors que les délais d'attente sont déjà longs.",
     up:"Plus de séances remboursées, notamment de soutien psychologique.",
     src:"ccss_sdv",note:"Comptes de la Sécurité sociale, octobre 2026, tableau 1, p. 96 : prévision 2026, régime général, avant remises des laboratoires, après franchises et participations forfaitaires (orthophonistes 940 M€, orthoptistes 284 M€, psychologues 154 M€)."},
    {id:"s_forf",label:"Rémunérations forfaitaires et autres",amt:3.264,yr:2026,ramp:3,
     help:"Primes et forfaits versés aux professionnels (médecin traitant, objectifs de santé publique, coordination), cures et autres dépenses.",
     who:"Les professionnels de santé libéraux et les structures de coordination.",
     per:perHab(3.264),
     down:"Moins d'incitations à la prévention et à la coordination des soins.",
     up:"Plus d'incitations à la prévention et au suivi des patients.",
     src:"ccss_sdv",note:"Comptes de la Sécurité sociale, octobre 2026, tableau 1, p. 96 : prévision 2026, régime général, avant remises des laboratoires, après franchises et participations forfaitaires (rémunérations forfaitaires 2 703 M€, autres 561 M€)."},
    {id:"s_labo",label:"Laboratoires d'analyses",amt:3.3,yr:2026,ramp:3,
     help:"Analyses de biologie médicale remboursées.",
     who:"Les patients et les laboratoires de biologie.",
     per:perHab(3.3),
     down:"Baisse des tarifs des analyses : effort demandé aux laboratoires.",
     up:"Meilleurs remboursements des analyses.",
     src:"ccss_sdv",note:"Comptes de la Sécurité sociale, octobre 2026, tableau 1, p. 96 : prévision 2026, régime général, avant remises des laboratoires, après franchises et participations forfaitaires."},
    {id:"s_transp",label:"Transports de malades",amt:5.814,yr:2026,ramp:3,
     help:"Ambulances, taxis conventionnés et véhicules sanitaires.",
     who:"Les patients qui ne peuvent pas se déplacer seuls (dialyse, cancer…), les ambulanciers et taxis.",
     per:perHab(5.814),
     down:"Moins de transports remboursés ou plus de transports partagés : contraintes pour les patients, baisse d'activité des transporteurs.",
     up:"Transports de malades mieux pris en charge.",
     src:"ccss_sdv",note:"Comptes de la Sécurité sociale, octobre 2026, tableau 1, p. 96 : prévision 2026, régime général, avant remises des laboratoires, après franchises et participations forfaitaires."},
    {id:"s_med",label:"Médicaments",amt:32.188,yr:2026,ramp:3,
     help:"Médicaments délivrés en pharmacie (29 936 M€) et rétrocession hospitalière (2 251 M€).",
     who:"Les patients, les pharmacies et l'industrie pharmaceutique.",
     per:perHab(32.188),
     down:"Baisse des prix ou des remboursements : effort demandé aux laboratoires, ou reste à charge plus élevé pour les patients et leurs mutuelles.",
     up:"Meilleurs remboursements ou accès plus large aux traitements.",
     src:"ccss_sdv",note:"Comptes de la Sécurité sociale, octobre 2026, tableau 1, p. 96 : prévision 2026, régime général, après franchises et participations forfaitaires, avant les remises des laboratoires (8,95 Md€ en 2024 : PLFSS 2026, annexe 5, p. 83, note 7)."},
    {id:"s_dm",label:"Dispositifs médicaux",amt:9.263,yr:2026,ramp:3,
     help:"Pansements, appareils, prothèses, fauteuils roulants, matériel de diabète…",
     who:"Les patients équipés et les fabricants et distributeurs.",
     per:perHab(9.263),
     down:"Baisse des prix ou des remboursements des équipements médicaux.",
     up:"Meilleure prise en charge des équipements, par exemple auditifs ou dentaires.",
     src:"ccss_sdv",note:"Comptes de la Sécurité sociale, octobre 2026, tableau 1, p. 96 : prévision 2026, régime général, avant remises des laboratoires, après franchises et participations forfaitaires."},
    {id:"s_ijm",label:"Indemnités des arrêts maladie",amt:11.204,yr:2026,ramp:2,
     help:"Revenu versé aux salariés en arrêt maladie.",
     who:"Les salariés malades, et les employeurs qui complètent souvent l'indemnité.",
     per:perHab(11.204),
     down:"Moins d'indemnisation (jours de carence, plafond, durée) : perte de revenu pour les salariés malades, surtout ceux que leur employeur ne complète pas.",
     up:"Meilleure indemnisation des salariés malades.",
     src:"ccss_sdv",note:"Comptes de la Sécurité sociale, octobre 2026, tableau 1, p. 96 : prévision 2026, régime général, avant remises des laboratoires, après franchises et participations forfaitaires. Le plafond des revenus pris en compte est passé de 1,8 à 1,4 Smic en avril 2025."},
    {id:"s_ijat",label:"Indemnités des accidents du travail",amt:6.208,yr:2026,ramp:2,
     help:"Revenu versé aux salariés arrêtés après un accident du travail ou une maladie professionnelle.",
     who:"Les salariés accidentés ou atteints d'une maladie professionnelle.",
     per:perHab(6.208),
     down:"Moins d'indemnisation pour les victimes d'accidents du travail.",
     up:"Meilleure indemnisation des victimes.",
     src:"ccss_sdv",note:"Comptes de la Sécurité sociale, octobre 2026, tableau 1, p. 96 : prévision 2026, régime général, avant remises des laboratoires, après franchises et participations forfaitaires. Ces dépenses sont financées par les cotisations des employeurs (branche accidents du travail)."}
   ]},
  {id:"sante",name:"Hôpital et autonomie",kind:"dep",min:-15,max:15,step:0.5,
   base:"156,8 Md€ d'objectif 2026 pour les hôpitaux, établissements médico-sociaux et fonds régionaux",
   intro:"L'objectif national de dépenses d'assurance maladie voté pour 2026 est de 274,4 Md€ (+3,1 %), contre 270,4 Md€ dans le projet de loi : le Parlement a réduit les économies prévues. Ce secteur couvre la partie hors soins de ville.",
   tr:v=>`${P(v)} sur ces budgets, une fois appliqué.`,
   per:(v,T)=>`Par habitant : ${sign(T*1000/POP*v/100,0)} € par an de dépense`,
   lines:[
    {id:"s_hop",label:"Hôpitaux et cliniques",amt:112.8,yr:2026,ramp:5,
     help:"Budget des établissements de santé, en grande partie des salaires de soignants.",
     who:"Le personnel hospitalier et tous les patients hospitalisés.",
     per:perHab(112.8),
     down:"Moins de moyens pour l'hôpital : regroupements de services, moins de lits ou de recrutements, salaires qui progressent moins vite.",
     up:"Plus de moyens : recrutements, salaires des soignants, ouverture de lits.",
     src:"ccss_ondam",note:"Comptes de la Sécurité sociale, octobre 2026, tableau 5, p. 79 : objectif 2026 voté par la loi de financement de la Sécurité sociale."},
    {id:"s_pa",label:"Établissements et services pour personnes âgées",amt:18.3,yr:2026,ramp:4,
     help:"Soins en Ehpad et services de soins à domicile.",
     who:"Les personnes âgées dépendantes, leurs familles, le personnel des Ehpad et des services à domicile.",
     per:perHab(18.3),
     down:"Moins de soignants par résident, alors que le nombre de personnes très âgées augmente.",
     up:"Plus de soignants en Ehpad et à domicile.",
     src:"ccss_ondam",note:"Comptes de la Sécurité sociale, octobre 2026, tableau 5, p. 79 : objectif 2026 voté par la loi de financement de la Sécurité sociale."},
    {id:"s_ph",label:"Établissements et services pour personnes handicapées",amt:16.0,yr:2026,ramp:4,
     help:"Établissements et services médico-sociaux pour enfants et adultes handicapés.",
     who:"Les personnes handicapées, leurs familles et les professionnels du secteur.",
     per:perHab(16.0),
     down:"Moins de places ou de personnel : attente plus longue pour les familles.",
     up:"Plus de places et d'accompagnement.",
     src:"ccss_ondam",note:"Comptes de la Sécurité sociale, octobre 2026, tableau 5, p. 79 : objectif 2026 voté par la loi de financement de la Sécurité sociale."},
    {id:"s_fir",label:"Fonds d'intervention régional et autres",amt:9.7,yr:2026,ramp:3,
     help:"Crédits des agences régionales de santé (permanence des soins, prévention…) et autres prises en charge.",
     who:"Les patients des territoires concernés, les acteurs de prévention.",
     per:perHab(9.7),
     down:"Moins de crédits pour la prévention et l'organisation des soins dans les territoires.",
     up:"Plus de crédits pour la prévention et les zones qui manquent de médecins.",
     src:"ccss_ondam",note:"Comptes de la Sécurité sociale, octobre 2026, tableau 5, p. 79 : objectif 2026 voté par la loi de financement de la Sécurité sociale (fonds d'intervention régional et investissement 6,4 Md€, autres prises en charge 3,3 Md€)."}
   ]},
  {id:"fam",name:"Famille et enfance",kind:"dep",min:-30,max:30,step:1,
   base:"34,1 Md€ de prestations familiales en 2025 (Cnaf) et 8,4 Md€ d'aide sociale à l'enfance (Drees)",
   intro:"Les prestations familiales sont versées par les Caf et la MSA. En 2025 : 59 % pour l'entretien des enfants (allocations familiales, complément familial, soutien familial), 34 % pour les jeunes enfants (prestation d'accueil du jeune enfant), 6,5 % pour la rentrée scolaire (Cnaf, p. 42-43). En moyenne, 437 € par mois par famille bénéficiaire en 2023 (Drees, Minima sociaux et prestations de solidarité 2025, fiche 33, p. 276). L'aide sociale à l'enfance est financée par les départements.",
   tr:v=>`${P(v)} sur ces aides, une fois appliqué.`,
   per:v=>`Pour une famille bénéficiaire (437 € par mois en moyenne) : ${sign(437*v/100,0)} € par mois`,
   lines:[
    {id:"f_af",label:"Allocations familiales",amt:13.909,yr:2025,ramp:2,
     help:"Versées dès le deuxième enfant, à toutes les familles ; le montant baisse au-dessus de certains revenus depuis 2015.",
     who:"Les familles d'au moins deux enfants de moins de 20 ans.",
     per:perTot(13.909,"Pour les familles concernées"),
     down:"Moins de revenu pour toutes les familles de deux enfants et plus ; les familles nombreuses modestes sont les plus touchées.",
     up:"Plus de revenu pour les familles de deux enfants et plus.",
     src:"cnaf_ef",note:"13 909 M€ versés en 2025 (Cnaf, États financiers combinés 2025 de la branche Famille (7 avril 2026), note 4.1, tableau des prestations légales tous régimes, p. 43). Y compris l'allocation forfaitaire pour les enfants de 20 ans (111 M€). Évolution 2024-2025 : +1,0 %."},
    {id:"f_cf",label:"Complément familial",amt:2.593,yr:2025,ramp:2,
     help:"Aide aux familles d'au moins trois enfants de 3 ans et plus, sous conditions de ressources ; montant majoré pour les plus modestes.",
     who:"Les familles nombreuses aux revenus modestes ou moyens.",
     per:perTot(2.593,"Pour les familles concernées"),
     down:"Perte de revenu pour des familles nombreuses, souvent modestes : 1 662 M€ sur 2 593 M€ vont au montant majoré, réservé aux plus modestes.",
     up:"Plus de revenu pour les familles nombreuses modestes.",
     src:"cnaf_ef",note:"2 593 M€ versés en 2025 (Cnaf, États financiers combinés 2025 de la branche Famille (7 avril 2026), note 4.1, tableau des prestations légales tous régimes, p. 43). Dont montant majoré 1 662 M€."},
    {id:"f_asf",label:"Allocation de soutien familial",amt:3.439,yr:2025,ramp:2,
     help:"Versée au parent qui élève seul un enfant sans recevoir de pension alimentaire (ou une pension trop faible).",
     who:"Surtout des familles monoparentales, parmi les plus exposées à la pauvreté.",
     per:perTot(3.439,"Pour les familles concernées"),
     down:"Baisse de revenu pour des parents seuls ; dans 2 884 M€ des cas, l'autre parent ne paie pas la pension due.",
     up:"Plus de revenu pour les parents isolés.",
     src:"cnaf_ef",note:"3 439 M€ versés en 2025 (Cnaf, États financiers combinés 2025 de la branche Famille (7 avril 2026), note 4.1, tableau des prestations légales tous régimes, p. 43). Dont 2 884 M€ versés quand le parent débiteur est défaillant. Hausse de 5,3 % en 2025."},
    {id:"f_ajpp",label:"Allocation journalière de présence parentale",amt:0.298,yr:2025,ramp:2,
     help:"Indemnise le parent qui s'arrête de travailler pour s'occuper d'un enfant gravement malade, handicapé ou accidenté.",
     who:"Les parents d'enfants gravement malades ou handicapés.",
     per:perTot(0.298,"Pour les familles concernées"),
     down:"Moins d'indemnisation pour des parents dans une situation très difficile, pour une économie minime.",
     up:"Meilleure indemnisation de ces parents.",
     src:"cnaf_ef",note:"298 M€ versés en 2025 (Cnaf, États financiers combinés 2025 de la branche Famille (7 avril 2026), note 4.1, tableau des prestations légales tous régimes, p. 43). Y compris le complément de déplacement (12 M€). Hausse de 13,7 % en 2025."},
    {id:"f_paje",label:"Naissance et allocation de base du jeune enfant",amt:3.451,yr:2025,ramp:2,
     help:"Prime à la naissance ou à l'adoption, puis allocation mensuelle jusqu'aux 3 ans de l'enfant, sous conditions de ressources.",
     who:"Les familles avec un enfant de moins de 3 ans, aux revenus modestes ou moyens.",
     per:perTot(3.451,"Pour les familles concernées"),
     down:"Moins d'aide aux jeunes parents, au moment où les naissances baissent déjà (−2,6 % en 2025).",
     up:"Plus d'aide aux jeunes parents.",
     src:"cnaf_ef",note:"3 451 M€ versés en 2025 (Cnaf, États financiers combinés 2025 de la branche Famille (7 avril 2026), note 4.1, tableau des prestations légales tous régimes, p. 43). Prime 516 M€ et allocation de base 2 935 M€. La baisse des naissances fait déjà reculer cette dépense (−3,1 % pour l'allocation de base)."},
    {id:"f_cmg",label:"Aide pour la garde d'enfant (assistante maternelle, garde à domicile)",amt:7.372,yr:2025,ramp:2,
     help:"Complément de libre choix du mode de garde : la Caf rembourse une partie du salaire et des cotisations de l'assistante maternelle ou de la garde à domicile.",
     who:"Les parents qui travaillent et font garder leur enfant, et indirectement les assistantes maternelles.",
     per:perTot(7.372,"Pour les familles concernées"),
     down:"La garde coûte plus cher aux parents : risque qu'un parent, souvent la mère, réduise son activité ; moins de demande pour les assistantes maternelles.",
     up:"Garde moins chère pour les parents qui travaillent.",
     src:"cnaf_ef",note:"7 372 M€ versés en 2025 (Cnaf, États financiers combinés 2025 de la branche Famille (7 avril 2026), note 4.1, tableau des prestations légales tous régimes, p. 43). Réformé en septembre 2025 (calcul plus progressif, droit étendu jusqu'aux 12 ans de l'enfant pour les familles monoparentales : p. 35)."},
    {id:"f_prepare",label:"Congé parental indemnisé (PreParE)",amt:0.687,yr:2025,ramp:2,
     help:"Indemnité versée au parent qui arrête ou réduit son travail pour s'occuper d'un jeune enfant.",
     who:"Les parents en congé parental, très majoritairement des mères.",
     per:perTot(0.687,"Pour les familles concernées"),
     down:"Moins de parents peuvent se permettre un congé parental.",
     up:"Congé parental mieux indemnisé, ce qui pourrait en augmenter le recours.",
     src:"cnaf_ef",note:"687 M€ versés en 2025 (Cnaf, États financiers combinés 2025 de la branche Famille (7 avril 2026), note 4.1, tableau des prestations légales tous régimes, p. 43). Y compris l'ancien complément de libre choix d'activité (1 M€). Recul de 3,9 % en 2025."},
    {id:"f_ars",label:"Allocation de rentrée scolaire",amt:2.215,yr:2025,ramp:2,
     help:"Versée chaque été pour chaque enfant scolarisé de 6 à 18 ans, sous conditions de ressources.",
     who:"Les familles modestes avec des enfants scolarisés.",
     per:perTot(2.215,"Pour les familles concernées"),
     down:"Moins d'aide pour les fournitures et vêtements de rentrée des familles modestes.",
     up:"Plus d'aide à la rentrée pour les familles modestes.",
     src:"cnaf_ef",note:"2 215 M€ versés en 2025 (Cnaf, États financiers combinés 2025 de la branche Famille (7 avril 2026), note 4.1, tableau des prestations légales tous régimes, p. 43)."},
    {id:"f_famaut",label:"Autres prestations familiales",amt:0.131,yr:2025,ramp:2,
     help:"Frais de mandataires judiciaires pour les prestations familiales, allocation en cas de décès d'un enfant, allocations différentielles et prestations internationales.",
     who:"Quelques milliers de familles dans des situations particulières.",
     per:perTot(0.131,"Pour les familles concernées"),
     down:"Économie très faible sur des situations souvent dramatiques.",
     up:"Coût très faible.",
     src:"cnaf_ef",note:"131 M€ versés en 2025 (Cnaf, États financiers combinés 2025 de la branche Famille (7 avril 2026), note 4.1, tableau des prestations légales tous régimes, p. 43). Mandataires 70 M€, décès d'un enfant 19 M€, autres 42 M€."},
    {id:"f_ase",label:"Aide sociale à l'enfance (départements)",amt:9.029,yr:2024,ramp:2,
     help:"Protection des enfants en danger : placement en foyer ou en famille d'accueil, actions éducatives à domicile, aides financières, prévention. Financée par les départements.",
     who:"384 900 mineurs et jeunes majeurs suivis fin 2023, dont 221 000 accueillis hors de leur famille (Drees, Dossiers n° 131). En 2022, la dépense moyenne était de 3 190 € par mois pour un enfant accueilli et de 280 € pour une action éducative (Drees, Dossiers n° 124, tableau A).",
     per:perTot(9.029,"Pour la protection de l'enfance"),
     down:"Moins de places ou d'éducateurs pour des enfants en danger, alors que la dépense a augmenté de 28 % entre 2021 et 2024 ; les placements sont souvent imposés par décision de justice, donc difficiles à réduire.",
     up:"Plus de moyens pour l'accueil et le suivi des enfants en danger.",
     src:"drees_asd",note:"Dépenses brutes 2024 : 11 693 M€, dont 2 664 M€ de placements en familles d'accueil (Drees, séries longues 1999-2024, tableau A). Le simulateur retient 9 029 M€ (11 693 − 2 664) : l'accueil familial est surtout la rémunération des assistants familiaux, déjà comptée dans les salaires des collectivités. Mise à jour d'octobre 2026 : la version précédente utilisait les chiffres 2023."}
   ]},
  {id:"dept",name:"Autonomie et handicap (départements)",kind:"dep",min:-30,max:30,step:1,
   base:"18,6 Md€ d'aides des départements aux personnes âgées et handicapées en 2024, et 1,1 Md€ d'insertion (Drees)",
   intro:"Prestations versées par les conseils départementaux, en partie financées par la Caisse nationale de solidarité pour l'autonomie. Montants bruts 2024, hors frais de personnel des départements (Drees, séries longues 1999-2024, tableau A). Le revenu de solidarité active lui-même est dans la ligne RSA. Ces aides complètent l'assurance maladie : l'objectif de dépenses des Ehpad (ligne « Établissements pour personnes âgées ») paie les soins, l'APA la dépendance, l'aide sociale à l'hébergement le logement.",
   tr:v=>`${P(v)} sur ces aides, une fois appliqué.`,
   per:v=>`Pour un bénéficiaire de l'APA (420 € par mois en moyenne en 2022) : ${sign(420*v/100,0)} € par mois`,
   lines:[
    {id:"d_apad",label:"Allocation personnalisée d'autonomie à domicile",amt:4.471,yr:2024,ramp:2,
     help:"Finance l'aide humaine (auxiliaire de vie), le portage de repas ou l'équipement des personnes âgées dépendantes qui vivent chez elles.",
     who:"1 332 000 bénéficiaires de l'APA en 2022, à domicile ou en établissement ; 420 € par mois en moyenne (Drees).",
     per:perMonth(420,"Pour un bénéficiaire moyen de l'APA"),
     down:"Moins d'heures d'aide à domicile : report sur les familles (surtout les femmes aidantes), entrée plus précoce en Ehpad, moins d'activité pour les services d'aide à domicile.",
     up:"Plus d'heures d'aide pour rester chez soi.",
     src:"drees_asd",note:"Dépenses brutes 2024 : 4 471 M€ (tableau A). Effectifs et montant moyen : Drees, Dossiers n° 124, tableau A (2022)."},
    {id:"d_apae",label:"Allocation personnalisée d'autonomie en établissement",amt:2.758,yr:2024,ramp:2,
     help:"Paie la partie « dépendance » du tarif des Ehpad.",
     who:"Les résidents d'Ehpad dépendants et leurs familles.",
     per:perTot(2.758,"Pour les résidents d'Ehpad"),
     down:"La partie dépendance du tarif serait davantage payée par les résidents et leurs familles, ou les Ehpad recevraient moins.",
     up:"Reste à charge plus faible pour les résidents.",
     src:"drees_asd",note:"Dépenses brutes 2024 : 2 758 M€ (tableau A)."},
    {id:"d_ash",label:"Aide sociale à l'hébergement des personnes âgées",amt:1.247,yr:2024,ramp:2,
     help:"Paie tout ou partie du prix d'hébergement en établissement pour les personnes âgées qui n'en ont pas les moyens ; le département peut se rembourser sur la succession.",
     who:"116 000 bénéficiaires en 2022, 890 € par mois en moyenne (Drees).",
     per:perMonth(890,"Pour un bénéficiaire moyen"),
     down:"Des personnes âgées pauvres ne pourraient plus payer leur hébergement ; les familles (obligés alimentaires) seraient davantage sollicitées.",
     up:"Plus de personnes âgées pauvres aidées pour leur hébergement.",
     src:"drees_asd",note:"Dépenses 2024 après récupérations sur les bénéficiaires, leurs familles et les successions : 1 247 M€ (tableau A). Effectifs : Dossiers n° 124, tableau A (2022)."},
    {id:"d_pch",label:"Prestation de compensation du handicap (et ACTP)",amt:3.622,yr:2024,ramp:2,
     help:"Finance l'aide humaine, les aides techniques et l'aménagement du logement ou du véhicule des personnes handicapées. L'ACTP est l'ancienne allocation qu'elle remplace.",
     who:"375 000 bénéficiaires de la PCH (600 € par mois en moyenne) et 48 000 de l'ACTP (560 €) en 2022 (Drees).",
     per:perMonth(600,"Pour un bénéficiaire moyen de la PCH"),
     down:"Moins d'aide humaine et technique pour les personnes handicapées, report sur les familles.",
     up:"Meilleure compensation du handicap.",
     src:"drees_asd",note:"Dépenses brutes 2024 : PCH 3 312 M€, ACTP 310 M€ (tableau A). Effectifs : Dossiers n° 124, tableau A (2022)."},
    {id:"d_phheb",label:"Hébergement et accueil des personnes handicapées",amt:6.116,yr:2024,ramp:2,
     help:"Prix de journée des foyers d'hébergement, foyers de vie et foyers d'accueil médicalisés, et accueil de jour, payés par le département.",
     who:"155 000 bénéficiaires en 2022, 3 010 € par mois en moyenne (Drees).",
     per:perMonth(3010,"Pour une place moyenne"),
     down:"Moins de places en foyer pour des adultes handicapés, alors que les listes d'attente sont longues ; report sur les familles ou départs en Belgique.",
     up:"Plus de places d'accueil.",
     src:"drees_asd",note:"Dépenses brutes 2024 d'aide à l'hébergement ou à l'accueil de jour en établissement : 6 116 M€ (tableau A). Effectifs : Dossiers n° 124, tableau A (2022)."},
    {id:"d_ins",label:"Accompagnement des allocataires du RSA (insertion)",amt:1.102,yr:2024,ramp:2,
     help:"Actions d'insertion et contrats aidés financés par les départements pour les allocataires du RSA (hors allocation elle-même).",
     who:"Les allocataires du RSA accompagnés vers l'emploi.",
     per:perTot(1.102,"Pour l'accompagnement"),
     down:"Moins d'accompagnement vers l'emploi pour les allocataires du RSA.",
     up:"Plus d'accompagnement vers l'emploi.",
     src:"drees_asd",note:"Dépenses brutes 2024 d'insertion liées au RSA, y compris contrats uniques d'insertion : 1 102 M€ (tableau A)."}
   ]},
  {id:"solid",name:"Solidarité et handicap",kind:"dep",min:-30,max:30,step:1,
   base:"43,8 Md€ de minima sociaux, prime d'activité et aides au handicap",
   intro:"Revenu de solidarité active (RSA), prime d'activité pour les travailleurs modestes, allocation aux adultes handicapés (AAH) et allocation des chômeurs en fin de droits.",
   tr:v=>`${P(v)} sur ces prestations, une fois appliqué.`,
   per:v=>`Pour un RSA de personne seule (651,69 € au 1er avril 2026) : ${sign(651.69*v/100,0)} € par mois`,
   lines:[
    {id:"f_rsa",label:"Revenu de solidarité active (RSA)",amt:12.3,yr:2025,ramp:2,
     help:"Revenu minimum des personnes sans ressources suffisantes.",
     who:"1,85 million de foyers au 1er trimestre 2026 ; versement moyen de 563 € par mois (Cnaf). En 2023 : 1 849 700 allocataires, 12 218 M€, 549 € par mois en moyenne (Drees).",
     per:perMonth(563,"Pour le versement moyen par foyer"),
     down:"Baisse directe du revenu des foyers les plus pauvres, déjà sous le seuil de pauvreté.",
     up:"Hausse du revenu des foyers les plus pauvres.",
     src:"cnaf_rsa",note:"12,3 Md€ versés d'avril 2025 à mars 2026. Chiffres 2023 : Drees, Minima sociaux 2025, fiche 07, tableau 1, p. 79."},
    {id:"f_pa",label:"Prime d'activité et inclusion sociale",amt:13.022,yr:2026,ramp:2,
     help:"Surtout la prime d'activité, complément de revenu des travailleurs modestes ; aussi protection juridique des majeurs et aide alimentaire.",
     who:"4,81 millions de foyers touchaient la prime d'activité fin 2024 ; en 2023, 10,5 Md€ versés, soit 186 € par mois et par foyer en moyenne (Drees). La ligne comprend aussi la protection juridique des majeurs, l'aide alimentaire et la protection de l'enfance.",
     per:perMonth(186,"Pour la prime d'activité moyenne (186 € par mois)"),
     down:"Les travailleurs modestes perdent du revenu, et reprendre un emploi devient un peu moins intéressant financièrement.",
     up:"Plus de revenu pour les travailleurs modestes : le travail paie davantage au bas de l'échelle des salaires.",
     src:"lfi",note:"Programme 304 de la loi de finances 2026 (14 785 M€) moins le RSA recentralisé (1 764 M€ dans le projet de loi), compté dans la ligne RSA. Dont prime d'activité : 9,3 Md€ dans le projet de loi (Sénat), avant la revalorisation d'avril 2026. Effectifs et montant moyen : Drees, Minima sociaux 2025, fiche 30, p. 257."},
    {id:"f_aah",label:"Allocation aux adultes handicapés (AAH) et handicap",amt:16.398,yr:2026,ramp:2,
     help:"Surtout l'AAH, revenu minimum des personnes handicapées qui ne peuvent pas ou peu travailler ; aussi le financement des établissements d'aide par le travail.",
     who:"1 352 800 allocataires fin 2023 ; 12 717 M€ versés en 2023, soit 811 € par mois en moyenne (Drees).",
     per:perMonth(811,"Pour l'AAH moyenne (811 € par mois)"),
     down:"Baisse du revenu de personnes qui, souvent, ne peuvent pas compenser par le travail.",
     up:"Hausse du revenu des personnes handicapées.",
     src:"lfi",note:"Programme 157 de la loi de finances 2026 : 16 398 M€, dont AAH 14 681 M€ et aide au poste en établissements et services d'aide par le travail 1 558 M€ dans le projet de loi (Sénat). Effectifs et montant moyen : Drees, Minima sociaux 2025, fiche 07, tableau 1, p. 79."},
    {id:"f_ass",label:"Allocations des chômeurs en fin de droits",amt:2.061,yr:2026,ramp:2,
     help:"Allocations du régime de solidarité, principalement l'allocation de solidarité spécifique (ASS), versées par l'État.",
     who:"Les chômeurs de longue durée qui n'ont plus droit à l'assurance chômage : 253 100 allocataires de l'ASS fin 2023, 552 € par mois en moyenne (Drees).",
     per:perMonth(552,"Pour l'ASS moyenne (552 € par mois)"),
     down:"Baisse du revenu des chômeurs de longue durée, dont une partie basculerait vers le RSA.",
     up:"Meilleure protection des chômeurs de longue durée.",
     src:"senat_travail",note:"Crédits 2026 du projet de loi. Effectifs et montant moyen : Drees, Minima sociaux 2025, fiche 07, tableau 1, p. 79."}
   ]},
  {id:"emploi",name:"Emploi et logement",kind:"dep",min:-30,max:30,step:1,
   base:"32,1 Md€ d'assurance chômage, 18,8 Md€ de politique de l'emploi, 19,6 Md€ pour le logement",
   intro:"Indemnisation des chômeurs, aides à l'embauche et à l'insertion, aides personnelles au logement et hébergement des personnes sans abri.",
   tr:v=>`${P(v)} sur ces dépenses, une fois appliqué.`,
   per:v=>`Pour l'allocation chômage moyenne (1 040 € net) : ${sign(1040*v/100,0)} € par mois`,
   lines:[
    {id:"e_are",label:"Allocations d'assurance chômage",amt:32.1,yr:2025,ramp:2,
     help:"Allocation d'aide au retour à l'emploi, versée par France Travail pour le compte de l'Unédic.",
     who:"2,7 millions de personnes indemnisées au 4e trimestre 2025 ; allocation moyenne de 1 040 € net par mois (Unédic).",
     per:perMonth(1040,"Pour l'allocation moyenne"),
     down:"Indemnisation plus courte ou plus faible : perte de revenu pour les chômeurs, dont une partie bascule vers le RSA.",
     up:"Meilleure indemnisation des chômeurs.",
     src:"unedic_rf",note:"Montant moyen : Unédic, 4e trimestre 2025."},
    {id:"e_app",label:"Aide à l'embauche d'apprentis",amt:2.369,yr:2026,ramp:1,
     help:"Prime versée à l'employeur pour chaque contrat : 5 000 € dans les PME, 2 000 € au-delà de 250 salariés en 2026.",
     who:"Les entreprises qui recrutent des apprentis, et les jeunes en apprentissage.",
     per:perYear(5000,"Pour une prime de PME"),
     down:"Moins d'aide aux employeurs : risque de moins d'entrées en apprentissage.",
     up:"Embaucher un apprenti devient plus intéressant pour les entreprises.",
     src:"senat_travail"},
    {id:"e_trav",label:"Autres politiques de l'emploi",amt:16.391,yr:2026,ramp:2,
     help:"France Travail, insertion par l'activité économique, contrats aidés et autres crédits de la mission Travail et emploi.",
     who:"Les demandeurs d'emploi accompagnés, les structures d'insertion, les agents de France Travail.",
     per:perHab(13.22),
     down:"Moins d'accompagnement des demandeurs d'emploi et moins de places en insertion.",
     up:"Plus d'accompagnement et de places en insertion.",
     src:"lfi",note:"Mission de 20 821 M€ dans la loi de finances 2026, moins l'aide aux apprentis (2 369 M€) et les allocations de solidarité (2 061 M€) du projet de loi (Sénat). La loi votée a relevé la mission de 3,2 Md€ par rapport au projet, sans que la répartition de cette hausse soit connue ici."},
    {id:"e_apl",label:"Aides personnelles au logement (APL)",amt:16.572,yr:2026,ramp:2,
     help:"Aide versée aux locataires et accédants modestes pour payer leur logement (part financée par l'État).",
     who:"5,81 millions de foyers touchaient une aide au logement fin 2024 : étudiants, jeunes actifs, familles modestes. En 2023, l'aide moyenne était de 226 € par mois (Drees).",
     per:perMonth(226,"Pour l'aide moyenne par foyer (226 € par mois)"),
     down:"Les ménages modestes paient une plus grande part de leur loyer : baisse directe de leur reste à vivre.",
     up:"Moins de loyer à la charge des ménages modestes.",
     src:"lfi",note:"Programme 109 « Aide à l'accès au logement » (part de l'État). Effectifs et montant moyen, tous financeurs : Drees, Minima sociaux 2025, fiche 34, p. 283."},
    {id:"e_heb",label:"Hébergement des personnes sans abri",amt:3.071,yr:2026,ramp:2,
     help:"Hébergement d'urgence et accès au logement des personnes sans abri ou mal logées.",
     who:"Les personnes sans domicile et les associations qui les accueillent.",
     per:perHab(3.1),
     down:"Moins de places d'hébergement d'urgence.",
     up:"Plus de places et d'accompagnement vers le logement.",
     src:"lfi",note:"Programme 177."}
   ]},
  {id:"educ",name:"Éducation et recherche",kind:"dep",min:-30,max:30,step:1,
   base:"64,5 Md€ pour l'école, 31,6 Md€ pour l'enseignement supérieur et la recherche (loi de finances 2026)",
   intro:"Pour l'école, montant hors cotisations de retraite des agents (comptées dans les Retraites). 11,76 millions d'élèves à la rentrée 2025 ; 2,97 millions d'étudiants en 2024.",
   tr:v=>`${P(v)} sur ces budgets, une fois appliqué.`,
   per:v=>`Par élève : ${sign(64485/11.756*v/100,0)} € par an`,
   lines:[
    {id:"d_scol",label:"Enseignement scolaire",amt:64.461,yr:2026,ramp:3,
     help:"Écoles, collèges et lycées publics et privés sous contrat : salaires des enseignants, vie scolaire, fonctionnement.",
     who:"839 679 emplois d'enseignants (plafond 2025) et 11,76 millions d'élèves.",
     per:perYear(64485/11.756,"Par élève"),
     down:"Moins de postes ou des salaires qui progressent moins vite : classes plus chargées ou métier moins attractif, alors que le recrutement est déjà difficile.",
     up:"Plus de postes ou de meilleurs salaires d'enseignants.",
     src:"lfi",note:"Mission votée 89 621 M€, moins la contribution au compte des pensions de 25 160 M€ indiquée par le Sénat pour 2026."},
    {id:"d_sup",label:"Universités et formations supérieures",amt:15.724,yr:2026,ramp:3,
     help:"Financement des universités et écoles publiques.",
     who:"Les étudiants, enseignants-chercheurs et personnels des universités.",
     per:perYear(15585/2.97,"Par étudiant"),
     down:"Moins de moyens par étudiant : formations fermées, moins d'encadrement.",
     up:"Plus de moyens par étudiant.",
     src:"lfi",note:"Programme 150. Nombre d'étudiants : Sénat, PLF 2026."},
    {id:"d_vie",label:"Vie étudiante et bourses",amt:3.275,yr:2026,ramp:1,
     help:"Bourses sur critères sociaux, logement et restauration des étudiants.",
     who:"662 000 boursiers en 2024-2025 ; 2,320 Md€ de bourses en 2026 (Sénat).",
     per:perYear(2320/0.662,"Pour la bourse moyenne"),
     down:"Les étudiants modestes perdent une partie de leur bourse ou de leurs aides au logement et à la restauration.",
     up:"Plus d'aides pour les étudiants modestes.",
     src:"lfi",note:"Programme 231. Bourses et nombre de boursiers : Sénat, PLF 2026."},
    {id:"d_rech",label:"Recherche publique",amt:12.635,yr:2026,ramp:3,
     help:"CNRS, CEA, recherche spatiale, énergie, agricole et autres organismes.",
     who:"Les chercheurs et personnels des organismes de recherche.",
     per:perHab(12.666),
     down:"Moins de crédits pour les laboratoires et de recrutements de chercheurs.",
     up:"Plus de moyens pour la recherche publique.",
     src:"lfi",note:"Programmes 172, 193, 190, 192, 191 et 142."}
   ]},
  {id:"regal",name:"Défense, sécurité et justice",kind:"dep",min:-30,max:30,step:1,
   base:"57,1 Md€ pour les armées, 17,7 Md€ pour la police et la gendarmerie, 10,5 Md€ pour la justice (hors pensions)",
   intro:"Montants hors pensions. La hausse du budget des armées déjà votée (jusqu'à 76,3 Md€ en 2030) est incluse dans le scénario de base : ce curseur va au-delà ou en deçà.",
   tr:v=>`${P(v)} par rapport aux budgets 2026, une fois appliqué.`,
   per:null,
   lines:[
    {id:"g_def",label:"Armées (écart à la programmation votée)",amt:57.1,yr:2026,ramp:3,
     help:"Équipements, personnel et opérations des armées.",
     who:"Les militaires, l'industrie de défense et ses salariés.",
     per:perHab(57.1),
     down:"Moins que la programmation militaire votée : équipements reportés, alors que la France vise 2,5 % du PIB pour la défense en 2030.",
     up:"Effort supplémentaire au-delà de la programmation votée.",
     src:"lpm",note:"Crédits 2026 hors pensions ; trajectoire votée : 63,3 Md€ en 2027, 68,3 en 2028, 72,8 en 2029, 76,3 en 2030. La loi de finances 2026 vote 66 475 M€ pour la mission Défense, pensions comprises."},
    {id:"g_secu",label:"Police et gendarmerie",amt:17.666,yr:2026,ramp:3,
     help:"Police nationale, gendarmerie, sécurité civile et sécurité routière.",
     who:"153 285 emplois de policiers et 103 078 de gendarmes (plafonds 2026).",
     per:perHab(17.666),
     down:"Moins d'effectifs ou d'équipements pour les forces de l'ordre.",
     up:"Plus d'effectifs ou d'équipements.",
     src:"lfi",note:"Mission Sécurités votée (25 845 M€), moins les cotisations au compte des pensions de la police et de la gendarmerie, déduites du projet de loi : police 13 890,8 M€ avec, 9 753 M€ sans ; gendarmerie 11 091,9 M€ avec, 7 051 M€ sans (Sénat), soit 8 179 M€. Correction d'octobre 2026 : la version précédente comptait ces cotisations, ce qui surestimait l'économie possible. Effectifs : Assemblée nationale, PLF 2026."},
    {id:"g_just",label:"Justice",amt:10.541,yr:2026,ramp:3,
     help:"Tribunaux, prisons, protection judiciaire de la jeunesse, aide juridictionnelle.",
     who:"Les justiciables, les détenus, le personnel judiciaire et pénitentiaire.",
     per:perHab(10.629),
     down:"Délais de justice plus longs, moins de places de prison ou de personnel.",
     up:"Plus de magistrats, de greffiers et de places de prison.",
     src:"lfi",note:"Mission votée 12 967 M€, moins la contribution au compte des pensions déduite du projet de loi (13 055 M€ avec, 10 629 M€ sans, selon le Sénat)."},
    {id:"g_ext",label:"Action extérieure de l'État",amt:3.454,yr:2026,ramp:2,
     help:"Ambassades, consulats, réseau culturel et éducatif français à l'étranger.",
     who:"Les Français de l'étranger, le réseau diplomatique.",
     per:perHab(3.457),
     down:"Moins de moyens pour le réseau diplomatique et consulaire.",
     up:"Plus de moyens pour la diplomatie.",
     src:"lfi"},
    {id:"g_apd",label:"Aide publique au développement",amt:3.569,yr:2026,ramp:2,
     help:"Crédits de la mission : dons et contributions internationales pour les pays en développement.",
     who:"Les populations des pays aidés et les organisations de solidarité internationale.",
     per:perHab(3.669),
     down:"Moins d'aide aux pays pauvres.",
     up:"Plus d'aide aux pays pauvres.",
     src:"lfi"},
    {id:"g_immig",label:"Immigration, asile et intégration",amt:2.131,yr:2026,ramp:2,
     help:"Accueil des demandeurs d'asile, intégration, lutte contre l'immigration irrégulière.",
     who:"Les demandeurs d'asile et étrangers primo-arrivants.",
     per:perHab(2.161),
     down:"Moins de places d'hébergement et d'accompagnement des demandeurs d'asile.",
     up:"Plus de moyens d'accueil et d'intégration.",
     src:"lfi"}
   ]},
  {id:"etat",name:"Autres missions de l'État",kind:"dep",min:-50,max:50,step:1,
   base:"9,6 Md€ de soutien aux énergies renouvelables et 26,3 Md€ d'autres politiques (loi de finances 2026)",
   intro:"Les autres budgets de l'État : écologie et transports, agriculture, culture, outre-mer, sport, presse et livre.",
   tr:v=>`${P(v)} sur ces budgets, une fois appliqué.`,
   per:null,
   lines:[
    {id:"a_ener",label:"Service public de l'énergie",amt:9.584,yr:2026,ramp:2,
     help:"Soutien aux énergies renouvelables et péréquation des tarifs en outre-mer et en Corse.",
     who:"Les producteurs d'énergie renouvelable et les consommateurs des zones non reliées au réseau continental.",
     per:perHab(8.443),
     down:"Moins de soutien aux énergies renouvelables. Une partie de ces dépenses découle de contrats déjà signés.",
     up:"Plus de soutien aux énergies renouvelables.",
     src:"lfi",note:"Programme 345. La loi votée le porte à 9 584 M€, contre 8 443 M€ dans le projet."},
    {id:"a_eco",label:"Écologie, transports et risques (reste de la mission)",amt:13.179,yr:2026,ramp:2,
     help:"Infrastructures de transport, prévention des risques, biodiversité, fonds vert, rénovation énergétique…",
     who:"Les usagers des transports, les collectivités, les ménages aidés pour la rénovation.",
     per:perHab(14.465),
     down:"Moins d'investissements dans les transports et la transition écologique.",
     up:"Plus d'investissements dans les transports et la transition écologique.",
     src:"lfi",note:"Mission Écologie votée (22 763 M€) moins le programme 345."},
    {id:"a_agri",label:"Agriculture et forêt",amt:4.126,yr:2026,ramp:2,
     help:"Aides et services du ministère de l'Agriculture.",
     who:"Les agriculteurs et forestiers.",
     per:perHab(4.077),
     down:"Moins d'aides nationales aux agriculteurs.",
     up:"Plus d'aides aux agriculteurs.",
     src:"lfi"},
    {id:"a_cult",label:"Culture",amt:3.745,yr:2026,ramp:2,
     help:"Patrimoine, création artistique, enseignement artistique.",
     who:"Le secteur culturel, les visiteurs du patrimoine.",
     per:perHab(3.748),
     down:"Moins de subventions aux lieux culturels et au patrimoine.",
     up:"Plus de moyens pour la culture.",
     src:"lfi"},
    {id:"a_om",label:"Outre-mer",amt:3.277,yr:2026,ramp:2,
     help:"Aides spécifiques aux territoires d'outre-mer.",
     who:"Les habitants et entreprises d'outre-mer.",
     per:perHab(3.288),
     down:"Moins d'aides pour des territoires où la pauvreté est plus forte qu'en métropole.",
     up:"Plus d'aides aux territoires d'outre-mer.",
     src:"lfi"},
    {id:"a_sport",label:"Sport, jeunesse et vie associative",amt:1.259,yr:2026,ramp:2,
     help:"Service civique, sport, associations.",
     who:"Les jeunes en service civique, les clubs et associations.",
     per:perHab(1.246),
     down:"Moins de missions de service civique et de subventions associatives.",
     up:"Plus de moyens pour la jeunesse et les associations.",
     src:"lfi"},
    {id:"a_med",label:"Presse, livre et industries culturelles",amt:0.703,yr:2026,ramp:2,
     help:"Aides à la presse, au livre, au cinéma.",
     who:"La presse, l'édition, le cinéma.",
     per:perHab(0.711),
     down:"Moins d'aides à la presse et au livre.",
     up:"Plus d'aides à la presse et au livre.",
     src:"lfi"}
   ]},
  {id:"coll",name:"Collectivités locales",kind:"dep",min:-20,max:20,step:1,
   base:"335,5 Md€ de dépenses des communes, départements et régions en 2025 (Insee)",
   intro:"Dépenses propres des collectivités, hors prestations sociales (dont le RSA, compté ailleurs) et hors intérêts. La dotation de l'État aux collectivités n'a pas de curseur : c'est un transfert entre administrations, qui ne change pas à lui seul le déficit total.",
   tr:v=>`${P(v)} sur ces dépenses, une fois appliqué.`,
   per:null,
   lines:[
    {id:"c_rem",label:"Salaires des agents des collectivités",amt:97.0,yr:2025,ramp:3,
     help:"Rémunérations des agents des mairies, intercommunalités, départements et régions.",
     who:"2,02 millions d'agents territoriaux fin 2024, sur 5,85 millions d'agents publics ; salaire net moyen de 2 317 € par mois en 2024, le plus bas des trois fonctions publiques (État 3 018 €, hôpitaux 2 896 €), car 10 % seulement des fonctionnaires territoriaux sont de catégorie A (DGAFP, édition 2026). Et les usagers des services de proximité.",
     per:v=>`Équivalent à ${sign(2317*v/100,0)} € net par mois sur le salaire moyen d'un agent territorial, si tout passait par les salaires (en pratique, une partie passerait par moins d'agents)`,
     down:"Moins d'agents ou des salaires qui progressent moins vite : services de proximité réduits (crèches, cantines, voirie, aide sociale).",
     up:"Plus d'agents ou de meilleurs salaires dans les collectivités.",
     src:"insee_dep",note:"Montant brut, cotisations employeurs comprises : une partie de l'économie serait une moindre recette pour les caisses de retraite publiques. Effectifs et salaires : DGAFP, Rapport annuel sur l'état de la fonction publique, édition 2026, p. 11, 13 et 107."},
    {id:"c_ci",label:"Achats et fonctionnement des collectivités",amt:61.1,yr:2025,ramp:3,
     help:"Énergie, fournitures, prestations de services achetées par les collectivités.",
     who:"Les usagers des services publics locaux et les entreprises fournisseurs.",
     per:perHab(61.1),
     down:"Moins de services ou d'entretien.",
     up:"Plus de services locaux.",
     src:"insee_dep",note:"Consommations intermédiaires."},
    {id:"c_inv",label:"Investissement des collectivités",amt:70.7,yr:2025,ramp:2,
     help:"Écoles, routes, réseaux, équipements sportifs et culturels.",
     who:"Les habitants et les entreprises du bâtiment et des travaux publics.",
     per:perHab(70.7),
     down:"Moins de chantiers et d'équipements, avec un effet négatif marqué sur l'activité à court terme.",
     up:"Plus d'équipements et un soutien à l'activité.",
     src:"insee_dep",note:"Formation brute de capital fixe. Effet sur l'activité : variante « investissement public » du modèle Mésange de la DG Trésor (Cahiers n° 2017-04, p. 102)."}
   ]},
  {id:"entr",name:"Aides aux entreprises",kind:"niche",min:-100,max:30,step:5,
   base:"74,1 Md€ d'allègements de cotisations prévus en 2026, 9,7 Md€ d'exonérations ciblées, 13,7 Md€ de niches fiscales",
   intro:"Réductions de cotisations sociales et d'impôts accordées aux entreprises. Les réduire rapporte de l'argent mais augmente leurs coûts.",
   tr:v=>`${P(v)} sur ces avantages, une fois appliqué.`,
   per:(v,T)=>`Pour les entreprises : ${sign(T*v/100,1)} Md€ par an d'aides`,
   lines:[
    {id:"n_cotis",label:"Allègements généraux de cotisations patronales",amt:74.1,yr:2026,ramp:2,
     help:"Réduction des cotisations patronales, la plus forte au niveau du Smic. Unifiée en 2026 dans une réduction générale dégressive.",
     who:"Toutes les entreprises. En 2025, 12,6 millions de salariés étaient couverts par la réduction générale (Sénat).",
     per:perTot(74.1,"Pour les entreprises"),
     down:"Le travail coûte plus cher aux entreprises, surtout pour les bas salaires : risque sur l'emploi peu qualifié et sur les marges.",
     up:"Le travail coûte moins cher aux entreprises, financé par la Sécurité sociale.",
     src:"senat_942",note:"Prévision 2026. Effet sur l'activité : variante « cotisations sociales employeurs » du modèle Mésange (Cahiers de la DG Trésor n° 2017-04, p. 107) : réduire ces allègements rapporte 0,72 point de PIB la 1re année pour 1 point d'effort, mais seulement 0,17 point à 10 ans, car le coût du travail plus élevé détruit des emplois."},
    {id:"n_exoc",label:"Exonérations ciblées de cotisations (compensées par l'État)",amt:6.9,yr:2026,ramp:2,
     help:"Exonérations réservées à certains publics, territoires ou secteurs : apprentis, outre-mer, zones rurales, aides à domicile, jeunes entreprises innovantes, heures supplémentaires (part salariale)…",
     who:"Des employeurs et salariés de secteurs ou territoires ciblés (outre-mer, services à la personne, apprentissage, agriculture…).",
     per:perTot(6.9,"Pour les entreprises et salariés concernés"),
     down:"Hausse du coût du travail dans les secteurs ou territoires aidés, qui sont souvent fragiles (outre-mer, aide à domicile).",
     up:"Coût du travail réduit dans les secteurs ciblés.",
     src:"plfss_a4",note:"Prévision 2026, champ des régimes obligatoires de base (PLFSS 2026, annexe 4, tableau 6, p. 23). L'État rembourse ces exonérations à la Sécurité sociale (5,7 Md€ de crédits au PLF 2026, p. 24) : une partie de l'économie se ferait donc sur des crédits des missions de l'État ; ne baissez pas en même temps ces missions pour la même raison."},
    {id:"n_exonc",label:"Exonérations ciblées non compensées",amt:2.8,yr:2026,ramp:2,
     help:"Exonérations dont la Sécurité sociale supporte seule le coût, sans remboursement de l'État.",
     who:"Des employeurs et salariés de dispositifs particuliers.",
     per:perTot(2.8,"Pour les bénéficiaires"),
     down:"Coût du travail un peu plus élevé pour les dispositifs concernés.",
     up:"Avantage élargi, à la charge de la Sécurité sociale.",
     src:"plfss_a4",note:"Prévision 2026 (PLFSS 2026, annexe 4, tableau 6, p. 23)."},
    {id:"n_cir",label:"Crédit d'impôt recherche",amt:8.041,yr:2026,ramp:2,
     help:"Les entreprises récupèrent une partie de leurs dépenses de recherche en crédit d'impôt.",
     who:"17 593 entreprises bénéficiaires (Voies et moyens, tome II).",
     per:perTot(8.041,"Pour les entreprises"),
     down:"La recherche privée coûte plus cher en France : risque de déplacement de centres de recherche à l'étranger.",
     up:"La recherche privée coûte moins cher en France.",
     src:"vm",note:"Voies et moyens, tome II, PLF 2026, dépense fiscale n° 200302 : bénéficiaires 17 593 entreprises ; fiabilité du chiffrage selon l'administration : très bonne."},
    {id:"n_dutreil",label:"Pacte Dutreil (transmission d'entreprises)",amt:4.0,yr:2026,ramp:2,
     help:"Exonération de 75 % des droits de succession sur les parts d'entreprise transmises, sous engagement de conservation.",
     who:"Les familles qui transmettent une entreprise, souvent de gros patrimoines.",
     per:perTot(4.0,"Pour les héritiers concernés"),
     down:"Transmettre une entreprise familiale coûte plus cher en impôt.",
     up:"Transmission d'entreprises encore moins taxée.",
     src:"vm",note:"Voies et moyens, tome II, PLF 2026, dépense fiscale n° 520110 (5 000 M€ constatés en 2024) : bénéficiaires non déterminés ; fiabilité du chiffrage selon l'administration : ordre de grandeur."},
    {id:"n_gazole",label:"Gazole agricole et forestier à tarif réduit",amt:1.693,yr:2026,ramp:2,
     help:"Taxe réduite sur le carburant des engins agricoles et forestiers.",
     who:"240 000 entreprises agricoles et forestières (Voies et moyens, tome II).",
     per:perTot(1.693,"Pour le secteur"),
     down:"Hausse des coûts de production des agriculteurs.",
     up:"Baisse des coûts de production des agriculteurs.",
     src:"vm",note:"Voies et moyens, tome II, PLF 2026, dépense fiscale n° 800229 : bénéficiaires 240 000 entreprises ; fiabilité du chiffrage selon l'administration : bonne."}
   ]},
  {id:"niches",name:"Niches fiscales des ménages et autres",kind:"niche",min:-100,max:50,step:5,
   base:"88,3 Md€ de dépenses fiscales en 2026, 465 dispositifs (Voies et moyens)",
   intro:"Chaque ligne reprend le coût officiel 2026. −100 % = suppression de la niche ; un chiffre positif = son élargissement.",
   tr:v=>v<=-100?"Suppression de toutes les niches de ce secteur.":`${P(v)} sur le coût de ces niches.`,
   per:(v,T)=>`Pour les bénéficiaires : ${sign(T*v/100,1)} Md€ par an d'avantages fiscaux`,
   lines:[
    {id:"n_dom",label:"Crédit d'impôt pour l'emploi à domicile",amt:7.208,yr:2026,ramp:2,
     help:"La moitié des dépenses de ménage, garde d'enfants ou aide à domicile est remboursée, dans la limite d'un plafond.",
     who:"4,9 millions de ménages qui emploient quelqu'un chez eux (Voies et moyens, tome II), et les salariés du secteur.",
     per:perTot(7.208,"Pour les ménages concernés"),
     down:"Les services à domicile coûtent plus cher : risque de retour au travail non déclaré et de baisse d'activité du secteur.",
     up:"Services à domicile moins chers pour les ménages.",
     src:"vm",note:"Voies et moyens, tome II, PLF 2026, dépense fiscale n° 110246 : bénéficiaires 4 909 243 ménages ; fiabilité du chiffrage selon l'administration : très bonne."},
    {id:"n_abat",label:"Abattement de 10 % sur les pensions",amt:4.665,yr:2026,ramp:1,
     help:"Les retraités déduisent 10 % de leur pension avant l'impôt sur le revenu, dans la limite d'un plafond.",
     who:"15,1 millions de ménages bénéficiaires (Voies et moyens, tome II). Le projet de budget 2027 propose de plafonner l'avantage à 3 000 € par foyer, ce qui réduirait d'environ 25 % le coût de cette niche selon le dossier de presse du Gouvernement.",
     per:perTot(4.665,"Pour les retraités imposables"),
     down:"Hausse d'impôt pour les retraités imposables, d'autant plus forte que la pension est élevée (jusqu'au plafond).",
     up:"Baisse d'impôt pour les retraités imposables.",
     src:"vm",note:"Voies et moyens, tome II, PLF 2026, dépense fiscale n° 120401 : bénéficiaires 15 085 237 ménages ; fiabilité du chiffrage selon l'administration : très bonne."},
    {id:"n_trav",label:"TVA à 10 % sur les travaux dans les logements",amt:2.465,yr:2026,ramp:2,
     help:"Taux réduit au lieu de 20 % pour l'amélioration et l'entretien des logements.",
     who:"Les ménages qui font des travaux et les artisans du bâtiment.",
     per:perTot(2.465,"Pour les ménages et artisans"),
     down:"Travaux plus chers pour les ménages ; risque de travail non déclaré.",
     up:"Travaux moins chers pour les ménages.",
     src:"vm",note:"Voies et moyens, tome II, PLF 2026, dépense fiscale n° 730213 : bénéficiaires 303 850 entreprises ; fiabilité du chiffrage selon l'administration : bonne."},
    {id:"n_resto",label:"TVA à 10 % dans la restauration",amt:2.275,yr:2026,ramp:2,
     help:"Taux réduit au lieu de 20 % sur les repas servis au restaurant.",
     who:"Les restaurateurs et leurs clients.",
     per:perTot(2.275,"Pour le secteur et ses clients"),
     down:"Prix plus élevés au restaurant ou marges réduites pour les restaurateurs.",
     up:"Prix plus bas ou marges plus fortes pour les restaurateurs.",
     src:"vm",note:"Voies et moyens, tome II, PLF 2026, dépense fiscale n° 730221 : bénéficiaires non déterminés ; fiabilité du chiffrage selon l'administration : bonne."},
    {id:"n_hsup",label:"Exonération d'impôt des heures supplémentaires",amt:2.25,yr:2026,ramp:1,
     help:"Les heures supplémentaires échappent à l'impôt sur le revenu, jusqu'à un plafond.",
     who:"Les salariés qui font des heures supplémentaires, souvent ouvriers et employés.",
     per:perTot(2.25,"Pour les salariés concernés"),
     down:"Hausse d'impôt pour les salariés qui font des heures supplémentaires.",
     up:"Heures supplémentaires encore moins taxées.",
     src:"vm",note:"Voies et moyens, tome II, PLF 2026, dépense fiscale n° 120146 : bénéficiaires non déterminés ; fiabilité du chiffrage selon l'administration : ordre de grandeur."},
    {id:"n_ep",label:"Exonération de l'intéressement et de la participation",amt:2.89,yr:2026,ramp:1,
     help:"Les primes d'intéressement et de participation placées en épargne salariale échappent à l'impôt.",
     who:"Les salariés des entreprises qui en distribuent, surtout les grandes.",
     per:perTot(2.89,"Pour les salariés concernés"),
     down:"Hausse d'impôt pour les salariés qui reçoivent ces primes.",
     up:"Épargne salariale encore plus avantageuse.",
     src:"vm",note:"Voies et moyens, tome II, PLF 2026, dépense fiscale n° 120108 : bénéficiaires non déterminés ; fiabilité du chiffrage selon l'administration : ordre de grandeur."},
    {id:"n_dons",label:"Réduction d'impôt pour les dons",amt:2.204,yr:2026,ramp:1,
     help:"66 à 75 % des dons aux associations sont déduits de l'impôt.",
     who:"5,6 millions de ménages donateurs (Voies et moyens, tome II) et les associations qui reçoivent les dons.",
     per:perTot(2.204,"Pour les donateurs"),
     down:"Donner coûte plus cher : risque de baisse des dons aux associations.",
     up:"Donner coûte moins cher aux donateurs.",
     src:"vm",note:"Voies et moyens, tome II, PLF 2026, dépense fiscale n° 110201 : bénéficiaires 5 621 930 ménages ; fiabilité du chiffrage selon l'administration : très bonne."},
    {id:"n_garde",label:"Crédit d'impôt pour la garde des jeunes enfants",amt:1.799,yr:2026,ramp:1,
     help:"Une partie des frais de crèche ou d'assistante maternelle est remboursée.",
     who:"1,9 million de ménages avec un enfant de moins de 6 ans gardé hors du domicile (Voies et moyens, tome II).",
     per:perTot(1.799,"Pour les parents concernés"),
     down:"Garde d'enfants plus chère pour les parents.",
     up:"Garde d'enfants moins chère pour les parents.",
     src:"vm",note:"Voies et moyens, tome II, PLF 2026, dépense fiscale n° 110203 : bénéficiaires 1 928 960 ménages ; fiabilité du chiffrage selon l'administration : très bonne."},
    {id:"n_exofam",label:"Exonération d'impôt des prestations familiales et de l'AAH",amt:1.558,yr:2026,ramp:1,
     help:"Ces prestations ne sont pas comptées dans le revenu imposable.",
     who:"Les familles allocataires et les bénéficiaires de l'AAH qui paient l'impôt sur le revenu.",
     per:perTot(1.558,"Pour les foyers concernés"),
     down:"Hausse d'impôt pour des familles et des personnes handicapées imposables.",
     up:"Avantage étendu.",
     src:"vm",note:"Voies et moyens, tome II, PLF 2026, dépense fiscale n° 120202 : bénéficiaires non déterminés ; fiabilité du chiffrage selon l'administration : ordre de grandeur."},
    {id:"n_pinel",label:"Investissement locatif Pinel (dispositif fermé)",amt:1.349,yr:2026,ramp:1,
     help:"Réduction d'impôt pour des logements neufs mis en location. Plus de nouvelles entrées : le coût correspond aux engagements passés.",
     who:"Les propriétaires bailleurs entrés dans le dispositif.",
     per:perTot(1.349,"Pour les investisseurs"),
     down:"Remise en cause d'engagements déjà pris par l'État envers des investisseurs.",
     up:"Avantage étendu pour les investisseurs.",
     src:"vm",note:"Dispositif dont le fait générateur est éteint (Voies et moyens). Voies et moyens, tome II, PLF 2026, dépense fiscale n° 110261 : bénéficiaires 384 000 ménages ; fiabilité du chiffrage selon l'administration : très bonne."},
    {id:"n_autres",label:"Toutes les autres niches",amt:45.872,yr:2026,ramp:2,
     help:"Les quelque 450 autres dépenses fiscales : épargne, logement, outre-mer, secteurs particuliers, impôts locaux…",
     who:"Très variable selon les dispositifs.",
     per:perTot(45.872,"Pour les bénéficiaires"),
     down:"Rabot uniforme : chaque bénéficiaire perd une partie de son avantage. Dans la réalité, on choisirait niche par niche.",
     up:"Avantages étendus pour tous les bénéficiaires.",
     src:"vm",note:"Total 2026 de 88,269 Md€, moins les niches détaillées ici et dans les aides aux entreprises."}
   ]},
  {id:"nsoc",name:"Niches sociales (revenus exemptés de cotisations)",kind:"niche",min:-100,max:50,step:5,
   base:"16,7 Md€ de cotisations non perçues en 2026 sur 80,5 Md€ de revenus exemptés (PLFSS 2026, annexe 4)",
   intro:"Certains compléments de salaire échappent en tout ou partie aux cotisations sociales : mutuelle d'entreprise, intéressement, titres-restaurant, avantages du comité d'entreprise, indemnités de rupture. Le montant retenu est la perte nette, après les contributions spécifiques déjà prélevées (forfait social, CSG…). −100 % = soumettre ces revenus aux cotisations normales. Ces lignes ne recoupent pas les niches fiscales (impôt sur le revenu).",
   tr:v=>v<=-100?"Ces revenus seraient soumis aux cotisations normales.":`${P(v)} sur l'avantage de cotisations.`,
   per:(v,T)=>`Pour les salariés et employeurs : ${sign(T*v/100,1)} Md€ par an de cotisations évitées`,
   lines:[
    {id:"ns_psc",label:"Mutuelle et prévoyance d'entreprise",amt:6.1,yr:2026,ramp:1,
     help:"La part de la complémentaire santé et de la prévoyance payée par l'employeur est exonérée de cotisations (mais soumise à la CSG et au forfait social).",
     who:"Presque tous les salariés du privé, depuis la généralisation de la mutuelle d'entreprise en 2016.",
     per:perTot(6.1,"Pour les bénéficiaires"),
     down:"Coût plus élevé de la mutuelle d'entreprise pour les employeurs et salariés ; risque de garanties moins bonnes.",
     up:"Mutuelle d'entreprise encore moins taxée.",
     src:"plfss_a4",note:"Perte de recettes nette 2026 pour la Sécurité sociale : 6,1 Md€ (PLFSS 2026, annexe 4, tableau 9, p. 30). Assiette exemptée : 28,3 Md€ (santé et prévoyance 24,3 Md€, retraite supplémentaire et épargne retraite 4,0 Md€)."},
    {id:"ns_ep",label:"Participation, intéressement et actions gratuites",amt:3.7,yr:2026,ramp:1,
     help:"Les primes de participation et d'intéressement, l'abondement de l'employeur à l'épargne salariale et les actions gratuites échappent aux cotisations (forfait social à la place, parfois nul).",
     who:"Les salariés d'entreprises qui partagent leurs bénéfices, surtout les grandes entreprises.",
     per:perTot(3.7,"Pour les bénéficiaires"),
     down:"Primes d'épargne salariale moins avantageuses ; les entreprises pourraient en verser moins.",
     up:"Épargne salariale encore plus avantageuse.",
     src:"plfss_a4",note:"Perte de recettes nette 2026 pour la Sécurité sociale : 3,7 Md€ (PLFSS 2026, annexe 4, tableau 9, p. 30). Assiette exemptée : 32,3 Md€. À ne pas confondre avec l'exonération d'impôt sur le revenu de ces primes (ligne des niches fiscales)."},
    {id:"ns_tr",label:"Titres-restaurant",amt:2.2,yr:2026,ramp:1,
     help:"La part payée par l'employeur est exonérée de cotisations, dans une limite fixée chaque année.",
     who:"Environ 5,7 Md€ de titres-restaurant financés par les employeurs en 2026 (assiette exemptée).",
     per:perTot(2.2,"Pour les bénéficiaires"),
     down:"Titres-restaurant moins intéressants : les employeurs pourraient en réduire le montant.",
     up:"Titres-restaurant plus avantageux.",
     src:"plfss_a4",note:"Perte de recettes nette 2026 pour la Sécurité sociale : 2,2 Md€ (PLFSS 2026, annexe 4, tableau 9, p. 30). Assiette exemptée : 5,7 Md€."},
    {id:"ns_cse",label:"Avantages du comité social et économique (CSE)",amt:1.8,yr:2026,ramp:1,
     help:"Bons d'achat, chèques cadeaux, aides aux vacances, culture ou sport versés par le comité d'entreprise.",
     who:"Les salariés des entreprises de 50 salariés et plus.",
     per:perTot(1.8,"Pour les bénéficiaires"),
     down:"Moins d'avantages sociaux versés par les comités d'entreprise.",
     up:"Avantages du comité encore moins taxés.",
     src:"plfss_a4",note:"Perte de recettes nette 2026 pour la Sécurité sociale : 1,8 Md€ (PLFSS 2026, annexe 4, tableau 9, p. 30). Assiette exemptée : 4,9 Md€."},
    {id:"ns_transp",label:"Prise en charge des transports par l'employeur",amt:1.2,yr:2026,ramp:1,
     help:"Remboursement de l'abonnement de transport en commun et forfait mobilités durables (vélo, covoiturage).",
     who:"Les salariés qui vont au travail en transport en commun ou à vélo.",
     per:perTot(1.2,"Pour les bénéficiaires"),
     down:"Trajet domicile-travail plus coûteux pour les salariés ou les employeurs.",
     up:"Trajets encore mieux pris en charge.",
     src:"plfss_a4",note:"Perte de recettes nette 2026 pour la Sécurité sociale : 1,2 Md€ (PLFSS 2026, annexe 4, tableau 9, p. 30). Assiette exemptée : 2,9 Md€."},
    {id:"ns_rupt",label:"Indemnités de licenciement et de rupture conventionnelle",amt:1.2,yr:2026,ramp:1,
     help:"Les indemnités de départ sont exonérées de cotisations sous certains plafonds.",
     who:"Les salariés licenciés ou en rupture conventionnelle.",
     per:perTot(1.2,"Pour les bénéficiaires"),
     down:"Indemnités de départ nettes plus faibles pour des salariés qui perdent leur emploi.",
     up:"Indemnités de départ encore moins taxées.",
     src:"plfss_a4",note:"Perte de recettes nette 2026 pour la Sécurité sociale : 1,2 Md€ (PLFSS 2026, annexe 4, tableau 9, p. 30). Assiette exemptée : 5,0 Md€."},
    {id:"ns_cv",label:"Chèques-vacances et Cesu préfinancés",amt:0.5,yr:2026,ramp:1,
     help:"Chèques-vacances et chèques emploi service payés par l'employeur.",
     who:"Les salariés qui en reçoivent.",
     per:perTot(0.5,"Pour les bénéficiaires"),
     down:"Chèques-vacances et Cesu moins avantageux.",
     up:"Chèques plus avantageux.",
     src:"plfss_a4",note:"Perte de recettes nette 2026 pour la Sécurité sociale : 0,5 Md€ (PLFSS 2026, annexe 4, tableau 9, p. 30). Chèques-vacances 0,4 Md€ et Cesu préfinancé 0,1 Md€ ; assiette exemptée : 1,3 Md€."},
   ]},
  {id:"fraude",name:"Lutte contre la fraude",kind:"rec",min:-20,max:100,step:5,
   base:"11,4 Md€ encaissés après contrôle fiscal, 0,5 Md€ de fraudes aux prestations détectées par les Caf, 0,15 Md€ recouvrés par l'Urssaf en 2025",
   intro:"Le curseur fait varier les sommes récupérées. Attention à la différence entre sommes notifiées ou détectées et sommes réellement encaissées : l'Urssaf a redressé 1,5 Md€ pour travail dissimulé en 2025 mais n'en a recouvré qu'environ 150 M€, car les fraudeurs organisent souvent leur insolvabilité.",
   tr:v=>`${P(v)} sur les sommes récupérées, une fois appliqué.`,
   per:(v,T)=>`Sommes récupérées : ${sign(T*v/100,2)} Md€ par an`,
   lines:[
    {id:"t_fraude",label:"Recouvrement du contrôle fiscal",amt:11.4,yr:2025,ramp:3,
     help:"Sommes effectivement encaissées après contrôles fiscaux : 11,4 Md€ en 2025, pour 17,1 Md€ notifiés.",
     who:"Les fraudeurs et les contribuables en erreur.",
     per:perTot(11.4,"Recouvré"),
     down:"Moins de contrôles ou de recouvrement.",
     up:"Plus de contrôleurs et de recouvrement. Une forte hausse rapide est peu réaliste.",
     src:"eco_fraude"},
    {id:"fr_caf",label:"Fraudes aux prestations détectées par les Caf",amt:0.509,yr:2025,ramp:3,
     help:"Fraudes intentionnelles (fausses déclarations, omissions) détectées par les contrôles des Caf. S'y ajoutent 1,27 Md€ d'erreurs corrigées, dont une partie de bonne foi.",
     who:"Les allocataires fraudeurs ; davantage de contrôles touchent aussi des allocataires de bonne foi.",
     per:perTot(0.509,"Sommes détectées"),
     down:"Moins de contrôles : plus de prestations versées à tort.",
     up:"Plus de contrôles et de ciblage. Le dossier de presse ne publie pas la part effectivement récupérée : l'effet réel peut être plus faible.",
     src:"caf_fraude",note:"508,8 M€ de fraudes détectées en 2025 (+45 % depuis 2022) ; 1 679 M€ d'impacts financiers des contrôles, dont 1 270 M€ d'indus et 409 M€ de rappels versés aux allocataires (dossier de presse Caf, p. 5 et 6)."},
    {id:"fr_urssaf",label:"Travail dissimulé : sommes recouvrées par l'Urssaf",amt:0.15,yr:2025,ramp:3,
     help:"Cotisations récupérées auprès des entreprises et indépendants qui ont dissimulé de l'emploi ou de l'activité.",
     who:"Les employeurs et indépendants fraudeurs ; concurrence plus loyale pour les autres.",
     per:perTot(0.15,"Sommes recouvrées"),
     down:"Moins de redressements et de recouvrement.",
     up:"Plus de contrôles et de recouvrement. Les redressements (1,5 Md€) sont dix fois plus élevés que les sommes recouvrées : améliorer le recouvrement compte autant que contrôler plus.",
     src:"urssaf_fraude",note:"Près de 150 M€ recouvrés en 2025, dont environ 100 M€ pour le travail dissimulé ; redressements pour travail dissimulé : plus de 1,5 Md€ (dossier de presse Urssaf, p. 3 et 8)."}
   ]},
  {id:"etr",hide:true,name:"Nouvelles recettes inspirées de l'étranger",kind:"rec",min:0,max:100,step:10,
   base:"Cinq prélèvements qui existent ailleurs en Europe, transposés à la France : jusqu'à 26 Md€ par an au total",
   intro:"Chaque ligne prend le rendement officiel d'un prélèvement étranger, le rapporte au PIB de ce pays, l'applique au PIB français (3 068 Md€ en 2026) et retranche ce que l'équivalent français rapporte déjà. 100 % = adopter la mesure au niveau du pays de référence. C'est une transposition, pas une prévision : les comportements, l'assiette et les règles françaises changeraient le rendement réel.",
   tr:v=>`${P(v)} du niveau du pays de référence.`,
   per:(v,T)=>`Recettes nouvelles : ${sign(T*v/100,1)} Md€ par an`,
   lines:[
    {id:"x_maut",label:"Redevance kilométrique poids lourds (modèle allemand)",amt:9.075,yr:2025,ramp:3,
     help:"En Allemagne, tous les camions de plus de 3,5 tonnes paient au kilomètre sur les autoroutes et les 40 000 km de routes fédérales, selon leurs émissions de CO2. En France, l'écotaxe poids lourds a été abandonnée en 2014 ; les camions ne paient que les péages des autoroutes concédées, qui vont aux sociétés d'autoroutes et non à l'État.",
     who:"Les transporteurs routiers, dont une partie de camions étrangers en transit, et, par répercussion sur les prix, les chargeurs et les consommateurs.",
     per:perTot(9.075,"Payé par le transport routier de marchandises"),
     up:"Hausse du coût du transport routier, en partie répercutée sur les prix ; incitation au rail et aux camions moins polluants. Le rendement allemand est porté par un fort trafic de transit et un réseau taxé plus large : en France, il serait vraisemblablement plus faible, d'autant que les autoroutes concédées sont déjà payantes. La Collectivité européenne d'Alsace prépare sa propre taxe poids lourds.",
     src:"de_maut",note:"Allemagne : environ 13,4 Md€ de recettes en 2025 (ministère fédéral des Transports) pour un PIB de 4 530 Md€ (Destatis), soit 0,30 % du PIB. Appliqué au PIB français : 9,1 Md€. Aucun équivalent national en France à retrancher."},
    {id:"x_alc",label:"Accises sur l'alcool (niveau britannique)",amt:7.467,yr:2026,ramp:2,
     help:"Le Royaume-Uni taxe l'alcool, vin compris, selon son degré : 12,4 Md£ de recettes en 2025-2026. En France, les taxes sur les alcools et les boissons rapportent 5,0 Md€, et le vin est très peu taxé.",
     who:"Les consommateurs d'alcool (davantage les gros consommateurs), les producteurs, notamment viticulteurs, et les débits de boissons.",
     per:perTot(7.467,"Payé par les consommateurs d'alcool"),
     up:"Hausse du prix de l'alcool : baisse attendue de la consommation et des dommages liés à l'alcool, mais pression sur la filière viticole et les cafés-restaurants, et risque d'achats transfrontaliers. Le rendement baisserait si la consommation recule.",
     src:"uk_hmrc",note:"Royaume-Uni : 12,4 Md£ en 2025-2026 (HMRC, bulletin annuel) pour un PIB de 3 044,6 Md£ en 2025 (ONS), soit 0,41 % du PIB, donc 12,5 Md€ en France. Moins les taxes françaises sur les alcools et boissons, 5 028 M€ en 2026 (Comptes de la Sécurité sociale, octobre 2026, tableau 2, p. 61) : 7,5 Md€ de recettes nouvelles."},
    {id:"x_avion",label:"Taxe sur les billets d'avion (niveau britannique)",amt:3.335,yr:2026,ramp:1,
     help:"Le Royaume-Uni prélève l'Air Passenger Duty sur chaque passager au départ, plus élevée pour les vols longs et en classe affaires : 4,6 Md£ en 2025-2026. La taxe française sur les billets d'avion a été triplée en mars 2025 et rapporte environ 1,3 Md€ par an.",
     who:"Les voyageurs aériens au départ de la France, les compagnies aériennes et les aéroports, le tourisme.",
     per:perTot(3.335,"Payé par les passagers aériens"),
     up:"Billets plus chers : moins de vols, surtout de loisirs et de courte distance ; moins d'émissions. Depuis la hausse de 2025, le trafic français progresse nettement moins vite que dans le reste de l'Europe (ministère de la Transition écologique), ce qui réduirait le rendement.",
     src:"uk_hmrc",note:"Royaume-Uni : 4,6 Md£ en 2025-2026 (HMRC) pour un PIB de 3 044,6 Md£ (ONS), soit 0,15 % du PIB, donc 4,6 Md€ en France. Moins la taxe française actuelle, environ 1,3 Md€ en année pleine (ministère de la Transition écologique et DGAC, novembre 2025) : 3,3 Md€."},
    {id:"x_titres",label:"Taxe sur les achats d'actions (droit de timbre britannique)",amt:0.919,yr:2026,ramp:1,
     help:"Au Royaume-Uni, tout achat d'actions d'une société britannique est taxé à 0,5 %, quelle que soit sa taille. En France, la taxe sur les transactions financières (0,4 %) ne vise que les sociétés de plus d'1 Md€ de capitalisation et rapporte 2,63 Md€.",
     who:"Les épargnants et investisseurs qui achètent des actions, et les sociétés cotées (coût du capital).",
     per:perTot(0.919,"Payé par les acheteurs d'actions"),
     up:"Achats d'actions un peu plus chers ; risque de déplacement des transactions vers d'autres places ou vers des produits dérivés non taxés.",
     src:"uk_stamp",note:"Royaume-Uni : 3,2 Md£ en 2023-2024 (HMRC, statistiques des droits de timbre) pour un PIB de 2 766,4 Md£ en 2023 (ONS), soit 0,12 % du PIB, donc 3,5 Md€ en France. Moins la taxe française sur les transactions financières, 2 630 M€ prévus en 2026 (Voies et moyens, tome I, p. 37) : 0,9 Md€."},
    {id:"x_rente",label:"Prélèvement temporaire sur les banques et l'énergie (modèle espagnol)",amt:5.502,yr:2024,ramp:1,
     help:"L'Espagne a taxé de 2023 à 2024 le chiffre d'affaires des grandes banques (profitant de la hausse des taux) et des grands énergéticiens. Elle l'a ensuite remplacé, pour les banques, par un impôt progressif sur la marge d'intérêts.",
     who:"Les grandes banques et les grands groupes énergétiques, et indirectement leurs actionnaires et, si elle est répercutée, leurs clients.",
     per:perTot(5.502,"Payé par les grandes banques et énergéticiens"),
     up:"Moins de bénéfices pour les banques et les énergéticiens ; risque de répercussion sur les frais bancaires, le crédit ou les prix de l'énergie. Le rendement dépend des profits exceptionnels du moment : il baisse quand les taux ou les prix de l'énergie redescendent.",
     src:"es_grav",note:"Espagne, recettes 2024 : banques 1 695 M€, énergie 1 164 M€, total 2 859 M€ (gouvernement espagnol) pour un PIB 2024 de 1 594 330 M€ (INE), soit 0,18 % du PIB, donc 5,5 Md€ en France (banques 3,3 Md€, énergie 2,2 Md€). La surtaxe française des grandes entreprises (curseur à part) touche déjà en partie ces groupes."}
   ]},
  {id:"imp",name:"Impôts et taxes",kind:"rec",min:-20,max:30,step:0.5,
   base:"Montants 2025 des principaux impôts, toutes administrations (Insee)",
   intro:"Le curseur fait varier le rendement de chaque impôt, par une hausse ou une baisse de taux. Les prélèvements obligatoires atteignent 43,9 % du PIB en 2026 (projet de loi de finances 2027).",
   tr:v=>`${P(v)} sur le rendement de ces impôts.`,
   per:(v,T)=>`Pour l'ensemble des contribuables : ${sign(T*v/100,1)} Md€ par an`,
   lines:[
    {id:"t_tva",label:"TVA",amt:208.8,yr:2025,ramp:1,
     help:"Taxe sur la consommation, payée sur presque tous les achats.",
     who:"Tous les consommateurs ; proportionnellement plus les ménages modestes, qui consomment tout leur revenu.",
     tr:v=>`≈ ${sign(v*208.8/100/11.4,1)} point sur tous les taux de TVA (11,4 Md€ par point selon la DG Trésor)`,
     per:v=>`Par habitant : ${sign(208.8*1000/POP*v/100,0)} € par an`,
     down:"Baisse des prix à la consommation, gain de pouvoir d'achat pour tous.",
     up:"Hausse des prix : perte de pouvoir d'achat, plus marquée pour les ménages modestes. Selon la DG Trésor, une hausse de TVA de 1 point de PIB (environ 31 Md€, soit à peu près 2,7 points sur tous les taux) relève les prix de 1,5 % la 1re année ; la consommation des ménages baisse de 0,6 % la 1re année et de 1,9 % au bout de 10 ans, le PIB de 0,3 % puis 0,8 %, et l'emploi marchand de 153 000 postes au bout de 3 ans.",
     src:"insee_imp",note:"Rendement d'un point de TVA : DG Trésor, 2025. Effets sur l'économie : variante « hausse de la TVA de 1 % du PIB » du modèle Mésange (Cahiers de la DG Trésor n° 2017-04, p. 112)."},
    {id:"t_csg",label:"CSG",amt:156.6,yr:2025,ramp:1,
     help:"Contribution sociale généralisée, prélevée sur les salaires, pensions, revenus du patrimoine et prestations.",
     who:"Les salariés, les retraités assujettis, les épargnants et les propriétaires.",
     per:v=>`Par habitant : ${sign(156.6*1000/POP*v/100,0)} € par an`,
     down:"Plus de revenu net pour les actifs, retraités et épargnants.",
     up:"Baisse du revenu net des actifs, retraités et épargnants.",
     src:"insee_imp"},
    {id:"t_ir",label:"Impôt sur le revenu",amt:103.6,yr:2025,ramp:1,
     help:"Impôt progressif sur les revenus des ménages (montant avant crédits d'impôt).",
     who:"19,6 millions de foyers imposés sur 41,5 millions (47 %), revenus 2024 (DGFiP).",
     per:perYear(92000/19.6,"Par foyer imposé (impôt net moyen 4 694 €)"),
     down:"Baisse d'impôt pour les 47 % de foyers imposés, sans effet pour les autres.",
     up:"Hausse d'impôt pour les foyers imposés, les plus aisés en payant la plus grande part.",
     src:"insee_imp",note:"Montant 2025 avant crédits d'impôt (Insee) ; impôt net prévu en 2026 : 104,0 Md€ (Voies et moyens, tome I, p. 15). Impôt net 2024 : 92 Md€ pour 19,6 millions de foyers imposés (DGFiP) ; la moyenne par foyer est une division de ces deux chiffres."},
    {id:"t_is",label:"Impôt sur les sociétés",amt:69.5,yr:2025,ramp:1,
     help:"Impôt sur les bénéfices des entreprises (montant avant crédits d'impôt).",
     who:"Les entreprises bénéficiaires, et indirectement leurs actionnaires et salariés.",
     per:perTot(69.5,"Pour les entreprises"),
     down:"Plus de bénéfices après impôt pour les entreprises.",
     up:"Moins de bénéfices après impôt : risque sur l'investissement et l'attractivité.",
     src:"insee_imp",note:"Montant 2025 avant crédits d'impôt, toutes administrations (Insee). Une hausse de taux s'applique bien à l'impôt brut. Ce montant comprend probablement la surtaxe des grandes entreprises, qui a son propre curseur : un pourcentage appliqué ici majore donc un peu l'effet. Pour comparaison, l'impôt net de l'État est prévu à 59,0 Md€ en 2026, hors surtaxe (Voies et moyens, tome I, p. 20)."},
    {id:"t_fonc",label:"Taxe foncière",amt:44.2,yr:2025,ramp:1,
     help:"Impôt local payé par les propriétaires.",
     who:"Les propriétaires, et indirectement les locataires si elle est répercutée.",
     per:v=>`Par habitant : ${sign(44.2*1000/POP*v/100,0)} € par an`,
     down:"Baisse d'impôt pour les propriétaires.",
     up:"Hausse d'impôt pour les propriétaires.",
     src:"insee_imp"},
    {id:"t_ticpe",label:"Taxes sur les carburants et l'énergie",amt:30.5,yr:2025,ramp:1,
     help:"Accise sur les produits énergétiques (carburants, fioul).",
     who:"Les automobilistes, surtout ruraux et périurbains, et les transporteurs.",
     per:v=>`Par habitant : ${sign(30.5*1000/POP*v/100,0)} € par an`,
     down:"Carburants moins chers.",
     up:"Carburants plus chers, surtout pour ceux qui dépendent de la voiture.",
     src:"insee_imp"},
    {id:"t_succ",label:"Droits de succession et de donation",amt:21.1,yr:2025,ramp:1,
     help:"Impôt sur les héritages et les donations.",
     who:"Les héritiers et donataires, surtout de patrimoines importants : de nombreuses successions en ligne directe ne paient rien grâce aux abattements.",
     per:perTot(21.1,"Pour les héritiers"),
     down:"Héritages et donations moins taxés.",
     up:"Héritages et donations plus taxés.",
     src:"insee_imp"},
    {id:"t_ifi",label:"Impôt sur la fortune immobilière (IFI)",amt:3.095,yr:2026,ramp:1,
     help:"Impôt annuel sur le patrimoine immobilier net supérieur à 1,3 M€. A remplacé l'ISF en 2018.",
     who:"Les foyers dont le patrimoine immobilier net dépasse 1,3 M€.",
     per:perTot(3.095,"Pour les foyers redevables"),
     down:"Les patrimoines immobiliers élevés paient moins.",
     up:"Les patrimoines immobiliers élevés paient plus ; risque d'arbitrage vers des placements non immobiliers, non taxés.",
     src:"vm1",note:"Prévision 2026 : 3 095 M€ (Voies et moyens, tome I, PLF 2026, ligne 1406, p. 23) ; 2 739 M€ encaissés en 2024."},
    {id:"t_tabac",label:"Taxes sur le tabac",amt:13.6,yr:2025,ramp:1,
     help:"Accises sur les produits du tabac.",
     who:"Les fumeurs.",
     per:v=>`Par habitant : ${sign(13.6*1000/POP*v/100,0)} € par an`,
     down:"Tabac moins cher.",
     up:"Tabac plus cher, avec un effet recherché sur la consommation.",
     src:"insee_imp"}
   ]}
  ];
  const SUP={x_popact:{S:[-0.11,-0.07,-0.04,0.01,0.11],Y:[0.04,0.07,0.10,0.23,0.61],P:[-0.09,-0.24,-0.44,-0.81,-1.12]},x_eff:{S:[-0.04,-0.11,-0.09,0.00,0.05],Y:[0.04,0.15,0.27,0.43,0.61],P:[-0.09,-0.28,-0.44,-0.63,-0.89]}};
  const SPECIAL=[
    {id:"x_popact",kind:"spec",gain:1,path:(t,v)=>{let a=0;for(let s0=1;s0<=Math.min(t,5);s0++)a+=v/5*mesAt(SUP.x_popact.S,t-s0+1);return a},label:"Augmenter la population active",min:0,max:5,step:0.5,start:1,
     sup:SUP.x_popact,
     swFn:v=>v*0.11*GDP0/100,
     fmt:v=>v===0?"Non":"+"+fr(v,1)+" % (≈ "+fr(v*318,0).replace(/\s/g," ")+" 000 actifs)",
     help:"Plus de personnes qui travaillent ou cherchent un emploi : emploi des seniors, des femmes et des jeunes, insertion des allocataires, immigration de travail. 1 % de population active = environ 318 000 personnes (31,8 millions d'actifs en 2025). Le curseur suppose que l'objectif est atteint progressivement en 5 ans (2027-2031) ; le choix des réformes pour y arriver vous revient.",
     who:"Les personnes qui entrent ou restent sur le marché du travail ; à court terme, les salariés, car le chômage monte avant que l'économie n'absorbe les nouveaux actifs.",
     per:v=>v===0?"Aucun changement":`PIB plus élevé de ${fr(v*0.61,2)} % au bout de 10 ans ; solde public amélioré de ${fr(v*0.11,2)} point de PIB à 10 ans ; à long terme, environ ${fr(v*262,0)} 000 emplois de plus (DG Trésor)`,
     up:"Selon la DG Trésor, l'économie met du temps à absorber les nouveaux actifs : le chômage monte d'abord (+0,8 point la 1re année pour 1 %), les salaires ralentissent, puis l'emploi et la production rattrapent. Le gain pour les comptes publics est faible les premières années et ne devient positif qu'après 5 ans. Le modèle montre aussi une baisse des prix, comptée par le simulateur (sauf si vous désactivez les effets sur les prix) : elle réduit la valeur en euros du PIB, donc le gain sur la dette.",
     src:"mesange",note:"Variante « hausse permanente de la population active de 1 % » (Cahiers de la DG Trésor n° 2017-04, p. 131) : PIB +0,04 % à 1 an, +0,10 % à 3 ans, +0,23 % à 5 ans, +0,61 % à 10 ans, +0,88 % à long terme ; solde primaire −0,11, −0,04, +0,01 puis +0,11 point de PIB ; +262 000 emplois au total à long terme. Population active : Insee, 31,8 millions en 2025. Pour comparaison, le COR chiffre le recul d'un an de l'âge de départ à +200 000 à +250 000 emplois à 10 ans (curseur à part)."},
    {id:"x_eff",kind:"spec",gain:1,path:(t,v)=>{let a=0;for(let s0=1;s0<=Math.min(t,5);s0++)a+=v/5*mesAt(SUP.x_eff.S,t-s0+1);return a},label:"Gains de productivité (réformes structurelles)",min:0,max:3,step:0.5,start:1,
     sup:SUP.x_eff,
     swFn:v=>v*0.05*GDP0/100,
     fmt:v=>v===0?"Non":"+"+fr(v,1)+" % d'efficacité du travail",
     help:"Chaque heure travaillée produit davantage : formation, simplification, concurrence, diffusion des technologies (dont l'intelligence artificielle), meilleure organisation. Aucune administration ne chiffre officiellement le gain d'une réforme précise de ce type : le niveau choisi est une hypothèse de votre part. Le curseur suppose une montée en charge sur 5 ans.",
     who:"Les entreprises et les salariés ; à court terme, certains emplois, car les entreprises produisent autant avec moins de monde avant que la demande ne suive.",
     per:v=>v===0?"Aucun changement":`PIB plus élevé de ${fr(v*0.61,2)} % au bout de 10 ans et de ${fr(v*0.89,2)} % à long terme ; solde public amélioré de ${fr(v*0.05,2)} point de PIB à 10 ans (DG Trésor)`,
     up:"Selon la DG Trésor, un gain de productivité détruit d'abord des emplois (79 000 au bout de 3 ans pour 1 %), puis la baisse des prix relance la demande et l'emploi revient presque entièrement. Le gain pour les comptes publics est négatif les 3 premières années et faible ensuite. Le modèle montre aussi une baisse des prix (−0,9 % à 10 ans), comptée par le simulateur (sauf si vous désactivez les effets sur les prix) : elle réduit la valeur en euros du PIB, donc le gain sur la dette.",
     src:"mesange",note:"Variante « hausse permanente de l'efficience de 1 % » (Cahiers de la DG Trésor n° 2017-04, p. 129) : PIB +0,04 % à 1 an, +0,27 % à 3 ans, +0,43 % à 5 ans, +0,61 % à 10 ans, +0,89 % à long terme ; solde primaire −0,04, −0,09, 0,00 puis +0,05 point de PIB."},
    {id:"x_cess",kind:"spec",label:"Vendre des participations cotées de l'État",min:0,max:100,step:10,start:1,
     swFn:v=>-1.9*v/100,
     debt:(t,v)=>t>=1&&t<=3?67.9*v/100/3:0,
     path:(t,v)=>t<1?0:-1.9*v/100*Math.min(t,3)/3/GDP0*100,
     fmt:v=>v===0?"Non":v+" % du portefeuille",
     help:"L'État détient des actions de 10 entreprises cotées (Airbus, Safran, Thales, Engie, ADP, Orange, FDJ, Renault, Air France-KLM, Eramet), d'une valeur de 67,9 Md€ au 30 juin 2025. Les vendre sur trois ans (2027-2029) réduit la dette d'un coup, mais l'État perd chaque année les dividendes correspondants.",
     who:"Le budget de l'État, qui perd des dividendes ; les entreprises, qui changent d'actionnaire ; la souveraineté dans des secteurs sensibles (défense, aéronautique, énergie).",
     per:v=>`Dette réduite de ${fr(67.9*v/100,1)} Md€ (environ ${fr(67.9*v/100/GDP0*100,1)} point de PIB) ; dividendes perdus : ${fr(1.9*v/100,2)} Md€ par an`,
     up:"Moins de dette, mais moins de dividendes chaque année et moins de contrôle public sur des entreprises stratégiques. La valeur retenue est celle de la Bourse au 30 juin 2025 : vendre de gros blocs se fait souvent avec une décote, et le cours peut avoir changé.",
     src:"ape",note:"Valeur boursière du portefeuille coté : 67 902 M€ au 30 juin 2025 (rapport d'activité 2024-2025 de l'APE, figure 7, p. 40) ; dividendes des entreprises cotées perçus en 2024 : 1,9 Md€ (figure 9, p. 42). Les entreprises non cotées (EDF, SNCF, La Poste…) ne sont pas comptées : leur valeur n'est pas observable en Bourse."},
    {id:"x_ref23",kind:"spec",label:"Annuler la suspension de la réforme des retraites de 2023",min:0,max:100,step:25,amt:1.8,start:1,
     path:(t,v)=>t>=1&&t<=6?1.8/GDP0*100*v/100:0,
     fmt:v=>v===0?"Non":v===100?"Oui, entièrement":v+" %",
     help:"La loi de financement de la Sécurité sociale pour 2026 a suspendu la montée de l'âge légal vers 64 ans pour les générations 1964 et début 1965 : 64 ans sera atteint par la génération 1969 au lieu de 1968. Ce curseur annule cette suspension. Effet limité dans le temps : à partir de 2033, la suspension ne change plus rien.",
     who:"Les assurés nés entre 1964 et 1968, qui partiraient un à trois trimestres plus tard.",
     per:v=>`Gain pour les caisses de retraite : ${sign(1.8*v/100,1)} Md€ par an de 2027 à 2032, puis 0`,
     up:"Départ un à trois trimestres plus tard pour les générations 1964 à 1968.",
     src:"cor26",note:"Coût de la suspension : 1,8 Md€ en moyenne en année pleine jusqu'en 2032 (COR, rapport annuel juin 2026, synthèse p. 7, chiffrage Drees, modèle Trajectoire) ; calendrier par génération : p. 57-58, tableau 1.4. Correction : la version précédente du simulateur reprenait à tort le rendement de la réforme entière (12,9 Md€ en 2030)."},
    {id:"x_aod",kind:"spec",label:"Reculer l'âge légal d'un an de plus (65 ans)",min:0,max:2,step:1,start:1,
     path:(t,v)=>{if(!v)return 0;const P=v===1?[[0,0],[2,0.05],[10,0.3],[20,0.3]]:[[0,0],[2,0.4],[10,0.6],[20,0.65]];for(let k=1;k<P.length;k++){if(t<=P[k][0]){const a=P[k-1],b=P[k];return a[1]+(b[1]-a[1])*(t-a[0])/(b[0]-a[0])}}return P[P.length-1][1]},
     swFn:v=>v===0?0:(v===1?0.3:0.6)*GDP0/100,
     fmt:v=>v===0?"Non":v===1?"Oui (bas de la fourchette)":"Oui (haut de la fourchette)",
     help:"Âge d'ouverture des droits porté d'un an au-delà de 64 ans. Le Conseil d'orientation des retraites a fait chiffrer la mesure par trois modèles (DG Trésor, OFCE, I-MIP) ; leurs résultats forment une fourchette. Choisissez le bas (prudent) ou le haut. L'effet sur le solde inclut déjà le surcroît d'emploi et de recettes.",
     who:"Les actifs qui partiraient un an plus tard ; à court terme, des seniors au chômage ou en invalidité plus longtemps.",
     per:v=>v===0?"Aucun changement":`Gain pour les comptes publics : ${v===1?"+0,05":"+0,4"} pt de PIB à 2 ans, ${v===1?"+0,3":"+0,6"} pt à 10 ans, ${v===1?"+0,3":"+0,65"} pt à 20 ans ; ${v===1?"+160 000":"+250 000"} emplois à 10 ans`,
     up:"Un an de travail de plus avant la retraite ; hausse temporaire du chômage des seniors et report vers d'autres dépenses (chômage, invalidité), déjà pris en compte dans les chiffres du COR.",
     src:"cor26",note:"Tableau « Effets sur le PIB, l'emploi et les finances publiques de différentes mesures de consolidation », rapport annuel du COR juin 2026, synthèse p. 20 : solde primaire +0,05 à +0,4 pt de PIB à 2 ans, +0,3 à +0,6 à 10 ans, +0,3 à +0,65 à 20 ans. Entre ces horizons, le simulateur relie les points en ligne droite. Le gain de PIB (+0,1 à +0,8 %) n'est pas ajouté à la croissance, pour rester prudent."},
    {id:"x_surtaxe",kind:"spec",label:"Prolonger la surtaxe des grandes entreprises après 2026",min:0,max:100,step:10,amt:7.3,ramp:1,start:1,
     fmt:v=>v===0?"Non":v+" % du niveau 2026",
     help:"Les groupes de plus d'1 Md€ de chiffre d'affaires paient un impôt sur les sociétés majoré, prévu jusqu'en 2026. Le scénario de base suppose qu'il s'arrête.",
     who:"Quelques centaines de grands groupes.",
     per:perTot(7.3,"Pour les grands groupes"),
     up:"Les grands groupes continuent de payer la surtaxe : moins de bénéfices après impôt.",
     src:"senat_312",note:"Rendement 2026 : 7,3 Md€ selon le Sénat (rapport n° 312, texte définitif adopté en nouvelle lecture) ; 8 Md€ prévus pour 2025 (Voies et moyens, tome I, p. 25). Le projet de budget 2027 propose de la prolonger une troisième année avec des taux abaissés d'environ un quart (5 Md€ attendus par le Gouvernement en 2027)."}
  ];
  // Impôt sur la fortune : rendement observé à l'étranger, en % du PIB du pays, appliqué au PIB français
  const WREF={
    moy3:{label:"Moyenne Espagne, Norvège et Suisse",pct:(0.1286+0.5908+1.1075)/3,
      d:"Moyenne simple des rendements observés dans les trois pays européens qui ont un impôt général sur la fortune : Espagne 0,13 %, Norvège 0,59 %, Suisse 1,11 % du PIB. Ce sont des impôts larges, qui touchent bien au-delà des très hauts patrimoines.",
      payers:"Espagne : 228 575 déclarants ; Norvège : environ 719 000 contribuables ; Suisse : impôt cantonal dû dès des seuils bas.",src:["es_patri","es_pib23","no_formue","no_pib","ch_fortune","ch_pib"]},
    moy2:{label:"Moyenne Espagne et Norvège (sans la Suisse)",pct:(0.1286+0.5908)/2,
      d:"La Suisse est écartée parce que son impôt sur la fortune remplace en partie l'impôt sur les plus-values, qu'elle n'a pas pour les particuliers. Espagne 0,13 %, Norvège 0,59 % du PIB.",
      payers:"Espagne : 228 575 déclarants ; Norvège : environ 719 000 contribuables.",src:["es_patri","es_pib23","no_formue","no_pib"]},
    itsgf:{label:"Très hauts patrimoines seulement (modèle espagnol, plus de 3 M€)",pct:623.6/1373629*100,
      d:"L'Espagne a créé en 2022 un impôt de solidarité sur les patrimoines de plus de 3 M€ : 623,6 M€ la première année, soit 0,045 % du PIB. Il s'ajoute à l'impôt sur le patrimoine régional, déductible, ce qui réduit son rendement propre.",
      payers:"12 010 déclarants en Espagne, cotisation moyenne de 52 000 €.",src:["es_itsgf","es_pib22"]},
    es:{label:"Espagne (impôt sur le patrimoine)",pct:1926.282772/1497761*100,
      d:"1 926 M€ en 2023 pour un PIB de 1 497 761 M€ : 0,13 % du PIB. Seuil national de 700 000 € (plus 300 000 € pour la résidence principale), avec de fortes différences entre régions.",
      payers:"228 575 déclarants en 2023.",src:["es_patri","es_pib23"]},
    no:{label:"Norvège",pct:31796/5382000*100,
      d:"31,8 milliards de couronnes en 2024 (part communale et part de l'État) pour un PIB de 5 382 milliards : 0,59 % du PIB. Impôt large, dû dès un patrimoine modeste.",
      payers:"Environ 719 000 contribuables, pour 5,6 millions d'habitants.",src:["no_formue","no_pib"]},
    ch:{label:"Suisse",pct:9458/854000*100,
      d:"9 458 millions de francs en 2024 (cantons et communes) pour un PIB de 854 milliards : 1,11 % du PIB. Impôt cantonal large, qui compense l'absence d'impôt sur les plus-values des particuliers.",
      payers:"Impôt dû dès des seuils bas, fixés par chaque canton.",src:["ch_fortune","ch_pib"]},
    isf:{label:"Ancien ISF français (2017)",pct:4.2/2291.7*100,
      d:"Rendement net de 4,2 Md€ en 2017, dernière année de l'ISF, pour un PIB de 2 291,7 Md€ : 0,18 % du PIB. Seuil de 1,3 M€.",
      payers:"Environ 1 % des foyers fiscaux.",src:["fr_isf","fr_pib17"]}
  };
  const IFI=3.095; // Voies et moyens tome I, PLF 2026, p. 23
  const WLEV={id:"x_patri",kind:"spec",label:"Impôt sur la fortune (rendement observé à l'étranger)",min:0,max:100,step:10,ramp:2,start:1,
    amtFn:()=>{const k=document.getElementById("x_patri_ref").value;return Math.max(0,WREF[k].pct*GDP0/100-(k==="itsgf"?0:IFI))},
    fmt:v=>v===0?"Non":v+" %",
    help:"Aucune administration française n'a chiffré un tel impôt. Le curseur applique au PIB français le rendement, en part de PIB, d'un impôt existant dans un pays comparable. Un impôt large sur la fortune remplacerait l'IFI (3,1 Md€ en 2026) : son rendement est retranché, sauf pour le modèle espagnol de solidarité, qui s'ajoute à l'impôt existant.",
    who:"Les détenteurs de patrimoine au-dessus du seuil retenu : très différent selon le modèle choisi.",
    per:v=>{const k=document.getElementById("x_patri_ref").value,r=WREF[k],g=r.pct*GDP0/100;return `${r.label} : ${fr(r.pct,2)} % du PIB, soit ${fr(g,1)} Md€ en France${k==="itsgf"?" (impôt ajouté à l'IFI)":", moins l'IFI actuel qu'il remplacerait (3,1 Md€)"} : ${sign(Math.max(0,g-IFI)*v/100,1)} Md€ par an de recettes nouvelles`},
    up:"Les patrimoines concernés paient un nouvel impôt chaque année. Le rendement réel en France dépendrait du seuil, du taux, des exonérations et des départs à l'étranger : les chiffres étrangers incluent déjà ces comportements chez eux, pas chez nous.",
    src:"fr_isf"};
  SPECIAL.push(WLEV);
  const MACRO=[
    {id:"rate",label:"Taux de refinancement de la dette",min:1,max:7,step:0.05,def:3.55,fmt:v=>fr(v,2)+" %",help:"Par défaut : taux moyen des émissions de l'État en 2026, 3,55 % au 30 septembre 2026 (Agence France Trésor). Le taux à 10 ans était de 4,74 % le 15 octobre 2026."},
    {id:"gr",label:"Croissance réelle à partir de 2028",min:0,max:3,step:0.1,def:1.0,fmt:v=>fr(v,1)+" %",help:"2026 et 2027 : prévisions du gouvernement, 0,5 % et 1,0 % (RESF 2027). Ensuite : prolongement de la prévision 2027. Hypothèse."},
    {id:"inf",label:"Inflation à partir de 2028",min:0,max:4,step:0.1,def:1.8,fmt:v=>fr(v,1)+" %",help:"2026 et 2027 : 2,1 % et 1,8 % (RESF 2027). Ensuite : prolongement de 2027. Hypothèse."},
    {id:"mat",label:"Maturité moyenne de la dette",min:3,max:15,step:0.5,def:8.5,fmt:v=>fr(v,1)+" ans",help:"8 ans et 158 jours au 30 septembre 2026 (Agence France Trésor)."},
    {id:"mes",label:"Effets des mesures sur l'activité",min:0,max:1,step:1,def:1,fmt:v=>v?"Variantes officielles":"Aucun (calcul comptable)",help:"Par défaut, chaque mesure produit l'effet sur la croissance et sur le solde public publié par la DG Trésor (modèle Mésange, 2017) ou le COR (2026) : une baisse de dépense ou une hausse d'impôt freine l'activité, ce qui fait perdre des recettes. Par exemple, 1 point de PIB d'économie sur la dépense n'améliore le solde que de 0,53 point la 1re année et 0,68 point à 10 ans. Ces modèles supposent des taux d'intérêt inchangés : si la baisse du déficit fait baisser les taux, l'effet est meilleur (curseur de taux ci-dessus). Mettez « Aucun » pour voir le calcul purement comptable."},
    {id:"prix",label:"Effets des mesures sur les prix",min:0,max:1,step:1,def:1,fmt:v=>v?"Comptés":"Ignorés",help:"La dette se mesure en euros : si une mesure fait baisser les prix, la richesse produite vaut moins d'euros et le ratio de dette se dégrade, et inversement. Les variantes de la DG Trésor donnent l'effet de chaque type de mesure sur les prix à la consommation, utilisés ici comme approximation des prix du PIB. Par exemple, 1 point de PIB d'économie sur la dépense publique fait baisser les prix de 0,6 % au bout de 2 ans et de 1,9 % au bout de 10 ans ; une hausse de TVA les fait monter. Ne joue que si les effets sur l'activité sont activés."},
    {id:"rlink",label:"Taux d'intérêt liés au niveau de la dette",min:0,max:1,step:1,def:1,fmt:v=>v?"Oui":"Non",help:"Quand la dette monte, les prêteurs demandent un taux plus élevé. La DG Trésor estime qu'1 point de PIB de dette en plus relève l'écart entre taux d'intérêt et croissance d'environ 2 points de base l'année suivante (fourchette de la littérature : 1 à 2,5). Le simulateur applique +0,02 point de taux par point de dette au-dessus de son niveau de fin 2025, sur les nouveaux emprunts. Une hausse des taux pèse aussi sur l'activité (variante « taux d'intérêt » du modèle Mésange)."},
    {id:"ms",label:"Effet sur l'activité des autres mesures",min:0,max:1.5,step:0.1,def:0,fmt:v=>fr(v,1),help:"Ne concerne que les mesures pour lesquelles aucune variante officielle n'existe : impôt sur les sociétés, taxe foncière, successions, IFI, tabac, impôt sur la fortune, lutte contre la fraude, niches des entreprises, « autres niches », taxe sur les achats d'actions et prélèvement sur les banques et l'énergie. Croissance perdue l'année où l'on fait 1 point de PIB d'effort ; 0 = calcul purement comptable. Toutes les autres lignes utilisent les variantes publiées par la DG Trésor (modèle Mésange) ou le COR."},
    {id:"dsante",label:"Dérive démographique de la santé et de la dépendance",min:0,max:0.1,step:0.001,def:(0.3+0.7)/48,fmt:v=>fr(v,3)+" pt de PIB par an",help:"Par défaut : hausse de 0,3 point de PIB pour la santé et de 0,7 point pour la dépendance entre 2022 et 2070 (rapport européen sur le vieillissement, cité par la Cour des comptes, décembre 2025, p. 85), répartie également sur la période. La Cour juge ces projections « conservatrices » : son scénario risqué atteint +1,1 point pour la santé, et la dépendance pourrait monter de 0,9 point (p. 78 et 80). Attention : le même rapport cite aussi, p. 78, une hausse de 0,7 point (et non 0,3) pour les dépenses de santé liées au vieillissement entre 2023 et 2070 ; avec ce chiffre, la valeur du curseur serait (0,7+0,7)/48 = 0,029."},
    {id:"deduc",label:"Effet de la baisse du nombre d'élèves",min:-0.05,max:0,step:0.001,def:-0.9/48,fmt:v=>fr(v,3)+" pt de PIB par an",help:"Par défaut : baisse de 0,9 point de PIB des dépenses d'éducation entre 2022 et 2070 à dépense par élève inchangée (même source, p. 80 et 85). Mettez 0 si les budgets de l'école ne suivent pas la baisse du nombre d'élèves."}
  ];
  const G_REAL=[0.5,1.0], G_INF=[2.1,1.8];
  const RDEF=3.55, D0=115.7, I0=1.96, DEF26=5.4, Y0=2026, YEARS=20, SEMI=0.5, PERSIST=0.8;
  const LPM=[0,6.2,11.2,15.7,19.2]; // Md€ au-dessus de 2026 (57,1) : 63,3 ; 68,3 ; 72,8 ; 76,3
  const SURTAXE=7.3;

  const L=[];SECTORS.forEach(s=>{s.total=s.lines.reduce((a,x)=>a+x.amt,0);s.lines.forEach(x=>{x.sector=s;x.kind=s.kind;L.push(x)})});
  const ALL=L.concat(SPECIAL);
  const $=id=>document.getElementById(id);
  const sw=(x,v)=>{ // effet sur le solde en Md€ à pleine montée (positif = améliore)
    if(x.swFn)return x.swFn(v);
    const a=x.amtFn?x.amtFn():x.amt;
    if(x.kind==="dep"||x.kind==="niche")return -a*v/100;
    return a*v/100;
  };
  const losing=(x,v)=>x.gain?v<0:(x.kind==="rec"||x.kind==="spec")?v>0:v<0;
  const PRESETS={sq:{},dep:{r_gen:-15,r_pub:-15,r_compl:-10.5,r_ns:-5,s_spe:-12.5,s_dent:-6.5,s_inf:-6.5,s_kine:-8,s_forf:-10.5,s_labo:-12.5,s_transp:-15,s_med:-15,s_dm:-12.5,s_ijm:-15,s_ijat:-15,s_hop:-8,s_fir:-10.5,f_af:-10,f_paje:-10,f_cmg:-10,f_ars:-10,f_pa:-30,f_ass:-21,e_are:-30,e_app:-30,e_trav:-30,e_apl:-16,d_scol:-15,d_sup:-6,d_rech:-6,g_ext:-21,g_apd:-30,a_ener:-31,a_eco:-31,a_agri:-21,a_cult:-21,a_om:-10,a_sport:-21,a_med:-21,c_rem:-18,c_ci:-20,c_inv:-10,n_cotis:-65,n_exoc:-65,n_exonc:-65,n_cir:-65,n_dom:-65,n_abat:-100,n_hsup:-100,n_autres:-65,ns_cse:-100,ns_rupt:-65,x_ref23:100,x_aod:1},
 rec:{r_gen:-4,r_pub:-4,s_med:-5,s_dm:-5,n_cotis:-35,n_cir:-65,n_dutreil:-100,n_dom:-65,n_abat:-100,n_trav:-80,n_resto:-100,n_hsup:-100,n_ep:-100,n_autres:-80,ns_ep:-80,ns_tr:-80,ns_cse:-80,ns_rupt:-80,t_fraude:50,t_tva:13,t_csg:13,t_ir:20.5,t_is:13.5,t_fonc:17,t_ticpe:8.5,t_succ:30,t_tabac:17,x_surtaxe:100},
 mix:{r_gen:-11.5,r_pub:-11.5,r_compl:-7.5,s_spe:-7.5,s_dent:-4,s_inf:-5.5,s_kine:-5.5,s_forf:-9,s_labo:-9,s_transp:-11.5,s_med:-13,s_dm:-9,s_ijm:-15,s_ijat:-9,s_hop:-5.5,f_af:-5,f_cmg:-5,f_pa:-18,e_are:-18,e_app:-30,e_trav:-18,e_apl:-10,d_scol:-3,g_apd:-30,a_ener:-28,a_eco:-18,c_rem:-10,c_ci:-13,n_cotis:-40,n_exoc:-40,n_cir:-55,n_dutreil:-90,n_dom:-55,n_abat:-90,n_hsup:-100,n_ep:-90,n_autres:-55,ns_ep:-90,ns_tr:-90,ns_cse:-90,t_fraude:40,t_csg:7.5,t_ir:15,t_is:9.5,t_succ:30,x_ref23:100,x_aod:1,x_surtaxe:100}
  };

  // ---------- Construction ----------
  const host=$("levers");
  const srcHtml=(k,note)=>`<div class="src"><b>Source</b><a href="${S[k][1]}" target="_blank" rel="noopener">${S[k][0]}</a>${note?". "+note:""}</div>`;
  const ctrlHtml=(x,s)=>`<div class="ctrl"><div class="top"><label for="${x.id}">${x.label}</label><output id="o-${x.id}"></output></div>
      ${x.amt&&s?`<span class="amt">${fr(x.amt,x.amt<10?2:1)} Md€ (${x.yr})</span>`:""}
      <input type="range" id="${x.id}" min="${s?s.min:x.min}" max="${s?s.max:x.max}" step="${s?s.step:x.step}" value="0">
      <small>${x.help}</small>
      <div class="effect" id="e-${x.id}"></div>
      <details class="more"><summary>Détails et source</summary><div class="fiche">
        <div><b>Qui est concerné</b>${x.who}</div>
        ${x.down?`<div><b>Si on baisse</b>${x.down}</div>`:""}
        ${x.up?`<div><b>Si on augmente</b>${x.up}</div>`:""}
        ${srcHtml(x.src,x.note)}</div></details></div>`;
  SECTORS.forEach((s,k)=>{
    if(s.hide)return;
    const sec=document.createElement("section");sec.className="panel";
    sec.innerHTML=`<div class="shead"><h3>${s.name}</h3><span class="tot zero" id="t-${s.id}"></span></div><span class="sbase">${s.base}</span>
      <div class="master"><div class="top"><label for="m-${s.id}">Curseur général</label><output id="mo-${s.id}"></output></div>
        <input type="range" id="m-${s.id}" min="${s.min}" max="${s.max}" step="${s.step}" value="0">
        <small id="mt-${s.id}"></small><small id="mp-${s.id}"></small></div>
      <div class="sactions"><button type="button" class="linkbtn" id="tg-${s.id}" aria-expanded="false" aria-controls="ln-${s.id}">Voir les ${s.lines.length} sous-catégories</button>
        <button type="button" class="linkbtn sub" data-reset="${s.id}">Remettre à zéro</button></div>
      <div id="ln-${s.id}" hidden><p class="sintro">${s.intro}</p><div class="lines">${s.lines.map(x=>ctrlHtml(x,s)).join("")}</div></div>`;
    host.appendChild(sec);
    const tg=$("tg-"+s.id);
    tg.addEventListener("click",()=>{const el=$("ln-"+s.id),open=el.hidden;el.hidden=!open;tg.setAttribute("aria-expanded",String(open));tg.textContent=open?"Replier les sous-catégories":`Voir les ${s.lines.length} sous-catégories`});
  });
  const sp=document.createElement("section");sp.className="panel";
  sp.innerHTML=`<h2>Mesures spécifiques</h2>`+SPECIAL.map(x=>ctrlHtml(x,null)).join("");
  host.appendChild(sp);
  { // sélecteur du modèle de référence pour l'impôt sur la fortune
    const ctrl=$("x_patri").closest(".ctrl");
    const sel=document.createElement("div");sel.className="ctrl";sel.style.borderTop="0";sel.style.paddingTop="0";
    sel.innerHTML=`<label for="x_patri_ref" style="font-size:13px">Pays ou modèle de référence</label>
      <select id="x_patri_ref" style="font:inherit;font-size:14px;padding:6px 8px;border:1px solid var(--line);border-radius:6px;background:var(--panel);color:var(--ink);max-width:100%">
      ${Object.entries(WREF).map(([k,r])=>`<option value="${k}">${r.label} (${fr(r.pct,2)} % du PIB)</option>`).join("")}</select>
      <small id="x_patri_desc"></small><small id="x_patri_pay"></small><div class="src" id="x_patri_src"></div>`;
    ctrl.querySelector("input").after(sel);
    const upd=()=>{const r=WREF[$("x_patri_ref").value];$("x_patri_desc").textContent=r.d;$("x_patri_pay").textContent="Contribuables : "+r.payers;
      $("x_patri_src").innerHTML="<b>Sources :</b> "+r.src.map(k=>`<a href="${S[k][1]}" target="_blank" rel="noopener">${S[k][0]}</a>`).join(" · ")};
    $("x_patri_ref").addEventListener("change",()=>{upd();render()});upd();
  }
  const mac=document.createElement("details");mac.className="panel macro";
  mac.innerHTML=`<summary>Hypothèses économiques</summary>`+MACRO.map(m=>`<div class="ctrl"><div class="top"><label for="${m.id}">${m.label}</label><output id="o-${m.id}"></output></div><input type="range" id="${m.id}" min="${m.min}" max="${m.max}" step="${m.step}" value="${m.def}"><small>${m.help}</small></div>`).join("");
  host.appendChild(mac);

  function read(){const p={};ALL.forEach(x=>p[x.id]=parseFloat($(x.id).value));MACRO.forEach(m=>p[m.id]=parseFloat($(m.id).value));return p}
  const sectorAvg=(s,p)=>s.lines.reduce((a,x)=>a+x.amt*p[x.id],0)/s.total;
  const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
  const snap=(v,st)=>Math.round(v/st)*st;

  // Curseur général : décale toutes les sous-lignes du même écart
  SECTORS.forEach(s=>{
    if(s.hide)return;
    const m=$("m-"+s.id);
    m.addEventListener("input",()=>{
      const p=read(),delta=parseFloat(m.value)-sectorAvg(s,p);
      s.lines.forEach(x=>{$(x.id).value=clamp(snap(p[x.id]+delta,s.step),s.min,s.max)});
      render(s.id);
    });
  });
  document.querySelectorAll("[data-reset]").forEach(b=>b.addEventListener("click",()=>{
    const s=SECTORS.find(z=>z.id===b.dataset.reset);s.lines.forEach(x=>$(x.id).value=0);render();
  }));

  // ---------- Modèle ----------
  const frac=(t,ramp)=>Math.min(1,Math.max(0,t/ramp));
  const gpath=(p,t)=>((1+(t<2?G_REAL[t]:p.gr)/100)*(1+(t<2?G_INF[t]:p.inf)/100)-1)*100;
  function drift(p,t){ // dégradation du solde à législation inchangée, en points de PIB
    const def=LPM[Math.min(t,4)]/GDP0*100;
    const ret=t<=4?0:Math.min(1,(t-4)/15)*0.1; // COR : 14,1 % du PIB en 2030, 14,2 % en 2045
    const sur=t>=1?SURTAXE/GDP0*100:0;
    return def+ret+sur+(p.dsante+p.deduc)*t;
  }

  // ---------- Effets sur l'activité : variantes officielles ----------
  // Pour 1 point de PIB d'effort (baisse de dépense ou hausse de prélèvement), à 1, 2, 3, 5 et 10 ans :
  // S = amélioration effective du solde primaire (en points de PIB, effets sur l'activité compris), Y = écart de PIB en volume (%).
  // Source : DG Trésor, Cahiers n° 2017-04, variantes du modèle Mésange (p. 102 à 120) ; pensions : COR, rapport annuel 2026, p. 20.
  const MES={
    dep:{l:"dépense publique (Mésange, p. 105)",S:[0.53,0.32,0.35,0.54,0.68],Y:[-0.78,-1.06,-1.03,-0.86,-0.53],P:[-0.20,-0.58,-0.94,-1.42,-1.88]},
    inv:{l:"investissement public (Mésange, p. 102)",S:[0.49,0.26,0.40,0.70,0.82],Y:[-1.31,-1.38,-1.22,-0.93,-0.57],P:[-0.31,-0.92,-1.37,-1.86,-2.25]},
    cotp:{l:"cotisations employeurs (Mésange, p. 107)",S:[0.72,0.42,0.27,0.24,0.17],Y:[-0.20,-0.55,-0.76,-0.97,-1.29],P:[0.36,0.70,0.87,1.09,1.32]},
    tva:{l:"TVA (Mésange, p. 112)",S:[0.80,0.36,0.28,0.37,0.44],Y:[-0.32,-0.66,-0.72,-0.81,-0.78],P:[1.48,1.58,1.52,1.30,0.89]},
    csg:{l:"CSG (Mésange, p. 115)",S:[0.81,0.50,0.43,0.52,0.54],Y:[-0.41,-0.84,-0.90,-0.81,-0.80],P:[-0.05,-0.24,-0.40,-0.50,-0.42]},
    ir:{l:"impôt sur le revenu (Mésange, p. 117)",S:[0.81,0.50,0.42,0.51,0.50],Y:[-0.41,-0.83,-0.88,-0.81,-0.87],P:[-0.04,-0.21,-0.34,-0.35,-0.14]},
    carb:{l:"fiscalité de l'énergie (Mésange, variante taxe carbone, p. 120)",S:[0.68,0.15,0.14,0.24,0.28],Y:[-0.51,-0.80,-0.75,-0.87,-0.86],P:[1.64,1.72,1.68,1.49,1.01]},
    pens:{l:"pensions (COR 2026, p. 20)",S:[0.5,0.5,0.5,0.5,0.5],Y:[-0.75,-0.75,-0.75,-0.75,-0.75],P:[0,0,0,0,0]},
    rate:{l:"taux d'intérêt (Mésange, p. 133)",S:[-0.04,-0.24,-0.36,-0.45,-0.69],Y:[-0.17,-0.60,-0.78,-1.00,-1.52],P:[0.10,0.32,0.52,0.96,2.11]}
  };
  const HZ=[1,2,3,5,10];
  const mesAt=(arr,tau)=>{if(tau<=1)return arr[0];if(tau>=10)return arr[4];for(let k=1;k<5;k++){if(tau<=HZ[k]){const a=HZ[k-1],b=HZ[k];return arr[k-1]+(arr[k]-arr[k-1])*(tau-a)/(b-a)}}return arr[4]};
  const CAT={x_alc:"tva",x_avion:"tva",x_maut:"carb",t_tva:"tva",n_trav:"tva",n_resto:"tva",t_csg:"csg",t_ir:"ir",t_ticpe:"carb",c_inv:"inv",
    n_cotis:"cotp",n_exoc:"cotp",n_exonc:"cotp",ns_psc:"cotp",ns_ep:"cotp",ns_tr:"cotp",ns_cse:"cotp",ns_transp:"cotp",ns_rupt:"cotp",ns_cv:"cotp",
    n_dom:"ir",n_abat:"ir",n_hsup:"ir",n_ep:"ir",n_dons:"ir",n_garde:"ir",n_exofam:"ir",n_pinel:"ir",
    r_gen:"pens",r_pub:"pens",r_compl:"pens",r_ns:"pens"};
  const catOf=x=>x.path||x.debt||x.sup?null:(CAT[x.id]||(x.kind==="dep"?"dep":null));
  // opts : {sched:[p2027,p2028,…] (mode mandat), shk:{g:[],r:[],pb:[]} (chocs), ovr:{…} (réglages forcés)}
  function simulate(p0,base,opts){
    opts=opts||{};const P0=Object.assign({},p0,opts.ovr||{});
    const pAt=t=>{const sc=opts.sched;if(!sc||!sc.length||t<1)return P0;return Object.assign({},P0,sc[Math.min(t,sc.length)-1])};
    const shk=opts.shk||{};
    let d=D0,i=I0,cyc=0,gdp=GDP0/(1+gpath(P0,0)/100),Lprev=0,Pprev=0;const out=[];
    const i1=I0+(P0.rate-I0)/P0.mat, PB0=-(DEF26-D0*i1/100/(1+gpath(P0,0)/100)); // calage sur le déficit officiel 2026
    const E=ALL.map(()=>[]),DR=[0];
    for(let t=0;t<YEARS;t++){
      const p=pAt(t);
      let sum=0,dc=0,fb=0,L=0,Pr=0,sale=0;const c=[];
      ALL.forEach((x,k)=>{
        const v=base?0:(p[x.id]||0), st=x.start||0;
        const e=x.path?x.path(t,v):(t<Math.max(st,1)?0:sw(x,v)/GDP0*100*(opts.sched?1:frac(st?t-st+1:t,x.ramp)));
        E[k][t]=e;sum+=e;c.push(e);
        if(x.debt&&!base)sale+=x.debt(t,v);
        if(x.sup&&v){for(let s0=1;s0<=Math.min(t,5);s0++){L+=v/5*mesAt(x.sup.Y,t-s0+1);if(p.prix)Pr+=v/5*mesAt(x.sup.P,t-s0+1)}}
        const cat=p.mes?catOf(x):null;
        if(cat){ // superposition des variantes officielles, année par année
          const M=MES[cat];
          for(let s0=1;s0<=t;s0++){const de=E[k][s0]-(E[k][s0-1]||0);if(de){const tau=t-s0+1;fb+=de*(mesAt(M.S,tau)-1);L+=de*mesAt(M.Y,tau);if(p.prix)Pr+=de*mesAt(M.P,tau)}}
        } else if(!x.path&&p.mes) dc+=p.ms*(e-(t?E[k][t-1]:0));
      });
      // taux des nouveaux emprunts : curseur + lien avec la dette (DG Trésor : +2 pb par point de dette) + chocs
      const rNew=p.rate+(p.rlink&&t>0?0.02*(d-D0):0)+((shk.r&&shk.r[t])||0);
      DR[t]=rNew-RDEF;
      if(p.mes&&p.rlink!==undefined){const M=MES.rate;for(let s0=1;s0<=t;s0++){const dr0=DR[s0]-(DR[s0-1]||0);if(dr0){const tau=t-s0+1;fb+=dr0*mesAt(M.S,tau);L+=dr0*mesAt(M.Y,tau);if(p.prix)Pr+=dr0*mesAt(M.P,tau)}}}
      const g=gpath(p,t)-dc+(L-Lprev)+(Pr-Pprev)+((shk.g&&shk.g[t])||0);Lprev=L;Pprev=Pr;
      cyc=PERSIST*cyc-dc-((shk.g&&shk.g[t])||0);
      const dr=drift(p,t), act=fb+SEMI*cyc, pb=PB0-dr+sum+act+((shk.pb&&shk.pb[t])||0);
      i=i+(rNew-i)/p.mat;
      const interest=d*i/100/(1+g/100);
      gdp*=1+g/100;
      d=d*(1+i/100)/(1+g/100)-pb-sale/gdp*100;
      out.push({y:Y0+t,d,pb,def:interest-pb,i,rNew,g,gdp,intPct:interest,intMd:interest/100*gdp,c,dr,cyc,act,L,Pr});
    }
    return out;
  }

  // ---------- Affichage ----------
  function fmtV(x,v){
    if(x.fmt)return x.fmt(v);
    if(v===0)return "0 %";
    if(x.kind==="niche"&&v<=-100)return "Supprimée";
    return P(v);
  }
  function lineEffect(x,v){
    if(Math.abs(v)<1e-9)return `<span class="solde zero">Aucun changement</span>`;
    const md=sw(x,v),lose=losing(x,v);
    let html=`<span class="solde ${md>0?"pos":"neg"}">${md>0?"Économie":"Coût"} pour les comptes publics : ${fr(Math.abs(md),2)} Md€ ${x.swFn&&x.path&&!x.debt?"par an au bout de 10 ans, effets sur l'emploi compris":"par an une fois appliqué"}</span>`;
    const ct=catOf(x);if(ct&&$("mes")&&+$("mes").value){const M=MES[ct];const yg=md/GDP0*100*M.Y[4];html+=`<span class="tr">Après effets sur l'activité : ${md>0?"gain":"coût"} réel d'environ ${fr(Math.abs(md*M.S[4]),2)} Md€ à 10 ans (${fr(M.S[4]*100,0)} %), et un PIB ${yg<0?"plus bas":"plus haut"} d'environ ${fr(Math.abs(yg),2)} %, d'après la variante ${M.l}.</span>`}
    if(x.tr)html+=`<span class="tr">${x.tr(v)}</span>`;
    const txt=(x.kind==="rec"||x.kind==="spec")?(v>0?x.up:x.down):(v<0?x.down:x.up);
    html+=`<span class="who"><span class="pill ${lose?"lose":"win"}">${lose?"Perdants":"Gagnants"}</span><span>${x.per?x.per(v)+". ":""}${txt||""}</span></span>`;
    return html;
  }
  function render(fromMaster){
    const p=read();
    ALL.forEach(x=>{$("o-"+x.id).textContent=fmtV(x,p[x.id]);$("e-"+x.id).innerHTML=lineEffect(x,p[x.id])});
    SECTORS.forEach(s=>{
      if(s.hide)return;
      const avg=sectorAvg(s,p),t=s.lines.reduce((a,x)=>a+sw(x,p[x.id]),0),z=Math.abs(avg)<1e-9;
      if(fromMaster!==s.id)$("m-"+s.id).value=clamp(snap(avg,s.step),s.min,s.max);
      $("mo-"+s.id).textContent=z?"0 %":P(Math.round(avg*10)/10);
      const e=$("t-"+s.id);e.textContent=Math.abs(t)<0.005?"0 Md€":(t>0?"+":"−")+fr(Math.abs(t),1)+" Md€";e.className="tot "+(t>0.005?"pos":t<-0.005?"neg":"zero");
      $("mt-"+s.id).textContent=z?"Fait varier toutes les sous-catégories ensemble. Dépliez le secteur pour les régler une par une.":s.tr(avg);
      $("mp-"+s.id).textContent=z?"":(s.per?s.per(avg,s.total):`Par habitant : ${sign(s.total*1000/POP*avg/100,0)} € par an de dépense publique`);
    });
    MACRO.forEach(m=>$("o-"+m.id).textContent=m.fmt(p[m.id]));

    const s=simulate(p,false),sq=simulate(p,true),at=(a,y)=>a.find(o=>o.y===y);
    $("k30").textContent=fr(at(s,2030).d)+" %";
    $("k30s").textContent="législation actuelle : "+fr(at(sq,2030).d)+" %";
    const last=s[s.length-1],prev=s[s.length-6],slope=(last.d-prev.d)/5;
    $("k45").textContent=fr(last.d)+" %";
    $("ktrend").innerHTML=slope>0.15?'<span class="pill lose">en hausse</span>':slope<-0.15?'<span class="pill win">en baisse</span>':'<span class="pill flat">stable</span>';
    let pk=s[0];s.forEach(o=>{if(o.d>pk.d)pk=o});
    $("kpk").textContent=fr(pk.d)+" %";
    $("kpky").textContent=pk.y===last.y?"toujours en hausse en 2045":"atteint en "+pk.y;
    $("kint").textContent=fr(last.intMd,0)+" Md€";
    $("kints").textContent=fr(last.intPct)+" % du PIB";
    [[2030,"kpib30"],[2035,"kpib35"]].forEach(([y,id])=>{const a=at(s,y),b=at(sq,y),vol=a.L-b.L,pr=a.Pr-b.Pr,eur=a.gdp-b.gdp;
      $(id).textContent=(Math.abs(vol)<0.005?"0,0":sign(vol,1))+" %";
      $(id+"s").textContent=Math.abs(vol)<0.005&&Math.abs(pr)<0.005?"par rapport à la législation actuelle":`prix ${Math.abs(pr)<0.005?"inchangés":sign(pr,1)+" %"} ; en euros : ${sign(eur,0)} Md€ de richesse produite dans l'année`;});

    // Bilan 2033, en Md€ de 2026
    const r33=at(s,2033),k=GDP0/100,rows=[];
    SECTORS.forEach(sc=>{const v=sc.lines.reduce((a,x)=>a+r33.c[ALL.indexOf(x)],0)*k;if(Math.abs(v)>=0.3)rows.push({name:sc.name,md:v})});
    SPECIAL.forEach(x=>{const v=r33.c[ALL.indexOf(x)]*k;if(Math.abs(v)>=0.3)rows.push({name:x.label,md:v})});
    rows.sort((a,b)=>b.md-a.md);
    rows.push({name:"Dérive à législation inchangée",md:-r33.dr*k,det:"Programmation militaire votée, fin de la surtaxe des grandes entreprises, retraites selon le COR"+", effets démographiques sur la santé, la dépendance et l'éducation (Cour des comptes)"});
    const cy=r33.act*k;if(Math.abs(cy)>=0.3)rows.push({name:"Effet des mesures sur l'activité",md:cy,det:"Recettes perdues et dépenses induites (chômage…) quand les mesures freinent l'activité, ou l'inverse : variantes officielles du modèle Mésange de la DG Trésor et du COR"});
    const mx=Math.max(1,...rows.map(o=>Math.abs(o.md)));
    $("bars").innerHTML=rows.map(o=>`<div class="bar"><div class="name"><span>${o.name}</span><div class="track"><div class="fill" style="width:${Math.abs(o.md)/mx*100}%;background:${o.md>=0?"var(--good)":"var(--warn)"}"></div></div>${o.det?`<span class="det">${o.det}</span>`:""}</div><span class="v">${sign(o.md,0)}</span></div>`).join("");
    $("pb33").textContent=sign(r33.pb)+" % du PIB";
    const gL=((1+p.gr/100)*(1+p.inf/100)-1)*100;
    const pbStar=r33.d*(p.rate-gL)/(100+gL),gap=(pbStar-r33.pb)*k;
    $("need").innerHTML=`Solde primaire qui stabilise la dette à son niveau de 2033 avec ces hypothèses : <strong>${sign(pbStar)} %</strong> du PIB. `+(gap>1?`Il manque environ <strong>${fr(gap,0)} Md€</strong> par an en 2033.`:`Objectif atteint en 2033, avec une marge d'environ ${fr(-gap,0)} Md€.`);

    // Personnes concernées
    const moved=ALL.filter(x=>Math.abs(p[x.id])>1e-9).map(x=>({x,v:p[x.id],md:sw(x,p[x.id])})).sort((a,b)=>Math.abs(b.md)-Math.abs(a.md));
    $("impacts").innerHTML=moved.length?moved.map(o=>{const lose=losing(o.x,o.v);
      return `<div class="imp"><span class="pill ${lose?"lose":"win"}">${lose?"Perdants":"Gagnants"}</span><span class="t">${o.x.label} (${fmtV(o.x,o.v)})</span><span class="d">${o.x.per?o.x.per(o.v):o.x.who}</span></div>`}).join("")
      :'<p class="empty">Aucune mesure pour l\'instant. Bougez un curseur pour voir qui gagne et qui perd.</p>';

    document.querySelectorAll("#presets button").forEach(b=>{const pr=PRESETS[b.dataset.p];b.classList.toggle("on",ALL.every(x=>Math.abs((pr[x.id]||0)-p[x.id])<1e-9))});
    // Fourchette : mêmes choix, sous les différentes hypothèses de modèle
    const combos=[{mes:0,prix:0,rlink:0},{mes:1,prix:0,rlink:0},{mes:1,prix:1,rlink:0},{mes:1,prix:1,rlink:1}];
    const vs=combos.map(c=>simulate(Object.assign({},p,c),false));
    const band=s.map((o,k)=>({y:o.y,lo:Math.min(...vs.map(v=>v[k].d)),hi:Math.max(...vs.map(v=>v[k].d))}));
    const b45=band[band.length-1];
    $("bandtxt").textContent=`Selon les hypothèses retenues, la dette de 2045 irait de ${fr(b45.lo,0)} % (calcul comptable, sans effet sur l'activité) à ${fr(b45.hi,0)} % du PIB.`;
    drawChart(s,sq,band);
    decile(p);
  }


  // ---------- Effet par niveau de vie (Drees, fiche 02, tableau 1, 2022) ----------
  const DEC={g:["10 % les plus modestes (sous D1)","De D1 à D2","De D2 à D3","De D3 à D4","60 % les plus aisés (au-dessus de D4)"],
    rev:[1159,1792,2202,2546,4613],
    sh:{ret:[22.4,32.0,36.1,34.2,25.7],chom:[7.8,5.6,4.7,3.4,1.7],min:[16.0,8.1,3.8,1.7,0.4],pa:[3.2,2.9,2.2,1.4,0.3],fam:[11.0,6.5,4.0,2.9,0.9],log:[11.8,5.1,2.1,0.8,0.2],imp:[-12.0,-7.1,-8.6,-10.2,-19.9]},
    map:{ret:["r_gen","r_pub","r_compl","r_ns"],chom:["e_are"],min:["r_mv","f_rsa","f_aah","f_ass"],pa:["f_pa"],fam:["f_af","f_cf","f_asf","f_ajpp","f_paje","f_cmg","f_prepare","f_ars","f_famaut"],log:["e_apl"],imp:["t_ir","t_csg"]}};
  const byId={};ALL.forEach(x=>byId[x.id]=x);
  function decile(p){
    const chg={};Object.entries(DEC.map).forEach(([k,ids])=>{const a=ids.reduce((s,id)=>s+byId[id].amt,0);chg[k]=ids.reduce((s,id)=>s+byId[id].amt*p[id],0)/a});
    const res=DEC.g.map((n,gi)=>{let pct=0;Object.keys(DEC.sh).forEach(k=>pct+=DEC.sh[k][gi]*chg[k]/100);return {n,pct,eur:DEC.rev[gi]*pct/100}});
    const mx=Math.max(0.5,...res.map(o=>Math.abs(o.pct)));
    $("dec").innerHTML=res.map(o=>`<div class="bar"><div class="name"><span>${o.n}</span><div class="track"><div class="fill" style="width:${Math.abs(o.pct)/mx*100}%;background:${o.pct>=0?"var(--good)":"var(--warn)"}"></div></div><span class="det">${Math.abs(o.eur)<0.5?"Aucun changement":sign(o.eur,0)+" € par mois pour un ménage moyen de ce groupe"}</span></div><span class="v">${Math.abs(o.pct)<0.005?"0 %":sign(o.pct,1)+" %"}</span></div>`).join("");
    return res;
  }
  let pts=[];
  function drawChart(s,sq,band){
    const svg=$("chart"),W=720,H=280,Lm=46,R=16,T=14,B=30;
    const all=s.map(o=>o.d).concat(sq.map(o=>o.d),[D0],band?band.map(o=>o.lo).concat(band.map(o=>o.hi)):[]);
    const lo=Math.max(0,Math.floor((Math.min(...all)-5)/10)*10),hi=Math.ceil((Math.max(...all)+5)/10)*10;
    const yEnd=s[s.length-1].y,x=y=>Lm+(y-2025)/(yEnd-2025)*(W-Lm-R),yv=v=>T+(hi-v)/(hi-lo)*(H-T-B);
    let g="";const st=(hi-lo)>80?20:10;
    for(let v=lo;v<=hi;v+=st)g+=`<line x1="${Lm}" x2="${W-R}" y1="${yv(v)}" y2="${yv(v)}" stroke="var(--line)" stroke-width="1"/><text x="${Lm-8}" y="${yv(v)+4}" text-anchor="end">${v}</text>`;
    [2025,2030,2035,2040,2045].forEach(y=>g+=`<text x="${x(y)}" y="${H-8}" text-anchor="middle">${y}</text>`);
    const line=a=>"M"+[[2025,D0]].concat(a.map(o=>[o.y,o.d])).map(([a,b])=>x(a).toFixed(1)+","+yv(b).toFixed(1)).join(" L");
    const spth=line(s);
    if(band){const up=band.map(o=>x(o.y).toFixed(1)+","+yv(o.hi).toFixed(1)),dn=band.slice().reverse().map(o=>x(o.y).toFixed(1)+","+yv(o.lo).toFixed(1));
      g+=`<path d="M${x(2025)},${yv(D0)} L${up.join(" L")} L${dn.join(" L")} Z" fill="var(--accent)" fill-opacity="0.13"/>`;}
    g+=`<path d="${line(sq)}" fill="none" stroke="var(--ghost)" stroke-width="2" stroke-dasharray="5 4"/>`;
    g+=`<path d="${spth}" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>`;
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
    let best=null;pts.forEach(q=>{if(!best||Math.abs(q.px-sx)<Math.abs(best.px-sx))best=q});if(!best)return;
    const h=$("hov");h.setAttribute("x1",best.px);h.setAttribute("x2",best.px);h.setAttribute("visibility","visible");
    tip.hidden=false;tip.textContent=`${best.o.y} · vos choix ${fr(best.o.d)} % · législation actuelle ${fr(best.q.d)} %`;
    tip.style.left=Math.min(Math.max(0,best.px/720*r.width-tip.offsetWidth/2),r.width-tip.offsetWidth)+"px";tip.style.top="0px";
  });
  box.addEventListener("pointerleave",()=>{tip.hidden=true;const h=$("hov");if(h)h.setAttribute("visibility","hidden")});

  // Notes et sources
  const used=Object.keys(S);
  $("notes").innerHTML=`
    <p><strong>Comment c'est calculé.</strong> Chaque ligne part de son montant officiel. Le curseur fait varier ce montant en % ; l'effet direct sur le solde est ce pourcentage appliqué au montant. S'y ajoute l'effet de la mesure sur l'activité, repris des variantes officielles : modèle Mésange de la DG Trésor (Cahiers n° 2017-04, p. 102 à 120) pour la dépense publique, l'investissement public, les cotisations employeurs, la TVA, la CSG, l'impôt sur le revenu et la fiscalité de l'énergie ; COR (rapport 2026, p. 20) pour les pensions et l'âge de départ. Pour chaque type de mesure, ces variantes donnent l'amélioration réelle du solde et l'écart de PIB à 1, 2, 3, 5 et 10 ans pour 1 point de PIB d'effort ; le simulateur les applique à chaque hausse de l'effort, année après année. Résultat : il faut un effort direct nettement plus grand que le déficit à combler, car une partie de l'économie est reperdue en activité. Ces variantes donnent aussi l'effet sur les prix, compté car la dette se mesure en euros. Enfin, le taux des nouveaux emprunts monte de 0,02 point par point de dette au-dessus de son niveau de fin 2025 (DG Trésor, Trésor-Éco n° 334, 2023), et un taux plus élevé freine l'activité (variante « taux d'intérêt » de Mésange, p. 133). Chacun de ces trois mécanismes peut être désactivé dans les hypothèses économiques ; la zone colorée du graphique montre l'écart entre le calcul comptable et le calcul complet. Les montants sont convertis en points de PIB avec le PIB 2026 (environ 3 068 Md€ : PIB 2025 de l'Insee, augmenté de la croissance et de l'inflation prévues par le RESF 2027). Ils restent ceux de l'année indiquée, sans actualisation. Chaque mesure monte en charge progressivement à partir de 2027, puis reste constante en part du PIB.</p>
    <p><strong>Scénario de base (« législation actuelle »).</strong> Déficit 2026 calé sur la prévision officielle de 5,4 % du PIB (projet de loi de finances 2027). Ensuite, sans nouvelle mesure : hausse des crédits des armées prévue par la programmation militaire actualisée (57,1 Md€ en 2026, 76,3 Md€ en 2030, hors pensions), fin de la surtaxe des grandes entreprises prévue par la loi (environ 7,3 Md€ en 2026), poids des retraites selon le COR (14,1 % du PIB en 2030, 14,2 % en 2045), effets démographiques sur la santé (+0,3 point de PIB d'ici 2070), la dépendance (+0,7 point) et l'éducation (−0,9 point) selon le rapport européen sur le vieillissement cité par la Cour des comptes (décembre 2025). Les mesures du projet de budget 2027 (environ 54 Md€ d'effort annoncé) ne sont pas incluses : c'est à vous de choisir les vôtres.</p>
    <p><strong>Dette et intérêts.</strong> Dette de 115,7 % du PIB fin 2025 (Insee). Chaque année, une fraction 1/maturité de la dette est refinancée au taux choisi ; le taux moyen de départ est déduit des intérêts 2025 (64,7 Md€, Insee).</p>
    <p><strong>Ce qui est une hypothèse et non un chiffre officiel.</strong> La croissance et l'inflation après 2027 ; le classement de chaque ligne dans une variante officielle (par exemple, les niches fiscales des ménages traitées comme l'impôt sur le revenu, les niches sociales comme les cotisations employeurs, les accises sur l'alcool et la taxe sur les billets d'avion comme la TVA, la redevance poids lourds comme la fiscalité de l'énergie) ; les lignes droites tracées entre les horizons publiés (1, 2, 3, 5 et 10 ans pour Mésange ; 2, 10 et 20 ans pour le COR) et le maintien de la valeur à 10 ans au-delà ; pour les pensions, le milieu de la fourchette de PIB du COR ; l'absence d'effet sur l'activité (réglable) pour les mesures sans variante officielle : impôt sur les sociétés, taxe foncière, successions, IFI, tabac, impôt sur la fortune, fraude, niches des entreprises et « autres niches » ; les variantes Mésange datent de 2017 ; l'évolution des prix à la consommation y sert d'approximation des prix du PIB ; les pensions n'ont pas d'effet sur les prix, le COR ne le chiffrant pas ; l'élasticité des taux à la dette est appliquée au niveau de la dette, alors que la DG Trésor l'estime sur l'écart entre taux et croissance ; l'effet des taux sur l'activité reprend une variante qui porte sur les taux réels de toute l'économie ; l'effet par niveau de vie suppose que chaque ménage voit sa prestation ou son impôt varier du même pourcentage, et traite l'impôt sur le revenu et la CSG ensemble (la Drees ne les sépare pas) ; la répartition régulière, année par année, des effets démographiques projetés à 2070 pour la santé, la dépendance et l'éducation. Les montants moyens par personne sont, pour les prestations sociales, ceux publiés par la Drees (2023) ou la Cnaf (2026) ; pour les autres lignes, des divisions de montants officiels par des effectifs officiels, signalées dans chaque fiche.</p>
    <p><strong>Ce qui n'est pas couvert, faute de chiffrage officiel accessible.</strong> un recul de l'âge de départ de plus d'un an au-delà de 64 ans ; le coût d'un point d'indice de la fonction publique ; les cotisations de retraite encore comprises dans les petites missions de l'État ; les dépenses de l'État non détaillées ici (gestion des finances publiques, administration territoriale, pouvoirs publics…).</p>
    <p><strong>Retraites : correction d'octobre 2026.</strong> Le curseur sur la réforme de 2023 reprenait le rendement de la réforme entière (12,9 Md€ en 2030). Or la loi n'a suspendu la réforme que pour les générations 1964 à 1968 : le COR chiffre le coût de la suspension à 1,8 Md€ par an en moyenne jusqu'en 2032, puis plus rien (rapport annuel juin 2026, p. 7 et 57). Le curseur a été corrigé, et un nouveau curseur chiffre un recul de l'âge légal à 65 ans d'après le même rapport (p. 20).</p>
    <p><strong>Octobre 2026 : effets sur l'activité.</strong> Jusqu'ici, la plupart des mesures étaient comptées sans effet sur l'activité. Avec les variantes officielles, un même effort direct améliore beaucoup moins la dette : les scénarios d'exemple ont dû être portés d'environ 140 à 220-270 Md€ d'effort direct par an pour stabiliser la dette, une fois comptés aussi les effets sur les prix et le lien entre dette et taux. Avec le calcul comptable, environ 140 Md€ suffisent.</p>
    <p><strong>Santé.</strong> Les soins de ville sont détaillés sur le champ du régime général (la grande majorité des assurés), avant les remises des laboratoires, d'après les Comptes de la Sécurité sociale d'octobre 2026 ; les hôpitaux et établissements médico-sociaux reprennent l'objectif 2026 voté. Les autres régimes d'assurance maladie et les remises ne sont donc pas inclus dans les lignes de soins de ville.</p>
    <p><strong>Leviers de croissance.</strong> Deux curseurs reprennent les variantes « structurelles » du modèle Mésange : une hausse de la population active et une hausse de l'efficacité du travail, chacune atteinte progressivement en 5 ans. Ils augmentent le PIB en volume (+0,61 % à 10 ans pour 1 %) mais améliorent peu le solde public, car l'économie met plusieurs années à absorber le choc. Ils font aussi baisser les prix (environ −0,9 à −1,1 % à 10 ans), ce qui réduit la valeur en euros du PIB : avec les effets sur les prix activés, leur gain sur le ratio de dette est donc faible. D'autres curseurs soutiennent aussi la croissance : le recul de l'âge de départ (COR), une hausse de l'investissement public ou une baisse des cotisations patronales, mais ces deux derniers coûtent de l'argent.</p>
    <p><strong>Nouvelles recettes inspirées de l'étranger.</strong> Les cinq prélèvements étrangers de la rubrique « Mesures éprouvées » (poids lourds, alcool, billets d'avion, achats d'actions, banques et énergie) ont leur curseur dans leur fiche. Comme pour l'impôt sur la fortune, ils transposent le rendement officiel d'un prélèvement existant (Allemagne, Royaume-Uni, Espagne) en part de PIB, puis retranchent le rendement de l'équivalent français quand il existe. Les années de référence diffèrent légèrement (2023 à 2026) ; elles sont indiquées dans chaque fiche.</p>
    <p><strong>Impôt sur la fortune.</strong> Aucune administration française n'a publié de chiffrage d'un impôt sur les très hauts patrimoines. Le curseur reprend donc le rendement, en part du PIB, des impôts sur la fortune existant en Espagne, en Norvège et en Suisse (sources officielles nationales), ou de l'ancien ISF français, et l'applique au PIB français. C'est une transposition, pas une prévision : le rendement réel dépendrait du seuil, du taux, des exonérations et des comportements en France.</p>
    <p><strong>Vérification d'octobre 2026.</strong> Chaque montant a été recoupé avec le document source (loi de finances, comptes de la Sécurité sociale, Cnaf, Drees, Voies et moyens, annexes du budget de la Sécurité sociale, COR, Cour des comptes, Insee, Sénat). Corrections faites : cotisations de retraite retirées de la ligne police et gendarmerie (−8,2 Md€), minimum vieillesse aligné sur la Drees (4,1 Md€), montant des remises des laboratoires, coût de la suspension de la réforme 2023. Pour les niches fiscales, la fiche indique la fiabilité donnée par l'administration : quatre ne sont connues qu'en « ordre de grandeur ». Limite restante : les autres missions de l'État (action extérieure, écologie, agriculture, culture…) comprennent encore les cotisations de retraite de leurs agents, faute de montant publié pour chacune ; l'économie y est donc un peu surestimée.</p>
    <p><strong>Années et périmètres.</strong> Les crédits des missions de l'État sont ceux votés par la loi de finances du 19 février 2026 (état B). Ils comprennent les cotisations de retraite des agents ; pour l'école, la justice et les armées, celles-ci sont retirées à l'aide des montants publiés par le Sénat, pour ne pas les compter deux fois avec les retraites. Le détail de certaines lignes (prime d'activité, aide aux apprentis, allocations de solidarité) vient du projet de loi, la loi n'étant votée que par programme. Les pensions par régime sont les montants 2023 publiés par la Drees, arrondis au milliard ; la retraite du combattant et les autres pensions versées par l'État au titre de l'intervention sociale (1 Md€) n'ont pas de curseur.</p>
    <p><strong>Sources.</strong></p><ul>${used.map(k=>`<li><a href="${S[k][1]}" target="_blank" rel="noopener">${S[k][0]}</a></li>`).join("")}</ul>`;


  // ---------- Mesures éprouvées ----------
  const MEAS=[
    {id:"age",o:"fr",fx:["croissance","economies"],t:"Reculer l'âge légal de départ",w:"France, 2010 et 2023",
     k:"L'âge légal est passé de 60 à 62 ans (2010), puis de 62 à 64 ans (2023). C'est le levier qui améliore le plus le solde public tout en augmentant le PIB.",
     who:"<b>2010</b> : gouvernement Fillon, présidence Sarkozy, UMP (droite). <b>2023</b> : gouvernement Borne, présidence Macron, Renaissance (centre) ; loi adoptée sans vote final grâce à l'article 49.3. La réforme de 2023 a été en partie suspendue par la loi de financement de la Sécurité sociale pour 2026.",
     what:"Relèvement progressif, génération par génération, de l'âge à partir duquel on peut toucher sa retraite, et en 2023 accélération de la hausse de la durée de cotisation.",
     num:"Selon le COR (2026), un an de plus d'âge légal améliore le solde public de 0,3 à 0,6 point de PIB au bout de 10 ans, effets sur l'emploi compris, et crée 160 000 à 250 000 emplois. La réforme de 2023 devait améliorer le solde des retraites de 12,9 Md€ en 2030 (Sénat).",
     res:"Pour la réforme de 2010, une étude publiée par le COR (2016) trouve une hausse de 14 points du taux d'emploi à 60 ans ; mais environ un tiers des économies est reperdu en chômage, arrêts maladie et invalidité supplémentaires.",
     sim:"Curseur « Reculer l'âge légal d'un an de plus (65 ans) ».",act:[{l:"Appliquer : âge légal à 65 ans",set:{x_aod:1}}],see:"x_aod",src:["cor26","cor_2010","senat_375"]},
    {id:"cice",o:"fr",fx:["croissance"],t:"Baisser le coût du travail : du CICE aux allègements de cotisations",w:"France, depuis 2013",
     k:"Un crédit d'impôt proportionnel aux salaires jusqu'à 2,5 Smic, transformé en 2019 en baisse permanente des cotisations patronales.",
     who:"<b>Création</b> : gouvernement Ayrault, présidence Hollande, PS (gauche, social-démocrate), après le rapport Gallois sur la compétitivité (2012). <b>Transformation en allègements</b> : gouvernement Philippe, présidence Macron, LREM (centre), en 2019.",
     what:"Les entreprises déduisaient de leur impôt un pourcentage de leur masse salariale (taux ramené à 6 % en 2018). Depuis 2019, la baisse passe directement par les cotisations, ce qui en fait l'essentiel des 74 Md€ d'allègements actuels.",
     num:"Coût du CICE : 20,1 Md€ en 2018 (Sénat). France Stratégie (2020) estime l'effet à environ 100 000 emplois créés ou sauvegardés selon les études d'entreprises, et autour de 160 000 en tenant compte de son financement selon les modèles macroéconomiques, des chiffres que l'organisme juge fragiles.",
     res:"Effet réel sur l'emploi, mais coût élevé par emploi ; effets sur les salaires, l'investissement et les exportations difficiles à établir. Le modèle Mésange de la DG Trésor donne à long terme +1,7 % de PIB pour 1 point de PIB de baisse des cotisations patronales.",
     sim:"Curseur « Allègements généraux de cotisations patronales » (aides aux entreprises) : le réduire rapporte de l'argent mais coûte des emplois.",act:[{l:"Renforcer les allègements de 10 %",set:{n_cotis:10}}],see:"n_cotis",src:["fs_cice","senat_cice","mesange"]},
    {id:"chom",o:"fr",fx:["economies","croissance"],t:"Durcir les règles de l'assurance chômage",w:"France, 2019-2021",
     k:"Il faut avoir travaillé plus longtemps pour être indemnisé, l'allocation est calculée autrement, et elle baisse au bout de 6 mois pour les hauts salaires.",
     who:"Gouvernements Philippe puis Castex, présidence Macron, LREM (centre).",
     what:"Quatre volets : 6 mois de travail sur 24 au lieu de 4 sur 28 pour ouvrir des droits, nouveau calcul de l'allocation pour les carrières hachées, dégressivité au-delà d'environ 4 500 € brut, bonus-malus sur les cotisations des entreprises qui abusent des contrats courts. Une nouvelle réforme a suivi en 2023.",
     num:"Économies estimées par l'Unédic : 0,8 Md€ (conditions d'accès), 1,0 Md€ (calcul) et 0,5 Md€ (dégressivité) par an, soit 2,3 Md€, moins environ 0,8 Md€ de dépenses nouvelles (aide aux démissionnaires porteurs de projet, financement de France Travail).",
     res:"Environ 1,5 million de personnes concernées ; 190 000 personnes par an ne sont plus indemnisées. Retour à l'emploi plus rapide : la part des personnes aux carrières hachées qui retrouvent un emploi en 6 mois passe de 52 % à 56-58 %, surtout en contrats courts ; la dégressivité réduit le chômage de 24 jours en moyenne.",
     sim:"Curseur « Allocations chômage » (emploi et logement).",act:[{l:"Appliquer : −7 % sur les allocations (≈ 2,3 Md€)",set:{e_are:-7}}],see:"e_are",src:["unedic_eval"]},
    {id:"app",o:"fr",fx:["croissance","economies"],t:"Développer l'apprentissage",w:"France, depuis 2018",
     k:"Une libéralisation de l'offre de formation en 2018, puis une aide massive à l'embauche d'apprentis à partir de 2020 : les entrées en apprentissage ont presque triplé.",
     who:"Loi « Avenir professionnel » de 2018, gouvernement Philippe, LREM (centre) ; aide exceptionnelle à l'embauche de 2020, gouvernement Castex. Aide réduite depuis 2025.",
     what:"Financement des centres de formation au contrat, ouverture à tous les niveaux de diplôme, aide versée à l'employeur pour chaque apprenti embauché.",
     num:"Entrées en apprentissage : 321 038 en 2018, 852 000 en 2023. Dépense publique : 13,9 Md€ en 2022 selon la direction du budget (19,9 Md€ en coût complet selon l'OFCE), dont 4,8 Md€ d'aides à l'embauche. L'IGF et l'IGAS (2024) identifient 1,5 Md€ d'économies et 0,4 Md€ de recettes possibles, par exemple 554 M€ en supprimant l'aide pour les diplômes de niveau licence et plus dans les entreprises de 250 salariés et plus.",
     res:"62 % des nouveaux apprentis préparent un diplôme supérieur au bac en 2023 : l'aide profite de plus en plus à des jeunes qui auraient sans doute trouvé un emploi sans elle (effet d'aubaine signalé mais non chiffré par les inspections).",
     sim:"Curseur « Aide à l'embauche d'apprentis » (emploi et logement).",act:[{l:"Appliquer : fin de l'aide au-delà du bac dans les grandes entreprises (−554 M€)",set:{e_app:-23}}],see:"e_app",src:["igf_app","senat_travail"]},
    {id:"rgpp",o:"fr",fx:["economies"],t:"Réduire les effectifs de l'État (RGPP)",w:"France, 2007-2012",
     k:"Revue générale des politiques publiques, avec la règle du non-remplacement d'un fonctionnaire sur deux partant à la retraite.",
     who:"Gouvernement Fillon, présidence Sarkozy, UMP (droite). Arrêtée en 2012 par le gouvernement Ayrault, PS (gauche).",
     what:"Revue des missions de chaque ministère, fusions de services, non-remplacement d'un départ à la retraite sur deux, avec la moitié des économies rendue aux agents sous forme de primes et de mesures catégorielles.",
     num:"Environ 11,9 Md€ d'économies fin 2012 selon la direction du budget, pour un objectif de 15 Md€ sur 2009-2013. Effectifs de l'État : −5,4 % entre 2009 et 2012, dont 3 points attribuables à la RGPP.",
     res:"Le bilan des inspections (2012) juge la démarche « novatrice » mais trop rapide et centralisée, limitée à l'État (moins d'un tiers de la dépense publique), mal mesurée et mal vécue par les agents.",
     sim:"Curseurs des missions de l'État (éducation, défense, sécurité, justice, autres missions). Pas de bouton : l'effort de la RGPP portait sur de nombreuses lignes.",act:[],see:null,src:["rgpp"]},
    {id:"ecotaxe",o:"fr",fx:["recettes","contre"],t:"Taxer les poids lourds : l'écotaxe abandonnée",w:"France, 2009-2014",
     k:"Une redevance kilométrique pour les camions sur les routes nationales et départementales, votée puis abandonnée juste avant son lancement.",
     who:"<b>Vote</b> : loi Grenelle de 2009, gouvernement Fillon, UMP (droite), adoptée presque à l'unanimité. <b>Suspension</b> : octobre 2013, gouvernement Ayrault, PS (gauche), après le mouvement des « bonnets rouges ». <b>Abandon</b> : octobre 2014, gouvernement Valls, PS (ministre de l'Écologie : Ségolène Royal).",
     what:"Péage électronique pour les camions de plus de 3,5 tonnes, géré par la société Ecomouv', dont le contrat a été résilié.",
     num:"Recettes nettes attendues : près de 890 M€ par an. Coût de l'abandon selon la Cour des comptes : près d'1 Md€ d'indemnisations et près de 10 Md€ de recettes perdues sur 2014-2024.",
     res:"La Cour des comptes parle d'« échec stratégique » et d'« abandon coûteux ». L'Allemagne applique un système comparable depuis 2005 (voir la fiche étrangère).",
     sim:"Curseur « Redevance kilométrique poids lourds (modèle allemand) ». 10 % du modèle allemand correspond à peu près au rendement attendu de l'écotaxe.",act:[{l:"Appliquer : niveau de l'écotaxe (≈ 0,9 Md€)",set:{x_maut:10}},{l:"Modèle allemand complet",set:{x_maut:100}}],see:"x_maut",src:["cdc_ecotaxe","de_maut"]},
    {id:"ttf",o:"fr",fx:["recettes"],t:"Taxer les transactions financières",w:"France, depuis 2012",
     k:"Une taxe sur les achats d'actions des grandes sociétés françaises, relevée deux fois.",
     who:"<b>Création</b> : 2012, gouvernement Fillon, UMP (droite). <b>Taux porté à 0,3 %</b> : 2017, sous la présidence Hollande, PS (gauche). <b>Taux porté à 0,4 %</b> : 2025, gouvernement Bayrou, MoDem (centre).",
     what:"0,4 % du prix d'achat des actions des sociétés françaises de plus d'1 Md€ de capitalisation.",
     num:"2 630 M€ prévus en 2026 (Voies et moyens, tome I, PLF 2026).",
     res:"Rendement en hausse avec les relèvements de taux. Le Royaume-Uni taxe tous les achats d'actions à 0,5 % (voir la fiche étrangère).",
     sim:"Curseur « Taxe sur les achats d'actions (droit de timbre britannique) », qui ajoute la différence avec le modèle britannique.",act:[{l:"Appliquer : modèle britannique (+0,9 Md€)",set:{x_titres:100}}],see:"x_titres",src:["vm1","uk_stamp"]},
    {id:"surtaxe",o:"fr",fx:["recettes"],t:"Surtaxe des grandes entreprises et contribution des très hauts revenus",w:"France, 2025-2026",
     k:"Deux prélèvements « exceptionnels » créés pour réduire le déficit, puis reconduits.",
     who:"Loi de finances 2025 : gouvernement Barnier, LR (droite) avec Renaissance, MoDem et Horizons (centre). Reconduits par la loi de finances 2026.",
     what:"Surtaxe d'impôt sur les sociétés pour les groupes de plus de 1,5 Md€ de chiffre d'affaires en 2026 ; contribution qui garantit un taux d'imposition minimal de 20 % aux foyers déclarant plus de 250 000 € (personne seule) ou 500 000 € (couple), jusqu'à ce que le déficit passe sous 3 %.",
     num:"Surtaxe : 8 Md€ prévus en 2025 (Voies et moyens), 7,3 Md€ en 2026 (Sénat). Contribution des hauts revenus : 1,5 Md€ au titre de 2026 (Voies et moyens).",
     res:"La contribution des hauts revenus est déjà comprise dans le scénario de base. La surtaxe est supposée s'arrêter après 2026, comme le prévoit la loi ; le projet de budget 2027 propose de la prolonger avec des taux plus bas.",
     sim:"Curseur « Prolonger la surtaxe des grandes entreprises après 2026 ».",act:[{l:"Appliquer : prolonger la surtaxe",set:{x_surtaxe:100}}],see:"x_surtaxe",src:["vm1","senat_312"]},
    {id:"isf",o:"fr",fx:["recettes"],t:"Remplacer l'ISF par l'IFI et créer la « flat tax »",w:"France, 2018",
     k:"L'impôt sur la fortune a été limité à l'immobilier, et les revenus du capital taxés à 30 % tout compris.",
     who:"Gouvernement Philippe, présidence Macron, LREM (centre), loi de finances 2018.",
     what:"Suppression de l'impôt sur la fortune (ISF), remplacé par l'impôt sur la fortune immobilière (IFI), et prélèvement forfaitaire unique de 30 % sur les dividendes, intérêts et plus-values.",
     num:"Selon le comité d'évaluation de France Stratégie (2023), le remplacement de l'ISF par l'IFI coûte environ 3,1 Md€ en 2018 et 4,5 Md€ en 2022. Les dividendes déclarés par les ménages passent de 14 Md€ par an (2013-2017) à environ 23 Md€ (2018-2020) ; le comité juge le prélèvement forfaitaire « autofinancé ».",
     res:"Aucun effet détecté sur l'investissement ou les salaires des entreprises concernées. Retours de contribuables aisés supérieurs aux départs (380 contre 260 par an), mais sur de petits nombres. « Beaucoup de questions restent ouvertes », conclut le comité.",
     sim:"Curseur « Impôt sur la fortune » avec le modèle « ancien ISF français ».",act:[{l:"Appliquer : rétablir un ISF au rendement de 2017",set:{x_patri_ref:"isf",x_patri:100}}],see:"x_patri",src:["fs_isf","fr_isf"]},
    {id:"fraude",o:"fr",fx:["recettes"],t:"Renforcer la lutte contre la fraude",w:"France, depuis 2018",
     k:"Ciblage des contrôles par l'exploitation des données, sanctions renforcées, contrôles des prestations et du travail dissimulé.",
     who:"Loi du 23 octobre 2018 relative à la lutte contre la fraude, gouvernement Philippe, LREM (centre) ; poursuivie depuis par les gouvernements successifs.",
     what:"Contrôle fiscal ciblé par l'analyse des données, contrôles automatisés des Caf, lutte de l'Urssaf contre le travail dissimulé.",
     num:"2025 : 11,4 Md€ encaissés après contrôle fiscal pour 17,1 Md€ notifiés ; 509 M€ de fraudes aux prestations détectées par les Caf ; 1,5 Md€ de redressements pour travail dissimulé, mais seulement environ 150 M€ recouvrés par l'Urssaf.",
     res:"Les montants détectés progressent, mais l'écart entre sommes réclamées et sommes encaissées reste important, surtout pour le travail dissimulé.",
     sim:"Catégorie « Lutte contre la fraude ».",act:[{l:"Exemple : +20 % sur les sommes récupérées",set:{t_fraude:20,fr_caf:20,fr_urssaf:20}}],see:"t_fraude",src:["eco_fraude","caf_fraude","urssaf_fraude"]},

    {id:"canada",o:"et",fx:["economies"],t:"Revoir toutes les dépenses de l'État",w:"Canada, 1994-1998",
     k:"La « revue des programmes » : chaque ministère a dû justifier chacune de ses missions. Le déficit fédéral a disparu en quatre ans.",
     who:"Gouvernement Chrétien, ministre des Finances Paul Martin, Parti libéral du Canada (centre).",
     what:"Six questions posées à chaque programme (intérêt public, rôle de l'État, possibilité de le confier à d'autres, efficacité, coût), coupes décidées ministère par ministère, budget de 1995.",
     num:"Déficit fédéral d'environ 5,3 % du PIB vers 1993, premier excédent en 1997-98 (le premier depuis 28 ans). Dépenses de programmes : 16,8 % du PIB en 1993-94, 12,1 % en 1999-2000. 45 000 postes de fonctionnaires fédéraux en moins (−19 % en cinq ans). Dette fédérale : près de 70 % du PIB en 1995-96, 29,8 % en 2007-08.",
     res:"Réussite budgétaire durable, aidée par une forte croissance et la baisse des taux à la fin des années 1990 ; une partie de l'effort a reposé sur la baisse des transferts aux provinces. Le récit vient d'une haute fonctionnaire qui a dirigé l'opération.",
     sim:"Pas de bouton : l'équivalent porterait sur toutes les missions de l'État. Une baisse de 10 % des missions de l'État serait du même ordre que l'effort canadien.",act:[],see:null,src:["ca_bourgon"]},
    {id:"suede",o:"et",fx:["economies","recettes"],t:"Assainir en quatre ans puis graver des règles",w:"Suède, 1994-1998",
     k:"Après une crise bancaire, un programme de redressement mêlant économies et hausses d'impôts, suivi de règles budgétaires durables.",
     who:"Gouvernements Carlsson puis Persson, Parti social-démocrate (centre-gauche), avec l'appui du Parti du centre à partir de 1995.",
     what:"Programme de consolidation de 126 milliards de couronnes, puis plafonds de dépenses votés pour trois ans et objectif d'excédent public.",
     num:"Déficit public de 12,3 % du PIB en 1993, excédent de 1,6 % prévu dès 1998. Dette de l'État au plus haut à 84 % du PIB en 1994-95 ; dette publique ramenée depuis d'environ 75 % à 35 % du PIB selon Andersson et Jonung.",
     res:"Le cadre (plafonds de dépenses, objectif d'excédent, conseil budgétaire) est souvent cité en exemple ; il a été adopté par des gouvernements de gauche puis de droite.",
     sim:"Pas de bouton : le programme mêlait de nombreuses mesures.",act:[],see:null,src:["se_budget98","se_jonung"]},
    {id:"hartz",o:"et",fx:["croissance","economies"],t:"Réformer le marché du travail (lois Hartz)",w:"Allemagne, 2003-2005",
     k:"Fusion de l'allocation chômage de longue durée et de l'aide sociale, accompagnement renforcé, emplois à temps partiel exonérés (« mini-jobs »).",
     who:"Gouvernement Schröder, SPD (centre-gauche) et Verts (écologistes).",
     what:"Quatre lois (Hartz I à IV), dont la dernière (2005) a créé une allocation forfaitaire unique pour les chômeurs de longue durée et les bénéficiaires de l'aide sociale aptes au travail.",
     num:"Taux de chômage : 13,0 % en 2005, 8,6 % en 2010 (Bundesagentur für Arbeit, rapporté aux salariés).",
     res:"La part de la baisse due aux réformes reste discutée. L'IAB montre que la hausse de 2005 était en partie statistique : Hartz IV a fait entrer dans les chiffres des bénéficiaires de l'aide sociale déjà sans emploi.",
     sim:"Curseur « Augmenter la population active » pour l'effet sur l'emploi ; curseurs RSA et allocations chômage pour la dépense.",act:[],see:"x_popact",src:["ba_hartz","iab_hartz"]},
    {id:"rente67",o:"et",fx:["croissance","economies"],t:"Retraite à 67 ans",w:"Allemagne, 2007",
     k:"L'âge légal monte progressivement de 65 à 67 ans, de 2012 à 2029.",
     who:"Grande coalition Merkel : CDU/CSU (centre-droit) et SPD (centre-gauche), loi de 2007.",
     what:"Hausse d'un mois par an puis de deux mois par an de l'âge légal, à partir de la génération 1947 ; 67 ans pour les personnes nées à partir de 1964.",
     num:"Objectif inscrit dans le projet de loi : limiter le taux de cotisation retraite à 21,9 % en 2030 et maintenir un taux de remplacement d'au moins 43 %.",
     res:"Mise en œuvre sans retour en arrière ; un départ à 63 ans sans décote a toutefois été ouvert en 2014 pour les longues carrières.",
     sim:"Curseur « Reculer l'âge légal d'un an de plus (65 ans) », qui transpose un an de plus en France d'après le COR.",act:[{l:"Appliquer : un an de plus en France",set:{x_aod:1}}],see:"x_aod",src:["de_rente67","cor26"]},
    {id:"danemark",o:"et",fx:["croissance","economies"],t:"Indexer l'âge de départ sur l'espérance de vie",w:"Danemark, depuis 2006",
     k:"L'âge de départ suit automatiquement les gains d'espérance de vie, sans nouvelle loi à chaque fois.",
     who:"Accord sur la protection sociale de 2006 : gouvernement Fogh Rasmussen, Venstre (libéraux, centre-droit) et Conservateurs (droite), avec les sociaux-démocrates (centre-gauche), le Parti populaire danois (droite nationaliste) et les sociaux-libéraux (centre).",
     what:"L'âge légal monte d'au plus un an tous les cinq ans pour garder constante la durée moyenne de retraite.",
     num:"Âge légal porté de 65 à 67 ans, projeté à 73 ans vers 2060, le plus élevé prévu dans l'OCDE. Sans cette indexation après 2030, l'OCDE projette des déficits durables.",
     res:"Le taux d'emploi des 55-64 ans a nettement augmenté depuis 2014, tout en restant derrière la Norvège et la Suède.",
     sim:"Curseur « Reculer l'âge légal d'un an de plus (65 ans) ».",act:[],see:"x_aod",src:["oecd_dk"]},
    {id:"efact",o:"et",fx:["recettes"],t:"Rendre la facture électronique obligatoire",w:"Italie, 2019",
     k:"Toutes les factures entre entreprises passent par une plateforme publique, ce qui complique la fraude à la TVA.",
     who:"Loi de budget pour 2018, gouvernement Gentiloni, Parti démocrate (centre-gauche) ; entrée en vigueur en janvier 2019 sous le gouvernement Conte I, Mouvement 5 étoiles (populiste) et Ligue (droite nationaliste).",
     what:"Obligation de facture électronique transmise à l'administration fiscale, en complément d'autres mesures (paiement direct de la TVA par l'acheteur public).",
     num:"Écart entre TVA due et TVA perçue : 32,0 Md€ en 2018, environ 27 Md€ en 2019 (ministère italien des Finances), une baisse que le ministère attribue à l'ensemble de ces mesures sans isoler la facture électronique.",
     res:"La France a déjà voté la mesure (loi de finances 2024, article 91) : réception obligatoire pour toutes les entreprises et émission pour les grandes au 1er septembre 2026, pour les PME en 2027. Son écart de TVA est bien plus faible que celui de l'Italie : 5,6 % (12,1 Md€) contre 15 % en 2023 selon la Commission européenne. Le gain possible est donc plus limité.",
     sim:"Pas de curseur : la mesure est déjà votée en France, et son gain n'a pas été chiffré officiellement.",act:[],see:null,src:["it_mef","ec_vatgap"]},
    {id:"superbonus",o:"et",fx:["contre"],t:"Contre-exemple : le « Superbonus » de rénovation",w:"Italie, 2020-2023",
     k:"Un crédit d'impôt de 110 % des travaux de rénovation énergétique : son coût a explosé bien au-delà des prévisions.",
     who:"Décret « Relance » de 2020, gouvernement Conte II, Mouvement 5 étoiles (populiste) et Parti démocrate (centre-gauche) ; prolongé ensuite.",
     what:"L'État remboursait plus que le coût des travaux, sous forme de crédits d'impôt revendables, sans plafond global.",
     num:"Environ 170 Md€ sur 2020-2023 selon l'Ufficio parlamentare di bilancio, avec un poids sur le déficit d'environ 0,5 % du PIB par an en 2021-2023, puis 1,8 % ensuite.",
     res:"L'office budgétaire juge l'écart entre prévisions et coût réel « sans précédent ». Leçon : une aide ouverte, sans plafond ni ciblage, peut coûter beaucoup plus qu'elle ne rapporte en activité.",
     sim:"Pas de curseur : c'est un exemple de ce qu'il faut éviter.",act:[],see:null,src:["upb_superbonus"]},
    {id:"maut",o:"et",fx:["recettes"],t:"Redevance kilométrique poids lourds",w:"Allemagne, depuis 2005",
     k:"Les camions paient au kilomètre sur les autoroutes et les routes fédérales, selon leurs émissions.",
     who:"Loi de 2002, appliquée en 2005 : gouvernement Schröder, SPD (centre-gauche) et Verts. Étendue aux 40 000 km de routes fédérales en 2018 : gouvernement Merkel, CDU/CSU et SPD. Modulée selon le CO2 en 2023 : gouvernement Scholz, SPD, Verts et libéraux (FDP).",
     what:"Péage électronique pour les camions de plus de 3,5 tonnes depuis juillet 2024.",
     num:"Environ 13,4 Md€ de recettes en 2025 (ministère fédéral des Transports), soit 0,30 % du PIB allemand.",
     res:"Recette stable, affectée aux infrastructures. Le trafic de transit élevé en Allemagne rend la transposition à la France incertaine.",
     sim:"Curseur « Redevance kilométrique poids lourds (modèle allemand) ».",act:[{l:"Appliquer : modèle allemand (9,1 Md€)",set:{x_maut:100}}],see:"x_maut",src:["de_maut","de_pib"]},
    {id:"alcool",o:"et",fx:["recettes"],t:"Taxer l'alcool, vin compris, selon son degré",w:"Royaume-Uni",
     k:"Des accises élevées sur toutes les boissons alcoolisées, réformées en 2023 pour taxer selon le degré d'alcool.",
     who:"Accises anciennes ; réforme de 2023, gouvernement Sunak, Parti conservateur (droite).",
     what:"Taxe par litre d'alcool pur, quel que soit le type de boisson.",
     num:"12,4 Md£ en 2025-2026 (HMRC), 0,41 % du PIB britannique ; transposé à la France, 7,5 Md€ de plus que les taxes françaises actuelles.",
     res:"Objectif de santé publique autant que de recette ; le rendement baisse si la consommation recule.",
     sim:"Curseur « Accises sur l'alcool (niveau britannique) ».",act:[{l:"Appliquer : niveau britannique",set:{x_alc:100}}],see:"x_alc",src:["uk_hmrc","ccss_rec"]},
    {id:"apd",o:"et",fx:["recettes"],t:"Taxer les billets d'avion",w:"Royaume-Uni, depuis 1994",
     k:"Une taxe sur chaque passager au départ, plus forte pour les vols longs et les classes premium.",
     who:"Créée en 1994, gouvernement Major, Parti conservateur (droite).",
     what:"Montant par passager selon la distance et la classe de voyage.",
     num:"4,6 Md£ en 2025-2026 (HMRC) ; transposé à la France, 3,3 Md€ de plus que la taxe française actuelle (environ 1,3 Md€ depuis son triplement en 2025).",
     res:"Depuis la hausse française de 2025, le trafic aérien progresse moins vite en France que dans le reste de l'Europe, selon le ministère de la Transition écologique.",
     sim:"Curseur « Taxe sur les billets d'avion (niveau britannique) ».",act:[{l:"Appliquer : niveau britannique",set:{x_avion:100}}],see:"x_avion",src:["uk_hmrc","fr_tsba"]},
    {id:"stamp",o:"et",fx:["recettes"],t:"Taxer tous les achats d'actions",w:"Royaume-Uni",
     k:"Un droit de timbre de 0,5 % sur tout achat d'actions britanniques, quelle que soit la taille de l'entreprise.",
     who:"Droit de timbre très ancien ; sa version électronique (SDRT) a été créée en 1986, gouvernement Thatcher, Parti conservateur (droite).",
     what:"0,5 % du prix d'achat des actions de sociétés britanniques.",
     num:"3,2 Md£ en 2023-2024 (HMRC), 0,12 % du PIB ; transposé à la France, 0,9 Md€ de plus que la taxe française sur les transactions financières.",
     res:"Rendement régulier ; risque de déplacement des transactions vers des produits non taxés.",
     sim:"Curseur « Taxe sur les achats d'actions (droit de timbre britannique) ».",act:[{l:"Appliquer : modèle britannique",set:{x_titres:100}}],see:"x_titres",src:["uk_stamp"]},
    {id:"rente",o:"et",fx:["recettes"],t:"Taxer les profits exceptionnels des banques et de l'énergie",w:"Espagne, 2023-2024",
     k:"Un prélèvement temporaire sur le chiffre d'affaires des grandes banques et des grands énergéticiens, quand les taux et les prix de l'énergie ont flambé.",
     who:"Loi 38/2022, gouvernement Sánchez, PSOE (centre-gauche) et Unidas Podemos (gauche radicale).",
     what:"Prélèvement de 4,8 % sur certains revenus des grandes banques et de 1,2 % sur le chiffre d'affaires des grands groupes énergétiques ; remplacé pour les banques par un impôt progressif en 2025.",
     num:"Recettes 2024 : banques 1 695 M€, énergie 1 164 M€, soit 2 859 M€ (gouvernement espagnol), 0,18 % du PIB ; transposé à la France, 5,5 Md€.",
     res:"Rendement lié à des profits exceptionnels, donc temporaire ; contesté par les entreprises concernées.",
     sim:"Curseur « Prélèvement temporaire sur les banques et l'énergie (modèle espagnol) ».",act:[{l:"Appliquer : modèle espagnol",set:{x_rente:100}}],see:"x_rente",src:["es_grav","es_pib23"]},
    {id:"fortune",o:"et",fx:["recettes"],t:"Impôt sur les grandes fortunes",w:"Espagne, Norvège, Suisse",
     k:"Trois pays comparables taxent chaque année le patrimoine des plus aisés.",
     who:"<b>Espagne</b> : impôt de solidarité sur les grandes fortunes, loi 38/2022, gouvernement Sánchez, PSOE (centre-gauche) et Unidas Podemos (gauche radicale). <b>Norvège et Suisse</b> : impôts anciens, maintenus par des gouvernements de gauche comme de droite.",
     what:"Espagne : impôt sur les patrimoines nets de plus de 3 M€. Norvège et Suisse : impôts larges, dus dès des patrimoines moyens.",
     num:"Espagne : 623,6 M€ en 2023, payés par 12 010 contribuables. En part de PIB : 0,13 % pour l'impôt espagnol de solidarité, 0,59 % en Norvège, 1,11 % en Suisse.",
     res:"Rendement très variable selon le seuil ; risque de départs de contribuables, que les rendements étrangers intègrent déjà chez eux mais pas chez nous.",
     sim:"Curseur « Impôt sur la fortune », avec le choix du pays de référence.",act:[{l:"Appliquer : modèle espagnol",set:{x_patri_ref:"itsgf",x_patri:100}},{l:"Moyenne des trois pays",set:{x_patri_ref:"moy3",x_patri:100}}],see:"x_patri",src:["es_itsgf","no_formue","ch_fortune"]}
  ];
  let mFilt={o:"all",e:"all"};
  const MCTRL={maut:"x_maut",alcool:"x_alc",apd:"x_avion",stamp:"x_titres",rente:"x_rente"};
  function paintMeas(){
    if($("mlist").dataset.built){applyMeasFilter();return}
    const pass=()=>true,pass0=m=>(mFilt.o==="all"||m.o===mFilt.o)&&(mFilt.e==="all"||m.fx.includes(mFilt.e));
    const TAG={croissance:"Croissance et emploi",recettes:"Recettes",economies:"Économies",contre:"Contre-exemple"};
    const card=m=>`<article class="mcard" id="mc-${m.id}">
      <div class="mh"><span class="mt">${m.t}</span><span class="mw">${m.w}</span></div>
      <div class="mtags">${m.fx.map(f=>`<span class="mtag ${f}">${TAG[f]}</span>`).join("")}</div>
      <p class="mk" style="margin:0">${m.k}</p>
      <div class="mwho">${m.who}</div>
      <details><summary>Lire la fiche complète</summary><div class="mbody">
        <div><b>Ce qui a été fait</b>${m.what}</div>
        <div><b>Chiffrage officiel</b>${m.num}</div>
        <div><b>Résultats et limites</b>${m.res}</div>
        <div><b>Dans le simulateur</b>${m.sim}</div>
        <div class="src"><b>Sources</b>${m.src.filter(k=>S[k]).map(k=>`<a href="${S[k][1]}" target="_blank" rel="noopener">${S[k][0]}</a>`).join(" · ")}</div>
      </div></details>
      ${MCTRL[m.id]?`<div class="mctrl">${ctrlHtml(ALL.find(z=>z.id===MCTRL[m.id]),ALL.find(z=>z.id===MCTRL[m.id]).sector)}</div>`:""}
      ${m.act.length||(m.see&&!MCTRL[m.id])?`<div class="mact">${m.act.map((a,i)=>`<button type="button" class="${i===0?"pri":""}" data-ma="${m.id}" data-i="${i}">${a.l}</button>`).join("")}${m.see&&!MCTRL[m.id]?`<button type="button" data-ms="${m.see}">Voir le curseur</button>`:""}</div><div class="mmsg" id="mm-${m.id}" aria-live="polite"></div>`:""}
    </article>`;
    const fr0=MEAS.filter(m=>m.o==="fr"),et=MEAS.filter(m=>m.o==="et");
    $("mlist").innerHTML=`<div class="mgroup" id="mg-fr"><h3>Mesures appliquées en France (<span></span>)</h3><div class="mgrid">${fr0.map(card).join("")}</div></div>`
      +`<div class="mgroup" id="mg-et"><h3>Mesures appliquées à l'étranger (<span></span>)</h3><div class="mgrid">${et.map(card).join("")}</div></div>`
      +'<p class="empty" id="mg-none" hidden>Aucune mesure ne correspond à ces filtres.</p>';
    $("mlist").dataset.built="1";applyMeasFilter();
  }
  function applyMeasFilter(){
    const pass=m=>(mFilt.o==="all"||m.o===mFilt.o)&&(mFilt.e==="all"||m.fx.includes(mFilt.e));
    let tot=0;["fr","et"].forEach(o=>{let n=0;MEAS.filter(m=>m.o===o).forEach(m=>{const ok=pass(m);$("mc-"+m.id).hidden=!ok;if(ok)n++});
      $("mg-"+o).hidden=!n;$("mg-"+o).querySelector("h3 span").textContent=n;tot+=n});
    $("mg-none").hidden=!!tot;
  }
  function showCtrl(id){
    const el=$(id);if(!el)return;const x=ALL.find(z=>z.id===id);
    if(el.closest("#meas")){$("meas").open=true;const card=el.closest(".mcard");if(card&&card.hidden){mFilt={o:"all",e:"all"};document.querySelectorAll("#meas .mfilt button").forEach(b=>b.classList.toggle("on",b.dataset.mo==="all"||b.dataset.me==="all"));applyMeasFilter()}}
    if(x&&x.sector&&!x.sector.hide){const ln=$("ln-"+x.sector.id);if(ln&&ln.hidden)$("tg-"+x.sector.id).click()}
    const c=el.closest(".ctrl")||el;c.scrollIntoView({behavior:"smooth",block:"center"});
    c.style.transition="background .6s";c.style.background="var(--band)";setTimeout(()=>c.style.background="",1600);
  }
  document.querySelectorAll("#meas .mfilt").forEach(g=>g.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;
    g.querySelectorAll("button").forEach(z=>z.classList.toggle("on",z===b));
    if(b.dataset.mo)mFilt.o=b.dataset.mo;if(b.dataset.me)mFilt.e=b.dataset.me;paintMeas()}));
  $("mlist").addEventListener("click",e=>{
    const a=e.target.closest("[data-ma]");
    if(a){const m=MEAS.find(z=>z.id===a.dataset.ma),act=m.act[+a.dataset.i];
      Object.entries(act.set).forEach(([k,v])=>{const el=$(k);if(!el)return;el.value=v;if(k==="x_patri_ref")el.dispatchEvent(new Event("change"))});
      render();$("mm-"+m.id).textContent="Appliqué à vos réglages. Le résultat se lit dans le tableau de bord.";return}
    const sbtn=e.target.closest("[data-ms]");if(sbtn)showCtrl(sbtn.dataset.ms);
  });
  paintMeas();

  ALL.concat(MACRO).forEach(x=>$(x.id).addEventListener("input",()=>render()));
  function setPreset(k){const pr=PRESETS[k];ALL.forEach(x=>$(x.id).value=pr[x.id]||0);render()}
  $("presets").addEventListener("click",e=>{const b=e.target.closest("button");if(b)setPreset(b.dataset.p)});
  window.__sim={simulate,SECTORS,SPECIAL,ALL,MACRO,PRESETS,sw,GDP0};
  render();
})();
