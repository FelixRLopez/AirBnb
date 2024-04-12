function filterByCity(targetCity, listingCityArray) {
  let matchingTargets = [];

  for (let i = 0; i < listingCityArray.length; i++) {
    if (listingCityArray[i].toLowerCase() == targetCity.toLowerCase()) {
      matchingTargets.push(i);
    }
  }

  return matchingTargets;
}

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  let matchingTargets = [];

  for (let i = 0; i < listingPriceArray.length; i++) {
    const price = listingPriceArray[i];

    if (price >= minPrice && price <= maxPrice) {
      matchingTargets.push(i);
    }
  }
  
  return matchingTargets;
}

// LevelUp!
function filterByTypes(targetTypes, listingTypeArray) {
  let matchingTargets = [];

  for (let i = 0; i < listingTypeArray.length; i++) {
    const listingType = listingTypeArray[i];

    if (targetTypes.includes(listingType)) {
      matchingTargets.push(i);
    }
  }
  
  return matchingTargets;
}