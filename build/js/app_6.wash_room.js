var blueprint3d = null;
var aGlobal = null;
var anItem = null;
var aWall = null;
var aFloor = null;
var aCameraRange = null;
var gui = null;
var globalPropFolder = null;
var itemPropFolder = null;
var wallPropFolder = null;
var floorPropFolder = null;
var cameraPropFolder = null;
var selectionsFolder = null;

var myhome = '{"floorplan":{"version":"0.0.2a","corners":{"9b5bf619-30b4-89bf-55c3-c55ba6b41aab":{"x":-0.161,"y":1.403,"elevation":2.5},"2bde1353-13a8-bfde-84c2-29a2273ad7b1":{"x":-0.161,"y":6.403,"elevation":2.5},"afdc0e59-9a68-3c62-3cd1-3e982cbbf2d1":{"x":4.839,"y":6.403,"elevation":2.5},"57493cce-41d6-4c8c-d8d5-9f469171cfbc":{"x":4.839,"y":1.403,"elevation":2.5}},"walls":[{"corner1":"9b5bf619-30b4-89bf-55c3-c55ba6b41aab","corner2":"2bde1353-13a8-bfde-84c2-29a2273ad7b1","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/12.회벽_베이지.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":-229.48872543660312,"y":301.89596543660315},"b":{"x":-229.48872543660315,"y":478.65819456339705}},{"corner1":"2bde1353-13a8-bfde-84c2-29a2273ad7b1","corner2":"2bde1353-13a8-bfde-84c2-29a2273ad7b1","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":-16.11784,"y":640.2770800000001},"b":{"x":-16.11784,"y":640.2770800000001}},{"corner1":"2bde1353-13a8-bfde-84c2-29a2273ad7b1","corner2":"afdc0e59-9a68-3c62-3cd1-3e982cbbf2d1","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/12.회벽_베이지.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":199.40830690565963,"y":855.8032269056597},"b":{"x":377.95601309434016,"y":855.8032269056597}},{"corner1":"afdc0e59-9a68-3c62-3cd1-3e982cbbf2d1","corner2":"57493cce-41d6-4c8c-d8d5-9f469171cfbc","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/12.회벽_베이지.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":664.5875405729093,"y":459.5716994270907},"b":{"x":664.5875405729093,"y":309.87046057290934}},{"corner1":"57493cce-41d6-4c8c-d8d5-9f469171cfbc","corner2":"9b5bf619-30b4-89bf-55c3-c55ba6b41aab","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wall_floor/12.회벽_베이지.png","stretch":false,"scale":300},"wallType":"STRAIGHT","a":{"x":307.1054647033631,"y":-36.49961529663676},"b":{"x":160.65885529663686,"y":-36.49961529663682}}],"rooms":{"f90da5e3-9e0e-eba7-173d-eb0b071e838e,71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,da026c08-d76a-a944-8e7b-096b752da9ed":{"name":"A New Room"},"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,da026c08-d76a-a944-8e7b-096b752da9ed,f90da5e3-9e0e-eba7-173d-eb0b071e838e":{"name":"A New Room"},"9b5bf619-30b4-89bf-55c3-c55ba6b41aab,a2b6d2c0-6515-e39e-1de1-2aeaf880d67b,e6a6bd1f-6eb4-3b5e-3b6d-19f5fb203497,2bde1353-13a8-bfde-84c2-29a2273ad7b1":{"name":"A New Room"}},"wallTextures":[],"floorTextures":{},"newFloorTextures":{"2bde1353-13a8-bfde-84c2-29a2273ad7b1,57493cce-41d6-4c8c-d8d5-9f469171cfbc,9b5bf619-30b4-89bf-55c3-c55ba6b41aab,afdc0e59-9a68-3c62-3cd1-3e982cbbf2d1":{"url":"rooms/textures/wall_floor/20.타일_크림임페리얼.png","scale":300}},"carbonSheet":{"url":"","transparency":1,"x":0,"y":0,"anchorX":0,"anchorY":0,"width":0.01,"height":0.01}},"items":[{"item_name":"라운드형 샤워부스","item_type":2,"format":"gltf","model_url":"models/gltf/showerRound.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EB%9D%BC%EC%9A%B4%EB%93%9C%20%EC%83%A4%EC%9B%8C%20%EB%B6%80%EC%8A%A4&frm=NVSHATC&prevQuery=%EB%9D%BC%EC%9A%B4%EB%93%9C%EC%83%A4%EC%9B%8C%20%EB%B6%80%EC%8A%A4","xpos":42.81806485419593,"ypos":106,"zpos":200.21806485419597,"rotation":1.5707963267948966,"scale_x":191.95027097493772,"scale_y":191.95027097493772,"scale_z":191.95027097493772,"fixed":true,"material_colors":["#ffffff","#4e6363","#b2d3c4","#f7ffff"]},{"item_name":"벽걸이 선반","item_type":2,"format":"gltf","model_url":"models/gltf/wall_stand.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EB%B2%BD%EA%B1%B8%EC%9D%B4%20%EC%84%A0%EB%B0%98&frm=NVSHATC&prevQuery=%EC%84%A0%EB%B0%98","xpos":-0.8811472245297605,"ypos":138.91741331577703,"zpos":318.52438563219795,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"화장실 세면대","item_type":2,"format":"gltf","model_url":"models/gltf/sink2.glb","item_link":"https://search.shopping.naver.com/search/all?query=%ED%99%94%EC%9E%A5%EC%8B%A4%20%EC%84%B8%EB%A9%B4%EB%8C%80&frm=NVSHATC&prevQuery=%EC%96%91%EB%B3%80%EA%B8%B0","xpos":29.93501799093538,"ypos":64.9861553654556,"zpos":406.9091279226144,"rotation":1.5707963267948966,"scale_x":0.55704432295838,"scale_y":0.55704432295838,"scale_z":0.55704432295838,"fixed":true,"material_colors":["#fff2f5","#9d9d9d"]},{"item_name":"양변기","item_type":2,"format":"gltf","model_url":"models/gltf/toilet1.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EC%96%91%EB%B3%80%EA%B8%B0&frm=NVSHATC&prevQuery=%ED%99%94%EC%B4%88","xpos":29.60736285638587,"ypos":52.524943686836906,"zpos":527.1705765009983,"rotation":1.5707963267948966,"scale_x":300,"scale_y":300,"scale_z":300,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"여닫이 창문2","item_type":3,"format":"gltf","model_url":"models/gltf/window.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EC%97%AC%EB%8B%AB%EC%9D%B4%EC%B0%BD&frm=NVSHATC&prevQuery=%EC%97%AC%EB%8B%AB%EC%9D%B4%20%EC%B0%BD","xpos":-15.599999999999994,"ypos":171.28255502153894,"zpos":526.0350970846625,"rotation":1.5707963267948966,"scale_x":300,"scale_y":300,"scale_z":300,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"화장실 유리","item_type":2,"format":"gltf","model_url":"models/gltf/bathroomMirror.glb","item_link":"https://search.shopping.naver.com/search/all?query=%ED%99%94%EC%9E%A5%EC%8B%A4%20%EC%9C%A0%EB%A6%AC&frm=NVSHATC&prevQuery=%ED%99%94%EC%9E%A5%EC%8B%A4%EC%9C%A0%EB%A6%AC","xpos":3.2757889694017486,"ypos":142.54048762479414,"zpos":407.54280271605694,"rotation":1.5707963267948966,"scale_x":199.11064975672744,"scale_y":199.11064975672744,"scale_z":199.11064975672744,"fixed":true,"material_colors":["#e49964","#bcd1d6","#b2d3c4"]},{"item_name":"닫힌 문","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","item_link":"https://search.shopping.naver.com/search/all?query=%EB%B0%A9%EB%AC%B8&frm=NVSHATC&prevQuery=%EB%AC%B8","xpos":483.4,"ypos":105.01,"zpos":520.6432170479372,"rotation":-1.5707963267948966,"scale_x":0.9477389637277372,"scale_y":0.9477389637277372,"scale_z":0.9477389637277372,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"욕조2","item_type":2,"format":"gltf","model_url":"models/gltf/tub.glb","item_link":"https://search.shopping.naver.com/search/all?query=%EC%9A%95%EC%A1%B0&frm=NVSHATC&prevQuery=%ED%99%94%EC%9E%A5%EC%8B%A4%20%EC%9C%A0%EB%A6%AC","xpos":418.93779983520506,"ypos":43.27089881896973,"zpos":281.2407539367676,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#fafafa"]}]}'

