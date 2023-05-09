/* eslint-disable import/extensions */
import ENDPOINT from './end-point';
// eslint-disable-next-line import/extensions
import CONFIG from './config.js';

class SourceData {
  static async listResto() {
    try {
      const response = await fetch(ENDPOINT.LIST);
      const responseJson = await response.json();
      await this._addRestaurantsToCache(responseJson);
      return responseJson;
    } catch (error) {
      const restaurants = await this._getRestaurantsFromCache();
      return restaurants;
    }
  }

  static async detailResto(id) {
    try {
      const response = await fetch(ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      await this._addRestaurantDetailToCache(responseJson);
      return responseJson;
    } catch (error) {
      const restaurant = await this._getRestaurantDetailFromCache(id);
      return restaurant;
    }
  }

  static async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  }

  static async _getRestaurantsFromCache() {
    const cache = await this._openCache();
    const response = await cache.match(ENDPOINT.LIST);

    if (!response) return null;

    const responseJson = await response.json();
    return responseJson;
  }

  static async _addRestaurantsToCache(restaurants) {
    const cache = await this._openCache();
    await cache.put(ENDPOINT.LIST, new Response(JSON.stringify(restaurants)));
  }

  static async _getRestaurantDetailFromCache(id) {
    const cache = await this._openCache();
    const response = await cache.match(ENDPOINT.DETAIL(id));

    if (!response) return null;

    const responseJson = await response.json();
    return responseJson;
  }

  static async _addRestaurantDetailToCache(restaurant) {
    const cache = await this._openCache();
    await cache.put(ENDPOINT.DETAIL(restaurant.id), new Response(JSON.stringify(restaurant)));
  }
}

export default SourceData;
