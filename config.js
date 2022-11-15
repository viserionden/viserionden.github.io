function Config() {}
var config = new Config();
config.size = 8;
config.step = 256;
config.x = 1024;
config.y = 1024;
config.mode = "3d";
config.showDeedBordersIn3dMode = true;
config.showDeedBordersInFlatMode = true;

function Deed(name, x, y, height, permanent, sx, sy, ex, ey) {
	this.name = name;
	this.x = x;
	this.y = y;
	this.sx = sx;
	this.sy = sy;
	this.ex = ex;
	this.ey = ey;
	this.height = height;
	this.permanent = permanent;
}

function FocusZone(name, x, y, height, type, sx, sy, ex, ey) {
	this.name = name;
	this.x = x;
	this.y = y;
	this.sx = sx;
	this.sy = sy;
	this.ex = ex;
	this.ey = ey;
	this.height = height;
	this.type = type;
}

var deeds = [];
var focusZones = [];
focusZones.push(new FocusZone('The Meadow', 927, 1422, 96, 3, 907, 1402, 947, 1442));
focusZones.push(new FocusZone('West Lake', 437, 689, 15, 3, 417, 669, 457, 709));
focusZones.push(new FocusZone('Soulfall East Beach', 1414, 578, 26, 3, 1394, 558, 1434, 598));
focusZones.push(new FocusZone('Soulfall Mountain', 1334, 624, 3760, 3, 1294, 584, 1374, 664));
focusZones.push(new FocusZone('Central Lakes', 1182, 1046, 35, 3, 1162, 1026, 1202, 1066));
focusZones.push(new FocusZone('Northern Shores', 1144, 306, 16, 3, 1124, 286, 1164, 326));
