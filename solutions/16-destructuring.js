const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
export const getTheNearestLocation = (locations, coordinates) => {
    if (locations.length !== 0) {
        let [place, [x, y]] = locations[0];
        let nearestDistance = getDistance([x, y], coordinates);
        for (let i = 1; i < locations.length; i++) {
            let [tempPlace, [tempX, tempY]] = locations[i];
            if (nearestDistance > getDistance([tempX, tempY], coordinates)) {
                place = tempPlace;
                x = tempX;
                y = tempY;
                nearestDistance = getDistance([x, y], coordinates);
            }
        }
        return [place, [x, y]];
    }
    else return null;
}
// END
