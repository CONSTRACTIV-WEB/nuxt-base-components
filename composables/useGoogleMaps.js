export function useGoogleMaps() {
  const getRouteLink = (street, zip, place) => {
    const destination = street + ', ' + zip + ' ' + place
    const encodedDestination = encodeURIComponent(destination)
    return `https://www.google.com/maps/dir/?api=1&destination=${encodedDestination}`
  }

  return {
    getRouteLink,
  }
}