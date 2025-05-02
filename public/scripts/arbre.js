// Fonction principale pour charger et afficher l'arbre généalogique
function initializeFamilyTree() {
  // Dans un environnement réel, on chargerait depuis un fichier externe
  // Ici, on utilise directement les données
  const familyData = {
    name: "Couple AGBODJOGBE-MOBOLOHOUNDOURO",
    isCoupleContainer: true,
    children: [
      {
        name: "AGBODJOGBE  Joseph ",
        isParent: true,
      },
      {
        name: "MOBOLOHOUNDOURO Zansi",
        isParent: true,
      },
      {
        name: "AGBODJOGBE Isaac Bodéhousse",
        birthYear: 1916,
        spouses: [
          {
            name: "ZANNOU Béatrice",
            children: [
              {
                name: "AGBODJOGBE Elisabeth (Décédée)",
                spouse: "HOUNKPONOU",
                children: [
                  { name: "HOUNKPONOU Candide (Décédé)" },
                  { name: "HOUNKPONOU Eunice Mouniratou Ad." },
                  { name: "HOUNKPONOU Anatou" },
                  { name: "HOUNKPONOU Nouratou" },
                  { name: "HOUNKPONOU Chérifatou" },
                  { name: "HOUNKPONOU Issiaka Mohamed" },
                  { name: "HOUNKPONOU Ismael" },
                ],
              },
              {
                name: "AGBODJOGBE Emmanuel",
                spouse: "ZAMBA Ginette; SIMENOU ",
                children: [
                  { name: "AGBODJOGBE Sylvie" },
                  { name: "AGBODJOGBE Herve" },
                  { name: "AGBODJOGBE Hermione" },
                  { name: "AGBODJOGBE Yolande" },
                  { name: "AGBODJOGBE Enock (Décédé)" },
                  { name: "AGBODJOGBE Gloria" },
                ],
              },
              {
                name: "AGBODJOGBE Samuel (Décédé)",
                spouse: "ADOUKONOU Félicité",
                children: [
                  { name: "AGBODJOGBE Sandra" },
                  { name: "AGBODJOGBE Josué" },
                  { name: "AGBODJOGBE Enock" },
                ],
              },
            ],
          },
          {
            name: "MAFLON Françoise",
            children: [
              {
                name: "AGBODJOGBE Fernande",
                spouse: "FOURN Claude",
                children: [
                  { name: "FOURN Arnold(Décédé)" },
                  { name: "FOURN Bernice" },
                  { name: "FOURN Morel" },
                ],
              },
              {
                name: "AGBODJOGBE Moïse",
                spouse: "AGBOWAI Colette",
                children: [
                  { name: "AGBODJOGBE Jaures : France"  },
                  { name: "AGBODJOGBE Rosnel" },
                  { name: "AGBODJOGBE Armess" },
                  { name: "AGBODJOGBE Edis" },
                ],
              },
              {
                name: "AGBODJOGBE Christine",
                spouse: "ACCROMBESSI/GNINDEHOU",
                children: [
                  { name: "ACCROMBESSI/GN Sonia" },
                  { name: "GNINDEHOU Paulette" },
                  { name: "GNINDEHOU Fabrice" },
                ],
              },
              {
                name: "AGBODJOGBE Christophe",
		spouse: "ALAVO",
		children: [
                  { name: "AGBODJOGBE A" },
                  { name: "AGBODJOGBE B" },
                  { name: "AGBODJOGBE C" },
		  { name: "AGBODJOGBE D" },
		 ],

              },
              {
                name: "AGBODJOGBE Charlotte",
                spouse: "MEINEN Christian",
              },
              {
                name: "AGBODJOGBE Etienne (Décédé)",
		spouse: "X",
                children: [
		   { name: "AGBODJOGBE Mouna" },
		   { name: "AGBODJOGBE B" },
	           { name: "AGBODJOGBE C" },
		],
              },
              {
                name: "AGBODJOGBE Virginie",
                spouse: "KLOUVI Claude",
                children: [
                  { name: "KLOUVI Cedrick" },
                  { name: "KLOUVI Kangni" },
                  { name: "KLOUVI Aris" },
                ],
              },
              {
                name: "AGBODJOGBE Abel (Décédé)",
              },
            ],
          },
          {
            name: "ADINGNI Ablawa",
            children: [
              {
                name: "AGBODJOGBE Daniel",
                spouse: "ALEXANDRE Marlène",
                children: [
                  { name: "AGBODJOGBE Darlène" },
                  { name: "AGBODJOGBE Joselyne" },
                  { name: "AGBODJOGBE Jonathan" },
                  { name: "AGBODJOGBE Jemos" },
                ],
              },
              {
                name: "AGBODJOGBE Félix",
     		spouse: "A",
                children: [
                  { name: "AGBODJOGBE Lynda" },
                  { name: "AGBODJOGBE A" },
		  { name: "AGBODJOGBE B" },
		  { name: "AGBODJOGBE C" },
                ],
              },
              {
                name: "AGBODJOGBE Cosme",
                spouse: "DENON Juliette",
                children: [
		  { name: "AGBODJOGBE Béno" },
                  { name: "AGBODJOGBE Michel" },
                  { name: "AGBODJOGBE Gédéon" },
                  { name: "AGBODJOGBE Abigael" },
                ],
              },
              {
                name: "AGBODJOGBE Damien (Décédé)",
                spouse: "DAVIES Lydia",
                children: [
                  { name: "AGBODJOGBE Miriam Rachel Sonagn." },
                  { name: "AGBODJOGBE Josias Ivan Finagnon" },
                  { name: "AGBODJOGBE Dorcas Déborah Mah." },
                  { name: "AGBODJOGBE Cédrick Herman Coffi" },
                ],
              },
            ],
          },
          {
            name: "COFFI Jeannette",
            children: [
              {
                name: "AGBODJOGBE Salomon",
              },
              {
                name: "AGBODJOGBE Célestine",
                spouse: "MONTETCHO Justin",
                children: [
                  { name: "MONTETCHO Leïla Omoladé" },
                  { name: "MONTETCHO Cédrick" },
                  { name: "MONTETCHO Kayode" },
                ],
              },
              {
                name: "AGBODJOGBE Pascal (Décédé)",
                spouse: "MEDENOU Pascaline",
                children: [
                  { name: "AGBODJOGBE Isaac" },
                  { name: "AGBODJOGBE Lorincia" },
                  { name: "AGBODJOGBE Israel" },
                ],
              },
              {
                name: "AGBODJOGBE Rita",
                spouse: "SAUDEGBE Wencelas",
                children: [
                  { name: "SAUDEGBE Eunice" },
                  { name: "SAUDEGBE David" },
                  { name: "SAUDEGBE Eldad" },
                ],
              },
              {
                name: "AGBODJOGBE Christiane",
                spouse: "ALLAGBE Caleb",
                children: [
		   { name: "ALLAGBE Jédidah" },
	           { name: "ALLAGBE Junior Caleb" }
		],
              },
              {
                name: "AGBODJOGBE David",
                spouse: "LOKOSSOU Adeline (Divorce)",
                children: [
                  { name: "AGBODJOGBE Mauriac Isaac" },
                  { name: "AGBODJOGBE Naomi Esther" },
                  { name: "AGBODJOGBE Enock" },
                ],
              },
              {
                name: "AGBODJOGBE Gilberte",
                spouse: "COFFI Laurent",
              },
              {
                name: "AGBODJOGBE Esther",
                spouse: "GOMINA Abdou (Divorce)",
              },
            ],
          },
          {
            name: "DIOGO Josephine",
            children: [
              {
                name: "AGBODJOGBE Boniface",
                spouse: "ZINSOU Léa",
                children: [
                  { name: "AGBODJOGBE Abdel" },
		  { name: "AGBODJOGBE Dorcas" },
                  { name: "AGBODJOGBE Candide" },
                  { name: "AGBODJOGBE Max" },
		  { name: "AGBODJOGBE Priscilia" },

                ],
              },
              {
                name: "AGBODJOGBE Alexis",
                spouse: "SOUSSOUMIHEN Armande",
                children: [
                  { name: "AGBODJOGBE Nelly Barbette" },
                  { name: "AGBODJOGBE Othniel" },
                ],
              },
              {
                name: "AGBODJOGBE Eugénie",
                spouse: "DANVI Alexandre (Divorce)",
                children: [
		  { name: "DANVI Alexandre" },
		  { name: "DANVI A" },
		  { name: "DANVI B" },
		  { name: "DANVI C" },
		],
              },
            ],
          },
          {
            name: "AHOSSI Victoria",
            children: [
              {
                name: "AGBODJOGBE Gaston (Décédé)",
                spouse: "HOUNKPE Gisèle",
                children: [
                  { name: "AGBODJOGBE Nordino Brice Stéphen" },
                  { name: "AGBODJOGBE Minko Jean Olivier" },
                  { name: "AGBODJOGBE Claudia Amelle Fat." },
                  { name: "AGBODJOGBE Victoria Ngnignone" },
                  { name: "AGBODJOGBE Sarah Syntche Doton" },
                  { name: "AGBODJOGBE Isaac Joel" },
                  { name: "AGBODJOGBE Deborah Viviane Pemb." },
                ],
              },
              {
                name: "AGBODJOGBE Philomène (Décédée)",
		spouse: "KOSSOU (Décédé)",
                children: [
                  { name: "KOSSOU Edouard" },
                  { name: "KOSSOU Nadège" },
                  { name: "KOSSOU Mireille" },
                ],
              },
              {
                name: "AGBODJOGBE Bernadette",
              },
            ],
          },
          {
            name: "TOKIN Thérèse",
            children: [
              {
                name: "AGBODJOGBE Viviane",
                spouse: "SOW Mamadou (Divorce)",
                children: [
                  { name: "SOW Malick" },
                  { name: "SOW Anabelle" },
                  { name: "SOW Sadibou" },
                ],
              },
              {
                name: "AGBODJOGBE Geneviève (Décédée)",
                spouse: "NANG Jean (Décédé)",
                children: [
                  { name: "NANG Manoa" },
                  { name: "NANG Osée Isaac" },
                  { name: "NANG Lesly Ngnignone" },
                ],
              },
              {
                name: "AGBODJOGBE Urbain",
		spouse: "X",
		children: [
		  { name: "AGBODJOGBE Whitney" },
                  { name: "AGBODJOGBE Asheley" },
                  { name: "AGBODJOGBE B" },
                  { name: "AGBODJOGBE C" },
		  { name: "AGBODJOGBE D" },
		  { name: "AGBODJOGBE E" },
		  { name: "AGBODJOGBE F" },
		  { name: "AGBODJOGBE G" },
                ],

              },
            ],
          },
        ],
      },
    ],
  };

  renderTraditionalFamilyTree(familyData);
}

