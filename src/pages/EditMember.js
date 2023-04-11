import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client'
import { battingStyleOptions, bowlingStyleOptions, fieldingPositionOptions } from '../data/dropdownOptions';
import './EditMember.css'

const EditMember = () => {
    const { id } = useParams();
    let navigate = useNavigate();
    const [memberInfo, setMemberInfo] = useState({ name: "", battingStyle: "None", bowlingStyle: "none", fieldingPosition: "none" })

    useEffect(() => {
        const fetchPlayer = async () => {
            const { data } = await supabase
                .from('Players')
                .select()
                .eq('id', id)
            setMemberInfo((prev) => {
                return {
                    ...prev,
                    name: data[0].name,
                    battingStyle: data[0].batting_style,
                    bowlingStyle: data[0].bowling_style,
                    fieldingPosition: data[0].fielding_position,
                }
            })
        }
        fetchPlayer()
    }, [id])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMemberInfo((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const handleUpdate = async () => {
        navigate(`/team`);
        await supabase
            .from('Players')
            .update({ name: memberInfo.name, batting_style: memberInfo.battingStyle, bowling_style: memberInfo.bowlingStyle, fielding_position: memberInfo.fieldingPosition })
            .eq('id', id)
    }


    const handleDelete = async (event) => {
        event.preventDefault();
        await supabase
            .from('Players')
            .delete()
            .eq('id', id)
        navigate("/team");
    }

    return (
        <div className='content'>
            <h1 >Update your player</h1>
            <form>
                <label htmlFor="name">Name</label><br />
                <input type="text" id="name" name="name" value={memberInfo.name} onChange={handleChange} /><br />
                <br />

                <label htmlFor="batting-style">Batting Style</label><br />
                <select value={memberInfo.battingStyle} name="battingStyle" onChange={handleChange}>
                    {battingStyleOptions.map((style) => {
                        return <option value={style}>{style}</option>
                    })}
                </select><br />
                <br />

                <label htmlFor="bowling-style">Bowling Style</label><br />
                <select value={memberInfo.bowlingStyle} name="bowlingStyle" onChange={handleChange}>
                    {bowlingStyleOptions.map((style) => {
                        return <option value={style}>{style}</option>
                    })}
                </select><br />
                <br />

                <label htmlFor="fielding-position">Fielding Position</label><br />
                <select value={memberInfo.fieldingPosition} name="fieldingPosition" onChange={handleChange}>
                    {fieldingPositionOptions.map((style) => {
                        return <option value={style}>{style}</option>
                    })}
                </select><br />
                <br />

                <div className='bottom-buttons'>
                    <input type="submit" value="Update player" onClick={handleUpdate} />
                    <input type="submit" value="Delete player" onClick={handleDelete} />
                </div>
            </form >
        </div>
    )
}

export default EditMember