/*
 * Floorplanner controls
 */

var ViewerFloorplanner = function(blueprint3d)
{
  var canvasWrapper = '#floorplanner';
  // buttons
  var move = '#move';
  var remove = '#delete';
  var draw = '#draw';

  var activeStlye = 'btn-primary disabled';
  this.floorplanner = blueprint3d.floorplanner;
  var scope = this;
  function init()
  {
    $( window ).resize( scope.handleWindowResize );
    scope.handleWindowResize();

    scope.floorplanner.addEventListener(BP3DJS.EVENT_MODE_RESET, function(mode)
    {
      $(draw).removeClass(activeStlye);
      $(remove).removeClass(activeStlye);
      $(move).removeClass(activeStlye);
      if (mode == BP3DJS.floorplannerModes.MOVE)
      {
          $(move).addClass(activeStlye);
      }
      else if (mode == BP3DJS.floorplannerModes.DRAW)
      {
          $(draw).addClass(activeStlye);
      }
      else if (mode == BP3DJS.floorplannerModes.DELETE)
      {
          $(remove).addClass(activeStlye);
      }

      if (mode == BP3DJS.floorplannerModes.DRAW)
      {
        $("#draw-walls-hint").show();
        scope.handleWindowResize();
      }
      else
      {
        $("#draw-walls-hint").hide();
      }
    });

    $(move).click(function()
    {
      scope.floorplanner.setMode(BP3DJS.floorplannerModes.MOVE);
    });

    $(draw).click(function()
    {
      scope.floorplanner.setMode(BP3DJS.floorplannerModes.DRAW);
    });

    $(remove).click(function()
    {
      scope.floorplanner.setMode(BP3DJS.floorplannerModes.DELETE);
    });
  }

  this.updateFloorplanView = function() {
    scope.floorplanner.reset();
  }

  this.handleWindowResize = function() {
    $(canvasWrapper).height(window.innerHeight - $(canvasWrapper).offset().top);
    scope.floorplanner.resizeView();
  };

  init();
};

// function removeCheck() {

// 	if (confirm("정말 삭제하시겠습니까??") == true){    //확인
   
// 		document.removefrm.submit();
   
// 	}else{   //취소
   
// 		return false;
   
// 	}
   
//    }



var mainControls = function(blueprint3d)
{
	  var blueprint3d = blueprint3d;

	  function newDesign(){

	  if (confirm("새로 작성하시겠습니까?(작성된 파일은 삭제됩니다.)") == true){    //확인
		blueprint3d.model.loadSerialized(myhome);
		document.removefrm.submit();
	    }else{   //취소
			
		return false;
   
		}
	}
	
	  function loadDesign()
	  {
	    files = $("#loadFile").get(0).files;
      if(files.length == 0)
      {
          files = $("#loadFile2d").get(0).files;
      }
	    var reader  = new FileReader();
	    reader.onload = function(event) {
	        var data = event.target.result;
	        blueprint3d.model.loadSerialized(data);
	    }
	    reader.readAsText(files[0]);
	  }

	  function saveDesign() {
	    var data = blueprint3d.model.exportSerialized();
	    var a = window.document.createElement('a');
	    var blob = new Blob([data], {type : 'text'});
	    a.href = window.URL.createObjectURL(blob);
	    a.download = 'design.blueprint3d';
	    document.body.appendChild(a)
	    a.click();
	    document.body.removeChild(a)
	  }

	  function saveGLTF()
	  {
		  blueprint3d.three.exportForBlender();
	  }

	  function saveGLTFCallback(o)
	  {
		var data = o.gltf;
		var a = window.document.createElement('a');
		var blob = new Blob([data], {type : 'text'});
		a.href = window.URL.createObjectURL(blob);
		a.download = 'design.gltf';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	  }

	  function saveMesh() {
		    var data = blueprint3d.model.exportMeshAsObj();
		    var a = window.document.createElement('a');
		    var blob = new Blob([data], {type : 'text'});
		    a.href = window.URL.createObjectURL(blob);
		    a.download = 'design.obj';
		    document.body.appendChild(a)
		    a.click();
		    document.body.removeChild(a)
		  }

	  function init() {
	    $("#new").click(newDesign);
	    $("#new2d").click(newDesign);
	    $("#loadFile").change(loadDesign);
	    $("#saveFile").click(saveDesign);

      $("#loadFile2d").change(loadDesign);
	    $("#saveFile2d").click(saveDesign);

	    $("#saveMesh").click(saveMesh);
	    $("#saveGLTF").click(saveGLTF);
	    blueprint3d.three.addEventListener(BP3DJS.EVENT_GLTF_READY, saveGLTFCallback);
	  }

	  init();
}

