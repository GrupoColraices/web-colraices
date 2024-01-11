/**
 * Finds the most frequent value for a given attribute in a list of properties.
 *
 * @param {Array} properties - The list of properties to analyze.
 * @param {string} attr - The attribute for which to find the most frequent value.
 * @returns {string|null} The most common value for the specified attribute or null if the input list is empty.
 */
export const mostFrequent = (properties, attr) => {
    if (!properties?.length) {
        return null;
    }
    let typeFrequency = properties?.reduce((counter, property) => {
        let type = property[attr];
        counter[type] = (counter[type] || 0) + 1;
        return counter;
    }, {});

    let mostCommonType = Object.keys(typeFrequency)?.reduce((type, current) => {
        return typeFrequency[current] > typeFrequency[type] ? current : type;
    });

    return mostCommonType;
}
/**
 * Finds the maximum price among a list of properties.
 *
 * @param {Array} properties - The list of properties to analyze.
 * @returns {number} The maximum price found in the list of properties.
 */

export const getMaxPrice = (properties) => {
    return properties?.reduce((max, property) => {
        return property.precio > max ? property.precio : max;
    }, 0);
}
/**
 * Filters a list of properties based on specified filters and favorite items.
 *
 * @param {Array} data - The list of properties to filter.
 * @param {Object} filters - The filters to apply (type, state, price).
 * @param {Array} favorites - The list of favorite properties.
 * @returns {Array} The filtered list of properties.
 */

export const filterProperties = (data, filters, favorites) => {
    if (Object.values(filters).some((element) => !element) && !data.length) {
        return [];
    }
    const result = data
        ?.filter((property) => property?.tipo?.toLowerCase().indexOf(filters.type.toLowerCase()) !== -1)
        ?.filter((property) => property?.estado?.toLowerCase().indexOf(filters.state.toLowerCase()) !== -1)
        ?.filter((property) => property?.precio < filters.price)
        .filter((item) => !favorites?.some((favorite) => favorite.id === item.id));

    if (result.length >= 3) {
        return result;
    }
    const filterStatePrice = data
        ?.filter((property) => property?.estado?.toLowerCase().indexOf(filters.state.toLowerCase()) !== -1)
        ?.filter((property) => property?.precio < filters.price)
        .filter((item) => !favorites?.some((favorite) => favorite.id === item.id));
    if (filterStatePrice.length >= 3) {
        return filterStatePrice;
    }
    const filterPrice = data
        ?.filter((property) => property?.precio < filters.price)
        .filter((item) => !favorites?.some((favorite) => favorite.id === item.id));
    if (filterPrice.length >= 3) {
        return filterPrice;
    }
    return data.filter((item) => !favorites?.some((favorite) => favorite.id === item.id));
};
/**
 * Filters and organizes a list of properties based on specified criteria.
 *
 * @param {Array} properties - The list of properties to filter and organize.
 * @param {string} state - The most frequent state value among favorites.
 * @param {string} propertyType - The most frequent property type value among favorites.
 * @param {number} maxPrice - The maximum price among favorites.
 * @param {Array} favorites - The list of favorite properties.
 * @param {Array} frequency - The list of most frequent location values.
 * @returns {Array} The final filtered and organized list of properties.
 */
export const finalFilteredProperties = (properties, state, propertyType, maxPrice, favorites, frequency) => {
    const filtered = filterProperties(properties, { state, type: propertyType, price: maxPrice }, favorites);
    if (frequency.length < 2) {
        return filtered?.slice(0, 6);
    }
    const location1 = filtered
        ?.filter((item) => frequency[0] === item.ciudad || frequency[0] === item.region)
        .slice(0, 3);
    const location2 = filtered
        ?.filter((item) => frequency[1] === item.ciudad || frequency[1] === item.region)
        .slice(0, 3);
    return location1.concat(location2);
};