google.maps.__gjsload__('overlay', function(_){var zu=_.na("j"),Au=_.n(),Bu=function(a){a.$f=a.$f||new Au;return a.$f},Cu=function(a){this.U=new _.xg(function(){var b=a.$f;if(a.getPanes()){if(a.getProjection()){if(!b.j&&a.onAdd)a.onAdd();b.j=!0;a.draw()}}else{if(b.j)if(a.onRemove)a.onRemove();else a.remove();b.j=!1}},0)},Du=function(a,b){function c(){return _.yg(e.U)}var d=Bu(a),e=d.De;e||(e=d.De=new Cu(a));_.C(d.W||[],_.R.removeListener);var f=d.da=d.da||new _.Hl,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("center",g,"projectionCenterQ");
f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.$h=d.$h||new zu(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.W=[_.R.addListener(a,"panes_changed",c),_.R.addListener(g,"zoom_changed",c),_.R.addListener(g,"offset_changed",c),_.R.addListener(b,"projection_changed",c),_.R.addListener(g,"projectioncenterq_changed",c)];c();b instanceof _.se&&(_.um(b,"Ox"),_.wm("Ox","-p",a))},
Gu=function(a){if(a){var b=a.getMap(),c=a.__gmop;if(c){if(c.map==b)return;a.__gmop=null;c.gg()}if(b&&b instanceof _.se){var d=b.__gm;d.overlayLayer?a.__gmop=new Eu(b,a,d.overlayLayer):d.j.then(function(e){e=e.ra;var f=new Fu(b,e);e.sa(f);d.overlayLayer=f;Gu(a)})}}},Eu=function(a,b,c){this.map=a;this.oa=b;this.Yl=c;this.pe=!1;_.um(this.map,"Ox");_.wm("Ox","-p",this.oa);c.l.push(this);c.j&&Hu(this,c.j);c.m.Rf()},Hu=function(a,b){a.oa.get("projection")!=b&&(a.oa.bindTo("panes",a.map.__gm),a.oa.set("projection",
b))},Fu=function(a,b){this.A=a;this.m=b;this.j=null;this.l=[]};_.B(zu,_.S);zu.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.K(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.j:null))};_.B(Cu,_.S);Eu.prototype.draw=function(){this.pe||(this.pe=!0,this.oa.onAdd&&this.oa.onAdd());this.oa.draw&&this.oa.draw()};Eu.prototype.gg=function(){_.xm("Ox","-p",this.oa);this.oa.unbindAll();this.oa.set("panes",null);this.oa.set("projection",null);_.gb(this.Yl.l,this);this.pe&&(this.pe=!1,this.oa.onRemove?this.oa.onRemove():this.oa.remove())};Fu.prototype.dispose=_.n();
Fu.prototype.zb=function(a,b,c,d,e,f){var g=this.j=this.j||new _.jm(this.A,this.m,_.n());g.zb(a,b,c,d,e,f);a=_.ua(this.l);for(b=a.next();!b.done;b=a.next())b=b.value,Hu(b,g),b.draw()};_.Ze("overlay",{Pg:function(a){if(a){var b=a.getMap();if(b&&b instanceof _.se||a.__gmop)Gu(a);else{b=a.getMap();var c=Bu(a),d=c.ql;c.ql=b;d&&(c=Bu(a),(d=c.da)&&d.unbindAll(),(d=c.$h)&&d.unbindAll(),a.unbindAll(),a.set("panes",null),a.set("projection",null),_.C(c.W,_.R.removeListener),c.W=null,c.De&&(c.De.U.Ma(),c.De=null),_.xm("Ox","-p",a));b&&Du(a,b)}}},preventMapHitsFrom:function(a){_.mn(a,{onClick:function(b){return _.Em(b.event)},Ha:function(b){return _.Bm(b)},$b:function(b){return _.Cm(b)},Ua:function(b){return _.Cm(b)},
Ka:function(b){return _.Dm(b)}}).wc(!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.Kd);a.addEventListener("contextmenu",_.Kd);a.addEventListener("dblclick",_.Kd);a.addEventListener("mousedown",_.Kd);a.addEventListener("mousemove",_.Kd);a.addEventListener("MSPointerDown",_.Kd);a.addEventListener("pointerdown",_.Kd);a.addEventListener("touchstart",_.Kd);a.addEventListener("wheel",_.Kd)}});});

/*
     FILE ARCHIVED ON 06:01:41 Aug 04, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:05:39 Apr 15, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.201
  captures_list: 84.958
  LoadShardBlock: 41.943 (3)
  CDXLines.iter: 13.984 (3)
  PetaboxLoader3.datanode: 67.155 (5)
  RedisCDXSource: 24.953
  load_resource: 106.039
  exclusion.robots.policy: 0.185
  esindex: 0.015
  PetaboxLoader3.resolve: 52.263 (2)
*/