var GlobalProperties = function()
{
	this.name = 'Global';
	//a - feet and inches, b = inches, c - cms, d - millimeters, e - meters
	this.units = {a:false, b:false, c:false, d:false, e:true};
	this.unitslabel = {a:BP3DJS.dimFeetAndInch, b:BP3DJS.dimInch, c:BP3DJS.dimCentiMeter, d:BP3DJS.dimMilliMeter, e:BP3DJS.dimMeter};
	this.guiControllers = null;

	this.setUnit = function(unit)
	{
		for (let param in this.units)
		{
			this.units[param] = false;
		}
		this.units[unit] = true;

		BP3DJS.Configuration.setValue(BP3DJS.configDimUnit, this.unitslabel[unit]);

		console.log(this.units, this.unitslabel[unit], BP3DJS.Configuration.getStringValue(BP3DJS.configDimUnit));
		
//		globalPropFolder = getGlobalPropertiesFolder(gui, aGlobal, floorplanner);
		var view2df = construct2dInterfaceFolder(globalPropFolder, aGlobal, blueprint3d.floorplanner);
		blueprint3d.floorplanner.view.draw();
		for (var i in this.guiControllers) // Iterate over gui controllers to update the values
		{
			this.guiControllers[i].updateDisplay();
	    }
	}

	this.setGUIControllers = function(guiControls)
	{
		this.guiControllers = guiControls;
	}
}

var CameraProperties = function()
{
	this.ratio = 1;
	this.ratio2 = 1;
	this.locked = false;
	this.three = null;

	this.change = function()
	{
		if(this.three)
		{
			this.three.changeClippingPlanes(this.ratio, this.ratio2);
		}
	}

	this.changeLock = function()
	{
		if(this.three)
		{
			this.three.lockView(!this.locked);
		}
	}

	this.reset = function()
	{
		if(this.three)
		{
			this.three.resetClipping();
		}
	}
}

var CornerProperties = function(corner, gui)
{
	var scope = this;
	this.x = BP3DJS.Dimensioning.cmToMeasureRaw(corner.x);
	this.y = BP3DJS.Dimensioning.cmToMeasureRaw(corner.y);
	this.elevation = BP3DJS.Dimensioning.cmToMeasureRaw(corner.elevation);
	this.gui = gui;
	this.corner = corner;
	
	function onEvent()
	{
		scope.x = BP3DJS.Dimensioning.cmToMeasureRaw(scope.corner.x);
		scope.y = BP3DJS.Dimensioning.cmToMeasureRaw(scope.corner.y);
		scope.elevation = BP3DJS.Dimensioning.cmToMeasureRaw(scope.corner.elevation);
		scope.xcontrol.updateDisplay();
		scope.ycontrol.updateDisplay();
		scope.elevationcontrol.updateDisplay();
	}
	
	function onChangeX()
	{
		scope.corner.x = BP3DJS.Dimensioning.cmFromMeasureRaw(scope.x);
	}
	function onChangeY()
	{
		scope.corner.y = BP3DJS.Dimensioning.cmFromMeasureRaw(scope.y);
	}
	function onChangeElevation()
	{
		scope.corner.elevation = BP3DJS.Dimensioning.cmFromMeasureRaw(scope.elevation);
	}
	
	this.corner.addEventListener(BP3DJS.EVENT_CORNER_ATTRIBUTES_CHANGED, onEvent);
//	this.corner.addEventListener(BP3DJS.EVENT_MOVED, onEvent);
		
	this.f = gui.addFolder('선택한 모서리(2D)');
	// this.xcontrol = f.add(this, 'x').name(`x(${BP3DJS.Configuration.getStringValue(BP3DJS.configDimUnit)})`).step(0.01).onChange(()=>{onChangeX()});
	// this.ycontrol = f.add(this, 'y').name(`y(${BP3DJS.Configuration.getStringValue(BP3DJS.configDimUnit)})`).step(0.01).onChange(()=>{onChangeY()});
	this.elevationcontrol = f.add(this, 'elevation').name(`모서리의 높이(${BP3DJS.Configuration.getStringValue(BP3DJS.configDimUnit)})`).min(0).step(0.01).onChange(()=>{onChangeElevation()});  
	
	
	return this.f;
}

var RoomProperties = function(room, gui)
{
	var scope = this;
	this.gui = gui;
	this.room = room;		
	this.f = gui.addFolder('선택한 공간(2D)');
	this.namecontrol = f.add(room, 'name').name("공간의 이름");
	return this.f;
}

var Wall2DProperties = function(wall2d, gui)
{
	var scope = this;
	this.gui = gui;
	this.wall2d = wall2d;		
	this.walltype = 'Straight';
	this.walllength = BP3DJS.Dimensioning.cmToMeasureRaw( wall2d.wallSize);
	function onChangeWallType()
	{
		if(scope.walltype == 'Straight')
		{
			scope.wall2d.wallType = BP3DJS.WallTypes.STRAIGHT;
		}
		else if(scope.walltype == 'Curved')
		{
			scope.wall2d.wallType = BP3DJS.WallTypes.CURVED;
			
		}
		blueprint3d.floorplanner.view.draw();
	}
	
	function onChangeWallLength()
	{
		scope.wall2d.wallSize = BP3DJS.Dimensioning.cmFromMeasureRaw(scope.walllength);
		blueprint3d.floorplanner.view.draw();
	}
	
	
	this.options = ['Straight', 'Curved'];
	if(this.wall2d.wallType == BP3DJS.WallTypes.CURVED)
	{
		this.walltype = 'Curved';
	}
	this.f = gui.addFolder('선택한 벽(2D)');
	/*wall type 숨기기 */ 
	// this.typecontrol = f.add(this, 'walltype', this.options).name("Wall Type").onChange(()=>{onChangeWallType()});
	if(this.wall2d.wallType == BP3DJS.WallTypes.STRAIGHT)
	{
		this.lengthcontrol = f.add(this, 'walllength').name("벽의 길이").onChange(()=>{onChangeWallLength()});
	}	
	return this.f;
}

