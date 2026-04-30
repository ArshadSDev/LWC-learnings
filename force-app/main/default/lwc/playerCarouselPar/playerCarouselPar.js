import { LightningElement } from 'lwc';
import playerImage from '@salesforce/resourceUrl/playerImage';
import brewis from '@salesforce/resourceUrl/brewis';
import sanjuSamson from '@salesforce/resourceUrl/sanjuSamson';
import hardikPandya from '@salesforce/resourceUrl/hardikPandya';
import rohitSharma from '@salesforce/resourceUrl/rohitSharma';
import tilakVarma from '@salesforce/resourceUrl/tilakVarma';
import Description from '@salesforce/schema/Account.Description';

export default class PlayerCarouselPar extends LightningElement {

    playerDetails = [
        {
            id: 1,
            name : 'Dhoni',
            team : 'CSK',
            image : playerImage,
            Description : 'MS Dhoni is a former Indian cricketer and captain.'
        },  
    {
            id: 2,
            name: 'sanju samson',
            team: 'CSK',
            image: sanjuSamson,
            Description: 'Sanju Samson is an Indian cricketer and wicket-keeper.'
        },
        {
            id: 3,
            name: 'brevis',
            team: 'CSK',
            image: brewis,
            Description: 'Brewis is an Indian cricketer.'
        },
        {
            id: 4,
            name: 'Rohit Sharma',
            team: 'MI',
            image: rohitSharma,
            Description: 'Rohit Sharma is an Indian cricketer and captain.'
        },
        {
            id: 5,
            name: 'hardik pandya',
            team: 'MI',
            image: hardikPandya,
            Description: 'Hardik Pandya is an Indian cricketer.'
        },
        {
            id: 6,
            name: 'Tilak',
            team: 'MI',
            image: tilakVarma,
            Description: 'Tilak Varma is an Indian cricketer.'
        }
       
    ];
}