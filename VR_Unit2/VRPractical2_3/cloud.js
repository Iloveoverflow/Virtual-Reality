class clouds{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let cloud = document.createElement("a-cone");
    cloud.setAttribute("color","green");
    cloud.setAttribute("position","0 1.5 0");
    cloud.setAttribute("height","2");
    this.obj.append( pines );
  
    let cloudpart = document.createElement("a-cylinder");
    cloudpart.setAttribute("position","0 0 0");
    cloudpart.setAttribute("color","brown");
    cloudpart.setAttribute("radius","0.25");
    this.obj.append( stump );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}
