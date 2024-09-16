-- Création de la table USER
CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

-- Création des users
INSERT INTO
  user (email, password)
VALUES
  (
    "admin@gmail.com",
    "$argon2id$v=19$m=19456,t=2,p=1$DHzLu93UAoMoR6z5oogZHw$21/05A4ywbtkNkLy76RtLgJon4neVg2fP/uunhYiBMA"
  ),
  (
    "kevin@gmail.com",
    "$argon2id$v=19$m=19456,t=2,p=1$DHzLu93UAoMoR6z5oogZHw$21/05A4ywbtkNkLy76RtLgJon4neVg2fP/uunhYiBMA"
  ),
  (
    "windy@gmail.com",
    "$argon2id$v=19$m=19456,t=2,p=1$DHzLu93UAoMoR6z5oogZHw$21/05A4ywbtkNkLy76RtLgJon4neVg2fP/uunhYiBMA"
  ),
  (
    "ninon@gmail.com",
    "$argon2id$v=19$m=19456,t=2,p=1$DHzLu93UAoMoR6z5oogZHw$21/05A4ywbtkNkLy76RtLgJon4neVg2fP/uunhYiBMA"
  );

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
  image VARCHAR(255) DEFAULT "/default.jpg",
  type_id INT NOT NULL,
  modele_id INT NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (type_id) REFERENCES type(id),
  FOREIGN KEY (modele_id) REFERENCES modele(id),
  FOREIGN KEY (user_id) REFERENCES user(id)
);

-- Création de data pour guitar
INSERT INTO
  guitar (
    name,
    price,
    description,
    image,
    type_id,
    modele_id,
    user_id
  )
VALUES
  (
    "Fender Jimi Hendrix Strat OWH",
    1168.00,
    "Jimi Hendrix signature on the back of the headstock",
    "/strat.webp",
    2,
    1,
    1
  ),
  (
    "Fender Tom DeLonge Stratocaster",
    1269.00,
    "Fender Tom DeLonge Stratocaster RW Surf Green elektrische gitaar met deluxe gigbag
",
    "/strattom.webp",
    2,
    1,
    2
  ),
  (
    "Fender John 5 Tele RW BK
",
    4222.00,
    "Custom Shop John 5 Signature Model
",
    "/tele.jpg",
    2,
    2,
    3
  ),
  (
    "Gibson SG Standard '61 - Vintage Cherry",
    1999.00,
    "Immortalized by Santana at Woodstock and smashed onstage by Townshend, the Gibson SG is a rock icon.",
    "/sg.jpg",
    2,
    3,
    4
  ),
  (
    "LAG Guitars Tramontane 70 T70A Natural guitar acoustique folk
",
    204.00,
    "Avec la T70A Tramontane 70, Lag Guitars offre une guitar acoustique de type Auditorium pour un prix abordable.",
    "/tramontane.webp",
    3,
    4,
    4
  ),
  (
    "Ibanez JEMJR-WH
",
    539.00,
    "Steve Vai signature model
",
    "/iba.webp",
    2,
    6,
    1
  );

-- Création de la table PHOTO
CREATE TABLE photo (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  guitar_id INT NOT NULL,
  FOREIGN KEY (guitar_id) REFERENCES guitar(id)
);
