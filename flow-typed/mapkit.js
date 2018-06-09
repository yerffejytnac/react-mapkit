declare module 'mapkit' {
  declare export type FeatureVisibility = 'adaptive' | 'hidden' | 'visible'
  declare export type MapType = 'hybrid' | 'satellite' | 'standard'
  declare export type PaddingOptions = {
    top?: number,
    right?: number,
    bottom?: number,
    left?: number,
  }
  declare export type MapShowItemsOptions = {
    animate?: boolean,
    padding?: Padding,
    minimumSpan?: CoordinateSpan,
  }

  declare type CoordinateRegion = {
    //todo
  }
  declare type CoordinateSpan = {
    //todo
  }
  declare type MapRect = {
    //todo
  }
  declare type Annotation = {
    //todo
  }
  declare type ClusterAnnnotation = {
    //todo
  }
  declare type Overlay = {
    //todo
  }
  declare type TileOverlay = {
    //todo
  }

  declare type MapKitInitOptions = {
    language?: string,
    authorizationCallback: (done: (token: string) => void) => void,
  }

  declare type AnnotationForCluster = (
    ClusterAnnnotation,
  ) => ClusterAnnnotation | Annotation | void

  declare type AnnotationArray = Array<?Annotation>
  declare type OverlayArray = Array<?Overlay>
  declare type TileOverlayArray = Array<?TileOverlay>

  declare type MapConstructorOptions = {
    visibleMapRect?: MapRect,
    region?: CoordinateRegion,
    center?: Coordinate,
    rotation?: number,
    tintColor?: string,
    mapType?: MapType,
    padding?: Padding,
    showsMapTypeControl?: boolean,
    isRotationEnabled?: boolean,
    showsCompass?: FeatureVisibility,
    isZoomEnabled?: boolean,
    showsZoomControl?: boolean,
    isScrollEnabled?: boolean,
    showsScale?: FeatureVisibility,

    annotations?: AnnotationArray,
    annotationForCluster?: AnnotationForCluster,
    selectedAnnotation?: ?Annotation,

    overlays?: OverlayArray,
    selectedOverlay?: ?Overlay,
    showsPointsOfInterest?: boolean,

    showsUserLocation?: boolean,
    tracksUserLocation?: boolean,
    userLocationAnnotation?: ?Annotation,
    showsUserLocationControl?: boolean,

    element: HTMLElement,
  }

  declare type MapPoint = {
    x: number,
    y: number,

    copy: () => MapPoint,
    equals: (MapPoint) => boolean,
    toCoordinate: () => Coordinate,
  }

  declare class Coordinate {
    latitude: number;
    longitude: number;

    copy: () => Coordinate;
    equals: (Coordinate) => boolean;
    toMapPoint: () => MapPoint;
    toUnwrappedMapPoint: () => MapPoint;
  }

  declare class Padding {
    top: number;
    right: number;
    bottom: number;
    left: number;
  }

  declare class DOMPoint {
    x: number;
    y: number;
  }

  declare export class Map {
    isRotationAvailable: boolean;
    isRotationEnabled: boolean;
    isScrollEnabled: boolean;
    isZoomEnabled: boolean;

    center: Coordinate;
    setCenterAnimated: (Coordinate, ?boolean) => void;

    region: CoordinateRegion;
    setRegionAnimated: (CoordinateRegion, ?boolean) => void;

    rotation: number;
    setRotationAnimated: (number, ?boolean) => void;

    visibleMapRect: MapRect;
    setVisibleMapRectAnimated: (MapRect, boolean) => void;

    mapType: MapType;
    padding: Padding;

    showsCompass: FeatureVisibility;
    showsMapTypeControl: boolean;
    showsZoomControl: boolean;
    showsUserLocationControl: boolean;
    showsPointsOfInterest: boolean;
    showsScale: FeatureVisibility;
    tintColor: ?string;

    showItems: (
      Array<Annotation | Overlay>,
      MapShowItemsOptions,
    ) => Array<Annotation | Overlay>;

    annotations: AnnotationArray;
    selectedAnnotation: ?Annotation;

    annotationForCluster: AnnotationForCluster;
    annotationsInMapRect: (MapRect) => AnnotationArray;

    addAnnotation: (Annotation) => Annotation;
    addAnnotations: (AnnotationArray) => AnnotationArray;

    removeAnnotation: (Annotation) => Annotation;
    removeAnnotations: (AnnotationArray) => AnnotationArray;

    overlays: OverlayArray;
    selectedOverlay: ?Overlay;

    overlaysAtPoint: (DOMPoint) => OverlayArray;

    addOverlay: (Overlay) => Overlay;
    addOverlays: (OverlayArray) => OverlayArray;

    removeOverlay: (Overlay) => Overlay;
    removeOverlays: (OverlayArray) => OverlayArray;

    topOverlayAtPoint: (DOMPoint) => ?Overlay;

    tileOverlays: TileOverlayArray;

    addTileOverlay: (TileOverlay) => TileOverlay;
    addTileOverlays: (TileOverlayArray) => TileOverlayArray;

    removeTileOverlay: (TileOverlay) => TileOverlay;
    removeTileOverlays: (TileOverlayArray) => TileOverlayArray;

    showsUserLocation: boolean;
    tracksUserLocation: boolean;

    userLocationAnnotation: ?Annotation;

    convertCoordinateToPointOnPage: (Coordinate) => DOMPoint;
    convertPointOnPageToCoordinate: (DOMPoint) => Coordinate;

    destroy: () => void;

    element: HTMLElement;
  }

  declare export default class MapKit {
    init(MapKitInitOptions): void;
    Map(domId?: string, ?MapConstructorOptions): Map;
    Padding(PaddingOptions): Padding;
    Coordinate(latitude: number, longitude: number): Coordinate;
  }
}