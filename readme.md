# Malaysian Solat Times API

A JavaScript library to fetch Malaysian Solat (prayer) times for specific zones and dates, using the e-Solat.gov.my API.

## Installation

Install via npm:

```bash
npm install malaysian-solat-times
```

## Usage

This library provides four main functions to retrieve Malaysian Solat times based on specific durations (day, week, month, year). 
<!-- It also includes a helper function (currently a placeholder) to calculate Solat times based on location coordinates. -->

### Example

```javascript
import {
  getMalaysianSolatTimesBasedOnDate,
  getMalaysianSolatTimesBasedOnWeek,
  getMalaysianSolatTimesBasedOnMonth,
  getMalaysianSolatTimesBasedOnYear,
  LocationCode
} from 'malaysian-solat-times';

// Example: Fetch Solat times for Selangor Central for today.
const code = LocationCode.SelangorCentral;
const date = new Date();

getMalaysianSolatTimesBasedOnDate(code, date)
  .then(data => console.log('Today\'s Solat Times:', data))
  .catch(error => console.error(error));
```

## API Functions

### `getMalaysianSolatTimesBasedOnDate(code: string, date: Date)`

Fetches Solat times for a specific date.

- **Parameters**
  - `code`: Location code from `LocationCode` enum.
  - `date`: Date object representing the desired date.
- **Returns**: A Promise with the JSON data for the specified day.

### `getMalaysianSolatTimesBasedOnWeek(code: string, date: Date)`

Fetches Solat times for a week starting from the provided date.

- **Parameters**
  - `code`: Location code from `LocationCode` enum.
  - `date`: Date object representing the start date of the week.
- **Returns**: A Promise with the JSON data for the week.

### `getMalaysianSolatTimesBasedOnMonth(code: string, month: number, year: number)`

Fetches Solat times for an entire month.

- **Parameters**
  - `code`: Location code from `LocationCode` enum.
  - `month`: The month as a number (1 for January, 12 for December).
  - `year`: The year as a 4-digit number.
- **Returns**: A Promise with the JSON data for the specified month.

### `getMalaysianSolatTimesBasedOnYear(code: string, year: number)`

Fetches Solat times for the entire year.

- **Parameters**
  - `code`: Location code from `LocationCode` enum.
  - `year`: The year as a 4-digit number.
- **Returns**: A Promise with the JSON data for the specified year.

<!-- ### `calculateTodaySolatTimesBasedOnLocation(latitude: string, longitude: string, date: Date)`

*Currently a placeholder function.* It’s intended to calculate Solat times based on geographic coordinates and date. -->

## Location Codes

Use `LocationCode` to access supported location codes in Malaysia. Example use: `LocationCode.SelangorCentral`. The full list of the codes are:
Here’s the table with your requested information in markdown format:

### Selangor
| Code                 | Area covered                           |
|------------------------------|--------------------------------|
| SelangorCentral              | Gombak, Petaling, Sepang, Hulu Langat, Hulu Selangor, S.Alam |
| SelangorNorthWest            | Kuala Selangor, Sabak Bernam  |
| SelangorSouthWest            | Klang, Kuala Langat           |

