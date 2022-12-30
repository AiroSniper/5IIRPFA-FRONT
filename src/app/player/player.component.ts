import { Component, OnInit } from '@angular/core';


import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlayerDTO } from 'dto/player.dto';
import { RoomDTO } from 'dto/room.dto';
import { TeamDTO } from 'dto/team.dto';
import { PlayerService } from './player.service';
@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

    cities = [
        {
            "id": "0",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Afourar"
        },
        {
            "id": "1",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Agadir"
        },
        {
            "id": "2",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Agdz"
        },
        {
            "id": "3",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Aghbala"
        },
        {
            "id": "4",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Agni Izimmer"
        },
        {
            "id": "5",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Agourai"
        },
        {
            "id": "6",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Ahfir"
        },
        {
            "id": "7",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Ain El Aouda"
        },
        {
            "id": "8",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Ain Taoujdate"
        },
        {
            "id": "9",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Ait Daoud"
        },
        {
            "id": "10",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Ajdir"
        },
        {
            "id": "11",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Akchour"
        },
        {
            "id": "12",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Akka"
        },
        {
            "id": "13",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Aklim"
        },
        {
            "id": "14",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Aknoul"
        },
        {
            "id": "15",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Al Aroui"
        },
        {
            "id": "16",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Al Hoceïma"
        },
        {
            "id": "17",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Alnif"
        },
        {
            "id": "18",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Amalou Ighriben"
        },
        {
            "id": "19",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Amizmiz"
        },
        {
            "id": "20",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Anzi"
        },
        {
            "id": "21",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Aoufous"
        },
        {
            "id": "22",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Aoulouz"
        },
        {
            "id": "23",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Aourir"
        },
        {
            "id": "24",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Arazane"
        },
        {
            "id": "25",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Arbaoua"
        },
        {
            "id": "26",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Arfoud"
        },
        {
            "id": "27",
            "region": {
                "id": "10",
                "name": "Guelmim-Oued Noun"
            },
            "name": "Assa"
        },
        {
            "id": "28",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Assahrij"
        },
        {
            "id": "29",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Assilah"
        },
        {
            "id": "30",
            "region": {
                "id": "12",
                "name": "Dakhla-Oued Ed Dahab"
            },
            "name": "Awsard"
        },
        {
            "id": "31",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Azemmour"
        },
        {
            "id": "32",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Azilal"
        },
        {
            "id": "33",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Azrou"
        },
        {
            "id": "34",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Aïn Bni Mathar"
        },
        {
            "id": "35",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Aïn Cheggag"
        },
        {
            "id": "36",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Aïn Dorij"
        },
        {
            "id": "37",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Aïn Erreggada"
        },
        {
            "id": "38",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Aïn Harrouda"
        },
        {
            "id": "39",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Aïn Jemaa"
        },
        {
            "id": "40",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Aïn Karma"
        },
        {
            "id": "41",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Aïn Leuh"
        },
        {
            "id": "42",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Aït Attab"
        },
        {
            "id": "43",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Aït Baha"
        },
        {
            "id": "44",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Aït Boubidmane"
        },
        {
            "id": "45",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Aït Hichem"
        },
        {
            "id": "46",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Aït Iaâza"
        },
        {
            "id": "47",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Aït Ishaq"
        },
        {
            "id": "48",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Aït Majden"
        },
        {
            "id": "49",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Aït Melloul"
        },
        {
            "id": "50",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Aït Ourir"
        },
        {
            "id": "51",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Aït Yalla"
        },
        {
            "id": "52",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Bab Berred"
        },
        {
            "id": "53",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Bab Taza"
        },
        {
            "id": "54",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Bejaâd"
        },
        {
            "id": "55",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Ben Ahmed"
        },
        {
            "id": "56",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Ben Guerir"
        },
        {
            "id": "57",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Ben Sergao"
        },
        {
            "id": "58",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Ben Taïeb"
        },
        {
            "id": "59",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Ben Yakhlef"
        },
        {
            "id": "60",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Beni Ayat"
        },
        {
            "id": "61",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Benslimane"
        },
        {
            "id": "62",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Berkane"
        },
        {
            "id": "63",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Berrechid"
        },
        {
            "id": "64",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Bhalil"
        },
        {
            "id": "65",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Bin elouidane"
        },
        {
            "id": "66",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Biougra"
        },
        {
            "id": "67",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Bir Jdid"
        },
        {
            "id": "68",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Bni Ansar"
        },
        {
            "id": "69",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Bni Bouayach"
        },
        {
            "id": "70",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Bni Chiker"
        },
        {
            "id": "71",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Bni Drar"
        },
        {
            "id": "72",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Bni Hadifa"
        },
        {
            "id": "73",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Bni Tadjite"
        },
        {
            "id": "74",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Bouanane"
        },
        {
            "id": "75",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Bouarfa"
        },
        {
            "id": "76",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Boudnib"
        },
        {
            "id": "77",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Boufakrane"
        },
        {
            "id": "78",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Bouguedra"
        },
        {
            "id": "79",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Bouhdila"
        },
        {
            "id": "80",
            "region": {
                "id": "10",
                "name": "Guelmim-Oued Noun"
            },
            "name": "Bouizakarne"
        },
        {
            "id": "81",
            "region": {
                "id": "11",
                "name": "Laâyoune-Sakia El Hamra"
            },
            "name": "Boujdour"
        },
        {
            "id": "82",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Boujniba"
        },
        {
            "id": "83",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Boulanouare"
        },
        {
            "id": "84",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Boulemane"
        },
        {
            "id": "85",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Boumalne-Dadès"
        },
        {
            "id": "86",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Boumia"
        },
        {
            "id": "87",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Bouskoura"
        },
        {
            "id": "88",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Bouznika"
        },
        {
            "id": "89",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Bradia"
        },
        {
            "id": "90",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Brikcha"
        },
        {
            "id": "91",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Bzou"
        },
        {
            "id": "92",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Béni Mellal"
        },
        {
            "id": "93",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Casablanca"
        },
        {
            "id": "94",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Chefchaouen"
        },
        {
            "id": "95",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Chichaoua"
        },
        {
            "id": "96",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Dar Bni Karrich"
        },
        {
            "id": "97",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Dar Chaoui"
        },
        {
            "id": "98",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Dar El Kebdani"
        },
        {
            "id": "99",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Dar Gueddari"
        },
        {
            "id": "100",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Dar Oulad Zidouh"
        },
        {
            "id": "101",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Dcheira El Jihadia"
        },
        {
            "id": "102",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Debdou"
        },
        {
            "id": "103",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Demnate"
        },
        {
            "id": "104",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Deroua"
        },
        {
            "id": "105",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Douar Kannine"
        },
        {
            "id": "106",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Dra'a"
        },
        {
            "id": "107",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Drargua"
        },
        {
            "id": "108",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Driouch"
        },
        {
            "id": "109",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Echemmaia"
        },
        {
            "id": "110",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "El Aïoun Sidi Mellouk"
        },
        {
            "id": "111",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "El Borouj"
        },
        {
            "id": "112",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "El Gara"
        },
        {
            "id": "113",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "El Guerdane"
        },
        {
            "id": "114",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "El Hajeb"
        },
        {
            "id": "115",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "El Hanchane"
        },
        {
            "id": "116",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "El Jadida"
        },
        {
            "id": "117",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "El Kelaâ des Sraghna"
        },
        {
            "id": "118",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "El Ksiba"
        },
        {
            "id": "119",
            "region": {
                "id": "11",
                "name": "Laâyoune-Sakia El Hamra"
            },
            "name": "El Marsa"
        },
        {
            "id": "120",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "El Menzel"
        },
        {
            "id": "121",
            "region": {
                "id": "10",
                "name": "Guelmim-Oued Noun"
            },
            "name": "El Ouatia"
        },
        {
            "id": "122",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Elkbab"
        },
        {
            "id": "123",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Er-Rich"
        },
        {
            "id": "124",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Errachidia"
        },
        {
            "id": "125",
            "region": {
                "id": "11",
                "name": "Laâyoune-Sakia El Hamra"
            },
            "name": "Es-Semara"
        },
        {
            "id": "126",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Essaouira"
        },
        {
            "id": "127",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Fam El Hisn"
        },
        {
            "id": "128",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Farkhana"
        },
        {
            "id": "129",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Figuig"
        },
        {
            "id": "130",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Fnideq"
        },
        {
            "id": "131",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Foum Jamaa"
        },
        {
            "id": "132",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Foum Zguid"
        },
        {
            "id": "133",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Fquih Ben Salah"
        },
        {
            "id": "134",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Fraïta"
        },
        {
            "id": "135",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Fès"
        },
        {
            "id": "136",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Gardmit"
        },
        {
            "id": "137",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Ghafsai"
        },
        {
            "id": "138",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Ghmate"
        },
        {
            "id": "139",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Goulmima"
        },
        {
            "id": "140",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Gourrama"
        },
        {
            "id": "141",
            "region": {
                "id": "10",
                "name": "Guelmim-Oued Noun"
            },
            "name": "Guelmim"
        },
        {
            "id": "142",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Guercif"
        },
        {
            "id": "143",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Gueznaia"
        },
        {
            "id": "144",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Guigou"
        },
        {
            "id": "145",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Guisser"
        },
        {
            "id": "146",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Had Bouhssoussen"
        },
        {
            "id": "147",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Had Kourt"
        },
        {
            "id": "148",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Haj Kaddour"
        },
        {
            "id": "149",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Harhoura"
        },
        {
            "id": "150",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Harte Lyamine"
        },
        {
            "id": "151",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Hattane"
        },
        {
            "id": "152",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Hrara"
        },
        {
            "id": "153",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Ida Ougnidif"
        },
        {
            "id": "154",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Ifrane"
        },
        {
            "id": "155",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Ifri"
        },
        {
            "id": "156",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Igdamen"
        },
        {
            "id": "157",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Ighil n'Oumgoun"
        },
        {
            "id": "158",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Ighoud"
        },
        {
            "id": "159",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Ighounane"
        },
        {
            "id": "160",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Ihddaden"
        },
        {
            "id": "161",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Imassine"
        },
        {
            "id": "162",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Imintanoute"
        },
        {
            "id": "163",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Imouzzer Kandar"
        },
        {
            "id": "164",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Imouzzer Marmoucha"
        },
        {
            "id": "165",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Imzouren"
        },
        {
            "id": "166",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Inahnahen"
        },
        {
            "id": "167",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Inezgane"
        },
        {
            "id": "168",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Irherm"
        },
        {
            "id": "169",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Issaguen (Ketama)"
        },
        {
            "id": "170",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Itzer"
        },
        {
            "id": "171",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Jamâat Shaim"
        },
        {
            "id": "172",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Jaâdar"
        },
        {
            "id": "173",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Jebha"
        },
        {
            "id": "174",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Jerada"
        },
        {
            "id": "175",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Jorf"
        },
        {
            "id": "176",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Jorf El Melha"
        },
        {
            "id": "177",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Jorf Lasfar"
        },
        {
            "id": "178",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Karia"
        },
        {
            "id": "179",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Karia (El Jadida)"
        },
        {
            "id": "180",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Karia Ba Mohamed"
        },
        {
            "id": "181",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Kariat Arekmane"
        },
        {
            "id": "182",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Kasba Tadla"
        },
        {
            "id": "183",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Kassita"
        },
        {
            "id": "184",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Kattara"
        },
        {
            "id": "185",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Kehf Nsour"
        },
        {
            "id": "186",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Kelaat-M'Gouna"
        },
        {
            "id": "187",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Kerouna"
        },
        {
            "id": "188",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Kerrouchen"
        },
        {
            "id": "189",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Khemis Zemamra"
        },
        {
            "id": "190",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Khenichet"
        },
        {
            "id": "191",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Khouribga"
        },
        {
            "id": "192",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Khémis Sahel"
        },
        {
            "id": "193",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Khémisset"
        },
        {
            "id": "194",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Khénifra"
        },
        {
            "id": "195",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Ksar El Kébir"
        },
        {
            "id": "196",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Kénitra"
        },
        {
            "id": "197",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Laaounate"
        },
        {
            "id": "198",
            "region": {
                "id": "11",
                "name": "Laâyoune-Sakia El Hamra"
            },
            "name": "Laayoune"
        },
        {
            "id": "199",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Lakhsas"
        },
        {
            "id": "200",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Lakhsass"
        },
        {
            "id": "201",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Lalla Mimouna"
        },
        {
            "id": "202",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Lalla Takerkoust"
        },
        {
            "id": "203",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Larache"
        },
        {
            "id": "204",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Laâtamna"
        },
        {
            "id": "205",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Loudaya"
        },
        {
            "id": "206",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Loulad"
        },
        {
            "id": "207",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Lqliâa"
        },
        {
            "id": "208",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Lâattaouia"
        },
        {
            "id": "209",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "M'diq"
        },
        {
            "id": "210",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "M'haya"
        },
        {
            "id": "211",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "M'rirt"
        },
        {
            "id": "212",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "M'semrir"
        },
        {
            "id": "213",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Madagh"
        },
        {
            "id": "214",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Marrakech"
        },
        {
            "id": "215",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Martil"
        },
        {
            "id": "216",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Massa (Maroc)"
        },
        {
            "id": "217",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Mechra Bel Ksiri"
        },
        {
            "id": "218",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Megousse"
        },
        {
            "id": "219",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Mehdia"
        },
        {
            "id": "220",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Meknès"
        },
        {
            "id": "221",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Midar"
        },
        {
            "id": "222",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Midelt"
        },
        {
            "id": "223",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Missour"
        },
        {
            "id": "224",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Mohammadia"
        },
        {
            "id": "225",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Moqrisset"
        },
        {
            "id": "226",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Moulay Abdallah"
        },
        {
            "id": "227",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Moulay Ali Cherif"
        },
        {
            "id": "228",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Moulay Bouazza"
        },
        {
            "id": "229",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Moulay Bousselham"
        },
        {
            "id": "230",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Moulay Brahim"
        },
        {
            "id": "231",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Moulay Idriss Zerhoun"
        },
        {
            "id": "232",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Moulay Yaâcoub"
        },
        {
            "id": "233",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Moussaoua"
        },
        {
            "id": "234",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "MyAliCherif"
        },
        {
            "id": "235",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Mzouda"
        },
        {
            "id": "236",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Médiouna"
        },
        {
            "id": "237",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "N'Zalat Bni Amar"
        },
        {
            "id": "238",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Nador"
        },
        {
            "id": "239",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Naima"
        },
        {
            "id": "240",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Oualidia"
        },
        {
            "id": "241",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Ouaouizeght"
        },
        {
            "id": "242",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Ouaoumana"
        },
        {
            "id": "243",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Ouarzazate"
        },
        {
            "id": "244",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Ouazzane"
        },
        {
            "id": "245",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Oued Amlil"
        },
        {
            "id": "246",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Oued Heimer"
        },
        {
            "id": "247",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Oued Ifrane"
        },
        {
            "id": "248",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Oued Laou"
        },
        {
            "id": "249",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Oued Rmel"
        },
        {
            "id": "250",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Oued Zem"
        },
        {
            "id": "251",
            "region": {
                "id": "12",
                "name": "Dakhla-Oued Ed Dahab"
            },
            "name": "Oued-Eddahab"
        },
        {
            "id": "252",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Oujda"
        },
        {
            "id": "253",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Oulad Abbou"
        },
        {
            "id": "254",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Oulad Amrane"
        },
        {
            "id": "255",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Oulad Ayad"
        },
        {
            "id": "256",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Oulad Berhil"
        },
        {
            "id": "257",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Oulad Frej"
        },
        {
            "id": "258",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Oulad Ghadbane"
        },
        {
            "id": "259",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Oulad H'Riz Sahel"
        },
        {
            "id": "260",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Oulad M'Barek"
        },
        {
            "id": "261",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Oulad M'rah"
        },
        {
            "id": "262",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Oulad Saïd"
        },
        {
            "id": "263",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Oulad Sidi Ben Daoud"
        },
        {
            "id": "264",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Oulad Teïma"
        },
        {
            "id": "265",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Oulad Yaich"
        },
        {
            "id": "266",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Oulad Zbair"
        },
        {
            "id": "267",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Ouled Tayeb"
        },
        {
            "id": "268",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Oulmès"
        },
        {
            "id": "269",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Ounagha"
        },
        {
            "id": "270",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Outat El Haj"
        },
        {
            "id": "271",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Point Cires"
        },
        {
            "id": "272",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Rabat"
        },
        {
            "id": "273",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Ras El Aïn"
        },
        {
            "id": "274",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Ras El Ma"
        },
        {
            "id": "275",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Ribate El Kheir"
        },
        {
            "id": "276",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Rissani"
        },
        {
            "id": "277",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Rommani"
        },
        {
            "id": "278",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Sabaa Aiyoun"
        },
        {
            "id": "279",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Safi"
        },
        {
            "id": "280",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Salé"
        },
        {
            "id": "281",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Sarghine"
        },
        {
            "id": "282",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Saïdia"
        },
        {
            "id": "283",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Sebt El Maârif"
        },
        {
            "id": "284",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Sebt Gzoula"
        },
        {
            "id": "285",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Sebt Jahjouh"
        },
        {
            "id": "286",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Selouane"
        },
        {
            "id": "287",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Settat"
        },
        {
            "id": "288",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Sid L'Mokhtar"
        },
        {
            "id": "289",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Sid Zouin"
        },
        {
            "id": "290",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Sidi Abdallah Ghiat"
        },
        {
            "id": "291",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Sidi Addi"
        },
        {
            "id": "292",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Sidi Ahmed"
        },
        {
            "id": "293",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Sidi Ali Ban Hamdouche"
        },
        {
            "id": "294",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Sidi Allal El Bahraoui"
        },
        {
            "id": "295",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Sidi Allal Tazi"
        },
        {
            "id": "296",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Sidi Bennour"
        },
        {
            "id": "297",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Sidi Bou Othmane"
        },
        {
            "id": "298",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Sidi Boubker"
        },
        {
            "id": "299",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Sidi Bouknadel"
        },
        {
            "id": "300",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Sidi Bouzid"
        },
        {
            "id": "301",
            "region": {
                "id": "10",
                "name": "Guelmim-Oued Noun"
            },
            "name": "Sidi Ifni"
        },
        {
            "id": "302",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Sidi Jaber"
        },
        {
            "id": "303",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Sidi Kacem"
        },
        {
            "id": "304",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Sidi Lyamani"
        },
        {
            "id": "305",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Sidi Mohamed ben Abdallah el-Raisuni"
        },
        {
            "id": "306",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Sidi Rahhal"
        },
        {
            "id": "307",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Sidi Rahhal Chataï"
        },
        {
            "id": "308",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Sidi Slimane"
        },
        {
            "id": "309",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Sidi Slimane Echcharaa"
        },
        {
            "id": "310",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Sidi Smaïl"
        },
        {
            "id": "311",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Sidi Taibi"
        },
        {
            "id": "312",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Sidi Yahya El Gharb"
        },
        {
            "id": "313",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Skhinate"
        },
        {
            "id": "314",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Skhirate"
        },
        {
            "id": "315",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Skhour Rehamna"
        },
        {
            "id": "316",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Skoura"
        },
        {
            "id": "317",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Smimou"
        },
        {
            "id": "318",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Soualem"
        },
        {
            "id": "319",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Souk El Arbaa"
        },
        {
            "id": "320",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Souk Sebt Oulad Nemma"
        },
        {
            "id": "321",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Stehat"
        },
        {
            "id": "322",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Séfrou"
        },
        {
            "id": "323",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Tabounte"
        },
        {
            "id": "324",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Tafajight"
        },
        {
            "id": "325",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Tafetachte"
        },
        {
            "id": "326",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Tafraout"
        },
        {
            "id": "327",
            "region": {
                "id": "10",
                "name": "Guelmim-Oued Noun"
            },
            "name": "Taghjijt"
        },
        {
            "id": "328",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Taghzout"
        },
        {
            "id": "329",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Tagzen"
        },
        {
            "id": "330",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Tahannaout"
        },
        {
            "id": "331",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Tahla"
        },
        {
            "id": "332",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Tala Tazegwaght"
        },
        {
            "id": "333",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Taliouine"
        },
        {
            "id": "334",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Talmest"
        },
        {
            "id": "335",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Talsint"
        },
        {
            "id": "336",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Tamallalt"
        },
        {
            "id": "337",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Tamanar"
        },
        {
            "id": "338",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Tamansourt"
        },
        {
            "id": "339",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Tamassint"
        },
        {
            "id": "340",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Tamegroute"
        },
        {
            "id": "341",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Tameslouht"
        },
        {
            "id": "342",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Tamesna"
        },
        {
            "id": "343",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Tamraght"
        },
        {
            "id": "344",
            "region": {
                "id": "10",
                "name": "Guelmim-Oued Noun"
            },
            "name": "Tan-Tan"
        },
        {
            "id": "345",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Tanalt"
        },
        {
            "id": "346",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Tanger"
        },
        {
            "id": "347",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Tanoumrite Nkob Zagora"
        },
        {
            "id": "348",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Taounate"
        },
        {
            "id": "349",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Taourirt"
        },
        {
            "id": "350",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Taourirt ait zaghar"
        },
        {
            "id": "351",
            "region": {
                "id": "11",
                "name": "Laâyoune-Sakia El Hamra"
            },
            "name": "Tarfaya"
        },
        {
            "id": "352",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Targuist"
        },
        {
            "id": "353",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Taroudannt"
        },
        {
            "id": "354",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Tata"
        },
        {
            "id": "355",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Taza"
        },
        {
            "id": "356",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Taïnaste"
        },
        {
            "id": "357",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Temsia"
        },
        {
            "id": "358",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Tendrara"
        },
        {
            "id": "359",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Thar Es-Souk"
        },
        {
            "id": "360",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Tichoute"
        },
        {
            "id": "361",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Tiddas"
        },
        {
            "id": "362",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Tiflet"
        },
        {
            "id": "363",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Tifnit"
        },
        {
            "id": "364",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Tighassaline"
        },
        {
            "id": "365",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Tighza"
        },
        {
            "id": "366",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Timahdite"
        },
        {
            "id": "367",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Tinejdad"
        },
        {
            "id": "368",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Tisgdal"
        },
        {
            "id": "369",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Tissa"
        },
        {
            "id": "370",
            "region": {
                "id": "6",
                "name": "Casablanca-Settat"
            },
            "name": "Tit Mellil"
        },
        {
            "id": "371",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Tizguite"
        },
        {
            "id": "372",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Tizi Ouasli"
        },
        {
            "id": "373",
            "region": {
                "id": "9",
                "name": "Souss-Massa"
            },
            "name": "Tiznit"
        },
        {
            "id": "374",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Tiztoutine"
        },
        {
            "id": "375",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Touarga"
        },
        {
            "id": "376",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Touima"
        },
        {
            "id": "377",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Touissit"
        },
        {
            "id": "378",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Toulal"
        },
        {
            "id": "379",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Toundoute"
        },
        {
            "id": "380",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Tounfite"
        },
        {
            "id": "381",
            "region": {
                "id": "4",
                "name": "Rabat-Salé-Kénitra"
            },
            "name": "Témara"
        },
        {
            "id": "382",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Tétouan"
        },
        {
            "id": "383",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Youssoufia"
        },
        {
            "id": "384",
            "region": {
                "id": "10",
                "name": "Guelmim-Oued Noun"
            },
            "name": "Zag"
        },
        {
            "id": "385",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Zagora"
        },
        {
            "id": "386",
            "region": {
                "id": "3",
                "name": "Fès-Meknès"
            },
            "name": "Zaouia d'Ifrane"
        },
        {
            "id": "387",
            "region": {
                "id": "5",
                "name": "Béni Mellal-Khénifra"
            },
            "name": "Zaouïat Cheikh"
        },
        {
            "id": "388",
            "region": {
                "id": "8",
                "name": "Drâa-Tafilalet"
            },
            "name": "Zaïda"
        },
        {
            "id": "389",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Zaïo"
        },
        {
            "id": "390",
            "region": {
                "id": "2",
                "name": "l'Oriental"
            },
            "name": "Zeghanghane"
        },
        {
            "id": "391",
            "region": {
                "id": "7",
                "name": "Marrakech-Safi"
            },
            "name": "Zeubelemok"
        },
        {
            "id": "392",
            "region": {
                "id": "1",
                "name": "Tanger-Tétouan-Al Hoceïma"
            },
            "name": "Zinat"
        }
    ]

    public contentHeader: object
    selectedRoom: RoomDTO | any
    currentPlayer: PlayerDTO | any
    player_id: string = ''
    teams: Array<TeamDTO> = []
    players: PlayerDTO[] = []
    rooms: RoomDTO[] = []
    constructor(private readonly modalService: NgbModal, private readonly playerService: PlayerService, private readonly router: Router) { }

    // modal Basic
    modalOpen(modalBasic) {
        this.modalService.open(modalBasic);
    }


    roomForm = new FormGroup({
        title: new FormControl('',Validators.required),
        desc: new FormControl(''),
        type: new FormControl('5'),
        city: new FormControl('Marrakech'),
        zone: new FormControl('',Validators.required),
        date: new FormControl('',Validators.required),
        time: new FormControl('',Validators.required),
    });


    joinForm = new FormGroup({
        team: new FormControl('0'),
    });

    allPlayers() {
        this.playerService.allPlyers().subscribe((pls: any) => {
            this.players = pls
        })
    }
    allRooms() {
        this.playerService.allRooms().subscribe((rms: any) => {
            this.rooms = rms
            console.log(this.rooms)
        })
    }



    onSelected(value: string): void {
        this.player_id = value;

        console.log(this.player_id)
    }

    login() {
        this.router.navigateByUrl(`/login`);
    }
    logout() {
        localStorage.removeItem("player")
        window.location.reload()
    }

    onSubmit() {
        console.warn(this.roomForm.value);

        let teams = [{
            label: "A",
            players: [],
            isWinner: false,
            result: 0,
            enemyResult: 0,
        },
            {
                label: "B",
                players: [],
                isWinner: false,
                result: 0,
                enemyResult: 0,
            }]

        let room = {
            teams: teams,
            owner: this.currentPlayer._id,
            title: this.roomForm.value.title,
            description: this.roomForm.value.desc,
            type: this.roomForm.value.type,
            city: this.roomForm.value.city,
            zone: this.roomForm.value.zone,
            date: this.roomForm.value.date,
            time: this.roomForm.value.time,
        }

        this.playerService.addRoom(room).subscribe(result => {

                this.allRooms()
            },
            err => {
                console.log(err)
            })




    }

    join(room: any) {
        this.selectedRoom = room
    }
    exit(room: any) {
        if (this.currentPlayer) {
            room.teams[0].players.forEach((element: any, index: number) => {
                if (element._id === this.currentPlayer._id) room.teams[0].players.splice(index, 1)
            });
            room.teams[1].players.forEach((element: any, index: number) => {
                if (element._id === this.currentPlayer._id) room.teams[1].players.splice(index, 1)
            });
            this.playerService.upRoom(room).subscribe(res => {
                this.allRooms()
            })
        }

    }
    onJoin() {
        let index = parseInt(this.joinForm.value.team || '')
        this.selectedRoom.teams[index].players.push(this.currentPlayer)
        console.log(this.selectedRoom)
        this.playerService.upRoom(this.selectedRoom).subscribe(res => {
            this.allRooms()
        })
    }

    verify(room: any) {
        if (this.currentPlayer) {
            const found1 = room.teams[0].players.find((element: any) => {
                return element._id === this.currentPlayer._id
            });
            const found2 = room.teams[1].players.find((element: any) => {
                return element._id === this.currentPlayer._id
            });

            return ((found1 === undefined) && (found2 === undefined))
        }
        return true

    }

    ngOnInit(): void {

        this.contentHeader = {
            headerTitle: 'Player Space',
            actionButton: true,
            breadcrumb: {
                type: '',
                links: [
                    {
                        name: 'Home',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Player Space',
                        isLink: false
                    }
                ]
            }
        }
        console.log(this.teams)
        if (localStorage.getItem('player'))
            this.currentPlayer = JSON.parse(localStorage.getItem('player') || '{}');
        console.log(this.currentPlayer)
        this.allPlayers()
        this.allRooms()
    }
   

}
