import { LightningElement,api } from 'lwc';

export default class PlayerCarouselChild extends LightningElement {
    

    _playerDetails;
    @api
    get playerDetailsChild() {
        return this._playerDetails;
    }
    set playerDetailsChild(value) {
         this._playerDetails = value.map(player => ({...player,name: player.name.toUpperCase()}));
    }

    get teamCheck() {
        return this.playerDetailsChild.team === 'CSK';
    }
}