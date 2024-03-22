# Origin Jumpworks Webapp

## Introduction

Bienvenue sur la documentation de Origin Jumpworks Webapp! Ce guide vous aidera a bien fork le projet, à installer les dépendences et le configurer convenablement.

## Installation du projet

Avant tout, il faut que vous téléchargier le projet. En utilisant soit le fork soit en le téléchargeant via les release. Veillez à prendre la dernière version.

### Fork via GitHub

1. Allez dans la page principale du repo GitHub: [origin-jumpworks](https://github.com/deavetheferret/origin-jumpworks)
2. Cliquez sur le bouton "fork" en haut a droite de la page.
3. Selectionnez votre compte en haut à droite également pour verifier que le fork est maintenant dans vos repository personnel.
4. Ouvrez le projet via le fichier workspace sur VScode ou le dossier sur n'importe quel autre IDE.

### Installation via les release

1. Allez sur la page [release](https://github.com/deavetheferret/origin-jumpworks/releases)
2. Téléchargez la dernière version, stable ou non.
3. Une fois installé sur votre machine, configurer votre repo GitHub. (Un fichier .gitignore existe déjà)
4. Ouvrez le projet via le fichier workspace sur VScode ou le dossier sur n'importe quel autre IDE.

## Installation des dépendances

Avant de commencer à travailler sur ce projet, vous devrez installer différente dépendances indispensables.

1. Ouvrez le terminal.
2. Naviguez jusqu'au dossier du projet.
3. Lancez les commandes suivantes:

```zsh
// Chemin vers le projet
cd origin-jumpworks
```

```zsh
npm install
```

Cela va installer tout les packages nécessaires listés dans le fichier `package.json`.

## Commencer le projet

Une fois que vous avez clonez le projet et installé les dépendances, vous êtes prêt à commencer à travailler dessus. Voici les étapes pour commencer:

1. Si vous n'utiliser pas VScode : Allez au dossier du projet via le terminal:

```zsh
// Chemin vers le projet
cd origin-jumpworks
```

1. Si vous utiliser VScode je vous recommande d'ouvir le projet via le fichier `workpsace` .

2. Puis lancez cette commande

```zsh
npm run dev
```

Cette commande va lancez un server local sur votre machine pour visualisez en temps réel la webapp.

## Conclusion

Toutes nos félicitations! Vous avez configuré le projet avec succès et êtes prêt à commencer à y travailler. Si vous avez des questions ou rencontrez des problèmes, veuillez vous référer à la documentation du projet ou contacter les responsables du projet pour obtenir de l'aide.

Happy coding!
