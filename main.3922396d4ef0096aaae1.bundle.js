(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a="eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Iks2U1VZNjI1RjcifQ.eyJpYXQiOjE1NjAyOTIxNTMuMTYxLCJpc3MiOiJVNEE0WEY3UVJQIn0.mPSIqDGn9hUUByrg7EGo9mZ0nkfOj4Zade0yoJOhdcggGfqT-mXyJ-cMimS8Fy2DBsLsyS4m18ILKigMHLtsyA"},233:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Wrapper});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),Wrapper=function(storyFn){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{width:"100vw",height:"100vh"}},storyFn())};Wrapper.displayName="Wrapper",Wrapper.__docgenInfo={description:"",methods:[],displayName:"Wrapper"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/Wrapper.js"]={name:"Wrapper",docgenInfo:Wrapper.__docgenInfo,path:".storybook/Wrapper.js"})},235:function(module,exports,__webpack_require__){__webpack_require__(236),__webpack_require__(340),module.exports=__webpack_require__(341)},341:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(40),_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(232),_Wrapper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(233),req=__webpack_require__(513);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_1__.withKnobs),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_Wrapper__WEBPACK_IMPORTED_MODULE_2__.a),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(176)(module))},513:function(module,exports,__webpack_require__){var map={"./index.stories.tsx":514};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=513},514:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"withStorySource",function(){return withStorySource}),__webpack_require__.d(__webpack_exports__,"__STORY__",function(){return __STORY__}),__webpack_require__.d(__webpack_exports__,"__ADDS_MAP__",function(){return __ADDS_MAP__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(40),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),_devToken__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(15),withStorySource=__webpack_require__(515).withStorySource,__STORY__="import React from 'react';\n\nimport { storiesOf } from '@storybook/react';\n\nimport { Map, MapkitProvider, useMap, Marker } from '../src';\nimport devToken from '../devToken';\n\nconst UseMapExample = () => {\n  const { setRotation, mapProps } = useMap();\n\n  return (\n    <>\n      <button onClick={() => setRotation(Math.random() * 360)}>rotate!</button>\n      <Map {...mapProps} />\n    </>\n  );\n};\n\nstoriesOf('Use', module)\n  .add('with a provider', () => (\n    <MapkitProvider tokenOrCallback={devToken}>\n      <Map />\n    </MapkitProvider>\n  ))\n  .add('just a Map', () => <Map tokenOrCallback={devToken} />)\n  .add('using a ref', () => {\n    return (\n      <MapkitProvider tokenOrCallback={devToken}>\n        <UseMapExample />\n      </MapkitProvider>\n    );\n  })\n  .add('multiple providers', () => (\n    <>\n      <MapkitProvider tokenOrCallback={devToken}>\n        <Map />\n      </MapkitProvider>\n      <MapkitProvider tokenOrCallback={devToken}>\n        <Map />\n      </MapkitProvider>\n    </>\n  ));\n\nstoriesOf('Defaults', module)\n  .add('center', () => <Map tokenOrCallback={devToken} center={[37.415, -122.048333]} />)\n  .add('visibleMapRect', () => (\n    <Map tokenOrCallback={devToken} visibleMapRect={[0.5, 0.2, 0.3, 0.4]} />\n  ))\n  .add('region', () => (\n    <Map\n      tokenOrCallback={devToken}\n      region={{\n        latitude: 37.415,\n        longitude: -122.048333,\n        latitudeSpan: 0.016,\n        longitudeSpan: 0.016,\n      }}\n    />\n  ))\n  .add('rotation', () => <Map tokenOrCallback={devToken} rotation={90} />)\n  .add('tint', () => <Map tokenOrCallback={devToken} tintColor={'#00b64e'} />)\n  .add('padding', () => <Map tokenOrCallback={devToken} padding={20} />);\n\nstoriesOf('Markers', module).add('adding a marker', () => (\n  <Map\n    tokenOrCallback={devToken}\n    region={{\n      latitude: 47.6754,\n      longitude: -122.2084,\n      latitudeSpan: 0.006,\n      longitudeSpan: 0.006,\n    }}\n  >\n    <Marker latitude={47.6754} longitude={-122.2084} />\n    <Marker\n      latitude={47.6764}\n      longitude={-122.2073}\n      title={'Tea here!'}\n      subtitle={'coffee too ☕'}\n    />\n  </Map>\n));\n",__ADDS_MAP__={"use--multiple-providers":{startLoc:{col:7,line:33},endLoc:{col:3,line:42}},"use--using-a-ref":{startLoc:{col:7,line:26},endLoc:{col:3,line:32}},"use--just-a-map":{startLoc:{col:7,line:25},endLoc:{col:61,line:25}},"use--with-a-provider":{startLoc:{col:7,line:20},endLoc:{col:3,line:24}},"defaults--padding":{startLoc:{col:7,line:62},endLoc:{col:71,line:62}},"defaults--tint":{startLoc:{col:7,line:61},endLoc:{col:77,line:61}},"defaults--rotation":{startLoc:{col:7,line:60},endLoc:{col:73,line:60}},"defaults--region":{startLoc:{col:7,line:49},endLoc:{col:3,line:59}},"defaults--visiblemaprect":{startLoc:{col:7,line:46},endLoc:{col:3,line:48}},"defaults--center":{startLoc:{col:7,line:45},endLoc:{col:88,line:45}},"markers--adding-a-marker":{startLoc:{col:33,line:64},endLoc:{col:1,line:82}}},UseMapExample=function UseMapExample(){var _useMap=Object(_src__WEBPACK_IMPORTED_MODULE_2__.d)(),setRotation=_useMap.setRotation,mapProps=_useMap.mapProps;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{onClick:function onClick(){return setRotation(360*Math.random())}},"rotate!"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a,mapProps))};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Use",module).addDecorator(withStorySource(__STORY__,__ADDS_MAP__)).add("with a provider",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.b,{tokenOrCallback:_devToken__WEBPACK_IMPORTED_MODULE_3__.a},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a,null))}).add("just a Map",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a,{tokenOrCallback:_devToken__WEBPACK_IMPORTED_MODULE_3__.a})}).add("using a ref",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.b,{tokenOrCallback:_devToken__WEBPACK_IMPORTED_MODULE_3__.a},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UseMapExample,null))}).add("multiple providers",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.b,{tokenOrCallback:_devToken__WEBPACK_IMPORTED_MODULE_3__.a},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a,null)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.b,{tokenOrCallback:_devToken__WEBPACK_IMPORTED_MODULE_3__.a},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a,null)))}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Defaults",module).addDecorator(withStorySource(__STORY__,__ADDS_MAP__)).add("center",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a,{tokenOrCallback:_devToken__WEBPACK_IMPORTED_MODULE_3__.a,center:[37.415,-122.048333]})}).add("visibleMapRect",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a,{tokenOrCallback:_devToken__WEBPACK_IMPORTED_MODULE_3__.a,visibleMapRect:[.5,.2,.3,.4]})}).add("region",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a,{tokenOrCallback:_devToken__WEBPACK_IMPORTED_MODULE_3__.a,region:{latitude:37.415,longitude:-122.048333,latitudeSpan:.016,longitudeSpan:.016}})}).add("rotation",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a,{tokenOrCallback:_devToken__WEBPACK_IMPORTED_MODULE_3__.a,rotation:90})}).add("tint",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a,{tokenOrCallback:_devToken__WEBPACK_IMPORTED_MODULE_3__.a,tintColor:"#00b64e"})}).add("padding",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a,{tokenOrCallback:_devToken__WEBPACK_IMPORTED_MODULE_3__.a,padding:20})}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Markers",module).addDecorator(withStorySource(__STORY__,__ADDS_MAP__)).add("adding a marker",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a,{tokenOrCallback:_devToken__WEBPACK_IMPORTED_MODULE_3__.a,region:{latitude:47.6754,longitude:-122.2084,latitudeSpan:.006,longitudeSpan:.006}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.c,{latitude:47.6754,longitude:-122.2084}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.c,{latitude:47.6764,longitude:-122.2073,title:"Tea here!",subtitle:"coffee too ☕"}))})}.call(this,__webpack_require__(176)(module))},6:function(module,__webpack_exports__,__webpack_require__){"use strict";var slicedToArray=__webpack_require__(80),react=__webpack_require__(0),react_default=__webpack_require__.n(react),little_loader=__webpack_require__(234),little_loader_default=__webpack_require__.n(little_loader),MapkitContext=react_default.a.createContext({isInProvider:!1,mapkit:void 0}),MapkitProvider_MapkitProvider=function MapkitProvider(_ref){var tokenOrCallback=_ref.tokenOrCallback,children=_ref.children,existingContext=react_default.a.useContext(MapkitContext),_React$useState=react_default.a.useState({mapkit:existingContext.mapkit,isInProvider:!0}),_React$useState2=Object(slicedToArray.a)(_React$useState,2),context=_React$useState2[0],setContext=_React$useState2[1];return react_default.a.useEffect(function(){existingContext.isInProvider||little_loader_default()("https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js",function(){var isCallback=tokenOrCallback.includes("/");mapkit.init({authorizationCallback:function authorizationCallback(done){isCallback?fetch(tokenOrCallback).then(function(res){return res.text()}).then(done):done(tokenOrCallback)}}),setContext({mapkit:mapkit,isInProvider:!0})})},[existingContext.isInProvider,tokenOrCallback]),react_default.a.createElement(MapkitContext.Provider,{value:context,children:children})},objectWithoutProperties=__webpack_require__(39),toConsumableArray=__webpack_require__(60),objectSpread=__webpack_require__(148),createPadding=function createPadding(padding){return new mapkit.Padding("number"==typeof padding?{top:padding,right:padding,bottom:padding,left:padding}:padding)},createCoordinate=function createCoordinate(latitude,longitude){return new mapkit.Coordinate(latitude,longitude)},createCoordinateRegionFromValues=function createCoordinateRegionFromValues(region){return createCoordinateRegion(createCoordinate(region.latitude,region.longitude),function createCoordinateSpan(latitudeDelta,longitudeDelta){return new mapkit.CoordinateSpan(latitudeDelta,longitudeDelta)}(region.latitudeSpan,region.longitudeSpan))},createCoordinateRegion=function createCoordinateRegion(center,span){return new mapkit.CoordinateRegion(center,span)},createMapRect=function createMapRect(x,y,width,height){return new mapkit.MapRect(x,y,width,height)},useMap_useMap=function useMap(){var defaultOptions=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_React$useState=react_default.a.useState(defaultOptions),defaultMapOptions=Object(slicedToArray.a)(_React$useState,1)[0],mapkit=react_default.a.useContext(MapkitContext).mapkit,mapRef=react_default.a.useRef(null),_React$useState3=react_default.a.useState(),_React$useState4=Object(slicedToArray.a)(_React$useState3,2),map=_React$useState4[0],setMap=_React$useState4[1];return react_default.a.useEffect(function(){if(mapkit&&mapRef.current){var newMap=new mapkit.Map(mapRef.current,function propsToMapConstructionOptions(_ref){var visibleMapRect=_ref.visibleMapRect,region=_ref.region,center=_ref.center,padding=_ref.padding,options=Object(objectWithoutProperties.a)(_ref,["visibleMapRect","region","center","padding"]);return Object(objectSpread.a)({visibleMapRect:visibleMapRect&&createMapRect.apply(void 0,Object(toConsumableArray.a)(visibleMapRect)),region:region&&createCoordinateRegionFromValues(region),center:center&&createCoordinate.apply(void 0,Object(toConsumableArray.a)(center)),padding:createPadding(padding||0)},options)}(defaultMapOptions));setMap(newMap)}},[mapRef,mapkit]),react_default.a.useEffect(function(){return function(){map&&map.destroy()}},[]),{mapkit:mapkit,map:map,mapProps:{mapkit:mapkit,map:map,mapRef:mapRef},setRotation:react_default.a.useCallback(function(rotationValue){var isAnimated=arguments.length>1&&void 0!==arguments[1]&&arguments[1];map&&map.setRotationAnimated(rotationValue,isAnimated)},[map]),setCenter:react_default.a.useCallback(function(centerValue){var isAnimated=arguments.length>1&&void 0!==arguments[1]&&arguments[1];map&&map.setCenterAnimated(createCoordinate.apply(void 0,Object(toConsumableArray.a)(centerValue)),isAnimated)},[map]),setRegion:react_default.a.useCallback(function(region){var isAnimated=arguments.length>1&&void 0!==arguments[1]&&arguments[1];map&&map.setRegionAnimated(createCoordinateRegionFromValues(region),isAnimated)},[map]),setVisibleMapRect:react_default.a.useCallback(function(visibleMapRect){var isAnimated=arguments.length>1&&void 0!==arguments[1]&&arguments[1];map&&map.setVisibleMapRectAnimated(createMapRect.apply(void 0,Object(toConsumableArray.a)(visibleMapRect)),isAnimated)},[map])}},MapContext=react_default.a.createContext({map:void 0,mapkit:void 0}),Map_MapProvider=function MapProvider(_ref){var children=_ref.children,context=_ref.context;return react_default.a.createElement(MapContext.Provider,{value:context,children:children})},Map_MapContainer=function MapContainer(_ref2){var children=_ref2.children,mapRef=_ref2.mapRef;return react_default.a.createElement("div",{ref:mapRef,style:{width:"100%",height:"100%"},children:children})},Map_CreateMap=function CreateMap(_ref3){var children=_ref3.children,defaultOptions=Object(objectWithoutProperties.a)(_ref3,["children"]),_useMap$mapProps=useMap_useMap(defaultOptions).mapProps,mapkit=_useMap$mapProps.mapkit,map=_useMap$mapProps.map,mapRef=_useMap$mapProps.mapRef;return react_default.a.createElement(Map_MapProvider,{context:{mapkit:mapkit,map:map}},react_default.a.createElement(Map_MapContainer,{mapRef:mapRef,children:children}))},Map_Map=function Map(_ref4){var tokenOrCallback=_ref4.tokenOrCallback,mapkit=_ref4.mapkit,map=_ref4.map,mapRef=_ref4.mapRef,props=Object(objectWithoutProperties.a)(_ref4,["tokenOrCallback","mapkit","map","mapRef"]),context=react_default.a.useContext(MapkitContext);if(mapRef)return react_default.a.createElement(Map_MapProvider,{context:{mapkit:mapkit,map:map}},react_default.a.createElement(Map_MapContainer,Object.assign({mapRef:mapRef},props)));var mapBox=react_default.a.createElement(Map_CreateMap,props);if(context.isInProvider)return mapBox;if(!tokenOrCallback)throw new Error("`tokenOrCallback` is required. Either add it to this `Map` component or to a `MapkitProvider` parent of this component.");return react_default.a.createElement(MapkitProvider_MapkitProvider,{tokenOrCallback:tokenOrCallback,children:mapBox})},Marker_Marker=function Marker(_ref){var latitude=_ref.latitude,longitude=_ref.longitude,options=Object(objectWithoutProperties.a)(_ref,["latitude","longitude"]),_React$useContext=react_default.a.useContext(MapContext),mapkit=_React$useContext.mapkit,map=_React$useContext.map,marker=react_default.a.useRef();return react_default.a.useEffect(function(){mapkit&&map&&(marker.current=new mapkit.MarkerAnnotation(createCoordinate(latitude,longitude),function propsToMarkerConstructionOptions(_ref2){var padding=_ref2.padding,options=Object(objectWithoutProperties.a)(_ref2,["padding"]);return Object(objectSpread.a)({padding:createPadding(padding||0)},options)}(options)),map.addAnnotation(marker.current))},[mapkit,map]),null};__webpack_require__.d(__webpack_exports__,"b",function(){return MapkitProvider_MapkitProvider}),__webpack_require__.d(__webpack_exports__,"a",function(){return Map_Map}),__webpack_require__.d(__webpack_exports__,"c",function(){return Marker_Marker}),__webpack_require__.d(__webpack_exports__,"d",function(){return useMap_useMap})}},[[235,1,2]]]);
//# sourceMappingURL=main.3922396d4ef0096aaae1.bundle.js.map