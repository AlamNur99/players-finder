class PlayerItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    set player(player) {
        this._player = player;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                :host {
                    display: block;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                }
                
                .fan-art-player {
                    width: 100%;
                    max-height: 450px;
                    object-fit: cover;
                    object-position: center;
                }
                
                .player-info {
                    padding: 24px;
                }
                
                .player-info > h2 {
                    font-weight: bold;
                }
                
                .player-info > p {
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; /* number of lines to show */
                }

                .flex-row {
                    display: flex;
                    flex-direction: row;
                    flex-grow: 1;
                }

                .list-info {
                    flex-basis: 50%;
                }

                .info {
                    font-size: 14px;
                }

            </style>
            <img class="fan-art-player" src="${this._player.strFanart1 ? this._player.strFanart1 : this._player.strThumb}" alt="Fan Art">
            <div class="player-info">
                <h2>${this._player.strPlayer}</h2>
                <hr>
                <div class="flex-row">
                    <div class="list-info">
                        <div class="info">Sport: ${this._player.strSport}</div>
                        <div class="info">Team: ${this._player.strTeam}</div>
                    </div>
                    <div class="list-info">
                        <div class="info">Posisition: ${this._player.strPosition}</div>
                        <div class="info">Side: ${this._player.strSide}</div>
                    </div>
                </div>
                <div class="flex-row">
                    <div class="list-info">
                        <div class="info">Height: ${this._player.strHeight}</div>
                        <div class="info">Weight: ${this._player.strWeight}</div>
                    </div>
                    <div class="list-info">
                        <div class="info">Born: ${this._player.dateBorn}</div>
                        <div class="info">Nationality: ${this._player.strNationality}</div>
                    </div>
                </div>
                <hr>
                <p>${this._player.strDescriptionEN}</p>
            </div>`;
    }
}

customElements.define("player-item", PlayerItem);