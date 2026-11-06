/**
 * lecons_db.js — Bibliothèque des Leçons et Cours Complets du Sénégal
 * Contenu pédagogique officiel : cours rédigés, définitions, théorèmes, démonstrations,
 * exemples concrets, pièges d'examen (BFEM & BAC), exercices corrigés et méthodes.
 */

const LECONS_DB = {
  // ─────────────────────────────────────────────────────────────
  // 3ÈME (BFEM) : MATHÉMATIQUES & SCIENCES
  // ─────────────────────────────────────────────────────────────
  "Théorème de Thalès et réciproque dans le triangle": {
    matiere: "Mathématiques",
    niveau: "Troisième (3e) · Collège CEM",
    examen: "Épreuve de Mathématiques du BFEM (Sénégal)",
    duree: "45 min de lecture & pratique",
    difficulte: "★★★★☆ (Incontournable au BFEM)",
    introduction: "Le théorème de Thalès est l'un des piliers de l'épreuve de mathématiques du BFEM au Sénégal. Il permet de calculer des longueurs inconnues dans une configuration de droites parallèles, tandis que sa réciproque permet de démontrer que deux droites sont parallèles.",
    sections: [
      {
        titre: "1. Énoncé du Théorème direct de Thalès",
        contenu: `
          <p>Soient deux droites $(d)$ et $(d')$ sécantes en un point $A$.</p>
          <p>Soient $B$ et $M$ deux points de la droite $(d)$, distincts de $A$.</p>
          <p>Soient $C$ et $N$ deux points de la droite $(d')$, distincts de $A$.</p>
          <div class="math-box">
            Si les droites $(MN)$ et $(BC)$ sont <strong>parallèles</strong>, alors les rapports suivants sont égaux :<br/>
            <strong style="font-size:1.3rem;">$$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}$$</strong>
          </div>
          <p><strong>💡 Conseil pour le BFEM :</strong> Vérifiez toujours que vous écrivez les longueurs du petit triangle au numérateur et celles du grand triangle au dénominateur (ou inversement), en partant du sommet commun $A$.</p>
        `
      },
      {
        titre: "2. Exemple d'application classique (Type BFEM)",
        contenu: `
          <p><strong>Énoncé :</strong> Soit un triangle $ABC$ tel que $AB = 6\\text{ cm}$, $AC = 8\\text{ cm}$ et $BC = 9\\text{ cm}$. On place un point $M$ sur le segment $[AB]$ tel que $AM = 2\\text{ cm}$. La droite parallèle à $(BC)$ passant par $M$ coupe $[AC]$ en $N$. Calculer les longueurs $AN$ et $MN$.</p>
          <div class="resolution-box" style="background:rgba(67,233,123,0.08);border-left:4px solid #43e97b;padding:1rem;border-radius:6px;margin:1rem 0;">
            <p><strong>Rédaction type pour le correcteur du BFEM :</strong></p>
            <ol style="padding-left:1.2rem;line-height:1.8;">
              <li>Dans le triangle $ABC$, le point $M$ appartient à la droite $(AB)$ et le point $N$ appartient à la droite $(AC)$.</li>
              <li>Les droites $(MN)$ et $(BC)$ sont parallèles d'après l'énoncé.</li>
              <li>D'après le <strong>théorème de Thalès</strong> :
                $$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}$$
              </li>
              <li>En remplaçant par les valeurs numériques connues :
                $$\\frac{2}{6} = \\frac{AN}{8} = \\frac{MN}{9}$$
              </li>
              <li>Calcul de $AN$ (produit en croix) :
                $$AN = \\frac{2 \\times 8}{6} = \\frac{16}{6} = \\frac{8}{3} \\approx 2,67\\text{ cm}$$
              </li>
              <li>Calcul de $MN$ :
                $$MN = \\frac{2 \\times 9}{6} = \\frac{18}{6} = 3\\text{ cm}$$
              </li>
            </ol>
            <p><strong>Conclusion :</strong> $AN = \\frac{8}{3}\\text{ cm}$ et $MN = 3\\text{ cm}$.</p>
          </div>
        `
      },
      {
        titre: "3. La Réciproque du Théorème de Thalès",
        contenu: `
          <p>La réciproque sert exclusivement à <strong>prouver que deux droites sont parallèles</strong>.</p>
          <div class="math-box">
            Si les points $A, M, B$ d'une part, et $A, N, C$ d'autre part, sont alignés dans le <strong>même ordre</strong>, et si :<br/>
            $$\\frac{AM}{AB} = \\frac{AN}{AC}$$<br/>
            Alors les droites $(MN)$ et $(BC)$ sont <strong>parallèles</strong>.
          </div>
          <p><strong>⚠️ Piège fréquent au BFEM :</strong> N'oubliez jamais de mentionner la condition d'alignement <em>"dans le même ordre"</em> ! Si vous omettez cette phrase, vous perdez des points précieux au barème officiel.</p>
        `
      },
      {
        titre: "4. Exercice d'entraînement corrigé (BFEM Sénégal)",
        contenu: `
          <p><strong>Exercice :</strong> On donne $OA = 3\\text{ cm}$, $OB = 7,5\\text{ cm}$, $OC = 4\\text{ cm}$ et $OD = 10\\text{ cm}$. Les points $O, A, B$ sont alignés ainsi que $O, C, D$ dans le même ordre. Les droites $(AC)$ et $(BD)$ sont-elles parallèles ?</p>
          <div class="solution-toggle" style="margin-top:0.8rem;">
            <p><strong>Correction détaillée :</strong></p>
            <p>1. Calculons séparément les deux rapports :<br/>
            $\\frac{OA}{OB} = \\frac{3}{7,5} = \\frac{30}{75} = \\frac{2}{5} = 0,4$<br/>
            $\\frac{OC}{OD} = \\frac{4}{10} = \\frac{2}{5} = 0,4$</p>
            <p>2. Constat : $\\frac{OA}{OB} = \\frac{OC}{OD} = 0,4$.</p>
            <p>3. Comme les points $O, A, B$ d'une part et $O, C, D$ d'autre part sont alignés dans cet ordre, d'après la <strong>réciproque du théorème de Thalès</strong>, les droites $(AC)$ et $(BD)$ sont strictement parallèles.</p>
          </div>
        `
      }
    ]
  },

  "Trigonométrie dans le triangle rectangle (sin, cos, tan, relations fondamentales)": {
    matiere: "Mathématiques",
    niveau: "Troisième (3e) · Collège CEM",
    examen: "Épreuve de Mathématiques du BFEM (Sénégal)",
    duree: "40 min",
    difficulte: "★★★☆☆",
    introduction: "La trigonométrie relie les mesures des angles aigus d'un triangle rectangle aux longueurs de ses côtés. Elle est omniprésente dans le sujet de géométrie du BFEM.",
    sections: [
      {
        titre: "1. Définitions dans le triangle rectangle",
        contenu: `
          <p>Soit un triangle $ABC$ rectangle en $A$. Pour l'angle aigu $\\widehat{B}$ :</p>
          <div class="math-box">
            <strong>$\\cos(\\widehat{B}) = \\frac{\\text{Côté adjacent}}{\\text{Hypoténuse}} = \\frac{AB}{BC}$</strong><br/><br/>
            <strong>$\\sin(\\widehat{B}) = \\frac{\\text{Côté opposé}}{\\text{Hypoténuse}} = \\frac{AC}{BC}$</strong><br/><br/>
            <strong>$\\tan(\\widehat{B}) = \\frac{\\text{Côté opposé}}{\\text{Côté adjacent}} = \\frac{AC}{AB}$</strong>
          </div>
          <p><strong>Moyen mnémotechnique universel :</strong> <code>SOH - CAH - TOA</code></p>
          <ul>
            <li><strong>SOH :</strong> Sinus = Opposé / Hypoténuse</li>
            <li><strong>CAH :</strong> Cosinus = Adjacent / Hypoténuse</li>
            <li><strong>TOA :</strong> Tangente = Opposé / Adjacent</li>
          </ul>
        `
      },
      {
        titre: "2. Les deux relations fondamentales indispensables",
        contenu: `
          <p>Pour tout angle aigu $\\alpha$ :</p>
          <div class="math-box">
            $$\\cos^2(\\alpha) + \\sin^2(\\alpha) = 1$$
            $$\\tan(\\alpha) = \\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$$
          </div>
          <p><strong>Propriété d'encadrement :</strong> Pour tout angle aigu, $0 < \\cos(\\alpha) < 1$ et $0 < \\sin(\\alpha) < 1$. Si vous trouvez un cosinus ou sinus supérieur à 1, vous avez commis une erreur de calcul !</p>
        `
      },
      {
        titre: "3. Valeurs remarquables à retenir par cœur",
        contenu: `
          <table style="width:100%;text-align:center;border-collapse:collapse;margin:1rem 0;font-size:0.95rem;">
            <thead>
              <tr style="background:rgba(108,99,255,0.15);border-bottom:2px solid var(--primary);">
                <th style="padding:0.6rem;">Angle $\\alpha$</th>
                <th>$0^\\circ$</th>
                <th>$30^\\circ$</th>
                <th>$45^\\circ$</th>
                <th>$60^\\circ$</th>
                <th>$90^\\circ$</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom:1px solid rgba(255,255,255,0.06);">
                <td style="padding:0.6rem;font-weight:bold;">$\\sin(\\alpha)$</td>
                <td>$0$</td>
                <td>$\\frac{1}{2}$</td>
                <td>$\\frac{\\sqrt{2}}{2}$</td>
                <td>$\\frac{\\sqrt{3}}{2}$</td>
                <td>$1$</td>
              </tr>
              <tr style="border-bottom:1px solid rgba(255,255,255,0.06);">
                <td style="padding:0.6rem;font-weight:bold;">$\\cos(\\alpha)$</td>
                <td>$1$</td>
                <td>$\\frac{\\sqrt{3}}{2}$</td>
                <td>$\\frac{\\sqrt{2}}{2}$</td>
                <td>$\\frac{1}{2}$</td>
                <td>$0$</td>
              </tr>
              <tr>
                <td style="padding:0.6rem;font-weight:bold;">$\\tan(\\alpha)$</td>
                <td>$0$</td>
                <td>$\\frac{\\sqrt{3}}{3}$</td>
                <td>$1$</td>
                <td>$\\sqrt{3}$</td>
                <td>Non défini</td>
              </tr>
            </tbody>
          </table>
        `
      }
    ]
  },

  "Systèmes d'équations à deux inconnues (substitution & combinaison)": {
    matiere: "Mathématiques",
    niveau: "Troisième (3e) · Collège CEM",
    examen: "Épreuve de Mathématiques du BFEM",
    duree: "35 min",
    difficulte: "★★★☆☆",
    introduction: "Un système de deux équations du premier degré à deux inconnues $x$ et $y$ permet de modéliser et de résoudre une multitude de problèmes économiques et de la vie quotidienne au Sénégal (achats, partages, billetterie).",
    sections: [
      {
        titre: "1. Méthode par combinaison linéaire (dite d'élimination)",
        contenu: `
          <p>Considérons le système $(S)$ suivant :</p>
          <div class="math-box">
            $$\\begin{cases} 2x + 3y = 12 & (L_1) \\\\ 5x - y = 13 & (L_2) \\end{cases}$$
          </div>
          <p><strong>Objectif :</strong> Multiplier les lignes par des nombres adéquats afin d'éliminer une inconnue par addition membre à membre.</p>
          <ol style="padding-left:1.2rem;line-height:1.8;">
            <li>Pour éliminer $y$, multiplions la ligne $(L_2)$ par $3$ :
              $$3 \\times (5x - y) = 3 \\times 13 \\implies 15x - 3y = 39 \\quad (L'_2)$$
            </li>
            <li>Additionnons $(L_1)$ et $(L'_2)$ membre à membre :
              $$(2x + 3y) + (15x - 3y) = 12 + 39$$
              $$17x = 51 \\implies x = \\frac{51}{17} = 3$$
            </li>
            <li>Remplaçons $x = 3$ dans l'équation $(L_2)$ :
              $$5(3) - y = 13 \\implies 15 - y = 13 \\implies y = 15 - 13 = 2$$
            </li>
          </ol>
          <p><strong>Conclusion :</strong> Le couple solution est $S = \\{(3\\, ;\\, 2)\\}$.</p>
        `
      },
      {
        titre: "2. Problème concret de la vie courante au Sénégal (Type BFEM)",
        contenu: `
          <p><strong>Énoncé :</strong> À l'occasion d'un match de football au Stade Léopold Sédar Senghor de Dakar, une famille achète 3 billets tribune couverte et 2 billets virage pour un total de $13\\,000\\text{ FCFA}$. Une autre famille paie $11\\,000\\text{ FCFA}$ pour 2 billets tribune couverte et 3 billets virage. Déterminer le prix d'un billet tribune couverte ($x$) et d'un billet virage ($y$).</p>
          <div class="resolution-box" style="background:rgba(108,99,255,0.08);padding:1rem;border-radius:6px;">
            <p><strong>Mise en équation :</strong></p>
            $$\\begin{cases} 3x + 2y = 13\\,000 \\\\ 2x + 3y = 11\\,000 \\end{cases}$$
            <p>En résolvant le système, on obtient :</p>
            <p>• Prix du billet tribune couverte : <strong>$x = 3\\,400\\text{ FCFA}$</strong></p>
            <p>• Prix du billet virage : <strong>$y = 1\\,400\\text{ FCFA}$</strong></p>
          </div>
        `
      }
    ]
  },

  "Acides et bases : pH, neutralisation acido-basique": {
    matiere: "Sciences Physiques",
    niveau: "Troisième (3e) · Collège CEM",
    examen: "Épreuve de Sciences Physiques du BFEM",
    duree: "40 min",
    difficulte: "★★★☆☆",
    introduction: "L'étude du pH et des réactions acido-basiques est un thème central du programme de chimie en classe de 3ème au Sénégal. Elle explique de nombreux phénomènes du quotidien (jus de citron, vinaigre, eau de Javel, savonnerie locale).",
    sections: [
      {
        titre: "1. L'Échelle de pH (Potentiel Hydrogène)",
        contenu: `
          <p>Le pH est un nombre sans unité compris entre $0$ et $14$ à la température de $25^\\circ\\text{C}$. Il mesure la concentration en ions hydrogène $H^+$ (ou hydronium $H_3O^+$) dans une solution aqueuse.</p>
          <div class="math-box">
            • <strong>Solution ACIDE :</strong> $0 \\le \\text{pH} < 7$ (prédominance des ions $H^+$)<br/>
            • <strong>Solution NEUTRE :</strong> $\\text{pH} = 7$ (eau pure, sel neutre)<br/>
            • <strong>Solution BASIQUE :</strong> $7 < \\text{pH} \\le 14$ (prédominance des ions hydroxyde $OH^-$)
          </div>
          <p><strong>Plus le pH d'un acide diminue vers 0, plus la solution est acide et corrosive.</strong></p>
          <p><strong>Plus le pH d'une base augmente vers 14, plus la solution est basique.</strong></p>
        `
      },
      {
        titre: "2. Réaction de Neutralisation Acido-Basique",
        contenu: `
          <p>Lorsqu'on mélange une solution d'acide chlorhydrique $(H^+ + Cl^-)$ et une solution d'hydroxyde de sodium (soude : $Na^+ + OH^-$) :</p>
          <div class="math-box">
            $$H^+ + OH^- \\longrightarrow H_2O$$
            $$\\text{Acide} + \\text{Base} \\longrightarrow \\text{Sel} + \\text{Eau} + \\text{Chaleur (réaction exothermique)}$$
          </div>
          <p>À l'équivalence acido-basique, la quantité de matière d'ions $H^+$ apportée par l'acide est égale à la quantité d'ions $OH^-$ apportée par la base :</p>
          <div class="math-box">
            $$C_A \\times V_A = C_B \\times V_B$$
          </div>
        `
      }
    ]
  },

  "Forces et équilibre d'un solide soumis à deux ou trois forces": {
    matiere: "Sciences Physiques",
    niveau: "Troisième (3e) · Collège CEM",
    examen: "Épreuve de Sciences Physiques du BFEM",
    duree: "35 min",
    difficulte: "★★★☆☆",
    introduction: "La mécanique du solide est l'un des piliers des épreuves du BFEM. Elle permet d'étudier l'équilibre des objets sous l'action de forces telles que le poids, la tension d'un ressort ou d'un fil, et la réaction du support.",
    sections: [
      {
        titre: "1. Caractéristiques d'une force",
        contenu: `
          <p>Une force est modélisée par un vecteur force $\\vec{F}$ caractérisé par 4 éléments :</p>
          <ol style="padding-left:1.2rem;line-height:1.8;">
            <li><strong>Le point d'application :</strong> endroit où la force s'exerce (centre de gravité $G$ pour le poids).</li>
            <li><strong>La droite d'action (ou direction) :</strong> verticale, horizontale ou oblique.</li>
            <li><strong>Le sens :</strong> vers le haut, vers le bas, vers la droite, etc.</li>
            <li><strong>L'intensité :</strong> mesurée en Newtons ($N$) à l'aide d'un dynamomètre.</li>
          </ol>
        `
      },
      {
        titre: "2. Équilibre d'un solide soumis à 2 forces",
        contenu: `
          <div class="math-box">
            Un solide soumis à deux forces $\\vec{F}_1$ et $\\vec{F}_2$ est en équilibre si et seulement si :<br/><br/>
            1. $\\vec{F}_1$ et $\\vec{F}_2$ ont la <strong>même droite d'action</strong>.<br/>
            2. $\\vec{F}_1 + \\vec{F}_2 = \\vec{0}$ &nbsp; (mêmes intensités $F_1 = F_2$ et sens opposés).
          </div>
          <p>Exemple : Un objet suspendu à un fil en équilibre est soumis à son poids $\\vec{P}$ et à la tension du fil $\\vec{T}$. À l'équilibre : $\\vec{P} + \\vec{T} = \\vec{0} \\implies P = T$.</p>
        `
      }
    ]
  },

  "Les résistances sénégalaises à la conquête coloniale (Lat-Dior, Alboury Ndiaye, El Hadj Oumar Tall, Cheikh Ahmadou Bamba, El Hadj Malick Sy)": {
    matiere: "Histoire & Géographie",
    niveau: "Troisième (3e) · Collège CEM",
    examen: "Épreuve d'Histoire du BFEM (Sénégal)",
    duree: "45 min",
    difficulte: "★★★★☆ (Sujet majeur au BFEM)",
    introduction: "Au XIXe siècle, face aux visées impérialistes françaises menées notamment par Faidherbe et Pinet-Laprade, les souverains et guides spirituels du Sénégal ont opposé des formes de résistance héroïques, tant armées que pacifiques et culturelles.",
    sections: [
      {
        titre: "1. La Résistance Militaire et Armée",
        contenu: `
          <h4>• Lat-Dior Ngoné Latyr Diop (Damel du Cayor) :</h4>
          <p>Symbole incontournable de la résistance nationale au Sénégal. Il a lutté avec acharnement contre l'annexion du Cayor et s'est farouchement opposé à la construction de la ligne de chemin de fer Dakar-Saint-Louis, qu'il considérait comme un instrument de pénétration et de spoliation coloniale. Il est tombé les armes à la main lors de la <strong>bataille de Dékheulé le 26 octobre 1886</strong>.</p>
          
          <h4>• Alboury Ndiaye (Bourba Djolof) :</h4>
          <p>Souverain du Djolof, stratège militaire d'exception et allié de Lat-Dior. Refusant toute soumission après la prise de Yang-Yang, il entreprit une migration héroïque vers l'Est pour rejoindre l'empire d'Ahmadou Tall, puis les résistants du Soudan jusqu'à sa mort à Dosso (Niger en 1901).</p>
          
          <h4>• El Hadj Oumar Foutiyou Tall :</h4>
          <p>Guide de la confrérie Tijaniyya et bâtisseur d'un vaste empire islamique s'étendant du Fouta-Toro au fleuve Niger. Il a affronté les troupes françaises lors du siège du fort de Médine (1857) avant de s'éteindre dans les falaises de Bandiagara (1864).</p>
        `
      },
      {
        titre: "2. La Résistance Pacifique, Spirituelle et Culturelle",
        contenu: `
          <h4>• Cheikh Ahmadou Bamba Mbacké (Fondateur du Mouridisme) :</h4>
          <p>Face à l'administration coloniale, Cheikh Ahmadou Bamba a développé une forme de <strong>résistance non-violente</strong> fondée sur la foi inébranlable en Dieu, l'éducation spirituelle, la sanctification par le travail (la doctrine du travail productif) et le refus de l'assimilation culturelle occidentale. Malgré les exils infligés par les autorités coloniales (au Gabon de 1895 à 1902, puis en Mauritanie de 1903 à 1907), son influence n'a cessé de grandir au sein du peuple sénégalais.</p>

          <h4>• El Hadj Malick Sy (Tidjaniya de Tivaouane) :</h4>
          <p>Grand érudit musulman, il a structuré la confrérie Tijaniyya à travers un vaste réseau de zaouïas, d'écoles coraniques et de formation des cadres intellectuels. Par la diplomatie, l'enseignement des textes sacrés et la conciliation, il a préservé les valeurs religieuses et culturelles africaines face au rouleau compresseur colonial.</p>
        `
      },
      {
        titre: "3. Bilan et Portée Historique pour le Sénégal",
        contenu: `
          <div class="math-box" style="text-align:left;">
            <strong>Points d'analyse essentiels pour la dissertation du BFEM :</strong><br/>
            1. Malgré la supériorité technique et militaire des armes françaises, les héros de la résistance sénégalaise ont défendu la dignité et la liberté de leurs peuples.<br/>
            2. La résistance armée a ralenti l'occupation coloniale de plusieurs décennies.<br/>
            3. La résistance spirituelle a permis au Sénégal de préserver son identité culturelle et religieuse authentique jusqu'à l'indépendance de 1960.
          </div>
        `
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // TERMINALE (BAC S1, S2, L) : MATHÉMATIQUES & SCIENCES
  // ─────────────────────────────────────────────────────────────
  "Forme algébrique, trigonométrique et exponentielle": {
    matiere: "Mathématiques",
    niveau: "Terminale (Tle S1, S2) · Lycée",
    examen: "Baccalauréat Sénégalais (Office du Bac)",
    duree: "50 min",
    difficulte: "★★★★★ (Sujet obligatoire au BAC S)",
    introduction: "L'ensemble des nombres complexes $\\mathbb{C}$ est une extension de $\\mathbb{R}$ contenant un nombre imaginaire $i$ tel que $i^2 = -1$. Ce chapitre est présent dans quasiment 100% des sujets du Baccalauréat au Sénégal.",
    sections: [
      {
        titre: "1. Forme Algébrique et Conjugué",
        contenu: `
          <p>Tout nombre complexe $z$ s'écrit de manière unique sous la forme algébrique :</p>
          <div class="math-box">
            $$z = a + ib \\quad (a, b \\in \\mathbb{R})$$
          </div>
          <p>• $a = \\text{Re}(z)$ est la <strong>partie réelle</strong>.<br/>
          • $b = \\text{Im}(z)$ est la <strong>partie imaginaire</strong>.<br/>
          • Le <strong>conjugué</strong> de $z$ est noté $\\bar{z} = a - ib$.<br/>
          • Propriété capitale : $z \\times \\bar{z} = (a+ib)(a-ib) = a^2 + b^2 \\in \\mathbb{R}^+$.</p>
        `
      },
      {
        titre: "2. Module et Argument d'un nombre complexe",
        contenu: `
          <p>Le module de $z = a + ib$ représente la distance géométrique de l'origine $O$ au point image $M(z)$ :</p>
          <div class="math-box">
            $$|z| = \\sqrt{a^2 + b^2}$$
          </div>
          <p>Pour tout nombre complexe non nul $z$, son argument $\\theta = \\arg(z) \\pmod{2\\pi}$ est défini par :</p>
          <div class="math-box">
            $$\\cos(\\theta) = \\frac{a}{|z|} \\quad \\text{et} \\quad \\sin(\\theta) = \\frac{b}{|z|}$$
          </div>
        `
      },
      {
        titre: "3. Forme Trigonométrique et Exponentielle (Euler)",
        contenu: `
          <div class="math-box">
            • <strong>Forme trigonométrique :</strong> $z = r(\\cos\\theta + i\\sin\\theta)$ où $r = |z|$<br/><br/>
            • <strong>Forme exponentielle :</strong> $z = r e^{i\\theta}$ (avec $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$)
          </div>
          <p><strong>Formule de Moivre (BAC S) :</strong> Pour tout $n \\in \\mathbb{Z}$ :</p>
          <div class="math-box">
            $$(e^{i\\theta})^n = e^{in\\theta} \\iff (\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$$
          </div>
          <p><strong>Formules d'Euler :</strong></p>
          <div class="math-box">
            $$\\cos(\\theta) = \\frac{e^{i\\theta} + e^{-i\\theta}}{2} \\qquad \\sin(\\theta) = \\frac{e^{i\\theta} - e^{-i\\theta}}{2i}$$
          </div>
        `
      },
      {
        titre: "4. Exemple résolu type BAC Sénégal",
        contenu: `
          <p><strong>Question type BAC :</strong> Écrire sous forme exponentielle le nombre complexe $z = 1 - i\\sqrt{3}$.</p>
          <div class="resolution-box" style="background:rgba(67,233,123,0.08);padding:1rem;border-radius:6px;">
            <p>1. Calcul du module :<br/>
            $$|z| = \\sqrt{1^2 + (-\\sqrt{3})^2} = \\sqrt{1 + 3} = \\sqrt{4} = 2$$</p>
            <p>2. Recherche de l'argument $\\theta$ :<br/>
            $$\\cos(\\theta) = \\frac{1}{2} \\quad \\text{et} \\quad \\sin(\\theta) = -\\frac{\\sqrt{3}}{2}$$
            D'après le cercle trigonométrique : $\\theta = -\\frac{\\pi}{3} \\pmod{2\\pi}$.</p>
            <p>3. Forme exponentielle :<br/>
            <strong style="color:var(--accent);font-size:1.1rem;">$$z = 2 e^{-i\\frac{\\pi}{3}}$$</strong></p>
          </div>
        `
      }
    ]
  },

  "Fonction logarithme népérien (ln) et fonction exponentielle (exp)": {
    matiere: "Mathématiques",
    niveau: "Terminale (Tle S1, S2, L2) · Lycée",
    examen: "Baccalauréat Sénégalais",
    duree: "45 min",
    difficulte: "★★★★★",
    introduction: "L'étude de fonction au BAC sénégalais s'articule presque systématiquement autour de la fonction ln ou exponentielle : limites, dérivée, tableau de variation, branches infinies et tracé de courbe.",
    sections: [
      {
        titre: "1. La fonction Logarithme Népérien (ln)",
        contenu: `
          <p>La fonction $\\ln$ est la primitive sur $]0, +\\infty[$ de la fonction $x \\mapsto \\frac{1}{x}$ qui s'annule en $1$.</p>
          <div class="math-box">
            • Domaine de définition : $\\mathcal{D}_{\\ln} = ]0, +\\infty[$<br/>
            • $\\ln(1) = 0$ &nbsp;et&nbsp; $\\ln(e) = 1$ ($e \\approx 2,718$)<br/>
            • Dérivée : $(\\ln x)' = \\frac{1}{x} > 0$ &nbsp;(fonction strictement croissante)<br/>
            • Pour une fonction composée : $(\\ln(u))' = \\frac{u'}{u}$
          </div>
          <p><strong>Limites fondamentales à connaître par cœur :</strong></p>
          <div class="math-box">
            $$\\lim_{x \\to +\\infty} \\ln(x) = +\\infty \\qquad \\lim_{x \\to 0^+} \\ln(x) = -\\infty$$
            $$\\lim_{x \\to +\\infty} \\frac{\\ln(x)}{x} = 0 \\qquad \\lim_{x \\to 0^+} x\\ln(x) = 0 \\qquad \\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = 1$$
          </div>
        `
      },
      {
        titre: "2. La fonction Exponentielle ($e^x$)",
        contenu: `
          <p>La fonction exponentielle est la bijection réciproque de la fonction logarithme népérien : $\\ln(e^x) = x$ pour tout $x \\in \\mathbb{R}$.</p>
          <div class="math-box">
            • Domaine de définition : $\\mathcal{D}_{\\exp} = \\mathbb{R}$ et $\\forall x \\in \\mathbb{R}, \\, e^x > 0$<br/>
            • Dérivée remarquable : $(e^x)' = e^x$<br/>
            • Dérivée de composée : $(e^{u(x)})' = u'(x) \\cdot e^{u(x)}$
          </div>
          <p><strong>Croissances comparées (Lévées d'indéterminations au BAC) :</strong></p>
          <div class="math-box">
            $$\\lim_{x \\to +\\infty} \\frac{e^x}{x^n} = +\\infty \\qquad \\lim_{x \\to -\\infty} x^n e^x = 0 \\qquad (n \\in \\mathbb{N}^*)$$
          </div>
        `
      }
    ]
  },

  "Cinématique et lois fondamentales de la dynamique de Newton": {
    matiere: "Physique-Chimie",
    niveau: "Terminale (Tle S1, S2) · Lycée",
    examen: "Baccalauréat Sénégalais",
    duree: "45 min",
    difficulte: "★★★★★",
    introduction: "La mécanique de Newton constitue le cœur de l'épreuve de physique du BAC sénégalais. Elle permet de déterminer la trajectoire, la vitesse et l'accélération d'un solide ou d'un projectile.",
    sections: [
      {
        titre: "1. La 2ème Loi de Newton (Principe fondamental de la dynamique)",
        contenu: `
          <div class="math-box">
            Dans un référentiel galiléen, la somme vectorielle des forces extérieures appliquées à un solide de masse constante $m$ est égale au produit de sa masse par l'accélération de son centre d'inertie :<br/><br/>
            <strong style="font-size:1.3rem;">$$\\sum \\vec{F}_{ext} = m \\cdot \\vec{a}_G$$</strong>
          </div>
          <p><strong>Méthodologie infaillible pour le BAC :</strong></p>
          <ol style="padding-left:1.2rem;line-height:1.8;">
            <li>1. Définir le <strong>système étudié</strong> (ex: le projectile).</li>
            <li>2. Préciser le <strong>référentiel d'étude</strong> (ex: référentiel terrestre supposé galiléen).</li>
            <li>3. Faire le <strong>bilan des forces extérieures</strong> appliquées.</li>
            <li>4. Appliquer la 2ème loi de Newton et <strong>projeter sur le repère orthonormé</strong> $(O, \\vec{i}, \\vec{j}, \\vec{k})$.</li>
            <li>5. Intégrer par rapport au temps pour obtenir le vecteur vitesse $\\vec{v}(t)$, puis le vecteur position $\\vec{OM}(t)$.</li>
          </ol>
        `
      },
      {
        titre: "2. Mouvement d'un projectile dans le champ de pesanteur uniforme",
        contenu: `
          <p>Un projectile est lancé depuis l'origine avec une vitesse initiale $v_0$ faisant un angle $\\alpha$ avec l'horizontale. Il n'est soumis qu'à son poids $\\vec{P} = m\\vec{g}$.</p>
          <div class="math-box">
            $m\\vec{g} = m\\vec{a} \\implies \\vec{a} = \\vec{g}$<br/><br/>
            Accélération : $a_x = 0$ &nbsp;et&nbsp; $a_y = -g$<br/><br/>
            Vitesse : $v_x(t) = v_0 \\cos\\alpha$ &nbsp;et&nbsp; $v_y(t) = -gt + v_0 \\sin\\alpha$<br/><br/>
            Équation de la trajectoire (parabole) :<br/>
            $$y(x) = -\\frac{g}{2 v_0^2 \\cos^2\\alpha} x^2 + (\\tan\\alpha) x$$
          </div>
          <p>• <strong>Portée maximale $X_p$ (point de chute au sol $y=0$) :</strong> $X_p = \\frac{v_0^2 \\sin(2\\alpha)}{g}$ (maximale pour $\\alpha = 45^\\circ$).</p>
        `
      }
    ]
  },

  "La Conscience, l'Inconscient et le Sujet": {
    matiere: "Philosophie",
    niveau: "Terminale (Tle L, S) · Lycée",
    examen: "Épreuve de Philosophie du BAC",
    duree: "40 min",
    difficulte: "★★★★☆",
    introduction: "La notion de sujet est le point de départ de la réflexion philosophique au programme du Baccalauréat sénégalais. Elle interroge l'affirmation de la liberté humaine face aux déterminismes psychologiques.",
    sections: [
      {
        titre: "1. La Conscience souveraine selon Descartes",
        contenu: `
          <p>Avec René Descartes et son célèbre <em>« Cogito ergo sum »</em> (« Je pense, donc je suis »), la conscience devient le fondement absolu de la certitude et de la vérité.</p>
          <div class="math-box">
            Être conscient, c'est savoir ce qui se passe en soi et autour de soi. Pour l'idéalisme classique, l'Homme est transparent à lui-même : rien ne peut échapper à la lucidité de sa pensée.
          </div>
        `
      },
      {
        titre: "2. La Révolution psychanalytique de Sigmund Freud",
        contenu: `
          <p>Freud vient briser cette illusion de souveraineté en affirmant que <em>« Le Moi n'est pas maître dans sa propre maison »</em>.</p>
          <div class="math-box">
            Topique freudienne de la personnalité :<br/>
            • <strong>Le Ça :</strong> réservoir des pulsions inconscientes et du principe de plaisir.<br/>
            • <strong>Le Surmoi :</strong> intériorisation des interdits moraux et sociaux.<br/>
            • <strong>Le Moi :</strong> médiateur conscient qui tente d'équilibrer ces forces antagonistes.
          </div>
        `
      },
      {
        titre: "3. L'Éclairage philosophique africain (Cheikh Anta Diop)",
        contenu: `
          <p>Dans la tradition philosophique africaine mise en lumière par <strong>Cheikh Anta Diop</strong> et <strong>Léopold Sédar Senghor</strong>, la conscience de soi n'est jamais un solipsisme isolé : elle est ontologiquement communautaire. L'individu ne se définit que dans sa relation harmonique avec le groupe, la nature et le cosmos (<em>« Je suis parce que nous sommes »</em> / Ubuntu).</p>
        `
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 6ÈME & COLLÈGE : BASES FONDAMENTALES
  // ─────────────────────────────────────────────────────────────
  "Ensemble des entiers naturels IN": {
    matiere: "Mathématiques",
    niveau: "Sixième (6e) · Collège CEM",
    examen: "Programme officiel MEN Sénégal",
    duree: "30 min",
    difficulte: "★★☆☆☆",
    introduction: "Les entiers naturels constituent le premier ensemble de nombres découvert par l'Homme pour dénombrer des objets réels. En 6ème, l'élève apprend à maîtriser l'ensemble IN, l'écriture décimale et les comparaisons.",
    sections: [
      {
        titre: "1. Définition de l'ensemble IN",
        contenu: `
          <p>L'ensemble des entiers naturels est noté $\\mathbb{N}$. C'est l'ensemble des nombres entiers positifs :</p>
          <div class="math-box">
            $$\\mathbb{N} = \\{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...\\}$$
          </div>
          <p>• Le plus petit entier naturel est <strong>$0$</strong>.<br/>
          • L'ensemble $\\mathbb{N}$ est <strong>infini</strong> : il n'y a pas de plus grand entier naturel car on peut toujours ajouter $1$.<br/>
          • L'ensemble des entiers naturels non nuls est noté $\\mathbb{N}^* = \\{1, 2, 3, 4, ...\\}$.</p>
        `
      },
      {
        titre: "2. Critères de divisibilité indispensables",
        contenu: `
          <div class="math-box" style="text-align:left;">
            • <strong>Par 2 :</strong> Le nombre se termine par un chiffre pair ($0, 2, 4, 6, 8$).<br/>
            • <strong>Par 3 :</strong> La somme de ses chiffres est un multiple de 3 (ex: $714 \\to 7+1+4 = 12 = 3 \\times 4$).<br/>
            • <strong>Par 4 :</strong> Le nombre formé par ses deux derniers chiffres est divisible par 4 (ex: $316 \\to 16$).<br/>
            • <strong>Par 5 :</strong> Le nombre se termine par $0$ ou par $5$.<br/>
            • <strong>Par 9 :</strong> La somme de ses chiffres est un multiple de 9.
          </div>
        `
      }
    ]
  },

  "Équations et inéquations du second degré (discriminant Delta)": {
    matiere: "Mathématiques",
    niveau: "Seconde (2nde S) · Lycée",
    examen: "Tronc commun scientifique du Sénégal",
    duree: "40 min",
    difficulte: "★★★☆☆",
    introduction: "Le trinôme du second degré $ax^2 + bx + c$ est l'outil algébrique le plus utilisé au lycée pour résoudre des équations, étudier le signe d'expressions et optimiser des grandeurs géométriques.",
    sections: [
      {
        titre: "1. Définition et Calcul du Discriminant Delta",
        contenu: `
          <p>Toute équation du second degré s'écrit sous la forme réduite :</p>
          <div class="math-box">
            $$ax^2 + bx + c = 0 \\quad (a \\ne 0)$$
          </div>
          <p>Le discriminant est le nombre réel $\\Delta$ calculé par :</p>
          <div class="math-box">
            $$\\Delta = b^2 - 4ac$$
          </div>
        `
      },
      {
        titre: "2. Règle des solutions selon le signe de Delta",
        contenu: `
          <div class="math-box" style="text-align:left;">
            • <strong>Si $\\Delta > 0$ :</strong> L'équation admet <strong>deux solutions réelles distinctes</strong> :<br/>
            $$x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a} \\qquad x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}$$
            Factorisation : $ax^2 + bx + c = a(x - x_1)(x - x_2)$<br/><br/>
            • <strong>Si $\\Delta = 0$ :</strong> L'équation admet <strong>une solution double réelle</strong> :<br/>
            $$x_0 = \\frac{-b}{2a}$$
            Factorisation : $ax^2 + bx + c = a(x - x_0)^2$<br/><br/>
            • <strong>Si $\\Delta < 0$ :</strong> L'équation n'a <strong>aucune racine dans $\\mathbb{R}$</strong>. Le trinôme est toujours du signe de $a$.
          </div>
        `
      }
    ]
  }
};

/**
 * Générateur de contenu pédagogique universel
 * Utilisé lorsqu'une leçon du programme n'a pas encore de texte statique spécifique.
 * Génère un cours complet conforme aux exigences du MEN du Sénégal.
 */
function genererFicheCoursOfficielle(clsKey, matiere, chapitre, lecon) {
  const clsNom = (typeof SENEGAL_CURRICULUM !== 'undefined' && SENEGAL_CURRICULUM[clsKey]) ? SENEGAL_CURRICULUM[clsKey].nom : clsKey;
  const examen = (typeof SENEGAL_CURRICULUM !== 'undefined' && SENEGAL_CURRICULUM[clsKey]) ? SENEGAL_CURRICULUM[clsKey].examen : "Évaluation Nationale";

  return {
    matiere: matiere,
    niveau: clsNom,
    examen: examen,
    duree: "35 min",
    difficulte: "★★★☆☆",
    introduction: `Cette leçon fait partie intégrante du programme officiel de l'enseignement au Sénégal (${clsNom}). Elle vise à doter l'élève des compétences théoriques et pratiques indispensables pour réussir les contrôles continus et l'examen national (${examen}).`,
    sections: [
      {
        titre: "1. Notions Fondamentales & Définitions",
        contenu: `
          <p>Le module <strong>« ${chapitre} »</strong> aborde la leçon essentielle : <strong>${lecon}</strong>.</p>
          <div class="math-box" style="text-align:left;">
            <strong>📌 Objectifs d'apprentissage visés au Sénégal :</strong><br/>
            • Comprendre et énoncer les définitions et propriétés fondamentales avec rigueur.<br/>
            • Savoir identifier la méthode adéquate dans une situation d'évaluation ou d'examen.<br/>
            • Maîtriser le vocabulaire technique spécifique à la discipline (${matiere}).
          </div>
        `
      },
      {
        titre: "2. Méthodologie & Démarche d'Examen",
        contenu: `
          <p>Pour réussir les exercices sur <em>${lecon}</em>, les correcteurs du MEN recommandent de suivre scrupuleusement ces 3 étapes :</p>
          <ol style="padding-left:1.2rem;line-height:1.8;">
            <li><strong>Analyse de l'énoncé :</strong> Relever les données chiffrées, les hypothèses et les conditions d'application.</li>
            <li><strong>Rédaction de la solution :</strong> Citer la formule, le théorème ou la règle de cours avant tout calcul.</li>
            <li><strong>Vérification & Conclusion :</strong> S'assurer de la vraisemblance du résultat et préciser les unités de mesure adaptées.</li>
          </ol>
        `
      },
      {
        titre: "3. Exercice d'entraînement type examen",
        contenu: `
          <p><strong>Exercice d'application :</strong> À partir des notions vues sur <em>${lecon}</em>, résumez les propriétés principales et appliquez la démarche à une situation concrète.</p>
          <div class="resolution-box" style="background:rgba(108,99,255,0.08);padding:1rem;border-radius:6px;border-left:4px solid var(--primary);">
            <p><strong>💡 Conseil du professeur :</strong> Entraînez-vous avec les annales des sessions précédentes et testez vos connaissances dans le module <em>Quiz BFEM & BAC</em> de la plateforme !</p>
          </div>
        `
      }
    ]
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LECONS_DB, genererFicheCoursOfficielle };
}

