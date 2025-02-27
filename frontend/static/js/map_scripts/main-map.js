import {init as initMap} from "/static/js/map_scripts/map.js";
import { setupMenus } from "/static/js/map_scripts/menu.js";
import { setupEventListeners } from "/static/js/map_scripts/map.js";
import { setupPlaceOverviewButtons } from "/static/js/map_scripts/map.js";
import { setupGeolocation } from "/static/js/map_scripts/map.js";
import { setupOverlays } from "/static/js/map_scripts/overlays.js";

document.addEventListener("DOMContentLoaded", async () => {
    await initMap();

    setupMenus();
    setupEventListeners();
    setupPlaceOverviewButtons();
    setupGeolocation();
    setupOverlays();
});
