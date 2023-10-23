// Latitude and longitude for your shop
var shopLatLng = [7.237999610252806, 79.84313963760539];

// Shop's website URL
var shopWebsite = 'shop_detail.html'; // Replace this with your actual shop's website URL

// Create a map centered at your shop location
var map = L.map('map').setView(shopLatLng, 14);

// Add OpenStreetMap as the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

// Add a marker for your shop
var shopMarker = L.marker(shopLatLng).addTo(map);
shopMarker.bindPopup(`
    <strong>Gym Shark</strong><br>
    <a href="${shopWebsite}" target="_blank">View Shop Details</a>
`).openPopup();

// Get user's current location (if available)
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var userLatLng = [position.coords.latitude, position.coords.longitude];

        // Add a marker for the user's current location
        var userMarker = L.marker(userLatLng).addTo(map);
        userMarker.bindPopup('Current Location').openPopup();
    });
}
