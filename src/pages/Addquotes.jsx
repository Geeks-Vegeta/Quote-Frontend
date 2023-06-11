import React, { useState } from "react";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { MdFormatQuote} from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddQuotes=()=>{
    const animatedComponents = makeAnimated();
    const [quote, setQuote]=useState("");
    const [tags, setTags]=useState([]);
    const navigate = useNavigate();



    const options = [
        { value: 'life', label: 'life' },
        { value: 'love', label: 'love' },
        { value: 'motivation', label: 'motivation' }
      ]

    const addquote=async()=>{

        let valuetags=tags.map((x)=> x.value);
        let token=localStorage.getItem('isauthtoken');


        try {

            let x= await axios.post("https://quoteapi-q48j.onrender.com/quote/create",{
                "quote":quote,
                "tags":valuetags

            },{
            headers: {
                Authorization: 'Bearer ' + token //the token is a variable which holds the token
              }})
            navigate("/profile");
            
        } catch (error) {
            console.log(error);
        }
    }

    

    return (
        <>
        <div className="top-heading">
            <h4>Add Quote ❝❞</h4>
        </div>
        <div className="addquote-heading">
            <h4 className="my-4 text-center">Add Your Quote ❝❞</h4>
            <div className="quote-text-area text-center">
                <textarea value={quote} onChange={(e)=>setQuote(e.target.value)} className="mx-auto p-2 text-center" placeholder="Write your Quote here" name="quote" id="" cols="40" rows="6"></textarea>
            </div> 

            {quote.length>=10?(
                <>
                    <div className="tags my-4 w-75 mx-auto">
                        <Select options={options}
                        closeMenuOnSelect={false}
                        // isDisabled={true}
                        placeholder="select tags"
                        defaultValue={tags}
                        onChange={setTags}
                        components={animatedComponents}
                        isMulti
                        />
                    </div>
                </>
            ):(
                <>
                </>
            )}
            
        </div>
        {tags.length!==0?(
            <>
                <div className="text-center my-4">
                    <button onClick={addquote} className="create"> <MdFormatQuote/> Create </button>
                </div>
            </>
        ):(
            <>
            </>
        )}
       
        </>
    )

}

export default AddQuotes;