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

  public init = {
     lang: 'fr-FR',  // More languages are documented in the library (default: en-GB)
     soundex: true,  // Use the soundex algorithm to increase accuracy
     continuous: true,  //if you have https connection, you can activate continuous mode
     debug: false,  //Show everything in the console
     listen: true  // Start listening when this function is triggered
   };

  constructor() {
    
    this.artyom.addCommands({
      indexes: ["* présente toi", "Qui es-tu ?", "Peux-tu te présenter ?"],
      action:(i) => {
        this.artyom.say('Je mappel Alya, ton assistante personnelle.');
        
      }
    });
    // http://www.marmiton.org/recettes/recherche.aspx?s=tartiflette&type=all

    this.artyom.addCommands({
      indexes: ["Je voudrais manger * ", "J'aimerais manger *"],
      action:(i) => {
        this.artyom.say('Très bien, je vous donne ce que j\'ai trouvé sur la tartiflette, depuis ma base de connaissance.');
        this.artyom.say('Je vous fais parvenir la liste des ingrédients sur votre smartphone.');
        this.artyom.say('Je constate que le casino le plus proche ferme dans moins de 30 minutes.'
        ,{ onEnd: () => {
            this.artyom.say('Rudy, souhaitez-vous que j\'ajoute le Chardonnay à votre liste de courses ?');

            this.artyom.addCommands({
            indexes: ["Oui", "Non"],
            action:(i) => {
              if(i == 0) {
                this.artyom.say('Très bien, le Chardonnay a été ajouté à votre liste de courses.', {
                  onEnd: () => {
                  this.artyom.clearGarbageCollection();
                }});
              } else {
                this.artyom.say('D\'accord.', {
                  onEnd: () => {
                  this.artyom.clearGarbageCollection();
                }});
              }
            }
          });
        }});
        window.open("http://www.marmiton.org/recettes/recette_tartiflette-facile_15733.aspx", "_blank");
      }
    });


    this.artyom.addCommands({
      indexes: ["As-tu une blague ?"],
      action:(i) => {
        this.artyom.say('A quoi sert internet Explorer ?');
        this.artyom.say('A télécharger google chrome.');
        this.artyom.say('LOL');
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
      indexes: ["Merci à tous", "Merci"],
      action: (i) => {
        if( i == 0) {
          this.artyom.say("Merci à vous, et maintenant, allons nourir le monde de diversité.");
        } else {
          this.artyom.say("Tout le plaisir est pour moi.");
        }
      }
    });

  }

  ngAfterViewInit() {

    this.artyom.initialize({
     lang: 'fr-FR',  // More languages are documented in the library (default: en-GB)
     soundex: true,  // Use the soundex algorithm to increase accuracy
     continuous: true,  //if you have https connection, you can activate continuous mode
     debug: false,  //Show everything in the console
     listen: true  // Start listening when this function is triggered
   });

   this.artyom.say("Je file, c'est les meilleurs.");
  }
}
