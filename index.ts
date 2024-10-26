export const getMalaysianSolatTimesBasedOnDate = async (
  code: string,
  date: Date
) => {
  const formData = new FormData();
  formData.append('datestart', date.toISOString().split('T')[0]);
  formData.append('dateend', date.toISOString().split('T')[0]);

  const response = await fetch(
    `https://www.e-solat.gov.my/index.php?r=esolatApi/takwimsolat&period=duration&zone=${code}`,
    {
      method: 'POST',
      body: formData
    }
  );

  const data = await response.json();

  return data;
};

export const getMalaysianSolateTimesBasedOnWeek = async (
  code: string,
  date: Date
) => {
  const formData = new FormData();

  //get date after 7 days
  const lastDay = date.setDate(date.getDate() + 7);
  const lastDayDate = new Date(lastDay);

  formData.append('datestart', date.toISOString().split('T')[0]);
  formData.append('dateend', lastDayDate.toISOString().split('T')[0]);

  const response = await fetch(
    `https://www.e-solat.gov.my/index.php?r=esolatApi/takwimsolat&period=week&zone=${code}`,
    {
      method: 'POST',
      body: formData
    }
  );

  const data = await response.json();

  return data;
};

export const getMalaysianSolatTimesBasedOnMonth = async (
  code: string,
  month: number,
  year: number
) => {
  const formData = new FormData();
  //find last day of the month based on month
  const lastDay = new Date(year, month, 0).getDate();

  formData.append('datestart', `${year.toString()}-${month.toString()}-01`);
  formData.append(
    'dateend',
    `${year.toString()}-${month.toString()}-${lastDay.toString()}`
  );

  const response = await fetch(
    `https://www.e-solat.gov.my/index.php?r=esolatApi/takwimsolat&period=month&zone=${code}`,
    {
      method: 'POST',
      body: formData
    }
  );

  const data = await response.json();

  return data;
};

export const getMalaysianSolatTimesBasedOnYear = async (
  code: string,
  year: number
) => {
  const formData = new FormData();
  formData.append('datestart', `${year.toString()}-01-01`);
  formData.append('dateend', `${year.toString()}-12-31`);

  const response = await fetch(
    `https://www.e-solat.gov.my/index.php?r=esolatApi/takwimsolat&period=year&zone=${code}`,
    {
      method: 'POST',
      body: formData
    }
  );

  const data = await response.json();

  return data;
};

export const calculateTodaySolatTimesBasedOnLocation = (
  latitude: string,
  longitude: string,
  date: Date
) => {};

export enum LocationCode {
  //SELANGOR
  SelangorCentral = 'SGR01',
  SelangorNorthWest = 'SGR02',
  SelangorSouthWest = 'SGR03',

  //WILAYAH PERSEKUTUAN
  WPKualaLumpur = 'WLY01',
  WPPutrajaya = 'WLY02',

  //JOHOR
  JohorIslandZone = 'JHR01',
  JohorEastCoast = 'JHR02',
  JohorCentral = 'JHR03',
  JohorWestCoast = 'JHR04',

  //KEDAH
  KedahNorth = 'KDH01',
  KedahCentral = 'KDH02',
  KedahNortheast = 'KDH03',
  KedahSoutheast = 'KDH04',
  KedahSouthernBorder = 'KDH05',
  KedahIslandZone = 'KDH06',
  KedahMountainPeak = 'KDH07',

  //KELANTAN
  KelantanCentralNorth = 'KTN01',
  KelantanSouthernHighlands = 'KTN02',

  //MELAKA
  Melaka = 'MLK01',

  //NEGERI SEMBILAN
  NegeriSembilanEast = 'NGS01',
  NegeriSembilanCentral = 'NGS02',

  //PAHANG
  PahangIslandZone = 'PHG01',
  PahangEastCoast = 'PHG02',
  PahangCentral = 'PHG03',
  PahangWestern = 'PHG04',
  PahangHighlandGateway = 'PHG05',
  PahangHighlandRegion = 'PHG06',

  //PENANG
  Penang = 'PNG01',

  //PERAK
  PerakSouthern = 'PRK01',
  PerakCentral = 'PRK02',
  PerakNortheast = 'PRK03',
  PerakHighlands = 'PRK04',
  PerakWestCoast = 'PRK05',
  PerakNorthwest = 'PRK06',
  PerakLarutHighlands = 'PRK07',

  //PERLIS
  Perlis = 'PLS01',

  //SABAH
  SabahEastCoast = 'SBH01',
  SabahCentralEast = 'SBH02',
  SabahSoutheastCoast = 'SBH03',
  SabahSouthwestCoast = 'SBH04',
  SabahNorthernTip = 'SBH05',
  SabahMountainRegion = 'SBH06',
  SabahWestCoast = 'SBH07',
  SabahInteriorHighlands = 'SBH08',
  SabahInteriorLowlands = 'SBH09',

  //SARAWAK
  SarawakNorthern = 'SWK01',
  SarawakNorthwest = 'SWK02',
  SarawakCentralNorth = 'SWK03',
  SarawakCentral = 'SWK04',
  SarawakCentralCoast = 'SWK05',
  SarawakSouthwestInland = 'SWK06',
  SarawakSouthwest = 'SWK07',
  SarawakSouthern = 'SWK08',
  SarawakSpecialZone = 'SWK09',

  //Terengganu
  TerengganuCentral = 'TGR01',
  TerengganuNorthCoast = 'TGR02',
  TerengganuInland = 'TGR03',
  TerengganuSouthCoast = 'TGR04'
}