var ItemProperties = function(gui)
{
	this.name = 'an item';
	this.link = null;
	this.width = 10;
	this.height = 10;
	this.depth = 10;
	this.fixed = false;
	this.currentItem = null;
	this.guiControllers = null;
	this.gui = gui;
	this.materialsfolder = null;
	this.materials = {};
	this.totalmaterials = -1;
	this.proportionalsize = false;
	this.changingdimension = 'w';

	this.setGUIControllers = function(guiControls)
	{
		this.guiControllers = guiControls;
	}

	this.setItem = function(item)
	{
		this.currentItem = item;
		if(this.materialsfolder)
		{
			this.gui.removeFolder(this.materialsfolder.name);
		}
		if(item)
		{
			var scope = this;
			var material = item.material;
			this.name = item.metadata.itemName;
			this.link = item.metadata.itemLink;
			this.width = BP3DJS.Dimensioning.cmToMeasureRaw(item.getWidth());
			this.height = BP3DJS.Dimensioning.cmToMeasureRaw(item.getHeight());
			this.depth = BP3DJS.Dimensioning.cmToMeasureRaw(item.getDepth());
			this.fixed = item.fixed;
			this.proportionalsize = item.getProportionalResize();

			for (var i in this.guiControllers) // Iterate over gui controllers to update the values
			{
				this.guiControllers[i].updateDisplay();
		    }
			
			
			// materials 기능활성함 오류수정함 (코드재작성) 
			this.materialsfolder =  this.gui.addFolder('Materials');
			this.materials = {};
			this.materialsfolder.name = ('제품 색상 변경(3D)')
			if(material.length)
			{
				this.totalmaterials = material.length;
				for (var i=0;i<material.length;i++)
				{
					this.materials['mat_'+i] = '#'+material[i].color.getHexString();
					var matname = (material[i].name) ? material[i].name : 'Material '+(i+1);
					var ccontrol = this.materialsfolder.addColor(this.materials, 'mat_'+i).name(matname).onChange(()=>{scope.dimensionsChanged()});
				}
				return;
			}
			this.totalmaterials = 1;
			var matname = (material.name) ? material.name : 'Material 1';
			this.materials['mat_0'] = '#'+material.color.getHexString();
			var ccontrol = this.materialsfolder.addColor(this.materials, 'mat_0').name(matname).onChange(()=>{scope.dimensionsChanged()});
			return;
		}
		this.name = 'None';
		return;
	}

	this.dimensionsChanged = function()
	{
		if(this.currentItem)
		{
			var item = this.currentItem;

			var ow = BP3DJS.Dimensioning.cmToMeasureRaw(item.getWidth());
			var oh = BP3DJS.Dimensioning.cmToMeasureRaw(item.getHeight());
			var od = BP3DJS.Dimensioning.cmToMeasureRaw(item.getDepth());

			var h = BP3DJS.Dimensioning.cmFromMeasureRaw(this.height);
			var w = BP3DJS.Dimensioning.cmFromMeasureRaw(this.width);
			var d = BP3DJS.Dimensioning.cmFromMeasureRaw(this.depth);

			this.currentItem.resize(h,w,d);

			if( w != ow)
			{
				this.height = BP3DJS.Dimensioning.cmToMeasureRaw(item.getHeight());
				this.depth = BP3DJS.Dimensioning.cmToMeasureRaw(item.getDepth());
			}

			if( h != oh)
			{
				this.width = BP3DJS.Dimensioning.cmToMeasureRaw(item.getWidth());
				this.depth = BP3DJS.Dimensioning.cmToMeasureRaw(item.getDepth());
			}

			if( d != od)
			{
				this.width = BP3DJS.Dimensioning.cmToMeasureRaw(item.getWidth());
				this.height = BP3DJS.Dimensioning.cmToMeasureRaw(item.getHeight());
			}
			for (var i=0;i<this.totalmaterials;i++)
			{
				this.currentItem.setMaterialColor(this.materials['mat_'+i], i);
			}

			this.guiControllers.forEach((control)=>{control.updateDisplay()}); // Iterate over gui controllers to update the values
		}
	}

	this.proportionFlagChange = function()
	{
		if(this.currentItem)
		{
			this.currentItem.setProportionalResize(this.proportionalsize);
		}
	}

	this.lockFlagChanged = function()
	{
		if(this.currentItem)
		{
			this.currentItem.setFixed(this.fixed);
		}
	}

	this.deleteItem = function()
	{
		if(this.currentItem)
		{
			this.currentItem.remove();
			this.setItem(null);
		}
	}

	// 검색기능 링크 연결
	this.linkurl = function()
	{

		if(this.currentItem)
		{
			var item = this.currentItem;
			window.open(item.metadata.itemLink, "네이버쇼핑검색", "width=750,height=600, left=1000, top=100, location=no,menubar=no,resizable=no,status=no,titlebar=no,toolbar=no ");
		}
	
	}


}

