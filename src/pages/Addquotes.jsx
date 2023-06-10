import React, { useState } from "react";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { MdFormatQuote} from "react-icons/md";


const AddQuotes=()=>{
    const animatedComponents = makeAnimated();
    const [quote, setQuote]=useState("");
    const [tags, setTags]=useState(null);



    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    return (
        <>
        <div className="addquote-heading">
            <h4 className="my-4 text-center">Add Your Quote ❝❞</h4>
            <div className="quote-text-area text-center">
                <textarea value={quote} onChange={(e)=>setQuote(e.target.value)} className="mx-auto p-2 text-center" placeholder="Enter you quote here" name="quote" id="" cols="50" rows="6"></textarea>
            </div> 

            {quote.length!==0?(
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
        <div className="text-center my-4">
            <button onClick={()=>alert(tags)} className="create"> <MdFormatQuote/> Create </button>
        </div>
        </>
    )

}

export default AddQuotes;