// Fonction pour générer l'arbre généalogique traditionnel
function renderTraditionalFamilyTree(data) {
  const treeContainer = document.getElementById("familyTree");
  treeContainer.innerHTML = "";

  // Créer la légende
  const legendContainer = document.createElement("div");
  legendContainer.className = "tree-legend";
  legendContainer.innerHTML = `
    <button id="toggle-legend">Afficher Légende</button>
    <div id="legend-content" style="display: none;">
      <h3>Légende</h3>
      <ul>
        <li class="legend-item ancestor">
          <span class="legend-box"></span> Ancêtre principal
        </li>
        <li class="legend-item parent">
          <span class="legend-box"></span> Parent
        </li>
        <li class="legend-item spouse">
          <span class="legend-box"></span> Conjoint
        </li>
        <li class="legend-item has-children">
          <span class="legend-box"></span> Enfants Isaac
        </li>
        <li class="legend-item grandchild">
          <span class="legend-box"></span> Petits-enfants d'Isaac Bodéhousse
        </li>
        <li class="legend-item expand-collapse">
          <span class="legend-icon">+</span> Développer / Réduire
        </li>
        <li class="legend-item parent-union">
          <span class="legend-icon">♥</span> Union parentale
        </li>
        <li class="legend-item marriage">
          <span class="legend-icon">♥</span> Union avec Isaac Bodéhousse
        </li>
        <li class="legend-item birth-year">
          <span class="legend-text">1916</span> Année de naissance
        </li>
      </ul>
    </div>
  `;
  treeContainer.appendChild(legendContainer);

  // Ajouter l'écouteur d'événements pour le bouton toggle
  const toggleButton = document.getElementById("toggle-legend");
  const legendContent = document.getElementById("legend-content");
  toggleButton.addEventListener("click", () => {
    const isHidden = legendContent.style.display === "none";
    legendContent.style.display = isHidden ? "block" : "none";
    toggleButton.textContent = isHidden
      ? "Masquer Légende"
      : "Afficher Légende";
  });

  // Structure principale de l'arbre
  const treeLayout = document.createElement("div");
  treeLayout.className = "tree-layout";

  // Trouver l'ancêtre principal (Isaac Bodéhousse)
  const ancestor = data.children.find((child) => child.birthYear);
  if (!ancestor) return;

  // Trouver les parents
  const parents = data.children.filter((child) => child.isParent);
  if (parents.length === 2) {
    // Créer un conteneur pour le couple parental
    const parentContainer = document.createElement("div");
    parentContainer.className = "union-container";

    // En-tête de l'union parentale
    const parentHeader = document.createElement("div");
    parentHeader.className = "union-header";

    // Nœud du premier parent
    const parent1Node = createPersonNode(parents[0]);
    parent1Node.classList.add("parent");
    parentHeader.appendChild(parent1Node);

    // Ligne de mariage
    const marriageLine = document.createElement("div");
    marriageLine.className = "marriage-line parent-marriage-line";
    parentHeader.appendChild(marriageLine);

    // Nœud du second parent
    const parent2Node = createPersonNode(parents[1]);
    parent2Node.classList.add("parent");
    parentHeader.appendChild(parent2Node);

    parentContainer.appendChild(parentHeader);

    // Conteneur pour l'ancêtre principal (enfant des parents)
    const generationContainer = document.createElement("div");
    generationContainer.className = "generation-container";

    // Ligne verticale reliant les parents à l'ancêtre
    const verticalLine = document.createElement("div");
    verticalLine.className = "vertical-line";
    generationContainer.appendChild(verticalLine);

    // Nœud de l'ancêtre principal
    const ancestorNode = createPersonNode(ancestor);
    ancestorNode.classList.add("ancestor");
    generationContainer.appendChild(ancestorNode);

    parentContainer.appendChild(generationContainer);
    treeLayout.appendChild(parentContainer);
  } else {
    // Si pas de parents, rendre seulement l'ancêtre
    const ancestorNode = createPersonNode(ancestor);
    ancestorNode.classList.add("ancestor");
    treeLayout.appendChild(ancestorNode);
  }

  // Conteneur pour toutes les unions de l'ancêtre
  const unionsContainer = document.createElement("div");
  unionsContainer.className = "unions-container";
  

  // Si l'ancêtre a des conjoints
  if (ancestor.spouses && ancestor.spouses.length > 0) {
    ancestor.spouses.forEach((spouse, index) => {
      const unionContainer = createUnion(ancestor, spouse, index);
      unionsContainer.appendChild(unionContainer);
    });
  }

  treeLayout.appendChild(unionsContainer);
  treeContainer.appendChild(treeLayout);

  // Ajouter des contrôles pour zoomer et se déplacer
  addZoomControls(treeContainer);
}

