import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    // if (true){
    //     throw new Error('nooooooo');
    // }
    return (
        <>
            {robots.map((user, i) => {
                return (
                    // <Card key={i} id={user.id} name={user.name} email={user.email}/>)})}
                    <Card
                        key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                    />
                )
            })}
        </>
    );
}

export default CardList;