### Wilayah Persekutuan
| Code                 | Area covered                           |
|------------------------------|--------------------------------|
| WPKualaLumpur                | Kuala Lumpur, Putrajaya       |
| WPLabuan                     | Labuan                        |
| JohorIslandZone              | Pulau Aur dan Pulau Pemanggil |
| JohorEastCoast               | Johor Bahru, Kota Tinggi, Mersing |
| JohorCentral                 | Kluang, Pontian               |
| JohorWestCoast               | Batu Pahat, Muar, Segamat, Gemas Johor |
| KedahNorth                   | Kota Setar, Kubang Pasu, Pokok Sena (Daerah Kecil) |
| KedahCentral                 | Kuala Muda, Yan, Pendang      |
| KedahNortheast               | Padang Terap, Sik             |
| KedahSoutheast               | Baling                        |
| KedahSouthernBorder          | Bandar Baharu, Kulim          |
| KedahIslandZone              | Langkawi                      |
| KedahMountainPeak            | Puncak Gunung Jerai           |
| KelantanCentralNorth         | Bachok, Kota Bharu, Machang, Pasir Mas, Pasir Puteh, Tanah Merah, Tumpat, Kuala Krai, Mukim Chiku |
| KelantanSouthernHighlands    | Gua Musang (Daerah Galas Dan Bertam), Jeli |
| Melaka                       | Seluruh Negeri Melaka         |
| NegeriSembilanEast           | Tampin, Jempol                |
| NegeriSembilanCentral        | Jelebu, Kuala Pilah, Port Dickson, Rembau, Seremban |
| PahangIslandZone             | Pulau Tioman                  |
| PahangEastCoast              | Kuantan, Pekan, Rompin, Muadzam Shah |
| PahangCentral                | Jerantut, Temerloh, Maran, Bera, Chenor, Jengka |
| PahangWestern                | Bentong, Lipis, Raub          |
| PahangHighlandGateway        | Genting Sempah, Janda Baik, Bukit Tinggi |
| PahangHighlandRegion         | Cameron Highlands, Genting Highlands, Bukit Fraser |
| Perlis                       | Kangar, Padang Besar, Arau    |
| Penang                       | Seluruh Negeri Pulau Pinang   |
| PerakSouthern                | Tapah, Slim River, Tanjung Malim |
| PerakCentral                 | Kuala Kangsar, Sg. Siput (Daerah Kecil), Ipoh, Batu Gajah, Kampar |
| PerakNortheast               | Lenggong, Pengkalan Hulu, Grik |
| PerakHighlands               | Temengor, Belum               |
| PerakWestCoast               | Kg Gajah, Teluk Intan, Bagan Datuk, Seri Iskandar, Beruas, Parit, Lumut, Sitiawan, Pulau Pangkor |
| PerakNorthwest               | Selama, Taiping, Bagan Serai, Parit Buntar |
| PerakLarutHighlands          | Bukit Larut                   |
| SabahEastCoast               | Bahagian Sandakan (Timur), Bukit Garam, Semawang, Temanggong, Tambisan, Bandar Sandakan, Sukau |
| SabahCentralEast             | Beluran, Telupid, Pinangah, Terusan, Kuamut, Bahagian Sandakan (Barat) |
| SabahSoutheastCoast          | Lahad Datu, Silabukan, Kunak, Sahabat, Semporna, Tungku, Bahagian Tawau (Timur) |
| SabahSouthwestCoast          | Bandar Tawau, Balong, Merotai, Kalabakan, Bahagian Tawau (Barat) |
| SabahNorthernTip             | Kudat, Kota Marudu, Pitas, Pulau Banggi, Bahagian Kudat |
| SabahMountainRegion          | Gunung Kinabalu               |
| SabahWestCoast               | Kota Kinabalu, Ranau, Kota Belud, Tuaran, Penampang, Papar, Putatan, Bahagian Pantai Barat |
| SabahInteriorHighlands       | Pensiangan, Keningau, Tambunan, Nabawan, Bahagian Pendalaman (Atas) |
| SabahInteriorLowlands        | Beaufort, Kuala Penyu, Sipitang, Tenom, Long Pa Sia, Membakut, Weston, Bahagian Pendalaman (Bawah) |
| SarawakNorthern              | Limbang, Lawas, Sundar, Trusan |
| SarawakNorthwest             | Miri, Niah, Bekenu, Sibuti, Marudi |
| SarawakCentralNorth          | Pandan, Belaga, Suai, Tatau, Sebauh, Bintulu |
| SarawakCentral               | Sibu, Mukah, Dalat, Song, Igan, Oya, Balingian, Kanowit, Kapit |
| SarawakCentralCoast          | Sarikei, Matu, Julau, Rajang, Daro, Bintangor, Belawai |
| SarawakSouthwestInland       | Lubok Antu, Sri Aman, Roban, Debak, Kabong, Lingga, Engkelili, Betong, Spaoh, Pusa, Saratok |
| SarawakSouthwest             | Serian, Simunjan, Samarahan, Sebuyau, Meludam |
| SarawakSouthern              | Kuching, Bau, Lundu, Sematan |
| SarawakSpecialZone           | Zon Khas (Kampung Patarikan) |
| TerengganuCentral            | Kuala Terengganu, Marang, Kuala Nerus |
| TerengganuNorthCoast         | Besut, Setiu                 |
| TerengganuInland             | Hulu Terengganu              |
| TerengganuSouthCoast         | Dungun, Kemaman             |

<!-- ### Selangor
SelangorCentral - Gombak, Petaling, Sepang, Hulu Langat, Hulu Selangor, S.Alam
SelangorNorthWest - Kuala Selangor, Sabak Bernam
SelangorSouthWest - Klang, Kuala Langat

### Wilayah Persekutuan
WPKualaLumpur - Kuala Lumpur, Putrajaya
WPLabuan - Labuan

### Johor
JohorIslandZone - Pulau Aur dan Pulau Pemanggil
JohorEastCoast - Johor Bahru, Kota Tinggi, Mersing
JohorCentral - Kluang, Pontian
JohorWestCoast - Batu Pahat, Muar, Segamat, Gemas Johor

