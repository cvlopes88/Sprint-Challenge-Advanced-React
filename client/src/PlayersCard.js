import React from 'react';
import { Statistic, Card } from 'semantic-ui-react';

function PlayersCard(props) {
   console.log(props)
    return (
        <div>
            <div data-testid='mapin-function'>
             {props.players.map(player => (
           <div className='playerCards' key={player.id}>

       

        <Statistic>
            
        <Statistic.Value>{player.name}</Statistic.Value>
        <Statistic.Value>{player.country}</Statistic.Value>
        <Statistic.Value>{player.searches}</Statistic.Value>
        <Statistic.Label>Searches</Statistic.Label>
        
       </Statistic>
     
    </div>
         ))}   
        </div>
            
        </div>
    )
}

export default PlayersCard;