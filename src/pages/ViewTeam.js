import React, { useEffect, useState } from 'react';
import { supabase } from '../client'
import Card from '../components/Card';
import './ViewTeam.css'
import { useNavigate } from "react-router-dom";

const ViewTeam = () => {
    let navigate = useNavigate();

    const [memberInfo, setMemberInfo] = useState([])

    useEffect(() => {
        const fetchPlayers = async () => {
            const { data } = await supabase
                .from('Players')
                .select();
            setMemberInfo(data)
        }
        fetchPlayers();
    }, []);

    const onAddMemberClick = () => {
        navigate(`/new`);
    }

    return (
        <div className='content'>
            <h1>Your team!</h1>
            {
                memberInfo && memberInfo.length > 0 ?
                    <ul className="players">
                        {memberInfo.map((member) =>
                            <Card key={member.id} id={member.id} name={member.name} battingStyle={member.batting_style} bowlingStyle={member.bowling_style} fieldingPosition={member.fielding_position} />
                        )}</ul> : <div className='default-content'>
                        <h2>{`You haven't added a player yet 😞`}</h2>
                        <input type="submit" value="Add one here" onClick={onAddMemberClick} />
                    </div>
            }
        </div>
    )
}

export default ViewTeam;