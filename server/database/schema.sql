-- Création de la table TYPE
CREATE TABLE type (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- Création de data pour TYPE
INSERT INTO
  type (name)
VALUES
  ("classique"),
  ("électrique"),
  ("accoustique");

-- Création de la table MARQUE
CREATE TABLE marque (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- Création de data pour MARQUE
INSERT INTO
  marque (name)
VALUES
  ("Lag"),
  ("Gibson"),
  ("Fender"),
  ("Ibanez");

-- Création de la table MODELE
CREATE TABLE modele (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  marque_id INT NOT NULL,
  FOREIGN KEY(marque_id) REFERENCES marque(id)
);

-- Création de data pour MODELE
INSERT INTO
  modele (name, marque_id)
VALUES
  ("Stratocaster", 3),
  ("Telecaster", 3),
  ("SG", 2),
  ("Tramontane", 1),
  ("RG Series", 4),
  ("JEM Series", 4),
  ("S Series", 4);

-- Création de la table guitar
CREATE TABLE guitar (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL (10, 2) UNSIGNED NOT NULL,
  description TEXT,
  type_id INT NOT NULL,
  modele_id INT NOT NULL,
  FOREIGN KEY (type_id) REFERENCES type(id),
  FOREIGN KEY (modele_id) REFERENCES modele(id)
);

-- Création de data pour guitar
INSERT INTO
  guitar (name, price, description, type_id, modele_id)
VALUES
  (
    "Fender Jimi Hendrix Strat OWH",
    1168.00,
    "Jimi Hendrix signature on the back of the headstock",
    2,
    1
  ),
  (
    "Fender Tom DeLonge Stratocaster",
    1269.00,
    "Fender Tom DeLonge Stratocaster RW Surf Green elektrische gitaar met deluxe gigbag
",
    2,
    1
  ),
  (
    "Fender John 5 Tele RW BK
",
    4222.00,
    "Custom Shop John 5 Signature Model
",
    2,
    2
  ),
  (
    "Gibson SG Standard '61 - Vintage Cherry",
    1999.00,
    "Immortalized by Santana at Woodstock and smashed onstage by Townshend, the Gibson SG is a rock icon.",
    2,
    3
  ),
  (
    "LAG Guitars Tramontane 70 T70A Natural guitar acoustique folk
",
    204.00,
    "Avec la T70A Tramontane 70, Lag Guitars offre une guitar acoustique de type Auditorium pour un prix abordable.",
    3,
    4
  ),
  (
    "Ibanez JEMJR-WH
",
    539.00,
    "Steve Vai signature model
",
    2,
    6
  );

-- Création de la table PHOTO
CREATE TABLE photo (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  guitar_id INT NOT NULL,
  FOREIGN KEY (guitar_id) REFERENCES guitar(id)
);
