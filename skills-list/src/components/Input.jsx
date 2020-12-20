import React, { useState } from "react";

const Input = (props) => {

    
    const {skillsList, setSkillsList} = props;
    // we need a new skill to put in the skillsList, remember getters and setters we need to grab the newSkill and put it in the skillsList
    const [newSkill, setNewSkill] = useState("")

    const addSkill = (e) => {
        e.preventDefault()
        // says hey make my skillsList a new skill using ... (which is like put what we already had in it ) and add the newSkill into it too
        setSkillsList([newSkill, ...skillsList])
    }

    return(
        <div className="container">
            <h2>What is your skill?</h2>
            {/* when form is submited run addSkills function */}
            <form onSubmit={addSkill}>
                <div className="form-group">
                    <label>Enter Skill: </label>
                    {/* this just show what were typing as were typing it */}
                    {newSkill}
                    {/* when we type (onChange) takes what we typed and sets the newSkill to whatever we typed */}
                    <input className="form-control" type="text" onChange={(e) => setNewSkill(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Add Skill</button>
            </form>
        </div>
        
    )
}

export default Input;
