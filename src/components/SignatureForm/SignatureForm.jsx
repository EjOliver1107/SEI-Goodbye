import './SignatureForm.css'
import React, {useState} from 'react';
import * as sigAPI from '../../utilities/signature-api';
export default function SignatureForm({profile}) {
    const [sigformData, setsigFormData] = useState({
        content: ''
    })
    async function handleSigChange(evt) {
        setsigFormData({...sigformData, [evt.target.name] : evt.target.value})
    }
    async function handleSigSubmit(evt) {
        evt.preventDefault()
        const signature = await sigAPI.createSignature(sigformData, profile.user)
    }
    return (
        <>
        <form onSubmit={handleSigSubmit}>
            <div>
                <label >Tell them what you wanna say!</label>
                <input type="text" name="content" value={sigformData.content} onChange= {handleSigChange} placeholder='HAGS'/>
                <input type="submit"  />
            </div>

        </form>
        </>
    );

}