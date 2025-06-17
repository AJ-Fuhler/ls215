let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

const capitalizeString = string => string[0].toUpperCase() + string.slice(1);

const capitalizeBandName = band => {
  band.name = band.name.split(' ')
                       .map(word => capitalizeString(word))
                       .join(' ');
};

const removeDots = band => {
  band.name = band.name.replace('.', '');
};

const updateCountry = band => {
  band.country = 'Canada';
}

function processBands(bands) {
  return bands.map(band => {
    capitalizeBandName(band);
    removeDots(band);
    updateCountry(band);

    return band;
  });
}

console.log(processBands(bands));

// should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]

console.log(bands);