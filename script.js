(function(){
    var script = {
 "definitions": [{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 106.53,
  "class": "PanoramaCameraPosition",
  "pitch": -12.86
 },
 "id": "camera_C15C884D_D05A_743D_41E6_E24D01485058",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "stereographicFactor": 1,
  "yaw": -12.51,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90
 },
 "automaticZoomSpeed": 10,
 "displayMovements": [
  {
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000
  },
  {
   "targetPitch": 4.41,
   "targetHfov": 111,
   "targetStereographicFactor": 0,
   "duration": 3000,
   "easing": "cubic_in_out",
   "class": "TargetRotationalCameraDisplayMovement"
  }
 ],
 "initialPosition": {
  "hfov": 111,
  "yaw": -12.51,
  "class": "PanoramaCameraPosition",
  "pitch": 4.41
 },
 "id": "panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A",
 "thumbnailUrl": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_t.jpg",
 "label": "05",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D1CF8D40_CA2D_0F20_41C6_627C357B8FAC",
  "this.overlay_E7F22A04_CA27_1520_41E0_80776B774512",
  "this.overlay_E0530AE3_CBE2_ED0C_41D0_6CB3AC24FDBC",
  "this.overlay_E05F6E9C_CBE2_E534_41E7_7119ACF05417"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C"
  }
 ],
 "hfovMin": "199%",
 "hfov": 360,
 "label": "01.PARA 3DVISTA",
 "id": "panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334",
 "thumbnailUrl": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 111,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DF40027D_CA25_15E3_41E7_49414338831C",
  "this.overlay_E05C3F73_CBE2_230D_41DF_DAF7760DDC99"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 7.32,
  "class": "PanoramaCameraPosition",
  "pitch": -6.73
 },
 "id": "panorama_C3698816_C9E7_1520_41D8_27299772A94A_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration"
},
{
 "items": [
  {
   "media": "this.panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3698816_C9E7_1520_41D8_27299772A94A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_C3698816_C9E7_1520_41D8_27299772A94A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "camera": "this.panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_camera",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 5.51,
  "class": "PanoramaCameraPosition",
  "pitch": -4.59
 },
 "id": "camera_C196887B_D05A_74E5_41AA_5F7FBA00C44C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 92.76,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "id": "camera_C162387B_D05A_74E5_41D4_545A3916A9E8",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C152684D_D05A_743D_41B7_34DA38434472",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 3.36,
  "class": "PanoramaCameraPosition",
  "pitch": -2.97
 },
 "id": "panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "backgroundColorRatios": [],
 "data": {
  "name": "Window15713"
 },
 "bodyPaddingRight": 5,
 "id": "window_FA4404B5_CA25_1D60_41CE_AA2418445A38",
 "bodyBackgroundColorDirection": "vertical",
 "width": 400,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyPaddingTop": 5,
 "headerVerticalAlign": "middle",
 "modal": true,
 "horizontalAlign": "center",
 "titlePaddingLeft": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "veilColorDirection": "horizontal",
 "title": "CADEIRAS",
 "paddingRight": 0,
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "height": 600,
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColor": [],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_FA4994B5_CA25_1D60_41D1_D765BE308AE0",
  {
   "backgroundColorRatios": [],
   "width": "100%",
   "minHeight": 0,
   "shadow": false,
   "backgroundColorDirection": "vertical",
   "borderSize": 0,
   "scrollEnabled": true,
   "url": "https://papelariadeltars.com.br/search/?q=CADEIRA&mpage=2",
   "minWidth": 0,
   "paddingRight": 0,
   "paddingLeft": 0,
   "backgroundColor": [],
   "height": "89%",
   "insetBorder": false,
   "paddingTop": 0,
   "class": "WebFrame",
   "backgroundOpacity": 1,
   "borderRadius": 0,
   "paddingBottom": 0,
   "propagateClick": false,
   "data": {
    "name": "WebFrame17728"
   }
  }
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "layout": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "footerHeight": 5,
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingBottom": 10,
 "minWidth": 20,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadowHorizontalLength": 3,
 "paddingLeft": 0,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "headerPaddingLeft": 10,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "titleTextDecoration": "none",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "borderRadius": 5,
 "gap": 10,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "paddingBottom": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "shadowVerticalLength": 0
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3698816_C9E7_1520_41D8_27299772A94A"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7",
 "thumbnailUrl": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_t.jpg",
 "label": "SITE",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D6334717_CA2B_1B20_41E1_B8012C8775E3",
  "this.overlay_D6565C24_CA2B_0D60_41E7_13659FD126BF",
  "this.overlay_FAC219CC_CA1D_1720_41E5_3904BEC3CEEB",
  "this.overlay_FB5E392F_CA1F_7760_41D3_838F977B2A7B",
  "this.overlay_E6F54DEB_CBE2_671C_41E4_2BBB8E451C46",
  "this.overlay_E0AD8D2C_CBE2_2714_41E4_517DA1C14D01"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_C3698816_C9E7_1520_41D8_27299772A94A",
 "thumbnailUrl": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_t.jpg",
 "label": "FINAL",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D60D60FE_CA2B_16E0_41E5_C57774395CF5",
  "this.overlay_FA728551_CA25_1F20_41D2_A84F4FC11702",
  "this.overlay_FAC829E6_CA25_36E0_41E7_D22E80CDC26A",
  "this.overlay_FA991F4F_CA1B_0B3F_41E2_34C2C070E87A",
  "this.overlay_E7CBA143_CBE2_DF0D_41E2_416DD36C45E4",
  "this.overlay_E7F95559_CBE2_E73D_41E3_A0FB9AD3F199"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 180,
  "class": "PanoramaCameraPosition",
  "pitch": -11.94
 },
 "id": "camera_C1BE389B_D05A_7425_41C7_C46D27710808",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 1.84,
  "class": "PanoramaCameraPosition",
  "pitch": -8.27
 },
 "id": "camera_C16EA86C_D05A_74E3_41BE_24F5BC367085",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -60.33,
  "class": "PanoramaCameraPosition",
  "pitch": -3.76
 },
 "id": "panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "backgroundColorRatios": [],
 "data": {
  "name": "Window15713"
 },
 "bodyPaddingRight": 5,
 "id": "window_E0F29748_CA2B_3B20_41E0_00F48D0C9A31",
 "bodyBackgroundColorDirection": "vertical",
 "width": 400,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyPaddingTop": 5,
 "headerVerticalAlign": "middle",
 "modal": true,
 "horizontalAlign": "center",
 "titlePaddingLeft": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "veilColorDirection": "horizontal",
 "title": "ESTANTES",
 "paddingRight": 0,
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "height": 600,
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColor": [],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_E0F4A738_CA2B_3B60_41BC_3264022E30AD",
  {
   "backgroundColorRatios": [],
   "width": "100%",
   "minHeight": 0,
   "shadow": false,
   "backgroundColorDirection": "vertical",
   "borderSize": 0,
   "scrollEnabled": true,
   "url": "https://papelariadeltars.com.br/search/?q=ESTANTE",
   "minWidth": 0,
   "paddingRight": 0,
   "paddingLeft": 0,
   "backgroundColor": [],
   "height": "89%",
   "insetBorder": false,
   "paddingTop": 0,
   "class": "WebFrame",
   "backgroundOpacity": 1,
   "borderRadius": 0,
   "paddingBottom": 0,
   "propagateClick": false,
   "data": {
    "name": "WebFrame16965"
   }
  }
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "layout": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "footerHeight": 5,
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingBottom": 10,
 "minWidth": 20,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadowHorizontalLength": 3,
 "paddingLeft": 0,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "headerPaddingLeft": 10,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "titleTextDecoration": "none",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "borderRadius": 5,
 "gap": 10,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "paddingBottom": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "shadowVerticalLength": 0
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -61.53,
  "class": "PanoramaCameraPosition",
  "pitch": -4.59
 },
 "id": "camera_C145D85C_D05A_7423_41E5_155718A6EEDF",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "backgroundColorRatios": [],
 "data": {
  "name": "Window15713"
 },
 "bodyPaddingRight": 5,
 "id": "window_E7C7F9B6_CA27_1760_41E1_BAB73EBA4446",
 "bodyBackgroundColorDirection": "vertical",
 "width": 400,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyPaddingTop": 5,
 "headerVerticalAlign": "middle",
 "modal": true,
 "horizontalAlign": "center",
 "titlePaddingLeft": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "veilColorDirection": "horizontal",
 "title": "CADEIRAS",
 "paddingRight": 0,
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "height": 600,
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColor": [],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_E7CA79B6_CA27_1760_41DE_EA4E91E5178D",
  {
   "backgroundColorRatios": [],
   "width": "100%",
   "minHeight": 0,
   "shadow": false,
   "backgroundColorDirection": "vertical",
   "borderSize": 0,
   "scrollEnabled": true,
   "url": "https://papelariadeltars.com.br/search/?q=CADEIRA&mpage=2",
   "minWidth": 0,
   "paddingRight": 0,
   "paddingLeft": 0,
   "backgroundColor": [],
   "height": "89%",
   "insetBorder": false,
   "paddingTop": 0,
   "class": "WebFrame",
   "backgroundOpacity": 1,
   "borderRadius": 0,
   "paddingBottom": 0,
   "propagateClick": false,
   "data": {
    "name": "WebFrame17728"
   }
  }
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "layout": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "footerHeight": 5,
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingBottom": 10,
 "minWidth": 20,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadowHorizontalLength": 3,
 "paddingLeft": 0,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "headerPaddingLeft": 10,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "titleTextDecoration": "none",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "borderRadius": 5,
 "gap": 10,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "paddingBottom": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "shadowVerticalLength": 0
},
{
 "backgroundColorRatios": [],
 "data": {
  "name": "Window15713"
 },
 "bodyPaddingRight": 5,
 "id": "window_FB4308B2_CA1F_7560_41A1_46D59CBAF3DA",
 "bodyBackgroundColorDirection": "vertical",
 "width": 400,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyPaddingTop": 5,
 "headerVerticalAlign": "middle",
 "modal": true,
 "horizontalAlign": "center",
 "titlePaddingLeft": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "veilColorDirection": "horizontal",
 "title": "MESAS",
 "paddingRight": 0,
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "height": 600,
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColor": [],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_FB79C8A3_CA1F_7560_41D9_DF70612E7215",
  {
   "backgroundColorRatios": [],
   "width": "100%",
   "minHeight": 0,
   "shadow": false,
   "backgroundColorDirection": "vertical",
   "borderSize": 0,
   "scrollEnabled": true,
   "url": "https://papelariadeltars.com.br/moveis/moveis1/",
   "minWidth": 0,
   "paddingRight": 0,
   "paddingLeft": 0,
   "backgroundColor": [],
   "height": "89%",
   "insetBorder": false,
   "paddingTop": 0,
   "class": "WebFrame",
   "backgroundOpacity": 1,
   "borderRadius": 0,
   "paddingBottom": 0,
   "propagateClick": false,
   "data": {
    "name": "WebFrame18546"
   }
  }
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "layout": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "footerHeight": 5,
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingBottom": 10,
 "minWidth": 20,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadowHorizontalLength": 3,
 "paddingLeft": 0,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "headerPaddingLeft": 10,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "titleTextDecoration": "none",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "borderRadius": 5,
 "gap": 10,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "paddingBottom": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "shadowVerticalLength": 0
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 11.02,
  "class": "PanoramaCameraPosition",
  "pitch": -7.35
 },
 "id": "camera_C1AE689B_D05A_7425_41E0_72BD233A65B0",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C",
 "thumbnailUrl": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_t.jpg",
 "label": "03",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DDAA44DF_CA2B_1D20_41D5_832C49C63094",
  "this.overlay_DDE52AAD_CA2B_1560_41D3_874DFE8A1F04",
  "this.overlay_D31C993F_CA2F_3760_41BB_5F6EF5F4FDA6"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943",
 "thumbnailUrl": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_t.jpg",
 "label": "02",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D345F1E2_CA2D_16E0_41DF_1A75A1692C53",
  "this.overlay_E141A6EE_CA2F_FAE1_41E3_2CA35CA14C1A"
 ]
},
{
 "backgroundColorRatios": [],
 "data": {
  "name": "Window15713"
 },
 "bodyPaddingRight": 5,
 "id": "window_FA87FF11_CA1B_0B20_41CE_ADB6FA9728BD",
 "bodyBackgroundColorDirection": "vertical",
 "width": 400,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyPaddingTop": 5,
 "headerVerticalAlign": "middle",
 "modal": true,
 "horizontalAlign": "center",
 "titlePaddingLeft": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "veilColorDirection": "horizontal",
 "title": "MESAS",
 "paddingRight": 0,
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "height": 600,
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColor": [],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_FA824F01_CA1B_0B23_41BC_8E35AAD087E0",
  {
   "backgroundColorRatios": [],
   "width": "100%",
   "minHeight": 0,
   "shadow": false,
   "backgroundColorDirection": "vertical",
   "borderSize": 0,
   "scrollEnabled": true,
   "url": "https://papelariadeltars.com.br/moveis/moveis1/",
   "minWidth": 0,
   "paddingRight": 0,
   "paddingLeft": 0,
   "backgroundColor": [],
   "height": "89%",
   "insetBorder": false,
   "paddingTop": 0,
   "class": "WebFrame",
   "backgroundOpacity": 1,
   "borderRadius": 0,
   "paddingBottom": 0,
   "propagateClick": false,
   "data": {
    "name": "WebFrame18546"
   }
  }
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "layout": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "footerHeight": 5,
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingBottom": 10,
 "minWidth": 20,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadowHorizontalLength": 3,
 "paddingLeft": 0,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "headerPaddingLeft": 10,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "titleTextDecoration": "none",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "borderRadius": 5,
 "gap": 10,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "paddingBottom": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "shadowVerticalLength": 0
},
{
 "backgroundColorRatios": [],
 "data": {
  "name": "Window15713"
 },
 "bodyPaddingRight": 5,
 "id": "window_FAA04988_CA25_3720_41D4_B9E12FD821AD",
 "bodyBackgroundColorDirection": "vertical",
 "width": 400,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyPaddingTop": 5,
 "headerVerticalAlign": "middle",
 "modal": true,
 "horizontalAlign": "center",
 "titlePaddingLeft": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "veilColorDirection": "horizontal",
 "title": "CADEIRAS",
 "paddingRight": 0,
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "height": 600,
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColor": [],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_FAA08988_CA25_3720_41CD_AB5CB3117232",
  {
   "backgroundColorRatios": [],
   "width": "100%",
   "minHeight": 0,
   "shadow": false,
   "backgroundColorDirection": "vertical",
   "borderSize": 0,
   "scrollEnabled": true,
   "url": "https://papelariadeltars.com.br/search/?q=CADEIRA&mpage=2",
   "minWidth": 0,
   "paddingRight": 0,
   "paddingLeft": 0,
   "backgroundColor": [],
   "height": "89%",
   "insetBorder": false,
   "paddingTop": 0,
   "class": "WebFrame",
   "backgroundOpacity": 1,
   "borderRadius": 0,
   "paddingBottom": 0,
   "propagateClick": false,
   "data": {
    "name": "WebFrame17728"
   }
  }
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "layout": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "footerHeight": 5,
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingBottom": 10,
 "minWidth": 20,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadowHorizontalLength": 3,
 "paddingLeft": 0,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "headerPaddingLeft": 10,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "titleTextDecoration": "none",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "borderRadius": 5,
 "gap": 10,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "paddingBottom": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "shadowVerticalLength": 0
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C1DFE8AA_D05A_7467_41E5_34ED28BC5B08",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -61.12,
  "class": "PanoramaCameraPosition",
  "pitch": -8.11
 },
 "id": "panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "id": "camera_C18A088B_D05A_7425_41E8_85A6F3E2A3DE",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -95.51,
  "class": "PanoramaCameraPosition",
  "pitch": -0.92
 },
 "id": "camera_C17B385C_D05A_7423_41E1_7BF4155AF397",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9",
 "thumbnailUrl": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_t.jpg",
 "label": "04",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D28F9F7F_CA2D_0BE0_41B1_90728E9C615F",
  "this.overlay_D23F34B1_CA2F_3D60_41C7_976C13D3A47A",
  "this.overlay_E317BEE5_CA25_0AE0_41D6_681D2D38F6C1",
  "this.overlay_E11C8796_CA2B_3B20_41D1_F5BBCC046B3A"
 ]
},
{
 "backgroundColorRatios": [],
 "data": {
  "name": "Window15713"
 },
 "bodyPaddingRight": 5,
 "id": "window_E086C345_CA2E_FB20_41E0_074AE8AB7354",
 "bodyBackgroundColorDirection": "vertical",
 "width": 400,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyPaddingTop": 5,
 "headerVerticalAlign": "middle",
 "modal": true,
 "horizontalAlign": "center",
 "titlePaddingLeft": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "veilColorDirection": "horizontal",
 "title": "CADEIRA GAMER",
 "paddingRight": 0,
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "height": 600,
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColor": [],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_E0848345_CA2E_FB20_41D2_05836518A794",
  {
   "backgroundColorRatios": [],
   "width": "100%",
   "minHeight": 0,
   "shadow": false,
   "backgroundColorDirection": "vertical",
   "borderSize": 0,
   "scrollEnabled": true,
   "url": "https://papelariadeltars.com.br/search/?q=CADEIRA+GAMER",
   "minWidth": 0,
   "paddingRight": 0,
   "paddingLeft": 0,
   "backgroundColor": [],
   "height": "89%",
   "insetBorder": false,
   "paddingTop": 0,
   "class": "WebFrame",
   "backgroundOpacity": 1,
   "borderRadius": 0,
   "paddingBottom": 0,
   "propagateClick": false,
   "data": {
    "name": "WebFrame16236"
   }
  }
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "layout": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "footerHeight": 5,
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingBottom": 10,
 "minWidth": 20,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadowHorizontalLength": 3,
 "paddingLeft": 0,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "headerPaddingLeft": 10,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "titleTextDecoration": "none",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "borderRadius": 5,
 "gap": 10,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "paddingBottom": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "shadowVerticalLength": 0
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": -0.79
 },
 "id": "panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "backgroundColorRatios": [],
 "data": {
  "name": "Window15713"
 },
 "bodyPaddingRight": 5,
 "id": "window_FAEF297E_CA1D_17E0_41C3_9D2032A1BDC2",
 "bodyBackgroundColorDirection": "vertical",
 "width": 400,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyPaddingTop": 5,
 "headerVerticalAlign": "middle",
 "modal": true,
 "horizontalAlign": "center",
 "titlePaddingLeft": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "veilColorDirection": "horizontal",
 "title": "CADEIRAS",
 "paddingRight": 0,
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "height": 600,
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColor": [],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_FAE8B97E_CA1D_17E0_41DD_CF915DBD35AD",
  {
   "backgroundColorRatios": [],
   "width": "100%",
   "minHeight": 0,
   "shadow": false,
   "backgroundColorDirection": "vertical",
   "borderSize": 0,
   "scrollEnabled": true,
   "url": "https://papelariadeltars.com.br/search/?q=CADEIRA&mpage=2",
   "minWidth": 0,
   "paddingRight": 0,
   "paddingLeft": 0,
   "backgroundColor": [],
   "height": "89%",
   "insetBorder": false,
   "paddingTop": 0,
   "class": "WebFrame",
   "backgroundOpacity": 1,
   "borderRadius": 0,
   "paddingBottom": 0,
   "propagateClick": false,
   "data": {
    "name": "WebFrame17728"
   }
  }
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "layout": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "footerHeight": 5,
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingBottom": 10,
 "minWidth": 20,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadowHorizontalLength": 3,
 "paddingLeft": 0,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "headerPaddingLeft": 10,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "titleTextDecoration": "none",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "borderRadius": 5,
 "gap": 10,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "paddingBottom": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "shadowVerticalLength": 0
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -177.03,
  "class": "PanoramaCameraPosition",
  "pitch": -3.76
 },
 "id": "panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "minHeight": 50,
 "width": "100%",
 "toolTipOpacity": 0.5,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 100,
 "playbackBarOpacity": 1,
 "progressHeight": 6,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "--STICKER"
 },
 "children": [
  "this.Label_0DD14F09_1744_0507_41AA_D8475423214A",
  "this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2"
 ],
 "layout": "absolute",
 "left": 30,
 "width": 573,
 "scrollBarColor": "#000000",
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "top": 15,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": 133,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0,
  0.95,
  1,
  1
 ],
 "data": {
  "name": "Container8880"
 },
 "children": [
  "this.Button_EB576B8F_CBE2_6314_41AD_823D221CF0EE"
 ],
 "layout": "absolute",
 "id": "Container_EBE4CFE2_CBE6_230F_41C9_9D7F28374FD8",
 "left": "0%",
 "width": 585,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.51,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "bottom": "6.89%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#000000",
  "#000000",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 65,
 "backgroundOpacity": 0.4,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9, this.camera_C16EA86C_D05A_74E3_41BE_24F5BC367085); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.13,
   "image": "this.AnimatedImageResource_ED2555DA_CA25_1F20_41D3_7232F4D427F2",
   "pitch": -13.95,
   "yaw": -140.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D1CF8D40_CA2D_0F20_41C6_627C357B8FAC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 22.13,
   "yaw": -140.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_1_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.95
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showWindow(this.window_E7C7F9B6_CA27_1760_41E1_BAB73EBA4446, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 34.34,
   "image": "this.AnimatedImageResource_F4474238_CA7B_1560_41CB_1C94378BE145",
   "pitch": -13.19,
   "yaw": -38.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E7F22A04_CA27_1520_41E0_80776B774512",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 34.34,
   "yaw": -38.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.19
  }
 ]
},
{
 "id": "overlay_E0530AE3_CBE2_ED0C_41D0_6CB3AC24FDBC",
 "bleaching": 0.7,
 "pitch": 63.69,
 "yaw": -149.54,
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4
},
{
 "id": "overlay_E05F6E9C_CBE2_E534_41E7_7119ACF05417",
 "bleaching": 0.7,
 "pitch": 41.54,
 "yaw": 42.53,
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C, this.camera_C196887B_D05A_74E5_41AA_5F7FBA00C44C); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.77,
   "image": "this.AnimatedImageResource_F45D4228_CA7B_1561_41D4_DD2BCBD8F13B",
   "pitch": -3.07,
   "yaw": 23.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DF40027D_CA25_15E3_41E7_49414338831C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 22.77,
   "yaw": 23.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.07
  }
 ]
},
{
 "id": "overlay_E05C3F73_CBE2_230D_41DF_DAF7760DDC99",
 "bleaching": 0.7,
 "pitch": 38.18,
 "yaw": 64.88,
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "htmlText_FA4994B5_CA25_1D60_41D1_D765BE308AE0",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "10%",
 "paddingTop": 10,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText15714"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3698816_C9E7_1520_41D8_27299772A94A, this.camera_C152684D_D05A_743D_41B7_34DA38434472); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.59,
   "image": "this.AnimatedImageResource_ED2415DA_CA25_1F20_41E1_1870324AD053",
   "pitch": -7.81,
   "yaw": -178.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D6334717_CA2B_1B20_41E1_B8012C8775E3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 22.59,
   "yaw": -178.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_1_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.81
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9, this.camera_C15C884D_D05A_743D_41E6_E24D01485058); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.59,
   "image": "this.AnimatedImageResource_ED2475DA_CA25_1F20_41D4_C28BF2B22D40",
   "pitch": -7.81,
   "yaw": -2.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D6565C24_CA2B_0D60_41E7_13659FD126BF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 22.59,
   "yaw": -2.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_1_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.81
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showWindow(this.window_FAEF297E_CA1D_17E0_41C3_9D2032A1BDC2, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 32.45,
   "image": "this.AnimatedImageResource_F448B238_CA7B_1560_41D3_260641BBA591",
   "pitch": -23.08,
   "yaw": 151.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FAC219CC_CA1D_1720_41E5_3904BEC3CEEB",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 32.45,
   "yaw": 151.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.08
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showWindow(this.window_FB4308B2_CA1F_7560_41A1_46D59CBAF3DA, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 35.25,
   "image": "this.AnimatedImageResource_F4492238_CA7B_1560_41E7_F6E0E19536BB",
   "pitch": -2.11,
   "yaw": -100.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FB5E392F_CA1F_7760_41D3_838F977B2A7B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 35.25,
   "yaw": -100.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.11
  }
 ]
},
{
 "id": "overlay_E6F54DEB_CBE2_671C_41E4_2BBB8E451C46",
 "bleaching": 0.7,
 "pitch": 50.04,
 "yaw": 77.34,
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4
},
{
 "id": "overlay_E0AD8D2C_CBE2_2714_41E4_517DA1C14D01",
 "bleaching": 0.7,
 "pitch": 56.57,
 "yaw": -60.53,
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7, this.camera_C1DFE8AA_D05A_7467_41E5_34ED28BC5B08); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.5,
   "image": "this.AnimatedImageResource_ED24A5DA_CA25_1F20_41D1_DCC375E12660",
   "pitch": -9.4,
   "yaw": 179.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D60D60FE_CA2B_16E0_41E5_C57774395CF5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 22.5,
   "yaw": 179.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_1_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.4
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showWindow(this.window_FA4404B5_CA25_1D60_41CE_AA2418445A38, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 33.74,
   "image": "this.AnimatedImageResource_F447E238_CA7B_1560_41E2_7C51C1D8E4CB",
   "pitch": -16.95,
   "yaw": -151.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FA728551_CA25_1F20_41D2_A84F4FC11702",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 33.74,
   "yaw": -151.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.95
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showWindow(this.window_FAA04988_CA25_3720_41D4_B9E12FD821AD, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 33.33,
   "image": "this.AnimatedImageResource_F447F238_CA7B_1560_41D2_C2D1CBCF2717",
   "pitch": -19.12,
   "yaw": 70.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FAC829E6_CA25_36E0_41E7_D22E80CDC26A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 33.33,
   "yaw": 70.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.12
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showWindow(this.window_FA87FF11_CA1B_0B20_41CE_ADB6FA9728BD, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 32.45,
   "image": "this.AnimatedImageResource_F4487238_CA7B_1560_41B6_CF1D2278F91A",
   "pitch": -23.08,
   "yaw": -14.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FA991F4F_CA1B_0B3F_41E2_34C2C070E87A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 32.45,
   "yaw": -14.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.08
  }
 ]
},
{
 "id": "overlay_E7CBA143_CBE2_DF0D_41E2_416DD36C45E4",
 "bleaching": 0.7,
 "pitch": 57.76,
 "yaw": -74.37,
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4
},
{
 "id": "overlay_E7F95559_CBE2_E73D_41E3_A0FB9AD3F199",
 "bleaching": 0.7,
 "pitch": 48.07,
 "yaw": 85.05,
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "htmlText_E0F4A738_CA2B_3B60_41BC_3264022E30AD",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "10%",
 "paddingTop": 10,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText15714"
 }
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "htmlText_E7CA79B6_CA27_1760_41DE_EA4E91E5178D",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "10%",
 "paddingTop": 10,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText15714"
 }
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "htmlText_FB79C8A3_CA1F_7560_41D9_DF70612E7215",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "10%",
 "paddingTop": 10,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText15714"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9, this.camera_C145D85C_D05A_7423_41E5_155718A6EEDF); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.5,
   "image": "this.AnimatedImageResource_F4455238_CA7B_1560_41DE_8AFC1E3A65BA",
   "pitch": -19.48,
   "yaw": 3.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DDAA44DF_CA2B_1D20_41D5_832C49C63094",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 21.5,
   "yaw": 3.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.48
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943, this.camera_C17B385C_D05A_7423_41E1_7BF4155AF397); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.11,
   "image": "this.AnimatedImageResource_ED2605DA_CA25_1F20_41DB_F6507F3D895D",
   "pitch": -14.14,
   "yaw": -87.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DDE52AAD_CA2B_1560_41D3_874DFE8A1F04",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 22.11,
   "yaw": -87.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_1_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.14
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.54,
   "image": "this.AnimatedImageResource_ED2675DA_CA25_1F20_41C1_40EC7F83A14B",
   "pitch": -8.6,
   "yaw": -179.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D31C993F_CA2F_3760_41BB_5F6EF5F4FDA6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 22.54,
   "yaw": -179.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_1_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.6
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C, this.camera_C162387B_D05A_74E5_41D4_545A3916A9E8); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.95,
   "image": "this.AnimatedImageResource_F45E4228_CA7B_1561_41A7_CD9F7F3F3D1C",
   "pitch": -15.73,
   "yaw": 83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D345F1E2_CA2D_16E0_41DF_1A75A1692C53",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 21.95,
   "yaw": 83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.73
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showWindow(this.window_E086C345_CA2E_FB20_41E0_074AE8AB7354, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 35.18,
   "image": "this.AnimatedImageResource_F45E1228_CA7B_1561_41E8_CA5167D549A6",
   "pitch": -4.09,
   "yaw": 0.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E141A6EE_CA2F_FAE1_41E3_2CA35CA14C1A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 35.18,
   "yaw": 0.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.09
  }
 ]
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "htmlText_FA824F01_CA1B_0B23_41BC_8E35AAD087E0",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "10%",
 "paddingTop": 10,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText15714"
 }
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "htmlText_FAA08988_CA25_3720_41CD_AB5CB3117232",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "10%",
 "paddingTop": 10,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText15714"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7, this.camera_C18A088B_D05A_7425_41E8_85A6F3E2A3DE); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.56,
   "image": "this.AnimatedImageResource_ED25A5DA_CA25_1F20_41E7_AE57DD68F32E",
   "pitch": -25.62,
   "yaw": -61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D28F9F7F_CA2D_0BE0_41B1_90728E9C615F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 20.56,
   "yaw": -61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_1_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.62
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C, this.camera_C1BE389B_D05A_7425_41C7_C46D27710808); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.82,
   "image": "this.AnimatedImageResource_ED2505DA_CA25_1F20_41E4_9BE4FA58AE98",
   "pitch": -24.03,
   "yaw": 114.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D23F34B1_CA2F_3D60_41C7_976C13D3A47A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 20.82,
   "yaw": 114.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_1_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.03
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A, this.camera_C1AE689B_D05A_7425_41E0_72BD233A65B0); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.84,
   "image": "this.AnimatedImageResource_F4464238_CA7B_1560_41E7_F325BB1CA6E0",
   "pitch": -16.71,
   "yaw": -133.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E317BEE5_CA25_0AE0_41D6_681D2D38F6C1",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 21.84,
   "yaw": -133.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.71
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showWindow(this.window_E0F29748_CA2B_3B20_41E0_00F48D0C9A31, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 35.25,
   "image": "this.AnimatedImageResource_F4462238_CA7B_1560_41C2_29BDFD64EF42",
   "pitch": -2.11,
   "yaw": 21.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E11C8796_CA2B_3B20_41D1_F5BBCC046B3A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 35.25,
   "yaw": 21.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.11
  }
 ]
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "htmlText_E0848345_CA2E_FB20_41D2_05836518A794",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "10%",
 "paddingTop": 10,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText15714"
 }
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "htmlText_FAE8B97E_CA1D_17E0_41DD_CF915DBD35AD",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "10%",
 "paddingTop": 10,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText15714"
 }
},
{
 "fontFamily": "Bebas Neue Bold",
 "data": {
  "name": "text 1"
 },
 "left": 51,
 "textShadowHorizontalLength": -2,
 "width": 410,
 "id": "Label_0DD14F09_1744_0507_41AA_D8475423214A",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "textShadowColor": "#0000FF",
 "text": "DELTA MÓVEIS ",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "textShadowOpacity": 1,
 "top": 5,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 86,
 "fontSize": 90,
 "paddingTop": 0,
 "class": "Label",
 "textShadowBlurRadius": 17,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontStyle": "normal",
 "propagateClick": true,
 "fontWeight": "bold",
 "textShadowVerticalLength": 0
},
{
 "fontFamily": "Bebas Neue Book",
 "data": {
  "name": "text 2"
 },
 "left": "17.27%",
 "textShadowHorizontalLength": 7,
 "width": 277,
 "id": "Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "textShadowColor": "#0000FF",
 "text": "PASSEIO VIRTUAL 360°",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "textShadowOpacity": 1,
 "bottom": 5,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 46,
 "fontSize": 41,
 "paddingTop": 0,
 "class": "Label",
 "textShadowBlurRadius": 12,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontStyle": "normal",
 "propagateClick": true,
 "fontWeight": "normal",
 "textShadowVerticalLength": 1
},
{
 "cursor": "hand",
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_EB576B8F_CBE2_6314_41AD_823D221CF0EE",
 "left": "16.06%",
 "rollOverBackgroundColor": [
  "#FFCC00"
 ],
 "width": 368,
 "data": {
  "name": "Button house info"
 },
 "fontSize": "26px",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "rollOverFontColor": "#000000",
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#FFFF00"
 ],
 "shadowColor": "#000000",
 "bottom": "0%",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#0000FF"
 ],
 "paddingLeft": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "label": "COMPRE PELO SITE",
 "height": 64,
 "click": "this.openLink('https://papelariadeltars.com.br/moveis/', '_blank')",
 "pressedFontColor": "#000000",
 "iconHeight": 0,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Button",
 "rollOverBackgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontStyle": "normal",
 "shadowSpread": 1,
 "pressedBackgroundOpacity": 0,
 "propagateClick": true,
 "fontWeight": "bold",
 "iconWidth": 0,
 "iconBeforeLabel": true
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_1_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ED2555DA_CA25_1F20_41D3_7232F4D427F2",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3641A5E_C9E7_3520_41E3_EB1FA06B920A_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_F4474238_CA7B_1560_41CB_1C94378BE145",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_C28C4E6A_C9E5_0DFA_41E2_B999672F5334_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_F45D4228_CA7B_1561_41D4_DD2BCBD8F13B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_1_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ED2415DA_CA25_1F20_41E1_1870324AD053",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_1_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ED2475DA_CA25_1F20_41D4_C28BF2B22D40",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_F448B238_CA7B_1560_41D3_260641BBA591",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C36685C5_C9E7_7F23_41D9_21A5195310C7_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_F4492238_CA7B_1560_41E7_F6E0E19536BB",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_1_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ED24A5DA_CA25_1F20_41D1_DCC375E12660",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_F447E238_CA7B_1560_41E2_7C51C1D8E4CB",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_F447F238_CA7B_1560_41D2_C2D1CBCF2717",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3698816_C9E7_1520_41D8_27299772A94A_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_F4487238_CA7B_1560_41B6_CF1D2278F91A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_F4455238_CA7B_1560_41DE_8AFC1E3A65BA",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_1_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ED2605DA_CA25_1F20_41DB_F6507F3D895D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_C363EDE3_C9E7_0EE7_41DE_E03B19BF6E1C_1_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ED2675DA_CA25_1F20_41C1_40EC7F83A14B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_F45E4228_CA7B_1561_41A7_CD9F7F3F3D1C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C37B3F83_C9E5_0B20_41C1_B59E3E4FE943_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_F45E1228_CA7B_1561_41E8_CA5167D549A6",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_1_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ED25A5DA_CA25_1F20_41E7_AE57DD68F32E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_1_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ED2505DA_CA25_1F20_41E4_9BE4FA58AE98",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_F4464238_CA7B_1560_41E7_F325BB1CA6E0",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3630CB2_C9E7_0D61_41E5_FC3FE48968A9_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_F4462238_CA7B_1560_41C2_29BDFD64EF42",
 "class": "AnimatedImageResource",
 "frameDuration": 41
}],
 "start": "this.init()",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_EBE4CFE2_CBE6_230F_41C9_9D7F28374FD8"
 ],
 "layout": "absolute",
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "scripts": {
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "existsKey": function(key){  return key in window; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getKey": function(key){  return window[key]; }
 },
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "downloadEnabled": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
