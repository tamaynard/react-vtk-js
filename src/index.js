// Ensure vtk.js classes available for Algorithm and Reader
import 'react-vtk-js/src/AvailableClasses';

// Get React pieces
import Core from 'react-vtk-js/src/core';
import Representations from 'react-vtk-js/src/representations';

// Core
export const VolumeRepresentation = Core.VolumeRepresentation;
export const PointData = Core.PointData;
export const PolyData = Core.PolyData;
export const Reader = Core.Reader;
export const View = Core.View;
export const GeometryRepresentation = Core.GeometryRepresentation;
export const ImageData = Core.ImageData;
export const DataArray = Core.DataArray;
export const FieldData = Core.FieldData;
export const Algorithm = Core.Algorithm;
export const CellData = Core.CellData;

// Representations
export const PointCloudRepresentation = Representations.PointCloudRepresentation;

export default {
  Core,
  Representations,
};