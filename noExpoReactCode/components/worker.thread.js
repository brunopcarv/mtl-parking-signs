import {LayoutAnimation} from 'react-native';
import {self} from 'react-native-threads';

// listen for messages
self.onmessage = (message) => {
  handleMessage;
};

const signs = require('./signalisation_stationnement._pic2_prec5.json');

function handleMessage(mapRegion) {
  const {lat, lon, latDelta, lonDelta} = mapRegion;

  function between(x, min, max) {
    return x >= min && x <= max;
  }
  const latMin = lat - latDelta;
  const latMax = lat + latDelta;
  const lonMin = lon - lonDelta;
  const lonMax = lon + lonDelta;
  var sign;
  for (sign of signs) {
    if (
      between(sign.lat, latMin, latMax) &&
      between(sign.long, lonMin, lonMax)
    ) {
      self.postMessage(sign);
    }
  }
}