### Kedah
KedahNorth - Kota Setar, Kubang Pasu, Pokok Sena (Daerah Kecil)
KedahCentral - Kuala Muda, Yan, Pendang
KedahNortheast - Padang Terap, Sik
KedahSoutheast - Baling
KedahSouthernBorder - Bandar Baharu, Kulim
KedahIslandZone - Langkawi
KedahMountainPeak - Puncak Gunung Jerai

### Kelantan
KelantanCentralNorth - Bachok, Kota Bharu, Machang, Pasir Mas, Pasir Puteh, Tanah Merah, Tumpat, Kuala Krai, Mukim Chiku
KelantanSouthernHighlands - Gua Musang (Daerah Galas Dan Bertam), Jeli

### Melaka
Melaka - Seluruh Negeri Melaka

### Negeri Sembilan
NegeriSembilanEast - Tampin, Jempol
NegeriSembilanCentral - Jelebu, Kuala Pilah, Port Dickson, Rembau, Seremban

### Pahang
PahangIslandZone - Pulau Tioman
PahangEastCoast - Kuantan, Pekan, Rompin, Muadzam Shah
PahangCentral - Jerantut, Temerloh, Maran, Bera, Chenor, Jengka
PahangWestern - Bentong, Lipis, Raub
PahangHighlandGateway - Genting Sempah, Janda Baik, Bukit Tinggi
PahangHighlandRegion - Cameron Highlands, Genting Higlands, Bukit Fraser

### Perlis
Perlis - Kangar, Padang Besar, Arau

### Pulau Pinang
Penang - Seluruh Negeri Pulau Pinang

### Perak
PerakSouthern - Tapah, Slim River, Tanjung Malim
PerakCentral - Kuala Kangsar, Sg. Siput (Daerah Kecil), Ipoh, Batu Gajah, Kampar
PerakNortheast - Lenggong, Pengkalan Hulu, Grik
PerakHighlands - Temengor, Belum
PerakWestCoast - Kg Gajah, Teluk Intan, Bagan Datuk, Seri Iskandar, Beruas, Parit, Lumut, Sitiawan, Pulau Pangkor
PerakNorthwest - Selama, Taiping, Bagan Serai, Parit Buntar
PerakLarutHighlands - Bukit Larut

### Sabah
SabahEastCoast - Bahagian Sandakan (Timur), Bukit Garam, Semawang, Temanggong, Tambisan, Bandar Sandakan, Sukau
SabahCentralEast - Beluran, Telupid, Pinangah, Terusan, Kuamut, Bahagian Sandakan (Barat)
SabahSoutheastCoast - Lahad Datu, Silabukan, Kunak, Sahabat, Semporna, Tungku, Bahagian Tawau (Timur)
SabahSouthwestCoast - Bandar Tawau, Balong, Merotai, Kalabakan, Bahagian Tawau (Barat)
SabahNorthernTip - Kudat, Kota Marudu, Pitas, Pulau Banggi, Bahagian Kudat
SabahMountainRegion - Gunung Kinabalu
SabahWestCoast - Kota Kinabalu, Ranau, Kota Belud, Tuaran, Penampang, Papar, Putatan, Bahagian Pantai Barat
SabahInteriorHighlands - Pensiangan, Keningau, Tambunan, Nabawan, Bahagian Pendalaman (Atas)
SabahInteriorLowlands - Beaufort, Kuala Penyu, Sipitang, Tenom, Long Pa Sia, Membakut, Weston, Bahagian Pendalaman (Bawah)

### Sarawak
SarawakNorthern - Limbang, Lawas, Sundar, Trusan
SarawakNorthwest - Miri, Niah, Bekenu, Sibuti, Marudi
SarawakCentralNorth - Pandan, Belaga, Suai, Tatau, Sebauh, Bintulu
SarawakCentral - Sibu, Mukah, Dalat, Song, Igan, Oya, Balingian, Kanowit, Kapit
SarawakCentralCoast - Sarikei, Matu, Julau, Rajang, Daro, Bintangor, Belawai
SarawakSouthwestInland - Lubok Antu, Sri Aman, Roban, Debak, Kabong, Lingga, Engkelili, Betong, Spaoh, Pusa, Saratok
SarawakSouthwest - Serian, Simunjan, Samarahan, Sebuyau, Meludam
SarawakSouthern - Kuching, Bau, Lundu, Sematan
SarawakSpecialZone - Zon Khas (Kampung Patarikan)

### Terengganu
TerengganuCentral - Kuala Terengganu, Marang, Kuala Nerus
TerengganuNorthCoast - Besut, Setiu
TerengganuInland - Hulu Terengganu
TerengganuSouthCoast - Dungun, Kemaman -->


## License

MIT License