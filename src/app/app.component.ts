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
      indexes: ["Derniers produits", "marchés * action"], 
      action: (i) => {
        this.artyom.say("Depuis le 13 Mars dernier, j'ai comptabilisé 2 nouveaux produits");
        this.artyom.say("Par ailleurs, une formation liée à ce sujet est disponible sur votre portail de formation LMS.");
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

  changeText() {
    this.move = true;
    this.hideAnswers2 = true;
    this.hideAnswers = true;
  }

  
  changeText1() {
    this.move = true;
    this.hideAnswers2 = true;
    this.hideAnswers = true;
  }

  changeText2() {
    this.move = false;
    this.hideAnswers = false;
    this.artyom.say("Depuis le 13 Mars dernier, j'ai comptabilisé 2 nouveaux produits");
    this.artyom.say("Par ailleurs, une formation liée à ce sujet est disponible sur votre portail de formation LMS.");
  }


  changeText3() {
    this.move = false;
    this.hideAnswers = true;
    this.hideAnswers2 = true;
    
  }

  changeText4() {
    this.move = false;
    this.hideAnswers2 = false;
    this.hideAnswers = true;
    this.artyom.say("Parmis les trois ressources documentaires sur le livret cartes jeunes, la plus pertinente se trouve dans le document suivant.");
  }

  present() {
    this.move = false;
    this.hideAnswers2 = true;
    this.hideAnswers = true;
    this.artyom.say('Je m\'appel Alya, ton assistante personnelle. Ensemble nous sommes comme Batman et Robine.');
  }

  hello() {
    this.move = false;
    this.hideAnswers2 = true;
    this.hideAnswers = true;
    this.artyom.say('Bonjour.');
  }
}