var WallProperties = function() // 벽지과 바닥 텍스쳐 추가
{
	this.textures = [
		['rooms/textures/wall_floor/01.모던회벽_라이트그레이.png', true, 1], ['rooms/textures/wall_floor/02.모던회벽_그레이.png', true, 1],
		['rooms/textures/wall_floor/03.모던회벽_화이트.png', false, 300], ['rooms/textures/wall_floor/04.자이언트스톤_그레이.png', false, 300],
		['rooms/textures/wall_floor/05.자이언트스톤_베이지.png', false, 300], ['rooms/textures/wall_floor/06.회벽_골드.png', false, 300],
		['rooms/textures/wall_floor/07.회벽_그레이.png', false, 300], ['rooms/textures/wall_floor/08.회벽_딥그레이.png', false, 300],
		['rooms/textures/wall_floor/09.회벽_라이트그레이.png', false, 300], ['rooms/textures/wall_floor/10.회벽_라이트베이지.png', false, 300],
		['rooms/textures/wall_floor/11.회벽_미들그레이.png', false, 300], ['rooms/textures/wall_floor/12.회벽_베이지.png', false, 300],
		['rooms/textures/wall_floor/13.회벽_소프트그레이.png', false, 300], ['rooms/textures/wall_floor/14.회벽_화이트.png', false, 300],
		['rooms/textures/wall_floor/20.타일_크림임페리얼.png', false, 300], ['rooms/textures/wall_floor/21.타일_실버임페리얼.png', false, 300],
		['rooms/textures/wall_floor/22.원목마루_밀키화이트.png', false, 300], ['rooms/textures/wall_floor/23.원목마루_애쉬.png', false, 300],
		['rooms/textures/wall_floor/24.원목마루_월넛.png', false, 300], ['rooms/textures/wall_floor/25.콘크리트라이트.png', false, 300],
		['rooms/textures/wall_floor/26.콘크리트그레이.png', false, 300],
	];
		

	this.floormaterialname = 0;
	this.wallmaterialname = 0;

	this.forAllWalls = false;

	this.currentWall = null;
	this.currentFloor = null;

	this.wchanged = function()
	{
		if(this.currentWall)
		{
			this.currentWall.setTexture(this.textures[this.wallmaterialname][0], this.textures[this.wallmaterialname][1], this.textures[this.wallmaterialname][2]);
		}
		if(this.currentWall && this.forAllWalls)
		{
			this.currentFwall.setRoomWallsTexture(this.textures[this.wallmaterialname][0], this.textures[this.wallmaterialname][1], this.textures[this.wallmaterialname][2]);
		}
	}

	this.fchanged = function()
	{
		if(this.currentFloor)
		{
			this.currentFloor.setTexture(this.textures[this.floormaterialname][0], this.textures[this.floormaterialname][1], this.textures[this.floormaterialname][2]);
		}
	}


	this.setWall = function(wall)
	{
		this.currentWall = wall;
	}

	this.setFloor = function(floor)
	{
		this.currentFloor = floor;
	}
}

// var MainView = function(blueprint3d, floorplanControls, modalEffects) {
// 	var blueprint3d = blueprint3d;
// 	var floorplanControls = floorplanControls;
// 	var modalEffects = modalEffects;


// 	var scope = this;
// 	this.stateChangeCallbacks = $.Callbacks();
  
// 	this.states = {
// 	  "DEFAULT" : {
// 		"div" : $("#viewer"),
// 	  },
// 	  "FLOORPLAN" : {
// 		"div" : $("#floorplanner"),
// 	  },
// 	}


// 여기에서  기능추가 함수를 짠다.


function addBlueprintListeners(blueprint3d)
{
	var three = blueprint3d.three;	 
	var currentFolder = undefined; 
	
	function closeCurrent3DSelectionFolders()
	{
		if(itemPropFolder && itemPropFolder != null)
		{
			itemPropFolder.close();
			selectionsFolder.removeFolder(itemPropFolder.name);
		}
		if(wallPropFolder && wallPropFolder != null)
		{
			wallPropFolder.close();
			selectionsFolder.removeFolder(wallPropFolder.name);
		}
	}
	function wallClicked(wall)
	{
		closeCurrent3DSelectionFolders();
		
		aWall = new WallProperties();
		aWall.setWall(wall);
		aWall.setFloor(null);		
		wallPropFolder = getWallAndFloorPropertiesFolderwall(selectionsFolder, aWall);
//		selectionsFolder.addFolder(wallPropFolder);
		
		wallPropFolder.open();
		selectionsFolder.open();
	}

	function floorClicked(floor)
	{
		closeCurrent3DSelectionFolders();
		
		aWall = new WallProperties();
		aWall.setFloor(floor);
		aWall.setWall(null);
		
		wallPropFolder = getWallAndFloorPropertiesFolderfloor(selectionsFolder, aWall);
//		selectionsFolder.addFolder(wallPropFolder);
		
		wallPropFolder.open();
		selectionsFolder.open();
	}

	function itemSelected(item)
	{
		closeCurrent3DSelectionFolders();
	

		// materials 기능 item 에서 item 건너갈때 오류 정정
		if(void 0 !== selectionsFolder.__folders.Materials)
		{
			selectionsFolder.removeFolder('Materials');
		}

		anItem = new ItemProperties(selectionsFolder, item);
		anItem.setItem(item);  // 주석 해제
		
		itemPropFolder = getItemPropertiesFolder(selectionsFolder, anItem);
		// selectionsFolder.addFolder(itemPropFolder); 
		itemPropFolder.open();
		selectionsFolder.open();



	

	}
	

	  

	// materials 기능구현 부분 
	function itemUnselected()
	{
		// closeCurrent3DSelectionFolders();
		// if(anItem!=null)
		// {
		// 	anItem.setItem(undefined);
		// }
		// materials 기능 item 에서 선택해제할때  오류 정정
		if(void 0 !== selectionsFolder.__folders.Materials)
		{
			selectionsFolder.removeFolder('Materials');
		}
	}
	
	three.addEventListener(BP3DJS.EVENT_ITEM_SELECTED, function(o){itemSelected(o.item);});
	three.addEventListener(BP3DJS.EVENT_ITEM_UNSELECTED, function(o){itemUnselected();});
	three.addEventListener(BP3DJS.EVENT_WALL_CLICKED, (o)=>{wallClicked(o.item);});
    three.addEventListener(BP3DJS.EVENT_FLOOR_CLICKED, (o)=>{floorClicked(o.item);});
    three.addEventListener(BP3DJS.EVENT_FPS_EXIT, ()=>{$('#showDesign').trigger('click')});
    
    function echoEvents(o)
    {	
//    	console.log(o.type, o.item);
    }	
    
    function addGUIFolder(o)
    {	
//    	console.log(o.type, o.item);
    	if(currentFolder)
		{
    		selectionsFolder.removeFolder(currentFolder.name);
		}
    	if(o.type == BP3DJS.EVENT_CORNER_2D_CLICKED)
		{
    		currentFolder = CornerProperties(o.item, selectionsFolder);//getCornerPropertiesFolder(gui, o.item);
		}
    	else if(o.type == BP3DJS.EVENT_ROOM_2D_CLICKED)
		{
    		currentFolder = RoomProperties(o.item, selectionsFolder);//getRoomPropertiesFolder(gui, );
		}
    	else if(o.type == BP3DJS.EVENT_WALL_2D_CLICKED)
		{
    		currentFolder = Wall2DProperties(o.item, selectionsFolder);
		}
    	if(currentFolder)
		{
    		currentFolder.open();
    		selectionsFolder.open();
		}
    }	
    
    var model_floorplan = blueprint3d.model.floorplan;
    model_floorplan.addEventListener(BP3DJS.EVENT_CORNER_2D_DOUBLE_CLICKED, echoEvents);
    model_floorplan.addEventListener(BP3DJS.EVENT_WALL_2D_DOUBLE_CLICKED, echoEvents);
    model_floorplan.addEventListener(BP3DJS.EVENT_ROOM_2D_DOUBLE_CLICKED, echoEvents);
    
    model_floorplan.addEventListener(BP3DJS.EVENT_NOTHING_CLICKED, addGUIFolder);
    model_floorplan.addEventListener(BP3DJS.EVENT_CORNER_2D_CLICKED, addGUIFolder);
    model_floorplan.addEventListener(BP3DJS.EVENT_WALL_2D_CLICKED, addGUIFolder);
    model_floorplan.addEventListener(BP3DJS.EVENT_ROOM_2D_CLICKED, addGUIFolder);
    
    model_floorplan.addEventListener(BP3DJS.EVENT_CORNER_2D_HOVER, echoEvents);
    model_floorplan.addEventListener(BP3DJS.EVENT_WALL_2D_HOVER, echoEvents);
    model_floorplan.addEventListener(BP3DJS.EVENT_ROOM_2D_HOVER, echoEvents);
    
    model_floorplan.addEventListener(BP3DJS.EVENT_CORNER_ATTRIBUTES_CHANGED, echoEvents);
    model_floorplan.addEventListener(BP3DJS.EVENT_WALL_ATTRIBUTES_CHANGED, echoEvents);
    model_floorplan.addEventListener(BP3DJS.EVENT_ROOM_ATTRIBUTES_CHANGED, echoEvents);
    
    
    function deleteEvent(evt)
    {
    	console.log('DELETED ', evt);
    }
    
    model_floorplan.addEventListener(BP3DJS.EVENT_DELETED, deleteEvent);
    
    BP3DJS.Configuration.setValue(BP3DJS.configSystemUI, false);
    
    
// three.skybox.toggleEnvironment(this.checked);
// currentTarget.setTexture(textureUrl, textureStretch, textureScale);
// three.skybox.setEnvironmentMap(textureUrl);
}