// Fonction pour créer une union (mariage)
function createUnion(ancestor, spouse, index) {
  const unionContainer = document.createElement("div");
  unionContainer.className = "union-container";
  unionContainer.id = `union-${index}`;

  // En-tête de l'union
  const unionHeader = document.createElement("div");
  unionHeader.className = "union-header";

  // Nom du conjoint
  const spouseNode = createPersonNode(spouse);

//Ajout de la classe spéciale si c'est une épouse d'Isaac
spouseNode.classList.add("spouse", "isaac-wife");

unionHeader.appendChild(spouseNode);

  // Ligne de connexion de mariage
  const marriageLine = document.createElement("div");
  marriageLine.className = "marriage-line spouse-marriage-line";
  unionHeader.appendChild(marriageLine);

  unionContainer.appendChild(unionHeader);

  // Conteneur pour les enfants de cette union
  if (spouse.children && spouse.children.length > 0) {
    const childrenContainer = document.createElement("div");
    childrenContainer.className = "generation-container";

    // Créer les nœuds des enfants
    spouse.children.forEach((child) => {
      const childBranch = createFamilyBranch(child, true); // Pass isChildOfSpouse=true
      childrenContainer.appendChild(childBranch);
    });

    unionContainer.appendChild(childrenContainer);
  }

  return unionContainer;
}

