import { Injectable } from '@angular/core';
import { GetinputService } from './getinput.service';
import { Object3D } from 'three';
import { GeometryService } from './geometry.service';
import { RepeatService } from './repeat.service';

@Injectable({
  providedIn: 'root'
})
export class CreatphantomService {

  constructor(private getinputService:GetinputService,
    private geometryService:GeometryService,
    private repeatService:RepeatService) { }
  a = this.getinputService.a;

  
  init(){
   let entity = new Object3D();
   if(Object.keys(this.a.phantom[0]).length<10){
     entity = this.volume_phantom();
   }
   else entity = this.voxelizedphantom();
   return entity;
  }
  volume_phantom(){
    let entity=new Object3D;
    let phantom = new Array(this.a.phantom.length);
    let buffer = new Array(this.a.phantom.length);
    for(let i=0;i<this.a.phantom.length;i++){
      phantom[i] = this.geometryService.createntity(this.a.phantom[i]);
      if(Object.prototype.toString.call(this.a.phantom[i].repeat[0])=='[object Null]'){
        buffer[i] = phantom[i];
      }
      else{buffer[i] = this.repeatService.createntity(this.a.phantom[i],phantom[i]);}
      buffer[i].translateX(this.a.phantom[i].translation[0].value[0]);
      buffer[i].translateY(this.a.phantom[i].translation[0].value[1]);
      buffer[i].translateZ(this.a.phantom[i].translation[0].value[2]); 
      switch(this.a.phantom[i].rotation[0].axis){
        case [1,0,0] :{
          buffer[i].rotation.x = this.a.phantom[i].rotation[0].angle;
          return buffer[i]; 
        }
        case [0,1,0] :{
          buffer[i].rotation.y = this.a.phantom[i].rotation[0].angle;
          return buffer[i]; 
        }
        case [0,0,1]:{
          buffer[i].rotation.z = this.a.phantom[i].rotation[0].angle;
          return buffer[i];
        }
      }

      console.log(buffer[i]);
      entity.add(buffer[i]);
    }

    return entity;
  }
  voxelizedphantom(){
    let entity;
    return entity;
  }
}