function getCornerPropertiesFolder(gui, corner)
{
	var f = gui.addFolder('Current Corner');
	var xcontrol = f.add(corner, 'x').name("x").step(0.01);
	var ycontrol = f.add(corner, 'y').name("y").step(0.01);
	var elevationctonrol = f.add(corner, 'elevation').name("Elevation").step(0.01);
	// elevationctonrol.add(BP3DJS.config, 'elevation', 4, 10,).step(0.01).onChange(onChangeElevation); 
	// elevation 시작값 2.5에서 4로 변경하려고 시도중
	return f;	
}

function getRoomPropertiesFolder(gui, room)
{
	var f = gui.addFolder('Current Room');
	var namecontrol = f.add(corner, 'name').name("Name");
	return f;	
}

function getCameraRangePropertiesFolder(gui, camerarange)
{
	var f = gui.addFolder('카메라 설정');
	// var ficontrol = f.add(camerarange, 'ratio', -1, 1).name("Range").step(0.01).onChange(function(){camerarange.change()});
	// var ficontrol2 = f.add(camerarange, 'ratio2', -1, 1).name("Range 2").step(0.01).onChange(function(){camerarange.change()});
	var flockcontrol = f.add(camerarange, 'locked').name("화면고정").onChange(function(){camerarange.changeLock()});
	// var resetControl = f.add(camerarange, 'reset').name('Reset');
	
	
	return f;

}

function construct2dInterfaceFolder(f, global, floorplanner)
{
	function onChangeSnapResolution()
	{
		BP3DJS.Configuration.setValue(BP3DJS.snapTolerance, BP3DJS.Dimensioning.cmFromMeasureRaw(view2dindirect.snapValue));
	}
	
	function onChangeGridResolution()
	{
		BP3DJS.Configuration.setValue(BP3DJS.gridSpacing, BP3DJS.Dimensioning.cmFromMeasureRaw(view2dindirect.gridResValue));
		blueprint3d.floorplanner.view.draw();
	}
	
	var units = BP3DJS.Configuration.getStringValue(BP3DJS.configDimUnit);
	var view2dindirect = {
			'snapValue': BP3DJS.Dimensioning.cmToMeasureRaw(BP3DJS.Configuration.getNumericValue(BP3DJS.snapTolerance)), 
			'gridResValue': BP3DJS.Dimensioning.cmToMeasureRaw(BP3DJS.Configuration.getNumericValue(BP3DJS.gridSpacing))
			};	
	
	f.removeFolder('2D 포트폴리오 편집옵션');
	
	var view2df = f.addFolder('2D 포트폴리오 편집옵션');
	view2df.add(BP3DJS.config, 'snapToGrid',).name("점 직각 이동");
	view2df.add(view2dindirect, 'snapValue', 0.1).name(`점 이동 크기(${units})`).onChange(onChangeSnapResolution);
	view2df.add(view2dindirect, 'gridResValue', 0.1).name(`격자 눈금 크기(${units})`).onChange(onChangeGridResolution);
	view2df.add(BP3DJS.config, 'scale', 0.25, 5, ).step(0.25).name('화면크기').onChange(()=>{
//	view2df.add(BP3DJS.config, 'scale', 1.0, 10, ).step(0.25).onChange(()=>{
		blueprint3d.floorplanner.zoom();
//		blueprint3d.floorplanner.view.zoom();
		blueprint3d.floorplanner.view.draw();
		});
	
	/* Wall Measurements 제거 */ 
	// var wallf = view2df.addFolder('Wall Measurements');
	// wallf.add(BP3DJS.wallInformation, 'exterior').name('Exterior');
	// wallf.add(BP3DJS.wallInformation, 'interior').name('Interior');
	// wallf.add(BP3DJS.wallInformation, 'midline').name('Midline');
	// wallf.add(BP3DJS.wallInformation, 'labels').name('Labels');
	// wallf.add(BP3DJS.wallInformation, 'exteriorlabel').name('Label for Exterior');
	// wallf.add(BP3DJS.wallInformation, 'interiorlabel').name('Label for Interior');
	// wallf.add(BP3DJS.wallInformation, 'midlinelabel').name('Label for Midline');
	
	/* carbon sheet 제거 */ 
	// var carbonPropsFolder = getCarbonSheetPropertiesFolder(view2df, floorplanner.carbonSheet, global);
	
	view2df.open();
	return view2df;
}