// Fonction récursive pour créer une branche familiale
function createFamilyBranch(person, isChildOfSpouse = false) {
  const branchContainer = document.createElement("div");
  branchContainer.className = "branch-container";

  // Nœud de la personne
  const personNode = createPersonNode(person);
  if (isChildOfSpouse && person.children && person.children.length > 0) {
    /*personNode.classList.add("has-grandchildren"); */
  }
  branchContainer.appendChild(personNode);

  // Si la personne a un conjoint explicite
  if (person.spouse) {
  const spouseContainer = document.createElement("div");
  spouseContainer.className = "couple-container";

  const marriageLine = document.createElement("div");
  marriageLine.className = "small-marriage-line";
  spouseContainer.appendChild(marriageLine);

  const spouseNode = document.createElement("div");
  spouseNode.className = "person spouse";

  //Ajoute une classe spéciale pour les conjoints des enfants de Isaac
  spouseNode.classList.add("isaac-descendant-spouse");

  spouseNode.textContent = person.spouse;
  spouseContainer.appendChild(spouseNode);

  branchContainer.appendChild(spouseContainer);
}


  // Si la personne a des enfants
  if (person.children && person.children.length > 0) {
    const descendantsContainer = document.createElement("div");
    descendantsContainer.className = "descendants-container";

    // Ligne verticale descendante
    const verticalLine = document.createElement("div");
    verticalLine.className = "vertical-line";
    descendantsContainer.appendChild(verticalLine);

    // Conteneur horizontal pour les enfants
    const childrenRow = document.createElement("div");
    childrenRow.className = "children-row";

    // Ajouter chaque enfant
    person.children.forEach((child) => {
      const childBranch = createFamilyBranch(child, false, isChildOfSpouse);
      if (isChildOfSpouse) {
        childBranch.querySelector(".person").classList.add("grandchild");
      }
      childrenRow.appendChild(childBranch);
    });

    descendantsContainer.appendChild(childrenRow);
    branchContainer.appendChild(descendantsContainer);

    // Ajouter un bouton pour développer/réduire cette branche
    addToggleButton(personNode, descendantsContainer);
  }

  return branchContainer;
}

