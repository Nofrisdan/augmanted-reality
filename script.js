AFRAME.registerComponent("vidhandler",{init:function(){this.toggle=!1;this.vid=document.querySelector("#vid");this.vid.pause()},tick:function(){if(this.el.object3D.visible==!0){if(!this.toggle){this.toggle=!0;this.vid.play()}}else{this.toggle=!1;this.vid.pause()}},})
