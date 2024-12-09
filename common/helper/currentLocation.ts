type dataType = {
  lat: number;
  lng: number;
};
export default function GetCurrentLocation() {
  let loc: dataType = { lat: 0, lng: 0 };
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    console.log('Geolocation not supported');
  }

  function success(position: {
    coords: { latitude: number; longitude: number };
  }) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    loc = { lat: latitude, lng: longitude };
  }

  function error() {
    console.log('Unable to retrieve your location');
  }
  return loc as dataType;
}