// Fonction pour créer un nœud de personne
function createPersonNode(person) {
  const personNode = document.createElement("div");
  personNode.className = "person";
  personNode.setAttribute("data-name", person.name);

  // Nom de la personne
  const nameElement = document.createElement("div");
  nameElement.className = "name";
  nameElement.textContent = person.name;
  personNode.appendChild(nameElement);

  // Année de naissance si disponible
  if (person.birthYear) {
    const yearElement = document.createElement("div");
    yearElement.className = "birth-year";
    yearElement.textContent = person.birthYear;
    personNode.appendChild(yearElement);
  }

  return personNode;
}

// Fonction pour ajouter un bouton pour développer/réduire
function addToggleButton(personNode, targetContainer) {
  personNode.classList.add("has-children");

  personNode.addEventListener("click", function () {
    this.classList.toggle("expanded");

    if (
      targetContainer.style.display === "none" ||
      targetContainer.style.display === ""
    ) {
      targetContainer.style.display = "flex";
      this.setAttribute("title", "Cliquez pour réduire");
    } else {
      targetContainer.style.display = "none";
      this.setAttribute("title", "Cliquez pour développer");
    }
  });

  // Par défaut, les branches de descendance sont réduites
  targetContainer.style.display = "none";
  personNode.setAttribute("title", "Cliquez pour développer");
}

