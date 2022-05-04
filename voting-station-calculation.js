const chooseStations = function (stations) {
  const validStations = [];
  for (const station of stations) {
    const capacity = station[1];
    if (capacity >= 20) {
      const type = station[2];
      if (type === 'school' || type === 'community centre') {
        validStations.push(station[0]);
      }
    }
  }
  return validStations;
}
