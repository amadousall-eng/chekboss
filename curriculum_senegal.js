/**
 * curriculum_senegal.js
 * Programme officiel du Sénégal - Ministère de l'Éducation Nationale (MEN)
 * Collège (6ème à 3ème - BFEM) & Lycée (Seconde, Première, Terminale - BAC S1, S2, L)
 */

const SENEGAL_CURRICULUM = {
  // ──────────────── COLLÈGE ────────────────
  "6eme": {
    nom: "Sixième (6e)",
    cycle: "Moyen (Collège)",
    examen: "Entrée au collège",
    description: "Cycle d'adaptation selon les directives du MEN du Sénégal : consolidation des acquis fondamentaux de l'élémentaire.",
    matieres: {
      "Mathématiques": [
        { chapitre: "Arithmétique & Ensembles", lecons: ["Ensemble des entiers naturels IN", "Multiples et diviseurs, critères de divisibilité (2, 3, 4, 5, 9)", "Fractions simples et décimaux"] },
        { chapitre: "Géométrie Fondamentale", lecons: ["Droites, demi-droites, segments et milieux", "Angles : mesure et classification", "Le cercle, triangles et quadrilatères usuels (rectangle, carré, losange)", "Symétrie axiale"] },
        { chapitre: "Mesures & Grandeurs", lecons: ["Périmètres et aires élémentaires", "Unités de longueur, masse, capacité et temps"] }
      ],
      "Sciences de la Vie et de la Terre (SVT)": [
        { chapitre: "Découverte de l'environnement local", lecons: ["La diversité des composantes d'un milieu naturel sénégalais (Niayes, savane, mangrove)", "Les relations alimentaires (chaînes et réseaux trophiques)"] },
        { chapitre: "Biologie Végétale & Animale", lecons: ["Nutrition et respiration des plantes à fleurs", "Mode de vie et locomotion des animaux"] }
      ],
      "Français": [
        { chapitre: "Langue & Grammaire", lecons: ["Les classes grammaticales et fonctions syntaxiques", "Conjugaison : présent, imparfait, passé simple", "Orthographe d'usage et accords"] },
        { chapitre: "Expression & Littérature", lecons: ["Le conte africain et universel", "La description et le portrait narratif"] }
      ],
      "Histoire & Géographie": [
        { chapitre: "Histoire", lecons: ["Introduction à l'Histoire : sources et repères chronologiques", "La Préhistoire en Afrique (berceau de l'humanité)", "L'Égypte antique et son rayonnement"] },
        { chapitre: "Géographie", lecons: ["La Terre dans l'univers, coordonnées et cartographie", "Le relief et le climat du Sénégal (zones éco-géographiques)"] }
      ],
      "Anglais (LV1)": [
        { chapitre: "Initiation & Communication", lecons: ["Greetings, personal identification, classroom objects", "Present simple, basic vocabulary and daily routines"] }
      ]
    }
  },

  "5eme": {
    nom: "Cinquième (5e)",
    cycle: "Moyen (Collège)",
    examen: "Cycle central",
    description: "Approfondissement des concepts abstraits, initiation aux sciences physiques et histoire médiévale africaine.",
    matieres: {
      "Mathématiques": [
        { chapitre: "Nombres & Calculs", lecons: ["Nombres décimaux relatifs (addition, soustraction, multiplication)", "Fractions : opérations et simplification", "Puissances simples d'un nombre"] },
        { chapitre: "Géométrie & Espace", lecons: ["Symétrie centrale et parallélogrammes", "Triangles et médiatrices, hauteurs, bissectrices", "Angles formés par deux parallèles coupées par une sécante"] }
      ],
      "Sciences Physiques": [
        { chapitre: "La Matière & l'Eau", lecons: ["Les états de la matière et changements d'état", "L'eau dans notre environnement : purification et importance au Sahel"] },
        { chapitre: "Électricité", lecons: ["Circuit électrique simple, dipôles et conductibilité", "Circuits en série et en dérivation"] }
      ],
      "SVT": [
        { chapitre: "Respiration & Digestion chez l'Homme", lecons: ["La respiration dans différents milieux", "La digestion des aliments et l'absorption intestinale"] },
        { chapitre: "Géologie Externe", lecons: ["L'altération des roches et l'érosion sous le climat sahélien", "Sédimentation et genèse des paysages"] }
      ],
      "Histoire & Géographie": [
        { chapitre: "Histoire", lecons: ["Les grands empires du Moyen Âge africain (Ghana, Mali, Songhaï)", "L'Islam : naissance, expansion et diffusion en Afrique de l'Ouest", "Le royaume du Tekrour et les premiers États du Sénégal"] },
        { chapitre: "Géographie", lecons: ["L'Afrique : milieu physique (relief, hydrographie, grands fleuves)", "Les zones de végétation et la gestion de la désertification"] }
      ],
      "Français": [
        { chapitre: "Littérature & Lecture suivie", lecons: ["Le récit d'aventure et de voyage", "Les figures de style et enrichissement du vocabulaire"] }
      ]
    }
  },

  "4eme": {
    nom: "Quatrième (4e)",
    cycle: "Moyen (Collège)",
    examen: "Cycle central avancé",
    description: "Consolidation pré-examen : algèbre rationnelle, théorèmes géométriques majeurs, chimie élémentaire.",
    matieres: {
      "Mathématiques": [
        { chapitre: "Calcul Numérique & Algèbre", lecons: ["L'ensemble des nombres rationnels Q", "Calcul littéral : développement, factorisation simple", "Équations du premier degré à une inconnue"] },
        { chapitre: "Géométrie & Mesure", lecons: ["Théorème de Pythagore et sa réciproque", "Distance d'un point à une droite, tangente au cercle", "Translations et vecteurs du plan"] }
      ],
      "Sciences Physiques": [
        { chapitre: "Chimie Fondamentale", lecons: ["Mélanges et corps purs, solutions aqueuses", "Atomes, molécules et symboles chimiques", "Combustions et notion de réaction chimique"] },
        { chapitre: "Physique & Optique", lecons: ["Sources de lumière et propagation rectiligne", "Notion de force, masse et poids"] }
      ],
      "SVT": [
        { chapitre: "Reproduction & Transmission de la vie", lecons: ["La reproduction sexuée chez les mammifères et les végétaux", "Puberté et cycle de reproduction chez l'être humain"] },
        { chapitre: "Géologie Interne", lecons: ["Séismes et volcanisme : manifestations de la tectonique des plaques"] }
      ],
      "Histoire & Géographie": [
        { chapitre: "Histoire", lecons: ["Les royaumes sénégambiens du XVIe au XVIIIe siècle (Djolof, Cayor, Baol, Sine, Saloum)", "La traite négrière atlantique et le commerce triangulaire (l'Île de Gorée)"] },
        { chapitre: "Géographie", lecons: ["La population mondiale et l'urbanisation en Afrique de l'Ouest", "Les ressources naturelles et les défis de l'autosuffisance alimentaire"] }
      ]
    }
  },

  "3eme": {
    nom: "Troisième (3e)",
    cycle: "Moyen (Collège)",
    examen: "🏆 BFEM (Brevet de Fin d'Études Moyennes)",
    description: "Classe d'examen décisive du Sénégal. Conforme à 100% au référentiel des épreuves du BFEM.",
    matieres: {
      "Mathématiques (Épreuve BFEM)": [
        { chapitre: "Travaux Numériques", lecons: ["Racines carrées et calculs avec radicaux", "Systèmes d'équations à deux inconnues (substitution & combinaison)", "Inéquations et intervalles du 1er degré", "Statistiques : effectifs, fréquences, moyennes, diagrammes"] },
        { chapitre: "Travaux Géométriques", lecons: ["Théorème de Thalès et réciproque dans le triangle", "Trigonométrie dans le triangle rectangle (sin, cos, tan, relations fondamentales)", "Angles inscrits et polygones réguliers", "Vecteurs, repérage orthonormé et équations de droites"] },
        { chapitre: "Géométrie dans l'Espace", lecons: ["Cône de révolution, pyramide : calcul de volumes et patrons", "Sections planes et agrandissement/réduction"] }
      ],
      "Sciences Physiques (Épreuve BFEM)": [
        { chapitre: "Chimie", lecons: ["Acides et bases : pH, neutralisation acido-basique", "Solutions aqueuses et conductivité ionique", "Oxydation des métaux usuels (fer, aluminium, cuivre)", "Hydrocarbures simples (méthane, butane, alcanes)"] },
        { chapitre: "Physique", lecons: ["Forces et équilibre d'un solide soumis à deux ou trois forces", "Travail et puissance mécanique", "Énergie cinétique et potentielle", "Loi d'Ohm, résistance électrique et énergie électrique (joule, kWh)"] }
      ],
      "SVT (Épreuve BFEM)": [
        { chapitre: "Nutrition & Immunologie chez l'Homme", lecons: ["La circulation sanguine et les échanges gazeux", "Le système immunitaire, les anticorps et les vaccins", "Le VIH/SIDA et les infections sexuellement transmissibles (IST)"] },
        { chapitre: "Génétique Élémentaire & Écosystèmes", lecons: ["Chromosomes, caryotype et transmission des caractères héréditaires", "Protection des sols et lutte contre la dégradation de l'environnement au Sénégal"] }
      ],
      "Histoire & Géographie (Épreuve BFEM)": [
        { chapitre: "Histoire (Sénégal & Monde)", lecons: ["L'impérialisme européen en Afrique au XIXe siècle (Conférence de Berlin 1884-1885)", "Les résistances sénégalaises à la conquête coloniale (Lat-Dior, Alboury Ndiaye, El Hadj Oumar Tall, Cheikh Ahmadou Bamba, El Hadj Malick Sy)", "La Première et la Seconde Guerre Mondiale", "L'accession du Sénégal à l'indépendance (1960) et les figures de la décolonisation"] },
        { chapitre: "Géographie", lecons: ["La géographie économique du Sénégal : agriculture (arachide, riz), pêche, mines et tourisme", "Les problèmes de développement au Sénégal : exode rural, balance commerciale, désertification"] }
      ],
      "Français (Épreuve BFEM)": [
        { chapitre: "Épreuves type BFEM", lecons: ["Texte suivi de questions (compréhension, grammaire, vocabulaire)", "Dictée-questions et orthographe", "Sujet de rédaction : dissertation, narration, plaidoyer"] }
      ]
    }
  },

  // ──────────────── LYCÉE ────────────────
  "2nde": {
    nom: "Seconde (2nde S & L)",
    cycle: "Secondaire (Lycée)",
    examen: "Orientation vers 1ère S1, S2, L",
    description: "Classe charnière d'orientation au Sénégal entre les filières Scientifiques (S) et Littéraires (L).",
    matieres: {
      "Mathématiques (2nde S)": [
        { chapitre: "Calculs & Algèbre", lecons: ["Ensembles de nombres IR, intervalles, valeur absolue", "Équations et inéquations du second degré (discriminant Delta)", "Polynômes : factorisation et racines"] },
        { chapitre: "Analyse & Fonctions", lecons: ["Généralités sur les fonctions numériques (domaine de définition, parité, variations)", "Fonctions usuelles : affines, carrée, inverse"] },
        { chapitre: "Géométrie Vectorielle", lecons: ["Vecteurs du plan, colinéarité, barycentres de 2 et 3 points", "Produit scalaire dans le plan et trigonométrie (cercle trigonométrique)"] }
      ],
      "Physique-Chimie (2nde S)": [
        { chapitre: "Physique", lecons: ["Cinématique : vitesse, mouvement rectiligne uniforme (MRU) et accéléré", "Forces, principe d'inertie et quantité de mouvement", "Optique géométrique : lois de Snell-Descartes et réflexion/réfraction"] },
        { chapitre: "Chimie", lecons: ["Structure de l'atome, classification périodique de Mendeleïev", "La mole : quantité de matière, masse molaire et concentration", "Réactions chimiques et stœchiométrie"] }
      ],
      "SVT": [
        { chapitre: "Biologie Cellulaire", lecons: ["La cellule, unité structurale et fonctionnelle des êtres vivants", "Métabolisme cellulaire et photosynthèse végétale"] },
        { chapitre: "Ressources & Environnement", lecons: ["Les ressources en eau et minérales au Sénégal"] }
      ],
      "Français & Philosophie (Initiation)": [
        { chapitre: "Littérature", lecons: ["Les mouvements littéraires : négritude (L.S. Senghor, Aimé Césaire), classicisme", "Technique de la dissertation littéraire et du commentaire composé"] }
      ]
    }
  },

  "1ere": {
    nom: "Première (1ère S1, S2, L)",
    cycle: "Secondaire (Lycée)",
    examen: "Épreuves anticipées du BAC (Français)",
    description: "Spécialisation poussée : analyse avancée, cinématique, thermodynamique et génétique mendélienne.",
    matieres: {
      "Mathématiques (1ère S)": [
        { chapitre: "Analyse Mathématique", lecons: ["Limites de fonctions et continuité", "Dérivation : formules, dérivée des composées, tangente et extremums", "Étude complète et tracé des courbes de fonctions rationnelles"] },
        { chapitre: "Suites & Probabilités", lecons: ["Suites arithmétiques et suites géométriques", "Dénombrement (p-listes, arrangements, combinaisons)", "Variables aléatoires et calcul de probabilités"] },
        { chapitre: "Géométrie dans l'Espace", lecons: ["Repérage dans l'espace, orthogonalité et produit scalaire"] }
      ],
      "Physique-Chimie (1ère S)": [
        { chapitre: "Physique", lecons: ["Travail mécanique et théorème de l'énergie cinétique (TEC)", "Énergie potentielle et énergie mécanique", "Champ électrostatique et électrocinétique"] },
        { chapitre: "Chimie Organique", lecons: ["Alcanes, alcènes, alcynes et isomérie", "Composés oxygénés : alcools, aldéhydes, cétones, acides carboxyliques"] }
      ],
      "SVT": [
        { chapitre: "Génétique Fondamentale", lecons: ["Méiose et brassages inter et intrachromosomiques", "Lois de Mendel sur l'hérédité chez les diploïdes"] },
        { chapitre: "Géologie Historique", lecons: ["Datation relative et stratigraphie du bassin sédimentaire sénégalais"] }
      ],
      "Français (BAC de Français)": [
        { chapitre: "Épreuve Officielle", lecons: ["Dissertation littéraire sur les œuvres au programme", "Commentaire suivi ou composé de textes poétiques et théâtraux"] }
      ]
    }
  },

  "terminale": {
    nom: "Terminale (Tle S1, S2, L)",
    cycle: "Secondaire (Lycée)",
    examen: "🏆 BACCALAURÉAT SÉNÉGALAIS (BAC)",
    description: "Diplôme national suprême préparant à l'enseignement supérieur (UCAD, UGB, UAM, classes préparatoires).",
    matieres: {
      "Mathématiques (BAC S1 & S2)": [
        { chapitre: "Nombres Complexes", lecons: ["Forme algébrique, trigonométrique et exponentielle", "Applications géométriques (rotations, homothéties, similitudes directes)", "Résolution d'équations dans C"] },
        { chapitre: "Analyse Approfondie", lecons: ["Fonction logarithme népérien (ln) et fonction exponentielle (exp)", "Calcul intégral : primitives, intégration par parties, calcul d'aires", "Équations différentielles linéaires du 1er et 2nd ordre"] },
        { chapitre: "Probabilités & Lois Continues", lecons: ["Probabilités conditionnelles et formule de Bayes", "Variables aléatoires, loi binomiale, loi exponentielle et loi normale"] },
        { chapitre: "Arithmétique (Spécifique S1)", lecons: ["Divisibilité dans Z, division euclidienne, PGCD, théorème de Bézout et Gauss", "Congruences dans Z et systèmes cryptographiques"] }
      ],
      "Physique-Chimie (BAC S1 & S2)": [
        { chapitre: "Mécanique Newtonienne", lecons: ["Cinématique et lois fondamentales de la dynamique de Newton", "Mouvement de projectiles dans un champ de pesanteur uniforme", "Mouvements des satellites et planètes (lois de Kepler)", "Oscillateurs mécaniques et pendules"] },
        { chapitre: "Électromagnétisme & Ondes", lecons: ["Circuit RLC libre et forcé, résonance électrique", "Propagation des ondes mécaniques et lumineuses, interférences"] },
        { chapitre: "Chimie des Solutions & Cinétique", lecons: ["Cinétique chimique : vitesse de réaction et facteurs cinétiques", "Équilibres acido-basiques, dosage pH-métrique et solutions tampons", "Estérification et hydrolyse (acides gras et savons)"] }
      ],
      "SVT (BAC S2)": [
        { chapitre: "Immunologie Approfondie", lecons: ["Le soi et le non-soi, réponses immunitaires humorale et cellulaire", "Dérèglements du système immunitaire et vaccinologie"] },
        { chapitre: "Neurobiologie & Reproduction", lecons: ["Le message nerveux, potentiel d'action et transmission synaptique", "Régulation neuro-hormonale de la reproduction chez l'Homme"] }
      ],
      "Philosophie (Épreuve BAC)": [
        { chapitre: "Grands Domaines Philosophiques", lecons: ["La Conscience, l'Inconscient et le Sujet", "La Liberté, la Morale et le Droit", "La Vérité, la Science et la Méthode scientifique", "L'Art, le Mythe et la Religion en contexte africain", "Dissertation philosophique & explication de texte"] }
      ]
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SENEGAL_CURRICULUM;
}

