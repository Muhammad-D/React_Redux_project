export let updateObjectInArray = (items, itemId, objPropName, newProperty) => {
  return items.map((u) => {
    if (u[objPropName] === itemId) {
      return { ...u, ...newProperty };
    } else {
      return u;
    }
  });
};
