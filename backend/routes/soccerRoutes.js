import { 
    addNewPlayer, 
    getPlayers,
    getPlayersWithID,
    UpdatePlayer,
    deletePlayer
} from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
    // GET endpoint
    .get(getPlayers)
    // POST endpoint
        .post(addNewPlayer);

    app.route('/player/:PlayerId')
        // get specific player
        .get(getPlayersWithID)

        // update specific player
        .put(UpdatePlayer)

        // delete specific player
        .delete(deletePlayer)
}

export default routes;