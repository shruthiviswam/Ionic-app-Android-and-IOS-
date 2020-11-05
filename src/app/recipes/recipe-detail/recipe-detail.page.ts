import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe : { id : string; title : string; imageurl : string; ingredients : string[]; };

  constructor( private activatedRoute : ActivatedRoute, private recipeService : RecipesService, private router : Router, private alertCtrl : AlertController) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) =>{
      if(!paramMap.has('recipeId')){
        return
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe=this.recipeService.getRecipe(recipeId)
    })
  }

  onDeleteRecipe(){
    this.alertCtrl.create({
      header : 'Are you sure?',
      message : 'Do you want to delete?',
      buttons : [{
        text : 'Cancel',
        role : 'cancel',
      },
      {
        text : 'Delete',
        handler : () => {
          this.recipeService.deleteRecipe(this.loadedRecipe.id)
          this.router.navigate(['/recipes'])
        }
      }
    ]
    }).then (alertCtrl =>{
      alertCtrl.present()
    })
  }

}
