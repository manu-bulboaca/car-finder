import {Injectable} from "@angular/core";

@Injectable()
export class LoaderService {
    constructor() {}

    retrieveCarMakers(): Array<{name: string, abbreviation: string}> {
        return [
            {name: 'BMW', abbreviation: 'BMW'},
            {name: 'Mercedes', abbreviation: 'Merc'},
            {name: 'Volkswagen', abbreviation: 'VW'},
            {name: 'Audi', abbreviation: 'AUDI'},
            {name: 'Opel', abbreviation: 'Opel'},
        ];
    }
    retrieveEngines(): Array<{name: string, abbreviation: string}> {
        return [
            {name: 'Diesel', abbreviation: 'D'},
            {name: 'Petrol', abbreviation: 'P'},
            {name: 'Hybrid', abbreviation: 'H'},
            {name: 'Electric', abbreviation: 'E'},
        ];
    }

    retrieveColors(): string[] {
        return ['Red', 'Black', 'Blue', 'White', 'Brown', 'Orange', 'Green'];
    }

    fetchResults(): Array<{ title: string; imageSource: string; cols: number, rows: number}> {
        return [
            { title: 'BMW 1', cols: 2, rows: 1, imageSource: 'https://www.topgear.com/sites/default/files/2022/03/P90366835_highRes_the-bmw-118i-m-sport.jpg' },
            { title: 'BMW 2', cols: 1, rows: 1, imageSource: 'https://mediapool.bmwgroup.com/cache/P9/201910/P90370495/P90370495-the-all-new-bmw-2-series-gran-coupe-bmw-m235i-xdrive-snapper-rocks-blue-metallic-rim-19-styling-552--2250px.jpg' },
            { title: 'BMW 3', cols: 1, rows: 1, imageSource: 'https://cdn.motor1.com/images/mgl/Q8VO3/s1/bmw-3er-konkurrenten.jpg' },
            { title: 'BMW 4', cols: 1, rows: 1, imageSource: 'https://i.auto-bild.de/mdb/extra_large/20/2-041.jpg' },
            { title: 'BMW 5', cols: 1, rows: 1, imageSource: 'https://hips.hearstapps.com/hmg-prod/images/2021-bmw-540i-xdrive-370-edit-1608066218.jpg?crop=0.569xw:0.638xh;0.103xw,0.357xh&resize=640:*' }
        ];
    }
}
