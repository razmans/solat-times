export const getMalaysianSolatTimesBasedOnDate = async (code, date) => {
    const formData = new FormData();
    const formattedDate = date.toISOString().split('T')[0];
    formData.append('datestart', formattedDate);
    formData.append('dateend', formattedDate);
    const response = await fetch(`https://www.e-solat.gov.my/index.php?r=esolatApi/takwimsolat&period=duration&zone=${code}`, { method: 'POST', body: formData });
    return { prayerTime: (await response.json()).prayerTime };
};
export const getMalaysianSolateTimesBasedOnWeek = async (code, date) => {
    const formData = new FormData();
    //get date after 7 days
    const lastDay = date.setDate(date.getDate() + 7);
    const lastDayDate = new Date(lastDay);
    formData.append('datestart', date.toISOString().split('T')[0]);
    formData.append('dateend', lastDayDate.toISOString().split('T')[0]);
    const response = await fetch(`https://www.e-solat.gov.my/index.php?r=esolatApi/takwimsolat&period=week&zone=${code}`, {
        method: 'POST',
        body: formData
    });
    return { prayerTime: (await response.json()).prayerTime };
};
export const getMalaysianSolatTimesBasedOnMonth = async (code, month, year) => {
    const formData = new FormData();
    //find last day of the month based on month
    const lastDay = new Date(year, month, 0).getDate();
    formData.append('datestart', `${year.toString()}-${month.toString()}-01`);
    formData.append('dateend', `${year.toString()}-${month.toString()}-${lastDay.toString()}`);
    const response = await fetch(`https://www.e-solat.gov.my/index.php?r=esolatApi/takwimsolat&period=month&zone=${code}`, {
        method: 'POST',
        body: formData
    });
    return { prayerTime: (await response.json()).prayerTime };
};
export const getMalaysianSolatTimesBasedOnYear = async (code, year) => {
    const formData = new FormData();
    formData.append('datestart', `${year.toString()}-01-01`);
    formData.append('dateend', `${year.toString()}-12-31`);
    const response = await fetch(`https://www.e-solat.gov.my/index.php?r=esolatApi/takwimsolat&period=year&zone=${code}`, {
        method: 'POST',
        body: formData
    });
    return { prayerTime: (await response.json()).prayerTime };
};
export var LocationCode;
(function (LocationCode) {
    //SELANGOR
    LocationCode["SelangorCentral"] = "SGR01";
    LocationCode["SelangorNorthWest"] = "SGR02";
    LocationCode["SelangorSouthWest"] = "SGR03";
    //WILAYAH PERSEKUTUAN
    LocationCode["WPKualaLumpur"] = "WLY01";
    LocationCode["WPLabuan"] = "WLY02";
    //JOHOR
    LocationCode["JohorIslandZone"] = "JHR01";
    LocationCode["JohorEastCoast"] = "JHR02";
    LocationCode["JohorCentral"] = "JHR03";
    LocationCode["JohorWestCoast"] = "JHR04";
    //KEDAH
    LocationCode["KedahNorth"] = "KDH01";
    LocationCode["KedahCentral"] = "KDH02";
    LocationCode["KedahNortheast"] = "KDH03";
    LocationCode["KedahSoutheast"] = "KDH04";
    LocationCode["KedahSouthernBorder"] = "KDH05";
    LocationCode["KedahIslandZone"] = "KDH06";
    LocationCode["KedahMountainPeak"] = "KDH07";
    //KELANTAN
    LocationCode["KelantanCentralNorth"] = "KTN01";
    LocationCode["KelantanSouthernHighlands"] = "KTN03";
    //MELAKA
    LocationCode["Melaka"] = "MLK01";
    //NEGERI SEMBILAN
    LocationCode["NegeriSembilanEast"] = "NGS01";
    LocationCode["NegeriSembilanCentral"] = "NGS02";
    //PAHANG
    LocationCode["PahangIslandZone"] = "PHG01";
    LocationCode["PahangEastCoast"] = "PHG02";
    LocationCode["PahangCentral"] = "PHG03";
    LocationCode["PahangWestern"] = "PHG04";
    LocationCode["PahangHighlandGateway"] = "PHG05";
    LocationCode["PahangHighlandRegion"] = "PHG06";
    //PENANG
    LocationCode["Penang"] = "PNG01";
    //PERAK
    LocationCode["PerakSouthern"] = "PRK01";
    LocationCode["PerakCentral"] = "PRK02";
    LocationCode["PerakNortheast"] = "PRK03";
    LocationCode["PerakHighlands"] = "PRK04";
    LocationCode["PerakWestCoast"] = "PRK05";
    LocationCode["PerakNorthwest"] = "PRK06";
    LocationCode["PerakLarutHighlands"] = "PRK07";
    //PERLIS
    LocationCode["Perlis"] = "PLS01";
    //SABAH
    LocationCode["SabahEastCoast"] = "SBH01";
    LocationCode["SabahCentralEast"] = "SBH02";
    LocationCode["SabahSoutheastCoast"] = "SBH03";
    LocationCode["SabahSouthwestCoast"] = "SBH04";
    LocationCode["SabahNorthernTip"] = "SBH05";
    LocationCode["SabahMountainRegion"] = "SBH06";
    LocationCode["SabahWestCoast"] = "SBH07";
    LocationCode["SabahInteriorHighlands"] = "SBH08";
    LocationCode["SabahInteriorLowlands"] = "SBH09";
    //SARAWAK
    LocationCode["SarawakNorthern"] = "SWK01";
    LocationCode["SarawakNorthwest"] = "SWK02";
    LocationCode["SarawakCentralNorth"] = "SWK03";
    LocationCode["SarawakCentral"] = "SWK04";
    LocationCode["SarawakCentralCoast"] = "SWK05";
    LocationCode["SarawakSouthwestInland"] = "SWK06";
    LocationCode["SarawakSouthwest"] = "SWK07";
    LocationCode["SarawakSouthern"] = "SWK08";
    LocationCode["SarawakSpecialZone"] = "SWK09";
    //Terengganu
    LocationCode["TerengganuCentral"] = "TGR01";
    LocationCode["TerengganuNorthCoast"] = "TGR02";
    LocationCode["TerengganuInland"] = "TGR03";
    LocationCode["TerengganuSouthCoast"] = "TGR04";
})(LocationCode || (LocationCode = {}));
