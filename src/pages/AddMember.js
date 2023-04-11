import React, { useState } from 'react';
import './AddMember.css'
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client'
import { battingStyleOptions, bowlingStyleOptions, fieldingPositionOptions } from '../data/dropdownOptions';

const AddMember = () => {
    let navigate = useNavigate();
    const [memberInfo, setMemberInfo] = useState({ name: "", battingStyle: "None", bowlingStyle: "none", fieldingPosition: "none" })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMemberInfo((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const addMember = async (event) => {
        event.preventDefault();
        await supabase
            .from('Players')
            .insert({ name: memberInfo.name, batting_style: memberInfo.battingStyle, bowling_style: memberInfo.bowlingStyle, fielding_position: memberInfo.fieldingPosition })
            .select();
        setMemberInfo({ name: "", battingStyle: "", bowlingStyle: "", fieldingPosition: "" })
        navigate("/team");
    }

    return (
        <div className='content'>
            <h1>Add Member</h1>
            <form>
                <label htmlFor="name">Name</label><br />
                <input type="text" id="name" name="name" value={memberInfo.name} onChange={handleChange} /><br />
                <br />

                <label htmlFor="batting-style">Batting Style</label><br />
                <select value={memberInfo.battingStyle} name="battingStyle" onChange={handleChange}>
                    <option>Select</option>
                    {battingStyleOptions.map((style) => {
                        return <option value={style}>{style}</option>
                    })}
                </select><br />
                <br />

                <label htmlFor="bowling-style">Bowling Style</label><br />
                <select value={memberInfo.bowlingStyle} name="bowlingStyle" onChange={handleChange}>
                    <option>Select</option>
                    {bowlingStyleOptions.map((style) => {
                        return <option value={style}>{style}</option>
                    })}
                </select><br />
                <br />

                <label htmlFor="fielding-position">Fielding Position</label><br />
                <select value={memberInfo.fieldingPosition} name="fieldingPosition" onChange={handleChange}>
                    <option>Select</option>
                    {fieldingPositionOptions.map((style) => {
                        return <option value={style}>{style}</option>
                    })}
                </select><br />
                <br />

                <input type="submit" value="Add" onClick={addMember} />
            </form >
        </div>
    )
}

export default AddMember