import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client'

const MemberDetails = () => {
    const { id } = useParams();
    const [memberInfo, setMemberInfo] = useState({ id: null, name: "", batting_style: "None", bowling_style: "none", fielding_position: "none" })

    useEffect(() => {
        const fetchPlayer = async () => {
            const { data } = await supabase
                .from('Players')
                .select()
                .eq('id', id)
            setMemberInfo(data[0])
        }
        fetchPlayer()
    }, [id])

    return (
        <div className='content'>
            {memberInfo && <h1>Player: {memberInfo.name}</h1>}
            <h2>Stats:</h2>
            <p><b>Batting style: </b>{memberInfo.batting_style}</p>
            <p><b>Bowling style: </b>{memberInfo.bowling_style}</p>
            <p><b>Fielding position: </b>{memberInfo.fielding_position}</p>
        </div>
    )
}

export default MemberDetails;