function getGlobalPropertiesFolder(gui, global, floorplanner)
{
	var f = gui.addFolder('인터페이스 및 구성');
	
	var unitsf = f.addFolder('단위');	
	var ficontrol = unitsf.add(global.units, 'a',).name("피트(Feets)").onChange(function(){global.setUnit("a")});
	var icontrol = unitsf.add(global.units, 'b',).name("인치(Inches)'").onChange(function(){global.setUnit("b")});
	var ccontrol = unitsf.add(global.units, 'c',).name('센치미터(cm)').onChange(function(){global.setUnit("c")});
	var mmcontrol = unitsf.add(global.units, 'd',).name('밀리미터(mm)').onChange(function(){global.setUnit("d")});
	var mcontrol = unitsf.add(global.units, 'e',).name('미터(m)').onChange(function(){global.setUnit("e")});
	global.setGUIControllers([ficontrol, icontrol, ccontrol, mmcontrol, mcontrol]);
	
	// BP3DJS.Dimensioning.cmFromMeasureRaw(scope.x);
	// BP3DJS.Dimensioning.cmToMeasureRaw(scope.x);
	
	f.open();
	return f;
}
/* carbon sheet 제거 */ 
// function getCarbonSheetPropertiesFolder(gui, carbonsheet, globalproperties)
// {
// 	var f = gui.addFolder('Carbon Sheet');
// 	var url = f.add(carbonsheet, 'url').name('Url');
// 	var width = f.add(carbonsheet, 'width').name('Real Width').max(1000.0).step(0.01);
// 	var height = f.add(carbonsheet, 'height').name('Real Height').max(1000.0).step(0.01);
// 	var proportion = f.add(carbonsheet, 'maintainProportion').name('Maintain Proportion');
// 	var x = f.add(carbonsheet, 'x').name('Move in X');
// 	var y = f.add(carbonsheet, 'y').name('Move in Y');

// 	var ax = f.add(carbonsheet, 'anchorX').name('Anchor X');
// 	var ay = f.add(carbonsheet, 'anchorY').name('Anchor Y');
// 	var transparency = f.add(carbonsheet, 'transparency').name('Transparency').min(0).max(1.0).step(0.05);
// 	carbonsheet.addEventListener(BP3DJS.EVENT_UPDATED, function(){
// 		url.updateDisplay();
// 		width.updateDisplay();
// 		height.updateDisplay();
// 		x.updateDisplay();
// 		y.updateDisplay();
// 		ax.updateDisplay();
// 		ay.updateDisplay();
// 		transparency.updateDisplay(width);
// 	});

// 	globalproperties.guiControllers.push(width);
// 	globalproperties.guiControllers.push(height);
// 	return f;
// }

function getItemPropertiesFolder(gui, anItem)
{
	var f = gui.addFolder('인테리어 제품(3D)')
	var namecontrol = f.add(anItem, 'name').name('제품이름');
	var linkurl = f.add(anItem, 'linkurl').name('네이버쇼핑검색'); // 검색기능 추가
	var wcontrol = f.add(anItem, 'width', 0.05, 5.1).step(0.1).name('폭'); // 최대치 1000.1 -> 5.1 로 변경
	var hcontrol = f.add(anItem, 'height', 0.05, 5.1).step(0.1).name('높이'); // 최대치 1000.1 -> 5.1 로 변경
	var dcontrol = f.add(anItem, 'depth', 0.05, 5.1).step(0.1).name('깊이'); // 최대치 1000.1 -> 5.1 로 변경
	var pcontrol = f.add(anItem, 'proportionalsize').name('비율 고정');
	var lockcontrol = f.add(anItem, 'fixed').name('위치 고정');
	var deleteItemControl = f.add(anItem, 'deleteItem').name('항목 삭제');
	

	function changed()
	{
		anItem.dimensionsChanged();
	}

	function lockChanged()
	{
		anItem.lockFlagChanged();
	}

	function proportionFlagChanged()
	{
		anItem.proportionFlagChange();
	}
	// 이부분도 필요없네
	// function deleteItem()
	// {
	// 	anItem.deleteItem();
	// }

	// function linkurl()
	// {
	// 	anItem.linkurl();
	// }

	wcontrol.onChange(changed);
	hcontrol.onChange(changed);
	dcontrol.onChange(changed);
	pcontrol.onChange(proportionFlagChanged);
	lockcontrol.onChange(lockChanged);
	
	

	// anItem.setGUIControllers([inamecontrol, wcontrol, hcontrol, dcontrol, pcontrol, lockcontrol, deleteItemControl]);
    // 주석처리해도 문제없네. 왜지? 해도되고 안해도 되고
	return f;
}

