
import { MapContainer, ImageOverlay, TileLayer, ZoomControl } from 'react-leaflet';
import "leaflet/dist/leaflet.css";


 const LeafletMap = () => {

    const bounds = [
        [0, 0],
        [700, 900], // Adjust these values based on the dimensions of your image
      ];
    return (
        <MapContainer
        center={[500, 500]} // Adjust these values based on the dimensions of your image
        zoom={1}
        minZoom={-5}
        maxZoom={10}
        scrollWheelZoom={true}
        attributionControl={false}
        crs={L.CRS.Simple}
      >
        <ImageOverlay
          url="/atozia-map.jpg"
          bounds={bounds}
        />
      </MapContainer>
    )
}

export default LeafletMap