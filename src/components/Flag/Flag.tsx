import React from 'react';
import '../Flag/Flag.css'

type FlagProps ={flagUrl: string}

export default function Flag({flagUrl}: FlagProps) {
    return <img className = "flag" src = {flagUrl} alt="flag" />;
    
}