function getWallAndFloorPropertiesFolderwall(gui, aWall)
{
	var f = gui.addFolder('벽면(3D)');
	var wcontrol = f.add(aWall, 'wallmaterialname', 
	{
		모던회벽_라이트그레이: 0 , 모던회벽_그레이: 1, 모던회벽_화이트: 2, 자이언트스톤_그레이: 3, 자이언트스톤_베이지: 4, 
		회벽_골드: 5, 회벽_그레이: 6, 회벽_딥그레이: 7, 회벽_라이트그레이: 8, 회벽_라이트베이지: 9,
		회벽_미들그레이: 10, 회벽_베이지: 11, 회벽_소프트그레이: 12, 회벽_화이트: 13, 
	}
	).name('벽지종류선택');
	// var fcontrol = f.add(aWall, 'floormaterialname', {'Fine Wood': 5, 'Hard Wood': 6}).name('Floor');
	// var multicontrol = f.add(aWall, 'forAllWalls').name('공간 전체적용');
	function wchanged()
	{
		aWall.wchanged();
	}

	// function fchanged()
	// {
	// 	aWall.fchanged();
	// }

	wcontrol.onChange(wchanged);
	// multicontrol.onChange(wchanged);
	// fcontrol.onChange(fchanged);
	return f;
}
function getWallAndFloorPropertiesFolderfloor(gui, aWall)
{
	var f = gui.addFolder('바닥면(3D)');datGUI
	// var wcontrol = f.add(aWall, 'wallmaterialname', {Grey: 0, Yellow: 1, Checker: 2, Marble: 3, Bricks: 4}).name('Wall');
	var fcontrol = f.add(aWall, 'floormaterialname', 
	{
		'타일_크림임페리얼': 14, '타일_실버임페리얼': 15, '원목마루_밀키화이트': 16, '원목마루_애쉬': 17,
		'원목마루_월넛': 18, '콘크리트라이트': 19, '콘크리트그레이':20,
	}
	).name('바닥종류선택');
	// var multicontrol = f.add(aWall, 'forAllWalls').name('공간 전체적용');
	// function wchanged()
	// {
	// 	aWall.wchanged();
	// }

	function fchanged()
	{
		aWall.fchanged();
	}

	// wcontrol.onChange(wchanged);
	fcontrol.onChange(fchanged);
	return f;
}

function datGUI(three, floorplanner)
{
	gui = new dat.GUI();	
	aCameraRange = new CameraProperties();	
	aCameraRange.three = three;
	aGlobal = new GlobalProperties();
	globalPropFolder = getGlobalPropertiesFolder(gui, aGlobal, floorplanner);	

	f3d = globalPropFolder.addFolder('3D 포트폴리오 편집옵션')
	cameraPropFolder = getCameraRangePropertiesFolder(f3d, aCameraRange);
	
	var view2df = construct2dInterfaceFolder(globalPropFolder, aGlobal, floorplanner);
	view2df.open();
	
	selectionsFolder = gui.addFolder('선택한 항목');
}


$(document).ready(function()
{
	dat.GUI.prototype.removeFolder = function(name)
	{
		  var folder = this.__folders[name];
		  if (!folder) {
		    return;
		  }
		  folder.close();
		  this.__ul.removeChild(folder.domElement.parentNode);
		  delete this.__folders[name];
		  this.onResize();
	}
	// main setup
	var opts =
	{
			floorplannerElement: 'floorplanner-canvas',
			threeElement: '#viewer',
			threeCanvasElement: 'three-canvas',
			textureDir: "models/textures/",
			widget: false
	}
	blueprint3d = new BP3DJS.BlueprintJS(opts);
	var viewerFloorplanner = new ViewerFloorplanner(blueprint3d);
	
	
	blueprint3d.model.addEventListener(BP3DJS.EVENT_LOADED, function(){console.log('LOAD SERIALIZED JSON ::: ');});
	
	
	mainControls(blueprint3d);
	blueprint3d.model.loadSerialized(myhome);


	addBlueprintListeners(blueprint3d);
	datGUI(blueprint3d.three, blueprint3d.floorplanner);
	blueprint3d.three.stopSpin();
//	gui.closed = true;


	$('#showAddItems').hide();
	$('#viewcontrols').hide();

	$('.card').flip({trigger:'manual', axis:'x'});
	$('#showFloorPlan').click(function()
	{
		$('.card').flip(false);
		$(this).addClass('active');
		$('#showDesign').removeClass('active');
		$('#personFPS').removeClass('active');
		$('#showAddItems').hide();
		$('#viewcontrols').hide();

//		gui.closed = true;
		blueprint3d.three.pauseTheRendering(true);
		blueprint3d.three.getController().setSelectedObject(null);
	});

	$('#showDesign').click(function()
	{
		blueprint3d.model.floorplan.update();
		$('.card').flip(true);
//		gui.closed = false;
		$(this).addClass('active');
		$('#showFloorPlan').removeClass('active');
		$('#personFPS').removeClass('active');

		$('#showAddItems').show();
		$('#viewcontrols').show();

		blueprint3d.three.pauseTheRendering(false);
		blueprint3d.three.switchFPSMode(false);
	});
	$('#personFPS').click(function()
	{
		blueprint3d.model.floorplan.update();
		$('.card').flip(true);
//		gui.closed = true;
		$(this).addClass('active');
		$('#showFloorPlan').removeClass('active');
		$('#showDesign').removeClass('active');

		$('#showAddItems').show();
		$('#viewcontrols').show();

		blueprint3d.three.pauseTheRendering(false);
		blueprint3d.three.switchFPSMode(true);
	});

	$('#showSwitchCameraMode').click(function()
	{
		$(this).toggleClass('active');
		blueprint3d.three.switchOrthographicMode($(this).hasClass('active'));
	});

	$('#showSwitchWireframeMode').click(function()
	{
		$(this).toggleClass('wireframe-active');
		blueprint3d.three.switchWireframe($(this).hasClass('wireframe-active'));
	});

	$('#topview, #isometryview, #frontview, #leftview, #rightview').click(function(){
		blueprint3d.three.switchView($(this).attr('id'));
	});



	$("#add-items").find(".add-item").mousedown(function(e) {
	      var modelUrl = $(this).attr("model-url");
	      var itemType = parseInt($(this).attr("model-type"));
	      var itemFormat = $(this).attr('model-format');


	      var metadata = {
	        itemName: $(this).attr("model-name"),
	        resizable: true,
	        modelUrl: modelUrl,
	        itemType: itemType,
	        format: itemFormat,
			itemLink : $(this).attr("model-link"), // 검색기능 추가

	      }
	      console.log('ITEM TYPE ::: ', itemType);
	      if([2,3,7,9].indexOf(metadata.itemType) != -1 && aWall.currentWall)
    	  {
	    	  var placeAt = aWall.currentWall.center.clone();
	    	  blueprint3d.model.scene.addItem(itemType, modelUrl, metadata, null, null, null, false, {position: placeAt, edge: aWall.currentWall});
    	  }
	      else if(aWall.currentFloor)
    	  {
	    	  var placeAt = aWall.currentFloor.center.clone();
	    	  blueprint3d.model.scene.addItem(itemType, modelUrl, metadata, null, null, null, false, {position: placeAt});
    	  }
	      else
    	  {
	    	  blueprint3d.model.scene.addItem(itemType, modelUrl, metadata);
    	  }
	    });
});