// Fonction pour ajouter des contrôles de zoom
function addZoomControls(container) {
  const controlsContainer = document.createElement("div");
  controlsContainer.className = "zoom-controls";

  // Bouton zoom +
  const zoomInBtn = document.createElement("button");
  zoomInBtn.textContent = "+";
  zoomInBtn.className = "zoom-btn";
  zoomInBtn.addEventListener("click", function () {
    const currentScale = parseFloat(container.dataset.scale || 1);
    const newScale = currentScale + 0.1;
    container.dataset.scale = newScale;
    container.style.transform = `scale(${newScale})`;
  });

  // Bouton zoom -
  const zoomOutBtn = document.createElement("button");
  zoomOutBtn.textContent = "−";
  zoomOutBtn.className = "zoom-btn";
  zoomOutBtn.addEventListener("click", function () {
    const currentScale = parseFloat(container.dataset.scale || 1);
    const newScale = Math.max(0.3, currentScale - 0.1);
    container.dataset.scale = newScale;
    container.style.transform = `scale(${newScale})`;
  });

  // Bouton reset
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "⟲";
  resetBtn.className = "zoom-btn";
  resetBtn.addEventListener("click", function () {
    container.dataset.scale = 1;
    container.style.transform = "scale(1)";
  });

  // Ajouter les boutons au conteneur
  controlsContainer.appendChild(zoomOutBtn);
  controlsContainer.appendChild(resetBtn);
  controlsContainer.appendChild(zoomInBtn);

  // Ajouter le conteneur de contrôles à côté de l'arbre
  container.parentNode.insertBefore(controlsContainer, container.nextSibling);

  // Initialiser l'échelle
  container.dataset.scale = 1;
}

// Fonction pour permettre le défilement par glisser-déposer
function enableDragScroll(element) {
  let pos = { top: 0, left: 0, x: 0, y: 0 };

  const mouseDownHandler = function (e) {
    element.style.cursor = "grabbing";
    pos = {
      left: element.scrollLeft,
      top: element.scrollTop,
      x: e.clientX,
      y: e.clientY,
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    element.scrollTop = pos.top - dy;
    element.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = function () {
    element.style.cursor = "grab";
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  element.style.cursor = "grab";
  element.addEventListener("mousedown", mouseDownHandler);
}

// Activer le défilement par glisser-déposer lorsque la page est chargée
document.addEventListener("DOMContentLoaded", function () {
  const treeContainer = document.getElementById("familyTree");
  if (treeContainer) {
    enableDragScroll(treeContainer);
  }

  // Initialiser l'arbre généalogique si sur la page arbre.html
  if (window.location.pathname.includes("arbre.html")) {
    initializeFamilyTree();
  }
});