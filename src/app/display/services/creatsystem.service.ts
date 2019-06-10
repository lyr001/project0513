import { Injectable } from '@angular/core';
import { GetinputService } from './getinput.service';
import { Object3D } from 'three';
import { Cube } from '../geo/cube';
import { GeometryService } from './geometry.service';
import { RepeatService } from './repeat.service';


@Injectable({
  providedIn: 'root'
})
export class CreatsystemService {
  constructor(
    private getinputService:GetinputService,
    private geometryService:GeometryService,
    private repeatService:RepeatService,
    ){}
  //输入
  a = this.getinputService.a;
 

  init(){
    //层
    let layer1 = new Object3D();//最后一层
    let layer2 = new Object3D();
    let layer3 = new Object3D();
    let layer4 = new Object3D();
    let layer5 = new Object3D();
    let entity = new Object3D();
   //几何体
    let world:Object3D;
    let profile: Object3D;
    let geo1: Object3D;
    let geo2: Object3D;
    let geo3: Object3D;
    let geo4: Object3D;
    let geo5: Object3D;
    world = new Cube(this.a.world.shape.size,this.a.world.appearance.color,this.a.world.appearance.force_wireframe,this.a.world.appearance.line_width,this.a.world.appearance.visible).entity;
    entity.add(world);

    profile = this.geometryService.createntity(this.a.scanner.base);

    //实例化几何体
      geo1 = this.geometryService.createntity(this.a.scanner.level1);
      geo2 = this.geometryService.createntity(this.a.scanner.level2);
      geo3 = this.geometryService.createntity(this.a.scanner.level3);
      //this.geo4 = this.geometryService.createntity(this.a.scanner.level4);
      //this.geo5 = this.geometryService.createntity(this.a.scanner.level5);
      //这里还需要改改。translation还只是一个
      let n4 = this.a.scanner.level4.length;
      if(n4==1){
        geo4 = this.geometryService.createntity(this.a.scanner.level4[0]);
      }
      else{
        for(let i=0;i<n4;i++){
          let geo4_i = this.geometryService.createntity(this.a.scanner.level4[i]);
          geo4_i.position.set(this.a.scanner.level4[i].translation[0].value[0],this.a.scanner.level4[i].translation[0].value[1],this.a.scanner.level4[i].translation[0].value[2]);
          geo4.add(geo4_i);
        }
      }
      let n5 = this.a.scanner.level5.length;
      if(n5==1){
        geo5 = this.geometryService.createntity(this.a.scanner.level5[0]);
      }
      else{
        for(let i=0;i<n5;i++){
          let geo5_i = this.geometryService.createntity(this.a.scanner.level5[i]);
          geo5_i.position.set(this.a.scanner.level5[i].translation[0].value[0],this.a.scanner.level5[i].translation[0].value[1],this.a.scanner.level5[i].translation[0].value[2]);
          geo5.add(geo5_i);
        }
      }
      //实例化每层
      layer5 = this.repeatService.createntity(this.a.scanner.level5[0],geo5,this.a.scanner.level4[0],geo4);
      layer4 = this.repeatService.createntity(this.a.scanner.level4[0],layer5,this.a.scanner.level3,geo3);
      layer3 = this.repeatService.createntity(this.a.scanner.level3,layer4,this.a.scanner.level2,geo2);
      layer2 = this.repeatService.createntity(this.a.scanner.level2,layer3,this.a.scanner.level1,geo1);
      layer1 = this.repeatService.createntity(this.a.scanner.level1,layer2,this.a.scanner.base,profile);
      //最后的几何结构
      entity.add(layer1);

      
      return entity;
  }
}
