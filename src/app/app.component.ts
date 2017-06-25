import { Component } from '@angular/core';
import { Router } from '@angular/router';

import * as Artyom from 'artyom.js';  // Option A
//import { ArtyomBuilder } from 'artyom.js';  // Option B


@Component({
  selector: 'alya-cp',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public artyom = Artyom.ArtyomBuilder.getInstance();
  public authorize = false;
  public move = false;
  public stayLeft = false;
  public hideAnswers = true;
  public hideAnswers2 = true;
  constructor() {


    this.artyom.addCommands({
      indexes: ["Présente toi", "Qui es-tu ?", "Peux-tu te présenter ?"],
      action:(i) => {
        //this.artyom.say('Je suis Alya, ton assistante personnelle. Ensemble nous sommes comme Batman et Robine.');
        this.artyom.say('Je m\'appel Alya, ton assistante personnelle.');
      }
    });

    this.artyom.addCommands({
      indexes: ["As-tu une blague ?"],
      action:(i) => {
        this.artyom.say('Combien font 0 + 0 ? La tête à Toto. LOL.');
      }
    });

    this.artyom.addCommands({
      indexes: ["Quels sont * plafond","plafond *", "* compte jeune", "plafond"],
      action: (i) => {
        this.artyom.say("Parmis les trois ressources documentées, la plus pertinente se trouve dans le document suivant.");
      }
    });

    this.artyom.addCommands({
      indexes: ["Pates à la carbonara"],
      action: (i) => {
        this.artyom.say("Rudy, c'est une bonne idée, je vous fait parvenir la liste des ingrédients pour réaliser ce plat, un instant");
        this.artyom.say("Cependant je constate que vous diner avec Chloé ce soir, mais elle est allergique au oignons, je vous propose de suivre la recette marmitton hyppoalergenique.");
      }
    });

    // Questions
    this.artyom.addCommands({
      indexes: ["J'ai une question", "J'ai plusieurs questions", "J'ai * questions"],
      action: (i, wildcard) => {
        console.log(wildcard);
        this.artyom.say("Je suis à votre écoute.");
      }
    });

    // Thanks
    this.artyom.addCommands({
      indexes: ["Merci beaucoup", "Merci"],
      action: (i) => {
        this.artyom.say("Tout le plaisir est pour moi.");
      }
    });

  }

  ngAfterViewInit() {

    this.artyom.addCommands({
      indexes: ["Ouvre BNP dans un nouvel onglet", "immobilier * BNP", "banque", "immobilier", "crédit", "placement"],
      action: (i, wildcard) => {
        this.artyom.say("Je vous donne accès, au site, n'hésiter pas à me solliciter si vous avez besoin d'une assistance.");
        console.log('ooo');
        window.open("https://mabanque.bnpparibas/", "_blank");
      }
    });

    this.artyom.initialize({
     lang: 'fr-FR',  // More languages are documented in the library (default: en-GB)
     soundex: true,  // Use the soundex algorithm to increase accuracy
     continuous: true,  //if you have https connection, you can activate continuous mode
     debug: false,  //Show everything in the console
     listen: true  // Start listening when this function is triggered
   });
  }
}
